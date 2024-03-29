import{_ as n,o as s,c as a,a as p,f as t}from"./app-GYMnAgnr.js";const e={},o=t(`<p><strong>难度：容易</strong></p><p>给定一个只包括 <code>&#39;(&#39;</code>，<code>&#39;)&#39;</code>，<code>&#39;{&#39;</code>，<code>&#39;}&#39;</code>，<code>&#39;[&#39;</code>，<code>&#39;]&#39;</code> 的字符串 <code>s</code> ，判断字符串是否有效。</p><p>有效字符串需满足：</p><ol><li>左括号必须用相同类型的右括号闭合。</li><li>左括号必须以正确的顺序闭合。</li><li>每个右括号都有一个对应的相同类型的左括号。</li></ol><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：s = &quot;()&quot;
输出：true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：s = &quot;()[]{}&quot;
输出：true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：s = &quot;(]&quot;
输出：false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 104</code></li><li><code>s</code> 仅由括号 <code>&#39;()[]{}&#39;</code> 组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p><strong>括号匹配是使用栈解决的经典问题。</strong></p><p>栈先入后出的特点恰好与本题括号排序的特点一致，即：若遇到左括号入栈，遇到右括号时将对应栈顶左括号出栈，则遍历完所有括号后 <code>stack</code> 应该为空。</p><p>算法流程：</p><ol><li>先判断字符串长度是否为奇数，如果字符串长度为奇数，一定不是有效的括号组合，直接返回 false</li><li>遍历字符串中的每个字符 <ol><li>如果字符是开括号，将其推入栈中</li><li>如果栈为空时，此时遇到闭括号，说明括号匹配失败，直接返回 false</li><li>如果栈不为空，此时遇到闭括号，但与栈顶元素（开括号）不匹配，说明括号匹配失败，返回 false</li><li>如果栈不为空，此时遇到闭括号，且与栈顶元素（开括号）匹配，则弹出栈顶元素</li></ol></li><li>已经遍历完了字符串时， <ol><li>如果栈为空，说明所有括号都是有效匹配，返回 true</li><li>如果栈不为空，说明有相应的开括号没有对应的闭括号来匹配，所以返回 false</li></ol></li></ol><h2 id="我的代码-使用数组模拟栈" tabindex="-1"><a class="header-anchor" href="#我的代码-使用数组模拟栈" aria-hidden="true">#</a> 我的代码（使用数组模拟栈）</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isValid</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取字符串的长度</span>
    <span class="token keyword">int</span> ls <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 如果字符串长度为奇数，一定不是有效的括号组合</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ls <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 创建一个字符数组作为栈</span>
    <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span>ls<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 初始化栈顶指针</span>
    <span class="token keyword">int</span> top <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token comment">// 遍历字符串中的每个字符</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ls<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">char</span> c <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token char">&#39;(&#39;</span> <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token char">&#39;{&#39;</span> <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token char">&#39;[&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 如果字符是开括号，将其推入栈中</span>
            stack<span class="token punctuation">[</span><span class="token operator">++</span>top<span class="token punctuation">]</span> <span class="token operator">=</span> c<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>top <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 如果栈为空时遇到闭括号，直接返回false</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token char">&#39;)&#39;</span> <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">[</span>top<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">&#39;(&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span>
                <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token char">&#39;}&#39;</span> <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">[</span>top<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">&#39;{&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span>
                <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token char">&#39;]&#39;</span> <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">[</span>top<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">&#39;[&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 如果当前闭括号与栈顶开括号不匹配，返回false</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">// 如果匹配，弹出栈顶元素</span>
            top<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 如果栈为空，说明所有括号都是有效匹配；否则，返回false</span>
    <span class="token keyword">return</span> top <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度：O(n)</p><p>空间复杂度：O(n)</p><h2 id="使用-deque-作为栈的写法" tabindex="-1"><a class="header-anchor" href="#使用-deque-作为栈的写法" aria-hidden="true">#</a> 使用 Deque 作为栈的写法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isValid</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取字符串的长度</span>
    <span class="token keyword">int</span> ls <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 如果字符串长度为奇数，一定不是有效的括号组合</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ls <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 使用双端队列作为栈</span>
    <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 遍历字符串中的每个字符</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ls<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">char</span> c <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token char">&#39;(&#39;</span> <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token char">&#39;{&#39;</span> <span class="token operator">||</span> c <span class="token operator">==</span> <span class="token char">&#39;[&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 如果字符是开括号，将其推入栈中</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 如果栈为空时遇到闭括号，直接返回false</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token char">&#39;)&#39;</span> <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token char">&#39;(&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span>
                <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token char">&#39;}&#39;</span> <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token char">&#39;{&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span>
                <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token char">&#39;]&#39;</span> <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token char">&#39;[&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 如果当前闭括号与栈顶开括号不匹配，返回false</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">// 如果匹配，弹出栈顶元素</span>
            stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果栈为空，说明所有括号都有效匹配；否则，返回false</span>
    <span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度：O(n)</p><p>空间复杂度：O(n)</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p><strong>括号匹配是使用栈解决的经典问题。</strong></p><p>技巧性的东西没有固定的学习方法，还是要多看多练，灵活运用。</p>`,28);function c(l,i){return s(),a("div",null,[p(" more "),o])}const k=n(e,[["render",c],["__file","20.youxiaodekuohao.html.vue"]]);export{k as default};
