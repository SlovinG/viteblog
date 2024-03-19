import{_ as c,r as p,o as l,c as i,a as u,b as n,d as s,e as a,w as r,f as e}from"./app-GYMnAgnr.js";const k="/viteblog/assets/image-20230823173125576-SCci8BDK.png",d={},m=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"SpringData简介"),n("p",null,"对于数据访问层，无论是 SQL(关系型数据库) 还是 NOSQL(非关系型数据库)，Spring Boot 底层都是采用 Spring Data 的方式进行统一处理")],-1),v=n("h2",{id:"spring-data",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#spring-data","aria-hidden":"true"},"#"),s(" Spring Data")],-1),b=n("p",null,"Spring Boot 底层都是采用 Spring Data 的方式进行统一处理各种数据库，Spring Data 也是 Spring 中与 Spring Boot、Spring Cloud 等齐名的知名项目。",-1),g={href:"https://spring.io/projects/spring-data",target:"_blank",rel:"noopener noreferrer"},h=n("p",null,"数据库相关的启动器 ：可以参考官方文档：",-1),w={href:"https://docs.spring.io/spring-boot/docs/2.3.0.RELEASE/reference/html/using-spring-boot.html#using-boot-starter",target:"_blank",rel:"noopener noreferrer"},y=e('<h2 id="整合jdbc" tabindex="-1"><a class="header-anchor" href="#整合jdbc" aria-hidden="true">#</a> 整合JDBC</h2><h3 id="创建测试项目测试数据源" tabindex="-1"><a class="header-anchor" href="#创建测试项目测试数据源" aria-hidden="true">#</a> 创建测试项目测试数据源</h3><ol><li><p>新建一个项目：springboot-data-jdbc ; 引入相应的模块，基础模块：</p><p><img src="'+k+`" alt="image-20230823173125576"></p></li><li><p>项目建好之后，发现自动帮我们导入了如下的启动器：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-jdbc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>编写 yaml 配置文件连接数据库：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
    <span class="token comment">#?serverTimezone=UTC解决时区的报错</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/springboot<span class="token punctuation">?</span>serverTimezone=UTC<span class="token important">&amp;useUnicode=true&amp;characterEncoding=utf-</span><span class="token number">8</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置完这一些东西后，我们就可以直接去使用了，因为 SpringBoot 已经默认帮我们进行了自动配置；去测试类测试一下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">SpringbootDataJdbcApplicationTests</span> <span class="token punctuation">{</span>

    <span class="token comment">//DI注入数据源</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">DataSource</span> dataSource<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token comment">//看一下默认数据源</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获得连接</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//关闭连接</span>
        connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>结果：我们可以看到他默认给我们配置的数据源为 : class com.zaxxer.hikari.HikariDataSource ， 我们并没有手动配置。</p><p>我们来全局搜索一下，找到数据源的所有自动配置都在 ：DataSourceAutoConfiguration文件：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span><span class="token class-name">Hikari</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">Tomcat</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">Dbcp2</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">Generic</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">DataSourceJmxConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">PooledDataSourceConfiguration</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">PooledDataSourceConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里导入的类都在 DataSourceConfiguration 配置类下，可以看出 Spring Boot 2.2.5 默认使用HikariDataSource 数据源，而以前版本，如 Spring Boot 1.5 默认使用 org.apache.tomcat.jdbc.pool.DataSource 作为数据源；</p>`,7),f=e(`<p><strong>可以使用 spring.datasource.type 指定自定义的数据源类型，值为 要使用的连接池实现的完全限定名。</strong></p><p>关于数据源我们并不做介绍，有了数据库连接，显然就可以 CRUD 操作数据库了。但是我们需要先了解一个对象 JdbcTemplate</p><h3 id="jdbctemplate" tabindex="-1"><a class="header-anchor" href="#jdbctemplate" aria-hidden="true">#</a> JDBCTemplate</h3><p>1、有了数据源(com.zaxxer.hikari.HikariDataSource)，然后可以拿到数据库连接(java.sql.Connection)，有了连接，就可以使用原生的 JDBC 语句来操作数据库；</p><p>2、即使不使用第三方第数据库操作框架，如 MyBatis等，Spring 本身也对原生的 JDBC 做了轻量级的封装，即 JdbcTemplate。</p><p>3、数据库操作的所有 CRUD 方法都在 JdbcTemplate 中。</p><p>4、Spring Boot 不仅提供了默认的数据源，同时默认已经配置好了 JdbcTemplate 放在了容器中，程序员只需自己注入即可使用</p><p>5、JdbcTemplate 的自动配置是依赖 org.springframework.boot.autoconfigure.jdbc 包下的 JdbcTemplateConfiguration 类</p><p><strong>JdbcTemplate 主要提供以下几类方法：</strong></p><ul><li>execute方法：可以用于执行任何 SQL 语句，一般用于执行 DDL 语句；</li><li>update 方法及 batchUpdate 方法：update方法用于执行新增、修改、删除等语句；batchUpdate 方法用于执行批处理相关语句；</li><li>query 方法及 queryForXXX 方法：用于执行查询相关语句；</li><li>call 方法：用于执行存储过程、函数相关语句。</li></ul><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><p>编写一个Controller，注入 jdbcTemplate，编写测试方法进行访问测试</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>kuang<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>jdbc<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">JdbcTemplate</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PathVariable</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/jdbc&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JdbcController</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * Spring Boot 默认提供了数据源，默认提供了 org.springframework.jdbc.core.JdbcTemplate
     * JdbcTemplate 中会自己注入数据源，用于简化 JDBC操作
     * 还能避免一些常见的错误,使用起来也不用再自己来关闭数据库连接
     */</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">JdbcTemplate</span> jdbcTemplate<span class="token punctuation">;</span>

    <span class="token comment">//查询employee表中所有数据</span>
    <span class="token comment">//List 中的1个 Map 对应数据库的 1行数据</span>
    <span class="token comment">//Map 中的 key 对应数据库的字段名，value 对应数据库的字段值</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/list&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">userList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select * from employee&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> maps <span class="token operator">=</span> jdbcTemplate<span class="token punctuation">.</span><span class="token function">queryForList</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> maps<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">//新增一个用户</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/add&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//插入语句，注意时间问题</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;insert into employee(last_name, email,gender,department,birth)&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot; values (&#39;狂神说&#39;,&#39;24736743@qq.com&#39;,1,101,&#39;&quot;</span><span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span><span class="token string">&quot;&#39;)&quot;</span><span class="token punctuation">;</span>
        jdbcTemplate<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//查询</span>
        <span class="token keyword">return</span> <span class="token string">&quot;addOk&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//修改用户信息</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/update/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//插入语句</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;update employee set last_name=?,email=? where id=&quot;</span><span class="token operator">+</span>id<span class="token punctuation">;</span>
        <span class="token comment">//数据</span>
        <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> objects <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        objects<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;秦疆&quot;</span><span class="token punctuation">;</span>
        objects<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;24736743@sina.com&quot;</span><span class="token punctuation">;</span>
        jdbcTemplate<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span>objects<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//查询</span>
        <span class="token keyword">return</span> <span class="token string">&quot;updateOk&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//删除用户</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/delete/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">delUser</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//插入语句</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;delete from employee where id=?&quot;</span><span class="token punctuation">;</span>
        jdbcTemplate<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//查询</span>
        <span class="token keyword">return</span> <span class="token string">&quot;deleteOk&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试请求，结果正常；</p><p>到此，CURD 的基本操作，使用 JDBC 就搞定了</p>`,15);function q(S,j){const t=p("ExternalLinkIcon"),o=p("font");return l(),i("div",null,[m,u(" more "),v,b,n("p",null,[s("Sping Data 官网："),n("a",g,[s("https://spring.io/projects/spring-data"),a(t)])]),h,n("p",null,[n("a",w,[s("https://docs.spring.io/spring-boot/docs/2.3.0.RELEASE/reference/html/using-spring-boot.html#using-boot-starter"),a(t)])]),y,a(o,{color:"red"},{default:r(()=>[s("**HikariDataSource 号称 Java WEB 当前速度最快的数据源，相比于传统的 C3P0 、DBCP、Tomcat jdbc 等连接池更加优秀；**")]),_:1}),f])}const D=c(d,[["render",q],["__file","zhengheJDBC.html.vue"]]);export{D as default};