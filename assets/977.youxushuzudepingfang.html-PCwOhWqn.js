import{_ as n,o as s,c as a,a as t,f as p}from"./app-GYMnAgnr.js";const e={},o=p(`<p><strong>难度：简单</strong></p><p>给你一个按 <strong>非递减顺序</strong> 排序的整数数组 <code>nums</code>，返回 <strong>每个数字的平方</strong> 组成的新数组，要求也按 <strong>非递减顺序</strong> 排序。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>(-10)^4 &lt;= nums[i] &lt;= 10^4</code></li><li><code>nums</code> 已按 <strong>非递减顺序</strong> 排序</li></ul><p><strong>进阶：</strong></p><ul><li>请你设计时间复杂度为 <code>O(n)</code> 的算法解决本问题</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>暴力做法自然是平方后再排序或者是排序后再平方，但这样的算法时间复杂度显然是超过 O(n) 的。</p><p>以空间换时间，如果不采用原地算法，代码逻辑上会不会更简单呢？答案是肯定的。</p><p>考虑题目中，数组 <strong><code>nums</code> 已按非递减顺序排序</strong> 这个条件。显然，如果数组 nums 中的所有数都是非负数，那么将每个数平方后，数组仍然保持升序；如果数组 nums 中的所有数都是负数，那么将每个数平方后，数组会保持降序。</p><p>这样一来，如果我们能够找到数组 nums 中负数与非负数的分界线，那么就可以用类似 <strong>归并排序</strong> 的方法了。</p><blockquote><p><strong>归并排序</strong>是一类不同的排序方法。“归并”的含义是将两个或者两个以上的有序表组合成一个新的有序表。利用归并的思想容易实现排序，且这种实现方法已为读者熟悉，无论是顺序存储结构还是链表存储结构，都可以在 O(m+n) 的时间量级上实现。</p><p>归并排序是一个基于分治法思想的算法，拿两个已经有序的序列重新组合成一个有序的序列。</p></blockquote><p>我的思路：</p><ol><li>遍历一遍数组，找到旧数组中负数与非负数的分界线下标 boundary，他指向旧数组中平方后值最小的元素</li><li>此时可以确定新数组中第一个元素的值 nums[boundary]，并且该分界线左侧的元素是平方后往左边递增的，右侧的元素是平方后往右边递增的</li><li>等于说我们已经获得了两个有序的数组，以及新数组的起始元素，此时可以开始使用 <strong>归并排序</strong></li><li>使用两个指针 left、right 一开始都指向位置 boundary，之后 left 往左走，right 往右走，每次比较两个指针指向的元素平方后的值，选择较小的那个放入新数组，并移动对应的指针</li><li>当某一方向的指针移至边界时，将另一指针还未遍历到的元素平方后依次放入新数组</li></ol><h2 id="我的代码" tabindex="-1"><a class="header-anchor" href="#我的代码" aria-hidden="true">#</a> 我的代码</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">sortedSquares</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> boundary <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// 找到最后一个非正数的位置</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            boundary <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> left <span class="token operator">=</span> boundary<span class="token punctuation">;</span>
    <span class="token keyword">int</span> right <span class="token operator">=</span> boundary <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token comment">// 合并两个有序数组</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> left <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
            left<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
            right<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 处理剩余的非正数部分</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
        left<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 处理剩余的非负数部分</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
        right<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度：O(n)</p><p>空间复杂度：O(n)，因为不是一个原地算法</p><p>其中 <code>if (nums[left] * nums[left] &lt; nums[right] * nums[right])</code> 这一句可以改为 <code>if (-nums[left] &lt; nums[right])</code>，因为此时的 left 要么是负数，要么是最小的非负数，这样写的好处是可以避免 <strong>数值溢出</strong> 的问题。</p><h2 id="更优思路" tabindex="-1"><a class="header-anchor" href="#更优思路" aria-hidden="true">#</a> 更优思路</h2><p>上述算法中，在使用归并排序的时候，我们想着先找到最小的元素，再从小到大一点一点填充新数组。</p><p>那么反过来，能不能先找到最大的元素，再从大到小来填充新数组呢？答案是可以的。</p><p>而且由于原数组已经是 <strong>非递减顺序</strong>，所以数组两端的元素平方值将是最大的。因此，可以直接从数组的两端开始比较平方值，无需先寻找分界点。</p><p>而且这样做，当 left 和 right 相遇的时候，新数组刚好走到了首位元素的位置。</p><p>那么我们就不必一开始去寻找边界值，也不必再最后去处理某一指针移动至边界的情况，代码变得更加直观和高效。</p><h2 id="更优代码" tabindex="-1"><a class="header-anchor" href="#更优代码" aria-hidden="true">#</a> 更优代码</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">sortedSquares</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> left <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">-</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
            left<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">*</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
            right<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度：O(n)</p><p>空间复杂度：O(n)，因为不是一个原地算法</p><p>其中 <code>if (nums[left] * nums[left] &gt; nums[right] * nums[right])</code> 这一句改为了 <code>if (-nums[left] &gt; nums[right])</code>，因为此时的 left 要么为负数，要么为最小的非负数，所以这样写可以避免 <strong>数据溢出</strong> 的问题。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>八大排序真应该好好看看，感觉好多题目，虽然不会直接套用，但是其中的思想往往值得借鉴。</p><p>逆向思维也需要培养，有时候反过来思考问题，会有意想不到的好效果。</p>`,37);function c(l,u){return s(),a("div",null,[t(" more "),o])}const r=n(e,[["render",c],["__file","977.youxushuzudepingfang.html.vue"]]);export{r as default};