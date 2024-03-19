import{_ as n,o as s,c as a,a as t,f as p}from"./app-GYMnAgnr.js";const e="/viteblog/assets/396-t6YR2Fal.png",o={},c=p(`<p><strong>难度：中等</strong></p><p>给定一个字符串，请你找出其中不含有重复字符的 <strong>最长子串</strong> 的长度。</p><p><strong>示例 1:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: &quot;abcabcbb&quot;
输出: 3 
解释: 因为无重复字符的最长子串是 &quot;abc&quot;，所以其长度为 3。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: &quot;bbbbb&quot;
输出: 1
解释: 因为无重复字符的最长子串是 &quot;b&quot;，所以其长度为 1。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: &quot;pwwkew&quot;
输出: 3
解释: 因为无重复字符的最长子串是 &quot;wke&quot;，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，&quot;pwke&quot; 是一个子序列，不是子串。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>0 &lt;= s.length &lt;= 5 * 10^(4)</code></li><li><code>s</code> 由英文字母、数字、符号和空格组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p><img src="`+e+`" alt="img"></p><p>我的思路：</p><ol><li>设定两个指针 left 和 right，其中 right 负责寻找当前不含有重复字符的最长子串的末尾，left 指向当前当前不含有重复字符的最长子串的开头</li><li>设定最长字串长度 maxLength，初始为 0</li><li>设定一个哈希表 map，用来存储从 left 开始，到 right 结束，中间被扫描过的每个字符的位置，显然最长字串中每个字符的出现位置都应该是唯一的</li><li>起始的时候 left 指向 0，right 往右边扫描</li><li>right 扫描到一个字符 c 的时候，先在哈希表中寻找是否有以 c 为 key 的元素存在： <ul><li>如果哈希表中对应元素 c 存在，且 <strong>其位置大于或等于 left</strong>，说明从 left 开始不是第一次碰到该字符，此时： <ul><li>更新 <code>left</code> 为 <code>map.get(c) + 1</code>（即重复字符的下一个位置），以确保窗口中没有重复字符</li></ul></li></ul></li><li>将当前字符 c 及其位置放入哈希表，这会覆盖相同字符的旧位置</li><li>使用 <code>right - left + 1</code> 计算当前无重复字符子串的长度，并更新 <code>maxLength</code></li><li>right == s.length 的时候，退出循环，返回 maxLength</li></ol><h2 id="我的代码" tabindex="-1"><a class="header-anchor" href="#我的代码" aria-hidden="true">#</a> 我的代码</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">lengthOfLongestSubstring</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> maxLength <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">char</span> c <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            left <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        maxLength <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxLength<span class="token punctuation">,</span> right <span class="token operator">-</span> left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        right<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> maxLength<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度：O(n)</p><p>空间复杂度：O(n)</p><h2 id="思路来源" tabindex="-1"><a class="header-anchor" href="#思路来源" aria-hidden="true">#</a> 思路来源</h2><p>这道题主要用到的思路是：<strong>滑动窗口</strong></p><h3 id="滑动窗口" tabindex="-1"><a class="header-anchor" href="#滑动窗口" aria-hidden="true">#</a> 滑动窗口</h3><p>滑动窗口的思路其实非常简单，就是维护一个窗口，不断滑动，然后更新答案。该算法的大致逻辑如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> right <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 增大窗口</span>
    window<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    right<span class="token operator">++</span><span class="token punctuation">;</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>window needs shrink<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 缩小窗口</span>
        window<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        left<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所谓的窗口其实就是一个队列，比如例题中的 abcabcbb，进入这个队列（窗口）为 abc 满足题目要求，当再进入 a，队列变成了 abca，这时候不满足要求了，所以我们要移动这个队列。</p><p>其实困扰大家的，不是算法的思路，而是各种细节问题。比如说：<strong>如何向窗口中添加新元素，如何缩小窗口，什么时候缩小窗口，在窗口滑动的哪个阶段更新结果合适</strong>。</p><h3 id="代码模板" tabindex="-1"><a class="header-anchor" href="#代码模板" aria-hidden="true">#</a> 代码模板</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/* 滑动窗口算法框架 */</span>
<span class="token keyword">void</span> <span class="token function">slidingWindow</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 用合适的数据结构记录窗口中的字符及其频率</span>
    <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> window <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// c 是将移入窗口的字符</span>
        <span class="token keyword">char</span> c <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 增大窗口</span>
        right<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token comment">// 进行窗口内数据的一系列更新</span>
        window<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> window<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

        <span class="token doc-comment comment">/*** debug 输出的位置 ***/</span>
        <span class="token comment">// 注意在最终的解法代码中不要 print</span>
        <span class="token comment">// 因为 IO 操作很耗时，可能导致超时</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;window: [%d, %d)\\n&quot;</span><span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/********************/</span>

        <span class="token comment">// 判断左侧窗口是否要收缩</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>window needs shrink<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// d 是将移出窗口的字符</span>
            <span class="token keyword">char</span> d <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 缩小窗口</span>
            left<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token comment">// 进行窗口内数据的一系列更新</span>
            window<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> window<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>其中两处 <code>...</code> 表示的更新窗口数据的地方，到时候我们直接往里面填就行了</strong>。</p><p>而且，这两个 <code>...</code> 处的操作分别是扩大和缩小窗口的更新操作，它们的操作其实是完全对称的。</p><p>虽然滑动窗口代码框架中有一个嵌套的 while 循环，但因为指针 <code>left, right</code> 不会回退（它们的值只增不减），所以字符串/数组中的每个元素都只会进入窗口一次，然后被移出窗口一次，所以算法的时间复杂度就和字符串/数组的长度成正比，依然是 <code>O(N)</code>，其中 <code>N</code> 是输入字符串/数组的长度。</p><h3 id="套模板的写法" tabindex="-1"><a class="header-anchor" href="#套模板的写法" aria-hidden="true">#</a> 套模板的写法</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">lengthOfLongestSubstring</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 用合适的数据结构记录窗口中的字符及其频率</span>
    <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> window <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// 记录结果</span>
    <span class="token keyword">int</span> maxLength <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// c 是将移入窗口的字符</span>
        <span class="token keyword">char</span> c <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 增大窗口</span>
        right<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token comment">// 进行窗口内数据的一系列更新</span>
        window<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> window<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 判断左侧窗口是否要收缩</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// d 是将移出窗口的字符</span>
            <span class="token keyword">char</span> d <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 缩小窗口</span>
            left<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token comment">// 进行窗口内数据的一系列更新</span>
            window<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> window<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 在这里更新结果</span>
        maxLength <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxLength<span class="token punctuation">,</span> right <span class="token operator">-</span> left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> maxLength<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度：O(n)</p><p>空间复杂度：O(n)</p><p>上述代码中，哈希表中存储的是字符及其出现的频率，一旦发现重复字符，就会通过一个 <code>while</code> 循环来不断移动左边界，直到窗口中的重复字符被完全排除，这保证了窗口始终保持无重复字符的状态。</p><p>而我的代码中，哈希表中存储的是字符及其出现的最新位置，在发现重复字符时，可以通过一次操作，直接让左边界更新为重复字符的最新出现位置，而不需要像我的代码中的 <code>while</code> 循环那样逐步移动左边界。</p><p>从效率的角度来看，我的代码是更优的选择。</p><h2 id="其他解法" tabindex="-1"><a class="header-anchor" href="#其他解法" aria-hidden="true">#</a> 其他解法</h2><p>这里我们可以不用 Hash ，直接用数组来代替。</p><p>字符的 ASCII 码值可以作为数组的下标，数组存储该字符所在字符串的位置。</p><p><strong>这种方式适用于字符集比较小的情况，因为我们会直接开辟和字符集等大的数组。</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">lengthOfLongestSubstring</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> index <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">128</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">char</span> a <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token operator">&gt;</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            i <span class="token operator">=</span> index<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        index<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">=</span> j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
        length <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>j <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        j<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> length<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：Java 里定义数组的时候会自动初始化，全部赋值为0，在使用的时候需要多加留意。</strong></p><p>时间复杂度：O(n)</p><p>空间复杂度：O(m)，m 代表字符集的大小。这次不论原字符串多小，都会利用这么大的空间</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>综上，我们一步一步的寻求可优化的地方，对算法进行了优化。</p><p><strong>滑动窗口也可以理解为双指针法的一种，只不过这种解法更像是一个窗口的移动，所以叫做滑动窗口更适合一些。</strong></p><p>加深了 Hash 的应用，以及利用数组巧妙的实现了 Hash 的功能。</p>`,49);function l(i,u){return s(),a("div",null,[t(" more "),c])}const r=n(o,[["render",l],["__file","3.wuzhongfuzifudezuichangzichuan.html.vue"]]);export{r as default};
