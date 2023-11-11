import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as o,d as i,a as n,b as s,e as t,f as e,r as c}from"./app.3011b79a.js";const u={},d=n("hr",null,null,-1),r=e('<p>date: 2022-01-02 category:</p><ul><li>css tag:</li><li>css</li><li>less</li><li>scss star: true</li></ul><hr><h1 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> css</h1><h2 id="grid布局" tabindex="-1"><a class="header-anchor" href="#grid布局" aria-hidden="true">#</a> grid布局</h2>',5),v={href:"https://juejin.cn/post/6844903967701336072",target:"_blank",rel:"noopener noreferrer"},k={href:"http://ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://cssgrid-generator.netlify.app/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.runoob.com/css3/css-grid.html",target:"_blank",rel:"noopener noreferrer"},h=e(`<p>基本使用</p><p>画出一个3行，2列的表格布局，间隙为 10px;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.parent {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="毛玻璃效果" tabindex="-1"><a class="header-anchor" href="#毛玻璃效果" aria-hidden="true">#</a> 毛玻璃效果</h2><p><code>backdrop-filter: blur(6px);</code></p><h2 id="input样式修改" tabindex="-1"><a class="header-anchor" href="#input样式修改" aria-hidden="true">#</a> input样式修改</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input placeholder-style=&quot;color: #dfdfdf&quot;  class=&quot;input&quot; type=&quot;text&quot; placeholder=&quot;请输入账号&quot; maxlength=&quot;30&quot; /&gt;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文字溢出省略号" tabindex="-1"><a class="header-anchor" href="#文字溢出省略号" aria-hidden="true">#</a> <strong>文字溢出省略号</strong></h2><p>文字单行溢出:</p><p><code>overflow: hidden; // 溢出隐藏</code><br><code>text-overflow: ellipsis; // 溢出用省略号显示</code><br><code>white-space: nowrap; // 规定段落中的文本不进行换行</code></p><p>多行文字溢出:</p><p><code>overflow: hidden; // 溢出隐藏 </code><br><code>text-overflow: ellipsis; // 溢出用省略号显示 </code><br><code>display:-webkit-box; // 作为弹性伸缩盒子模型显示。 </code><br><code>-webkit-box-orient:vertical; // 设置伸缩盒子的子元素排列方式：从上到下垂直排列 </code><br><code>-webkit-line-clamp:3; // 显示的行数 </code></p>`,18),f={href:"https://mp.weixin.qq.com/s/kt3gCLrXcVmiaVoHsvEvNg",target:"_blank",rel:"noopener noreferrer"},x=e(`<h2 id="页面平滑滚动" tabindex="-1"><a class="header-anchor" href="#页面平滑滚动" aria-hidden="true">#</a> 页面平滑滚动</h2><p><code>scroll-behavior： smooth</code></p><h2 id="css变量" tabindex="-1"><a class="header-anchor" href="#css变量" aria-hidden="true">#</a> <strong>css变量</strong></h2><p><strong>CSS变量</strong>又称<strong>CSS自定义属性</strong>，通过在<code>css</code>中自定义属性<code>--var</code>与函数<code>var()</code>组成，<code>var()</code>用于引用自定义属性。谈到为何会在<code>CSS</code>中使用变量，以下使用一个示例讲述。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">:</span>root <span class="token punctuation">{</span>
 <span class="token operator">--</span>c<span class="token operator">-</span>color<span class="token operator">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>title <span class="token punctuation">{</span>
 background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>c<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css文字分散对齐" tabindex="-1"><a class="header-anchor" href="#css文字分散对齐" aria-hidden="true">#</a> css文字分散对齐</h2><p><code>text-align-last:justify</code></p><h2 id="css画三角形" tabindex="-1"><a class="header-anchor" href="#css画三角形" aria-hidden="true">#</a> css画三角形</h2><p>// 根据对border-color的修改来实现三角形 transparent可用于表示背景透明</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>width: 0;
height: 0;
border: 50px solid;
border-color: transparent transparent orangered transparent;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css阴影" tabindex="-1"><a class="header-anchor" href="#css阴影" aria-hidden="true">#</a> css阴影</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>box-shadow: 10px 10px 5px #888888;
box-shadow:0 16px 60px rgba(111, 126 ,206 , 17%);
// 第一个参数是x轴偏移量  第二个参数是y轴偏移量 第三个参数是模糊距离 第四个参数是阴影颜色
//  偏移量可以为0， 也可以是负数，负数代表反方向 
box-shadow: 0px 10px 5px #888888, -10px 10px 5px #888888;
// 设置多个阴影用 , 隔开

box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css实现鼠标选中字体-字体样式改变" tabindex="-1"><a class="header-anchor" href="#css实现鼠标选中字体-字体样式改变" aria-hidden="true">#</a> css实现鼠标选中字体，字体样式改变</h2><p>这个可以用<code>::selection</code>来实现</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p&gt;这个是一段文字&lt;/p&gt;

p::selection{
  color:red     
  //文字选中时改变的样式
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css实现渐变色-彩色字体" tabindex="-1"><a class="header-anchor" href="#css实现渐变色-彩色字体" aria-hidden="true">#</a> css实现渐变色 彩色字体</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>30px<span class="token punctuation">;</span><span class="token property">font-size</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span><span class="token property">font-weight</span><span class="token punctuation">:</span>bold<span class="token punctuation">;</span><span class="token property">background</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span>#289a47<span class="token punctuation">,</span>#e74032<span class="token punctuation">,</span>#fcc522<span class="token punctuation">,</span>#68217a<span class="token punctuation">,</span>#5197dd<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token property">-webkit-background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span>transparent</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
        彩色字体
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

div{
	background:linear-gradient(to right,#289a47,#e74032,#fcc522,#68217a,#5197dd);
    -webkit-background-clip: text;  //  -webkit-  要带上，否则会有兼容问题
    color:transparent
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),_={href:"https://mp.weixin.qq.com/s/sqCc5ERhFdE7rmdcwJcFEQ",target:"_blank",rel:"noopener noreferrer"},y=e(`<h2 id="渐变" tabindex="-1"><a class="header-anchor" href="#渐变" aria-hidden="true">#</a> <strong>渐变</strong></h2><p>渐变分为<code>线性渐变</code>、 径向渐变 ，在使用线性渐变的时候，使用<code>角度</code>以及<code>百分比</code>去控制渐变，会更加的灵活</p><h3 id="线性渐变使用方式" tabindex="-1"><a class="header-anchor" href="#线性渐变使用方式" aria-hidden="true">#</a> 线性渐变使用方式:</h3><p>background: linear-gradient（）用于设置线性渐变 <strong>（Linear Gradients）- 向下/向上/向左/向右/对角方向</strong></p><p>括号内容（方向，颜色1，颜色2，颜色3......）</p><p>方向可以是 to left, to right, to bottom right 等，也可以是角度 0deg, 90deg等。</p><p>颜色可以设置多个，支持设置透明度。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//渐变(方向)
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>包含两个参数值，分别表示X轴和Y轴倾斜的角度，如果第二个参数为空，则默认为0，参数为负表示向相反方向倾斜。</p><p>1 skewX();表示只在X轴(水平方向)倾斜。</p><p>2 skewY();表示只在Y轴(垂直方向)倾斜。</p><p>transform: skew(30deg,20deg); 元素在 <strong>X</strong> 轴和 <strong>Y</strong> 轴上倾斜 20 度 30 度。</p><h4 id="matrix-方法-2d变换方法合并成一个" tabindex="-1"><a class="header-anchor" href="#matrix-方法-2d变换方法合并成一个" aria-hidden="true">#</a> matrix() 方法 2D变换方法合并成一个</h4><p>有六个参数，包含旋转，缩放，移动（平移）和倾斜功能。</p><p>transform:matrix(0.866,0.5,-0.5,0.866,0,0);</p><h2 id="css-3d-转换" tabindex="-1"><a class="header-anchor" href="#css-3d-转换" aria-hidden="true">#</a> css 3D 转换</h2><h4 id="rotatex-围绕其在一个给定度数x轴旋转的元素。" tabindex="-1"><a class="header-anchor" href="#rotatex-围绕其在一个给定度数x轴旋转的元素。" aria-hidden="true">#</a> rotateX() 围绕其在一个给定度数X轴旋转的元素。</h4><p>transform: rotateX(120deg); 沿着x轴转动120度</p><h4 id="rotatey-围绕其在一个给定度数y轴旋转的元素。" tabindex="-1"><a class="header-anchor" href="#rotatey-围绕其在一个给定度数y轴旋转的元素。" aria-hidden="true">#</a> rotateY() 围绕其在一个给定度数Y轴旋转的元素。</h4><p>transform: rotateY(120deg); 沿着y轴转动120度</p><h2 id="css3-过渡" tabindex="-1"><a class="header-anchor" href="#css3-过渡" aria-hidden="true">#</a> css3 过渡</h2>`,50),w={href:"https://www.runoob.com/cssref/css3-pr-transition.html",target:"_blank",rel:"noopener noreferrer"},q=n("th",null,"简写属性，用于在一个属性中设置四个过渡属性。",-1),S=n("th",null,"3",-1),z={href:"https://www.runoob.com/cssref/css3-pr-transition-property.html",target:"_blank",rel:"noopener noreferrer"},C=n("td",null,"规定应用过渡的 CSS 属性的名称。",-1),j=n("td",null,"3",-1),Y={href:"https://www.runoob.com/cssref/css3-pr-transition-duration.html",target:"_blank",rel:"noopener noreferrer"},N=n("td",null,"定义过渡效果花费的时间。默认是 0。",-1),X=n("td",null,"3",-1),E={href:"https://www.runoob.com/cssref/css3-pr-transition-timing-function.html",target:"_blank",rel:"noopener noreferrer"},B=n("td",null,'规定过渡效果的时间曲线。默认是 "ease"。',-1),D=n("td",null,"3",-1),T={href:"https://www.runoob.com/cssref/css3-pr-transition-delay.html",target:"_blank",rel:"noopener noreferrer"},V=n("td",null,"规定过渡效果何时开始。默认是 0。",-1),F=n("td",null,"3",-1),A=e('<blockquote><p>transition-property: width;</p><p>transition-duration: 1s;</p><p>transition-timing-function: linear;</p><p>transition-delay: 2s;</p></blockquote><p>等效于</p><blockquote><p>transition: width 1s linear 2s;</p></blockquote><p>transition-timing-function的可取值如下表所示</p><table><thead><tr><th style="text-align:left;">值</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">linear</td><td style="text-align:left;">规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。</td></tr><tr><td style="text-align:left;">ease</td><td style="text-align:left;">规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。</td></tr><tr><td style="text-align:left;">ease-in</td><td style="text-align:left;">规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。</td></tr><tr><td style="text-align:left;">ease-out</td><td style="text-align:left;">规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。</td></tr><tr><td style="text-align:left;">ease-in-out</td><td style="text-align:left;">规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。</td></tr><tr><td style="text-align:left;">cubic-bezier(<em>n</em>,<em>n</em>,<em>n</em>,<em>n</em>)</td><td style="text-align:left;">在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。</td></tr></tbody></table><h2 id="css3-动画" tabindex="-1"><a class="header-anchor" href="#css3-动画" aria-hidden="true">#</a> CSS3 动画</h2>',6),G=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"属性"),n("th",{style:{"text-align":"left"}},"描述"),n("th",{style:{"text-align":"left"}},"CSS")])],-1),U={style:{"text-align":"left"}},L={href:"https://www.runoob.com/cssref/css3-pr-animation-keyframes.html",target:"_blank",rel:"noopener noreferrer"},H=n("td",{style:{"text-align":"left"}},"规定动画。",-1),O=n("td",{style:{"text-align":"left"}},"3",-1),I={style:{"text-align":"left"}},P={href:"https://www.runoob.com/cssref/css3-pr-animation.html",target:"_blank",rel:"noopener noreferrer"},J=n("td",{style:{"text-align":"left"}},"所有动画属性的简写属性。",-1),M=n("td",{style:{"text-align":"left"}},"3",-1),R={style:{"text-align":"left"}},$={href:"https://www.runoob.com/cssref/css3-pr-animation-name.html",target:"_blank",rel:"noopener noreferrer"},Q=n("td",{style:{"text-align":"left"}},"规定 @keyframes 动画的名称。",-1),W=n("td",{style:{"text-align":"left"}},"3",-1),K={style:{"text-align":"left"}},Z={href:"https://www.runoob.com/cssref/css3-pr-animation-duration.html",target:"_blank",rel:"noopener noreferrer"},nn=n("td",{style:{"text-align":"left"}},"规定动画完成一个周期所花费的秒或毫秒。默认是 0。",-1),sn=n("td",{style:{"text-align":"left"}},"3",-1),an={style:{"text-align":"left"}},tn={href:"https://www.runoob.com/cssref/css3-pr-animation-timing-function.html",target:"_blank",rel:"noopener noreferrer"},en=n("td",{style:{"text-align":"left"}},'规定动画的速度曲线。默认是 "ease"。',-1),ln=n("td",{style:{"text-align":"left"}},"3",-1),pn={style:{"text-align":"left"}},on={href:"https://www.runoob.com/cssref/css3-pr-animation-fill-mode.html",target:"_blank",rel:"noopener noreferrer"},cn=n("td",{style:{"text-align":"left"}},"规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。",-1),un=n("td",{style:{"text-align":"left"}},"3",-1),dn={style:{"text-align":"left"}},rn={href:"https://www.runoob.com/cssref/css3-pr-animation-delay.html",target:"_blank",rel:"noopener noreferrer"},vn=n("td",{style:{"text-align":"left"}},"规定动画何时开始。默认是 0。",-1),kn=n("td",{style:{"text-align":"left"}},"3",-1),mn={style:{"text-align":"left"}},gn={href:"https://www.runoob.com/cssref/css3-pr-animation-iteration-count.html",target:"_blank",rel:"noopener noreferrer"},bn=n("td",{style:{"text-align":"left"}},"规定动画被播放的次数。默认是 1。",-1),hn=n("td",{style:{"text-align":"left"}},"3",-1),fn={style:{"text-align":"left"}},xn={href:"https://www.runoob.com/cssref/css3-pr-animation-direction.html",target:"_blank",rel:"noopener noreferrer"},_n=n("td",{style:{"text-align":"left"}},'规定动画是否在下一周期逆向地播放。默认是 "normal"。',-1),yn=n("td",{style:{"text-align":"left"}},"3",-1),wn={style:{"text-align":"left"}},qn={href:"https://www.runoob.com/cssref/css3-pr-animation-play-state.html",target:"_blank",rel:"noopener noreferrer"},Sn=n("td",{style:{"text-align":"left"}},'规定动画是否正在运行或暂停。默认是 "running"。',-1),zn=n("td",{style:{"text-align":"left"}},"3",-1),Cn=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 以下是最通常的用法

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>animation-timing-function:linear;</p><p>animation-timing-function使用的数学函数，称为三次贝塞尔曲线，速度曲线。使用此函数，您可以使用您自己的值，或使用预先定义的值之一：</p>`,3),jn=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}}),n("th",{style:{"text-align":"left"}}),n("th",{style:{"text-align":"left"}})])],-1),Yn=n("tr",null,[n("td",{style:{"text-align":"left"}},"值"),n("td",{style:{"text-align":"left"}},"描述"),n("td",{style:{"text-align":"left"}},"测试")],-1),Nn=n("td",{style:{"text-align":"left"}},"linear",-1),Xn=n("td",{style:{"text-align":"left"}},"动画从头到尾的速度是相同的。",-1),En={style:{"text-align":"left"}},Bn={href:"https://www.runoob.com/try/playit.php?f=animation-timing-function&preval=linear",target:"_blank",rel:"noopener noreferrer"},Dn=n("td",{style:{"text-align":"left"}},"ease",-1),Tn=n("td",{style:{"text-align":"left"}},"默认。动画以低速开始，然后加快，在结束前变慢。",-1),Vn={style:{"text-align":"left"}},Fn={href:"https://www.runoob.com/try/playit.php?f=animation-timing-function&preval=ease",target:"_blank",rel:"noopener noreferrer"},An=n("td",{style:{"text-align":"left"}},"ease-in",-1),Gn=n("td",{style:{"text-align":"left"}},"动画以低速开始。",-1),Un={style:{"text-align":"left"}},Ln={href:"https://www.runoob.com/try/playit.php?f=animation-timing-function&preval=ease-in",target:"_blank",rel:"noopener noreferrer"},Hn=n("td",{style:{"text-align":"left"}},"ease-out",-1),On=n("td",{style:{"text-align":"left"}},"动画以低速结束。",-1),In={style:{"text-align":"left"}},Pn={href:"https://www.runoob.com/try/playit.php?f=animation-timing-function&preval=ease-out",target:"_blank",rel:"noopener noreferrer"},Jn=n("td",{style:{"text-align":"left"}},"ease-in-out",-1),Mn=n("td",{style:{"text-align":"left"}},"动画以低速开始和结束。",-1),Rn={style:{"text-align":"left"}},$n={href:"https://www.runoob.com/try/playit.php?f=animation-timing-function&preval=ease-in-out",target:"_blank",rel:"noopener noreferrer"},Qn=n("tr",null,[n("td",{style:{"text-align":"left"}},"steps(int,start|end)"),n("td",{style:{"text-align":"left"}},"指定了时间函数中的间隔数量（步长）。有两个参数，第一个参数指定函数的间隔数，该参数是一个正整数（大于 0）。 第二个参数是可选的，表示动画是从时间段的开头连续还是末尾连续。含义分别如下：start：表示直接开始。end：默认值，表示戛然而止。"),n("td",{style:{"text-align":"left"}})],-1),Wn=n("tr",null,[n("td",{style:{"text-align":"left"}},[s("cubic-bezier("),n("em",null,"n"),s(","),n("em",null,"n"),s(","),n("em",null,"n"),s(","),n("em",null,"n"),s(")")]),n("td",{style:{"text-align":"left"}},"在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。"),n("td",{style:{"text-align":"left"}})],-1),Kn=e(`<h2 id="background-size-cover和contain以及100" tabindex="-1"><a class="header-anchor" href="#background-size-cover和contain以及100" aria-hidden="true">#</a> background-size：cover和contain以及100%**</h2><p><code>contain</code>:<strong>图片放大至满足背景区域的最小边即止</strong>，当背景区域与背景图片的宽高比不一致的情况下，<strong>背景区域可能会长边下有空白覆盖不全</strong>。<code>cover</code>:<strong>图片放大至能满足最大变时为止</strong>，当背景区域与背景图片的宽高比不一致时，<strong>背景图片会在短边下有裁切，显示不全</strong>。</p><p><code>百分比</code>:可以设置两个值</p><ul><li><p>第一个设置宽度，第二个设置高度</p></li><li><p>如果只设置了一个值，那么第二个值默认会被设置为<code>auto</code></p></li></ul><h2 id="elementui样式修改的方式" tabindex="-1"><a class="header-anchor" href="#elementui样式修改的方式" aria-hidden="true">#</a> <strong>elementui样式修改的方式:</strong></h2><h4 id="样式穿透" tabindex="-1"><a class="header-anchor" href="#样式穿透" aria-hidden="true">#</a> 样式穿透</h4><p><code>vue</code>项目中，在修改<code>elementui</code>的样式时通常使用样式穿透，<code>style</code>使用<code>css</code>的预处理器(<code>less</code>, <code>sass</code>, <code>scss</code>)等， 即</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style lang=&quot;less&quot; scoped&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),Zn={href:"https://blog.csdn.net/Yukinoshita_kino/article/details/117259198",target:"_blank",rel:"noopener noreferrer"},ns=e(`<h4 id="使用样式穿透还是无效" tabindex="-1"><a class="header-anchor" href="#使用样式穿透还是无效" aria-hidden="true">#</a> 使用样式穿透还是无效</h4><p>有时会发现使用了以上方法修改 element 组件样式还是会不生效，对于这种情况可以重写一个style标签，在style标签里对需要穿透的样式进行修改</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style lang=&quot;less&quot; scoped&gt;
&lt;/style&gt;
&lt;style lang=&quot;less&quot;&gt;
   // 对于组件年内样式穿透不生效的，去掉scoped
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="el-cascader-panel修改样式" tabindex="-1"><a class="header-anchor" href="#el-cascader-panel修改样式" aria-hidden="true">#</a> el-cascader-panel修改样式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style lang=&quot;less&quot;&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),ss={href:"https://blog.csdn.net/qq_42611074/article/details/120674761",target:"_blank",rel:"noopener noreferrer"},as=e(`<p>不显示滚动条</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>::-webkit-scrollbar {
        width: 0px;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ts={href:"https://www.php.cn/faq/477233.html",target:"_blank",rel:"noopener noreferrer"},es=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`::-webkit-scrollbar {display:none}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),is={href:"https://mp.weixin.qq.com/s/qiPO46N-wrYCfO9nHMdACw",target:"_blank",rel:"noopener noreferrer"},ls=n("h2",{id:"vue-项目引入animate-css",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-项目引入animate-css","aria-hidden":"true"},"#"),s(" vue 项目引入animate.css")],-1),ps={href:"https://animate.style/",target:"_blank",rel:"noopener noreferrer"},os=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install animate.css --save
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="阿里巴巴图标库" tabindex="-1"><a class="header-anchor" href="#阿里巴巴图标库" aria-hidden="true">#</a> 阿里巴巴图标库</h2>`,16),cs={href:"https://www.iconfont.cn/?spm=a313x.7781069.1998910419.d4d0a486a",target:"_blank",rel:"noopener noreferrer"},us=e(`<p>**推荐使用svg引入，能够保全图标的颜色，但svg兼容性不如另外的引入方式。**使用另两种可能图标颜色失效。（Unicode 引用和font class 引入的 iconfont 基础样式一定要有，否则不生效）每次增加或删除图标时，记得及时更新css代码</p><h3 id="unicode-引用" tabindex="-1"><a class="header-anchor" href="#unicode-引用" aria-hidden="true">#</a> Unicode 引用</h3><p>复制代码到 iconfont.css 文件，加入icontfont 类样式，否则图标显示不出来 index页面引入</p><p>css代码内要补齐路径的协议名，否则可能不生效，类似</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现页脚始终在页面底部" tabindex="-1"><a class="header-anchor" href="#实现页脚始终在页面底部" aria-hidden="true">#</a> 实现页脚始终在页面底部</h2>`,39),ds={href:"https://www.jb51.net/css/838364.html",target:"_blank",rel:"noopener noreferrer"},rs=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;all-container&quot;&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css实现聊天对话框" tabindex="-1"><a class="header-anchor" href="#css实现聊天对话框" aria-hidden="true">#</a> css实现聊天对话框</h2>`,7),vs={href:"https://juejin.cn/post/7000250044976726024",target:"_blank",rel:"noopener noreferrer"},ks=n("h2",{id:"",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1);function ms(gs,bs){const a=c("ExternalLinkIcon");return p(),o("div",null,[i(`

 * @name: 东方凝洛
 * @Date: 2022-12-02 21:19:19
 * @msg: 
 * @param: 
 * @return: 
