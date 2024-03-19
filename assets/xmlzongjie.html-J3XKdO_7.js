import{_ as s,r as i,o as d,c as o,a as r,b as e,d as t,e as a,f as n}from"./app-GYMnAgnr.js";const c="/viteblog/assets/452-aFr__33d.png",p={},m=n(`<h2 id="xml-简介" tabindex="-1"><a class="header-anchor" href="#xml-简介" aria-hidden="true">#</a> xml 简介</h2><p>xml 的全称为EXtensible Markup Language，是一种可扩展的标记语言。</p><p><strong>标记语言</strong> 是通过标签来描述数据的一门语言，标签有时我们也将其称之为元素。</p><p><strong>可扩展</strong> 是指标签的名字是可以自定义的，XML文件是由很多标签组成的，而标签名是可以自定义的。</p><p>html 也是标记语言，但 html 里面的标记是固定的，每个标记有自己的功能。</p><p>xml 用于进行存储数据和传输数据，也常常作为软件的配置文件，按照 xml 规则编写的文本文件称为 xml 文件。</p><h2 id="xml-作为配置文件的优势" tabindex="-1"><a class="header-anchor" href="#xml-作为配置文件的优势" aria-hidden="true">#</a> xml 作为配置文件的优势</h2><p>在 web 开发中的很多配置文件都使用 xml 来编写，是因为使用 xml 编写配置文件结构清晰、配置清楚，而且代码的可维护性更高。</p><h2 id="xml-的作用" tabindex="-1"><a class="header-anchor" href="#xml-的作用" aria-hidden="true">#</a> xml 的作用</h2><ul><li>编写配置文件</li><li>数据传输</li><li>假设有一个手机 APP 客户端，是一个网上商城的软件，打开软件需要显示商品列表，那么这个商品列表的数据就可以使用 xml 来传输。</li></ul><h2 id="xml语法特点" tabindex="-1"><a class="header-anchor" href="#xml语法特点" aria-hidden="true">#</a> xml语法特点</h2><ul><li><p>大小写敏感：<code>&lt;Message&gt;&lt;/Message&gt; </code>与<code>&lt;message&gt;&lt;/message&gt;</code>是两个不同的标签</p></li><li><p>有开始标记必须有结束标记（标记是成套的）</p></li><li><p>标记可以是单标记，但必须自己闭合 <code>&lt;xxxx/&gt;</code></p></li><li><p>标记可以包含标记（可以嵌套，嵌套成对嵌套）</p></li><li><p>标记可以有自己的属性（属性值必须加引号）</p></li><li><p>标记里面可以有内容</p></li><li><p>必须有根标记，也叫做根元素。（根元素是其他元素的父元素）</p></li><li><p>xml文档声明 <code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</code> 必须放在第一行</p></li><li><p>标记不能使用空格和冒号，不建议使用 XML xml Xml 等跟 xml 相关的名字</p></li><li><p>xml中特殊符号的表示一般采用<strong>实体引用</strong>：</p></li></ul><table><thead><tr><th style="text-align:center;">实体引用</th><th style="text-align:center;">代表符号</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;"><code>&amp;lt;</code></td><td style="text-align:center;">&lt;</td><td style="text-align:center;">小于</td></tr><tr><td style="text-align:center;"><code>&amp;gt;</code></td><td style="text-align:center;">&gt;</td><td style="text-align:center;">大于</td></tr><tr><td style="text-align:center;"><code>&amp;amp;</code></td><td style="text-align:center;">&amp;</td><td style="text-align:center;">和号</td></tr><tr><td style="text-align:center;"><code>&amp;apos;</code></td><td style="text-align:center;">&#39;</td><td style="text-align:center;">单引号</td></tr><tr><td style="text-align:center;"><code>&amp;quot;</code></td><td style="text-align:center;">&quot;</td><td style="text-align:center;">引号</td></tr></tbody></table><ul><li>注释 <code>&lt;!-- 注释内容 --&gt;</code></li></ul><h2 id="对-xml-的约束" tabindex="-1"><a class="header-anchor" href="#对-xml-的约束" aria-hidden="true">#</a> 对 XML 的约束</h2><ul><li><p>平时编写 xml 文件的时候，是没有固定规则的，标记名，属性名，属性值我们可以按照我们的需求随意来开发。</p></li><li><p>但是当我们使用别人的框架的时候，一般需要提供一个配置文档，来配置我们使用这个框架的时候的一些属性。这个时候，这个配置文档就需要按照框架的要求来编写。框架的要求就是对 xml 文档的约束。我们可以通过 DTD 和 Schema 文档来编写对文档的约束。</p></li><li><p>DTD，Schema</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>Date</span>
<span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span>Date</span>

<span class="token class-name">Date</span> d <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>Date</span> d <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>定义了约束之后，可以防止我们写错文档。比如某个配置文件，按照相同的约束来书写，更容易让别人阅读或者让别的程序来读取。</p></li></ul><h2 id="dtd是什么" tabindex="-1"><a class="header-anchor" href="#dtd是什么" aria-hidden="true">#</a> DTD是什么</h2><ul><li>DTD用来约束 xml 文档，规定 xml 文档中元素的名称，子元素的名称和顺序，元素的属性。</li><li>一般来说我们很少编写自己的 DTD 文档约束，我们一般会遵循框架提供的 DTD 约束文档来编写配置文件。</li><li>当我们编写的xml不符合 DTD 约束规则的时候，程序会报错，方便我们找错。</li></ul><h2 id="怎么引入dtd约束" tabindex="-1"><a class="header-anchor" href="#怎么引入dtd约束" aria-hidden="true">#</a> 怎么引入DTD约束</h2><ol><li><p>内部引入</p></li><li><p>外部引入（本地）</p></li><li><p>外部引入（网络）</p><p>比如 Struts 框架的配置文档的首行：</p><div class="language-dtd line-numbers-mode" data-ext="dtd"><pre class="language-dtd"><code>&lt;!DOCTYPE validators PUBLIC &quot;-//Apache Struts//XWork Validator 1.0.3//EN&quot; &quot;http://struts.apache.org/dtds/xwork-validator-1.0.3.dtd&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,20),h={href:"http://www.w3school.com.cn/dtd/dtd_intro.asp",target:"_blank",rel:"noopener noreferrer"},u=e("h2",{id:"schema-约束-比-dtd-厉害-可以替代dtd",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#schema-约束-比-dtd-厉害-可以替代dtd","aria-hidden":"true"},"#"),t(" schema 约束（比 DTD 厉害，可以替代DTD）")],-1),x=e("li",null,[t("schema 约束文档本身也是一个 xml 文档，后缀为"),e("code",null,".xsd")],-1),g=e("li",null,[t("schema 的优点： "),e("ul",null,[e("li",null,"语法更加容易阅读，更加友好"),e("li",null,"功能更加强大，类型更加完善"),e("li",null,"有命名空间")])],-1),_=e("li",null,"同样，我们也不需要写schema约束文档，我们只需要直接使用框架提供给我们的约束文档即可。",-1),v={href:"http://www.w3school.com.cn/schema/schema_howto.asp",target:"_blank",rel:"noopener noreferrer"},D=n('<h2 id="xml-的解析方式" tabindex="-1"><a class="header-anchor" href="#xml-的解析方式" aria-hidden="true">#</a> xml 的解析方式</h2><p>xml 的解析就是从 xml 中获取到数据。</p><p>xml 的解析采用 DOM（Document Object Model / 文档对象模型）方式。</p><p>DOM 文档对象模型为树形结构</p><p>DOM 方式解析，就是把 xml 文档加载到内存中，形成树形结构，可以进行增删改的操作。</p><p>xml 里面的 dom 和 html 里面的 dom 差不多，都是用来解析标签的，解析成一个树，并得到一个document 对象。</p><p><img src="'+c+'" alt="452"></p><p>常见的解析工具：</p><ul><li>JAXP：SUN 公司提供的一套 XML 的解析的 API</li><li>JDOM：开源组织提供了一套 XML 的解析的 API-jdom</li><li>DOM4J：开源组织提供了一套 XML 的解析的 API-dom4j，全称：Dom For Java</li><li>pull：主要应用在 Android 手机端解析 XML</li></ul><h2 id="解析的流程" tabindex="-1"><a class="header-anchor" href="#解析的流程" aria-hidden="true">#</a> 解析的流程</h2><ol><li><p>解析根元素</p></li><li><p>解析根元素下的子元素</p></li><li><p>解析一个元素有哪些属性</p></li><li><p>得到元素的文本内容</p></li><li><p>修改、添加、删除某个元素节点</p></li><li><p>修改、添加、删除某个属性</p></li></ol>',11),b={href:"https://blog.csdn.net/qq_24065713/article/details/77970469",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,"本篇的内容，会在后面的开发过程中慢慢接触到，需要有所了解。",-1);function f(y,M){const l=i("ExternalLinkIcon");return d(),o("div",null,[r(" more "),m,e("ul",null,[e("li",null,[t("详见 "),e("a",h,[t("DTD引用-w3school文档"),a(l)])])]),u,e("ul",null,[x,g,_,e("li",null,[t("详见 "),e("a",v,[t("schema文档的使用"),a(l)])])]),D,e("p",null,[t("如何用dom4j解析xml代码详见 "),e("a",b,[t("DOM4J的用法"),a(l)])]),k])}const T=s(p,[["render",f],["__file","xmlzongjie.html.vue"]]);export{T as default};