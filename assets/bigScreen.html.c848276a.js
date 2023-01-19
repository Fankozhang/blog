import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as t,a as e,b as n,e as s,f as a,r as l}from"./app.b92bfb37.js";const c={},v=e("h1",{id:"bigscreen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bigscreen","aria-hidden":"true"},"#"),n(" bigScreen")],-1),o=e("h2",{id:"echarts",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#echarts","aria-hidden":"true"},"#"),n(" echarts")],-1),u={href:"https://blog.csdn.net/luanpeng825485697/category_11735465.html",target:"_blank",rel:"noopener noreferrer"},m=e("h3",{id:"echarts设置主题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#echarts设置主题","aria-hidden":"true"},"#"),n(" echarts设置主题")],-1),h={href:"https://echarts.apache.org/zh/theme-builder.html",target:"_blank",rel:"noopener noreferrer"},b=a(`<p>在主题中复制 js 代码并保存到 js 文件中，引入到需要的页面，如保存到 theme.js（<strong>记住主题名称，如‘vintage’</strong>）（‘dark’主题是内置的，无需引入）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import &quot;../assets/theme&quot;    // 引入js文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用时，获取dom时填入第二个参数（<strong>主题名称，切记不是js文件名称</strong>）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var myChart2 = echarts.init(this.$refs.map2,&#39;vintage&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>随后绘制的图表就会用上设置的主题样式了。</p><h3 id="vue使用echarts渲染地图数据" tabindex="-1"><a class="header-anchor" href="#vue使用echarts渲染地图数据" aria-hidden="true">#</a> vue使用echarts渲染地图数据</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install echarts --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在使用echarts的页面引入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import * as echarts from &#39;echarts&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),p={href:"https://datav.aliyun.com/portal/school/atlas/area_selector#&lat=31.84139930209406&lng=117.33123779296875&zoom=9",target:"_blank",rel:"noopener noreferrer"},g=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import JSON from &#39;../assets/jinan.json&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>methods里编写获取dom元素容器，渲染数据的方法，并在mounted调用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div ref=&quot;map&quot; id=&quot;main&quot; style=&quot;width:500x;height:500px&quot;&gt;

mounted(){
    this.drawMap()
  },
  methods:{
    drawMap(){
        var myChart = echarts.init(this.$refs.map) // 拿到一个实例
        // var myChart = echarts.init(document.getElementById(&quot;main&quot;)) //也可以用id获取实例
          echarts.registerMap(&#39;济南市&#39;, JSON, {}) //引入地图文件
          var option = {
            series: [
              {
                type: &#39;map&#39;,
                mapType: &#39;济南市&#39;//地图名称，要和引入地图文件的第一个参数名相同

              }]
          }
          myChart.setOption(option)
          
           // 地图点击每一块区域事件（根据点击事件参数，进行逻辑处理）
          myChart.on(&#39;click&#39;, function (params) {
            console.log(params)
            //逻辑控制
          })
          
           // resize方法监听图表容器的大小并改变图表大小
           window.onresize = function() {
                myChart.resize();
              }
          
      }

  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于配置series绘制地图，还可以通过配置geo来设置地图，如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var option={
	geo:{
      type:&quot;map&quot;,
      map:&quot;china&quot;,//使用 registerMap 注册的地图名称
      // 默认设置完地图是固定死的不能拖动
      roam:true,//否开启鼠标缩放和平移漫游。默认不开启。
      zoom :1,//当前视角的缩放比例。越大比例越大
      center:[108.956239,34.268309],
        label:{//地图上显示文字提示信息
        show:true,
        color:&quot;#ff6600&quot;,
        fontSize:10//字体大小
        },
        itemStyle:{//地图区域的多边形 图形样式。
          areaColor:&quot;#f8bf1c&quot;//地图区域的颜色。
        }
     },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function x(_,f){const i=l("ExternalLinkIcon");return d(),t("div",null,[v,o,e("p",null,[n("对于echarts图标的配置可以参考 "),e("a",u,[n("Echarts数据可视化_腾讯数据架构师的博客-CSDN博客"),s(i)])]),m,e("p",null,[e("a",h,[n("主题编辑器 - Apache ECharts"),s(i)])]),b,e("p",null,[n("引入地图的 json 数据 "),e("a",p,[n("DataV.GeoAtlas地理小工具系列 (aliyun.com)"),s(i)])]),g])}const C=r(c,[["render",x],["__file","bigScreen.html.vue"]]);export{C as default};
