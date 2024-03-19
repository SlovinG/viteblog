import{_ as t,r as p,o,c as e,a as c,b as n,d as s,e as u,f as l}from"./app-GYMnAgnr.js";const i={},k=n("p",null,[n("strong",null,"难度：中等")],-1),r=n("code",null,"tokens",-1),d={href:"https://baike.baidu.com/item/%E9%80%86%E6%B3%A2%E5%85%B0%E5%BC%8F/128437",target:"_blank",rel:"noopener noreferrer"},v=l(`<p>请你计算该表达式。返回一个表示表达式值的整数。</p><p><strong>注意：</strong></p><ul><li>有效的算符为 <code>&#39;+&#39;</code>、<code>&#39;-&#39;</code>、<code>&#39;*&#39;</code> 和 <code>&#39;/&#39;</code> 。</li><li>每个操作数（运算对象）都可以是一个整数或者另一个表达式。</li><li>两个整数之间的除法总是 <strong>向零截断</strong> 。</li><li>表达式中不含除零运算。</li><li>输入是一个根据逆波兰表示法表示的算术表达式。</li><li>答案及所有中间计算结果可以用 <strong>32 位</strong> 整数表示。</li></ul><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：tokens = [&quot;2&quot;,&quot;1&quot;,&quot;+&quot;,&quot;3&quot;,&quot;*&quot;]
输出：9
解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：tokens = [&quot;4&quot;,&quot;13&quot;,&quot;5&quot;,&quot;/&quot;,&quot;+&quot;]
输出：6
解释：该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：tokens = [&quot;10&quot;,&quot;6&quot;,&quot;9&quot;,&quot;3&quot;,&quot;+&quot;,&quot;-11&quot;,&quot;*&quot;,&quot;/&quot;,&quot;*&quot;,&quot;17&quot;,&quot;+&quot;,&quot;5&quot;,&quot;+&quot;]
输出：22
解释：该算式转化为常见的中缀算术表达式为：
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= tokens.length &lt;= 104</code></li><li><code>tokens[i]</code> 是一个算符（<code>&quot;+&quot;</code>、<code>&quot;-&quot;</code>、<code>&quot;*&quot;</code> 或 <code>&quot;/&quot;</code>），或是在范围 <code>[-200, 200]</code> 内的一个整数</li></ul><p><strong>逆波兰表达式：</strong></p><p>逆波兰表达式是一种后缀表达式，所谓后缀就是指算符写在后面。</p><ul><li>平常使用的算式则是一种中缀表达式，如 <code>( 1 + 2 ) * ( 3 + 4 )</code> 。</li><li>该算式的逆波兰表达式写法为 <code>( ( 1 2 + ) ( 3 4 + ) * )</code> 。</li></ul><p>逆波兰表达式主要有以下两个优点：</p><ul><li>去掉括号后表达式无歧义，上式即便写成 <code>1 2 + 3 4 + * </code>也可以依据次序计算出正确结果。</li><li>适合用栈操作运算：遇到数字则入栈；遇到算符则取出栈顶两个数字进行计算，并将结果压入栈中</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>递归就是用栈来实现的，所以 <strong>栈与递归之间在某种程度上是可以转换的</strong>。</p><p>本题中，其实 <strong>逆波兰表达式相当于是二叉树中的后序遍历</strong>，但我们没有必要从二叉树的角度去解决这个题，只要知道逆波兰表达式是用后序遍历的方式把二叉树序列化了，就可以了。</p><p>本题中每一个子表达式要得出一个结果，然后拿这个结果再进行运算，那么这和 <strong>1047.删除字符串中的所有相邻重复项</strong> 就非常像了。</p><p>所有的 <strong>表达式计算</strong> 问题都离不开 <strong>栈</strong>。</p><p>对逆波兰表达式求值的过程是：</p><ol><li>如果遇到数字就进栈；</li><li>如果遇到运算符，就从栈顶弹出两个数字分别为 num2（栈顶）、num1（栈中的第二个元素）；计算 <code>num1 运算符 num2</code></li></ol><p>逆波兰表达式的代码实现很简单，用一个栈就能解决。</p><p>而栈的实现通常有两种：</p><ol><li>使用数组模拟栈</li><li>使用系统自带的栈结构</li></ol><h2 id="我的代码" tabindex="-1"><a class="header-anchor" href="#我的代码" aria-hidden="true">#</a> 我的代码</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">evalRPN</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> tokens<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始化栈</span>
    <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> lt <span class="token operator">=</span> tokens<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token comment">// 遍历逆波兰表达式字符串</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> lt<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> x <span class="token operator">=</span> tokens<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;+&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// Java 中不能使用 == 判断字符串是否相等，并且在工作中为了避免空指针异常，我们习惯把常量字符串放在equal前面</span>
            <span class="token keyword">int</span> rightNumber <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> leftNumber <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>leftNumber <span class="token operator">+</span> rightNumber<span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> rightNumber <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> leftNumber <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>leftNumber <span class="token operator">-</span> rightNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token keyword">int</span> rightNumber <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token keyword">int</span> leftNumber <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>leftNumber <span class="token operator">*</span> rightNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> rightNumber <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> leftNumber <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>leftNumber <span class="token operator">/</span> rightNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">// 遇到数字就进栈</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 返回栈中最后剩余的唯一的元素</span>
    <span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度：O(n)</p><p>空间复杂度：O(n)</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>栈的实现通常有两种：</p><ol><li>使用数组模拟栈</li><li>使用系统自带的栈结构</li></ol>`,33);function m(b,q){const a=p("ExternalLinkIcon");return o(),e("div",null,[c(" more "),k,n("p",null,[s("给你一个字符串数组 "),r,s(" ，表示一个根据 "),n("a",d,[s("逆波兰表示法"),u(a)]),s(" 表示的算术表达式。")]),v])}const h=t(i,[["render",m],["__file","150.nibolanbiaodashiqiuzhi.html.vue"]]);export{h as default};
