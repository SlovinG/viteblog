import{_ as a,r as e,o as l,c as p,a as o,e as t,w as i,d as c,f as s}from"./app-GYMnAgnr.js";const r="/viteblog/assets/206-7ByRCIGv.png",d="/viteblog/assets/207-0Z6VitSt.png",k="/viteblog/assets/464-PHBavD8W.png",u={},m=s('<h2 id="一、用户管理" tabindex="-1"><a class="header-anchor" href="#一、用户管理" aria-hidden="true">#</a> 一、用户管理</h2><h3 id="_1、使用-sqlyog-创建用户-并授予权限演示" tabindex="-1"><a class="header-anchor" href="#_1、使用-sqlyog-创建用户-并授予权限演示" aria-hidden="true">#</a> 1、使用 SQLyog 创建用户，并授予权限演示</h3><img src="'+r+`" style="zoom:67%;"><h3 id="_2、基本命令" tabindex="-1"><a class="header-anchor" href="#_2、基本命令" aria-hidden="true">#</a> 2、基本命令</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/* 用户和权限管理 */</span> <span class="token comment">------------------</span>
用户信息表：mysql<span class="token punctuation">.</span><span class="token keyword">user</span>

<span class="token comment">-- 刷新权限</span>
FLUSH <span class="token keyword">PRIVILEGES</span>

<span class="token comment">-- 增加用户 CREATE USER kuangshen IDENTIFIED BY &#39;123456&#39;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> 用户名 IDENTIFIED <span class="token keyword">BY</span> <span class="token punctuation">[</span>PASSWORD<span class="token punctuation">]</span> 密码<span class="token punctuation">(</span>字符串<span class="token punctuation">)</span>
  <span class="token operator">-</span> 必须拥有mysql数据库的全局<span class="token keyword">CREATE</span> <span class="token keyword">USER</span>权限，或拥有<span class="token keyword">INSERT</span>权限。
  <span class="token operator">-</span> 只能创建用户，不能赋予权限。
  <span class="token operator">-</span> 用户名，注意引号：如 <span class="token string">&#39;user_name&#39;</span><span class="token variable">@&#39;192.168.1.1&#39;</span>
  <span class="token operator">-</span> 密码也需引号，纯数字密码也要加引号
  <span class="token operator">-</span> 要在纯文本中指定密码，需忽略PASSWORD关键词。要把密码指定为由PASSWORD<span class="token punctuation">(</span><span class="token punctuation">)</span>函数返回的混编值，需包含关键字PASSWORD

<span class="token comment">-- 重命名用户 RENAME USER kuangshen TO kuangshen2</span>
<span class="token keyword">RENAME</span> <span class="token keyword">USER</span> old_user <span class="token keyword">TO</span> new_user

<span class="token comment">-- 设置密码</span>
<span class="token keyword">SET</span> PASSWORD <span class="token operator">=</span> PASSWORD<span class="token punctuation">(</span><span class="token string">&#39;密码&#39;</span><span class="token punctuation">)</span>    <span class="token comment">-- 为当前用户设置密码</span>
<span class="token keyword">SET</span> PASSWORD <span class="token keyword">FOR</span> 用户名 <span class="token operator">=</span> PASSWORD<span class="token punctuation">(</span><span class="token string">&#39;密码&#39;</span><span class="token punctuation">)</span>    <span class="token comment">-- 为指定用户设置密码</span>

<span class="token comment">-- 删除用户 DROP USER kuangshen2</span>
<span class="token keyword">DROP</span> <span class="token keyword">USER</span> 用户名

<span class="token comment">-- 分配权限/添加用户</span>
<span class="token keyword">GRANT</span> 权限列表 <span class="token keyword">ON</span> 表名 <span class="token keyword">TO</span> 用户名 <span class="token punctuation">[</span>IDENTIFIED <span class="token keyword">BY</span> <span class="token punctuation">[</span>PASSWORD<span class="token punctuation">]</span> <span class="token string">&#39;password&#39;</span><span class="token punctuation">]</span>
  <span class="token operator">-</span> <span class="token keyword">all</span> <span class="token keyword">privileges</span> 表示所有权限
  <span class="token operator">-</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> 表示所有库的所有表
  <span class="token operator">-</span> 库名<span class="token punctuation">.</span>表名 表示某库下面的某表

<span class="token comment">-- 查看权限   SHOW GRANTS FOR root@localhost;</span>
<span class="token keyword">SHOW</span> GRANTS <span class="token keyword">FOR</span> 用户名

<span class="token comment">-- 查看当前用户权限</span>
<span class="token keyword">SHOW</span> GRANTS<span class="token punctuation">;</span> 或 <span class="token keyword">SHOW</span> GRANTS <span class="token keyword">FOR</span> <span class="token keyword">CURRENT_USER</span><span class="token punctuation">;</span> 或 <span class="token keyword">SHOW</span> GRANTS <span class="token keyword">FOR</span> <span class="token keyword">CURRENT_USER</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 撤消权限</span>
<span class="token keyword">REVOKE</span> 权限列表 <span class="token keyword">ON</span> 表名 <span class="token keyword">FROM</span> 用户名
<span class="token keyword">REVOKE</span> <span class="token keyword">ALL</span> <span class="token keyword">PRIVILEGES</span><span class="token punctuation">,</span> <span class="token keyword">GRANT</span> <span class="token keyword">OPTION</span> <span class="token keyword">FROM</span> 用户名    <span class="token comment">-- 撤销所有权限</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、权限解释" tabindex="-1"><a class="header-anchor" href="#_3、权限解释" aria-hidden="true">#</a> 3、权限解释</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 权限列表</span>
<span class="token keyword">ALL</span> <span class="token punctuation">[</span><span class="token keyword">PRIVILEGES</span><span class="token punctuation">]</span>    <span class="token comment">-- 设置除GRANT OPTION之外的所有简单权限</span>
<span class="token keyword">ALTER</span>    <span class="token comment">-- 允许使用ALTER TABLE</span>
<span class="token keyword">ALTER</span> <span class="token keyword">ROUTINE</span>    <span class="token comment">-- 更改或取消已存储的子程序</span>
<span class="token keyword">CREATE</span>    <span class="token comment">-- 允许使用CREATE TABLE</span>
<span class="token keyword">CREATE</span> <span class="token keyword">ROUTINE</span>    <span class="token comment">-- 创建已存储的子程序</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TEMPORARY</span> <span class="token keyword">TABLES</span>        <span class="token comment">-- 允许使用CREATE TEMPORARY TABLE</span>
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span>      <span class="token comment">-- 允许使用CREATE USER, DROP USER, RENAME USER和REVOKE ALL PRIVILEGES</span>
<span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span>        <span class="token comment">-- 允许使用CREATE VIEW</span>
<span class="token keyword">DELETE</span>    <span class="token comment">-- 允许使用DELETE</span>
<span class="token keyword">DROP</span>    <span class="token comment">-- 允许使用DROP TABLE</span>
<span class="token keyword">EXECUTE</span>        <span class="token comment">-- 允许用户运行已存储的子程序</span>
<span class="token keyword">FILE</span>    <span class="token comment">-- 允许使用SELECT...INTO OUTFILE和LOAD DATA INFILE</span>
<span class="token keyword">INDEX</span>     <span class="token comment">-- 允许使用CREATE INDEX和DROP INDEX</span>
<span class="token keyword">INSERT</span>    <span class="token comment">-- 允许使用INSERT</span>
<span class="token keyword">LOCK</span> <span class="token keyword">TABLES</span>        <span class="token comment">-- 允许对您拥有SELECT权限的表使用LOCK TABLES</span>
PROCESS     <span class="token comment">-- 允许使用SHOW FULL PROCESSLIST</span>
<span class="token keyword">REFERENCES</span>    <span class="token comment">-- 未被实施</span>
RELOAD    <span class="token comment">-- 允许使用FLUSH</span>
<span class="token keyword">REPLICATION</span> CLIENT    <span class="token comment">-- 允许用户询问从属服务器或主服务器的地址</span>
<span class="token keyword">REPLICATION</span> SLAVE    <span class="token comment">-- 用于复制型从属服务器（从主服务器中读取二进制日志事件）</span>
<span class="token keyword">SELECT</span>    <span class="token comment">-- 允许使用SELECT</span>
<span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span>    <span class="token comment">-- 显示所有数据库</span>
<span class="token keyword">SHOW</span> <span class="token keyword">VIEW</span>    <span class="token comment">-- 允许使用SHOW CREATE VIEW</span>
<span class="token keyword">SHUTDOWN</span>    <span class="token comment">-- 允许使用mysqladmin shutdown</span>
SUPER    <span class="token comment">-- 允许使用CHANGE MASTER, KILL, PURGE MASTER LOGS和SET GLOBAL语句，mysqladmin debug命令；允许您连接（一次），即使已达到max_connections。</span>
<span class="token keyword">UPDATE</span>    <span class="token comment">-- 允许使用UPDATE</span>
<span class="token keyword">USAGE</span>    <span class="token comment">-- “无权限”的同义词</span>
<span class="token keyword">GRANT</span> <span class="token keyword">OPTION</span>    <span class="token comment">-- 允许授予权限</span>


<span class="token comment">/* 表维护 */</span>

<span class="token comment">-- 分析和存储表的关键字分布</span>
<span class="token keyword">ANALYZE</span> <span class="token punctuation">[</span><span class="token keyword">LOCAL</span> <span class="token operator">|</span> NO_WRITE_TO_BINLOG<span class="token punctuation">]</span> <span class="token keyword">TABLE</span> 表名 <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token comment">-- 检查一个或多个表是否有错误</span>
<span class="token keyword">CHECK</span> <span class="token keyword">TABLE</span> tbl_name <span class="token punctuation">[</span><span class="token punctuation">,</span> tbl_name<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">[</span><span class="token keyword">option</span><span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">option</span> <span class="token operator">=</span> {<span class="token keyword">QUICK</span> <span class="token operator">|</span> FAST <span class="token operator">|</span> MEDIUM <span class="token operator">|</span> <span class="token keyword">EXTENDED</span> <span class="token operator">|</span> CHANGED}
<span class="token comment">-- 整理数据文件的碎片</span>
<span class="token keyword">OPTIMIZE</span> <span class="token punctuation">[</span><span class="token keyword">LOCAL</span> <span class="token operator">|</span> NO_WRITE_TO_BINLOG<span class="token punctuation">]</span> <span class="token keyword">TABLE</span> tbl_name <span class="token punctuation">[</span><span class="token punctuation">,</span> tbl_name<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、mysql备份" tabindex="-1"><a class="header-anchor" href="#二、mysql备份" aria-hidden="true">#</a> 二、MySQL备份</h2><p>数据库备份的必要性：</p><ul><li>保证重要数据不丢失</li><li>数据转移</li></ul><p>MySQL 数据库的备份方法</p><ul><li>mysqldump 备份工具</li><li>数据库管理工具，如 SQLyog</li><li>直接拷贝数据库文件和相关配置文件</li></ul><p><strong>mysqldump 客户端</strong></p><p>作用 :</p><ul><li>转储数据库</li><li>搜集数据库进行备份</li><li>将数据转移到另一个SQL服务器，不一定是MySQL服务器</li></ul><img src="`+d+`" style="zoom:67%;"><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 导出</span>
<span class="token comment">#1. 导出一张表	mysqldump -u用户名 -p密码 库名 表名 &gt; 文件名(D:/a.sql)</span>
	mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p123456</span> school student <span class="token operator">&gt;</span>D:/a.sql
<span class="token comment">#2. 导出多张表	mysqldump -u用户名 -p密码 库名 表1 表2 表3 &gt; 文件名(D:/a.sql)</span>
	mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p123456</span> school student result <span class="token operator">&gt;</span>D:/a.sql
<span class="token comment">#3. 导出所有表	mysqldump -u用户名 -p密码 库名 &gt; 文件名(D:/a.sql)</span>
	mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p123456</span> school <span class="token operator">&gt;</span>D:/a.sql
<span class="token comment">#4. 导出一个库	mysqldump -u用户名 -p密码 -B 库名 &gt; 文件名(D:/a.sql)</span>
	mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p123456</span> <span class="token parameter variable">-B</span> school <span class="token operator">&gt;</span>D:/a.sql

<span class="token comment">#可以-w携带备份条件</span>

<span class="token comment"># 导入</span>
<span class="token comment">#1. 在登录mysql的情况下	source D:/a.sql</span>
	<span class="token builtin class-name">source</span> 备份文件
<span class="token comment">#2. 在不登录的情况下</span>
	mysql -u用户名 -p密码 库名 <span class="token operator">&lt;</span> 备份文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、规范化数据库设计" tabindex="-1"><a class="header-anchor" href="#三、规范化数据库设计" aria-hidden="true">#</a> 三、规范化数据库设计</h2><p>一般软件的研发步骤：</p><p><img src="`+k+'" alt=""></p><p>数据库设计的概念：</p><ul><li>数据库设计就是根据业务系统的具体需求，结合我们所选用的 DBMS，为这个业务系统构造出最优的数据存储模型。</li><li>建立数据库中的 <strong>表结构</strong> 以及 <strong>表与表之间的关联关系</strong> 的过程。</li><li>明确需要有哪些表？表里需要有哪些字段？表和表之间有什么关系？</li></ul><h3 id="_1、什么时候需要数据库设计" tabindex="-1"><a class="header-anchor" href="#_1、什么时候需要数据库设计" aria-hidden="true">#</a> 1、什么时候需要数据库设计</h3>',23),v=s('<p><strong>糟糕的数据库设计 :</strong></p><ul><li>数据冗余，存储空间浪费</li><li>数据更新和插入的异常</li><li>程序性能差</li></ul><p><strong>良好的数据库设计 :</strong></p><ul><li>节省数据的存储空间</li><li>能够保证数据的完整性</li><li>方便进行数据库应用系统的开发</li></ul><h3 id="_2、如何进行数据库设计" tabindex="-1"><a class="header-anchor" href="#_2、如何进行数据库设计" aria-hidden="true">#</a> 2、如何进行数据库设计</h3><p><strong>软件项目开发周期中数据库的设计 :</strong></p><ul><li>需求分析阶段：分析客户的业务和数据处理需求</li><li>概要设计阶段：设计数据库的 <strong>E-R(Entity/Relation)模型图</strong>， 确认需求信息的正确和完整</li></ul><p><strong>设计数据库的步骤</strong>：</p><ul><li><p>收集信息：与该系统有关人员进行交流，座谈，充分了解用户需求，理解数据库需要完成的任务.</p></li><li><p>标识实体 [Entity]：标识数据库要管理的关键对象或实体，实体一般是名词</p></li><li><p>标识每个实体需要存储的详细信息 [Attribute]</p></li><li><p>标识实体之间的关系 [Relationship]</p></li></ul><h2 id="四、三大范式" tabindex="-1"><a class="header-anchor" href="#四、三大范式" aria-hidden="true">#</a> 四、三大范式</h2><h3 id="_1、为什么需要数据规范化" tabindex="-1"><a class="header-anchor" href="#_1、为什么需要数据规范化" aria-hidden="true">#</a> 1、为什么需要数据规范化</h3><p>不合规范的表设计会导致的问题：</p><ul><li><p>信息重复</p></li><li><p>更新异常</p></li><li><p>插入异常：无法正确表示信息</p></li><li><p>删除异常：丢失有效信息</p></li></ul><h3 id="_2、三大范式" tabindex="-1"><a class="header-anchor" href="#_2、三大范式" aria-hidden="true">#</a> 2、三大范式</h3><p><strong>第一范式 (1st NF)</strong></p><ul><li>第一范式的目标是确保每列的原子性，如果每列都是不可再分的最小数据单元，则满足第一范式</li></ul><p><strong>第二范式 (2nd NF)</strong></p><ul><li>第二范式（2NF）是在第一范式（1NF）的基础上建立起来的，即满足第二范式（2NF）必须先满足第一范式（1NF）</li><li>第二范式要求每个表只描述一件事情</li></ul><p><strong>第三范式 (3rd NF)</strong></p><ul><li>如果一个关系满足第二范式，并且除了主键以外的其他列都不传递依赖于主键列，则满足第三范式</li><li>第三范式需要确保数据表中的每一列数据都和主键直接相关，而不能间接相关</li></ul><h3 id="_3、规范化和性能的关系" tabindex="-1"><a class="header-anchor" href="#_3、规范化和性能的关系" aria-hidden="true">#</a> 3、规范化和性能的关系</h3><ul><li>为满足某种商业目标，数据库性能比规范化数据库更重要</li><li>在数据规范化的同时，要综合考虑数据库的性能</li><li>通过在给定的表中添加额外的字段，以大量减少需要从中搜索信息所需的时间</li><li>通过在给定的表中插入计算列，以方便查询</li></ul>',22);function E(b,y){const n=e("font");return l(),p("div",null,[o(" more "),m,t(n,{color:"red"},{default:i(()=>[c("**当数据库比较复杂时，我们需要设计数据库。**")]),_:1}),v])}const R=a(u,[["render",E],["__file","quanxianjiruheshejishujuku.html.vue"]]);export{R as default};
