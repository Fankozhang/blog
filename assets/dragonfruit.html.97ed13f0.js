import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,a as n,b as s,e as t,f as e,r as c}from"./app.2d37abb8.js";const l={},r=e(`<h1 id="uni-app" tabindex="-1"><a class="header-anchor" href="#uni-app" aria-hidden="true">#</a> uni-app</h1><h2 id="uni-app发起网络请求" tabindex="-1"><a class="header-anchor" href="#uni-app发起网络请求" aria-hidden="true">#</a> uni-app发起网络请求</h2><h3 id="原生的uni-request发起请求" tabindex="-1"><a class="header-anchor" href="#原生的uni-request发起请求" aria-hidden="true">#</a> 原生的uni.request发起请求</h3><p>main.js里面设置根地址</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>websiteUrl <span class="token operator">=</span> ’http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">8080</span>‘<span class="token punctuation">;</span> 
<span class="token comment">// 这里的websiteUrl是请求根地址，根据后台地址切换</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span>       <span class="token comment">//请求方法，最好大写</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>websiteUrl <span class="token operator">+</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/portal/apply/resumeEdus/edit</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>   <span class="token comment">//请求接口地址</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>formData<span class="token punctuation">,</span>     <span class="token comment">//  传递的参数</span>
    <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;Authorization&#39;</span><span class="token operator">:</span><span class="token string">&#39;Bearer &#39;</span> <span class="token operator">+</span> uni<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span>
        <span class="token comment">// &#39;Content-Type&#39;: &#39;application/x-www-form-urlencoded&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>        <span class="token comment">// header里面添加请求头信息，最常见的就是携带token</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>       <span class="token comment">// 请求成功</span>
         console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;请求成功&quot;</span><span class="token punctuation">,</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">fail</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>     <span class="token comment">//请求失败</span>
        <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>，
    <span class="token function-variable function">complete</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),u={href:"https://blog.csdn.net/Hi_Eleven/article/details/115858307",target:"_blank",rel:"noopener noreferrer"},d=n("h3",{id:"escook-request-miniprogram",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#escook-request-miniprogram","aria-hidden":"true"},"#"),s(),n("strong",null,"@escook/request-miniprogram")],-1),v={href:"https://www.npmjs.com/package/@escook/request-miniprogram?activeTab=readme",target:"_blank",rel:"noopener noreferrer"},k=e(`<p>因为小程序中无法使用axios，而原生的uni.request功能过于简单，所以下载加强版网络请求包：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i @escook/request-miniprogram -S    下载网络请求包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>main.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> $http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@escook/request-miniprogram&#39;</span>
<span class="token comment">//从网络请求包中引入$http请求对象</span>
uni<span class="token punctuation">.</span>$http <span class="token operator">=</span> $http
<span class="token comment">//因为在其他的页面或组件中也要使用，所以要将$http对象挂载到全局对象下，在uni-app中，uni是全局对象</span>
$http<span class="token punctuation">.</span>baseUrl <span class="token operator">=</span> <span class="token string">&#39;http://127.0.0.1:8080/&#39;</span>
<span class="token comment">//配置网络请求根地址，因为uni.$http为$http的引用，所以可以直接修改$http对象下的属性</span>
$http<span class="token punctuation">.</span><span class="token function-variable function">beforeRequest</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//配置发起网络请求前的拦截功能（请求拦截器）</span>
    
    uni<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;数据加载中...&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    <span class="token keyword">const</span> token<span class="token operator">=</span>uni<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    options<span class="token punctuation">.</span>header<span class="token punctuation">[</span><span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Bearer &#39;</span> <span class="token operator">+</span> token <span class="token comment">// 让每个请求携带自定义token 请根          据实际情况自行修改</span>
	  <span class="token punctuation">}</span>
	  
	  
<span class="token punctuation">}</span>
$http<span class="token punctuation">.</span><span class="token function-variable function">afterRequest</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//配置网络请求完毕后的拦截功能（响应拦截器）</span>
    uni<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token keyword">if</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>data<span class="token punctuation">.</span>code<span class="token operator">==</span><span class="token number">401</span><span class="token punctuation">)</span><span class="token punctuation">{</span>     <span class="token comment">//  没有得到正确的响应状态码，做出提示，并清除storage的token和         用户信息</span>
		uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">title</span><span class="token operator">:</span> options<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">,</span>
		<span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
		<span class="token literal-property property">icon</span><span class="token operator">:</span><span class="token string">&#39;none&#39;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		uni<span class="token punctuation">.</span><span class="token function">removeStorageSync</span><span class="token punctuation">(</span><span class="token string">&quot;userWxsign&quot;</span><span class="token punctuation">)</span>
		uni<span class="token punctuation">.</span><span class="token function">removeStorageSync</span><span class="token punctuation">(</span><span class="token string">&quot;userInfo&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async getUserBaseInfo() {
    const {data: res} = await uni.$http.get(\`userInfo/userInfo\`,{name:&#39;123&#39;,age:&#39;123&#39;});
    //   
    console.log(&quot;baseInfo&quot;,res)

},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uniapp内打开一个url" tabindex="-1"><a class="header-anchor" href="#uniapp内打开一个url" aria-hidden="true">#</a> uniapp内打开一个url</h2><p>在pc浏览器我一般是通过window,open()打开一个url地址的，在小程序，是会报错的，所以就得另找一个解决方法。以下是实现方法。</p><p>建一个outUrl.vue的文件，文件内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
	&lt;view&gt;
		&lt;web-view :src=&quot;url&quot;&gt;&lt;/web-view&gt;
	&lt;/view&gt;
&lt;/template&gt;

&lt;script&gt;
	export default {
		data() {
			return {
				url:&#39;&#39;
			}
		},
		onLoad(option){
			this.url=option.url
		},
		methods: {
			
		}
	}
&lt;/script&gt;

&lt;style&gt;

&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在打开页面的地方触发点击事件，跳转到outUrl的页面，并传入url</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>go(url){
    uni.navigateTo({
        url:&#39;./outPage?url=&#39;+url
    })
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function m(b,g){const a=c("ExternalLinkIcon");return o(),i("div",null,[r,n("p",null,[n("a",u,[s("( 对于封装微信小程序uni.request请求，支持自动携带token,可查看这篇文章"),t(a)])]),d,n("p",null,[n("a",v,[s("@escook/request-miniprogram - npm (npmjs.com)"),t(a)])]),k])}const y=p(l,[["render",m],["__file","dragonfruit.html.vue"]]);export{y as default};
