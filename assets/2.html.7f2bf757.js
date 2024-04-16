import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as o,d as p,a as n,b as s,e as t,f as e,r as c}from"./app.da69e072.js";const u={},r=n("hr",null,null,-1),d=e('<p>date: 2022-01-02 category:</p><ul><li>css tag:</li><li>css</li><li>less</li><li>scss star: true</li></ul><hr><h1 id="css和效果实现" tabindex="-1"><a class="header-anchor" href="#css和效果实现" aria-hidden="true">#</a> css和效果实现</h1><h2 id="grid布局" tabindex="-1"><a class="header-anchor" href="#grid布局" aria-hidden="true">#</a> grid布局</h2>',5),v={href:"https://juejin.cn/post/6844903967701336072",target:"_blank",rel:"noopener noreferrer"},k={href:"http://ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://cssgrid-generator.netlify.app/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.runoob.com/css3/css-grid.html",target:"_blank",rel:"noopener noreferrer"},h=e(`<p>基本使用</p><p>画出一个3行，2列的表格布局，间隙为 10px;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>grid布局一行代码响应式（minmax规定响应式的范围）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>grid布局居中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.container{
  display: grid;
  place-content: center;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>容器内一个项目占用多行或多列（容器内部 项目加属性）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//grid-row     是 grid-row-start 和 grid-row-end 属性的简写属性。
//grid-column  是 grid-column-start 和 grid-column-end 属性的简写属性。

.center{
  //  从第一个网格线到第三个网格线，占据两个网格的大小
  grid-row: 1/3;
  grid-column: 1/3;
}

.center{
  //  从第一个网格开始，占据三个网格的大小  关键字 &quot;span&quot; 来定义元素将跨越的行数
  grid-row: 1/span 3;
  grid-column: 1/span 3;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css特殊效果" tabindex="-1"><a class="header-anchor" href="#css特殊效果" aria-hidden="true">#</a> css特殊效果</h2><h3 id="毛玻璃效果" tabindex="-1"><a class="header-anchor" href="#毛玻璃效果" aria-hidden="true">#</a> 毛玻璃效果</h3><p><code>backdrop-filter: blur(6px);</code></p>`,12),f={href:"https://hype4.academy/tools/glassmorphism-generator",target:"_blank",rel:"noopener noreferrer"},x=n("h3",{id:"多边形生成",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#多边形生成","aria-hidden":"true"},"#"),s(" 多边形生成")],-1),_={href:"https://www.jiangweishan.com/tool/clippy/",target:"_blank",rel:"noopener noreferrer"},y=n("h3",{id:"动态背景生成",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#动态背景生成","aria-hidden":"true"},"#"),s(" 动态背景生成")],-1),w={href:"https://wweb.dev/resources/animated-css-background-generator",target:"_blank",rel:"noopener noreferrer"},q=e(`<h2 id="input样式修改" tabindex="-1"><a class="header-anchor" href="#input样式修改" aria-hidden="true">#</a> input样式修改</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input placeholder-style=&quot;color: #dfdfdf&quot;  class=&quot;input&quot; type=&quot;text&quot; placeholder=&quot;请输入账号&quot; maxlength=&quot;30&quot; /&gt;

&lt;style&gt;
        .input {
		  &amp;:focus{
		  // 聚焦时不显示外边框
			  outline: none;
		  }
		  // 修改 placeholder 的样式
		  &amp;::placeholder {
				color: #dfdfdf;
			}
        }
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文字溢出省略号" tabindex="-1"><a class="header-anchor" href="#文字溢出省略号" aria-hidden="true">#</a> <strong>文字溢出省略号</strong></h2><p>文字单行溢出:</p><p><code>overflow: hidden; // 溢出隐藏</code><br><code>text-overflow: ellipsis; // 溢出用省略号显示</code><br><code>white-space: nowrap; // 规定段落中的文本不进行换行</code></p><p>多行文字溢出:</p><p><code>overflow: hidden; // 溢出隐藏 </code><br><code>text-overflow: ellipsis; // 溢出用省略号显示 </code><br><code>display:-webkit-box; // 作为弹性伸缩盒子模型显示。 </code><br><code>-webkit-box-orient:vertical; // 设置伸缩盒子的子元素排列方式：从上到下垂直排列 </code><br><code>-webkit-line-clamp:3; // 显示的行数 </code></p>`,7),S={href:"https://mp.weixin.qq.com/s/kt3gCLrXcVmiaVoHsvEvNg",target:"_blank",rel:"noopener noreferrer"},C={href:"https://hai.li/2017/03/08/css-multiline-overflow-ellipsis.html",target:"_blank",rel:"noopener noreferrer"},E=n("h2",{id:"文字竖着排列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#文字竖着排列","aria-hidden":"true"},"#"),s(" 文字竖着排列")],-1),j={href:"https://blog.csdn.net/weixin_29731589/article/details/117890453#:~:text=css%E8%AE%BE%E7%BD%AE%E6%96%87%E5%AD%97%E7%AB%96%E7%9D%80%E6%8E%92%E5%88%97%E7%9A%84%E6%96%B9%E6%B3%95%EF%BC%9A1%E3%80%81writing-mode",target:"_blank",rel:"noopener noreferrer"},z=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>div { writing-mode: tb-rl; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="html文本自动换行" tabindex="-1"><a class="header-anchor" href="#html文本自动换行" aria-hidden="true">#</a> <strong>html文本自动换行</strong></h2><ul><li>word-wrap: break-word; ：当单词太长超出容器宽度时，强制换行，将单词拆分成多行显示。</li><li>white-space: pre-wrap; ：保留空白符，自动换行。</li></ul><h2 id="页面平滑滚动" tabindex="-1"><a class="header-anchor" href="#页面平滑滚动" aria-hidden="true">#</a> 页面平滑滚动</h2><p><code>scroll-behavior： smooth</code></p><h2 id="css变量" tabindex="-1"><a class="header-anchor" href="#css变量" aria-hidden="true">#</a> <strong>css变量</strong></h2><p><strong>CSS变量</strong>又称<strong>CSS自定义属性</strong>，通过在<code>css</code>中自定义属性<code>--var</code>与函数<code>var()</code>组成，<code>var()</code>用于引用自定义属性。谈到为何会在<code>CSS</code>中使用变量，以下使用一个示例讲述。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">:</span>root <span class="token punctuation">{</span>
 <span class="token operator">--</span>c<span class="token operator">-</span>color<span class="token operator">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>title <span class="token punctuation">{</span>
 background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>c<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css文字分散对齐" tabindex="-1"><a class="header-anchor" href="#css文字分散对齐" aria-hidden="true">#</a> css文字分散对齐</h2><p><code>text-align-last:justify</code></p><h2 id="css画三角形-多边形" tabindex="-1"><a class="header-anchor" href="#css画三角形-多边形" aria-hidden="true">#</a> css画三角形（多边形）</h2><p>// 根据对border-color的修改来实现三角形 transparent可用于表示背景透明</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>width: 0;
height: 0;
border: 50px solid;
border-color: transparent transparent orangered transparent;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),T={href:"https://www.jiangweishan.com/tool/clippy/",target:"_blank",rel:"noopener noreferrer"},B=n("h2",{id:"边框样式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#边框样式","aria-hidden":"true"},"#"),s(" 边框样式")],-1),F={href:"https://blog.csdn.net/blbyu/article/details/128710565",target:"_blank",rel:"noopener noreferrer"},Y=e(`<h2 id="css阴影" tabindex="-1"><a class="header-anchor" href="#css阴影" aria-hidden="true">#</a> css阴影</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>box-shadow: 10px 10px 5px #888888;
box-shadow:0 16px 60px rgba(111, 126 ,206 , 17%);
// 第一个参数是x轴偏移量  第二个参数是y轴偏移量 第三个参数是模糊距离 第四个参数是阴影颜色
//  偏移量可以为0， 也可以是负数，负数代表反方向 
box-shadow: 0px 10px 5px #888888, -10px 10px 5px #888888;
// 设置多个阴影用 , 隔开

box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

 box-shadow:0 5px 12px 0 #E7E9EC;  （类似el-card的阴影）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css实现鼠标选中字体-字体样式改变" tabindex="-1"><a class="header-anchor" href="#css实现鼠标选中字体-字体样式改变" aria-hidden="true">#</a> css实现鼠标选中字体，字体样式改变</h2><p>这个可以用<code>::selection</code>来实现</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p&gt;这个是一段文字&lt;/p&gt;

p::selection{
  color:red     
  //文字选中时改变的样式
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css实现渐变色边框" tabindex="-1"><a class="header-anchor" href="#css实现渐变色边框" aria-hidden="true">#</a> css实现渐变色边框</h2>`,6),G={href:"https://juejin.cn/post/7017701121619656711",target:"_blank",rel:"noopener noreferrer"},H=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> border-top: 3px solid #55BEFB;
 border-image: linear-gradient(to right,#54BEFB,#289a47,#e74032,#68217a,#5197dd) 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图像填充文本" tabindex="-1"><a class="header-anchor" href="#图像填充文本" aria-hidden="true">#</a> <strong>图像填充文本</strong></h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>h6{
  background-image: url(&#39;images/dog.jpg&#39;);
  background-clip: text;
  color: transparent;
  background-color: red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css实现渐变色-彩色字体" tabindex="-1"><a class="header-anchor" href="#css实现渐变色-彩色字体" aria-hidden="true">#</a> css实现渐变色 彩色字体</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>30px<span class="token punctuation">;</span><span class="token property">font-size</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span><span class="token property">font-weight</span><span class="token punctuation">:</span>bold<span class="token punctuation">;</span><span class="token property">background</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span>#289a47<span class="token punctuation">,</span>#e74032<span class="token punctuation">,</span>#fcc522<span class="token punctuation">,</span>#68217a<span class="token punctuation">,</span>#5197dd<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token property">-webkit-background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span>transparent</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
        彩色字体
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

div{
	background:linear-gradient(to right,#289a47,#e74032,#fcc522,#68217a,#5197dd);
    -webkit-background-clip: text;  //  -webkit-  要带上，否则会有兼容问题
    color:transparent
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),N={href:"https://mp.weixin.qq.com/s/sqCc5ERhFdE7rmdcwJcFEQ",target:"_blank",rel:"noopener noreferrer"},P=e(`<h3 id="渐变字体被text-shadow遮挡问题" tabindex="-1"><a class="header-anchor" href="#渐变字体被text-shadow遮挡问题" aria-hidden="true">#</a> <strong>渐变字体被text-shadow遮挡问题:</strong></h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token selector">.top-title</span> <span class="token punctuation">{</span>

          <span class="token property">font-family</span><span class="token punctuation">:</span> HYYakuHei<span class="token punctuation">;</span>
          <span class="token property">font-size</span><span class="token punctuation">:</span> 70px<span class="token punctuation">;</span>
          <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
          <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 0em<span class="token punctuation">;</span>

          <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>180deg<span class="token punctuation">,</span> #FFFFFF 44%<span class="token punctuation">,</span> #95BFFF 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token property">-webkit-background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
          <span class="token property">-webkit-text-fill-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
          <span class="token property">background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
          <span class="token property">text-fill-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
          // <span class="token property">text-shadow</span><span class="token punctuation">:</span> 0px 4px 0px #1147A8<span class="token punctuation">;</span>
		  <span class="token selector">// text-shadow放到伪元素上,  content 是变色文字
          &amp;::before</span> <span class="token punctuation">{</span>
            <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;haohaohao&quot;</span><span class="token punctuation">;</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
            <span class="token property">text-shadow</span><span class="token punctuation">:</span> 0px 4px 0px #1147A8<span class="token punctuation">;</span>
            <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为文本添加描边效果" tabindex="-1"><a class="header-anchor" href="#为文本添加描边效果" aria-hidden="true">#</a> <strong>为文本添加描边效果</strong></h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> -webkit-text-stroke: 5px crimson;
 // 使用text-stroke属性可以使文本更清晰可见，因为会向文本添加描边笔触或轮廓。
  text-stroke: 5px crimson;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="渐变" tabindex="-1"><a class="header-anchor" href="#渐变" aria-hidden="true">#</a> <strong>渐变</strong></h2><p>渐变分为<code>线性渐变</code>、 径向渐变 ，在使用线性渐变的时候，使用<code>角度</code>以及<code>百分比</code>去控制渐变，会更加的灵活</p><h3 id="线性渐变使用方式" tabindex="-1"><a class="header-anchor" href="#线性渐变使用方式" aria-hidden="true">#</a> 线性渐变使用方式:</h3><p>background: linear-gradient（）用于设置线性渐变 <strong>（Linear Gradients）- 向下/向上/向左/向右/对角方向</strong></p><p>括号内容（方向，颜色1，颜色2，颜色3......）</p><p>方向可以是 to left, to right, to bottom right 等，也可以是角度 0deg, 90deg等。</p><p>颜色可以设置多个，支持设置透明度。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//渐变(方向)
background: linear-gradient(to right, rgba(255, 255, 255, 0),#3FB6F7,rgba(255,255,255,0));

//渐变(角度)
background: linear-gradient(88deg, #4DF7BF 0%, rgba(77, 247, 191, 0.26) 12%, rgba(77, 247, 191, 0) 100%);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>边框渐变:</p><p><code>border</code>有个<code>border-image</code>的属性，类似<code>background</code>也有个<code>background-image</code>一样,通过为其设置渐变颜色后，实现的渐变，后面的数字<code>4</code>为<code>x</code>方向偏移量</p><p>使用方式:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.border-grident{
  margin-top: 20px;
  width: 200px;
  height: 200px;
  border: 4px solid;
  border-image: linear-gradient(to right, #8f41e9, #578aef) 4;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="径向渐变使用方式" tabindex="-1"><a class="header-anchor" href="#径向渐变使用方式" aria-hidden="true">#</a> 径向渐变使用方式</h3><p>background-image: radial-gradient() 用于设置径向渐变 <strong>（Radial Gradients）- 由它们的中心定义</strong></p><p>括号内容（shape size at position, start-color, ..., last-color）</p><p>background-image: radial-gradient(red 5%, yellow 15%, green 60%);</p><p>颜色后加上百分比 颜色节点不均匀分布</p><p>shape设置形状</p><p>background-image: radial-gradient(circle, red, yellow, green);</p><p>形状设置的circle,呈圆形渐变</p><p>size 参数定义了渐变的大小。它可以是以下四个值：</p><ul><li><strong>closest-side</strong></li><li><strong>farthest-side</strong></li><li><strong>closest-corner</strong></li><li><strong>farthest-corner</strong></li></ul><p>at position设置中心位置</p><p>background-image: radial-gradient(closest-side at 50% 50%, red, yellow, black);</p><h2 id="css3-2d-转换" tabindex="-1"><a class="header-anchor" href="#css3-2d-转换" aria-hidden="true">#</a> css3 2D 转换</h2><p>transform</p><h4 id="translate-方法-用于平面移动位置" tabindex="-1"><a class="header-anchor" href="#translate-方法-用于平面移动位置" aria-hidden="true">#</a> translate() 方法 用于平面移动位置</h4><p>transform: translate(50px,100px); 根据左(X轴)和顶部(Y轴)位置给定的参数，从当前元素位置移动。</p><p>其中50px是距离左边的大小，100px是距离右边的大小，（只有两个参数）</p><h4 id="rotate-方法-用于平面旋转" tabindex="-1"><a class="header-anchor" href="#rotate-方法-用于平面旋转" aria-hidden="true">#</a> rotate() 方法 用于平面旋转</h4><p>transform: rotate(30deg); 在一个给定度数顺时针旋转的元素。负值是允许的，这样是元素逆时针旋转。</p><p>30deg是旋转的角度（只有一个参数）</p><h4 id="scale-方法-用于元素放大或缩小" tabindex="-1"><a class="header-anchor" href="#scale-方法-用于元素放大或缩小" aria-hidden="true">#</a> scale() 方法 用于元素放大或缩小</h4><p>transform: scale(2,3); /* 标准语法 */ 增加或减少的大小，取决于宽度（X轴）和高度（Y轴）的参数：</p><p>其中的2代表的是横向变化的倍数，3代表纵向变化的倍数</p><h4 id="skew-方法-用于元素的倾斜" tabindex="-1"><a class="header-anchor" href="#skew-方法-用于元素的倾斜" aria-hidden="true">#</a> skew() 方法 用于元素的倾斜</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>transform:skew(&lt;angle&gt; [,&lt;angle&gt;]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>包含两个参数值，分别表示X轴和Y轴倾斜的角度，如果第二个参数为空，则默认为0，参数为负表示向相反方向倾斜。</p><p>1 skewX();表示只在X轴(水平方向)倾斜。</p><p>2 skewY();表示只在Y轴(垂直方向)倾斜。</p><p>transform: skew(30deg,20deg); 元素在 <strong>X</strong> 轴和 <strong>Y</strong> 轴上倾斜 20 度 30 度。</p><h4 id="matrix-方法-2d变换方法合并成一个" tabindex="-1"><a class="header-anchor" href="#matrix-方法-2d变换方法合并成一个" aria-hidden="true">#</a> matrix() 方法 2D变换方法合并成一个</h4><p>有六个参数，包含旋转，缩放，移动（平移）和倾斜功能。</p><p>transform:matrix(0.866,0.5,-0.5,0.866,0,0);</p><h2 id="css-3d-转换" tabindex="-1"><a class="header-anchor" href="#css-3d-转换" aria-hidden="true">#</a> css 3D 转换</h2><h4 id="rotatex-围绕其在一个给定度数x轴旋转的元素。" tabindex="-1"><a class="header-anchor" href="#rotatex-围绕其在一个给定度数x轴旋转的元素。" aria-hidden="true">#</a> rotateX() 围绕其在一个给定度数X轴旋转的元素。</h4><p>transform: rotateX(120deg); 沿着x轴转动120度</p><h4 id="rotatey-围绕其在一个给定度数y轴旋转的元素。" tabindex="-1"><a class="header-anchor" href="#rotatey-围绕其在一个给定度数y轴旋转的元素。" aria-hidden="true">#</a> rotateY() 围绕其在一个给定度数Y轴旋转的元素。</h4><p>transform: rotateY(120deg); 沿着y轴转动120度</p><h2 id="css3-过渡" tabindex="-1"><a class="header-anchor" href="#css3-过渡" aria-hidden="true">#</a> css3 过渡</h2>`,54),A={href:"https://www.runoob.com/cssref/css3-pr-transition.html",target:"_blank",rel:"noopener noreferrer"},D=n("th",null,"简写属性，用于在一个属性中设置四个过渡属性。",-1),X=n("th",null,"3",-1),L={href:"https://www.runoob.com/cssref/css3-pr-transition-property.html",target:"_blank",rel:"noopener noreferrer"},O=n("td",null,"规定应用过渡的 CSS 属性的名称。",-1),V=n("td",null,"3",-1),U={href:"https://www.runoob.com/cssref/css3-pr-transition-duration.html",target:"_blank",rel:"noopener noreferrer"},I=n("td",null,"定义过渡效果花费的时间。默认是 0。",-1),J=n("td",null,"3",-1),M={href:"https://www.runoob.com/cssref/css3-pr-transition-timing-function.html",target:"_blank",rel:"noopener noreferrer"},W=n("td",null,'规定过渡效果的时间曲线。默认是 "ease"。',-1),$=n("td",null,"3",-1),R={href:"https://www.runoob.com/cssref/css3-pr-transition-delay.html",target:"_blank",rel:"noopener noreferrer"},Q=n("td",null,"规定过渡效果何时开始。默认是 0。",-1),K=n("td",null,"3",-1),Z=e('<blockquote><p>transition-property: width;</p><p>transition-duration: 1s;</p><p>transition-timing-function: linear;</p><p>transition-delay: 2s;</p></blockquote><p>等效于</p><blockquote><p>transition: width 1s linear 2s;</p></blockquote><p>transition-timing-function的可取值如下表所示</p><table><thead><tr><th style="text-align:left;">值</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">linear</td><td style="text-align:left;">规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。</td></tr><tr><td style="text-align:left;">ease</td><td style="text-align:left;">规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。</td></tr><tr><td style="text-align:left;">ease-in</td><td style="text-align:left;">规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。</td></tr><tr><td style="text-align:left;">ease-out</td><td style="text-align:left;">规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。</td></tr><tr><td style="text-align:left;">ease-in-out</td><td style="text-align:left;">规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。</td></tr><tr><td style="text-align:left;">cubic-bezier(<em>n</em>,<em>n</em>,<em>n</em>,<em>n</em>)</td><td style="text-align:left;">在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。</td></tr></tbody></table><h2 id="css3-动画" tabindex="-1"><a class="header-anchor" href="#css3-动画" aria-hidden="true">#</a> CSS3 动画</h2>',6),nn=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"属性"),n("th",{style:{"text-align":"left"}},"描述"),n("th",{style:{"text-align":"left"}},"CSS")])],-1),sn={style:{"text-align":"left"}},an={href:"https://www.runoob.com/cssref/css3-pr-animation-keyframes.html",target:"_blank",rel:"noopener noreferrer"},tn=n("td",{style:{"text-align":"left"}},"规定动画。",-1),en=n("td",{style:{"text-align":"left"}},"3",-1),pn={style:{"text-align":"left"}},ln={href:"https://www.runoob.com/cssref/css3-pr-animation.html",target:"_blank",rel:"noopener noreferrer"},on=n("td",{style:{"text-align":"left"}},"所有动画属性的简写属性。",-1),cn=n("td",{style:{"text-align":"left"}},"3",-1),un={style:{"text-align":"left"}},rn={href:"https://www.runoob.com/cssref/css3-pr-animation-name.html",target:"_blank",rel:"noopener noreferrer"},dn=n("td",{style:{"text-align":"left"}},"规定 @keyframes 动画的名称。",-1),vn=n("td",{style:{"text-align":"left"}},"3",-1),kn={style:{"text-align":"left"}},mn={href:"https://www.runoob.com/cssref/css3-pr-animation-duration.html",target:"_blank",rel:"noopener noreferrer"},bn=n("td",{style:{"text-align":"left"}},"规定动画完成一个周期所花费的秒或毫秒。默认是 0。",-1),gn=n("td",{style:{"text-align":"left"}},"3",-1),hn={style:{"text-align":"left"}},fn={href:"https://www.runoob.com/cssref/css3-pr-animation-timing-function.html",target:"_blank",rel:"noopener noreferrer"},xn=n("td",{style:{"text-align":"left"}},'规定动画的速度曲线。默认是 "ease"。',-1),_n=n("td",{style:{"text-align":"left"}},"3",-1),yn={style:{"text-align":"left"}},wn={href:"https://www.runoob.com/cssref/css3-pr-animation-fill-mode.html",target:"_blank",rel:"noopener noreferrer"},qn=n("td",{style:{"text-align":"left"}},"规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。",-1),Sn=n("td",{style:{"text-align":"left"}},"3",-1),Cn={style:{"text-align":"left"}},En={href:"https://www.runoob.com/cssref/css3-pr-animation-delay.html",target:"_blank",rel:"noopener noreferrer"},jn=n("td",{style:{"text-align":"left"}},"规定动画何时开始。默认是 0。",-1),zn=n("td",{style:{"text-align":"left"}},"3",-1),Tn={style:{"text-align":"left"}},Bn={href:"https://www.runoob.com/cssref/css3-pr-animation-iteration-count.html",target:"_blank",rel:"noopener noreferrer"},Fn=n("td",{style:{"text-align":"left"}},"规定动画被播放的次数。默认是 1。",-1),Yn=n("td",{style:{"text-align":"left"}},"3",-1),Gn={style:{"text-align":"left"}},Hn={href:"https://www.runoob.com/cssref/css3-pr-animation-direction.html",target:"_blank",rel:"noopener noreferrer"},Nn=n("td",{style:{"text-align":"left"}},'规定动画是否在下一周期逆向地播放。默认是 "normal"。',-1),Pn=n("td",{style:{"text-align":"left"}},"3",-1),An={style:{"text-align":"left"}},Dn={href:"https://www.runoob.com/cssref/css3-pr-animation-play-state.html",target:"_blank",rel:"noopener noreferrer"},Xn=n("td",{style:{"text-align":"left"}},'规定动画是否正在运行或暂停。默认是 "running"。',-1),Ln=n("td",{style:{"text-align":"left"}},"3",-1),On=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 以下是最通常的用法

