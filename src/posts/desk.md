---
date: 2022-01-09
category:
  - Cherry
tag:
  - desk
  - tauri
  - electron
---

# 知识拓展(electron,qiankun)

# electron

学习视频地址：https://www.bilibili.com/video/BV1QB4y1F722?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11

## 创建electron项目

1 electron/electron-quick-start  官网示例

```
# Clone this repository
git clone https://github.com/electron/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start
```

2 electron forge

```
npm init electron-app@latest my-app -- --template=webpack
cd my-app
npm start
```

```
yarn create electron-app my-app --template=webpack
cd my-app
yarn start
```

```
适用electron forge安装时报错：
An unhandled rejection has occurred inside Forge:
Error: Could not find any Electron packages in devDependencies
解决方法，安装electron依赖
cnpm install --save-dev electron   // 不安装这个依赖会报错，报错后要加上
```

 注释掉 src/index.js 的   mainWindow.webContents.openDevTools();  关闭打开窗口默认打开 devtools

## 生命周期

官网 api   [app | Electron (electronjs.org)](https://www.electronjs.org/zh/docs/latest/api/app#apprequestsingleinstancelockadditionaldata) 

```
*生命周期
ready  应用程序初始化完成
browser-window-created   窗口创建完成触发
before-quit  窗口关闭之前
wi11-quit  窗口关闭了但是程序还没有关闭，即将关闭
quit  应用程序关闭触发
app.on("ready",()=>{})

app.whenReady().then(()=>{})  和ready的生命周期相同，promise实现的

requestSingleInstanceLock()  true 或 false 禁止多开
```



## 打包

1  当适用 electron forge 时

```
"scripts": {
        "start": "electron-forge start",
        "package": "electron-forge package",
        "make": "electron-forge make",
        "publish": "electron-forge publish",
        "lint": "echo \"No linting configured\""
    },
```

运行yarn make 即可打包程序（很慢，在下载东西）  

打包超时可以看这个 [(195条消息) 解决electron打包时，下载超时导致失败_michaelxuzhi___的博客-CSDN博客](https://blog.csdn.net/michaelxuzhi___/article/details/106568543) 

最好有github加速服务，不然很容易打包失败。

生成out目录，里面有打包出的文件

2  （我使用的这种，上面的速度实在太慢）可以下载 electron-builder 依赖，注意 electron-builder 只能放置在 devDependencies 中

package.json中加入如下命令

```
"scripts": {
        "app:dist": "electron-builder"
    },
```

运行 npm run app:dist 执行打包命令 （依然有打包下载文件的速度慢问题，加速才能下载下来）

生成dist目录，里面有打包好的文件

3  第一次打包时下载的文件存放在C:\Users\张帆\AppData\Local\electron\Cache目录下

下载文件为  https://wwmj.lanzoue.com/b02ef6w8d   密码:7ylu 

## index.js

```js
const { app, BrowserWindow } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
    app.quit();
}

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            // 这个参数加上使 electron 浏览器的js支持node
            nodeIntegration: true,
            //  要在渲染进程里调用 require 的话， 还需要加上 contextIsolation: false
            contextIsolation: false,
        },
    });

    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, 'index.html'));

    // Open the DevTools.
    mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

```

## 实现读取文件功能

```html
<div id="holder">💖文件拖拽到这里</div>
    <div id="read">
        <div>读取的内容</div>
    </div>
```

```js
let fs = require('fs');
console.log(fs)

let holder = document.querySelector("#holder")
var read = document.querySelector("#read")
holder.addEventListener("drop", function(e) {
    e.preventDefault() //取消默认事件
    e.stopPropagation() //阻止冒泡
    console.log(e)
    for (const file of e.dataTransfer.files) {
        console.log(file, "文件路径", file.path)
        fs.readFile(file.path, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                let newDiv = document.createElement('div')
                newDiv.innerHTML = `<h2>${file.name}</h2>
                    <pre>${data}</pre>
                    `
                console.log("123", newDiv)
                read.appendChild(newDiv)
            }
        })
    }
})
holder.addEventListener("dragover", function(e) {
    e.preventDefault() //取消默认事件
    e.stopPropagation() //阻止冒泡
})
```

## webview操作和使用

```html
<!-- webview嵌入的网页 所有 target 为 _blank 的 a 标签点击都没反应，这是因为 webview 默认不允许打开新窗口，需要设置 allowpopups 属性才行 -->
    <!-- nodeintegration。 当有此属性时, webview 中的访客页（guest page）将具有Node集成, 并且可以使用像 require 和 process 这样的node APIs 去访问低层系统资源。 Node
    集成在访客页中默认是禁用的。 -->
    <webview id="wview" src="http://www.baidu.com" style="width:640px;height:480px" allowpopups nodeintegration></webview>

```

electron中直接使用，宽高不生效，要在index.js中加配置

```
const mainWindow = new BrowserWindow({
            // 加入 webviewTag:true 可以使 webview 标签起效果，否则宽高不生效
            webviewTag:true
        },
    });
```

```js

var webview = document.getElementById("wview")
    webview.addEventListener("dom-ready", () => {
        console.log("正在加载中")
        console.log(webview)
        // webview里有很多的方法，用于获取webview的元素并修改内嵌的webview,在https://www.electronjs.org/zh/docs/latest/api/webview-tag#webviewexecutejavascriptcode-usergesture 查看相关方法，
        webview.insertCSS(`#su{background:red!important;}`) //百度网页搜索按钮显示红色
        // executeJavaScript执行的js必须是字符串
        webview.executeJavaScript(
            `
            setTimeout(() =>{
            console.log('123')
            let input = document.querySelector('#kw')
            let btn = document.querySelector('#su')
            input.value = "搜索内容"
            btn.click()
            }, 1000)
            `
        ).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })   // 百度搜索框值为 搜索内容 ，点击按钮搜索
    })
