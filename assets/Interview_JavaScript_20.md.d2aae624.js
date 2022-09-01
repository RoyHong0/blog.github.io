import{_ as s,c as n,o as a,a as l}from"./app.ade653e8.js";const C=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u4E8B\u4EF6\u5FAA\u73AF\u7684\u7406\u89E3","description":"","frontmatter":{},"headers":[{"level":2,"title":"#\u4E00\u3001\u662F\u4EC0\u4E48","slug":"\u4E00\u3001\u662F\u4EC0\u4E48","link":"#\u4E00\u3001\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"#\u4E8C\u3001\u5B8F\u4EFB\u52A1\u4E0E\u5FAE\u4EFB\u52A1","slug":"\u4E8C\u3001\u5B8F\u4EFB\u52A1\u4E0E\u5FAE\u4EFB\u52A1","link":"#\u4E8C\u3001\u5B8F\u4EFB\u52A1\u4E0E\u5FAE\u4EFB\u52A1","children":[{"level":3,"title":"#\u5FAE\u4EFB\u52A1","slug":"\u5FAE\u4EFB\u52A1","link":"#\u5FAE\u4EFB\u52A1","children":[]},{"level":3,"title":"#\u5B8F\u4EFB\u52A1","slug":"\u5B8F\u4EFB\u52A1","link":"#\u5B8F\u4EFB\u52A1","children":[]}]},{"level":2,"title":"#\u4E09\u3001async\u4E0Eawait","slug":"\u4E09\u3001async\u4E0Eawait","link":"#\u4E09\u3001async\u4E0Eawait","children":[{"level":3,"title":"#async","slug":"async","link":"#async","children":[]},{"level":3,"title":"#await","slug":"await","link":"#await","children":[]}]},{"level":2,"title":"#\u56DB\u3001\u6D41\u7A0B\u5206\u6790","slug":"\u56DB\u3001\u6D41\u7A0B\u5206\u6790","link":"#\u56DB\u3001\u6D41\u7A0B\u5206\u6790","children":[]}],"relativePath":"Interview/JavaScript/20.md"}'),o={name:"Interview/JavaScript/20.md"},p=l(`<h1 id="\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u4E8B\u4EF6\u5FAA\u73AF\u7684\u7406\u89E3" tabindex="-1">\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u4E8B\u4EF6\u5FAA\u73AF\u7684\u7406\u89E3 <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u4E8B\u4EF6\u5FAA\u73AF\u7684\u7406\u89E3" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/50f062d0-7cb8-11eb-ab90-d9ae814b240d.png" alt="img"></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a href="https://vue3js.cn/interview/JavaScript/event_loop.html#%E4%B8%80%E3%80%81%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">#</a>\u4E00\u3001\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>\u9996\u5148\uFF0C<code>JavaScript</code>\u662F\u4E00\u95E8\u5355\u7EBF\u7A0B\u7684\u8BED\u8A00\uFF0C\u610F\u5473\u7740\u540C\u4E00\u65F6\u95F4\u5185\u53EA\u80FD\u505A\u4E00\u4EF6\u4E8B\uFF0C\u4F46\u662F\u8FD9\u5E76\u4E0D\u610F\u5473\u7740\u5355\u7EBF\u7A0B\u5C31\u662F\u963B\u585E\uFF0C\u800C\u5B9E\u73B0\u5355\u7EBF\u7A0B\u975E\u963B\u585E\u7684\u65B9\u6CD5\u5C31\u662F\u4E8B\u4EF6\u5FAA\u73AF</p><p>\u5728<code>JavaScript</code>\u4E2D\uFF0C\u6240\u6709\u7684\u4EFB\u52A1\u90FD\u53EF\u4EE5\u5206\u4E3A</p><ul><li>\u540C\u6B65\u4EFB\u52A1\uFF1A\u7ACB\u5373\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u540C\u6B65\u4EFB\u52A1\u4E00\u822C\u4F1A\u76F4\u63A5\u8FDB\u5165\u5230\u4E3B\u7EBF\u7A0B\u4E2D\u6267\u884C</li><li>\u5F02\u6B65\u4EFB\u52A1\uFF1A\u5F02\u6B65\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u6BD4\u5982<code>ajax</code>\u7F51\u7EDC\u8BF7\u6C42\uFF0C<code>setTimeout</code>\u5B9A\u65F6\u51FD\u6570\u7B49</li></ul><p>\u540C\u6B65\u4EFB\u52A1\u4E0E\u5F02\u6B65\u4EFB\u52A1\u7684\u8FD0\u884C\u6D41\u7A0B\u56FE\u5982\u4E0B\uFF1A</p><p><img src="https://static.vue-js.com/61efbc20-7cb8-11eb-85f6-6fac77c0c9b3.png" alt="img"></p><p>\u4ECE\u4E0A\u9762\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u540C\u6B65\u4EFB\u52A1\u8FDB\u5165\u4E3B\u7EBF\u7A0B\uFF0C\u5373\u4E3B\u6267\u884C\u6808\uFF0C\u5F02\u6B65\u4EFB\u52A1\u8FDB\u5165\u4EFB\u52A1\u961F\u5217\uFF0C\u4E3B\u7EBF\u7A0B\u5185\u7684\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\u4E3A\u7A7A\uFF0C\u4F1A\u53BB\u4EFB\u52A1\u961F\u5217\u8BFB\u53D6\u5BF9\u5E94\u7684\u4EFB\u52A1\uFF0C\u63A8\u5165\u4E3B\u7EBF\u7A0B\u6267\u884C\u3002\u4E0A\u8FF0\u8FC7\u7A0B\u7684\u4E0D\u65AD\u91CD\u590D\u5C31\u4E8B\u4EF6\u5FAA\u73AF</p><h2 id="\u4E8C\u3001\u5B8F\u4EFB\u52A1\u4E0E\u5FAE\u4EFB\u52A1" tabindex="-1"><a href="https://vue3js.cn/interview/JavaScript/event_loop.html#%E4%BA%8C%E3%80%81%E5%AE%8F%E4%BB%BB%E5%8A%A1%E4%B8%8E%E5%BE%AE%E4%BB%BB%E5%8A%A1" target="_blank" rel="noreferrer">#</a>\u4E8C\u3001\u5B8F\u4EFB\u52A1\u4E0E\u5FAE\u4EFB\u52A1 <a class="header-anchor" href="#\u4E8C\u3001\u5B8F\u4EFB\u52A1\u4E0E\u5FAE\u4EFB\u52A1" aria-hidden="true">#</a></h2><p>\u5982\u679C\u5C06\u4EFB\u52A1\u5212\u5206\u4E3A\u540C\u6B65\u4EFB\u52A1\u548C\u5F02\u6B65\u4EFB\u52A1\u5E76\u4E0D\u662F\u90A3\u4E48\u7684\u51C6\u786E\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">new Promise</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">then</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u6309\u7167\u4E0A\u9762\u6D41\u7A0B\u56FE\u6765\u5206\u6790\u4EE3\u7801\uFF0C\u6211\u4EEC\u4F1A\u5F97\u5230\u4E0B\u9762\u7684\u6267\u884C\u6B65\u9AA4\uFF1A</p><ul><li><code>console.log(1)</code>\uFF0C\u540C\u6B65\u4EFB\u52A1\uFF0C\u4E3B\u7EBF\u7A0B\u4E2D\u6267\u884C</li><li><code>setTimeout()</code> \uFF0C\u5F02\u6B65\u4EFB\u52A1\uFF0C\u653E\u5230 <code>Event Table</code>\uFF0C0 \u6BEB\u79D2\u540E<code>console.log(2)</code>\u56DE\u8C03\u63A8\u5165 <code>Event Queue</code> \u4E2D</li><li><code>new Promise</code> \uFF0C\u540C\u6B65\u4EFB\u52A1\uFF0C\u4E3B\u7EBF\u7A0B\u76F4\u63A5\u6267\u884C</li><li><code>.then</code> \uFF0C\u5F02\u6B65\u4EFB\u52A1\uFF0C\u653E\u5230 <code>Event Table</code></li><li><code>console.log(3)</code>\uFF0C\u540C\u6B65\u4EFB\u52A1\uFF0C\u4E3B\u7EBF\u7A0B\u6267\u884C</li></ul><p>\u6240\u4EE5\u6309\u7167\u5206\u6790\uFF0C\u5B83\u7684\u7ED3\u679C\u5E94\u8BE5\u662F <code>1</code> =&gt; <code>&#39;new Promise&#39;</code> =&gt; <code>3</code> =&gt; <code>2</code> =&gt; <code>&#39;then&#39;</code></p><p>\u4F46\u662F\u5B9E\u9645\u7ED3\u679C\u662F\uFF1A<code>1</code>=&gt;<code>&#39;new Promise&#39;</code>=&gt; <code>3</code> =&gt; <code>&#39;then&#39;</code> =&gt; <code>2</code></p><p>\u51FA\u73B0\u5206\u6B67\u7684\u539F\u56E0\u5728\u4E8E\u5F02\u6B65\u4EFB\u52A1\u6267\u884C\u987A\u5E8F\uFF0C\u4E8B\u4EF6\u961F\u5217\u5176\u5B9E\u662F\u4E00\u4E2A\u201C\u5148\u8FDB\u5148\u51FA\u201D\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u6392\u5728\u524D\u9762\u7684\u4E8B\u4EF6\u4F1A\u4F18\u5148\u88AB\u4E3B\u7EBF\u7A0B\u8BFB\u53D6</p><p>\u4F8B\u5B50\u4E2D <code>setTimeout</code>\u56DE\u8C03\u4E8B\u4EF6\u662F\u5148\u8FDB\u5165\u961F\u5217\u4E2D\u7684\uFF0C\u6309\u7406\u8BF4\u5E94\u8BE5\u5148\u4E8E <code>.then</code> \u4E2D\u7684\u6267\u884C\uFF0C\u4F46\u662F\u7ED3\u679C\u5374\u504F\u504F\u76F8\u53CD</p><p>\u539F\u56E0\u5728\u4E8E\u5F02\u6B65\u4EFB\u52A1\u8FD8\u53EF\u4EE5\u7EC6\u5206\u4E3A\u5FAE\u4EFB\u52A1\u4E0E\u5B8F\u4EFB\u52A1</p><h3 id="\u5FAE\u4EFB\u52A1" tabindex="-1"><a href="https://vue3js.cn/interview/JavaScript/event_loop.html#%E5%BE%AE%E4%BB%BB%E5%8A%A1" target="_blank" rel="noreferrer">#</a>\u5FAE\u4EFB\u52A1 <a class="header-anchor" href="#\u5FAE\u4EFB\u52A1" aria-hidden="true">#</a></h3><p>\u4E00\u4E2A\u9700\u8981\u5F02\u6B65\u6267\u884C\u7684\u51FD\u6570\uFF0C\u6267\u884C\u65F6\u673A\u662F\u5728\u4E3B\u51FD\u6570\u6267\u884C\u7ED3\u675F\u4E4B\u540E\u3001\u5F53\u524D\u5B8F\u4EFB\u52A1\u7ED3\u675F\u4E4B\u524D</p><p>\u5E38\u89C1\u7684\u5FAE\u4EFB\u52A1\u6709\uFF1A</p><ul><li>Promise.then</li><li>MutaionObserver</li><li>Object.observe\uFF08\u5DF2\u5E9F\u5F03\uFF1BProxy \u5BF9\u8C61\u66FF\u4EE3\uFF09</li><li>process.nextTick\uFF08Node.js\uFF09</li></ul><h3 id="\u5B8F\u4EFB\u52A1" tabindex="-1"><a href="https://vue3js.cn/interview/JavaScript/event_loop.html#%E5%AE%8F%E4%BB%BB%E5%8A%A1" target="_blank" rel="noreferrer">#</a>\u5B8F\u4EFB\u52A1 <a class="header-anchor" href="#\u5B8F\u4EFB\u52A1" aria-hidden="true">#</a></h3><p>\u5B8F\u4EFB\u52A1\u7684\u65F6\u95F4\u7C92\u5EA6\u6BD4\u8F83\u5927\uFF0C\u6267\u884C\u7684\u65F6\u95F4\u95F4\u9694\u662F\u4E0D\u80FD\u7CBE\u786E\u63A7\u5236\u7684\uFF0C\u5BF9\u4E00\u4E9B\u9AD8\u5B9E\u65F6\u6027\u7684\u9700\u6C42\u5C31\u4E0D\u592A\u7B26\u5408</p><p>\u5E38\u89C1\u7684\u5B8F\u4EFB\u52A1\u6709\uFF1A</p><ul><li>script (\u53EF\u4EE5\u7406\u89E3\u4E3A\u5916\u5C42\u540C\u6B65\u4EE3\u7801)</li><li>setTimeout/setInterval</li><li>UI rendering/UI\u4E8B\u4EF6</li><li>postMessage\u3001MessageChannel</li><li>setImmediate\u3001I/O\uFF08Node.js\uFF09</li></ul><p>\u8FD9\u65F6\u5019\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\uFF0C\u5B8F\u4EFB\u52A1\uFF0C\u5FAE\u4EFB\u52A1\u7684\u5173\u7CFB\u5982\u56FE\u6240\u793A</p><p><img src="https://static.vue-js.com/6e80e5e0-7cb8-11eb-85f6-6fac77c0c9b3.png" alt="img"></p><p>\u6309\u7167\u8FD9\u4E2A\u6D41\u7A0B\uFF0C\u5B83\u7684\u6267\u884C\u673A\u5236\u662F\uFF1A</p><ul><li>\u6267\u884C\u4E00\u4E2A\u5B8F\u4EFB\u52A1\uFF0C\u5982\u679C\u9047\u5230\u5FAE\u4EFB\u52A1\u5C31\u5C06\u5B83\u653E\u5230\u5FAE\u4EFB\u52A1\u7684\u4E8B\u4EF6\u961F\u5217\u4E2D</li><li>\u5F53\u524D\u5B8F\u4EFB\u52A1\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u4F1A\u67E5\u770B\u5FAE\u4EFB\u52A1\u7684\u4E8B\u4EF6\u961F\u5217\uFF0C\u7136\u540E\u5C06\u91CC\u9762\u7684\u6240\u6709\u5FAE\u4EFB\u52A1\u4F9D\u6B21\u6267\u884C\u5B8C</li></ul><p>\u56DE\u5230\u4E0A\u9762\u7684\u9898\u76EE</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">new Promise</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">then</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u6D41\u7A0B\u5982\u4E0B</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// \u9047\u5230 console.log(1) \uFF0C\u76F4\u63A5\u6253\u5370 1</span></span>
<span class="line"><span style="color:#676E95;">// \u9047\u5230\u5B9A\u65F6\u5668\uFF0C\u5C5E\u4E8E\u65B0\u7684\u5B8F\u4EFB\u52A1\uFF0C\u7559\u7740\u540E\u9762\u6267\u884C</span></span>
<span class="line"><span style="color:#676E95;">// \u9047\u5230 new Promise\uFF0C\u8FD9\u4E2A\u662F\u76F4\u63A5\u6267\u884C\u7684\uFF0C\u6253\u5370 &#39;new Promise&#39;</span></span>
<span class="line"><span style="color:#676E95;">// .then \u5C5E\u4E8E\u5FAE\u4EFB\u52A1\uFF0C\u653E\u5165\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u540E\u9762\u518D\u6267\u884C</span></span>
<span class="line"><span style="color:#676E95;">// \u9047\u5230 console.log(3) \u76F4\u63A5\u6253\u5370 3</span></span>
<span class="line"><span style="color:#676E95;">// \u597D\u4E86\u672C\u8F6E\u5B8F\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\uFF0C\u73B0\u5728\u53BB\u5FAE\u4EFB\u52A1\u5217\u8868\u67E5\u770B\u662F\u5426\u6709\u5FAE\u4EFB\u52A1\uFF0C\u53D1\u73B0 .then \u7684\u56DE\u8C03\uFF0C\u6267\u884C\u5B83\uFF0C\u6253\u5370 &#39;then&#39;</span></span>
<span class="line"><span style="color:#676E95;">// \u5F53\u4E00\u6B21\u5B8F\u4EFB\u52A1\u6267\u884C\u5B8C\uFF0C\u518D\u53BB\u6267\u884C\u65B0\u7684\u5B8F\u4EFB\u52A1\uFF0C\u8FD9\u91CC\u5C31\u5269\u4E00\u4E2A\u5B9A\u65F6\u5668\u7684\u5B8F\u4EFB\u52A1\u4E86\uFF0C\u6267\u884C\u5B83\uFF0C\u6253\u5370 2</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E09\u3001async\u4E0Eawait" tabindex="-1"><a href="https://vue3js.cn/interview/JavaScript/event_loop.html#%E4%B8%89%E3%80%81async%E4%B8%8Eawait" target="_blank" rel="noreferrer">#</a>\u4E09\u3001async\u4E0Eawait <a class="header-anchor" href="#\u4E09\u3001async\u4E0Eawait" aria-hidden="true">#</a></h2><p><code>async</code> \u662F\u5F02\u6B65\u7684\u610F\u601D\uFF0C<code>await</code>\u5219\u53EF\u4EE5\u7406\u89E3\u4E3A <code>async wait</code>\u3002\u6240\u4EE5\u53EF\u4EE5\u7406\u89E3<code>async</code>\u5C31\u662F\u7528\u6765\u58F0\u660E\u4E00\u4E2A\u5F02\u6B65\u65B9\u6CD5\uFF0C\u800C <code>await</code>\u662F\u7528\u6765\u7B49\u5F85\u5F02\u6B65\u65B9\u6CD5\u6267\u884C</p><h3 id="async" tabindex="-1"><a href="https://vue3js.cn/interview/JavaScript/event_loop.html#async" target="_blank" rel="noreferrer">#</a>async <a class="header-anchor" href="#async" aria-hidden="true">#</a></h3><p><code>async</code>\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A<code>promise</code>\u5BF9\u8C61\uFF0C\u4E0B\u9762\u4E24\u79CD\u65B9\u6CD5\u662F\u7B49\u6548\u7684</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">TEST</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// asyncF is equivalent to f!</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">asyncF</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">TEST</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="await" tabindex="-1"><a href="https://vue3js.cn/interview/JavaScript/event_loop.html#await" target="_blank" rel="noreferrer">#</a>await <a class="header-anchor" href="#await" aria-hidden="true">#</a></h3><p>\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C<code>await</code>\u547D\u4EE4\u540E\u9762\u662F\u4E00\u4E2A <code>Promise</code>\u5BF9\u8C61\uFF0C\u8FD4\u56DE\u8BE5\u5BF9\u8C61\u7684\u7ED3\u679C\u3002\u5982\u679C\u4E0D\u662F <code>Promise</code>\u5BF9\u8C61\uFF0C\u5C31\u76F4\u63A5\u8FD4\u56DE\u5BF9\u5E94\u7684\u503C</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">f</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u7B49\u540C\u4E8E</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// return 123</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">123</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">f</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">v</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(v)) </span><span style="color:#676E95;">// 123</span></span>
<span class="line"></span></code></pre></div><p>\u4E0D\u7BA1<code>await</code>\u540E\u9762\u8DDF\u7740\u7684\u662F\u4EC0\u4E48\uFF0C<code>await</code>\u90FD\u4F1A\u963B\u585E\u540E\u9762\u7684\u4EE3\u7801</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fn2</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">) </span><span style="color:#676E95;">// \u963B\u585E</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fn2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">fn1</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C<code>await</code> \u4F1A\u963B\u585E\u4E0B\u9762\u7684\u4EE3\u7801\uFF08\u5373\u52A0\u5165\u5FAE\u4EFB\u52A1\u961F\u5217\uFF09\uFF0C\u5148\u6267\u884C <code>async</code>\u5916\u9762\u7684\u540C\u6B65\u4EE3\u7801\uFF0C\u540C\u6B65\u4EE3\u7801\u6267\u884C\u5B8C\uFF0C\u518D\u56DE\u5230 <code>async</code> \u51FD\u6570\u4E2D\uFF0C\u518D\u6267\u884C\u4E4B\u524D\u963B\u585E\u7684\u4EE3\u7801</p><p>\u6240\u4EE5\u4E0A\u8FF0\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A<code>1</code>\uFF0C<code>fn2</code>\uFF0C<code>3</code>\uFF0C<code>2</code></p><h2 id="\u56DB\u3001\u6D41\u7A0B\u5206\u6790" tabindex="-1"><a href="https://vue3js.cn/interview/JavaScript/event_loop.html#%E5%9B%9B%E3%80%81%E6%B5%81%E7%A8%8B%E5%88%86%E6%9E%90" target="_blank" rel="noreferrer">#</a>\u56DB\u3001\u6D41\u7A0B\u5206\u6790 <a class="header-anchor" href="#\u56DB\u3001\u6D41\u7A0B\u5206\u6790" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u5BF9\u4E0A\u9762\u7684\u4E86\u89E3\uFF0C\u6211\u4EEC\u5BF9<code>JavaScript</code>\u5BF9\u5404\u79CD\u573A\u666F\u7684\u6267\u884C\u987A\u5E8F\u6709\u4E86\u5927\u81F4\u7684\u4E86\u89E3</p><p>\u8FD9\u91CC\u76F4\u63A5\u4E0A\u4EE3\u7801\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">async1</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">async1 start</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">async2</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">async1 end</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">async2</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">async2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">script start</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">settimeout</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">async1</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">promise1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">promise2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">script end</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u5206\u6790\u8FC7\u7A0B\uFF1A</p><ol><li>\u6267\u884C\u6574\u6BB5\u4EE3\u7801\uFF0C\u9047\u5230 <code>console.log(&#39;script start&#39;)</code> \u76F4\u63A5\u6253\u5370\u7ED3\u679C\uFF0C\u8F93\u51FA <code>script start</code></li><li>\u9047\u5230\u5B9A\u65F6\u5668\u4E86\uFF0C\u5B83\u662F\u5B8F\u4EFB\u52A1\uFF0C\u5148\u653E\u7740\u4E0D\u6267\u884C</li><li>\u9047\u5230 <code>async1()</code>\uFF0C\u6267\u884C <code>async1</code> \u51FD\u6570\uFF0C\u5148\u6253\u5370 <code>async1 start</code>\uFF0C\u4E0B\u9762\u9047\u5230<code>await</code>\u600E\u4E48\u529E\uFF1F\u5148\u6267\u884C <code>async2</code>\uFF0C\u6253\u5370 <code>async2</code>\uFF0C\u7136\u540E\u963B\u585E\u4E0B\u9762\u4EE3\u7801\uFF08\u5373\u52A0\u5165\u5FAE\u4EFB\u52A1\u5217\u8868\uFF09\uFF0C\u8DF3\u51FA\u53BB\u6267\u884C\u540C\u6B65\u4EE3\u7801</li><li>\u8DF3\u5230 <code>new Promise</code> \u8FD9\u91CC\uFF0C\u76F4\u63A5\u6267\u884C\uFF0C\u6253\u5370 <code>promise1</code>\uFF0C\u4E0B\u9762\u9047\u5230 <code>.then()</code>\uFF0C\u5B83\u662F\u5FAE\u4EFB\u52A1\uFF0C\u653E\u5230\u5FAE\u4EFB\u52A1\u5217\u8868\u7B49\u5F85\u6267\u884C</li><li>\u6700\u540E\u4E00\u884C\u76F4\u63A5\u6253\u5370 <code>script end</code>\uFF0C\u73B0\u5728\u540C\u6B65\u4EE3\u7801\u6267\u884C\u5B8C\u4E86\uFF0C\u5F00\u59CB\u6267\u884C\u5FAE\u4EFB\u52A1\uFF0C\u5373 <code>await</code>\u4E0B\u9762\u7684\u4EE3\u7801\uFF0C\u6253\u5370 <code>async1 end</code></li><li>\u7EE7\u7EED\u6267\u884C\u4E0B\u4E00\u4E2A\u5FAE\u4EFB\u52A1\uFF0C\u5373\u6267\u884C <code>then</code> \u7684\u56DE\u8C03\uFF0C\u6253\u5370 <code>promise2</code></li><li>\u4E0A\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u6240\u6709\u4E8B\u90FD\u505A\u5B8C\u4E86\uFF0C\u5F00\u59CB\u4E0B\u4E00\u4E2A\u5B8F\u4EFB\u52A1\uFF0C\u5C31\u662F\u5B9A\u65F6\u5668\uFF0C\u6253\u5370 <code>settimeout</code></li></ol><p>\u6240\u4EE5\u6700\u540E\u7684\u7ED3\u679C\u662F\uFF1A<code>script start</code>\u3001<code>async1 start</code>\u3001<code>async2</code>\u3001<code>promise1</code>\u3001<code>script end</code>\u3001<code>async1 end</code>\u3001<code>promise2</code>\u3001<code>settimeout</code></p>`,54),e=[p];function c(t,r,y,F,D,i){return a(),n("div",null,e)}const d=s(o,[["render",c]]);export{C as __pageData,d as default};