`),d,i(" icon: edit "),r,n("p",null,[n("a",v,[s("Grid网格布局实例 - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[n("a",k,[s("CSS Grid 网格布局教程 - 阮一峰的网络日志 (ruanyifeng.com)"),t(a)])]),n("p",null,[s("grid布局调试：["),n("a",m,[s("CSS Grid Generator (cssgrid-generator.netlify.app)"),t(a)])]),n("p",null,[n("a",g,[s("grid - CSS：层叠样式表 | MDN (mozilla.org)"),t(a)])]),n("p",null,[n("a",b,[s("CSS 网格布局 | 菜鸟教程 (runoob.com)"),t(a)])]),h,n("p",null,[n("a",f,[s("JS如何判断文字被ellipsis了？ 微信公众平台 (qq.com)"),t(a)])]),x,n("p",null,[n("a",_,[s("CSS 两行文字两端对齐与字符间距的处理 (qq.com)"),t(a)])]),y,n("table",null,[n("thead",null,[n("tr",null,[n("th",null,[n("a",w,[s("transition"),t(a)])]),q,S])]),n("tbody",null,[n("tr",null,[n("td",null,[n("a",z,[s("transition-property"),t(a)])]),C,j]),n("tr",null,[n("td",null,[n("a",Y,[s("transition-duration"),t(a)])]),N,X]),n("tr",null,[n("td",null,[n("a",E,[s("transition-timing-function"),t(a)])]),B,D]),n("tr",null,[n("td",null,[n("a",T,[s("transition-delay"),t(a)])]),V,F])])]),A,n("table",null,[G,n("tbody",null,[n("tr",null,[n("td",U,[n("a",L,[s("@keyframes"),t(a)])]),H,O]),n("tr",null,[n("td",I,[n("a",P,[s("animation"),t(a)])]),J,M]),n("tr",null,[n("td",R,[n("a",$,[s("animation-name"),t(a)])]),Q,W]),n("tr",null,[n("td",K,[n("a",Z,[s("animation-duration"),t(a)])]),nn,sn]),n("tr",null,[n("td",an,[n("a",tn,[s("animation-timing-function"),t(a)])]),en,ln]),n("tr",null,[n("td",pn,[n("a",on,[s("animation-fill-mode"),t(a)])]),cn,un]),n("tr",null,[n("td",dn,[n("a",rn,[s("animation-delay"),t(a)])]),vn,kn]),n("tr",null,[n("td",mn,[n("a",gn,[s("animation-iteration-count"),t(a)])]),bn,hn]),n("tr",null,[n("td",fn,[n("a",xn,[s("animation-direction"),t(a)])]),_n,yn]),n("tr",null,[n("td",wn,[n("a",qn,[s("animation-play-state"),t(a)])]),Sn,zn])])]),Cn,n("table",null,[jn,n("tbody",null,[Yn,n("tr",null,[Nn,Xn,n("td",En,[n("a",Bn,[s("测试"),t(a)])])]),n("tr",null,[Dn,Tn,n("td",Vn,[n("a",Fn,[s("测试"),t(a)])])]),n("tr",null,[An,Gn,n("td",Un,[n("a",Ln,[s("测试"),t(a)])])]),n("tr",null,[Hn,On,n("td",In,[n("a",Pn,[s("测试"),t(a)])])]),n("tr",null,[Jn,Mn,n("td",Rn,[n("a",$n,[s("测试"),t(a)])])]),Qn,Wn])]),Kn,n("p",null,[n("a",Zn,[s("the ＞＞＞ and /deep/ combinators have been deprecated. Use :deep() instead终端报该警告的解决办法_霜雪遥的博客-CSDN博客"),t(a)]),s(" (警告不影响正常运行)")]),ns,n("p",null,[n("a",ss,[s("css-滚动但不显示滚动条的两种写法_css不显示滚动条但可以滚动_永远不会太晚的博客-CSDN博客"),t(a)])]),as,n("p",null,[n("a",ts,[s("https://www.php.cn/faq/477233.html"),t(a)])]),es,n("p",null,[n("a",is,[s("裁剪的3种方式，CSS 如何隐藏移动端的滚动条？ (qq.com)"),t(a)])]),ls,n("p",null,[n("a",ps,[s("Animate.css | A cross-browser library of CSS animations."),t(a)])]),os,n("p",null,[n("a",cs,[s("iconfont-阿里巴巴矢量图标库"),t(a)])]),us,n("p",null,[n("a",ds,[s("css让页脚保持在底部位置的四种方案_CSS教程_CSS_网页制作_脚本之家 (jb51.net)"),t(a)])]),rs,n("p",null,[n("a",vs,[s("css实现聊天对话框 - 掘金 (juejin.cn)"),t(a)])]),ks])}const xs=l(u,[["render",ms],["__file","2.html.vue"]]);export{xs as default};
