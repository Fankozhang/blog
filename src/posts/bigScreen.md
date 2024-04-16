---

date: 2022-01-09
category:
  - bigScreen
tag:
  - echart

---

# bigScreen
## echarts

对于echarts图表的配置可以参考 [Echarts数据可视化_腾讯数据架构师的博客-CSDN博客](https://blog.csdn.net/luanpeng825485697/category_11735465.html) 

快速搞定可视化大屏:https://juejin.cn/post/7236974705025220645?searchId=20240102162705DC1D6A1FA16220EC1E87#heading-10

大屏解决方案：https://github.com/Alfred-Skyblue/v-scale-screen

### echarts设置主题

 [主题编辑器 - Apache ECharts](https://echarts.apache.org/zh/theme-builder.html) 

在主题中复制 js 代码并保存到 js 文件中，引入到需要的页面，如保存到  theme.js（**记住主题名称，如‘vintage’**）（‘dark’主题是内置的，无需引入）

```
import "../assets/theme"    // 引入js文件
```

使用时，获取dom时填入第二个参数（**主题名称，切记不是js文件名称**）

```
var myChart2 = echarts.init(this.$refs.map2,'vintage')
```

随后绘制的图表就会用上设置的主题样式了。

### vue使用echarts渲染地图数据

```
npm install echarts --save
```

在使用echarts的页面引入

```
import * as echarts from 'echarts';
```

引入地图的 json 数据     [DataV.GeoAtlas地理小工具系列 (aliyun.com)](https://datav.aliyun.com/portal/school/atlas/area_selector#&lat=31.84139930209406&lng=117.33123779296875&zoom=9) 

```
import JSON from '../assets/jinan.json'
```

methods里编写获取dom元素容器，渲染数据的方法，并在mounted调用

```
<div ref="map" id="main" style="width:500x;height:500px">

mounted(){
    this.drawMap()
  },
  methods:{
    drawMap(){
        var myChart = echarts.init(this.$refs.map) // 拿到一个实例
        // var myChart = echarts.init(document.getElementById("main")) //也可以用id获取实例
          echarts.registerMap('济南市', JSON, {}) //引入地图文件
          var option = {
            series: [
              {
                type: 'map',
                mapType: '济南市'//地图名称，要和引入地图文件的第一个参数名相同

              }]
          }
          myChart.setOption(option)
          
           // 地图点击每一块区域事件（根据点击事件参数，进行逻辑处理）
          myChart.on('click', function (params) {
            console.log(params)
            //逻辑控制
          })
          
           // resize方法监听图表容器的大小并改变图表大小
           //window.onresize = function() {
           // myChart.resize();
           // }
           //  在vue项目中使用时推荐下面的写法，根据屏幕大小缩放（可以把echarts.init的示例存到data中，使用this.mymyChart进行操作）
          // resize方法监听图表容器的大小并改变图表大小
             window.addEventListener('resize', () => {
                myChart.resize()
            })
          
      }

  }
```

对于配置series绘制地图，还可以通过配置geo来设置地图，如下：

```
var option={
	geo:{
      // type:"map",
      map:"china",//使用 registerMap 注册的地图名称
      // 默认设置完地图是固定死的不能拖动
      roam:true,//否开启鼠标缩放和平移漫游。默认不开启。
      zoom :1,//当前视角的缩放比例。越大比例越大
      center:[108.956239,34.268309],
        label:{//地图上显示文字提示信息
        show:true,
        color:"#ff6600",
        fontSize:10//字体大小
        },
        itemStyle:{//地图区域的多边形 图形样式。
          areaColor:"#f8bf1c"//地图区域的颜色。
        }
     },
}
```

## echarts常用配置

### title用于设置图表标题

```javascript
title:{
    show:true,          //false（控制标题的显示与隐藏）
    
    text:"图表标题",      //主标题文本
    link:'',         // 主标题文本超链接,默认值true
    target: null,    // 指定窗口打开主标题超链接，支持'self' | 'blank'，不指定等同为'blank'新窗口
    textStyle:{
        color:'#ccc',     //'red'，字体颜色
        fontStyle:'normal',     //'italic'(倾斜) | 'oblique'(倾斜体) ，字体风格
        fontWeight:'normal',  //'bold'(粗体) | 'bolder'(粗体) | 'lighter'(正常粗细) ，字体粗细
        fontFamily:'sans-serif',     //'sans-serif' | 'serif' | 'monospace' | 'Arial' |                              //'Courier New' 
        // 'Microsoft YaHei'(微软雅黑) ，文字字体
        fontSize:18,     //字体大小
        lineHeight:18,    //字体行高
    },
    
    subtext:"副标题",       //副标题文本
    sublink: '',      // 副标题文本超链接
    subtarget: null, // 指定窗口打开副标题超链接，支持'self' | 'blank'，不指定等同为'blank'新窗口
    subtextStyle:{
        color:#ccc,        //字体颜色
        fontStyle:'normal',       //字体风格
        fontWeight:'normal',     //字体粗细
        fontFamily:'sans-serif',     //文字字体
        fontSize:18,     //字体大小
        lineHeight:18,    //字体行高
        align:'center',       //'left' | 'right' ，文字水平对齐方式
        verticalAlign:'middle',     //'top' | 'bottom' ，文字垂直对齐方式
    }
    
    textAlign:'auto',       //整体（包括 text 和 subtext）的水平对齐
    textVerticalAlign:'auto',       //整体（包括 text 和 subtext）的垂直对齐
    padding:0,       //[5,10] | [ 5,6, 7, 8] ,标题内边距
    left:'auto',     //'5' | '5%'，title 组件离容器左侧的距离
    right:'auto',    //'title 组件离容器右侧的距离
    top:'auto',      //title 组件离容器上侧的距离
    bottom:'auto',   //title 组件离容器下侧的距离
    x:'center',      // 水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' |                                 //  {number}（x坐标，单位px）
    y: 'top',       // 垂直安放位置，默认为top，可选为：'top' | 'bottom' | 'center' |                                 // {number}（y坐标，单位px）
    
     backgroundColor: 'rgba(0,0,0,0)', //标题背景颜色，默认'rgba(0,0,0,0)'透明
     borderColor: '#ccc', // 标题边框颜色,默认'#ccc'
     borderWidth: 0, // 标题边框线宽，单位px，默认为0（无边框）
     padding: 5, // 标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
     itemGap: 10, // 主副标题纵向间隔，单位px，默认为10
     
     shadowBlur: 10,      //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX,                                     //shadowOffsetY一起设置图形的阴影效果。
    shadowColor: "black",
    shadowOffsetX: 0,
    shadowOffsetY: 0,
}
```

 [echarts使用之title自定义__echarts设置自定义title](https://blog.csdn.net/wulenglinglz/article/details/121124107) 

标题居中：

```
title: {
          show: true, // false（控制标题的显示与隐藏）

          text: '性别分类',
          textStyle: {
            color: '#000000', // 'red'，字体颜色
            fontStyle: 'normal', // 'italic'(倾斜) | 'oblique'(倾斜体) ，字体风格
            fontWeight: 'normal', // 'bold'(粗体) | 'bolder'(粗体) | 'lighter'(正常粗细) ，字体粗细
            fontFamily: 'sans-serif', // 'sans-serif' | 'serif' | 'monospace' | 'Arial' |                              //'Courier New'
            // 'Microsoft YaHei'(微软雅黑) ，文字字体
            fontSize: 18, // 字体大小
            lineHeight: 18 // 字体行高
          },
          x: 'center',
          y: 'top',
          textAlign: 'left',
          top: '10%'
        },
```



### legend  用于设置图例

```javascript
legend: {
    show: true,    // 是否显示图例
    type: 'category',    // 'plain'：普通图例。缺省就是普通图例; 'scroll'：可滚动翻页的图例。当图例数量较多时可以使用
    z: 2,     // 组件的所有图形的z值。控制图形的前后顺序。z值小的图形会被z值大的图形覆盖。
    top: 'auto'     // 距离容器侧边距离
    bottom: 'auto'     // 距离容器侧边距离
    left: 'auto',     // 距离容器侧边距离
    right: 'auto',     // 距离容器侧边距离
    width: 'auto',      // 图例组件的宽度。默认自适应
    height: 'auto',      // 图例组件的高度。默认自适应
    orient: 'horizontal',      // 图例列表的布局朝向; horizontal; vertical
    align: 'auto',     // 图例标记和文本的对齐。默认自动
    padding: 5,     // 图例内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
    itemGap: 10,     // 图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔
    itemWidth: 25,     // 图例标记的图形宽度
    itemHeight: 14,      // 图例标记的图形高度// 使用字符串模板，模板变量为图例名称 {name}
    formatter: function (name) {     // 使用回调函数
        //  return 'Legend ' + name;
        return "{title|" + name + "}\n{value|" + (objData[name].value) + "人}"
    },
    inactiveColor: '#ccc',      // 图例关闭时的颜色
    textStyle: {
        color: '#FFF',     // 文字的颜色
        fontStyle: 'normal',    // 文字字体的风格（'normal'，无样式；'italic'，斜体；'oblique'，倾斜字体） 
        fontWeight: 'normal',    // 文字字体的粗细（'normal'，无样式；'bold'，加粗；'bolder'，加粗的基础上再加粗；'lighter'，变细；数字定义粗细也可以，取值范围100至700）
        fontSize: '20',    // 文字字体大小
        align: 'left',     // 文字水平对齐方式，默认自动（'left'，'center'，'right'）
        verticalAlign: 'left',    // 文字垂直对齐方式，默认自动（'top'，'middle'，'bottom'
        lineHeight: '50',    // 行高 ）
        backgroundColor: 'red',    // 文字块背景色，例：'#123234', 'red', 'rgba(0,23,11,0.3)'
    	
        // formatter中有title和value属性，可以用 rich 对这两个属性再分别设置样式
         rich: {
                title: {
                    fontSize: 10,
                    lineHeight: 10,
                    color: "rgba(0,0,0,.45)"
                },
                value: {
                    fontSize: 14,
                    lineHeight: 18,
                    color: "rgba(0,0,0,.85)"
                }
            }
    },
    data: [{
        name: '系列1',
        icon: 'circle',    // 强制设置图形为圆。
        textStyle: {
            color: '#FFF',     // 文字的颜色
            fontStyle: 'normal',    // 文字字体的风格（'normal'，无样式；'italic'，斜体；'oblique'，倾斜字体） 
            fontWeight: 'normal',    // 文字字体的粗细（'normal'，无样式；'bold'，加粗；'bolder'，加粗的基础上再加粗；'lighter'，变细；数字定义粗细也可以，取值范围100至700）
            fontSize: '20',    // 文字字体大小
            align: 'left',     // 文字水平对齐方式，默认自动（'left'，'center'，'right'）
            verticalAlign: 'left',    // 文字垂直对齐方式，默认自动（'top'，'middle'，'bottom'
            lineHeight: '50',    // 行高 ）
            backgroundColor: 'red',    // 文字块背景色，例：'#123234', 'red', 'rgba(0,23,11,0.3)'
        },
        backgroundColor: 'transparent',     // 图例背景色，默认透明
    }],
}
```



### tooltip 用于鼠标放在元素上的提示框信息展示

trigger  是设置触发的条件

formatter用于置于元素上显示的数据的格式化

```javascript

tooltip: {
    show: true,    // 是否显示提示框组件
    trigger: 'axis',    // 触发类型（'item'，数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用；'axis'，坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用；'none'，不触发。）
    axisPointer: {
        type: 'cross',    // 指示器类型（'line' 直线指示器；'shadow' 阴影指示器；'none' 无指示器；'cross' 十字准星指示器。）
        snap: false,    // 坐标轴指示器是否自动吸附到点上。默认自动判断。
        label: {
            margin: 10,    // label 距离轴的距离
            color: '#FFF',     // 文字的颜色
            fontStyle: 'normal',    // 文字字体的风格（'normal'，无样式；'italic'，斜体；'oblique'，倾斜字体） 
            fontWeight: 'normal',    // 文字字体的粗细（'normal'，无样式；'bold'，加粗；'bolder'，加粗的基础上再加粗；'lighter'，变细；数字定义粗细也可以，取值范围100至700）
            fontSize: '20',    // 文字字体大小
            lineHeight: '50',    // 行高 
            padding = [5, 7, 5, 7],    // 内边距，单位px 
            backgroundColor = 'auto',    // 文本标签的背景颜色
        },
        animation: true,     // 是否开启动画
        animationDuration: 1000,     // 初始动画时长
        animationDurationUpdate: 200,    // 数据更新动画的时长
    }
    showContent: true,     // 是否显示提示框浮层，默认显示
    alwaysShowContent: true,     // 是否永远显示提示框内容，默认情况下在移出可触发提示框区域后一定时间后隐藏
    triggerOn: 'mousemove|click',    // 提示框触发的条件（'mousemove'，鼠标移动时触发；'click'，鼠标点击时触发；'mousemove|click'，同时鼠标移动和点击时触发；'none'，不在 'mousemove' 或 'click' 时触发）
    confine: true,    // 是否将 tooltip 框限制在图表的区域内
    backgroundColor: 'rgba(50,50,50,0.7)',    // 提示框浮层的背景颜色
    padding: 5,    // 提示框浮层内边距，单位px
    textStyle: {
        color: '#FFF',     // 文字的颜色
        fontStyle: 'normal',    // 文字字体的风格（'normal'，无样式；'italic'，斜体；'oblique'，倾斜字体） 
        fontWeight: 'normal',    // 文字字体的粗细（'normal'，无样式；'bold'，加粗；'bolder'，加粗的基础上再加粗；'lighter'，变细；数字定义粗细也可以，取值范围100至700）
        fontSize: '20',    // 文字字体大小
        lineHeight: '50',    // 行高 
    },
    formatter: function (params) {
        var result = ''
        var dotHtml = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:30px;height:30px;background-color:#F1E67F"></span>'    // 定义第一个数据前的圆点颜色
        var dotHtml2 = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:30px;height:30px;background-color:#2BA8F1"></span>'    // 定义第二个数据前的圆点颜色
        result += params[0].axisValue + "</br>" + dotHtml + ' 数据名称 ' + params[0].data + "</br>" + dotHtml2 + ' 数据名称 ' + params[1].data;
        return result
    }
}
    
```

### grid配置项：图表离容器的距离

show:是否显示直角坐标系网格-----------值:true?false
left:图表离容器左侧的距离-----------------值:number?百分比
top:图表离容器顶部的距离-----------------值:number?百分比
right:图表离容器右侧的距离---------------值:number?百分比
bottom:图表离容器底部的距离------------值:number?百分比
backgroundColor:网格背景色-------------值:rgba或#000000
borderColor:网格的边框颜色--------------值:rgba或#000000
borderWidth:网格的边框线宽-------------值:number
**备注:背景色-边框-线宽生效前提:设置了show:true，边距不受show影响**

```javascript
grid: {
    show:true,
    left: "5%",
    top: "5%",
    right: "5%",
    bottom: "5%",
    backgroundColor: "rgba(224, 17, 17, 1)",
    borderColor: "rgba(96, 67, 67, 1)",
    // 是否显示刻度标签 如果是true 就显示 否则反之
    containLabel: true
},
// 或者用x，y
grid: {
        x: '10%',
        x2: '50%',
        y: '15%',
        y2: '15%'
    },
```

###  toolbox：工具按钮 

```javascript
toolbox:{  //工具
    feature:{  
        saveAsImage:{},  //导出图片
        dataView:{},  //数据视图
        restore:{},  //重置
        dataZoom:{},  //区域缩放
        magicType:{  //切换图表类型
            type:['bar','line']  //line:折线图
        }
    }
},
```



### series里 (类型，位置，数据)  

- name   用于设置系列图标的名称
- type   用于设置图表的类型（饼图，柱状图。。。。。。）
- radius         `Array.<number|string>`：数组的第一项是饼图内半径，第二项是外半径 
- center  用于设置 图 的位置
- data  用于设置展示的数据，一般是数组。
- label   用于设置图表中 引导线末端的文字的样式
- labelLine  用于设置 引导线  的样式

```javascript
         series: [
            {
              name:'pies'
              type: "pie",
              center: ["30%", "50%"],
              radius: ["50%"],
              data: this.workData.slice(0,10),
              labelLine: {
                //  连接到图形的线成度
                length:10,
                //  连接到文字的线长度
                length2:8,
                //  控制 引导线的显示于隐藏
                show: false,
              },
              label: {
                // 设置 引导 出来的文字的大小
                font-size:10
                // 设置 引导 出来的文字 是否要显示
                show: false,
              },
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
```





## 关于图表开发中遇到的问题和需求

### 关系图中显示了节点，却没有连线

在进行关系匹配时，尽量用 id 来进行匹配，而不是用 name 来进行匹配。因为 name 不具有唯一性，匹配时可能存在问题，导致关系的连线不显示。当数据异常，重复时，控制台还可能会报错。

### x轴文本内容太长的几种解决方案

 [Echarts x轴文本内容太长的几种解决方案 - 简书 (jianshu.com)](https://www.jianshu.com/p/32416425049a) 

### 柱形图支持横向/纵向滚动条，鼠标滚动可以平移滚动条

 [echarts柱形图支持横向/纵向滚动条，鼠标滚动可以平移滚动条 - 简书 (jianshu.com)](https://www.jianshu.com/p/6ad4eb4da7af) 

```
dataZoom: [
          {
            type: "slider",
            realtime: true,
            start: 0,
            end: 45, // 初始展示40%
            height: 2,
            fillerColor: "rgba(17, 100, 210, 0.42)", // 滚动条颜色
            borderColor: "rgba(17, 100, 210, 0.12)",
            handleSize: 0, // 两边手柄尺寸
            showDetail: false, // 拖拽时是否展示滚动条两侧的文字
            top: "96%" // 滚动条距离顶部高度

            // zoomLock:true, // 是否只平移不缩放
            // moveOnMouseMove:true, //鼠标移动能触发数据窗口平移
            // zoomOnMouseWheel :true, //鼠标移动能触发数据窗口缩放
          },
          {
            type: "inside", // 支持内部鼠标滚动平移
            start: 0,
            end: 40,
            zoomOnMouseWheel: false, // 关闭滚轮缩放
            moveOnMouseWheel: true, // 开启滚轮平移
            moveOnMouseMove: true // 鼠标移动能触发数据窗口平移
          }
        ]
```

### echarts柱状图柱形修改为三角形

[echarts柱状图柱形修改为三角形_echarts 柱状图变成三角形-CSDN博客](https://blog.csdn.net/qq_36652782/article/details/103822830#:~:text=柱状图 变成 Echarts 柱状图 的图形 变成三角形 ，可以使用 `symbol`,的 `series` 属性中设置 `symbol` 为 `"triangle"`（ 三角形 ）。)

### echarts环形图自动轮播选中，中间显示数据

[echarts环形图自动轮播选中，中间显示数据，移入停止轮播_echarts环形图自动选中-CSDN博客](https://blog.csdn.net/weixin_44237806/article/details/117027396)

## 可视化大屏开发(图标)及相关资源

http://www.datagear.tech/

https://github.com/xiaopujun/light-chaser?tab=readme-ov-file



[Vue3中我是这样玩Echart的 (qq.com)](https://mp.weixin.qq.com/s/N4CdVvl8O672bUOqEU3nag)





## 参考示例：

[vue3 + ts + svg + ECharts 实现双十一数据大屏 - 掘金 (juejin.cn)](https://juejin.cn/post/7305434729527181322#heading-8)



## MapVGL(百度地图图表展示)

https://mapv.baidu.com/gl/docs/index.html

### 个性化地图样式设置

改变地图背景样式文档:https://lbsyun.baidu.com/index.php?title=jspopularGL/guide/custom  

样式编辑:https://lbsyun.baidu.com/apiconsole/custommap

注意:使用时需要使用一样的 ak ,个性化样式才会生效.

### 基本使用

使用 mapVGL

引入依赖:  npm i mapvgl

index.html中需要引入 js,包括 ak(使用自己的ak),这一步必须要有.

```
<script src="//api.map.baidu.com/api?v=1.0&type=webgl&ak=vcnKUwAgwz8O9jau6C59NS8XzjfQuIFx"></script>
```

基本的使用 vue3 代码示例如下:

```vue
<template>
  <div>
    <div id="map_container" style="width: 80vw; height: 80vh"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as mapvgl from "mapvgl";

let bmapgl = ref(null);
let point = ref(null);
let view = ref(null);
let layer = ref(null);
let data = ref([]);

const createMap = () => {
  // 1. 创建地图实例(这一步已经能够显示地图了)
  bmapgl.value = new BMapGL.Map("map_container"); //地图实例
  point.value = new BMapGL.Point(116.403748, 39.915055); // 创建中心点
  bmapgl.value.centerAndZoom(point.value,16); //第一个参数是中心点，第二个参数是缩放级别
  bmapgl.value.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  bmapgl.value.setMapStyleV2({styleId: '9f6a724efd5dc8e5a6456ee3d58312d4'});  // 个性化地图样式设置
  // 2. 创建MapVGL图层管理器(用于打点,飞线等样式,具体可看官网示例)
  view.value = new mapvgl.View({
    map: bmapgl.value,
  });
  // 3. 创建可视化图层，并添加到图层管理器中(根据需要设置),这里的PointLayer用于 点图层
  // 官网中有各种不同的 layer ,根据自己的需要去选择.
  layer.value = new mapvgl.PointLayer({
    color: "rgba(50, 50, 200, 1)",
    blend: "lighter",
    size: 10,     // // 点的大小
    enablePicked: true, // 是否可以拾取
    selectedColor: '#ff0000', // 选中项颜色
    autoSelect: true, // 根据鼠标位置来自动设置选中项
    onClick: (e) => {
        // 点击事件(可以获取到data里面的值)
        console.log(e)
    }
  });
  view.value.addLayer(layer.value);

  // 4. 准备好规范化坐标数据(两条数据在点图层上就是两个点)
  data.value = [
    {
      geometry: {
        type: "Point",
        coordinates: [116.403748, 39.915055],    // 坐标数据
      },
      properties: {     // 自己加入的参数
            name: "哈哈",
            age:'18'
      }
    },
    {
      geometry: {
        type: "Point",
        coordinates: [116.413748, 39.915055],
      },
      properties: {
            name: "哈哈哈"
      }
    },
  ];

  // 5. 关联图层与数据，享受震撼的可视化效果
  layer.value.setData(data.value);
};
onMounted(() => {
  createMap();
});
</script>


<style lang="less">
// 隐藏百度logo
.anchorBL{
display: none !important;
}
</style>


```

### 以地图圆心生成一个圆的随机左边

```js
// 圆心坐标、半径和要生成的点的数量作为参数
    generatePointsInCircle (center, radius, numberOfPoints) {
      const points = []
      for (let i = 0; i < numberOfPoints; i++) {
        // 生成一个0到半径之间的随机距离
        let r = Math.random() * radius
        // 生成一个0到2π之间的随机角度
        let theta = 2 * Math.PI * Math.random()
        // 计算相对于圆心的x和y坐标
        let x = center.x + r * Math.cos(theta)
        let y = center.y + r * Math.sin(theta)
        // 确保点在圆内
        while (Math.sqrt((x - center.x) ** 2 + (y - center.y) ** 2) > radius) {
          // 重新生成随机角度和距离
          r = Math.random() * radius
          theta = 2 * Math.PI * Math.random()
          x = center.x + r * Math.cos(theta)
          y = center.y + r * Math.sin(theta)
        }
        // 将点添加到数组中
        points.push({ x, y })
      }
      return points
    },
```



### 加入动画

```js
animation() {
      this.bmapgl = new window.BMapGL.Map('mapVGL');
      
      let opts = {
            delay: 1500,// 延迟播放的时间
            duration:5000,// 播放持续时间
            interation: 1//'INFINITE'// 循环播放次数  int或 'INFINITE' 
        }
      let keyFrames = [{
          center: new window.BMapGL.Point(117.256851,35.669662),     // 定义第一个关键帧帧地图中心点
          zoom: 4,                                      // 定义第一个关键帧地图等级
          tilt: 0,                                      // 定义第一个关键帧地图倾斜角度
          heading: -100,                                    // 定义第一个关键帧地图旋转方向
          percentage: 0                                  // 定义第一个关键帧处于动画过程的百分比，取值范围0~1
        },
        {
          center: new window.BMapGL.Point(117.256851,35.669662),     // 定义第二个关键帧地图中心点
          zoom: 6,                                      // 定义第二个关键帧地图等级
          tilt: 0,                                      // 定义第二个关键帧地图倾斜角度
          heading: 0,                                  // 定义第二个关键帧地图旋转方向
          percentage: 0.2                                // 定义第二个关键帧处于动画过程的百分比，取值范围0~1
        },
        {
          center: new window.BMapGL.Point(117.256851,35.669662),     // 定义第三个关键帧地图中心点
          zoom: 12,                                      // 定义第三个关键帧地图等级
          tilt: 90,                                      // 定义第三个关键帧地图倾斜角度
          heading: 0,                                  // 定义第三个关键帧地图旋转方向
          percentage: 0.7                               // 定义第三个关键帧处于动画过程的百分比，取值范围0~1
        },
        {
          center: new window.BMapGL.Point(117.256851,35.669662),     // 定义第n个关键帧地图中心点
          zoom: 11,                                      // 定义第n个关键帧地图等级
          tilt: 30,                                      // 定义第n个关键帧地图倾斜角度
          heading: 0,                                  // 定义第n个关键帧地图旋转方向
          percentage: 1                               // 定义第n个关键帧处于动画过程的百分比，取值范围0~1
      }]
      // 定义动画
      var animation = new window.BMapGL.ViewAnimation(keyFrames, opts);
      // 开始动画
      this.bmapgl.startViewAnimation(animation);
    },
```

## Echarts GL

## Three.js

学习视频：https://www.bilibili.com/video/BV14r4y1G7h4?p=1

学习视频线上文档： [Three.js中文网 (webgl3d.cn)](http://www.webgl3d.cn/) 

[老陈打码 | 麒跃科技 (three3d.cn)](https://www.three3d.cn/threejs/01-开发环境搭建/01-前端3D可视化Three.js学习路线.html)           [麒跃科技_老陈打码-让学习更简单！ (cpengx.cn)](https://www.cpengx.cn/)

官方文档： [创建一个场景 – three.js docs (threejs.org)](https://threejs.org/docs/index.html#manual/zh/introduction/Creating-a-scene) 

电子书：[《探索three.js》 (discoverthreejs.com)](https://discoverthreejs.com/zh/)



[Vue3集成ThreeJS实现3D效果，threejs+Vite+Vue3+TypeScript 实战课程【一篇文章精通系列】-CSDN博客](https://blog.csdn.net/qq_44757034/article/details/134499395)

[Three.js所有材质的属性及实例应用_meshstandardmaterial_请往我的生活里加满快乐的博客-CSDN博客](https://blog.csdn.net/Potatoyou/article/details/127905256)

渲染基础：[Three.js初识:three.js的下载与使用_threejs官网模型选择到下载-CSDN博客](https://blog.csdn.net/weixin_40119412/article/details/104456240)

导入模型基础：[three.js添加3d模型_threejs加载3d模型-CSDN博客](https://blog.csdn.net/xi1213/article/details/123244316?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-8-123244316-blog-104456240.235^v39^pc_relevant_yljh&spm=1001.2101.3001.4242.5&utm_relevant_index=11)     [three-load-model: three.js加载模型，可切换场景，异步加载3d模型。 (gitee.com)](https://gitee.com/xi1213/three-load-model)

3d模型下载：[Newsfeed - Sketchfab](https://sketchfab.com/feed)

### Demo

特效：[某科学的three.js - alphardex的专栏 - 掘金 (juejin.cn)](https://juejin.cn/column/6961386493579362312)

[threejs-park: 基于vue3，threeJS智慧园区 (gitee.com)](https://gitee.com/303711888/threejs-park)

[Three.js 导入模型demo分析（随笔记）_three.js demo_Dyz_quite的博客-CSDN博客](https://blog.csdn.net/Dyz_397/article/details/122751301)

[# 一篇文章了解 threejs 在 vue 项目中的基本使用 - 掘金 (juejin.cn)](https://juejin.cn/post/7209852595002032186#heading-19)

[用Three.js做一个3d版的demo-纯前端（Vue3+Three.js+antvG2） - 掘金 (juejin.cn)](https://juejin.cn/post/7293463921729372201)

[Chill the lion (codepen.io)](https://codepen.io/Yakudoo/full/YXxmYR)



[从零开始初尝Three.js【大量案例、简单入手】 - 掘金 (juejin.cn)](https://juejin.cn/post/6844904177345232903#heading-20)

[threejs3d模型可视化编辑系统: 🔥 🎉基于three.js开发的3D模型可视化编辑系统 包含模型加载，模型文件导入导出，模型背景图，全景图，模型动画，模型灯光，模型定位，辅助线，模型辉光，模型拖拽，模型拆解， 模型材质等可视化操作编辑系统，支持模型编辑数据保存和预览 (gitee.com)](https://gitee.com/ZHANG_6666/Three.js3D)

[3D模型可视化编辑器 (gitee.io)](https://zhang_6666.gitee.io/three.js3d/)

模型下载：[3D模型可视化编辑器 (gitee.io)](https://zhang_6666.gitee.io/three.js3d/)    fankoz  密码fanko202...

[vue中，整合AntV + DataV实现可视化大屏 - 掘金 (juejin.cn)](https://juejin.cn/post/7252171811554967589#heading-8)



[用three.js做一个3D汉诺塔游戏（上） (qq.com)](https://mp.weixin.qq.com/s/Sk6voVwc51zIm6ftkJ9Suw)      [hanoi/index.html at main · kagol/hanoi (github.com)](https://github.com/kagol/hanoi/blob/main/index.html)

[使用three.js搭建3d隧道监测-1 - 掘金 (juejin.cn)](https://juejin.cn/post/7273987266523136056)

### 实现基础加载模型（代码示例）

具体每一项的参数配置可以参考官方文档，进行自定义

```vue
<template>
  <div>
    <div id="simple" ref="simple"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import panoramaImg2 from "@/assets/img/panorama/pImg5.png"; // 全景图（背景图）
//引入轨道控制器（用来通过鼠标事件控制模型旋转、缩放、移动），没有这个需求可不引入
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

    
// 获取dom的ref
let simple = ref(null);
// 设置宽高
const width = 800; //宽度
const height = 800; //高度
// 创建3D场景对象Scene
const scene = new THREE.Scene();
// AxesHelper：辅助观察的坐标系（红R、绿G、蓝B分别对应坐标系的x、y、z轴，对于three.js的3D坐标系默认y轴朝上。）
const axesHelper = new THREE.AxesHelper(150);
scene.add(axesHelper);
// 创建渲染器对象
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  preserveDrawingBuffer: true, //保留图形缓冲区
});
console.log("查看当前屏幕设备像素比", window.devicePixelRatio);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x000000, 0.2); // 设置背景颜色并启用透明度
renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)

// 创建相机
const camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000);
camera.position.set(400, 400, 400);
camera.lookAt(0, 0, 0); //坐标原点

// 设置光源
let lightColor = new THREE.Color(0xffffff);
let ambient = new THREE.AmbientLight(lightColor); //环境光
ambient.name = "环境光";
scene.add(ambient);
let directionalLight1 = new THREE.DirectionalLight(lightColor);
directionalLight1.position.set(0, 0, 500);
scene.add(directionalLight1); //平行光源添加到场景中
let directionalLight2 = new THREE.DirectionalLight(lightColor);
directionalLight2.position.set(0, 0, -500);
scene.add(directionalLight2); //平行光源添加到场景中
let directionalLight3 = new THREE.DirectionalLight(lightColor);
directionalLight3.position.set(500, 0, 0);
scene.add(directionalLight3); //平行光源添加到场景中
let directionalLight4 = new THREE.DirectionalLight(lightColor);
directionalLight4.position.set(-500, 0, 0);
scene.add(directionalLight4); //平行光源添加到场景中
let directionalLight5 = new THREE.DirectionalLight(lightColor);
directionalLight5.position.set(0, 500, 0);
scene.add(directionalLight5); //平行光源添加到场景中
let directionalLight6 = new THREE.DirectionalLight(lightColor);
directionalLight6.position.set(0, -500, 0);
scene.add(directionalLight6); //平行光源添加到场景中

//场景球体全景（背景，非必须）
let geometry = new THREE.SphereGeometry(500, 100, 100);
      let material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(panoramaImg2), //导入图片
        color: 0xffffff,
        side: THREE.BackSide,
      });
      let mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

    // 渲染函数
const render = () => {
  renderer.render(scene, camera);
//   mesh.rotateY(0.01); //（执行渲染前操作）这个代码实现每次渲染绕y轴旋转0.01弧度  
  requestAnimationFrame(render);  //请求再次执行渲染函数render，渲染下一帧
}

// 轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(100, 0, 0);
controls.update(); //update()函数内会执行camera.lookAt(controls.targe)
controls.addEventListener("change", () => {
  renderer.render(scene, camera); //重新渲染
  // 浏览器控制台查看相机位置变化
  //  console.log('camera.position',camera.position);
});
    
// 加载模型
const loadModel = () => {
  const loader = new GLTFLoader();
  loader.load("model/导弹.glb", function (gltf) {
    console.log("控制台查看加载gltf文件返回的对象结构", gltf);
    console.log("gltf对象场景属性", gltf.scene);
    // 返回的场景对象gltf.scene插入到threejs场景中
    gltf.scene.scale.set(100, 100, 100); // 改变渲染的大小
    // 改变模型渲染的位置
    gltf.scene.rotation.set(0, 10, 10); // 改变模型渲染的旋转角度
    scene.add(gltf.scene);

    render(); //执行渲染操作
  });
};
    
// 创建一个立方体(网格模型)
const getMod=()=>{
     //创建一个长方体几何对象Geometry
     const geometry = new THREE.BoxGeometry(50, 50, 50);
     // 高光网格材质MeshPhongMaterial 模拟镜面反射，产生一个高光效果
    const material = new THREE.MeshPhongMaterial({
        color: '#23A9F2',
        shininess: 20, //高光部分的亮度，默认30
        specular: 0xff0000, //高光部分的颜色
    });
     // 两个参数分别为几何体geometry、材质material
     const mesh1 = new THREE.Mesh(geometry, material); //网格模型对象Mesh
    //设置网格模型在三维空间中的位置坐标，默认是坐标原点
    mesh1.position.set(50, 50, 150);
    scene.add(mesh1);

}

// 自定义加载函数
const load = () => {
  render(); // 执行一次渲染操作(增加了模型加载慢，会先显示背景色（非必要）)
  loadModel();  //getMod()   // 加载模型(加载外部模型  和 创建的模型对象) 
  document.getElementById("simple")?.appendChild(renderer.domElement);
};

onMounted(() => {
  load();
});
</script>
```

### 点击模型获取模型对象

参考：https://blog.csdn.net/sinat_35823840/article/details/112840465

以下是一个点击div，获取模型对象的示例，（计算归一化设备坐标（基于容器大小）是获取的关键。）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Three.js Click Event Example</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
        }
        #canvasContainer {
            margin: 0 auto; /* 水平居中 */
            width: 400px;
            height: 300px;
            border: 1px solid #000;
            display: block; /* 防止margin-top和margin-bottom不起作用 */
        }
    </style>
</head>
<body>
    <div id="canvasContainer"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        // 创建场景、相机、渲染器等...
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, 400 / 300, 0.1, 1000);
        camera.position.z = 5;

        // 创建渲染器并设置其大小与容器相同
        var renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(400, 300);
        var container = document.getElementById('canvasContainer');
        container.appendChild(renderer.domElement);

        // 创建一个Raycaster实例
        var raycaster = new THREE.Raycaster();
        var mouse = new THREE.Vector2();

        // 添加模型到场景中...
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh(geometry, material);
        cube.position.x = -2;
        scene.add(cube);

        // 鼠标点击事件处理函数
        function onDocumentMouseDown(event) {
            // 计算归一化设备坐标（基于容器大小）
            var rect = container.getBoundingClientRect();
            mouse.x = (event.clientX - rect.left) / rect.width * 2 - 1;
            mouse.y = -(event.clientY - rect.top) / rect.height * 2 + 1;

            // 更新Raycaster
            raycaster.setFromCamera(mouse, camera);

            // 检测射线与场景中对象的交点
            var intersects = raycaster.intersectObjects(scene.children);

            // 如果有交点，执行操作
            if (intersects.length > 0) {
                var intersectedObject = intersects[0].object;
                console.log('Clicked object:', intersectedObject);

                // 改变模型颜色或其他操作
                intersectedObject.material.color.set(0xff0000);
            }
        }

        // 绑定鼠标点击事件到document
        document.addEventListener('mousedown', onDocumentMouseDown, false);

        // 渲染循环
        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        animate();
    </script>
</body>
</html>
```

以上只展示了有一个模型的情况，如果有多个模型，要获取点击到的模型，要找到距离相机最近的交点。

```js
// 鼠标点击事件处理函数
        function onDocumentMouseDown(event) {
            // 计算归一化设备坐标
            mouse.x = (event.clientX - container.getBoundingClientRect().left) / container.offsetWidth * 2 - 1;
            mouse.y = -(event.clientY - container.getBoundingClientRect().top) / container.offsetHeight * 2 + 1;

            // 更新Raycaster
            raycaster.setFromCamera(mouse, camera);

            // 检测射线与场景中对象的交点
            var intersects = raycaster.intersectObjects(scene.children);

            // 如果有交点，执行操作
            if (intersects.length > 0) {
                // 找到距离相机最近的交点
                var closestIntersect = intersects.reduce((prev, curr) => {
                    return (prev.distance < curr.distance) ? prev : curr;
                });

                // 获取被点击的模型
                var clickedModel = closestIntersect.object;
                console.log('Clicked object:', clickedModel);

                // 改变模型颜色或其他操作
                clickedModel.material.color.set(0xff0000);
            }
        }
```



### 模型的克隆（复制）

#### 普通的克隆

在Three.js中，复制一个模型对象通常意味着创建该对象的一个深拷贝，这样原始对象和新创建的对象在内存中是完全独立的。这可以通过使用`.clone()`方法来实现，该方法会递归地复制对象及其所有子对象。以下是一个基本的示例：

```js
// 假设你已经有了一个Three.js模型对象，名为 originalModel
const originalModel = ...; // 你的模型对象

// 使用.clone()方法创建一个深拷贝
const clonedModel = originalModel.clone();

// 现在 clonedModel 是 originalModel 的一个副本，它们在内存中是独立的
// 你可以对 clonedModel 进行操作，而不会影响 originalModel
```

请注意，`.clone()`方法会复制模型的所有属性，包括材质、纹理、几何体等。如果你只想复制模型的几何体（Geometry）而不包括材质，你可以这样做：

```js
// 复制几何体
const geometry = originalModel.geometry.clone();

// 创建一个新的网格（Mesh）对象，使用复制的几何体
const clonedMesh = new THREE.Mesh(geometry, originalModel.material);

// 现在 clonedMesh 是一个具有原始几何体和材质的新模型对象
```

在这个例子中，我们首先复制了原始模型的几何体，然后创建了一个新的`Mesh`对象，它使用复制的几何体和原始模型的材质。这样，新创建的`Mesh`对象在几何体上与原始模型相同，但在材质和其他属性上是独立的。

如果你需要复制整个模型，包括其在场景中的位置、旋转和缩放，那么使用`.clone()`方法是最简单的选择。如果你只想复制模型的某些部分，你可能需要手动创建新的模型对象并设置相应的属性。

#### 带有骨架的克隆

直接用 clone 方法来克隆带有骨架的模型对象，模型是散架的（例如人物模型），需要使用 骨架工具 的克隆方法才行。

[SkeletonUtils – three.js docs (threejs.org)](https://threejs.org/docs/#examples/zh/utils/SkeletonUtils)

```js
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';

const model1 = SkeletonUtils.clone( gltf.scene );
```



### gsap动画（模型运动）

具体的gsap属性可以去查询gsap的相关内容

```js
          // gltf.scene 是加载的模型 
          const model1 = gltf.scene 

         // 使用GSAP添加旋转动画
          gsap.to(model1.rotation, {
            x: 2 * Math.PI, // 绕X轴旋转360度
            y: 0.5 * Math.PI, // 绕Y轴旋转180度
            z: 0, // 绕Z轴不旋转
            duration: 5, // 动画持续时间
            repeat: -1, // 无限重复
            yoyo: true, // 来回旋转
            ease: 'power1.inOut' // 使用缓动效果
          });
			// 使用GSAP添加位置移动
          gsap.to(model1.position, {
            z:40
          })
          // 使用GSAP添加 大小变化
          gsap.to(model1.scale, {
            x: 40,
            y: 40,
            z:40
          })
```



### 骨骼动画

```vue
<template>
  <div>
    <div
      id="simple"
      ref="simple"
      @click="clickIt"
      style="width: 800px; height: 800px"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import gsap from "gsap";

import panoramaImg2 from "@/assets/img/panorama/pImg5.png"; // 全景图（背景图）
//引入轨道控制器（用来通过鼠标事件控制模型旋转、缩放、移动），没有这个需求可不引入
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as SkeletonUtils from "three/addons/utils/SkeletonUtils.js";
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
//处理扩展库EffectComposer.js
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
// 引入渲染器通道RenderPass
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
// 引入OutlinePass通道
import { OutlinePass } from "three/addons/postprocessing/OutlinePass.js";
// 引入UnrealBloomPass通道(发光通道)
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
// 引入GlitchPass通道 闪屏效果
import { GlitchPass } from "three/addons/postprocessing/GlitchPass.js";

// 获取dom的ref
let simple = ref(null);
var container = document.getElementById("simple");
// 设置宽高
const width = 800; //宽度
const height = 800; //高度
// 创建3D场景对象Scene
const scene = new THREE.Scene();
// AxesHelper：辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(150);
scene.add(axesHelper);
// 创建渲染器对象
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  preserveDrawingBuffer: true, //保留图形缓冲区
});
console.log("查看当前屏幕设备像素比", window.devicePixelRatio);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor("#FFFFFF", 0.2); // 设置背景颜色并启用透明度
renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)
// 创建后处理对象EffectComposer，WebGL渲染器作为参数
const composer = new EffectComposer(renderer);
// 创建相机
const camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000);
camera.position.set(100, 100, 100);
camera.lookAt(0, 0, 0); //坐标原点
// 创建一个渲染器通道，场景和相机作为参数
const renderPass = new RenderPass(scene, camera);
// 设置renderPass通道
composer.addPass(renderPass);
// 创建OutlinePass通道
// OutlinePass第一个参数v2的尺寸和canvas画布保持一致
// const v2 = new THREE.Vector2(window.innerWidth, window.innerHeight);
const v2 = new THREE.Vector2(800, 800);
// 创建Raycaster
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const outlinePass = new OutlinePass(v2, scene, camera);
outlinePass.visibleEdgeColor.set("#00FFFF");
outlinePass.pulsePeriod = 1; // 描边闪烁 outlinePass.pulsePeriod的功能是控制描边的闪烁频率，默认0不闪烁。
// canvas画布宽高度尺寸是800, 800
const bloomPass = new UnrealBloomPass(new THREE.Vector2(800, 800));
//bloom发光强度
bloomPass.strength = 0.15;
// 屏闪
const glitchPass = new GlitchPass();
// glitchPass.goWild = true; // 如果你想创建一个持续的全屏电子脉冲效果
    
// 设置光源
let lightColor = new THREE.Color(0xffffff);
let ambient = new THREE.AmbientLight(lightColor); //环境光
ambient.name = "环境光";
scene.add(ambient);
let directionalLight1 = new THREE.DirectionalLight(lightColor);
directionalLight1.position.set(0, 0, 500);
scene.add(directionalLight1); //平行光源添加到场景中
let directionalLight2 = new THREE.DirectionalLight(lightColor);
directionalLight2.position.set(0, 0, -500);
scene.add(directionalLight2); //平行光源添加到场景中
let directionalLight3 = new THREE.DirectionalLight(lightColor);
directionalLight3.position.set(500, 0, 0);
scene.add(directionalLight3); //平行光源添加到场景中
let directionalLight4 = new THREE.DirectionalLight(lightColor);
directionalLight4.position.set(-500, 0, 0);
scene.add(directionalLight4); //平行光源添加到场景中
let directionalLight5 = new THREE.DirectionalLight(lightColor);
directionalLight5.position.set(0, 500, 0);
scene.add(directionalLight5); //平行光源添加到场景中
let directionalLight6 = new THREE.DirectionalLight(lightColor);
directionalLight6.position.set(0, -500, 0);
scene.add(directionalLight6); //平行光源添加到场景中
    
//场景球体全景
let geometry = new THREE.SphereGeometry(500, 100, 100);
let material = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load(panoramaImg2), //导入图片
  color: 0xffffff,
  side: THREE.BackSide,
});
let mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);
let clock = new THREE.Clock();
// 渲染函数
const render = (event) => {
  // 更新 GlitchPass 的参数，例如可以在这里添加一些随机值或者根据时间变化的值
  //  glitchPass.goWild = Math.random() > 0.95; // 大约5%的概率产生故障效果
  composer.render();

  // renderer.render(scene, camera);    // 注意使用渲染循环中后处理EffectComposer执行.render()，不需要再调用renderer.render(scene, camera)

  //   mesh.rotateY(0.01); //（执行渲染前操作）这个代码实现每次渲染绕y轴旋转0.01弧度

  const delta = clock.getDelta();

  for (const mixer of mixers) mixer.update(delta);

  requestAnimationFrame(render); //请求再次执行渲染函数render，渲染下一帧
};
// 轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);
// controls.target.set(100, 0, 0);
controls.update(); //update()函数内会执行camera.lookAt(controls.targe)

controls.addEventListener("change", () => {
  renderer.render(scene, camera); //重新渲染
  // 浏览器控制台查看相机位置变化
  //  console.log('camera.position',camera.position);
});
// 加载模型
const mixers = [];
const loadModel = () => {
  const loader = new GLTFLoader();
  loader.load("model/Soldier.glb", function (gltf) {
    console.log("控制台查看加载gltf文件返回的对象结构", gltf);
    console.log("gltf对象场景属性", gltf.scene);
    gltf.scene.traverse(function (object) {
      if (object.isMesh) object.castShadow = true;
    });

    gltf.scene.position.set(0, 0, 0); // 改变模型渲染的位置
    // 返回的场景对象gltf.scene插入到threejs场景中
    gltf.scene.scale.set(20, 20, 20); // 改变渲染的大小
    // 改变模型渲染的位置
    gltf.scene.rotation.set(0, 180, 0); // 改变模型渲染的旋转角度

    console.log("所有骨骼动画数据", gltf.animations);
    const model1 = SkeletonUtils.clone(gltf.scene);
    const model2 = SkeletonUtils.clone(gltf.scene);
    const model3 = SkeletonUtils.clone(gltf.scene);
    const model4 = SkeletonUtils.clone(gltf.scene);

    const mixer1 = new THREE.AnimationMixer(model1);
    const mixer2 = new THREE.AnimationMixer(model2);
    const mixer3 = new THREE.AnimationMixer(model3);
    const mixer4 = new THREE.AnimationMixer(model4);

    mixer1.clipAction(gltf.animations[0]).play(); // idle
    mixer2.clipAction(gltf.animations[1]).play(); // run
    mixer3.clipAction(gltf.animations[3]).play(); // walk
    mixer4.clipAction(gltf.animations[2]).play(); // walk

    model1.position.x = -20;
    model2.position.x = 0;
    model3.position.x = 20;
    model4.position.x = 40;

    scene.add(model1, model2, model3, model4);
    mixers.push(mixer1, mixer2, mixer3, mixer4);

    outlinePass.selectedObjects = [model1, model2];
    composer.addPass(outlinePass);
    composer.addPass(bloomPass); // 增加发光通道
    // composer.addPass(glitchPass)  // 通道会产生闪屏效果

    // 使用GSAP添加旋转动画
    gsap.to(model1.rotation, {
      x: 2 * Math.PI, // 绕X轴旋转360度
      y: 0.5 * Math.PI, // 绕Y轴旋转180度
      z: 0, // 绕Z轴不旋转
      duration: 5, // 动画持续时间
      repeat: -1, // 无限重复
      yoyo: true, // 来回旋转
      ease: "power1.inOut", // 使用缓动效果
    });

    gsap.to(model2.position, {
      z: 40,
      onUpdate: () => console.log("1234567890"),
    });

    gsap.to(model2.scale, {
      x: 40,
      y: 40,
      z: 40,
    });

    render(); //执行渲染操作
  });
};
// 创建一个立方体(网格模型)
const getMod = () => {
  //创建一个长方体几何对象Geometry
  const geometry = new THREE.BoxGeometry(50, 50, 50);
  // 高光网格材质MeshPhongMaterial 模拟镜面反射，产生一个高光效果
  const material = new THREE.MeshPhongMaterial({
    color: "#23A9F2",
    shininess: 20, //高光部分的亮度，默认30
    specular: 0xff0000, //高光部分的颜色
  });
  // 两个参数分别为几何体geometry、材质material
  const mesh1 = new THREE.Mesh(geometry, material); //网格模型对象Mesh
  //设置网格模型在三维空间中的位置坐标，默认是坐标原点
  mesh1.position.set(50, 50, 150);
  scene.add(mesh1);
};
// 自定义加载函数
const load = () => {
  render(); // 执行一次渲染操作(增加了模型加载慢，会先显示背景色（非必要）)
  loadModel(); //getMod()   // 加载模型(加载外部模型  和 创建的模型对象)
  document.getElementById("simple")?.appendChild(renderer.domElement);
  // gsap.to("#simple", { duration: 1, x: 100 });
};

onMounted(() => {
  load();
});

const clickIt = (event) => {
  console.log(event, window.innerWidth, window.innerHeight);
  // 阻止默认行为
  event.preventDefault();
  // // 调用渲染循环
  // render();
  // 计算鼠标位置
  // mouse.x = ((event.clientX-100) / 800) * 2 - 1;
  // mouse.y = -(event.clientY / 800) * 2 + 1;
  // mouse.x = (event.clientX - container.getBoundingClientRect().left) / container.offsetWidth * 2 - 1;
  // mouse.y = -(event.clientY - container.getBoundingClientRect().top) / container.offsetHeight * 2 + 1;
  // var rect = container.getBoundingClientRect();
  var rect = simple.value.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = (-(event.clientY - rect.top) / rect.height) * 2 + 1;

  // 更新Raycaster
  raycaster.setFromCamera(mouse, camera);

  // 检测交点
  const intersects = raycaster.intersectObjects(scene.children, true);
  console.log("intersects", intersects); // 若数组长度大于0，则点击到了物体

  if (intersects.length > 0) {
    // 如果有交点，保存点击的物体
    // clickedObject = intersects[0].object;
    // // 改变颜色
    // clickedObject.material.color.set(0xff0000);
  }
};
</script>
<style scoped lang="less"></style>

```



### 问题及解决

#### 贴图纹理渲染黑色：

[Three.js 解决纹理渲染后模型为黑色_three.js 地球添加图片后全黑-CSDN博客](https://blog.csdn.net/qq_52697994/article/details/125613338)

需要注意的是加载贴图的方法是一个异步方法，如果没用控制好渲染的时机，会导致渲染时黑色。

#### 加载gltf模型看不见

gltf加载器方法`.load()`方法也是一个异步方法，注意 renderer.render(scene, camera); //执行渲染操作 要在加载模型后再执行，否则看不见

#### 下载为图片

下载canvas图片时，发现并不能看见canvas的模型，使用如下方法解决，在渲染器中加入保留图形缓冲区 的配置

```
 // 创建渲染器对象

 const renderer = new THREE.WebGLRenderer({

   antialias:true,

   preserveDrawingBuffer: true,//保留图形缓冲区

 });
```



## 智慧城市开发

up主：https://space.bilibili.com/690283346         太极开发者平台（配置要求高）： https://www.gbim.vip/#/home/dts-onLine

## Cesium

简介网站：https://syzdev.cn/cesium-docs/guide/brief-introduction.html

[cesium探索系列目录-CSDN博客](https://blog.csdn.net/tjx1997/article/details/133469066?spm=1001.2014.3001.5501)

### vue3 vite使用 Cesium

https://cloud.tencent.com/developer/article/2340503

下载依赖：npm i cesium vite-plugin-cesium vite -D

基本使用：

```vue
<template>
  <div>cesium基本使用</div>
  <div id="cesiumContainer"></div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import * as Cesium from "cesium";

//cesium初始化必须写在mounted生命周期里面，否则会报错"Element with id "cesiumContainer" does not exist in the document."
onMounted(() => {
    
  // 配置cesium专属Access Tokens,就是cesium的访问令牌，每一个使用cesium的用户都需要自己注册，然后获取自己的Access Tokens；
  Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5MDcyM2MyNi03NmRkLTRhNTYtYTU4Ni01ZThkNjQxZmZiN2MiLCJpZCI6MjA0MTY1LCJpYXQiOjE3MTEzMjgyMjl9.3rTyKeDkpAjTyrX7erFYbrz0bq8EUwvECBtI8QosBKs";
    
  const viewer = new Cesium.Viewer("cesiumContainer", {
    // animation:false,//动画小部件
    // baseLayerPicker:false,//地图图层组件
    // fullscreenButton:false,//全屏组件
    // geocoder:false,//地理编码搜索组件
    // homeButton:false,//首页组件
    // infoBox:false,//信息框
    // sceneModePicker:false,//场景模式
    // selectionIndicator:false,//选取指示器组件
    // timeline:false,//时间轴
    // navigationHelpButton:false,//帮助按钮
    // navigationInstructionsInitiallyVisible:false,
    // 设置 cesium 的世界地形
    // terrainProvider: new Cesium.ArcGISTiledElevationTerrainProvider({
    //   url: "https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",
    // }),
    // terrainProvider: Cesium.createWorldTerrainAsync({   // Cesium ion 地形
    // requestVertexNormals: true, // 开启地形光照
    //     requestWaterMask: true, // 开启水面波纹
    // })
  });

  // 隐藏logo信息
  viewer._cesiumWidget._creditContainer.style.display = "none";

  viewer.scene.debugShowFramesPerSecond = true; // 显示帧率

  // 隐藏默认展示内容的部分场景（这些场景默认都是显示的）
  //   viewer.scene.skyBox.show = false; // 隐藏星空 （背景中有白色光点，并且转动视角时背景星空也会更随变化）
  //   viewer.scene.skyAtmosphere.show = false; // 隐藏大气层
  //   viewer.scene.sun.show = false; // 隐藏太阳
  //   viewer.scene.moon.show = false; // 隐藏月亮
  //   viewer.scene.globe.show = false; // 隐藏地球

  // 加载影像图层，非必须。 （示例：这里加载了高德的影像图层，你可以选择自己想要的图层）
  viewer.imageryLayers.addImageryProvider(
    new Cesium.UrlTemplateImageryProvider({
      // url: "https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",   // 高德影像服务
      url: "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8", // 高德地图标注
    })
  );

  // 加载地形，和直接在viewer中设置terrainProvider效果一样(推荐使用)  // 使用地形后，地球展示不出来。没找到原因。
  // viewer.terrainProvider = new Cesium.ArcGISTiledElevationTerrainProvider({
  //     url: 'http://data.marsgis.cn/terrain',    
  // })
  //   viewer.terrainProvider = Cesium.createWorldTerrainAsync({
  //     requestWaterMask: true, // 请求水体效果所需要的海岸线数据
  //   });

  // 摄像机设置 （不设置默认看到的整个地球）
  viewer.camera.setView({
    // 设置视角的位置  参数（经度，纬度，高度）
    destination: Cesium.Cartesian3.fromDegrees(-73.866552, 40.846965, 200),
    orientation: {
      // 设置视角的朝向  参数（绕x轴旋转的角度，绕y轴旋转的角度，绕z轴旋转的角度）
      heading: Cesium.Math.toRadians(90),
      pitch: Cesium.Math.toRadians(-90),
      roll: 0,
    },
  });

});
</script>
<style scoped>
#cesiumContainer {
  width: 80vw;
  height: 80vh;
}
</style>

```

获取token：  https://ion.cesium.com/tokens?page=1



### 地图数据获取



**poi**

poi搜索工具：[POI查询工具 - 规划云 (guihuayun.com)](http://guihuayun.com/poi/)

复制poi数据，保存到 poi.txt 文件里

QGIS 软件：图层-》添加图层-》添加分割文本文件（导入poi.txt文件）-》横坐标 lng  纵坐标 lat -》添加  -》可以看到生成的要素点

QGIS 安装插件： QuickMapServices，  安装完成后 点击插件生成的按钮选择地图展示。

QGIS： 点击识别要素按钮可以查看导入的要素点的信息

也可以使用高德，百度的接口去批量获取poi数据



**高德行政区划边界查询：**

[规划云-行政区边界查询（基于高德地图API），也可以使用 DataV获取  (guihuayun.com)](http://www.guihuayun.com/maps/region.php)

下载的区域  json 文件直接拉到 QGIS 软件的图层即可看到效果



**gis地图数据下载器（多付费版本）**

例如：水经注



**OSM数据**

需要科学上网，一般不用。



**建筑数据获取**

水经注（推荐使用百度的数据）



**DEM高程数据**



**卫星影像获取**

可以使用之前的QGIS插件获取