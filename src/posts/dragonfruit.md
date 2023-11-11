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

## 网址

 [uni-app快速上手 | uni-app官网 (dcloud.net.cn)](https://uniapp.dcloud.net.cn/quickstart.html#) 

 [DCloud 插件市场](https://ext.dcloud.net.cn/) 

[uniapp模板：新建一个uniapp项目，并加入基础化建设，uniapp开发全流程 - 掘金 (juejin.cn)](https://juejin.cn/post/7226731366535905317#heading-7)

## 相关文章

[简记账app--使用uni-app开发完整功能app - 掘金 (juejin.cn)](https://juejin.cn/post/7236354905492668473?searchId=20231107134553740B3EDD7BEDDC8856C0#heading-0)

[【uniapp】十分钟带你封装uniapp的api请求 - 掘金 (juejin.cn)](https://juejin.cn/post/7249228528573694013?searchId=20231107134553740B3EDD7BEDDC8856C0#heading-14)

## 引入uview2.0

创建uni-ui项目，基于uni-app的ui组件库(不是默认模板)

插件市场下载u-view插件并导入

1. 引入uView主JS库

> 在项目根目录中的main.js中，引入并使用uView的JS库，注意这两行要放在import Vue之后。

```javascript
javascript复制代码// main.js
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
```

在项目根目录的uni.scss中引入此文件。

```scss
scss复制代码/* uni.scss */
@import '@/uni_modules/uview-ui/theme.scss';
```

```scss
// 在App.vue中首行的位置引入，注意给style标签加入lang="scss"属性

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";
</style>
```





## uni-app发起网络请求

### 原生的uni.request发起请求

main.js里面设置根地址

```javascript
Vue.prototype.websiteUrl = 'http://127.0.0.1:8080'; 
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
    },
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

## uniapp 高度铺满全屏的小技巧

在uniapp中，高度使用heiht:100vh,h5的屏幕会多出一些高度，导致可以上下滑动

解决方式如下

在app.vue中设置一个公共样式

```css
uni-page-body,html,body{  
     height: 100%;  
}
```

在需要高度铺满全屏的页面的最外层的view绑定类名page，样式为

```css
.page {
     height: 100%;
}
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

[【已解决】uniapp小程序体积过大、隐私协议的问题 - 掘金 (juejin.cn)](https://juejin.cn/post/7296025902911897627)

## pages.json

 [uni-app官网 (dcloud.net.cn)](https://uniapp.dcloud.net.cn/collocation/pages.html#) 

```json
{
    //  pages设置页面路径及窗口表现
	"pages": [{
		"path": "pages/component/index",
		"style": {
			"navigationBarTitleText": "组件"
		}
	}, {
		"path": "pages/API/index",
		"style": {
			"navigationBarTitleText": "接口"
		}
	}, {
		"path": "pages/component/view/index",
		"style": {
			"navigationBarTitleText": "view"
		}
	}],
    //  condition 不一定要配置
	"condition": { //模式配置，仅开发期间生效
		"current": 0, //当前激活的模式（list 的索引项）
		"list": [{
			"name": "test", //模式名称
			"path": "pages/component/view/index" //启动页面，必选
		}]
	},
    //  globalStyle设置默认页面的窗口表现，一般设置前四个就可以了
	"globalStyle": {
		"navigationBarTextStyle": "black",
		"navigationBarTitleText": "演示",
		"navigationBarBackgroundColor": "#F8F8F8",
		"backgroundColor": "#F8F8F8",
		"usingComponents":{
			"collapse-tree-item":"/components/collapse-tree-item"
		},
		"renderingMode": "seperated", // 仅微信小程序，webrtc 无法正常时尝试强制关闭同层渲染
		"pageOrientation": "portrait", //横屏配置，全局屏幕旋转设置(仅 APP/微信/QQ小程序)，支持 auto / portrait / landscape
		"rpxCalcMaxDeviceWidth": 960,
		"rpxCalcBaseDeviceWidth": 375,
		"rpxCalcIncludeWidth": 750
	},
    //   tarBar设置底部 tab 的表现	
	"tabBar": {
		"color": "#7A7E83",
		"selectedColor": "#3cc51f",
		"borderStyle": "black",
		"backgroundColor": "#ffffff",
		"height": "50px",
		"fontSize": "10px",
		"iconWidth": "24px",
		"spacing": "3px",
    	"iconfontSrc":"static/iconfont.ttf", // app tabbar 字体.ttf文件路径 app 3.4.4+
		"list": [{
			"pagePath": "pages/component/index",
			"iconPath": "static/image/icon_component.png",
			"selectedIconPath": "static/image/icon_component_HL.png",
			"text": "组件",
      		"iconfont": { // 优先级高于 iconPath，该属性依赖 tabbar 根节点的 iconfontSrc
       			"text": "\ue102",
        		"selectedText": "\ue103",
        		"fontSize": "17px",
        		"color": "#000000",
        		"selectedColor": "#0000ff"
      		}
		}, {
			"pagePath": "pages/API/index",
			"iconPath": "static/image/icon_API.png",
			"selectedIconPath": "static/image/icon_API_HL.png",
			"text": "接口"
		}],
		"midButton": {
			"width": "80px",
			"height": "50px",
			"text": "文字",
			"iconPath": "static/image/midButton_iconPath.png",
			"iconWidth": "24px",
			"backgroundImage": "static/image/midButton_backgroundImage.png"
		}
	},
    //   此处往下的配置一般不需要设置
  "easycom": {
    "autoscan": true, //是否自动扫描组件
    "custom": {//自定义扫描规则
      "^uni-(.*)": "@/components/uni-$1.vue"
    }
  },
    // topWindow,leftWindow,rightWindow只在 h5 生效
  "topWindow": {
    "path": "responsive/top-window.vue",
    "style": {
      "height": "44px"
    }
  },
  "leftWindow": {
    "path": "responsive/left-window.vue",
    "style": {
      "width": "300px"
    }
  },
  "rightWindow": {
    "path": "responsive/right-window.vue",
    "style": {
      "width": "300px"
    },
    "matchMedia": {
      "minWidth": 768
    }
  }
}
```

## uniapp使用echarts图

插件地址 ： [echarts for uniapp - DCloud 插件市场](https://ext.dcloud.net.cn/plugin?id=8017) 

注意：使用HBuilderX导入插件echarts，   使用页面需要将 组件 引入进来使用， 要为引入的  echarts  设置宽高，否则可能不显示。 

```vue
<template>
	<view class="shadow container">
		<view class="container">
		    <echarts style="width:100%;height:100%;" ref="echarts" :option="option" canvasId="echarts"></echarts>
		</view>
	</view>
</template>

<script>
	import echarts from '../echarts-uniapp/echarts-uniapp.vue'
	export default{
		components:{
			echarts
		},
		data(){
			return{
				option:{},
			}
		},
		onReady() {
			this.draw()
		},
		methods:{
			draw(){
				this.option = {}
			},
		}
	}
</script>

<style lang="less" scoped>
.hx-img{
    width: 100%;
}
.container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
    }
    .container-wrap {
        width: 100%;
        height: 100%;
    }
</style>
```

以下是一个简单的关系图示例：

```vue
<template>
	<view class="shadow container">
		<view class="container">
		    <echarts style="width:100%;height:100%;" ref="echarts" :option="option" canvasId="echarts"></echarts>
		</view>
	</view>
</template>

<script>
	import echarts from '../echarts-uniapp/echarts-uniapp.vue'
	export default{
		components:{
			echarts
		},
		data(){
			return{
				option:{},
				color: '#1890ff',
				datas:[
					{ name: '张三', id: '0', draggable: 'true' },
					{ name: '李四', id: '1', draggable: 'true' },
					{ name: '王五', id: '2', draggable: 'true' },
					{ name: '赵六', id: '3', draggable: 'true' },
					{ name: '魏七', id: '4', draggable: 'true' }
				],
				lines: [
					{ source: '1', target: '1', value: '' },
					{ source: '0', target: '1', value: '' },
					{ source: '0',  target: '2', value: '' },
					{ source: '0',  target: '3', value: '' },
					{ source: '0',  target: '4', value: '' },
				]
			}
		},
		onReady() {
			this.draw()
		},
		methods:{
			draw(){
				this.option = {
				        title: {
				          text: ''
				        },
				        color: this.color,
				        tooltip: {},
				        animationDurationUpdate: 1500,
				        label: {
				          normal: {
				            show: true,
				            textStyle: {
				              fontSize: 12
				            }
				          }
				        },
				        series: [
				          {
				            type: 'graph',
				            layout: 'force', // 采用力引导布局
				            symbolSize: 45,
				            legendHoverLink: true, // 启用图例 hover 时的联动高亮。
				            focusNodeAdjacency: false, // 在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
				            roam: true,
				            label: {
				              normal: {
				                show: true,
				                position: 'inside',
				                textStyle: {
				                  fontSize: 12
				                }
				              }
				            },
				            force: {
				              repulsion: 1000
				            },
				            edgeSymbolSize: [4, 50],
				            edgeLabel: {
				              normal: {
				                show: true,
				                textStyle: {
				                  fontSize: 10
				                },
				                formatter: '{c}'
				              }
				            },
				            data: this.datas,
				            links: this.lines,
				            lineStyle: {
				              normal: {
				                opacity: 0.9,
				                width: 1,
				                curveness: 0
				              }
				            }
				          }
				        ]
				      }
			},
		}
	}
</script>

<style lang="less" scoped>
.hx-img{
    width: 100%;
}
.container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
    }
    .container-wrap {
        width: 100%;
        height: 100%;
    }
</style>
```

## 手机号验证码功能

https://juejin.cn/post/7087789961490989070

## 微信登录

```
<button
	class="wx-login-button"
	open-type="getPhoneNumber"
	@getphonenumber="getPhoneNumber"
>
	微信登录
</button>

```

```
// 获取手机号
			getPhoneNumber(e) {
				if (e.detail.errMsg == "getPhoneNumber:ok") {
					uni.login({
						provider: "weixin",
						success: (res) => {
							uni.showLoading({
								title: '正在登录...',
								icon: 'loading'
							})
							this.$store
								// 获取微信登录的授权码
								.dispatch("WXLogin", {
									xcxCode: e.detail.code
								})
								.then(() => {
									this.loginSuccess();
								})
								.catch((e) => {
								console.log(e)
									//if (this.captchaEnabled) {
									//	this.getCode();
									//}
									//uni.hideLoading()
								});
						},
					});
				}
			}，
			
			loginSuccess (res) {
				this.GetInfo() //获取用户信息
				uni.hideLoading() 
				//跳转页面
				uni.navigateTo({
					url:"/pages/index/index"
				})
			},
```

```
// 微信登录（store）
	  WXLogin({ commit }, userInfo) {
		return new Promise((resolve, reject) => {
		    //  wechatLogin 是自定义的登录的接口
			wechatLogin(userInfo).then(res => {
			// 存储接口返回的token信息
			setToken(res.data.token)
			commit('SET_TOKEN', res.data.token)
			resolve()
		  }).catch(error => {
			reject(error)
		  })
		})
	  },
```



## uni-cloud云开发

 [uniCloud云开发视频教程-从基础入门到项目开发实战-uniapp进阶课文章管理系统（云函数/云数据库/云存储](https://www.bilibili.com/video/BV1PP411E7qG/?spm_id_from=333.337.search-card.all.click&vd_source=f25f5a8d75a3a60d5a288f726803ec11) 

 [uni-app官网 (dcloud.net.cn)](https://uniapp.dcloud.net.cn/uniCloud/#) 

（uni-cloud-project）

创建空的uni-app项目，右键关联阿里云服务器    [服务空间 - uniCloud (dcloud.net.cn)](https://unicloud.dcloud.net.cn/) 

uniCloud项目显示关联到的服务空间，则绑定成功



### 客户端和云函数的通信

uni-app客户端和传统服务器通信时，使用`uni.request`的ajax请求方式。uniCloud下不再使用它，有更好的云端一体的通信方式。

uniCloud体系里，客户端和服务端的云函数通信，有4种方式：

|              |                      传统的restful方式                       |                       callfunction方式                       |                          云对象方式                          |                         clientDB方式                         |
| :----------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|     简述     | 通过配置[云函数URL化](https://uniapp.dcloud.net.cn/uniCloud/http)，把云函数转为传统的http链接 |                  云函数默认并不自带http链接                  |      把callfunction的函数式调用，升级为模块化的对象调用      |                    客户端直接操作云数据库                    |
| 前端调用方式 |                           传统ajax                           | uni-app客户端通过`uniCloud.callFunction(functionname)`来调用云函数 | uni-app客户端通过`uniCloud.importObject(objectname)`导入一个云对象，直接使用这个对象的方法 | uni-app客户端通过``组件或`uniCloud.database()` API来访问uniCloud数据库。也支持搭配action云函数追加服务器逻辑 |
|   适用场景   | http链接需要自己注册域名。如果前端是uni-app，则不推荐使用URL化。如果是非uni-app的系统需要访问云函数，只能使用URL化 | 相比云函数URL，callfunction更加安全、更serverless，不暴露域名和ip，不怕攻击，也无需注册域名 | uni-app 3.4起支持。相比callfunction方式。代码更加精简、逻辑更加清晰、开发更加高效 | 如果uni-app前端发起的服务器请求目的主要是查询或操作数据库，则推荐使用clientDB方式 |

云函数是uniCloud的基础，本质上 clientDB 和 云对象 都是建立在云函数上针对特定场景的优化。

- clientDB针对的场景是数据库操作，它优化了可以不写或少写服务器代码
- 云对象针对的场景是非数据库操作或不宜前端暴露的数据库操作时，和uni-app客户端的通信方式。它优化了代码结构，更精简、简单



### clientDB方式

 clientDB分API方式和组件方式，此处使用API方式来演示 (必须要配合DB Schema 使用)

```js
// 客户端js直接操作云数据库，查询list表的数据。无需服务器代码
const db = uniCloud.database() // 获取云数据库的引用
db.collection('list').get()
  .then((res)=>{
    // res 为数据库查询结果
  }).catch((err)=>{
    console.log(err); 
  })
```



### 云函数

/uniCloud/uniFunctions  右键新建云函数    myCloudFunc(一个文件夹，文件夹名就是云函数名，index.js是函数的主体)

/uniCloud/uniFunctions/index.js

```
'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	//返回数据给客户端
	// return "uniapp study"
	return event
};
```

views文件夹下的 index.vue 文件内调用云函数

```
onLoad() {
			uni.callFunction({
				name:'myCloudFunc',
				data:{
					name:'占山',
					age:'20'
				}
			}).then(res=>{
				console.log(res)
			})
		},
```

#### callFunction方法

`uniCloud.callFunction`需要一个json对象作为参数，其中包含2个字段

| 字段 |  类型  | 必填 |         说明         |
| :--: | :----: | :--: | :------------------: |
| name | String |  是  |      云函数名称      |
| data | Object |  否  | 客户端需要传递的参数 |

**返回json**

|   字段    |      类型      |                             说明                             |
| :-------: | :------------: | :----------------------------------------------------------: |
|  result   |     Object     |                 云函数中代码return的返回结果                 |
| requestId |     String     | 云函数请求序列号，用于错误排查，可以在uniCloud web控制台的云函数日志中查到 |
|  header   |     Object     |                       服务器header信息                       |
|  errCode  | Number或String |                         服务器错误码                         |
|  success  |      bool      |                         执行是否成功                         |

获取集合的引用

```
const db = uniCloud.database();
// 获取 `user` 集合的引用(即表名)
const collection = db.collection('user');
```

在云数据库中创建表（nosql）

创建users表；

新建云函数  cloudDemoFunc

```js
'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const db = uniCloud.database();
	// 获取 `users` 集合的引用
	const res =await  db.collection('users');
	//返回数据给客户端
	return res.get()
};
```



#### 集合 Collection

通过 `db.collection(name)` 可以获取指定集合的引用，在集合上可以进行以下操作

| 类型     | 接口    | 说明                                                         |
| -------- | ------- | ------------------------------------------------------------ |
| 写       | add     | 新增记录（触发请求）                                         |
| 计数     | count   | 获取符合条件的记录条数                                       |
| 读       | get     | 获取集合中的记录，如果有使用 where 语句定义查询条件，则会返回匹配结果集 (触发请求) |
| 引用     | doc     | 获取对该集合中指定 id 的记录的引用                           |
| 查询条件 | where   | 通过指定条件筛选出匹配的记录，可搭配查询指令（eq, gt, in, ...）使用 |
|          | skip    | 跳过指定数量的文档，常用于分页，传入 offset                  |
|          | orderBy | 排序方式                                                     |
|          | limit   | 返回的结果集(文档数量)的限制，有默认值和上限值               |
|          | field   | 指定需要返回的字段                                           |

查询及更新指令用于在 `where` 中指定字段需满足的条件，指令可通过 `db.command` 对象取得。



#### 记录 Record / Document

通过 `db.collection(collectionName).doc(docId)` 可以获取指定集合上指定 _id 的记录的引用，在记录上可以进行以下操作

| 接口 | 说明   |                                                              |
| ---- | ------ | ------------------------------------------------------------ |
| 写   | update | 局部更新记录(触发请求)只更新传入的字段。如果被更新的记录不存在，会直接返回更新失败 |
|      | set    | 覆写记录;会删除操作的记录中的所有字段，创建传入的字段。如果操作的记录不存在，会自动创建新的记录 |
|      | remove | 删除记录(触发请求)                                           |
| 读   | get    | 获取记录(触发请求)                                           |

doc(docId)方法的参数只能是字符串，即数据库默认的_id字段。

如需要匹配多个`_id`的记录，应使用where方法。可以在where方法里用in指令匹配一个包含`_id`的数组。

新增文档时数据库会自动生成_id字段，也可以自行将_id设置为其他值



### 云对象

新建云对象 sum

```
module.exports = {
	sum(a, b) {
		// 此处省略a和b的有效性校验
		return a + b
	}
}
```

index.vue

```js
methods:{
			async sum () { //注意方法或生命周期需使用async异步方式
			    const sumNum = uniCloud.importObject('sumNum')
				try {
					const res = await sumNum.sum(1,2) //导入云对象后就可以直接调用该对象的方法了，注意使用异步await
					console.log(res) // 结果是3
				} catch (e) {
					console.log(e)
				}
			}
		}
```



创建云对象 cloudObj1

```js
const db = uniCloud.database();
module.exports = {
	_before: function () { // 通用预处理器

	},
	async get(){
		 return await db.collection('users').get()
	}
}
```

index.vue(获取数据的方法)

```js
           async getTheList(){
				
				const cloudObj1 = uniCloud.importObject('cloudObj1')
				try {
					const res = await cloudObj1.get()
					// console.log(res) // 结果是3
					this.lists=res.data
				} catch (e) {
					console.log(e)
				}
			},
```



### 云存储

### DB Schema

user表的schema(基础格式)  permission里面字段级控制，包括读写两种权限，分别称为：read、write 

只有配置了权限之后，client连接数据库才不会有权限问题

```json

{
  "bsonType": "object",
  "required": [],
  "permission": {
    "read": true, // 任何用户都可以读
    "create": false, // 禁止新增数据记录（admin权限用户不受限）
    "update": false, // 禁止更新数据（admin权限用户不受限）
    "delete": false // 禁止删除数据（admin权限用户不受限）
  },
  "properties": {
    "_id":{
    },
    "name":{
    },
    "pwd": {
      "bsonType": "password", // 即使不配置权限，此字段也无法在客户端读写
      "title": "密码"
    }
  }
}
```

配置了Schema之后，使用client连接数据库就不会报错了。

```js
async clientGetList(){
				const db = uniCloud.database() // 获取云数据库的引用
				db.collection('users').get()
				  .then((res)=>{
				    // res 为数据库查询结果
					console.log("client",res)
				  }).catch((err)=>{
				    console.log(err); 
				  })
			},
```



### uni-id用户体系

 下载插件：下载地址：https://ext.dcloud.net.cn/plugin?name=uni-id-pages 

 uni-id的云端配置文件在 `uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json` 中（没有这个目录的自己创建，配置文件在   [uni-app官网 (dcloud.net.cn)](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#config)  找到复制进来    注意复制后要符合json格式，去除所有注释【 passwordSecret 和  tokenSecret  自己设置，不能为空】）。

 

### 注意

项目体验在微信小程序上，要发送到体验版的时候，应该在hbuiler里面点击发布，并在微信小程序后台配置域名。