import{_ as n,o as s,c as a,f as e}from"./app-GYMnAgnr.js";const t="/viteblog/assets/remove_ex1-bzeDk2q9.jpg",p={},i=e('<p><strong>难度：中等</strong></p><p>给你一个链表，删除链表的倒数第 <code>n</code> 个结点，并且返回链表的头结点。</p><p><strong>示例 1：</strong></p><p><img src="'+t+`" alt="img"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1], n = 1
输出：[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2], n = 1
输出：[1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li>链表中结点的数目为 <code>size</code></li><li><code>1 &lt;= size &lt;= 30</code></li><li><code>0 &lt;= Node.val &lt;= 100</code></li><li><code>1 &lt;= n &lt;= size</code></li></ul><p><strong>进阶</strong>：你能尝试使用一趟扫描实现吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>如果题目不要求我们只遍历一遍链表，但要求空间复杂度复杂度为 O(1) 的话，我们该怎么做呢？</p><p>我们往往不容易一开始就想到特别好的做法，暴力一点也无妨。</p><p>我的思路：</p><ol><li>遍历一遍链表，同时计数，可以得到链表的总长度 size</li><li>那么我们需要倒数第 n 个元素，其实就是顺数第 size - n + 1 个元素</li><li>再遍历一遍链表，同时计数，但这次我们目标明确，找到第 size - n + 1 个元素</li><li>剩下的就是普通的删除链表内某节点的操作了</li></ol><p>代码此处略去，但是复杂度应该是：</p><ul><li>时间复杂度：O(2 * n) = O(n)，因为遍历了两遍链表</li><li>空间复杂度：O(1)</li></ul><p>这种做法空间复杂度很低，但没有满足题目要求只遍历一趟数组的要求。</p><p>我们能不能不预处理链表的长度呢？毕竟一趟遍历只为了一个 size，多少有点不值得。</p><h2 id="双指针法" tabindex="-1"><a class="header-anchor" href="#双指针法" aria-hidden="true">#</a> 双指针法</h2><p>由于我们需要找到倒数第 n 个节点，因此我们可以使用两个指针 left 和 right 对链表进行遍历。</p><p>right 先从头到尾对链表进行遍历，当遍历到第 n 个节点的时候，我们要注意到一个点：此时剩下多少个元素没有遍历呢？答案是 size - n 个。</p><p>我们要删除的，是顺数第几个元素呢？刚好也是第 size - n + 1 个。</p><p>那么这个时候，让 left 也从链表头出发，两个指针开始同步往右边遍历，如此一来，当 right 指针走完剩下的 size - n 步时，left 指针也就走到了第 size - n 个元素。</p><p>尽管对于 <strong>指针位置信息</strong> 的处理可能得更加细致，但上述思路很清晰地表明我们可以找到需要删除的目标节点，而且 right 指针只需要走 size 步，left 指针只需要走 size - n 步，满足了题目一趟遍历的要求，同时空间复杂度也来到了常数级。</p><p>记住，我们设置快慢指针的目的是：<strong>让快慢指针相差 n 个结点，快指针走到尾部的时候，慢指针刚好处于倒数第 n 个节点的位置</strong>。</p><h2 id="我的代码" tabindex="-1"><a class="header-anchor" href="#我的代码" aria-hidden="true">#</a> 我的代码</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeNthFromEnd</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//虚拟头节点</span>
        <span class="token class-name">ListNode</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> left <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> right <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
        <span class="token comment">//right 走到第 n 个元素的位置</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            right <span class="token operator">=</span> right<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//left 开始和 right 同步移动</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>right<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            left <span class="token operator">=</span> left<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            right <span class="token operator">=</span> right<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//要删除的是 left 的后一个节点</span>
        left<span class="token punctuation">.</span>next <span class="token operator">=</span> left<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度：O(n)</p><p>空间复杂度：O(1)</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>如果使用 C，C++ 编程语言的话，不要忘了还要从内存中删除这两个移除的节点。</p><p><strong>当然如果使用 Java ，Python 的话就不用手动管理内存了。</strong></p><p>注意虚拟头节点的引入，可以使代码逻辑更统一。</p>`,36),l=[i];function o(c,d){return s(),a("div",null,l)}const u=n(p,[["render",o],["__file","19.shanchulianbiaodedaoshudiNgejiedian.html.vue"]]);export{u as default};