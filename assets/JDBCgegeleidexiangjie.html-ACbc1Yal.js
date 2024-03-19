import{_ as e,o as t,c as p,a as l,b as n,d as a,f as s}from"./app-GYMnAgnr.js";const o="/viteblog/assets/284-yj7sPc0x.png",i={},c=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,"Java DateBase Connectivity （Java数据库连接， Java语言操作数据库）"),n("p",null,[a("JDBC "),n("strong",null,"本质"),a("是SUN公司定义的一套操作所有关系型数据库的规则，即 "),n("strong",null,"接口"),a("。各个数据库厂商去实现这套接口，提供数据库驱动jar包。我们可以使用这套接口编程，但真正执行的代码是 "),n("strong",null,"驱动jar包中的实现类"),a("。")])],-1),r=s('<h2 id="一、快速入门" tabindex="-1"><a class="header-anchor" href="#一、快速入门" aria-hidden="true">#</a> 一、快速入门</h2><h3 id="我们为什么要使用jdbc" tabindex="-1"><a class="header-anchor" href="#我们为什么要使用jdbc" aria-hidden="true">#</a> 我们为什么要使用JDBC</h3><p><img src="'+o+`" alt="284"></p><h3 id="使用jdbc开发要使用的包" tabindex="-1"><a class="header-anchor" href="#使用jdbc开发要使用的包" aria-hidden="true">#</a> 使用JDBC开发要使用的包</h3><ul><li><p><strong>java.sql</strong>：所有与 JDBC 访问数据库相关的接口和类</p></li><li><p><strong>javax.sql</strong>：数据库扩展包，提供数据库额外的功能。如：连接池</p></li><li><p><strong>数据库的驱动</strong>：由各大数据库厂商提供，需要额外去下载，是<strong>实现 JDBC 接口的一些类</strong></p></li></ul><h3 id="具体步骤" tabindex="-1"><a class="header-anchor" href="#具体步骤" aria-hidden="true">#</a> 具体步骤</h3><ol><li><p>导入驱动jar包 <code>mysql-connector-java-5.1.37-bin.jar</code></p><ol><li><p>复制 <code>mysql-connector-java-5.1.37-bin.jar</code> 文件到项目的 <code>libs</code> 目录下</p></li><li><p>项目文件夹 右键 --&gt; <code>Add As Library</code></p></li></ol></li><li><p>注册驱动（让程序知道导入的是哪一个版本的jar包），<code>Class.forName</code>（数据库驱动实现类）</p></li><li><p>获取数据库连接对象 <strong>Connection</strong> （本地java代码和数据库之间的一个桥梁对象）</p></li><li><p>定义 sql 语句</p></li><li><p>获取执行 sql 语句的对象 <strong>Statement</strong> （因为 <strong>Connection</strong> 不能直接执行）</p></li><li><p>执行 sql，接受返回结果</p></li><li><p>处理结果</p></li><li><p>释放资源（避免内存泄露）</p></li></ol><h3 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DriverManager</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Statement</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * JDBC快速入门
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JdbcDemo1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>

        <span class="token comment">//1. 导入所使用的数据库相对应的驱动jar包</span>
        <span class="token comment">//2. 注册驱动</span>
        <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	        <span class="token comment">/*
	        	Class.forName()
					装载一个类并且对其进行实例化的操作，
					装载过程中使用到的类加载器是当前类。
			*/</span>
        <span class="token comment">//3. 获取数据库连接对象</span>
        <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql://localhost:3306/db3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	
			<span class="token comment">/*
				DriverManager：驱动管理对象
				Connection：数据库连接对象
				Java DriverManager.getConnection() 方法用于获得试图建立到指定数据库 URL 的连接。 里面的参数为：数据库的url、用户名、密码
			*/</span>
        <span class="token comment">//4. 定义sql语句</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;update account set balance = 500 where id = 1&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//5. 获取一个可执行的sql的对象 Statement</span>
        <span class="token class-name">Statement</span> stmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	        <span class="token comment">/*
				Statement：执行sql的对象
			*/</span>
        <span class="token comment">//6. execute执行sql语句</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> stmt<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//7. 处理结果</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//8. 按顺序释放资源</span>
        stmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、jdbc-各个类的功能详解" tabindex="-1"><a class="header-anchor" href="#二、jdbc-各个类的功能详解" aria-hidden="true">#</a> 二、JDBC 各个类的功能详解</h2><h3 id="drivermanager-驱动管理对象" tabindex="-1"><a class="header-anchor" href="#drivermanager-驱动管理对象" aria-hidden="true">#</a> DriverManager：驱动管理对象</h3><h4 id="注册驱动-告诉程序该使用哪一个数据库驱动-jar" tabindex="-1"><a class="header-anchor" href="#注册驱动-告诉程序该使用哪一个数据库驱动-jar" aria-hidden="true">#</a> <strong>注册驱动</strong>：告诉程序该使用哪一个数据库驱动 jar</h4><p>驱动包里实现注册驱动的静态方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">registerDriver</span><span class="token punctuation">(</span><span class="token class-name">Driver</span> driver<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//注册与给定的驱动程序 DriverManager 。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>而写代码时我们使用的是：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>有一些类在加载进内存的时候会自动执行类中的某些方法。</strong></p><p>通过查看源码我们可以发现：在 <code>com.mysql.jdbc.Driver</code> 类中存在<strong>静态代码块</strong>，此代码块实现了<strong>DriverManager</strong> 中的方法，我们使用的写法只是更加简单而已：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span>DriverManager</span><span class="token punctuation">.</span><span class="token function">registerDriver</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Driver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> <span class="token class-name">E</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;Can&#39;t register driver!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),d=n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"WARNING"),n("p",null,[a("MySQL 5.* 版本开始，"),n("strong",null,"注册驱动"),a("的步骤可以省去不写，因为驱动包会自动帮我们注册驱动。")]),n("p",null,"当然你写了也没事，注意路径别写错就行。")],-1),u=s(`<h4 id="获取数据库连接" tabindex="-1"><a class="header-anchor" href="#获取数据库连接" aria-hidden="true">#</a> <strong>获取数据库连接</strong></h4><p>驱动包里的静态方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token class-name">Commection</span> <span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token class-name">String</span> url<span class="token punctuation">,</span> <span class="token class-name">String</span> user<span class="token punctuation">,</span> <span class="token class-name">String</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>三个参数：</p><ul><li><p><strong>url</strong>：指定连接的路径</p><ul><li>语法：<strong>jdbc:mysql://ip地址(域名):端口号/数据库名称</strong></li><li>例子：jdbc:mysql://localhost : 3306/db3</li><li>细节：如果连接的是本机mysql服务器，并且mysql服务默认端口是3306，则ip地址和端口号可以省略不写，即url可以简写为：jdbc:mysql:///数据库名称</li></ul></li><li><p><strong>user</strong>：用户名</p></li><li><p><strong>password</strong>：密码</p></li></ul><h3 id="connection-数据库连接对象" tabindex="-1"><a class="header-anchor" href="#connection-数据库连接对象" aria-hidden="true">#</a> Connection：数据库连接对象</h3><h4 id="获取执行-sql-的对象" tabindex="-1"><a class="header-anchor" href="#获取执行-sql-的对象" aria-hidden="true">#</a> 获取执行 sql 的对象</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Statement</span> <span class="token function">createStatement</span><span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    
<span class="token class-name">PrepareStatement</span> <span class="token function">prepareStatement</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="管理事务" tabindex="-1"><a class="header-anchor" href="#管理事务" aria-hidden="true">#</a> 管理事务</h4><ul><li><p>开启事务：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">setAutoCommit</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> autoCommit<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token comment">//调用该方法设置参数为false，即开启事务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>提交事务：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">commit</span><span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>回滚事物：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">rollback</span><span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="statement-执行sql的对象" tabindex="-1"><a class="header-anchor" href="#statement-执行sql的对象" aria-hidden="true">#</a> Statement：执行sql的对象</h3><h4 id="执行-sql" tabindex="-1"><a class="header-anchor" href="#执行-sql" aria-hidden="true">#</a> 执行 sql</h4><ul><li><p>可以执行任意的 sql 的方法。但使用并不多，了解即可：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">boolean</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>可以执行DML（insert、update、dalete）语句、DDL（create、alter、drop）语句的方法。</p><p>其返回值代表的是影响的行数，可以通过这个影响的行数来判断DML语句是否执行成功 ，返回值 &gt;0 则执行成功，反之，则执行失败：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> <span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><ul><li><p>可以执行DQL语句（select）语句的方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ResultSet</span> <span class="token function">executQuery</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="resultset-结果集对象-封装查询结果" tabindex="-1"><a class="header-anchor" href="#resultset-结果集对象-封装查询结果" aria-hidden="true">#</a> ResultSet：结果集对象，封装查询结果</h3><ul><li><p>游标向下移动一行，判断当前行是否是最后一行末尾（是否有数据），如果是，则返回false，如果不是则返回true：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">boolean</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>获取数据：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token function">getXxx</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Xxx：代表数据类型 如：int getInt()，String getString()</li><li>参数： <ol><li><strong>int</strong>: 代表表中列的编号，从 <strong>1</strong> 开始 如：getString(1)</li><li><strong>String</strong>: 代表列名称， 如：getDouble(&quot;balance&quot;)</li></ol></li></ul></li><li><p>使用步骤：</p><ol><li>游标向下移动一行</li><li>判断是否有数据</li><li>获取数据</li></ol></li></ul><h3 id="preparedstatement-执行-sql-的对象" tabindex="-1"><a class="header-anchor" href="#preparedstatement-执行-sql-的对象" aria-hidden="true">#</a> PreparedStatement：执行 sql 的对象</h3><p><strong>PreparedStatement</strong> 是 <strong>Statement</strong>的子接口，但功能更加强大</p><h4 id="sql-注入的问题" tabindex="-1"><a class="header-anchor" href="#sql-注入的问题" aria-hidden="true">#</a> sql 注入的问题</h4><p>在拼接sql时，有一些sql特殊关键字参与字符串的拼接，会造成安全问题！</p><p>随便输入用户，输入密码：<code>a&#39; or &#39;a&#39; = &#39;a</code> 即可实现成功登录：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token keyword">user</span> <span class="token keyword">where</span> username <span class="token operator">=</span> <span class="token string">&#39;fhdsjkf&#39;</span> <span class="token operator">and</span> password <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">or</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">;</span> 
<span class="token comment">-- password将永远为true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解决-sql-注入的问题-使用-preparaedstatement-对象" tabindex="-1"><a class="header-anchor" href="#解决-sql-注入的问题-使用-preparaedstatement-对象" aria-hidden="true">#</a> 解决 sql 注入的问题：使用 PreparaedStatement 对象</h4><ol><li><p>预编译SQL：参数使用 <code>?</code> 作为占位符</p></li><li><p>步骤：</p></li><li><p>导入jar包 <code>mysql-connector-java-5.1.37-bin.jar</code></p></li><li><p>注册驱动</p></li><li><p>获取数据库连接对象 <code>Connection</code></p></li><li><p>定义sql：</p><p>注意：sql的参数使用 <code>?</code> 作为占位符。如：</p></li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token keyword">user</span> <span class="token keyword">where</span> username <span class="token operator">=</span> ? <span class="token operator">and</span> password <span class="token operator">=</span> ?<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li><p>获取执行sql语句的对象 <code>PreparedStatement Connection.prepareStatement(String sql)</code></p></li><li><p>给 <code>?</code> 赋值，需要两个参数：</p></li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token function">setXxx</span><span class="token punctuation">(</span>参数<span class="token number">1</span>，参数<span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数1：<code>?</code> 的位置编号，从1开始计数</p><p>参数2：<code>?</code> 的值</p><ol start="7"><li><p>执行sql，接受返回结果，不需要传递sql语句。</p></li><li><p>处理结果</p></li><li><p>释放资源</p></li></ol><p>一般我们都会使用 <code>PreparedStatement</code> 来完成增删改查的所有操作，因为这样可以<strong>防止SQL注入，而且效率更高</strong>。</p>`,31);function v(k,m){return t(),p("div",null,[c,l(" more "),r,d,u])}const h=e(i,[["render",v],["__file","JDBCgegeleidexiangjie.html.vue"]]);export{h as default};
