import{_ as s,o as a,c as t,a as p,b as n,f as o}from"./app-GYMnAgnr.js";const e="/viteblog/assets/503-3JCQma5_.png",c="/viteblog/assets/502-bhcB4n8c.png",l="/viteblog/assets/501-CJPdG8fL.png",i={},u=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,"协议：当我们跟别人合作的时候，需要先定义好双方要做的事情，解决利益怎么分配等问题，免得在合作的时候出现分歧。")],-1),r=o('<h2 id="什么是-http-协议" tabindex="-1"><a class="header-anchor" href="#什么是-http-协议" aria-hidden="true">#</a> 什么是 HTTP 协议</h2><p>HTTP：HyperText Transfer Protocol，超文本传输协议，<strong>规定了浏览器和服务器之间数据传输的规则</strong>。换言之，它规定了我们在发起 HTTP 请求的时候，这个请求的数据包里面都包含了什么样的数据，以及数据按照什么样的先后顺序和格式存放在数据包里面。</p><p>如果想知道具体的格式，可以打开浏览器，按下 <code>F12</code> 打开开发者工具，点击 <code>Network</code> 来查看某一次请求的请求数据和响应数据具体的格式内容。</p><h2 id="http-请求和-http-响应过程" tabindex="-1"><a class="header-anchor" href="#http-请求和-http-响应过程" aria-hidden="true">#</a> HTTP 请求和 HTTP 响应过程</h2><ol><li><p><strong>建立 TCP 连接</strong> 在 HTTP 工作开始之前，Web 浏览器首先要通过网络与 Web 服务器建立连接，该连接是通过 TCP 来完成的，该协议与 IP 协议共同构建了 Internet，即著名的 TCP/IP 协议族，因此 Internet 又被称作是 TCP/IP 网络。</p><p>HTTP 是比 TCP 更高层次的应用层协议，根据规则，<strong>只有低层协议建立之后才能进行更高层协议的连接</strong>，因此，首先要建立 TCP 连接，一般 TCP 连接的端口号是 80。</p></li><li><p><strong>Web 浏览器向 Web 服务器发送请求命令</strong> 一旦建立了 TCP 连接，Web 浏览器就会向 Web 服务器发送请求命令。例如：<strong>GET/sample/hello.jsp HTTP/1.1</strong>。</p></li><li><p><strong>Web 浏览器发送请求头信息</strong> 浏览器发送请求命令之后，还要以头信息的形式向 Web 服务器发送一些别的信息，而且之后浏览器还要发送一空白行来通知服务器表面自己已经结束了头信息的发送。</p></li><li><p><strong>Web 服务器应答</strong> 浏览器向服务器发出请求后，服务器会向浏览器回送应答， <strong>HTTP/1.1 200 OK</strong> ，应答的第一部分是协议的版本号和应答状态码。</p></li><li><p><strong>Web 服务器发送应答头信息</strong> 正如浏览器会随同请求发送关于自身的信息一样，服务器也会随同应答向用户发送关于它自己的数据及被请求的文档。</p></li><li><p><strong>Web 服务器向浏览器发送数据</strong> Web 服务器向浏览器发送头信息后，它会发送一个空白行来表示头信息的发送到此为结束，接着，它就以 Content-Type 应答头信息所描述的格式发送用户所请求的实际数据。</p></li><li><p><strong>Web 服务器关闭 TCP 连接</strong></p></li></ol><p>学习 HTTP 主要就是学习 <strong>请求</strong> 和 <strong>响应数据</strong> 的具体格式内容。</p><h2 id="http-协议特点" tabindex="-1"><a class="header-anchor" href="#http-协议特点" aria-hidden="true">#</a> HTTP 协议特点</h2><p>HTTP 协议有它自己的一些特点：</p><ul><li><p>基于 TCP 协议：面向连接，安全。</p><p>TCP 是一种面向连接的（建立连接之前需要经过三次握手）、可靠的、基于字节流的传输层通信协议，在数据传输方面更安全。</p></li><li><p>基于 <strong>请求-响应模型</strong> 的：一次请求对应一次响应，请求和响应是一一对应的关系。</p></li><li><p>HTTP协议是无状态协议：对于事物处理没有记忆能力，每次请求-响应都是独立的。</p></li></ul><p>HTTP 协议 <strong>无状态</strong> 的特性：</p><ul><li><p>无状态指的是客户端发送 HTTP 请求给服务端之后，服务端根据请求响应数据，响应完后，不会记录任何信息。</p></li><li><p>这种特性有优点也有缺点：</p><p>缺点：多次请求间不能共享数据</p><p>优点：</p><ul><li><strong>简单易用</strong>：由于每个请求都是独立的，所以实现起来非常简单</li><li><strong>可扩展性强</strong>：由于没有状态信息需要保存，所以可以轻松地增加或减少服务器数量来满足需求变化</li><li><strong>更高的效率</strong>：由于不需要维护状态信息，所以服务器的负载会更轻，响应速度更快</li></ul></li><li><p>请求之间无法共享数据会引发一些问题，比如:</p><ul><li>购物网站里，<strong>加入购物车</strong> 和 <strong>去购物车结算</strong> 是两次独立的请求，而由于 HTTP 协议的无状态特性，加入购物车请求响应结束后，并未记录加入购物车是何商品，因此，发起去购物车结算的请求后，因为无法获取哪些商品加入了购物车，会导致此次请求无法正确展示数据。</li><li>具体使用的时候，我们发现购物网站是可以正常展示数据的，原因是 Java 早已考虑到这个问题，并提出了使用 <strong>会话技术(Cookie、Session)</strong> 来解决这个问题。</li></ul></li></ul><p>刚才提到 HTTP 协议是规定了请求和响应数据的格式，那具体的格式是什么呢?</p><h2 id="请求数据格式" tabindex="-1"><a class="header-anchor" href="#请求数据格式" aria-hidden="true">#</a> 请求数据格式</h2><p>请求数据总共分为三部分内容，分别是 <strong>请求行</strong>、<strong>请求头</strong>、<strong>请求体</strong>：</p><p><img src="'+e+'" alt="1627050004221"></p><ul><li><p><strong>请求行</strong>：HTTP 请求中的第一行数据，请求行包含三块内容，分别是 GET[<strong>请求方式</strong>]、 /[<strong>请求URL路径</strong>]、 HTTP/1.1[<strong>HTTP协议及版本</strong>]</p><p>请求方式有七种，最常用的是 GET 和 POST</p></li><li><p><strong>请求头</strong>：第二行开始，格式为 <strong>key: value</strong> 形式</p><p>请求头中会包含若干个属性，常见的 HTTP 请求头有：</p><table><thead><tr><th>属性</th><th>内容</th></tr></thead><tbody><tr><td>Host</td><td>表示请求的主机名</td></tr><tr><td>User-Agent</td><td>浏览器版本，例如Chrome浏览器的标识类似Mozilla/5.0 ...Chrome/79，IE浏览器的标识类似Mozilla/5.0 (Windows NT ...)like Gecko</td></tr><tr><td>Accept</td><td>表示浏览器能接收的资源类型，如text/*，image/*或者*/*表示所有</td></tr><tr><td>Accept-Language</td><td>表示浏览器偏好的语言，服务器可以据此返回不同语言的网页</td></tr><tr><td>Accept-Encoding</td><td>表示浏览器可以支持的压缩类型，例如gzip、deflate等</td></tr></tbody></table><p>这些数据的作用：</p><p>服务端可以根据请求头中的内容来获取客户端的相关信息，有了这些信息服务端就可以处理不同的业务需求，比如：</p><p>不同浏览器解析 HTM L和 CSS 标签的结果会有不一致，所以就会导致相同的代码在不同的浏览器会出现不同的效果，服务端根据客户端请求头中的数据获取到客户端的浏览器类型，就可以根据不同的浏览器设置不同的代码来达到一致的效果，这就是我们常说的浏览器兼容问题。</p></li><li><p><strong>请求体</strong>：POST请求的最后一部分，存储请求参数</p><p><img src="'+c+'" alt="1627050930378"></p><p>如上图红线框的内容就是请求体的内容，请求体和请求头之间是有一个空行隔开。</p><p>此时浏览器发送的是 POST 请求，为什么不能使用 GET 呢？这时就需要回顾 GET 和 POST 两个请求之间的区别了：</p><ul><li>GET 请求的请求参数在请求行中，没有请求体，POST 请求的请求参数在请求体中。</li><li>GET 请求的请求参数大小有限制，POST 没有。</li></ul></li></ul><h2 id="响应数据格式" tabindex="-1"><a class="header-anchor" href="#响应数据格式" aria-hidden="true">#</a> 响应数据格式</h2><h3 id="格式介绍" tabindex="-1"><a class="header-anchor" href="#格式介绍" aria-hidden="true">#</a> 格式介绍</h3><p>响应数据总共分为三部分内容，分别是 <strong>响应行</strong>、<strong>响应头</strong>、<strong>响应体</strong>：</p><p><img src="'+l+`" alt="1627053710214"></p><ul><li><p><strong>响应行</strong>：响应数据的第一行，响应行包含三块内容，分别是 HTTP/1.1[<strong>HTTP 协议及版本</strong>]、 200[<strong>响应状态码</strong>]、 ok[<strong>状态码的描述</strong>]</p></li><li><p><strong>响应头</strong>：第二行开始，格式为 <strong>key: value</strong> 形式</p><p>响应头中会包含若干个属性，常见的 HTTP 响应头有：</p><table><thead><tr><th>属性</th><th>内容</th></tr></thead><tbody><tr><td>Content-Type</td><td>表示该响应内容的类型，例如 text/html，image/jpeg</td></tr><tr><td>Content-Length</td><td>表示该响应内容的长度（字节数）</td></tr><tr><td>Content-Encoding</td><td>表示该响应压缩算法，例如 gzip</td></tr><tr><td>Cache-Control</td><td>指示客户端应如何缓存，例如 max-age=300 表示可以最多缓存300秒</td></tr></tbody></table></li><li><p><strong>响应体</strong>： 最后一部分，存放响应数据。</p><p>上图中&lt;html&gt;...&lt;/html&gt;这部分内容就是响应体，它和响应头之间有一个空行隔开。</p></li></ul><h3 id="响应状态码" tabindex="-1"><a class="header-anchor" href="#响应状态码" aria-hidden="true">#</a> 响应状态码</h3><p>关于响应状态码，我们最常见的是以下三个状态码：</p><ul><li>200 ok 客户端请求成功</li><li>404 Not Found 请求资源不存在</li><li>500 Internal Server Error 服务端发生不可预期的错误</li></ul><h4 id="状态码大类" tabindex="-1"><a class="header-anchor" href="#状态码大类" aria-hidden="true">#</a> 状态码大类</h4><table><thead><tr><th>状态码分类</th><th>说明</th></tr></thead><tbody><tr><td>1xx</td><td><strong>响应中</strong>——临时状态码，表示请求已经接受，告诉客户端应该继续请求或者如果它已经完成则忽略它</td></tr><tr><td>2xx</td><td><strong>成功</strong>——表示请求已经被成功接收，处理已完成</td></tr><tr><td>3xx</td><td><strong>重定向</strong>——重定向到其它地方：它让客户端再发起一个请求以完成整个处理</td></tr><tr><td>4xx</td><td><strong>客户端错误</strong>——处理发生错误，责任在客户端，如：客户端的请求一个不存在的资源，客户端未被授权，禁止访问等</td></tr><tr><td>5xx</td><td><strong>服务器端错误</strong>——处理发生错误，责任在服务端，如：服务端抛出异常，路由出错，HTTP版本不支持等</td></tr></tbody></table><p>状态码大全：https://cloud.tencent.com/developer/chapter/13553</p><h4 id="常见的响应状态码" tabindex="-1"><a class="header-anchor" href="#常见的响应状态码" aria-hidden="true">#</a> 常见的响应状态码</h4><table><thead><tr><th>状态码</th><th>英文描述</th><th>解释</th></tr></thead><tbody><tr><td>200</td><td><strong><code>OK</code></strong></td><td>客户端请求成功，即<strong>处理成功</strong>，这是我们最想看到的状态码</td></tr><tr><td>302</td><td><strong><code>Found</code></strong></td><td>指示所请求的资源已移动到由<code>Location</code>响应头给定的 URL，浏览器会自动重新访问到这个页面</td></tr><tr><td>304</td><td><strong><code>Not Modified</code></strong></td><td>告诉客户端，你请求的资源至上次取得后，服务端并未更改，你直接用你本地缓存吧。隐式重定向</td></tr><tr><td>400</td><td><strong><code>Bad Request</code></strong></td><td>客户端请求有<strong>语法错误</strong>，不能被服务器所理解</td></tr><tr><td>403</td><td><strong><code>Forbidden</code></strong></td><td>服务器收到请求，但是<strong>拒绝提供服务</strong>，比如：没有权限访问相关资源</td></tr><tr><td>404</td><td><strong><code>Not Found</code></strong></td><td><strong>请求资源不存在</strong>，一般是URL输入有误，或者网站资源被删除了</td></tr><tr><td>428</td><td><strong><code>Precondition Required</code></strong></td><td><strong>服务器要求有条件的请求</strong>，告诉客户端要想访问该资源，必须携带特定的请求头</td></tr><tr><td>429</td><td><strong><code>Too Many Requests</code></strong></td><td><strong>太多请求</strong>，可以限制客户端请求某个资源的数量，配合 Retry-After(多长时间后可以请求)响应头一起使用</td></tr><tr><td>431</td><td><strong><code> Request Header Fields Too Large</code></strong></td><td><strong>请求头太大</strong>，服务器不愿意处理请求，因为它的头部字段太大。请求可以在减少请求头域的大小后重新提交。</td></tr><tr><td>405</td><td><strong><code>Method Not Allowed</code></strong></td><td>请求方式有误，比如应该用GET请求方式的资源，用了POST</td></tr><tr><td>500</td><td><strong><code>Internal Server Error</code></strong></td><td><strong>服务器发生不可预期的错误</strong>。服务器出异常了，赶紧看日志去吧</td></tr><tr><td>503</td><td><strong><code>Service Unavailable</code></strong></td><td><strong>服务器尚未准备好处理请求</strong>，服务器刚刚启动，还未初始化好</td></tr><tr><td>511</td><td><strong><code>Network Authentication Required</code></strong></td><td><strong>客户端需要进行身份验证才能获得网络访问权限</strong></td></tr></tbody></table><h2 id="自定义服务器" tabindex="-1"><a class="header-anchor" href="#自定义服务器" aria-hidden="true">#</a> 自定义服务器</h2><p>这里有一个 Server.java 类，这里面就是自定义的一个服务器代码，主要使用到的是 <code>ServerSocket</code> 和 <code>Socket</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span><span class="token class-name">IOUtils</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">ServerSocket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">Socket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>nio<span class="token punctuation">.</span>charset<span class="token punctuation">.</span></span><span class="token class-name">StandardCharsets</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>nio<span class="token punctuation">.</span>file<span class="token punctuation">.</span></span><span class="token class-name">Files</span></span><span class="token punctuation">;</span>
<span class="token comment">/*
    自定义服务器
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Server</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">ServerSocket</span> ss <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServerSocket</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 监听指定端口</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;server is running...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">Socket</span> sock <span class="token operator">=</span> ss<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;connected from &quot;</span> <span class="token operator">+</span> sock<span class="token punctuation">.</span><span class="token function">getRemoteSocketAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Thread</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Handler</span><span class="token punctuation">(</span>sock<span class="token punctuation">)</span><span class="token punctuation">;</span>
            t<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Handler</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
    <span class="token class-name">Socket</span> sock<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Handler</span><span class="token punctuation">(</span><span class="token class-name">Socket</span> sock<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sock <span class="token operator">=</span> sock<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">InputStream</span> input <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sock<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">OutputStream</span> output <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sock<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">handle</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> output<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>sock<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> ioe<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;client disconnected.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token class-name">InputStream</span> input<span class="token punctuation">,</span> <span class="token class-name">OutputStream</span> output<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">BufferedReader</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BufferedWriter</span> writer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span>output<span class="token punctuation">,</span> <span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 读取HTTP请求:</span>
        <span class="token keyword">boolean</span> requestOk <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> first <span class="token operator">=</span> reader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>first<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;GET / HTTP/1.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            requestOk <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> header <span class="token operator">=</span> reader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>header<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 读取到空行时, HTTP Header读取完毕</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>requestOk <span class="token operator">?</span> <span class="token string">&quot;Response OK&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Response Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>requestOk<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 发送错误响应:</span>
            writer<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;HTTP/1.0 404 Not Found\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            writer<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Length: 0\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            writer<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            writer<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 发送成功响应:</span>

            <span class="token comment">//读取html文件，转换为字符串</span>
            <span class="token class-name">BufferedReader</span> br <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token string">&quot;http/html/a.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">StringBuilder</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> line <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>line <span class="token operator">=</span> br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                data<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            br<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> length <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

            writer<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;HTTP/1.1 200 OK\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            writer<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;Connection: keep-alive\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            writer<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Type: text/html\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            writer<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Length: &quot;</span> <span class="token operator">+</span> length <span class="token operator">+</span> <span class="token string">&quot;\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            writer<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 空行标识Header和Body的分隔</span>
            writer<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            writer<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上述代码，可以了解到服务器能够使用 Java 编写，是可以接受页面发送的请求和响应数据给前端浏览器的。</p><p>平时真正用到的 Web 服务器，比这个例子要复杂很多，但我们不需要自己写，都是使用目前比较流行的 Web 服务器，比如 <strong>Tomcat</strong>。</p><p>Web 服务器的作用：</p><ul><li>封装 HTTP 协议操作，简化开发。</li><li>可以将web项目部署到服务器中，对外提供网上浏览服务。</li></ul><p>Tomcat 是一个轻量级的Web服务器，支持 Servlet/JSP 少量 JavaEE 规范，也称为 Web 容器，Servlet 容器。</p>`,37);function d(k,m){return a(),t("div",null,[u,p(" more "),r])}const g=s(i,[["render",d],["__file","HTTPxieyi.html.vue"]]);export{g as default};
