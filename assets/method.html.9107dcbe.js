import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as t,a as e,b as n,d as l,f as s,r}from"./app.cdc5381b.js";const o="/blog/vscodeTwoSearch.png",v={},u=s(`<h1 id="工作问题及解决方法" tabindex="-1"><a class="header-anchor" href="#工作问题及解决方法" aria-hidden="true">#</a> 工作问题及解决方法</h1><h2 id="后端返回文件流-文档流-如何下载" tabindex="-1"><a class="header-anchor" href="#后端返回文件流-文档流-如何下载" aria-hidden="true">#</a> 后端返回文件流(文档流)如何下载</h2><p>例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 导出指定字段Excel列表
export function getExcelList (params) {
  return request({
    url: &#39;/getExcel/excel&#39;,
    method: &#39;get&#39;,
    responseType: &quot;arraybuffer&quot;,
    params: params
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求后端文件流的接口要加上 responseType: &quot;arraybuffer&quot; ，否则导出可能会打不开</p><p>后端返回文件流,res接收，在方法体中输入以下代码，即可下载</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const content = res
const blob = new Blob([content])
const fileName = &quot;简历信息&quot; + &#39;.xls&#39; // 自定义下载文件的名字，根据不同文件类型跟换后缀名
if (&#39;download&#39; in document.createElement(&#39;a&#39;)) { // 非IE下载
  const elink = document.createElement(&#39;a&#39;)
  elink.download = fileName
  elink.style.display = &#39;none&#39;
  elink.href = URL.createObjectURL(blob)
  document.body.appendChild(elink)
  elink.click()
  URL.revokeObjectURL(elink.href) // 释放URL 对象
  document.body.removeChild(elink)
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c={href:"https://www.jianshu.com/p/b322c2d5d778",target:"_blank",rel:"noopener noreferrer"},m={href:"https://juejin.cn/post/6844903480704892942",target:"_blank",rel:"noopener noreferrer"},b=s(`<h2 id="一个表单里面添加-删除子级表单" tabindex="-1"><a class="header-anchor" href="#一个表单里面添加-删除子级表单" aria-hidden="true">#</a> 一个表单里面添加，删除子级表单</h2><h4 id="ant-design-vue-演示" tabindex="-1"><a class="header-anchor" href="#ant-design-vue-演示" aria-hidden="true">#</a> <strong>(ant-design-vue 演示)</strong></h4><p>一个表单里面填写多个子表单</p><p>表单数据样式为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>form:{
    form1:&#39;....&#39;,
    form2:&#39;.....&#39;,
    form3:&#39;......&#39;,
    form4:[
        {
            name:&#39;&#39;,
            age:&#39;&#39;        
        },
        {
            name:&#39;&#39;,
            age:&#39;&#39;        
        },
        {
            name:&#39;&#39;,
            age:&#39;&#39;        
        }    
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>form是外层表单数据，form1,form2,form3为外层表单里的基本数据，form4为可添加的子表单数据，form4数组里的每个对象对应一条子表单数据，增加时，form4数组中增加一个对象，删除时，form4s数组中减少一个对象</p><p>主要关注子表单的prop绑定</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;a-form-model ref=&quot;form&quot; :model=&quot;form&quot;&gt;
    &lt;a-form-model-item
      prop=&quot;form1&quot;
    &gt;
      &lt;a-input/&gt;
    &lt;/a-form-model-item&gt;
    &lt;a-form-model-item
      prop=&quot;form2&quot;
    &gt;
      &lt;a-input/&gt;
    &lt;/a-form-model-item&gt;
    &lt;a-form-model-item
      prop=&quot;form3&quot;
    &gt;
      &lt;a-input/&gt;
    &lt;/a-form-model-item&gt;
    
    &lt;a-row
      v-for=&quot;(item, index) in form.form4&quot;
      :key=&quot;index&quot;
      class=&quot;platForm-item&quot;
    &gt;
      &lt;a-form-model-item
        label=&quot;平台名称&quot;
        :prop=&quot;&#39;form4.&#39; + index + &#39;.name&#39;&quot;
      &gt;
        &lt;a-input /&gt;
      &lt;/a-form-model-item&gt;
      &lt;a-form-model-item
        label=&quot;平台年龄&quot;
        :prop=&quot;&#39;form4.&#39; + index + &#39;.age&#39;&quot;
      &gt;
        &lt;a-input /&gt;
      &lt;/a-form-model-item&gt;
      
      &lt;div&gt;
        &lt;a-button @click=&quot;delForm(item, index)&quot;&gt;
        &lt;a-icon type=&quot;delete&quot;&gt;&lt;/a-icon&gt; 删除&lt;/a-button&gt;
      &lt;/div&gt;
    &lt;/a-row&gt;
    
    &lt;div style=&quot;text-align: center; margin-top: 10px&quot;&gt;
      &lt;a-button @click=&quot;addForm&quot;&gt;新增&lt;/a-button&gt;
    &lt;/div&gt;
&lt;/a-form-model&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增加子表单时</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>addForm(){
    this.form.form4.push({
      //  platEdit: true,
    });
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每一个子表单有一个删除按钮，点击子表单的删除按钮时</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>delForm(item, index) {
    this.form.form4.splice(index, 1);
    this.$forceUpdate();
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue项目-两套路由-适配-pc端-移动端" tabindex="-1"><a class="header-anchor" href="#vue项目-两套路由-适配-pc端-移动端" aria-hidden="true">#</a> vue项目（两套路由）适配 pc端 移动端</h2><p>vue项目开发中，我们已经开发实现了pc端的网站开发，当想要实现移动端适配时，当时有两种适配的方法作为参考。</p><p>一种是通过媒体查询适配不同的分辨率显示不同的样式。</p><p>第二种是写两套路由，一套pc端路由，一套移动端路由，移动端页面适当移植pc端页面代码，修改部分样式，以达到手机端显示正常的样式和结构。通过js判断使用设备是pc端还是移动端，来匹配不同的路由，显示不同的页面。</p><p>最终采用的是第二种实现方案，。 因为使用第二种方法对PC端和移动端进行了区分。对于PC端和移动端的特殊样式可以做到更加适配。以下是对于判断设备是手机端还是pc端参考的文章。</p><p><strong>vue-判断设备是手机端还是pc端，进行两套页面样式的编写</strong></p>`,18),p={href:"https://blog.csdn.net/hh3167253066/article/details/120290307",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,[e("strong",null,"vue项目PC端移动端适配方案")],-1),h={href:"https://blog.csdn.net/weixin_53876218/article/details/125225893",target:"_blank",rel:"noopener noreferrer"},f=s('<h2 id="vscode-弹出扩展主机意外终止-次" tabindex="-1"><a class="header-anchor" href="#vscode-弹出扩展主机意外终止-次" aria-hidden="true">#</a> vscode 弹出扩展主机意外终止...次</h2><p>第一次遇到这种编辑器类似的问题，在网上找了挺多的解决方法，出现这种情况的原因大概是vscode的插件冲突，解决方法大体上就两种。</p><p>一种是卸载VScode,删除掉配置文件。在重装。（麻烦，没试过）</p><p>第二种是找出有问题的插件并卸载。查找方法有以下几种（我的vscode装了大概60个插件吧）</p><ul><li><p>卸载除基本插件外的所有插件，在一个个装，看到底是哪个有问题。（我感觉相当费时，所以没采用）</p></li><li><p>用vscode的二分查找，这个查找会找出可能存在冲突的插件，并禁用掉，我循环查了四五次，最终问题没有解决（用这个方法有问题的插件没有被筛出来）</p><p><img src="'+o+`" alt="vscodeTwoSearch" loading="lazy"></p></li><li><p>当弹出扩展主机意外终止的弹框时，点击<strong>打开开发人员工具</strong>，查看报错信息中关于host相关的部分，报错信息很长，只需要看头部的错误路径。我的错误路径中有easy-scss。所以猜测可能是安装的easy-scss插件有问题。于是我卸载了这个插件。（问题成功解决，不在弹出扩展主机意外终止弹框）</p></li></ul><p>这种遇到插件冲突的问题确实是很少遇到。我的也是突然出现的。记录一次解决方案。</p><h2 id="vue项目使用scss时-版本冲突" tabindex="-1"><a class="header-anchor" href="#vue项目使用scss时-版本冲突" aria-hidden="true">#</a> vue项目使用scss时，版本冲突</h2><p>下载scss后，启动项目报错，这个错误发生的原因是node和scss的版本不兼容，出现这种问题需要去网上查找兼容的scss版本，在重新安装。（找这个还挺麻烦的，来回卸载重下（试错）还是很费时的。版本冲突很麻烦，推荐使用less）</p><p>我的node的版本是 v16.13.1，以下是和我的node版本兼容的scss版本</p><p><strong>安装node-sass</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install node-sass@6.0.1 --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>安装sass-loader</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install sass-loader@10.2.0 --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="根据url获取文件名" tabindex="-1"><a class="header-anchor" href="#根据url获取文件名" aria-hidden="true">#</a> 根据url获取文件名</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 根据url获取文件名
    getFileNameByUrl (url) {
      if (url == null) {
        return
      }
      const b = url.split(&quot;/&quot;)
      const c = b.slice(b.length - 1, b.length).toString(String)
      return c
    },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a=&quot;http://www.jb51.net/html/images/logo.gif&quot;;
var b=a.split(&quot;/&quot;);
console.log(b); // [&quot;http:&quot;, &quot;&quot;, &quot;www.jb51.net&quot;, &quot;html&quot;, &quot;images&quot;, &quot;logo.gif&quot;]
var c=b.slice(b.length-1, b.length).toString(String).split(&quot;.&quot;);
console.log(c); // [&quot;logo&quot;, &quot;gif&quot;]
alert(&quot;取得的文件名是:&quot; + c.slice(0, 1)); // 取得的文件名是:logo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function x(q,_){const i=r("ExternalLinkIcon");return a(),t("div",null,[u,e("p",null,[n("对于blob可点击 "),e("a",c,[n("JS中的Blob对象 - 简书 (jianshu.com)"),l(i)])]),e("p",null,[e("a",m,[n("JavaScript 中 Blob 对象 - 掘金 (juejin.cn)"),l(i)]),n(" 文章查看")]),b,e("p",null,[e("a",p,[n("(115条消息) vue-判断设备是手机端还是pc端，进行两套页面样式的编写_hh3167253066的博客-CSDN博客_vue判断手机端还是pc端"),l(i)])]),g,e("p",null,[e("a",h,[n("(115条消息) vue项目PC端移动端适配方案_coderDragon的博客-CSDN博客_vue项目pc端和移动端适配"),l(i)])]),f])}const y=d(v,[["render",x],["__file","method.html.vue"]]);export{y as default};
