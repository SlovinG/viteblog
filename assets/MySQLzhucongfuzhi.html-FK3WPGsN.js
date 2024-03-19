import{_ as e,o as s,c as a,a as n,f as l}from"./app-GYMnAgnr.js";const i="/viteblog/assets/592-ZrGLx9EK.png",r="/viteblog/assets/593-xSudEiVX.png",t={},o=l('<h2 id="主从复制的简介" tabindex="-1"><a class="header-anchor" href="#主从复制的简介" aria-hidden="true">#</a> 主从复制的简介</h2><p>在实际的生产中，为了解决 MySQL 的单点故障问题，以及提高 MySQL 的整体服务性能，一般都会采用 <strong>主从复制</strong>。</p><p>比如：在复杂的业务系统中，有一句 sql 执行后导致了锁表，并且这条 sql 的的执行时间有比较长，那么此 sql 执行的期间会导致部分服务不可用，这样就会严重影响到用户的体验。</p><p>主从复制过程中，服务器一般分为 **主库（master）**和 <strong>从库（slave）</strong>，常见的场景下，<strong>主库负责写，而从库负责读</strong>。</p><p>读写分离的做法能够实现整体服务性能的提高，即使写操作时间比较长，也不影响读操作的进行。</p><h2 id="主从复制的原理" tabindex="-1"><a class="header-anchor" href="#主从复制的原理" aria-hidden="true">#</a> 主从复制的原理</h2><p>MySQL 的主从复制的过程是一个 <strong>异步</strong> 的过程，底层是基于 MySQL 数据库自带的 <strong>二进制日志（binary log）</strong> 功能。</p><blockquote><p>二进制日志（bin-log）记录了所有的 DDL（数据定义语言）语句和 DML（数据操纵语言）语句，但是不包括数据查询语句。</p><p>此日志对于灾难时的数据恢复起着极其重要的作用，MySQL的主从复制， 就是通过 bin-log 实现的。</p><p>默认MySQL是未开启该日志的。</p></blockquote><p>一台或多台 MySQL 数据库（slave，即从库）从另一台 MySQL 数据库（master，即主库）进行日志的复制，然后解析日志，并应用到自身，最终实现从库的数据和主库的数据保持一致。</p><p>MySQL 主从复制是 MySQL 数据库底层自带的功能，所以无需借助第三方工具就可实现。</p><img src="'+i+`" alt="图片" style="zoom:80%;"><p>MySQL 的主从复制过程中，主要有 3 个线程：<strong>master（binlog dump thread）</strong>、<strong>slave（I/O thread 、SQL thread）</strong>，其中 Master 为 1 条线程，Slave 为 2 条线程。</p><p>**master（binlog dump thread）**主要负责 Master 库中有数据更新的时候，会按照 <code>binary log</code> 格式，将更新的事件类型写入到主库的 <code>binary log</code> 文件中。</p><p>并且，Master 会创建 <code>log dump</code> 线程通知 Slave 主库中存在数据更新，这就是为什么主库的 <code>binary log</code> 日志一定要开启的原因。</p><p><code>I/O thread</code> 线程在 Slave 中创建，该线程用于请求 Master，Master 会返回 <code>binary log</code> 的名称以及当前数据更新的位置、 <code>binary log</code> 文件位置的副本。</p><p>然后，将 <code>binary log</code> 保存在 <strong>relay log（中继日志）</strong> 中，中继日志也是记录数据更新的信息。</p><p>SQL 线程也是在 Slave 中创建的，当 Slave 检测到中继日志有更新，就会将更新的内容同步到 Slave 数据库中，这样就保证了主从的数据的同步。</p><p>以上就是主从复制的过程，当然，主从复制的过程有不同的策略方式进行数据的同步，主要包含以下几种：</p><ul><li><strong>同步策略</strong>：Master 会等待所有的 Slave 都回应后才会提交，这个主从的同步的性能会严重的影响。</li><li><strong>半同步策略</strong>：Master 至少会等待一个 Slave 回应后提交。</li><li><strong>异步策略</strong>：Master 不用等待 Slave 回应就可以提交。</li><li><strong>延迟策略</strong>：Slave 要落后于 Master 指定的时间。</li></ul><p>对于不同的业务需求，有不同的策略方案，但是一般都会采用 <strong>最终一致性</strong>，不会要求 <strong>强一致性</strong>，毕竟强一致性会严重影响性能。</p><p><strong>最终一致性</strong>：</p><ul><li>不保证在任意时刻任意节点上的同一份数据都是相同的，但是随着时间的迁移，不同节点上的同一份数据总是在向趋同的方向变化</li><li>最终两个字用得很微妙，因为从写入主库到反映至从库之间的延迟，可能仅仅是几分之一秒，也可能是几个小时</li></ul><h2 id="主从搭建" tabindex="-1"><a class="header-anchor" href="#主从搭建" aria-hidden="true">#</a> 主从搭建</h2><h3 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h3><p>提前准备两台服务器，并且在服务器中安装MySQL，服务器的信息如下：</p><table><thead><tr><th>数据库</th><th>IP</th><th>数据库版本</th></tr></thead><tbody><tr><td>Master</td><td>192.168.200.200</td><td>5.7.25</td></tr><tr><td>Slave</td><td>192.168.200.201</td><td>5.7.25</td></tr></tbody></table><p><strong>并在两台服务器上做如下准备工作：</strong></p><ol><li><p>防火墙开放 3306 端口号</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 防火墙开放3306端口号</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">3306</span>/tcp <span class="token parameter variable">--permanent</span>
<span class="token comment"># 查看防火墙开放端口列表</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --list-ports 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>将两台数据库服务器上的 MySQL 服务启动起来</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start mysqld 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="主库配置" tabindex="-1"><a class="header-anchor" href="#主库配置" aria-hidden="true">#</a> 主库配置</h3><ol><li><p>修改 MySQL 数据库的配置文件 <code>/etc/my.cnf</code></p><p>在文件内容的最下面，增加如下配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置编码为utf8</span>
<span class="token assign-left variable">character_set_server</span><span class="token operator">=</span>utf8mb4
<span class="token assign-left variable">init_connect</span><span class="token operator">=</span><span class="token string">&#39;SET NAMES utf8mb4&#39;</span>

<span class="token comment"># 配置要给Slave同步的数据库</span>
binlog-do-db<span class="token operator">=</span>test
<span class="token comment"># 不用给Slave同步的数据库，一般是Mysql自带的数据库就不用给Slave同步了</span>
binlog-ignore-db<span class="token operator">=</span>mysql
binlog-ignore-db<span class="token operator">=</span>information_schema
binlog-ignore-db<span class="token operator">=</span>performance_schema
binlog-ignore-db<span class="token operator">=</span>sys
<span class="token comment"># 自动清理30天前的log文件</span>
<span class="token assign-left variable">expire_logs_days</span><span class="token operator">=</span><span class="token number">30</span>
<span class="token comment"># [必须]启用二进制日志</span>
log-bin<span class="token operator">=</span>mysql-bin
<span class="token comment"># [必须]Master的id，这个要唯一，唯一是值，在主从中唯一</span>
server-id<span class="token operator">=</span><span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重启 MySQL 服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>创建 <strong>数据同步</strong> 的用户并授权</p><p>登录 MySQL，并执行如下指令，创建用户并授权：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>GRANT REPLICATION SLAVE ON *.* to &#39;xiaoming&#39; @&#39;%&#39; identified by &#39;Root@123456&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这句 SQL 的作用是创建一个用户 <code>xiaoming</code>，密码为 <code>Root@123456</code> ，并且给 xiaoming 用户授予 <code>REPLICATION SLAVE</code> 权限。</p><p>常用于建立复制时所需要用到的用户权限，也就是 Slave 必须被 Master 授权为具有该权限的用户，才能通过该用户复制。</p><p>MySQL 密码复杂程度说明：MySQL 5.7 默认密码校验策略等级为 MEDIUM , 该等级要求密码组成为：数字、小写字母、大写字母 、特殊字符、长度至少8位。</p></li><li><p>登录 MySQL 数据库，查看 Master 的同步状态</p><p>执行下面 SQL，记录下结果中 <strong>File</strong> 和 <strong>Position</strong> 的值，后面配置 Slave 的时候要使用到这两个数据</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>show master status;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+r+`" alt="image-20210825120355600"></p><p>File 记录的是日志文件的名称，Position 是当前日志记录到的位置。</p><p><strong>上面 SQL 的作用是查看 Master 的状态，执行完此 SQL 后不要再执行任何操作</strong>，否则 File 和 Position 都会发生变化。</p></li></ol><h3 id="从库配置" tabindex="-1"><a class="header-anchor" href="#从库配置" aria-hidden="true">#</a> 从库配置</h3><ol><li><p>同样需要先修改 MySQL 数据库的配置文件 <code>/etc/my.cnf</code></p><p>在文件内容的最下面，增加如下配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># [必须]配置从服务器的id，这个要唯一，唯一是值，在主从中唯一</span>
server-id<span class="token operator">=</span><span class="token number">4</span>
<span class="token comment"># 加上以下参数可以避免更新不及时，避免SLAVE重启后导致的主从复制出错。</span>
<span class="token assign-left variable">read_only</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">master_info_repository</span><span class="token operator">=</span>TABLE
<span class="token assign-left variable">relay_log_info_repository</span><span class="token operator">=</span>TABLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重启 MySQL 服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>登录 MySQL 数据库，设置主库地址及同步位置</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>change master to master_host=&#39;192.168.200.200&#39;,master_user=&#39;xiaoming&#39;,master_password=&#39;Root@123456&#39;,master_log_file=&#39;mysql-bin.000001&#39;,master_log_pos=154;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数说明：</p><ul><li><strong>master_host</strong>：主库的 IP 地址</li><li><strong>master_user</strong>：访问主库进行主从复制的用户名（上面在主库创建的）</li><li><strong>master_password</strong>：访问主库进行主从复制的用户名对应的密码</li><li><strong>master_log_file</strong>：从哪个日志文件开始同步（上述查询 Master 状态中展示的有）</li><li><strong>master_log_pos</strong>：从指定日志文件的哪个位置开始同步（上述查询 Master 状态中展示的有）</li></ul></li><li><p>查看从数据库的状态</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>show slave status\\G;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过状态信息中的 <code>Slave_IO_running</code> 和 <code>Slave_SQL_running</code> 可以看出主从同步是否就绪，如果这两个参数的值全为 Yes，表示主从同步已经配置完成了。</p><p><code>Slave_IO_Running</code> 也就是 Slave 中的 IO 线程用于请求 Master，<code>Slave_SQL_Running</code> 是 SQL 线程，负责将中继日志中更新的内容同步到 Slave 数据库中。</p><p>有时候 <code>Slave_IO_Running</code> 会为 No，而 <code>Slave_SQL_Running</code> 为Yes，这时候需要检查一下原因。</p><p>首先重启一下 <code>Slave</code> 的MySQL服务：<code>systemctl restart mysqld</code>，然后执行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>stop slave<span class="token punctuation">;</span>
start slave<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就能够使 <code>Slave_IO_Running</code> 和 <code>Slave_SQL_Running</code> 显示都是 Yes 了。</p></li></ol><p><strong>MySQL 命令行技巧</strong>：</p><ul><li><code>\\G</code>：在 MySQL 的 SQL 语句后加上 <code>\\G</code>，表示将查询结果进行按列打印，可以使每个字段打印到单独的行。也就是将查到的数据结构旋转90度变成纵向，这样的显示效果更好，而且方便查询。</li></ul><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><p>主从复制的环境已经搭建好了，我们可以通过 Navicat 连接上两台 MySQL 服务器进行测试。</p><p>测试时，我们只需要在主库 Master 执行操作，查看从库 Slave 中是否将数据同步过去即可。</p><ol><li>在 Master 中创建数据库 itcast，刷新 Slave 查看是否可以同步过去</li><li>在 Master 的 itcast 数据库下创建 user 表, 刷新 Slave 查看是否可以同步过去</li><li>在 Master 的 user 表中插入一条数据，刷新 Slave 查看是否可以同步过去</li></ol><h2 id="主从面试题" tabindex="-1"><a class="header-anchor" href="#主从面试题" aria-hidden="true">#</a> 主从面试题</h2><p><strong>MySQL 主从有什么优点？为什么要选择主从？</strong></p><ul><li>高性能方面：主从复制通过水平扩展的方式，解决了原来单点故障的问题，并且原来的并发都集中到了一台 MySQL 服务器中，现在将单点负载分散到了多台机器上，实现读写分离，不会因为写操作过长锁表而导致读服务不能进行的问题，提高了服务器的整体性能。</li><li>可靠性方面：主从在对外提供服务的时候，若是主库挂了，会有通过主从切换，选择其中的一台 Slave 作为 Master；若是 Slave 挂了，还有其它的 Slave 提供读服务，提高了系统的可靠性和稳定性。</li></ul><p><strong>若是主从复制，达到了写性能的瓶颈，该怎么解决呢？</strong></p><ul><li>主从模式对于写少读多的场景确实非常大的优势，但是总会有写操作达到瓶颈的时候，导致性能提不上去。</li><li>这时候可以在设计上进行解决采用分库分表的形式，对于业务数据比较大的数据库可以采用分表，使得数据表的存储的数据量达到一个合理的状态。</li><li>也可以采用分库，按照业务进行划分，这样对于单点的写，就会分成多点的写，性能方面也就会大大提高。</li></ul><p><strong>主从复制的过程有数据延迟，导致 Slave 被读取到的数据并不是最新数据，怎么办？</strong></p><ul><li><p>主从复制有不同的复制策略，对于不同的场景的适应性也不同，对于数据的实时性要求很高，要求强一致性，可以采用同步复制策略，但是这样就会性能就会大打折扣。</p></li><li><p>若是主从复制采用异步复制，要求数据最终一致性，性能方面也会好很多。只能说，对于数据延迟的解决方案没有最好的方案，就看你的业务场景中哪种方案使比较适合的。</p></li></ul>`,45);function d(p,c){return s(),a("div",null,[n(" more "),o])}const m=e(t,[["render",d],["__file","MySQLzhucongfuzhi.html.vue"]]);export{m as default};