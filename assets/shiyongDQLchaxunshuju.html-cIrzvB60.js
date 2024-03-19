import{_ as o,r as l,o as c,c as i,a as u,e as t,w as p,d as s,b as n,f as a}from"./app-GYMnAgnr.js";const d="/viteblog/assets/205-wlCMreYl.png",r={},k=a(`<h2 id="一、dql语言" tabindex="-1"><a class="header-anchor" href="#一、dql语言" aria-hidden="true">#</a> 一、DQL语言</h2><p><strong>DQL（Data Query Language 数据查询语言）</strong></p><ul><li>查询数据库数据，如 <strong>SELECT</strong> 语句</li><li>简单的单表查询或多表的复杂查询和嵌套查询</li><li>是数据库语言中最核心，最重要的语句</li><li>使用频率最高的语句</li></ul><h3 id="_1、select语法" tabindex="-1"><a class="header-anchor" href="#_1、select语法" aria-hidden="true">#</a> 1、SELECT语法</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token punctuation">[</span><span class="token keyword">ALL</span> <span class="token operator">|</span> <span class="token keyword">DISTINCT</span><span class="token punctuation">]</span>
{<span class="token operator">*</span> <span class="token operator">|</span> <span class="token keyword">table</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token keyword">table</span><span class="token punctuation">.</span>field1<span class="token punctuation">[</span><span class="token keyword">as</span> alias1<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token keyword">table</span><span class="token punctuation">.</span>field2<span class="token punctuation">[</span><span class="token keyword">as</span> alias2<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">]</span>}
<span class="token keyword">FROM</span> table_name <span class="token punctuation">[</span><span class="token keyword">as</span> table_alias<span class="token punctuation">]</span>
  <span class="token punctuation">[</span><span class="token keyword">left</span> <span class="token operator">|</span> <span class="token keyword">right</span> <span class="token operator">|</span> <span class="token keyword">inner</span> <span class="token keyword">join</span> table_name2<span class="token punctuation">]</span>  <span class="token comment">-- 联合查询</span>
  <span class="token punctuation">[</span><span class="token keyword">WHERE</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>  <span class="token comment">-- 指定结果需满足的条件</span>
  <span class="token punctuation">[</span><span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>  <span class="token comment">-- 指定结果按照哪几个字段来分组</span>
  <span class="token punctuation">[</span><span class="token keyword">HAVING</span><span class="token punctuation">]</span>  <span class="token comment">-- 过滤分组的记录必须满足的次要条件</span>
  <span class="token punctuation">[</span><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>  <span class="token comment">-- 指定查询记录按一个或多个条件排序</span>
  <span class="token punctuation">[</span><span class="token keyword">LIMIT</span> {<span class="token punctuation">[</span><span class="token keyword">offset</span><span class="token punctuation">,</span><span class="token punctuation">]</span>row_count <span class="token operator">|</span> row_countOFFSET <span class="token keyword">offset</span>}<span class="token punctuation">]</span><span class="token punctuation">;</span>
   <span class="token comment">-- 指定查询的记录从哪条至哪条</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意 : [ ] 括号代表可选的 , { }括号代表必选的</strong></p><h2 id="二、指定查询字段" tabindex="-1"><a class="header-anchor" href="#二、指定查询字段" aria-hidden="true">#</a> 二、指定查询字段</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 查询表中所有的数据列结果, 采用*符号; 但是效率低,基本不推荐</span>

<span class="token comment">-- 查询所有学生信息</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> student<span class="token punctuation">;</span>

<span class="token comment">-- 查询指定列(学号 , 姓名)</span>
<span class="token keyword">SELECT</span> studentno<span class="token punctuation">,</span>studentname <span class="token keyword">FROM</span> student<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1、as-子句作为别名" tabindex="-1"><a class="header-anchor" href="#_1、as-子句作为别名" aria-hidden="true">#</a> 1、AS 子句作为别名</h3><p>作用：</p><ul><li>可以给数据列取一个新别名</li><li>可以给表取一个新别名</li><li>可把经计算或总结后的结果用另一个新名称来代替（这个别名一般都是在 java 里和 <strong>属性</strong> 匹配的）</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 这里是为列取别名(当然as关键词可以省略)</span>
<span class="token keyword">SELECT</span> studentno <span class="token keyword">AS</span> 学号<span class="token punctuation">,</span>studentname <span class="token keyword">AS</span> 姓名 <span class="token keyword">FROM</span> student<span class="token punctuation">;</span>

<span class="token comment">-- 使用as也可以为表取别名</span>
<span class="token keyword">SELECT</span> studentno <span class="token keyword">AS</span> 学号<span class="token punctuation">,</span>studentname <span class="token keyword">AS</span> 姓名 <span class="token keyword">FROM</span> student <span class="token keyword">AS</span> s<span class="token punctuation">;</span>

<span class="token comment">-- 使用as,为查询结果取一个新名字</span>
<span class="token comment">-- CONCAT()函数拼接字符串</span>
<span class="token keyword">SELECT</span> CONCAT<span class="token punctuation">(</span><span class="token string">&#39;姓名:&#39;</span><span class="token punctuation">,</span>studentname<span class="token punctuation">)</span> <span class="token keyword">AS</span> 新姓名 <span class="token keyword">FROM</span> student<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、distinct关键字的使用" tabindex="-1"><a class="header-anchor" href="#_2、distinct关键字的使用" aria-hidden="true">#</a> 2、DISTINCT关键字的使用</h3><p>作用：去掉 SELECT 查询返回的记录结果中重复的记录（返回所有列的值都相同），只返回一条</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- # 查看哪些同学参加了考试(学号) 去除重复项</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> result<span class="token punctuation">;</span> <span class="token comment">-- 查看考试成绩</span>
<span class="token keyword">SELECT</span> studentno <span class="token keyword">FROM</span> result<span class="token punctuation">;</span> <span class="token comment">-- 查看哪些同学参加了考试</span>
<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> studentno <span class="token keyword">FROM</span> result<span class="token punctuation">;</span> <span class="token comment">-- 了解:DISTINCT 去除重复项 , (默认是ALL)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、使用表达式的列" tabindex="-1"><a class="header-anchor" href="#_3、使用表达式的列" aria-hidden="true">#</a> 3、使用表达式的列</h3>`,16),v=a(`<p>应用场景 :</p><ul><li><p>SELECT语句返回结果列中使用</p></li><li><p>SELECT语句中的ORDER BY , HAVING等子句中使用</p></li><li><p>DML语句中的 where 条件语句中使用表达式</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- selcet查询中可以使用表达式</span>
<span class="token keyword">SELECT</span> @<span class="token variable">@auto_increment_increment</span><span class="token punctuation">;</span> <span class="token comment">-- 查询自增步长</span>
<span class="token keyword">SELECT</span> VERSION<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">-- 查询系统版本号</span>
<span class="token keyword">SELECT</span> <span class="token number">100</span><span class="token operator">*</span><span class="token number">3</span><span class="token operator">-</span><span class="token number">1</span> <span class="token keyword">AS</span> 计算结果<span class="token punctuation">;</span> <span class="token comment">-- 表达式</span>

<span class="token comment">-- 学员考试成绩集体提分一分查看</span>
<span class="token keyword">SELECT</span> studentno<span class="token punctuation">,</span>StudentResult<span class="token operator">+</span><span class="token number">1</span> <span class="token keyword">AS</span> <span class="token string">&#39;提分后&#39;</span> <span class="token keyword">FROM</span> result<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>避免 SQL 返回结果中包含 &#39; . &#39; , &#39; * &#39; 和括号等干扰开发语言程序</p></li></ul><h2 id="三、where条件语句" tabindex="-1"><a class="header-anchor" href="#三、where条件语句" aria-hidden="true">#</a> 三、where条件语句</h2><p>作用：用于检索数据表中 <strong>符合条件</strong> 的记录</p><p>搜索条件可由一个或多个逻辑表达式组成，结果一般为 <strong>真</strong> 或 <strong>假</strong></p><h3 id="_1、逻辑操作符" tabindex="-1"><a class="header-anchor" href="#_1、逻辑操作符" aria-hidden="true">#</a> 1、逻辑操作符</h3><table><thead><tr><th>操作符名称</th><th>语法</th><th>描述</th></tr></thead><tbody><tr><td>AND 或 &amp;&amp;</td><td>a AND b 或 a &amp;&amp; b</td><td>逻辑与，同时为真结果才为真</td></tr><tr><td>OR 或 ||</td><td>a OR b 或 a ||b</td><td>逻辑或，只要有一个为真，结果就为真</td></tr><tr><td>NOT 或 ！</td><td>NOT a 或 ! a</td><td>逻辑非，若操作符为假，则结果为真</td></tr></tbody></table><p>测试</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 满足条件的查询(where)</span>
<span class="token keyword">SELECT</span> Studentno<span class="token punctuation">,</span>StudentResult <span class="token keyword">FROM</span> result<span class="token punctuation">;</span>

<span class="token comment">-- 查询考试成绩在95-100之间的</span>
<span class="token keyword">SELECT</span> Studentno<span class="token punctuation">,</span>StudentResult
<span class="token keyword">FROM</span> result
<span class="token keyword">WHERE</span> StudentResult<span class="token operator">&gt;=</span><span class="token number">95</span> <span class="token operator">AND</span> StudentResult<span class="token operator">&lt;=</span><span class="token number">100</span><span class="token punctuation">;</span>

<span class="token comment">-- AND也可以写成 &amp;&amp;</span>
<span class="token keyword">SELECT</span> Studentno<span class="token punctuation">,</span>StudentResult
<span class="token keyword">FROM</span> result
<span class="token keyword">WHERE</span> StudentResult<span class="token operator">&gt;=</span><span class="token number">95</span> <span class="token operator">&amp;&amp;</span> StudentResult<span class="token operator">&lt;=</span><span class="token number">100</span><span class="token punctuation">;</span>

<span class="token comment">-- 模糊查询（对应的词:精确查询）</span>
<span class="token keyword">SELECT</span> Studentno<span class="token punctuation">,</span>StudentResult
<span class="token keyword">FROM</span> result
<span class="token keyword">WHERE</span> StudentResult <span class="token operator">BETWEEN</span> <span class="token number">95</span> <span class="token operator">AND</span> <span class="token number">100</span><span class="token punctuation">;</span>

<span class="token comment">-- 除了1000号同学,查询其他同学的成绩</span>
<span class="token keyword">SELECT</span> studentno<span class="token punctuation">,</span>studentresult
<span class="token keyword">FROM</span> result
<span class="token keyword">WHERE</span> studentno<span class="token operator">!=</span><span class="token number">1000</span><span class="token punctuation">;</span>

<span class="token comment">-- 使用NOT</span>
<span class="token keyword">SELECT</span> studentno<span class="token punctuation">,</span>studentresult
<span class="token keyword">FROM</span> result
<span class="token keyword">WHERE</span> <span class="token operator">NOT</span> studentno<span class="token operator">=</span><span class="token number">1000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),m=n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"WARNING"),n("p",null,[s("不同的数据库对 "),n("code",null,"BETWEEN AND"),s(" 操作符的处理方式是有差异的，边界值的取舍会有不同；")]),n("p",null,[s("常用的 Mysql 和 Oracle 的 "),n("code",null,"BETWEEN AND"),s(" 都是闭区间，会包含两端的值。")])],-1),b=a(`<h3 id="_2、模糊查询-比较操作符" tabindex="-1"><a class="header-anchor" href="#_2、模糊查询-比较操作符" aria-hidden="true">#</a> 2、模糊查询：比较操作符</h3><table><thead><tr><th>操作符名称</th><th>语法</th><th>描述</th></tr></thead><tbody><tr><td>IS NULL</td><td>a IS NULL<br></td><td>若操作符为 NULL，则结果为真</td></tr><tr><td>IS NOT NULL</td><td>a IS NOT NULL</td><td>若操作符不为 NULL，则结果为真</td></tr><tr><td>BETWEEN ... AND</td><td>a BETWEEN b AND c</td><td>若 a 范围在 b 与 c 之间，则结果为真<br></td></tr><tr><td>LIKE</td><td>a LIKE b</td><td>SQL 模式匹配，若 a 匹配 b，则结为真<br></td></tr><tr><td>IN</td><td>a IN (a1, a2, a3, ......)</td><td>若 a 等于 a1,a2,...中的某一个，则结果为真</td></tr></tbody></table><p>注意：</p><ul><li>数值数据类型的记录之间才能进行算术运算</li><li>相同数据类型的数据之间才能进行比较</li></ul><p>测试：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 模糊查询 between and \\ like \\ in \\ null</span>

<span class="token comment">-- =============================================</span>
<span class="token comment">-- LIKE</span>
<span class="token comment">-- =============================================</span>
<span class="token comment">-- 查询姓刘的同学的学号及姓名</span>
<span class="token comment">-- like结合使用的通配符 : % (代表0到任意个字符) _ (一个字符)</span>
<span class="token keyword">SELECT</span> studentno<span class="token punctuation">,</span>studentname <span class="token keyword">FROM</span> student
<span class="token keyword">WHERE</span> studentname <span class="token operator">LIKE</span> <span class="token string">&#39;刘%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询姓刘的同学,后面只有一个字的</span>
<span class="token keyword">SELECT</span> studentno<span class="token punctuation">,</span>studentname <span class="token keyword">FROM</span> student
<span class="token keyword">WHERE</span> studentname <span class="token operator">LIKE</span> <span class="token string">&#39;刘_&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询姓刘的同学,后面只有两个字的</span>
<span class="token keyword">SELECT</span> studentno<span class="token punctuation">,</span>studentname <span class="token keyword">FROM</span> student
<span class="token keyword">WHERE</span> studentname <span class="token operator">LIKE</span> <span class="token string">&#39;刘__&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询姓名中含有 嘉 字的</span>
<span class="token keyword">SELECT</span> studentno<span class="token punctuation">,</span>studentname <span class="token keyword">FROM</span> student
<span class="token keyword">WHERE</span> studentname <span class="token operator">LIKE</span> <span class="token string">&#39;%嘉%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询姓名中含有特殊字符的需要使用转义符号 &#39;\\&#39;</span>
<span class="token comment">-- 自定义转义符关键字: ESCAPE &#39;:&#39;</span>

<span class="token comment">-- =============================================</span>
<span class="token comment">-- IN</span>
<span class="token comment">-- =============================================</span>
<span class="token comment">-- 查询学号为1000,1001,1002的学生姓名</span>
<span class="token keyword">SELECT</span> studentno<span class="token punctuation">,</span>studentname <span class="token keyword">FROM</span> student
<span class="token keyword">WHERE</span> studentno <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span><span class="token number">1001</span><span class="token punctuation">,</span><span class="token number">1002</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询地址在北京,南京,河南洛阳的学生</span>
<span class="token keyword">SELECT</span> studentno<span class="token punctuation">,</span>studentname<span class="token punctuation">,</span>address <span class="token keyword">FROM</span> student
<span class="token keyword">WHERE</span> address <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token string">&#39;北京&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;南京&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;河南洛阳&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- =============================================</span>
<span class="token comment">-- NULL 空</span>
<span class="token comment">-- =============================================</span>
<span class="token comment">-- 查询出生日期没有填写的同学</span>
<span class="token comment">-- 不能直接写 = NULL , 这是错误的 , 用 is null</span>
<span class="token keyword">SELECT</span> studentname <span class="token keyword">FROM</span> student
<span class="token keyword">WHERE</span> BornDate <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询出生日期填写了的同学</span>
<span class="token keyword">SELECT</span> studentname <span class="token keyword">FROM</span> student
<span class="token keyword">WHERE</span> BornDate <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询没有写家庭住址的同学（注意：空字符串不等于null）</span>
<span class="token keyword">SELECT</span> studentname <span class="token keyword">FROM</span> student
<span class="token keyword">WHERE</span> Address<span class="token operator">=</span><span class="token string">&#39;&#39;</span> <span class="token operator">OR</span> Address <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、连接查询" tabindex="-1"><a class="header-anchor" href="#四、连接查询" aria-hidden="true">#</a> 四、连接查询</h2><h3 id="_1、join-对比" tabindex="-1"><a class="header-anchor" href="#_1、join-对比" aria-hidden="true">#</a> 1、JOIN 对比</h3><p>七种 Join：</p><img src="`+d+`" style="zoom:67%;"><p>测试</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/*
连接查询
   如需要多张数据表的数据进行查询,则可通过连接运算符实现多个查询
内连接 inner join
   查询两个表中的结果集中的交集
外连接 outer join
   左外连接 left join
       (以左表作为基准,右边表来一一匹配,匹配不上的,返回左表的记录,右表以NULL填充)
   右外连接 right join
       (以右表作为基准,左边表来一一匹配,匹配不上的,返回右表的记录,左表以NULL填充)
       
等值连接和非等值连接

自连接
*/</span>

<span class="token comment">-- 查询参加了考试的同学信息(学号,学生姓名,科目编号,分数)</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> student<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> result<span class="token punctuation">;</span>

<span class="token comment">/*思路:
(1):分析需求,确定查询的列来源于两个类,student result,连接查询
(2):确定使用哪种连接查询?(内连接)
*/</span>
<span class="token comment">-- 显式内连接</span>
<span class="token keyword">SELECT</span> s<span class="token punctuation">.</span>studentno<span class="token punctuation">,</span>studentname<span class="token punctuation">,</span>subjectno<span class="token punctuation">,</span>StudentResult
<span class="token keyword">FROM</span> student s
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> result r
<span class="token keyword">ON</span> r<span class="token punctuation">.</span>studentno <span class="token operator">=</span> s<span class="token punctuation">.</span>studentno

<span class="token comment">-- 右连接(也可实现)</span>
<span class="token keyword">SELECT</span> s<span class="token punctuation">.</span>studentno<span class="token punctuation">,</span>studentname<span class="token punctuation">,</span>subjectno<span class="token punctuation">,</span>StudentResult
<span class="token keyword">FROM</span> student s
<span class="token keyword">RIGHT</span> <span class="token keyword">JOIN</span> result r
<span class="token keyword">ON</span> r<span class="token punctuation">.</span>studentno <span class="token operator">=</span> s<span class="token punctuation">.</span>studentno

<span class="token comment">-- 逗号连接，是隐式的内连接(没有on关键字表示的条件，条件的表示只能用where)</span>
<span class="token keyword">SELECT</span> s<span class="token punctuation">.</span>studentno<span class="token punctuation">,</span>studentname<span class="token punctuation">,</span>subjectno<span class="token punctuation">,</span>StudentResult
<span class="token keyword">FROM</span> student s <span class="token punctuation">,</span> result r
<span class="token keyword">WHERE</span> r<span class="token punctuation">.</span>studentno <span class="token operator">=</span> s<span class="token punctuation">.</span>studentno

<span class="token comment">-- 左连接 (查询了所有同学,不考试的也会查出来)</span>
<span class="token keyword">SELECT</span> s<span class="token punctuation">.</span>studentno<span class="token punctuation">,</span>studentname<span class="token punctuation">,</span>subjectno<span class="token punctuation">,</span>StudentResult
<span class="token keyword">FROM</span> student s
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> result r
<span class="token keyword">ON</span> r<span class="token punctuation">.</span>studentno <span class="token operator">=</span> s<span class="token punctuation">.</span>studentno

<span class="token comment">-- 查一下缺考的同学(左连接应用场景)</span>
<span class="token keyword">SELECT</span> s<span class="token punctuation">.</span>studentno<span class="token punctuation">,</span>studentname<span class="token punctuation">,</span>subjectno<span class="token punctuation">,</span>StudentResult
<span class="token keyword">FROM</span> student s
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> result r
<span class="token keyword">ON</span> r<span class="token punctuation">.</span>studentno <span class="token operator">=</span> s<span class="token punctuation">.</span>studentno
<span class="token keyword">WHERE</span> StudentResult <span class="token operator">IS</span> <span class="token boolean">NULL</span>

<span class="token comment">-- 思考题:查询参加了考试的同学信息(学号,学生姓名,科目名,分数)</span>
<span class="token keyword">SELECT</span> s<span class="token punctuation">.</span>studentno<span class="token punctuation">,</span>studentname<span class="token punctuation">,</span>subjectname<span class="token punctuation">,</span>StudentResult
<span class="token keyword">FROM</span> student s
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> result r
<span class="token keyword">ON</span> r<span class="token punctuation">.</span>studentno <span class="token operator">=</span> s<span class="token punctuation">.</span>studentno
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> <span class="token identifier"><span class="token punctuation">\`</span>subject<span class="token punctuation">\`</span></span> sub
<span class="token keyword">ON</span> sub<span class="token punctuation">.</span>subjectno <span class="token operator">=</span> r<span class="token punctuation">.</span>subjectno
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、自连接" tabindex="-1"><a class="header-anchor" href="#_2、自连接" aria-hidden="true">#</a> 2、自连接</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/*
自连接
   数据表与自身进行连接

需求:从一个包含栏目ID , 栏目名称和父栏目ID的表中
    查询父栏目名称和其他子栏目名称
*/</span>

<span class="token comment">-- 创建一个表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>category<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
<span class="token identifier"><span class="token punctuation">\`</span>categoryid<span class="token punctuation">\`</span></span> <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">UNSIGNED</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;主题id&#39;</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">\`</span>pid<span class="token punctuation">\`</span></span> <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;父id&#39;</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">\`</span>categoryName<span class="token punctuation">\`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;主题名字&#39;</span><span class="token punctuation">,</span>
<span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>categoryid<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">INNODB</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token operator">=</span><span class="token number">9</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8

<span class="token comment">-- 插入数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">\`</span>category<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>categoryid<span class="token punctuation">\`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">\`</span>pid<span class="token punctuation">\`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">\`</span>categoryName<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;信息技术&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;软件开发&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;数据库&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">&#39;5&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;美术设计&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">&#39;6&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;web开发&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">&#39;7&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;5&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;ps技术&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token string">&#39;8&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;办公信息&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 编写SQL语句,将栏目的父子关系呈现出来 (父栏目名称,子栏目名称)</span>
<span class="token comment">-- 核心思想:把一张表看成两张一模一样的表,然后将这两张表连接查询(自连接)</span>
<span class="token keyword">SELECT</span> a<span class="token punctuation">.</span>categoryName <span class="token keyword">AS</span> <span class="token string">&#39;父栏目&#39;</span><span class="token punctuation">,</span>b<span class="token punctuation">.</span>categoryName <span class="token keyword">AS</span> <span class="token string">&#39;子栏目&#39;</span>
<span class="token keyword">FROM</span> category <span class="token keyword">AS</span> a<span class="token punctuation">,</span>category <span class="token keyword">AS</span> b
<span class="token keyword">WHERE</span> a<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>categoryid<span class="token punctuation">\`</span></span><span class="token operator">=</span>b<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>pid<span class="token punctuation">\`</span></span>

<span class="token comment">-- 思考题:查询参加了考试的同学信息(学号,学生姓名,科目名,分数)</span>
<span class="token keyword">SELECT</span> s<span class="token punctuation">.</span>studentno<span class="token punctuation">,</span>studentname<span class="token punctuation">,</span>subjectname<span class="token punctuation">,</span>StudentResult
<span class="token keyword">FROM</span> student s
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> result r
<span class="token keyword">ON</span> r<span class="token punctuation">.</span>studentno <span class="token operator">=</span> s<span class="token punctuation">.</span>studentno
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> <span class="token identifier"><span class="token punctuation">\`</span>subject<span class="token punctuation">\`</span></span> sub
<span class="token keyword">ON</span> sub<span class="token punctuation">.</span>subjectno <span class="token operator">=</span> r<span class="token punctuation">.</span>subjectno

<span class="token comment">-- 查询学员及所属的年级(学号,学生姓名,年级名)</span>
<span class="token keyword">SELECT</span> studentno <span class="token keyword">AS</span> 学号<span class="token punctuation">,</span>studentname <span class="token keyword">AS</span> 学生姓名<span class="token punctuation">,</span>gradename <span class="token keyword">AS</span> 年级名称
<span class="token keyword">FROM</span> student s
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> grade g
<span class="token keyword">ON</span> s<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>GradeId<span class="token punctuation">\`</span></span> <span class="token operator">=</span> g<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>GradeID<span class="token punctuation">\`</span></span>

<span class="token comment">-- 查询科目及所属的年级(科目名称,年级名称)</span>
<span class="token keyword">SELECT</span> subjectname <span class="token keyword">AS</span> 科目名称<span class="token punctuation">,</span>gradename <span class="token keyword">AS</span> 年级名称
<span class="token keyword">FROM</span> SUBJECT sub
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> grade g
<span class="token keyword">ON</span> sub<span class="token punctuation">.</span>gradeid <span class="token operator">=</span> g<span class="token punctuation">.</span>gradeid

<span class="token comment">-- 查询 数据库结构-1 的所有考试结果(学号 学生姓名 科目名称 成绩)</span>
<span class="token keyword">SELECT</span> s<span class="token punctuation">.</span>studentno<span class="token punctuation">,</span>studentname<span class="token punctuation">,</span>subjectname<span class="token punctuation">,</span>StudentResult
<span class="token keyword">FROM</span> student s
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> result r
<span class="token keyword">ON</span> r<span class="token punctuation">.</span>studentno <span class="token operator">=</span> s<span class="token punctuation">.</span>studentno
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> <span class="token identifier"><span class="token punctuation">\`</span>subject<span class="token punctuation">\`</span></span> sub
<span class="token keyword">ON</span> r<span class="token punctuation">.</span>subjectno <span class="token operator">=</span> sub<span class="token punctuation">.</span>subjectno
<span class="token keyword">WHERE</span> subjectname<span class="token operator">=</span><span class="token string">&#39;数据库结构-1&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、排序和分页" tabindex="-1"><a class="header-anchor" href="#五、排序和分页" aria-hidden="true">#</a> 五、排序和分页</h2><p>测试</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/*============== 排序 ================
语法 : ORDER BY
   ORDER BY 语句用于根据指定的列对结果集进行排序。
   ORDER BY 语句默认按照ASC升序对记录进行排序。
   如果您希望按照降序对记录进行排序，可以使用 DESC 关键字。
   
*/</span>

<span class="token comment">-- 查询 数据库结构-1 的所有考试结果(学号 学生姓名 科目名称 成绩)</span>
<span class="token comment">-- 按成绩降序排序</span>
<span class="token keyword">SELECT</span> s<span class="token punctuation">.</span>studentno<span class="token punctuation">,</span>studentname<span class="token punctuation">,</span>subjectname<span class="token punctuation">,</span>StudentResult
<span class="token keyword">FROM</span> student s
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> result r
<span class="token keyword">ON</span> r<span class="token punctuation">.</span>studentno <span class="token operator">=</span> s<span class="token punctuation">.</span>studentno
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> <span class="token identifier"><span class="token punctuation">\`</span>subject<span class="token punctuation">\`</span></span> sub
<span class="token keyword">ON</span> r<span class="token punctuation">.</span>subjectno <span class="token operator">=</span> sub<span class="token punctuation">.</span>subjectno
<span class="token keyword">WHERE</span> subjectname<span class="token operator">=</span><span class="token string">&#39;数据库结构-1&#39;</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> StudentResult <span class="token keyword">DESC</span>

<span class="token comment">/*============== 分页 ================
语法 : SELECT * FROM table LIMIT [offset,] rows | rows OFFSET offset
好处 : (用户体验,网络传输,查询压力)

推导:
   第一页 : limit 0,5
   第二页 : limit 5,5
   第三页 : limit 10,5
   ......
   第N页 : limit (pageNo-1)*pageSzie,pageSzie
   [pageNo:页码,pageSize:单页面显示条数]
   
*/</span>

<span class="token comment">-- 每页显示5条数据</span>
<span class="token keyword">SELECT</span> s<span class="token punctuation">.</span>studentno<span class="token punctuation">,</span>studentname<span class="token punctuation">,</span>subjectname<span class="token punctuation">,</span>StudentResult
<span class="token keyword">FROM</span> student s
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> result r
<span class="token keyword">ON</span> r<span class="token punctuation">.</span>studentno <span class="token operator">=</span> s<span class="token punctuation">.</span>studentno
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> <span class="token identifier"><span class="token punctuation">\`</span>subject<span class="token punctuation">\`</span></span> sub
<span class="token keyword">ON</span> r<span class="token punctuation">.</span>subjectno <span class="token operator">=</span> sub<span class="token punctuation">.</span>subjectno
<span class="token keyword">WHERE</span> subjectname<span class="token operator">=</span><span class="token string">&#39;数据库结构-1&#39;</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> StudentResult <span class="token keyword">DESC</span> <span class="token punctuation">,</span> studentno
<span class="token keyword">LIMIT</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">5</span>

<span class="token comment">-- 查询 JAVA第一学年 课程成绩前10名并且分数大于80的学生信息(学号,姓名,课程名,分数)</span>
<span class="token keyword">SELECT</span> s<span class="token punctuation">.</span>studentno<span class="token punctuation">,</span>studentname<span class="token punctuation">,</span>subjectname<span class="token punctuation">,</span>StudentResult
<span class="token keyword">FROM</span> student s
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> result r
<span class="token keyword">ON</span> r<span class="token punctuation">.</span>studentno <span class="token operator">=</span> s<span class="token punctuation">.</span>studentno
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> <span class="token identifier"><span class="token punctuation">\`</span>subject<span class="token punctuation">\`</span></span> sub
<span class="token keyword">ON</span> r<span class="token punctuation">.</span>subjectno <span class="token operator">=</span> sub<span class="token punctuation">.</span>subjectno
<span class="token keyword">WHERE</span> subjectname<span class="token operator">=</span><span class="token string">&#39;JAVA第一学年&#39;</span><span class="token operator">AND</span> StudentResult <span class="token operator">&gt;</span> <span class="token number">80</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> StudentResult <span class="token keyword">DESC</span>
<span class="token keyword">LIMIT</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、分组查询" tabindex="-1"><a class="header-anchor" href="#六、分组查询" aria-hidden="true">#</a> 六、分组查询</h2><h3 id="_1、语法" tabindex="-1"><a class="header-anchor" href="#_1、语法" aria-hidden="true">#</a> 1、语法</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> 字段列表 <span class="token keyword">FROM</span> 表名 <span class="token punctuation">[</span><span class="token keyword">WHERE</span> 分组前条件限定<span class="token punctuation">]</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> 分组字段名 <span class="token punctuation">[</span><span class="token keyword">HAVING</span> 分组后条件过滤<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,20),w=n("h3",{id:"_2、练习",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2、练习","aria-hidden":"true"},"#"),s(" 2、练习")],-1),y=a(`<p>查询男同学和女同学各自的数学平均分：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> sex<span class="token punctuation">,</span> <span class="token function">avg</span><span class="token punctuation">(</span>math<span class="token punctuation">)</span> <span class="token keyword">from</span> stu <span class="token keyword">group</span> <span class="token keyword">by</span> sex<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),E=a(`<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> name<span class="token punctuation">,</span> sex<span class="token punctuation">,</span> <span class="token function">avg</span><span class="token punctuation">(</span>math<span class="token punctuation">)</span> <span class="token keyword">from</span> stu <span class="token keyword">group</span> <span class="token keyword">by</span> sex<span class="token punctuation">;</span>  <span class="token comment">-- 这里查询name字段就没有任何意义</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),g=a(`<li><p>查询男同学和女同学各自的数学平均分，以及各自人数：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> sex<span class="token punctuation">,</span> <span class="token function">avg</span><span class="token punctuation">(</span>math<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> stu <span class="token keyword">group</span> <span class="token keyword">by</span> sex<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查询男同学和女同学各自的数学平均分，以及各自人数，要求：分数低于70分的不参与分组：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> sex<span class="token punctuation">,</span> <span class="token function">avg</span><span class="token punctuation">(</span>math<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> math <span class="token operator">&gt;</span> <span class="token number">70</span> <span class="token keyword">group</span> <span class="token keyword">by</span> sex<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查询男同学和女同学各自的数学平均分，以及各自人数，要求：分数低于70分的不参与分组，分组之后人数大于2个的：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> sex<span class="token punctuation">,</span> <span class="token function">avg</span><span class="token punctuation">(</span>math<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> stu <span class="token keyword">where</span> math <span class="token operator">&gt;</span> <span class="token number">70</span> <span class="token keyword">group</span> <span class="token keyword">by</span> sex <span class="token keyword">having</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span>  <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,3),N=a(`<p><strong>where 和 having 区别：</strong></p><ul><li><p>执行时机不一样：where 是分组之前进行限定，不满足 where 条件，则不参与分组，而 having 是分组之后对结果进行过滤。</p></li><li><p>可判断的条件不一样：where 不能对聚合函数进行判断，having 可以。</p></li></ul><h2 id="七、子查询" tabindex="-1"><a class="header-anchor" href="#七、子查询" aria-hidden="true">#</a> 七、子查询</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">/*============== 子查询 ================
什么是子查询?
   在查询语句中的WHERE条件子句中,又嵌套了另一个查询语句
   嵌套查询可由多个子查询组成,求解的方式是由里及外;
   子查询返回的结果一般都是集合,故而建议使用IN关键字;
*/</span>

<span class="token comment">-- 查询 数据库结构-1 的所有考试结果(学号,科目编号,成绩),并且成绩降序排列</span>
<span class="token comment">-- 方法一:使用连接查询</span>
<span class="token keyword">SELECT</span> studentno<span class="token punctuation">,</span>r<span class="token punctuation">.</span>subjectno<span class="token punctuation">,</span>StudentResult
<span class="token keyword">FROM</span> result r
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> <span class="token identifier"><span class="token punctuation">\`</span>subject<span class="token punctuation">\`</span></span> sub
<span class="token keyword">ON</span> r<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>SubjectNo<span class="token punctuation">\`</span></span><span class="token operator">=</span>sub<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>SubjectNo<span class="token punctuation">\`</span></span>
<span class="token keyword">WHERE</span> subjectname <span class="token operator">=</span> <span class="token string">&#39;数据库结构-1&#39;</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> studentresult <span class="token keyword">DESC</span><span class="token punctuation">;</span>

<span class="token comment">-- 方法二:使用子查询(执行顺序:由里及外)</span>
<span class="token keyword">SELECT</span> studentno<span class="token punctuation">,</span>subjectno<span class="token punctuation">,</span>StudentResult
<span class="token keyword">FROM</span> result
<span class="token keyword">WHERE</span> subjectno<span class="token operator">=</span><span class="token punctuation">(</span>
   <span class="token keyword">SELECT</span> subjectno <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">\`</span>subject<span class="token punctuation">\`</span></span>
   <span class="token keyword">WHERE</span> subjectname <span class="token operator">=</span> <span class="token string">&#39;数据库结构-1&#39;</span>
<span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> studentresult <span class="token keyword">DESC</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询课程为 高等数学-2 且分数不小于80分的学生的学号和姓名</span>
<span class="token comment">-- 方法一:使用连接查询</span>
<span class="token keyword">SELECT</span> s<span class="token punctuation">.</span>studentno<span class="token punctuation">,</span>studentname
<span class="token keyword">FROM</span> student s
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> result r
<span class="token keyword">ON</span> s<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>StudentNo<span class="token punctuation">\`</span></span> <span class="token operator">=</span> r<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>StudentNo<span class="token punctuation">\`</span></span>
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> <span class="token identifier"><span class="token punctuation">\`</span>subject<span class="token punctuation">\`</span></span> sub
<span class="token keyword">ON</span> sub<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>SubjectNo<span class="token punctuation">\`</span></span> <span class="token operator">=</span> r<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>SubjectNo<span class="token punctuation">\`</span></span>
<span class="token keyword">WHERE</span> subjectname <span class="token operator">=</span> <span class="token string">&#39;高等数学-2&#39;</span> <span class="token operator">AND</span> StudentResult<span class="token operator">&gt;=</span><span class="token number">80</span>

<span class="token comment">-- 方法二:使用连接查询+子查询</span>
<span class="token comment">-- 分数不小于80分的学生的学号和姓名</span>
<span class="token keyword">SELECT</span> r<span class="token punctuation">.</span>studentno<span class="token punctuation">,</span>studentname <span class="token keyword">FROM</span> student s
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> result r <span class="token keyword">ON</span> s<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>StudentNo<span class="token punctuation">\`</span></span><span class="token operator">=</span>r<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>StudentNo<span class="token punctuation">\`</span></span>
<span class="token keyword">WHERE</span> StudentResult<span class="token operator">&gt;=</span><span class="token number">80</span>

<span class="token comment">-- 在上面SQL基础上,添加需求:课程为 高等数学-2</span>
<span class="token keyword">SELECT</span> r<span class="token punctuation">.</span>studentno<span class="token punctuation">,</span>studentname <span class="token keyword">FROM</span> student s
<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> result r <span class="token keyword">ON</span> s<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>StudentNo<span class="token punctuation">\`</span></span><span class="token operator">=</span>r<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>StudentNo<span class="token punctuation">\`</span></span>
<span class="token keyword">WHERE</span> StudentResult<span class="token operator">&gt;=</span><span class="token number">80</span> <span class="token operator">AND</span> subjectno<span class="token operator">=</span><span class="token punctuation">(</span>
   <span class="token keyword">SELECT</span> subjectno <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">\`</span>subject<span class="token punctuation">\`</span></span>
   <span class="token keyword">WHERE</span> subjectname <span class="token operator">=</span> <span class="token string">&#39;高等数学-2&#39;</span>
<span class="token punctuation">)</span>

<span class="token comment">-- 方法三:使用子查询</span>
<span class="token comment">-- 分步写简单sql语句,然后将其嵌套起来</span>
<span class="token keyword">SELECT</span> studentno<span class="token punctuation">,</span>studentname <span class="token keyword">FROM</span> student <span class="token keyword">WHERE</span> studentno <span class="token operator">IN</span><span class="token punctuation">(</span>
   <span class="token keyword">SELECT</span> studentno <span class="token keyword">FROM</span> result <span class="token keyword">WHERE</span> StudentResult<span class="token operator">&gt;=</span><span class="token number">80</span> <span class="token operator">AND</span> subjectno<span class="token operator">=</span><span class="token punctuation">(</span>
       <span class="token keyword">SELECT</span> subjectno <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">\`</span>subject<span class="token punctuation">\`</span></span> <span class="token keyword">WHERE</span> subjectname <span class="token operator">=</span> <span class="token string">&#39;高等数学-2&#39;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment">/*
练习题目:
   查 C语言-1 的前5名学生的成绩信息(学号,姓名,分数)
   使用子查询,查询郭靖同学所在的年级名称
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function h(R,S){const e=l("font");return c(),i("div",null,[u(" more "),k,t(e,{color:"red"},{default:p(()=>[s("**数据库中的表达式：一般由文本值、列值、NULL、函数和操作符等组成**")]),_:1}),v,m,b,t(e,{color:"red"},{default:p(()=>[s("注意：分组之后，查询的字段需要为 **聚合函数** 和 **分组字段**，查询其他字段无任何意义")]),_:1}),w,n("ul",null,[n("li",null,[y,t(e,{color:"red"},{default:p(()=>[s("注意：分组之后，查询的字段为 **聚合函数** 和 **分组字段**，查询其他字段无任何意义")]),_:1}),E]),g]),N])}const L=o(r,[["render",h],["__file","shiyongDQLchaxunshuju.html.vue"]]);export{L as default};
