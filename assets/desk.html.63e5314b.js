import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,a as n,b as s,e,f as t,r as c}from"./app.b2a6a20c.js";const l={},u=n("h1",{id:"知识拓展-electron-微前端",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#知识拓展-electron-微前端","aria-hidden":"true"},"#"),s(" 知识拓展(electron,微前端)")],-1),r=n("h2",{id:"electron",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#electron","aria-hidden":"true"},"#"),s(" electron")],-1),d={href:"https://www.bilibili.com/video/BV1QB4y1F722?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.kaka996.com/pages/8ef798/",target:"_blank",rel:"noopener noreferrer"},v=t(`<h3 id="创建electron项目" tabindex="-1"><a class="header-anchor" href="#创建electron项目" aria-hidden="true">#</a> 创建electron项目</h3><p>1 electron/electron-quick-start 官网示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Clone this repository
git clone https://github.com/electron/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 electron forge</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm init electron-app@latest my-app -- --template=webpack
cd my-app
npm start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn create electron-app my-app --template=webpack
cd my-app
yarn start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>适用electron forge安装时报错：
An unhandled rejection has occurred inside Forge:
Error: Could not find any Electron packages in devDependencies
解决方法，安装electron依赖
cnpm install --save-dev electron   // 不安装这个依赖会报错，报错后要加上
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注释掉 src/index.js 的 mainWindow.webContents.openDevTools(); 关闭打开窗口默认打开 devtools</p><h3 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h3>`,9),m={href:"https://www.electronjs.org/zh/docs/latest/api/app#apprequestsingleinstancelockadditionaldata",target:"_blank",rel:"noopener noreferrer"},b=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*生命周期
ready  应用程序初始化完成
browser-window-created   窗口创建完成触发
before-quit  窗口关闭之前
wi11-quit  窗口关闭了但是程序还没有关闭，即将关闭
quit  应用程序关闭触发
app.on(&quot;ready&quot;,()=&gt;{})

app.whenReady().then(()=&gt;{})  和ready的生命周期相同，promise实现的

requestSingleInstanceLock()  true 或 false 禁止多开
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包" tabindex="-1"><a class="header-anchor" href="#打包" aria-hidden="true">#</a> 打包</h3><p>1 当适用 electron forge 时</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;scripts&quot;: {
        &quot;start&quot;: &quot;electron-forge start&quot;,
        &quot;package&quot;: &quot;electron-forge package&quot;,
        &quot;make&quot;: &quot;electron-forge make&quot;,
        &quot;publish&quot;: &quot;electron-forge publish&quot;,
        &quot;lint&quot;: &quot;echo \\&quot;No linting configured\\&quot;&quot;
    },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行yarn make 即可打包程序（很慢，在下载东西）</p>`,5),g={href:"https://blog.csdn.net/michaelxuzhi___/article/details/106568543",target:"_blank",rel:"noopener noreferrer"},h=t(`<p>最好有github加速服务，不然很容易打包失败。</p><p>生成out目录，里面有打包出的文件</p><p>2 （我使用的这种，上面的速度实在太慢）可以下载 electron-builder 依赖，注意 electron-builder 只能放置在 devDependencies 中</p><p>package.json中加入如下命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;scripts&quot;: {
        &quot;app:dist&quot;: &quot;electron-builder&quot;
    },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行 npm run app:dist 执行打包命令 （依然有打包下载文件的速度慢问题，加速才能下载下来）</p><p>生成dist目录，里面有打包好的文件</p><p>3 第一次打包时下载的文件存放在C:\\Users\\张帆\\AppData\\Local\\electron\\Cache目录下</p>`,8),f={href:"https://wwmj.lanzoue.com/b02ef6w8d",target:"_blank",rel:"noopener noreferrer"},y=t(`<h3 id="index-js" tabindex="-1"><a class="header-anchor" href="#index-js" aria-hidden="true">#</a> index.js</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> app<span class="token punctuation">,</span> BrowserWindow <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;electron&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Handle creating/removing shortcuts on Windows when installing/uninstalling.</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;electron-squirrel-startup&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">quit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">createWindow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// Create the browser window.</span>
    <span class="token keyword">const</span> mainWindow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrowserWindow</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
        <span class="token literal-property property">webPreferences</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">preload</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;preload.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token comment">// 这个参数加上使 electron 浏览器的js支持node</span>
            <span class="token literal-property property">nodeIntegration</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token comment">//  要在渲染进程里调用 require 的话， 还需要加上 contextIsolation: false</span>
            <span class="token literal-property property">contextIsolation</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// and load the index.html of the app.</span>
    mainWindow<span class="token punctuation">.</span><span class="token function">loadFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Open the DevTools.</span>
    mainWindow<span class="token punctuation">.</span>webContents<span class="token punctuation">.</span><span class="token function">openDevTools</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;ready&#39;</span><span class="token punctuation">,</span> createWindow<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;window-all-closed&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>platform <span class="token operator">!==</span> <span class="token string">&#39;darwin&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        app<span class="token punctuation">.</span><span class="token function">quit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;activate&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>BrowserWindow<span class="token punctuation">.</span><span class="token function">getAllWindows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">createWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现读取文件功能" tabindex="-1"><a class="header-anchor" href="#实现读取文件功能" aria-hidden="true">#</a> 实现读取文件功能</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>holder<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>💖文件拖拽到这里<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>read<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>读取的内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fs<span class="token punctuation">)</span>

<span class="token keyword">let</span> holder <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#holder&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> read <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#read&quot;</span><span class="token punctuation">)</span>
holder<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;drop&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//取消默认事件</span>
    e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//阻止冒泡</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> file <span class="token keyword">of</span> e<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span>files<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token string">&quot;文件路径&quot;</span><span class="token punctuation">,</span> file<span class="token punctuation">.</span>path<span class="token punctuation">)</span>
        fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>path<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> newDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
                newDiv<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;h2&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>file<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/h2&gt;
                    &lt;pre&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/pre&gt;
                    </span><span class="token template-punctuation string">\`</span></span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span> newDiv<span class="token punctuation">)</span>
                read<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>newDiv<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
holder<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;dragover&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//取消默认事件</span>
    e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//阻止冒泡</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webview操作和使用" tabindex="-1"><a class="header-anchor" href="#webview操作和使用" aria-hidden="true">#</a> webview操作和使用</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- webview嵌入的网页 所有 target 为 _blank 的 a 标签点击都没反应，这是因为 webview 默认不允许打开新窗口，需要设置 allowpopups 属性才行 --&gt;</span>
    <span class="token comment">&lt;!-- nodeintegration。 当有此属性时, webview 中的访客页（guest page）将具有Node集成, 并且可以使用像 require 和 process 这样的node APIs 去访问低层系统资源。 Node
    集成在访客页中默认是禁用的。 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>webview</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wview<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.baidu.com<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>640px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>480px</span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">allowpopups</span> <span class="token attr-name">nodeintegration</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>webview</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>electron中直接使用，宽高不生效，要在index.js中加配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const mainWindow = new BrowserWindow({
            // 加入 webviewTag:true 可以使 webview 标签起效果，否则宽高不生效
            webviewTag:true
        },
    });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">var</span> webview <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;wview&quot;</span><span class="token punctuation">)</span>
    webview<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;dom-ready&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;正在加载中&quot;</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>webview<span class="token punctuation">)</span>
        <span class="token comment">// webview里有很多的方法，用于获取webview的元素并修改内嵌的webview,在https://www.electronjs.org/zh/docs/latest/api/webview-tag#webviewexecutejavascriptcode-usergesture 查看相关方法，</span>
        webview<span class="token punctuation">.</span><span class="token function">insertCSS</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">#su{background:red!important;}</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span> <span class="token comment">//百度网页搜索按钮显示红色</span>
        <span class="token comment">// executeJavaScript执行的js必须是字符串</span>
        webview<span class="token punctuation">.</span><span class="token function">executeJavaScript</span><span class="token punctuation">(</span>
            <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
            setTimeout(() =&gt;{
            console.log(&#39;123&#39;)
            let input = document.querySelector(&#39;#kw&#39;)
            let btn = document.querySelector(&#39;#su&#39;)
            input.value = &quot;搜索内容&quot;
            btn.click()
            }, 1000)
            </span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>   <span class="token comment">// 百度搜索框值为 搜索内容 ，点击按钮搜索</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="主进程和渲染进程通讯" tabindex="-1"><a class="header-anchor" href="#主进程和渲染进程通讯" aria-hidden="true">#</a> 主进程和渲染进程通讯</h3><p>index.js （主进程）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const { app, BrowserWindow, ipcMain } = require(&#39;electron&#39;);

// 监听渲染进程发送过来的lc-message事件
ipcMain.on(&quot;lc-message&quot;, (event, arg) =&gt; {
    event.reply(&#39;lc-reply&#39;, &quot;这个是主进程的答复&quot;)
    console.log(arg)

})

const createWindow = () =&gt; {
    //主动的发消息给渲染进程，不显示时可以加一个定时器延后执行
    mainWindow.webContents.send(&#39;lc-active&#39;, &quot;创建窗口之后，主进程主动发送数据给到渲染进&quot;)
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.html script （子进程）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
    let {
        ipcRenderer
    } = require(&quot;electron&quot;);
    ipcRenderer.on(&quot;lc-active&quot;, (event, arg) =&gt; {
            console.log(event)
            console.log(arg)
        })
        //主动发送消息给主进程
    ipcRenderer.send(&#39;lc-message&#39;, &quot;子进程给主进程发送数据&quot;)
    ipcRenderer.on(&#39;lc-reply&#39;, (event, arg) =&gt; {
        console.log(event)
        console.log(arg)
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：以上的&quot;lc-message&quot;，lc-reply，&#39;lc-active&#39;都是自己起的名字，可以自定义。</p><p>通过主进程和渲染进程通讯实现点击按钮，打开新窗口</p><p>index.html</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button id=&quot;open-new&quot;&gt;打开新窗口&lt;/button&gt;

&lt;script&gt;
    let {
        ipcRenderer
    } = require(&quot;electron&quot;);

    var openNew = document.querySelector(&quot;#open-new&quot;)
    openNew.addEventListener(&quot;click&quot;, () =&gt; {
            ipcRenderer.send(&#39;openNew&#39;)
        })

&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> app<span class="token punctuation">,</span> BrowserWindow<span class="token punctuation">,</span> ipcMain <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;electron&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 监听渲染进程发送过来的openNew事件.打开新窗口</span>
ipcMain<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;openNew&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> arg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">cWindow</span><span class="token punctuation">(</span><span class="token string">&quot;http://www.baidu.com&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 重写打开新窗口的函数</span>
<span class="token keyword">const</span> <span class="token function-variable function">cWindow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// Create the browser window.</span>
    <span class="token keyword">const</span> mainWindow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrowserWindow</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span>
        <span class="token literal-property property">webPreferences</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 浏览器的js支持node</span>
            <span class="token literal-property property">nodeIntegration</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token comment">//  要在渲染进程里调用 require 的话， 还需要加上 contextIsolation: false</span>
            <span class="token literal-property property">contextIsolation</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token comment">// 加入 webviewTag:true 可以使 webview 标签起效果，否则宽高不生效</span>
            <span class="token literal-property property">webviewTag</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">preload</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;preload.js&#39;</span><span class="token punctuation">)</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    mainWindow<span class="token punctuation">.</span><span class="token function">loadURL</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dialog弹出框" tabindex="-1"><a class="header-anchor" href="#dialog弹出框" aria-hidden="true">#</a> dialog弹出框</h3><p>index.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> app<span class="token punctuation">,</span> BrowserWindow<span class="token punctuation">,</span> ipcMain<span class="token punctuation">,</span> dialog <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;electron&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">createWindow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mainWindow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrowserWindow</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">600</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//  打开一个文件选择框</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">//openFile允许选择文件</span>
        <span class="token comment">//openDirectory允许选择文件夹</span>
        <span class="token comment">//multiSelection允许多选</span>
        <span class="token comment">//showHiddenFiles显示隐藏文件</span>
        <span class="token comment">//createDirectory允许创建文件夹</span>
        dialog<span class="token punctuation">.</span><span class="token function">showOpenDialog</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;openFile&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;multiSelections&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>filePaths<span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>canceled<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>

    <span class="token comment">// 点击叉号，弹框确认是否关闭</span>
    mainWindow<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;close&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        dialog<span class="token punctuation">.</span><span class="token function">showMessageBox</span><span class="token punctuation">(</span>mainWindow<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;warning&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">tit1e</span><span class="token operator">:</span> <span class="token string">&quot;关闭&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;是否要关闭窗口？&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">buttons</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;取消&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;残酷关闭&quot;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
            <span class="token comment">// res.response显示buttons的编号</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>response <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 程序退出</span>
                app<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自带的请求模块" tabindex="-1"><a class="header-anchor" href="#自带的请求模块" aria-hidden="true">#</a> 自带的请求模块</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const { net } = require(&#39;electron&#39;);

一定要在ready之后执行
 let request = net.request(&#39;https://taobao.com&#39;)
    request.on(&#39;response&#39;, (response) =&gt; {
        console.log(response.statusCode)
        console.log(JSON.stringify(response.headers))
        response.on(&#39;data&#39;, (chunk) =&gt; {
            console.log(chunk.toString())
        })
    })
    request.end()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="electron-vue-不维护-打包报错-不推荐使用了" tabindex="-1"><a class="header-anchor" href="#electron-vue-不维护-打包报错-不推荐使用了" aria-hidden="true">#</a> electron-vue（不维护，打包报错，不推荐使用了）</h3>`,27),w={href:"https://simulatedgreg.gitbooks.io/electron-vue/content/cn/",target:"_blank",rel:"noopener noreferrer"},_=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 安装 vue-cli 和 脚手架样板代码
npm install -g vue-cli
vue init simulatedgreg/electron-vue my-project

# 安装依赖并运行你的程序
cd my-project
yarn # 或者 npm install
yarn run dev # 或者 npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 当运行 npm run dev 报错 Object.fromEntries is not a function electron-vue报错，</p>`,2),x={href:"https://blog.csdn.net/y_k_1_2_3_4/article/details/126479427",target:"_blank",rel:"noopener noreferrer"},q=t(`<p>安装polyfill-object.fromentries，在项目根目录执行命令</p><p>npm <strong>i</strong> polyfill-<strong>object</strong>.fromentries</p><p>在 .electron-vue/dev-client.js 引入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// const hotClient = require(&#39;webpack-hot-middleware/client?noInfo=true&amp;reload=true&#39;)
import &#39;polyfill-object.fromentries&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="electron-vue-build-打包的坑" tabindex="-1"><a class="header-anchor" href="#electron-vue-build-打包的坑" aria-hidden="true">#</a> electron-vue build 打包的坑</h3>`,5),j={href:"https://www.jianshu.com/p/55d0e5b6c085",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.cnblogs.com/leestar54/p/12781591.html#electron-vue%E8%84%9A%E6%89%8B%E6%9E%B6",target:"_blank",rel:"noopener noreferrer"},E=n("p",null,"（打包问题很多）",-1),M=n("h3",{id:"ant-design-vue",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ant-design-vue","aria-hidden":"true"},"#"),s(" ant design vue")],-1),W=n("p",null,"下载导入 ant-design-vue 报错",-1),D={href:"https://blog.csdn.net/qq_52855464/article/details/126255813",target:"_blank",rel:"noopener noreferrer"},I=t(`<p>原因： <strong>ant- design-vue 版本过高</strong></p><p>卸载当前版本 ： npm uninstall ant-design-vue</p><p>安装先前版本：cnpm install ant-design-vue@1.7.2</p><h3 id="electron解决跨域问题-请求数据" tabindex="-1"><a class="header-anchor" href="#electron解决跨域问题-请求数据" aria-hidden="true">#</a> electron解决跨域问题（请求数据）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在electron-vue创建的项目中，在目录src/main/index,js中增加配置


mainWindow = new BrowserWindow({
        height: 563,
        useContentSize: true,
        width: 1000,
        webPreferences: {
            nodeIntegration: true, //是否集成node
            webSecurity: false   // 设置跨域问题
        }
    })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 路由写法和vue的写法一样，但如果使用require引入的话注意后面的.default不能漏

routes: [{
            path: &#39;/&#39;,
            name: &#39;landing-page&#39;,
            component: require(&#39;@/components/LandingPage&#39;).default
        }, , {
            path: &#39;/detail&#39;,
            name: &#39;detail&#39;,
            component: () =&gt; import (&#39;@/components/detail/index&#39;) 
                // component: require(&#39;@/components/detail&#39;).default
        },
        {
            path: &#39;*&#39;,
            redirect: &#39;/&#39;
        }
    ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="搭建vue-electron应用-推荐这种构建" tabindex="-1"><a class="header-anchor" href="#搭建vue-electron应用-推荐这种构建" aria-hidden="true">#</a> 搭建vue+Electron应用（推荐这种构建）</h3><p><strong>(搭建electron项目，简单快捷,推荐)</strong></p><p>通过脚手架创建一个vue项目</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> vue create vue-electron 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加<code>vue-cli-plugin-electron-builder</code>插件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> vue add vue-cli-plugin-electron-builder 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装成功之后，就可以运行或打包了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run electron:serve
npm run electron:build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>vue.config.js(去除eslint保存验证)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
    lintOnSave: false
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="electron自定义菜单" tabindex="-1"><a class="header-anchor" href="#electron自定义菜单" aria-hidden="true">#</a> electron自定义菜单</h3>`,18),V={href:"https://juejin.cn/post/7209826725365645369#heading-1",target:"_blank",rel:"noopener noreferrer"},C=n("h4",{id:"顶部菜单栏",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#顶部菜单栏","aria-hidden":"true"},"#"),s(" 顶部菜单栏")],-1),A={href:"https://www.misterma.com/archives/896/",target:"_blank",rel:"noopener noreferrer"},B=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: true
        // frame: false,  // frame设置标题栏的显示和隐藏，自定义标题栏设置为true
    })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 新建 menu.js 配置自定义的菜单栏，内容如下</span>


<span class="token comment">// 1. 引入Electron中的Menu模块</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>
    Menu
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;electron&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. 创建一个菜单数组</span>
<span class="token keyword">let</span> menuTemplate <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// 一级菜单</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;文件&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 二级菜单 submenu</span>
        <span class="token literal-property property">submenu</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;新建&quot;</span><span class="token punctuation">,</span>
                <span class="token comment">// 给菜单绑定点击事件</span>
                <span class="token function-variable function">click</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Ctrl + N&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">// 给菜单绑定快捷键，可能有一些快捷键是电脑自带的快捷键，设置了可能不行 比如 ctrl + c</span>
                <span class="token literal-property property">accelerator</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+n&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;编辑&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;操作&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">submenu</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// 系统自带的快捷键需要借助 role 属性来绑定</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;复制&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">role</span><span class="token operator">:</span> <span class="token string">&quot;copy&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 使用分隔符不同label之间有一条横线</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;separator&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;粘贴&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">role</span><span class="token operator">:</span> <span class="token string">&quot;paste&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;查看&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">submenu</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;显示工具栏&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;checkbox&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">checked</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token function">click</span><span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 输出选中状态</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ev<span class="token punctuation">.</span>checked <span class="token operator">?</span> <span class="token string">&#39;已选中&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;未选中&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;显示状态栏&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;checkbox&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">checked</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token function">click</span><span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 输出选中状态</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ev<span class="token punctuation">.</span>checked <span class="token operator">?</span> <span class="token string">&#39;已选中&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;未选中&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;主题配色风格&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">submenu</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;亮色&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;radio&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">checked</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token function">click</span><span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>ev<span class="token punctuation">.</span>checked<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Light&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;暗色&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;radio&#39;</span><span class="token punctuation">,</span>
          <span class="token function">click</span><span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>ev<span class="token punctuation">.</span>checked<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Dark&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;高对比度&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;radio&#39;</span><span class="token punctuation">,</span>
          <span class="token function">click</span><span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>ev<span class="token punctuation">.</span>checked<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;High contrast&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 3. 用于构建MenuItem</span>
<span class="token keyword">let</span> menuBuilder <span class="token operator">=</span> Menu<span class="token punctuation">.</span><span class="token function">buildFromTemplate</span><span class="token punctuation">(</span>menuTemplate<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 4. setApplicationMenu 在macOS上将 menu设置成应用内菜单 在windows和Linux上，menu 将会被设置成窗口顶部菜单</span>
Menu<span class="token punctuation">.</span><span class="token function">setApplicationMenu</span><span class="token punctuation">(</span>menuBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 5. 主进程中引入 menu.js , 运行electron</span>
<span class="token comment">//  background.js文件中</span>
<span class="token keyword">import</span> <span class="token string">&quot;./js/menu&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启electron项目，可以看到菜单栏已变成自定义的了。</p><h4 id="侧边菜单栏" tabindex="-1"><a class="header-anchor" href="#侧边菜单栏" aria-hidden="true">#</a> 侧边菜单栏</h4>`,4),T={href:"https://xie.infoq.cn/article/ba9f61c8506c9b67f6b34de06",target:"_blank",rel:"noopener noreferrer"},R={href:"https://www.electronjs.org/zh/docs/latest/api/menu",target:"_blank",rel:"noopener noreferrer"},z=t(`<p>主进程中background.js/main.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">,</span>
    protocol<span class="token punctuation">,</span>
    BrowserWindow<span class="token punctuation">,</span>
    ipcMain<span class="token punctuation">,</span>
    Menu
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;electron&#39;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">createWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> win <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrowserWindow</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
        <span class="token comment">// frame: false, // 去掉默认的标题栏</span>

        <span class="token literal-property property">webPreferences</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">nodeIntegration</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">contextIsolation</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token literal-property property">webSecurity</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 设置跨域问题</span>
            <span class="token literal-property property">enableRemoteModule</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">WEBPACK_DEV_SERVER_URL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">await</span> win<span class="token punctuation">.</span><span class="token function">loadURL</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">WEBPACK_DEV_SERVER_URL</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">IS_TEST</span><span class="token punctuation">)</span> win<span class="token punctuation">.</span>webContents<span class="token punctuation">.</span><span class="token function">openDevTools</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">createProtocol</span><span class="token punctuation">(</span><span class="token string">&#39;app&#39;</span><span class="token punctuation">)</span>
        win<span class="token punctuation">.</span><span class="token function">loadURL</span><span class="token punctuation">(</span><span class="token string">&#39;app://./index.html&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">//  主要是通过主进程的通讯来实现   ipcMain</span>
    ipcMain<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;show-context-menu&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> template <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Menu Item 1&#39;</span><span class="token punctuation">,</span>
                <span class="token function-variable function">click</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    event<span class="token punctuation">.</span>sender<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;context-menu-command&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;menu-item-1&#39;</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;separator&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Menu Item 2&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;checkbox&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">checked</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
        <span class="token keyword">const</span> menu <span class="token operator">=</span> Menu<span class="token punctuation">.</span><span class="token function">buildFromTemplate</span><span class="token punctuation">(</span>template<span class="token punctuation">)</span>
        menu<span class="token punctuation">.</span><span class="token function">popup</span><span class="token punctuation">(</span>BrowserWindow<span class="token punctuation">.</span><span class="token function">fromWebContents</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>sender<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue项目中不能在vue项目中直接引入 ipcRenderer ，否则报错</p><p>1 在<code>public</code>文件夹下可以创建一个<code>static</code>文件夹，然后创建<code>renderer.js</code>文件，渲染进程的一部分需要调用<code>electron</code>的代码可以放在这里。</p><p>2 此 js 文件要引入<code>public</code>的 index.html 文件当中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// public/static/renderer.js

const {
    ipcRenderer
} = require(&#39;electron&#39;);
window.ipcRenderer = ipcRenderer;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3 index.html引入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script src=&quot;./static/renderer.js&quot;&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4 渲染进程发送信息给主进程，打开菜单栏，如果全局使用，可以直接放在 public/static/renderer.js 文件里，</p><p>页面单独使用，可以放在vue文件的mounted里执行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
window.addEventListener(&#39;contextmenu&#39;, (e) =&gt; {
    //e.preventDefault()阻止默认事件
    e.preventDefault()
    // 向主进程发送信息
    window.ipcRenderer.send(&#39;show-context-menu&#39;)
})

window.ipcRenderer.on(&#39;context-menu-command&#39;, (e, command) =&gt; {
    // ...
    console.log(&quot;e&quot;, e)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="系统托盘" tabindex="-1"><a class="header-anchor" href="#系统托盘" aria-hidden="true">#</a> 系统托盘</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">,</span>
    protocol<span class="token punctuation">,</span>
    BrowserWindow<span class="token punctuation">,</span>
    ipcMain<span class="token punctuation">,</span>
    Menu<span class="token punctuation">,</span>
    Tray
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;electron&#39;</span>

<span class="token comment">// 打开electron，发现系统托盘的图标过一段时间后会自动消失    因为当声明Tray模块中的变量时，没有将其声明为全局变量，导致在运行过程中，会被垃圾回收机制回收掉。所以在ready之前定义tray变量</span>
<span class="token keyword">let</span> tray <span class="token operator">=</span> <span class="token keyword">null</span>
app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;ready&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isDevelopment <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">IS_TEST</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Install Vue Devtools</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">await</span> <span class="token function">installExtension</span><span class="token punctuation">(</span><span class="token constant">VUEJS_DEVTOOLS</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;Vue Devtools failed to install:&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">createWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    tray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tray</span><span class="token punctuation">(</span><span class="token string">&#39;dot.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    tray<span class="token punctuation">.</span><span class="token function">setToolTip</span><span class="token punctuation">(</span><span class="token string">&#39;This is my application&#39;</span><span class="token punctuation">)</span>
    tray<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&#39;This is my title&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> contextMenu <span class="token operator">=</span> Menu<span class="token punctuation">.</span><span class="token function">buildFromTemplate</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Item1&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Item2&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Item3&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Item4&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>

    tray<span class="token punctuation">.</span><span class="token function">setContextMenu</span><span class="token punctuation">(</span>contextMenu<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="窗口设置" tabindex="-1"><a class="header-anchor" href="#窗口设置" aria-hidden="true">#</a> 窗口设置</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> win <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrowserWindow</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
    
        <span class="token literal-property property">resizable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//规定窗口是否可以改变尺寸默认是true</span>
        <span class="token literal-property property">maxWidth</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">maxHeight</span><span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span>
        <span class="token literal-property property">minWidth</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
        <span class="token literal-property property">minHeight</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
    
    	<span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//设置窗口是否显示 默认true</span>
    
        <span class="token literal-property property">webPreferences</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">nodeIntegration</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">contextIsolation</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 页面白屏解决：设置show: false,在ready-to-show时触发一次win.show()</span>
win<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">&#39;ready-to-show&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ready-to-show&#39;</span><span class="token punctuation">)</span>
        win<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//控制窗口的显示</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 设置窗口显示位置（x,y显示坐标）</span>
    win<span class="token punctuation">.</span><span class="token function">setBounds</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">500</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    win<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;show&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          mainWin<span class="token punctuation">.</span><span class="token function">maximize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//窗口最大化，把maxWidth，maxHeight等注释掉才行</span>
            <span class="token comment">// minimize() //窗口最小化</span>
            <span class="token comment">// close() </span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调用摄像头" tabindex="-1"><a class="header-anchor" href="#调用摄像头" aria-hidden="true">#</a> 调用摄像头</h3><p>摄像头被占用会报错（Could not start video source） 关闭占用的软件即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button @click=&quot;init&quot;&gt;打开摄像头&lt;/button&gt;
&lt;div&gt;
  &lt;video id=&quot;video&quot; ref=&quot;myVideo&quot; muted autoplay &gt;&lt;/video&gt;

&lt;/div&gt;

&lt;script&gt;

  export default{
    mounted(){
      this.init()
    },
    methods:{
      async init(){
        const stream= await navigator.mediaDevices.getUserMedia({
          video:{
            width:1000,
            height:600
          }
         })
        console.log(&quot;stream&quot;,stream)
          this.$refs.myVideo.srcObject=stream
          this.$refs.myVideo.play()
        
      }
    }
  }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调用屏幕内容" tabindex="-1"><a class="header-anchor" href="#调用屏幕内容" aria-hidden="true">#</a> 调用屏幕内容</h3><p>只要更改stream的获取即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const stream= await navigator.mediaDevices.getDisplayMedia({video:true})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="屏幕录制和播放" tabindex="-1"><a class="header-anchor" href="#屏幕录制和播放" aria-hidden="true">#</a> 屏幕录制和播放</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myVideo<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">autoplay</span> <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">c1ass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>startRecord<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>升始录制<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stop<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stop<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>停止录制<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>play<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>play<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>播放<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>playVideo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autoplay</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

  <span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">{</span>
        <span class="token literal-property property">stream</span><span class="token operator">:</span><span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">recordInstance</span><span class="token operator">:</span><span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">blobSlice</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token keyword">async</span> <span class="token function">startRecord</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>stream<span class="token operator">=</span> <span class="token keyword">await</span> navigator<span class="token punctuation">.</span>mediaDevices<span class="token punctuation">.</span><span class="token function">getUserMedia</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
             <span class="token comment">// 加上audio: true可以录制音频</span>
          <span class="token literal-property property">audio</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">video</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span><span class="token number">1000</span><span class="token punctuation">,</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span><span class="token number">600</span>
          <span class="token punctuation">}</span>
         <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>myVideo<span class="token punctuation">.</span>srcObject<span class="token operator">=</span><span class="token keyword">this</span><span class="token punctuation">.</span>stream
        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>myVideo<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token comment">// MediaRecorder查看 https://developer.mozilla.org/zh-CN/docs/Web/API/MediaRecorder</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>recordInstance <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">MediaRecorder</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>stream<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">mimeType</span><span class="token operator">:</span><span class="token string">&#39;video/webm&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot; this.recordInstance&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>recordInstance <span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>recordInstance<span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>recordInstance<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token comment">//https://developer.mozilla.org/zhCN/docs/Web/API/MediaRecorder/dataavailable_event</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>recordInstance<span class="token punctuation">.</span><span class="token function-variable function">ondataavailable</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>blobSlice<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
   
          <span class="token keyword">this</span><span class="token punctuation">.</span>recordInstance<span class="token punctuation">.</span><span class="token function-variable function">onstop</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>blobSlice<span class="token punctuation">,</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token comment">//  这里调用sttop会触发this.recordInstance.ondataavailable和this.recordInstance.onstop里面的内容</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>recordInstance<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> blob <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>blobSlice<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&#39;video/mp4&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> videoUrl <span class="token operator">=</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>videoUrl<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>playVideo<span class="token punctuation">.</span>src<span class="token operator">=</span>videoUrl
        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>playVideo<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    


  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="微前端" tabindex="-1"><a class="header-anchor" href="#微前端" aria-hidden="true">#</a> 微前端</h2><h3 id="微前端的发展历程" tabindex="-1"><a class="header-anchor" href="#微前端的发展历程" aria-hidden="true">#</a> 微前端的发展历程：</h3><p>微前端是一种新兴的软件开发架构，其概念最早由英国的监控和诊断领域的专家于2016年提出。微前端是一种将前端应用分解为一系列小型、独立的前端应用，并采用微服务的架构理念进行开发和部署的方式。</p><p>微前端的发展历程可以分为以下几个阶段：</p><ol><li>起步阶段：在这个阶段，微前端的理念开始被提出，但还没有得到广泛的应用和推广。</li><li>探索阶段：随着前端开发领域的不断发展和应用，越来越多的开发者和团队开始意识到传统的大型单体前端应用的局限性，开始尝试采用微前端的架构进行开发。</li><li>成熟阶段：在这个阶段，微前端的架构理念和开发方式已经得到了广泛的应用和认可，越来越多的企业和团队开始采用微前端进行开发，同时也出现了越来越多的微前端工具和框架。</li></ol><p>微前端的发展前景：</p><p>随着前端开发领域的不断发展和应用，微前端作为一种新兴的架构理念，其前景是广阔的。未来，随着更多的企业和团队采用微前端进行开发，微前端的架构理念和开发方式将会得到更加广泛的应用和推广。同时，随着技术的发展和市场的变化，微前端也将面临更多的挑战和机遇。</p><p>总之，微前端作为一种新兴的软件开发架构，其发展前景是广阔的。未来，随着技术的不断发展和市场的不断变化，微前端将会得到更加广泛的应用和推广。对于对前端开发感兴趣的人来说，微前端是一个值得关注和深入研究的领域。</p><p>微前端就是将前端应用分解成一些更小,更简单的,能够独立开发,测试,部署的小模块,而在用户看来仍然是一个整体的产品技术或者思想</p>`,32),N={href:"https://juejin.cn/column/7117245118465179661",target:"_blank",rel:"noopener noreferrer"},L={href:"https://juejin.cn/column/7132658057464512519",target:"_blank",rel:"noopener noreferrer"},P={href:"https://zhuanlan.zhihu.com/p/556422347",target:"_blank",rel:"noopener noreferrer"},O={href:"https://www.yuque.com/kuitos/gky7yw/uohnpu4ddkgf4vt5",target:"_blank",rel:"noopener noreferrer"},U={href:"https://zhuanlan.zhihu.com/p/355419817",target:"_blank",rel:"noopener noreferrer"},J={href:"https://juejin.cn/post/7090352489223946271#heading-22",target:"_blank",rel:"noopener noreferrer"},H={href:"https://mp.weixin.qq.com/s/SE_nHEDeXVO47YJdA086dg",target:"_blank",rel:"noopener noreferrer"},F=n("h3",{id:"javascript-沙箱",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#javascript-沙箱","aria-hidden":"true"},"#"),s(" JavaScript 沙箱")],-1),$=n("p",null,"沙箱（Sandbox）是一种用于隔离正在运行程序的安全机制，通常用于执行未经测试或不受信任的程序或代码，它会为待执行的程序创建一个独立的执行环境，内部程序的执行不会影响到外部程序的运行。",-1),Q=n("p",null,"利用沙箱，来防止代码对全局产生影响。",-1),K={href:"https://juejin.cn/post/7148335784431468551",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://juejin.cn/post/6991025700077568030",target:"_blank",rel:"noopener noreferrer"},G=n("h3",{id:"css样式隔离",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#css样式隔离","aria-hidden":"true"},"#"),s(" css样式隔离")],-1),X={href:"https://juejin.cn/post/7243681100005212221",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://juejin.cn/post/7281113851713257487#heading-10",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://juejin.cn/post/7036282734293024799#heading-2",target:"_blank",rel:"noopener noreferrer"},sn=n("h3",{id:"html-entry",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#html-entry","aria-hidden":"true"},"#"),s(" html-entry")],-1),an=n("p",null,"qiankun 框架使用的html-entry，single-spa使用的Js Entry",-1),en={href:"https://blog.csdn.net/daihaoxin/article/details/106250617",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://michaeljier.cn/blog/html-entry",target:"_blank",rel:"noopener noreferrer"},pn=n("h3",{id:"umd",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#umd","aria-hidden":"true"},"#"),s(" umd")],-1),on={href:"https://juejin.cn/post/6844903927104667662",target:"_blank",rel:"noopener noreferrer"},cn=n("h3",{id:"web-components",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#web-components","aria-hidden":"true"},"#"),s(" web components")],-1),ln={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components",target:"_blank",rel:"noopener noreferrer"},un=n("p",null,"Web Components 由三项主要技术组成，它们可以一起使用来创建封装功能的定制元素，可以在你喜欢的任何地方重用，不必担心代码冲突。",-1),rn=n("li",null,[n("strong",null,"Custom element（自定义元素）"),s("：一组 JavaScript API，允许你定义 custom elements 及其行为，然后可以在你的用户界面中按照需要使用它们。")],-1),dn=n("li",null,[n("strong",null,"Shadow DOM（影子 DOM）"),s("：一组 JavaScript API，用于将封装的“影子”DOM 树附加到元素（与主文档 DOM 分开呈现）并控制其关联的功能。通过这种方式，你可以保持元素的功能私有，这样它们就可以被脚本化和样式化，而不用担心与文档的其他部分发生冲突。")],-1),kn=n("strong",null,"HTML template（HTML 模板）：",-1),vn={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/slot",target:"_blank",rel:"noopener noreferrer"},mn=n("p",null,"Web Components是如何做到微前端：",-1),bn=n("ol",null,[n("li",null,"技术栈无关：Web Components是浏览器原生组件，那即是在任何框架中都可以使用。"),n("li",null,"独立开发：使用Web Components开发的应用无需与其他应用间产生任何关联。"),n("li",null,"应用间隔离： Shadow DOM的特性，各个引入的微应用间可以达到相互隔离的效果。")],-1),gn={href:"https://caniuse.com/",target:"_blank",rel:"noopener noreferrer"},hn={href:"https://juejin.cn/post/7309477710523269174",target:"_blank",rel:"noopener noreferrer"},fn=t(`<h3 id="路由通信-如何使用vuex实现微前端的路由通信" tabindex="-1"><a class="header-anchor" href="#路由通信-如何使用vuex实现微前端的路由通信" aria-hidden="true">#</a> 路由通信（如何使用vuex实现微前端的路由通信）</h3><p>在微前端架构中，使用 Vuex 实现路由通信可以帮助不同微应用之间进行状态管理和数据共享。下面是一个使用 Vuex 实现微前端路由通信的基本步骤：</p><ol><li><strong>创建 Vuex Store</strong>：首先，在主应用中创建一个 Vuex Store，用于管理全局状态。可以使用 <code>Vue.use(Vuex)</code> 来安装 Vuex 插件，并创建一个包含 state、mutations、actions 等的 store 实例。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>  
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span><span class="token punctuation">;</span>  
  
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>  
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
    <span class="token comment">// 定义全局状态  </span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>  
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
    <span class="token comment">// 定义修改状态的方法  </span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>  
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
    <span class="token comment">// 定义异步操作  </span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><strong>共享 Vuex Store</strong>：将创建的 Vuex Store 共享给各个微应用。这可以通过在主应用中将 store 实例导出，并在微应用中导入实现。</li></ol><p>在主应用中导出 store：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>javascript复制代码

<span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在微应用中导入 store：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>javascript复制代码

<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;path/to/store&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 替换为实际的 store 路径</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><strong>在微应用中使用 Vuex</strong>：在微应用中，可以通过导入的 Vuex Store 访问全局状态和执行状态变更。可以使用 <code>mapState</code>、<code>mapMutations</code>、<code>mapActions</code> 等辅助函数简化代码。</li></ol><p>在微应用的组件中使用 Vuex：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mapState<span class="token punctuation">,</span> mapMutations <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span><span class="token punctuation">;</span>  
  
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>  
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
    <span class="token comment">// 使用 mapState 映射全局状态到组件计算属性  </span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;globalState&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>  
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
    <span class="token comment">// 使用 mapMutations 映射 mutations 方法到组件方法  </span>
    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;updateGlobalState&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>  
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><strong>路由通信</strong>：在微应用中，可以使用 Vue Router 进行路由管理。当路由发生变化时，可以通过 Vuex 进行通信和状态更新。可以在路由守卫（如 <code>beforeEach</code>）中派发 Vuex action，或者在组件中监听路由变化并执行相应的操作。</li></ol><p>在路由守卫中派发 Vuex action：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 导入路由配置  </span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 导入 Vuex Store  </span>
  
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  
  <span class="token comment">// 根据路由变化派发相应的 Vuex action  </span>
  store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;updateRoute&#39;</span><span class="token punctuation">,</span> to<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在组件中监听路由变化并执行操作：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>  
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
    <span class="token string-property property">&#39;$route&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
      <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token comment">// 监听路由变化，执行相应的操作，如更新状态或请求数据等  </span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateData</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">;</span>  
      <span class="token punctuation">}</span><span class="token punctuation">,</span>  
      <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 立即执行一次监听回调函数  </span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>  
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
    <span class="token function">updateData</span><span class="token punctuation">(</span><span class="token parameter">route</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
      <span class="token comment">// 根据路由变化更新数据或执行其他操作  </span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>  
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过以上步骤，你可以使用 Vuex 实现微前端的路由通信。请注意，在实际应用中，你可能需要根据具体需求进行适当的调整和优化。</p><h2 id="iframe" tabindex="-1"><a class="header-anchor" href="#iframe" aria-hidden="true">#</a> iframe</h2><p>采用iframe的方案确实可以做到，而且优点非常明显</p><p>优点</p><ul><li>非常简单，使用没有任何心智负担</li><li>web应用隔离的非常完美，无论是js、css、dom都完全隔离开来</li><li>由于其隔离的太完美导致缺点也非常明显</li></ul><p>缺点</p><ol><li>url 不同步。浏览器刷新 iframe url 状态丢失、后退前进按钮无法使用。</li><li>UI 不同步，DOM 结构不共享。想象一下屏幕右下角 1/4 的 iframe 里来一个带遮罩层的弹框，同时我们要求这个弹框要浏览器居中显示，还要浏览器 resize 时自动居中..</li><li>全局上下文完全隔离，内存变量不共享。iframe 内外系统的通信、数据同步等需求，主应用的 cookie 要透传到根域名都不同的子应用中实现免登效果。</li><li>慢。每次子应用进入都是一次浏览器上下文重建、资源重新加载的过程。</li></ol><h2 id="qiankun-微前端" tabindex="-1"><a class="header-anchor" href="#qiankun-微前端" aria-hidden="true">#</a> qiankun 微前端</h2>`,25),yn={href:"https://qiankun.umijs.org/zh/guide/getting-started#%E4%B8%BB%E5%BA%94%E7%94%A8",target:"_blank",rel:"noopener noreferrer"},wn={href:"https://juejin.cn/post/7121515637624537119#heading-16",target:"_blank",rel:"noopener noreferrer"},_n={href:"https://gitee.com/qiaoba_1/qiankun-demo",target:"_blank",rel:"noopener noreferrer"},xn=t(`<p>乾坤微前端框架的实现原理主要包括以下几个方面：</p><ol><li>基于单-spa进行封装：单-spa是一个用于前端微服务化的JavaScript框架，提供了生命周期管理、路由管理等核心功能。乾坤微前端框架在此基础上进行封装，提供了更加开箱即用的API，让接入微应用如同使用iframe一样简单。</li><li>沙箱隔离：乾坤微前端框架使用沙箱隔离技术，将每个子应用的JavaScript代码包裹在单独的作用域中，实现各个子应用之间的运行环境隔离。这样可以防止子应用之间的代码相互干扰，保证各个子应用的独立性和安全性。</li><li>CSS隔离：乾坤微前端框架使用shadow dom，这是浏览器支持的特性，shadow root下的dom的样式不会影响其他dom的样式。这样可以实现CSS的隔离，保证各个子应用之间的样式独立，避免样式冲突。</li><li>全局变量代理：为了防止子应用修改全局变量导致其他子应用受影响，乾坤微前端框架使用Proxy对全局变量进行代理，防止子应用直接修改全局变量。这样可以保证全局变量的安全性和一致性。</li><li>消息通信机制：乾坤微前端框架提供全局API和props等方式进行数据共享，同时也支持使用自定义事件或者pub/sub等方式实现消息通信。这样可以实现各个子应用之间的数据共享和通信，提高系统的灵活性和可维护性。</li><li>路由管理和资源加载：乾坤微前端框架会根据路由或者菜单等方式来决定加载哪些子应用，并负责资源的加载和缓存管理。这样可以提高系统的性能和响应速度，同时也方便开发者对系统进行管理和维护。</li><li>资源预加载：乾坤微前端框架在浏览器空闲时间预加载未打开的微应用资源，加速微应用打开速度。这样可以提高用户体验和系统性能。</li></ol><p>综上所述，乾坤微前端框架通过封装单-spa框架、使用沙箱隔离技术、CSS隔离、全局变量代理、消息通信机制、路由管理和资源加载以及资源预加载等实现原理，实现了多个子应用的协同工作，每个子应用都可以独立开发、部署。同时保证了各个子应用之间的安全性和一致性，提高了系统的性能和响应速度，方便了开发和维护工作。</p><ul><li>基于single-spa封装，提供了更加开箱即用的 API</li><li>技术栈无关，任意技术栈的应用均可 使用/接入，不论是 React/Vue/Angular/JQuery 还是其他等框架</li><li>HTML Entry 接入方式，让你接入微应用像使用 iframe 一样简单</li><li>样式隔离，确保微应用之间样式互相不干扰</li><li>JS 沙箱，确保微应用之间 全局变量/事件 不冲突</li><li>资源预加载，在浏览器空闲时间预加载未打开的微应用资源，加速微应用打开速度</li><li>umi 插件，提供了 @umijs/plugin-qiankun 供 umi 应用一键切换成微前端架构系统 除了最后一点拓展以外，微前端想要达到的效果都已经达到。</li></ul><h3 id="主应用-vue搭建" tabindex="-1"><a class="header-anchor" href="#主应用-vue搭建" aria-hidden="true">#</a> 主应用（vue搭建）：</h3><p>安装qiankun： npm <strong>i</strong> qiankun -S</p><p>在主应用页面上增加一个 显示子应用页面的容器</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 主应用内容 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span> |
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>About<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- 子应用显示的容器 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vue-son-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改入口文件 <code>main.js</code> ，通过 qiankun(乾坤) 的 registerMicroApps 和 start 方法注册子应用并启动。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> registerMicroApps<span class="token punctuation">,</span> start <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;qiankun&#39;</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  router<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

<span class="token comment">/* 确保装载子应用的容器已创建，等DOM加载完成后启动子应用 */</span>
vueApp<span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 注册子应用 */</span>
  <span class="token function">registerMicroApps</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token doc-comment comment">/**
     * name: 子应用名称 - 子应用之间必须确保唯一
     * entry: 子应用入口 - 通过该地址加载微应用
     * container: 子应用挂载节点 - 子应用加载完成后将挂载在该节点上
     * activeRule: 子应用触发的路由规则 - 触发路由规则后将加载该子应用
     */</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;vue-son-container&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">entry</span><span class="token operator">:</span><span class="token string">&#39;//localhost:8081/about&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">container</span><span class="token operator">:</span><span class="token string">&#39;#vue-son-container&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">activeRule</span><span class="token operator">:</span><span class="token string">&#39;/app-son-vue&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 启动子应用</span>
  <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子应用-vue搭建" tabindex="-1"><a class="header-anchor" href="#子应用-vue搭建" aria-hidden="true">#</a> 子应用（vue搭建）：</h3><p>首先，在 Vue 子应用的 <code>src</code> 目录下新增 <code>public-path.js</code></p><p>如果子应用出现静态资源地址404(js、css、图片)，建议设置<code>publicPath</code>来尝试解决这个问题。</p>`,13),qn=n("code",null,"publicPath",-1),jn={href:"https://webpack.docschina.org/guides/public-path/#on-the-fly",target:"_blank",rel:"noopener noreferrer"},Sn=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>入口文件 <code>main.js</code> 修改，为了避免根 id <code>#app</code> 与其他的 DOM 冲突，需要限制查找范围。 （main.js）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> routes <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>

Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">let</span> router <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> container <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>
  router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> window<span class="token punctuation">.</span>__POWERED_BY_QIANKUN__ <span class="token operator">?</span> <span class="token string">&#39;/app-son-vue/&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 官方建议路由模式为histroy</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span>
    routes<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    router<span class="token punctuation">,</span>
    store<span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span>container <span class="token operator">?</span> container<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 独立运行时</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>__POWERED_BY_QIANKUN__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;进入vue app 子应用的bootstrap周期&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">mount</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;进入vue app 子应用的mount周期&#39;</span><span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">render</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">unmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;进入vue app 子应用的unmount周期&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  instance<span class="token punctuation">.</span><span class="token function">$destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  instance<span class="token punctuation">.</span>$el<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  router <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),En={href:"https://blog.csdn.net/qq_40259641/article/details/125501246",target:"_blank",rel:"noopener noreferrer"},Mn=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// const { name } = require(&#39;./package&#39;);
const name=&quot;vue-son-container&quot;
module.exports = {
  devServer: {
    headers: {
      &#39;Access-Control-Allow-Origin&#39;: &#39;*&#39;,
    },
  },
  configureWebpack: {
    output: {
      library: \`\${name}-[name]\`,
      libraryTarget: &#39;umd&#39;, // 把微应用打包成 umd 库格式,否则报错
      jsonpFunction: \`webpackJsonp_\${name}\`,
    },
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="micro-app-微前端" tabindex="-1"><a class="header-anchor" href="#micro-app-微前端" aria-hidden="true">#</a> Micro App 微前端</h2><p><code>single-spa</code>是通过监听 url change 事件，在路由变化时匹配到渲染的子应用并进行渲染，这个思路也是目前实现微前端的主流方式。同时<code>single-spa</code>要求子应用修改渲染逻辑并暴露出三个方法：<code>bootstrap</code>、<code>mount</code>、<code>unmount</code>，分别对应初始化、渲染和卸载，这也导致子应用需要对入口文件进行修改。因为<code>qiankun</code>是基于<code>single-spa</code>进行封装，所以这些特点也被<code>qiankun</code>继承下来，并且需要对webpack配置进行一些修改。</p><p><code>micro-app</code>并没有沿袭<code>single-spa</code>的思路，而是借鉴了WebComponent的思想，通过CustomElement结合自定义的ShadowDom，将微前端封装成一个类WebComponent组件，从而实现微前端的组件化渲染。并且由于自定义ShadowDom的隔离特性，<code>micro-app</code>不需要像<code>single-spa</code>和<code>qiankun</code>一样要求子应用修改渲染逻辑并暴露出方法，也不需要修改webpack配置，是目前市面上接入微前端成本最低的方案。</p>`,4),Wn={href:"https://micro-zoe.github.io/micro-app/docs.html#/",target:"_blank",rel:"noopener noreferrer"},Dn=n("p",null,"pnpm + Micro App 来实现 monorepo 微前端项目",-1),In={href:"https://www.zhihu.com/question/338082919",target:"_blank",rel:"noopener noreferrer"},Vn={href:"https://juejin.cn/post/7070153633739833375",target:"_blank",rel:"noopener noreferrer"},Cn={href:"https://github.com/micro-zoe/micro-app-demo",target:"_blank",rel:"noopener noreferrer"},An={href:"https://segmentfault.com/a/1190000044240323#item-2",target:"_blank",rel:"noopener noreferrer"},Bn=t(`<p>vue项目微前端搭建注意点：</p><p>1 子应用要设置跨域支持</p><p>​ （1） vue.config.js配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
    devServer: {
      headers: {
        &#39;Access-Control-Allow-Origin&#39;: &#39;*&#39;,
      }
    }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ （2）vite默认开启跨域支持，不需要额外配置。</p>`,5),Tn=n("code",null,"切换到iframe沙箱",-1),Rn={href:"https://micro-zoe.github.io/micro-app/docs.html#/zh-cn/framework/vite?id=%E5%88%87%E6%8D%A2%E5%88%B0iframe%E6%B2%99%E7%AE%B1",target:"_blank",rel:"noopener noreferrer"},zn=t(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>micro-app</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>xxx<span class="token punctuation">&#39;</span></span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>xxx<span class="token punctuation">&#39;</span></span> <span class="token attr-name">iframe</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>micro-app</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="无界-微前端" tabindex="-1"><a class="header-anchor" href="#无界-微前端" aria-hidden="true">#</a> 无界 微前端</h2><p>iframe+Web Components</p>`,3),Nn={href:"https://wujie-micro.github.io/doc/",target:"_blank",rel:"noopener noreferrer"},Ln={href:"https://wujie-micro.github.io/demo-main-vue/home",target:"_blank",rel:"noopener noreferrer"},Pn=n("p",null,"无界demo创建： npx create-wujie@latest 运行报错",-1),On={href:"https://github.com/Tencent/wujie",target:"_blank",rel:"noopener noreferrer"},Un={href:"https://juejin.cn/post/7244070072788287544?searchId=20231205100904B22A5A44F31159B751ED#heading-15",target:"_blank",rel:"noopener noreferrer"},Jn={href:"https://juejin.cn/post/7212603829572911159?searchId=20231205100904B22A5A44F31159B751ED#heading-8",target:"_blank",rel:"noopener noreferrer"},Hn={href:"https://juejin.cn/post/7212597327578808380#heading-3",target:"_blank",rel:"noopener noreferrer"},Fn=t(`<h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用：</h3><p>打开一个终端并使用以下命令创建一个新的<code>wujie demo</code> 示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Create a new wujie-app project   自己根据需要选择生成
npx create-wujie@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),$n={href:"https://wujie-micro.github.io/doc/pack/",target:"_blank",rel:"noopener noreferrer"},Qn=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;WujieVue
  width=&quot;100%&quot;
  height=&quot;100%&quot;
  name=&quot;xxx&quot;
  :url=&quot;xxx&quot;
  :sync=&quot;true&quot;
  :fetch=&quot;fetch&quot;
  :props=&quot;props&quot;
  :beforeLoad=&quot;beforeLoad&quot;
  :beforeMount=&quot;beforeMount&quot;
  :afterMount=&quot;afterMount&quot;
  :beforeUnmount=&quot;beforeUnmount&quot;
  :afterUnmount=&quot;afterUnmount&quot;
&gt;&lt;/WujieVue&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="微前端注意事项" tabindex="-1"><a class="header-anchor" href="#微前端注意事项" aria-hidden="true">#</a> 微前端注意事项：</h2><h3 id="路由懒加载-无界遇到" tabindex="-1"><a class="header-anchor" href="#路由懒加载-无界遇到" aria-hidden="true">#</a> 路由懒加载（无界遇到）</h3><p>当微前端里面嵌套微前端应用地址时，例如无界里面引入了乾坤的网址，需要注意组件异步加载的问题。子组件使用懒加载之后可能路由跳转报错。（如果发生路由跳转失败时，可以尝试将路由懒加载改成普通加载）</p><h3 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h3><p>微前端的子应用都应该设置好跨域问题</p>`,6);function Kn(Yn,Gn){const a=c("ExternalLinkIcon");return o(),i("div",null,[u,r,n("p",null,[s("学习视频地址："),n("a",d,[s("https://www.bilibili.com/video/BV1QB4y1F722?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11"),e(a)])]),n("p",null,[s("相关技术 electron-egg: "),n("a",k,[s("介绍 | electron-egg (kaka996.com)"),e(a)])]),v,n("p",null,[s("官网 api "),n("a",m,[s("app | Electron (electronjs.org)"),e(a)])]),b,n("p",null,[s("打包超时可以看这个 "),n("a",g,[s("(195条消息) 解决electron打包时，下载超时导致失败_michaelxuzhi___的博客-CSDN博客"),e(a)])]),h,n("p",null,[s("下载文件为 "),n("a",f,[s("https://wwmj.lanzoue.com/b02ef6w8d"),e(a)]),s(" 密码:7ylu")]),y,n("p",null,[n("a",w,[s("简介 · electron-vue (gitbooks.io)"),e(a)])]),_,n("p",null,[s("解决： "),n("a",x,[s("(196条消息) Object.fromEntries is not a function electron-vue报错_24k唇动的博客-CSDN博客"),e(a)])]),q,n("p",null,[n("a",j,[s("electron-vue build的坑 - 简书 (jianshu.com)"),e(a)])]),n("p",null,[n("a",S,[s("基于Electron搭建跨平台应用程序 - leestar54 - 博客园 (cnblogs.com)"),e(a)])]),E,M,W,n("p",null,[s("解决： "),n("a",D,[s("(196条消息) Uncaught TypeError: (0 , vue__WEBPACK_IMPORTED_MODULE_3__.createVNode) is not a function_潮汐未见潮落的博客-CSDN博客"),e(a)])]),I,n("p",null,[n("a",V,[s("Electron 中的原生菜单 - 掘金 (juejin.cn)"),e(a)])]),C,n("p",null,[s("菜单栏部分配置可查看 "),n("a",A,[s("Electron 编写菜单栏 - Mr. Ma's Blog (misterma.com)"),e(a)])]),B,n("p",null,[s("借鉴 "),n("a",T,[s("vue + electronの文件读写_Electron_空城机_InfoQ写作社区"),e(a)]),s(),n("a",R,[s("Menu | Electron (electronjs.org)"),e(a)])]),z,n("p",null,[s("微前端介绍："),n("a",N,[s("https://juejin.cn/column/7117245118465179661"),e(a)])]),n("p",null,[n("a",L,[s("微前端系列 - 三门的专栏 - 掘金 (juejin.cn)"),e(a)])]),n("p",null,[n("a",P,[s("一文读懂5种微前端常用方案 - 知乎 (zhihu.com)"),e(a)])]),n("p",null,[n("a",O,[s("Cloudflare Workers 和微前端：为彼此而生 (yuque.com)"),e(a)])]),n("p",null,[n("a",U,[s("探索微前端的场景极限 - 知乎 (zhihu.com)"),e(a)])]),n("p",null,[s("介绍17个可以实现微前端的方案："),n("a",J,[s("https://juejin.cn/post/7090352489223946271#heading-22"),e(a)])]),n("p",null,[n("a",H,[s("微前端时代：打造高效、灵活的前端开发体系"),e(a)])]),F,$,Q,n("p",null,[n("a",K,[s("浅析 JavaScript 沙箱 - 掘金 (juejin.cn)"),e(a)])]),n("p",null,[n("a",Y,[s("实现 JavaScript 沙箱的几种方式 - 掘金 (juejin.cn)"),e(a)])]),G,n("p",null,[n("a",X,[s("微前端中常见的几种CSS隔离实现方案 - 掘金 (juejin.cn)"),e(a)])]),n("p",null,[n("a",Z,[s("微前端 一、CSS隔离 - 掘金 (juejin.cn)"),e(a)])]),n("p",null,[n("a",nn,[s("【css作用域】scoped css和css module的区别 - 掘金 (juejin.cn)"),e(a)])]),sn,an,n("p",null,[n("a",en,[s("JavaScript读源码系列--微前端之import-html-entry-CSDN博客"),e(a)])]),n("p",null,[n("a",tn,[s("为什么HTML Entry > JS Entry (michaeljier.cn)"),e(a)])]),pn,n("p",null,[n("a",on,[s("可能是最详细的UMD模块入门指南 - 掘金 (juejin.cn)"),e(a)])]),cn,n("p",null,[n("a",ln,[s("Web Component - Web API 接口参考 | MDN (mozilla.org)"),e(a)])]),un,n("ul",null,[rn,dn,n("li",null,[kn,s(" [` 和 "),n("a",vn,[s("``"),e(a)]),s(" 元素使你可以编写不在呈现页面中显示的标记模板。然后它们可以作为自定义元素结构的基础被多次重用。")])]),mn,bn,n("p",null,[n("strong",null,[s("Web Components是有能力以组件加载的方式将微应用整合在一起作为微前端的一种手段，但不幸的是，Web Components是浏览器的新特性，所以它的兼容性不是很好，如果有兼容性要求的项目还是无法使用，具体请查看can i use："),n("a",gn,[s("Can I use... Support tables for HTML5, CSS3, etc"),e(a)]),s("。")])]),n("p",null,[n("a",hn,[s("三大微前端框架，哪个才是你的理想型？ - 掘金 (juejin.cn)"),e(a)])]),fn,n("p",null,[s("官网："),n("a",yn,[s("快速上手 - qiankun (umijs.org)"),e(a)])]),n("p",null,[s("参考："),n("a",wn,[s("基于qiankun（乾坤）的微前端实践总结 - 掘金 (juejin.cn)"),e(a)]),s(),n("a",_n,[s("qiankun-demo: 基于qiankun（乾坤）框架的微前端实践demo (gitee.com)"),e(a)])]),xn,n("p",null,[qn,s("是webpack提供的功能，它可以补全静态资源的地址，详情参考webpack文档 "),n("a",jn,[s("publicPath"),e(a)])]),Sn,n("p",null,[s("子应用 vue.config.js配置如下代码，否则会报错，错误和原因 应该是 application ‘xxx‘ died in status LOADING_SOURCE_CODE: "),n("a",En,[s("qiankun] You need to export lifecycle functio_喜樂的CC的博客-CSDN博客"),e(a)])]),Mn,n("p",null,[s("官网："),n("a",Wn,[s("介绍 (micro-zoe.github.io)"),e(a)])]),Dn,n("p",null,[n("a",In,[s("https://www.zhihu.com/question/338082919"),e(a)])]),n("p",null,[s("Demo : "),n("a",Vn,[s("MicroApp样例搭建【Vue】 - 掘金 (juejin.cn)"),e(a)])]),n("p",null,[s("官方案例："),n("a",Cn,[s("GitHub - micro-zoe/micro-app-demo: micro-app 案例"),e(a)])]),n("p",null,[n("a",An,[s("浅入深出的微前端MicroApp | 京东云技术团队 - 京东云技术新知 - SegmentFault 思否"),e(a)])]),Bn,n("p",null,[s("2 vite作为子应用需"),Tn,s("，否则不显示，其它操作参考各框架接入文档。 "),n("a",Rn,[s("切换到iframe沙箱"),e(a)])]),zn,n("p",null,[s("官网："),n("a",Nn,[s("https://wujie-micro.github.io/doc/"),e(a)])]),n("p",null,[s("demo 预览地址： "),n("a",Ln,[s("https://wujie-micro.github.io/demo-main-vue/home"),e(a)])]),Pn,n("p",null,[s("github demo 下载："),n("a",On,[s("https://github.com/Tencent/wujie"),e(a)]),s(" 正常运行")]),n("p",null,[s("深入调研了微前端，还是iframe最香:"),n("a",Un,[s("https://juejin.cn/post/7244070072788287544?searchId=20231205100904B22A5A44F31159B751ED#heading-15"),e(a)])]),n("p",null,[n("a",Jn,[s("https://juejin.cn/post/7212603829572911159?searchId=20231205100904B22A5A44F31159B751ED#heading-8"),e(a)])]),n("p",null,[n("a",Hn,[s("假如你是『无界』微前端框架的开发者 - 掘金 (juejin.cn)"),e(a)])]),Fn,n("p",null,[s("组件使用参考： "),n("a",$n,[s("Vue组件封装 | 无界 (wujie-micro.github.io)"),e(a)])]),Qn])}const ns=p(l,[["render",Kn],["__file","desk.html.vue"]]);export{ns as default};
