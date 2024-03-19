import{_ as n,o as a,c as s,a as t,f as p}from"./app-GYMnAgnr.js";const e="/viteblog/assets/155-vrmxnaJX.png",l="/viteblog/assets/image-20210811200516648-kq3SYcEg.png",i="/viteblog/assets/image-20210811200646189-69g1mZhq.png",o="/viteblog/assets/image-20210811200628431-JQsFzSNY.png",c={},u=p(`<p>在实际开发中，项目的开发环境、测试环境、生产环境的配置信息往往是不一致的（比如数据库连接配置），所以我们需要掌握如何快速切换环境。</p><p>Spring 利用 profile 对不同环境提供了不同配置功能的支持，可以通过激活不同的环境版本，实现快速切换环境。</p><h2 id="多配置文件" tabindex="-1"><a class="header-anchor" href="#多配置文件" aria-hidden="true">#</a> 多配置文件</h2><p>我们在主配置文件编写的时候，文件名可以是 <code>application-{profile}.properties/yml</code> , 用来指定多个环境版本；</p><p><strong>例如：</strong></p><ul><li><p><code>application-test.properties</code> 代表测试环境配置</p></li><li><p><code>application-dev.properties</code> 代表开发环境配置</p></li></ul><p>但是 SpringBoot 并不会直接启动这些配置文件，它 <strong>默认使用 application.properties 主配置文件</strong></p><p>我们需要通过一个配置来选择需要激活的环境：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment">#比如在配置文件中指定使用dev环境，我们可以通过设置不同的端口号进行测试；</span>
<span class="token comment">#我们启动SpringBoot，就可以看到已经切换到dev下的配置了；</span>
<span class="token key attr-name">spring.profiles.active</span><span class="token punctuation">=</span><span class="token value attr-value">dev</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="yaml-的多文档块" tabindex="-1"><a class="header-anchor" href="#yaml-的多文档块" aria-hidden="true">#</a> yaml 的多文档块</h2><p>和 properties 配置文件中一样，但是使用 yml 去实现则不需要创建多个配置文件，更加方便了</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#公共配置信息</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8081</span>
  
<span class="token comment">#选择要激活的环境块</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
    <span class="token key atrule">active</span><span class="token punctuation">:</span> pro
    
<span class="token punctuation">---</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8083</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> pro <span class="token comment">#配置环境的名称</span>

<span class="token punctuation">---</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8084</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> dev  <span class="token comment">#配置环境的名称</span>
  
<span class="token punctuation">---</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8085</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> test  <span class="token comment">#配置环境的名称</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：如果 yml 和 properties 同时都配置了端口，并且没有激活其他环境，默认会使用 properties 配置文件里的！</strong></p><h2 id="配置文件加载位置" tabindex="-1"><a class="header-anchor" href="#配置文件加载位置" aria-hidden="true">#</a> 配置文件加载位置</h2><p><strong>外部加载配置文件的方式十分多，我们选择最常用的即可，在开发的资源文件中进行配置！</strong></p><p>官方外部配置文件说明参考文档：</p><p><img src="`+e+`" alt=""></p><p>springboot 启动会扫描以下位置的 <code>application.properties</code> 或者 <code>application.yml</code> 文件作为 SpringBoot 的默认配置文件：</p><ul><li>优先级1：项目路径下的 config 文件夹配置文件</li><li>优先级2：项目路径下配置文件</li><li>优先级3：资源路径下的 config 文件夹配置文件</li><li>优先级4：资源路径下配置文件</li></ul><p><strong>优先级由高到底，高优先级的配置会覆盖低优先级的配置；</strong></p><p><strong>SpringBoot 会从这四个位置全部加载主配置文件，互补配置；</strong></p><p>1 级与 2 级一般留做系统打包后设置通用属性，3 级与 4 级一般用于系统开发阶段设置通用属性。</p><h2 id="拓展-运维小技巧" tabindex="-1"><a class="header-anchor" href="#拓展-运维小技巧" aria-hidden="true">#</a> 拓展，运维小技巧</h2><p><strong>指定位置加载配置文件：我们可以通过 <code>spring.config.location</code> 来改变默认的配置文件位置。</strong></p><p>项目打包好以后，我们可以使用命令行参数的形式，启动项目的时候来指定配置文件的新位置。</p><p>这种情况，一般是后期运维做的多，相同配置，<strong>外部指定的配置文件优先级是最高的</strong>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> spring-boot-config.jar <span class="token parameter variable">--spring.config.location</span><span class="token operator">=</span>F:/application.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> –jar springboot.jar <span class="token parameter variable">--spring.profiles.active</span><span class="token operator">=</span>test
<span class="token function">java</span> –jar springboot.jar <span class="token parameter variable">--server.port</span><span class="token operator">=</span><span class="token number">88</span>
<span class="token function">java</span> –jar springboot.jar <span class="token parameter variable">--server.port</span><span class="token operator">=</span><span class="token number">88</span> <span class="token parameter variable">--spring.profiles.active</span><span class="token operator">=</span>test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="maven-与-springboot-多环境兼容" tabindex="-1"><a class="header-anchor" href="#maven-与-springboot-多环境兼容" aria-hidden="true">#</a> Maven 与 SpringBoot 多环境兼容</h2><p>SpringBoot 工程最终由 Maven 来指定自己的 profile 内容，也就是如果二者指定的环境不同，会由 Maven 主导运行环境。</p><h3 id="maven-中设置多环境属性" tabindex="-1"><a class="header-anchor" href="#maven-中设置多环境属性" aria-hidden="true">#</a> Maven 中设置多环境属性</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profiles</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--开发环境--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>dev_env<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile.active</span><span class="token punctuation">&gt;</span></span>dev<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile.active</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activation</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activeByDefault</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activeByDefault</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activation</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--生产环境--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>pro_env<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile.active</span><span class="token punctuation">&gt;</span></span>pro<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile.active</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--测试环境--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>test_env<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile.active</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile.active</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profiles</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="springboot-中引用-maven-属性" tabindex="-1"><a class="header-anchor" href="#springboot-中引用-maven-属性" aria-hidden="true">#</a> SpringBoot 中引用 Maven 属性</h3><p><img src="`+l+'" alt="image-20210811200516648"></p><h3 id="执行-maven-打包指令" tabindex="-1"><a class="header-anchor" href="#执行-maven-打包指令" aria-hidden="true">#</a> 执行 Maven 打包指令</h3><ul><li>Maven 指令执行完毕后，生成了对应的包，其中类参与编译，但是配置文件并没有编译，而是直接复制到了包中</li></ul><p><img src="'+i+`" alt="image-20210811200646189"></p><ul><li>解决思路：对于源码中非 Java 类的操作，要求加载 Maven 对应的属性，解析\${}占位符</li></ul><h3 id="对资源文件开启对默认占位符的解析" tabindex="-1"><a class="header-anchor" href="#对资源文件开启对默认占位符的解析" aria-hidden="true">#</a> 对资源文件开启对默认占位符的解析</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>maven-resources-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoding</span><span class="token punctuation">&gt;</span></span>utf-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>encoding</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>useDefaultDelimiters</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>useDefaultDelimiters</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Maven打包加载到属性，打包顺利通过</li></ul><p><img src="`+o+'" alt="image-20210811200628431"></p>',42);function r(d,k){return a(),s("div",null,[t(" more "),u])}const v=n(c,[["render",r],["__file","duohuanjingkaifapeizhi.html.vue"]]);export{v as default};
