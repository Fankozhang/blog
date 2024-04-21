import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as d,a as e,b as n,e as r,f as a,r as l}from"./app.bc2d2ee5.js";const o="/blog/image-20231118025204427.png",c={},u=e("h1",{id:"harmony",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#harmony","aria-hidden":"true"},"#"),n(" Harmony")],-1),v={href:"https://developer.huawei.com/consumer/cn/training/harmonyOS/l44yheg8?ha_source=HM-yetou&ha_sourceId=89000240",target:"_blank",rel:"noopener noreferrer"},m={href:"https://mp.weixin.qq.com/s/LFvY152vujufw0UL3Oqp7A",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.bilibili.com/video/BV1kr421W7rV?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},h=e("h2",{id:"deveco-studio-下载",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#deveco-studio-下载","aria-hidden":"true"},"#"),n(" DevEco Studio 下载")],-1),p={href:"https://developer.huawei.com/consumer/cn/deveco-studio/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V3/deveco_overview-0000001053582387-V3?catalogVersion=V3",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"工程目录结构",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#工程目录结构","aria-hidden":"true"},"#"),n(" 工程目录结构")],-1),x={href:"https://blog.csdn.net/weixin_40763897/article/details/135731357",target:"_blank",rel:"noopener noreferrer"},f=a(`<h2 id="修改应用名称-中文模式下" tabindex="-1"><a class="header-anchor" href="#修改应用名称-中文模式下" aria-hidden="true">#</a> 修改应用名称（中文模式下）</h2><p>entry/src/main/resources/zh_CN</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
      &quot;name&quot;: &quot;EntryAbility_label&quot;,
      &quot;value&quot;: &quot;我的newDemo&quot;
 }
 
 value的值就是应用名称的值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用程序入口-uiability" tabindex="-1"><a class="header-anchor" href="#应用程序入口-uiability" aria-hidden="true">#</a> 应用程序入口 UIAbility</h2><p>UIAbility是一种包含用户界面的应用组件，主要用于和用户进行交互。UIAbility也是系统调度的单元，为应用提供窗口在其中绘制界面。</p><p>每一个UIAbility实例，都对应于一个最近任务列表中的任务。</p><p>一个应用可以有一个UIAbility，也可以有多个UIAbility</p><p>UIAbility的生命周期包括Create、Foreground、Background、Destroy四个状态，WindowStageCreate和WindowStageDestroy为窗口管理器（WindowStage）在UIAbility中管理UI界面功能的两个生命周期回调，从而实现UIAbility与窗口之间的弱耦合。</p>`,8),y={href:"https://developer.huawei.com/consumer/cn/training/course/slightMooc/C101667310940295021",target:"_blank",rel:"noopener noreferrer"},k=a('<h3 id="entryability" tabindex="-1"><a class="header-anchor" href="#entryability" aria-hidden="true">#</a> EntryAbility</h3><p>src/main/ets/entryability/EntryAbility.ts</p><p>里面包含了 UiAbility 的生命周期</p><h2 id="页面操作" tabindex="-1"><a class="header-anchor" href="#页面操作" aria-hidden="true">#</a> 页面操作</h2><h3 id="路由跳转的page页面配置位置" tabindex="-1"><a class="header-anchor" href="#路由跳转的page页面配置位置" aria-hidden="true">#</a> 路由跳转的page页面配置位置</h3><p>src/main/resources/base/profile/main_pages.json 文件保存的是页面page的路径配置信息，所有需要进行路由跳转的page页面都要在这里进行配置。</p><h3 id="新建页面" tabindex="-1"><a class="header-anchor" href="#新建页面" aria-hidden="true">#</a> 新建页面</h3><p><img src="'+o+`" alt="" loading="lazy"></p><p>使用此方法新建的页面，会自动在 src/main/resources/base/profile/main_pages.json 生成页面配置</p><h3 id="页面跳转-传参-返回传参" tabindex="-1"><a class="header-anchor" href="#页面跳转-传参-返回传参" aria-hidden="true">#</a> 页面跳转（传参，返回传参）</h3><p>index.ets</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import router from &#39;@ohos.router&#39;;

 Button(&quot;按钮&quot;).onClick(()=&gt;{
          router.pushUrl({
            //  跳转到的页面地址, Next,ets
            url:&#39;pages/Next&#39;,
            //  传递参数
            params: {
              src:&#39;传参了&#39;,
            }
          })
        })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Next.ets （接收index跳转传递过来的参数）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import router from &#39;@ohos.router&#39;;

// 接收传递来的参数
@State src: string = router.getParams()?.[&#39;src&#39;]

// 渲染数据到页面上
 Text(this.src)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
          
Button(&quot;返回&quot;).onClick(()=&gt;{

          //  返回上一个页面
          router.back()
          
          //  返回到指定页面。
          router.back({ url: &#39;pages/Index&#39; });
          
          // 如调用 router.clear() 方法清空了页面栈中所有历史页面，仅保留当前页面，此时则无法通过调用router.back()方法返回到上一个页面。
        
         router.back({
              url: &#39;pages/Index&#39;,
              params: {
                src: &#39;Next页面传来的数据&#39;,
              }
            })
        
        })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.ets 从 Next.ets 返回时传参的获取</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import router from &#39;@ohos.router&#39;;

@State src: string = &#39;&#39;;
  onPageShow() {
    this.src = (router.getParams() as Record&lt;string, string&gt;)[&#39;src&#39;];
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用router.back()方法之前，可以先调用router.enableBackPageAlert()方法开启页面返回询问对话框功能。</p><p>说明</p><ul><li>router.enableBackPageAlert()方法开启页面返回询问对话框功能，只针对当前页面生效。例如在调用router.pushUrl()或者router.replaceUrl()方法，跳转后的页面均为新建页面，因此在页面返回之前均需要先调用router.enableBackPageAlert()方法之后，页面返回询问对话框功能才会生效。</li><li>如需关闭页面返回询问对话框功能，可以通过调用router.disableAlertBeforeBackPage()方法关闭该功能即可。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>router.enableBackPageAlert({
  message: &#39;Message Info&#39;
});

router.back();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基础组件" tabindex="-1"><a class="header-anchor" href="#基础组件" aria-hidden="true">#</a> 基础组件</h2>`,21),A={href:"https://developer.harmonyos.com/cn/docs/documentation/doc-references-V3/ts-container-alphabet-indexer-0000001427744828-V3",target:"_blank",rel:"noopener noreferrer"};function S(I,q){const i=l("ExternalLinkIcon");return t(),d("div",null,[u,e("p",null,[n("官网："),e("a",v,[n("HarmonyOS鸿蒙专区-开源鸿蒙IDE低代码-云开发-华为开发者学堂 (huawei.com)"),r(i)])]),e("p",null,[e("a",m,[n("前端卷鸿蒙？推荐 12 个 yyds 的开源鸿蒙实战项目 (qq.com)"),r(i)])]),e("p",null,[n("视频教程："),e("a",b,[n("启动项目到模拟器_哔哩哔哩_bilibili"),r(i)])]),h,e("p",null,[n("网址："),e("a",p,[n("HUAWEI DevEco Studio和SDK下载和升级 | 华为开发者联盟"),r(i)])]),e("p",null,[n("安装教程："),e("a",g,[n("工具简介-DevEco Studio使用指南-工具-HarmonyOS应用开发"),r(i)])]),_,e("p",null,[e("a",x,[n("HarmonyOS应用开发的工程目录结构_鸿蒙目录结构-CSDN博客"),r(i)])]),f,e("p",null,[n("具体使用看 "),e("a",y,[n("应用程序框架-华为开发者学堂 (huawei.com)"),r(i)])]),k,e("p",null,[e("a",A,[n("组件参考（基于ArkTS的声明式开发范式）-ArkTS API参考-HarmonyOS应用开发"),r(i)])])])}const B=s(c,[["render",S],["__file","Harmony.html.vue"]]);export{B as default};
