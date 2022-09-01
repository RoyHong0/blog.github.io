import{_ as s,c as n,o as a,a as l}from"./app.ade653e8.js";const C=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u5355\u4F8B\u6A21\u5F0F\u7684\u7406\u89E3\uFF1F\u5982\u4F55\u5B9E\u73B0\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"[#](https://vue3js.cn/interview/design/Singleton Pattern.html#\u4E00\u3001\u662F\u4EC0\u4E48)\u4E00\u3001\u662F\u4EC0\u4E48","slug":"https-vue3js-cn-interview-design-singleton-pattern-html-\u4E00\u3001\u662F\u4EC0\u4E48-\u4E00\u3001\u662F\u4EC0\u4E48","link":"#https-vue3js-cn-interview-design-singleton-pattern-html-\u4E00\u3001\u662F\u4EC0\u4E48-\u4E00\u3001\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"[#](https://vue3js.cn/interview/design/Singleton Pattern.html#\u4E8C\u3001\u5B9E\u73B0)\u4E8C\u3001\u5B9E\u73B0","slug":"https-vue3js-cn-interview-design-singleton-pattern-html-\u4E8C\u3001\u5B9E\u73B0-\u4E8C\u3001\u5B9E\u73B0","link":"#https-vue3js-cn-interview-design-singleton-pattern-html-\u4E8C\u3001\u5B9E\u73B0-\u4E8C\u3001\u5B9E\u73B0","children":[]},{"level":2,"title":"[#](https://vue3js.cn/interview/design/Singleton Pattern.html#\u4E09\u3001\u4F7F\u7528\u573A\u666F)\u4E09\u3001\u4F7F\u7528\u573A\u666F","slug":"https-vue3js-cn-interview-design-singleton-pattern-html-\u4E09\u3001\u4F7F\u7528\u573A\u666F-\u4E09\u3001\u4F7F\u7528\u573A\u666F","link":"#https-vue3js-cn-interview-design-singleton-pattern-html-\u4E09\u3001\u4F7F\u7528\u573A\u666F-\u4E09\u3001\u4F7F\u7528\u573A\u666F","children":[]}],"relativePath":"Interview/DesignPatterns/2.md"}'),p={name:"Interview/DesignPatterns/2.md"},o=l(`<h1 id="\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u5355\u4F8B\u6A21\u5F0F\u7684\u7406\u89E3\uFF1F\u5982\u4F55\u5B9E\u73B0\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u5355\u4F8B\u6A21\u5F0F\u7684\u7406\u89E3\uFF1F\u5982\u4F55\u5B9E\u73B0\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u5355\u4F8B\u6A21\u5F0F\u7684\u7406\u89E3\uFF1F\u5982\u4F55\u5B9E\u73B0\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/7df7d830-3b2b-11ec-8e64-91fdec0f05a1.png" alt="img"></p><h2 id="https-vue3js-cn-interview-design-singleton-pattern-html-\u4E00\u3001\u662F\u4EC0\u4E48-\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1">[#](<a href="https://vue3js.cn/interview/design/Singleton" target="_blank" rel="noreferrer">https://vue3js.cn/interview/design/Singleton</a> Pattern.html#\u4E00\u3001\u662F\u4EC0\u4E48)\u4E00\u3001\u662F\u4EC0\u4E48 <a class="header-anchor" href="#https-vue3js-cn-interview-design-singleton-pattern-html-\u4E00\u3001\u662F\u4EC0\u4E48-\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>\u5355\u4F8B\u6A21\u5F0F\uFF08Singleton Pattern\uFF09\uFF1A\u521B\u5EFA\u578B\u6A21\u5F0F\uFF0C\u63D0\u4F9B\u4E86\u4E00\u79CD\u521B\u5EFA\u5BF9\u8C61\u7684\u6700\u4F73\u65B9\u5F0F\uFF0C\u8FD9\u79CD\u6A21\u5F0F\u6D89\u53CA\u5230\u4E00\u4E2A\u5355\u4E00\u7684\u7C7B\uFF0C\u8BE5\u7C7B\u8D1F\u8D23\u521B\u5EFA\u81EA\u5DF1\u7684\u5BF9\u8C61\uFF0C\u540C\u65F6\u786E\u4FDD\u53EA\u6709\u5355\u4E2A\u5BF9\u8C61\u88AB\u521B\u5EFA</p><p>\u5728\u5E94\u7528\u7A0B\u5E8F\u8FD0\u884C\u671F\u95F4\uFF0C\u5355\u4F8B\u6A21\u5F0F\u53EA\u4F1A\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E0B\u521B\u5EFA\u4E00\u6B21\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u8BA9\u6240\u6709\u9700\u8981\u8C03\u7528\u7684\u5730\u65B9\u90FD\u5171\u4EAB\u8FD9\u4E00\u5355\u4F8B\u5BF9\u8C61\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/fa7898d0-3b2c-11ec-8e64-91fdec0f05a1.png" alt="img"></p><p>\u4ECE\u5B9A\u4E49\u4E0A\u6765\u770B\uFF0C\u5168\u5C40\u53D8\u91CF\u597D\u50CF\u5C31\u662F\u5355\u4F8B\u6A21\u5F0F\uFF0C\u4F46\u662F\u4E00\u822C\u60C5\u51B5\u6211\u4EEC\u4E0D\u8BA4\u4E3A\u5168\u5C40\u53D8\u91CF\u662F\u4E00\u4E2A\u5355\u4F8B\u6A21\u5F0F\uFF0C\u539F\u56E0\u662F\uFF1A</p><ul><li>\u5168\u5C40\u547D\u540D\u6C61\u67D3</li><li>\u4E0D\u6613\u7EF4\u62A4\uFF0C\u5BB9\u6613\u88AB\u91CD\u5199\u8986\u76D6</li></ul><h2 id="https-vue3js-cn-interview-design-singleton-pattern-html-\u4E8C\u3001\u5B9E\u73B0-\u4E8C\u3001\u5B9E\u73B0" tabindex="-1">[#](<a href="https://vue3js.cn/interview/design/Singleton" target="_blank" rel="noreferrer">https://vue3js.cn/interview/design/Singleton</a> Pattern.html#\u4E8C\u3001\u5B9E\u73B0)\u4E8C\u3001\u5B9E\u73B0 <a class="header-anchor" href="#https-vue3js-cn-interview-design-singleton-pattern-html-\u4E8C\u3001\u5B9E\u73B0-\u4E8C\u3001\u5B9E\u73B0" aria-hidden="true">#</a></h2><p>\u5728<code>javascript</code>\u4E2D\uFF0C\u5B9E\u73B0\u4E00\u4E2A\u5355\u4F8B\u6A21\u5F0F\u53EF\u4EE5\u7528\u4E00\u4E2A\u53D8\u91CF\u6765\u6807\u5FD7\u5F53\u524D\u7684\u7C7B\u5DF2\u7ECF\u521B\u5EFA\u8FC7\u5BF9\u8C61\uFF0C\u5982\u679C\u4E0B\u6B21\u83B7\u53D6\u5F53\u524D\u7C7B\u7684\u5B9E\u4F8B\u65F6\uFF0C\u76F4\u63A5\u8FD4\u56DE\u4E4B\u524D\u521B\u5EFA\u7684\u5BF9\u8C61\u5373\u53EF\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// \u5B9A\u4E49\u4E00\u4E2A\u7C7B</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Singleton</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">instance</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">// \u539F\u578B\u6269\u5C55\u7C7B\u7684\u4E00\u4E2A\u65B9\u6CD5getName()</span></span>
<span class="line"><span style="color:#FFCB6B;">Singleton</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getName</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#676E95;">// \u83B7\u53D6\u7C7B\u7684\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">Singleton</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getInstance</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">!this.</span><span style="color:#A6ACCD;">instance</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">instance</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Singleton</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">instance</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u83B7\u53D6\u5BF9\u8C611</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Singleton</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getInstance</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u83B7\u53D6\u5BF9\u8C612</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Singleton</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getInstance</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u8FDB\u884C\u6BD4\u8F83</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> b)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u4F7F\u7528\u95ED\u5305\u4E5F\u80FD\u591F\u5B9E\u73B0\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Singleton</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">// \u539F\u578B\u6269\u5C55\u7C7B\u7684\u4E00\u4E2A\u65B9\u6CD5getName()</span></span>
<span class="line"><span style="color:#FFCB6B;">Singleton</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getName</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#676E95;">// \u83B7\u53D6\u7C7B\u7684\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">Singleton</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">getInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">instance</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">!this.</span><span style="color:#A6ACCD;">instance</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">instance</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Singleton</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">instance</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">        </span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u83B7\u53D6\u5BF9\u8C611</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Singleton</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getInstance</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u83B7\u53D6\u5BF9\u8C612</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Singleton</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getInstance</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u8FDB\u884C\u6BD4\u8F83</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> b)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u4E5F\u53EF\u4EE5\u5C06\u4E0A\u8FF0\u7684\u65B9\u6CD5\u7A0D\u4F5C\u4FEE\u6539\uFF0C\u53D8\u6210\u6784\u9020\u51FD\u6570\u7684\u5F62\u5F0F\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// \u5355\u4F8B\u6784\u9020\u51FD\u6570</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CreateSingleton</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">getName</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u83B7\u53D6\u5B9E\u4F8B\u7684\u540D\u5B57</span></span>
<span class="line"><span style="color:#FFCB6B;">CreateSingleton</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getName</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#676E95;">// \u5355\u4F8B\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Singleton </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">instance</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">instance</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">CreateSingleton</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u521B\u5EFA\u5B9E\u4F8B\u5BF9\u8C611</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Singleton</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u521B\u5EFA\u5B9E\u4F8B\u5BF9\u8C612</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Singleton</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;">b)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span></code></pre></div><h2 id="https-vue3js-cn-interview-design-singleton-pattern-html-\u4E09\u3001\u4F7F\u7528\u573A\u666F-\u4E09\u3001\u4F7F\u7528\u573A\u666F" tabindex="-1">[#](<a href="https://vue3js.cn/interview/design/Singleton" target="_blank" rel="noreferrer">https://vue3js.cn/interview/design/Singleton</a> Pattern.html#\u4E09\u3001\u4F7F\u7528\u573A\u666F)\u4E09\u3001\u4F7F\u7528\u573A\u666F <a class="header-anchor" href="#https-vue3js-cn-interview-design-singleton-pattern-html-\u4E09\u3001\u4F7F\u7528\u573A\u666F-\u4E09\u3001\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a></h2><p>\u5728\u524D\u7AEF\u4E2D\uFF0C\u5F88\u591A\u60C5\u51B5\u90FD\u662F\u7528\u5230\u5355\u4F8B\u6A21\u5F0F\uFF0C\u4F8B\u5982\u9875\u9762\u5B58\u5728\u4E00\u4E2A\u6A21\u6001\u6846\u7684\u65F6\u5019\uFF0C\u53EA\u6709\u7528\u6237\u70B9\u51FB\u7684\u65F6\u5019\u624D\u4F1A\u521B\u5EFA\uFF0C\u800C\u4E0D\u662F\u52A0\u8F7D\u5B8C\u6210\u4E4B\u540E\u518D\u521B\u5EFA\u5F39\u7A97\u548C\u9690\u85CF\uFF0C\u5E76\u4E14\u4FDD\u8BC1\u5F39\u7A97\u5168\u5C40\u53EA\u6709\u4E00\u4E2A</p><p>\u53EF\u4EE5\u5148\u521B\u5EFA\u4E00\u4E2A\u901A\u5E38\u7684\u83B7\u53D6\u5BF9\u8C61\u7684\u65B9\u6CD5\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> getSingle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> ( </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fn</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arguments</span><span style="color:#F07178;"> ) )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><p>\u521B\u5EFA\u5F39\u7A97\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> createLoginLayer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">div</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#F07178;">( </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6211\u662F\u6D6E\u7A97</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">display</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">none</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#F07178;">( </span><span style="color:#A6ACCD;">div</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> createSingleLoginLayer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getSingle</span><span style="color:#A6ACCD;">( createLoginLayer )</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">( </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">loginBtn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> )</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onclick</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">loginLayer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">createSingleLoginLayer</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">loginLayer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">display</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">block</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u8FF0\u8FD9\u79CD\u5B9E\u73B0\u79F0\u4E3A\u60F0\u6027\u5355\u4F8B\uFF0C\u610F\u56FE\u89E3\u51B3\u9700\u8981\u65F6\u624D\u521B\u5EFA\u7C7B\u5B9E\u4F8B\u5BF9\u8C61</p><p>\u5E76\u4E14<code>Vuex</code>\u3001<code>redux</code>\u5168\u5C40\u6001\u7BA1\u7406\u5E93\u4E5F\u5E94\u7528\u5355\u4F8B\u6A21\u5F0F\u7684\u601D\u60F3\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://static.vue-js.com/8be50f80-3b2b-11ec-a752-75723a64e8f5.png" alt="img"></p><p>\u73B0\u5728\u5F88\u591A\u7B2C\u4E09\u65B9\u5E93\u90FD\u662F\u5355\u4F8B\u6A21\u5F0F\uFF0C\u591A\u6B21\u5F15\u7528\u53EA\u4F1A\u4F7F\u7528\u540C\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5982<code>jquery</code>\u3001<code>lodash</code>\u3001<code>moment</code>...</p>`,25),e=[o];function t(c,r,F,y,D,A){return a(),n("div",null,e)}const g=s(p,[["render",t]]);export{C as __pageData,g as default};