---

date: 2022-01-06
category:
  - node
tag:
  - node
  - javascript
star: 10
---

# Node

## node基础

 [011_Buffer_介绍与创建_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1gM411W7ex?p=11&spm_id_from=pageDriver&vd_source=f25f5a8d75a3a60d5a288f726803ec11)   

文件： [尚硅谷NodeJS核心基础_免费高速下载|百度网盘-分享无限制 (baidu.com)](https://pan.baidu.com/s/1sDOMvUdY9UF3mlJ7ujOADg?pwd=s3wj#list/path=%2Fsharelink1212623117-214795209934346%2F尚硅谷NodeJS核心基础&parentPath=%2Fsharelink1212623117-214795209934346) 

课件地址： [阿里云盘 (aliyundrive.com)](https://www.aliyundrive.com/drive/folder/6432d0e9ee78f413bcef4618bc195ac9068e1e36) 

## 学习node,express，koa

看视频  [项目实战-Node+Koa2从零搭建通用API服务](https://www.bilibili.com/video/BV13A411w79h/?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11) ，作者写的源码和地址  [jj112358/node-api: 【杰哥课堂】-项目实战-通用api接口服务 (github.com)](https://github.com/jj112358/node-api)     

我跟着写了一点代码，放到码云上了，[my-node-koa: 学习node 和 koa 框架的记录（我的码云仓库，代码内容应该不全，还没全部看完）)](https://gitee.com/fankozhang/my-node) 



 [Express 中文文档 - Express 中文文档 (nodejs.cn)](https://nodejs.cn/express/) 

 [Express/Node 入门 - 学习 Web 开发 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/Introduction) 

[登录是前端做全栈的必修课 - 掘金 (juejin.cn)](https://juejin.cn/post/7303463043249635362)

## node+express创建使用

### 项目初始化

`pnpm init`

### 下载express依赖

`pnpm install express`

### 根目录创建  app.js

```js
const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World yes!')
})

app.listen(port, () => {
    console.log(`server running at http://127.0.0.1:${port}`)
})
```

### cors解决跨域

##### 利用中间件 cors

安装 npm i cors -S

```js
const  cors = require('cors')
 app.use(cors())
 app.listen(8000, function () {
   console.log(`server running at http://127.0.0.1:${port}`)
 })
```



### 安装和访问MySQL

`pnpm install mysql`

```js
// 导入MySQL
const mysql = require('mysql')
    // 创建连接
const db = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '13456',
        database: 'vue3_node_bookmanage'
    })

//  请求数据库
app.get('/get', (req, res) => {
    let sql = 'select * from book'
    if (req.query.bookName) {
        sql = `SELECT * FROM book WHERE book_name like '%${req.query.bookName}%'`
    }

    db.query(sql, (err, result) => {
        if (err) throw err
        // 返回结果
        res.send(result)
    });
})
```

### 获取客户端发送过来的查询参数

```js
//  get 请求
通过req.query可以获取到客户端发送过来的查询参数
    app.get('/',(req,res)=>{
      // 注意：默认情况下，req.query是一个空对象{}
      console.log(req.query);   //{}
      res.send(req.query)
    })
    
通过req.params可以动态匹配参数
    // 这里的:id是一个动态的参数
    app.get('/user/:id',(req,res)=>{
      // req.params是动态匹配的URL参数，默认也是一个空对象
      console.log(req.params);
      res.send(req.params)
    })
    
也可以传两个参数(甚至更多)
    app.get('/user/:id/:name',(req,res)=>{
      res.send(req.params)
    })
    
    
//  post请求
解析前端请求的请求体数据  x-www-form
app.use(express.urlencoded({ extended: false }));  // 解析x-www-form类型的请求
解析前端请求的请求体数据  json
app.use(express.json());  // 解析json类型的请求

//  用 req.body 来获取请求体
router.post('/test', function(req, res, next) {
    console.log(req.body)
    res.json(req.body)
})
```



### 下载body-parser（用于参数解析）

`pnpm i body-parser`

app.js加入

```js
//加入body-parser  (由于参数解析)
let bodyParser = require('body-parser')
const app = express()
    //解析应用程序/x-ww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    //解析application/json
app.use(bodyParser.json())
```

### 前端访问增加跨域设置

```js
proxy: {
            "/api": {
                target: "http://127.0.0.1:3000",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
```

### express生成器

```js
npm install -g express-generator

以下创建一个名为 myapp 的 Express 应用程序。该应用程序将在当前工作目录中名为 myapp 的文件夹中创建，并且视图引擎将设置为 Pug

express --help  //查看帮助命令

express --view=pug myapp  //  --view选择视图（模板）引擎  此处使用pug(推荐)项目创建完成后跟着终端提示进行下一步即可，也可使用 ejs 等引擎

cd myapp
npm install
set DEBUG=myapp:* & npm start


```

### 静态文件

```js
 存放静态文件使用express.static(root, [options])
 
 //  使用以下代码在名为 public 的目录中提供图像、CSS 文件和 JavaScript 文件
 // public目录建立在根目录下，  例如文件路径为：public/images/dot.png
 app.use(express.static('public')) 
 http://127.0.0.1:3002/images/dot.png  // 这个地址可访问到静态文件
 
 //要使用多个静态资产目录，请多次调用 express.static 中间件函数：
 app.use(express.static('public'))
app.use(express.static('files'))

//为 express.static 函数服务的文件创建虚拟路径前缀（该路径实际上并不存在于文件系统中），指定挂载路径为静态目录
// public目录建立在根目录下，  例如文件路径为：public/images/dot.png,如下的‘/static’是创建的虚拟路径
app.use('/static', express.static('public'))
http://127.0.0.1:3002/static/images/dot.png  // 这个地址可访问到静态文件

```

### 中间件函数

```js
//  中间件函数定义如下  （第三个函数next,调用此函数会调用应用程序中的下一个中间件函数。）
//  中间件函数在发出请求之前执行，通过调用next方法，进入下一个中间件执行，所以next（）不能少
const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 此时请求 '/' 时，控制台会打印 LOGGED

1.应用级中间件：使用 app.use() 和 app.METHOD() 函数将应用级中间件绑定到 app 对象 的实例

要跳过路由中间件堆栈中的其余中间件函数，请调用 next('route') 将控制权传递给下一个路由。注意：next('route') 仅适用于使用 app.METHOD() 或 router.METHOD() 函数加载的中间件函数。

//当有多个中间件时，可以将多个中间件放在一个数组中。
//  设logOriginalUrl，logMethod 为两个中间件
const logStuff = [logOriginalUrl, logMethod]
app.get('/user/:id', logStuff, (req, res, next) => {
  res.send('User Info')
})

2.路由级中间件
路由级中间件的工作方式与应用级中间件相同，只是它绑定到 express.Router() 的实例。
使用 router.use() 和 router.METHOD() 函数加载路由级中间件。

此示例显示了一个处理对 /user/:id 路径的 GET 请求的中间件子堆栈。
    const express = require('express')
    const app = express()
    const router = express.Router()

    // predicate the router with a check and bail out when needed
    router.use((req, res, next) => {
      if (!req.headers['x-auth']) return next('router')
      next()
    })

    router.get('/user/:id', (req, res) => {
      res.send('hello, user!')
    })

    // use the router and 401 anything falling through
    app.use('/admin', router, (req, res) => {
      res.sendStatus(401)
    })
    
    
3.错误处理中间件
错误处理中间件总是需要四个参数。您必须提供四个参数以将其标识为错误处理中间件函数。即使您不需要使用 next 对象，您也必须指定它来维护签名。否则，next 对象将被解释为常规中间件，无法处理错误。

    app.use((err, req, res, next) => {
      console.error(err.stack)
      res.status(500).send('Something broke!')
    })

4.内置中间件
中间件列表查看   https://github.com/senchalabs/connect#middleware
express.static 提供静态资源，例如 HTML 文件、图像等。
express.json 使用 JSON 有效负载解析传入请求。注意：可用于 Express 4.16.0+
express.urlencoded 使用 URL 编码的负载解析传入的请求。注意：可用于 Express 4.16.0+

5.第三方中间件
以下示例说明了安装和加载 cookie 解析中间件函数 cookie-parser。
    npm install cookie-parser

    const cookieParser = require('cookie-parser')
    // load the cookie-parsing middleware
    app.use(cookieParser())
```

### 上传文件中间件

使用  multer  中间件

`npm install --save multer`

```javascript
var multer = require("multer");
var path = require("path");

var storage = multer.diskStorage({
    //  'public/images' 是文件上传后保存的路径地址
    destination: function(req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function(req, file, cb) {
        // null后面是上传后保存的文件名，path.extname(file.originalname)获取文件后缀名
        cb(null, '' + Date.now() + path.extname(file.originalname))
    }
})

// 配置中间件  .single('img')设置上传的参数名
var upload = multer({
    storage: storage
}).single('img')

router.post('/upFiles', upload, function(req, res, next) {
    let file = req.file;
    console.log(file)
    let imgUrl = '/images/' + file.filename
    console.log(req.body);
    res.json({
        code: 1,
        msg: '上传文件成功',
        data: imgUrl
    })
})

```

### jwt token 验证

参考文章： [node笔记：node express 下 jsonwebtoken+express-jwt实现token登录验证两种方式（尽力写详细了)_eyjkyxrhijp7imfnzw50x2nvzguioiixntm1mzm5miisimlfy2_前端辣么菜的博客-CSDN博客](https://blog.csdn.net/weixin_45295262/article/details/111828505) 

`cnpm install jsonwebtoken --save` 

`cnpm install express-jwt --save`

```javascript
const jwt = require('jsonwebtoken');
let {expressjwt} = require('express-jwt');  // 用于验证token

// 加密秘钥
var signkey = 'mes_qdhd_mobile';
//生成token
const setToken = function(username, password) {
    //  expiresIn设置过期时间  algorithm设置加密规则
    const token = jwt.sign({
        username: username,
        password: password
    }, signkey, {
        expiresIn: 60 * 60 * 24 * 3,
        algorithm: 'HS256'
    });
    // let info = jwt.verify(token.split(' ')[1], signkey)
    // console.log(info);
    console.log('token', token);
    return token

}

// //验证token是否过期并规定哪些路由不用验证
// 验证--放到最前面的use
router.use(expressjwt({
    // secrect值为加密密钥 signkey
    secret: 'mes_qdhd_mobile',
    // 要加才能对，需要是数组
    algorithms: ['HS256'],
     // requestProperty:'auth',//自定义获取的信息位置，默认验证通过req.user获取token信息
     // credentialsRequired: false //是否允许无token请求
}).unless({
    path: ['/', '/login'] //除了这个地址，其他的URL都需要验证，可用正则匹配
}));

// token错误提示
// error handler
router.use(function(err, req, res, next) {
    console.log(err);
    if (err.name === 'UnauthorizedError') {
        console.error(req.path + ',无效token');
        res.json({
            message: 'token过期，请重新登录',
            code: 400
        })
        return
    }
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

router.get('/login', (req, res) => {
    let token = setToken(req.username, req.password)
    res.json({
        code: 1,
        msg: 'success',
        token
    })
})

// 请求返回
{
    "code": 1,
    "msg": "success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzkwNzc3MDUsImV4cCI6MTY3OTMzNjkwNX0.jEBpDLMup1pkDpXuVO4Pizk8balHyP8txW4wo_ijJPQ"
}
        

//验证token
const verToken = function(token) {
    return new Promise((resolve, reject) => {
        var info = jwt.verify(token, signkey, (error, decoded) => {
            if (error) {
                console.log(error.message)
                return
            }
            console.log(decoded)
        });
        resolve(info);
    })
}





// 解析token获取用户信息
router.use(function(req, res, next) {
    var token = req.headers['authorization'];
    if (token == undefined) {
        return next();
    } else {
        user.verToken(token).then((data) => {
            req.data = data;
            return next();
        }).catch((error) => {
            console.log(error);
            return next();
        })
    }
});




//  得到的token前面是有个Bearer的，在前端头部传递时，在token前加上"Bearer ",就成功了！！
```

### MongoDB

 [MongoDB中文网](https://www.mongodb.org.cn/) 

 [Mongoose 5.0 中文文档 (mongoosejs.net)](http://mongoosejs.net/docs/index.html) 

 `npm i mongoose --save` 

```
var mongoose = require('mongoose')
// 连接mongoDB
mongoose.connect('mongodb://127.0.0.1/mogoTry').then(res => {
        console.log("连接成功")
    }).catch(err => console.log("连接失败"))
```

#### Schema

 Mongoose的一切都始于一个Schema。每个schema映射到MongoDB的集合(collection)和定义该集合(collection)中的文档的形式。 Schemas不仅定义了文档和属性的结构，还定义了文档实例方法、静态模型方法、复合索引和文档被称为中间件的生命周期钩子。 

```js
    //创建Schema对象（约束）   timestamps用于设置添加时间戳
var Schema = mongoose.Schema;
var stuSchema = new Schema({
    name: String,
    age: {
        type: String,
        default: 18
    }
}, { timestamps: true })
```

```js
//  mongoDB 设置表关联

let Article=new Schema({})
let User=new Schema({})
let CommentSchema = new Schema({
    content: String,
    article_id: { type: Schema.Types.objectId, ref: "Article" },
    reply_user_id: { type: Schema.Types.objectId, ref: "User" }
})
```



#### Models

 使用我们的schema定义，我们需要将我们的schema转成我们可以用的模型。为此，我们通过mongoose.model(modelName, schema)。 

```js
//创建数据模型-根据表结构创建数据模型 
// 将stuSchema映射到一个MongoDB collection并定义这个文档的构成,users是collection的名称
var stuModle = mongoose.model('users', stuSchema)

```

#### 实例方法

 模型的实例是文档（documents）。文档有许多自己内置的实例方法。我们也可以定义我们自己的自定义文档实例方法。 

 [modle api Mongoose 5.0 中文文档 (mongoosejs.net)](http://mongoosejs.net/docs/api.html#Model) 

以下为基本的增删改查操作

```js
// //向数据库中的表（goods）插入数据
stuModle.create({
    name: "三蹦子123",
    age: "20",
}, {
    name: "三蹦子456",
    age: "20",
}).then(res => {
    console.log(res, '保存成功')
})

// 根据条件执行删除操作
stuModle.deleteOne({
    _id: '6415d01dbfd451ce6e6af863'
}).then(res => {
    console.log('删除成功')
})

// 修改第一个参数是条件，第二个参数是修改内容
stuModle.updateOne({
    _id: '6415d20da6b96a6927f8f68d'
}, { name: '小明回来了' }).then(res => {
    console.log('修改成功')
})

// 查询(根据Id查询 )
stuModle.findById('6415d20da6b96a6927f8f68e').then(res => {
        console.log("查询成功", res)
    })

 // 普通查询，查询多条 （查询到符合条件的所有数据）
stuModle.find({
        // _id: '6415d2d4d640d72c10d1dac7',
        age: '20'
    }).then(res => {
        console.log(res)
    })

//能查询多条，也可以传入条件
//第一个参数是个对象}不传参数就是查询所有，传入条件就是根据条件查询函数
stuModle.find({
        age: {
            $gte: 5,
            $lt: 30
        },
        //范围views的值大于等 于0小于1000
        name: /哈哈/  // 搜索tit1e包含哈哈， 搜索条件是正则
    })
    .sort({ _id: -1 }) //根据id 1升序 -1降序
    .skip(0) //跳过前0条
    .limit(10) //获取10条事件
    .select({
        author: 0
    }) //1查询结果中出现author字段 0 是不出现这个字段
    .exec() //执行查询
    .then((res) => {
        //查询成功
        console.log(res);
    });
//  查询到符合条件的第一条信息
stuModle.findOne({
    age: '21'
}).then(res => {
    console.log(res)
})
```



