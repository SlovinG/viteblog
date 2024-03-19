import{_ as n,o as s,c as a,f as e}from"./app-GYMnAgnr.js";const t="/viteblog/assets/subtree1-tree-tfMNr00r.jpg",o="/viteblog/assets/subtree2-tree-sSXi0w76.jpg",p={},c=e('<p><strong>难度：中等</strong></p><p>给你两棵二叉树 <code>root</code> 和 <code>subRoot</code> 。检验 <code>root</code> 中是否包含和 <code>subRoot</code> 具有相同结构和节点值的子树。如果存在，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p>二叉树 <code>tree</code> 的一棵子树包括 <code>tree</code> 的某个节点和这个节点的所有后代节点。<code>tree</code> 也可以看做它自身的一棵子树。</p><p><strong>示例 1：</strong></p><p><img src="'+t+`" alt="img"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [3,4,5,1,2], subRoot = [4,1,2]
输出：true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><p><img src="`+o+`" alt="img"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
输出：false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>root</code> 树上的节点数量范围是 <code>[1, 2000]</code></li><li><code>subRoot</code> 树上的节点数量范围是 <code>[1, 1000]</code></li><li><code>-10^4 &lt;= root.val &lt;= 10^4</code></li><li><code>-10^4 &lt;= subRoot.val &lt;= 10^4</code></li></ul><h2 id="递归法" tabindex="-1"><a class="header-anchor" href="#递归法" aria-hidden="true">#</a> 递归法</h2><p>这道题可以利用 100 题的方法。</p><p>要判断一个树 t 是不是树 s 的子树，那么可以判断 t 是否和树 s 的任意子树相等。</p><p>即，首先检查给定的两棵树是否完全相同；如果不相同，就递归地在原树的左子树和右子树中分别查找是否存在与给定子树相同的子树。</p><h2 id="代码展示" tabindex="-1"><a class="header-anchor" href="#代码展示" aria-hidden="true">#</a> 代码展示</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isSubtree</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token class-name">TreeNode</span> subRoot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> subRoot <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> subRoot <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">isSameTree</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> subRoot<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isSubtree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> subRoot<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isSubtree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> subRoot<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isSameTree</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> p<span class="token punctuation">,</span> <span class="token class-name">TreeNode</span> q<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> q <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> q <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>val <span class="token operator">!=</span> q<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">isSameTree</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>left<span class="token punctuation">,</span> q<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isSameTree</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>right<span class="token punctuation">,</span> q<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度：O(n)，其中 n 是二叉树的节点数。每一个节点恰好被遍历一次。</p><p>空间复杂度：O(1)，因为这种做法没有使用队列，所以大大降低了空间复杂度。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>针对二叉树的问题，解题之前一定要想清楚究竟是前中后序遍历，还是层序遍历。</p>`,21),l=[c];function u(i,r){return s(),a("div",null,l)}const k=n(p,[["render",u],["__file","572.lingyikeshudezishu.html.vue"]]);export{k as default};