<!--
 * @name: 东方凝洛
 * @Date: 2022-12-02 21:19:19
 * @msg: 
 * @param: 
 * @return: 
-->
---

date: 2022-01-10
category:
  - uni-app
tag:
  - uni
typora-root-url: ..\.vuepress\public
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

在打开页面的地方触发点击事件，跳转到outUrl的页面，并传入url。

```
go(url){
    uni.navigateTo({
        url:'./outPage?url='+url
    })
},
```

如此，便可以实现在新页面打开url地址了。

## uniapp的分包操作

我的uniapp小程序在微信开发者工具打开后，在点击真机调试的时候会出现问题。这个问题在打包发布时也会出现，具体原因是项目整体包的体积太大，会影响小程序的运行速度。因此小程序对此做了限制。 即小程序的单独一个包的大小不能超过2M,一旦超过就需要分包处理。

在我看来分包就是对资源进行划分，实现按需加载。

分包时一般就是分为了一个主包和若干个子包。由于我的小程序项目不是很大，所以就分出了一个子包出来，以下展示我是如何操作的。

项目中，所有的页面都是放在pages文件夹下的，静态资源放在static文件夹下。

在pages目录的同级下创建一个packageA文件夹（需要分几个包，就创建几个文件夹），在pages文件夹中只留下tabBar的相关页面。其余的页面文件划分到类似于packageA的文件夹下。并将packageA文件夹内的页面所依赖的静态文件也搬到对应的分包文件夹下。（注意：分包的时候一定要把和这个包里的页面相关的静态资源换到这个包下，并修改页面跳转时的路径）

![packageUni](/packageUni.png)

pages.json文件夹下增加如下配置：

"subpackages"的内容就是对分包进行的配置。

root代表分包根目录

pages代表分包的页面文件路径（注意，有几个页面，就有几个路径）

```
"subpackages": [
	    {
	      "root": "packageA",
	      "pages": [
	      	{
				"path":"pages/notice/notice"
			}，
			{
				"path":"pages/notice/notice"
			}，
			{
				"path":"pages/notice/notice"
			}
	      ]
	     }
]
```

分完包之后要设置，进入那个页面时，加载对应的包内容，配置如下：

```
"preloadRule": {
			"pages/index/index": { // 当进入这个包页面的时候
			"network": "all",  // 什么网络下支持允许预加载，默认wifi: wifi/all
				"packages": [
				"packageA"  // 下载包
			]
			}
		},
```

以上就是对uniapp小程序的分包操作，那么如何查看自己分包是否成功了呢，在微信开发者工具打开，点击详情，在基本信息页面可以看到本地代码，点开后就能查看自己的主包和分包信息了，如果包的大小还是大于2M的话，就需要继续优化了。

![PackageAuniWechat](/PackageAuniWechat.png)