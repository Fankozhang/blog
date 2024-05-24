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

https://harmonyos-next.github.io/interview-handbook-project/guide/index.html

[前言 | 《ArkUI实战》](https://www.arkui.club/)



视频教程：

[黑马程序员HarmonyOS4+NEXT星河版入门到企业级实战教程，一套精通鸿蒙应用开发_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Sa4y1Z7B1/?spm_id_from=333.337.search-card.all.click&vd_source=f25f5a8d75a3a60d5a288f726803ec11)      [安装DevEcoStudio - 配套文档 (feishu.cn)](https://b11et3un53m.feishu.cn/wiki/LGprwXi1biC7TQkWPNDc45IXndh)

[启动项目到模拟器_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1kr421W7rV?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11)



https://blog.csdn.net/viewinfinitely/category_12522845.html

[Mayism123-CSDN博客](https://blog.csdn.net/Mayism123?type=blog)



学习编写的代码地址： [东方凝洛/harmonyProject - 码云 - 开源中国 (gitee.com)](https://gitee.com/fankozhang/harmony-project)



鸿蒙开发学习文档资料
链接：https://pan.xunlei.com/s/VNmt7B70WUGbGL0SZ5kgYw7hA1?pwd=yptb#
提取码：yptb
链接：https://pan.xunlei.com/s/VNmt7HMNtf_MyZVjtf6GNcaZA1?pwd=wymn#
提取码：wymn





## DevEco Studio 下载

网址：[HUAWEI DevEco Studio和SDK下载和升级 | 华为开发者联盟](https://developer.huawei.com/consumer/cn/deveco-studio/)

安装教程：[工具简介-DevEco Studio使用指南-工具-HarmonyOS应用开发](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V3/deveco_overview-0000001053582387-V3?catalogVersion=V3)

### 快捷键

https://juejin.cn/post/7059308783532507150

## 工程目录结构

[HarmonyOS应用开发的工程目录结构_鸿蒙目录结构-CSDN博客](https://blog.csdn.net/weixin_40763897/article/details/135731357)

注意：

静态文件的文件名最好用 驼峰命名，不要有 - 之类的特殊字符，否则编译会报错

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



**UIAblility的启动模式（多实例）**：[Stage模型-UIAbility的启动模式_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Sa4y1Z7B1?p=27&spm_id_from=pageDriver&vd_source=f25f5a8d75a3a60d5a288f726803ec11)     [深入理解HarmonyOS UIAbility：生命周期、WindowStage与启动模式探析](https://bbs.huaweicloud.com/blogs/416898)

[UIAbilityContext-application-接口依赖的元素及定义-Ability框架-ArkTS接口参考-ArkTS API参考 | 华为开发者联盟 (huawei.com)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/js-apis-inner-application-uiabilitycontext-0000001478341321-V2)



### EntryAbility

src/main/ets/entryability/EntryAbility.ts

里面包含了 UiAbility 的生命周期



### 新增ability (ability跳转)

[AbilityStage组件容器-Stage模型应用组件-Stage模型开发指导-应用模型-开发 | 华为开发者联盟 (huawei.com)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/abilitystage-0000001427584604-V2)

ets 文件夹右键-》新建 -》 ability

在新建的 ability 文件中修改    windowStage.loadContent  的路径

ability 页面路径跳转  (以下只展示了页面跳转，带参数的还要添加参数)

```ts
import Want from '@ohos.app.ability.Want';

goHealthAbility(){
    // 跳转到别的UIability
    //跳转到目的地 want
    let want:Want={
      // deviceId :'' , // 指示查询的设备ID。
      bundleName:"com.example.stydyproject",
      // moduleName:'entry',
      abilityName:"healthAbility",
    }
    console.log("want",JSON.stringify(want))
    //跳转
    this.context.startAbility(want)
  }
```



## 页面（router路由操作）

### 路由跳转的page页面配置位置  

src/main/resources/base/profile/main_pages.json  文件保存的是页面page的路径配置信息，所有需要进行路由跳转的page页面都要在这里进行配置。

### 新建页面

![](/image-20231118025204427.png)



使用此方法新建的页面，会自动在  src/main/resources/base/profile/main_pages.json   生成页面配置

**新建页面后模板**

一个页面只能有一个 @Entry 修饰的自定义组件  （此处修改内容从左上角开始展示）

```
@Entry
@Component
struct AboutPage {
  @State message: string = 'about'

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
      }
      .width('100%')
      .alignItems(HorizontalAlign.Start)    // 横向从左边开始显示
    }
    .height('100%')
    .alignItems(VerticalAlign.Top)    // 竖直方向从上面开始显示
  }
}
```



### 页面跳转（传参，返回传参）

官网参考：https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-routing-0000001503325125-V2

- router.pushUrl()：目标页不会替换当前页，而是压入页面栈。这样可以保留当前页的状态，并且可以通过返回键或者调用[router.back()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/js-apis-router-0000001478061893-V2#ZH-CN_TOPIC_0000001523808578__routerback)方法返回到当前页。
- router.replaceUrl()：目标页会替换当前页，并销毁当前页。这样可以释放当前页的资源，并且无法返回到当前页。



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
        },router.RouterMode.Single)
        
```

RouterMode有以下两种选择，选择适当的模式可以提升性能

| Standard | 多实例模式，也是默认情况下的跳转模式。目标页面会被添加到页面栈顶，无论栈中是否存在相同url的页面。**说明：**不使用路由跳转模式时，则按照默认的多实例模式进行跳转。 |
| -------- | ------------------------------------------------------------ |
| Single   | 单实例模式。如果目标页面的url已经存在于页面栈中，则该url页面移动到栈顶。如果目标页面的url在页面栈中不存在同url页面，则按照默认的多实例模式进行跳转。 |

Next.ets  （接收index跳转传递过来的参数）

```ts
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

## 自定义组件

https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-create-custom-components-0000001473537046-V2

相比于页面组件不需要  @Entry 修饰，需要有 @Component 修饰

可以使用 export 导出组件，在使用 import 导入组件

```ts
import router from '@ohos.router';
@Component
export struct  TitleBar{
  build(){
    Row(){
    }
    .width('100%')
  }
}
```

```ts
import {TitleBar} from '../components/titleBar'
```



## 页面和自定义组件生命周期

官方文档：https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-page-custom-components-lifecycle-0000001524296665-V2



页面生命周期，即被@Entry装饰的组件生命周期，提供以下生命周期接口：

- [onPageShow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/arkts-custom-component-lifecycle-0000001482395076-V2#ZH-CN_TOPIC_0000001523488850__onpageshow)：页面每次显示时触发一次，包括路由过程、应用进入前台等场景。
- [onPageHide](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/arkts-custom-component-lifecycle-0000001482395076-V2#ZH-CN_TOPIC_0000001523488850__onpagehide)：页面每次隐藏时触发一次，包括路由过程、应用进入后台等场景。
- [onBackPress](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/arkts-custom-component-lifecycle-0000001482395076-V2#ZH-CN_TOPIC_0000001523488850__onbackpress)：当用户点击返回按钮时触发。

组件生命周期，即一般用@Component装饰的自定义组件的生命周期，提供以下生命周期接口：

- [aboutToAppear](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/arkts-custom-component-lifecycle-0000001482395076-V2#ZH-CN_TOPIC_0000001523488850__abouttoappear)：组件即将出现时回调该接口，具体时机为在创建自定义组件的新实例后，在执行其build()函数之前执行。
- [aboutToDisappear](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/arkts-custom-component-lifecycle-0000001482395076-V2#ZH-CN_TOPIC_0000001523488850__abouttodisappear)：在自定义组件析构销毁之前执行。不允许在aboutToDisappear函数中改变状态变量，特别是@Link变量的修改可能会导致应用程序行为不稳定。

## 装饰器

### @Styles装饰器：定义组件重用样式

**只能在当前文件内使用，不支持export。**

当前@Styles仅支持[通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/ts-universal-attributes-size-0000001428061700-V2)和[通用事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/ts-universal-events-click-0000001477981153-V2)。     @Styles方法不支持参数

@Styles可以定义在组件内或全局，在全局定义时需在方法名前面添加function关键字，组件内定义时则不需要添加function关键字。

定义在组件内的@Styles可以通过this访问组件的常量和状态变量，并可以在@Styles里通过事件来改变状态变量的值

组件内@Styles的优先级高于全局@Styles。

示例：

```ts
// 定义在全局的@Styles封装的样式 (需要加 function )
@Styles function globalFancy  () {
  .width(150)
  .height(100)
  .backgroundColor(Color.Pink)
}
@Entry
@Component
struct NewPage {
  @State message: string = 'Hello World1234'
  @State colorIn:Color=Color.Red
  // 定义在组件内部的@Styles封装的样式
  @Styles fancy() {
    .backgroundColor(this.colorIn)  //可以使用组件内的变量
    .borderRadius(20)
    .onClick(() => {       // 点击可以改变状态值，实现改变样式
      this.colorIn = Color.Yellow
    })
  }

  build() {
    Row() {
      Column() {
        Row(){
          Text(this.message)
            .fontSize(20)
            .fontWeight(FontWeight.Bold)
        }
        .fancy()   // 使用组件内部的自定义的样式
      }
      .width('100%')
      .globalFancy()   // 使用全局定义的自定义的样式
    }
    .height('100%')
  }
}

```

### @Prop@Link@State状态装饰器

https://blog.csdn.net/Viewinfinitely/article/details/134772944

@Prop 数据父子单向绑定

@Link   数据父子双向绑定

```ts
@Entry
@Component
struct NewPage {
  @State date: string = "时间：" + new Date().getTime();
  @State num:number=8

  build() {
    Row() {

      Column() {
        Text(`${this.date}`)
          .fontSize(20)
          .fontWeight(FontWeight.Bold)
        Text(`${this.num}`)
          .fontSize(20)
          .fontWeight(FontWeight.Bold)

        timeItem({time: this.date})     // 必须初始化子组件的time字段 (@Prop)
        CounterExample({value:$num})    // 初始化子组件时传递属性使用$符号(@Link)

      }
      .width('100%')

    }
    .height('100%')


  }
}

// 子组件展示props使用
@Component struct timeItem {

  @Prop time: string;                                // 不允许本地初始化

  build() {
    Text(`子组件【${this.time}】`)
      .fontSize(20)
      .backgroundColor(Color.Grey)
      .onClick(() => {
        this.time = "时间：" + new Date().getTime();  // 子组件的更改不影响父组件
      })
  }

}

// 子组件展示@Link使用
@Component
struct CounterExample {
  @Link value: number
  build() {
    Column() {
      // 计数器组件
      Counter() {
        Text(this.value.toString())
      }.margin(100)
      .onInc(() => {
        this.value++
      })
      .onDec(() => {
        this.value--
      })
    }.width("100%")
  }
}
```

### @Provide和@Consume：与后代双向同步

其中@Provide装饰的变量是在祖先节点中，可以理解为被“提供”给后代的状态变量。@Consume装饰的变量是在后代组件中，去“消费（绑定）”祖先节点提供的变量。

[@Provide装饰器和@Consume装饰器：与后代组件双向同步-管理组件拥有的状态-状态管理-学习ArkTS语言-入门 | 华为开发者联盟 (huawei.com)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-provide-and-consume-0000001473857338-V2)

### @Observed@ObjectLink嵌套类对象属性变化

[@Observed装饰器和@ObjectLink装饰器：嵌套类对象属性变化-管理组件拥有的状态-状态管理-学习ArkTS语言-入门 | 华为开发者联盟 (huawei.com)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-observed-and-objectlink-0000001473697338-V2)

### @Watch（监听状态变量的变化）

`@Watch` 用来监听状态变量的变化，当它修饰的状态变量发生变更时，回调相应的方法

```
@State @Watch("function_name") count : number = 0;
```

给状态变量 `count` 增加一个 `@Watch` 装饰器，通过 `@Watch` 注册一个回调方法 `function_name` ， 当状态变量 `count` 被改变时， 触发 `function_name` 回调。

示例：

```ts
@Entry
@Component
struct NewPage {
  @State @Watch("onBasketUpdated") shopBasket: Array<number> = [1, 2, 3, 4];
  @State totalPurchase: number = 0;

  updateTotal(): number {
    let sum = 0;
    this.shopBasket.forEach((i) => {
      sum += i;
    });
    // 计算新的购物篮总价值，如果超过100RMB，则适用折扣
    this.totalPurchase = (sum < 100) ? sum : 0.9 * sum;
    return this.totalPurchase;
  }

  onBasketUpdated(propName: string): void {
    this.updateTotal();
  }

  build() {
    Column({space: 10}) {
      Text(`${this.totalPurchase}`)
        .fontSize(30)

      Button("add to basket")
        .onClick(() => {
          this.shopBasket.push(1)
        })
    }
    .width("100%")
    .height("100%")
    .padding(10)
  }
}
```



### @Builder装饰器：自定义构建函数

ArkUI提供了一种更轻量的UI元素复用机制@Builder，@Builder所装饰的函数遵循build()函数语法规则，开发者可以将重复使用的UI元素抽象成一个方法，在build方法里调用。

为了简化语言，我们将@Builder装饰的函数也称为“自定义构建函数”。



#### 自定义组件内自定义构建函数

定义的语法：

```
@Builder MyBuilderFunction(){ ... }
```

使用方法：

```
this.MyBuilderFunction()
```

#### 全局自定义构建函数

定义的语法：

```
@Builder function MyGlobalBuilderFunction(){ ... }
```

使用方法：

```
MyGlobalBuilderFunction()
```

#### 参数传递参考官网

https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/arkts-builder-0000001524176981-V2#section1771518610353

## 应用级变量的状态管理（全局存储）

[应用级变量的状态管理-组件参考（基于ArkTS的声明式开发范式）-ArkTS API参考 | 华为开发者联盟 (huawei.com)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/arkts-state-management-0000001504151156-V2)

## 常用功能

### UI组件显示隐藏

通过一个变量来控制显示和隐藏  （用 if 来做判断）

```ts
@Entry
@Component
struct AboutPage {
  @State isShow:boolean = true

  build() {
    Row() {
      Column() {
        if(this.isShow){   // 通过isShow判断是否显示
          Text("显示/隐藏")
        }
        Button("按钮").onClick(()=>{
          this.isShow=!this.isShow
        })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

### 循环渲染（通常和列表一起使用）

使用ForEach（需要渲染的列表数据，组件生成函数，键值生成函数【key】）

默认的键值生成函数，即(item: any, index: number) => { return index + '__' + JSON.stringify(item); },

所以第三个参数推荐不写。（写了反而可能出现操作错误，操作数据渲染显示异常）

```text
ArkUI框架会对重复的键值发出警告。在UI更新的场景下，如果出现重复的键值，框架可能无法正常工作，具体请参见渲染结果非预期。
```

```ts
@Entry
@Component
struct AboutPage {
  private list: string[] = ["一","二","三"]

  build() {
    Row() {
      Column() {
          
        ForEach(this.list, (item,index) => {
          Text(`${item}`)            
          Text(`${index}`)			   // 注意这里用的模板字符串，不用会报错(Text 需要是字符串类型)
        }, (item,index)=> `${index}`)   // 注意这里用 index 作为key值，需要使用的模板字符串，不用会报错
          
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

循环渲染通常和列表一起使用

```ts
@Entry
@Component
struct ListDemo {
  private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  build() {
    Column() {
      List({ space: 10 }) {
        ForEach(this.arr, (item: number) => {
          ListItem() {
            Text(`${item}`)
              .width('100%')
              .height(100)
              .fontSize(20)
              .fontColor(Color.White)
              .textAlign(TextAlign.Center)
              .borderRadius(10)
              .backgroundColor(0x007DFF)
          }
        }, item => item)
      }
    }
    .padding(12)
    .height('100%')
    .backgroundColor(0xF1F3F5)
  }
}
```



## 基础组件

[组件参考（基于ArkTS的声明式开发范式）-ArkTS API参考-HarmonyOS应用开发](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/ts-container-alphabet-indexer-0000001427744828-V3)

编辑器中，悬停在组件的代码上，可以查看api参考



### Text

Text(content?: string | Resource)     

注意：只能是字符串 / Resource 类型， 不能是数字等类型，否则会报错，需要显示数字类型时可以用模板字符串

### TextInput 输入框

```ts
@Entry
@Component
struct NewPage {
  @State text: string = ''
  controller: TextInputController = new TextInputController()
  
  build() {
    Row() {
      Column() {

       TextInput( {text:this.text,placeholder:'请输入内容',controller: this.controller} )
         .placeholderColor(Color.Grey)
         .placeholderFont({ size: 14, weight: 400 })
         .caretColor(Color.Blue)      //设置输入框光标颜色。
         .width(350)
         .height(40)
         .margin(20)
         .fontSize(14)
         .fontColor(Color.Black)
         .maxLength(9)    // 设置文本的最大输入字符数。
         .textAlign(TextAlign.Start)   //设置输入文本在输入框中的对齐方式。 默认值：TextAlign.Start
         .inputFilter('[a-z]', (e) => {      // 正则表达式，匹配表达式的输入允许显示
           console.log(JSON.stringify(e))
         })
         .onChange((value: string) => {
           this.text = value
         })
         .type(InputType.Password)    // 输入框类型，此处设置密码类型（还有以下类型 Email，Number，PhoneNumber）
         .showPasswordIcon(true)      // 密码输入模式时，输入框末尾的图标是否显示。默认值：true
         .style(TextInputStyle.Inline) 


        Button('设置光标的位置')
          .margin(15)
          .onClick(() => {
            // 将光标移动至第2个字符后
            this.controller.caretPosition(2)
          })

      }
      .width('100%')
    }
    .height('100%')
  }
}
```

### Image

1：string格式可用于加载网络图片和本地图片，常用于加载网络图片。 （加载网络图片需要增加网络权限配置）

2：PixelMap格式为像素图，常用于图片编辑的场景。（不推荐使用）

3：Resource格式可以跨包/跨模块访问资源文件，是访问本地图片的推荐方式。

​      Image($r('app.media.icon'))         访问 resources/base/media 目录下的文件 （可以不用带后缀名）

​       Image($rawfile('icon.png'))          访问 resources/rawfile 目录下的文件 （要带后缀名）



示例：

```ts
 Image("https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png")// 直接加载网络地址，请填写一个具体的网络图片地址,增加网络权限
          .alt($r('app.media.icon'))  // 使用alt，在网络图片加载成功前使用占位图
          .width(200)
          .height(100)
```



使用网络图片需要添加权限：

module.json5  增加如下配置

```
"requestPermissions": [
      {"name": "ohos.permission.INTERNET"}
    ],
```



### Video

使用网络适配地址时和图片一样需要  INTERNET 权限

官网示例：https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/ts-media-components-video-0000001427902484-V2#ZH-CN_TOPIC_0000001573929037__%E7%A4%BA%E4%BE%8B



### Tabs,TabContent

通过页签进行内容视图切换的容器组件，每个页签对应一个内容视图。

Tabs  仅可包含子组件  [TabContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/ts-container-tabcontent-0000001478341169-V2)。

#### 基本使用

```ts
@Entry
@Component
struct AboutPage {
  private controller: TabsController = new TabsController()

  build() {
    Column() {
      Row(){
        Tabs({barPosition:BarPosition.Start,controller:this.controller}){
          TabContent() {
            // 在tab内容中显示的内容
            Column().width('100%').height('100%').backgroundColor(Color.Green)
          }
          // tab显示的文字内容（string）
          .tabBar('greenContent')

          TabContent() {
            Column().width('100%').height('100%').backgroundColor(Color.Blue)
          }
          .tabBar('blueContent')
        }
        .vertical(false)
        .barMode(BarMode.Scrollable)  // BarMode默认是Fixed，设置成Scrollable时，超过长度TabBar可以滚动
        .barWidth('100%') // 设置TabBar宽度
        .barHeight(60) // 设置TabBar高度
        .width('100%') // 设置Tabs组件宽度
        .height('100%') // 设置Tabs组件高度
        .backgroundColor('white') // 设置Tabs组件背景颜色

      }

    }

  }
}
```

#### 设置TabBar位置和排列方向

注意，设置位置后，适量的调整 barWidth，barHeight 的值以达到良好的展示效果

barPosition的值可以设置为BarPosition.Start（默认值）和BarPosition.End：

- BarPosition.Start

  vertical属性方法设置为false（默认值）时，页签位于容器顶部。

  vertical属性方法设置为true时，页签位于容器左侧。

- BarPosition.End

  vertical属性方法设置为false时，页签位于容器底部。

  vertical属性方法设置为true时，页签位于容器右侧。

#### 自定义TabBar样式

TabContent的tabBar属性除了支持string类型，还支持使用@Builder装饰器修饰的函数。您可以使用@Builder装饰器，构造一个生成自定义TabBar样式的函数，实现自定义TarBar样式

```ts
@Entry
@Component
struct AboutPage {
  @State currentIndex: number = 0;
  private tabsController: TabsController = new TabsController();

  // 自定义的tabBar展示样式
  @Builder TabBuilder(title: string, targetIndex: number, selectedImg: Resource, normalImg: Resource) {
    Column() {
      Image(this.currentIndex === targetIndex ? selectedImg : normalImg)
        .size({ width: 35, height: 35 })
      Text(title)
        .fontColor(this.currentIndex === targetIndex ? '#1698CE' : '#6B6B6B')
    }
    .width('100%')
    .height(50)
    .justifyContent(FlexAlign.Center)
    .onClick(() => {
      this.currentIndex = targetIndex;
      this.tabsController.changeIndex(this.currentIndex);
    })
  }

  build() {
    Tabs({ barPosition: BarPosition.End, controller: this.tabsController }) {
      TabContent() {
        Column().width('100%').height('100%').backgroundColor('#00CB87')
      }
      .tabBar(this.TabBuilder('首页', 0, $r('app.media.zphChoice'), $r('app.media.zph')))

      TabContent() {
        Column().width('100%').height('100%').backgroundColor('#007DFF')
      }
      .tabBar(this.TabBuilder('我的', 1, $r('app.media.shouyeChoice'), $r('app.media.shouye')))
    }
    .barWidth('100%')
    .barHeight(60)
    .onChange((index: number) => {
      this.currentIndex = index;
    })
  }
}

```



### List 列表（自带滚动）

```ts
@Entry
@Component
struct NewPage {
  @State text: string = ''
  controller: TextInputController = new TextInputController()

  private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  build() {
    Column() {
      Row(){
        Text("列表标题").fontSize(30).fontWeight(FontWeight.Bold).margin(10)
      }.height(50)

      List({ space: 10 }) {
        ForEach(this.arr, (item: number) => {
          ListItem() {
            Text(`${item}`)
              .width('100%')
              .height(100)
              .fontSize(20)
              .fontColor(Color.White)
              .textAlign(TextAlign.Center)
              .borderRadius(10)
              .backgroundColor(0x007DFF)
          }
        }, item => item)
      }
      .listDirection(Axis.Horizontal)   //设置List组件排列方向。  默认值：Axis.Vertical
      .layoutWeight(1)    // 分配权重，去除已有的高度值，剩下的高度，按照数值大小分配权重
    }
    .padding(12)
    .backgroundColor(0xF1F3F5)

  }
}

```



### Swiper(提供子组件滑动轮播显示的能力)



### 弹框

参考：[构建更加丰富的页面-华为开发者学堂 (huawei.com)](https://developer.huawei.com/consumer/cn/training/course/slightMooc/C101680765314766141)     [弹窗-全局UI方法-组件参考（基于ArkTS的声明式开发范式）-ArkTS API参考 | 华为开发者联盟 (huawei.com)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/3_1_u5f39_u7a97-0000001478181449-V2)

弹窗按照功能可以分为以下两类：

- 确认类：例如警告弹窗AlertDialog。
- 选择类：包括文本选择弹窗TextPickerDialog 、日期滑动选择弹窗DatePickerDialog、时间滑动选择弹窗TimePickerDialog等。

此外，如果上述弹窗还不能满足您的需求，或者需要对弹窗的布局和样式进行自定义，您还可以使用自定义弹窗CustomDialog。



自定义弹框的定义

```ts
@Preview    // 增加 @Preview 可以在预览器看到弹框的内容
@CustomDialog   // @CustomDialog 说明是自定义弹框组件
export default  struct  dialogExample{
  controller:CustomDialogController     // 弹框控制器，可以触发控制器的方法
  // 自定义的方法，可以由调用者触发
  cancel: () => void
  confirm: (content:string) => void   // 像弹框外触发方法，传值
  build(){
    // build 里面的都是弹框自定义的内容，根据需要编写
    Column(){
      Text("弹框中的内容").fontSize(24).fontWeight(FontWeight.Bold)
      // 自定义的确认，取消按钮
      Flex({ justifyContent: FlexAlign.SpaceAround }) {
        Button('取消')
          .onClick(() => {
            this.controller.close()
            this.cancel()
          }).backgroundColor(0xffffff).fontColor(Color.Black)
        Button('确认')
          .onClick(() => {
            this.controller.close()
            this.confirm("确认内容")   // 触发调用者定义的方法
          }).backgroundColor(0xffffff).fontColor(Color.Red)
      }.margin({ bottom: 10 })
    }.width('100%').padding(10)

  }
}
```

自定义弹框的调用

```ts
import dialogExample from '../components/dialogComponent'

@Entry
@Component
struct Index {
    
  // 弹框控制器
  dialogController:CustomDialogController=new CustomDialogController({
    // builder后面是自定义的弹框
    builder:dialogExample(
      {
        // 可传入弹框参数 ,如在弹框内部定义的方法，可以在出发后，到这里执行
        cancel: this.onCancel,
        confirm: this.onAccept,
      }
    ),
    alignment: DialogAlignment.Default,  // 可设置dialog的对齐方式，设定显示在底部或中间等，默认为底部显示
  })
  onCancel() {
    console.info('自定义的取消按钮触发')
  }
  onAccept(content) {
    console.info('自定义的取消按钮触发',`传回内容是${content}`)
  }
  aboutToAppear(){
    // 打开自定义弹框
    this.dialogController.open()
  }
    
    

  build() {
    Row() {
      
    }
  }
}



```



### Web组件

[Web组件概述-Web-开发 | 华为开发者联盟 (huawei.com)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/web-component-overview-0000001508249461-V2)

ArkUI为我们提供了Web组件来加载网页，借助它我们就相当于在自己的应用程序里嵌入一个浏览器，从而非常轻松地展示各种各样的网页。

```ts
import web_webview from '@ohos.web.webview';

@Entry
@Component
struct WebComponent {
  webviewController: web_webview.WebviewController = new web_webview.WebviewController();

  build() {
    Column() {
      // 点击按钮时，通过  webviewController 修改架加载的网页
      Button('loadUrl')
        .onClick(() => {
          try {
            // 点击按钮时，通过loadUrl，跳转到www.example1.com
            this.webviewController.loadUrl('www.example1.com');
          } catch (error) {
            console.error(`ErrorCode: ${error.code},  Message: ${error.message}`);
          }
        })
      // 组件创建时，加载  https://www.baidu.com/
      Web({ src: 'https://www.baidu.com/', controller: this.webviewController}).zoomAccess(true)
    }.width('100%')
    .height('100%')
  }
}
```





## 第三方库

[DevEco Marketplace (harmonyos.com)](https://repo.harmonyos.com/#/cn/application/atomService?sort=downloads&page=1)

下载第三方库显示 ：ohpm : 无法将“ohpm”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径正确，然后再试一次。

解决：将ohpm的bin目录位置配置到环境变量里去，终端输入  ohpm -v   能看到版本号则可以正常下载了



### 标题栏**[TitleBar](https://gitee.com/smarthane/titlebar)**

## 数据请求

使用网络管理模块的相关功能时，需要请求相应的权限。

| 权限名                           | 说明                                   |
| -------------------------------- | -------------------------------------- |
| ohos.permission.GET_NETWORK_INFO | 获取网络连接信息。                     |
| ohos.permission.SET_NETWORK_INFO | 修改网络连接状态。                     |
| ohos.permission.INTERNET         | 允许程序打开网络套接字，进行网络连接。 |

### 原生数据请求

按照文章如下文章可以简单实现：[鸿蒙 HarmonyOS4.0 Http数据请求封装详解_鸿蒙网络请求封装-CSDN博客](https://blog.csdn.net/qq_68512683/article/details/134724984)

### axios请求

[DevEco Marketplace (harmonyos.com)](https://repo.harmonyos.com/#/cn/application/atomService/@ohos%2Faxios)

ohpm install @ohos/axios

axios.ts (封装axios请求)

```ts
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from '@ohos/axios';
const service=axios.create({
  // 配置域名前缀
  baseURL:"https://abcdefg/zhq",
  headers: {
    'Content-Type': 'application/json',
    "Channel":"B2B"
  },
  method:"post",
})
// 添加请求拦截器
service.interceptors.request.use((config:InternalAxiosRequestConfig) => {
  // 对请求数据做点什么
  return config;
}, (error:AxiosError) => {
  // 对请求错误做些什么
  return Promise.resolve(error);
});
// 添加响应拦截器
service.interceptors.response.use((response:AxiosResponse)=> {
  // 对响应数据做点什么
  return response;
}, (error:AxiosError)=> {
  // 对响应错误做点什么
  return Promise.resolve(error);
});
export default service;
```

对 api 请求接口封装

```ts
import service from "../utils/axios"

export function getList(data) {
  return service({ url: `/abc/list`, method: 'get', params: data })
}
```

 调用

```js
import {getList} from "../api/zph"

getTheZphList(){
    console.log("获取数据")
    getZphList({pageNum:1,pageSize:4}).then(res=>{
      console.log(JSON.stringify(res.data))
      this.list=res.data.rows      // 此处的  res.data 就是接口返回的结果内容。
    }).catch(e=>{
      console.log("e",`${(JSON.stringify(e))}`)
    }).finally(()=>{
      console.log("finally")
    })
  }
```





## 数据持久化

[应用数据持久化-数据管理-开发 | 华为开发者联盟 (huawei.com)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/app-data-persistence-0000001505632753-V2)

### 首选项

首选项为应用提供Key-Value键值型的数据存储能力，支持应用持久化轻量级数据，并对其进行增删改查等。该存储对象中的数据会被缓存在内存中，因此它可以获得更快的存取速度



PreferencesUtil  工具类封装  (里面是异步操作)

```ts
import preferences from '@ohos.data.preferences';

class PreferencesUtil{

  prefMap: Map<string, preferences.Preferences> = new Map()
  //  loadPreference 在 ability 的 onCreate 使用，name是 首选项的名字   (name是可选的，视需求来)
  async loadPreference(context, name: string){
    try { // 加载preferences
      let pref = await preferences.getPreferences(context, name)
      this.prefMap.set(name, pref)
      console.log('testTag', `加载Preferences[${name}]成功`)
    } catch (e) {
      console.log('testTag', `加载Preferences[${name}]失败`, JSON.stringify(e))
    }
  }
 
  async putPreferenceValue(name: string, key: string, value: preferences.ValueType){
    if (!this.prefMap.has(name)) {
      console.log('testTag', `Preferences[${name}]尚未初始化！`)
      return
    }
    try {
      let pref = this.prefMap.get(name)
      // 写入数据
      await pref.put(key, value)
      // 刷盘，持久化数据
      await pref.flush()
      console.log('testTag', `保存Preferences[${name}.${key} = ${value}]成功`)
    } catch (e) {
      console.log('testTag', `保存Preferences[${name}.${key} = ${value}]失败`, JSON.stringify(e))
    }
  }
  
  async getPreferenceValue(name: string, key: string, defaultValue: preferences.ValueType){
    if (!this.prefMap.has(name)) {
      console.log('testTag', `Preferences[${name}]尚未初始化！`)
      return
    }
    try {
      let pref = this.prefMap.get(name)
      // 读数据
      let value = await pref.get(key, defaultValue)
      console.log('testTag', `读取Preferences[${name}.${key} = ${value}]成功`)
      return value
    } catch (e) {
      console.log('testTag', `读取Preferences[${name}.${key} ]失败`, JSON.stringify(e))
    }
  }
}

const preferencesUtil = new PreferencesUtil()

export default preferencesUtil as PreferencesUtil
```

初始化：在 EntryAbility 的  onCreate()  获取首选项实例

```ts
import PreferenceUtil from "../utils/preference"

async onCreate(want, launchParam) {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');
    // 加载 preference , 名字是 “MyPreference”  要是唯一的
    await PreferenceUtil.loadPreference(this.context,"MyPreference")
  }
```

使用：

```ts
import PreferenceUtil from "../utils/preference"

@Entry
@Component
struct Index {
    // 设置preferenceData初始值为1
  @State preferenceData:string="1"
  async aboutToAppear(){
      // 页面加载时，获取名字是MyPreference，键是 keyName 的值，如果没有，则值初始化为 11   （异步操作）
    this.preferenceData=await PreferenceUtil.getPreferenceValue("MyPreference","keyName","11") as string
  }
  build() {
      Row(){
           Text(this.preferenceData).onClick(()=>{
            this.preferenceData=this.preferenceData+'1'
               // 更改名字是MyPreference，键是 keyName 的值。
            PreferenceUtil.putPreferenceValue("MyPreference","keyName",this.preferenceData)
          })
      }
  }

}
```



### 关系型数据库（SQLite，本地存储）

关系型数据库是在SQLite基础上实现的**本地数据操作机制**，提供给用户无需编写原生SQL语句就能进行数据增删改查的方法，同时也支持原生SQL语句操作。

https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/js-apis-data-relationalstore-0000001493744128-V2

[【鸿蒙HarmonyOS开发笔记】应用数据持久化之通过关系型数据库实现数据持久化_鸿蒙开发 previewer 下 持久化关系数据库-CSDN博客](https://blog.csdn.net/qq_53270554/article/details/136874974)



#### 创建一个操作的表结构类

对应的任务的字段

```ts
// 任务类
export default  class Tasks {
  id: number
  //任务名称
  name: String
  //任务状态：是否勾选
  checked: boolean

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
    this.checked = false
  }
}
```

#### 操作关系型数据库的一个封装

 （对 TASKS 表创建和任务的增删改查方法的封装）， 初始化要在 ability 的 onCreate()  方法触发

```ts
import TasksModel from "../model/tasksModel"

  async onCreate(want, launchParam) {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');
    // 初始化任务表
    TasksModel.initDB(this.context)
  }
```

```ts
import relationalStore from '@ohos.data.relationalStore'; // 导入模块
import Tasks from "../model/tasks"   // 导入操作模型的类

class TasksModel {
  private rdbStore:relationalStore.RdbStore
  private tableName:string="TASKS"      // 表的名称（后续操作需要用到）
  // 建库建表（在ability中触发初始化）
  initDB(context) {
    const STORE_CONFIG = {
      name: 'MyTask.db', // 数据库文件名
      securityLevel: relationalStore.SecurityLevel.S1 // 数据库安全级别
    };
    // 建表语句
    const SQL_CREATE_TABLE = 'CREATE TABLE IF NOT EXISTS TASKS (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, CHECKED bit)'; // 建表Sql语句

    relationalStore.getRdbStore(context, STORE_CONFIG, (err, rdbStore) => {
      if (err) {
        console.error(`Failed to get RdbStore. Code:${err.code}, message:${err.message}`);
        return;
      }
      console.info(`Succeeded in getting RdbStore.`);
      rdbStore.executeSql(SQL_CREATE_TABLE);  // 执行sql,创建数据表
      // 保存 rdbStore,后续可以操作增删改查
      this.rdbStore=rdbStore

    });
  }
  // 获取列表   根据谓词指定的查询条件查找数据。调用query()方法查找数据，返回一个ResultSet结果集。
  async getList(){
    // 构建查询条件
    let predicates = new relationalStore.RdbPredicates(this.tableName);
     let result = await this.rdbStore.query(predicates, ['ID', 'NAME', 'CHECKED'])
    // 解析查询结果
    let tasks:Tasks[]=[]
    // 遍历封装数据
    while (!result.isAtLastRow){
      result.goToNextRow()  // 指针移动下一行
      // 获取数据
      let id=result.getLong(result.getColumnIndex('ID'))
      let name=result.getString(result.getColumnIndex('NAME'))
      let checked=result.getLong(result.getColumnIndex('CHECKED'))
      // 封装到数组
      tasks.push({id, name, checked: !!checked})

    }
    console.log("查到数据",JSON.stringify(tasks))
    return tasks

  }
  // 新增
  add(name:string){
    return this.rdbStore.insert(this.tableName,{name,checked:false})
  }
  // 修改（通过匹配id来修改）
  update(id:number,checked:boolean){
    // 要更新的数据
    let data={checked}
    // 构建查询条件
    let predicates = new relationalStore.RdbPredicates(this.tableName); // 创建表的predicates
    predicates.equalTo('ID', id); // 匹配表'TASKS'中'ID'为'id'的字段
    //更新数据
    return this.rdbStore.update(data,predicates)
  }
  // 删除（根据id匹配删除）
  del(id:number){
    // 构建查询条件
    let predicates = new relationalStore.RdbPredicates(this.tableName); // 创建表的predicates
    predicates.equalTo('ID', id); // 匹配表'EMPLOYEE'中'NAME'为'Lisa'的字段
    //更新数据
    return this.rdbStore.delete(predicates)
  }
}

const taskModel = new TasksModel()

export default taskModel as TasksModel
```

#### 页面通过封装的类实现增删改查操作

```ts
import Tasks from '../model/tasks'    // 操作的表结构类
import TaskModel from '../model/TaskModel'    // 增删改查的封装工具类

@State taskList: Tasks[] = []

// 获取列表
TasksModel.getList().then(tasks => {
      this.taskList = tasks
    })

// 新增
  addTask(name: string) {
    // 新增任务 (只需要传任务名，其余的值已经在 add() 方法配了默认值)
    TasksModel.add(name).then(id => {
      // console.log("id",id)   新增回调返回的 id
      TasksModel.getList().then(tasks => {
        this.taskList = tasks
      })
    }).catch(e => {
      console.log(e)
    })
  }

// 删除（ 只需要传入要删除的id即可 ）
 TasksModel.del(id).then(res => {
         TasksModel.getList().then(tasks => {
              this.taskList = tasks
           })
        }).catch(e => {
          console.log(e)
        })
// 修改 （传入要修改的id，和要修改的内容部分，其他不变的内容不需要传。 根据id去匹配修改项）
TasksModel.update(id, val).then(res => {
                      TasksModel.getList().then(tasks => {
                        console.log(JSON.stringify(tasks))
                        this.taskList = tasks
                        this.taskChange()
                      })
                    })
```



## Notification模块（通知）

使用：[@ohos.notificationManager (NotificationManager模块)-公共事件与通知-ArkTS接口参考-ArkTS API参考 | 华为开发者联盟 (huawei.com)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/js-apis-notificationmanager-0000001427585056-V2)



通知的相关配置在下面的 NotificationRequest 里面查看：

NotificationRequest：描述通知的请求：[NotificationRequest-notification-公共事件与通知-ArkTS接口参考-ArkTS API参考 | 华为开发者联盟 (huawei.com)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/js-apis-inner-notification-notificationrequest-0000001544464105-V2)



ContentType: [@ohos.notificationManager (NotificationManager模块)-公共事件与通知-ArkTS接口参考-ArkTS API参考 | 华为开发者联盟 (huawei.com)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/js-apis-notificationmanager-0000001427585056-V2#ZH-CN_TOPIC_0000001574248861__contenttype)

NotificationContent:[NotificationContent-notification-公共事件与通知-ArkTS接口参考-ArkTS API参考 | 华为开发者联盟 (huawei.com)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/js-apis-inner-notification-notificationcontent-0000001493744108-V2)



### 消息通知（带图片）

```ts
import image from '@ohos.multimedia.image'
import notificationManage from '@ohos.notificationManager'

@Entry
@Component
struct Notification {
  @State message: string = 'Hello World'
  // 全局任务 id （不同的通知的id应该是唯一的）
  idx: number = 100
  // pixel图象（有图片的通知的展示图片内容）
  pixel: PixelMap

  async getPixel(){    //创建PixelMap的图片
    // 获取资源管理器
    let rm = getContext(this).resourceManager;
    // 读取图片
    let file = await rm.getMediaContent($r('app.media.send'))
    // 创建PixelMap
    image.createImageSource(file.buffer).createPixelMap()
      .then(value => this.pixel = value)
      .catch(reason => console.log('testTag', '加载图片异常', JSON.stringify(reason)))

  }
  aboutToAppear(){
    this.getPixel()
  }
  //publish回调
   publishCallback(err) {
    if (err) {
      console.info("publish failed " + JSON.stringify(err));
    } else {
      console.info("publish success");
    }
  }
  publishNormalNotification(){   // 基本类型通知内容。
    //通知Request对象
    let notificationRequest : notificationManage.NotificationRequest= {
      id: this.idx++,
      content: {
        contentType: notificationManage.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,
        normal: {
          title: "通知标题",
          text: "通知内容。",
          additionalText: "通知附加内容，是对通知内容的补充。"
        }
      }
    };
    notificationManage.publish(notificationRequest, this.publishCallback);

  }
  publishLongTextNotification(){   //长文本类型通知内容。
    //通知Request对象
    let notificationRequest : notificationManage.NotificationRequest= {
      id: this.idx++,
      content: {
        contentType: notificationManage.ContentType.NOTIFICATION_CONTENT_LONG_TEXT,
        longText: {
          title: "通知标题",
          text: "通知内容",
          additionalText: "通知附加内容，是对通知内容的补充。",
          longText: '通知中的长文本，通知中的长文本,通知中的长文本，通知中的长文本，通知中的长文本',
          briefText: '通知概要和总结',
          expandedTitle: '通知展开时的标题'
        }
      }
    };
    notificationManage.publish(notificationRequest, this.publishCallback);

  }

  publishMultiLineNotification(){   //多行文本类型通知。
    //通知Request对象
    let notificationRequest : notificationManage.NotificationRequest= {
      id: this.idx++,
      content: {
        contentType: notificationManage.ContentType. NOTIFICATION_CONTENT_MULTILINE,
        multiLine: {
          title: '通知标题',
          text: '通知内容详情',
          additionalText: '通知附加内容',
          briefText: '通知概要和总结',
          longTitle: '展开时的标题，我很宽，我很宽，我很宽',
          lines: [
            '第一行',
            '第二行',
            '第三行',
            '第四行',
          ]
        }
      }
    };
    notificationManage.publish(notificationRequest, this.publishCallback);

  }

  publishPictureNotification(){   //长文本类型通知内容。
    //通知Request对象
    let notificationRequest : notificationManage.NotificationRequest= {
      id: this.idx++,
      content: {
        contentType: notificationManage.ContentType.NOTIFICATION_CONTENT_PICTURE,
        picture: {
          title: '通知标题' + this.idx,
          text: '通知内容详情',
          additionalText: '通知附加内容',
          briefText: '通知概要和总结',
          expandedTitle: '展开后标题' + this.idx,
          picture: this.pixel       //  图片需要是 image.PixelMap  类型的，而不是地址。
        }
      }
    };
    notificationManage.publish(notificationRequest, this.publishCallback);

  }

  build() {
    Row() {
      Column() {
        Button(){
          Text("通知 normal").fontSize(20).fontWeight(FontWeight.Bold)
        }.width("90%").height(50).backgroundColor("#73D2FF").padding(5).margin(5)
        .onClick(()=>{
          this.publishNormalNotification()
        })
        Button(){
          Text("通知长文本 longText").fontSize(20).fontWeight(FontWeight.Bold)
        }.width("90%").height(50).backgroundColor("#73D2FF").padding(5).margin(5)
        .onClick(()=>{
          this.publishLongTextNotification()
        })
        Button(){
          Text("通知多行 MultiLine").fontSize(20).fontWeight(FontWeight.Bold)
        }.width("90%").height(50).backgroundColor("#73D2FF").padding(5).margin(5)
        .onClick(()=>{
          this.publishMultiLineNotification()
        })
        Button(){
          Text("通知附有图片 Picture").fontSize(20).fontWeight(FontWeight.Bold)
        }.width("90%").height(50).backgroundColor("#73D2FF").padding(5).margin(5)
        .onClick(()=>{
          this.publishPictureNotification()
        })
      }
      .width('100%')
    }
    .height('100%')
    .alignItems(VerticalAlign.Top)
  }

}
```

### 进度条通知（下载进度等）

参考：[entry/src/main/ets/views/notification/DownloadCard.ets · huyi612/harmonyos-lessons - 码云 - 开源中国 (gitee.com)](https://gitee.com/huyi612/harmonyos-lessons/blob/master/entry/src/main/ets/views/notification/DownloadCard.ets)

注意：上述参考案例组件下载后 要修改wantInfo 里面的 bundleName 为自己项目的报名，否则点击时会闪退。



[@ohos.app.ability.wantAgent (WantAgent模块)-通用能力的接口(推荐)-Ability框架-ArkTS接口参考-ArkTS API参考 | 华为开发者联盟 (huawei.com)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/js-apis-app-ability-wantagent-0000001493424324-V2#ZH-CN_TOPIC_0000001573928753__导入模块)

WantAgent模块提供了触发、取消、比较WantAgent实例和获取bundle名称的能力，包括创建WantAgent实例、获取实例的用户ID、获取want信息等。



## 后台代理提醒

[代理提醒-后台任务（Background Task）管理-开发 | 华为开发者联盟 (huawei.com)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/agent-powered-reminder-0000001663585481-V2)

后台代理提醒业务类型：

- 倒计时类：基于倒计时的提醒功能，适用于短时的计时提醒业务。
- 日历类：基于日历的提醒功能，适用于较长时间的提醒业务。
- 闹钟类：基于时钟的提醒功能，适用于指定时刻的提醒业务。

后台代理提醒服务通过[reminderAgentManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/js-apis-reminderagentmanager-0000001477981405-V3?catalogVersion=V3)模块提供**提醒定义、创建提醒、取消提醒**等能力。

使用步骤：

添加后台代理提醒使用权限。

```
"requestPermissions": [
    {
     "name": "ohos.permission.PUBLISH_AGENT_REMINDER"
    }
  ]
```

