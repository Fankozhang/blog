import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,b as s,e as t,f as e,r as i}from"./app.da69e072.js";const l={},u=e(`<h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> vue</h1><h2 id="vue项目打包一键去掉所有console-log" tabindex="-1"><a class="header-anchor" href="#vue项目打包一键去掉所有console-log" aria-hidden="true">#</a> vue项目打包一键去掉所有console.log</h2><p>在Vue项目中，可以通过使用babel插件来去除所有的console.log语句。以下是一种常用的方法：</p><ol><li>安装babel插件：babel-plugin-transform-remove-console</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install babel-plugin-transform-remove-console --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>在项目的根目录下创建一个babel.config.js文件，并添加以下内容：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  presets: [
    &#39;@vue/cli-plugin-babel/preset&#39;
  ],
  plugins: [
    p<wbr>rocess.env.NODE_ENV === &#39;production&#39; ? &#39;transform-remove-console&#39; : &#39;&#39;
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>运行打包命令，例如：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样，在生产环境下，所有的console.log语句都会被自动去除。</p><p>请注意，这只会在打包时去除console.log语句，而不会影响开发环境下的调试信息。</p><p>你可以参考以下链接获取更多关于此话题的信息：</p>`,12),r={href:"https://cli.vuejs.org/zh/guide/browser-compatibility.html#babel",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.npmjs.com/package/babel-plugin-transform-remove-console",target:"_blank",rel:"noopener noreferrer"},k=n("h2",{id:"vue中修改props传进来的值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue中修改props传进来的值","aria-hidden":"true"},"#"),s(" vue中修改props传进来的值")],-1),v={href:"https://blog.csdn.net/c2635222586/article/details/104095779",target:"_blank",rel:"noopener noreferrer"},m=e(`<p>在子组件修改props的方法：</p><ol><li>子组件data中拷贝一份，注意引用类型需要深拷贝，根据需求可以watch监听</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        newList<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
watch<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">list</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>newList <span class="token operator">=</span> newVal
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>通过计算属性修改</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>computed<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">nList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> item<span class="token punctuation">.</span>isChecked
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>sync修饰符</li></ol><p>父组件 穿进去的时候加上 .sync</p><p>子组件 通过this.$emit(&#39;update:xxx&#39;, params)</p><div class="language-cobol line-numbers-mode" data-ext="cobol"><pre class="language-cobol"><code>
<span class="token operator">/</span><span class="token operator">/</span> 父组件
<span class="token operator">&lt;</span>todo-list <span class="token punctuation">:</span><span class="token keyword">list</span><span class="token punctuation">.</span><span class="token keyword">sync</span><span class="token operator">=</span><span class="token string">&quot;list&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
 
<span class="token operator">/</span><span class="token operator">/</span> 子组件
methodName<span class="token punctuation">(</span><span class="token keyword">index</span><span class="token punctuation">)</span> {
    this<span class="token punctuation">.</span>$emit<span class="token punctuation">(</span><span class="token string">&#39;update:list&#39;</span><span class="token punctuation">,</span> this<span class="token punctuation">.</span>newList<span class="token punctuation">)</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue内置组件的component标签" tabindex="-1"><a class="header-anchor" href="#vue内置组件的component标签" aria-hidden="true">#</a> Vue内置组件的component标签</h2>`,10),b={href:"https://blog.csdn.net/lwc_1234/article/details/122533764",target:"_blank",rel:"noopener noreferrer"},g=e(`<p>@click的事件修饰符</p><table><thead><tr><th>修饰符</th><th>说明</th></tr></thead><tbody><tr><td>.stop</td><td>阻止冒泡 调用 event.stopPropagation()</td></tr><tr><td>.prevent</td><td>阻止默认事件 调用 event.preventDefault()</td></tr><tr><td>.capture</td><td>添加事件侦听器时使用事件捕获模式</td></tr><tr><td>.once</td><td>事件只触发一次</td></tr><tr><td>.self</td><td>只有点击当前元素本身时才会触发回调</td></tr></tbody></table><h2 id="element-ui按需导入" tabindex="-1"><a class="header-anchor" href="#element-ui按需导入" aria-hidden="true">#</a> element ui按需导入</h2><p><code>cnpm install element-ui --save-dev</code></p><p>main.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import {
    Button,
    Popover,
    Cascader,
    CascaderPanel
} from &#39;element-ui&#39;

Vue.use(Button)
Vue.use(Popover)
Vue.use(Cascader)
Vue.use(CascaderPanel)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用组件的页面导入样式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import &#39;element-ui/lib/theme-chalk/index.css&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="vue实现登录后跳转到之前的页面" tabindex="-1"><a class="header-anchor" href="#vue实现登录后跳转到之前的页面" aria-hidden="true">#</a> vue实现登录后跳转到之前的页面</h2>`,9),h={href:"https://blog.csdn.net/longzhoufeng/article/details/106646698",target:"_blank",rel:"noopener noreferrer"},f=e(`<p>main.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>router.beforeEach((to, from, next) =&gt; {
    if (to.path == &#39;/login&#39; &amp;&amp; from.path!=&#39;/register&#39;) {
    	//保存当前路由
        localStorage.setItem(&quot;preRoute&quot;, router.currentRoute.fullPath)
    }
    next()
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>登录界面 login.vue</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this.$store.dispatch(&quot;Login&quot;, this.loginForm).then(response =&gt; {
	if (response.code == 200) {
		const curr = localStorage.getItem(&#39;preRoute&#39;)
		if (curr == null) {
			this.$router.push({ path: &quot;/user_center&quot; });
		} else {
			this.$router.push({ path: curr });
		}
		this.$message({ message: response.msg, type: &quot;success&quot;, &quot;duration&quot;: 1000 });
	} else {
		this.$message.error(response.msg);
	}
}).catch((response) =&gt; {
	this.$message.error(&#39;请联系管理员！！！&#39;);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue2和vue3响应式-简易版" tabindex="-1"><a class="header-anchor" href="#vue2和vue3响应式-简易版" aria-hidden="true">#</a> vue2和vue3响应式（简易版）</h2><p>vue2通过遍历循环对象属性（for key in obj），在对每一个属性的值用 Object.defineProperty 进行getter和setter的改造</p><p>vue3通过Proxy（代理）和Reflect（反射）的使用完成 响应式。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">observe</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>data <span class="token operator">||</span> <span class="token keyword">typeof</span> data <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> data<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> value <span class="token operator">=</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> value
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">{</span>
        value <span class="token operator">=</span> newVal
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">observe</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">reactive</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> value
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuex的基本使用-pinia的基本使用" tabindex="-1"><a class="header-anchor" href="#vuex的基本使用-pinia的基本使用" aria-hidden="true">#</a> vuex的基本使用 pinia的基本使用</h2>`,10),y={href:"https://pinia.web3doc.top/getting-started.html",target:"_blank",rel:"noopener noreferrer"},q=n("p",null,"vuex的基本使用可以查看以下文章：",-1),x={href:"https://juejin.cn/post/6928468842377117709",target:"_blank",rel:"noopener noreferrer"},w={href:"https://juejin.cn/post/6994337441314242590#heading-15",target:"_blank",rel:"noopener noreferrer"},_={href:"https://juejin.cn/post/7087100496762109983#heading-16",target:"_blank",rel:"noopener noreferrer"},j={href:"https://juejin.cn/post/7280007176776204327?searchId=2024011109491811B46B930D323378F7D4",target:"_blank",rel:"noopener noreferrer"},S=n("p",null,"pinia的基本使用可以查看以下文章： (pinia相比vuex简单很多)",-1),V={href:"https://juejin.cn/post/7078281612013764616#heading-0",target:"_blank",rel:"noopener noreferrer"},P=e(`<h3 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> vuex</h3><p>安装：npm install vuex --save</p><h4 id="定义-store" tabindex="-1"><a class="header-anchor" href="#定义-store" aria-hidden="true">#</a> 定义 store</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span> Vuex <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">//待添加</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">state</span><span class="token operator">:</span><span class="token punctuation">{</span> 
          <span class="token literal-property property">products</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;鼠标&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;键盘&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>，
        <span class="token literal-property property">getters</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//添加getters</span>
            <span class="token function-variable function">saleProducts</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              <span class="token keyword">let</span> saleProducts <span class="token operator">=</span> state<span class="token punctuation">.</span>products<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span> <span class="token parameter">product</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">name</span><span class="token operator">:</span> product<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
                  <span class="token literal-property property">price</span><span class="token operator">:</span> product<span class="token punctuation">.</span>price <span class="token operator">/</span> <span class="token number">2</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">)</span>
              <span class="token keyword">return</span> saleProducts<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">mutations</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//添加mutations,payload是函数接收到的参数</span>
            <span class="token function">minusPrice</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">let</span> newPrice <span class="token operator">=</span> state<span class="token punctuation">.</span>products<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> <span class="token parameter">product</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                product<span class="token punctuation">.</span>price <span class="token operator">-=</span> payload
              <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">actions</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//添加actions,payload是函数接收到的参数</span>
            <span class="token function">minusPriceAsync</span><span class="token punctuation">(</span> <span class="token parameter">context<span class="token punctuation">,</span> payload</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token function">setTimeout</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span> <span class="token string">&#39;minusPrice&#39;</span><span class="token punctuation">,</span> payload <span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//context提交,通过调用mutations里面的方法来改变数据</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>   
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
    store<span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>products                    <span class="token comment">//获取store中state的数据</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>saleProducts              <span class="token comment">//获取store中getters的数据</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;minusPrice&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// 同步方法，调用mutations中的方法，2是传递的参数</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;minusPriceAsync&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//分发actions中的minusPriceAsync这个异步函数，5是参数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="辅助函数" tabindex="-1"><a class="header-anchor" href="#辅助函数" aria-hidden="true">#</a> 辅助函数</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mapState<span class="token punctuation">,</span>mapGetters <span class="token punctuation">,</span>mapMutations<span class="token punctuation">,</span>mapActions   <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span><span class="token punctuation">;</span>  <span class="token comment">//引入方法</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;App&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;products&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>        <span class="token comment">// 注意这里是数组</span>
    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token string">&#39;saleProducts&#39;</span> <span class="token comment">// 将 saleProducts 映射为组件的 saleProducts 属性</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token comment">//在methods中使用拓展运算符展开函数</span>
       <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;minusPrice&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;minusPriceAsync&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// 调用函数</span>
      <span class="token function">changeBtn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">minusPrice</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">minusPriceAsync</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="modules-模块" tabindex="-1"><a class="header-anchor" href="#modules-模块" aria-hidden="true">#</a> Modules 模块</h4><p>每个模块拥有自己的 <code>state、mutation,action、getter、</code>甚至是嵌套子模块——从上至下进行同样方式的分割</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -&gt; moduleA 的状态
store.state.b // -&gt; moduleB 的状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="页面刷新后vuex-状态丢失怎么解决" tabindex="-1"><a class="header-anchor" href="#页面刷新后vuex-状态丢失怎么解决" aria-hidden="true">#</a> 页面刷新后Vuex 状态丢失怎么解决？</h4><p>Vuex 只是在内存中保存状态，刷新后就会丢失，如果要持久化就需要保存起来。</p><p><code>localStorage</code>就很合适，提交<code>mutation</code>的时候同时存入<code>localStorage</code>，在<code>store</code>中把值取出来作为<code>state</code>的初始值即可。</p><p>也可以使用第三方插件，推荐使用<code>vuex-persist</code>插件，它是为 Vuex 持久化储存而生的一个插件，不需要你手动存取<code>storage</code>，而是直接将状态保存至 <code>cookie</code> 或者 <code>localStorage</code>中。</p><h3 id="pinia-更轻便" tabindex="-1"><a class="header-anchor" href="#pinia-更轻便" aria-hidden="true">#</a> pinia（更轻便）</h3>`,16),C={href:"https://pinia.vuejs.org/zh/introduction.html",target:"_blank",rel:"noopener noreferrer"},E=e(`<p>npm install pinia</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { createApp } from &#39;vue&#39;
import { createPinia } from &#39;pinia&#39;
import App from &#39;./App.vue&#39;
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.mount(&#39;#app&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>

<span class="token comment">// useStore 可以是 useUser、useCart 之类的任何东西</span>
<span class="token comment">// 第一个参数是应用程序中 store 的唯一 id,可以自定义</span>
<span class="token comment">//这个 name，也称为 id，是必要的，Pinia 使用它来将 store 连接到 devtools。 将返回的函数命名为 use... 是跨可组合项的约定，以使其符合你的使用习惯。</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;useStore&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// other options...</span>
    <span class="token comment">// state 为 store 的核心，表示当前模块的状态</span>
    <span class="token comment">// 为了完整类型推理，推荐使用箭头函数</span>
    <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">10</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">doubleNum</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>num <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>num<span class="token operator">++</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">addMore</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>num<span class="token operator">+=</span><span class="token function">parseInt</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1" aria-hidden="true">#</a> 使用</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&#39;ts&#39;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>useStore<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/store/index.js&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> store<span class="token operator">=</span><span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>num<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">add</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    store<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    store<span class="token punctuation">.</span><span class="token function">addMore</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>  <span class="token comment">// 带参数</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">storeReset</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">//您可以通过调用 store 上的 $reset() 方法将状态 重置 到其初始值</span>
    store<span class="token punctuation">.</span><span class="token function">$reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),M=n("code",null,"Pinia",-1),A={href:"https://link.juejin.cn/?target=https%3A%2F%2Fseb-l.github.io%2Fpinia-plugin-persist%2F",target:"_blank",rel:"noopener noreferrer"},z=n("h2",{id:"vue实现全屏滚动",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue实现全屏滚动","aria-hidden":"true"},"#"),s(" vue实现全屏滚动")],-1),D={href:"http://www.htmleaf.com/plus/search.php",target:"_blank",rel:"noopener noreferrer"},F={href:"https://developer.aliyun.com/article/835013",target:"_blank",rel:"noopener noreferrer"},R=e(`<p>.vue文件</p><p>@mousewheel.prevent 鼠标滚动，实现页面的切换</p><p>@keyup.prevent 点击键盘实现页面滚动，此处为键盘上下键点击实现页面滚动</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fullPage<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fullPage<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue项目跳转时如何加密路由上面query传递的参数" tabindex="-1"><a class="header-anchor" href="#vue项目跳转时如何加密路由上面query传递的参数" aria-hidden="true">#</a> vue项目跳转时如何加密路由上面query传递的参数</h2>`,9),L={href:"https://blog.csdn.net/weixin_44243061/article/details/107092308",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/wukang0718/vueRouterEncryption",target:"_blank",rel:"noopener noreferrer"},B=n("p",null,"(实际使用有bug,在新页面打开带参数的url时，加密的参数并不能够解析出来)",-1),N=n("h2",{id:"后端返回很大的数据量-前端如何渲染",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#后端返回很大的数据量-前端如何渲染","aria-hidden":"true"},"#"),s(" 后端返回很大的数据量，前端如何渲染")],-1),H={href:"https://mp.weixin.qq.com/s/pWsntJbJnBip5CbP7HkvFg",target:"_blank",rel:"noopener noreferrer"},I=n("h2",{id:"vite创建vue3项目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vite创建vue3项目","aria-hidden":"true"},"#"),s(" vite创建vue3项目")],-1),U={href:"https://juejin.cn/post/7276408879365636156",target:"_blank",rel:"noopener noreferrer"},O={href:"https://juejin.cn/post/7156957907890733063",target:"_blank",rel:"noopener noreferrer"},J={href:"https://mp.weixin.qq.com/s/IY-uBjEpWLhPUaLvhdvhmw",target:"_blank",rel:"noopener noreferrer"},$=e(`<p>普通创建vite项目</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm init vite@latest
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，路由配置完成。</p><p><strong>注意：vue3中引入的组件可以直接使用</strong></p><h4 id="vite-config-js-配置-server服务-路径" tabindex="-1"><a class="header-anchor" href="#vite-config-js-配置-server服务-路径" aria-hidden="true">#</a> vite.config.js 配置 server服务 @ 路径</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { defineConfig } from &#39;vite&#39;
import vue from &#39;@vitejs/plugin-vue&#39;
import {
    resolve
} from &quot;path&quot;

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        // 启动后打开浏览器
        open: true,
        // 设置主机
        host: &#39;127.0.0.1&#39;,
        // 设置端口
        port: 3001
    },
    resolve: {
        // ↓路径别名，主要是这部分
        alias: {
            &quot;@&quot;: resolve(__dirname, &quot;./src&quot;)
        }
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="下载less依赖" tabindex="-1"><a class="header-anchor" href="#下载less依赖" aria-hidden="true">#</a> 下载less依赖</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
npm i less-loader less style-resources-loader --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="下载配置-element-plus" tabindex="-1"><a class="header-anchor" href="#下载配置-element-plus" aria-hidden="true">#</a> 下载配置 element-plus</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install element-plus --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>main.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;element-plus/dist/index.css&#39;</span>

<span class="token comment">// element-plus默认英文，中文配置</span>
<span class="token comment">// import zhCn from &#39;element-plus/lib/locale/lang/zh-cn&#39; 这个路径会报错</span>
<span class="token keyword">import</span> zhCn <span class="token keyword">from</span> <span class="token string">&#39;element-plus/es/locale/lang/zh-cn&#39;</span>
<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">locale</span><span class="token operator">:</span> zhCn<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="下载配置axios" tabindex="-1"><a class="header-anchor" href="#下载配置axios" aria-hidden="true">#</a> 下载配置axios</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install axios qs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>src/utils 下创建 request.js 封装axios请求</p><p>(写法1)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 根据环境变量区分接口默认地址</span>
<span class="token keyword">switch</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;production&quot;</span><span class="token operator">:</span>
        axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL<span class="token operator">=</span><span class="token string">&quot;http://api.fanko.cn&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;test&quot;</span><span class="token operator">:</span>
        axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL<span class="token operator">=</span><span class="token string">&quot;http://192.168.20.12:8080&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL<span class="token operator">=</span><span class="token string">&quot;http://127.0.0.1:3000&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//  设置超时时间和跨域是否允许携带凭证</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>timeout<span class="token operator">=</span><span class="token number">10000</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>withCredentials<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token comment">/*
*  设置请求传输数据的格式(看服务器要求什么类型的数据格式)   x-www-form-urlencoded是一种数据格式
*  transformRequest 只对post请求有作用，根据实际要求决定设置不设置
*/</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;application/x-www-form-urlencoded&#39;</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span><span class="token function-variable function">transformRequest</span> <span class="token operator">=</span> <span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 设置请求拦截器   客户端发送请求 =&gt; [请求拦截器] =&gt; 服务器 客户端发送请求给服务器的配置项就是 config</span>
<span class="token comment">// token校验（JWT） 接受服务器返回的token 存储到vuex/本地存储中 </span>
<span class="token comment">// 每一次向服务器发请求应该把 token 带上</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>     <span class="token comment">//请求成功时执行</span>
    <span class="token comment">//获取本地存储中的token</span>
    <span class="token keyword">let</span> token <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//  验证token存在，请求头带上 token</span>
    token <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> token<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  <span class="token comment">//请求失败时执行</span>
    <span class="token keyword">return</span> Primise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">)</span>
<span class="token comment">// 设置响应拦截器  服务器返回信息 =&gt; [响应拦截器统一处理] =&gt; 客户端</span>
<span class="token comment">/*  axios.defaults.validateStatus=status=&gt;{  基本公司不用配置
*      // 自定义响应成功的HTTP状态码
*      return /^(2|3)\\d{2}$/.test(status);
*/</span>  <span class="token punctuation">}</span>

axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token parameter">response</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
     <span class="token keyword">return</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token comment">//拦截失败</span>
    <span class="token keyword">return</span> Primise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span>response <span class="token punctuation">}</span> <span class="token operator">=</span> error<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token keyword">case</span> <span class="token number">401</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>权限问题<span class="token punctuation">,</span>提示未登录或无权限等；
           <span class="token keyword">break</span><span class="token punctuation">;</span>
           <span class="token keyword">case</span> <span class="token number">403</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>服务器拒绝执行 （token过期）
           <span class="token keyword">break</span><span class="token punctuation">;</span>
           <span class="token keyword">case</span> <span class="token number">404</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>找不到页面
           <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">//服务器连结果都没有返回</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>onLine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//断网处理：跳转断网页面/提示网络错误等等</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> axios<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(写法2)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//创建一个新 axios 实力</span>
<span class="token comment">// 请求拦截器，如果有 token 进行头部携带</span>
<span class="token comment">// 响应拦截器， 剥离无效token 处理 token 失效</span>
<span class="token comment">// 导出一个函数，调用当前 axios 实例，返回值 promise</span>

<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//  导出基准地址，原因： 其他地方不是通过 axios 发送请求的地方用上基准地址</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> baseURL<span class="token operator">=</span><span class="token string">&#39;http://localhost:8084&#39;</span>
<span class="token keyword">const</span> instance<span class="token operator">=</span>axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// axios 的一些配置，baseurl timeout </span>
    baseURL<span class="token punctuation">,</span>
    <span class="token literal-property property">timeout</span><span class="token operator">:</span><span class="token number">5000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> config
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">err</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// res =&gt; res.data  取出data数据，将来调用接口的时候直接拿到的就是后台的数据</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span>res<span class="token punctuation">.</span>data<span class="token punctuation">,</span><span class="token parameter">err</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> Primise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span>response <span class="token punctuation">}</span> <span class="token operator">=</span> error<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token keyword">case</span> <span class="token number">401</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>权限问题<span class="token punctuation">,</span>提示未登录或无权限等；
           <span class="token keyword">break</span><span class="token punctuation">;</span>
           <span class="token keyword">case</span> <span class="token number">403</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>服务器拒绝执行 （token过期）
           <span class="token keyword">break</span><span class="token punctuation">;</span>
           <span class="token keyword">case</span> <span class="token number">404</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>找不到页面
           <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">//服务器连结果都没有返回</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>onLine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//断网处理：跳转断网页面/提示网络错误等等</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span>method<span class="token punctuation">,</span>submitData</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">// 负责发请求：请求地址，请求方式， 提交数据</span>
    <span class="token keyword">return</span> <span class="token function">instance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        url<span class="token punctuation">,</span>
        method<span class="token punctuation">,</span>
        <span class="token comment">// 1. 如果是get请求  需要使用params来传递submitData   ?a=10&amp;c=10</span>
        <span class="token comment">// 2. 如果不是get请求  需要使用data来传递submitData   请求体传参</span>
        <span class="token comment">// [] 设置一个动态的key, 写js表达式，js表达式的执行结果当作KEY</span>
        <span class="token comment">// method参数：get,Get,GET  转换成小写再来判断</span>
        <span class="token comment">// 在对象，[&#39;params&#39;]:submitData ===== params:submitData 这样理解</span>
        <span class="token punctuation">[</span>method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;get&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;params&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span><span class="token operator">:</span> submitData
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>api/use.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&quot;@/utils/request.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">addUser</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getListTest</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&#39;/user/string&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置跨域-vite-config-js" tabindex="-1"><a class="header-anchor" href="#配置跨域-vite-config-js" aria-hidden="true">#</a> 配置跨域(vite.config.js)</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 启动后打开浏览器</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//请求路径关键字</span>
          <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:8084&#39;</span><span class="token punctuation">,</span> <span class="token comment">//对应自己的接口</span>
          <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//是否允许跨域,在本地会创建一个虚拟服务端，然后发送请求的数据，</span>
                              <span class="token comment">// 并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题</span>
          <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token string-property property">&#39;^/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>      <span class="token comment">//这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// ↓路径别名，主要是这部分</span>
      <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;@&quot;</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;./src&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了前端配置代理之外，后台也要配置跨域，否则请求不到，后台跨域解决可以参考下面的文章</p>`,39),X={href:"https://juejin.cn/post/7229139006080253989",target:"_blank",rel:"noopener noreferrer"},W={href:"https://blog.csdn.net/qq_40185480/article/details/110926273",target:"_blank",rel:"noopener noreferrer"},G=n("h4",{id:"配置pinia",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置pinia","aria-hidden":"true"},"#"),s(" 配置pinia")],-1),Y={href:"https://mp.weixin.qq.com/s/vxjPAuwQjLd75nt4RPCR8A",target:"_blank",rel:"noopener noreferrer"},K=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install pinia
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>main.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { createPinia } from &#39;pinia&#39;

createApp(App).use(router).use(ElementPlus).use(createPinia()).mount(&#39;#app&#39;) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>store/index.js</p><p>Store 是使用 <code>defineStore()</code> 定义的，并且它需要一个<strong>唯一</strong>名称，作为第一个参数传递：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//pinia 中使用 definStore 方法来定义 store</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>

<span class="token comment">// useStore 可以是 useUser、useCart 之类的任何东西</span>
<span class="token comment">// 第一个参数是应用程序中 store 的唯一 id,可以自定义</span>
<span class="token comment">//这个 name，也称为 id，是必要的，Pinia 使用它来将 store 连接到 devtools。 将返回的函数命名为 use... 是跨可组合项的约定，以使其符合你的使用习惯。</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;useStore&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// other options...</span>
    <span class="token comment">// state 为 store 的核心，表示当前模块的状态</span>
    <span class="token comment">// 为了完整类型推理，推荐使用箭头函数</span>
    <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">100</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">doubleNum</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>num <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// actions 可以定义同步和异步的方法</span>
    <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>num<span class="token operator">++</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">addMore</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>num<span class="token operator">+=</span>num
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.vue 文件引入使用</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    {{ store.num }}  {{ store.doubleNum }}
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span> 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mini<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">background-color</span><span class="token punctuation">:</span> aquamarine<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span> +1 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addMore(3)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mini<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">background-color</span><span class="token punctuation">:</span> aquamarine<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span> +3 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>storeReset<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mini<span class="token punctuation">&quot;</span></span>  <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">margin-left</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span><span class="token property">background-color</span><span class="token punctuation">:</span> aquamarine<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span> 重置 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>useStore<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/store/index.js&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> store<span class="token operator">=</span><span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">add</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    store<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 传参</span>
<span class="token keyword">const</span> <span class="token function-variable function">addMore</span><span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    store<span class="token punctuation">.</span><span class="token function">addMore</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">storeReset</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">//您可以通过调用 store 上的 $reset() 方法将状态 重置 到其初始值</span>
    store<span class="token punctuation">.</span><span class="token function">$reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用拓展库" tabindex="-1"><a class="header-anchor" href="#使用拓展库" aria-hidden="true">#</a> 使用拓展库</h2><h3 id="lodash使用" tabindex="-1"><a class="header-anchor" href="#lodash使用" aria-hidden="true">#</a> lodash使用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import _ from &#39;lodash&#39;

// 防抖
 add: _.debounce(function () {
        // 请求接口
        console.log(&#39;123&#39;)
        }, 800),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="树形结构插件-vue2-org-tree-组织结构图" tabindex="-1"><a class="header-anchor" href="#树形结构插件-vue2-org-tree-组织结构图" aria-hidden="true">#</a> 树形结构插件 vue2-org-tree(组织结构图)</h3>`,12),Q={href:"https://juejin.cn/post/7011705093665849375",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://zhuanlan.zhihu.com/p/117300250",target:"_blank",rel:"noopener noreferrer"},nn=n("h3",{id:"vue3-中引入wangeditor富文本编辑器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue3-中引入wangeditor富文本编辑器","aria-hidden":"true"},"#"),s(" Vue3 中引入wangeditor富文本编辑器")],-1),sn={href:"https://www.wangeditor.com/v5/getting-started.html#%E5%BC%95%E5%85%A5-js-%E5%88%9B%E5%BB%BA%E7%BC%96%E8%BE%91%E5%99%A8",target:"_blank",rel:"noopener noreferrer"},an={href:"https://www.wangeditor.com/v5/for-frame.html",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://blog.csdn.net/qq_41299955/article/details/107571454",target:"_blank",rel:"noopener noreferrer"},en=e(`<p>基本使用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i wangeditor -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在需要用到的页面引入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//这里名字无所谓, 就是待会new的时候要用这个名字new
import EWangEditor from &quot;wangeditor&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在页面内使用</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- id要为new wangeditor对象时候使用的id，style设高度可以不设  --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editor<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editor<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editor<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span>500px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
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



<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue中引入二维码-vue-qr" tabindex="-1"><a class="header-anchor" href="#vue中引入二维码-vue-qr" aria-hidden="true">#</a> vue中引入二维码（ vue-qr ）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// npm
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue3中-setup语法糖使用组件级的路由导航守卫-定义组件name-unplugin-vue-define-options" tabindex="-1"><a class="header-anchor" href="#vue3中-setup语法糖使用组件级的路由导航守卫-定义组件name-unplugin-vue-define-options" aria-hidden="true">#</a> vue3中 setup语法糖使用组件级的路由导航守卫，定义组件name (unplugin-vue-define-options)</h3>`,13),pn={href:"https://github.com/sxzz/unplugin-vue-macros/blob/HEAD/packages/define-options/README-zh-CN.md",target:"_blank",rel:"noopener noreferrer"},on=e(`<blockquote><p>在 <code>&lt;script setup &gt;</code> 中可使用 defineOptions 宏，以便在 <code>&lt;script setup &gt;</code> 中使用 Options API。 尤其是能够在一个函数中设置 name、props、emit 和 render 属性。 有了这个宏，你就可以在 <code>&lt;script setup&gt;</code> 使用 Options API；</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> npm i unplugin-vue-define-options -D 
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="视频播放器" tabindex="-1"><a class="header-anchor" href="#视频播放器" aria-hidden="true">#</a> 视频播放器</h3>`,7),cn={href:"https://www.uedbox.com/post/68416/",target:"_blank",rel:"noopener noreferrer"},ln={id:"vue3videoplay-vue3可用-效果好",tabindex:"-1"},un=n("a",{class:"header-anchor",href:"#vue3videoplay-vue3可用-效果好","aria-hidden":"true"},"#",-1),rn={href:"https://codelife.cc/vue3-video-play/",target:"_blank",rel:"noopener noreferrer"},dn={href:"https://blog.csdn.net/qq_52752298/article/details/133637931",target:"_blank",rel:"noopener noreferrer"},kn=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i vue3-video-play --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>main.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import vue3videoPlay from &#39;vue3-video-play&#39; // 引入组件
import &#39;vue3-video-play/dist/style.css&#39; // 引入css
app.use(vue3videoPlay)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>报错:Failed to resolve entry for package &quot;vue3-video-play&quot;. The package may have incorrect main/module/exports specified in its package.json.</p>`,4),vn={href:"https://blog.csdn.net/milk123_/article/details/135293846",target:"_blank",rel:"noopener noreferrer"},mn=e(`<p>步骤：找到node_modules\\vue3-video-play\\package.json 将package.json中 &quot;module&quot;: &quot;./dist/index.es.js&quot;改为&quot;module&quot;: &quot;./dist/index.mjs&quot;</p><p>然后重启项目，可以看到没有报错了</p><p>使用(具体参数看官网展示)：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue3VideoPlay</span>
      <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:poster</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options.poster<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@play</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onPlay<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@pause</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onPause<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@timeupdate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onTimeupdate<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@canplay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onCanplay<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>   

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"> 

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;800px&quot;</span><span class="token punctuation">,</span> <span class="token comment">//播放器宽度</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&quot;450px&quot;</span><span class="token punctuation">,</span> <span class="token comment">//播放器高度</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#409eff&quot;</span><span class="token punctuation">,</span> <span class="token comment">//主题色</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;测试&quot;</span><span class="token punctuation">,</span> <span class="token comment">//视频名称</span>
  <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&quot;http://1.94.16.149:9000/test/movie.mp4&quot;</span><span class="token punctuation">,</span>     <span class="token comment">//视频源</span>
  <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/ironMan.jpg&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 视频封面</span>
  <span class="token literal-property property">muted</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//静音</span>
  <span class="token literal-property property">speed</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启进度条拖动</span>
  <span class="token literal-property property">webFullScreen</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">speedRate</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;0.75&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1.0&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1.25&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1.5&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2.0&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//播放倍速</span>
  <span class="token literal-property property">autoPlay</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//自动播放</span>
  <span class="token literal-property property">loop</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//循环播放</span>
  <span class="token literal-property property">mirror</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//镜像画面</span>
  <span class="token literal-property property">ligthOff</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//关灯模式</span>
  <span class="token literal-property property">volume</span><span class="token operator">:</span> <span class="token number">0.3</span><span class="token punctuation">,</span> <span class="token comment">//默认音量大小</span>
  <span class="token literal-property property">control</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否显示控制</span>
  <span class="token literal-property property">controlBtns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;audioTrack&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;quality&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;speedRate&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;volume&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;setting&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;pip&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;pageFullScreen&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;fullScreen&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//显示所有按钮,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 支持所有原生video事件
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">onPlay</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;播放&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">onPause</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ev<span class="token punctuation">,</span> <span class="token string">&quot;暂停&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">onTimeupdate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ev<span class="token punctuation">,</span> <span class="token string">&quot;时间更新&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">onCanplay</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ev<span class="token punctuation">,</span> <span class="token string">&quot;可以播放&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="aliplayer阿里播放器" tabindex="-1"><a class="header-anchor" href="#aliplayer阿里播放器" aria-hidden="true">#</a> Aliplayer阿里播放器</h4>`,5),bn={href:"https://player.alicdn.com/aliplayer/presentation/index.html?type=cover",target:"_blank",rel:"noopener noreferrer"},gn=n("h4",{id:"西瓜播放器-可音乐播放",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#西瓜播放器-可音乐播放","aria-hidden":"true"},"#"),s(" 西瓜播放器（可音乐播放）")],-1),hn={href:"https://v2.h5player.bytedance.com/gettingStarted/",target:"_blank",rel:"noopener noreferrer"},fn={href:"https://blog.csdn.net/lianghecai52171314/article/details/116812079",target:"_blank",rel:"noopener noreferrer"},yn=n("p",null,"只需三步：安装、DOM占位、实例化即可完成播放器的使用。",-1),qn=n("h4",{id:"mui-player-多端可用-效果好",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mui-player-多端可用-效果好","aria-hidden":"true"},"#"),s(" Mui Player(多端可用，效果好)")],-1),xn={href:"https://muiplayer.js.org/zh/",target:"_blank",rel:"noopener noreferrer"},wn={href:"https://blog.csdn.net/linx_i/article/details/124190001",target:"_blank",rel:"noopener noreferrer"},_n=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i mui-player --save
npm i mui-player-desktop-plugin  pc端拓展（插件）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>页面引入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import &#39;mui-player/dist/mui-player.min.css&#39;
import MuiPlayer from &#39;mui-player&#39;

// 使用模块管理器引入插件（pc端拓展）
import MuiPlayerDesktopPlugin from &#39;mui-player-desktop-plugin&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue3使用</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mui-player<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span>
    const customSetting=[{
		functions:&#39;清晰度&#39;,
		model:&#39;select&#39;,
		show:true,
		zIndex:0,
		childConfig:[
			{functions:&#39;蓝光1080P&#39;},
			{functions:&#39;超清&#39;},
			{functions:&#39;高清&#39;,selected:true},
			{functions:&#39;标清&#39;},
		],
		onToggle:function(data,selected,back) {
            // Action
        }
	}]
    
onMounted(() =&gt; {
  // 初始化 MuiPlayer 插件，MuiPlayer 方法传递一个对象，该对象包括所有插件的配置
  var mp = new MuiPlayer({
    container: &quot;#mui-player&quot;,  // 播放器容器
    title: &quot;标题&quot;,             // 标题
    src: &quot;http://1.94.16.149:9000/test/movie.mp4&quot;, //  视频播放的资源地址
    width: 300,        // 初始化播放器宽度
    height: 300,       // 初始化播放器高度
      
     //  plugins 插件拓展（根据需要进行配置，具体配置查看官网）
    plugins:[
        new MuiPlayerDesktopPlugin({
            customSetting:customSetting, // 设置组配置
            // contextmenu, // 右键菜单组配置
            // thumbnails,  // 缩略图配置
        })
    ]
      
  });

  // 监听播放器已创建完成
  mp.on(&#39;ready&#39;,function(event) {
      console.log(event);
  });
});
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span> <span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-搭建组件库v2-简易" tabindex="-1"><a class="header-anchor" href="#vue-搭建组件库v2-简易" aria-hidden="true">#</a> vue 搭建组件库V2（简易）</h2>`,6),jn={href:"https://www.bilibili.com/video/BV1Zf4y1u75o?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},Sn={href:"https://www.cnblogs.com/luoluo-snow/p/11636943.html",target:"_blank",rel:"noopener noreferrer"},Vn=n("p",null,"一开始跟着视频编写代码，但是到了webpack打包，webpack.component.js文件和依赖引入时出现了挺多的报错（尝试了几个解决方法，最终没能解决，在打包完css后直接发布了），在打包发布到了npm网站后引入组件，打开页面控制台报红，果然失败了。",-1),Pn=n("p",null,"后来参考文章，用脚手架自带的打包，成功部署到npm网站上了。使用正常。",-1),Cn=n("p",null,"vue组件库制作：npm初始化项目+编写组件+webpack打包js+gulp打包css+npm发布",-1),En={href:"https://zhuanlan.zhihu.com/p/337520239",target:"_blank",rel:"noopener noreferrer"},Mn=e(`<h3 id="搭建vue项目和运行环境-示例-vue2版本" tabindex="-1"><a class="header-anchor" href="#搭建vue项目和运行环境-示例-vue2版本" aria-hidden="true">#</a> 搭建vue项目和运行环境（示例）vue2版本</h3><p>1、首先，创建一个普通的vue2项目</p><p>2、打开项目，将src目录下的components文件夹放到项目根目录下，改名为packages,将src文件名改为examples。此时运行项目会报错。原因是vue寻找文件默认是从src目录下寻找，我们改了src名为examples，所以需要对配置进行修改。</p><p>修改方法：创建vue.config,js文件，代码如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">pages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;examples/main.js&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;examples/index.html&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;index.html&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
     <span class="token comment">// 扩展 webpack 配置，使 examples 加入编译</span>
    <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>module
            <span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">&#39;js&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span>include
            <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;/examples&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;babel&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改配置文件后，重启项目，成功运行。</p><p>3、css文件夹下编写css样式，（如用到scss则需要引入依赖，注意版本问题）</p><p>创建vue组件文件 (packages/lib/demo/src/main.vue)</p><p>创建index.js（packages/lib/demo/index.js) ，这个js文件用于编写注册组件的代码，最终引入到main.js</p><p>如创建Demo组件，index.js代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Demo <span class="token keyword">from</span> <span class="token string">&#39;../demo/src/main.vue&#39;</span>

Demo<span class="token punctuation">.</span><span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>Demo<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Demo<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终在main.js引入css文件和组件注册的js代码，(此处的demo.scss属于全局引入了，在组件内可以直接使用的)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;../packages/css/demo.scss&#39;</span>
<span class="token keyword">import</span> Demo <span class="token keyword">from</span> <span class="token string">&quot;../packages/lib/demo/index&quot;</span>

Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Demo<span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当配置完成后，项目可正常运行。</p><h3 id="组件制作" tabindex="-1"><a class="header-anchor" href="#组件制作" aria-hidden="true">#</a> 组件制作</h3><p>1、组件设计（通用性）</p><p>2、编写html和css样式</p><p>3、编写组件逻辑代码</p><p>4、测试组件</p><p>（card组件示例代码如下）</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>f-card<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>f-card-img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width?{width:width+&#39;px&#39;}:{}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imgSrc<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imgHeight?{height:imgHeight+&#39;px&#39;}:{}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>summary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>f-card-summary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        {{summary}}
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>f-card-summary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
     <span class="token comment">&lt;!-- &lt;div class=&quot;f-card-footer&quot;&gt;
        footer
     &lt;/div&gt; --&gt;</span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;Card&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span><span class="token punctuation">{</span>       <span class="token comment">//卡片宽度</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span>Number<span class="token punctuation">,</span>
            <span class="token keyword">default</span><span class="token operator">:</span><span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">imgSrc</span><span class="token operator">:</span><span class="token punctuation">{</span>       <span class="token comment">//图片资源地址</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
            <span class="token keyword">default</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">imgHeight</span><span class="token operator">:</span><span class="token punctuation">{</span>    <span class="token comment">//图片高度</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span>Number<span class="token punctuation">,</span>
            <span class="token keyword">default</span><span class="token operator">:</span><span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">summary</span><span class="token operator">:</span><span class="token punctuation">{</span>    <span class="token comment">//概述</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
            <span class="token keyword">default</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.f-card</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 270px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 10px 5px 5px #efefef<span class="token punctuation">;</span>
    <span class="token selector">&amp;-img</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 152px<span class="token punctuation">;</span>
        <span class="token selector">img</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100%
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token selector">&amp;-summary</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">&amp;-footer</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试的组件代码如下，运行功能正常</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Vue logo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./assets/logo.png<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>demo</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>demo</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> 
      <span class="token attr-name">imgSrc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>123456.png<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">summary</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>这是一个card组件<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>570<span class="token punctuation">&#39;</span></span>
      <span class="token attr-name">imgHeight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>130<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
     123
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>footer</span><span class="token punctuation">&gt;</span></span>
        footer
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包" tabindex="-1"><a class="header-anchor" href="#打包" aria-hidden="true">#</a> 打包</h3><p>在写组件的文件夹 同级目录创建index.js文件，用于汇总导出所有组件，便于打包后引用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Demo <span class="token keyword">from</span> <span class="token string">&#39;./demo&#39;</span>
<span class="token keyword">import</span> Card <span class="token keyword">from</span> <span class="token string">&quot;./card&quot;</span>

<span class="token keyword">const</span> components <span class="token operator">=</span> <span class="token punctuation">{</span>
    Demo<span class="token punctuation">,</span>
    Card
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>install<span class="token punctuation">.</span>installed<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>components<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>components<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> components<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    install<span class="token punctuation">,</span>
    Card<span class="token punctuation">,</span>
    Demo
<span class="token punctuation">}</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行 npm run build:css 打包css代码，注意文件路径报错</p><h3 id="发布" tabindex="-1"><a class="header-anchor" href="#发布" aria-hidden="true">#</a> 发布</h3>`,37),An={href:"https://mp.weixin.qq.com/s/clyH5SFvwtPY19dagUgcDA",target:"_blank",rel:"noopener noreferrer"},zn=e(`<p>1、准备一个npm账号</p><p>2、npm login 登录npm账号</p><p>3、npm publish (推送代码，注意修改package.json的配置)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &quot;name&quot;: &quot;fankoui3&quot;,
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在vue文件中使用Card组件，如可显示正常，则组件库创建成功。</p><h2 id="如何写一个属于自己的vue3组件库" tabindex="-1"><a class="header-anchor" href="#如何写一个属于自己的vue3组件库" aria-hidden="true">#</a> 如何写一个属于自己的Vue3组件库</h2>`,12),Dn={href:"https://juejin.cn/post/7207094325897297957",target:"_blank",rel:"noopener noreferrer"},Fn=n("p",null,"pnpm 修改默认安装包的仓库位置 pnpm config set store-dir E:/pnpmPackage",-1),Rn=n("p",null,"使用pnpm的项目最好不要有中文路径，否则下载依赖可能有报错",-1),Ln={href:"https://mp.weixin.qq.com/s/jvLAFzwJPlA5J-iNJSblag",target:"_blank",rel:"noopener noreferrer"},Tn={href:"https://juejin.cn/post/7255514764754894907?searchId=20231030164149D848293E31B857FECA86#heading-6",target:"_blank",rel:"noopener noreferrer"},Bn={href:"https://juejin.cn/post/7285373518836826167",target:"_blank",rel:"noopener noreferrer"},Nn={href:"https://juejin.cn/post/7211521650252398649",target:"_blank",rel:"noopener noreferrer"},Hn={href:"https://juejin.cn/user/78820567165575/posts",target:"_blank",rel:"noopener noreferrer"},In={href:"https://github.com/yuanwen0327/learn-create-compoents-lib",target:"_blank",rel:"noopener noreferrer"},Un={href:"https://juejin.cn/post/6987735091925483551#heading-14",target:"_blank",rel:"noopener noreferrer"},On={href:"https://juejin.cn/post/7241514309717639228",target:"_blank",rel:"noopener noreferrer"},Jn={href:"https://juejin.cn/post/7117897323014783013",target:"_blank",rel:"noopener noreferrer"},$n=e(`<h2 id="vue3实现-v-model-封装组件" tabindex="-1"><a class="header-anchor" href="#vue3实现-v-model-封装组件" aria-hidden="true">#</a> vue3实现 v-model (封装组件)</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// 父组件     v-model 等于 :modelValue=&quot;inContent&quot; @update:modelValue=&quot;inContent = $event&quot;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>editorIt</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inContent<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>editorIt</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// 子组件
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>valueHtml<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>  onMounted <span class="token punctuation">,</span>defineProps<span class="token punctuation">,</span> defineEmits<span class="token punctuation">,</span>toRefs<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;modelValue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token comment">//  子组件内容 HTML</span>
    <span class="token keyword">const</span> valueHtml <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;p&gt;hello&lt;/p&gt;&#39;</span><span class="token punctuation">)</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      valueHtml<span class="token punctuation">.</span>value<span class="token operator">=</span>props<span class="token punctuation">.</span>modelValue
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

 <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">,</span>‘<span class="token number">1234567</span>’<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue3-4版本简化了v-model的实现" tabindex="-1"><a class="header-anchor" href="#vue3-4版本简化了v-model的实现" aria-hidden="true">#</a> vue3.4版本简化了v-model的实现</h3><p><code>通过 defineModel 来实现</code></p>`,5),Xn={href:"https://cn.vuejs.org/guide/components/v-model#basic-usage",target:"_blank",rel:"noopener noreferrer"},Wn=n("h2",{id:"vue3基本使用-用setup-语法糖",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue3基本使用-用setup-语法糖","aria-hidden":"true"},"#"),s(" vue3基本使用（用setup 语法糖）")],-1),Gn={href:"https://cn.vuejs.org/guide/introduction.html",target:"_blank",rel:"noopener noreferrer"},Yn={href:"https://juejin.cn/post/6897030228867022856",target:"_blank",rel:"noopener noreferrer"},Kn=e(`<h3 id="计算属性" tabindex="-1"><a class="header-anchor" href="#计算属性" aria-hidden="true">#</a> 计算属性</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span>reactive<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> author <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;John Doe&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">books</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;Vue 2 - Advanced Guide&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Vue 3 - Basic Guide&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Vue 4 - The Mystery&#39;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 一个计算属性 ref，随后访问publishedBooksMessage的值要用 publishedBooksMessage.value</span>
<span class="token keyword">const</span> publishedBooksMessage <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> author<span class="token punctuation">.</span>books<span class="token punctuation">.</span>length 
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment">// 计算属性默认是只读的。当你尝试修改一个计算属性时，你会收到一个运行时警告。只在某些特殊场景中你可能才需要用  到“可写”的属性，你可以通过同时提供 getter 和 setter 来创建</span>
<span class="token keyword">const</span> firstName <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;John&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> lastName <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Doe&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> fullName <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// getter</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> firstName<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> lastName<span class="token punctuation">.</span>value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// setter</span>
  <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注意：我们这里使用的是解构赋值语法</span>
    <span class="token punctuation">[</span>firstName<span class="token punctuation">.</span>value<span class="token punctuation">,</span> lastName<span class="token punctuation">.</span>value<span class="token punctuation">]</span> <span class="token operator">=</span> newValue<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> watch</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">// 单个 ref</span>
<span class="token function">watch</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newX</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">x is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>newX<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// getter 函数</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span>value <span class="token operator">+</span> y<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">sum</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">sum of x + y is: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>sum<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token comment">// 多个来源组成的数组</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span>x<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> y<span class="token punctuation">.</span>value<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>newX<span class="token punctuation">,</span> newY<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">x is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>newX<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> and y is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>newY<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment">//不能直接侦听响应式对象的属性值,这里需要用一个返回该属性的 getter 函数</span>
<span class="token comment">// 提供一个 getter 函数</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> obj<span class="token punctuation">.</span>count<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">count is: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//  { deep: true }  深度监听</span>
  <span class="token comment">//  { immediate: true }   //立即执行</span>
<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="watcheffect" tabindex="-1"><a class="header-anchor" href="#watcheffect" aria-hidden="true">#</a> <code>watchEffect()</code></h3><p>侦听器的回调使用与源完全相同的响应式状态是很常见的。例如下面的代码，在每当 <code>todoId</code> 的引用发生变化时使用侦听器来加载一个远程资源</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const todoId = ref(1)
const data = ref(null)

watch(todoId, async () =&gt; {
  const response = await fetch(
    \`https://jsonplaceholder.typicode.com/todos/\${todoId.value}\`
  )
  data.value = await response.json()
}, { immediate: true })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特别是注意侦听器是如何两次使用 <code>todoId</code> 的，一次是作为源，另一次是在回调中。</p>`,8),Qn={href:"https://cn.vuejs.org/api/reactivity-core.html#watcheffect",target:"_blank",rel:"noopener noreferrer"},Zn=n("code",null,"watchEffect",-1),ns=n("code",null,"watchEffect()",-1),ss=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>watchEffect(async () =&gt; {
  const response = await fetch(
    \`https://jsonplaceholder.typicode.com/todos/\${todoId.value}\`
  )
  data.value = await response.json()
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>停止侦听器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 它会自动停止
watchEffect(() =&gt; {})


// 手动停止
const unwatch = watchEffect(() =&gt; {})
// ...当该侦听器不再需要时
unwatch()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生命周期使用" tabindex="-1"><a class="header-anchor" href="#生命周期使用" aria-hidden="true">#</a> 生命周期使用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup&gt;
import { onMounted } from &#39;vue&#39;

onMounted(() =&gt; {
  console.log(\`the component is now mounted.\`)
})
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">//  defineProps里面声名props会有哪些值，例如父组件传给子组件一个&#39;num&#39;值</span>
    <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;num&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment">// 在script里使用props的值要带&#39;props.&#39;&#39;,在template中直接 {{num}} 就可以获取</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>num<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

// 对象式声明props，只是写法不同
defineProps({
  title: String,
  likes: Number
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="emit" tabindex="-1"><a class="header-anchor" href="#emit" aria-hidden="true">#</a> emit</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 父组件 app.vue
&lt;template&gt;
	&lt;son @sonClick=&quot;getSon&quot; @sonClick2=&quot;getSon2(num)&quot;&gt;&lt;/son&gt;
&lt;/template&gt;
&lt;script setup&gt;
    const getSon=()=&gt;{}
    const getSon2=(num)=&gt;{}
&lt;/script&gt;

//子组件  son.vue

 //  defineEmits里面声名 自定义事件  
const emit = defineEmits([&#39;sonClick&#39;,&#39;sonClick2&#39;])
// emit触发事件，可携带参数
emit(&#39;sonClick&#39;)
emit(&#39;sonClick2&#39;,&#39;123&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="父组件通过ref调用子组件" tabindex="-1"><a class="header-anchor" href="#父组件通过ref调用子组件" aria-hidden="true">#</a> 父组件通过ref调用子组件</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>父组件  app.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>chuanzhi</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myson<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>chuanzhi</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mySonRef<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{myson}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">//  定义一个和子组件同名的ref变量</span>
<span class="token keyword">let</span> myson<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">mySonRef</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token comment">// 通过myson.value获取子组件的属性，但只有子组件暴露出来的才能访问</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;myson&#39;</span><span class="token punctuation">,</span>myson<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  myson<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">ceshi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

子组件  chuanzhi.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">let</span> sons<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">ceshi</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 子组件通过defineExpose向外暴露属性和方法，父组件才能访问</span>
<span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  sons<span class="token punctuation">,</span>ceshi
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nexttick" tabindex="-1"><a class="header-anchor" href="#nexttick" aria-hidden="true">#</a> nextTick</h3><p>若要等待一个状态改变后的 DOM 更新完成 ,可以使用nextTick</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { nextTick } from &#39;vue&#39;

nextTick(() =&gt; {
    // 访问更新后的 DOM
  })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="依赖注入-provide-inject" tabindex="-1"><a class="header-anchor" href="#依赖注入-provide-inject" aria-hidden="true">#</a> 依赖注入(provide,inject )</h3><p>依赖提供方：provide</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup&gt;
import { provide } from &#39;vue&#39;

provide(/* 注入名 */ &#39;message&#39;, /* 值 */ &#39;hello!&#39;)

// 第二个参数是提供的值，值可以是任意类型，包括响应式的状态，比如一个 ref
const count = ref(&#39;0&#39;)
provide(&#39;message&#39;, count.value)
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注入：inject 接收依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup&gt;
import { inject } from &#39;vue&#39;

const message = inject(&#39;message&#39;)

// 如果没有祖先组件提供 &quot;message&quot;， \`value\` 会是 &quot;这是默认值&quot;
const value = inject(&#39;message&#39;, &#39;这是默认值&#39;)

&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue3-hooks" tabindex="-1"><a class="header-anchor" href="#vue3-hooks" aria-hidden="true">#</a> vue3 hooks</h3><h4 id="鼠标跟踪器示例" tabindex="-1"><a class="header-anchor" href="#鼠标跟踪器示例" aria-hidden="true">#</a> 鼠标跟踪器示例</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// mouse.js（hook 完整示例）</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> onUnmounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">// 按照惯例，组合式函数名以“use”开头</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useMouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 被组合式函数封装和管理的状态</span>
  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token comment">// 组合式函数可以随时更改其状态。</span>
  <span class="token keyword">function</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">.</span>value <span class="token operator">=</span> event<span class="token punctuation">.</span>pageX
    y<span class="token punctuation">.</span>value <span class="token operator">=</span> event<span class="token punctuation">.</span>pageY
  <span class="token punctuation">}</span>

  <span class="token comment">// 一个组合式函数也可以挂靠在所属组件的生命周期上</span>
  <span class="token comment">// 来启动和卸载副作用</span>
  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token comment">// 通过返回值暴露所管理的状态</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（再拆分）我们可以将添加和清除 DOM 事件监听器的逻辑也封装进一个组合式函数中：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// event.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> onUnmounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useEventListener</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> event<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果你想的话，</span>
  <span class="token comment">// 也可以用字符串形式的 CSS 选择器来寻找目标 DOM 元素</span>
  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> target<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> target<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有了它，之前的 <code>useMouse()</code> 组合式函数可以被简化为：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// mouse.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEventListener <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./event&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useMouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token function">useEventListener</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> <span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">.</span>value <span class="token operator">=</span> event<span class="token punctuation">.</span>pageX
    y<span class="token punctuation">.</span>value <span class="token operator">=</span> event<span class="token punctuation">.</span>pageY
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件中使用</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useMouse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./mouse.js&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>Mouse position is at: {{ x }}, {{ y }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="异步状态示例" tabindex="-1"><a class="header-anchor" href="#异步状态示例" aria-hidden="true">#</a> 异步状态示例</h4><p>在做异步数据请求时，我们常常需要处理不同的状态：加载中、加载成功和加载失败。</p><p><strong>接收响应式状态</strong></p><p><code>useFetch()</code> 接收一个静态 URL 字符串作为输入——因此它只会执行一次 fetch 并且就此结束。如果我们想要在 URL 改变时重新 fetch 呢？为了实现这一点，我们需要将响应式状态传入组合式函数，并让它基于传入的状态来创建执行操作的侦听器。</p><p>举例来说，<code>useFetch()</code> 应该能够接收一个 ref：或者接收一个 getter 函数：</p>`,33),as={href:"https://cn.vuejs.org/api/reactivity-core.html#watcheffect",target:"_blank",rel:"noopener noreferrer"},ts=n("code",null,"watchEffect()",-1),es={href:"https://cn.vuejs.org/api/reactivity-utilities.html#tovalue",target:"_blank",rel:"noopener noreferrer"},ps=n("code",null,"toValue()",-1),os=n("code",null,"toValue()",-1),cs={href:"https://cn.vuejs.org/api/reactivity-utilities.html#unref",target:"_blank",rel:"noopener noreferrer"},is=n("code",null,"unref()",-1),ls=e("<p>注意 <code>toValue(url)</code> 是在 <code>watchEffect</code> 回调函数的<strong>内部</strong>调用的。这确保了在 <code>toValue()</code> 规范化期间访问的任何响应式依赖项都会被侦听器跟踪。</p><p>这个版本的 <code>useFetch()</code> 现在能接收静态 URL 字符串、ref 和 getter，使其更加灵活。watch effect 会立即运行，并且会跟踪 <code>toValue(url)</code> 期间访问的任何依赖项。如果没有跟踪到依赖项（例如 url 已经是字符串），则 effect 只会运行一次；否则，它将在跟踪到的任何依赖项更改时重新运行。</p><p><strong>输入参数</strong></p>",3),us={href:"https://cn.vuejs.org/api/reactivity-utilities.html#tovalue",target:"_blank",rel:"noopener noreferrer"},rs=n("code",null,"toValue()",-1),ds=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { toValue } from &#39;vue&#39;

function useFeature(maybeRefOrGetter) {
  // 如果 maybeRefOrGetter 是一个 ref 或 getter，
  // 将返回它的规范化值。
  // 否则原样返回。
  const value = toValue(maybeRefOrGetter)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>useFetch（）实现代码示例：</p>`,2),ks={href:"https://play.vuejs.org/#eNp9VNtu4zgM/RWuX+JiM3YXxb4USbC3LrCLuaFzefKLYtONWkcyJCppEOTfh5RsN5kpBmiRhCIPzzmkdMz+7PtiFzC7zRa+dron8EihX1VGb3vrCI7gsJ1Dbbd9IGzgBK2zW5hx0ewsKXj8F6neTOdFOYaKR8+Zlamt8QRr5fGL62AJsw1R72/L8tFb03eqxo3tGnQFHXpd2wYLblqSbawvGSCV64YrmVE++212NQZDxBsp5vkVLFdTo1+5ptipLiDnjxVHaBSpOaBz1s0ZkNyBqS8nHTljcv6iTK6wH/yDcMs8CfkXwFurGuht5HQrgcU6EFkDuzetdcsq06AN/F5l8Efd6fpJIkJeV9nqeAQNp9OiTCURvaJFo3dcrVtOjcQ4U4AZul99sL3/Be4kDMgqgiF02NwCY8XkYoveqweMuDLAWDhwmihEpYx7L59n/Tm15PbpW+KBncdERrzimn/4AzqWLW0XvUPRIWepJf9+FWMlTmnzUBTFeL4oJyuzeXa2KLyHl3u3V3xw17ZY0xzIfpU5freDlcHnWNIGU5NmtRdDhKPwSWOPZNP+mNDJgMeTaOH3R/J/RiBX/mBqSOsVUQHKkkv4yoAnVgNr5NkjtNI9Sk5Z0jftILcQ+BROc/sxfg5tux0CbTAueUoVFhtnjQ2+O4C3oGnmgZyqn/iCKg9qAmiwR9PwvhxgfbjQEgWO6hk7ObscPR72/4WNXJBBc0RWjnSra606btKpAzBbZRoeS1pdsY8A1F5pAtJbtGFoKmEGCEa8voK97jq5gMGZqJOjg07dJmVKYnJBhtaW09xe++RLyo0oa6kWoGjDG+0HAZRUspssMDGKExKRUa28DBH9YlApk6t4Ma0ZHTtBLTZCjsNq/ThJHDLl4xRfHRgVXjw8ksF/lXnFz8pM6zy5l/oNSAb38JGvAfuQ58OiyEv2yNM931Bezs8DwMXmgvibv1O0KdLg+HQF18XNmSxpFoFH8SJf7vRlirTMhU98nvLZfVqE+Gt29VI62DKHm+vrGBVzTvwCkOcJtfohGs1vQESvMnnRdYfuQy8++Crj124Yaaa6zu7/jzFyAedjvN5g/fRK/NE/S6zKPsp9dTussumMlHtASsd3n97jM3+fDre2CR1n/+TwXkwKwjGl/RVMw7TP8iLb/+LLxs/CZ3/3TGj8KEqIRjtifpXxu/b3T6S/0L0pbmKduHj6BqMzlM8=",target:"_blank",rel:"noopener noreferrer"},vs=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watchEffect<span class="token punctuation">,</span> toValue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useFetch</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> error <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  
  <span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// reset state before fetching..</span>
    data<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">null</span>
    error<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">null</span>
    
    <span class="token comment">// resolve the url value synchronously so it&#39;s tracked as a</span>
    <span class="token comment">// dependency by watchEffect()</span>
    <span class="token keyword">const</span> urlValue <span class="token operator">=</span> <span class="token function">toValue</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// artificial delay / random error</span>
  	  <span class="token keyword">await</span> <span class="token function">timeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  	  <span class="token comment">// unref() will return the ref value if it&#39;s a ref</span>
	    <span class="token comment">// otherwise the value will be returned as-is</span>
    	<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>urlValue<span class="token punctuation">)</span>
	    data<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      error<span class="token punctuation">.</span>value <span class="token operator">=</span> e
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// artificial delay</span>
<span class="token keyword">function</span> <span class="token function">timeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0.3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Random Error&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useFetch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./useFetch.js&#39;</span>

<span class="token keyword">const</span> baseUrl <span class="token operator">=</span> <span class="token string">&#39;https://jsonplaceholder.typicode.com/todos/&#39;</span>
<span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> baseUrl <span class="token operator">+</span> id<span class="token punctuation">.</span>value<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error<span class="token punctuation">,</span> retry <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  Load post id:
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i in 5<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id = i<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ i }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Oops! Error encountered: {{ error.message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>retry<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Retry<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Data loaded: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span>{{ data }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span>Loading...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getcurrentinstance" tabindex="-1"><a class="header-anchor" href="#getcurrentinstance" aria-hidden="true">#</a> getCurrentInstance</h3><p>在Vue3中，getCurrentInstance() 可以用来获取<strong>当前组件实例</strong></p>`,5),ms={href:"https://blog.csdn.net/Zaralike/article/details/125870367",target:"_blank",rel:"noopener noreferrer"},bs=n("h2",{id:"vite-vue-配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vite-vue-配置","aria-hidden":"true"},"#"),s(" Vite vue 配置")],-1),gs=n("h3",{id:"vite打包视图分析-rollup-plugin-visualizer",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vite打包视图分析-rollup-plugin-visualizer","aria-hidden":"true"},"#"),s(" vite打包视图分析(rollup-plugin-visualizer)")],-1),hs={href:"https://juejin.cn/post/7159410085460983839",target:"_blank",rel:"noopener noreferrer"},fs=e(`<p>分析项目中的js文件大小和引用情况，基于展示的依赖项 js 大小对前端项目做优化处理</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install --save-dev rollup-plugin-visualizer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>vite.config.js 增加代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 分析项目中的js文件大小和引用情况
import { visualizer } from &quot;rollup-plugin-visualizer&quot;;


plugins: [vue(),vueJsx(), visualizer({
    gzipSize: true,
    brotliSize: true,
    emitFile: false,
    filename: &quot;test.html&quot;, //分析图生成的文件名
    open:true //如果存在本地服务端口，将在 npm run build 打包后自动展示
  }),],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vite-项目优化-配置-cdn-服务" tabindex="-1"><a class="header-anchor" href="#vite-项目优化-配置-cdn-服务" aria-hidden="true">#</a> vite 项目优化 配置 CDN 服务</h3><p>配置cdn加速，减小打包体积</p>`,6),ys={href:"https://juejin.cn/post/7248118049584332856",target:"_blank",rel:"noopener noreferrer"},qs=n("h2",{id:"vue和react对比学习之路由角色权限",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue和react对比学习之路由角色权限","aria-hidden":"true"},"#"),s(" Vue和React对比学习之路由角色权限")],-1),xs={href:"https://juejin.cn/post/7250386282400596029#heading-23",target:"_blank",rel:"noopener noreferrer"},ws=n("h2",{id:"如何在vue-js中创建模态框-弹出框",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#如何在vue-js中创建模态框-弹出框","aria-hidden":"true"},"#"),s(" 如何在Vue.js中创建模态框(弹出框)")],-1),_s={href:"https://mp.weixin.qq.com/s/MddofJ10zYXtWAeGa5Z_Cw",target:"_blank",rel:"noopener noreferrer"},js=e(`<h2 id="简易组件" tabindex="-1"><a class="header-anchor" href="#简易组件" aria-hidden="true">#</a> 简易组件</h2><h3 id="移动端点击侧边展示导航的组件" tabindex="-1"><a class="header-anchor" href="#移动端点击侧边展示导航的组件" aria-hidden="true">#</a> 移动端点击侧边展示导航的组件</h3><p>用的ant-design-vue的 a-drawer</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>the-dot<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showBannel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>go-back<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menu-fold<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-drawer</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drawer<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>导航菜单<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>placement<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:closable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClose<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>company-tab<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item,index) in pathList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tab<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>path==item.path?&#39;active&#39;:&#39;&#39;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>goThePath(item)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>appstore<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>{{ item.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-drawer</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">placement</span><span class="token operator">:</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">&#39;border-color: #167cf3;color: #167cf3;&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">pathList</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/index&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/job/tallSchool&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">11</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/needCenter&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">8</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">goThePath</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>path <span class="token operator">=</span> item<span class="token punctuation">.</span>path
            <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">path</span><span class="token operator">:</span> item<span class="token punctuation">.</span>path<span class="token punctuation">,</span>
                <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> item<span class="token punctuation">.</span>type <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">showBannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">goBack</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">showBannel</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>visible
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">onClose</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>path <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>path
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">.the-dot</span><span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">.the-dot</span><span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
   <span class="token selector">.go-back</span><span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #FFF<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
      <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 6px <span class="token function">rgb</span><span class="token punctuation">(</span>0 0 0 / 12%<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
      <span class="token property">z-index</span><span class="token punctuation">:</span> 1000000000<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span>
      <span class="token property">right</span><span class="token punctuation">:</span>10px
   <span class="token punctuation">}</span>

  <span class="token selector">.company-tab</span> <span class="token punctuation">{</span>
          <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
          <span class="token property">background</span><span class="token punctuation">:</span>#001529<span class="token punctuation">;</span>
          <span class="token property">padding-left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
  <span class="token selector">.tab</span><span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">padding-left</span><span class="token punctuation">:</span>30px<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span>10px 0<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span>white<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #001529<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span>40px<span class="token punctuation">;</span>
      <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
      <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.tab.active</span> <span class="token punctuation">{</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #167cf3<span class="token punctuation">;</span>
      <span class="token comment">/* background: rgba(0, 0, 0, 0.04); */</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.icon</span><span class="token punctuation">{</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span>10px
  <span class="token punctuation">}</span>
  <span class="token selector">&gt;&gt;&gt;.ant-drawer-body</span> <span class="token punctuation">{</span>
      <span class="token property">padding</span><span class="token punctuation">:</span>0
  <span class="token punctuation">}</span>
  <span class="token selector">&gt;&gt;&gt;.ant-drawer-wrapper-body</span> <span class="token punctuation">{</span>
      <span class="token property">background</span><span class="token punctuation">:</span>#001529<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">&gt;&gt;&gt;.ant-drawer-header</span> <span class="token punctuation">{</span>
     <span class="token property">background</span><span class="token punctuation">:</span>#001529<span class="token punctuation">;</span>
     <span class="token property">color</span><span class="token punctuation">:</span>white<span class="token punctuation">;</span>
     <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">&gt;&gt;&gt;.ant-drawer-title</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span>white
  <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="门户头部导航组件" tabindex="-1"><a class="header-anchor" href="#门户头部导航组件" aria-hidden="true">#</a> 门户头部导航组件</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav-list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>go(item)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>activePath==item.path?&#39;nav-item-active nav-item&#39;:&#39;nav-item&#39;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item,index) in navList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ item.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav-item-in-in<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.children <span class="token punctuation">&quot;</span></span>  <span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>goChild(item,itm)<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(itm,idx) in item.children<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>idx<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>50px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>display-center <span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ itm.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">navList</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;首页&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/index&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">isFrame</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;菜单2&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">isFrame</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;菜单3&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/index3&#39;</span><span class="token punctuation">,</span>
          <span class="token comment">// 有children的就是目录</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;内1&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/index31&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">isFrame</span><span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;内2&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/index32&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">isFrame</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否外链</span>
              <span class="token literal-property property">outUrl</span><span class="token operator">:</span> <span class="token string">&#39;http://www.baidu.com&#39;</span> <span class="token comment">// 外链地址</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;内3&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/index33&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">isFrame</span><span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;菜单4&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/index4&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">isFrame</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">outUrl</span><span class="token operator">:</span> <span class="token string">&#39;http://www.baidu.com&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">activePath</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// 选中的父节点</span>

    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>activePath <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>path
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">go</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>isFrame<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>outUrl<span class="token punctuation">,</span> <span class="token string">&#39;_blank&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>path<span class="token punctuation">)</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>activePath <span class="token operator">=</span> item<span class="token punctuation">.</span>path
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$forceUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$forceUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">goChild</span> <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> itm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>itm<span class="token punctuation">.</span>isFrame<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>itm<span class="token punctuation">.</span>outUrl<span class="token punctuation">,</span> <span class="token string">&#39;_blank&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>itm<span class="token punctuation">.</span>path<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$forceUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span>  <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.main</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>60px<span class="token punctuation">;</span>
    <span class="token comment">/* background: red; */</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.nav-list</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.nav-item</span><span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span>0 20px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>0 10px<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.nav-item:hover</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span>0 20px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span>#25AFF3<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.nav-item-active</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span>0 20px<span class="token punctuation">;</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span>2px solid #25AFF3<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span>#25AFF3<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.nav-item-in-in</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span><span class="token property">top</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span><span class="token property">left</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token property">background</span><span class="token punctuation">:</span> #E5E5E5<span class="token punctuation">;</span><span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span>16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.nav-item:hover  .nav-item-in-in</span><span class="token punctuation">{</span>

      <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>

  <span class="token punctuation">}</span>
  <span class="token selector">.child-path</span><span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
  <span class="token selector">.active-child-path</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span>#25AFF3<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>

  <span class="token punctuation">}</span>
  <span class="token selector">.display-center</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue3使用jsx" tabindex="-1"><a class="header-anchor" href="#vue3使用jsx" aria-hidden="true">#</a> vue3使用jsx</h2>`,7),Ss={href:"https://juejin.cn/post/7213356423810924581",target:"_blank",rel:"noopener noreferrer"},Vs={href:"https://juejin.cn/post/7151950058501373989?from=search-suggest",target:"_blank",rel:"noopener noreferrer"},Ps={href:"https://juejin.cn/post/7261604498924961829",target:"_blank",rel:"noopener noreferrer"},Cs={href:"https://zhuanlan.zhihu.com/p/375527289",target:"_blank",rel:"noopener noreferrer"},Es={href:"https://juejin.cn/post/7272308621710213161",target:"_blank",rel:"noopener noreferrer"},Ms={href:"https://mp.weixin.qq.com/s/DOBgFqHoupBcoRLngHFNUw",target:"_blank",rel:"noopener noreferrer"},As=e(`<p>想在项目中使用 JSX,我们需要安装一个插件<code>@vitejs/plugin-vue-jsx</code>,这个插件可以让我们在项目中使用 JSX/TSX</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i @vitejs/plugin-vue-jsx -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>vite.config.js(引入jsc)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> vueJsx <span class="token keyword">from</span> <span class="token string">&quot;@vitejs/plugin-vue-jsx&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">vueJsx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>setup语法糖内基本使用</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    jsx
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>jsxtests</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>jsxtests</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span>  <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tsx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// 引入外部样式文件，vue里面的style样式使用是不生效的</span>
<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">&#39;./jsx.module.css&#39;</span>
<span class="token keyword">const</span> msg<span class="token operator">=</span><span class="token string">&#39; i am msg&#39;</span>
<span class="token keyword">const</span> classNams<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span><span class="token string">&#39;blue&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> list<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> <span class="token function-variable function">jsxtests</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">color</span><span class="token operator">:</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span><span class="token string-property property">&quot;font-weight&quot;</span><span class="token operator">:</span><span class="token string">&#39;bold&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>msg<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span>classNams<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token number">12332432</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token comment">/* 这里的class使用的是外部样式文件里定义的类名,多个类名可以用数组 */</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>asc<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token number">12334</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token comment">// twillwind css 样式  （两个class，会被样式覆盖）</span>
        <span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span>tiao<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">&quot;bg-green-600&quot;</span>  <span class="token keyword">class</span><span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>asc<span class="token punctuation">}</span><span class="token operator">&gt;</span>jsx2跳转<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
            <span class="token punctuation">{</span>
               list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token string">&quot;index&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>  
            <span class="token punctuation">}</span>
           
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>jsx.module.css</p><p>(模块css,隔绝样式的污染，相当于style标签里面的scoped）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.asc{
    color:aqua
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS Modules 引入局部样式，相当于 vue 组件中 \`\` 标签的 scoped 属性。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import styles from &#39;./jsx.module.css&#39;
 &lt;div class={styles.asc}&gt;12334&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue使用tailwindcss" tabindex="-1"><a class="header-anchor" href="#vue使用tailwindcss" aria-hidden="true">#</a> vue使用Tailwindcss</h2>`,12),zs={href:"https://www.tailwindcss.cn/docs/width",target:"_blank",rel:"noopener noreferrer"},Ds={href:"https://juejin.cn/post/7042901516499288077",target:"_blank",rel:"noopener noreferrer"},Fs=n("p",null,"当有不知道的类可以直接到官网文档查看",-1),Rs={href:"https://juejin.cn/post/7228488937505030199",target:"_blank",rel:"noopener noreferrer"},Ls={href:"https://juejin.cn/post/7216990794942201913#heading-5",target:"_blank",rel:"noopener noreferrer"},Ts=e(`<p>安装依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i -D tailwindcss postcss autoprefixer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx tailwindcss init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>引入样式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// main.js
import &quot;tailwindcss/tailwind.css&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置tailwind.config.js文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>content: [&#39;./index.html&#39;, &#39;./src/**/*.{vue,js,ts,jsx,tsx}&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>vite.config.js增加配置(若不生效，则使用下一个方式)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>css: {
    postcss: {
        plugins: [require(&#39;tailwindcss&#39;), require(&#39;autoprefixer&#39;)],
    },
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若vite.config.js增加配置，tailwindcss并没有生效，则使用以下的配置</p><p>新建postcss.config.js,输入以下内容，查看样式生效。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
}  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &lt;div class=&quot;bg-green-600 w-20 h-12 font-semibold&quot;&gt;12345&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>vue3 同时使用 element plus 和 Tailwindcss 可能会出现样式冲突（例如el-button显示异常），此时一种解决方法是先引入 Tailwindcss ，然后再引入 element plus 的样式文件</strong></p><p>vscode 安装 Tailwind CSS IntelliSense 插件 ,没有提示功能，通过如下解决：</p><p>1 vscode点击设置</p><p>2 搜索 <code>editor.quickSuggestions</code></p><p>3 strings 改为 on</p><h2 id="权限" tabindex="-1"><a class="header-anchor" href="#权限" aria-hidden="true">#</a> 权限</h2><h3 id="按钮级别权限" tabindex="-1"><a class="header-anchor" href="#按钮级别权限" aria-hidden="true">#</a> 按钮级别权限</h3><p>通过自定义指令来实现</p>`,23),Bs={href:"https://juejin.cn/post/7320169878644113408?searchId=20240111091116F28599892BCAA27BF8FD",target:"_blank",rel:"noopener noreferrer"},Ns=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//  按钮权限--显示隐藏控制实现
Vue.directive(&#39;permission&#39;, {
// 在元素被插入到 DOM 中时触发
  inserted (el, binding) {
    let userInfo = localStorage.getItem(&#39;userInfo&#39;)
    let btnPermission = JSON.parse(userInfo).buttons //本地存储中取后端返回权限数据
    console.log(btnPermission)
    if (binding.value) {
    // 如果不包含绑定值，则从父节点中移除该元素
      if (!btnPermission.includes(binding.value)) {
        el.parentNode.removeChild(el)  // 移除元素
      }
    }
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vueuse" tabindex="-1"><a class="header-anchor" href="#vueuse" aria-hidden="true">#</a> vueUse</h2>`,2),Hs={href:"https://www.vueusejs.com/guide/",target:"_blank",rel:"noopener noreferrer"},Is=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i @vueuse/core
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在使用的页面引入需要的钩子就行(具体钩子查看官网)</p><p>index.vue</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>vueUse:useMouse:   x{{ x }}  y{{ y }}  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">{</span>  useMouse  <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> sourceType <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="源码-深入了解" tabindex="-1"><a class="header-anchor" href="#源码-深入了解" aria-hidden="true">#</a> 源码（深入了解）</h2>`,5),Us={href:"https://www.bilibili.com/video/BV1d4411v7UX/?vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"};function Os(Js,$s){const a=i("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[s("Vue CLI官方文档 - Babel配置"),t(a)])]),n("li",null,[n("a",d,[s("babel-plugin-transform-remove-console"),t(a)])])]),k,n("p",null,[n("a",v,[s("vue中修改props传进来的值_使用计算属性更新prop的值-CSDN博客"),t(a)])]),m,n("p",null,[n("a",b,[s("Vue内置组件的component标签-CSDN博客"),t(a)])]),g,n("p",null,[n("a",h,[s("(202条消息) vue实现登录后跳转到之前的页面_longzhoufeng的博客-CSDN博客"),t(a)])]),f,n("p",null,[s("官网： "),n("a",y,[s("安装 | Pinia 中文文档 (web3doc.top)"),t(a)])]),q,n("p",null,[n("a",x,[s("https://juejin.cn/post/6928468842377117709"),t(a)])]),n("p",null,[n("a",w,[s("https://juejin.cn/post/6994337441314242590#heading-15"),t(a)])]),n("p",null,[n("a",_,[s("https://juejin.cn/post/7087100496762109983#heading-16"),t(a)])]),n("p",null,[s("简明易懂："),n("a",j,[s("https://juejin.cn/post/7280007176776204327?searchId=2024011109491811B46B930D323378F7D4"),t(a)])]),S,n("p",null,[n("a",V,[s("https://juejin.cn/post/7078281612013764616#heading-0"),t(a)])]),P,n("p",null,[s("官网："),n("a",C,[s("https://pinia.vuejs.org/zh/introduction.html"),t(a)])]),E,n("p",null,[M,s(" 配套有个插件 "),n("a",A,[s("pinia-plugin-persist"),t(a)]),s("进行数据持久化，否则一刷新就会造成数据丢失")]),z,n("p",null,[s("页面全屏滚动很多用于官网首页，使用的频率还挺高的，此处的代码实现的功能是 鼠标滚动，页面切换，点击键盘的上下键，页面切换。类似效果看 "),n("a",D,[s(" 全屏滚动_jQuery之家-自由分享jQuery、html5、css3的插件库 (htmleaf.com)"),t(a)]),s(" ，以下内容改自 "),n("a",F,[s("vue实现全屏滚动，非fullpage.js-阿里云开发者社区 (aliyun.com)"),t(a)]),s(" 。")]),R,n("p",null,[n("a",L,[s("vue-router路由中对query中的参数进行加密_router 参数加密_前端_小学生的博客-CSDN博客"),t(a)])]),n("p",null,[n("a",T,[s("vue-router中传递的参数进行自动加密显示，组件中获取自动解密 (github.com)"),t(a)])]),B,N,n("p",null,[n("a",H,[s("https://mp.weixin.qq.com/s/pWsntJbJnBip5CbP7HkvFg"),t(a)])]),I,n("p",null,[n("a",U,[s("十分钟搭建 Vite+Vue3 项目模板 - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[n("a",O,[s("从 0 搭建 Vite 3 + Vue 3 前端工程化项目 - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[n("a",J,[s("Vue3+Element-plus前端学习笔记-巨长版 (qq.com)"),t(a)])]),$,n("p",null,[n("a",X,[s("SpringBoot 项目解决跨域的几种方案 - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[s("（vue3中使用消息提示 "),n("a",W,[s("vue3中使用element-plus调用message_element-plus message_"),t(a)]),s(" ）")]),G,n("p",null,[n("a",Y,[s("Vuex 更好的替代品 Pinia，真香 (qq.com)"),t(a)])]),K,n("p",null,[n("a",Q,[s("Vue 树形结构插件 vue2-org-tree - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[n("a",Z,[s("详解树状结构图 vue-org-tree - 知乎 (zhihu.com)"),t(a)])]),nn,n("p",null,[n("a",sn,[s("快速开始 | wangEditor"),t(a)]),s(" wangeditor有vue2,vue3,react的版本 "),n("a",an,[s("用于 Vue React | wangEditor"),t(a)])]),n("p",null,[n("a",tn,[s("在vue2中封装一个wangeditor组件_,也可以查看 ruoyi 里面的封装"),t(a)])]),en,n("p",null,[n("a",pn,[s("unplugin-vue-macros(github.com) "),t(a)])]),on,n("p",null,[n("a",cn,[s("几款优秀开源的HTML5 视频播放器 - 体验盒子 - 不再关注网络安全 (uedbox.com)"),t(a)])]),n("h4",ln,[un,s(),n("a",rn,[s("Vue3VideoPlay（vue3可用,效果好）"),t(a)])]),n("p",null,[n("a",dn,[s("Vue3-video-play视频播放器插件_视频播放插件-CSDN博客"),t(a)])]),kn,n("p",null,[s("解决："),n("a",vn,[s('VUE3+VITE:Failed to resolve entry for package “vue3-video-play“._failed to resolve entry for package "vue3-video-pl-CSDN博客'),t(a)])]),mn,n("p",null,[n("a",bn,[s("阿里云Aliplayer播放器 (alicdn.com)"),t(a)])]),gn,n("p",null,[n("a",hn,[s("西瓜播放器 | 快速上手 (bytedance.com)"),t(a)]),s(),n("a",fn,[s("vue3 集成西瓜视频播放器xgplayer_vue3 xiguaplay-CSDN博客"),t(a)])]),yn,qn,n("p",null,[n("a",xn,[s("MuiPlayer"),t(a)]),s(),n("a",wn,[s("vue + mui-player视频播放器_vue+muiplayer-CSDN博客"),t(a)])]),_n,n("p",null,[n("a",jn,[s("b站参考学习视频地址"),t(a)]),s(),n("a",Sn,[s("参考文章 vue组件库的基本开发步骤 "),t(a)])]),Vn,Pn,Cn,n("p",null,[n("a",En,[s("基于element-ui构建自定义组件库，发布到npm及安装使用，以及生成组件库说明文档 - 知乎 (zhihu.com)"),t(a)])]),Mn,n("p",null,[n("a",An,[s("图文结合简单易学的 npm 包的发布流程 (qq.com)"),t(a)])]),zn,n("p",null,[n("a",Dn,[s("pnpm 基本详细使用（安装、卸载、使用） - 掘金 (juejin.cn)"),t(a)])]),Fn,Rn,n("p",null,[n("a",Ln,[s("如何写一个属于自己的Vue3组件库 (qq.com)"),t(a)])]),n("p",null,[n("a",Tn,[s("【前端工程化-组件库】从0-1构建Vue3组件库（打包发布） - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[n("a",Bn,[s("前端工程化😼开源项目都在用的【Monorepo】🏋🏿 - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[n("a",Nn,[s("如何写一个属于自己的vue3组件库 - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[s("参考,可用："),n("a",Hn,[s("全肝鸽鸽 的个人主页 - 文章 - 掘金 (juejin.cn)"),t(a)]),s(),n("a",In,[s("GitHub - yuanwen0327/learn-create-compoents-lib"),t(a)])]),n("p",null,[n("a",Un,[s("一文读懂TS的(.d.ts)文件 - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[n("a",On,[s("从0到1搭建自己的组件库，详解附源码 - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[n("a",Jn,[s("Monorepo pnpm模式管理多个web项目（Vue3） - 掘金 (juejin.cn)"),t(a)])]),$n,n("p",null,[s("官网查看："),n("a",Xn,[s("组件 v-model | Vue.js (vuejs.org)"),t(a)])]),Wn,n("p",null,[n("a",Gn,[s("https://cn.vuejs.org/guide/introduction.html"),t(a)])]),n("p",null,[n("a",Yn,[s("快速使用Vue3最新的15个常用API - 掘金 (juejin.cn)"),t(a)])]),Kn,n("p",null,[s("用 "),n("a",Qn,[Zn,s(" 函数"),t(a)]),s(" 来简化上面的代码。"),ns,s(" 允许我们自动跟踪回调的响应式依赖")]),ss,n("p",null,[s("我们可以用 "),n("a",as,[ts,t(a)]),s(" 和 "),n("a",es,[ps,t(a)]),s(" API 来重构我们现有的实现：")]),n("p",null,[os,s(" 是一个在 3.3 版本中新增的 API。它的设计目的是将 ref 或 getter 规范化为值。如果参数是 ref，它会返回 ref 的值；如果参数是函数，它会调用函数并返回其返回值。否则，它会原样返回参数。它的工作方式类似于 "),n("a",cs,[is,t(a)]),s("，但对函数有特殊处理。")]),ls,n("p",null,[s("即便不依赖于 ref 或 getter 的响应性，组合式函数也可以接收它们作为参数。如果你正在编写一个可能被其他开发者使用的组合式函数，最好处理一下输入参数是 ref 或 getter 而非原始值的情况。可以利用 "),n("a",us,[rs,t(a)]),s(" 工具函数来实现：")]),ds,n("p",null,[n("a",ks,[s("示例地址"),t(a)])]),vs,n("p",null,[n("a",ms,[s("Vue3组合式API：getCurrentInstance_vue3 getcurrentinstance-CSDN博客"),t(a)])]),bs,gs,n("p",null,[n("a",hs,[s("vue3+vite打包视图分析(rollup-plugin-visualizer)+gzip - 掘金 (juejin.cn)"),t(a)])]),fs,n("p",null,[n("a",ys,[s("【vite 4.3 + vue 3.2 项目优化实战】配置 CDN 服务 - 掘金 (juejin.cn)"),t(a)])]),qs,n("p",null,[n("a",xs,[s("Vue和React对比学习之路由角色权限(页面、按钮权限控制) - 掘金 (juejin.cn)"),t(a)])]),ws,n("p",null,[n("a",_s,[s("如何在Vue.js中创建模态框(弹出框) (qq.com)"),t(a)])]),js,n("p",null,[n("a",Ss,[s("如何在 vue3 中使用 jsx/tsx? - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[n("a",Vs,[s("在 vue3 中优雅的使用 jsx/tsx - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[n("a",Ps,[s("在Vue3中利用JSX+函数式组件做到更好的代码复用 - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[n("a",Cs,[s("JSX 设置样式 - 知乎 (zhihu.com)"),t(a)])]),n("p",null,[n("a",Es,[s("万字长文详解 Vue JSX，带你全面拥抱 JSX 特性！-讲述了jsx的优点 - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[n("a",Ms,[s("一起玩转Vue中的JSX：让你一次性掌握它的特性! 微信公众平台 (qq.com)"),t(a)])]),As,n("p",null,[s("官方文档： "),n("a",zs,[s("Width - TailwindCSS中文文档 | TailwindCSS中文网"),t(a)])]),n("p",null,[n("a",Ds,[s("一次就能看懂的Tailwind CSS介绍 - 掘金 (juejin.cn)"),t(a)])]),Fs,n("p",null,[n("a",Rs,[s("在vite-vue3中快速使用Tailwindcss - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[n("a",Ls,[s("Vue中使用 Tailwind CSS - 掘金 (juejin.cn)"),t(a)])]),Ts,n("p",null,[n("a",Bs,[s("https://juejin.cn/post/7320169878644113408?searchId=20240111091116F28599892BCAA27BF8FD"),t(a)])]),Ns,n("p",null,[n("a",Hs,[s("起步 | VueUse中文文档 (vueusejs.com)"),t(a)])]),Is,n("p",null,[n("a",Us,[s("尤雨溪教你写vue 高级vue教程 源码分析 中文字幕翻译完毕_哔哩哔哩_bilibili"),t(a)])])])}const Gs=p(l,[["render",Os],["__file","4.html.vue"]]);export{Gs as default};
