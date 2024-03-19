import{_ as n,o as a,c as s,a as t,f as e}from"./app-GYMnAgnr.js";const o={},p=e(`<p><strong>难度：简单</strong></p><p>给你两个字符串：<code>ransomNote</code> 和 <code>magazine</code> ，判断 <code>ransomNote</code> 能不能由 <code>magazine</code> 里面的字符构成。</p><p>如果可以，返回 <code>true</code> ；否则返回 <code>false</code> 。</p><p><code>magazine</code> 中的每个字符只能在 <code>ransomNote</code> 中使用一次。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：ransomNote = &quot;a&quot;, magazine = &quot;b&quot;
输出：false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：ransomNote = &quot;aa&quot;, magazine = &quot;ab&quot;
输出：false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：ransomNote = &quot;aa&quot;, magazine = &quot;aab&quot;
输出：true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= ransomNote.length, magazine.length &lt;= 105</code></li><li><code>ransomNote</code> 和 <code>magazine</code> 由小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p><strong>数组其实就是一个简单哈希表</strong>，而且这道题目中字符串只有小写字符，那么就可以定义一个数组 record，来记录字符串 <code>magazine</code> 里每个字符出现的次数。</p><p>record 数组的大小为 26 就可以了，初始化为 0，因为字符 a 到字符 z 的 ASCII 也是 26 个连续的数值。</p><p>把字符映射到数组的下标上，<strong>因为字符 a 到字符 z 的 ASCII 是 26 个连续的数值，所以字符 a 映射为下标 0，相应的字符 z 映射为下标 25。</strong></p><p>在遍历字符串 magazine 的时候，<strong>只需要将 magazine[i] - ‘a’ 所在的元素做 + 1 操作即可，并不需要记住字符 a 的 ASCII，只要求出一个相对数值就可以了。</strong> 这样就将字符串 magazine 中字符出现的次数，统计出来了。</p><p>之后检查字符串 ransomNote 中是否出现了这些字符，在遍历字符串 ransomNote 的时候，先判断 record 数组中对应索引处的值是否大于 0，如果不大于 0，说明 ransomNote 中出现了 magazine 中没有或者不足的字符，此时返回 false。</p><p>如果索引处的值大于 0，则只需要对 ransomNote[i] - ‘a’ 所在的元素做 - 1 操作即可。</p><p>最后如果 record 数组所有元素都为 0，说明字符串 s 和 t 是字母异位词，返回 true。</p><p>时间复杂度为 O(n)，空间上因为定义是的一个常量大小的辅助数组，所以空间复杂度为 O(1)。</p><p><strong>注意一开始就对比一下字符串长度，可以直接排除一些错误情况。</strong></p><h2 id="我的代码" tabindex="-1"><a class="header-anchor" href="#我的代码" aria-hidden="true">#</a> 我的代码</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">canConstruct</span><span class="token punctuation">(</span><span class="token class-name">String</span> ransomNote<span class="token punctuation">,</span> <span class="token class-name">String</span> magazine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>magazine<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> ransomNote<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> record <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> magazine<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        record<span class="token punctuation">[</span>magazine<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span><span class="token comment">// 并不需要记住字符a的ASCII，只要求出一个相对数值就可以了</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ransomNote<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>record<span class="token punctuation">[</span>ransomNote<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            record<span class="token punctuation">[</span>ransomNote<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度：O(n)</p><p>空间复杂度：O(1)，因为定义是的一个常量大小的辅助数组</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>数组就是简单的哈希表，但是数组的大小不是无限开辟的。</p><p><strong>注意一开始就对比一下字符串长度，可以直接排除一些错误情况。</strong></p><p>为什么要用数组，而不用 hashMap？</p><p><strong>其实在本题的情况下，使用 hashMap 的空间消耗要比数组大一些的，因为 hashMap 要维护红黑树或者哈希表，而且还要做哈希函数，是费时的！数据量大的话就能体现出来差别了。 所以数组更加简单直接有效！</strong></p>`,31);function c(i,l){return a(),s("div",null,[t(" more "),p])}const r=n(o,[["render",c],["__file","383.shujinxin.html.vue"]]);export{r as default};