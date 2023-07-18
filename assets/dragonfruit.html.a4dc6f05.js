import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as l,d as c,a as n,b as s,e as t,f as p,r as i}from"./app.684a5af9.js";const u="/blog/packageUni.png",r="/blog/PackageAuniWechat.png",k={},d=n("hr",null,null,-1),v=n("p",null,"date: 2022-01-10 category:",-1),m=n("ul",null,[n("li",null,"uni-app tag:"),n("li",null,"uni typora-root-url: ...vuepress\\public")],-1),b=n("hr",null,null,-1),g=n("h1",{id:"uni-app",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#uni-app","aria-hidden":"true"},"#"),s(" uni-app")],-1),q=n("h2",{id:"网址",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#网址","aria-hidden":"true"},"#"),s(" 网址")],-1),y={href:"https://uniapp.dcloud.net.cn/quickstart.html#",target:"_blank",rel:"noopener noreferrer"},h={href:"https://ext.dcloud.net.cn/",target:"_blank",rel:"noopener noreferrer"},f=p(`<h2 id="uni-app发起网络请求" tabindex="-1"><a class="header-anchor" href="#uni-app发起网络请求" aria-hidden="true">#</a> uni-app发起网络请求</h2><h3 id="原生的uni-request发起请求" tabindex="-1"><a class="header-anchor" href="#原生的uni-request发起请求" aria-hidden="true">#</a> 原生的uni.request发起请求</h3><p>main.js里面设置根地址</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>websiteUrl <span class="token operator">=</span> ’http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">8080</span>‘<span class="token punctuation">;</span> 
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),x={href:"https://blog.csdn.net/Hi_Eleven/article/details/115858307",target:"_blank",rel:"noopener noreferrer"},w=n("h3",{id:"escook-request-miniprogram",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#escook-request-miniprogram","aria-hidden":"true"},"#"),s(),n("strong",null,"@escook/request-miniprogram")],-1),_={href:"https://www.npmjs.com/package/@escook/request-miniprogram?activeTab=readme",target:"_blank",rel:"noopener noreferrer"},S=p(`<p>因为小程序中无法使用axios，而原生的uni.request功能过于简单，所以下载加强版网络请求包：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i @escook/request-miniprogram -S    下载网络请求包
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上就是对uniapp小程序的分包操作，那么如何查看自己分包是否成功了呢，在微信开发者工具打开，点击详情，在基本信息页面可以看到本地代码，点开后就能查看自己的主包和分包信息了，如果包的大小还是大于2M的话，就需要继续优化了。</p><p><img src="`+r+'" alt="PackageAuniWechat" loading="lazy"></p><h2 id="pages-json" tabindex="-1"><a class="header-anchor" href="#pages-json" aria-hidden="true">#</a> pages.json</h2>',30),j={href:"https://uniapp.dcloud.net.cn/collocation/pages.html#",target:"_blank",rel:"noopener noreferrer"},B=p(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uniapp使用echarts图" tabindex="-1"><a class="header-anchor" href="#uniapp使用echarts图" aria-hidden="true">#</a> uniapp使用echarts图</h2>`,2),P={href:"https://ext.dcloud.net.cn/plugin?id=8017",target:"_blank",rel:"noopener noreferrer"},I=p(`<p>注意：使用HBuilderX导入插件echarts， 使用页面需要将 组件 引入进来使用， 要为引入的 echarts 设置宽高，否则可能不显示。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function A(T,W){const a=i("ExternalLinkIcon");return o(),l("div",null,[c(`

 * @name: 东方凝洛
 * @Date: 2022-12-02 21:19:19
 * @msg: 
 * @param: 
 * @return: 
`),d,v,m,b,g,q,n("p",null,[n("a",y,[s("uni-app快速上手 | uni-app官网 (dcloud.net.cn)"),t(a)])]),n("p",null,[n("a",h,[s("DCloud 插件市场"),t(a)])]),f,n("p",null,[n("a",x,[s("( 对于封装微信小程序uni.request请求，支持自动携带token,可查看这篇文章"),t(a)])]),w,n("p",null,[n("a",_,[s("@escook/request-miniprogram - npm (npmjs.com)"),t(a)])]),S,n("p",null,[n("a",j,[s("uni-app官网 (dcloud.net.cn)"),t(a)])]),B,n("p",null,[s("插件地址 ： "),n("a",P,[s("echarts for uniapp - DCloud 插件市场"),t(a)])]),I])}const $=e(k,[["render",A],["__file","dragonfruit.html.vue"]]);export{$ as default};