```

## 主进程和渲染进程通讯

index.js      （主进程）

```
const { app, BrowserWindow, ipcMain } = require('electron');

// 监听渲染进程发送过来的lc-message事件
ipcMain.on("lc-message", (event, arg) => {
    event.reply('lc-reply', "这个是主进程的答复")
    console.log(arg)

})

const createWindow = () => {
    //主动的发消息给渲染进程，不显示时可以加一个定时器延后执行
    mainWindow.webContents.send('lc-active', "创建窗口之后，主进程主动发送数据给到渲染进")
};
```

index.html  script     （子进程）

```
<script>
    let {
        ipcRenderer
    } = require("electron");
    ipcRenderer.on("lc-active", (event, arg) => {
            console.log(event)
            console.log(arg)
        })
        //主动发送消息给主进程
    ipcRenderer.send('lc-message', "子进程给主进程发送数据")
    ipcRenderer.on('lc-reply', (event, arg) => {
        console.log(event)
        console.log(arg)
    })
</script>
```

注意：以上的"lc-message"，lc-reply，'lc-active'都是自己起的名字，可以自定义。

通过主进程和渲染进程通讯实现点击按钮，打开新窗口

index.html

```
<button id="open-new">打开新窗口</button>

<script>
    let {
        ipcRenderer
    } = require("electron");

    var openNew = document.querySelector("#open-new")
    openNew.addEventListener("click", () => {
            ipcRenderer.send('openNew')
        })

</script>
```

index.js

```js
const { app, BrowserWindow, ipcMain } = require('electron');

// 监听渲染进程发送过来的openNew事件.打开新窗口
ipcMain.on("openNew", (event, arg) => {
    cWindow("http://www.baidu.com")
})

// 重写打开新窗口的函数
const cWindow = (url) => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            // 浏览器的js支持node
            nodeIntegration: true,
            //  要在渲染进程里调用 require 的话， 还需要加上 contextIsolation: false
            contextIsolation: false,
            // 加入 webviewTag:true 可以使 webview 标签起效果，否则宽高不生效
            webviewTag: true,
            preload: path.join(__dirname, 'preload.js')

        },
    });
    mainWindow.loadURL(url)
};

