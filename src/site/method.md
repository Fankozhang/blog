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

## 下载（url）

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



## 表单（校验）

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
```

直接在dom里添加验证参考：

```
<a-form-model-item
    prop="phone"
    
   :rules="[{ required: true, message: '请输入联系方式', trigger: 'blur' },{ pattern:       /^1[3456789]\d{9}$/, message: '手机号码格式不正确', trigger: 'blur' }]"
   
    label="电话"
>

```

## 

### 自定义表单（表单生成器）

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

### vue项目（两套路由）适配  pc端 移动端

vue项目开发中，我们已经开发实现了pc端的网站开发，当想要实现移动端适配时，当时有两种适配的方法作为参考。  

一种是通过媒体查询适配不同的分辨率显示不同的样式。  

第二种是写两套路由，一套pc端路由，一套移动端路由，移动端页面适当移植pc端页面代码，修改部分样式，以达到手机端显示正常的样式和结构。通过js判断使用设备是pc端还是移动端，来匹配不同的路由，显示不同的页面。  

最终采用的是第二种实现方案，。 因为使用第二种方法对PC端和移动端进行了区分。对于PC端和移动端的特殊样式可以做到更加适配。以下是对于判断设备是手机端还是pc端参考的文章。

**vue-判断设备是手机端还是pc端，进行两套页面样式的编写**

[(115条消息) vue-判断设备是手机端还是pc端，进行两套页面样式的编写_hh3167253066的博客-CSDN博客_vue判断手机端还是pc端](https://blog.csdn.net/hh3167253066/article/details/120290307)

**vue项目PC端移动端适配方案**

[(115条消息) vue项目PC端移动端适配方案_coderDragon的博客-CSDN博客_vue项目pc端和移动端适配](https://blog.csdn.net/weixin_53876218/article/details/125225893)



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



## element UI

### element的table错位

https://blog.csdn.net/coralime/article/details/122979010

1. 给表格添加ref标志

```html
  <el-table ref="tableRef" :data="tableData"></el-table>
```

2. doLayout 对 Table 进行重新布局

   ```js
   watch: {
         // tableData是el-table绑定的数据
         tableData: {
           // 解决表格显示错位问题
           handler () {
             this.$nextTick(() => {
               // tableRef是el-table绑定的ref属性值
               this.$refs.tableRef.doLayout() // 对 Table 进行重新布局
             })
           },
           deep: true
         }
       }
   ```

   

### TimePicker设置只能选择当前时间之前或之后的时间

 picker-options 当前时间日期选择器特有的选项 

```
<el-date-picker
	v-model="item.endYear"
    :picker-options="pickerOptions"
    type="datetime"
    >
</el-date-picker>
```

```
:picker-options=“pickerOptions” 是限制选择时间的属性

data() {
    // 这里存放数据
    return {
      pickerOptions:{
          disabledDate (time) {
            //disabledDate 文档上：设置禁用状态，参数为当前日期，要求返回 Boolean
            return time.getTime() > Date.now()//选当前时间之前的时间
            //return time.getTime() < Date.now()//选当前时间之后的时间
          }
      },
    }
  }

```

### element 表格实现导入

```vue
<template>
    <div >
        <el-dialog
      :title="upload.title"
      :visible.sync="upload.open"
      width="400px"
      append-to-body
    >
    
      <el-upload
        ref="upload"
        :limit="1"
        :data="uploadData"
        accept=".xlsx, .xls"
        :headers="upload.headers"
        :action="upload.url"
        :disabled="upload.isUploading"
        :before-upload="beforFileUp"
        :on-progress="handleFileUploadProgress"
        :on-success="handleFileSuccess"
        :auto-upload="true"
        drag
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip text-center" slot="tip">
          <span>仅允许导入xls、xlsx格式文件。</span>
          <el-link
            type="primary"
            :underline="false"
            style="font-size: 12px; vertical-align: baseline"
            @click="importTemplate"
            >下载模板</el-link
          >
        </div>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <!-- <el-button type="primary" @click="submitFileForm">确 定</el-button> -->
        <el-button @click="upload.open = false">取 消</el-button>
      </div>
    </el-dialog>
    </div>
