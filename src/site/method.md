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

## 后端返回文件流(文档流)如何下载

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



## 一个表单里面添加，删除子级表单

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





## vue项目（两套路由）适配  pc端 移动端

vue项目开发中，我们已经开发实现了pc端的网站开发，当想要实现移动端适配时，当时有两种适配的方法作为参考。  

一种是通过媒体查询适配不同的分辨率显示不同的样式。  

第二种是写两套路由，一套pc端路由，一套移动端路由，移动端页面适当移植pc端页面代码，修改部分样式，以达到手机端显示正常的样式和结构。通过js判断使用设备是pc端还是移动端，来匹配不同的路由，显示不同的页面。  

最终采用的是第二种实现方案，。 因为使用第二种方法对PC端和移动端进行了区分。对于PC端和移动端的特殊样式可以做到更加适配。以下是对于判断设备是手机端还是pc端参考的文章。

**vue-判断设备是手机端还是pc端，进行两套页面样式的编写**

[(115条消息) vue-判断设备是手机端还是pc端，进行两套页面样式的编写_hh3167253066的博客-CSDN博客_vue判断手机端还是pc端](https://blog.csdn.net/hh3167253066/article/details/120290307)

**vue项目PC端移动端适配方案**

[(115条消息) vue项目PC端移动端适配方案_coderDragon的博客-CSDN博客_vue项目pc端和移动端适配](https://blog.csdn.net/weixin_53876218/article/details/125225893)



## vscode  弹出扩展主机意外终止...次

第一次遇到这种编辑器类似的问题，在网上找了挺多的解决方法，出现这种情况的原因大概是vscode的插件冲突，解决方法大体上就两种。

一种是卸载VScode,删除掉配置文件。在重装。（麻烦，没试过）

第二种是找出有问题的插件并卸载。查找方法有以下几种（我的vscode装了大概60个插件吧）

- 卸载除基本插件外的所有插件，在一个个装，看到底是哪个有问题。（我感觉相当费时，所以没采用）

- 用vscode的二分查找，这个查找会找出可能存在冲突的插件，并禁用掉，我循环查了四五次，最终问题没有解决（用这个方法有问题的插件没有被筛出来）

  ![vscodeTwoSearch](/vscodeTwoSearch.png)

- 当弹出扩展主机意外终止的弹框时，点击**打开开发人员工具**，查看报错信息中关于host相关的部分，报错信息很长，只需要看头部的错误路径。我的错误路径中有easy-scss。所以猜测可能是安装的easy-scss插件有问题。于是我卸载了这个插件。（问题成功解决，不在弹出扩展主机意外终止弹框）

这种遇到插件冲突的问题确实是很少遇到。我的也是突然出现的。记录一次解决方案。





## vue项目使用scss时，版本冲突

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





## 根据url获取文件名

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

## 快速删除文件夹下所有文件

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

## this.$refs[formName].validat验证（自定义校验）

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
```

直接在dom里添加验证参考：

```
<a-form-model-item
    prop="phone"
    
   :rules="[{ required: true, message: '请输入联系方式', trigger: 'blur' },{ pattern:       /^1[3456789]\d{9}$/, message: '手机号码格式不正确', trigger: 'blur' }]"
   
    label="电话"
>

```

