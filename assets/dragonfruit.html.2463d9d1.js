import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as o,d as l,a as n,b as s,e as t,f as e,r as c}from"./app.ad56f2b0.js";const u="/blog/packageUni.png",r="/blog/PackageAuniWechat.png",d={},v=e(`<hr><p>date: 2022-01-10 category:</p><ul><li>uni-app tag:</li><li>uni typora-root-url: ...vuepress\\public</li></ul><hr><h1 id="uni-app" tabindex="-1"><a class="header-anchor" href="#uni-app" aria-hidden="true">#</a> uni-app</h1><h2 id="uni-app发起网络请求" tabindex="-1"><a class="header-anchor" href="#uni-app发起网络请求" aria-hidden="true">#</a> uni-app发起网络请求</h2><h3 id="原生的uni-request发起请求" tabindex="-1"><a class="header-anchor" href="#原生的uni-request发起请求" aria-hidden="true">#</a> 原生的uni.request发起请求</h3><p>main.js里面设置根地址</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>websiteUrl <span class="token operator">=</span> ’http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">8080</span>‘<span class="token punctuation">;</span> 
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),k={href:"https://blog.csdn.net/Hi_Eleven/article/details/115858307",target:"_blank",rel:"noopener noreferrer"},m=n("h3",{id:"escook-request-miniprogram",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#escook-request-miniprogram","aria-hidden":"true"},"#"),s(),n("strong",null,"@escook/request-miniprogram")],-1),b={href:"https://www.npmjs.com/package/@escook/request-miniprogram?activeTab=readme",target:"_blank",rel:"noopener noreferrer"},g=e(`<p>因为小程序中无法使用axios，而原生的uni.request功能过于简单，所以下载加强版网络请求包：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i @escook/request-miniprogram -S    下载网络请求包
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上就是对uniapp小程序的分包操作，那么如何查看自己分包是否成功了呢，在微信开发者工具打开，点击详情，在基本信息页面可以看到本地代码，点开后就能查看自己的主包和分包信息了，如果包的大小还是大于2M的话，就需要继续优化了。</p><p><img src="`+r+'" alt="PackageAuniWechat" loading="lazy"></p>',29);function h(q,f){const a=c("ExternalLinkIcon");return i(),o("div",null,[l(`
 * @name: 东方凝洛
 * @Date: 2022-12-02 21:19:19
 * @msg: 
 * @param: 
 * @return: 
`),v,n("p",null,[n("a",k,[s("( 对于封装微信小程序uni.request请求，支持自动携带token,可查看这篇文章"),t(a)])]),m,n("p",null,[n("a",b,[s("@escook/request-miniprogram - npm (npmjs.com)"),t(a)])]),g])}const w=p(d,[["render",h],["__file","dragonfruit.html.vue"]]);export{w as default};