div{
    animation: myName 5s;
    //  myName 指的是@keyframes后面的名字   5s指的是动画持续的事件
}

@keyframes myfirst
{
    from {background: red;}    // 从什么样式开始
    to {background: yellow;}   //  到什么样式结束
}
@keyframes myfirst
{
    0% {background: red;}    
    25% {background: yellow;} 
    50% {background: yellow;}  
    75% {background: yellow;}  
    100% {background: yellow;}  
    //  用百分比表示动画运行到百分比时间时的样式
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>animation-timing-function:linear;</p><p>animation-timing-function使用的数学函数，称为三次贝塞尔曲线，速度曲线。使用此函数，您可以使用您自己的值，或使用预先定义的值之一：</p>`,3),Vn=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}}),n("th",{style:{"text-align":"left"}}),n("th",{style:{"text-align":"left"}})])],-1),Un=n("tr",null,[n("td",{style:{"text-align":"left"}},"值"),n("td",{style:{"text-align":"left"}},"描述"),n("td",{style:{"text-align":"left"}},"测试")],-1),In=n("td",{style:{"text-align":"left"}},"linear",-1),Jn=n("td",{style:{"text-align":"left"}},"动画从头到尾的速度是相同的。",-1),Mn={style:{"text-align":"left"}},Wn={href:"https://www.runoob.com/try/playit.php?f=animation-timing-function&preval=linear",target:"_blank",rel:"noopener noreferrer"},$n=n("td",{style:{"text-align":"left"}},"ease",-1),Rn=n("td",{style:{"text-align":"left"}},"默认。动画以低速开始，然后加快，在结束前变慢。",-1),Qn={style:{"text-align":"left"}},Kn={href:"https://www.runoob.com/try/playit.php?f=animation-timing-function&preval=ease",target:"_blank",rel:"noopener noreferrer"},Zn=n("td",{style:{"text-align":"left"}},"ease-in",-1),ns=n("td",{style:{"text-align":"left"}},"动画以低速开始。",-1),ss={style:{"text-align":"left"}},as={href:"https://www.runoob.com/try/playit.php?f=animation-timing-function&preval=ease-in",target:"_blank",rel:"noopener noreferrer"},ts=n("td",{style:{"text-align":"left"}},"ease-out",-1),es=n("td",{style:{"text-align":"left"}},"动画以低速结束。",-1),ps={style:{"text-align":"left"}},is={href:"https://www.runoob.com/try/playit.php?f=animation-timing-function&preval=ease-out",target:"_blank",rel:"noopener noreferrer"},ls=n("td",{style:{"text-align":"left"}},"ease-in-out",-1),os=n("td",{style:{"text-align":"left"}},"动画以低速开始和结束。",-1),cs={style:{"text-align":"left"}},us={href:"https://www.runoob.com/try/playit.php?f=animation-timing-function&preval=ease-in-out",target:"_blank",rel:"noopener noreferrer"},rs=n("tr",null,[n("td",{style:{"text-align":"left"}},"steps(int,start|end)"),n("td",{style:{"text-align":"left"}},"指定了时间函数中的间隔数量（步长）。有两个参数，第一个参数指定函数的间隔数，该参数是一个正整数（大于 0）。 第二个参数是可选的，表示动画是从时间段的开头连续还是末尾连续。含义分别如下：start：表示直接开始。end：默认值，表示戛然而止。"),n("td",{style:{"text-align":"left"}})],-1),ds=n("tr",null,[n("td",{style:{"text-align":"left"}},[s("cubic-bezier("),n("em",null,"n"),s(","),n("em",null,"n"),s(","),n("em",null,"n"),s(","),n("em",null,"n"),s(")")]),n("td",{style:{"text-align":"left"}},"在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。"),n("td",{style:{"text-align":"left"}})],-1),vs=e(`<h2 id="background-size-cover和contain以及100" tabindex="-1"><a class="header-anchor" href="#background-size-cover和contain以及100" aria-hidden="true">#</a> background-size：cover和contain以及100%**</h2><p><code>contain</code>:<strong>图片放大至满足背景区域的最小边即止</strong>，当背景区域与背景图片的宽高比不一致的情况下，<strong>背景区域可能会长边下有空白覆盖不全</strong>。<code>cover</code>:<strong>图片放大至能满足最大变时为止</strong>，当背景区域与背景图片的宽高比不一致时，<strong>背景图片会在短边下有裁切，显示不全</strong>。</p><p><code>百分比</code>:可以设置两个值</p><ul><li><p>第一个设置宽度，第二个设置高度</p></li><li><p>如果只设置了一个值，那么第二个值默认会被设置为<code>auto</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>body {
    /* 加载背景图 */
    background-image: url(images/bg.jpg);
    /* 背景图垂直、水平均居中 */
    background-position: center center;
    /* 背景图不平铺 */
    background-repeat: no-repeat;
    /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
    background-attachment: fixed;
    /* 让背景图基于容器大小伸缩 */
    background-size: cover;
    /* 设置背景颜色，背景图加载过程中会显示背景色 */
    background-color: #464646;
    
    
     background-image: url(/static/background.png);
  background-repeat: no-repeat;
  background-position-x: 0;
  background-position-y: 0;
  background-size: 100% auto;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="elementui样式修改的方式" tabindex="-1"><a class="header-anchor" href="#elementui样式修改的方式" aria-hidden="true">#</a> <strong>elementui样式修改的方式:</strong></h2><h4 id="样式穿透" tabindex="-1"><a class="header-anchor" href="#样式穿透" aria-hidden="true">#</a> 样式穿透</h4><p><code>vue</code>项目中，在修改<code>elementui</code>的样式时通常使用样式穿透，<code>style</code>使用<code>css</code>的预处理器(<code>less</code>, <code>sass</code>, <code>scss</code>)等， 即</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style lang=&quot;less&quot; scoped&gt;
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>主要的样式穿透如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. &gt;&gt;&gt;
适用与 css、stylus，不太推荐，可能会有问题
外层类 &gt;&gt;&gt; 想要修改类名 {
修改样式
}

2. /deep/
适用于 scss、less
外层类 /deep/ 想要修改类名 {
修改样式
}

3. ::v-deep
通用，据说可以加快编译速度
::deep 想要修改类名 {
修改样式
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),ks={href:"https://blog.csdn.net/Yukinoshita_kino/article/details/117259198",target:"_blank",rel:"noopener noreferrer"},ms=e(`<h4 id="使用样式穿透还是无效" tabindex="-1"><a class="header-anchor" href="#使用样式穿透还是无效" aria-hidden="true">#</a> 使用样式穿透还是无效</h4><p>有时会发现使用了以上方法修改 element 组件样式还是会不生效，对于这种情况可以重写一个style标签，在style标签里对需要穿透的样式进行修改</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;a-input class=&quot;search-out&quot; allow-clear /&gt;

&lt;style lang=&quot;less&quot; scoped&gt;
&lt;/style&gt;
&lt;style lang=&quot;less&quot;&gt;
   // 对于组件年内样式穿透不生效的，去掉scoped
   .search-out{
    .ant-input{
        border: 0px ;
        border-radius: 8px;

    }

    .ant-select-selection{
        border: 0px ;
        border-radius: 8px;
    }

}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="el-cascader-panel修改样式" tabindex="-1"><a class="header-anchor" href="#el-cascader-panel修改样式" aria-hidden="true">#</a> el-cascader-panel修改样式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style lang=&quot;less&quot;&gt;
.el-cascader-node__label {
    color: #2e65fd;
}
.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #2e65fd;
    border-color: #2e65fd;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-改变网页的滚动条样式" tabindex="-1"><a class="header-anchor" href="#css-改变网页的滚动条样式" aria-hidden="true">#</a> css 改变网页的滚动条样式</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  background-color: #f5f5f5;
  width: 5px;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #f5f5f5;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px 6px rgba(0, 0, 0, 0.3);
  background-color: #ddd;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),bs={href:"https://blog.csdn.net/qq_42611074/article/details/120674761",target:"_blank",rel:"noopener noreferrer"},gs=e(`<p>不显示滚动条</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>::-webkit-scrollbar {
        width: 0px;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),hs={href:"https://www.php.cn/faq/477233.html",target:"_blank",rel:"noopener noreferrer"},fs=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`::-webkit-scrollbar {display:none}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),xs={href:"https://mp.weixin.qq.com/s/qiPO46N-wrYCfO9nHMdACw",target:"_blank",rel:"noopener noreferrer"},_s=n("h2",{id:"vue-项目引入animate-css",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-项目引入animate-css","aria-hidden":"true"},"#"),s(" vue 项目引入animate.css")],-1),ys={href:"https://animate.style/",target:"_blank",rel:"noopener noreferrer"},ws=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install animate.css --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>main.js(全局引入，也可局部页面引入)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import animate from &quot;animate.css&quot;;

Vue.use(animate)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在需要动画的页面加入相关类名</p><p>class里面要加入animate__animated，否则样式可能不生效，样式效果参考官网</p><p>animate__animated 中间有两条下划线（注意）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div  class=&quot;animate__animated animate__bounce &quot;&gt;  bounce 动画&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="vue通过事件修改dom的样式" tabindex="-1"><a class="header-anchor" href="#vue通过事件修改dom的样式" aria-hidden="true">#</a> Vue通过事件修改dom的样式</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div ref=&quot;animate&quot; &gt;  123456 &lt;/div&gt;
&lt;div @click=&quot;changeColor&quot;&gt;改变颜色&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>changeColor(){
  this.$refs.animate.style.color=&quot;red&quot;   //  修改style样式
  this.$refs.animate.className=&quot;reds&quot;    //  修改类名
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style&gt;
.reds{
  color:red
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-字体" tabindex="-1"><a class="header-anchor" href="#css-字体" aria-hidden="true">#</a> css 字体</h2><p>下载字体文件如： --.ttf , --.otf ， 优设标题黑.ttf</p><p>@font-face 设置字体名，引入字体文件， 类名引用font-family</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>

  <span class="token property">font-family</span><span class="token punctuation">:</span><span class="token string">&quot;YouSheBiaoTiHei&quot;</span><span class="token punctuation">;</span>

  <span class="token property">src</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;../font/优设标题黑.ttf&quot;</span><span class="token punctuation">)</span></span>

<span class="token punctuation">}</span>

<span class="token selector">.font</span><span class="token punctuation">{</span>
	<span class="token property">font-family</span><span class="token punctuation">:</span> YouSheBiaoTiHei<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="阿里巴巴图标库" tabindex="-1"><a class="header-anchor" href="#阿里巴巴图标库" aria-hidden="true">#</a> 阿里巴巴图标库</h2>`,16),qs={href:"https://www.iconfont.cn/?spm=a313x.7781069.1998910419.d4d0a486a",target:"_blank",rel:"noopener noreferrer"},Ss=e(`<p>**推荐使用svg引入，能够保全图标的颜色，但svg兼容性不如另外的引入方式。**使用另两种可能图标颜色失效。（Unicode 引用和font class 引入的 iconfont 基础样式一定要有，否则不生效）每次增加或删除图标时，记得及时更新css代码</p><h3 id="unicode-引用" tabindex="-1"><a class="header-anchor" href="#unicode-引用" aria-hidden="true">#</a> Unicode 引用</h3><p>复制代码到 iconfont.css 文件，加入icontfont 类样式，否则图标显示不出来 index页面引入</p><p>css代码内要补齐路径的协议名，否则可能不生效，类似</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;iconfont&quot;</span><span class="token punctuation">;</span> <span class="token comment">/* Project id 3282941 */</span>
  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;//at.alicdn.com/t/c/font_3282941_jbr83zz08v.woff2?t=1673325748491&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;woff2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;//at.alicdn.com/t/c/font_3282941_jbr83zz08v.woff?t=1673325748491&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;woff&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;//at.alicdn.com/t/c/font_3282941_jbr83zz08v.ttf?t=1673325748491&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;truetype&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.iconfont</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;iconfont&quot;</span> <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
  <span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> antialiased<span class="token punctuation">;</span>
  <span class="token property">-moz-osx-font-smoothing</span><span class="token punctuation">:</span> grayscale<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>的要补齐url路径，如下：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;iconfont&#39;</span><span class="token punctuation">;</span>
    <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;https://at.alicdn.com/t/c/font_3282941_jbr83zz08v.woff2?t=1673325748491&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;woff2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;https://at.alicdn.com/t/c/font_3282941_jbr83zz08v.woff?t=1673325748491&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;woff&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;https://at.alicdn.com/t/c/font_3282941_jbr83zz08v.ttf?t=1673325748491&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;truetype&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.iconfont</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;iconfont&quot;</span> <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
  <span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> antialiased<span class="token punctuation">;</span>
  <span class="token property">-moz-osx-font-smoothing</span><span class="token punctuation">:</span> grayscale<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;./iconfont.css&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>span标签内容从网页中图标处复制</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;span class=&quot;iconfont&quot;&gt;&amp;#xe66c;&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="font-class-引入" tabindex="-1"><a class="header-anchor" href="#font-class-引入" aria-hidden="true">#</a> font class 引入</h3><p>打开font class页面，复制代码到 iconfont.css 文件，index页面引入</p><p>注意复制的css代码补如上 Unicode 引用 要补齐协议名，否则可能不生效</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./iconfont.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如下使用图标：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>iconfont icon-xxx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="svg引入" tabindex="-1"><a class="header-anchor" href="#svg引入" aria-hidden="true">#</a> svg引入</h3><p>打开代码页，复制代码到 svg.js 文件，index页面引入js文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script src=&quot;./svg.js&quot;&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>加入通用 CSS 的icon样式代码（引入一次就行）：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.icon</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> -0.15em<span class="token punctuation">;</span>
  <span class="token property">fill</span><span class="token punctuation">:</span> currentColor<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>svg标签使用</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#icon-xxx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>use</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单个图标引入-svg" tabindex="-1"><a class="header-anchor" href="#单个图标引入-svg" aria-hidden="true">#</a> 单个图标引入（svg）</h3><p>点击图标下载按钮，复制svg代码，新建 icon.svg 文件，粘贴代码</p><p>index页面，使用 img 标签引入svg文件即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;img src=&quot;./gpu.svg&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="下载后引入" tabindex="-1"><a class="header-anchor" href="#下载后引入" aria-hidden="true">#</a> 下载后引入</h3><p>下载时，点项目设置，字体格式要勾选 base64，</p><p>将下载后的css文件引入到要用的页面里，如上设置图标即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;span class=&quot;iconfont icon-***&quot;&gt;&lt;/span&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="css跑马灯效果-图片跑马灯和文字跑马灯" tabindex="-1"><a class="header-anchor" href="#css跑马灯效果-图片跑马灯和文字跑马灯" aria-hidden="true">#</a> css跑马灯效果(图片跑马灯和文字跑马灯)</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>css try<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.box</span> <span class="token punctuation">{</span>
            <span class="token comment">/* 我们不想看到超出盒子范围的图片，因此需要overflow：hidden；进行隐藏 */</span>
            <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
            <span class="token comment">/* 子绝父相，对div盒子设置相对定位 */</span>
            <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
            <span class="token comment">/*设置可见部分长度*/</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 100px auto<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token selector">.box:hover ul</span> <span class="token punctuation">{</span>
            <span class="token comment">/* 当鼠标放在图片上的时候能够暂停动画 */</span>
            <span class="token property">animation-play-state</span><span class="token punctuation">:</span> paused<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token selector">ul</span> <span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
             <span class="token comment">/*width设置所有图片加在一起的长度*/</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 2600px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
            <span class="token property">animation</span><span class="token punctuation">:</span> run 5s infinite linear<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token selector">li</span> <span class="token punctuation">{</span>
            <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
            <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token selector">img</span> <span class="token punctuation">{</span>
            <span class="token comment">/* 设置一张图片的宽度高度 */</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token atrule"><span class="token rule">@keyframes</span> run</span> <span class="token punctuation">{</span>
            <span class="token selector">0%</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">100%</span> <span class="token punctuation">{</span>
                <span class="token comment">/* 轮播宽度还是按照原来的9张图片进行设置 这样在播完9张图片后就会跳转回第一张*/</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-1800px<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        
        <span class="token selector">#box2</span> <span class="token punctuation">{</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #eee<span class="token punctuation">;</span>
            <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid skyblue<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 100px auto<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> red
        <span class="token punctuation">}</span>
        
        <span class="token atrule"><span class="token rule">@keyframes</span> moving</span> <span class="token punctuation">{</span>
            <span class="token selector">0%</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">100%</span> <span class="token punctuation">{</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span><span class="token function">calc</span><span class="token punctuation">(</span>400px - 100%<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        
        <span class="token selector">.text</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
            <span class="token property">min-width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
            <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
            <span class="token property">animation</span><span class="token punctuation">:</span> moving 15s infinite<span class="token punctuation">;</span>
            <span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./images/dot.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./images/dot.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./images/dot.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./images/dot.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./images/favicon.ico<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./images/favicon.ico<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./images/favicon.ico<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./images/favicon.ico<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./images/favicon.ico<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- 解决滚动问题的关键在于在最后加四张图片 使末尾留白有内容 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./images/dot.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./images/dot.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./images/dot.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./images/dot.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- 将末尾四张图换成一样的就能理解原理 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
     <span class="token comment">&lt;!-- 文字跑马灯 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>张三李斯王二麻子张三李斯王二麻子张三李斯王二麻子张三李斯王二麻子张三李斯王二麻子张三李斯王二麻子张三李斯王二麻子张三李斯王二麻子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文字底下加下滑线的样式" tabindex="-1"><a class="header-anchor" href="#文字底下加下滑线的样式" aria-hidden="true">#</a> 文字底下加下滑线的样式</h2><p>通过::before实现</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//  底下下滑线样式
 .work-active{
        // border-bottom:5px solid #00d5a6;
        // font-weight:600
        &amp;::before {
          position: absolute;
          width: 75px;
          content: &#39;&#39;;
          height: 6px;
          border-radius: 3px;
          bottom: 5px;
          background: linear-gradient(90deg, #00d793, #00cee0);
        }
      }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过::before ::after实现 左右底下都有下划线</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>底部 底下下滑线样式
&lt;div class=&quot;title-line-index&quot; &gt;
    &lt;span class=&quot;title-index &quot; &gt;智能推荐&lt;/span&gt;
    &lt;span  class=&quot;more-index &quot;&gt;more&gt;&gt;&lt;/span&gt;
&lt;/div&gt;

.title-line-index {
  padding: 10px 20px 15px 20px;
  display: flex;
  justify-content: space-between;
  color: #a1a1a1;
  position: relative;
  margin-bottom: 10px;

  .title-index {
    font-size: 18px;
    color: #000;
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  .more-index {
    cursor: pointer;
  }

  &amp;::before {
    position: absolute;
    width: 90px;
    content: &#39;&#39;;
    height: 6px;
    border-radius: 3px;
    bottom: 0px;
    background: linear-gradient(90deg, #00d793, #00cee0);
    z-index: 2;
  }

  &amp;::after {
    position: absolute;
    width: calc(100% - 30px);
    content: &#39;&#39;;
    height: 6px;
    border-radius: 3px;
    bottom: 0px;
    background: #f2f9f8;
    z-index: 1;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现页脚始终在页面底部" tabindex="-1"><a class="header-anchor" href="#实现页脚始终在页面底部" aria-hidden="true">#</a> 实现页脚始终在页面底部</h2>`,39),Cs={href:"https://www.jb51.net/css/838364.html",target:"_blank",rel:"noopener noreferrer"},Es=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;all-container&quot;&gt;
	&lt;div class=&quot;footers&quot; style=&quot;height:430px&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;style&gt;
.all-container{
  background:#f3f5f9;
  min-height:100vh;
  position:relative;
  padding-bottom:430px;  
}
.footers{
  position:absolute;
  width:100%;bottom:0;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现页面元素滚动到一定位置后的吸顶效果" tabindex="-1"><a class="header-anchor" href="#实现页面元素滚动到一定位置后的吸顶效果" aria-hidden="true">#</a> 实现页面元素滚动到一定位置后的吸顶效果</h2><p>1 <code>position:sticky</code> （简单方便，优先使用）</p><p>position:sticky可以在页面滚动到父元素的边缘的时候实现吸顶效果（父元素在屏幕上可以看见，只在父元素内才能生效）</p><p>2.使用js判断滚动距离，再用fixed定位</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav-sub <span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fixed == true ? &#39;fixed&#39; : &#39;&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            滚动内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>active-btn</span>
          <span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">fixed</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fixedActiveBtn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">fixedActiveBtn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> scrollTop <span class="token operator">=</span>
        window<span class="token punctuation">.</span>pageYOffset <span class="token operator">||</span>
        document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">||</span>
        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop
      scrollTop <span class="token operator">&gt;=</span> <span class="token number">120</span> <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>fixed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>fixed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.nav-sub</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 90px<span class="token punctuation">;</span>
  // <span class="token property">position</span><span class="token punctuation">:</span> sticky<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.fixed</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 10<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

// 原文链接：https://blog.csdn.net/weixin_45957275/article/details/120842008
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css实现聊天对话框" tabindex="-1"><a class="header-anchor" href="#css实现聊天对话框" aria-hidden="true">#</a> css实现聊天对话框</h2>`,7),js={href:"https://juejin.cn/post/7000250044976726024",target:"_blank",rel:"noopener noreferrer"},zs=n("h2",{id:"特殊效果-非必须css实现",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#特殊效果-非必须css实现","aria-hidden":"true"},"#"),s(" 特殊效果（非必须css实现）")],-1),Ts={href:"https://mp.weixin.qq.com/s/2t_3sgchJ50xUwYcH5Tgeg",target:"_blank",rel:"noopener noreferrer"},Bs=e(`<h3 id="类似chatgpt那种内容一个一个输出" tabindex="-1"><a class="header-anchor" href="#类似chatgpt那种内容一个一个输出" aria-hidden="true">#</a> 类似chatGpt那种内容一个一个输出</h3><p><strong>ai生成的讲解</strong></p><p>ChatGPT的逐字逐行回答效果是通过一种称为Server-Sent Events (SSE)的技术实现的。SSE是一种允许服务器主动向客户端推送数据的HTTP技术，它基于HTTP协议，但与WebSocket不同，SSE仅支持单向通信，即服务器向客户端推送消息，客户端不能主动向服务器发送消息。</p><p>在ChatGPT中，当用户输入内容后，服务器会开始处理请求，并在生成回答的过程中，逐步将生成的内容通过SSE推送给客户端。这样，客户端可以实时接收到服务器发送的文本片段，从而实现逐字逐行展示的效果。这种流式传输方式提高了用户体验，使得对话看起来更像是实时的、自然的对话。</p><p>实现这一功能的关键步骤通常包括：</p><ol><li><strong>客户端请求</strong>：客户端（如Web浏览器）通过HTTP GET请求向服务器发起请求，请求包含SSE支持的头部信息，如<code>Accept: text/event-stream</code>。</li><li><strong>服务器处理</strong>：服务器接收到请求后，开始处理用户的输入，并调用ChatGPT模型生成回答。在生成过程中，服务器会将每个生成的文本片段作为SSE事件发送回客户端。</li><li><strong>流式传输</strong>：服务器通过设置HTTP响应头，如<code>Content-Type: text/event-stream</code>和<code>Connection: keep-alive</code>，来维持长连接，并持续推送数据。每个数据片段前会有一个特殊的<code>data:</code>前缀。</li><li><strong>客户端接收与展示</strong>：客户端使用<code>EventSource</code>对象监听服务器的SSE流。每当接收到新的数据时，<code>EventSource</code>会触发<code>message</code>事件，客户端的JavaScript代码会解析这些数据，并将其逐字逐行显示在页面上。</li></ol><p>这种实现方式使得ChatGPT能够模拟出类似人类打字的交互体验，增强了对话的自然感和参与感。</p><p><strong>代码示例：</strong></p><p>node 服务器生成后台简易代码：</p><p>npm init -&gt; npm install express sse cors</p><p>在Node.js中，要实现SSE，你需要手动处理HTTP响应流，并在数据准备好时写入响应流。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> cors <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cors&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 用于解决本地浏览器跨域的问题</span>
<span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">3000</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 使用cors中间件处理CORS</span>
  <span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 检查请求的路径和方法</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>url <span class="token operator">===</span> <span class="token string">&#39;/chat&#39;</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 设置响应头</span>
      res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;text/event-stream&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;Cache-Control&#39;</span><span class="token operator">:</span> <span class="token string">&#39;no-cache&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;Connection&#39;</span><span class="token operator">:</span> <span class="token string">&#39;keep-alive&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 模拟ChatGPT的响应</span>
      <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token string">&quot;Hello, I&#39;m a chatbot. How can I help you?&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

      <span class="token comment">// 发送数据</span>
      <span class="token keyword">function</span> <span class="token function">sendChunk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> response<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> chunk <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          index<span class="token operator">++</span><span class="token punctuation">;</span>
          res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">data: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>chunk<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n\\n</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">// 如果是最后一个字符，结束响应并关闭连接</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> response<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token comment">// 继续发送下一个字符</span>
          <span class="token function">setTimeout</span><span class="token punctuation">(</span>sendChunk<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 每100毫秒发送一次</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 立即开始发送第一个字符</span>
      <span class="token function">sendChunk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果不是SSE请求，返回404</span>
      res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Server running at http://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.html 展示文字生成</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>SSE Chat<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;DOMContentLoaded&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义一个变量来存储EventSource对象</span>
    <span class="token keyword">var</span> eventSource<span class="token punctuation">;</span>

    <span class="token comment">// 点击按钮时触发的函数</span>
    <span class="token keyword">function</span> <span class="token function">startChat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 关闭之前可能存在的连接</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>eventSource<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        eventSource<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 创建新的EventSource对象</span>
      eventSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventSource</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:3000/chat&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 当连接打开时触发</span>
      eventSource<span class="token punctuation">.</span><span class="token function-variable function">onopen</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Connection opened.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

      <span class="token comment">// 当接收到消息时触发</span>
      eventSource<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
        document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;chatOutput&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">+=</span> data<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

      <span class="token comment">// 当出现错误时触发</span>
      eventSource<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;EventSource failed:&#39;</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
        eventSource<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 获取按钮元素并绑定点击事件</span>
    <span class="token keyword">var</span> chatButton <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;startChatButton&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    chatButton<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> startChat<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>startChatButton<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Start Chat<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chatOutput<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function Fs(Ys,Gs){const a=c("ExternalLinkIcon");return l(),o("div",null,[p(`

 * @name: 东方凝洛
 * @Date: 2022-12-02 21:19:19
 * @msg: 
 * @param: 
 * @return: 
`),r,p(" icon: edit "),d,n("p",null,[n("a",v,[s("Grid网格布局实例 - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[n("a",k,[s("CSS Grid 网格布局教程 - 阮一峰的网络日志 (ruanyifeng.com)"),t(a)])]),n("p",null,[s("grid布局调试：["),n("a",m,[s("CSS Grid Generator (cssgrid-generator.netlify.app)"),t(a)])]),n("p",null,[n("a",b,[s("grid - CSS：层叠样式表 | MDN (mozilla.org)"),t(a)])]),n("p",null,[n("a",g,[s("CSS 网格布局 | 菜鸟教程 (runoob.com)"),t(a)])]),h,n("p",null,[s("毛玻璃生成网站"),n("a",f,[s("Glassmorphism CSS Generator | SquarePlanet | SquarePlanet (hype4.academy)"),t(a)])]),x,n("p",null,[n("a",_,[s("Clippy — CSS clip-path 生成器 (jiangweishan.com)"),t(a)])]),y,n("p",null,[n("a",w,[s("https://wweb.dev/resources/animated-css-background-generator"),t(a)])]),q,n("p",null,[n("a",S,[s("JS如何判断文字被ellipsis了？ 微信公众平台 (qq.com)"),t(a)])]),n("p",null,[s("CSS定制多行省略:"),n("a",C,[s("https://hai.li/2017/03/08/css-multiline-overflow-ellipsis.html"),t(a)])]),E,n("p",null,[s("[html div文字竖向显示,css怎么让文字竖着？-CSDN博客]("),n("a",j,[s("https://blog.csdn.net/weixin_29731589/article/details/117890453#:~:text=css设置文字竖着排列的方法：1、writing-mode"),t(a)]),s(" (设置对象书写方向)语法：writing-mode,%3A lr-tb、tb-rl参数：lr-tb：从左向右，从上往下 　tb-rl：从上往下，从右向左示例：css代码：di..._div文字竖排)")]),z,n("p",null,[s("CSS clip-path 生成器(多边形) "),n("a",T,[s("Clippy — CSS clip-path 生成器 (jiangweishan.com)"),t(a)])]),B,n("p",null,[n("a",F,[s("CSS给元素添加边框（样式、颜色、宽度）_css加边框-CSDN博客"),t(a)])]),Y,n("p",null,[n("a",G,[s("https://juejin.cn/post/7017701121619656711"),t(a)])]),H,n("p",null,[n("a",N,[s("CSS 两行文字两端对齐与字符间距的处理 (qq.com)"),t(a)])]),P,n("table",null,[n("thead",null,[n("tr",null,[n("th",null,[n("a",A,[s("transition"),t(a)])]),D,X])]),n("tbody",null,[n("tr",null,[n("td",null,[n("a",L,[s("transition-property"),t(a)])]),O,V]),n("tr",null,[n("td",null,[n("a",U,[s("transition-duration"),t(a)])]),I,J]),n("tr",null,[n("td",null,[n("a",M,[s("transition-timing-function"),t(a)])]),W,$]),n("tr",null,[n("td",null,[n("a",R,[s("transition-delay"),t(a)])]),Q,K])])]),Z,n("table",null,[nn,n("tbody",null,[n("tr",null,[n("td",sn,[n("a",an,[s("@keyframes"),t(a)])]),tn,en]),n("tr",null,[n("td",pn,[n("a",ln,[s("animation"),t(a)])]),on,cn]),n("tr",null,[n("td",un,[n("a",rn,[s("animation-name"),t(a)])]),dn,vn]),n("tr",null,[n("td",kn,[n("a",mn,[s("animation-duration"),t(a)])]),bn,gn]),n("tr",null,[n("td",hn,[n("a",fn,[s("animation-timing-function"),t(a)])]),xn,_n]),n("tr",null,[n("td",yn,[n("a",wn,[s("animation-fill-mode"),t(a)])]),qn,Sn]),n("tr",null,[n("td",Cn,[n("a",En,[s("animation-delay"),t(a)])]),jn,zn]),n("tr",null,[n("td",Tn,[n("a",Bn,[s("animation-iteration-count"),t(a)])]),Fn,Yn]),n("tr",null,[n("td",Gn,[n("a",Hn,[s("animation-direction"),t(a)])]),Nn,Pn]),n("tr",null,[n("td",An,[n("a",Dn,[s("animation-play-state"),t(a)])]),Xn,Ln])])]),On,n("table",null,[Vn,n("tbody",null,[Un,n("tr",null,[In,Jn,n("td",Mn,[n("a",Wn,[s("测试"),t(a)])])]),n("tr",null,[$n,Rn,n("td",Qn,[n("a",Kn,[s("测试"),t(a)])])]),n("tr",null,[Zn,ns,n("td",ss,[n("a",as,[s("测试"),t(a)])])]),n("tr",null,[ts,es,n("td",ps,[n("a",is,[s("测试"),t(a)])])]),n("tr",null,[ls,os,n("td",cs,[n("a",us,[s("测试"),t(a)])])]),rs,ds])]),vs,n("p",null,[n("a",ks,[s("the ＞＞＞ and /deep/ combinators have been deprecated. Use :deep() instead终端报该警告的解决办法_霜雪遥的博客-CSDN博客"),t(a)]),s(" (警告不影响正常运行)")]),ms,n("p",null,[n("a",bs,[s("css-滚动但不显示滚动条的两种写法_css不显示滚动条但可以滚动_永远不会太晚的博客-CSDN博客"),t(a)])]),gs,n("p",null,[n("a",hs,[s("https://www.php.cn/faq/477233.html"),t(a)])]),fs,n("p",null,[n("a",xs,[s("裁剪的3种方式，CSS 如何隐藏移动端的滚动条？ (qq.com)"),t(a)])]),_s,n("p",null,[n("a",ys,[s("Animate.css | A cross-browser library of CSS animations."),t(a)])]),ws,n("p",null,[n("a",qs,[s("iconfont-阿里巴巴矢量图标库"),t(a)])]),Ss,n("p",null,[n("a",Cs,[s("css让页脚保持在底部位置的四种方案_CSS教程_CSS_网页制作_脚本之家 (jb51.net)"),t(a)])]),Es,n("p",null,[n("a",js,[s("css实现聊天对话框 - 掘金 (juejin.cn)"),t(a)])]),zs,n("p",null,[n("a",Ts,[s("为什么ChatGPT采用SSE协议而不是Websocket？ (qq.com)"),t(a)])]),Bs])}const Ps=i(u,[["render",Fs],["__file","2.html.vue"]]);export{Ps as default};