```

## dialog弹出框

index.js

```js
const { app, BrowserWindow, ipcMain, dialog } = require('electron');

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });
    //  打开一个文件选择框
    setTimeout(() => {
        //openFile允许选择文件
        //openDirectory允许选择文件夹
        //multiSelection允许多选
        //showHiddenFiles显示隐藏文件
        //createDirectory允许创建文件夹
        dialog.showOpenDialog({
            properties: ['openFile', 'multiSelections']
        }).then(res => {
            console.log(res.filePaths)
            console.log(res.canceled)
        })
    }, 2000)

    // 点击叉号，弹框确认是否关闭
    mainWindow.on('close', (e) => {
        e.preventDefault()
        dialog.showMessageBox(mainWindow, {
            type: 'warning',
            tit1e: "关闭",
            message: "是否要关闭窗口？",
            buttons: ["取消", "残酷关闭"]
        }).then(res => {
            console.log(res)
            // res.response显示buttons的编号
            if (res.response == 1) {
                // 程序退出
                app.exit()
            }
        })
    })

};
```

## 自带的请求模块

```
const { net } = require('electron');

一定要在ready之后执行
 let request = net.request('https://taobao.com')
    request.on('response', (response) => {
        console.log(response.statusCode)
        console.log(JSON.stringify(response.headers))
        response.on('data', (chunk) => {
            console.log(chunk.toString())
        })
    })
    request.end()
```

## electron-vue（打包报错，不推荐使用）

 [简介 · electron-vue (gitbooks.io)](https://simulatedgreg.gitbooks.io/electron-vue/content/cn/) 

```
# 安装 vue-cli 和 脚手架样板代码
npm install -g vue-cli
vue init simulatedgreg/electron-vue my-project

# 安装依赖并运行你的程序
cd my-project
yarn # 或者 npm install
yarn run dev # 或者 npm run dev
```

1 当运行 npm run dev 报错   Object.fromEntries is not a function electron-vue报错，

解决： [(196条消息) Object.fromEntries is not a function electron-vue报错_24k唇动的博客-CSDN博客](https://blog.csdn.net/y_k_1_2_3_4/article/details/126479427) 

 安装polyfill-object.fromentries，在项目根目录执行命令 

 npm **i** polyfill-**object**.fromentries 

在 .electron-vue/dev-client.js 引入

```
// const hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')
import 'polyfill-object.fromentries';
```

## electron-vue build  打包的坑

 [electron-vue build的坑 - 简书 (jianshu.com)](https://www.jianshu.com/p/55d0e5b6c085) 

 [基于Electron搭建跨平台应用程序 - leestar54 - 博客园 (cnblogs.com)](https://www.cnblogs.com/leestar54/p/12781591.html#electron-vue脚手架) 

（打包问题很多）

## ant design vue

下载导入 ant-design-vue  报错 

解决： [(196条消息) Uncaught TypeError: (0 , vue__WEBPACK_IMPORTED_MODULE_3__.createVNode) is not a function_潮汐未见潮落的博客-CSDN博客](https://blog.csdn.net/qq_52855464/article/details/126255813) 

原因： **ant- design-vue 版本过高** 

卸载当前版本 ： npm uninstall ant-design-vue 

 安装先前版本：cnpm install ant-design-vue@1.7.2 

## electron解决跨域问题（请求数据）

```
在electron-vue创建的项目中，在目录src/main/index,js中增加配置


mainWindow = new BrowserWindow({
        height: 563,
        useContentSize: true,
        width: 1000,
        webPreferences: {
            nodeIntegration: true, //是否集成node
            webSecurity: false   // 设置跨域问题
        }
    })
```

## 路由

```
// 路由写法和vue的写法一样，但如果使用require引入的话注意后面的.default不能漏

routes: [{
            path: '/',
            name: 'landing-page',
            component: require('@/components/LandingPage').default
        }, , {
            path: '/detail',
            name: 'detail',
            component: () => import ('@/components/detail/index') 
                // component: require('@/components/detail').default
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
```



## 搭建vue+Electron应用

**(搭建electron项目，简单快捷,推荐)**

通过脚手架创建一个vue项目

```
 vue create vue-electron 
```

 添加`vue-cli-plugin-electron-builder`插件 

```
 vue add vue-cli-plugin-electron-builder 
```

 安装成功之后，就可以运行或打包了 

```
npm run electron:serve
npm run electron:build
```

vue.config.js(去除eslint保存验证)

```
module.exports = {
    lintOnSave: false
}
```



## electron自定义菜单

 [Electron 中的原生菜单 - 掘金 (juejin.cn)](https://juejin.cn/post/7209826725365645369#heading-1) 

### 顶部菜单栏

 菜单栏部分配置可查看 [Electron 编写菜单栏 - Mr. Ma's Blog (misterma.com)](https://www.misterma.com/archives/896/) 

```
const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: true
        // frame: false,  // frame设置标题栏的显示和隐藏，自定义标题栏设置为true
    })
