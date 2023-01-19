import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as a,f as d}from"./app.b92bfb37.js";const n={},i=d(`<h1 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> html</h1><h2 id="自定义属性-data" tabindex="-1"><a class="header-anchor" href="#自定义属性-data" aria-hidden="true">#</a> 自定义属性 data-*</h2><p>html标签自定义属性 data-* 可以用来保存 一些与不同DOM元素相关联的信息 。 自定义属性可以设置多个</p><p>如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;li id=&quot;id&quot;  data-num=&quot;1&quot;  data-names=&quot;zhangsan&quot;  data-age=&quot;999&quot;&gt;
  Hello world
&lt;/li&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 js 获取自定义属性</p><p>1 使用 getAttribute 和 setAttribute</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var restaurant = document.getElementById(&quot;id&quot;);
var strings = restaurant.getAttribute(&quot;data-num&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var restaurant = document.getElementById(&quot;id&quot;);
restaurant.setAttribute(&quot;data-num&quot;, &quot;dataNum&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2 使用dataset属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var restaurant = document.getElementById(&quot;id&quot;);

var stringss = restaurant.dataset.num;   // 通过dataset获取自定义属性
restaurant.dataset.num = newNum;         //  设置自定义属性的值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),s=[i];function r(u,l){return t(),a("div",null,s)}const m=e(n,[["render",r],["__file","1.html.vue"]]);export{m as default};
