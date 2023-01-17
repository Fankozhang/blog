---
icon: edit
date: 2022-01-09
category:
  - bigScreen
tag:
  - echart

---

# bigScreen
## echarts

对于echarts图标的配置可以参考 [Echarts数据可视化_腾讯数据架构师的博客-CSDN博客](https://blog.csdn.net/luanpeng825485697/category_11735465.html) 

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
           window.onresize = function() {
                myChart.resize();
              }
          
      }

  }
```

对于配置series绘制地图，还可以通过配置geo来设置地图，如下：

```
var option={
	geo:{
      type:"map",
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

