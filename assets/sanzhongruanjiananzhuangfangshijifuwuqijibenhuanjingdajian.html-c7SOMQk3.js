import{_ as e,r as i,o as c,c as t,a as l,b as n,d as s,e as o,f as p}from"./app-GYMnAgnr.js";const d={},r=n("h2",{id:"一、jdk-安装-rpm-安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一、jdk-安装-rpm-安装","aria-hidden":"true"},"#"),s(" 一、jdk 安装（rpm 安装）")],-1),u={href:"http://www.oracle.com/technetwork/java/javase/downloads/index.html",target:"_blank",rel:"noopener noreferrer"},m=p(`<p>2、如果有安装 openjdk 则卸载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@kuangshen ~<span class="token punctuation">]</span><span class="token comment"># java -version</span>
<span class="token function">java</span> version <span class="token string">&quot;1.8.0_121&quot;</span>
Java<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> SE Runtime Environment <span class="token punctuation">(</span>build <span class="token number">1.8</span>.0_121-b13<span class="token punctuation">)</span>
Java HotSpot<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">25.121</span>-b13, mixed mode<span class="token punctuation">)</span>
<span class="token comment"># 检查</span>
<span class="token punctuation">[</span>root@kuangshen ~<span class="token punctuation">]</span><span class="token comment"># rpm -qa|grep jdk</span>
jdk1.8.0_121-1.8.0_121-fcs.x86_64
<span class="token comment"># 卸载 -e --nodeps 强制删除</span>
<span class="token punctuation">[</span>root@kuangshen ~<span class="token punctuation">]</span><span class="token comment"># rpm -e --nodeps jdk1.8.0_121-1.8.0_121-fcs.x86_64</span>
<span class="token punctuation">[</span>root@kuangshen ~<span class="token punctuation">]</span><span class="token comment"># java -version</span>
-bash: /usr/bin/java: No such <span class="token function">file</span> or directory  <span class="token comment"># OK</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、安装JDK</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装java rpm</span>
<span class="token punctuation">[</span>root@kuangshen kuangshen<span class="token punctuation">]</span><span class="token comment"># rpm -ivh jdk-8u221-linux-x64.rpm</span>

<span class="token comment"># 安装完成后配置环境变量 文件：/etc/profile，在文件末尾加入如下配置</span>
<span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/java/jdk1.8.0_221-amd64
<span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>%JAVA_HOME%/lib:%JAVA_HOME%/jre/lib
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token variable">$JAVA_HOME</span>/jre/bin
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span> CLASSPATH JAVA_HOME
<span class="token comment"># 保存退出</span>

<span class="token comment"># 重新加载 profile 文件，让新增的环境变量生效！</span>
<span class="token builtin class-name">source</span> /etc/profile

<span class="token comment"># 测试 java -version</span>
<span class="token punctuation">[</span>root@kuangshen java<span class="token punctuation">]</span><span class="token comment"># java -version</span>
<span class="token function">java</span> version <span class="token string">&quot;1.8.0_221&quot;</span>
Java<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> SE Runtime Environment <span class="token punctuation">(</span>build <span class="token number">1.8</span>.0_221-b11<span class="token punctuation">)</span>
Java HotSpot<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">25.221</span>-b11, mixed mode<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、tomcat-安装-解压缩安装" tabindex="-1"><a class="header-anchor" href="#二、tomcat-安装-解压缩安装" aria-hidden="true">#</a> 二、Tomcat 安装（解压缩安装）</h2><p>1、安装好了 Java 环境后我们可以测试下 Tomcat，准备好 Tomcat 的安装包，即二进制发布包。</p><p>2、将文件移动到 /usr/tomcat/下，并解压！</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@kuangshen kuangshen<span class="token punctuation">]</span><span class="token comment"># mv apache-tomcat-9.0.22.tar.gz /usr</span>
<span class="token punctuation">[</span>root@kuangshen kuangshen<span class="token punctuation">]</span><span class="token comment"># cd /usr</span>
<span class="token punctuation">[</span>root@kuangshen usr<span class="token punctuation">]</span><span class="token comment"># ls</span>
apache-tomcat-9.0.22.tar.gz
<span class="token punctuation">[</span>root@kuangshen usr<span class="token punctuation">]</span><span class="token comment"># tar -zxvf apache-tomcat-9.0.22.tar.gz   # 解压</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、运行 Tomcat，进入bin目录，和我们以前在 Windows 下看的都是一样的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 执行：startup.sh --&gt;启动tomcat</span>
<span class="token comment"># 执行：shutdown.sh --&gt;关闭tomcat</span>
./startup.sh
./shutdown.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、确保 Linux 的防火墙端口是开启的，如果是阿里云，需要保证阿里云的安全组策略是开放的！</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看 firewall 服务状态</span>
systemctl status firewalld

<span class="token comment"># 开启、重启、关闭、firewalld.service服务</span>
<span class="token comment"># 开启</span>
<span class="token function">service</span> firewalld start
<span class="token comment"># 重启</span>
<span class="token function">service</span> firewalld restart
<span class="token comment"># 关闭</span>
<span class="token function">service</span> firewalld stop

<span class="token comment"># 查看防火墙规则</span>
firewall-cmd --list-all    <span class="token comment"># 查看全部信息</span>
firewall-cmd --list-ports  <span class="token comment"># 只看端口信息</span>

<span class="token comment"># 开启端口</span>
开端口命令：firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp <span class="token parameter variable">--permanent</span>
重启防火墙：systemctl restart firewalld.service

命令含义：
<span class="token parameter variable">--zone</span> <span class="token comment">#作用域</span>
--add-port<span class="token operator">=</span><span class="token number">80</span>/tcp  <span class="token comment">#添加端口，格式为：端口/通讯协议</span>
<span class="token parameter variable">--permanent</span>   <span class="token comment">#永久生效，没有此参数重启后失效</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、安装-docker-yum安装" tabindex="-1"><a class="header-anchor" href="#三、安装-docker-yum安装" aria-hidden="true">#</a> 三、安装 Docker（yum安装）</h2><p>基于 CentOS 7 安装</p><p>1、官网安装参考手册：https://docs.docker.com/install/linux/docker-ce/centos/</p><p>2、确定你是CentOS7及以上版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 Desktop<span class="token punctuation">]</span><span class="token comment"># cat /etc/redhat-release</span>
CentOS Linux release <span class="token number">7.2</span>.1511 <span class="token punctuation">(</span>Core<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3、yum安装gcc相关（需要确保 虚拟机可以上外网 ）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc-c++
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>4、卸载旧版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> remove <span class="token function">docker</span> docker-common docker-selinux docker-engine
<span class="token comment"># 官网版本</span>
yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
          docker-client <span class="token punctuation">\\</span>
          docker-client-latest <span class="token punctuation">\\</span>
          docker-common <span class="token punctuation">\\</span>
          docker-latest <span class="token punctuation">\\</span>
          docker-latest-logrotate <span class="token punctuation">\\</span>
          docker-logrotate <span class="token punctuation">\\</span>
          docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、安装需要的软件包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6、设置stable镜像仓库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 错误</span>
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
<span class="token comment">## 报错</span>
<span class="token punctuation">[</span>Errno <span class="token number">14</span><span class="token punctuation">]</span> <span class="token function">curl</span><span class="token comment">#35 - TCP connection reset by peer</span>
<span class="token punctuation">[</span>Errno <span class="token number">12</span><span class="token punctuation">]</span> <span class="token function">curl</span><span class="token comment">#35 - Timeout</span>

<span class="token comment"># 正确推荐使用国内的</span>
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7、更新yum软件包索引</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum makecache fast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>8、安装Docker CE</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>9、启动docker</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>10、测试</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> version

<span class="token function">docker</span> run hello-world

<span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33);function v(k,b){const a=i("ExternalLinkIcon");return c(),t("div",null,[l(" more "),r,n("p",null,[s("1、rpm 下载地址 "),n("a",u,[s("http://www.oracle.com/technetwork/java/javase/downloads/index.html"),o(a)])]),m])}const g=e(d,[["render",v],["__file","sanzhongruanjiananzhuangfangshijifuwuqijibenhuanjingdajian.html.vue"]]);export{g as default};
