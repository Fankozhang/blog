import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as l,d as c,a as n,b as s,e as t,f as e,r as i}from"./app.384afca4.js";const u="/blog/packageUni.png",r="/blog/PackageAuniWechat.png",d={},k=n("hr",null,null,-1),v=n("p",null,"date: 2022-01-10 category:",-1),m=n("ul",null,[n("li",null,"uni-app tag:"),n("li",null,"uni typora-root-url: ...vuepress\\public")],-1),b=n("hr",null,null,-1),g=n("h1",{id:"uni-app",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#uni-app","aria-hidden":"true"},"#"),s(" uni-app")],-1),y=n("h2",{id:"网址",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#网址","aria-hidden":"true"},"#"),s(" 网址")],-1),h={href:"https://uniapp.dcloud.net.cn/quickstart.html#",target:"_blank",rel:"noopener noreferrer"},q={href:"https://ext.dcloud.net.cn/",target:"_blank",rel:"noopener noreferrer"},x=e(`<h2 id="引入uview2-0" tabindex="-1"><a class="header-anchor" href="#引入uview2-0" aria-hidden="true">#</a> 引入uview2.0</h2><p>创建uni-ui项目，基于uni-app的ui组件库(不是默认模板)</p><p>插件市场下载u-view插件并导入</p><ol><li>引入uView主JS库</li></ol><blockquote><p>在项目根目录中的main.js中，引入并使用uView的JS库，注意这两行要放在import Vue之后。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>javascript复制代码<span class="token comment">// main.js</span>
<span class="token keyword">import</span> uView <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/uview-ui&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>uView<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目根目录的uni.scss中引入此文件。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code>scss复制代码<span class="token comment">/* uni.scss */</span>
<span class="token keyword">@import</span> <span class="token string">&#39;@/uni_modules/uview-ui/theme.scss&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 在App.vue中首行的位置引入，注意给style标签加入lang=&quot;scss&quot;属性</span>

&lt;style lang=<span class="token string">&quot;scss&quot;</span>&gt;
	<span class="token comment">/* 注意要写在第一行，同时给style标签加入lang=&quot;scss&quot;属性 */</span>
	<span class="token keyword">@import</span> <span class="token string">&quot;@/uni_modules/uview-ui/index.scss&quot;</span><span class="token punctuation">;</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uni-app发起网络请求" tabindex="-1"><a class="header-anchor" href="#uni-app发起网络请求" aria-hidden="true">#</a> uni-app发起网络请求</h2><h3 id="原生的uni-request发起请求" tabindex="-1"><a class="header-anchor" href="#原生的uni-request发起请求" aria-hidden="true">#</a> 原生的uni.request发起请求</h3><p>main.js里面设置根地址</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>websiteUrl <span class="token operator">=</span> <span class="token string">&#39;http://127.0.0.1:8080&#39;</span><span class="token punctuation">;</span> 
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
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">complete</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),f={href:"https://blog.csdn.net/Hi_Eleven/article/details/115858307",target:"_blank",rel:"noopener noreferrer"},w=n("h3",{id:"escook-request-miniprogram",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#escook-request-miniprogram","aria-hidden":"true"},"#"),s(),n("strong",null,"@escook/request-miniprogram")],-1),_={href:"https://www.npmjs.com/package/@escook/request-miniprogram?activeTab=readme",target:"_blank",rel:"noopener noreferrer"},j=e(`<p>因为小程序中无法使用axios，而原生的uni.request功能过于简单，所以下载加强版网络请求包：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i @escook/request-miniprogram -S    下载网络请求包
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在打开页面的地方触发点击事件，跳转到outUrl的页面，并传入url。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>go(url){
    uni.navigateTo({
        url:&#39;./outPage?url=&#39;+url
    })
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如此，便可以实现在新页面打开url地址了。</p><h2 id="uniapp的分包操作" tabindex="-1"><a class="header-anchor" href="#uniapp的分包操作" aria-hidden="true">#</a> uniapp的分包操作</h2><p>我的uniapp小程序在微信开发者工具打开后，在点击真机调试的时候会出现问题。这个问题在打包发布时也会出现，具体原因是项目整体包的体积太大，会影响小程序的运行速度。因此小程序对此做了限制。 即小程序的单独一个包的大小不能超过2M,一旦超过就需要分包处理。</p><p>在我看来分包就是对资源进行划分，实现按需加载。</p><p>分包时一般就是分为了一个主包和若干个子包。由于我的小程序项目不是很大，所以就分出了一个子包出来，以下展示我是如何操作的。</p><p>项目中，所有的页面都是放在pages文件夹下的，静态资源放在static文件夹下。</p><p>在pages目录的同级下创建一个packageA文件夹（需要分几个包，就创建几个文件夹），在pages文件夹中只留下tabBar的相关页面。其余的页面文件划分到类似于packageA的文件夹下。并将packageA文件夹内的页面所依赖的静态文件也搬到对应的分包文件夹下。（注意：分包的时候一定要把和这个包里的页面相关的静态资源换到这个包下，并修改页面跳转时的路径）</p><p><img src="`+u+`" alt="packageUni" loading="lazy"></p><p>pages.json文件夹下增加如下配置：</p><p>&quot;subpackages&quot;的内容就是对分包进行的配置。</p><p>root代表分包根目录</p><p>pages代表分包的页面文件路径（注意，有几个页面，就有几个路径）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;subpackages&quot;: [
	    {
	      &quot;root&quot;: &quot;packageA&quot;,
	      &quot;pages&quot;: [
	      	{
				&quot;path&quot;:&quot;pages/notice/notice&quot;
			}，
			{
				&quot;path&quot;:&quot;pages/notice/notice&quot;
			}，
			{
				&quot;path&quot;:&quot;pages/notice/notice&quot;
			}
	      ]
	     }
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分完包之后要设置，进入那个页面时，加载对应的包内容，配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;preloadRule&quot;: {
			&quot;pages/index/index&quot;: { // 当进入这个包页面的时候
			&quot;network&quot;: &quot;all&quot;,  // 什么网络下支持允许预加载，默认wifi: wifi/all
				&quot;packages&quot;: [
				&quot;packageA&quot;  // 下载包
			]
			}
		},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上就是对uniapp小程序的分包操作，那么如何查看自己分包是否成功了呢，在微信开发者工具打开，点击详情，在基本信息页面可以看到本地代码，点开后就能查看自己的主包和分包信息了，如果包的大小还是大于2M的话，就需要继续优化了。</p><p><img src="`+r+'" alt="PackageAuniWechat" loading="lazy"></p><h2 id="pages-json" tabindex="-1"><a class="header-anchor" href="#pages-json" aria-hidden="true">#</a> pages.json</h2>',30),C={href:"https://uniapp.dcloud.net.cn/collocation/pages.html#",target:"_blank",rel:"noopener noreferrer"},S=e(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">//  pages设置页面路径及窗口表现</span>
	<span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
		<span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/component/index&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;组件&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/API/index&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;接口&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/component/view/index&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;view&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//  condition 不一定要配置</span>
	<span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//模式配置，仅开发期间生效</span>
		<span class="token property">&quot;current&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">//当前激活的模式（list 的索引项）</span>
		<span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
			<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> <span class="token comment">//模式名称</span>
			<span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/component/view/index&quot;</span> <span class="token comment">//启动页面，必选</span>
		<span class="token punctuation">}</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//  globalStyle设置默认页面的窗口表现，一般设置前四个就可以了</span>
	<span class="token property">&quot;globalStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;navigationBarTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;演示&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;navigationBarBackgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#F8F8F8&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#F8F8F8&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
			<span class="token property">&quot;collapse-tree-item&quot;</span><span class="token operator">:</span><span class="token string">&quot;/components/collapse-tree-item&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;renderingMode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;seperated&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 仅微信小程序，webrtc 无法正常时尝试强制关闭同层渲染</span>
		<span class="token property">&quot;pageOrientation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;portrait&quot;</span><span class="token punctuation">,</span> <span class="token comment">//横屏配置，全局屏幕旋转设置(仅 APP/微信/QQ小程序)，支持 auto / portrait / landscape</span>
		<span class="token property">&quot;rpxCalcMaxDeviceWidth&quot;</span><span class="token operator">:</span> <span class="token number">960</span><span class="token punctuation">,</span>
		<span class="token property">&quot;rpxCalcBaseDeviceWidth&quot;</span><span class="token operator">:</span> <span class="token number">375</span><span class="token punctuation">,</span>
		<span class="token property">&quot;rpxCalcIncludeWidth&quot;</span><span class="token operator">:</span> <span class="token number">750</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//   tarBar设置底部 tab 的表现	</span>
	<span class="token property">&quot;tabBar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#7A7E83&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;selectedColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#3cc51f&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;borderStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50px&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;fontSize&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10px&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;iconWidth&quot;</span><span class="token operator">:</span> <span class="token string">&quot;24px&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;spacing&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3px&quot;</span><span class="token punctuation">,</span>
    	<span class="token property">&quot;iconfontSrc&quot;</span><span class="token operator">:</span><span class="token string">&quot;static/iconfont.ttf&quot;</span><span class="token punctuation">,</span> <span class="token comment">// app tabbar 字体.ttf文件路径 app 3.4.4+</span>
		<span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
			<span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/component/index&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/image/icon_component.png&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;selectedIconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/image/icon_component_HL.png&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;组件&quot;</span><span class="token punctuation">,</span>
      		<span class="token property">&quot;iconfont&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 优先级高于 iconPath，该属性依赖 tabbar 根节点的 iconfontSrc</span>
       			<span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\ue102&quot;</span><span class="token punctuation">,</span>
        		<span class="token property">&quot;selectedText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\ue103&quot;</span><span class="token punctuation">,</span>
        		<span class="token property">&quot;fontSize&quot;</span><span class="token operator">:</span> <span class="token string">&quot;17px&quot;</span><span class="token punctuation">,</span>
        		<span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#000000&quot;</span><span class="token punctuation">,</span>
        		<span class="token property">&quot;selectedColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#0000ff&quot;</span>
      		<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/API/index&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/image/icon_API.png&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;selectedIconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/image/icon_API_HL.png&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;接口&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;midButton&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token string">&quot;80px&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50px&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;文字&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/image/midButton_iconPath.png&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;iconWidth&quot;</span><span class="token operator">:</span> <span class="token string">&quot;24px&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;backgroundImage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/image/midButton_backgroundImage.png&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//   此处往下的配置一般不需要设置</span>
  <span class="token property">&quot;easycom&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;autoscan&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否自动扫描组件</span>
    <span class="token property">&quot;custom&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//自定义扫描规则</span>
      <span class="token property">&quot;^uni-(.*)&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@/components/uni-$1.vue&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// topWindow,leftWindow,rightWindow只在 h5 生效</span>
  <span class="token property">&quot;topWindow&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;responsive/top-window.vue&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token string">&quot;44px&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;leftWindow&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;responsive/left-window.vue&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token string">&quot;300px&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rightWindow&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;responsive/right-window.vue&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token string">&quot;300px&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;matchMedia&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;minWidth&quot;</span><span class="token operator">:</span> <span class="token number">768</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uniapp使用echarts图" tabindex="-1"><a class="header-anchor" href="#uniapp使用echarts图" aria-hidden="true">#</a> uniapp使用echarts图</h2>`,2),B={href:"https://ext.dcloud.net.cn/plugin?id=8017",target:"_blank",rel:"noopener noreferrer"},P=e(`<p>注意：使用HBuilderX导入插件echarts， 使用页面需要将 组件 引入进来使用， 要为引入的 echarts 设置宽高，否则可能不显示。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shadow container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>echarts</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>echarts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:option</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option<span class="token punctuation">&quot;</span></span> <span class="token attr-name">canvasId</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>echarts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>echarts</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> echarts <span class="token keyword">from</span> <span class="token string">&#39;../echarts-uniapp/echarts-uniapp.vue&#39;</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
		<span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
			echarts
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">{</span>
				<span class="token literal-property property">option</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
			<span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>option <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.hx-img</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
        <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.container-wrap</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是一个简单的关系图示例：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shadow container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>echarts</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>echarts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:option</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option<span class="token punctuation">&quot;</span></span> <span class="token attr-name">canvasId</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>echarts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>echarts</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> echarts <span class="token keyword">from</span> <span class="token string">&#39;../echarts-uniapp/echarts-uniapp.vue&#39;</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
		<span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
			echarts
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">{</span>
				<span class="token literal-property property">option</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">datas</span><span class="token operator">:</span><span class="token punctuation">[</span>
					<span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">draggable</span><span class="token operator">:</span> <span class="token string">&#39;true&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">draggable</span><span class="token operator">:</span> <span class="token string">&#39;true&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;王五&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">draggable</span><span class="token operator">:</span> <span class="token string">&#39;true&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;赵六&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">draggable</span><span class="token operator">:</span> <span class="token string">&#39;true&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;魏七&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">draggable</span><span class="token operator">:</span> <span class="token string">&#39;true&#39;</span> <span class="token punctuation">}</span>
				<span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token literal-property property">lines</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token punctuation">{</span> <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">{</span> <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">{</span> <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>  <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">{</span> <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>  <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">{</span> <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>  <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
			<span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>option <span class="token operator">=</span> <span class="token punctuation">{</span>
				        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
				        <span class="token punctuation">}</span><span class="token punctuation">,</span>
				        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">,</span>
				        <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
				        <span class="token literal-property property">animationDurationUpdate</span><span class="token operator">:</span> <span class="token number">1500</span><span class="token punctuation">,</span>
				        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				          <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
				            <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				              <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span>
				            <span class="token punctuation">}</span>
				          <span class="token punctuation">}</span>
				        <span class="token punctuation">}</span><span class="token punctuation">,</span>
				        <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				          <span class="token punctuation">{</span>
				            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;graph&#39;</span><span class="token punctuation">,</span>
				            <span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token string">&#39;force&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 采用力引导布局</span>
				            <span class="token literal-property property">symbolSize</span><span class="token operator">:</span> <span class="token number">45</span><span class="token punctuation">,</span>
				            <span class="token literal-property property">legendHoverLink</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 启用图例 hover 时的联动高亮。</span>
				            <span class="token literal-property property">focusNodeAdjacency</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。</span>
				            <span class="token literal-property property">roam</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
				            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				              <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
				                <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;inside&#39;</span><span class="token punctuation">,</span>
				                <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				                  <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span>
				                <span class="token punctuation">}</span>
				              <span class="token punctuation">}</span>
				            <span class="token punctuation">}</span><span class="token punctuation">,</span>
				            <span class="token literal-property property">force</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				              <span class="token literal-property property">repulsion</span><span class="token operator">:</span> <span class="token number">1000</span>
				            <span class="token punctuation">}</span><span class="token punctuation">,</span>
				            <span class="token literal-property property">edgeSymbolSize</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				            <span class="token literal-property property">edgeLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				              <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
				                <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				                  <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">10</span>
				                <span class="token punctuation">}</span><span class="token punctuation">,</span>
				                <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">&#39;{c}&#39;</span>
				              <span class="token punctuation">}</span>
				            <span class="token punctuation">}</span><span class="token punctuation">,</span>
				            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>datas<span class="token punctuation">,</span>
				            <span class="token literal-property property">links</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lines<span class="token punctuation">,</span>
				            <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				              <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				                <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.9</span><span class="token punctuation">,</span>
				                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
				                <span class="token literal-property property">curveness</span><span class="token operator">:</span> <span class="token number">0</span>
				              <span class="token punctuation">}</span>
				            <span class="token punctuation">}</span>
				          <span class="token punctuation">}</span>
				        <span class="token punctuation">]</span>
				      <span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.hx-img</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
        <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.container-wrap</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="微信登录" tabindex="-1"><a class="header-anchor" href="#微信登录" aria-hidden="true">#</a> 微信登录</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button
	class=&quot;wx-login-button&quot;
	open-type=&quot;getPhoneNumber&quot;
	@getphonenumber=&quot;getPhoneNumber&quot;
