import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as a,a as e,b as n,e as s,f as l,r as v}from"./app.072073a8.js";const c={},t=e("h1",{id:"node",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#node","aria-hidden":"true"},"#"),n(" Node")],-1),u=e("h2",{id:"学习node-express-koa",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#学习node-express-koa","aria-hidden":"true"},"#"),n(" 学习node,express，koa")],-1),o={href:"https://www.bilibili.com/video/BV13A411w79h/?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/jj112358/node-api",target:"_blank",rel:"noopener noreferrer"},b={href:"https://gitee.com/fankozhang/my-node",target:"_blank",rel:"noopener noreferrer"},p={href:"https://nodejs.cn/express/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/Introduction",target:"_blank",rel:"noopener noreferrer"},x=l(`<h2 id="node-express创建使用" tabindex="-1"><a class="header-anchor" href="#node-express创建使用" aria-hidden="true">#</a> node+express创建使用</h2><h3 id="项目初始化" tabindex="-1"><a class="header-anchor" href="#项目初始化" aria-hidden="true">#</a> 项目初始化</h3><p><code>pnpm init</code></p><h3 id="下载express依赖" tabindex="-1"><a class="header-anchor" href="#下载express依赖" aria-hidden="true">#</a> 下载express依赖</h3><p><code>pnpm install express</code></p><h3 id="根目录创建-app-js" tabindex="-1"><a class="header-anchor" href="#根目录创建-app-js" aria-hidden="true">#</a> 根目录创建 app.js</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const express = require(&#39;express&#39;)
const app = express()

const port = 3000

app.get(&#39;/&#39;, (req, res) =&gt; {
    res.send(&#39;Hello World yes!&#39;)
})

app.listen(port, () =&gt; {
    console.log(\`server running at http://127.0.0.1:\${port}\`)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装和访问mysql" tabindex="-1"><a class="header-anchor" href="#安装和访问mysql" aria-hidden="true">#</a> 安装和访问MySQL</h3><p><code>pnpm install mysql</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 导入MySQL
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function g(f,q){const i=v("ExternalLinkIcon");return r(),a("div",null,[t,u,e("p",null,[n("看视频 "),e("a",o,[n("项目实战-Node+Koa2从零搭建通用API服务"),s(i)]),n(" ，作者写的源码和地址 "),e("a",m,[n("jj112358/node-api: 【杰哥课堂】-项目实战-通用api接口服务 (github.com)"),s(i)])]),e("p",null,[n("我跟着写了一点代码，放到码云上了，"),e("a",b,[n("my-node-koa: 学习node 和 koa 框架的记录（我的码云仓库，代码内容应该不全，还没全部看完）)"),s(i)])]),e("p",null,[e("a",p,[n("Express 中文文档 - Express 中文文档 (nodejs.cn)"),s(i)])]),e("p",null,[e("a",h,[n("Express/Node 入门 - 学习 Web 开发 | MDN (mozilla.org)"),s(i)])]),x])}const k=d(c,[["render",g],["__file","2.html.vue"]]);export{k as default};
