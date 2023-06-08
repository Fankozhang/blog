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