&gt;
	微信登录
&lt;/button&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 获取手机号
			getPhoneNumber(e) {
				if (e.detail.errMsg == &quot;getPhoneNumber:ok&quot;) {
					uni.login({
						provider: &quot;weixin&quot;,
						success: (res) =&gt; {
							uni.showLoading({
								title: &#39;正在登录...&#39;,
								icon: &#39;loading&#39;
							})
							this.$store
								// 获取微信登录的授权码
								.dispatch(&quot;WXLogin&quot;, {
									xcxCode: e.detail.code
								})
								.then(() =&gt; {
									this.loginSuccess();
								})
								.catch((e) =&gt; {
								console.log(e)
									//if (this.captchaEnabled) {
									//	this.getCode();
									//}
									//uni.hideLoading()
								});
						},
					});
				}
			}，
			
			loginSuccess (res) {
				this.GetInfo() //获取用户信息
				uni.hideLoading() 
				//跳转页面
				uni.navigateTo({
					url:&quot;/pages/index/index&quot;
				})
			},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 微信登录（store）
	  WXLogin({ commit }, userInfo) {
		return new Promise((resolve, reject) =&gt; {
		    //  wechatLogin 是自定义的登录的接口
			wechatLogin(userInfo).then(res =&gt; {
			// 存储接口返回的token信息
			setToken(res.data.token)
			commit(&#39;SET_TOKEN&#39;, res.data.token)
			resolve()
		  }).catch(error =&gt; {
			reject(error)
		  })
		})
	  },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uni-cloud开发" tabindex="-1"><a class="header-anchor" href="#uni-cloud开发" aria-hidden="true">#</a> uni-cloud开发</h2>`,9),I={href:"https://www.bilibili.com/video/BV1PP411E7qG/?spm_id_from=333.337.search-card.all.click&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},L={href:"https://uniapp.dcloud.net.cn/uniCloud/#",target:"_blank",rel:"noopener noreferrer"},T=n("p",null,"（uni-cloud-project）",-1),A={href:"https://unicloud.dcloud.net.cn/",target:"_blank",rel:"noopener noreferrer"},D=n("p",null,"uniCloud项目显示关联到的服务空间，则绑定成功",-1),W=n("h3",{id:"客户端和云函数的通信",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#客户端和云函数的通信","aria-hidden":"true"},"#"),s(" 客户端和云函数的通信")],-1),N=n("p",null,[s("uni-app客户端和传统服务器通信时，使用"),n("code",null,"uni.request"),s("的ajax请求方式。uniCloud下不再使用它，有更好的云端一体的通信方式。")],-1),F=n("p",null,"uniCloud体系里，客户端和服务端的云函数通信，有4种方式：",-1),U=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}}),n("th",{style:{"text-align":"center"}},"传统的restful方式"),n("th",{style:{"text-align":"center"}},"callfunction方式"),n("th",{style:{"text-align":"center"}},"云对象方式"),n("th",{style:{"text-align":"center"}},"clientDB方式")])],-1),$=n("td",{style:{"text-align":"center"}},"简述",-1),z={style:{"text-align":"center"}},O={href:"https://uniapp.dcloud.net.cn/uniCloud/http",target:"_blank",rel:"noopener noreferrer"},V=n("td",{style:{"text-align":"center"}},"云函数默认并不自带http链接",-1),E=n("td",{style:{"text-align":"center"}},"把callfunction的函数式调用，升级为模块化的对象调用",-1),R=n("td",{style:{"text-align":"center"}},"客户端直接操作云数据库",-1),M=n("tr",null,[n("td",{style:{"text-align":"center"}},"前端调用方式"),n("td",{style:{"text-align":"center"}},"传统ajax"),n("td",{style:{"text-align":"center"}},[s("uni-app客户端通过"),n("code",null,"uniCloud.callFunction(functionname)"),s("来调用云函数")]),n("td",{style:{"text-align":"center"}},[s("uni-app客户端通过"),n("code",null,"uniCloud.importObject(objectname)"),s("导入一个云对象，直接使用这个对象的方法")]),n("td",{style:{"text-align":"center"}},[s("uni-app客户端通过``组件或"),n("code",null,"uniCloud.database()"),s(" API来访问uniCloud数据库。也支持搭配action云函数追加服务器逻辑")])],-1),H=n("tr",null,[n("td",{style:{"text-align":"center"}},"适用场景"),n("td",{style:{"text-align":"center"}},"http链接需要自己注册域名。如果前端是uni-app，则不推荐使用URL化。如果是非uni-app的系统需要访问云函数，只能使用URL化"),n("td",{style:{"text-align":"center"}},"相比云函数URL，callfunction更加安全、更serverless，不暴露域名和ip，不怕攻击，也无需注册域名"),n("td",{style:{"text-align":"center"}},"uni-app 3.4起支持。相比callfunction方式。代码更加精简、逻辑更加清晰、开发更加高效"),n("td",{style:{"text-align":"center"}},"如果uni-app前端发起的服务器请求目的主要是查询或操作数据库，则推荐使用clientDB方式")],-1),G=e(`<p>云函数是uniCloud的基础，本质上 clientDB 和 云对象 都是建立在云函数上针对特定场景的优化。</p><ul><li>clientDB针对的场景是数据库操作，它优化了可以不写或少写服务器代码</li><li>云对象针对的场景是非数据库操作或不宜前端暴露的数据库操作时，和uni-app客户端的通信方式。它优化了代码结构，更精简、简单</li></ul><h3 id="clientdb方式" tabindex="-1"><a class="header-anchor" href="#clientdb方式" aria-hidden="true">#</a> clientDB方式</h3><p>clientDB分API方式和组件方式，此处使用API方式来演示 (必须要配合DB Schema 使用)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 客户端js直接操作云数据库，查询list表的数据。无需服务器代码</span>
<span class="token keyword">const</span> db <span class="token operator">=</span> uniCloud<span class="token punctuation">.</span><span class="token function">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 获取云数据库的引用</span>
db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">// res 为数据库查询结果</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="云函数" tabindex="-1"><a class="header-anchor" href="#云函数" aria-hidden="true">#</a> 云函数</h3><p>/uniCloud/uniFunctions 右键新建云函数 myCloudFunc(一个文件夹，文件夹名就是云函数名，index.js是函数的主体)</p><p>/uniCloud/uniFunctions/index.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;use strict&#39;;
exports.main = async (event, context) =&gt; {
	//event为客户端上传的参数
	console.log(&#39;event : &#39;, event)
	
	//返回数据给客户端
	// return &quot;uniapp study&quot;
	return event
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>views文件夹下的 index.vue 文件内调用云函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>onLoad() {
			uni.callFunction({
				name:&#39;myCloudFunc&#39;,
				data:{
					name:&#39;占山&#39;,
					age:&#39;20&#39;
				}
			}).then(res=&gt;{
				console.log(res)
			})
		},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="callfunction方法" tabindex="-1"><a class="header-anchor" href="#callfunction方法" aria-hidden="true">#</a> callFunction方法</h4><p><code>uniCloud.callFunction</code>需要一个json对象作为参数，其中包含2个字段</p><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">类型</th><th style="text-align:center;">必填</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">name</td><td style="text-align:center;">String</td><td style="text-align:center;">是</td><td style="text-align:center;">云函数名称</td></tr><tr><td style="text-align:center;">data</td><td style="text-align:center;">Object</td><td style="text-align:center;">否</td><td style="text-align:center;">客户端需要传递的参数</td></tr></tbody></table><p><strong>返回json</strong></p><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">类型</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">result</td><td style="text-align:center;">Object</td><td style="text-align:center;">云函数中代码return的返回结果</td></tr><tr><td style="text-align:center;">requestId</td><td style="text-align:center;">String</td><td style="text-align:center;">云函数请求序列号，用于错误排查，可以在uniCloud web控制台的云函数日志中查到</td></tr><tr><td style="text-align:center;">header</td><td style="text-align:center;">Object</td><td style="text-align:center;">服务器header信息</td></tr><tr><td style="text-align:center;">errCode</td><td style="text-align:center;">Number或String</td><td style="text-align:center;">服务器错误码</td></tr><tr><td style="text-align:center;">success</td><td style="text-align:center;">bool</td><td style="text-align:center;">执行是否成功</td></tr></tbody></table><p>获取集合的引用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const db = uniCloud.database();
// 获取 \`user\` 集合的引用(即表名)
const collection = db.collection(&#39;user&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在云数据库中创建表（nosql）</p><p>创建users表；</p><p>新建云函数 cloudDemoFunc</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">main</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token comment">//event为客户端上传的参数</span>
	<span class="token keyword">const</span> db <span class="token operator">=</span> uniCloud<span class="token punctuation">.</span><span class="token function">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 获取 \`users\` 集合的引用</span>
	<span class="token keyword">const</span> res <span class="token operator">=</span><span class="token keyword">await</span>  db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//返回数据给客户端</span>
	<span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="集合-collection" tabindex="-1"><a class="header-anchor" href="#集合-collection" aria-hidden="true">#</a> 集合 Collection</h4><p>通过 <code>db.collection(name)</code> 可以获取指定集合的引用，在集合上可以进行以下操作</p><table><thead><tr><th>类型</th><th>接口</th><th>说明</th></tr></thead><tbody><tr><td>写</td><td>add</td><td>新增记录（触发请求）</td></tr><tr><td>计数</td><td>count</td><td>获取符合条件的记录条数</td></tr><tr><td>读</td><td>get</td><td>获取集合中的记录，如果有使用 where 语句定义查询条件，则会返回匹配结果集 (触发请求)</td></tr><tr><td>引用</td><td>doc</td><td>获取对该集合中指定 id 的记录的引用</td></tr><tr><td>查询条件</td><td>where</td><td>通过指定条件筛选出匹配的记录，可搭配查询指令（eq, gt, in, ...）使用</td></tr><tr><td></td><td>skip</td><td>跳过指定数量的文档，常用于分页，传入 offset</td></tr><tr><td></td><td>orderBy</td><td>排序方式</td></tr><tr><td></td><td>limit</td><td>返回的结果集(文档数量)的限制，有默认值和上限值</td></tr><tr><td></td><td>field</td><td>指定需要返回的字段</td></tr></tbody></table><p>查询及更新指令用于在 <code>where</code> 中指定字段需满足的条件，指令可通过 <code>db.command</code> 对象取得。</p><h4 id="记录-record-document" tabindex="-1"><a class="header-anchor" href="#记录-record-document" aria-hidden="true">#</a> 记录 Record / Document</h4><p>通过 <code>db.collection(collectionName).doc(docId)</code> 可以获取指定集合上指定 _id 的记录的引用，在记录上可以进行以下操作</p><table><thead><tr><th>接口</th><th>说明</th><th></th></tr></thead><tbody><tr><td>写</td><td>update</td><td>局部更新记录(触发请求)只更新传入的字段。如果被更新的记录不存在，会直接返回更新失败</td></tr><tr><td></td><td>set</td><td>覆写记录;会删除操作的记录中的所有字段，创建传入的字段。如果操作的记录不存在，会自动创建新的记录</td></tr><tr><td></td><td>remove</td><td>删除记录(触发请求)</td></tr><tr><td>读</td><td>get</td><td>获取记录(触发请求)</td></tr></tbody></table><p>doc(docId)方法的参数只能是字符串，即数据库默认的_id字段。</p><p>如需要匹配多个<code>_id</code>的记录，应使用where方法。可以在where方法里用in指令匹配一个包含<code>_id</code>的数组。</p><p>新增文档时数据库会自动生成_id字段，也可以自行将_id设置为其他值</p><h3 id="云对象" tabindex="-1"><a class="header-anchor" href="#云对象" aria-hidden="true">#</a> 云对象</h3><p>新建云对象 sum</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
	sum(a, b) {
		// 此处省略a和b的有效性校验
		return a + b
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.vue</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
			<span class="token keyword">async</span> <span class="token function">sum</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//注意方法或生命周期需使用async异步方式</span>
			    <span class="token keyword">const</span> sumNum <span class="token operator">=</span> uniCloud<span class="token punctuation">.</span><span class="token function">importObject</span><span class="token punctuation">(</span><span class="token string">&#39;sumNum&#39;</span><span class="token punctuation">)</span>
				<span class="token keyword">try</span> <span class="token punctuation">{</span>
					<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> sumNum<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">//导入云对象后就可以直接调用该对象的方法了，注意使用异步await</span>
					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token comment">// 结果是3</span>
				<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建云对象 cloudObj1</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> db <span class="token operator">=</span> uniCloud<span class="token punctuation">.</span><span class="token function">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token function-variable function">_before</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 通用预处理器</span>

	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token keyword">async</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		 <span class="token keyword">return</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.vue(获取数据的方法)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>           <span class="token keyword">async</span> <span class="token function">getTheList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				
				<span class="token keyword">const</span> cloudObj1 <span class="token operator">=</span> uniCloud<span class="token punctuation">.</span><span class="token function">importObject</span><span class="token punctuation">(</span><span class="token string">&#39;cloudObj1&#39;</span><span class="token punctuation">)</span>
				<span class="token keyword">try</span> <span class="token punctuation">{</span>
					<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> cloudObj1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
					<span class="token comment">// console.log(res) // 结果是3</span>
					<span class="token keyword">this</span><span class="token punctuation">.</span>lists<span class="token operator">=</span>res<span class="token punctuation">.</span>data
				<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="云存储" tabindex="-1"><a class="header-anchor" href="#云存储" aria-hidden="true">#</a> 云存储</h3><h3 id="db-schema" tabindex="-1"><a class="header-anchor" href="#db-schema" aria-hidden="true">#</a> DB Schema</h3><p>user表的schema(基础格式) permission里面字段级控制，包括读写两种权限，分别称为：read、write</p><p>只有配置了权限之后，client连接数据库才不会有权限问题</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>
<span class="token punctuation">{</span>
  <span class="token property">&quot;bsonType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;required&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;permission&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;read&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 任何用户都可以读</span>
    <span class="token property">&quot;create&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 禁止新增数据记录（admin权限用户不受限）</span>
    <span class="token property">&quot;update&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 禁止更新数据（admin权限用户不受限）</span>
    <span class="token property">&quot;delete&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 禁止删除数据（admin权限用户不受限）</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pwd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;bsonType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 即使不配置权限，此字段也无法在客户端读写</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;密码&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置了Schema之后，使用client连接数据库就不会报错了。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token function">clientGetList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">const</span> db <span class="token operator">=</span> uniCloud<span class="token punctuation">.</span><span class="token function">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 获取云数据库的引用</span>
				db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
				    <span class="token comment">// res 为数据库查询结果</span>
					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;client&quot;</span><span class="token punctuation">,</span>res<span class="token punctuation">)</span>
				  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
				    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span> 
				  <span class="token punctuation">}</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uni-id用户体系" tabindex="-1"><a class="header-anchor" href="#uni-id用户体系" aria-hidden="true">#</a> uni-id用户体系</h3>`,49),X={href:"https://ext.dcloud.net.cn/plugin?name=uni-id-pages",target:"_blank",rel:"noopener noreferrer"},J=n("code",null,"uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json",-1),Q={href:"https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#config",target:"_blank",rel:"noopener noreferrer"},K=n("h3",{id:"注意",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#注意","aria-hidden":"true"},"#"),s(" 注意")],-1),Y=n("p",null,"项目体验在微信小程序上，要发送到体验版的时候，应该在hbuiler里面点击发布，并在微信小程序后台配置域名。",-1);function Z(nn,sn){const a=i("ExternalLinkIcon");return o(),l("div",null,[c(`

 * @name: 东方凝洛
 * @Date: 2022-12-02 21:19:19
 * @msg: 
 * @param: 
 * @return: 
`),k,v,m,b,g,y,n("p",null,[n("a",h,[s("uni-app快速上手 | uni-app官网 (dcloud.net.cn)"),t(a)])]),n("p",null,[n("a",q,[s("DCloud 插件市场"),t(a)])]),x,n("p",null,[n("a",f,[s("( 对于封装微信小程序uni.request请求，支持自动携带token,可查看这篇文章"),t(a)])]),w,n("p",null,[n("a",_,[s("@escook/request-miniprogram - npm (npmjs.com)"),t(a)])]),j,n("p",null,[n("a",C,[s("uni-app官网 (dcloud.net.cn)"),t(a)])]),S,n("p",null,[s("插件地址 ： "),n("a",B,[s("echarts for uniapp - DCloud 插件市场"),t(a)])]),P,n("p",null,[n("a",I,[s("uniCloud云开发视频教程-从基础入门到项目开发实战-uniapp进阶课文章管理系统（云函数/云数据库/云存储"),t(a)])]),n("p",null,[n("a",L,[s("uni-app官网 (dcloud.net.cn)"),t(a)])]),T,n("p",null,[s("创建空的uni-app项目，右键关联阿里云服务器 "),n("a",A,[s("服务空间 - uniCloud (dcloud.net.cn)"),t(a)])]),D,W,N,F,n("table",null,[U,n("tbody",null,[n("tr",null,[$,n("td",z,[s("通过配置"),n("a",O,[s("云函数URL化"),t(a)]),s("，把云函数转为传统的http链接")]),V,E,R]),M,H])]),G,n("p",null,[s("下载插件：下载地址："),n("a",X,[s("https://ext.dcloud.net.cn/plugin?name=uni-id-pages"),t(a)])]),n("p",null,[s("uni-id的云端配置文件在 "),J,s(" 中（没有这个目录的自己创建，配置文件在 "),n("a",Q,[s("uni-app官网 (dcloud.net.cn)"),t(a)]),s(" 找到复制进来 注意复制后要符合json格式，去除所有注释【 passwordSecret 和 tokenSecret 自己设置，不能为空】）。")]),K,Y])}const en=p(d,[["render",Z],["__file","dragonfruit.html.vue"]]);export{en as default};
