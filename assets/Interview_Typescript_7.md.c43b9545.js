import{_ as s,c as n,o as a,a as p}from"./app.ade653e8.js";const i=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9 TypeScript \u4E2D\u6CDB\u578B\u7684\u7406\u89E3\uFF1F\u5E94\u7528\u573A\u666F\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"#\u4E00\u3001\u662F\u4EC0\u4E48","slug":"\u4E00\u3001\u662F\u4EC0\u4E48","link":"#\u4E00\u3001\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"#\u4E8C\u3001\u4F7F\u7528\u65B9\u5F0F","slug":"\u4E8C\u3001\u4F7F\u7528\u65B9\u5F0F","link":"#\u4E8C\u3001\u4F7F\u7528\u65B9\u5F0F","children":[{"level":3,"title":"#\u51FD\u6570\u58F0\u660E","slug":"\u51FD\u6570\u58F0\u660E","link":"#\u51FD\u6570\u58F0\u660E","children":[]},{"level":3,"title":"#\u63A5\u53E3\u58F0\u660E","slug":"\u63A5\u53E3\u58F0\u660E","link":"#\u63A5\u53E3\u58F0\u660E","children":[]},{"level":3,"title":"#","slug":"","link":"#","children":[]},{"level":3,"title":"#\u7C7B\u58F0\u660E","slug":"\u7C7B\u58F0\u660E","link":"#\u7C7B\u58F0\u660E","children":[]},{"level":3,"title":"#\u7D22\u5F15\u7C7B\u578B\u3001\u7EA6\u675F\u7C7B\u578B","slug":"\u7D22\u5F15\u7C7B\u578B\u3001\u7EA6\u675F\u7C7B\u578B","link":"#\u7D22\u5F15\u7C7B\u578B\u3001\u7EA6\u675F\u7C7B\u578B","children":[]},{"level":3,"title":"#\u591A\u7C7B\u578B\u7EA6\u675F","slug":"\u591A\u7C7B\u578B\u7EA6\u675F","link":"#\u591A\u7C7B\u578B\u7EA6\u675F","children":[]}]},{"level":2,"title":"#\u4E09\u3001\u5E94\u7528\u573A\u666F","slug":"\u4E09\u3001\u5E94\u7528\u573A\u666F","link":"#\u4E09\u3001\u5E94\u7528\u573A\u666F","children":[]},{"level":2,"title":"#\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","link":"#\u53C2\u8003\u6587\u732E","children":[]}],"relativePath":"Interview/Typescript/7.md"}'),l={name:"Interview/Typescript/7.md"},e=p(`<h1 id="\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9-typescript-\u4E2D\u6CDB\u578B\u7684\u7406\u89E3\uFF1F\u5E94\u7528\u573A\u666F\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9 TypeScript \u4E2D\u6CDB\u578B\u7684\u7406\u89E3\uFF1F\u5E94\u7528\u573A\u666F\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9-typescript-\u4E2D\u6CDB\u578B\u7684\u7406\u89E3\uFF1F\u5E94\u7528\u573A\u666F\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/5bb5f1d0-0e17-11ec-8e64-91fdec0f05a1.png" alt="img"></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a href="https://vue3js.cn/interview/typescript/generic.html#%E4%B8%80%E3%80%81%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">#</a>\u4E00\u3001\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>\u6CDB\u578B\u7A0B\u5E8F\u8BBE\u8BA1\uFF08generic programming\uFF09\u662F\u7A0B\u5E8F\u8BBE\u8BA1\u8BED\u8A00\u7684\u4E00\u79CD\u98CE\u683C\u6216\u8303\u5F0F</p><p>\u6CDB\u578B\u5141\u8BB8\u6211\u4EEC\u5728\u5F3A\u7C7B\u578B\u7A0B\u5E8F\u8BBE\u8BA1\u8BED\u8A00\u4E2D\u7F16\u5199\u4EE3\u7801\u65F6\u4F7F\u7528\u4E00\u4E9B\u4EE5\u540E\u624D\u6307\u5B9A\u7684\u7C7B\u578B\uFF0C\u5728\u5B9E\u4F8B\u5316\u65F6\u4F5C\u4E3A\u53C2\u6570\u6307\u660E\u8FD9\u4E9B\u7C7B\u578B \u5728<code>typescript</code>\u4E2D\uFF0C\u5B9A\u4E49\u51FD\u6570\uFF0C\u63A5\u53E3\u6216\u8005\u7C7B\u7684\u65F6\u5019\uFF0C\u4E0D\u9884\u5148\u5B9A\u4E49\u597D\u5177\u4F53\u7684\u7C7B\u578B\uFF0C\u800C\u5728\u4F7F\u7528\u7684\u65F6\u5019\u5728\u6307\u5B9A\u7C7B\u578B\u7684\u4E00\u79CD\u7279\u6027</p><p>\u5047\u8BBE\u6211\u4EEC\u7528\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B83\u53EF\u63A5\u53D7\u4E00\u4E2A <code>number</code> \u53C2\u6570\u5E76\u8FD4\u56DE\u4E00\u4E2A<code>number</code> \u53C2\u6570\uFF0C\u5982\u4E0B\u5199\u6CD5\uFF1A</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">returnItem</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">para</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">para</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u6211\u4EEC\u6253\u7B97\u63A5\u53D7\u4E00\u4E2A <code>string</code> \u7C7B\u578B\uFF0C\u7136\u540E\u518D\u8FD4\u56DE <code>string</code>\u7C7B\u578B\uFF0C\u5219\u5982\u4E0B\u5199\u6CD5\uFF1A</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">returnItem</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">para</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">para</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u8FF0\u4E24\u79CD\u7F16\u5199\u65B9\u5F0F\uFF0C\u5B58\u5728\u4E00\u4E2A\u6700\u660E\u663E\u7684\u95EE\u9898\u5728\u4E8E\uFF0C\u4EE3\u7801\u91CD\u590D\u5EA6\u6BD4\u8F83\u9AD8</p><p>\u867D\u7136\u53EF\u4EE5\u4F7F\u7528 <code>any</code>\u7C7B\u578B\u53BB\u66FF\u4EE3\uFF0C\u4F46\u8FD9\u4E5F\u5E76\u4E0D\u662F\u5F88\u597D\u7684\u65B9\u6848\uFF0C\u56E0\u4E3A\u6211\u4EEC\u7684\u76EE\u7684\u662F\u63A5\u6536\u4EC0\u4E48\u7C7B\u578B\u7684\u53C2\u6570\u8FD4\u56DE\u4EC0\u4E48\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u5373\u5728\u8FD0\u884C\u65F6\u4F20\u5165\u53C2\u6570\u6211\u4EEC\u624D\u80FD\u786E\u5B9A\u7C7B\u578B</p><p>\u8FD9\u79CD\u60C5\u51B5\u5C31\u53EF\u4EE5\u4F7F\u7528\u6CDB\u578B\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">returnItem</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">para</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">para</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u6CDB\u578B\u7ED9\u4E88\u5F00\u53D1\u8005\u521B\u9020\u7075\u6D3B\u3001\u53EF\u91CD\u7528\u4EE3\u7801\u7684\u80FD\u529B</p><h2 id="\u4E8C\u3001\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a href="https://vue3js.cn/interview/typescript/generic.html#%E4%BA%8C%E3%80%81%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F" target="_blank" rel="noreferrer">#</a>\u4E8C\u3001\u4F7F\u7528\u65B9\u5F0F <a class="header-anchor" href="#\u4E8C\u3001\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a></h2><p>\u6CDB\u578B\u901A\u8FC7<code>&lt;&gt;</code>\u7684\u5F62\u5F0F\u8FDB\u884C\u8868\u8FF0\uFF0C\u53EF\u4EE5\u58F0\u660E\uFF1A</p><ul><li>\u51FD\u6570</li><li>\u63A5\u53E3</li><li>\u7C7B</li></ul><h3 id="\u51FD\u6570\u58F0\u660E" tabindex="-1"><a href="https://vue3js.cn/interview/typescript/generic.html#%E5%87%BD%E6%95%B0%E5%A3%B0%E6%98%8E" target="_blank" rel="noreferrer">#</a>\u51FD\u6570\u58F0\u660E <a class="header-anchor" href="#\u51FD\u6570\u58F0\u660E" aria-hidden="true">#</a></h3><p>\u58F0\u660E\u51FD\u6570\u7684\u5F62\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">returnItem</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">para</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">para</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5B9A\u4E49\u6CDB\u578B\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u4E00\u6B21\u5B9A\u4E49<strong>\u591A\u4E2A\u7C7B\u578B\u53C2\u6570</strong>\uFF0C\u6BD4\u5982\u6211\u4EEC\u53EF\u4EE5\u540C\u65F6\u5B9A\u4E49\u6CDB\u578B <code>T</code> \u548C \u6CDB\u578B <code>U</code>\uFF1A</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">swap</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">U</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">tuple</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">U</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> [</span><span style="color:#FFCB6B;">U</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">tuple</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tuple</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">swap</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">seven</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// [&#39;seven&#39;, 7]</span></span>
<span class="line"></span></code></pre></div><h3 id="\u63A5\u53E3\u58F0\u660E" tabindex="-1"><a href="https://vue3js.cn/interview/typescript/generic.html#%E6%8E%A5%E5%8F%A3%E5%A3%B0%E6%98%8E" target="_blank" rel="noreferrer">#</a>\u63A5\u53E3\u58F0\u660E <a class="header-anchor" href="#\u63A5\u53E3\u58F0\u660E" aria-hidden="true">#</a></h3><p>\u58F0\u660E\u63A5\u53E3\u7684\u5F62\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ReturnItemFn</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">para</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u90A3\u4E48\u5F53\u6211\u4EEC\u60F3\u4F20\u5165\u4E00\u4E2Anumber\u4F5C\u4E3A\u53C2\u6570\u7684\u65F6\u5019\uFF0C\u5C31\u53EF\u4EE5\u8FD9\u6837\u58F0\u660E\u51FD\u6570:</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> returnItem</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ReturnItemFn</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">para</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> para</span></span>
<span class="line"></span></code></pre></div><h3 id="" tabindex="-1"><a href="https://vue3js.cn/interview/typescript/generic.html#" target="_blank" rel="noreferrer">#</a> <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><h3 id="\u7C7B\u58F0\u660E" tabindex="-1"><a href="https://vue3js.cn/interview/typescript/generic.html#%E7%B1%BB%E5%A3%B0%E6%98%8E" target="_blank" rel="noreferrer">#</a>\u7C7B\u58F0\u660E <a class="header-anchor" href="#\u7C7B\u58F0\u660E" aria-hidden="true">#</a></h3><p>\u4F7F\u7528\u6CDB\u578B\u58F0\u660E\u7C7B\u7684\u65F6\u5019\uFF0C\u65E2\u53EF\u4EE5\u4F5C\u7528\u4E8E\u7C7B\u672C\u8EAB\uFF0C\u4E5F\u53EF\u4EE5\u4F5C\u7528\u4E0E\u7C7B\u7684\u6210\u5458\u51FD\u6570</p><p>\u4E0B\u9762\u7B80\u5355\u5B9E\u73B0\u4E00\u4E2A\u5143\u7D20\u540C\u7C7B\u578B\u7684\u6808\u7ED3\u6784\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Stack</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">arr</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">push</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">pop</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> stack </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Stacn</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u4E0A\u8FF0\u53EA\u80FD\u4F20\u9012 <code>string</code> \u548C <code>number</code> \u7C7B\u578B\uFF0C\u8FD9\u65F6\u5019\u5C31\u53EF\u4EE5\u4F7F\u7528 <code>&lt;T extends xx&gt;</code> \u7684\u65B9\u5F0F\u731C\u5B9E\u73B0<strong>\u7EA6\u675F\u6CDB\u578B</strong>\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/67d212a0-0e17-11ec-8e64-91fdec0f05a1.png" alt="img"></p><p>\u9664\u4E86\u4E0A\u8FF0\u7684\u5F62\u5F0F\uFF0C\u6CDB\u578B\u66F4\u9AD8\u7EA7\u7684\u4F7F\u7528\u5982\u4E0B\uFF1A</p><p>\u4F8B\u5982\u8981\u8BBE\u8BA1\u4E00\u4E2A\u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u4E00\u4E2A\u53C2\u6570\u4E3A\u5BF9\u8C61\uFF0C\u53E6\u4E00\u4E2A\u53C2\u6570\u4E3A\u5BF9\u8C61\u4E0A\u7684\u5C5E\u6027\uFF0C\u6211\u4EEC\u901A\u8FC7\u8FD9\u4E24\u4E2A\u53C2\u6570\u8FD4\u56DE\u8FD9\u4E2A\u5C5E\u6027\u7684\u503C</p><p>\u8FD9\u65F6\u5019\u5C31\u8BBE\u8BA1\u5230\u6CDB\u578B\u7684\u7D22\u5F15\u7C7B\u578B\u548C\u7EA6\u675F\u7C7B\u578B\u5171\u540C\u5B9E\u73B0</p><h3 id="\u7D22\u5F15\u7C7B\u578B\u3001\u7EA6\u675F\u7C7B\u578B" tabindex="-1"><a href="https://vue3js.cn/interview/typescript/generic.html#%E7%B4%A2%E5%BC%95%E7%B1%BB%E5%9E%8B%E3%80%81%E7%BA%A6%E6%9D%9F%E7%B1%BB%E5%9E%8B" target="_blank" rel="noreferrer">#</a>\u7D22\u5F15\u7C7B\u578B\u3001\u7EA6\u675F\u7C7B\u578B <a class="header-anchor" href="#\u7D22\u5F15\u7C7B\u578B\u3001\u7EA6\u675F\u7C7B\u578B" aria-hidden="true">#</a></h3><p>\u7D22\u5F15\u7C7B\u578B <code>keyof T</code> \u628A\u4F20\u5165\u7684\u5BF9\u8C61\u7684\u5C5E\u6027\u7C7B\u578B\u53D6\u51FA\u751F\u6210\u4E00\u4E2A\u8054\u5408\u7C7B\u578B\uFF0C\u8FD9\u91CC\u7684\u6CDB\u578B U \u88AB\u7EA6\u675F\u5728\u8FD9\u4E2A\u8054\u5408\u7C7B\u578B\u4E2D\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getValue</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">U</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">U</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">] </span><span style="color:#676E95;">// ok</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u8FF0\u4E3A\u4EC0\u4E48\u9700\u8981\u4F7F\u7528\u6CDB\u578B\u7EA6\u675F\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u5B9A\u4E49\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A <code>object</code>\u7C7B\u578B\uFF0C\u662F\u56E0\u4E3A\u9ED8\u8BA4\u60C5\u51B5 <code>object</code> \u6307\u7684\u662F<code>{}</code>\uFF0C\u800C\u6211\u4EEC\u63A5\u6536\u7684\u5BF9\u8C61\u662F\u5404\u79CD\u5404\u6837\u7684\uFF0C\u4E00\u4E2A\u6CDB\u578B\u6765\u8868\u793A\u4F20\u5165\u7684\u5BF9\u8C61\u7C7B\u578B\uFF0C\u6BD4\u5982 <code>T extends object</code></p><p>\u4F7F\u7528\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/74fcbd40-0e17-11ec-a752-75723a64e8f5.png" alt="img"></p><h3 id="\u591A\u7C7B\u578B\u7EA6\u675F" tabindex="-1"><a href="https://vue3js.cn/interview/typescript/generic.html#%E5%A4%9A%E7%B1%BB%E5%9E%8B%E7%BA%A6%E6%9D%9F" target="_blank" rel="noreferrer">#</a>\u591A\u7C7B\u578B\u7EA6\u675F <a class="header-anchor" href="#\u591A\u7C7B\u578B\u7EA6\u675F" aria-hidden="true">#</a></h3><p>\u4F8B\u5982\u5982\u4E0B\u9700\u8981\u5B9E\u73B0\u4E24\u4E2A\u63A5\u53E3\u7684\u7C7B\u578B\u7EA6\u675F\uFF1A</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FirstInterface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">doSomething</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SecondInterface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">doSomethingElse</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u63A5\u53E3\u7EE7\u627F\u4E0A\u8FF0\u4E24\u4E2A\u63A5\u53E3\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ChildInterface</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FirstInterface</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SecondInterface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6B63\u786E\u4F7F\u7528\u5982\u4E0B\uFF1A</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Demo</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ChildInterface</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">genericProperty</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">genericProperty</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">genericProperty</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">genericProperty</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">useT</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">genericProperty</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">doSomething</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">genericProperty</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">doSomethingElse</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u901A\u8FC7\u6CDB\u578B\u7EA6\u675F\u5C31\u53EF\u4EE5\u8FBE\u5230\u591A\u7C7B\u578B\u7EA6\u675F\u7684\u76EE\u7684</p><h2 id="\u4E09\u3001\u5E94\u7528\u573A\u666F" tabindex="-1"><a href="https://vue3js.cn/interview/typescript/generic.html#%E4%B8%89%E3%80%81%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF" target="_blank" rel="noreferrer">#</a>\u4E09\u3001\u5E94\u7528\u573A\u666F <a class="header-anchor" href="#\u4E09\u3001\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u4E0A\u9762\u521D\u6B65\u7684\u4E86\u89E3\uFF0C\u540E\u8FF0\u5728\u7F16\u5199 <code>typescript</code> \u7684\u65F6\u5019\uFF0C\u5B9A\u4E49\u51FD\u6570\uFF0C\u63A5\u53E3\u6216\u8005\u7C7B\u7684\u65F6\u5019\uFF0C\u4E0D\u9884\u5148\u5B9A\u4E49\u597D\u5177\u4F53\u7684\u7C7B\u578B\uFF0C\u800C\u5728\u4F7F\u7528\u7684\u65F6\u5019\u5728\u6307\u5B9A\u7C7B\u578B\u7684\u4E00\u79CD\u7279\u6027\u7684\u65F6\u5019\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\u5C31\u53EF\u4EE5\u4F7F\u7528\u6CDB\u578B</p><p>\u7075\u6D3B\u7684\u4F7F\u7528\u6CDB\u578B\u5B9A\u4E49\u7C7B\u578B\uFF0C\u662F\u638C\u63E1<code>typescript</code> \u5FC5\u7ECF\u4E4B\u8DEF</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a href="https://vue3js.cn/interview/typescript/generic.html#%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE" target="_blank" rel="noreferrer">#</a>\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2>`,57),o=[e];function t(c,r,y,F,D,C){return a(),n("div",null,o)}const d=s(l,[["render",t]]);export{i as __pageData,d as default};