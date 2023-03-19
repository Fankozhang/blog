import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as i,a as n,b as s,e,f as t,r as o}from"./app.fd001e99.js";const c="/blog/vscodeTwoSearch.png",u={},r=t(`<h1 id="工作问题及解决方法" tabindex="-1"><a class="header-anchor" href="#工作问题及解决方法" aria-hidden="true">#</a> 工作问题及解决方法</h1><h2 id="后端返回文件流-文档流-如何下载" tabindex="-1"><a class="header-anchor" href="#后端返回文件流-文档流-如何下载" aria-hidden="true">#</a> 后端返回文件流(文档流)如何下载</h2><p>例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导出指定字段Excel列表</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getExcelList</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/getExcel/excel&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">&quot;arraybuffer&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> params
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求后端文件流的接口要加上 responseType: &quot;arraybuffer&quot; ，否则导出可能会打不开</p><p>后端返回文件流,res接收，在方法体中输入以下代码，即可下载</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> content <span class="token operator">=</span> res
<span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>content<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fileName <span class="token operator">=</span> <span class="token string">&quot;简历信息&quot;</span> <span class="token operator">+</span> <span class="token string">&#39;.xls&#39;</span> <span class="token comment">// 自定义下载文件的名字，根据不同文件类型跟换后缀名</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;download&#39;</span> <span class="token keyword">in</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 非IE下载</span>
  <span class="token keyword">const</span> elink <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
  elink<span class="token punctuation">.</span>download <span class="token operator">=</span> fileName
  elink<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span>
  elink<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>elink<span class="token punctuation">)</span>
  elink<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>elink<span class="token punctuation">.</span>href<span class="token punctuation">)</span> <span class="token comment">// 释放URL 对象</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>elink<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d={href:"https://www.jianshu.com/p/b322c2d5d778",target:"_blank",rel:"noopener noreferrer"},v={href:"https://juejin.cn/post/6844903480704892942",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"对于其他的文件下载的内容可参考如下文章：",-1),k={href:"https://mp.weixin.qq.com/s/vZiP2ULrLRtqShDJ9u1n2A",target:"_blank",rel:"noopener noreferrer"},b=t(`<h2 id="根据url下载文件-并设置文件名" tabindex="-1"><a class="header-anchor" href="#根据url下载文件-并设置文件名" aria-hidden="true">#</a> 根据url下载文件，并设置文件名</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>downLoad(){
	this.xhrequest(url,name)
	// url传入下载的连接地址
	//name传文件下载后的文件名字，要加后缀名
}

           downloadBlob (blob, fileName) {
                try {
                    const href = window.URL.createObjectURL(blob); //创建下载的链接
                    if (window.navigator.msSaveBlob) {
                        window.navigator.msSaveBlob(blob, fileName);
                    } else {
                        // 谷歌浏览器 创建a标签 添加download属性下载
                        const downloadElement = document.createElement(&quot;a&quot;);
                        downloadElement.href = href;
                        downloadElement.target = &quot;_blank&quot;;
                        downloadElement.download = fileName;
                        document.body.appendChild(downloadElement);
                        downloadElement.click(); // 点击下载
                        document.body.removeChild(downloadElement); // 下载完成移除元素
                        window.URL.revokeObjectURL(href); // 释放掉blob对象
                    }
                } catch (e) {
                    console.log(&quot;下载失败&quot;);
                }
            },

            async xhrequest(url,name) {
                let data = await fetch(url)
                    .then((response) =&gt; response.blob())
                    .then((res) =&gt; {
                        let blod = new Blob([res]);
                        this.downloadBlob(blod, name);
                    });
                return data;
            },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一个表单里面添加-删除子级表单" tabindex="-1"><a class="header-anchor" href="#一个表单里面添加-删除子级表单" aria-hidden="true">#</a> 一个表单里面添加，删除子级表单</h2><h4 id="ant-design-vue-演示" tabindex="-1"><a class="header-anchor" href="#ant-design-vue-演示" aria-hidden="true">#</a> <strong>(ant-design-vue 演示)</strong></h4><p>一个表单里面填写多个子表单</p><p>表单数据样式为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>form:{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>form是外层表单数据，form1,form2,form3为外层表单里的基本数据，form4为可添加的子表单数据，form4数组里的每个对象对应一条子表单数据，增加时，form4数组中增加一个对象，删除时，form4s数组中减少一个对象</p><p>主要关注子表单的prop绑定</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-model</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-model-item</span>
      <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form1<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-model-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-model-item</span>
      <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form2<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-model-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-model-item</span>
      <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form3<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-model-item</span><span class="token punctuation">&gt;</span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-row</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in form.form4<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>platForm-item<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-model-item</span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>平台名称<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>form4.&#39; + index + &#39;.name&#39;<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-model-item</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-model-item</span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>平台年龄<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>form4.&#39; + index + &#39;.age&#39;<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-model-item</span><span class="token punctuation">&gt;</span></span>
      
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>delForm(item, index)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>delete<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-icon</span><span class="token punctuation">&gt;</span></span> 删除<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-row</span><span class="token punctuation">&gt;</span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addForm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>新增<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-model</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增加子表单时</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>addForm(){
    this.form.form4.push({
      //  platEdit: true,
    });
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每一个子表单有一个删除按钮，点击子表单的删除按钮时</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>delForm(item, index){
    this.form.form4.splice(index, 1);
    this.$forceUpdate();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue项目-两套路由-适配-pc端-移动端" tabindex="-1"><a class="header-anchor" href="#vue项目-两套路由-适配-pc端-移动端" aria-hidden="true">#</a> vue项目（两套路由）适配 pc端 移动端</h2><p>vue项目开发中，我们已经开发实现了pc端的网站开发，当想要实现移动端适配时，当时有两种适配的方法作为参考。</p><p>一种是通过媒体查询适配不同的分辨率显示不同的样式。</p><p>第二种是写两套路由，一套pc端路由，一套移动端路由，移动端页面适当移植pc端页面代码，修改部分样式，以达到手机端显示正常的样式和结构。通过js判断使用设备是pc端还是移动端，来匹配不同的路由，显示不同的页面。</p><p>最终采用的是第二种实现方案，。 因为使用第二种方法对PC端和移动端进行了区分。对于PC端和移动端的特殊样式可以做到更加适配。以下是对于判断设备是手机端还是pc端参考的文章。</p><p><strong>vue-判断设备是手机端还是pc端，进行两套页面样式的编写</strong></p>`,20),g={href:"https://blog.csdn.net/hh3167253066/article/details/120290307",target:"_blank",rel:"noopener noreferrer"},h=n("p",null,[n("strong",null,"vue项目PC端移动端适配方案")],-1),f={href:"https://blog.csdn.net/weixin_53876218/article/details/125225893",target:"_blank",rel:"noopener noreferrer"},q=t('<h2 id="vscode-弹出扩展主机意外终止-次" tabindex="-1"><a class="header-anchor" href="#vscode-弹出扩展主机意外终止-次" aria-hidden="true">#</a> vscode 弹出扩展主机意外终止...次</h2><p>第一次遇到这种编辑器类似的问题，在网上找了挺多的解决方法，出现这种情况的原因大概是vscode的插件冲突，解决方法大体上就两种。</p><p>一种是卸载VScode,删除掉配置文件。在重装。（麻烦，没试过）</p><p>第二种是找出有问题的插件并卸载。查找方法有以下几种（我的vscode装了大概60个插件吧）</p><ul><li><p>卸载除基本插件外的所有插件，在一个个装，看到底是哪个有问题。（我感觉相当费时，所以没采用）</p></li><li><p>用vscode的二分查找，这个查找会找出可能存在冲突的插件，并禁用掉，我循环查了四五次，最终问题没有解决（用这个方法有问题的插件没有被筛出来）</p><p><img src="'+c+`" alt="vscodeTwoSearch" loading="lazy"></p></li><li><p>当弹出扩展主机意外终止的弹框时，点击<strong>打开开发人员工具</strong>，查看报错信息中关于host相关的部分，报错信息很长，只需要看头部的错误路径。我的错误路径中有easy-scss。所以猜测可能是安装的easy-scss插件有问题。于是我卸载了这个插件。（问题成功解决，不在弹出扩展主机意外终止弹框）</p></li></ul><p>这种遇到插件冲突的问题确实是很少遇到。我的也是突然出现的。记录一次解决方案。</p><h2 id="vue项目使用scss时-版本冲突" tabindex="-1"><a class="header-anchor" href="#vue项目使用scss时-版本冲突" aria-hidden="true">#</a> vue项目使用scss时，版本冲突</h2><p>下载scss后，启动项目报错，这个错误发生的原因是node和scss的版本不兼容，出现这种问题需要去网上查找兼容的scss版本，在重新安装。（找这个还挺麻烦的，来回卸载重下（试错）还是很费时的。版本冲突很麻烦，推荐使用less）</p><p>我的node的版本是 v16.13.1，以下是和我的node版本兼容的scss版本</p><p><strong>安装node-sass</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install node-sass@6.0.1 --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>安装sass-loader</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install sass-loader@10.2.0 --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="根据url获取文件名" tabindex="-1"><a class="header-anchor" href="#根据url获取文件名" aria-hidden="true">#</a> 根据url获取文件名</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 根据url获取文件名
    getFileNameByUrl (url){
      if (url == null) {
        return
      }
      const b = url.split(&quot;/&quot;)
      const c = b.slice(b.length - 1, b.length).toString(String)
      return c
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a<span class="token operator">=</span><span class="token string">&quot;http://www.jb51.net/html/images/logo.gif&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> b<span class="token operator">=</span>a<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;http:&quot;, &quot;&quot;, &quot;www.jb51.net&quot;, &quot;html&quot;, &quot;images&quot;, &quot;logo.gif&quot;]</span>
<span class="token keyword">var</span> c<span class="token operator">=</span>b<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> b<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>String<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;logo&quot;, &quot;gif&quot;]</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;取得的文件名是:&quot;</span> <span class="token operator">+</span> c<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 取得的文件名是:logo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue实现全屏滚动效果" tabindex="-1"><a class="header-anchor" href="#vue实现全屏滚动效果" aria-hidden="true">#</a> vue实现全屏滚动效果</h2>`,18),x={href:"https://blog.csdn.net/weixin_41192489/article/details/111104443",target:"_blank",rel:"noopener noreferrer"},_=t(`<h2 id="vue页面中的锚点跳转" tabindex="-1"><a class="header-anchor" href="#vue页面中的锚点跳转" aria-hidden="true">#</a> vue页面中的锚点跳转</h2><p>在vue项目中，页面中设置锚点，并在某一位置跳转到锚点位置</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>基本信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>        跳转到的地方 根据id跳转

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>go(&#39;info-title&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-icon-circle-check<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>基本信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>          从这个地方跳转
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">go</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> anchor <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;distance&quot;</span><span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
      <span class="token keyword">let</span> distance <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token keyword">const</span> total <span class="token operator">=</span> anchor<span class="token punctuation">.</span>offsetTop
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;distance&quot;</span><span class="token punctuation">,</span> distance<span class="token punctuation">)</span>
      <span class="token keyword">const</span> step <span class="token operator">=</span> total <span class="token operator">/</span> <span class="token number">30</span>

      <span class="token function">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

      <span class="token keyword">function</span> <span class="token function">jump</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>distance <span class="token operator">&lt;</span> total<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        distance <span class="token operator">+=</span> step
        document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> distance
        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> distance
        window<span class="token punctuation">.</span>pageYOffset <span class="token operator">=</span> distance
        <span class="token comment">// setTimeout(jump, 10)</span>
        <span class="token function">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> total
        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> total
        window<span class="token punctuation">.</span>pageYOffset <span class="token operator">=</span> total
      <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git中上传时忽略文件-gitignore-配置" tabindex="-1"><a class="header-anchor" href="#git中上传时忽略文件-gitignore-配置" aria-hidden="true">#</a> git中上传时忽略文件 .gitignore 配置</h2><p>对于.gitignore的配置可参考如下的文章</p>`,6),w={href:"https://blog.csdn.net/ThinkWon/article/details/101447866",target:"_blank",rel:"noopener noreferrer"},y={href:"https://juejin.cn/post/6998911250323390501",target:"_blank",rel:"noopener noreferrer"},j=t(`<p>普通的vue文件的可参考如下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.DS_Store
node_modules/
dist/


# local env files
.env.local
.env.*.local

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw*
package-lock.json
yarn.lock

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nprogress使用" tabindex="-1"><a class="header-anchor" href="#nprogress使用" aria-hidden="true">#</a> nprogress使用</h2><p>当网页进行路由跳转时，在网页上显示进度条。可以使用nprogress。起过渡和美化的作用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cnpm install nprogress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import nprogress from &quot;nprogress&quot;;
import &quot;nprogress/nprogress.css&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在拦截器加上nprogress, nprogress.start()进度条开始 nprogress.done()进度条结束</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>request.interceptors.request.use((config)=&gt;{
    // 进度条开始
    nprogress.start()
    return config
})

request.interceptors.response.use(
    (res)=&gt;{ 
    // 进度条结束
    nprogress.done();  
    return res.data},
    (error)=&gt;{ return Promise.reject(new Error(&#39;faile&#39;))}
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快速删除文件夹下所有文件" tabindex="-1"><a class="header-anchor" href="#快速删除文件夹下所有文件" aria-hidden="true">#</a> 快速删除文件夹下所有文件</h2><p>在我们的项目安装依赖时，会生成 node_modules 文件夹，当出现依赖相关的问题难以解决时，可能会需要删除</p><p>node_modules 文件夹，在重新安装，但删除的过程很慢，此时有快速删除的方法。</p><p>全局安装 rimraf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install rimraf -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cd 到需要清空的文件夹父目录 ，控制台输入 <code>rimraf ‘要删除的文件名’</code> ，即可删除此目录下（包括所有子目录）下的所有文件。当所有文件被清空后，删除对应的文件夹，就可以很快速的删除了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rimraf node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="this-refs-formname-validat验证-自定义校验" tabindex="-1"><a class="header-anchor" href="#this-refs-formname-validat验证-自定义校验" aria-hidden="true">#</a> this.$refs[formName].validat验证（自定义校验）</h2>`,16),E={href:"https://www.jianshu.com/p/5ebd1bd9ecaf",target:"_blank",rel:"noopener noreferrer"},S=t(`<p>我的不生效原因是 自定义的正则校验有问题,正确的可以参考如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data(){
	 // 验证手机的规则（验证时更改正则表达式即可）
    var checkMobile = (rule, value, cb) =&gt; {
      if (/^1[3456789]\\d{9}$/.test(value) || /^\\d{3}-\\d{7,8}|\\d{4}-\\d{7,8}$/.test(value))      {
        return cb()
      }
      // 返回一个错误提示
      cb(new Error(&quot;请输入合法的手机号码&quot;))
    }
    
     return {
      rules: {
        //  chargePhone是prop的值
        chargePhone: [
          { required: true, message: &quot;请输入电话&quot;, trigger: &quot;blur&quot; },
          { validator: checkMobile, trigger: &quot;change&quot; },
        ]
      }
      ]

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接在dom里添加验证参考：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;a-form-model-item
    prop=&quot;phone&quot;
    
   :rules=&quot;[{ required: true, message: &#39;请输入联系方式&#39;, trigger: &#39;blur&#39; },{ pattern:       /^1[3456789]\\d{9}$/, message: &#39;手机号码格式不正确&#39;, trigger: &#39;blur&#39; }]&quot;
   
    label=&quot;电话&quot;
&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function L(N,B){const a=o("ExternalLinkIcon");return l(),i("div",null,[r,n("p",null,[s("对于blob可点击 "),n("a",d,[s("JS中的Blob对象 - 简书 (jianshu.com)"),e(a)])]),n("p",null,[n("a",v,[s("JavaScript 中 Blob 对象 - 掘金 (juejin.cn)"),e(a)]),s(" 文章查看")]),m,n("p",null,[n("a",k,[s("前端文件下载的正确打开方式 (qq.com)"),e(a)])]),b,n("p",null,[n("a",g,[s("(115条消息) vue-判断设备是手机端还是pc端，进行两套页面样式的编写_hh3167253066的博客-CSDN博客_vue判断手机端还是pc端"),e(a)])]),h,n("p",null,[n("a",f,[s("(115条消息) vue项目PC端移动端适配方案_coderDragon的博客-CSDN博客_vue项目pc端和移动端适配"),e(a)])]),q,n("p",null,[s("查看以下博客 "),n("a",x,[s("(130条消息) vue全屏滚动——vue-fullpage.js教程_朝阳39的博客-CSDN博客_vue-fullpage"),e(a)])]),_,n("p",null,[n("a",w,[s("(132条消息) Git忽略文件.gitignore详解_ThinkWon的博客-CSDN博客_gitignore"),e(a)])]),n("p",null,[n("a",y,[s("Git入门之.gitignore - 掘金 (juejin.cn)"),e(a)])]),j,n("p",null,[s("验证不生效可参考文章 "),n("a",E,[s("https://www.jianshu.com/p/5ebd1bd9ecaf"),e(a)])]),S])}const U=p(u,[["render",L],["__file","method.html.vue"]]);export{U as default};