</template>

<script>
import { getToken } from "@/utils/auth";
export default {
    data () {
        return {
            upload: {
        // 是否显示弹出层（员工导入）
        open: false,
        // 弹出层标题（员工导入）
        title: "导入",
        // 是否禁用上传
        isUploading: false,
        // 是否更新已经存在的员工数据
        // updateSupport: 0,
        // 设置上传的请求头部
        headers: { Authorization: "Bearer " + getToken() },
        // 上传的地址
        url: process.env.VUE_APP_BASE_API + "/performance/abcdefg",
      },
      // 上传时要传递的参数
        uploadData:{
            taskId:'',
            templateId:'',
            fileName:''
        },
        fileName:''
        }
    },
    components: {
        
    },
    created() {
        
    },
    mounted() {
        
    },
    methods: {
        submitFileForm(){

        },
        handleFileSuccess(response, file, fileList) {
            console.log('13579',response, file, fileList)
      this.upload.open = false;
      this.upload.isUploading = false;
      this.$refs.upload.clearFiles();
    //   this.$alert(
    //     "<div style='overflow: auto;overflow-x: hidden;max-height: 70vh;padding: 10px 20px 0;'>" +
    //       response.msg +
    //       "</div>",
    //     "导入结果",
    //     { dangerouslyUseHTMLString: true }
    //   );
    //   this.getList();
    console.log("上传成功")
    this.$emit("getTableData")
    },
    beforFileUp(file){
        console.log("before",file)
        this.uploadData.fileName=file.name
    },
        // 文件上传中处理
    handleFileUploadProgress(event, file, fileList) {
        // console.log('before',file)
        // this.uploadData.fileName=file.name
        this.upload.isUploading = true;
    },
        importExcelHandleOpen(){
            this.upload.open = true
        },
        importTemplate(){
            this.download('performance/abc', {
        ...this.queryParams
      }, `user_template_${new Date().getTime()}.xlsx`)
        }
    },
};
</script>

<style lang='less' scoped>

</style>
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



## Vue开发中出现Loading Chunk Failed 踩坑纪实

