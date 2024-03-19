import{_ as s,o as a,c as t,a as e,b as n,f as p}from"./app-GYMnAgnr.js";const o="/viteblog/assets/225-wFW9mvGE.png",c="/viteblog/assets/226-nBpXdDeU.png",i="/viteblog/assets/227-FfKanIe8.png",l="/viteblog/assets/228-GMekLvCU.png",u="/viteblog/assets/229-IdrFwql0.png",r="/viteblog/assets/230-1dAL2Z7E.png",k={},d=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,"我们分析完毕了源码以及自动装配的过程，我们可以尝试自定义一个启动器来玩玩")],-1),v=p('<h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2><p>启动器模块是一个 空 jar 文件，仅提供辅助性依赖管理，这些依赖可能用于自动装配或者其他类库；</p><p><strong>命名归约：</strong></p><p>官方命名：</p><ul><li>前缀：spring-boot-starter-xxx</li><li>比如：spring-boot-starter-web....</li></ul><p>自定义命名：</p><ul><li>xxx-spring-boot-starter</li><li>比如：mybatis-spring-boot-starter</li></ul><h2 id="编写启动器" tabindex="-1"><a class="header-anchor" href="#编写启动器" aria-hidden="true">#</a> 编写启动器</h2><p>1、在IDEA中新建一个空项目 spring-boot-starter-diy</p><p>2、新建一个普通Maven模块：kuang-spring-boot-starter</p><p><img src="'+o+'" alt=""></p><p>3、新建一个Springboot模块：kuang-spring-boot-starter-autoconfigure</p><p><img src="'+c+'" alt=""></p><p>4、点击apply即可，基本结构：</p><p><img src="'+i+`" alt=""></p><p>5、在我们的 starter 中 导入 autoconfigure 的依赖！</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 启动器 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--  引入自动配置模块 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.kuang<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>kuang-spring-boot-starter-autoconfigure<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.0.1-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、将 autoconfigure 项目下多余的文件都删掉，Pom中只留下一个 starter，这是所有的启动器基本配置！</p><p><img src="`+l+`" alt=""></p><p>7、我们编写一个自己的服务</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>kuang</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloService</span> <span class="token punctuation">{</span>

    <span class="token class-name">HelloProperties</span> helloProperties<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">HelloProperties</span> <span class="token function">getHelloProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> helloProperties<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setHelloProperties</span><span class="token punctuation">(</span><span class="token class-name">HelloProperties</span> helloProperties<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>helloProperties <span class="token operator">=</span> helloProperties<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> helloProperties<span class="token punctuation">.</span><span class="token function">getPrefix</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> name <span class="token operator">+</span> helloProperties<span class="token punctuation">.</span><span class="token function">getSuffix</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8、编写HelloProperties 配置类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>kuang</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>context<span class="token punctuation">.</span>properties<span class="token punctuation">.</span></span><span class="token class-name">ConfigurationProperties</span></span><span class="token punctuation">;</span>

<span class="token comment">// 前缀 kuang.hello</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;kuang.hello&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloProperties</span> <span class="token punctuation">{</span>

   <span class="token keyword">private</span> <span class="token class-name">String</span> prefix<span class="token punctuation">;</span>
   <span class="token keyword">private</span> <span class="token class-name">String</span> suffix<span class="token punctuation">;</span>

   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getPrefix</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> prefix<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPrefix</span><span class="token punctuation">(</span><span class="token class-name">String</span> prefix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>prefix <span class="token operator">=</span> prefix<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getSuffix</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> suffix<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSuffix</span><span class="token punctuation">(</span><span class="token class-name">String</span> suffix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>suffix <span class="token operator">=</span> suffix<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>9、编写我们的自动配置类并注入bean，测试</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>kuang</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span>condition<span class="token punctuation">.</span></span><span class="token class-name">ConditionalOnWebApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>context<span class="token punctuation">.</span>properties<span class="token punctuation">.</span></span><span class="token class-name">EnableConfigurationProperties</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ConditionalOnWebApplication</span> <span class="token comment">//web应用生效</span>
<span class="token annotation punctuation">@EnableConfigurationProperties</span><span class="token punctuation">(</span><span class="token class-name">HelloProperties</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloServiceAutoConfiguration</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">HelloProperties</span> helloProperties<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">HelloService</span> <span class="token function">helloService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">HelloService</span> service <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HelloService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        service<span class="token punctuation">.</span><span class="token function">setHelloProperties</span><span class="token punctuation">(</span>helloProperties<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> service<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>10、在resources编写一个自己的 META-INF\\spring.factories</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Auto Configure
org.springframework.boot.autoconfigure.EnableAutoConfiguration=\\
com.kuang.HelloServiceAutoConfiguration
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>11、编写完成后，可以安装到maven仓库中</p><p><img src="`+u+`" alt=""></p><h2 id="新建项目测试我们自己写的启动器" tabindex="-1"><a class="header-anchor" href="#新建项目测试我们自己写的启动器" aria-hidden="true">#</a> 新建项目测试我们自己写的启动器</h2><p>1、新建一个SpringBoot 项目</p><p>2、导入我们自己写的启动器</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.kuang<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>kuang-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>   
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、编写一个 HelloController 进行测试我们自己的写的接口！</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>kuang<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RestControllerpublic</span> <span class="token keyword">class</span> <span class="token class-name">HelloController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>    
    <span class="token class-name">HelloService</span> helloService<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">)</span> 
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>    
        <span class="token keyword">return</span> helloService<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token string">&quot;zxc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、编写配置文件 application.properties</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">kuang.hello.prefix</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;ppp&quot;</span>
<span class="token key attr-name">kuang.hello.suffix</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;sss&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>5、启动项目进行测试，结果成功 !</p><img src="`+r+'" style="zoom:50%;">',39);function m(g,b){return a(),t("div",null,[d,e(" more "),v])}const w=s(k,[["render",m],["__file","zidingyiStarter.html.vue"]]);export{w as default};
