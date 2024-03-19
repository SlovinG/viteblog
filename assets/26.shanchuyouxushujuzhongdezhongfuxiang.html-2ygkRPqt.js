import{_ as e,r as t,o,c as p,a as c,b as n,d as s,e as l,f as i}from"./app-GYMnAgnr.js";const u={},d=n("p",null,[n("strong",null,"难度：简单")],-1),r=n("strong",null,"升序排列",-1),k=n("code",null,"nums",-1),m={href:"http://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},v=n("strong",null,"只出现一次",-1),h=n("strong",null,"相对顺序",-1),b=n("strong",null,"一致",-1),g=n("code",null,"nums",-1),x=i(`<p>考虑 <code>nums</code> 的唯一元素的数量为 <code>k</code> ，你需要做以下事情确保你的题解可以被通过：</p><ul><li>更改数组 <code>nums</code> ，使 <code>nums</code> 的前 <code>k</code> 个元素包含唯一元素，并按照它们最初在 <code>nums</code> 中出现的顺序排列。<code>nums</code> 的其余元素与 <code>nums</code> 的大小不重要。</li><li>返回 <code>k</code> 。</li></ul><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [1,1,2]
输出：2, nums = [1,2,_]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 3 * 104</code></li><li><code>-104 &lt;= nums[i] &lt;= 104</code></li><li><code>nums</code> 已按 <strong>升序</strong> 排列</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>由于原数组按照升序排列，所以可以跟 27 题一个思路，采用快慢指针法。</p><p>将快指针和慢指针指向的元素进行逐个比对，每当二者的值不相同时，慢指针前进一位，并将快指针指向元素值赋给慢指针指向的位置。</p><h2 id="我的代码" tabindex="-1"><a class="header-anchor" href="#我的代码" aria-hidden="true">#</a> 我的代码</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">removeDuplicates</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> ln <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">int</span> slowIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> fastIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>fastIndex <span class="token operator">&lt;</span> ln<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>fastIndex<span class="token punctuation">]</span> <span class="token operator">!=</span> nums<span class="token punctuation">[</span>slowIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            slowIndex<span class="token operator">++</span><span class="token punctuation">;</span>
            nums<span class="token punctuation">[</span>slowIndex<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>fastIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        fastIndex<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> slowIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度：O(n)</p><p>空间复杂度：O(1)</p><p><strong>最后返回的时候，慢指针要+1，这样才是新数组真正的长度。</strong></p><h2 id="通用解法" tabindex="-1"><a class="header-anchor" href="#通用解法" aria-hidden="true">#</a> 通用解法</h2><p>为了让解法更具有一般性，我们将原问题的「最多保留 1 位」修改为「最多保留 k 位」。</p><p>对于此类问题，我们应该进行如下考虑：</p><ul><li>由于是保留 k 个相同数字，对于前 k 个数字，我们可以直接保留。</li><li>对于后面的任意数字，能够保留的条件是：若该数字与当前欲写入位置前面的倒数第 k 个元素值不相同则保留。因为这说明了该数字的重复次数并没有超过 k 次。</li></ul><p>例如，假设我们令 k = 2，有样例：[3, 3, 3, 3, 4, 4, 4, 5, 5, 5]，那么代码思路为：</p><ol><li><p>设定指针 slowIndex，指向待插入位置，slowIndex 初始值为 0，目标数组当前为 []</p></li><li><p>首先我们先让前 k 位直接保留。slowIndex 变为 2，目标数组为 [3, 3]</p></li><li><p>继续往后遍历，能够保留的前提是与 slowIndex 的前面倒数第 k 位元素不同，因此我们会跳过剩余的 3，将第一个 4 追加进去。slowIndex 变为 3，目标数组为 [3, 3, 4]</p></li><li><p>继续上述过程，追加第二个 4，slowIndex 变为 4，目标数组为 [3, 3, 4, 4]</p></li><li><p>当整个数组被扫描完，最终我们得到了目标数组 [3, 3, 4, 4, 5, 5] 和答案 slowIndex 为 6。</p></li></ol><h2 id="代码展示" tabindex="-1"><a class="header-anchor" href="#代码展示" aria-hidden="true">#</a> 代码展示</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">removeDuplicates</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">process</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> ln <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">int</span> slowIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> fastIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>fastIndex <span class="token operator">&lt;</span> ln<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>slowIndex <span class="token operator">&lt;</span> k <span class="token operator">||</span> nums<span class="token punctuation">[</span>slowIndex <span class="token operator">-</span> k<span class="token punctuation">]</span> <span class="token operator">!=</span> nums<span class="token punctuation">[</span>fastIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            nums<span class="token punctuation">[</span>slowIndex<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>fastIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
            slowIndex<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        fastIndex<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> slowIndex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度：O(n)</p><p>空间复杂度：O(1)</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>当问题的条件是 <strong>数组有序</strong> 且要求 <strong>部分元素保留</strong> 的时候，可以考虑使用双指针法。</p><p><strong>通用解法</strong> 是一种针对 <strong>数据有序</strong>，<strong>相同元素最多保留 <code>k</code> 位</strong> 问题更加本质的解法，该解法是从性质出发提炼的，利用了 <strong>数组有序</strong> 和 <strong>保留逻辑</strong> 两大主要性质。</p>`,29);function w(_,f){const a=t("ExternalLinkIcon");return o(),p("div",null,[c(" more "),d,n("p",null,[s("给你一个 "),r,s(" 的数组 "),k,s(" ，请你 "),n("strong",null,[n("a",m,[s("原地"),l(a)])]),s(" 删除重复出现的元素，使每个元素 "),v,s(" ，返回删除后数组的新长度。元素的 "),h,s(" 应该保持 "),b,s(" 。然后返回 "),g,s(" 中唯一元素的个数。")]),x])}const y=e(u,[["render",w],["__file","26.shanchuyouxushujuzhongdezhongfuxiang.html.vue"]]);export{y as default};
