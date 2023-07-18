import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,a as n,b as s,e as t,f as e,r as l}from"./app.684a5af9.js";const c="/blog/vscodeTwoSearch.png",u={},r=e('<h1 id="工作问题及解决方法" tabindex="-1"><a class="header-anchor" href="#工作问题及解决方法" aria-hidden="true">#</a> 工作问题及解决方法</h1><h2 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode" aria-hidden="true">#</a> vscode</h2><h3 id="vscode代码片段" tabindex="-1"><a class="header-anchor" href="#vscode代码片段" aria-hidden="true">#</a> vscode代码片段</h3><p>点击Code-首选项-用户代码片段</p>',4),d={href:"https://99cc.vip/public/tools/vscode_snippet/index.html",target:"_blank",rel:"noopener noreferrer"},v=e('<h3 id="vscode-弹出扩展主机意外终止-次" tabindex="-1"><a class="header-anchor" href="#vscode-弹出扩展主机意外终止-次" aria-hidden="true">#</a> vscode 弹出扩展主机意外终止...次</h3><p>第一次遇到这种编辑器类似的问题，在网上找了挺多的解决方法，出现这种情况的原因大概是vscode的插件冲突，解决方法大体上就两种。</p><p>一种是卸载VScode,删除掉配置文件。在重装。（麻烦，没试过）</p><p>第二种是找出有问题的插件并卸载。查找方法有以下几种（我的vscode装了大概60个插件吧）</p><ul><li><p>卸载除基本插件外的所有插件，在一个个装，看到底是哪个有问题。（我感觉相当费时，所以没采用）</p></li><li><p>用vscode的二分查找，这个查找会找出可能存在冲突的插件，并禁用掉，我循环查了四五次，最终问题没有解决（用这个方法有问题的插件没有被筛出来）</p><p><img src="'+c+'" alt="vscodeTwoSearch" loading="lazy"></p></li><li><p>当弹出扩展主机意外终止的弹框时，点击<strong>打开开发人员工具</strong>，查看报错信息中关于host相关的部分，报错信息很长，只需要看头部的错误路径。我的错误路径中有easy-scss。所以猜测可能是安装的easy-scss插件有问题。于是我卸载了这个插件。（问题成功解决，不在弹出扩展主机意外终止弹框）</p></li></ul><p>这种遇到插件冲突的问题确实是很少遇到。我的也是突然出现的。记录一次解决方案。</p><h3 id="vscode-eslint-setting配置" tabindex="-1"><a class="header-anchor" href="#vscode-eslint-setting配置" aria-hidden="true">#</a> vscode eslint setting配置</h3>',7),k={href:"https://blog.csdn.net/G0000227/article/details/122093671",target:"_blank",rel:"noopener noreferrer"},m=e(`<h2 id="下载-url" tabindex="-1"><a class="header-anchor" href="#下载-url" aria-hidden="true">#</a> 下载（url）</h2><h3 id="后端返回文件流-文档流-如何下载" tabindex="-1"><a class="header-anchor" href="#后端返回文件流-文档流-如何下载" aria-hidden="true">#</a> 后端返回文件流(文档流)如何下载</h3><p>例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导出指定字段Excel列表</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),b={href:"https://www.jianshu.com/p/b322c2d5d778",target:"_blank",rel:"noopener noreferrer"},g={href:"https://juejin.cn/post/6844903480704892942",target:"_blank",rel:"noopener noreferrer"},h=n("p",null,"对于其他的文件下载的内容可参考如下文章：",-1),f={href:"https://mp.weixin.qq.com/s/vZiP2ULrLRtqShDJ9u1n2A",target:"_blank",rel:"noopener noreferrer"},q=e(`<h3 id="根据url下载文件-并设置文件名" tabindex="-1"><a class="header-anchor" href="#根据url下载文件-并设置文件名" aria-hidden="true">#</a> 根据url下载文件，并设置文件名</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>            <span class="token function">downLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">xhrequest</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span>name<span class="token punctuation">)</span>
                <span class="token comment">// url传入下载的连接地址</span>
                <span class="token comment">//name传文件下载后的文件名字，要加后缀名</span>
            <span class="token punctuation">}</span>

           <span class="token function">downloadBlob</span> <span class="token punctuation">(</span><span class="token parameter">blob<span class="token punctuation">,</span> fileName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token keyword">const</span> href <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//创建下载的链接</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>msSaveBlob<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span><span class="token function">msSaveBlob</span><span class="token punctuation">(</span>blob<span class="token punctuation">,</span> fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        <span class="token comment">// 谷歌浏览器 创建a标签 添加download属性下载</span>
                        <span class="token keyword">const</span> downloadElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        downloadElement<span class="token punctuation">.</span>href <span class="token operator">=</span> href<span class="token punctuation">;</span>
                        downloadElement<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token string">&quot;_blank&quot;</span><span class="token punctuation">;</span>
                        downloadElement<span class="token punctuation">.</span>download <span class="token operator">=</span> fileName<span class="token punctuation">;</span>
                        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>downloadElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        downloadElement<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 点击下载</span>
                        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>downloadElement<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 下载完成移除元素</span>
                        window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 释放掉blob对象</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;下载失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

             <span class="token comment">//  name参数需要有后缀名才行</span>
            <span class="token keyword">async</span> <span class="token function">xhrequest</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span>name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token function">blob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                        <span class="token keyword">let</span> blod <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>res<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">downloadBlob</span><span class="token punctuation">(</span>blod<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> data<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种</p>`,3),x={href:"https://mp.weixin.qq.com/s/W_udbGlYEhdyH1mtdtbrsQ",target:"_blank",rel:"noopener noreferrer"},y=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ts
复制代码
const downloadByUrl = (url: string, filename: string) =&gt; {
    if (!url) throw new Error(&#39;当前没有下载链接&#39;);

    const a = document.createElement(&quot;a&quot;);
    a.style.display = &quot;none&quot;;
    a.href = url;
    a.download = filename;
    // 使用target=&quot;_blank&quot;时，添加rel=&quot;noopener noreferrer&quot; 堵住钓鱼安全漏洞 防止新页面window指向之前的页面
    a.rel = &quot;noopener noreferrer&quot;;
    document.body.append(a);
    a.click();

    setTimeout(() =&gt; {
        a.remove();
    }, 1000);
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="根据url获取文件名" tabindex="-1"><a class="header-anchor" href="#根据url获取文件名" aria-hidden="true">#</a> 根据url获取文件名</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 根据url获取文件名
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="表单-校验" tabindex="-1"><a class="header-anchor" href="#表单-校验" aria-hidden="true">#</a> 表单（校验）</h2><h3 id="一个表单里面添加-删除子级表单" tabindex="-1"><a class="header-anchor" href="#一个表单里面添加-删除子级表单" aria-hidden="true">#</a> 一个表单里面添加，删除子级表单</h3><h4 id="ant-design-vue-演示" tabindex="-1"><a class="header-anchor" href="#ant-design-vue-演示" aria-hidden="true">#</a> <strong>(ant-design-vue 演示)</strong></h4><p>一个表单里面填写多个子表单</p><p>表单数据样式为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>form:{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="this-refs-formname-validat验证-自定义校验" tabindex="-1"><a class="header-anchor" href="#this-refs-formname-validat验证-自定义校验" aria-hidden="true">#</a> this.$refs[formName].validat验证（自定义校验）</h3>`,19),w={href:"https://www.jianshu.com/p/5ebd1bd9ecaf",target:"_blank",rel:"noopener noreferrer"},_=e(`<p>我的不生效原因是 自定义的正则校验有问题,正确的可以参考如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data(){
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><h3 id="自定义表单-表单生成器" tabindex="-1"><a class="header-anchor" href="#自定义表单-表单生成器" aria-hidden="true">#</a> 自定义表单（表单生成器）</h3>`,6),j={href:"https://juejin.cn/post/7065863860669906952",target:"_blank",rel:"noopener noreferrer"},C={href:"http://kcz66.gitee.io/k-form-design/#/README",target:"_blank",rel:"noopener noreferrer"},S=e(`<p>k-form-create使用</p><p>main.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { useAntd } from &#39;k-form-design/packages/core/useComponents&#39;
import KFormDesign from &#39;k-form-design/packages/use.js&#39;
import &#39;k-form-design/lib/k-form-design.css&#39;
// 有自己的颜色需求按照官网去配置，不生效，将node_modules下的k-for-design.css的样式源码粘出来，全局修改里面的颜色，在main.js引入自己改过的样式文件

useAntd(Vue)
Vue.use(KFormDesign)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>k-form-design.vue</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>page-header-wrapper</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-card</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>k-form-design</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>kfd<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:showHead</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">hideResetHint</span> <span class="token attr-name">@save</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSave<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-card</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>page-header-wrapper</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> setFormDesignConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;k-form-design&quot;</span>
<span class="token keyword">import</span> storage <span class="token keyword">from</span> <span class="token string">&#39;store&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ACCESS_TOKEN</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/store/mutation-types&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 对上传文件的部分做设置</span>
    <span class="token function">setFormDesignConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">uploadFile</span><span class="token operator">:</span> <span class="token string">&quot;/api/upload&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 上传文件地址</span>
      <span class="token literal-property property">uploadImage</span><span class="token operator">:</span> <span class="token string">&quot;/api/upload&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 上传图片地址</span>
      <span class="token literal-property property">uploadFileName</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 上传文件name</span>
      <span class="token literal-property property">uploadImageName</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 上传图片name</span>
      <span class="token literal-property property">uploadFileData</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 上传文件额外参数</span>
      <span class="token literal-property property">uploadImageData</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 上传图片额外参数</span>
      <span class="token literal-property property">uploadFileHeaders</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">Authorization</span><span class="token operator">:</span> <span class="token string">&#39;Bearer &#39;</span> <span class="token operator">+</span> storage<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">ACCESS_TOKEN</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 上传文件请求头部</span>
      <span class="token literal-property property">uploadImageHeaders</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">Authorization</span><span class="token operator">:</span> <span class="token string">&#39;Bearer &#39;</span> <span class="token operator">+</span> storage<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">ACCESS_TOKEN</span><span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token comment">// 上传图片请求头部</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  		<span class="token function">handleSave</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  			<span class="token comment">// 点击保存时调用这个方法</span>
  		<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回显</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-modal</span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCancel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>80%<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>save<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title != &#39;查看&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 保存 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>
        
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-row</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>k-form-build</span> <span class="token attr-name">:defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>defaultValue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>kfb<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jsonData<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>disabled<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>k-form-build</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-row</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-modal</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">jsonData</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">form</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$form<span class="token punctuation">.</span><span class="token function">createForm</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dyData</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">formValues</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">kimId</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">setFormValue</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>kfb<span class="token punctuation">.</span>form<span class="token punctuation">.</span><span class="token function">setFieldsValue</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>defaultValue<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">handleCancel</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">save</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 使用getData函数获取数据</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>kfb
        <span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">values</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token string">&quot;验证未通过，操作失败&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="适配" tabindex="-1"><a class="header-anchor" href="#适配" aria-hidden="true">#</a> 适配</h2><h3 id="vue项目-两套路由-适配-pc端-移动端" tabindex="-1"><a class="header-anchor" href="#vue项目-两套路由-适配-pc端-移动端" aria-hidden="true">#</a> vue项目（两套路由）适配 pc端 移动端</h3><p>vue项目开发中，我们已经开发实现了pc端的网站开发，当想要实现移动端适配时，当时有两种适配的方法作为参考。</p><p>一种是通过媒体查询适配不同的分辨率显示不同的样式。</p><p>第二种是写两套路由，一套pc端路由，一套移动端路由，移动端页面适当移植pc端页面代码，修改部分样式，以达到手机端显示正常的样式和结构。通过js判断使用设备是pc端还是移动端，来匹配不同的路由，显示不同的页面。</p><p>最终采用的是第二种实现方案，。 因为使用第二种方法对PC端和移动端进行了区分。对于PC端和移动端的特殊样式可以做到更加适配。以下是对于判断设备是手机端还是pc端参考的文章。</p><p><strong>vue-判断设备是手机端还是pc端，进行两套页面样式的编写</strong></p>`,14),E={href:"https://blog.csdn.net/hh3167253066/article/details/120290307",target:"_blank",rel:"noopener noreferrer"},D=n("p",null,[n("strong",null,"vue项目PC端移动端适配方案")],-1),N={href:"https://blog.csdn.net/weixin_53876218/article/details/125225893",target:"_blank",rel:"noopener noreferrer"},V=e(`<h3 id="vue项目适配屏幕分辨率与屏幕的缩放适配" tabindex="-1"><a class="header-anchor" href="#vue项目适配屏幕分辨率与屏幕的缩放适配" aria-hidden="true">#</a> vue项目适配屏幕分辨率与屏幕的缩放适配</h3><p>修改initial-scale的数值，原值为1.0，根据屏幕显示调整。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;meta name=&quot;viewport&quot;
          content=&quot;width=device-width, user-scalable=no, initial-scale=0.28, maximum-scale=0.28, minimum-scale=0.28&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),F={href:"https://blog.csdn.net/weixin_44692055/article/details/127843876",target:"_blank",rel:"noopener noreferrer"},L=n("h2",{id:"pc端网站在手机模式下打开显示不全的问题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pc端网站在手机模式下打开显示不全的问题","aria-hidden":"true"},"#"),s(" PC端网站在手机模式下打开显示不全的问题")],-1),T={href:"https://blog.csdn.net/ddyy2695734664/article/details/113248509",target:"_blank",rel:"noopener noreferrer"},A=e(`<h2 id="vue项目使用scss时-版本冲突" tabindex="-1"><a class="header-anchor" href="#vue项目使用scss时-版本冲突" aria-hidden="true">#</a> vue项目使用scss时，版本冲突</h2><p>下载scss后，启动项目报错，这个错误发生的原因是node和scss的版本不兼容，出现这种问题需要去网上查找兼容的scss版本，在重新安装。（找这个还挺麻烦的，来回卸载重下（试错）还是很费时的。版本冲突很麻烦，推荐使用less）</p><p>我的node的版本是 v16.13.1，以下是和我的node版本兼容的scss版本</p><p><strong>安装node-sass</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install node-sass@6.0.1 --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>安装sass-loader</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install sass-loader@10.2.0 --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="vue开发中出现loading-chunk-failed-踩坑纪实" tabindex="-1"><a class="header-anchor" href="#vue开发中出现loading-chunk-failed-踩坑纪实" aria-hidden="true">#</a> Vue开发中出现Loading Chunk Failed 踩坑纪实</h2><p>（出现这个错误会页面空白）</p>`,9),B={href:"https://juejin.cn/post/7080189425975558181",target:"_blank",rel:"noopener noreferrer"},O=n("h2",{id:"vue实现全屏滚动效果",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue实现全屏滚动效果","aria-hidden":"true"},"#"),s(" vue实现全屏滚动效果")],-1),$={href:"https://blog.csdn.net/weixin_41192489/article/details/111104443",target:"_blank",rel:"noopener noreferrer"},U=e(`<h2 id="vue页面中的锚点跳转" tabindex="-1"><a class="header-anchor" href="#vue页面中的锚点跳转" aria-hidden="true">#</a> vue页面中的锚点跳转</h2><p>在vue项目中，页面中设置锚点，并在某一位置跳转到锚点位置</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>基本信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>        跳转到的地方 根据id跳转

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-this-router-跳转打开新页面" tabindex="-1"><a class="header-anchor" href="#vue-this-router-跳转打开新页面" aria-hidden="true">#</a> vue this.$router 跳转打开新页面</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>go (item) {
      const url = this.$router.resolve({ path: &#39;/job/company&#39;, query: { id: item.id } })
      window.open(url.href, &#39;_blank&#39;)
    },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git中上传时忽略文件-gitignore-配置" tabindex="-1"><a class="header-anchor" href="#git中上传时忽略文件-gitignore-配置" aria-hidden="true">#</a> git中上传时忽略文件 .gitignore 配置</h2><p>对于.gitignore的配置可参考如下的文章</p>`,8),Y={href:"https://blog.csdn.net/ThinkWon/article/details/101447866",target:"_blank",rel:"noopener noreferrer"},R={href:"https://juejin.cn/post/6998911250323390501",target:"_blank",rel:"noopener noreferrer"},P=e(`<p>普通的vue文件的可参考如下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.DS_Store
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="axios请求获取本地静态文件-动态获取json数据" tabindex="-1"><a class="header-anchor" href="#axios请求获取本地静态文件-动态获取json数据" aria-hidden="true">#</a> axios请求获取本地静态文件(动态获取json数据)</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// json数据存放在 public文件夹下(动态获取json数据)

import axios from &#39;axios&#39;

loadGeoJson (level, adcode) {
    // 不要带有public路径
      const mapUrl = \`/static/\${level}/\${adcode}.json\`
      return axios.get(mapUrl)
},
// 如下获取的文件地址为  public/map/city/123.json
loadGeoJson(&quot;/map/city&quot;,&quot;123&quot;).then(res=&gt;{
    this.json=res.data
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="百度地图根据地址解析坐标系" tabindex="-1"><a class="header-anchor" href="#百度地图根据地址解析坐标系" aria-hidden="true">#</a> 百度地图根据地址解析坐标系</h2>`,18),I={href:"https://lbs.baidu.com/index.php?title=webapi/guide/webservice-geocoding",target:"_blank",rel:"noopener noreferrer"},z=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install --save vue-jsonp

main.js 引入

import { VueJsonp } from &#39;vue-jsonp&#39; 
Vue.use(VueJsonp)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;baidu-map class=&quot;bm-view&quot; ref=&quot;map&quot; :center=&quot;mapCenter&quot; :zoom=&quot;17&quot;&gt;
   &lt;bm-marker
       :position=&quot;mapCenterAddress&quot;
       :dragging=&quot;false&quot;
       animation=&quot;&quot;
   &gt;&lt;/bm-marker&gt;
&lt;/baidu-map&gt;

// bm-marker  显示地址的红点
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件内使用 address:&#39;要解析的地址名&#39; ak:&#39;百度网站上申请的ak,个人标识&#39; output: &#39;json&#39;,callback: &#39;showLocation&#39;固定</p><p>返回值里 json.result.location是一个包含坐标系的对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//mapCenter: &quot;&quot;,
//mapCenterAddress: { lat: &quot;123&quot;, lng: &quot;123&quot; },

// 百度地图地址解析
    TypeMap () {
      this.mapCenter = &quot;中国（山东）自由贸易试验区济南片区新泺大街1166号奥盛大厦1号楼2333-2室&quot;
      this.$jsonp(&#39;http://api.map.baidu.com/geocoding/v3/&#39;, {
        address: this.mapCenter,
        output: &#39;json&#39;,
        ak: &#39;6SBDhZuzz9h00tQd2B5bhjxeTe7zhGgp&#39;,
        callback: &#39;showLocation&#39;
      }).then(json =&gt; {
        // 得到我们想要的内容,
        console.log(&#39;json&#39;, json)
        this.mapCenterAddress.lat = String(json.result.location.lat)
        this.mapCenterAddress.lng = String(json.result.location.lng)
      }).catch(err =&gt; {
        console.log(err)
      })
    },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue的v-html解析富文本传来的表格不显示边线" tabindex="-1"><a class="header-anchor" href="#vue的v-html解析富文本传来的表格不显示边线" aria-hidden="true">#</a> vue的v-html解析富文本传来的表格不显示边线</h2>`,6),K={href:"https://blog.csdn.net/xh1506101064/article/details/106675796",target:"_blank",rel:"noopener noreferrer"},G=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;content-table&quot; v-html=&quot;abc&quot;&gt;&lt;/div&gt;


css  注意：/deep/  不能缺少
.content-table{
  /deep/table {
        border-collapse: collapse !important;
        td,th {
          text-align: center;
        border: 1px solid #ccc !important;
        min-width: 50px !important;
        height: 20px !important;
    }
    th {
        background-color: #f1f1f1 !important;
    }
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ant-design-of-vue" tabindex="-1"><a class="header-anchor" href="#ant-design-of-vue" aria-hidden="true">#</a> Ant Design of Vue</h2><h3 id="ant-design-of-vue-a-table-表格行满足条件高亮" tabindex="-1"><a class="header-anchor" href="#ant-design-of-vue-a-table-表格行满足条件高亮" aria-hidden="true">#</a> Ant Design of Vue a-table 表格行满足条件高亮</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;a-table
      :rowClassName=&quot;setRowClassName&quot;
      :rowKey=&quot;(record,index)=&gt;{return index}&quot;
    &gt;
    
setRowClassName (record) {
       if (record.province == &#39;山东省&#39;) {
       return &#39;row-color&#39;
      } else {
       return &#39;row-color2&#39;
      }
    },

// style 不能加 scoped，否则行样式不生效

&lt;style  lang=&quot;less&quot;&gt;
.row-color{
  background:#e6f7ff !important;
}
.row-color2{
  background:white !important;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ant-design-of-vue清除表单校验" tabindex="-1"><a class="header-anchor" href="#ant-design-of-vue清除表单校验" aria-hidden="true">#</a> Ant Design of Vue清除表单校验</h3><p>clearValidate和resetFields区别</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">&#39;form&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">resetFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//移除校验结果并重置字段值</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">&#39;form&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">clearValidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//移除校验结果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ant-design-vue-年份选择器" tabindex="-1"><a class="header-anchor" href="#ant-design-vue-年份选择器" aria-hidden="true">#</a> ant design vue 年份选择器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;a-date-picker
          mode=&quot;year&quot;
          format=&quot;YYYY&quot;
          v-model=&quot;year&quot;
          :open=&quot;yearShowOne&quot;
          @openChange=&quot;openChangeOne&quot;
          @panelChange=&quot;panelChangeOne&quot;
          placeholder=&quot;请选择年份&quot;
        &gt;

import moment from &quot;moment&quot;


data(){
return{
	year:&#39;&#39;,
    yearShowOne: false
}
}

methods:{
	getYear () {
        this.year = moment().format(&quot;YYYY&quot;)
      },
    openChangeOne (status) {
      if (status) {
        this.yearShowOne = true
      }
    },
    // 得到年份选择器的值
    panelChangeOne (value) {
      this.year = moment(value).format(&quot;YYYY&quot;)
      this.yearShowOne = false
    },

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ant-design-vue-表格隔行变色" tabindex="-1"><a class="header-anchor" href="#ant-design-vue-表格隔行变色" aria-hidden="true">#</a> ant design vue 表格隔行变色</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>::v-deep .ant-table-tbody .ant-table-row:nth-child(2n) {
		background: #e6f7ff;
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function J(H,M){const a=l("ExternalLinkIcon");return o(),i("div",null,[r,n("p",null,[n("a",d,[s("vsCode 代码片段 自动生成格式 (99cc.vip)"),t(a)])]),v,n("p",null,[n("a",k,[s("(206条消息) Vscode如何配置属于自己的ESlint_vscode eslint配置_·甘之如饴·的博客-CSDN博客"),t(a)])]),m,n("p",null,[s("对于blob可点击 "),n("a",b,[s("JS中的Blob对象 - 简书 (jianshu.com)"),t(a)])]),n("p",null,[n("a",g,[s("JavaScript 中 Blob 对象 - 掘金 (juejin.cn)"),t(a)]),s(" 文章查看")]),h,n("p",null,[n("a",f,[s("前端文件下载的正确打开方式 (qq.com)"),t(a)])]),q,n("p",null,[n("a",x,[s("你真的会用标签下载文件吗? (qq.com)"),t(a)])]),y,n("p",null,[s("验证不生效可参考文章 "),n("a",w,[s("https://www.jianshu.com/p/5ebd1bd9ecaf"),t(a)])]),_,n("p",null,[n("a",j,[s("vue拖拽表单生成器 - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[s("适用ant design vue ( "),n("a",C,[s("KFormDesign (gitee.io)"),t(a)]),s(" )")]),S,n("p",null,[n("a",E,[s("(115条消息) vue-判断设备是手机端还是pc端，进行两套页面样式的编写_hh3167253066的博客-CSDN博客_vue判断手机端还是pc端"),t(a)])]),D,n("p",null,[n("a",N,[s("(115条消息) vue项目PC端移动端适配方案_coderDragon的博客-CSDN博客_vue项目pc端和移动端适配"),t(a)])]),V,n("p",null,[n("a",F,[s("(198条消息) vue项目适配屏幕分辨率与屏幕的缩放适配详细教程_vue 分辨率适配_汪小敏同学的博客-CSDN博客"),t(a)])]),L,n("p",null,[n("a",T,[s("(227条消息) PC端网站在手机模式下打开显示不全的问题_手机pc端口 显示不全面_大大大颖er的博客-CSDN博客"),t(a)])]),A,n("p",null,[n("a",B,[s("Vue开发中出现Loading Chunk Failed 踩坑纪实 - 掘金 (juejin.cn)"),t(a)])]),O,n("p",null,[s("查看以下博客 "),n("a",$,[s("(130条消息) vue全屏滚动——vue-fullpage.js教程_朝阳39的博客-CSDN博客_vue-fullpage"),t(a)])]),U,n("p",null,[n("a",Y,[s("(132条消息) Git忽略文件.gitignore详解_ThinkWon的博客-CSDN博客_gitignore"),t(a)])]),n("p",null,[n("a",R,[s("Git入门之.gitignore - 掘金 (juejin.cn)"),t(a)])]),P,n("p",null,[n("a",I,[s("逆地理编码 gc | 百度地图API SDK (baidu.com)"),t(a)])]),z,n("p",null,[n("a",K,[s("(210条消息) 更改v-html的样式_v-html 样式修改_oduoke~~的博客-CSDN博客"),t(a)])]),G])}const Z=p(u,[["render",J],["__file","method.html.vue"]]);export{Z as default};