```

```js
// 新建 menu.js 配置自定义的菜单栏，内容如下


// 1. 引入Electron中的Menu模块
const {
    Menu
} = require("electron");

// 2. 创建一个菜单数组
let menuTemplate = [
    // 一级菜单
    {
        label: "文件",
        // 二级菜单 submenu
        submenu: [{
                label: "新建",
                // 给菜单绑定点击事件
                click: () => {
                    console.log("Ctrl + N");
                },
                // 给菜单绑定快捷键，可能有一些快捷键是电脑自带的快捷键，设置了可能不行 比如 ctrl + c
                accelerator: "ctrl+n"
            },
            {
                label: "编辑"
            }
        ]
    },
    {
        label: "操作",
        submenu: [
            // 系统自带的快捷键需要借助 role 属性来绑定
            {
                label: "复制",
                role: "copy",
            },
            // 使用分隔符不同label之间有一条横线
            {
                type: "separator",
            },
            {
                label: "粘贴",
                role: "paste",
            }
        ]

    }, {
      label: '查看',
      submenu: [{
          label: '显示工具栏',
          type: 'checkbox',
          checked: true,
          click(ev) {
            // 输出选中状态
            console.log(ev.checked ? '已选中' : '未选中');
          }
        },
        {
          label: '显示状态栏',
          type: 'checkbox',
          checked: false,
          click(ev) {
            // 输出选中状态
            console.log(ev.checked ? '已选中' : '未选中');
          }
        }
      ]
    }, {
      label: '主题配色风格',
      submenu: [{
          label: '亮色',
          type: 'radio',
          checked: true,
          click(ev) {
            if (ev.checked) console.log('Light');
          }
        },
        {
          label: '暗色',
          type: 'radio',
          click(ev) {
            if (ev.checked) console.log('Dark');
          }
        },
        {
          label: '高对比度',
          type: 'radio',
          click(ev) {
            if (ev.checked) console.log('High contrast');
          }
        }
      ]
    }
];

// 3. 用于构建MenuItem
let menuBuilder = Menu.buildFromTemplate(menuTemplate);

// 4. setApplicationMenu 在macOS上将 menu设置成应用内菜单 在windows和Linux上，menu 将会被设置成窗口顶部菜单
Menu.setApplicationMenu(menuBuilder);

// 5. 主进程中引入 menu.js , 运行electron
//  background.js文件中
import "./js/menu"
```

重启electron项目，可以看到菜单栏已变成自定义的了。



### 侧边菜单栏

 借鉴  [vue + electronの文件读写_Electron_空城机_InfoQ写作社区](https://xie.infoq.cn/article/ba9f61c8506c9b67f6b34de06)    [Menu | Electron (electronjs.org)](https://www.electronjs.org/zh/docs/latest/api/menu) 

主进程中background.js/main.js

```js
import {
    app,
    protocol,
    BrowserWindow,
    ipcMain,
    Menu
} from 'electron'

async function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // frame: false, // 去掉默认的标题栏

        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webSecurity: false, // 设置跨域问题
            enableRemoteModule: true
        },

    })

    if (process.env.WEBPACK_DEV_SERVER_URL) {
        await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
        if (!process.env.IS_TEST) win.webContents.openDevTools()
    } else {
        createProtocol('app')
        win.loadURL('app://./index.html')
    }
    
    //  主要是通过主进程的通讯来实现   ipcMain
    ipcMain.on('show-context-menu', (event) => {
        const template = [{
                label: 'Menu Item 1',
                click: () => {
                    event.sender.send('context-menu-command', 'menu-item-1')
                }
            },
            {
                type: 'separator'
            },
            {
                label: 'Menu Item 2',
                type: 'checkbox',
                checked: true
            }
        ]
        const menu = Menu.buildFromTemplate(template)
        menu.popup(BrowserWindow.fromWebContents(event.sender))
    })
}
```

vue项目中不能在vue项目中直接引入  ipcRenderer  ，否则报错

1 在`public`文件夹下可以创建一个`static`文件夹，然后创建`renderer.js`文件，渲染进程的一部分需要调用`electron`的代码可以放在这里。

2  此 js 文件要引入`public`的 index.html 文件当中 

```
// public/static/renderer.js

