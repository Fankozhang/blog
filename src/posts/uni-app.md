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



https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/88

[Uni-app 有了这 10 个实用工具库，每个人都能独立开发项目 (qq.com) ](https://mp.weixin.qq.com/s/vU35vByG-mQzuepZ7qKn7Q)

## 开发模板

[unibest](https://github.com/codercup/unibest)    ： [起步 | unibest (codercup.github.io)](https://codercup.github.io/unibest-docs/guide/installation)    **由 uniapp + Vue3 + Ts + Vite4 + UnoCss + UniUI + VSCode 构建**

## 相关文章

[简记账app--使用uni-app开发完整功能app - 掘金 (juejin.cn)](https://juejin.cn/post/7236354905492668473?searchId=20231107134553740B3EDD7BEDDC8856C0#heading-0)

[【uniapp】十分钟带你封装uniapp的api请求 - 掘金 (juejin.cn)](https://juejin.cn/post/7249228528573694013?searchId=20231107134553740B3EDD7BEDDC8856C0#heading-14)

[uni-app开发经验总结 - 掘金 (juejin.cn)](https://juejin.cn/post/7255855818595647546)

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

[uni-app网络请求封装 (qq.com)](https://mp.weixin.qq.com/s/_HVuKltElr07_iIc6CTCGQ)

[【uniapp】带你优雅的封装uniapp的request请求_uniapp 封装request请求-CSDN博客](https://blog.csdn.net/qq_36375343/article/details/136250792)

[uni-app 中的接口请求封装 - 掘金 (juejin.cn)  ts  内容较多](https://juejin.cn/post/7239923199609241658#heading-9)



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

## 页面传参

[uniapp uni.navigateTo传递（对象类型）参数_uniapp navigateto 传参-CSDN博客](https://blog.csdn.net/weixin_56650035/article/details/119058076)



## scroll-view 滚动条隐藏

app.vue增加样式

```
scroll-view ::-webkit-scrollbar {  
	    display: none !important;  
	    width: 0 !important;  
	    height: 0 !important;  
	    -webkit-appearance: none;  
	    background: transparent;  
	}
	::-webkit-scrollbar{
		  display: none;
	}
```



## 自定义头部

### 简单的固定头部页面

```vue
<template>
	<view class="page">
		<view class="top">
			<view
				class="statusBar"
				:style="{ height: statusBarHeight + 'px' }"
			></view>
			<view class="nav" :style="{ height: navBarHeight + 'px' }">
				<view class="nav-in">
					<view style="flex: 1" @click="goBack">
						<uni-icons
							type="left"
							size="20"
							:color="black"
						></uni-icons>
						<span
							style="
								color: black;
								margin-left: 10rpx;
							"
							>返回</span
						>
					</view>
					<view style="flex: 1; text-align: center; color: black">
						设置</view
					>
					<view style="flex: 1"></view>
				</view>
			</view>
		</view>
		<view class="content" :style="{ paddingTop: statusBarHeight+navBarHeight + 'px' }">
			<view v-for="(item,index) in 20" :key="index">{{item}}</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			statusBarHeight: "",
			navBarHeight: "",
		};
	},
	onLoad() {
		let that = this;
		wx.getSystemInfo({
			success(res) {
				// 获取状态栏高度及是否是iOS设备
				let nav = 48; // 默认为48px
				// 判断是否是iOS
				if (res.system.indexOf("iOS") > -1) {
					nav = 44;
				}
				that.statusBarHeight = res.statusBarHeight;   // 状态栏高度
				that.navBarHeight = nav;        // navBar 栏高度
			},
		});
	},
	methods: {
		goBack() {
			uni.navigateBack({
				delta: 1,
			});
		},
	},
};
</script>
<style lang="scss" scoped>
.page {
     height: 100%;
	 background: #EEF2F4;
}
.top {
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 100;
	background: #ffffff;
}
.statusBar {
	width: 100%;
}
.nav {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.nav-in {
	width: 100%;
	padding: 0 32rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.content{
	width: 100%;
	
}
</style>
```

### 头部固定，底下内容滚动(带背景图)

```vue
<template>
  <view class="main">
    <view class="navbar_out">
      <view style="position: absolute; top: 0; left: 0; right: 0; width: 100vw">
        <image
          src="/static/background.png"
          mode="widthFix"
          style="width: inherit"
        />
      </view>
      <view
        :style="{
          paddingTop: statusBarHeight + 'px',
          lineHeight: navBarHeight + 'px;',
        }"
      >
        <view
          style="
            position: relative;
            z-index: 100000;
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <view style="flex: 1" @click="goBack">
            <uni-icons type="left" size="18" :color="'#ffffff'"></uni-icons>
            <span style="font-size: 30rpx; color: white; margin-left: 10rpx"
              >返回</span
            >
          </view>
          <view style="flex: 1; text-align: center; color: white"> 收藏 </view>
          <view style="flex: 1"></view>
        </view>
      </view>
    </view>
    <view class="content" :style="{ top: navBarHeight - 10 + 'px' }">
      <scroll-view
        scroll-y="true"
        class="scrollClass"
        :style="[{ height: listHeight }]"
        refresher-enabled="false"
      >
        <view class="basic-info-content-main">
          自定义要展示的内容
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      listHeight: 0, //列表高度
      statusBarHeight: 0,
      navBarHeight: 0,
    };
  },
  created() {
    this.listHeight =
      "calc(" +
      "100vh" +
      " - " +
      (this.statusBarHeight + this.navBarHeight + 50) +
      "px)";
  },
  onLoad() {
    let that = this;
    wx.getSystemInfo({
      success(res) {
        // 获取状态栏高度及是否是iOS设备
        let nav = 48; // 默认为48px
        // 判断是否是iOS
        if (res.system.indexOf("iOS") > -1) {
          nav = 44;
        }
        that.statusBarHeight = res.statusBarHeight;
        that.navBarHeight = nav;
      },
    });
  },
  methods: {
    goBack() {
      uni.navigateBack();
    }
  },
};
</script>

<style lang="less" scoped>
.main {
  
}
.navbar_out {
  width: 750rpx;
  height: 100vh;
  opacity: 1;
  background-image: url(/static/background.png);
  background-repeat: no-repeat;
  background-position-x: 0;
  background-position-y: 0;
  background-size: 100% auto;
  padding: 0 32rpx;
  background: #eef1f5;
  box-sizing: border-box;
  position: relative;
}

.scrollClass {
  width: 100%;
  position: relative;
  padding: 0 32rpx;
  padding-top: 132rpx;
  box-sizing: border-box;
  border-radius: 16rpx;
}
.content {
  position: fixed;
}

.basic-info-content-main {
  width: 686rpx;
  padding: 32rpx;
  background-color: white;
  border-radius: 16rpx;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>

```





## 提示消息： 

uni.$u.toast('校验通过')

## 消息订阅发送

[uniapp开发微信小程序实现微信订阅消息推送-JAVA版_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1yr4y1r73s/?spm_id_from=333.337.search-card.all.click&vd_source=f25f5a8d75a3a60d5a288f726803ec11)

## 背景图片不显示

[uniapp 页面添加背景图片不显示_uniapp 背景图片不显示-CSDN博客](https://blog.csdn.net/lfalt/article/details/130248933)

图片大小大于 40kb 会显示出来空白，需要压缩到40kb以下就能展示出来了

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

## uniapp 搜索类似下拉组件封装

### 封装

```vue
<template>
	<view>
		<view class="popupAll">
			<view class="tabList dispalyF" v-if="!allCheckShow">
				<scroll-view scroll-x style="white-space: nowrap;">
					<view style="padding:0 32rpx;" class="rightView">
						<view @click="getTopActive( newCkeckData[0],index)"
							:class="index==newCkeckData[0].activeIndex?'popupItem-active tabItem rightView':'popupItem tabItem rightView'"
							v-for="(item, index) in newCkeckData[0].data" :key="index"
							style="display: inline-block; margin-right: 15rpx;">
							{{item.dictLabel}}
						</view>
					</view>
				</scroll-view>
				<view class="tabrightBtnOut" @click="allCheckShowChange">
					<image class="tabrightBtn" src="/static/images/rightBtn.png" mode=""></image>
                    （展开）
				</view>
			</view>
			<view class="popupListAll" v-if="allCheckShow">
				<view class="popupList" v-for="(item,index) in newCkeckData" :key="index">
					<view class="tabTitle">
						{{item.name}}
					</view>
					<view class=" dispalyF " :style="[{position: 'sticky',top: '-2rpx',zIndex: 1,flexWrap: 'wrap'}] ">
						<template>
							<view @click="getActive(item,index,idx)"
								:class="idx==item.activeIndex?'popupItem-active':'popupItem'"
								style="margin-right: 20rpx;" v-for="(itm,idx) in item.data" :key="idx">
								{{ itm.dictLabel }}
							</view>
						</template>
					</view>
				</view>
				<view class="search_btn" @click="search">
					查询
				</view>
				<view class="popupPic" @click="close">
					<image class="" src="/static/images/popupPic.png" mode=""></image>
                    （收起弹框）
				</view>
			</view>

			<view class="gropo" v-if="allCheckShow"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "popupList",
		props: {

			ckeckData: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				newCkeckData: this.ckeckData,
				allCheckShow: false,
				params: '',
				fijItem: '',
				outData: []
			};
		},
		watch: {
			ckeckData(newVal) {
				this.newCkeckData = newVal
			},
			allCheckShow(newVal) {
				this.$parent.zctopShow = newVal
			}
		},
		mounted() {
			console.log(this.newCkeckData)
		},
		methods: {
			allCheckShowChange() {
				this.allCheckShow = !this.allCheckShow
			},
			search() {
				this.allCheckShow = false
				let param = []
				this.newCkeckData.forEach((item, index) => {
					if (item.data[item.activeIndex].dictLabel == '全部') {
						this.$parent.queryParams[item.type] = ''
					} else {
						this.$parent.queryParams[item.type] = item.data[item.activeIndex].dictValue
					}
				})
				let timeOut = setTimeout(()=>{
					this.$parent.search()
					clearTimeout(timeOut)
				},0)
			},
			close() {
				this.allCheckShow = false
			},
			getActive(item, index, idx) {
				this.newCkeckData[index].activeIndex = idx
			},
			getTopActive(item, index) {
				this.$set(this.newCkeckData[0],'activeIndex',index)
				this.search()
			}
		}
	}
</script>

<style lang="scss">
	.dispalyF {
		display: flex;
		align-items: center;
	}

	.popupAll {
		width: 100%;
		position: relative;
		background: #eef2f4;
		z-index: 9;
	}

	.popupListAll {
		background: #eef2f4;
		position: absolute;
		z-index: 99;
		width: 100%;
	}

	.popupList {
		background: #eef2f4;
		margin: 0 32rpx;

		.tabTitle {
			font-family: Source Han Sans;
			font-size: 24rpx;
			color: #282828;
			margin: 16rpx 0;
		}

		.popupItem {
			padding: 10.5rpx 32rpx;
			background: #fff;
			border-radius: 4rpx;
			font-family: Source Han Sans;
			font-size: 24rpx;
			font-feature-settings: "kern" on;
			color: #282828;
			margin-right: 15rpx;
			flex-shrink: 0;
			margin-bottom: 20rpx;
		}

		.popupItem-active {
			padding: 10.5rpx 32rpx;
			background: #91DDCD;
			border-radius: 4rpx;
			font-family: Source Han Sans;
			font-size: 24rpx;
			font-feature-settings: "kern" on;
			font-weight: bold;
			color: #087C65;
			margin-right: 15rpx;
			flex-shrink: 0;
			margin-bottom: 20rpx;
		}
	}

	.search_btn {
		width: 686rpx;
		height: 72rpx;
		border-radius: 8rpx;
		background: linear-gradient(96deg, #1AC89E 4%, #1590D4 99%);
		text-align: center;
		line-height: 72rpx;
		font-family: Source Han Sans;
		font-size: 28rpx;
		font-weight: bold;
		font-feature-settings: "kern" on;
		color: #FFFFFF;
		margin: 0 auto;
		margin-top: 36rpx;
	}

	.popupPic {
		width: 100%;
		height: 78rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.popupPic>image {
		width: 44rpx;
		height: 34rpx;
	}

	.gropo {
		position: fixed;
		left: 0rpx;
		top: 0rpx;
		width: 100vw;
		height: 100vh;
		opacity: 0.6;
		background: rgba(0, 0, 0, 0.23);
	}

	.tabList {
		height: 120rpx;
		position: relative;
		overflow: hidden;
		flex-wrap: nowrap;
		width: 100%;
		z-index: 9;
		background: #eef2f4;

		.tabItem {
			padding: 10.5rpx 32rpx;
			background: #fff;
			border-radius: 4rpx;
			font-family: Source Han Sans;
			font-size: 24rpx;
			font-feature-settings: "kern" on;
			color: #282828;
			margin-right: 15rpx;
			flex-shrink: 0;
		}

		.tabrightBtnOut {
			position: absolute;
			right: 0;
			width: 87rpx;
			height: 56rpx;
			background: #eef2f4;
		}

		.tabrightBtn {
			position: absolute;
			right: 36rpx;
			top: 50%;
			transform: translateY(-50%);
			width: 32rpx;
			height: 32rpx;
			z-index: 99;
		}

		.popupItem {
			padding: 10.5rpx 32rpx;
			background: #fff;
			border-radius: 4rpx;
			font-family: Source Han Sans;
			font-size: 24rpx;
			font-feature-settings: "kern" on;
			color: #282828;
			margin-right: 15rpx;
			flex-shrink: 0;
			// margin-bottom: 20rpx;
		}

		.popupItem-active {
			padding: 10.5rpx 32rpx;
			background: #91DDCD;
			border-radius: 4rpx;
			font-family: Source Han Sans;
			font-weight: bold;
			font-size: 24rpx;
			font-feature-settings: "kern" on;
			color: #087C65;
			margin-right: 15rpx;
			flex-shrink: 0;
			// margin-bottom: 20rpx;
		}
	}

	.dispalyF {
		display: flex;
		align-items: center;
	}

	.rightView :last-child {
		margin-right: 100rpx !important;
	}
</style>
```

### 使用

```
<PopupList :ckeckData="checkData" @searchCheck="search" ref="PopupList" />

import PopupList from '@/components/PopupList.vue'


checkData里面可以放入多个筛选配置条件
checkData: [{
					name: '岗位类型',   // 查询的内容名称
					type: 'type',     // 对应的字段
					data: [{            // data 里面是所有的检索项
							dictLabel: '全部',
							dictValue: ''
						}, {
							dictLabel: '就业岗位',
							dictValue: 1
						},
						{
							dictLabel: '实习岗位',
							dictValue: 0
						},
					],
					activeIndex: 0     // 默认选中的 
				}],
				
search(){
     // 触发搜索事件
}
```



## uniapp 上传文件

### uni.chooseFile

[uni.chooseFile(OBJECT) | uni-app官网 (dcloud.net.cn)](https://uniapp.dcloud.net.cn/api/media/file.html#wx-choosemessagefile)

```
uni.chooseFile({
  count: 6, //默认100
  extension:['.zip','.doc'],
	success: function (res) {
		console.log(JSON.stringify(res.tempFilePaths));
	}
});
```

微信小程序：

```js
           uploadPDF() {
			    uni.chooseMessageFile({
			      count: 1,
				  extension:['.pdf','.doc','.docx','.jpg','.png','.jpeg'],
			      success: (res) => {
					  console.log("res",res)
			        const tempFilePath = res.tempFiles[0];
			        uni.uploadFile({
			          url:config.baseUrl+'/system/ossBusiness/upload', // 上传文件的接口地址
			          filePath: tempFilePath.path,
			          name: 'file',
					  header:{
					  	'Authorization':'Bearer '+getToken()
					  },
			          formData: {
			          },
			          success: (uploadRes) => {
			            // 上传成功后的处理逻辑
			            console.log('上传成功', uploadRes);
						let temp=JSON.parse(uploadRes.data).data
						
						let param={fileName:tempFilePath.name,fileUrl:temp.url,source:'上传'}
						
						addResumeFile(param).then(res=>{
							if(res.code==200){
								this.getList()
							}
							
						})
						
			          },
			          fail: (err) => {
			            // 上传失败的处理逻辑
			            console.log('上传失败', err);
			          }
			        });
			      }
			    })
			}
```

### 上传头像

```
             <view class="avatarPath" @click="onChooseAvatar('avatarPath')">
                <image
                  class="avatarPath"
                  :src="avatarPath ? avatarPath : '/static/def_avtar.png'"
                  mode="aspectFill"
                ></image>
              </view>
```

```js
avatarPath:'' 

onChooseAvatar(type) {
      let that = this;
      uni.showActionSheet({
        itemList: ["查看", "上传"],
        success: function (res) {
          if (res.tapIndex == 0) {
            if (!that[type]) {
              uni.showToast({
                title: "请先上传图片",
                icon: "none",
                duration: 1500,
              });
              return;
            }
            that.viewImage(type);
          }
          if (res.tapIndex == 1) {
            uni.chooseMedia({
              count: 1, //默认9
              mediaType: ["image"],
              sizeType: ["original", "compressed"], //可以指定是原图还是压缩图，默认二者都有
              sourceType: ["album", "camera"], //从相册选择
              success: (data) => {
                uni.compressImage({
                  src: data.tempFiles[0].tempFilePath, // 图片路径
                  quality: 95, // 压缩质量
                  success(ressss) {
                    const blob = uni
                      .getFileSystemManager()
                      .readFileSync(ressss.tempFilePath, "binary");
                    const twoMBInBytes = 2 * 1024 * 1024; // 2MB转换为字节数
                    if (blob.length > twoMBInBytes) {
                      uni.showToast({
                        title: "图片大小不能超过2MB",
                        icon: "none",
                      });
                    } else {
                      uni.showLoading();
                      uni.uploadFile({
                        url: config.baseUrl + "system/ossBusiness/upload", // 仅为示例，非真实的接口地址
                        filePath: ressss.tempFilePath,
                        name: "file",
                        header: {
                          Authorization: "Bearer " + getToken(),
                        },
                        formData: {
                          // user: 'test'
                        },
                        success: (uploadres) => {
                          if (uploadres) {
                            that.$nextTick(() => {
                              that.$set(
                                that,
                                type,
                                JSON.parse(uploadres.data).data.url
                              );
                              console.log(type);
                              uni.hideLoading();
                            });
                          }
                        },
                        fail() {
                          uni.showToast({
                            title: "上传失败",
                            icon: "none",
                            duration: 1500,
                          });
                          uni.hideLoading();
                        },
                      });
                    }
                  },
                });
                return;
              },
            });
          }
        },
        fail: function (res) {
          // console.log(res.errMsg);
        },
      });
    },
```





## button组件去掉默认样式，转变为灵活的view

css

```css
button::after{
 	border: none;
}
button{
	position: relative;
	display: block;
	margin-left: auto;
	margin-right: auto;
	padding-left: 0px;
	padding-right: 0px;
	box-sizing: border-box;
	// font-size: 18px;
	text-align: center;
	text-decoration: none;
	// line-height: 1;
	line-height: 1.35;
	// border-radius: 5px;
	-webkit-tap-highlight-color: transparent;
	overflow: hidden;
	color: #000000;
	background-color: #fff;
	width: 100%;
	height: 100%;
	}
```

## 分享

button  open-type="share" 实现分享  （通过上面的css去除button默认样式）

```
<button  open-type="share" type="default" class="custom-button"></button>
```

定义生命周期函数onShareAppMessage(),设置该页面的分享信息。与onLoad 等生命周期函数同级。根据自己需要自行配置。
参考链接:   [分享 | uni-app官网 (dcloud.net.cn)](https://uniapp.dcloud.net.cn/api/plugins/share.html#onshareappmessage)

```xml
onShareAppMessage() {
	return {
		title: '分享的标题'
		}
}
```



[小程序-转发功能，使用button开放功能open-type="share"_button open-type="share-CSDN博客](https://blog.csdn.net/LzzMandy/article/details/104119751)

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

### uniapp打开pdf文件url看不见

这种情况得要通过先下载文件，再预览的形式才能实现预览pdf文件

```js
            // url 是 pdf文件的线上路径
            preview(url) {
				uni.downloadFile({
					url,
					success: (res) => {
						if (res.statusCode == 200) {
							let filePath = res.tempFilePath;
							console.log('filePath',filePath)
							uni.navigateTo({
							    // 到 web-view 页面查看
								url:'/page_other/webView/webView?url='+filePath
							})
						}
					}
				})
			},
```

### uniapp,实现下载文件(uni.downloadFile)，并保存到本地(uni.saveFile)，打开文件预览(uni.openDocument)

https://blog.csdn.net/qq_40745143/article/details/107287300

[uniapp预览文件（pdf、视频、音频、图片、xls、docx）效果demo（整理）-CSDN博客](https://blog.csdn.net/qq_38881495/article/details/130322639)

## uniapp图片设置双指放大缩小

[movable-area | uni-app官网 (dcloud.net.cn)](https://uniapp.dcloud.net.cn/component/movable-area.html)

[uniapp图片设置双指放大缩小这个功能相对来说比较简单的_uniapp图片放大_棕色小马龙的博客-CSDN博客](https://blog.csdn.net/qq_37363320/article/details/132511137)

```vue
<template>
<view>
<view class="uni-padding-wrap uni-common-mt">
    <movable-area scale-area>
    <movable-view direction="all" @scale="onScale" scale="true" scale-min="1" scale-max="4" :scale-value="scale">
    <image src="图片路径" mode="widthFix"></image>
    </movable-view>
    </movable-area>
</view>
</view>
</template>

需要说一下movable-view标签里的 scale-min=“1” scale-max="4"是干嘛用的，这两个设置相对来说也比较重要
scale-min 拿图片来说，如果 scale-min=“0.5” 的话那图片就会显示50%，不会完全100%显示，所以就让他初始化等于 1
scale-max 他的意思是双指放大可以放大几倍，比如 scale-max=“4” 那么双指放大4倍
movable-area是不需要写任何js代码的

onScale是空函数

css代码


movable-view {
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height:100%;
}
movable-area {
height: 100%;
width: 100%;
position:fixed;
overflow: hidden;
}
movable-view image{
width:100%;
}


```



## h5使用Window.open()跳转在ios下失效问题

[使用Window.open()跳转页面在ios下失效问题_iphone window.open-CSDN博客](https://blog.csdn.net/qq_62809806/article/details/129926247)

解决方法

获取浏览器识别兼容的系统类型
找到安卓和苹果端

```js
 let system = navigator.userAgent
 let isAndroid = system.indexOf('Android') > -1 || system.indexOf('Adr') > -1 // android终端
 let isiOS = !!system.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端


// 使用
        if (isAndroid) {
                //android终端
                console.log('我是安卓')
                window.open('https://www.baidu.com/')
            } else if (isiOS) {
                //ios终端
                console.log('我是ios')
                window.location.href = 'https://www.baidu.com/'
            }

```



## uniapp返回上一页携带参数

[uniapp返回上一页携带参数,两种方法，实测有效_uniapp携带参数返回上一页-CSDN博客](https://blog.csdn.net/qq2942713658/article/details/114581476)

```
// 下一页
uni.$emit('updateData', this.mydata)

// 返回页
uni.$on('updateData',function(data){
	console.log('监听到事件来自 updateData ，携带参数为：' + data);
})
```

拓展：在 onShow 中使用 uni.$on 时，每次返回会叠加触发 uni.$on ，例如返回页面5次，会叠加触发5次 uni.$on，此时需要在合适的时机触发  uni.$off('updateData')  来清除，以免出现 bug .   例如下方所示。

```
onShow(){
			 let that=this
			 uni.$on('updatePageData',function(num){
			 // pageView 浏览次数
				that.policyList[num].pageView=Number(that.policyList[num].pageView)+1
				 uni.$off('updatePageData')
			 })
			
},
```



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
	     }，
	     {
	      "root": "packageB",
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



[京东快递小程序分包优化实践 (qq.com)](https://mp.weixin.qq.com/s/YSQehiY3iji7xZBTpqDT2w)

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

## form 表单手机号校验

```js
phoneNumber: {
					rules: [
						{
							required: true,
							errorMessage: "手机号不能为空",
						},
						 {
							validateFunction: function(rule, value, data, callback) {
								let iphoneReg = (
									/^(13[0-9]|14[1579]|15[0-3,5-9]|16[6]|17[0123456789]|18[0-9]|19[89])\d{8}$/
								); //手机号码
								if (!iphoneReg.test(value)) {
									callback('手机号码格式不正确，请重新填写')
								}
							}
						}
					],
				},
```

```js
// 在 onReady 生命周期给表单绑定 验证规则
onReady(){
		this.$refs.valiForm.setRules(this.rule);
	},
```



## Uniapp中分页触底加载

[Uniapp中分页触底加载的实现方式_uniapp触底分页_babyxuqian的博客-CSDN博客](https://blog.csdn.net/babyxuqian/article/details/119409966)

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

## 微信登陆

### 手机号验证码功能

https://juejin.cn/post/7087789961490989070

### 微信手机号快捷登录

手机号快捷登录，微信登录需要用户同意 用户协议，隐私协议等。

 set1.png，set2.png用于用户是否勾选的图片的展示，自行选择

```vue
<template>
	<view >		
		<view class="login-input">		
			<view v-if="selectShow">
				<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" class="login-btn ">手机号快捷登录</button>
			</view>
			<view v-else>
				<button @click="getPhoneNumber" class="login-btn ">手机号快捷登录</button>
			</view>
			<view class="xieyiOut">
                
				<image src="/static/images/set1.png" alt="" class="xieyi_img" v-if="selectShow"
					@click="btn_selectShow" />
				<image src="/static/images/set2.png" alt="" class="xieyi_img" v-else @click="btn_selectShow" />
				<view @click.stop="btn_selectShow">我已阅读并同意</view>
				<view class="xieyi_btn" @click="handleUserAgrement()">用户协议
				</view>
				<!-- <view>和</view>
				<view class="xieyi_btn" @click="handlePrivacy()">隐私政策</view> -->
			</view>
		</view>
		<u-popup :round="10" :show="show" :closeOnClickOverlay="true" @close="closePopup" :closeable="true">
			<view class="popup">
				<view class="popup-title">
					用户协议
				</view>
				<view class="popup-content">
					欢迎使用！在使用我们产品和服务前，请您先阅读我们的<text class="yhxy"
						@click="handleUserAgrement()">《用户协议》</text>
                        <!-- 和<text
						@click="handlePrivacy()" class="yszc">《隐私政策》</text> -->
                        。
                        我们将严格按照上述条款为您提供服务，竭力保护您的信息安全。
				</view>
				<view class="button-list">
					<button class="button-info" @click="showToast">不同意</button>
					<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" data-type="yes" class="button-primary" :disabled="fangchong">同意并继续</button>
				</view>
			</view>
		</u-popup>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: true,
				selectShow: false,
				show: false,
				fangchong: false
			}
		},
		created() {

			// this.getCode()
		},
		methods: {
			
			getPhoneNumber(e) {
				if(e.target.dataset.type === 'yes'){
					this.selectShow = true
				}
				if(this.selectShow){
					this.show = false
				}
				if (!this.selectShow) {
					this.show = true
					return
				}
				if(this.fangchong){
					return
				}
				wx.showLoading({
					title: '正在登录，请稍后',
					mask: true
				})
				const params = {
					phoneCode: '',
					xcxCode: ''
				}
				const that = this
				if (e.target.errMsg == "getPhoneNumber:ok") {
					this.fangchong = true
					params.phoneCode = e.detail.code
					uni.login({
						provider: 'weixin',
						success: function(loginRes) {
							params.xcxCode = loginRes.code
                             // 调用后台微信登录接口，返回token，对token进行处理
							that.$store.dispatch('WXLogin', params).then((res) => {
								that.$modal.closeLoading()
								that.loginSuccess()
							}).catch(() => {
								let timeout = setTimeout(()=>{
									uni.hideLoading()
									that.fangchong = false
									clearTimeout(timeout)
								}, 1000)
								console.log('123123')
								uni.showToast({
									title: '授权失败',
									icon: 'none'
								})
							})
						},
						fail() {
							let timeout = setTimeout(()=>{
								uni.hideLoading()
								that.fangchong = false
								clearTimeout(timeout)
							}, 1000)
							console.log('授权失败登录页面')
						}
					});
				}else{
					uni.hideLoading()
					// that.show = false
				}
			},
			
			btn_selectShow() {
				this.selectShow = !this.selectShow;
			},
			// 隐私协议
			handlePrivacy() {
				uni.navigateTo({
					url: '/page_other/privacyPolicy'
				})
			},
			// 用户协议
			handleUserAgrement() {
				uni.navigateTo({
					url: "/packageA/pages/xieyi/xieyi",
				})
			},
			// 登录成功后，处理函数
			loginSuccess(result) {
				this.$store.dispatch("GetUserInfo").then((res) => {
				uni.showToast({
					title: `登录成功`,
				});
				uni.switchTab({
					url: "../../../pages/my/my",
					success: (res) => {
						let page = getCurrentPages().pop();
						if (page == undefined || page == null) return;
						page.onLoad();
					},
				});
			});
			},
			// 隐私协议关闭
			closePopup() {
				this.show = false
			},
			showToast() {
				uni.showToast({
					title:'很抱歉，我们无法为您提供服务，如需服务请先同意相关协议和条款。',
					icon:'none',
					duration: 2000
				})
			},
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f2f4f7;
	}
	
	.login-btn {
		margin-top: 20px;
		height: 45px;
		color: #FFFFFF;
		letter-spacing: 10rpx;
		font-weight: 900;
		width: 548rpx;
		height: 85rpx;
		background: #4882D7;
		box-shadow: 0rpx 6rpx 10rpx 0rpx #91B2E4;
		border-radius: 18rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.xieyiOut {
		display: flex;
		align-items: center;
		margin: 0 auto;
		color: #999999;
		font-size: 24rpx;
		letter-spacing: 2rpx;
		width: 600rpx;
		justify-content: center;
		padding: 40rpx 0;
	}

	.xieyi_img {
		width: 28rpx;
		height: 30rpx;
		margin-right: 2rpx;
	}

	.xieyi_btn {
		font-size: 24rpx;
		color: #333333;
		text-decoration: underline;
	}
	
	
	.popup {
		padding: 40rpx;
	}
	.popup-title {
		font-size: 44rpx;
		margin-bottom: 15rpx;
	}
	.popup-content {
		color: #606266;
		font-size: 33rpx;
		line-height: 1.8;
		margin-bottom: 20rpx;
	}
	.button-list {
		display: flex;
	}
	.button-info {
		width: 50%;
		font-size: 30rpx;
		margin-right: 15rpx;
		// border-radius: 25rpx;
		color: #9a9a9a;
	}
	.button-primary {
		width: 90%;
		background: #4882D7;
		color: #fff;
		font-size: 30rpx;
	}
	.yhxy,
	.yszc {
		color: #4882D7;
	}
</style>
```



### 微信登录

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

## 如何生成小程序的指定页面二维码？

[如何生成小程序的指定页面二维码？ | 微信开放社区 (qq.com)](https://developers.weixin.qq.com/community/develop/article/doc/00064eb822816899e11d72c0551c13)

## uniapp 仿微信朋友圈点击评论唤起软键盘并自定义输入框占位符

[uniapp 仿微信朋友圈点击评论唤起软键盘并自定义输入框占位符_uniapp评论框和键盘-CSDN博客](https://blog.csdn.net/m0_58135258/article/details/132212889)



## vue3开发模板

[codercup/unibest: unibest - 最好用的 uniapp 开发模板。unibest 是由 uniapp + Vue3 + Ts + Vite4 + UnoCss + UniUI 驱动的跨端快速启动模板，使用 VS Code 开发，具有代码提示、自动格式化、统一配置、代码片段等功能，同时内置了大量平时开发常用的基本组件，开箱即用，让你编写 uniapp 拥有 best 体验。 (github.com)](https://github.com/codercup/unibest)

## 发布

### ssl校验

[亚数信息-SSL/TLS安全评估报告 (myssl.com)](https://myssl.com/)

## 开发问题解决

[uniapp开发微信小程序，我踩了大家都会踩的坑 - 掘金 (juejin.cn)](https://juejin.cn/post/7361688292351967259#heading-0)

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