（出现这个错误会页面空白）

 [Vue开发中出现Loading Chunk Failed 踩坑纪实 - 掘金 (juejin.cn)](https://juejin.cn/post/7080189425975558181)    



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



## 百度地图根据地址解析坐标系

[逆地理编码 gc | 百度地图API SDK (baidu.com)](https://lbs.baidu.com/index.php?title=webapi/guide/webservice-geocoding)

```
npm install --save vue-jsonp

main.js 引入

import { VueJsonp } from 'vue-jsonp' 
Vue.use(VueJsonp)
```

```
<baidu-map class="bm-view" ref="map" :center="mapCenter" :zoom="17">
   <bm-marker
       :position="mapCenterAddress"
       :dragging="false"
       animation=""
   ></bm-marker>
</baidu-map>

// bm-marker  显示地址的红点
```

组件内使用     address:'要解析的地址名'  ak:'百度网站上申请的ak,个人标识'   output: 'json',callback: 'showLocation'固定

返回值里   json.result.location是一个包含坐标系的对象

```
//mapCenter: "",
//mapCenterAddress: { lat: "123", lng: "123" },

// 百度地图地址解析
    TypeMap () {
      this.mapCenter = "中国（山东）自由贸易试验区济南片区新泺大街1166号奥盛大厦1号楼2333-2室"
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
```

## vue的v-html解析富文本传来的表格不显示边线

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



## Ant Design of Vue



### Ant Design of Vue  a-table 表格行满足条件高亮

```
<a-table
      :rowClassName="setRowClassName"
      :rowKey="(record,index)=>{return index}"
    >
    
setRowClassName (record) {
       if (record.province == '山东省') {
       return 'row-color'
      } else {
       return 'row-color2'
      }
    },

// style 不能加 scoped，否则行样式不生效

<style  lang="less">
.row-color{
  background:#e6f7ff !important;
}
.row-color2{
  background:white !important;
}
</style>
```

### Ant Design of Vue清除表单校验

clearValidate和resetFields区别

```javascript
this.$refs['form'].resetFields() //移除校验结果并重置字段值
this.$refs['form'].clearValidate() //移除校验结果
```

### ant design vue 年份选择器

```
<a-date-picker
          mode="year"
          format="YYYY"
          v-model="year"
          :open="yearShowOne"
          @openChange="openChangeOne"
          @panelChange="panelChangeOne"
          placeholder="请选择年份"
        >

import moment from "moment"


data(){
return{
	year:'',
    yearShowOne: false
}
}

methods:{
	getYear () {
        this.year = moment().format("YYYY")
      },
    openChangeOne (status) {
      if (status) {
        this.yearShowOne = true
      }
    },
    // 得到年份选择器的值
    panelChangeOne (value) {
      this.year = moment(value).format("YYYY")
      this.yearShowOne = false
    },

}
```

### ant design vue  表格隔行变色

```
::v-deep .ant-table-tbody .ant-table-row:nth-child(2n) {
		background: #e6f7ff;
	}
```



### ant design vue表格实现导入

importExcel.vue

```vue
<template>
  <a-modal
    :title="title"
    :visible="open"
    :confirm-loading="uploading"
    @cancel="importExcelHandleCancel"
    @ok="importExcelHandleChange"
  >
    <a-spin tip="上传中..." :spinning="uploading">
      <a-upload-dragger
        name="file"
        accept=".xlsx, .xls"
        :file-list="fileList"
        :multiple="false"
        :remove="handleRemove"
        :before-upload="beforeUpload"
      >
        <p class="ant-upload-drag-icon">
          <a-icon type="inbox" />
        </p>
        <p class="ant-upload-text">请将文件拖拽到此处上传</p>
        <p class="ant-upload-hint">
          请先导出再导入上传，支持单个上传，也可以点击后选择文件上传
        </p>
      </a-upload-dragger>
      <a @click="importTemplate">下载模板</a>
    </a-spin>
  </a-modal>
</template>

<script>
import { importPositionData } from "@/api/rpo/recruit"
export default {
  name: "ImportExcel",
  props: {},
  components: {},
  data () {
    return {
      title: "导入",
      open: false,
      uploadStatus: "",
      fileList: [],
      // 是否禁用上传
      uploading: false,
      updateSupport: 0,
      tableData: [],
      projcetid: ''
    }
  },
  filters: {},
  created () {},
  computed: {},
  watch: {},
  methods: {
    importTemplate () {
      const arr = []
      for (let i = 0; i < this.tableData.length; i++) {
        arr.push(this.tableData[i].id)
      }
      this.download(
        "/position/positionInfo/downloadTemplateExcel",
        { },
        `职位导入_${new Date().getTime()}.xlsx`
      )
    },
    /** 导入excel窗体关闭 */
    importExcelHandleCancel (e) {
      this.open = false
      this.fileList = []
      // 关闭后刷新列表
      this.$emit("ok")
    },
    /** 导入excel窗体开启 */
    importExcelHandleOpen (val) {
      this.tableData = val
      this.open = true
    },
    beforeUpload (file) {
      this.fileList = [file]
      return false
    },
    /** 导入excel */
    importExcelHandleChange () {
      this.uploading = true
      const { fileList } = this
      const formData = new FormData()
      formData.append("file", fileList[0])
      // formData.append('updateSupport', this.updateSupport)
      console.log(formData, fileList[0])
      importPositionData(formData)
        .then((response) => {
          this.fileList = []
          this.$message.success(response.msg)
          this.open = false
          this.$emit("ok")
        })
        .finally(() => {
          this.uploading = false
        })
    },
    handleCheckedUpdateSupport () {
      this.updateSupport = this.updateSupport === 0 ? 1 : 0
    },
    handleRemove () {
      this.fileList = []
      this.uploading = false
    }
  }
}
</script>
```

父组件

```vue
<importExcel ref="importExcel"></importExcel>

<a-button type="dashed" @click="$refs.importExcel.importExcelHandleOpen()">
            <a-icon type="vertical-align-top" />
            批量导入
          </a-button>
```



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