const {
    ipcRenderer
} = require('electron');
window.ipcRenderer = ipcRenderer;
```

3 index.html引入

```
<script src="./static/renderer.js"></script>
```

4  渲染进程发送信息给主进程，打开菜单栏，如果全局使用，可以直接放在  public/static/renderer.js  文件里，

页面单独使用，可以放在vue文件的mounted里执行

```

window.addEventListener('contextmenu', (e) => {
    //e.preventDefault()阻止默认事件
    e.preventDefault()
    // 向主进程发送信息
    window.ipcRenderer.send('show-context-menu')
})

window.ipcRenderer.on('context-menu-command', (e, command) => {
    // ...
    console.log("e", e)
})
```

### 系统托盘

```js
import {
    app,
    protocol,
    BrowserWindow,
    ipcMain,
    Menu,
    Tray
} from 'electron'

// 打开electron，发现系统托盘的图标过一段时间后会自动消失    因为当声明Tray模块中的变量时，没有将其声明为全局变量，导致在运行过程中，会被垃圾回收机制回收掉。所以在ready之前定义tray变量
let tray = null
app.on('ready', async() => {
    if (isDevelopment && !process.env.IS_TEST) {
        // Install Vue Devtools
        try {
            await installExtension(VUEJS_DEVTOOLS)
        } catch (e) {
            console.error('Vue Devtools failed to install:', e.toString())
        }
    }
    createWindow()

    tray = new Tray('dot.png');
    tray.setToolTip('This is my application')
    tray.setTitle('This is my title')

    const contextMenu = Menu.buildFromTemplate([{
            label: 'Item1'
        },
        {
            label: 'Item2'
        },
        {
            label: 'Item3'
        },
        {
            label: 'Item4'
        }
    ])

    tray.setContextMenu(contextMenu)
})
```

## 窗口设置

```js
const win = new BrowserWindow({
        width: 800,
        height: 600,
    
        resizable: true,//规定窗口是否可以改变尺寸默认是true
        maxWidth: 1000,
        maxHeight: 800,
        minWidth: 600,
        minHeight: 400,
    
    	show: false, //设置窗口是否显示 默认true
    
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

// 页面白屏解决：设置show: false,在ready-to-show时触发一次win.show()
win.once('ready-to-show', function() {
        console.log('ready-to-show')
        win.show()  //控制窗口的显示
    })

    // 设置窗口显示位置（x,y显示坐标）
    win.setBounds({
        x: 500,
        y: 500
    })

    win.on('show', function () {
          mainWin.maximize() //窗口最大化，把maxWidth，maxHeight等注释掉才行
            // minimize() //窗口最小化
            // close() 
    })
```

## 调用摄像头

摄像头被占用会报错（Could not start video source） 关闭占用的软件即可  

```
<button @click="init">打开摄像头</button>
<div>
  <video id="video" ref="myVideo" muted autoplay ></video>

</div>

<script>

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
        console.log("stream",stream)
          this.$refs.myVideo.srcObject=stream
          this.$refs.myVideo.play()
        
      }
    }
  }
