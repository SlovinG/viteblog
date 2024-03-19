import{_ as n,o as s,c as a,a as t,f as e}from"./app-GYMnAgnr.js";const p={},o=e(`<p><strong>难度：容易</strong></p><p>给定一个整数数组 <code>nums</code> 和一个整数目标值 <code>target</code>，请你在该数组中找出 <strong>和为目标值</strong> <code>target</code> 的那 <strong>两个</strong> 整数，并返回它们的数组下标。</p><p>你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。</p><p>你可以按任意顺序返回答案。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [3,2,4], target = 6
输出：[1,2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [3,3], target = 6
输出：[0,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 104</code></li><li><code>-109 &lt;= nums[i] &lt;= 109</code></li><li><code>-109 &lt;= target &lt;= 109</code></li><li><strong>只会存在一个有效答案</strong></li></ul><p>**进阶：**你可以想出一个时间复杂度小于 <code>O(n^2)</code> 的算法吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>暴力的做法是：双重循环，遍历所有的元素，看相加结果是否等于目标值，碰到符合要求的元素返回其索引。</p><p>但这种做法时间复杂度为 O(n^2)，感觉很不优雅。</p><p>我们换个理解方式，第二层 for 循环无非就是遍历所有的元素，看哪个元素等于 <code>target - num[i]</code>，时间复杂度为 O(n)。</p><p>有没有一种方法，不用遍历就可以快速找到数组里有没有元素值等于 <code>target - num[i]</code> ？</p><p>答案是 HashMap。</p><p>我们可以把数组的每个元素保存为 map 的 key，其数组下标保存为 value 。</p><p>这样只需判断 <code>target - num[i]</code> 在不在 map 的 key 里就可以了，而这样做的时间复杂度仅为 O(1)。</p><p>我的思路：</p><ol><li>设定一个哈希表 map，初始为空</li><li>遍历数组 nums，设定当前元素为 one，目标元素为 two</li><li>判断 map 里是否已经存在目标元素 two <ul><li>若存在，则返回当前元素下标和目标元素下标</li><li>若不存在，则将当前元素存入 map</li></ul></li></ol><p><strong>注意，这里往 map 中添加元素放在了循环内最后一步，因为数组中同一个元素在答案里不能重复使用，如示例 2，如果一开始就把当前元素放进 map，那么示例2 返回的结果将会是 [0,0]，因为当前元素和目标元素值相同了</strong></p><h2 id="我的代码" tabindex="-1"><a class="header-anchor" href="#我的代码" aria-hidden="true">#</a> 我的代码</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">twoSum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建一个HashMap来存储数组元素和它们的索引</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> one <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> two <span class="token operator">=</span> target <span class="token operator">-</span> one<span class="token punctuation">;</span><span class="token comment">// 计算目标值与当前元素的差</span>
        <span class="token comment">// 检查差值是否已在Map中</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>two<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果差值存在，返回当前索引和差值的索引</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>i<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>two<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 将当前元素和它的索引存储在Map中</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果没有找到这样的两个数，则返回null</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度：O(n)</p><p>空间复杂度：所谓的 <strong>空间换时间</strong>，这里就能体现出来， 开辟了一个 HashMap ，空间复杂度变为 O(n)</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p><strong>什么时候使用哈希法</strong>：</p><ul><li>当我们需要快速查询一个元素是否出现过，或者一个元素是否在集合里的时候，就要第一时间想到哈希法。</li></ul><p>本题，我们不仅要知道元素有没有遍历过，还要知道这个元素对应的下标，<strong>需要使用 key value 结构来存放，key 来存元素，value 来存下标，那么使用 map 正合适</strong>。</p><p><strong>使用数组和 set 来做哈希法的局限</strong>：</p><ul><li>数组的大小是受限制的，而且如果元素很少，而哈希值太大会造成内存空间的浪费。</li><li>set 是一个集合，里面放的元素只能是一个 key，而本题，不仅要判断 y 是否存在而且还要记录 y 的下标位置，因为要返回 x 和 y 的下标。所以 set 也不能用。</li></ul>`,34);function c(l,i){return s(),a("div",null,[t(" more "),o])}const r=n(p,[["render",c],["__file","1.liangshuzhihe.html.vue"]]);export{r as default};