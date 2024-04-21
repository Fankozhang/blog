---
icon: edit
date: 2022-01-05
tag:
  - question
  - method

typora-copy-images-to: ./

typora-root-url: ..\.vuepress\public
---

# Harmony

官网：[HarmonyOS鸿蒙专区-开源鸿蒙IDE低代码-云开发-华为开发者学堂 (huawei.com)](https://developer.huawei.com/consumer/cn/training/harmonyOS/l44yheg8?ha_source=HM-yetou&ha_sourceId=89000240)

[前端卷鸿蒙？推荐 12 个 yyds 的开源鸿蒙实战项目 (qq.com)](https://mp.weixin.qq.com/s/LFvY152vujufw0UL3Oqp7A)

视频教程：

[黑马程序员HarmonyOS4+NEXT星河版入门到企业级实战教程，一套精通鸿蒙应用开发_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Sa4y1Z7B1/?spm_id_from=333.337.search-card.all.click&vd_source=f25f5a8d75a3a60d5a288f726803ec11)

[启动项目到模拟器_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1kr421W7rV?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11)

## DevEco Studio 下载

网址：[HUAWEI DevEco Studio和SDK下载和升级 | 华为开发者联盟](https://developer.huawei.com/consumer/cn/deveco-studio/)

安装教程：[工具简介-DevEco Studio使用指南-工具-HarmonyOS应用开发](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V3/deveco_overview-0000001053582387-V3?catalogVersion=V3)

## 工程目录结构

[HarmonyOS应用开发的工程目录结构_鸿蒙目录结构-CSDN博客](https://blog.csdn.net/weixin_40763897/article/details/135731357)

## 修改应用名称（中文模式下）

entry/src/main/resources/zh_CN 

```
{
      "name": "EntryAbility_label",
      "value": "我的newDemo"
 }
 
 value的值就是应用名称的值
```

## 入口组件

![image-20240422001017407](/image-20240422001017407.png)

## 应用程序入口 UIAbility

UIAbility是一种包含用户界面的应用组件，主要用于和用户进行交互。UIAbility也是系统调度的单元，为应用提供窗口在其中绘制界面。

每一个UIAbility实例，都对应于一个最近任务列表中的任务。

一个应用可以有一个UIAbility，也可以有多个UIAbility



UIAbility的生命周期包括Create、Foreground、Background、Destroy四个状态，WindowStageCreate和WindowStageDestroy为窗口管理器（WindowStage）在UIAbility中管理UI界面功能的两个生命周期回调，从而实现UIAbility与窗口之间的弱耦合。

具体使用看  [应用程序框架-华为开发者学堂 (huawei.com)](https://developer.huawei.com/consumer/cn/training/course/slightMooc/C101667310940295021)

### EntryAbility

src/main/ets/entryability/EntryAbility.ts

里面包含了 UiAbility 的生命周期

## 页面操作

### 路由跳转的page页面配置位置  

src/main/resources/base/profile/main_pages.json  文件保存的是页面page的路径配置信息，所有需要进行路由跳转的page页面都要在这里进行配置。

### 新建页面

![](/image-20231118025204427.png)



使用此方法新建的页面，会自动在 src/main/resources/base/profile/main_pages.json   生成页面配置

### 页面跳转（传参，返回传参）

index.ets

```
import router from '@ohos.router';

 Button("按钮").onClick(()=>{
          router.pushUrl({
            //  跳转到的页面地址, Next,ets
            url:'pages/Next',
            //  传递参数
            params: {
              src:'传参了',
            }
          })
        })
```

Next.ets  （接收index跳转传递过来的参数）

```
import router from '@ohos.router';

// 接收传递来的参数
@State src: string = router.getParams()?.['src']

// 渲染数据到页面上
 Text(this.src)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
          
Button("返回").onClick(()=>{

          //  返回上一个页面
          router.back()
          
          //  返回到指定页面。
          router.back({ url: 'pages/Index' });
          
          // 如调用 router.clear() 方法清空了页面栈中所有历史页面，仅保留当前页面，此时则无法通过调用router.back()方法返回到上一个页面。
        
         router.back({
              url: 'pages/Index',
              params: {
                src: 'Next页面传来的数据',
              }
            })
        
        })
```

index.ets  从 Next.ets  返回时传参的获取

```
import router from '@ohos.router';

@State src: string = '';
  onPageShow() {
    this.src = (router.getParams() as Record<string, string>)['src'];
  }
```



调用router.back()方法之前，可以先调用router.enableBackPageAlert()方法开启页面返回询问对话框功能。

说明

- router.enableBackPageAlert()方法开启页面返回询问对话框功能，只针对当前页面生效。例如在调用router.pushUrl()或者router.replaceUrl()方法，跳转后的页面均为新建页面，因此在页面返回之前均需要先调用router.enableBackPageAlert()方法之后，页面返回询问对话框功能才会生效。
- 如需关闭页面返回询问对话框功能，可以通过调用router.disableAlertBeforeBackPage()方法关闭该功能即可。

```
router.enableBackPageAlert({
  message: 'Message Info'
});

router.back();
```



## 基础组件

[组件参考（基于ArkTS的声明式开发范式）-ArkTS API参考-HarmonyOS应用开发](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/ts-container-alphabet-indexer-0000001427744828-V3)

