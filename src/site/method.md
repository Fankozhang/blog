---
icon: edit
date: 2022-01-05
tag:
  - question
  - method

typora-copy-images-to: ./
typora-root-url: ..\.vuepress\public
---

# 工作问题及解决方法

## SEO 优化

### meta标签  设置

至少在 meta 设置 title ，description  ，keywords  等属性

[【HTML】前端必须要知道的html中的meta标签，有哪些属性？_html meta属性-CSDN博客](https://blog.csdn.net/qq_38987146/article/details/125850144#:~:text=1 如果设置了 name 属性， meta 元素提供的是文档级别的元数据，应用于整个页面。 2 如果设置了,meta 元素是一个字符集声明，告诉文档使用哪种字符编码。 4 如果设置了 itemprop 属性， meta 元素提供用户定义的元数据。)

搜索引擎抓取是自上而下进行的，把主要的关键性的内容放在前面，可以保证所抓取的内容更符合或代表网站的特征。

### **向各大搜索引擎提交收录自己的站点**

搜索引擎收录了你的网站后，会很大程度上提升网站的排名。下面是常见搜索引擎的收录入口：

百度提交入口：https://ziyuan.baidu.com/linksubmit/url

Google提交入口：http://www.google.com/addurl/?hl=zh-CN&continue=/addurl

360提交入口：http://info.so.360.cn/site_submit.html

搜狗提交入口：http://fankui.help.sogou.com/index.php/web/web/index?type=1

必应提交入口：https://www.bing.com/toolbox/webmaster

### 网页预渲染

vue项目可以通过  prerender-spa-plugin  进行网页预渲染  （最好是静态页面）

[chrisvfritz/prerender-spa-plugin: Prerenders static HTML in a single-page application. (github.com)](https://github.com/chrisvfritz/prerender-spa-plugin)

[Vue使用prerender-spa-plugin进行网页预渲染 - 掘金 (juejin.cn)](https://juejin.cn/post/7059771777525743624)

[Vue项目的SEO优化方案 - 掘金 (juejin.cn)](https://juejin.cn/post/7054108790529982501)

[vue-cli 4.0 3.0预渲染最新完整版 使用prerender-spa-plugin-CSDN博客](https://blog.csdn.net/joy1793/article/details/111554179)

### **其他**

- 少用iframe：iframe中的内容是不会被抓取到的
- 提高网站速度：这也是搜索引擎排序的一个重要指标
- CDN 使用
- 流量：访问你的网站的人越多，排名也会越靠前

## Node 依赖处理

### node

安装：[Download | Node.js (nodejs.org)](https://nodejs.org/en/download)

### npm

[前端开发技术栈（工具篇）：详细介绍npm、pnpm和cnpm分别是什么，使用方法以及之间有哪些关系-CSDN博客](https://blog.csdn.net/zhouruifu2015/article/details/132303744?spm=1001.2101.3001.6650.4&utm_medium=distribute.pc_relevant.none-task-blog-2~default~OPENSEARCH~Rate-4-132303744-blog-134191726.235^v38^pc_relevant_sort_base3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~OPENSEARCH~Rate-4-132303744-blog-134191726.235^v38^pc_relevant_sort_base3&utm_relevant_index=5)

npm 淘宝镜像下载：  npm install --registry=http://registry.npmmirror.com

npm install  --registry=https://registry.npm.taobao.org



搜索是否存在该依赖包:

```
npm search element-ui   
```



### nvm

node版本过高，vue项目运行时报错 ： Error: error:0308010C:digital envelope routines::unsupported

出错原因：因为 node.js V17版本中最近发布的OpenSSL3.0, 而OpenSSL3.0对允许算法和密钥大小增加了严格的限制，可能会对生态系统造成一些影响.

具体原因可查看： [终极解决：Error: error:0308010C:digital envelope routines::unsupported_CSDN博客](https://blog.csdn.net/m0_48300767/article/details/131450325)



为了解决node版本冲突等问题，选择安装 nvm-windows 包管理工具：[Releases · coreybutler/nvm-windows (github.com)](https://github.com/coreybutler/nvm-windows/releases)

node版本管理：[nvm-下载、安装、使用（2023/07/12更新）_nvm 下载-CSDN博客](https://blog.csdn.net/m0_54345753/article/details/131653960)

以下是在nvm-windows中安装和使用Node.js的示例代码：

安装Node.js：

```
nvm install <version>
```

例如，要安装Node.js v14.17.0：

```
nvm install 16.20.0
```

切换Node.js版本：

```
nvm use <version>
```

例如，要切换到Node.js v14.17.0：

```
nvm use 16.20.0
```

查看已安装的Node.js版本：

```
nvm list
```

查看可安装的Node.js版本：

```
nvm list available
```

卸载Node.js：

```
nvm uninstall <version>
```

例如，要卸载Node.js v16.20.0

```
nvm uninstall 16.20.0
```

### nvm报错，淘宝镜像更换

https://blog.csdn.net/qq_48546536/article/details/135947405

### 多个项目复用node_modules (没用过)

[多个项目复用node_modules_node_module 可以多个项目共用一个吗-CSDN博客](https://blog.csdn.net/weixin_42863883/article/details/134835441)

### nrm(管理和切换 nrm 源)

使用方法：

1. **安装**：首先，需要在全局安装 nrm。在命令行中执行以下命令即可：

```
npm install -g nrm
```

1. **查看可用源**：你可以使用以下命令查看当前可用的源列表：

```
nrm ls
```

1. **切换源**：要切换到某个源，可以使用以下命令：

```
nrm use <源名称>
```

例如，要切换到 taobao 源，可以执行：

```
nrm use taobao
```

1. **测试源的速度**：你可以通过以下命令测试各个源的响应速度：

```
nrm test
```

1. **添加自定义源**：如果你有自定义的源，可以通过以下命令添加：

```
nrm add <源名称> <源地址>
```

例如，添加一个名为 myregistry 的自定义源：

```
nrm add myregistry http://myregistry.com/
```

1. **删除源**：如果要删除已添加的源，可以使用以下命令：

```
nrm del <源名称>
```

### yarn

#### yarn install 报错  Expected version "0.4.x". Got "12.12.0"

[yarn install时node版本不一致问题](https://segmentfault.com/a/1190000040164599)

解决查看：[The engine “node“ is incompatible with this module. Expected version_commander@11.0.0: the engine "node" is incompatibl-CSDN博客](https://blog.csdn.net/qq_39352780/article/details/127262242)

```
yarn config set ignore-engines true
```

控制台运行上面的命令，重新 yarn install  ,依赖可以下载成功。



### depcheck检查缺失的依赖项目

##### 首先在项目中全局安装一下

```
npm install -g depcheck
```

##### 然后在你项目的根目录下执行以下命令

```
depcheck
```

Unused dependencies:未使用的依赖关系,这个是你在项目中没有用到的包，删除的时候记得全局搜索下，有的包是真的没用到，有的包你用了，但是在项目中注释掉，暂时先不用，不然后面也是一个大坑。
Unused devDependencies:未使用的依赖模块，这个在你项目中的package.json里的devDependencies这个东西，是不是似曾相识
Missing dependencies:缺少,缺失的依赖关系，这个在你运行项目的时候一老警告的那些东西

原文链接：https://blog.csdn.net/qq_45094682/article/details/130921839

## 部署问题

### 一个nginx中通过不同的路由部署多个vue前端项目

[【Java日常运维】Nginx部署多个vue项目方法以及所遇问题解决方法-CSDN博客-谭任圣博客](https://blog.csdn.net/qq_45248284/article/details/134955797)

步骤完整，正常解决：[使用Nginx部署多个前端Vue项目_nginx配置多个vue前端-CSDN博客](https://blog.csdn.net/qq_41930094/article/details/118570747)



Vue **中如何给路由添加一个统一的前缀**（或者说基路径）

nginx部署时，一个nginx部署多个前端vue项目，通过前缀不同来匹配资源，需要在前端vue项目中加上跟路由，配置如下：

[VUE在现有的路由地址前加一个统一的基础地址_vue中路由统一添加一个地址-CSDN博客](https://blog.csdn.net/weixin_44003789/article/details/109815417)

[Vue 中如何给路由添加一个统一的前缀（或者说基路径） - 掘金 (juejin.cn)](https://juejin.cn/post/7041131131005042725)

```
new Router({
    base: 'abc',  // 统一前缀（基路径）
})
```

加载静态资源 vue.config.js 也要加上配置

```
// 生产环境发布的路径 process.env.VUE_APP_PUBLIC_PATH  ：  ’abc‘
  publicPath: process.env.VUE_APP_PUBLIC_PATH + "/",
```

[vue-router的base和vue.config.js的publicPath区别和联系_vuerouter base-CSDN博客](https://blog.csdn.net/atu1111/article/details/121371310)

[vue - vue中的publicPath讲解-CSDN博客](https://blog.csdn.net/qq_43886365/article/details/128372030)

## Git操作

[Git 常用基本命令使用详细大全_git 命令-CSDN博客](https://blog.csdn.net/qtiao/article/details/97783243)

### git 回退到之前提交的版本

[「git」GitLab代码回滚到某个节点 本地+远程 - 简书 (jianshu.com)](https://www.jianshu.com/p/17e37d399099)

注意：先将现在的代码克隆一份到新的分支，再将现在分支的代码回退到之前的版本，回退代码参照如下：

```undefined
git reset --hard  {commitId}
```

commitId 可以到 git 的历史里面去找。

### Git reset(回滚) 和 revert(撤销)

[Git reset(回滚) 和 revert(撤销)（图文详解）_git revert-CSDN博客](https://blog.csdn.net/Ying_ph/article/details/130761628)

## vscode

### vscode代码片段

 点击Code-首选项-用户代码片段 

 [vsCode 代码片段 自动生成格式 (99cc.vip)](https://99cc.vip/public/tools/vscode_snippet/index.html) 

 [snippet generator (snippet-generator.app)](https://snippet-generator.app/) 

### vscode  弹出扩展主机意外终止...次

第一次遇到这种编辑器类似的问题，在网上找了挺多的解决方法，出现这种情况的原因大概是vscode的插件冲突，解决方法大体上就两种。

一种是卸载VScode,删除掉配置文件。在重装。（麻烦，没试过）

第二种是找出有问题的插件并卸载。查找方法有以下几种（我的vscode装了大概60个插件吧）

- 卸载除基本插件外的所有插件，在一个个装，看到底是哪个有问题。（我感觉相当费时，所以没采用）

- 用vscode的二分查找，这个查找会找出可能存在冲突的插件，并禁用掉，我循环查了四五次，最终问题没有解决（用这个方法有问题的插件没有被筛出来）

  ![vscodeTwoSearch](/vscodeTwoSearch.png)

- 当弹出扩展主机意外终止的弹框时，点击**打开开发人员工具**，查看报错信息中关于host相关的部分，报错信息很长，只需要看头部的错误路径。我的错误路径中有easy-scss。所以猜测可能是安装的easy-scss插件有问题。于是我卸载了这个插件。（问题成功解决，不在弹出扩展主机意外终止弹框）

这种遇到插件冲突的问题确实是很少遇到。我的也是突然出现的。记录一次解决方案。

### vscode eslint setting配置

 [(206条消息) Vscode如何配置属于自己的ESlint_vscode eslint配置_·甘之如饴·的博客-CSDN博客](https://blog.csdn.net/G0000227/article/details/122093671) 

### vscode看不到远程新建的分支，解决方法来了

https://blog.csdn.net/qq_39606853/article/details/122192555

git fetch

### vscode代码爆红

可以尝试切换编辑器右下角的  LF 和 CRLF     切换文件类型的检测

[Delete `␍`eslint(prettier/prettier)错误的解决方法](https://www.cnblogs.com/panwudi/p/17246837.html)

### 快速删除文件夹下所有文件

在我们的项目安装依赖时，会生成 node_modules 文件夹，当出现依赖相关的问题难以解决时，可能会需要删除

node_modules 文件夹，在重新安装，但删除的过程很慢，此时有快速删除的方法。

全局安装  rimraf

```
npm install rimraf -g
```

cd 到需要清空的文件夹父目录 ，控制台输入    `rimraf  ‘要删除的文件名’`    ，即可删除此目录下（包括所有子目录）下的所有文件。当所有文件被清空后，删除对应的文件夹，就可以很快速的删除了。

```
rimraf node_modules
```

快速删除 node_modules

```
rm -r -f node_modules
```

### 合并分支代码

[vscode git分支如何合并 - 代码箱子 - 博客园 (cnblogs.com)](https://www.cnblogs.com/code-box/articles/18467470)



### ts项目爆红解决

####  'xx'is declared but never read.

ts项目定义未使用，编辑器爆红
修改 tsconfig.json 文件的"compilerOptions"选项为false。

```
"compilerOptions": {
    "noUnusedLocals": false, /* 检查未使用的变量 */
    "noUnusedParameters": false,/* 检查未使用的函数参数 */
}
```

#### Cannot find module ‘vue‘.

给 tsconfig.app.json 中的 compilerOptions里添加
“moduleResolution”: “Node”

```
"compilerOptions": {
     "moduleResolution": "Node",
}
```

#### 无法找到模块 " ***.vue"的声明文件

https://segmentfault.com/q/1010000040178399

在你的全局类型定义文件中, 添加以下内容,  例如：vite-env.d.ts

```ts
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
```



#### Module ‘“xx.vue“‘ has no default export.Vetur(1192)

禁用 vetur 插件并重启 vscode 项目



## 提升开发效率

### Code Inspector

[Code Inspector | Code Inspector (fe-dev.cn)](https://inspector.fe-dev.cn/)

点击页面上的 DOM 元素，它能自动打开 IDE 并将光标定位至 DOM 的源代码位置

实测可用，配置简单

### PageSpy

https://test.jikejishu.com/#/docs    [相见恨晚的前端开发利器-PageSpy - 掘金 (juejin.cn)](https://juejin.cn/post/7327691403844665380)

远程调试  PageSpy 是由货拉拉大前端开源的一款用于调试 H5 、或者远程 Web 项目的工具。是一个强大的开源前端远程调试平台，它可以显著提高我们在面对前端问题时的效率。

## 利用Gitee搭建免费图床

 [利用Gitee搭建免费图床（详细教程）_gitee图床-CSDN博客](https://blog.csdn.net/hannah2233/article/details/117025387) 

下载 picGo     [PicGo (molunerfinn.com)](https://molunerfinn.com/PicGo/) 

![vscodeTwoSearch](/image-20231003160627704.png)



gitee创建仓库，生成个人 token,在picGo上配置好 gitee 仓库信息和  个人 token,   typora上配置图像上传的 PicGo 安装位置

![vscodeTwoSearch](/image-20231003161322243.png)

## 前端权限菜单实现

https://mp.weixin.qq.com/s/6SuNY3Y27RGXPx89zCJnEg

## 前端实现上传文件（input实现）

[关于前端实现上传文件这个功能，我只能说so easy！ - 掘金 (juejin.cn)](https://juejin.cn/post/7224402365452238906)

## 文件下载（url）

[Blob (javascript.info)](https://zh.javascript.info/blob)

### 后端返回文件流(文档流)如何下载

例子：

```javascript
// 导出指定字段Excel列表
export function getExcelList (params) {
  return request({
    url: '/getExcel/excel',
    method: 'get',
    responseType: "arraybuffer",
    params: params
  })
}
export function downReport (data) {
  return request({
    url: '/manage/gwyp/exportWord/batch',
    method: 'post',
    responseType: "blob",
    responseEncoding: "utf8",
    data: data
  })
}
```

请求后端文件流的接口要加上  responseType: "arraybuffer"   ，否则导出可能会打不开    

后端返回文件流,res接收，在方法体中输入以下代码，即可下载

```javascript
const content = res
const blob = new Blob([content])
const fileName = "简历信息" + '.xls' // 自定义下载文件的名字，根据不同文件类型跟换后缀名
if ('download' in document.createElement('a')) { // 非IE下载
  const elink = document.createElement('a')
  elink.download = fileName
  elink.style.display = 'none'
  elink.href = URL.createObjectURL(blob)
  document.body.appendChild(elink)
  elink.click()
  URL.revokeObjectURL(elink.href) // 释放URL 对象
  document.body.removeChild(elink)
  }
```

对于blob可点击  [JS中的Blob对象 - 简书 (jianshu.com)](https://www.jianshu.com/p/b322c2d5d778)     

 [JavaScript 中 Blob 对象 - 掘金 (juejin.cn)](https://juejin.cn/post/6844903480704892942)  文章查看  

对于其他的文件下载的内容可参考如下文章：

 [前端文件下载的正确打开方式 (qq.com)](https://mp.weixin.qq.com/s/vZiP2ULrLRtqShDJ9u1n2A) 

### 后端返回图片文档流展示

[前端接收数据流实现图片预览效果--ajax 请求二进制流 图片 文件 XMLHttpRequest 请求并处理二进制流数据_前端接受图片流-CSDN博客](https://blog.csdn.net/CSDN_bare/article/details/114839798)

```
 let src = window.URL.createObjectURL(res)   //将查出的数据转换为图片路径
```

### 后端返回base64图片展示

```
this.src = 'data:image/png;base64,' + res
```



### 根据url下载文件，并设置文件名

```js
            downLoad(){
                this.xhrequest(url,name)
                // url传入下载的连接地址
                //name传文件下载后的文件名字，要加后缀名
            }

           downloadBlob (blob, fileName) {
                try {
                    const href = window.URL.createObjectURL(blob); //创建下载的链接
                    if (window.navigator.msSaveBlob) {
                        window.navigator.msSaveBlob(blob, fileName);
                    } else {
                        // 谷歌浏览器 创建a标签 添加download属性下载
                        const downloadElement = document.createElement("a");
                        downloadElement.href = href;
                        downloadElement.target = "_blank";
                        downloadElement.download = fileName;
                        document.body.appendChild(downloadElement);
                        downloadElement.click(); // 点击下载
                        document.body.removeChild(downloadElement); // 下载完成移除元素
                        window.URL.revokeObjectURL(href); // 释放掉blob对象
                    }
                } catch (e) {
                    console.log("下载失败");
                }
            },

             //  name参数需要有后缀名才行
            async xhrequest(url,name) {
                let data = await fetch(url)
                    .then((response) => response.blob())
                    .then((res) => {
                        let blod = new Blob([res]);
                        this.downloadBlob(blod, name);
                    });
                return data;
            },
```

第二种

 [你真的会用标签下载文件吗? (qq.com)](https://mp.weixin.qq.com/s/W_udbGlYEhdyH1mtdtbrsQ) 

```
ts
复制代码
const downloadByUrl = (url: string, filename: string) => {
    if (!url) throw new Error('当前没有下载链接');

    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = filename;
    // 使用target="_blank"时，添加rel="noopener noreferrer" 堵住钓鱼安全漏洞 防止新页面window指向之前的页面
    a.rel = "noopener noreferrer";
    document.body.append(a);
    a.click();

    setTimeout(() => {
        a.remove();
    }, 1000);
};
```



### 根据url获取文件名

```
// 根据url获取文件名
    getFileNameByUrl (url){
      if (url == null) {
        return
      }
      const b = url.split("/")
      const c = b.slice(b.length - 1, b.length).toString(String)
      return c
    }
```

例子

```javascript
var a="http://www.jb51.net/html/images/logo.gif";
var b=a.split("/");
console.log(b); // ["http:", "", "www.jb51.net", "html", "images", "logo.gif"]
var c=b.slice(b.length-1, b.length).toString(String).split(".");
console.log(c); // ["logo", "gif"]
alert("取得的文件名是:" + c.slice(0, 1)); // 取得的文件名是:logo
```

### 下载url

[JavaScript 实现通过url下载方式_javascript linksetattribute-CSDN博客](https://blog.csdn.net/qq_27694835/article/details/108448372)

## 文件预览

[前端实现word、excel、pdf、ppt、mp4、图片、文本等文件的预览 - 掘金 (juejin.cn)](https://juejin.cn/post/7071598747519549454)

[纯前端文档预览，还要支持所有主流格式，有这一篇就足够了_file-viewer安装-CSDN博客](https://blog.csdn.net/wybaby168/article/details/122842866)

### vue-office  (docx、.xlsx、pdf)

vue-office是一个支持多种文件(docx、.xlsx、pdf)预览的vue组件库，支持vue2和vue3。

官网：https://501351981.github.io/vue-office/examples/docs/guide/  (包含上传文件预览，非Vue框架文件预览，目前不支持doc、xls格式文件的预览)

```
#docx文档预览组件
npm install @vue-office/docx vue-demi

#excel文档预览组件
npm install @vue-office/excel vue-demi

#pdf文档预览组件  (也可直接iframe)
npm install @vue-office/pdf vue-demi
```

使用：

```vue
<template>
    <vue-office-docx 
          src="http://1.94.16.149:9000/test/123.docx"
          style="height:50vh"
          @rendered="rendered"
          @error="errorHandler"
      />
    <vue-office-excel
        src="http://1.94.16.149:9000/test/模板.xlsx"
    />
    <vue-office-pdf 
        src="http://1.94.16.149:9000/test/tjzysx.pdf"
    />
</template>
    
<script setup>
  
//引入VueOfficeDocx组件
import VueOfficeDocx from '@vue-office/docx'
//引入相关样式
import '@vue-office/docx/lib/index.css'

//引入VueOfficeExcel组件
import VueOfficeExcel from '@vue-office/excel'
//引入相关样式
import '@vue-office/excel/lib/index.css'

//引入VueOfficePdf组件
import VueOfficePdf from '@vue-office/pdf'


  const rendered=()=>{
    console.log("渲染完成")
  }
  const errorHandler=()=>{
    console.log("渲染失败")
  }
</script>
```

#### 注意：本地运行正常，部署后报错

****.defineComponent is not a function**   可能是vue版本问题,需要

[常见问题 | vue-office (501351981.github.io)](https://501351981.github.io/vue-office/examples/docs/guide/faq.html#definecomponent-is-not-a-function)

### vue-file-viewer

**（支持格式：pptx,docx,xlsx,pdf,mp4,纯文本和图片）**

https://home.me7.cn/file-viewer-doc/index.html#/start

### [onlyoffice官网](https://link.juejin.cn/?target=https%3A%2F%2Fwww.onlyoffice.com%2Fdeveloper-edition.aspx)

没有实践，不确定是否可用

[vue实现预览编辑ppt、word、pdf、excel、等功能的解决方案（内网-前端）前端需求： vue项目内做一个导入 - 掘金 (juejin.cn)](https://juejin.cn/post/7374224361559261218#heading-2)

### kkFileView 文件预览服务部署（可用，效果好）

docker 快速部署 效果好

https://kkfileview.keking.cn/zh-cn/docs/production.html

## 表单（校验）(生成器)

### 一个表单里面添加，删除子级表单

#### **(ant-design-vue  演示)**

一个表单里面填写多个子表单

表单数据样式为

```
form:{
    form1:'....',
    form2:'.....',
    form3:'......',
    form4:[
        {
            name:'',
            age:''        
        },
        {
            name:'',
            age:''        
        },
        {
            name:'',
            age:''        
        }    
    ]
}
```

form是外层表单数据，form1,form2,form3为外层表单里的基本数据，form4为可添加的子表单数据，form4数组里的每个对象对应一条子表单数据，增加时，form4数组中增加一个对象，删除时，form4s数组中减少一个对象

主要关注子表单的prop绑定

```html
<a-form-model ref="form" :model="form">
    <a-form-model-item
      prop="form1"
    >
      <a-input/>
    </a-form-model-item>
    <a-form-model-item
      prop="form2"
    >
      <a-input/>
    </a-form-model-item>
    <a-form-model-item
      prop="form3"
    >
      <a-input/>
    </a-form-model-item>
    
    <a-row
      v-for="(item, index) in form.form4"
      :key="index"
      class="platForm-item"
    >
      <a-form-model-item
        label="平台名称"
        :prop="'form4.' + index + '.name'"
      >
        <a-input />
      </a-form-model-item>
        
      <a-form-model-item
        label="平台年龄"
        :prop="'form4.' + index + '.age'"
      >
        <a-input />
      </a-form-model-item>
      
      <div>
        <a-button @click="delForm(item, index)">
        <a-icon type="delete"></a-icon> 删除</a-button>
      </div>
    </a-row>
    
    <div style="text-align: center; margin-top: 10px">
      <a-button @click="addForm">新增</a-button>
    </div>
</a-form-model>
```

```
<el-form-item label="类别" :prop="'form.' + index + '.type'"
                    :rules="[
                      {
                        required: true,
                        message: '教育类别不能为空',
                        trigger: 'change',
                      }
                    ]">
                      <el-select :disabled="disabled"
                        v-model="educForm.form[index].type"
                        placeholder="请选择教育类别"
                        maxlength="30"
                        style="width: 100%"
                      >
                        <el-option
                          v-for="dict in educType"
                          :key="dict.value"
                          :label="dict.label"
                          :value="dict.value"
                        ></el-option>
                      </el-select>
                    </el-form-item>

data:{
	 educForm:{
        form:[{},{}]
      }
}
```

增加子表单时

```
addForm(){
    this.form.form4.push({
      //  platEdit: true,
    });
}

```

每一个子表单有一个删除按钮，点击子表单的删除按钮时

```
delForm(item, index){
    this.form.form4.splice(index, 1);
    this.$forceUpdate();
}
```

### 正则表达式

[邮箱、手机号、url等常用正则表达式-腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1751120)



邮箱正则表达式（能够匹配@126.com结尾）： /[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/

​                                                                                  /^[A-Za-z0-9u4e00-u9fa5]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/

用户注册弱口令问题：   正则匹配6-16位包含数字字母特殊字符的密码`/(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,16}/`

身份证号：   /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/

```
    var checkName = (rule, value, cb) => {
      //验证名字的正则表达式
      const regName = /^([\\u4e00-\\u9fa5]{1,20}|[a-zA-Z\\.\\s]{1,20})$/;
      if (regName.test(value)) {
        //正确的名字
        return cb();
      }
      cb(new Error("请输入正确的名字"));
    };

```



### this.$refs[formName].validat验证（自定义校验）

验证不生效可参考文章  https://www.jianshu.com/p/5ebd1bd9ecaf

我的不生效原因是  自定义的正则校验有问题,正确的可以参考如下：

```
data(){
	 // 验证手机的规则（验证时更改正则表达式即可）
    var checkMobile = (rule, value, cb) => {
      if (/^1[3456789]\d{9}$/.test(value) || /^\d{3}-\d{7,8}|\d{4}-\d{7,8}$/.test(value))      {
        return cb()
      }
      // 返回一个错误提示
      cb(new Error("请输入合法的手机号码"))
    }
    
     return {
      rules: {
        //  chargePhone是prop的值
        chargePhone: [
          { required: true, message: "请输入电话", trigger: "blur" },
          { validator: checkMobile, trigger: "change" },
        ]
      }
      ]

}


   {
      trigger: "blur",
      validator: (rule, value, callback) => {
        if (!form.value.city) {
          callback(new Error("请选择所在地市"));
        }  else {
          callback();
        }
      },
    },
```

直接在dom里添加验证参考：( /^1[3456789]\d{9}$/)  手机号校验

```
<a-form-model-item
    prop="phone"
    
   :rules="[{ required: true, message: '请输入联系方式', trigger: 'blur' },{ pattern:       /^1[3456789]\d{9}$/, message: '手机号码格式不正确', trigger: 'blur' }]"
   
    label="电话"
>

```

 



### 自定义表单（表单生成器）

简易表单生成器  [Vue3项目我做到让组员的表单开发效率提示30%！ (qq.com)](https://mp.weixin.qq.com/s/qVYPFvAEV7HpqiTkVO0GjA)

 [vue拖拽表单生成器 - 掘金 (juejin.cn)](https://juejin.cn/post/7065863860669906952) 

适用ant design vue  ( [KFormDesign (gitee.io)](http://kcz66.gitee.io/k-form-design/#/README) )

k-form-create使用

main.js

```
import { useAntd } from 'k-form-design/packages/core/useComponents'
import KFormDesign from 'k-form-design/packages/use.js'
import 'k-form-design/lib/k-form-design.css'
// 有自己的颜色需求按照官网去配置，不生效，将node_modules下的k-for-design.css的样式源码粘出来，全局修改里面的颜色，在main.js引入自己改过的样式文件

useAntd(Vue)
Vue.use(KFormDesign)
```

 k-form-design.vue

```vue
<template>
  <page-header-wrapper>
    <a-card>
      <k-form-design ref="kfd" :showHead="false" hideResetHint @save="handleSave" />
    </a-card>
  </page-header-wrapper>
</template>

<script>
import { setFormDesignConfig } from "k-form-design"
import storage from 'store'
import { ACCESS_TOKEN } from '@/store/mutation-types'
export default {
  data () {
    return {}
  },
  watch: {},
  mounted () {
      // 对上传文件的部分做设置
    setFormDesignConfig({
      uploadFile: "/api/upload", // 上传文件地址
      uploadImage: "/api/upload", // 上传图片地址
      uploadFileName: "", // 上传文件name
      uploadImageName: "", // 上传图片name
      uploadFileData: { }, // 上传文件额外参数
      uploadImageData: { }, // 上传图片额外参数
      uploadFileHeaders: { Authorization: 'Bearer ' + storage.get(ACCESS_TOKEN) }, // 上传文件请求头部
      uploadImageHeaders: { Authorization: 'Bearer ' + storage.get(ACCESS_TOKEN) } // 上传图片请求头部
    })
  },
  methods: {
  		handleSave(){
  			// 点击保存时调用这个方法
  		}
  }
}
</script>

```

回显

```vue
<template>
  <div>
    <a-modal :title="title" :visible="visible" @cancel="handleCancel" width="80%">
      <template slot="footer">
        <a-button type="primary" @click="save" v-if="title != '查看'"> 保存 </a-button>
        
      </template>
      <div>
        <a-row>
          <div>
            <k-form-build :defaultValue="defaultValue" ref="kfb" :value="jsonData" :disabled="disabled"></k-form-build>
          </div>
        </a-row>
      </div>
    </a-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: "",
      visible: false,
      jsonData: {},
      form: this.$form.createForm(this),
      dyData: {},
      formValues: "",
      kimId: "",
      defaultValue: {},
      disabled: false
    }
  },
  components: {},
  created () {},
  mounted () {},
  methods: {
    setFormValue () {
      this.$nextTick(() => {
        this.$refs.kfb.form.setFieldsValue(this.defaultValue)
      })
    },
    handleCancel () {
      this.visible = false
    },
    save () {
      // 使用getData函数获取数据
      this.$refs.kfb
        .getData()
        .then((values) => {
        })
        .catch(() => {
          this.$message.warning("验证未通过，操作失败")
        })
    }
  }
}
</script>

<style lang="less" scoped></style>

```

### ant design vue a-select 下拉搜索

```
 <a-select
            v-model:value="searchCondition.lj"
            show-search   // 开启下拉搜索
            optionFilterProp="label" // 用label属性过滤。
          >
            <a-select-option 
              v-for=" item in list " 
              :value="item.code" 
              :key="index"
              :label="item.name"
            >
              {{ item.name }}
            </a-select-option>
          </a-select>
```



## 适配

### 微信修改字体大小或者开启关怀模式导致H5页面错乱的解决方案

[微信修改字体大小或者开启关怀模式导致H5页面错乱的解决方案-CSDN博客](https://blog.csdn.net/m0_47791238/article/details/128460101#:~:text=原因：当微信内修改默认字体大小或者开启微信内关怀模式，由于H5页面是在微信内置浏览器中打开，所以字体也会随之修改，导致页面布局改变。,解决方案： 需要给安卓、ios同时添加配置，禁止内置浏览器修改H5页面。)

```
安卓 在script标签内添加方法，通过方法进行配置

(function () {
          if (typeof WeixinJSBridge === 'object' && typeof WeixinJSBridge.invoke === 'function') {
              handleFontSize()
          } else {
              if (document.addEventListener) {
                  document.addEventListener('WeixinJSBridgeReady', handleFontSize, false)
              } else if (document.attachEvent) {
                  document.attachEvent('WeixinJSBridgeReady', handleFontSize)
                  document.attachEvent('onWeixinJSBridgeReady', handleFontSize)
              }
          }
          function handleFontSize () {
              // 设置网页字体为默认大小
              WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 })
              // 重写设置网页字体大小的事件
              WeixinJSBridge.on('menu:setfont', function () {
                  WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 })
              })
          }
      })()
      
      
ios 在style标签内添加样式，通过修改样式进行配置

  body { /* IOS禁止微信调整字体大小 */
            -webkit-text-size-adjust: 100% !important;
            text-size-adjust: 100% !important;
            -moz-text-size-adjust: 100% !important;
        }
```



### vue项目（两套路由）适配  pc端 移动端

vue项目开发中，我们已经开发实现了pc端的网站开发，当想要实现移动端适配时，当时有两种适配的方法作为参考。  

一种是通过媒体查询适配不同的分辨率显示不同的样式。  

第二种是写两套路由，一套pc端路由，一套移动端路由，移动端页面适当移植pc端页面代码，修改部分样式，以达到手机端显示正常的样式和结构。通过js判断使用设备是pc端还是移动端，来匹配不同的路由，显示不同的页面。  

最终采用的是第二种实现方案，。 因为使用第二种方法对PC端和移动端进行了区分。对于PC端和移动端的特殊样式可以做到更加适配。以下是对于判断设备是手机端还是pc端参考的文章。

**vue-判断设备是手机端还是pc端，进行两套页面样式的编写**

[(115条消息) vue-判断设备是手机端还是pc端，进行两套页面样式的编写_hh3167253066的博客-CSDN博客_vue判断手机端还是pc端](https://blog.csdn.net/hh3167253066/article/details/120290307)

**vue项目PC端移动端适配方案**

[(115条消息) vue项目PC端移动端适配方案_coderDragon的博客-CSDN博客_vue项目pc端和移动端适配](https://blog.csdn.net/weixin_53876218/article/details/125225893)



### 媒体查询 @media

常见的屏幕尺寸

```yaml
yaml复制代码分辨率   比例 | 设备尺寸

1024 * 500		（8.9 寸）
1024 * 768		（4 : 3  | 10.4 寸、12.1 寸、14.1 寸、15 寸）
1280 * 800		（16 : 10  |15.4 寸）
1280 * 1024		（5：4  | 14.1寸、15.0寸）
1280 * 854		（15 : 10 | 15.2）
1366 * 768		（16：9 | 不常见）
1440 * 900		（16：10  17寸 仅苹果用）
1440 * 1050		（5：4  | 14.1寸、15.0寸）
1600 * 1024		（14：9 | 不常见）
1600 * 1200		（4：3 | 15、16.1）
1680 * 1050		（16：10 | 15.4寸、20.0寸）
1920 * 1200		（23寸）
```

- 通过 `@media` 判断设备的尺寸应用不同的 `css` 样式

```
// 屏幕大于 1024px 或小于 1440px 时应用该样式
@media screen and (min-width: 1024px) and (max-width: 1440px) {
  
}

// 屏幕大于 1440px 时应用该样式
@media screen and (min-width: 1441px) { 
  
}
```



### vue项目适配屏幕分辨率与屏幕的缩放适配

修改initial-scale的数值，原值为1.0，根据屏幕显示调整。

```
<meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=0.28, maximum-scale=0.28, minimum-scale=0.28">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
```

 [(198条消息) vue项目适配屏幕分辨率与屏幕的缩放适配详细教程_vue 分辨率适配_汪小敏同学的博客-CSDN博客](https://blog.csdn.net/weixin_44692055/article/details/127843876) 



### PC端网站在手机模式下打开显示不全的问题

 [(227条消息) PC端网站在手机模式下打开显示不全的问题_手机pc端口 显示不全面_大大大颖er的博客-CSDN博客](https://blog.csdn.net/ddyy2695734664/article/details/113248509) 



### 屏幕适配分辨率，不随屏幕缩放比变化

utils/devicePixelRatio.js  (复制后在app.vue的created生命周期调用)

```js
class DevicePixelRatio {
    constructor () {
            // this.flag = false;
        }
        // 获取系统类型
    _getSystem () {
            // let flag = false;
            var agent = navigator.userAgent.toLowerCase()
            //		var isMac = /macintosh|mac os x/i.test(navigator.userAgent);
            //		if(isMac) {
            //			return false;
            //		}
            // 现只针对windows处理，其它系统暂无该情况，如有，继续在此添加
            if (agent.indexOf("windows") >= 0) {
                return true
            }
        }
        // 获取页面缩放比例
        //	_getDevicePixelRatio() {
        //		let t = this;
        //	}
        // 监听方法兼容写法
    _addHandler (element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false)
            } else if (element.attachEvent) {
                element.attachEvent("on" + type, handler)
            } else {
                element["on" + type] = handler
            }
        }
        // 校正浏览器缩放比例
    _correct () {
            const t = this
            // 页面devicePixelRatio（设备像素比例）变化后，计算页面body标签zoom修改其大小，来抵消devicePixelRatio带来的变化。
            document.getElementsByTagName("body")[0].style.zoom = 1 / window.devicePixelRatio
        }
        // 监听页面缩放
    _watch () {
            const t = this
            t._addHandler(window, "resize", function () { // 注意这个方法是解决全局有两个window.resize
                // 重新校正
                t._correct()
            })
        }
        // 初始化页面比例
    init () {
        const t = this
        if (t._getSystem()) { // 判断设备，目前只在windows系统下校正浏览器缩放比例
            // 初始化页面校正浏览器缩放比例
            t._correct()
            // 开启监听页面缩放
            t._watch()
        }
    }
}
export default DevicePixelRatio

```

App.vue

```vue
<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view />

    </div>
  </a-config-provider>
</template>

<script>
import DevicePixelRatio from './utils/devicePixelRatio'

export default {
  data () {
    return {}
  },
  created () {
    new DevicePixelRatio().init()
  }
  watch: {
    $route: () => {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

```

### postcss

**使用postcss和相关插件时一定要注意包的版本的冲突**

npm install postcss postcss-loader -D 

https://juejin.cn/post/7062717813764390948

 **[postcss-px2vp](https://github.com/sexyHuang/postcss-px2vp)**

### vue 使用postcss-pxtorem 实现自适应

 [(230条消息) vue-cli中使用postcss-px-to-viewport 将px转换成vw_px to vw_蒲公英芽的博客-CSDN博客](https://blog.csdn.net/Charissa2017/article/details/105420971) 

### vue 使用postcss-pxtorem 实现自适应

https://juejin.cn/post/7052955004683943950

https://juejin.cn/post/7041826704574119966

- postcss-pxtorem：将px转换为px
- amfe-flexible：为html、body添加font-size，窗口调整时候重新设置font-size

```
npm install amfe-flexible --save
npm install postcss-pxtorem --save-dev
```

 如果报错，则需要指定postcss-pxtorem版本，如： npm install [postcss-pxtorem@5.1.1](https://link.juejin.cn/?target=mailto%3Apostcss-pxtorem%405.1.1) --save-dev 

main.js引入

```
import 'amfe-flexible'
```

创建postcss.config.js配置文件

```
module.exports = {
    plugins: {
        autoprefixer: {},
        // flexible配置
        "postcss-pxtorem": {
            "rootValue": 75, // 设计稿宽度的1/10，自己根据项目需要设置
            "propList": ["*"] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
        }
    }
}
```

## 时间操作：

### js操作

[JavaScript日期时间操作完整指南！ - 掘金 (juejin.cn)](https://juejin.cn/post/7254127644211822653#heading-30)

可以使用 `newDate()` 来创建日期，传入的参数通常有4种常用的方式：

1. 使用日期字符串参数
2. 使用一系列的参数
3. 时间戳参数
4. 不带参数

```
new Date('1988-03-21')
```

如果创建没有任何参数的日期，则会将日期设置为当前时间（以本地时间为单位）。

```
new Date()     // 获取当前时间
```

注意， 创建一个新Date对象的唯一方法是通过 `new` 操作符，例如：`let now = new Date();` 若将它作为常规函数调用（即不加 `new` 操作符），将返回一个字符串，而非 `Date` 对象。



使用 `getTime()` 方法来获取当前时间戳

```
const currentDate = new Date();
const timestamp = currentDate.getTime();
```

### 时间库

[moment.js 与 day.js 日期库在项目中应用时，该如何选择 - 掘金 (juejin.cn)](https://juejin.cn/post/6922398807472750605)

Day.js:推荐使用   [解析 · Day.js](https://day.js.org/docs/zh-CN/parse/parse)

### 比较时间

在比较时间时，首先需要创建日期对象，<、>、<= 和 >= 都可以工作。 因此，比较 两个日期就很简单：

```javascript
const date1 = new Date("July 19, 2014");
const date2 = new Date("July 28, 2014");

if(date1 > date2) {
    console.log(date1);
} else {
    console.log(date2);
}
```



### 根据出生日期计算年龄

年龄格式：2022-01-12

```js
 // 根据出生日期获取年龄
    getAge(birthday) {
      // 新建日期对象
      const date = new Date();
      // 今天日期，数组，同 birthday
      const today = date.getFullYear();
      const month = date.getMonth() + 1;
      if (birthday) {
        const birth = birthday.split("-")[0];
        const birthMonth = birthday.split("-")[1];
        var age = today - birth;
        if (month < birthMonth) {
          age--;
        }
        // 分别计算年月日差值
        return age;
      }
    },
```



## 数据格式转化

### 列表形数据转树形数据

来自若依框架

```js
/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 */
export function handleTree(data, id, parentId, children) {
  let config = {
    id: id || 'id',
    parentId: parentId || 'parentId',
    childrenList: children || 'children'
  };

  var childrenListMap = {};
  var nodeIds = {};
  var tree = [];

  for (let d of data) {
    let parentId = d[config.parentId];
    if (childrenListMap[parentId] == null) {
      childrenListMap[parentId] = [];
    }
    nodeIds[d[config.id]] = d;
    childrenListMap[parentId].push(d);
  }

  for (let d of data) {
    let parentId = d[config.parentId];
    if (nodeIds[parentId] == null) {
      tree.push(d);
    }
  }

  for (let t of tree) {
    adaptToChildrenList(t);
  }

  function adaptToChildrenList(o) {
    if (childrenListMap[o[config.id]] !== null) {
      o[config.childrenList] = childrenListMap[o[config.id]];
    }
    if (o[config.childrenList]) {
      for (let c of o[config.childrenList]) {
        adaptToChildrenList(c);
      }
    }
  }
  return tree;
}

```

### js树形数据查找父节点

```js
// 查找父节点 （id是查找的id, list是树形结构数据）
const findP=(id:any, list = [], result = []) =>{
      for (let i = 0; i < list.length; i += 1) {
        // console.log('*******', list[i].id, '********')
        const item = list[i]
        // 找到目标
        if (item.id === id) {
          // console.log('找到了')
          // 加入到结果中
          result.push(item.id)
          // 因为可能在第一层就找到了结果，直接返回当前结果
          if (result.length === 1) return result
          return true
        }
        // 如果存在下级节点，则继续遍历
        if (item.children) {
          // 预设本次是需要的节点并加入到最终结果result中
          result.push(item.id)
          const find = findP(id, item.children, result)
          // 如果不是false则表示找到了，直接return，结束递归
          if (find) {
            return result
          }
          // 到这里，意味着本次并不是需要的节点，则在result中移除
          result.pop()
        }
      }
      // 如果都走到这儿了，也就是本轮遍历children没找到，将此次标记为false
      return false
    }
```



### js通过id匹配树形结构中的一条数据

[js通过id匹配树形结构中的一条数据_js拿到id怎么匹配树数据的那一项-CSDN博客](https://blog.csdn.net/leile_wkle/article/details/107560651#:~:text=%40输入参数 id： 要查找数据对应的id %40输入参数 list： 要查询的树形结构数组 %40输出：返回该数据或null function,let res %3D list.find(item %3D> item.id %3D%3D id))

## bug类



### vue项目使用scss时，版本冲突

下载scss后，启动项目报错，这个错误发生的原因是node和scss的版本不兼容，出现这种问题需要去网上查找兼容的scss版本，在重新安装。（找这个还挺麻烦的，来回卸载重下（试错）还是很费时的。版本冲突很麻烦，推荐使用less）

我的node的版本是  v16.13.1，以下是和我的node版本兼容的scss版本

**安装node-sass**

```
npm install node-sass@6.0.1 --save-dev
```

**安装sass-loader**

```
npm install sass-loader@10.2.0 --save-dev
```

参考：[又报gyp ERR！为什么有那么多人被node-sass 坑过？ (qq.com)](https://mp.weixin.qq.com/s/ZRyJHmfskw5F3uwi9ASe2Q)



### Vue开发中出现Loading Chunk Failed 踩坑纪实

（出现这个错误会页面空白）

 [Vue开发中出现Loading Chunk Failed 踩坑纪实 - 掘金 (juejin.cn)](https://juejin.cn/post/7080189425975558181)    

### vue的v-html解析富文本传来的表格不显示边线

 [(210条消息) 更改v-html的样式_v-html 样式修改_oduoke~~的博客-CSDN博客](https://blog.csdn.net/xh1506101064/article/details/106675796) 

```
<div class="content-table" v-html="abc"></div>


css  注意：/deep/  不能缺少
.content-table{
  /deep/table {
        border-collapse: collapse !important;
        td,th {
          text-align: center;
        border: 1px solid #ccc !important;
        min-width: 50px !important;
        height: 20px !important;
    }
    th {
        background-color: #f1f1f1 !important;
    }
    }

}
```

## vue如何判断项目是开发环境还是线上环境或者本地环境

[vue配置多个运行环境、打包环境，通过运行指令切换环境，通过切换环境控制对应环境的参数_anted-vue-admin 多环境-CSDN博客](https://blog.csdn.net/mrliucx/article/details/124494765)

[VUE项目使用.env配置多种环境以及如何加载环境_.env.staging-CSDN博客](https://blog.csdn.net/qq_41428418/article/details/137970612)

```
if (process.env.NODE_ENV == "development") {
  //开发环境
} else if (process.env.NODE_ENV == "production") {
  //生产环境
}else{
	//本地环境
}
```



## vue2组件内定时器的使用

mounted里面设置和清除定时器  [Vue2 里如何优雅的清除一个定时器-阿里云开发者社区 (aliyun.com)](https://developer.aliyun.com/article/1410991)

```
export default {
  data() {
    return {
    }
  },
  mounted() {
    let timer = setInterval(() => {
      console.log('---定时器在触发---')
    }, 1000)
    this.$once('hook:beforeDestroy', () => {
      console.log('这里使用 hook 监听 beforeDestroy 生命')
      clearInterval(timer)
      timer = null
    })
  },
  methods: {
  }
}
```



## vue里cdn改为本地js文件引用（缺少网络）

[vue里cdn引入改为本地js文件引用](https://www.cnblogs.com/qingjiawen/p/17292707.html)

下载vue.config.js里面需要引入的 js文件 到public文件夹下

在index.html引入

```js
<% if(process.env.NODE_ENV === 'production' && process.env.VUE_APP_PREVIEW!='true'){
      %>
      <script src="/static/vue.main.js"></script>
      <script src="/static/vue-router.min.js"></script>
      <script src="/static/vuex.min.js"></script>
      <script src="/static/axios.min.js"></script>
      <%
  } %>
```



## vue实现全屏滚动效果

查看以下博客 [(130条消息) vue全屏滚动——vue-fullpage.js教程_朝阳39的博客-CSDN博客_vue-fullpage](https://blog.csdn.net/weixin_41192489/article/details/111104443) 

## vue页面中的锚点跳转

在vue项目中，页面中设置锚点，并在某一位置跳转到锚点位置

```html
<p id="info-title">基本信息</p>        跳转到的地方 根据id跳转

<li @click="go('info-title')"><i class="el-icon-circle-check" ></i>基本信息</li>          从这个地方跳转
```

```javascript
go (id) {
      const anchor = document.getElementById(id)
      console.log("distance", anchor)
      let distance = 0
      const total = anchor.offsetTop
      console.log("distance", distance)
      const step = total / 30

      jump()

      function jump () {
        if (distance < total) {
        distance += step
        document.documentElement.scrollTop = distance
        document.body.scrollTop = distance
        window.pageYOffset = distance
        // setTimeout(jump, 10)
        jump()
      } else {
        document.documentElement.scrollTop = total
        document.body.scrollTop = total
        window.pageYOffset = total
      }
      }
    }
```



滚动参考：[排行榜--实现点击视图自动滚动到当前用户所在位置.需求 我们今天来实现一下,点击当前用户的div, 自动滚动到用户在排行 - 掘金 (juejin.cn)](https://juejin.cn/post/7403576996393910308)



## vue路由导航守卫

```js
// router文件中
{
    path:'/...'
    name:'...'
    meta:{isLogin:true}  // true显示，false不显示
}

//  路由全局首位
router.beforeEach((to,from,next)=>{
    //   登录验证  1 进入路由界面是否需要验证
    //  2  再验证是否登录
    if(to.meta.isLogin){    // true需要登录
    //  再验证是否登录，假设已经登录
        let token=window.sessionStorage.getItem('token');
        if(token){
            next()        
        }else{
            //  没有登陆过，跳转登录界面
            next('/login')        
        }    
    }else{
        next()    
    }
})
```



## vue  this.$router 跳转打开新页面

[vue-router跳转时打开新页面的两种方法_vue路由跳转方式 target=black-CSDN博客](https://blog.csdn.net/qq_37939251/article/details/106240043)

```
go (item) {
      const url = this.$router.resolve({ path: '/job/company', query: { id: item.id } })
      window.open(url.href, '_blank')
    },
```



## git中上传时忽略文件 .gitignore  配置

 对于.gitignore的配置可参考如下的文章

[(132条消息) Git忽略文件.gitignore详解_ThinkWon的博客-CSDN博客_gitignore](https://blog.csdn.net/ThinkWon/article/details/101447866) 

 [Git入门之.gitignore - 掘金 (juejin.cn)](https://juejin.cn/post/6998911250323390501) 

普通的vue文件的可参考如下配置：

```
.DS_Store
node_modules/
dist/


# local env files
.env.local
.env.*.local

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw*
package-lock.json
yarn.lock

```

## nprogress使用

当网页进行路由跳转时，在网页上显示进度条。可以使用nprogress。起过渡和美化的作用

```
cnpm install nprogress
```

```
import nprogress from "nprogress";
import "nprogress/nprogress.css"
```

在拦截器加上nprogress,  nprogress.start()进度条开始    nprogress.done()进度条结束

```
request.interceptors.request.use((config)=>{
    // 进度条开始
    nprogress.start()
    return config
})

request.interceptors.response.use(
    (res)=>{ 
    // 进度条结束
    nprogress.done();  
    return res.data},
    (error)=>{ return Promise.reject(new Error('faile'))}
)
```

## axios请求获取本地静态文件(动态获取json数据)

```vue
// json数据存放在 public文件夹下(动态获取json数据)

import axios from 'axios'

loadGeoJson (level, adcode) {
    // 不要带有public路径
      const mapUrl = `/static/${level}/${adcode}.json`
      return axios.get(mapUrl)
},
// 如下获取的文件地址为  public/map/city/123.json
loadGeoJson("/map/city","123").then(res=>{
    this.json=res.data
})
```



## 百度地图根据地址解析坐标系（根据地址展示地图位置）

[逆地理编码 gc | 百度地图API SDK (baidu.com)](https://lbs.baidu.com/index.php?title=webapi/guide/webservice-geocoding)

https://dafrok.github.io/vue-baidu-map/#/zh/index

https://www.cnblogs.com/spaortMan/p/13932126.html

vue-jsonp:  [vue-jsonp - npm (npmjs.com)](https://www.npmjs.com/package/vue-jsonp)

### VUE BAIDU MAP(vue2)

```
npm install vue-baidu-map --save

main.js

import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'YOUR_APP_KEY'
})
```

```
npm install --save vue-jsonp

main.js 引入

import { VueJsonp } from 'vue-jsonp' 
Vue.use(VueJsonp)
```

```
<baidu-map :scroll-wheel-zoom="true" class="bm-view" ref="map" :center="mapCenter" :zoom="17">
   <bm-marker
       :position="mapCenterAddress"
       :dragging="false"
       animation=""
   ></bm-marker>
</baidu-map>

// bm-marker  显示地址的红点
// mapCenter 地址的具体中文位置（详细）
// scroll-wheel-zoom  缩放

<style>
.bm-view {
  width: 100%;
  height: 300px;
}
</style>
```

组件内使用     address:'要解析的地址名'  ak:'百度网站上申请的ak,个人标识'   output: 'json',callback: 'showLocation'固定

返回值里   json.result.location是一个包含坐标系的对象

```js
//mapCenter: "",
//mapCenterAddress: { lat: "123", lng: "123" },

// 百度地图地址解析(mapCenter是地址)
    TypeMap () {
      // this.mapCenter = "中国（山东）自由贸易试验区济南片区新泺大街1166号奥盛大厦1号楼2333-2室"
      this.$jsonp('http://api.map.baidu.com/geocoding/v3/', {
        address: this.mapCenter,
        output: 'json',
        ak: '6SBDhZuzz9h00tQd2B5bhjxeTe7zhGgp',
        callback: 'showLocation'
      }).then(json => {
        // 得到我们想要的内容,
        console.log('json', json)
        this.mapCenterAddress.lat = String(json.result.location.lat)
        this.mapCenterAddress.lng = String(json.result.location.lng)
      }).catch(err => {
        console.log(err)
      })
    },
    
    
   mounted(){
   		this.mapCenter = '山东省济南市天桥区1123号'
        this.typeMap()
   }
```

### Vue3 Baidu Map Gl(vue3)

https://yue1123.github.io/vue3-baidu-map-gl/

npm install vue3-baidu-map-gl      npm install vue-jsonp

main.ts  引入组件

```js
import baiduMap from "vue3-baidu-map-gl";

const app = createApp(App);
app.use(baiduMap, {
  ak: "ak",
  plugins: ["TrackAnimation"],
});
```



```vue
<template>
              <BMap
                height="300px"
                :center="mapCenterAddress"
                enableScrollWheelZoom="true"
                enableContinuousZoom="true"
              >
                <BMarker :position="mapCenterAddress" icon="simple_red" />
              </BMap>
</template>


<script setup lang="ts">
import { BCircle } from "vue3-baidu-map-gl";   //中心红点组件
import { jsonp } from "vue-jsonp";
onMounted(() => {
  getAddress();
});

// 中心地址
let mapCenter = ref("山东省济南市历城区汉峪金谷");
// 中心地址坐标系
let mapCenterAddress = ref({ lat: "", lng: "" });
    
const getAddress = () => {
  jsonp("http://api.map.baidu.com/geocoding/v3/", {
    address: mapCenter.value,
    output: "json",
    ak: "ak",
    callback: "showLocation",
  })
    .then((json) => {
      mapCenterAddress.value.lat = String(json.result.location.lat);
      mapCenterAddress.value.lng = String(json.result.location.lng);
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
```



## Vue实现微信扫码登录

[vue-wxlogin - npm (npmjs.com)](https://www.npmjs.com/package/vue-wxlogin)

[【精选】微信扫码登录详细操作流程（微信公众平台开发）_微信公众号扫码登录-CSDN博客](https://blog.csdn.net/weixin_43890049/article/details/119463862)

组件 wxlogin.vue

```vue
<template>
  <div class="main_wx">
    <wxlogin
      v-if="appid && redirect_uri"
      :appid="appid"
      scope="snsapi_login"
      :redirect_uri="redirect_uri"
      :href="href"
      :state="state"
    ></wxlogin>
  </div>
</template>

<script>
import wxlogin from "vue-wxlogin"
export default {
  name: "WxLogin",
  components: { wxlogin },
  data () {
    return {
      appid: "wx1234567890",
      // 重定向地址，需要进行UrlEncode
      redirect_uri: "www.baidu.com/loginByWx",
      state: "1",
      href: "", // 自定义样式链接
      wxVisible: true
    }
  },

  mounted () {},
  methods: {
    // 获取微信appid和回调地址redirect_uri，指定内嵌的路由地址weChatLogin
    // getWeChatUrl () {
    //   if (res && res.code === "0000") {
    //     const data = res.data
    //     this.appid = "wx1234567890"
    //     this.redirect_uri = +"weChatLogin"
    //   }
    //   // });
    // }
  }
}
</script>
<style scoped>
.main_wx {
  display: flex;
  justify-content: center;
}
</style>

```



## vue keep-alive 页面缓存

router

```
 {
    path: '/companyFronts/index',
    name: 'companyFonts',
    component: () => import('@/views/companyFronts/jobIndex/index.vue'),
    meta: { title: '企业列表', icon: '', affix: true, keepAlive: true }
  },
```

.vue

```
<div id="app">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
```



[vue路由在使用keep-alive缓存之后第二次进入页面created和mounted不执行问题及解决_vue keep-alive怎么控制第二次进入不跳转页面-CSDN博客](https://blog.csdn.net/jieyucx/article/details/131200202)

## 内网穿透

我用的是natapp，下载地址：https://natapp.cn/

下载软件，网站上配置隧道

启动命令：natapp.exe -authtoken=你的authtoken

这个authtoken是在natapp里面创建免费的隧道产生的。

注意隧道的端口要配置成你的后台端口，例如9090

直接在上面的命令后面加上就可以启动你的natapp，设置内网穿透了。

内网穿透就是把本机的ip和端口暴露到外网，通过指定的url可以访问你本地的服务，当然，这存在一定的安全风险，请谨慎使用！

使用命令开启natapp后，会生成一个外网的地址指向你本地的服务地址，当你访问 	http://nyqre4.natappfree.cc，跟你访问 127.0.0.1:9090 效果是一样的，只不过一个是对外的，一个是只能本地访问。

 [内网穿透 vue 返回 invalid host header（304 Not Modified）-----gxy_勤读意现的博客-CSDN博客](https://blog.csdn.net/u013154103/article/details/102481846) 

vue项目使用内网穿透要加配置

```
disableHostCheck:true
```

 [vue项目中无法实现内网穿透，因为localhost的限制_dakache11的博客-CSDN博客](https://blog.csdn.net/dakache11/article/details/83989296) 

 [vue内网穿透_vue项目内网穿透 转圈_GG·bond的博客-CSDN博客](https://blog.csdn.net/GTbond/article/details/124375319) 



另一个内网穿透工具   cpolar  下载windows客户端使用

https://www.cpolar.com/

[登录失败，用户不一致 - cpolar 极点云](https://www.cpolar.com/blog/inconsistent-users#:~:text=找到cpolar配置文件%3Ac%3AUsers用户名.cpolarcpolar.yml。 选中cpolar.yml文件，右键点击"打开方式"——"记事本"，选择使用记事本打开配置文件。 在配置文件，删除authtoken一行和email一行。 保存cpolar.yml配置文件。,在控制面板—管理工具—服务—cpolar service，重启服务。 重新登录cpolar web UI管理界面即可。)



NeutrinoProxy：内网穿透神器

https://mp.weixin.qq.com/s/4hyQsTICIUf9EvAVrC6wEg



## Port 8088 was already in use.

https://blog.csdn.net/weixin_43845597/article/details/115000670

1.打开[cmd](https://so.csdn.net/so/search?q=cmd&spm=1001.2101.3001.7020)运行界面，输入命令netstat -ano，查看端口进程的 ID

2.找到8088端口已经占用的进程，并且进程ID为1234

3.将此进程ID对应的服务杀掉，命令：taskkill /F /pid 1234

4.再次重启springboot项目，确认是否可以正常启动

## 前端dom生成文件下载

[HTML 转 PDF 最佳实现方案 (qq.com)](https://mp.weixin.qq.com/s/zwht7yjbex6WNpcsRi6V9w)

### vue截取网页的dom，生成pdf并下载

npm install html2canvas         npm install  jspdf

```vue
<template>
  <div id="about" ref="about"  @click="exportPDF">
    <h1>This is an about page</h1>
    <div  class="box">
      welcom to about </div>
  </div>
</template>
<script>
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
export default {
  data() {
  },
  methods: {
    exportPDF() {
      // 导出pdf
      this.scale = 1;
      this.$nextTick(() => {
        // let shareContent = document.body,//需要截图的包裹的（原生的）DOM 对象
        const shareContent = document.getElementById("about");
          // shareContent.style.transform = "rotate(90deg)"  dom旋转角度
        // width = shareContent.clientWidth, //获取dom 宽度
        // height = shareContent.clientHeight, //获取dom 高度
        const width = shareContent.offsetWidth; // 获取dom 宽度
        const height = shareContent.offsetHeight; // 获取dom 高度
        const canvas = document.createElement("canvas"); // 创建一个canvas节点
        const scale = 1 / this.scale; // 定义任意放大倍数 支持小数
        canvas.width = width * scale; // 定义canvas 宽度 * 缩放
        canvas.height = height * scale; // 定义canvas高度 *缩放
        canvas.style.width = shareContent.clientWidth * scale + "px";
        canvas.style.height = shareContent.clientHeight * scale + "px";
        canvas.getContext("2d").scale(scale, scale); // 获取context,设置scale
        const opts = {
          scale: scale, // 添加的scale 参数
          canvas: canvas, // 自定义 canvas
          logging: false, // 日志开关，便于查看html2canvas的内部执行流程
          width: width, // dom 原始宽度
          height: height,
          useCORS: true, // 【重要】开启跨域配置
        };
        html2canvas(shareContent, opts).then(() => {
          var contentWidth = canvas.width;
          var contentHeight = canvas.height;
          // 一页pdf显示html页面生成的canvas高度;
          // var pageHeight = (contentWidth / 592.28) * 841.89;
          var pageHeight = (contentWidth / 592.28) * 841.89;
          // 未生成pdf的html页面高度
          var leftHeight = contentHeight;
          // 页面偏移
          var position = 0;
          // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
          var imgWidth = 595.28;
          var imgHeight = (592.28 / contentWidth) * contentHeight;
          var pageData = canvas.toDataURL("image/jpeg", 1.0);
          var PDF = new jsPDF("", "pt", "a4");
          if (leftHeight < pageHeight) {
            PDF.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
          } else {
            while (leftHeight > 0) {
              PDF.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
              leftHeight -= pageHeight;
              position -= 841.89;
              if (leftHeight > 0) {
                PDF.addPage();
              }
            }
          }
          // name = this.basicInfo.name;
          PDF.save('导出的pdf文件名' + ".pdf"); // 这里是导出的文件名
          this.scale = window.innerHeight / 1200;
        });
      });
    },

  },
  created() {

  },
}
</script>
<style scoped>
#about{
  width:50%;
  margin:auto;
}
.box{
  width:200px;height:30px;font-size:20px;font-weight:bold;
  background:linear-gradient(to right,#289a47,#e74032);
}
</style>
```

#### 改变打印出的方向

改第一个参数  l  ，改变打印方向  （适当调整宽高大小）

```
  var PDF = new jsPDF("l", "pt", "a4")
  
  PDF.addImage(pageData, "JPEG", 0, 80, imgWidth * 1.41, imgHeight * 1.41)
```

https://blog.csdn.net/tcy9099/article/details/131207991

#### 截取的div有滚动条时，需进行处理

如果你正在使用`html2canvas`和`jsPDF`来导出PDF，你需要确保在调用`html2canvas`之前，所有的内容都能够被渲染。这可能需要你动态地调整容器的高度，宽度 或者滚动页面来确保所有内容都被渲染到Canvas上。

```js
// 假设你有一个需要导出的元素
const element = document.getElementById('export-element');

// 动态调整元素高度以确保所有内容可见
element.style.height = 'auto';   // 设置导出元素的宽度或者高度
element.style.overflow = 'hidden';

// 使用html2canvas进行转换
html2canvas(element).then(canvas => {
  // 创建jsPDF实例并添加图片
  const pdf = new jsPDF();
  pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0);
  pdf.save('output.pdf');
});

// 恢复元素样式
element.style.height = '';
element.style.overflow = '';
```

#### 前端 PDF 文档分页探索

https://juejin.cn/post/7443357518971469862   (还没试过)

#### JSPDF + html2canvas A4分页截断

https://juejin.cn/post/7323436080312893476?searchId=202412161002433730E87B43109C1C2BA3#heading-1

#### **[vue-pdf2](https://gitee.com/jseven68/vue-pdf2)**

#### vue3-simple-html2pdf

https://github.com/sango-tech/vue3-simple-html2pdf

### Dom生成图片可以使用  html2canvas

```
npm i html2canvas
```

```vue
<template>
    
   <div ref="pic" id="pic" class="pic">
      <ul>
         <li>仅测试使用</li>
         <li>仅测试使用</li>
         <li>仅测试使用</li>
         <li>仅测试使用</li>
      </ul>
   </div>
   <div ref="content" id="content" class="content">
      
   </div>
   <div>
      <el-button @click="getImg">
         生成图片并下载
      </el-button>
   </div>
  </template>
  
  <script setup>
  import html2canvas from 'html2canvas'
  const getImg= () =>{
   // 获取下载成图片的dom
  	html2canvas(document.querySelector('.pic')).then(canvas => {
	  const imgUrl = canvas.toDataURL('image/jpeg')
	  const image = document.createElement('img')
	  image.src = imgUrl
	  // 将生成的图片放到 类名为 content 的元素中(不用展示可以删除)
	  // document.querySelector('.content').appendChild(image)
	  const a = document.createElement('a')
	  a.href = imgUrl
	  // a.download 后面的内容为自定义图片的名称
	  a.download = 'study_download'
	  a.click()
	 })
  }
  </script>
  <style scoped lang='less'>
    .pic{
      font-size:20px;font-weight:bold;
      width:200px;
      padding:20px 0;
    }
    .content{
    }
  </style>
```

### 前端实现 批量下载pdf,生成zip文件

npm install html2canvas         npm install  jspdf      npm install jszip      npm install file-saver --save

导出按钮页面：

```vue
<template>
  <div>
    <div @click="moreExportData">批量下载</div>
    <moreExport ref="moreExport" :list="list"></moreExport>
  </div>
</template>

<script>
import moreExport from "./moreExport.vue";
export default {
  data() {
    return {
      list: [],
    };
  },
  components: {
    moreExport,
  },
  methods: {
    moreExportData() {
      // 数组的每一项代表一条数据，最终会生成一个pdf文件
      this.list = [
        {
          name: "张三",
          sex: "男",
          age: 19,
        },
        {
          name: "李四",
          sex: "男",
          age: 19,
        },
      ];
      // 打开弹框，触发导出pdf事件
      const d = setTimeout(() => {
        this.$refs.moreExport.dialogVisible = true;
        this.$nextTick(() => {
          this.$refs.moreExport.exportPDF();
        });
        clearTimeout(d);
      }, 0);
    },
  },
};
</script>

```

导出内容弹框：moreExport.vue

```vue

<template>
  <div>
    <div v-if="dialogVisible" width="50%" >
      <div>
        <div v-for="(item, index) in list" :key="index" >
            <!-- 样式大小需自己根据需要做修改，此处的样式就是导出后pdf展示的内容 -->
            <div :id="'keyName'+index" style="flex-shrink: 0;width: 1000px;margin: 0 auto;transform-origin: top center;">
                <div>姓名：{{item.name}}</div>
                <div>性别：{{item.age}}</div>
                <div>年龄：{{item.age}}</div>
                <div>具体要导出的页面在这里循环展示出来</div>
               
            </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import JSZip from 'jszip'
import FileSaver from 'file-saver'
export default {
  props: ["list"],
  data() {
    return {
        dialogVisible: false,
        scale: 1,
    }
    
  },
  methods: {
    exportPDF () {
        // 导出pdf
      this.scale = 1
      const promises = []
      const loading = this.$loading({
        lock: true,
        text: 'loading...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      this.$nextTick(async () => {
        // let shareContent = document.body,//需要截图的包裹的（原生的）DOM 对象
        for (let i = 0; i < this.list.length; i++) {
          const key = 'keyName' + i
          const newPdf = await this.scPdf(key, this.list[i])
          promises.push(newPdf)

          loading.setText(`正在生成第${i + 1}份文件`)
          if (i === this.list.length - 1) {
            this.zipChange(promises)
            loading.close()
          }
        }
      })
    },
    scPdf (key, item) {
        console.log('scPdf', key, item)
      var shareContent = document.getElementById(key)
    // var shareContent = this.$refs[key]
      return new Promise((resolve, reject) => {
        setTimeout(async () => {
          var _downDOM = shareContent
          console.log('shareContent', shareContent)
          let width = shareContent.offsetWidth // 获取dom 宽度
          let height = shareContent.offsetHeight // 获取dom 高度
          width = 1000
          height = 512
          const canvas = document.createElement('canvas') // 创建一个canvas节点
          const scale = 1 / this.scale // 定义任意放大倍数 支持小数
          canvas.width = width * scale // 定义canvas 宽度 * 缩放
          canvas.height = height * scale // 定义canvas高度 *缩放
          canvas.style.width = shareContent.clientWidth * scale + 'px'
          canvas.style.height = shareContent.clientHeight * scale + 'px'
          canvas.getContext('2d').scale(scale, scale) // 获取context,设置scale
          // 导出之前先将滚动条置顶,不然会出现数据不全的现象
          window.pageYOffset = 0
          document.documentElement.scrollTop = 0
          document.body.scrollTop = 0
          await html2canvas(_downDOM, {
            useCORS: true,
            scale: 4, // 按比例增加分辨率 (2=双倍).
            dpi: window.devicePixelRatio * 4 // 设备像素比
          }).then((canvas) => {
            var contentWidth = canvas.width
            var contentHeight = canvas.height
            // console.log(contentWidth + '||' + contentHeight)
            // 一页pdf显示html页面生成的canvas高度;
            var pageHeight = (contentWidth / 592.28) * 841.89
            // 未生成pdf的html页面高度
            var leftHeight = contentHeight
            // 页面偏移
            var position = 0
            // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
            var imgWidth = 555.28
            var imgHeight = (555.28 / contentWidth) * contentHeight
            var pageData = new Image()
            // 设置图片跨域访问
            pageData.setAttribute('crossOrigin', 'Anonymous')
            pageData = canvas.toDataURL('image/jpeg', 1.0)
            var pdf = new jsPDF('', 'pt', 'a4')
            // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
            // 当内容未超过pdf一页显示的范围，无需分页
            if (leftHeight < pageHeight) {
              pdf.addImage(pageData, 'JPEG', 20, 80, imgWidth, imgHeight)
            } else {
              while (leftHeight > 0) {
                pdf.addImage(pageData, 'JPEG', 20, position, imgWidth, imgHeight)
                leftHeight -= pageHeight
                position -= 841.89
                // 避免添加空白页
                if (leftHeight > 0) {
                  pdf.addPage()
                }
              }
            }
            // 这里返回文件 用来处理多个下载 打包zip
            resolve({ PDF: pdf, name: item.name })
            // 直接单个pdf可直接调用下面方法
            // pdf.save(name)
          })
        }, 1000)
      })
    },
    zipChange (promises) {
      Promise.all(promises).then(async (pdfs) => {
        const zip = new JSZip()
        promises.forEach(async (item, index) => {
          const { PDF, name } = item
          if (promises.length === 1) {
            PDF.save(`${name}.pdf`)
          } else {
            await zip.file(`${name}.pdf`, PDF.output('blob'))
          }
        })
        if (promises.length > 1) {
          zip.generateAsync({ type: 'blob' }).then((content) => {
            // 压缩文件的名
            FileSaver.saveAs(content, '压缩文件的名' + '.zip')
          })
        }
      })
    },
  },
};
</script>

<style lang="less" scoped></style>

```



## 前端调取摄像头

### 拍照

[前端调取摄像头并实现拍照功能 - 掘金 (juejin.cn)](https://juejin.cn/post/7289662055183597603)

### 录屏

vue实现可以参考 electron 部分的调用摄像头(以下是原生js实现代码)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        button{
            width:100px;height:30px;color:aqua;background:#021a3f;border-radius: 5px;
        }
    </style>
</head>
<body>
    <div>
        <div>
            <button onClick="init()" >打开摄像头</button>
            <button onClick="screenInit()" >获取屏幕信息</button>
            <div style="margin-top:10px;">
                <button c1ass="btn" onClick="startRecord()">升始录制</button>
            <button class="stop" onClick="stop()">停止录制</button>
            <button class="play" onClick="play()">播放</button>
            </div>
            
        </div>
        <div style="display:flex;margin-top:10px;">
            <div >
            <video style="width:400px;height:300px;" id="video"  muted autoplay controls></video>
                <div style="text-align: center;">录制内容</div>
            </div>
            <div style="margin-left:10px;">
                <video  style="width:400px;height:300px;" id="playVideo" autoplay controls></video>
                <div style="text-align: center;">播放内容</div>
            </div>  
        </div>
        
    </div>
    
    
    
<script>
    var myVideo=document.getElementById("video")
    var playVideo=document.getElementById("playVideo")
    let stream=null
    let recordInstance=null
    let  blobSlice=[]
    const init=async ()=>{
        
        this.stream= await navigator.mediaDevices.getUserMedia({
            audio: true,
          video:{
            width:1000,
            height:600
          },
          
         })
        
          myVideo.srcObject=this.stream
          myVideo.play()
          
        
      }
      const screenInit=async ()=>{
        
        this.stream= await await navigator.mediaDevices.getDisplayMedia({audio: true,video:true})
        
          myVideo.srcObject=this.stream
          myVideo.play()
          
        
      }
    const startRecord=()=>{
        this.recordInstance=null
        this.recordInstance =new MediaRecorder(myVideo.srcObject,{mimeType:'video/webm'})
          console.log('this.recordInstance ',this.recordInstance )
          if(this.recordInstance){
                this.recordInstance.start()
                this.recordInstance.ondataavailable=(e)=>{
                    blobSlice=[]
                    blobSlice.push(e.data)
                }
    
            this.recordInstance.onstop=(e)=>{
                console.log(blobSlice,'123')
            }
          }

    }
    const stop=()=>{
        if( this.recordInstance){
             this.recordInstance.stop()
        }
       
    }
    const play=()=>{
        const blob =new Blob(blobSlice,{type:'video/mp4'})
        const videoUrl =URL.createObjectURL(blob)
        console.log(videoUrl)
        playVideo.src=videoUrl
        playVideo.play()
    }
</script>
</body>
</html>
```

## 密码加密

### sm-crypto(sm2)

[VUE使用 sm-crypto 加解密以及签名验签遇到的坑 (后端java)-CSDN博客](https://blog.csdn.net/weixin_39475476/article/details/111593319)

npm install --save sm-crypto@0.3.13

sm2.js

```
const sm2 = require('sm-crypto').sm2
// 加密密钥  不要搞成动态接口获取的
const publicKeyServer = '049D4DB5CECC1DBA1B08E0118CC3B216A6245FF84CD0C9347FDF5E91B3A3C473A4238E7649CCF4B615A9207A695CD47A2B1C4E4D422A9284260DBC23F7F04448FE'

export default {
  get (password) {
    return sm2.doEncrypt(password, publicKeyServer, 0)
  }
}
```

登录方法处

```
import sm2 from '@/utils/sm2'
// 对密码使用 sm2 进行加密
userInfo.password = sm2.get(userInfo.password.trim())
// '04'前缀，后端没加的话，前端要加上
userInfo.password ='04'+ sm2.get(userInfo.password.trim())  
```

## 安全相关

### WAF

WAF（Web Application Firewall，网络应用防火墙）是一种专门设计来保护Web应用程序免受各种网络攻击的安全设备或服务。与传统的网络防火墙相比，WAF工作在应用层，这意味着它能够更深入地理解HTTP/HTTPS协议，从而提供更精细的控制和保护。

WAF的主要功能包括：

1. **流量过滤**：WAF可以监控和过滤进入Web应用程序的HTTP/HTTPS流量，识别并阻止恶意请求，如SQL注入、跨站脚本攻击（XSS）、跨站请求伪造（CSRF）等。
2. **安全策略执行**：WAF内置了一系列的安全策略，这些策略基于OWASP（开放网络应用安全项目）等组织定义的攻击模式。WAF可以执行这些策略来防御已知的Web攻击。
3. **自定义规则**：除了内置的规则，WAF还允许用户创建自定义规则，以适应特定的应用需求和安全策略。
4. **安全审计**：WAF可以记录和分析Web应用程序的访问日志，帮助管理员识别潜在的安全威胁和异常行为。
5. **应用交付**：WAF还可以提供应用交付功能，如负载均衡、内容缓存和压缩，以优化Web应用程序的性能。
6. **防止DDoS攻击**：某些WAF解决方案还包括分布式拒绝服务（DDoS）攻击的防护功能。

WAF的部署方式多样，可以是硬件设备、软件解决方案，也可以是基于云的服务。它可以部署在Web服务器之前，作为反向代理或透明代理，或者作为旁路监控系统。WAF的部署方式取决于组织的具体需求和网络架构。

总的来说，WAF是Web安全领域的一个重要工具，它通过在应用层提供额外的安全层，帮助保护Web应用程序免受日益复杂的网络攻击。

https://zhuanlan.zhihu.com/p/638553359

雷池：  https://waf-ce.chaitin.cn/community      https://github.com/chaitin/safeline

## ps修改图中文字

[PS小白丨如何修改图片中的文字 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/134102174)