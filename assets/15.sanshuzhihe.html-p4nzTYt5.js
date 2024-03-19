import{_ as n,o as s,c as a,a as t,f as p}from"./app-GYMnAgnr.js";const e={},o=p(`<p><strong>难度：中等</strong></p><p>给你一个整数数组 <code>nums</code> ，判断是否存在三元组 <code>[nums[i], nums[j], nums[k]]</code> 满足 <code>i != j</code>、<code>i != k</code> 且 <code>j != k</code> ，同时还满足 <code>nums[i] + nums[j] + nums[k] == 0</code> 。请</p><p>你返回所有和为 <code>0</code> 且不重复的三元组。</p><p><strong>注意</strong>：答案中不可以包含重复的三元组。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [0,1,1]
输出：[]
解释：唯一可能的三元组和不为 0 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [0,0,0]
输出：[[0,0,0]]
解释：唯一可能的三元组和为 0 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>3 &lt;= nums.length &lt;= 3000</code></li><li><code>-10^(5) &lt;= nums[i] &lt;= 10^(5)</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>暴力做法是：三重循环获取到目标三元组，再对三元组进行去重操作，但是这样的做法，时间复杂度也太高了，O(n^3) 起步，肯定会超时。</p><p>那么简化一点，结合 <strong>1. 两数之和</strong> 这道题可知，双重 for 循环就可以确定 a 和 b 的值了，再用哈希表来确定 0 - (a + b) 是否在数组里出现过，同时要考虑到题目中说不包含重复的三元组。</p><p>如果把目标三元组全部放进 List 中，然后再去重，这样是非常费时的，很容易超时，也是这道题目通过率如此之低的根源所在。</p><p>时间复杂度可以做到 O(n^2)，但还是比较费时的，因为不好做 <strong>剪枝、去重</strong> 的操作。</p><p>我的思路：</p><ol><li>先对 <code>nums</code> 数组进行升序排序，在排序的数组中，重复的元素会排列在一起，这使得在遍历数组时更容易跳过重复的元素，从而避免在结果中出现重复的三元组，时间复杂度为 O(nlogn)</li><li>设定 <code>result</code> 列表用来存储目标三元组</li><li>设定哈希表 map 对数组中的元素和位置进行保存，key 为元素值，value 为该元素的 <strong>最新下标</strong> ，因为元素会重复，但是 <strong>数组已经排了序</strong>，所以可以让后者的下标覆盖前者，时间复杂度为 O(n)</li><li>双重循环，寻找 <code>nums[i] + nums[j]</code><ul><li>注意，这里数组排了序，所以当 <code>nums[i-1] == nums[i]</code> 时，如果已经操作过 <code>nums[i-1]</code> 了，就不用再操作 <code>nums[i]</code> 了，这样可以实现 <strong>剪枝</strong> 的操作</li><li>同时，若 <code>nums[i]</code> &gt; 0，那么 <code>nums[j]</code> 肯定也大于0，第三个值肯定也大于0，就更不可能凑成三元组了，此时可以直接退出循环，这也是剪枝操作</li><li>同理，<code>nums[j]</code> 也可以用同样的方法剪枝，这样可以节省不少时间</li><li>令 <code>target = - nums[i] - nums[j]</code>，便可以直接在 map 中寻找 <code>target</code> 的下标，如果 <code>target</code> 的坐标大于 j（j 一定是大于 i 的），说明该下标是合法的，我们就可以得到目标三元组</li><li>收集目标三元组</li></ul></li><li>返回 <code>result</code> 列表</li></ol><h2 id="我的代码" tabindex="-1"><a class="header-anchor" href="#我的代码" aria-hidden="true">#</a> 我的代码</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">threeSum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 双基准快排算法，对数组进行排序</span>
    <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 使用哈希表记录每个数字最后一次出现的索引</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token comment">// 遍历数组，寻找所有可能的三元组（a + b + c = 0）</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 排序之后如果三元组内的 a 已经大于零，那么 b、c 更不可能凑成三元组，直接退出循环</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 跳过重复的数字 a，避免重复计算相同的三元组</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 跳过重复的数字 b，避免重复计算相同的三元组</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 计算两数之和的相反数，寻找这个数是否存在于哈希表中</span>
            <span class="token keyword">int</span> target <span class="token operator">=</span> <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token comment">// 检查哈希表中是否有这个数，且这个数的索引大于j（避免重复使用相同的元素）</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">&gt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 找到有效的三元组，加入结果列表</span>
                result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度: O(n^2)</p><p>空间复杂度: O(n)，额外的 HashMap 开销</p><h2 id="双指针做法" tabindex="-1"><a class="header-anchor" href="#双指针做法" aria-hidden="true">#</a> 双指针做法</h2><h3 id="思路解析" tabindex="-1"><a class="header-anchor" href="#思路解析" aria-hidden="true">#</a> 思路解析</h3><p><strong>其实这道题目使用哈希法不是特别合适</strong>，因为在 <strong>去重</strong>、<strong>剪枝</strong> 的操作中需要注意很多细节，在面试中很难直接写出没有 bug 的代码。</p><p>而且使用哈希法和两层 for 循环的时候，能做的剪枝操作很有限，虽然时间复杂度降到了 O(n^2)，但是程序的执行时间依然比较长：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>解答成功:
	执行耗时:122 ms,击败了8.92% 的Java用户
	内存消耗:50.3 MB,击败了22.64% 的Java用户
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>其实这道题目使用双指针法，要比哈希法高效一些。</strong></p><p>当处理的是有序数组时，双指针法特别有用，它依赖于元素的顺序来移动指针。</p><p>具体思路：</p><ol><li><p>先对 <code>nums</code> 数组进行升序排序，时间复杂度为 O(nlogn)</p></li><li><p>设定 <code>result</code> 列表用来存储目标三元组</p></li><li><p>一层 for 循环，i 从下标 0 的地方开始遍历，同时对 <code>nums[i]</code> 进行去重</p></li><li><p>设定指针 <code>left</code> 初始指向 i+1 的位置，指针 <code>right</code> 初始指向数组尾端</p></li><li><p>在数组中找到 <code>nums[i]</code>、<code>nums[left]</code>、<code>nums[right]</code></p><ul><li><p>若 <code>nums[i] + nums[left] + nums[right] == 0</code> ，则收集目标三元组，并对 <code>nums[left]</code> 和 <code>nums[right]</code> 进行去重</p></li><li><p>若 <code>nums[i] + nums[left] + nums[right] &gt; 0</code> 说明此时三数之和偏大，因为数组已经排序过了，所以 <code>right</code> 下标就应该向左移动，这样才能让三数之和小一些</p></li><li><p>若 <code>nums[i] + nums[left] + nums[right] &lt; 0</code> 说明此时三数之和偏小，left 就应该向右移动，才能让三数之和大一些</p></li><li><p>当 <code>left</code> 与 <code>right</code> 相遇的时候，i 往后遍历</p></li></ul></li><li><p>返回 <code>result</code> 列表</p></li></ol><h3 id="代码展示" tabindex="-1"><a class="header-anchor" href="#代码展示" aria-hidden="true">#</a> 代码展示</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">threeSum</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//双基准快排算法</span>
    <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 找出a + b + c = 0</span>
    <span class="token comment">// a = nums[i], b = nums[left], c = nums[right]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 排序之后如果三元组内的a已经大于零，那么b、c更不可能凑成三元组，直接退出循环</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 去重 a，跳过重复元素</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 使用双指针法</span>
        <span class="token keyword">int</span> left <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> sum <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                right<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                left<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 找到一个三元组之后，对b和c去重</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    right<span class="token operator">--</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    left<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>    
                <span class="token comment">// 找到答案时，双指针需要同时收缩</span>
                right<span class="token operator">--</span><span class="token punctuation">;</span>
                left<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度: O(n^2)</p><p>空间复杂度: O(1)</p><p>测试显示，这种算法比哈希法省时很多：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>解答成功:
	执行耗时:28 ms,击败了91.35% 的Java用户
	内存消耗:48.9 MB,击败了91.19% 的Java用户
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p><strong>什么时候使用哈希法</strong>：</p><ul><li>当我们需要快速查询一个元素是否出现过，或者一个元素是否在集合里的时候，就要第一时间想到哈希法。</li></ul><p>本题，我们不仅要知道元素有没有遍历过，还要知道这个元素对应的下标，<strong>需要使用 key value 结构来存放，key 来存元素，value 来存下标，那么使用 map 正合适</strong>。</p><p><strong>使用数组和 set 来做哈希法的局限</strong>：</p><ul><li>数组的大小是受限制的，而且如果元素很少，而哈希值太大会造成内存空间的浪费。</li><li>set 是一个集合，里面放的元素只能是一个 key，而本题，不仅要判断 y 是否存在而且还要记录 y 的下标位置，因为要返回 x 和 y 的下标。所以 set 也不能用。</li></ul>`,44);function c(l,i){return s(),a("div",null,[t(" more "),o])}const r=n(e,[["render",c],["__file","15.sanshuzhihe.html.vue"]]);export{r as default};