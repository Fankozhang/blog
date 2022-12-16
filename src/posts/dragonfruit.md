---

icon: edit
date: 2022-01-10
category:
  - uni-app
tag:
  - uni
---


# uni-app

## uni-app发起网络请求

### 原生的uni.request发起请求

main.js里面设置根地址

```javascript
Vue.prototype.websiteUrl = ’http://127.0.0.1:8080‘; 
// 这里的websiteUrl是请求根地址，根据后台地址切换
```

```javascript
uni.request({
    method: "POST",       //请求方法，最好大写
    url: this.websiteUrl + `/portal/apply/resumeEdus/edit`,   //请求接口地址
    data: this.formData,     //  传递的参数
    header: {
        'Authorization':'Bearer ' + uni.getStorageSync("token")
        // 'Content-Type': 'application/x-www-form-urlencoded'
    },        // header里面添加请求头信息，最常见的就是携带token
    success: (res) => {       // 请求成功
         console.log("请求成功",res)
    },
    fail:(error)=> {     //请求失败
        reject(error)
    }，
    complete: ()=> {}
})
```

 [( 对于封装微信小程序uni.request请求，支持自动携带token,可查看这篇文章](https://blog.csdn.net/Hi_Eleven/article/details/115858307) 

### **@escook/request-miniprogram**

 [@escook/request-miniprogram - npm (npmjs.com)](https://www.npmjs.com/package/@escook/request-miniprogram?activeTab=readme) 

因为小程序中无法使用axios，而原生的uni.request功能过于简单，所以下载加强版网络请求包：

```
npm i @escook/request-miniprogram -S    下载网络请求包
```

main.js

```javascript
import { $http } from '@escook/request-miniprogram'
//从网络请求包中引入$http请求对象
uni.$http = $http
//因为在其他的页面或组件中也要使用，所以要将$http对象挂载到全局对象下，在uni-app中，uni是全局对象
$http.baseUrl = 'http://127.0.0.1:8080/'
//配置网络请求根地址，因为uni.$http为$http的引用，所以可以直接修改$http对象下的属性
$http.beforeRequest = function(options) {
    //配置发起网络请求前的拦截功能（请求拦截器）
    
    uni.showLoading({
        title: '数据加载中...',
      })
    
    const token=uni.getStorageSync('token')
	if (token) {
	    options.header['Authorization'] = 'Bearer ' + token // 让每个请求携带自定义token 请根          据实际情况自行修改
	  }
	  
	  
}
$http.afterRequest = function(options) {
    //配置网络请求完毕后的拦截功能（响应拦截器）
    uni.hideLoading()
    
    if(options.data.code==401){     //  没有得到正确的响应状态码，做出提示，并清除storage的token和         用户信息
		uni.showToast({
		title: options.data.msg,
		duration: 500,
		icon:'none'
		});
		uni.removeStorageSync("userWxsign")
		uni.removeStorageSync("userInfo")
	}
    
}
```

请求方法

```
async getUserBaseInfo() {
    const {data: res} = await uni.$http.get(`userInfo/userInfo`,{name:'123',age:'123'});
    //   
    console.log("baseInfo",res)

},
```

## uniapp内打开一个url

在pc浏览器我一般是通过window,open()打开一个url地址的，在小程序，是会报错的，所以就得另找一个解决方法。以下是实现方法。

建一个outUrl.vue的文件，文件内容如下：

```
<template>
	<view>
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:''
			}
		},
		onLoad(option){
			this.url=option.url
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
```

在打开页面的地方触发点击事件，跳转到outUrl的页面，并传入url

```
go(url){
    uni.navigateTo({
        url:'./outPage?url='+url
    })
},
```

