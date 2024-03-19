import{_ as n,o as s,c as a,a as t,f as p}from"./app-GYMnAgnr.js";const e={},o=p(`<h2 id="一、常用函数" tabindex="-1"><a class="header-anchor" href="#一、常用函数" aria-hidden="true">#</a> 一、常用函数</h2><h3 id="_1、数据函数" tabindex="-1"><a class="header-anchor" href="#_1、数据函数" aria-hidden="true">#</a> 1、数据函数</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token keyword">SELECT</span> ABS<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">/*绝对值*/</span>
 <span class="token keyword">SELECT</span> CEILING<span class="token punctuation">(</span><span class="token number">9.4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/*向上取整*/</span>
 <span class="token keyword">SELECT</span> FLOOR<span class="token punctuation">(</span><span class="token number">9.4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">/*向下取整*/</span>
 <span class="token keyword">SELECT</span> RAND<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">/*随机数,返回一个0-1之间的随机数*/</span>
 <span class="token keyword">SELECT</span> SIGN<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/*符号函数: 负数返回-1,正数返回1,0返回0*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、字符串函数" tabindex="-1"><a class="header-anchor" href="#_2、字符串函数" aria-hidden="true">#</a> 2、字符串函数</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token keyword">SELECT</span> CHAR_LENGTH<span class="token punctuation">(</span><span class="token string">&#39;坚持就能成功&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/*返回字符串包含的字符数*/</span>
 <span class="token keyword">SELECT</span> CONCAT<span class="token punctuation">(</span><span class="token string">&#39;我&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;爱&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;程序&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">/*合并字符串,参数可以有多个*/</span>
 <span class="token keyword">SELECT</span> <span class="token keyword">INSERT</span><span class="token punctuation">(</span><span class="token string">&#39;我爱编程helloworld&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&#39;超级热爱&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">/*替换字符串,从某个位置开始替换某个长度*/</span>
 <span class="token keyword">SELECT</span> LOWER<span class="token punctuation">(</span><span class="token string">&#39;KuangShen&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/*小写*/</span>
 <span class="token keyword">SELECT</span> UPPER<span class="token punctuation">(</span><span class="token string">&#39;KuangShen&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/*大写*/</span>
 <span class="token keyword">SELECT</span> <span class="token keyword">LEFT</span><span class="token punctuation">(</span><span class="token string">&#39;hello,world&#39;</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">/*从左边截取*/</span>
 <span class="token keyword">SELECT</span> <span class="token keyword">RIGHT</span><span class="token punctuation">(</span><span class="token string">&#39;hello,world&#39;</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">/*从右边截取*/</span>
 <span class="token keyword">SELECT</span> <span class="token keyword">REPLACE</span><span class="token punctuation">(</span><span class="token string">&#39;坚持就能成功&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;坚持&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;努力&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">/*替换字符串*/</span>
 <span class="token keyword">SELECT</span> SUBSTR<span class="token punctuation">(</span><span class="token string">&#39;坚持就能成功&#39;</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/*截取字符串,开始和长度*/</span>
 <span class="token keyword">SELECT</span> REVERSE<span class="token punctuation">(</span><span class="token string">&#39;坚持就能成功&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">/</span><span class="token operator">*</span>反转
 
 <span class="token comment">-- 查询姓周的同学,改成邹</span>
 <span class="token keyword">SELECT</span> <span class="token keyword">REPLACE</span><span class="token punctuation">(</span>studentname<span class="token punctuation">,</span><span class="token string">&#39;周&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;邹&#39;</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> 新名字
 <span class="token keyword">FROM</span> student <span class="token keyword">WHERE</span> studentname <span class="token operator">LIKE</span> <span class="token string">&#39;周%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、日期和时间函数" tabindex="-1"><a class="header-anchor" href="#_3、日期和时间函数" aria-hidden="true">#</a> 3、日期和时间函数</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token keyword">SELECT</span> <span class="token keyword">CURRENT_DATE</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">/*获取当前日期*/</span>
 <span class="token keyword">SELECT</span> CURDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">/*获取当前日期*/</span>
 <span class="token keyword">SELECT</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">/*获取当前日期和时间*/</span>
 <span class="token keyword">SELECT</span> LOCALTIME<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">/*获取当前本地日期和时间*/</span>
 <span class="token keyword">SELECT</span> SYSDATE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">/*获取当前系统日期和时间*/</span>
 
 <span class="token comment">-- 获取年月日,时分秒</span>
 <span class="token keyword">SELECT</span> <span class="token keyword">YEAR</span><span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">SELECT</span> <span class="token keyword">MONTH</span><span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">SELECT</span> <span class="token keyword">DAY</span><span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">SELECT</span> <span class="token keyword">HOUR</span><span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">SELECT</span> <span class="token keyword">MINUTE</span><span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">SELECT</span> <span class="token keyword">SECOND</span><span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、系统信息函数" tabindex="-1"><a class="header-anchor" href="#_4、系统信息函数" aria-hidden="true">#</a> 4、系统信息函数</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token keyword">SELECT</span> VERSION<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">/*版本*/</span>
 <span class="token keyword">SELECT</span> <span class="token keyword">USER</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">/*用户*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、聚合函数" tabindex="-1"><a class="header-anchor" href="#二、聚合函数" aria-hidden="true">#</a> 二、聚合函数</h2><table><thead><tr><th>函数名称</th><th>描述</th></tr></thead><tbody><tr><td>COUNT()</td><td>返回满足 Select 条件的记录总和数，如 select count(*) *<em>【不建议使用 <em>，效率低】</em></em></td></tr><tr><td>SUM()</td><td>返回数字字段或表达式列作统计，返回一列的总和</td></tr><tr><td>AVG()</td><td>通常为数值字段或表达列作统计，返回一列的平均值</td></tr><tr><td>MAX()</td><td>可以为数值字段，字符字段或表达式列作统计，返回最大的值</td></tr><tr><td>MIN()</td><td>可以为数值字段，字符字段或表达式列作统计，返回最小的值</td></tr></tbody></table><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token comment">-- 聚合函数-1</span>
 <span class="token comment">/*COUNT:非空的*/</span>
 <span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span>studentname<span class="token punctuation">)</span> <span class="token keyword">FROM</span> student<span class="token punctuation">;</span>
 <span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> student<span class="token punctuation">;</span>
 <span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> student<span class="token punctuation">;</span>  <span class="token comment">/*推荐*/</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从含义上讲，count(1) 与 count(*) 都表示对全部数据行的查询。</p><ul><li>count(字段) 会统计该字段在表中出现的次数，忽略字段为 null 的情况，即不统计字段为 null 的记录</li><li>count(*) 包括了所有的列，相当于行数，在统计结果的时候，包含字段为 null 的记录</li><li>count(1) 用1代表代码行，在统计结果的时候，包含字段为 null 的记录</li></ul><blockquote><p>很多人认为 count(1) 执行的效率会比 count(*) 高，原因是 count(*) 会存在全表扫描，而 count(1) 可以针对一个字段进行查询。</p><p>其实不然，count(1) 和 count(*) 都会对全表进行扫描，统计所有记录的条数，包括那些为 null 的记录，因此，它们的效率可以说是相差无几。</p><p>而 count(字段) 则与前两者不同，它会统计该字段不为 null 的记录条数。</p></blockquote><p>下面它们之间的一些对比：</p><p>1）在表没有主键时，count(1) 比 count(*) 快</p><p>2）有主键时，主键作为计算条件，count(主键) 效率最高</p><p>3）若表格只有一个字段，则 count(*) 效率较高</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token comment">-- 聚合函数-2</span>
 <span class="token keyword">SELECT</span> <span class="token function">SUM</span><span class="token punctuation">(</span>StudentResult<span class="token punctuation">)</span> <span class="token keyword">AS</span> 总和 <span class="token keyword">FROM</span> result<span class="token punctuation">;</span>
 <span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>StudentResult<span class="token punctuation">)</span> <span class="token keyword">AS</span> 平均分 <span class="token keyword">FROM</span> result<span class="token punctuation">;</span>
 <span class="token keyword">SELECT</span> <span class="token function">MAX</span><span class="token punctuation">(</span>StudentResult<span class="token punctuation">)</span> <span class="token keyword">AS</span> 最高分 <span class="token keyword">FROM</span> result<span class="token punctuation">;</span>
 <span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>StudentResult<span class="token punctuation">)</span> <span class="token keyword">AS</span> 最低分 <span class="token keyword">FROM</span> result<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>题目：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token comment">-- 查询不同课程的平均分,最高分,最低分</span>
 <span class="token comment">-- 前提:根据不同的课程进行分组</span>
 
 <span class="token keyword">SELECT</span> subjectname<span class="token punctuation">,</span><span class="token function">AVG</span><span class="token punctuation">(</span>studentresult<span class="token punctuation">)</span> <span class="token keyword">AS</span> 平均分<span class="token punctuation">,</span><span class="token function">MAX</span><span class="token punctuation">(</span>StudentResult<span class="token punctuation">)</span> <span class="token keyword">AS</span> 最高分<span class="token punctuation">,</span><span class="token function">MIN</span><span class="token punctuation">(</span>StudentResult<span class="token punctuation">)</span> <span class="token keyword">AS</span> 最低分
 <span class="token keyword">FROM</span> result <span class="token keyword">AS</span> r
 <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> <span class="token identifier"><span class="token punctuation">\`</span>subject<span class="token punctuation">\`</span></span> <span class="token keyword">AS</span> s
 <span class="token keyword">ON</span> r<span class="token punctuation">.</span>subjectno <span class="token operator">=</span> s<span class="token punctuation">.</span>subjectno
 <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> r<span class="token punctuation">.</span>subjectno
 <span class="token keyword">HAVING</span> 平均分 <span class="token operator">&gt;</span> <span class="token number">80</span><span class="token punctuation">;</span>
 
 <span class="token comment">/*
 where写在group by前面.
 要是放在分组后面的筛选
 要使用HAVING..
 因为having是从前面筛选的字段再筛选，而where是从数据表中的字段直接进行的筛选
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、md5-加密" tabindex="-1"><a class="header-anchor" href="#三、md5-加密" aria-hidden="true">#</a> 三、MD5 加密</h2><h3 id="_1、md5简介" tabindex="-1"><a class="header-anchor" href="#_1、md5简介" aria-hidden="true">#</a> 1、MD5简介</h3><p>MD5即Message-Digest Algorithm 5（信息-摘要算法5），用于确保信息传输完整一致。是计算机广泛使用的杂凑算法之一（又译摘要算法、哈希算法），主流编程语言普遍已有MD5实现。将数据（如汉字）运算为另一固定长度值，是杂凑算法的基础原理，MD5的前身有MD2、MD3和MD4。</p><h3 id="_2、实现数据加密" tabindex="-1"><a class="header-anchor" href="#_2、实现数据加密" aria-hidden="true">#</a> 2、实现数据加密</h3><p>新建一个表 testmd5</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>testmd5<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>name<span class="token punctuation">\`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>pwd<span class="token punctuation">\`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
 <span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">INNODB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插入一些数据</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> testmd5 <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;kuangshen&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&#39;qinjiang&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;456789&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果我们要对pwd这一列数据进行加密，语法是：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token keyword">update</span> testmd5 <span class="token keyword">set</span> pwd <span class="token operator">=</span> md5<span class="token punctuation">(</span>pwd<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果单独对某个用户(如kuangshen)的密码加密：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> testmd5 <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">&#39;kuangshen2&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span>
 <span class="token keyword">update</span> testmd5 <span class="token keyword">set</span> pwd <span class="token operator">=</span> md5<span class="token punctuation">(</span>pwd<span class="token punctuation">)</span> <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">&#39;kuangshen2&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>插入新的数据自动加密</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> testmd5 <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token string">&#39;kuangshen3&#39;</span><span class="token punctuation">,</span>md5<span class="token punctuation">(</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询登录用户信息（md5对比使用，查看用户输入加密后的密码进行比对）</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> testmd5 <span class="token keyword">WHERE</span> <span class="token identifier"><span class="token punctuation">\`</span>name<span class="token punctuation">\`</span></span><span class="token operator">=</span><span class="token string">&#39;kuangshen&#39;</span> <span class="token operator">AND</span> pwd<span class="token operator">=</span>MD5<span class="token punctuation">(</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="四、小结" tabindex="-1"><a class="header-anchor" href="#四、小结" aria-hidden="true">#</a> 四、小结</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token comment">-- ================ 内置函数 ================</span>
 <span class="token comment">-- 数值函数</span>
 abs<span class="token punctuation">(</span>x<span class="token punctuation">)</span>            <span class="token comment">-- 绝对值 abs(-10.9) = 10</span>
 <span class="token function">format</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> d<span class="token punctuation">)</span>    <span class="token comment">-- 格式化千分位数值 format(1234567.456, 2) = 1,234,567.46</span>
 ceil<span class="token punctuation">(</span>x<span class="token punctuation">)</span>            <span class="token comment">-- 向上取整 ceil(10.1) = 11</span>
 floor<span class="token punctuation">(</span>x<span class="token punctuation">)</span>        <span class="token comment">-- 向下取整 floor (10.1) = 10</span>
 <span class="token function">round</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>        <span class="token comment">-- 四舍五入去整</span>
 <span class="token function">mod</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> n<span class="token punctuation">)</span>        <span class="token comment">-- m%n m mod n 求余 10%3=1</span>
 pi<span class="token punctuation">(</span><span class="token punctuation">)</span>            <span class="token comment">-- 获得圆周率</span>
 pow<span class="token punctuation">(</span>m<span class="token punctuation">,</span> n<span class="token punctuation">)</span>        <span class="token comment">-- m^n</span>
 sqrt<span class="token punctuation">(</span>x<span class="token punctuation">)</span>            <span class="token comment">-- 算术平方根</span>
 rand<span class="token punctuation">(</span><span class="token punctuation">)</span>            <span class="token comment">-- 随机数</span>
 <span class="token keyword">truncate</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> d<span class="token punctuation">)</span>    <span class="token comment">-- 截取d位小数</span>
 
 <span class="token comment">-- 时间日期函数</span>
 <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">current_timestamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">-- 当前日期时间</span>
 <span class="token keyword">current_date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                    <span class="token comment">-- 当前日期</span>
 <span class="token keyword">current_time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                    <span class="token comment">-- 当前时间</span>
 <span class="token keyword">date</span><span class="token punctuation">(</span><span class="token string">&#39;yyyy-mm-dd hh:ii:ss&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">-- 获取日期部分</span>
 <span class="token keyword">time</span><span class="token punctuation">(</span><span class="token string">&#39;yyyy-mm-dd hh:ii:ss&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">-- 获取时间部分</span>
 date_format<span class="token punctuation">(</span><span class="token string">&#39;yyyy-mm-dd hh:ii:ss&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;%d %y %a %d %m %b %j&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">-- 格式化时间</span>
 unix_timestamp<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                <span class="token comment">-- 获得unix时间戳</span>
 from_unixtime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                <span class="token comment">-- 从时间戳获得时间</span>
 
 <span class="token comment">-- 字符串函数</span>
 length<span class="token punctuation">(</span>string<span class="token punctuation">)</span>            <span class="token comment">-- string长度，字节</span>
 char_length<span class="token punctuation">(</span>string<span class="token punctuation">)</span>        <span class="token comment">-- string的字符个数</span>
 substring<span class="token punctuation">(</span>str<span class="token punctuation">,</span> position <span class="token punctuation">[</span><span class="token punctuation">,</span>length<span class="token punctuation">]</span><span class="token punctuation">)</span>        <span class="token comment">-- 从str的position开始,取length个字符</span>
 <span class="token keyword">replace</span><span class="token punctuation">(</span>str <span class="token punctuation">,</span>search_str <span class="token punctuation">,</span>replace_str<span class="token punctuation">)</span>    <span class="token comment">-- 在str中用replace_str替换search_str</span>
 instr<span class="token punctuation">(</span>string <span class="token punctuation">,</span>substring<span class="token punctuation">)</span>    <span class="token comment">-- 返回substring首次在string中出现的位置</span>
 concat<span class="token punctuation">(</span>string <span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">)</span>    <span class="token comment">-- 连接字串</span>
 <span class="token keyword">charset</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>            <span class="token comment">-- 返回字串字符集</span>
 <span class="token function">lcase</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>            <span class="token comment">-- 转换成小写</span>
 <span class="token keyword">left</span><span class="token punctuation">(</span>string<span class="token punctuation">,</span> length<span class="token punctuation">)</span>    <span class="token comment">-- 从string2中的左边起取length个字符</span>
 load_file<span class="token punctuation">(</span>file_name<span class="token punctuation">)</span>    <span class="token comment">-- 从文件读取内容</span>
 locate<span class="token punctuation">(</span>substring<span class="token punctuation">,</span> string <span class="token punctuation">[</span><span class="token punctuation">,</span>start_position<span class="token punctuation">]</span><span class="token punctuation">)</span>    <span class="token comment">-- 同instr,但可指定开始位置</span>
 lpad<span class="token punctuation">(</span>string<span class="token punctuation">,</span> length<span class="token punctuation">,</span> pad<span class="token punctuation">)</span>    <span class="token comment">-- 重复用pad加在string开头,直到字串长度为length</span>
 ltrim<span class="token punctuation">(</span>string<span class="token punctuation">)</span>            <span class="token comment">-- 去除前端空格</span>
 <span class="token keyword">repeat</span><span class="token punctuation">(</span>string<span class="token punctuation">,</span> count<span class="token punctuation">)</span>    <span class="token comment">-- 重复count次</span>
 rpad<span class="token punctuation">(</span>string<span class="token punctuation">,</span> length<span class="token punctuation">,</span> pad<span class="token punctuation">)</span>    <span class="token comment">--在str后用pad补充,直到长度为length</span>
 rtrim<span class="token punctuation">(</span>string<span class="token punctuation">)</span>            <span class="token comment">-- 去除后端空格</span>
 strcmp<span class="token punctuation">(</span>string1 <span class="token punctuation">,</span>string2<span class="token punctuation">)</span>    <span class="token comment">-- 逐字符比较两字串大小</span>
 
 <span class="token comment">-- 聚合函数</span>
 <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token function">avg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 group_concat<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
 <span class="token comment">-- 其他常用函数</span>
 md5<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40);function c(l,i){return s(),a("div",null,[t(" more "),o])}const k=n(e,[["render",c],["__file","MySQLhanshu.html.vue"]]);export{k as default};
