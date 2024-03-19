import{_ as n,o as s,c as a,a as p,f as t}from"./app-GYMnAgnr.js";const e="/viteblog/assets/347-1-0apzfkPO.jpg",o={},c=t(`<p><strong>难度：中等</strong></p><p>给你一个整数数组 <code>nums</code> 和一个整数 <code>k</code> ，请你返回其中出现频率前 <code>k</code> 高的元素。你可以按 <strong>任意顺序</strong> 返回答案。</p><p><strong>示例 1:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: nums = [1], k = 1
输出: [1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>k</code> 的取值范围是 <code>[1, 数组中不相同的元素的个数]</code></li><li>题目数据保证答案唯一，换句话说，数组中前 <code>k</code> 个高频元素的集合是唯一的</li></ul><p>**进阶：**你所设计算法的时间复杂度 <strong>必须</strong> 优于 O(nlogn)，其中 <code>n</code> 是数组大小。</p><h2 id="暴力排序法" tabindex="-1"><a class="header-anchor" href="#暴力排序法" aria-hidden="true">#</a> 暴力排序法</h2><h3 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h3><p>暴力做法是使用 HashMap 来遍历一遍数组，得到每个元素和对应的出现频率，再根据 HashMap 的 value 值来进行降序排序，返回排序后前 k 个键值对的 key 即可。</p><h3 id="代码展示" tabindex="-1"><a class="header-anchor" href="#代码展示" aria-hidden="true">#</a> 代码展示</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">topKFrequent</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> ln <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 使用 HashMap 统计每个元素的频率</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ln<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> x <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 创建一个列表，存放 Map 的条目，然后根据频率进行降序排序</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Comparator 接口用于定义对象之间的比较规则，其约定如下：</span>
    <span class="token comment">// 返回值为负数，则第一个参数排在前面</span>
    <span class="token comment">// 返回值为正数，则第一个参数排在后面</span>
    list<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> b<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> a<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 获取前 k 个高频元素</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度：O(n logn)，主要由排序步骤决定。</p><p>空间复杂度：O(n)</p><img src="`+e+`" style="zoom:80%;"><p>在不调用 <code>list.sort()</code> 的情况下，可以发现使用常规的排序算法，甚至快速排序都无法满足题目的要求，它们的时间复杂度都大于或者等于 O(nlog⁡n)，而题目要求算法的时间复杂度必须优于 O(n log n)。</p><h2 id="堆-优先级队列" tabindex="-1"><a class="header-anchor" href="#堆-优先级队列" aria-hidden="true">#</a> 堆（优先级队列）</h2><p>堆是一种常用的树形结构，它是一种特殊的完全二叉树。</p><p>树中每个结点的值都不小于（或不大于）其左右孩子的值，这一特性称之为堆序性。</p><p>因此，在一个堆中，根节点是最大（或最小）节点。如果根节点最小，称之为小顶堆（或小根堆），如果根节点最大，称之为大顶堆（或大根堆）。</p><p>但堆的左右孩子没有大小的顺序。</p><h3 id="堆的存储结构" tabindex="-1"><a class="header-anchor" href="#堆的存储结构" aria-hidden="true">#</a> 堆的存储结构</h3><p>堆一般都用数组来存储，<code>i</code> 节点的父节点下标就为 <code>( i – 1 ) / 2</code> 。<code>i</code> 节点的左右子节点下标分别为 <code>2 ∗ i + 1</code> 和 <code>2 ∗ i + 2</code>。</p><h3 id="堆的操作" tabindex="-1"><a class="header-anchor" href="#堆的操作" aria-hidden="true">#</a> 堆的操作</h3><ul><li>建立：以最小堆为例，如果以数组存储元素时，一个数组具有对应的树表示形式，但树并不满足堆的条件，需要重新排列元素，可以建立“堆化”的树。</li><li>插入：每次插入都是将一个新元素插入到数组末尾，如果新构成的二叉树不满足堆的性质，我们需要将新元素 <strong>上浮</strong> 到数组末尾到堆顶的路径上（和父节点交换位置），直到找到属于自己的位置。</li><li>删除：删除一个元素总是发生在堆顶，因为堆顶的元素是最小的（小顶堆中）。数组中最后一个元素用来填补空缺位置，然后对顶部元素进行 <strong>下沉</strong>，如果左右孩子有比自己小的，则选择 <strong>最小</strong> 的那个进行交换。重复进行下沉操作，以满足堆的条件。</li></ul><h3 id="堆排序" tabindex="-1"><a class="header-anchor" href="#堆排序" aria-hidden="true">#</a> 堆排序</h3><p>堆排序的基本思想是：</p><ol><li>将待排序的序列构造成一个大顶堆，根据大顶堆的性质，我们可知当前堆的根节点（堆顶）就是序列中最大的元素；</li><li>将堆顶元素和最后一个元素交换，然后将剩下的节点重新构造成一个大顶堆；</li><li>重复步骤2，如此反复，从第一次构建大顶堆开始，每一次构建，我们都能获得一个序列的最大值，然后把它放到大顶堆的尾部。最终我们将得到一个有序序列。</li></ol><h3 id="优先级队列" tabindex="-1"><a class="header-anchor" href="#优先级队列" aria-hidden="true">#</a> 优先级队列</h3><p>优先级队列，其实就是一个 <strong>披着队列外衣的堆</strong>，因为优先级队列的接口只有：<strong>从队头取元素</strong> 和 <strong>从队尾添加元素</strong>，所以看起来就是一个队列。</p><p>优先级队列的内部元素会依照元素的权值来自动排列。</p><hr><h3 id="解题思路-1" tabindex="-1"><a class="header-anchor" href="#解题思路-1" aria-hidden="true">#</a> 解题思路</h3><p>在这个问题中，我们使用小顶堆（最小堆）而不是大顶堆（最大堆）的原因是效率和实用性。我们的目标是找出数组中出现频率最高的 k 个元素。考虑以下几点：</p><ol><li><strong>堆的大小控制</strong>：当使用小顶堆时，堆的大小可以被限制为 k（大顶堆做这道题则需要对所有 n 个元素构建一个堆，随后执行 k 次删除操作来获取 k 个最高频元素）。这意味着，一旦堆的大小超过 k，我们可以删除堆顶的元素（即当前频率最低的元素）。通过这种方式，堆内只需要保持着当前频率最高的 k 个元素。</li><li><strong>减少堆操作</strong>：在使用小顶堆时，你只需要对 n 个元素各执行一次堆操作（即添加操作，可能跟随一个删除操作）。而使用大顶堆则需要对所有 n 个元素构建一个堆，随后执行 k 次删除操作来获取 k 个最高频元素。当 n 很大而 k 较小时，小顶堆的方法会涉及更少的堆操作。</li><li><strong>效率</strong>：在小顶堆中，每当一个新元素的频率高于堆顶元素的频率时，我们替换掉堆顶元素并重新调整堆。这个操作的时间复杂度是 O(log k)。相反，构建大顶堆的时间复杂度是 O(n log n)。因此，对于大数据集，小顶堆通常更有效率。</li><li><strong>简化最终结果的获取</strong>：使用小顶堆在完成所有操作后，堆中剩下的就是频率最高的 k 个元素。我们只需将这些元素从堆中取出并放入结果数组即可。</li></ol><p>总结起来，使用小顶堆可以更高效地控制堆的大小，并确保在整个过程中始终保留频率最高的 k 个元素。这样既减少了不必要的操作，也简化了从堆中获取最终结果的步骤。</p><p>综上所述，虽然大顶堆和小顶堆都可以解决这个问题，但是在大多数情况下，特别是当 k 相对于 n 较小时，使用小顶堆更为高效，因为它涉及的堆操作更少，且对内存的利用更优化。</p><h3 id="代码展示-1" tabindex="-1"><a class="header-anchor" href="#代码展示-1" aria-hidden="true">#</a> 代码展示</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">topKFrequent</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> ln <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 使用 HashMap 统计每个元素的频率</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ln<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> x <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 创建一个最小堆，比较器根据元素频率来排序，频率较低的元素在堆顶</span>
    <span class="token comment">// 返回值为负数，则第一个参数排在前面</span>
    <span class="token comment">// 返回值为正数，则第一个参数排在后面</span>
    <span class="token class-name">PriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> heap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span> <span class="token operator">-</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>n2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 遍历 HashMap，将元素添加到堆中，同时维持堆的大小为 k</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> entry <span class="token operator">:</span> map<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        heap<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 如果堆的大小超过 k，删除堆顶元素（频率最低的元素）</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            heap<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 取出堆中的元素，构建结果数组</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> heap<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度：O(n log k)，其中 n 是数组 <code>nums</code> 的长度。每次堆操作（添加和删除）的时间复杂度为 O(log k)，总共进行了 n 次操作。</p><p>空间复杂度：O(n + k)，其中 O(n) 是用于存储频率的 HashMap，O(k) 是用于存储堆元素的空间。</p><h2 id="桶排序-计数排序" tabindex="-1"><a class="header-anchor" href="#桶排序-计数排序" aria-hidden="true">#</a> 桶排序（计数排序）</h2><h3 id="解题思路-2" tabindex="-1"><a class="header-anchor" href="#解题思路-2" aria-hidden="true">#</a> 解题思路</h3><p>使用桶排序解决这个问题是一个很好的选择，尤其是当你需要对大量数据进行排序时，它可以提供比传统比较排序更优的性能。</p><p>桶排序的基本思想是将元素分散到有限数量的桶中，然后分别对每个桶中的元素进行排序，最后合并这些桶中的元素。</p><p>对于频率排序的场景，我们可以将桶视为频率的集合，其中每个桶存储具有相同频率的元素。然后，我们可以从频率最高的桶开始，依次取出元素，直到达到所需的 <code>k</code> 个元素。</p><h3 id="代码展示-2" tabindex="-1"><a class="header-anchor" href="#代码展示-2" aria-hidden="true">#</a> 代码展示</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">topKFrequent</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> ln <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 使用 HashMap 统计每个元素的频率</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ln<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> x <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 桶排序，创建一个列表数组，数组的长度为 nums 的长度 + 1</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> buckets <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">[</span>ln <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 遍历 HashMap，使用频率作为桶的索引，将元素添加到相应的桶中</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> entry <span class="token operator">:</span> map<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> frequency <span class="token operator">=</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 如果当前桶中还未建立对应的列表，此时就该初始化一个列表</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>buckets<span class="token punctuation">[</span>frequency<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            buckets<span class="token punctuation">[</span>frequency<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        buckets<span class="token punctuation">[</span>frequency<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 从后向前遍历桶，获取前 k 个高频元素</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> ln<span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> k <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>buckets<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> bucket <span class="token operator">=</span> buckets<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> bucket<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                result<span class="token punctuation">[</span><span class="token operator">--</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度：O(n)，n 表示数组的长度。首先，遍历一遍数组统计元素的频率，这一系列操作的时间复杂度是 O(n)；桶的数量为 n+1，所以桶排序的时间复杂度为 O(n)；因此，总的时间复杂度是 O(n)。</p><p>空间复杂度：O(n)</p><p>在这个特定的桶排序实现中，数组的长度设置为 <code>nums</code> 数组的长度加一 (<code>nums.length + 1</code>) 的原因是为了确保数组可以容纳从 0 到 <code>nums.length</code>（含）所有可能的频率。</p><p>这是因为：</p><ul><li>最小可能的频率是 1（每个元素至少出现一次）。</li><li>最大可能的频率是 <code>nums.length</code>，这种情况发生在所有元素都相同的时候，即这个元素出现了 <code>nums.length</code> 次。</li></ul><p>因此，我们需要一个能够覆盖从 1 到 <code>nums.length</code> 的频率范围的数组，所以数组长度需要是 <code>nums.length + 1</code>。这样，数组的每个索引（从 1 到 <code>nums.length</code>）都对应于一个可能的频率。索引 0 不会被使用，因为不存在频率为 0 的元素（每个元素至少出现一次）。</p><p>这个桶排序方法利用了频率作为索引的事实，是一个针对特定情况（即元素频率排序）优化的实现。在这种情况下，它非常有效，因为它避免了比较排序算法的复杂性，能够更快地聚集和排序大量数据。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>牢记十大排序方法，非常重要。</p>`,59);function l(u,i){return s(),a("div",null,[p(" more "),c])}const r=n(o,[["render",l],["__file","347.qiankgegaopinyuansu.html.vue"]]);export{r as default};