</script>
```

## 调用屏幕内容

只要更改stream的获取即可

```
const stream= await navigator.mediaDevices.getDisplayMedia({video:true})
```

## 屏幕录制和播放

```vue
<template>
  <div id="app">
    <div id="nav">
      <div>
        <video id="video" ref="myVideo"  autoplay ></video>

      </div>
      <div>
        <button c1ass="btn" @click="startRecord">升始录制</button>
        <button class="stop" @click="stop">停止录制</button>
        <button class="play" @click="play">播放</button>
        <video ref="playVideo" autoplay></video>
      </div>
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return{
        stream:null,
        recordInstance:null,
        blobSlice:[]
      }
    },
    methods:{
      async startRecord (){
         this.stream= await navigator.mediaDevices.getUserMedia({
          video:{
            width:1000,
            height:600
          }
         })
        this.$refs.myVideo.srcObject=this.stream
        this.$refs.myVideo.play()
   // MediaRecorder查看 https://developer.mozilla.org/zh-CN/docs/Web/API/MediaRecorder
        this.recordInstance =new MediaRecorder(this.stream,{mimeType:'video/webm'})
        console.log(" this.recordInstance", this.recordInstance )
        if(this.recordInstance){
          this.recordInstance.start()
   //https://developer.mozilla.org/zhCN/docs/Web/API/MediaRecorder/dataavailable_event
          this.recordInstance.ondataavailable=(e)=>{
            console.log(this.blobSlice,'1234','dataavailable')
            this.blobSlice.push(e.data)
          }
   
          this.recordInstance.onstop=(e)=>{
            console.log(this.blobSlice,'123')
          }
        }
        
      },
      stop(){
          //  这里调用sttop会触发this.recordInstance.ondataavailable和this.recordInstance.onstop里面的内容
        this.recordInstance.stop()
      },
      play(){
        const blob =new Blob(this.blobSlice,{type:'video/mp4'})
        const videoUrl =URL.createObjectURL(blob)
        console.log(videoUrl)
        this.$refs.playVideo.src=videoUrl
        this.$refs.playVideo.play()
      }
    },
    


  }
</script>
```

# qiankun  微服务

 官网：[快速上手 - qiankun (umijs.org)](https://qiankun.umijs.org/zh/guide/getting-started#主应用) 

 参考：[基于qiankun（乾坤）的微前端实践总结 - 掘金 (juejin.cn)](https://juejin.cn/post/7121515637624537119#heading-16)   [qiankun-demo: 基于qiankun（乾坤）框架的微前端实践demo (gitee.com)](https://gitee.com/qiaoba_1/qiankun-demo) 

## 主应用（vue搭建）：

安装qiankun：  npm **i** qiankun -S 

在主应用页面上增加一个  显示子应用页面的容器

```vue
<template>
  <div id="app">
    <!-- 主应用内容 -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <!-- 子应用显示的容器 -->
    <div id="vue-son-container"></div>
  </div>
</template>
```

修改入口文件 `main.js` ，通过 qiankun(乾坤) 的 registerMicroApps 和 start 方法注册子应用并启动。

```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

/* 确保装载子应用的容器已创建，等DOM加载完成后启动子应用 */
vueApp.$nextTick( () => {
  /* 注册子应用 */
  registerMicroApps([
    /**
     * name: 子应用名称 - 子应用之间必须确保唯一
     * entry: 子应用入口 - 通过该地址加载微应用
     * container: 子应用挂载节点 - 子应用加载完成后将挂载在该节点上
     * activeRule: 子应用触发的路由规则 - 触发路由规则后将加载该子应用
     */
    {
      name:'vue-son-container',
      entry:'//localhost:8081/about',
      container:'#vue-son-container',
      activeRule:'/app-son-vue'
    }
  ]);
  // 启动子应用
  start();
})
```



## 子应用（vue搭建）：

 首先，在 Vue 子应用的 `src` 目录下新增 `public-path.js` 

```
if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
```

 入口文件 `main.js` 修改，为了避免根 id `#app` 与其他的 DOM 冲突，需要限制查找范围。 （main.js）

```js
import Vue from 'vue'
import App from './App.vue'
import routes from './router'

Vue.config.productionTip = false

let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/app-son-vue/' : '/',
    // 官方建议路由模式为histroy
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
// bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
export async function bootstrap() {
  console.log('进入vue app 子应用的bootstrap周期');
}
// 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
export async function mount(props) {
  console.log('进入vue app 子应用的mount周期', props);
  render(props);
}
// 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
export async function unmount() {
  console.log('进入vue app 子应用的unmount周期');
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}


```

子应用 vue.config.js配置如下代码，否则会报错，错误和原因 应该是   application ‘xxx‘ died in status LOADING_SOURCE_CODE: [qiankun\] You need to export lifecycle functio_喜樂的CC的博客-CSDN博客](https://blog.csdn.net/qq_40259641/article/details/125501246) 

```
// const { name } = require('./package');
const name="vue-son-container"
module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};
```

