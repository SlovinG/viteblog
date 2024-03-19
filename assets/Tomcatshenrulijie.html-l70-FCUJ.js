import{_ as n,o as t,c as s,a as e,b as a,f as o}from"./app-GYMnAgnr.js";const p="/viteblog/assets/557-IXv5cS2b.png",c="/viteblog/assets/556-WJzoV5ds.jpg",l="/viteblog/assets/559-J_-HYqEW.png",r="/viteblog/assets/558-_Mrrh8zC.png",i="/viteblog/assets/560-KFquMgxF.png",u="/viteblog/assets/561-JXZo0uQ8.png",k={},d=a("div",{class:"custom-container tip"},[a("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[a("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[a("circle",{cx:"12",cy:"12",r:"9"}),a("path",{d:"M12 8h.01"}),a("path",{d:"M11 12h1v4h1"})])]),a("p",{class:"custom-container-title"},"TIP"),a("p",null,"Tomcat 是做 Java Web 开发时部署服务最受欢迎的容器，关于它的运行机制和调优参数，本文会进行一定的整理。")],-1),m=o('<p><img src="'+p+'" alt=""></p><p>在现在流行的互联网架构中，对一个应用来说，Tomcat 是首，SSM 是中，JVM 是尾，我们通常对于 SSM 是比较了解的，而忽略了首尾。</p><p>而 Tomcat 在网络编程中的作用是举足轻重的，但我们对 Tomcat 其实不太了解，比如：</p><ul><li>如果我们能弄清楚 Tomcat 和 Socket、TCP 之间的关系，我们就能明白为什么 Tomcat 会出现端口冲突。</li><li>如果我们能准确的知道 Tomcat 中部署一个项目的 n 种方式，那么就能在工作中更加得心应手。</li><li>Tomcat 中 <strong>热部署</strong> 和 <strong>热加载</strong> 的区别是什么，到底是如何实现的，弄明白它的实现原理，能很大程度上提高 Tomcat 的运行效率。</li><li>清楚 Tomcat 到底是如何处理一个请求的，有利于我们针对 Tomcat 进行性能调优。</li><li>目前的 Spring Boot 和 Dubbo 等框架中都是使用的内嵌 Tomcat，那么一个内嵌的 Tomcat 到底是如何运行的。</li><li>Tomcat 的架构设计其实非常优秀的，如果能明白 Tomcat 为什么要那么设计，那么对于 Tomcat 的原理和自己的架构设计思维都能有很大提升。</li><li>JSP 虽然过时，但是它的底层实现原理和思路依然保存着，那么 Tomcat 中到底是如何实现 JSP 功能的？</li></ul><p>在说 Tomcat 之前，我们得先回顾一下 Java Web</p><h2 id="java-web" tabindex="-1"><a class="header-anchor" href="#java-web" aria-hidden="true">#</a> Java Web</h2><p>Java Web 就是使用 Java 来编写浏览器可以访问的程序内容。</p><p>Java Web 包括 web 服务器和 web 客户端两个部分。</p><p>applet 程序是最早的 Java Web 客户端应用，目前已经过时。Servlet，jsp和第三方框架等是 Java Web的服务端应用。</p><p>Java Web 开发基于请求和响应，并且请求和响应是成对出现的：</p><ul><li>请求：浏览器(客户端)向服务器发送信息</li><li>响应：服务器向客户端回送信息</li></ul><img src="'+c+'" alt="img" style="zoom:67%;"><h2 id="web-资源种类" tabindex="-1"><a class="header-anchor" href="#web-资源种类" aria-hidden="true">#</a> Web 资源种类</h2><p><strong>Web 资源</strong>：放在 互联网上供外界访问的文件或程序。</p><p>而根据 Web 资源呈现的不同效果和不同的原理，我们一般将 Web 资源划分为 <strong>静态资源</strong> 和 <strong>动态资源</strong>。</p><ul><li><strong>静态 Web 资源</strong>：固定不变数据文件（静态网页 HTML、CSS文件、文本、音频、视频）</li><li><strong>静态 Web 技术</strong>：HTML+CSS+JavaScript</li><li><strong>动态 Web 资源</strong>：一段程序运行后，生成的数据文件</li><li><strong>动态 Web 技术</strong>：servlet，jsp，php， .net ，ruby、python等等</li></ul><h2 id="tomcat-服务器" tabindex="-1"><a class="header-anchor" href="#tomcat-服务器" aria-hidden="true">#</a> Tomcat 服务器</h2><p>Tomcat 就是一种由 Java 开发的开源小型 Web 服务器，免费，主要用于中小型 Web 项目，它还是一个满足 Servlet 和 jsp 等少量 javaEE 规范的容器。</p><p>那么想一想，Tomcat 和我们的 Web 应用是什么关系？</p><p>从感性上来说，我们一般需要把 Web 应用打成 war 包部署到 Tomcat 中，在我们的 Web 应用中，我们要指明 url 被哪个类的哪个方法所处理（不论是原始的 Servlet 开发，还是现在流行的 Spring MVC 都必须指明）。</p><p>由于我们的 Web 应用是运行在 Tomcat 中，那么显然，请求必定是先到达 Tomcat 的，而 Tomcat 再对于请求会进行以下的处理：</p><h3 id="提供-socket-服务" tabindex="-1"><a class="header-anchor" href="#提供-socket-服务" aria-hidden="true">#</a> 提供 Socket 服务</h3><p>Tomcat 的启动，必然是 Socket 服务，只不过它支持 HTTP 协议而已。</p><p>这里其实可以扩展思考下，Tomcat 既然是基于 Socket，那么是基于 BIO 还是 NIO 还是 AIO呢？</p><h3 id="进行请求的分发" tabindex="-1"><a class="header-anchor" href="#进行请求的分发" aria-hidden="true">#</a> 进行请求的分发</h3><p>要知道一个 Tomcat 可以为多个 Web 应用提供服务，那么很显然，Tomcat 可以把 url 下发到不同的 Web 应用。</p><h3 id="需要把请求和响应封装成-request-response" tabindex="-1"><a class="header-anchor" href="#需要把请求和响应封装成-request-response" aria-hidden="true">#</a> 需要把请求和响应封装成 request / response</h3><p>我们在 Web 应用这一层，可从来没有封装过 request / response 的，我们都是直接使用的，这就是因为 Tomcat 已经为我们做了封装这一步。</p><img src="'+l+'" style="zoom:80%;"><h2 id="tomcat-软件目录" tabindex="-1"><a class="header-anchor" href="#tomcat-软件目录" aria-hidden="true">#</a> Tomcat 软件目录</h2><ul><li><strong>bin</strong>：服务脚本</li><li><strong>conf</strong>：存放 Tomcat 服务器的配置文件，例如 server.xml、web.xml</li><li><strong>lib</strong>：Tomcat 启动后需要依赖的 jar 包</li><li><strong>logs</strong>：Tomcat 运行的日志文件，例如 xx.txt、xx.log</li><li><strong>webapps</strong>：是 Tomcat 文件部署的根目录</li><li><strong>work</strong>：存放 jsp 编译后的 .class 文件</li></ul><p><img src="'+r+`" alt="img"></p><h2 id="tomcat-的配置和结构" tabindex="-1"><a class="header-anchor" href="#tomcat-的配置和结构" aria-hidden="true">#</a> Tomcat 的配置和结构</h2><p>一个经典的 Tomcat 配置文件如下所示：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&#39;1.0&#39; encoding=&#39;utf-8&#39;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Server</span> <span class="token attr-name">port</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8005<span class="token punctuation">&quot;</span></span> <span class="token attr-name">shutdown</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SHUTDOWN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Listener</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.apache.catalina.core.AprLifecycleListener<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Listener</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.apache.catalina.core.JasperListener<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Listener</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.apache.catalina.core.JreMemoryLeakPreventionListener<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Listener</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.apache.catalina.mbeans.GlobalResourcesLifecycleListener<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Listener</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.apache.catalina.core.ThreadLocalLeakPreventionListener<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Service</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Catalina<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Connector</span> <span class="token attr-name">port</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8080<span class="token punctuation">&quot;</span></span> <span class="token attr-name">protocol</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>HTTP/1.1<span class="token punctuation">&quot;</span></span>
                <span class="token attr-name">connectionTimeout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20000<span class="token punctuation">&quot;</span></span>
                <span class="token attr-name">redirectPort</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8443<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Connector</span> <span class="token attr-name">port</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8009<span class="token punctuation">&quot;</span></span> <span class="token attr-name">protocol</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>AJP/1.3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">redirectPort</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8443<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Engine</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Catalina<span class="token punctuation">&quot;</span></span> <span class="token attr-name">defaultHost</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>www.testwebapp.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Host</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>www.testwebapp.com<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">appBase</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>webapps<span class="token punctuation">&quot;</span></span>
             <span class="token attr-name">unpackWARs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autoDeploy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Host</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Engine</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Service</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Server</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以看到它的结构：</p><ul><li>Server 组件，顶级元素，是 Tomcat 的运行实例，一个 JVM 只包含一个 Server 组件</li><li>Listener，内置的一些监听器，可以帮我们在发生特定事件的时候起到相应的作用</li><li>Service 组件，可以有多个，它是将 Connector 组件与 Container 组件包装组合在一起，对外提供服务。该组件中会包含多个 Connector 组件以及一个Container组件</li><li>Connector 组件，隶属于 Service 组件，可以有多个，如这里分别监听了 HTTP/1.1协议和 AJP/1.3 协议并分别绑定两个独立端口。负责将 Socket 请求过来的数据，都封装成 Request 请求对象，同时将该请求对象传递给容器进行下一步的处理</li><li>Engine 引擎，用来管理多个站点， 一个 Service 最多只能有一个 Engine</li><li>Host，代表一个站点，也可以叫虚拟主机。它指定具体的服务的部署位置，如 appBase 指定了代码的部署文件夹路径，并且是否支持自动部署和自动解压 war 包</li><li>Context ：代表一个应用程序，即为我们开发的一个 war 服务在 webapp 目录下的各个应用，或者一个 WEB-INF 目录以及下面的 web.xml 文件</li><li>Wrapper ：每个 Wrapper 封装着一个 servlet</li></ul><p>可以从更深层次的视角来查看架构：</p><p><img src="`+i+'" alt="图片"></p><h2 id="http-请求的处理流程" tabindex="-1"><a class="header-anchor" href="#http-请求的处理流程" aria-hidden="true">#</a> HTTP 请求的处理流程</h2><p>当一个 HTTP 请求到达 Tomcat 后，所经历的大致流程如下：</p><ol><li>在用户在浏览器中点击页面进行数据请求后，Tomcat 本机默认端口 8080 接收到数据请求，被在那里监听的 Coyote HTTP/1.1 Connector 获得</li><li>Connector 把封装好的 Request 请求交由其所在的 Service 的 Engine 来处理，并等待 Engine 的回应</li><li>Engine 获得请求 <code>localhost/test/index.jsp</code> ，匹配所有的虚拟主机 Host</li><li>Engine 匹配到名为 <code>localhost</code> 的 Host（即使匹配不到也会把请求交给该Host处理，因为该 Host 被定义为该 Engine 的默认主机），名为 <code>localhost</code> 的 Host 获得请求 <code>/test/index.jsp</code>，匹配它所拥有的所有的Context。Host匹配到路径为 <code>/test</code> 的Context（如果匹配不到就把该请求交给路径名为 “ ”的Context 去处理）</li><li>path=“/test” 的 Contex t获得请求 <code>/index.jsp</code>，在它的 mapping table 中寻找出对应的 Servlet。Context匹配到 URL PATTERN 为 <code>*.jsp</code> 的 Servlet，对应于 JspServlet 类</li><li>构造 <strong>HttpServletRequest</strong> 对象和 <strong>HttpServletResponse</strong> 对象，作为参数调用 JspServlet 的 doGet() 或者 doPost()，执行业务逻辑、数据存储等程序</li><li>Context 把执行完之后的 <strong>HttpServletResponse</strong> 对象返回给 Host</li><li>Host 把 <strong>HttpServletResponse</strong> 响应对象返回至 Engine</li><li>Engine 将 <strong>HttpServletResponse</strong> 响应对象返回至 Connector</li><li>Connector 将 <strong>HttpServletResponse</strong> 响应对象返回给客户端的浏览器</li></ol><h2 id="connector" tabindex="-1"><a class="header-anchor" href="#connector" aria-hidden="true">#</a> Connector</h2><p>Connector 是 Tomcat 的核心组件，主要参数如下：</p><ul><li><strong>maxThreads</strong>：默认200，表示任意时刻能够并行执行的最大线程数</li><li><strong>minSpareThreads</strong>：默认值10，表示任意时刻处于running状态的线程的最小值，包括 idle 和 active 两种状态的线程</li><li><strong>maxConnections</strong>：Tomcat 能够接收和处理的并发连接的最大值，超过这个值后的连接将会被放入一个 队列中，等待有空闲线程调用。默认值 10000（NIO/NIO2）或 8192（APR/native）</li><li><strong>acceptCount</strong>：默认值100，当没有空闲线程的时候新的 TCP 请求连接都会放入一个 队列中，这个是队列的长度值，超过就直接拒绝请求了</li><li><strong>connectionTimeout</strong>：单位毫秒，超过这个值 Connector 将会释放这个 idle 的连接</li></ul><p>Tomcat启动的时候会首先创建 minSpareThreads 个线程，然后随着负载的增加一直增加到 maxThreads，如果此时所有线程都处于 busy 状态，此后再来的 请求将会被放入队列中（最大容纳 acceptCount）直到有空闲线程来执行。当queue满了并且连接数量达到了 maxConnections，后续再连接进来的 connection 将收到 <code>Connection Refused</code> 错误。此时应该对线程池的容量做适当调整， 但也不能调整过大，防止服务器负载升高。</p><h2 id="executor" tabindex="-1"><a class="header-anchor" href="#executor" aria-hidden="true">#</a> Executor</h2><p>它可以更好的在多个 Connector 之间控制和调度线程池的资源，也便于控制服务器的负载。它的机制和 Connector 中的默认线程池一样，使用最小和最大线程池参数控制线程个数， 并通过 maxQueueSize 控制队列的大小，如果超过了能够容纳的容量，则抛出 <code>RejectedExecutionException</code> 错误。</p><h2 id="线程模型" tabindex="-1"><a class="header-anchor" href="#线程模型" aria-hidden="true">#</a> 线程模型</h2><p>对照下面这张图，可以比较清晰的理解 Tomcat 的 Connector 和 nio 模型：</p><p><img src="'+u+'" alt=""></p><h3 id="acceptor" tabindex="-1"><a class="header-anchor" href="#acceptor" aria-hidden="true">#</a> Acceptor</h3><p>接收 socket 线程，这里虽然是基于 NIO 的 connector，但是在接收 socket 方面还是传统的 serverSocket.accept() 方式， 获得 SocketChannel 对象，然后封装在一个 Tomcat 的实现类 org.apache.tomcat.util.net.NioChannel 对象中。然后将NioChannel对象封装在一个PollerEvent对象中，并将 PollerEvent 对象压入 events queue 里。这里是个典型的 <strong>生产者-消费者模式</strong>，Acceptor 与 Poller 线程之间通过 queue 通信，Acceptor 是 events queue 的生产者， Poller 是 events queue 的消费者。</p><h3 id="poller" tabindex="-1"><a class="header-anchor" href="#poller" aria-hidden="true">#</a> Poller</h3><p>Poller 线程中维护了一个 Selector 对象，NIO就是基于 Selector 来完成逻辑的。在 connector 中并不止一个 Selector， 在 socket 的读写数据时，为了控制 timeout 也有一个 Selector。可以先把 Poller 线程中维护的这个 Selector 标记为主 Selector 。Poller是NIO实现的主要线程。首先作为 events queue 的消费者， 从 queue 中取出 PollerEvent 对象，然后将此对象中的 channel 以 OP_READ 事件注册到 主 Selector 中，然后主 Selector 执行 select 操作， 遍历出可以读数据的 socket，并从 Worker 线程池中拿到可用的Worker线程，然后将 socket 传递给 Worker。</p><h3 id="worker" tabindex="-1"><a class="header-anchor" href="#worker" aria-hidden="true">#</a> Worker</h3><p>Worker 线程拿到 Poller 传过来的 socket 后，将 socket 封装在 SocketProcessor 对象中。然后从 Http11ConnectionHandler 中取出Http11NioProcessor 对象，从 Http11NioProcessor 中调用 CoyoteAdapter 的逻辑。</p>',57);function g(v,h){return t(),s("div",null,[d,e(" more "),m])}const q=n(k,[["render",g],["__file","Tomcatshenrulijie.html.vue"]]);export{q as default};