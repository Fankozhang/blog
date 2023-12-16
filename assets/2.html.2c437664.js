import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as o,a as n,b as s,e,f as t,r as c}from"./app.303a4afd.js";const l={},r=n("h1",{id:"node",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#node","aria-hidden":"true"},"#"),s(" Node")],-1),u=n("h2",{id:"node基础",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#node基础","aria-hidden":"true"},"#"),s(" node基础")],-1),d={href:"https://www.bilibili.com/video/BV1gM411W7ex?p=11&spm_id_from=pageDriver&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},v={href:"https://pan.baidu.com/s/1sDOMvUdY9UF3mlJ7ujOADg?pwd=s3wj#list/path=%2Fsharelink1212623117-214795209934346%2F%E5%B0%9A%E7%A1%85%E8%B0%B7NodeJS%E6%A0%B8%E5%BF%83%E5%9F%BA%E7%A1%80&parentPath=%2Fsharelink1212623117-214795209934346",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.aliyundrive.com/drive/folder/6432d0e9ee78f413bcef4618bc195ac9068e1e36",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"学习node-express-koa",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#学习node-express-koa","aria-hidden":"true"},"#"),s(" 学习node,express，koa")],-1),b={href:"https://www.bilibili.com/video/BV13A411w79h/?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/jj112358/node-api",target:"_blank",rel:"noopener noreferrer"},h={href:"https://gitee.com/fankozhang/my-node",target:"_blank",rel:"noopener noreferrer"},f={href:"https://nodejs.cn/express/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/Introduction",target:"_blank",rel:"noopener noreferrer"},y={href:"https://juejin.cn/post/7303463043249635362",target:"_blank",rel:"noopener noreferrer"},q=t(`<h2 id="node-express创建使用" tabindex="-1"><a class="header-anchor" href="#node-express创建使用" aria-hidden="true">#</a> node+express创建使用</h2><h3 id="项目初始化" tabindex="-1"><a class="header-anchor" href="#项目初始化" aria-hidden="true">#</a> 项目初始化</h3><p><code>pnpm init</code></p><h3 id="下载express依赖" tabindex="-1"><a class="header-anchor" href="#下载express依赖" aria-hidden="true">#</a> 下载express依赖</h3><p><code>pnpm install express</code></p><h3 id="根目录创建-app-js" tabindex="-1"><a class="header-anchor" href="#根目录创建-app-js" aria-hidden="true">#</a> 根目录创建 app.js</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const express = require(&#39;express&#39;)
const app = express()

const port = 3000

app.get(&#39;/&#39;, (req, res) =&gt; {
    res.send(&#39;Hello World yes!&#39;)
})

app.listen(port, () =&gt; {
    console.log(\`server running at http://127.0.0.1:\${port}\`)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cors解决跨域" tabindex="-1"><a class="header-anchor" href="#cors解决跨域" aria-hidden="true">#</a> cors解决跨域</h3><h5 id="利用中间件-cors" tabindex="-1"><a class="header-anchor" href="#利用中间件-cors" aria-hidden="true">#</a> 利用中间件 cors</h5><p>安装 npm i cors -S</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const  cors = require(&#39;cors&#39;)
 app.use(cors())
 app.listen(8000, function () {
   console.log(\`server running at http://127.0.0.1:\${port}\`)
 })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装和访问mysql" tabindex="-1"><a class="header-anchor" href="#安装和访问mysql" aria-hidden="true">#</a> 安装和访问MySQL</h3><p><code>pnpm install mysql</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 导入MySQL
const mysql = require(&#39;mysql&#39;)
    // 创建连接
const db = mysql.createConnection({
        host: &#39;127.0.0.1&#39;,
        user: &#39;root&#39;,
        password: &#39;13456&#39;,
        database: &#39;vue3_node_bookmanage&#39;
    })

//  请求数据库
app.get(&#39;/get&#39;, (req, res) =&gt; {
    let sql = &#39;select * from book&#39;
    if (req.query.bookName) {
        sql = \`SELECT * FROM book WHERE book_name like &#39;%\${req.query.bookName}%&#39;\`
    }

    db.query(sql, (err, result) =&gt; {
        if (err) throw err
        // 返回结果
        res.send(result)
    });
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取客户端发送过来的查询参数" tabindex="-1"><a class="header-anchor" href="#获取客户端发送过来的查询参数" aria-hidden="true">#</a> 获取客户端发送过来的查询参数</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//  get 请求
通过req.query可以获取到客户端发送过来的查询参数
    app.get(&#39;/&#39;,(req,res)=&gt;{
      // 注意：默认情况下，req.query是一个空对象{}
      console.log(req.query);   //{}
      res.send(req.query)
    })
    
通过req.params可以动态匹配参数
    // 这里的:id是一个动态的参数
    app.get(&#39;/user/:id&#39;,(req,res)=&gt;{
      // req.params是动态匹配的URL参数，默认也是一个空对象
      console.log(req.params);
      res.send(req.params)
    })
    
也可以传两个参数(甚至更多)
    app.get(&#39;/user/:id/:name&#39;,(req,res)=&gt;{
      res.send(req.params)
    })
    
    
//  post请求
解析前端请求的请求体数据  x-www-form
app.use(express.urlencoded({ extended: false }));  // 解析x-www-form类型的请求
解析前端请求的请求体数据  json
app.use(express.json());  // 解析json类型的请求

//  用 req.body 来获取请求体
router.post(&#39;/test&#39;, function(req, res, next) {
    console.log(req.body)
    res.json(req.body)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载body-parser-用于参数解析" tabindex="-1"><a class="header-anchor" href="#下载body-parser-用于参数解析" aria-hidden="true">#</a> 下载body-parser（用于参数解析）</h3><p><code>pnpm i body-parser</code></p><p>app.js加入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//加入body-parser  (由于参数解析)
let bodyParser = require(&#39;body-parser&#39;)
const app = express()
    //解析应用程序/x-ww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    //解析application/json
app.use(bodyParser.json())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前端访问增加跨域设置" tabindex="-1"><a class="header-anchor" href="#前端访问增加跨域设置" aria-hidden="true">#</a> 前端访问增加跨域设置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>proxy: {
            &quot;/api&quot;: {
                target: &quot;http://127.0.0.1:3000&quot;,
                changeOrigin: true,
                rewrite: (path) =&gt; path.replace(/^\\/api/, &#39;&#39;)
            }
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="express生成器" tabindex="-1"><a class="header-anchor" href="#express生成器" aria-hidden="true">#</a> express生成器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g express-generator

以下创建一个名为 myapp 的 Express 应用程序。该应用程序将在当前工作目录中名为 myapp 的文件夹中创建，并且视图引擎将设置为 Pug

express --help  //查看帮助命令

express --view=pug myapp  //  --view选择视图（模板）引擎  此处使用pug(推荐)项目创建完成后跟着终端提示进行下一步即可，也可使用 ejs 等引擎

cd myapp
npm install
set DEBUG=myapp:* &amp; npm start


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态文件" tabindex="-1"><a class="header-anchor" href="#静态文件" aria-hidden="true">#</a> 静态文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 存放静态文件使用express.static(root, [options])
 
 //  使用以下代码在名为 public 的目录中提供图像、CSS 文件和 JavaScript 文件
 // public目录建立在根目录下，  例如文件路径为：public/images/dot.png
 app.use(express.static(&#39;public&#39;)) 
 http://127.0.0.1:3002/images/dot.png  // 这个地址可访问到静态文件
 
 //要使用多个静态资产目录，请多次调用 express.static 中间件函数：
 app.use(express.static(&#39;public&#39;))
app.use(express.static(&#39;files&#39;))

//为 express.static 函数服务的文件创建虚拟路径前缀（该路径实际上并不存在于文件系统中），指定挂载路径为静态目录
// public目录建立在根目录下，  例如文件路径为：public/images/dot.png,如下的‘/static’是创建的虚拟路径
app.use(&#39;/static&#39;, express.static(&#39;public&#39;))
http://127.0.0.1:3002/static/images/dot.png  // 这个地址可访问到静态文件

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="中间件函数" tabindex="-1"><a class="header-anchor" href="#中间件函数" aria-hidden="true">#</a> 中间件函数</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//  中间件函数定义如下  （第三个函数next,调用此函数会调用应用程序中的下一个中间件函数。）
//  中间件函数在发出请求之前执行，通过调用next方法，进入下一个中间件执行，所以next（）不能少
const myLogger = function (req, res, next) {
  console.log(&#39;LOGGED&#39;)
  next()
}

app.use(myLogger)

app.get(&#39;/&#39;, (req, res) =&gt; {
  res.send(&#39;Hello World!&#39;)
})

// 此时请求 &#39;/&#39; 时，控制台会打印 LOGGED

1.应用级中间件：使用 app.use() 和 app.METHOD() 函数将应用级中间件绑定到 app 对象 的实例

要跳过路由中间件堆栈中的其余中间件函数，请调用 next(&#39;route&#39;) 将控制权传递给下一个路由。注意：next(&#39;route&#39;) 仅适用于使用 app.METHOD() 或 router.METHOD() 函数加载的中间件函数。

//当有多个中间件时，可以将多个中间件放在一个数组中。
//  设logOriginalUrl，logMethod 为两个中间件
const logStuff = [logOriginalUrl, logMethod]
app.get(&#39;/user/:id&#39;, logStuff, (req, res, next) =&gt; {
  res.send(&#39;User Info&#39;)
})

2.路由级中间件
路由级中间件的工作方式与应用级中间件相同，只是它绑定到 express.Router() 的实例。
使用 router.use() 和 router.METHOD() 函数加载路由级中间件。

此示例显示了一个处理对 /user/:id 路径的 GET 请求的中间件子堆栈。
    const express = require(&#39;express&#39;)
    const app = express()
    const router = express.Router()

    // predicate the router with a check and bail out when needed
    router.use((req, res, next) =&gt; {
      if (!req.headers[&#39;x-auth&#39;]) return next(&#39;router&#39;)
      next()
    })

    router.get(&#39;/user/:id&#39;, (req, res) =&gt; {
      res.send(&#39;hello, user!&#39;)
    })

    // use the router and 401 anything falling through
    app.use(&#39;/admin&#39;, router, (req, res) =&gt; {
      res.sendStatus(401)
    })
    
    
3.错误处理中间件
错误处理中间件总是需要四个参数。您必须提供四个参数以将其标识为错误处理中间件函数。即使您不需要使用 next 对象，您也必须指定它来维护签名。否则，next 对象将被解释为常规中间件，无法处理错误。

    app.use((err, req, res, next) =&gt; {
      console.error(err.stack)
      res.status(500).send(&#39;Something broke!&#39;)
    })

4.内置中间件
中间件列表查看   https://github.com/senchalabs/connect#middleware
express.static 提供静态资源，例如 HTML 文件、图像等。
express.json 使用 JSON 有效负载解析传入请求。注意：可用于 Express 4.16.0+
express.urlencoded 使用 URL 编码的负载解析传入的请求。注意：可用于 Express 4.16.0+

5.第三方中间件
以下示例说明了安装和加载 cookie 解析中间件函数 cookie-parser。
    npm install cookie-parser

    const cookieParser = require(&#39;cookie-parser&#39;)
    // load the cookie-parsing middleware
    app.use(cookieParser())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上传文件中间件" tabindex="-1"><a class="header-anchor" href="#上传文件中间件" aria-hidden="true">#</a> 上传文件中间件</h3><p>使用 multer 中间件</p><p><code>npm install --save multer</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> multer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;multer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> storage <span class="token operator">=</span> multer<span class="token punctuation">.</span><span class="token function">diskStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">//  &#39;public/images&#39; 是文件上传后保存的路径地址</span>
    <span class="token function-variable function">destination</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> file<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;public/images&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">filename</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> file<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// null后面是上传后保存的文件名，path.extname(file.originalname)获取文件后缀名</span>
        <span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>originalname<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 配置中间件  .single(&#39;img&#39;)设置上传的参数名</span>
<span class="token keyword">var</span> upload <span class="token operator">=</span> <span class="token function">multer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">storage</span><span class="token operator">:</span> storage
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">single</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/upFiles&#39;</span><span class="token punctuation">,</span> upload<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> file <span class="token operator">=</span> req<span class="token punctuation">.</span>file<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
    <span class="token keyword">let</span> imgUrl <span class="token operator">=</span> <span class="token string">&#39;/images/&#39;</span> <span class="token operator">+</span> file<span class="token punctuation">.</span>filename
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;上传文件成功&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> imgUrl
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jwt-token-验证" tabindex="-1"><a class="header-anchor" href="#jwt-token-验证" aria-hidden="true">#</a> jwt token 验证</h3>`,33),w={href:"https://blog.csdn.net/weixin_45295262/article/details/111828505",target:"_blank",rel:"noopener noreferrer"},_=t(`<p><code>cnpm install jsonwebtoken --save</code></p><p><code>cnpm install express-jwt --save</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> jwt <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;jsonwebtoken&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span>expressjwt<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express-jwt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 用于验证token</span>

<span class="token comment">// 加密秘钥</span>
<span class="token keyword">var</span> signkey <span class="token operator">=</span> <span class="token string">&#39;mes_qdhd_mobile&#39;</span><span class="token punctuation">;</span>
<span class="token comment">//生成token</span>
<span class="token keyword">const</span> <span class="token function-variable function">setToken</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">username<span class="token punctuation">,</span> password</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//  expiresIn设置过期时间  algorithm设置加密规则</span>
    <span class="token keyword">const</span> token <span class="token operator">=</span> jwt<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">username</span><span class="token operator">:</span> username<span class="token punctuation">,</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span> password
    <span class="token punctuation">}</span><span class="token punctuation">,</span> signkey<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">expiresIn</span><span class="token operator">:</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token literal-property property">algorithm</span><span class="token operator">:</span> <span class="token string">&#39;HS256&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// let info = jwt.verify(token.split(&#39; &#39;)[1], signkey)</span>
    <span class="token comment">// console.log(info);</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">,</span> token<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> token

<span class="token punctuation">}</span>

<span class="token comment">// //验证token是否过期并规定哪些路由不用验证</span>
<span class="token comment">// 验证--放到最前面的use</span>
router<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">expressjwt</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// secrect值为加密密钥 signkey</span>
    <span class="token literal-property property">secret</span><span class="token operator">:</span> <span class="token string">&#39;mes_qdhd_mobile&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 要加才能对，需要是数组</span>
    <span class="token literal-property property">algorithms</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;HS256&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
     <span class="token comment">// requestProperty:&#39;auth&#39;,//自定义获取的信息位置，默认验证通过req.user获取token信息</span>
     <span class="token comment">// credentialsRequired: false //是否允许无token请求</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unless</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">]</span> <span class="token comment">//除了这个地址，其他的URL都需要验证，可用正则匹配</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// token错误提示</span>
<span class="token comment">// error handler</span>
router<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">&#39;UnauthorizedError&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>path <span class="token operator">+</span> <span class="token string">&#39;,无效token&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;token过期，请重新登录&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">400</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// render the error page</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>status <span class="token operator">||</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> token <span class="token operator">=</span> <span class="token function">setToken</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>username<span class="token punctuation">,</span> req<span class="token punctuation">.</span>password<span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span>
        token
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 请求返回</span>
<span class="token punctuation">{</span>
    <span class="token string-property property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzkwNzc3MDUsImV4cCI6MTY3OTMzNjkwNX0.jEBpDLMup1pkDpXuVO4Pizk8balHyP8txW4wo_ijJPQ&quot;</span>
<span class="token punctuation">}</span>
        

<span class="token comment">//验证token</span>
<span class="token keyword">const</span> <span class="token function-variable function">verToken</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">token</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> info <span class="token operator">=</span> jwt<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span>token<span class="token punctuation">,</span> signkey<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> decoded</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
                <span class="token keyword">return</span>
            <span class="token punctuation">}</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>decoded<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>





<span class="token comment">// 解析token获取用户信息</span>
router<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> token <span class="token operator">=</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;authorization&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>token <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        user<span class="token punctuation">.</span><span class="token function">verToken</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            req<span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>




<span class="token comment">//  得到的token前面是有个Bearer的，在前端头部传递时，在token前加上&quot;Bearer &quot;,就成功了！！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb" aria-hidden="true">#</a> MongoDB</h3>`,4),j={href:"https://www.mongodb.org.cn/",target:"_blank",rel:"noopener noreferrer"},S={href:"http://mongoosejs.net/docs/index.html",target:"_blank",rel:"noopener noreferrer"},M=t(`<p><code>npm i mongoose --save</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var mongoose = require(&#39;mongoose&#39;)
// 连接mongoDB
mongoose.connect(&#39;mongodb://127.0.0.1/mogoTry&#39;).then(res =&gt; {
        console.log(&quot;连接成功&quot;)
    }).catch(err =&gt; console.log(&quot;连接失败&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="schema" tabindex="-1"><a class="header-anchor" href="#schema" aria-hidden="true">#</a> Schema</h4><p>Mongoose的一切都始于一个Schema。每个schema映射到MongoDB的集合(collection)和定义该集合(collection)中的文档的形式。 Schemas不仅定义了文档和属性的结构，还定义了文档实例方法、静态模型方法、复合索引和文档被称为中间件的生命周期钩子。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    //创建Schema对象（约束）   timestamps用于设置添加时间戳
var Schema = mongoose.Schema;
var stuSchema = new Schema({
    name: String,
    age: {
        type: String,
        default: 18
    }
}, { timestamps: true })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//  mongoDB 设置表关联

let Article=new Schema({})
let User=new Schema({})
let CommentSchema = new Schema({
    content: String,
    article_id: { type: Schema.Types.objectId, ref: &quot;Article&quot; },
    reply_user_id: { type: Schema.Types.objectId, ref: &quot;User&quot; }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="models" tabindex="-1"><a class="header-anchor" href="#models" aria-hidden="true">#</a> Models</h4><p>使用我们的schema定义，我们需要将我们的schema转成我们可以用的模型。为此，我们通过mongoose.model(modelName, schema)。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//创建数据模型-根据表结构创建数据模型 
// 将stuSchema映射到一个MongoDB collection并定义这个文档的构成,users是collection的名称
var stuModle = mongoose.model(&#39;users&#39;, stuSchema)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法" aria-hidden="true">#</a> 实例方法</h4><p>模型的实例是文档（documents）。文档有许多自己内置的实例方法。我们也可以定义我们自己的自定义文档实例方法。</p>`,11),E={href:"http://mongoosejs.net/docs/api.html#Model",target:"_blank",rel:"noopener noreferrer"},B=t(`<p>以下为基本的增删改查操作</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// //向数据库中的表（goods）插入数据</span>
stuModle<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;三蹦子123&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&quot;20&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;三蹦子456&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&quot;20&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token string">&#39;保存成功&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 根据条件执行删除操作</span>
stuModle<span class="token punctuation">.</span><span class="token function">deleteOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token string">&#39;6415d01dbfd451ce6e6af863&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;删除成功&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 修改第一个参数是条件，第二个参数是修改内容</span>
stuModle<span class="token punctuation">.</span><span class="token function">updateOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token string">&#39;6415d20da6b96a6927f8f68d&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;小明回来了&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;修改成功&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 查询(根据Id查询 )</span>
stuModle<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span><span class="token string">&#39;6415d20da6b96a6927f8f68e&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;查询成功&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

 <span class="token comment">// 普通查询，查询多条 （查询到符合条件的所有数据）</span>
stuModle<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// _id: &#39;6415d2d4d640d72c10d1dac7&#39;,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&#39;20&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//能查询多条，也可以传入条件</span>
<span class="token comment">//第一个参数是个对象}不传参数就是查询所有，传入条件就是根据条件查询函数</span>
stuModle<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">$gte</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token literal-property property">$lt</span><span class="token operator">:</span> <span class="token number">30</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//范围views的值大于等 于0小于1000</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">哈哈</span><span class="token regex-delimiter">/</span></span>  <span class="token comment">// 搜索tit1e包含哈哈， 搜索条件是正则</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//根据id 1升序 -1降序</span>
    <span class="token punctuation">.</span><span class="token function">skip</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">//跳过前0条</span>
    <span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">//获取10条事件</span>
    <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//1查询结果中出现author字段 0 是不出现这个字段</span>
    <span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//执行查询</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">//查询成功</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//  查询到符合条件的第一条信息</span>
stuModle<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&#39;21&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function D(N,O){const a=c("ExternalLinkIcon");return i(),o("div",null,[r,u,n("p",null,[n("a",d,[s("011_Buffer_介绍与创建_哔哩哔哩_bilibili"),e(a)])]),n("p",null,[s("文件： "),n("a",v,[s("尚硅谷NodeJS核心基础_免费高速下载|百度网盘-分享无限制 (baidu.com)"),e(a)])]),n("p",null,[s("课件地址： "),n("a",k,[s("阿里云盘 (aliyundrive.com)"),e(a)])]),m,n("p",null,[s("看视频 "),n("a",b,[s("项目实战-Node+Koa2从零搭建通用API服务"),e(a)]),s(" ，作者写的源码和地址 "),n("a",g,[s("jj112358/node-api: 【杰哥课堂】-项目实战-通用api接口服务 (github.com)"),e(a)])]),n("p",null,[s("我跟着写了一点代码，放到码云上了，"),n("a",h,[s("my-node-koa: 学习node 和 koa 框架的记录（我的码云仓库，代码内容应该不全，还没全部看完）)"),e(a)])]),n("p",null,[n("a",f,[s("Express 中文文档 - Express 中文文档 (nodejs.cn)"),e(a)])]),n("p",null,[n("a",x,[s("Express/Node 入门 - 学习 Web 开发 | MDN (mozilla.org)"),e(a)])]),n("p",null,[n("a",y,[s("登录是前端做全栈的必修课 - 掘金 (juejin.cn)"),e(a)])]),q,n("p",null,[s("参考文章： "),n("a",w,[s("node笔记：node express 下 jsonwebtoken+express-jwt实现token登录验证两种方式（尽力写详细了)_eyjkyxrhijp7imfnzw50x2nvzguioiixntm1mzm5miisimlfy2_前端辣么菜的博客-CSDN博客"),e(a)])]),_,n("p",null,[n("a",j,[s("MongoDB中文网"),e(a)])]),n("p",null,[n("a",S,[s("Mongoose 5.0 中文文档 (mongoosejs.net)"),e(a)])]),M,n("p",null,[n("a",E,[s("modle api Mongoose 5.0 中文文档 (mongoosejs.net)"),e(a)])]),B])}const U=p(l,[["render",D],["__file","2.html.vue"]]);export{U as default};
