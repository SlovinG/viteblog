import{_ as e,r as t,o as p,c as o,b as n,d as s,e as c,f as l}from"./app-GYMnAgnr.js";const i="/viteblog/assets/complete-zzj_C-Vk.jpg",u={},r=n("p",null,[n("strong",null,"难度：容易")],-1),d=n("p",null,[s("给你一棵 "),n("strong",null,"完全二叉树"),s(" 的根节点 "),n("code",null,"root"),s(" ，求出该树的节点个数。")],-1),k={href:"https://baike.baidu.com/item/%E5%AE%8C%E5%85%A8%E4%BA%8C%E5%8F%89%E6%A0%91/7773232?fr=aladdin",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"h",-1),m=n("code",null,"1~ 2h",-1),g=l('<p><strong>示例 1：</strong></p><p><img src="'+i+`" alt="img"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [1,2,3,4,5,6]
输出：6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = []
输出：0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [1]
输出：1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li>树中节点的数目范围是<code>[0, 5 * 10^4]</code></li><li><code>0 &lt;= Node.val &lt;= 5 * 10^4</code></li><li>题目数据保证输入的 树是 <strong>完全二叉树</strong></li></ul><p>**进阶：**遍历树来统计节点是一种时间复杂度为 <code>O(n)</code> 的简单解决方案。你可以设计一个更快的算法吗？</p><h2 id="普通二叉树的递归法" tabindex="-1"><a class="header-anchor" href="#普通二叉树的递归法" aria-hidden="true">#</a> 普通二叉树的递归法</h2><p>采用递归的方式来解决问题，基于一个非常直观的原理：二叉树中的节点总数等于左子树中的节点数加上右子树中的节点数，再加上根节点自身。</p><p>算法步骤：</p><ol><li><strong>递归基准情况</strong>：如果当前节点为 <code>null</code>，说明这是一棵空树，因此返回节点数为<code>0</code>。</li><li><strong>递归逻辑</strong>：如果当前节点不为空，算法会递归地计算左子树中的节点数和右子树中的节点数。然后，将这两个数相加，并加上 <code>1</code>（代表当前节点），从而得到包括当前节点在内的总节点数。</li><li><strong>返回值</strong>：返回计算得到的节点总数。</li></ol><h2 id="代码展示" tabindex="-1"><a class="header-anchor" href="#代码展示" aria-hidden="true">#</a> 代码展示</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">countNodes</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">countNodes</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">countNodes</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度：O(n)，其中 n 是二叉树的节点数。每一个节点恰好被遍历一次。</p><p>空间复杂度：O(log n)，算法的空间复杂度主要由递归调用栈的深度决定。在最坏情况下（二叉树完全不平衡，形成链状），空间复杂度为<code>O(n)</code>。在最好情况下（二叉树完全平衡），空间复杂度为<code>O(log n)</code>，因为树的高度为<code>log n</code>。</p><h2 id="普通二叉树的迭代法" tabindex="-1"><a class="header-anchor" href="#普通二叉树的迭代法" aria-hidden="true">#</a> 普通二叉树的迭代法</h2><p>前中后序的遍历方法或者层序遍历都可以，加一个统计节点个数的变量即可。</p><p>这里我采用层序遍历：</p><p>队列具有 <strong>先进先出</strong> 的特性，符合层序遍历的逻辑。这种层序遍历的方式就是图论中的广度优先遍历，只不过我们应用在了二叉树上。</p><p>算法流程：</p><ol><li><p><strong>处理特例</strong>：若根节点为空，则返回 0</p></li><li><p><strong>初始化节点个数 result 为0，根节点入队</strong></p></li><li><p><strong>BFS 循环</strong>： 判断队列是否为空。如果不为空，说明还有节点需要遍历</p><ol><li><p>初始化当前层的节点个数 <code>currentLevelSize</code> 为队列的大小。</p></li><li><p>使用一个内层循环，遍历当前层的节点。循环次数为当前层的节点个数 <code>currentLevelSize</code>。</p><ol><li>从队列中取出一个节点 <code>current</code>，<code>result</code> 值增加</li><li>如果当前节点有左子节点，将左子节点入队。</li><li>如果当前节点有右子节点，将右子节点入队。</li></ol></li><li><p>此时队列中已经把当前层的节点都出队了，同时把下一层的节点都入队了，因此队列大小刚好变成了下一层的节点个数。</p></li></ol></li><li><p><strong>返回结果 result</strong></p></li></ol><h2 id="代码展示-1" tabindex="-1"><a class="header-anchor" href="#代码展示-1" aria-hidden="true">#</a> 代码展示</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">countNodes</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 若根节点为空，则返回0</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 根节点入队</span>
    queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// BFS 循环</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> currentLayerSize <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 这里一定要使用固定大小currentLayerSize，不要使用queue.size()，因为queue不停地出队入队，所以其大小是不断变化的</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> currentLayerSize<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">TreeNode</span> current <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            result<span class="token operator">++</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度：O(n)，其中 n 是二叉树的节点数。每一个节点恰好被遍历一次。</p><p>空间复杂度：O(n)，最差情况下，即当树为满二叉树时，最多有 (n+1)/2 个树节点 <strong>同时</strong> 在 <code>queue</code> 中，故使用 O(n) 大小的额外空间。</p><h2 id="完全二叉树的递归法" tabindex="-1"><a class="header-anchor" href="#完全二叉树的递归法" aria-hidden="true">#</a> 完全二叉树的递归法</h2><p>在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。</p><p>若最底层为第 h 层，则该层的节点个数范围为 1~ 2^(h-1) 。</p><p>完全二叉树的形态只有两种情况:</p><ol><li>满二叉树</li><li>最后一层叶子节点没有满</li></ol><p>对于情况一，节点总数可以直接用 2^h - 1 来计算，注意这里根节点深度为 1。</p><p>对于情况二，节点总数的计算，可以通过分别递归左孩子，和右孩子，递归到某一深度一定会有左孩子或者右孩子为满二叉树，然后依然可以按照情况 1 来计算。</p><p>那么这里有两个问题：</p><ol><li>如何快速获知一棵 <strong>完全二叉树</strong> 是不是满二叉树</li><li>如何快速获得一颗 <strong>完全二叉树</strong> 的层数</li></ol><p><strong>一个定理：在完全二叉树中，从根节点出发，如果向左遍历的深度等于向右遍历的深度，说明该完全二叉树就是满二叉树。</strong></p><p>基于这个定理，我们一下子就可以同时解决上述两个问题。</p><p>算法步骤：</p><ol><li><strong>初始检查</strong>：如果根节点<code>root</code>为空，则该树没有节点，返回<code>0</code>。</li><li><strong>计算深度</strong>：分别计算左子树和右子树的深度。这里的深度计算是通过连续访问左子树的左孩子和右子树的右孩子直到叶子节点来完成的，分别得到左深度<code>leftDepth</code> 和右深度 <code>rightDepth</code>。</li><li><strong>检查是否为满二叉树</strong>： <ul><li>如果左深度等于右深度，说明这是一个满二叉树。对于满二叉树，节点总数可以直接通过公式 <code>2^(深度 + 1) - 1</code>计算得到，其中深度是从<code>0</code>开始的。</li><li>这里深度加 <code>1</code> 的原因是算法中计算的深度实际上是从根节点到最左/最右叶子节点的路径长度，而在公式中需要的是整棵树的层数。</li></ul></li><li><strong>递归计算</strong>：如果树不是满二叉树，那么就递归地计算左子树和右子树的节点数，并加上根节点自身（<code>+1</code>）。</li></ol><h2 id="代码展示-2" tabindex="-1"><a class="header-anchor" href="#代码展示-2" aria-hidden="true">#</a> 代码展示</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">countNodes</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// 若根节点为空，则返回0</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">TreeNode</span> left <span class="token operator">=</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
    <span class="token class-name">TreeNode</span> right <span class="token operator">=</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
    <span class="token keyword">int</span> leftDepth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> rightDepth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 求左子树深度</span>
        left <span class="token operator">=</span> left<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        leftDepth<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 求右子树深度</span>
        right <span class="token operator">=</span> right<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        rightDepth<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 根据左深度和右深度是否相同来判断该子树是不是满二叉树</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>leftDepth <span class="token operator">==</span> rightDepth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> leftDepth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">countNodes</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">countNodes</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度：O(logn * logn)，这是因为每次递归调用都会减少树的高度，而计算树的高度本身需要 <code>O(logn)</code> 的时间。</p><p>空间复杂度：O(log n)，算法的空间复杂度主要由递归调用栈的深度决定。在最坏情况下（二叉树完全不平衡，形成链状），空间复杂度为<code>O(n)</code>。在最好情况下（二叉树完全平衡），空间复杂度为<code>O(log n)</code>，因为树的高度为<code>log n</code>。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p><strong>在完全二叉树中，从根节点出发，如果向左遍历的深度等于向右遍历的深度，说明该完全二叉树就是满二叉树</strong></p>`,47);function b(h,f){const a=t("ExternalLinkIcon");return p(),o("div",null,[r,d,n("p",null,[n("a",k,[s("完全二叉树"),c(a)]),s(" 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 "),v,s(" 层，则该层包含 "),m,s(" 个节点。")]),g])}const y=e(u,[["render",b],["__file","222.wanquanerchashudejiediangeshu.html.vue"]]);export{y as default};