import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as l,a as n,b as s,e,f as t,r as o}from"./app.57c9ff20.js";const c={},u=n("h1",{id:"vue",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue","aria-hidden":"true"},"#"),s(" vue")],-1),d=n("h2",{id:"vue实现全屏滚动",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue实现全屏滚动","aria-hidden":"true"},"#"),s(" vue实现全屏滚动")],-1),r={href:"http://www.htmleaf.com/plus/search.php",target:"_blank",rel:"noopener noreferrer"},v={href:"https://developer.aliyun.com/article/835013",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>.vue文件</p><p>@mousewheel.prevent 鼠标滚动，实现页面的切换</p><p>@keyup.prevent 点击键盘实现页面滚动，此处为键盘上下键点击实现页面滚动</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fullPage<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fullPage<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fullPageContainer<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fullPageContainer<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@mousewheel.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mouseWheelHandle<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@keyup.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>keyHandle<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@DOMMouseScroll.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mouseWheelHandle<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>100vh<span class="token punctuation">;</span><span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
            	// 这个div写页面里面的内容，页面的内容占满一整个屏幕
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>100vh<span class="token punctuation">;</span><span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>100vh<span class="token punctuation">;</span><span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>100vh<span class="token punctuation">;</span><span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
		........
        //  有几个全屏滚动的页面，就写几个div
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>css</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style lang=&quot;less&quot; scoped&gt;
.fullPage</span><span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>//一定要设置，保证占满
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>//一定要设置，多余的先隐藏
<span class="token punctuation">}</span>
<span class="token selector">.fullPageContainer</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all linear 0.5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>script</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//  没有在mounted里加上键盘点击事件，使用键盘点击切换页面会出bug。即点击完页面时能使用键盘实现页面滚动，当点击了网页外在点击回网页内，键盘上下键切换页面会失效。</span>
	window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;keyup&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>keyHandle<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
   <span class="token function">next</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 往下切换</span>
      <span class="token keyword">const</span> len <span class="token operator">=</span> <span class="token number">4</span> <span class="token comment">// 页面的个数</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>fullpage<span class="token punctuation">.</span>current <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;=</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 如果当前页面编号+1 小于总个数，则可以执行向下滑动</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>fullpage<span class="token punctuation">.</span>current <span class="token operator">+=</span> <span class="token number">1</span> <span class="token comment">// 页面+1</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>fullpage<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token comment">// 执行切换</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">pre</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 往上切换</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>fullpage<span class="token punctuation">.</span>current <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 如果当前页面编号-1 大于0，则可以执行向下滑动</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>fullpage<span class="token punctuation">.</span>current <span class="token operator">-=</span> <span class="token number">1</span><span class="token comment">// 页面+1</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>fullpage<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token comment">// 执行切换</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">move</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>fullpage<span class="token punctuation">.</span>isScrolling <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">// 为了防止滚动多页，需要通过一个变量来控制是否滚动</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">directToMove</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token comment">// 执行滚动</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// 这里的动画是1s执行完，使用setTimeout延迟1s后解锁</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>fullpage<span class="token punctuation">.</span>isScrolling <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">directToMove</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> height <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientHeight
      <span class="token comment">// const height = this.$refs[&#39;fullPage&#39;].clientHeight // 获取屏幕的宽度</span>
      <span class="token keyword">const</span> scrollPage <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">&#39;fullPageContainer&#39;</span><span class="token punctuation">]</span> <span class="token comment">// 获取执行tarnsform的元素</span>
      <span class="token keyword">let</span> scrollHeight <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// 计算滚动的告诉，是往上滚还往下滚</span>
      scrollHeight <span class="token operator">=</span> <span class="token operator">-</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> height <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span>
      scrollPage<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">translateY(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>scrollHeight<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>fullpage<span class="token punctuation">.</span>current <span class="token operator">=</span> index
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mouseWheelHandle</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 监听鼠标监听</span>
      <span class="token comment">// 添加冒泡阻止</span>
      <span class="token keyword">const</span> evt <span class="token operator">=</span> event <span class="token operator">||</span> window<span class="token punctuation">.</span>event
      <span class="token keyword">if</span> <span class="token punctuation">(</span>evt<span class="token punctuation">.</span>stopPropagation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        evt<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        evt<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>fullpage<span class="token punctuation">.</span>isScrolling<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 判断是否可以滚动</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> e <span class="token operator">=</span> event<span class="token punctuation">.</span>originalEvent <span class="token operator">||</span> event
      <span class="token keyword">this</span><span class="token punctuation">.</span>fullpage<span class="token punctuation">.</span>deltaY <span class="token operator">=</span> e<span class="token punctuation">.</span>deltaY <span class="token operator">||</span> e<span class="token punctuation">.</span>detail <span class="token comment">// Firefox使用detail</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>fullpage<span class="token punctuation">.</span>deltaY <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>fullpage<span class="token punctuation">.</span>deltaY <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">pre</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">keyHandle</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> evt <span class="token operator">=</span> event <span class="token operator">||</span> window<span class="token punctuation">.</span>event
      <span class="token keyword">if</span> <span class="token punctuation">(</span>evt<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">40</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 下滑</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>evt<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">38</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">pre</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vite创建vue3项目" tabindex="-1"><a class="header-anchor" href="#vite创建vue3项目" aria-hidden="true">#</a> vite创建vue3项目</h2><p>普通创建vite项目</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm init vite@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>模板创建项目</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm init vite@latest myproject -- --template vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果使用普通创建的方式，依次选择需要的配置项即可，如果模板创建，即可直接下载依赖运行</p><h4 id="配置路由" tabindex="-1"><a class="header-anchor" href="#配置路由" aria-hidden="true">#</a> 配置路由：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install vue-router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>src目录下创建roter文件夹，文件夹下创建 index.js</p><p>src目录下创建views文件夹，用于存放页面。此处创建about.vue和list.vue用于测试</p><p>router/index.js内容如下：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>import {
    createRouter,
    createWebHashHistory
} from &#39;vue-router&#39;

const router = createRouter({
    history: createWebHashHistory(),
    // createWebHashHistory 用来配置内部使用hash模式路由
    routes: [{
            path: &#39;/&#39;,
            redirect: &#39;/about&#39;
        },
        {
            path: &#39;/about&#39;,
            name: &#39;about&#39;,
            component: () =&gt;
                import (&#39;../views/about.vue&#39;)
        },
        {
            path: &#39;/list&#39;,
            name: &#39;list&#39;,
            component: () =&gt;
                import (&#39;../views/list.vue&#39;)
        },
    ]
})

export default router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在main.js引入路由文件并使用</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>import { createApp } from &#39;vue&#39;
import &#39;./style.css&#39;    // 对于原始样式不需要可以注释掉
import App from &#39;./App.vue&#39;
import router from &#39;./router/index&#39;

createApp(App).use(router).mount(&#39;#app&#39;) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>app.vue中只留下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;router-view&gt;&lt;/router-view&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用路由的页面中使用函数式路由跳转</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
		{{$route.query}}   //界面中可以通过 $route.query 来获取参数
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute<span class="token punctuation">,</span>useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> router<span class="token operator">=</span><span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> route<span class="token operator">=</span><span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">go</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
   router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/list&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">query</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;route&quot;</span><span class="token punctuation">,</span>route<span class="token punctuation">.</span>query<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，路由配置完成。</p><h4 id="vite-config-js-配置-路径" tabindex="-1"><a class="header-anchor" href="#vite-config-js-配置-路径" aria-hidden="true">#</a> vite.config.js 配置 @ 路径</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { defineConfig } from &#39;vite&#39;
import vue from &#39;@vitejs/plugin-vue&#39;
import {
    resolve
} from &quot;path&quot;

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        // ↓路径别名，主要是这部分
        alias: {
            &quot;@&quot;: resolve(__dirname, &quot;./src&quot;)
        }
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="下载less依赖" tabindex="-1"><a class="header-anchor" href="#下载less依赖" aria-hidden="true">#</a> 下载less依赖</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
npm i less-loader less style-resources-loader --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="下载配置-element-plus" tabindex="-1"><a class="header-anchor" href="#下载配置-element-plus" aria-hidden="true">#</a> 下载配置 element-plus</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install element-plus --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>main.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import ElementPlus from &#39;element-plus&#39;
import &#39;element-plus/dist/index.css&#39;

createApp(App).use(router).use(ElementPlus).mount(&#39;#app&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue3-中引入wangeditor富文本编辑器" tabindex="-1"><a class="header-anchor" href="#vue3-中引入wangeditor富文本编辑器" aria-hidden="true">#</a> Vue3 中引入wangeditor富文本编辑器</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i wangeditor -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在需要用到的页面引入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//这里名字无所谓, 就是待会new的时候要用这个名字new
import EWangEditor from &quot;wangeditor&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在页面内使用</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">,</span>reactive<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/reactivity&#39;</span>
<span class="token keyword">import</span> EWangEditor <span class="token keyword">from</span> <span class="token string">&quot;wangeditor&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/runtime-core&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> data<span class="token operator">=</span><span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;onMounted&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">)</span>
  <span class="token comment">//这里的&quot;#editor&quot;对应要渲染为编辑器的html元素的id, 就像以前的querySelector()</span>
  <span class="token keyword">let</span> editor<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">EWangEditor</span><span class="token punctuation">(</span><span class="token string">&quot;#editor&quot;</span><span class="token punctuation">)</span>
  editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>uploadImgShowBase64 <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token comment">// 你在wangeditor内写入的字符会被wangeditor自动转为HTML, 我们设定的更新频率, 即它每隔多久将你的文字提取并转换为HTML一次.</span>
  <span class="token comment">/* 配置检测字符变化的最短时间间隔，默认为 200ms */</span>
  editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>onchangeTimeout<span class="token operator">=</span><span class="token number">400</span>
  <span class="token comment">//如果检测到错误的话就打印.</span>
  editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function-variable function">customAlert</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  editor<span class="token punctuation">.</span>customConfig<span class="token operator">=</span>editor<span class="token punctuation">.</span>customConfig <span class="token operator">?</span> editor<span class="token punctuation">.</span>customConfig <span class="token operator">:</span> editor<span class="token punctuation">.</span>config
  <span class="token comment">//设置customConfig属性</span>
  <span class="token comment">//设置customConfig对编辑器内文字的变化的处理方法</span>
  editor<span class="token punctuation">.</span>customConfig<span class="token punctuation">.</span><span class="token function-variable function">onchange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">html</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  <span class="token comment">//参数html即已经转化HTML格式的文本</span>
  data<span class="token punctuation">.</span>editorContent <span class="token operator">=</span> html<span class="token punctuation">;</span>
  <span class="token comment">//在data中提前声明editorContent来存储</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//实时输出更新的html格式</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

   <span class="token comment">//以下为新增</span>
  <span class="token keyword">const</span> menuItem <span class="token operator">=</span> <span class="token punctuation">[</span>  <span class="token comment">//工具栏里有哪些工具</span>
    <span class="token string">&quot;head&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;fontSize&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;fontName&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;italic&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;underline&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;indent&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;lineHeight&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;foreColor&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;backColor&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;justify&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;image&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;video&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>menus <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>menuItem<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">/* 应用设置好的工具栏 */</span>
     
editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;#000000&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#eeece0&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#1c487f&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#4d80bf&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;#fff0f0&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;#20a8ff&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">/* 文字颜色、背景色可以选择哪些颜色? */</span>
      
editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>fontNames <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token comment">/* 字体工具提供哪些字体? */</span> 
  <span class="token string">&quot;黑体&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;仿宋&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;楷体&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;标楷体&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;华文仿宋&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;华文楷体&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;宋体&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;微软雅黑&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

editor<span class="token punctuation">.</span>config<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">;</span>  <span class="token comment">//你可能发现这个编辑器是没法用样式调高度的?</span>
<span class="token comment">//新增至此</span>
  editor<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- id要为new wangeditor对象时候使用的id --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editor<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editor<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editor<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span>100px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue中引入二维码-vue-qr" tabindex="-1"><a class="header-anchor" href="#vue中引入二维码-vue-qr" aria-hidden="true">#</a> vue中引入二维码（ vue-qr ）</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// npm
npm install vue-qr --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//  页面引入组件</span>
<span class="token comment">// vue2.x </span>
<span class="token keyword">import</span> VueQr <span class="token keyword">from</span> <span class="token string">&#39;vue-qr&#39;</span>
<span class="token comment">// vue3.x </span>
<span class="token keyword">import</span> vueQr <span class="token keyword">from</span> <span class="token string">&#39;vue-qr/src/packages/vue-qr.vue&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;vue-qr  
         id=&quot;vueQrs&quot;   
         :text=&quot;textValue&quot;
         :logoSrc=&quot;logoPath&quot;
         :logoScale=&quot;40&quot; 
         :size=&quot;190&quot; 
         :margin=&quot;10&quot;
         @click=&quot;downloadQR&quot;
     /&gt;  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>text</th><th>二维码要展示的内容</th></tr></thead><tbody><tr><td>logoSrc</td><td>二维码中间的小logo</td></tr><tr><td>logoScale</td><td>小logo的大小（别搞太大，超过容错率识别不出来的）</td></tr><tr><td>size</td><td>整个二维码所占空间的大小，（宽高相等，包含margin） 可能需要你自己用css设置一下图片宽高100%</td></tr><tr><td>margin</td><td>二维码的外边距（默认 20px）</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 事件处理函数(下载二维码)
	const downloadQR=()=&gt; {
            const a = document.createElement(&#39;a&#39;)
            // 下载的文件名
            a.download = &#39;二维码&#39;
            // url
            let loadElement=document.getElementById(&quot;vueQrs&quot;)
            a.href = loadElement.src
            // 触发点击
            a.click()
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue3中-setup语法糖使用组件级的路由导航守卫-定义组件name-unplugin-vue-define-options" tabindex="-1"><a class="header-anchor" href="#vue3中-setup语法糖使用组件级的路由导航守卫-定义组件name-unplugin-vue-define-options" aria-hidden="true">#</a> vue3中 setup语法糖使用组件级的路由导航守卫，定义组件name (unplugin-vue-define-options)</h2>`,48),k={href:"https://github.com/sxzz/unplugin-vue-macros/blob/HEAD/packages/define-options/README-zh-CN.md",target:"_blank",rel:"noopener noreferrer"},b=t(`<blockquote><p>在 <code>&lt;script setup &gt;</code> 中可使用 defineOptions 宏，以便在 <code>&lt;script setup &gt;</code> 中使用 Options API。 尤其是能够在一个函数中设置 name、props、emit 和 render 属性。 有了这个宏，你就可以在 <code>&lt;script setup&gt;</code> 使用 Options API；</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> npm i unplugin-vue-define-options -D 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>vite.config.ts</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>import DefineOptions from &#39;unplugin-vue-define-options/vite&#39;

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), DefineOptions()],
    resolve: {
        // ↓路径别名，主要是这部分
        alias: {
            &quot;@&quot;: resolve(__dirname, &quot;./src&quot;)
        }
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在需要的组件页面加入代码：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

<span class="token function">defineOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;***&#39;</span><span class="token punctuation">,</span>     <span class="token comment">// name可用于配置组件 名称</span>
  <span class="token function">beforeRouteEnter</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">vm</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span>to<span class="token punctuation">,</span>from<span class="token punctuation">,</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-搭建组件库-简易" tabindex="-1"><a class="header-anchor" href="#vue-搭建组件库-简易" aria-hidden="true">#</a> vue 搭建组件库（简易）</h2>`,7),g={href:"https://www.bilibili.com/video/BV1Zf4y1u75o?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.cnblogs.com/luoluo-snow/p/11636943.html",target:"_blank",rel:"noopener noreferrer"},q=t(`<p>一开始跟着视频编写代码，但是到了webpack打包，webpack.component.js文件和依赖引入时出现了挺多的报错（尝试了几个解决方法，最终没能解决，在打包完css后直接发布了），在打包发布到了npm网站后引入组件，打开页面控制台报红，果然失败了。</p><p>后来参考文章，用脚手架自带的打包，成功部署到npm网站上了。使用正常。</p><p>vue组件库制作：npm初始化项目+编写组件+webpack打包js+gulp打包css+npm发布</p><h3 id="搭建vue项目和运行环境-示例" tabindex="-1"><a class="header-anchor" href="#搭建vue项目和运行环境-示例" aria-hidden="true">#</a> 搭建vue项目和运行环境（示例）</h3><p>1、首先，创建一个普通的vue2项目</p><p>2、打开项目，将src目录下的components文件夹放到项目根目录下，改名为packages,将src文件名改为examples。此时运行项目会报错。原因是vue寻找文件默认是从src目录下寻找，我们改了src名为examples，所以需要对配置进行修改。</p><p>修改方法：创建vue.config,js文件，代码如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
    pages: {
        index: {
            entry: &#39;examples/main.js&#39;,
            template: &#39;examples/index.html&#39;,
            filename: &#39;index.html&#39;
        }
    }
    
     // 扩展 webpack 配置，使 examples 加入编译
    chainWebpack: config =&gt; {
        config.module
            .rule(&#39;js&#39;)
            .include
            .add(&#39;/examples&#39;)
            .end()
            .use(&#39;babel&#39;)
            .loader(&#39;babel-loader&#39;)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改配置文件后，重启项目，成功运行。</p><p>3、css文件夹下编写css样式，（如用到scss则需要引入依赖，注意版本问题）</p><p>创建vue组件文件 (packages/lib/demo/src/main.vue)</p><p>创建index.js（packages/lib/demo/index.js) ，这个js文件用于编写注册组件的代码，最终引入到main.js</p><p>如创建Demo组件，index.js代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Demo from &#39;../demo/src/main.vue&#39;

Demo.install = function(Vue) {
    Vue.component(Demo.name, Demo)
}

export default Demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终在main.js引入css文件和组件注册的js代码，(此处的demo.scss属于全局引入了，在组件内可以直接使用的)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue from &#39;vue&#39;
import App from &#39;./App.vue&#39;
import &#39;../packages/css/demo.scss&#39;
import Demo from &quot;../packages/lib/demo/index&quot;

Vue.config.productionTip = false
Vue.use(Demo)

new Vue({
    render: h =&gt; h(App),
}).$mount(&#39;#app&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当配置完成后，项目可正常运行。</p><h3 id="组件制作" tabindex="-1"><a class="header-anchor" href="#组件制作" aria-hidden="true">#</a> 组件制作</h3><p>1、组件设计（通用性）</p><p>2、编写html和css样式</p><p>3、编写组件逻辑代码</p><p>4、测试组件</p><p>（card组件示例代码如下）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div class=&quot;f-card&quot;&gt;
     &lt;div class=&quot;f-card-img&quot; :style=&quot;width?{width:width+&#39;px&#39;}:{}&quot;&gt;
        &lt;img :src=&quot;imgSrc&quot; alt=&quot;img&quot; :style=&quot;imgHeight?{height:imgHeight+&#39;px&#39;}:{}&quot;/&gt;
     &lt;/div&gt;
     &lt;div v-if=&quot;summary&quot; class=&quot;f-card-summary&quot;&gt;
        {{summary}}
     &lt;/div&gt;
      &lt;div v-else class=&quot;f-card-summary&quot;&gt;
        &lt;slot&gt;&lt;/slot&gt;
     &lt;/div&gt;
     &lt;!-- &lt;div class=&quot;f-card-footer&quot;&gt;
        footer
     &lt;/div&gt; --&gt;
     &lt;slot name=&quot;footer&quot;&gt;&lt;/slot&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    name:&#39;Card&#39;,
    props:{
        width:{       //卡片宽度
            type:Number,
            default:0
        },
        imgSrc:{       //图片资源地址
            type:String,
            default:&#39;&#39;
        },
        imgHeight:{    //图片高度
            type:Number,
            default:0
        },
        summary:{    //概述
            type:String,
            default:&#39;&#39;
        }
    },
  data() {
    return {

    }
  },
  methods: {

  },
  created() {

  },
}
&lt;/script&gt;
&lt;style scoped&gt;

&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.f-card {
    width: 270px;
    border-radius: 8px;
    background: white;
    overflow: hidden;
    padding-bottom: 8px;
    box-shadow: 10px 5px 5px #efefef;
    &amp;-img {
        height: 152px;
        img {
            width: 100%;
            height: 100%
        }
    }
    &amp;-summary {
        padding: 8px;
        font-size: 14px;
        text-align: left;
    }
    &amp;-footer {}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试的组件代码如下，运行功能正常</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div id=&quot;app&quot;&gt;
    &lt;img alt=&quot;Vue logo&quot; src=&quot;./assets/logo.png&quot;&gt;
    &lt;demo&gt;&lt;/demo&gt;
    &lt;Card 
      imgSrc=&quot;123456.png&quot;
      summary=&quot;这是一个card组件&quot;
      width=&#39;570&#39;
      imgHeight=&quot;130&quot;
    &gt;
     123
      &lt;template v-slot:footer&gt;
        footer
      &lt;/template&gt;
  &lt;/Card&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包" tabindex="-1"><a class="header-anchor" href="#打包" aria-hidden="true">#</a> 打包</h3><p>在写组件的文件夹 同级目录创建index.js文件，用于汇总导出所有组件，便于打包后引用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Demo from &#39;./demo&#39;
import Card from &quot;./card&quot;

const components = {
    Demo,
    Card
}

const install = function(Vue) {
    if (install.installed) return;
    Object.keys(components).forEach(key =&gt; {
        Vue.component(components[key].name, components[key])
    })
}

export default {
    install,
    Card,
    Demo
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>css也是同级创建index.css，引入其他的css文件，便于打包后引用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@import url(&#39;./demo.scss&#39;);
@import url(&#39;./card.scss&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建打包命令行，并执行</p><p>webpack打包js为umd模块</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;scripts&quot;: {        
        &quot;serve&quot;: &quot;vue-cli-service serve&quot;,
        &quot;build&quot;: &quot;vue-cli-service build&quot;,
        &quot;lint&quot;: &quot;vue-cli-service lint&quot;,
        &quot;build:lib&quot;: &quot;vue-cli-service build --target lib --name dfk --dest lib packages/lib/index.js&quot;,
        &quot;build:css&quot;: &quot;npx gulp sass&quot;
    },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>运行  npm run build:lib 打包js代码，注意文件路径报错
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建gulpfile.js文件，用于打包css文件，使用的scss（下载下方需要的4个依赖，注意自己的文件路径）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const gulp = require(&#39;gulp&#39;);
// const sass = require(&#39;gulp-sass&#39;);
const sass = require(&#39;gulp-sass&#39;)(require(&#39;sass&#39;));
const minifyCSS = require(&#39;gulp-minify-css&#39;);

gulp.task(&#39;sass&#39;, async function() {
    return gulp.src(&#39;packages/**/*.scss&#39;)
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest(&#39;lib/css&#39;))
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行 npm run build:css 打包css代码，注意文件路径报错</p><h3 id="发布" tabindex="-1"><a class="header-anchor" href="#发布" aria-hidden="true">#</a> 发布</h3><p>1、准备一个npm账号</p><p>2、npm login 登录npm账号</p><p>3、npm publish (推送代码，注意修改package.json的配置)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &quot;name&quot;: &quot;fankoui3&quot;,
    &quot;version&quot;: &quot;0.1.0&quot;,
    &quot;description&quot;: &quot;npm测试&quot;,            //描述
    &quot;main&quot;: &quot;lib/dfk.umd.js&quot;,           //打包文件入口
    &quot;keywords&quot;: [                       //关键字
        &quot;f-ui&quot;,
        &quot;vue&quot;,
        &quot;ui&quot;
    ],
    &quot;author&quot;: &quot;fanko&quot;,   //作者
    &quot;files&quot;: [          //要打包的文件路径
        &quot;lib&quot;,
        &quot;packages&quot;
    ],
    &quot;scripts&quot;: {        
        &quot;serve&quot;: &quot;vue-cli-service serve&quot;,
        &quot;build&quot;: &quot;vue-cli-service build&quot;,
        &quot;lint&quot;: &quot;vue-cli-service lint&quot;,
        &quot;build:lib&quot;: &quot;vue-cli-service build --target lib --name dfk --dest lib packages/lib/index.js&quot;,
        &quot;build:css&quot;: &quot;npx gulp sass&quot;
    },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发布成功后从npm网站账号内可看到</p><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><p>创建一个vue项目</p><p>下载 fankoui3 依赖</p><p>main.js (引入依赖和css样式并使用)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue from &#39;vue&#39;
import App from &#39;./App.vue&#39;

import &quot;fankoui3/lib/css/css/index.css&quot;
import fankoui3 from &quot;fankoui3&quot;
Vue.config.productionTip = false

Vue.use(fankoui3)
new Vue({
    render: h =&gt; h(App),
}).$mount(&#39;#app&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在vue文件中使用Card组件，如可显示正常，则组件库创建成功。</p>`,51);function f(x,y){const a=o("ExternalLinkIcon");return p(),l("div",null,[u,d,n("p",null,[s("页面全屏滚动很多用于官网首页，使用的频率还挺高的，此处的代码实现的功能是 鼠标滚动，页面切换，点击键盘的上下键，页面切换。类似效果看 "),n("a",r,[s(" 全屏滚动_jQuery之家-自由分享jQuery、html5、css3的插件库 (htmleaf.com)"),e(a)]),s(" ，以下内容改自 "),n("a",v,[s("vue实现全屏滚动，非fullpage.js-阿里云开发者社区 (aliyun.com)"),e(a)]),s(" 。")]),m,n("p",null,[n("a",k,[s("unplugin-vue-macros(github.com) "),e(a)])]),b,n("p",null,[n("a",g,[s("b站参考学习视频地址"),e(a)]),s(),n("a",h,[s("参考文章 vue组件库的基本开发步骤 "),e(a)])]),q])}const _=i(c,[["render",f],["__file","4.html.vue"]]);export{_ as default};
