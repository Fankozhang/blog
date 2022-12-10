import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,f as d}from"./app.b4c523e6.js";const a={},i=d(`<h1 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> css</h1><h3 id="文字溢出省略号" tabindex="-1"><a class="header-anchor" href="#文字溢出省略号" aria-hidden="true">#</a> <strong>文字溢出省略号</strong></h3><p>文字单行溢出:</p><p><code>overflow: hidden; // 溢出隐藏</code><br><code>text-overflow: ellipsis; // 溢出用省略号显示</code><br><code>white-space: nowrap; // 规定段落中的文本不进行换行</code></p><p>多行文字溢出:</p><p><code>overflow: hidden; // 溢出隐藏 </code><br><code>text-overflow: ellipsis; // 溢出用省略号显示 </code><br><code>display:-webkit-box; // 作为弹性伸缩盒子模型显示。 </code><br><code>-webkit-box-orient:vertical; // 设置伸缩盒子的子元素排列方式：从上到下垂直排列 </code><br><code>-webkit-line-clamp:3; // 显示的行数 </code></p><h3 id="css变量" tabindex="-1"><a class="header-anchor" href="#css变量" aria-hidden="true">#</a> <strong>css变量</strong></h3><p><strong>CSS变量</strong>又称<strong>CSS自定义属性</strong>，通过在<code>css</code>中自定义属性<code>--var</code>与函数<code>var()</code>组成，<code>var()</code>用于引用自定义属性。谈到为何会在<code>CSS</code>中使用变量，以下使用一个示例讲述。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">:</span>root <span class="token punctuation">{</span>
 <span class="token operator">--</span>c<span class="token operator">-</span>color<span class="token operator">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>title <span class="token punctuation">{</span>
 background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>c<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="渐变" tabindex="-1"><a class="header-anchor" href="#渐变" aria-hidden="true">#</a> <strong>渐变</strong></h3><p>渐变分为<code>线性渐变</code>、<code>径向渐变</code>，这里笔者直接记录的使用方式，也是为了使用的时候更加的直观，这里说下，在使用线性渐变的时候，使用<code>角度</code>以及<code>百分比</code>去控制渐变，会更加的灵活</p><p>使用方式:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//渐变(方向)
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="background-size-cover和contain以及100" tabindex="-1"><a class="header-anchor" href="#background-size-cover和contain以及100" aria-hidden="true">#</a> <strong>background-size：cover和contain以及100%</strong></h3><p><code>contain</code>:<strong>图片放大至满足背景区域的最小边即止</strong>，当背景区域与背景图片的宽高比不一致的情况下，<strong>背景区域可能会长边下有空白覆盖不全</strong>。<code>cover</code>:<strong>图片放大至能满足最大变时为止</strong>，当背景区域与背景图片的宽高比不一致时，<strong>背景图片会在短边下有裁切，显示不全</strong>。</p><p><code>百分比</code>:可以设置两个值</p><ul><li>第一个设置宽度，第二个设置高度</li><li>如果只设置了一个值，那么第二个值默认会被设置为<code>auto</code></li></ul><h3 id="elementui样式修改的方式" tabindex="-1"><a class="header-anchor" href="#elementui样式修改的方式" aria-hidden="true">#</a> <strong>elementui样式修改的方式:</strong></h3><h4 id="样式穿透" tabindex="-1"><a class="header-anchor" href="#样式穿透" aria-hidden="true">#</a> 样式穿透</h4><p><code>vue</code>项目中，在修改<code>elementui</code>的样式时通常使用样式穿透，<code>style</code>使用<code>css</code>的预处理器(<code>less</code>, <code>sass</code>, <code>scss</code>)等， 即</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style lang=&quot;less&quot; scoped&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用样式穿透还是无效" tabindex="-1"><a class="header-anchor" href="#使用样式穿透还是无效" aria-hidden="true">#</a> 使用样式穿透还是无效</h4><p>有时会发现使用了以上方法修改 element 组件样式还是会不生效，对于这种情况可以重写一个style标签，在style标签里对需要穿透的样式进行修改</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style lang=&quot;less&quot; scoped&gt;
&lt;/style&gt;
&lt;style lang=&quot;less&quot;&gt;
   // 对于组件年内样式穿透不生效的，去掉scoped
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css-改变网页的滚动条样式" tabindex="-1"><a class="header-anchor" href="#css-改变网页的滚动条样式" aria-hidden="true">#</a> css 改变网页的滚动条样式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),r=[i];function c(l,o){return n(),s("div",null,r)}const u=e(a,[["render",c],["__file","2.html.vue"]]);export{u as default};
