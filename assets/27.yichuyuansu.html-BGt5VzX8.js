import{_ as t,r as p,o as l,c as o,a as i,b as n,d as s,e,f as c}from"./app-GYMnAgnr.js";const u={},r=n("p",null,[n("strong",null,"难度：简单")],-1),d=n("code",null,"nums",-1),k=n("code",null,"val",-1),v={href:"https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"val",-1),b=n("code",null,"O(1)",-1),h={href:"https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},g=c(`<p>元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。</p><p><strong>说明:</strong></p><p>为什么返回数值是整数，但输出的答案是数组呢?</p><p>请注意，输入数组是以**「引用」**方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。</p><p>你可以想象内部操作如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
int len = removeElement(nums, val);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i &lt; len; i++) {
    print(nums[i]);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3]
解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>0 &lt;= nums.length &lt;= 100</code></li><li><code>0 &lt;= nums[i] &lt;= 50</code></li><li><code>0 &lt;= val &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个题目暴力的解法就是两层 for 循环：</p><ul><li>外层 for 循环遍历数组元素，查找需要剔除的元素</li><li>内层 for 循环将被剔除的元素后面的部分逐个前移。</li></ul><p>但这样做的话，时间复杂度为 O(n^2)，有点太高了，而且让数组元素逐个前移的过程感觉很傻，很不优雅。</p><p>所以这里我采用 <strong>双指针法</strong>（快慢指针法）：<strong>通过一个快指针和慢指针在一个 for 循环下完成两个 for 循环的工作。</strong></p><p>先定义一下快慢指针：</p><ul><li>快指针：寻找新数组里应该存在的元素 ，新数组就是不含有目标元素的数组</li><li>慢指针：指向新数组最新一个元素的下标位置</li></ul><p>算法过程：</p><ol><li>快指针在旧数组里从头到尾寻找新数组里应该存在的元素</li><li>慢指针负责将这些元素存入新数组</li></ol><p>注意，<strong>数组的元素在内存地址中是连续的，不能单独删除数组中的某个元素，只能覆盖</strong>。</p><p>慢指针指向的“新数组”其实是旧数组里已经被快指针检查过的部分，所以可以放心覆盖，同时当快指针到达旧数组尾部的时候，慢指针的位置也代表了新数组的最终长度（<strong>指向的是新数组中最后一个元素下标+1的位置，但这刚好是新数组的大小</strong>）。</p><h2 id="普通的快慢指针法" tabindex="-1"><a class="header-anchor" href="#普通的快慢指针法" aria-hidden="true">#</a> 普通的快慢指针法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">removeElement</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> slowIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> fastIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>fastIndex <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>fastIndex<span class="token punctuation">]</span> <span class="token operator">!=</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            nums<span class="token punctuation">[</span>slowIndex<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>fastIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
            slowIndex<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        fastIndex<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> slowIndex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度：O(n)</p><p>空间复杂度：O(1)</p><p>这种方法的优点是没有改变元素的相对位置，但要移动的元素个数比较多，而且没有利用到题目中新数组中“<strong>元素可为任意顺序</strong>”的条件。</p><p>如果元素可以为任意顺序，那么旧数组里的有些元素其实可以不改变自身的下标，直接进入到新数组里，因此我们可以采用 <strong>相向双指针法</strong>。</p><p>算法过程：</p><ol><li>左指针在旧数组里从头到尾寻找新数组里不应该存在的元素</li><li>右指针从尾到头寻找新数组里应该存在的元素</li><li>每找到符合条件的上述两个元素，就用右指针指向的元素覆盖掉左指针指向的元素（<strong>只需覆盖，无需交换</strong>）</li><li>当两个指针相遇并且不满足 leftIndex &lt;= rightIndex 条件的时候，代表新数组的元素已经集齐</li><li>此时 leftIndex 的坐标其实指向的是新数组中最后一个元素下标+1的位置，但这刚好是新数组的大小</li></ol><h2 id="相向双指针法" tabindex="-1"><a class="header-anchor" href="#相向双指针法" aria-hidden="true">#</a> 相向双指针法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">removeElement</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> leftIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> rightIndex <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>leftIndex <span class="token operator">&lt;=</span> rightIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 找左边需要交换的、值等于val的元素</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>leftIndex <span class="token operator">&lt;=</span> rightIndex <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span> <span class="token operator">!=</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            leftIndex<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 找右边需要交换的、值不等于val的元素</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>leftIndex <span class="token operator">&lt;=</span> rightIndex <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span> <span class="token operator">==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            rightIndex<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>leftIndex <span class="token operator">&lt;=</span> rightIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            nums<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
            leftIndex<span class="token operator">++</span><span class="token punctuation">;</span>
            rightIndex<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> leftIndex <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间复杂度：O(n)</li><li>空间复杂度：O(1)</li></ul><p>显然，这种方法会改变元素的相对位置，但移动的元素比普通的快慢指针法要少很多。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p><strong>双指针法（快慢指针法）在数组和链表的操作中是非常常见的，很多考察数组、链表、字符串等操作的面试题，都使用双指针法。</strong></p>`,37);function x(f,_){const a=p("ExternalLinkIcon");return l(),o("div",null,[i(" more "),r,n("p",null,[s("给你一个数组 "),d,s(" 和一个值 "),k,s("，你需要 "),n("strong",null,[n("a",v,[s("原地"),e(a)])]),s(" 移除所有数值等于 "),m,s(" 的元素，并返回移除后数组的新长度。")]),n("p",null,[s("不要使用额外的数组空间，你必须仅使用 "),b,s(" 额外空间并 "),n("strong",null,[n("a",h,[s("原地 "),e(a)]),s("修改输入数组")]),s("。")]),g])}const w=t(u,[["render",x],["__file","27.yichuyuansu.html.vue"]]);export{w as default};
