---
icon: edit
date: 2022-01-05
tag:
  - question
  - method
---

# 工作问题及解决方法

## 后端返回文件流(文档流)如何下载

例子：

```
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

```
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

对于blob可点击  [JS中的Blob对象 - 简书 (jianshu.com)](https://www.jianshu.com/p/b322c2d5d778)    [JavaScript 中 Blob 对象 - 掘金 (juejin.cn)](https://juejin.cn/post/6844903480704892942)  文章查看

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

```
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
delForm(item, index) {
    this.form.form4.splice(index, 1);
    this.$forceUpdate();
},
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