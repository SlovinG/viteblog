import{_ as a,r as s,o as l,c as n,a as d,b as e,e as r,w as o,d as u,f as t}from"./app-GYMnAgnr.js";const c={},v=t(`<h2 id="el表达式简介" tabindex="-1"><a class="header-anchor" href="#el表达式简介" aria-hidden="true">#</a> EL表达式简介</h2><ul><li><strong>EL</strong>（Expression Language） 是<strong>为了使JSP写起来更加简单</strong>。它提供了在 JSP 中<strong>简化表达式</strong>的方法，让Jsp的代码更加简化。</li></ul><h2 id="el表达式能干什么" tabindex="-1"><a class="header-anchor" href="#el表达式能干什么" aria-hidden="true">#</a> EL表达式能干什么</h2><ul><li><p>可以从域对象（request、session、application、pageContext）中取得数据</p></li><li><p>如果4个作用域都有同一个（同名）属性怎么办？</p><p>EL会按照从高到低的<strong>优先级顺序</strong>获取数据： <strong>pageContext&gt;request&gt;session&gt;application</strong></p></li></ul><h2 id="el表达式取值" tabindex="-1"><a class="header-anchor" href="#el表达式取值" aria-hidden="true">#</a> EL表达式取值</h2><ul><li><p>不同版本的tomcat是否默认开启对EL表达式的支持，是不一定的。所以为了保证EL表达式能够正常使用，需要在<code>&lt;%@page</code> 标签里加上<code>isELIgnored=&quot;false&quot;</code></p></li><li><p>使用EL表达式，非常简单，比如使用JSTL输出要写成</p></li></ul><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;c:out value=&quot;\${name}&quot; /&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>但是用EL只需要</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\${name}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="el表达式语法结构" tabindex="-1"><a class="header-anchor" href="#el表达式语法结构" aria-hidden="true">#</a> EL表达式语法结构</h2><ul><li><code>\${expression}</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\${requestScope.key}
\${pageContextScope.key}
\${sessionScope.key}
\${applicationScope.key}

\${key} 如果不指定域，那么会依次从域中搜索key属性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>\${username}</code> 取得request里面名字为username的属性值（如果不存在返回空字符串）</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\${pageContext.request.contextPath} 返回根路径
\${10+89} 支持放置表达式运算
\${age&gt;10} 支持做基础判断
\${empty user} 判断是否是null对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jstl简介" tabindex="-1"><a class="header-anchor" href="#jstl简介" aria-hidden="true">#</a> JSTL简介</h2><ul><li><p>JSTL：<strong>JSP Standard Tag Library</strong>标准标签库</p><p>什么是标签库？可以使用一些具有<strong>自定义功能</strong>的标签。</p></li><li><p>JSTL允许开发人员可以像使用HTML标签那样在JSP中开发Java功能</p></li><li><p>JSTL库有core、i18n、fmt、sql 等等</p></li><li><p>i18n和sql用的很少，core和fmt在工作中会用到</p></li><li><p>JSTL和EL表达式是合作关系，一起使用可以让JSP写起来更加简单优雅</p></li></ul><h2 id="如何使用jstl" tabindex="-1"><a class="header-anchor" href="#如何使用jstl" aria-hidden="true">#</a> 如何使用JSTL</h2><ol><li><p>导入jar包</p></li><li><p>引入jstl对应的标签库 taglib</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ taglib uri=&quot;http://java.sun.com/jsp/jstl/core&quot; prefix=&quot;c&quot; %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>prefix=&quot;c&quot; 表示后续的标签使用都会以 <strong>&lt;c:</strong> 开头</p></li></ol><h3 id="跟储存相关的标签-set、out、remove" tabindex="-1"><a class="header-anchor" href="#跟储存相关的标签-set、out、remove" aria-hidden="true">#</a> 跟储存相关的标签（set、out、remove）</h3><ul><li><p>在作用域request中设置name,相当于<code>&lt;%request.setAttribute(&quot;name&quot;,&quot;gareen&quot;)%&gt;</code></p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;c:set var=&quot;name&quot; value=&quot;\${&#39;gareen&#39;}&quot; scope=&quot;request&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>&lt;%=request.getAttribute(&quot;name&quot;)%&gt;</code>可以写成：</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;c:out value=&quot;\${name}&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>在作用域request中删掉name,相当于<code>&lt;%request.removeAttribute(&quot;name&quot;)%&gt;</code></p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;c:remove var=&quot;name&quot; scope=&quot;request&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="条件标签-if、choose" tabindex="-1"><a class="header-anchor" href="#条件标签-if、choose" aria-hidden="true">#</a> 条件标签（if、choose）</h3><ul><li><p>JSTL通过<code>&lt;c:if tesr=&quot;&quot;</code>进行条件判断</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;c:if test=&quot;\${age&gt;=19 }&quot;&gt;
&lt;font color=&quot;green&quot;&gt;你是成年人&lt;/font&gt;
&lt;/c:if&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>但是 JSTL 没有<code>&lt;c:else</code>，所以常用的办法是在<code>&lt;c:if</code>的条件里取反，用<code>&lt;c:if test=&quot;!&quot;</code>来表示else</p></li><li><p>配合if使用的还有通过<strong>empty</strong>进行为空判断</p></li><li><p><strong>empty</strong>可以判断对象是否为null,字符串长度是否为0，集合长度是否为0</p></li><li><p>虽然JSTL没有提供else标签，但是提供了一个具有else功能的标签<code>choose</code></p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;c:choose&gt;
	&lt;c:when test=&quot;\${age&gt;=19 }&quot;&gt;
		&lt;font color=&quot;green&quot;&gt;你是成年人&lt;/font&gt;
	&lt;/c:when&gt;
	&lt;c:otherwise&gt;
		&lt;font color=&quot;red&quot;&gt;未成年&lt;/font&gt;
	&lt;/c:otherwise&gt;
&lt;/c:choose&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="循环标签" tabindex="-1"><a class="header-anchor" href="#循环标签" aria-hidden="true">#</a> 循环标签</h3>`,23),p=t('<li><p>可以在JSP中使用for循环，但是其可读性很差。 借助JSTL的<code>c:forEach</code>标签，可以很好的改善可读性。</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;c:forEach items=&quot;${lists }&quot; var=&quot;user&quot;&gt;\n	${user.username }:${user.age } &lt;br/&gt;\n&lt;/c:forEach&gt;\n&lt;c:forEach items=&quot;${map }&quot; var=&quot;kv&quot;&gt;\n	${kv.key }:${kv.value } &lt;br/&gt;\n&lt;/c:forEach&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>',1);function g(m,h){const i=s("font");return l(),n("div",null,[d(" more "),v,e("ul",null,[p,e("li",null,[r(i,{color:"red"},{default:o(()=>[u("**一定要给属性提供get方法！**")]),_:1})])])])}const q=a(c,[["render",g],["__file","JSTLheELbiaodashi.html.vue"]]);export{q as default};
