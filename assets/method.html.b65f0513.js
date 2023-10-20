import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as l,a as n,b as s,e as t,f as e,r as i}from"./app.384afca4.js";const c="/blog/vscodeTwoSearch.png",u="/blog/../../site/image-20231003160627704.png",r="/blog/../../site/image-20231003161322243.png",d={},k=e('<h1 id="工作问题及解决方法" tabindex="-1"><a class="header-anchor" href="#工作问题及解决方法" aria-hidden="true">#</a> 工作问题及解决方法</h1><h2 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode" aria-hidden="true">#</a> vscode</h2><h3 id="vscode代码片段" tabindex="-1"><a class="header-anchor" href="#vscode代码片段" aria-hidden="true">#</a> vscode代码片段</h3><p>点击Code-首选项-用户代码片段</p>',4),v={href:"https://99cc.vip/public/tools/vscode_snippet/index.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://snippet-generator.app/",target:"_blank",rel:"noopener noreferrer"},b=e('<h3 id="vscode-弹出扩展主机意外终止-次" tabindex="-1"><a class="header-anchor" href="#vscode-弹出扩展主机意外终止-次" aria-hidden="true">#</a> vscode 弹出扩展主机意外终止...次</h3><p>第一次遇到这种编辑器类似的问题，在网上找了挺多的解决方法，出现这种情况的原因大概是vscode的插件冲突，解决方法大体上就两种。</p><p>一种是卸载VScode,删除掉配置文件。在重装。（麻烦，没试过）</p><p>第二种是找出有问题的插件并卸载。查找方法有以下几种（我的vscode装了大概60个插件吧）</p><ul><li><p>卸载除基本插件外的所有插件，在一个个装，看到底是哪个有问题。（我感觉相当费时，所以没采用）</p></li><li><p>用vscode的二分查找，这个查找会找出可能存在冲突的插件，并禁用掉，我循环查了四五次，最终问题没有解决（用这个方法有问题的插件没有被筛出来）</p><p><img src="'+c+'" alt="vscodeTwoSearch" loading="lazy"></p></li><li><p>当弹出扩展主机意外终止的弹框时，点击<strong>打开开发人员工具</strong>，查看报错信息中关于host相关的部分，报错信息很长，只需要看头部的错误路径。我的错误路径中有easy-scss。所以猜测可能是安装的easy-scss插件有问题。于是我卸载了这个插件。（问题成功解决，不在弹出扩展主机意外终止弹框）</p></li></ul><p>这种遇到插件冲突的问题确实是很少遇到。我的也是突然出现的。记录一次解决方案。</p><h3 id="vscode-eslint-setting配置" tabindex="-1"><a class="header-anchor" href="#vscode-eslint-setting配置" aria-hidden="true">#</a> vscode eslint setting配置</h3>',7),g={href:"https://blog.csdn.net/G0000227/article/details/122093671",target:"_blank",rel:"noopener noreferrer"},h=n("h3",{id:"vscode看不到远程新建的分支-解决方法来了",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vscode看不到远程新建的分支-解决方法来了","aria-hidden":"true"},"#"),s(" vscode看不到远程新建的分支，解决方法来了")],-1),f={href:"https://blog.csdn.net/qq_39606853/article/details/122192555",target:"_blank",rel:"noopener noreferrer"},q=e(`<h3 id="快速删除文件夹下所有文件" tabindex="-1"><a class="header-anchor" href="#快速删除文件夹下所有文件" aria-hidden="true">#</a> 快速删除文件夹下所有文件</h3><p>在我们的项目安装依赖时，会生成 node_modules 文件夹，当出现依赖相关的问题难以解决时，可能会需要删除</p><p>node_modules 文件夹，在重新安装，但删除的过程很慢，此时有快速删除的方法。</p><p>全局安装 rimraf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install rimraf -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cd 到需要清空的文件夹父目录 ，控制台输入 <code>rimraf ‘要删除的文件名’</code> ，即可删除此目录下（包括所有子目录）下的所有文件。当所有文件被清空后，删除对应的文件夹，就可以很快速的删除了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rimraf node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="利用gitee搭建免费图床" tabindex="-1"><a class="header-anchor" href="#利用gitee搭建免费图床" aria-hidden="true">#</a> 利用Gitee搭建免费图床</h2>`,8),y={href:"https://blog.csdn.net/hannah2233/article/details/117025387",target:"_blank",rel:"noopener noreferrer"},x={href:"https://molunerfinn.com/PicGo/",target:"_blank",rel:"noopener noreferrer"},w=e('<p>gitee创建仓库，生成个人 token,在picGo上配置好 gitee 仓库信息和 个人 token, typora上配置图像上传的 PicGo 安装位置</p><p><img src="'+u+'" alt="image-20231003160627704" loading="lazy"></p><p><img src="'+r+`" alt="image-20231003161322243" loading="lazy"></p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><h2 id="下载-url" tabindex="-1"><a class="header-anchor" href="#下载-url" aria-hidden="true">#</a> 下载（url）</h2><h3 id="后端返回文件流-文档流-如何下载" tabindex="-1"><a class="header-anchor" href="#后端返回文件流-文档流-如何下载" aria-hidden="true">#</a> 后端返回文件流(文档流)如何下载</h3><p>例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导出指定字段Excel列表</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),_={href:"https://www.jianshu.com/p/b322c2d5d778",target:"_blank",rel:"noopener noreferrer"},j={href:"https://juejin.cn/post/6844903480704892942",target:"_blank",rel:"noopener noreferrer"},C=n("p",null,"对于其他的文件下载的内容可参考如下文章：",-1),D={href:"https://mp.weixin.qq.com/s/vZiP2ULrLRtqShDJ9u1n2A",target:"_blank",rel:"noopener noreferrer"},E=e(`<h3 id="根据url下载文件-并设置文件名" tabindex="-1"><a class="header-anchor" href="#根据url下载文件-并设置文件名" aria-hidden="true">#</a> 根据url下载文件，并设置文件名</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>            <span class="token function">downLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种</p>`,3),S={href:"https://mp.weixin.qq.com/s/W_udbGlYEhdyH1mtdtbrsQ",target:"_blank",rel:"noopener noreferrer"},L=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ts
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;el-form-item label=&quot;类别&quot; :prop=&quot;&#39;form.&#39; + index + &#39;.type&#39;&quot;
                    :rules=&quot;[
                      {
                        required: true,
                        message: &#39;教育类别不能为空&#39;,
                        trigger: &#39;change&#39;,
                      }
                    ]&quot;&gt;
                      &lt;el-select :disabled=&quot;disabled&quot;
                        v-model=&quot;educForm.form[index].type&quot;
                        placeholder=&quot;请选择教育类别&quot;
                        maxlength=&quot;30&quot;
                        style=&quot;width: 100%&quot;
                      &gt;
                        &lt;el-option
                          v-for=&quot;dict in educType&quot;
                          :key=&quot;dict.value&quot;
                          :label=&quot;dict.label&quot;
                          :value=&quot;dict.value&quot;
                        &gt;&lt;/el-option&gt;
                      &lt;/el-select&gt;
                    &lt;/el-form-item&gt;

data:{
	 educForm:{
        form:[{},{}]
      }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增加子表单时</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>addForm(){
    this.form.form4.push({
      //  platEdit: true,
    });
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每一个子表单有一个删除按钮，点击子表单的删除按钮时</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>delForm(item, index){
    this.form.form4.splice(index, 1);
    this.$forceUpdate();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="this-refs-formname-validat验证-自定义校验" tabindex="-1"><a class="header-anchor" href="#this-refs-formname-validat验证-自定义校验" aria-hidden="true">#</a> this.$refs[formName].validat验证（自定义校验）</h3>`,20),T={href:"https://www.jianshu.com/p/5ebd1bd9ecaf",target:"_blank",rel:"noopener noreferrer"},F=e(`<p>我的不生效原因是 自定义的正则校验有问题,正确的可以参考如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data(){
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h2><h3 id="自定义表单-表单生成器" tabindex="-1"><a class="header-anchor" href="#自定义表单-表单生成器" aria-hidden="true">#</a> 自定义表单（表单生成器）</h3>`,6),N={href:"https://juejin.cn/post/7065863860669906952",target:"_blank",rel:"noopener noreferrer"},P={href:"http://kcz66.gitee.io/k-form-design/#/README",target:"_blank",rel:"noopener noreferrer"},I=e(`<p>k-form-create使用</p><p>main.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { useAntd } from &#39;k-form-design/packages/core/useComponents&#39;
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ant-design-vue-a-select-下拉搜索" tabindex="-1"><a class="header-anchor" href="#ant-design-vue-a-select-下拉搜索" aria-hidden="true">#</a> ant design vue a-select 下拉搜索</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &lt;a-select
            v-model:value=&quot;searchCondition.lj&quot;
            show-search   // 开启下拉搜索
            optionFilterProp=&quot;label&quot; // 用label属性过滤。
          &gt;
            &lt;a-select-option 
              v-for=&quot; item in list &quot; 
              :value=&quot;item.code&quot; 
              :key=&quot;index&quot;
              :label=&quot;item.name&quot;
            &gt;
              {{ item.name }}
            &lt;/a-select-option&gt;
          &lt;/a-select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="适配" tabindex="-1"><a class="header-anchor" href="#适配" aria-hidden="true">#</a> 适配</h2><h3 id="vue项目-两套路由-适配-pc端-移动端" tabindex="-1"><a class="header-anchor" href="#vue项目-两套路由-适配-pc端-移动端" aria-hidden="true">#</a> vue项目（两套路由）适配 pc端 移动端</h3><p>vue项目开发中，我们已经开发实现了pc端的网站开发，当想要实现移动端适配时，当时有两种适配的方法作为参考。</p><p>一种是通过媒体查询适配不同的分辨率显示不同的样式。</p><p>第二种是写两套路由，一套pc端路由，一套移动端路由，移动端页面适当移植pc端页面代码，修改部分样式，以达到手机端显示正常的样式和结构。通过js判断使用设备是pc端还是移动端，来匹配不同的路由，显示不同的页面。</p><p>最终采用的是第二种实现方案，。 因为使用第二种方法对PC端和移动端进行了区分。对于PC端和移动端的特殊样式可以做到更加适配。以下是对于判断设备是手机端还是pc端参考的文章。</p><p><strong>vue-判断设备是手机端还是pc端，进行两套页面样式的编写</strong></p>`,16),U={href:"https://blog.csdn.net/hh3167253066/article/details/120290307",target:"_blank",rel:"noopener noreferrer"},A=n("p",null,[n("strong",null,"vue项目PC端移动端适配方案")],-1),$={href:"https://blog.csdn.net/weixin_53876218/article/details/125225893",target:"_blank",rel:"noopener noreferrer"},R=e(`<h3 id="vue项目适配屏幕分辨率与屏幕的缩放适配" tabindex="-1"><a class="header-anchor" href="#vue项目适配屏幕分辨率与屏幕的缩放适配" aria-hidden="true">#</a> vue项目适配屏幕分辨率与屏幕的缩放适配</h3><p>修改initial-scale的数值，原值为1.0，根据屏幕显示调整。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;meta name=&quot;viewport&quot;
          content=&quot;width=device-width, user-scalable=no, initial-scale=0.28, maximum-scale=0.28, minimum-scale=0.28&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),V={href:"https://blog.csdn.net/weixin_44692055/article/details/127843876",target:"_blank",rel:"noopener noreferrer"},B=n("h3",{id:"pc端网站在手机模式下打开显示不全的问题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pc端网站在手机模式下打开显示不全的问题","aria-hidden":"true"},"#"),s(" PC端网站在手机模式下打开显示不全的问题")],-1),O={href:"https://blog.csdn.net/ddyy2695734664/article/details/113248509",target:"_blank",rel:"noopener noreferrer"},z=e(`<h3 id="屏幕适配分辨率-不随屏幕缩放比变化" tabindex="-1"><a class="header-anchor" href="#屏幕适配分辨率-不随屏幕缩放比变化" aria-hidden="true">#</a> 屏幕适配分辨率，不随屏幕缩放比变化</h3><p>utils/devicePixelRatio.js (复制后在app.vue的created生命周期调用)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">DevicePixelRatio</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// this.flag = false;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 获取系统类型</span>
    <span class="token function">_getSystem</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// let flag = false;</span>
            <span class="token keyword">var</span> agent <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token comment">//		var isMac = /macintosh|mac os x/i.test(navigator.userAgent);</span>
            <span class="token comment">//		if(isMac) {</span>
            <span class="token comment">//			return false;</span>
            <span class="token comment">//		}</span>
            <span class="token comment">// 现只针对windows处理，其它系统暂无该情况，如有，继续在此添加</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>agent<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;windows&quot;</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 获取页面缩放比例</span>
        <span class="token comment">//	_getDevicePixelRatio() {</span>
        <span class="token comment">//		let t = this;</span>
        <span class="token comment">//	}</span>
        <span class="token comment">// 监听方法兼容写法</span>
    <span class="token function">_addHandler</span> <span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> type<span class="token punctuation">,</span> handler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>addEventListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>attachEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                element<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">&quot;on&quot;</span> <span class="token operator">+</span> type<span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                element<span class="token punctuation">[</span><span class="token string">&quot;on&quot;</span> <span class="token operator">+</span> type<span class="token punctuation">]</span> <span class="token operator">=</span> handler
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 校正浏览器缩放比例</span>
    <span class="token function">_correct</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> t <span class="token operator">=</span> <span class="token keyword">this</span>
            <span class="token comment">// 页面devicePixelRatio（设备像素比例）变化后，计算页面body标签zoom修改其大小，来抵消devicePixelRatio带来的变化。</span>
            document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;body&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>zoom <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> window<span class="token punctuation">.</span>devicePixelRatio
        <span class="token punctuation">}</span>
        <span class="token comment">// 监听页面缩放</span>
    <span class="token function">_watch</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> t <span class="token operator">=</span> <span class="token keyword">this</span>
            t<span class="token punctuation">.</span><span class="token function">_addHandler</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> <span class="token string">&quot;resize&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 注意这个方法是解决全局有两个window.resize</span>
                <span class="token comment">// 重新校正</span>
                t<span class="token punctuation">.</span><span class="token function">_correct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 初始化页面比例</span>
    <span class="token function">init</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> t <span class="token operator">=</span> <span class="token keyword">this</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">_getSystem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 判断设备，目前只在windows系统下校正浏览器缩放比例</span>
            <span class="token comment">// 初始化页面校正浏览器缩放比例</span>
            t<span class="token punctuation">.</span><span class="token function">_correct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token comment">// 开启监听页面缩放</span>
            t<span class="token punctuation">.</span><span class="token function">_watch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> DevicePixelRatio

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>App.vue</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-config-provider</span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>locale<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token punctuation">/&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-config-provider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> DevicePixelRatio <span class="token keyword">from</span> <span class="token string">&#39;./utils/devicePixelRatio&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token class-name">DevicePixelRatio</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">$route</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> <span class="token number">0</span>
      document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="postcss" tabindex="-1"><a class="header-anchor" href="#postcss" aria-hidden="true">#</a> postcss</h3><p><strong>使用postcss和相关插件时一定要注意包的版本的冲突</strong></p><p>npm install postcss postcss-loader -D</p>`,8),Y={href:"https://juejin.cn/post/7062717813764390948",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/sexyHuang/postcss-px2vp",target:"_blank",rel:"noopener noreferrer"},G=n("h3",{id:"vue-使用postcss-pxtorem-实现自适应",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-使用postcss-pxtorem-实现自适应","aria-hidden":"true"},"#"),s(" vue 使用postcss-pxtorem 实现自适应")],-1),H={href:"https://blog.csdn.net/Charissa2017/article/details/105420971",target:"_blank",rel:"noopener noreferrer"},K=n("h3",{id:"vue-使用postcss-pxtorem-实现自适应-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-使用postcss-pxtorem-实现自适应-1","aria-hidden":"true"},"#"),s(" vue 使用postcss-pxtorem 实现自适应")],-1),J={href:"https://juejin.cn/post/7052955004683943950",target:"_blank",rel:"noopener noreferrer"},W={href:"https://juejin.cn/post/7041826704574119966",target:"_blank",rel:"noopener noreferrer"},Q=e(`<ul><li>postcss-pxtorem：将px转换为px</li><li>amfe-flexible：为html、body添加font-size，窗口调整时候重新设置font-size</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install amfe-flexible --save
npm install postcss-pxtorem --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Z={href:"https://link.juejin.cn/?target=mailto%3Apostcss-pxtorem%405.1.1",target:"_blank",rel:"noopener noreferrer"},X=e(`<p>main.js引入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import &#39;amfe-flexible&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建postcss.config.js配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
    plugins: {
        autoprefixer: {},
        // flexible配置
        &quot;postcss-pxtorem&quot;: {
            &quot;rootValue&quot;: 75, // 设计稿宽度的1/10，自己根据项目需要设置
            &quot;propList&quot;: [&quot;*&quot;] // 需要做转化处理的属性，如\`hight\`、\`width\`、\`margin\`等，\`*\`表示全部
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="element-ui" tabindex="-1"><a class="header-anchor" href="#element-ui" aria-hidden="true">#</a> element UI</h2><h3 id="element的table错位" tabindex="-1"><a class="header-anchor" href="#element的table错位" aria-hidden="true">#</a> element的table错位</h3>`,6),nn={href:"https://blog.csdn.net/coralime/article/details/122979010",target:"_blank",rel:"noopener noreferrer"},sn=e(`<ol><li>给表格添加ref标志</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableRef<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableData<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li><p>doLayout 对 Table 进行重新布局</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// tableData是el-table绑定的数据</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 解决表格显示错位问题</span>
        <span class="token function">handler</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// tableRef是el-table绑定的ref属性值</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>tableRef<span class="token punctuation">.</span><span class="token function">doLayout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 对 Table 进行重新布局</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="timepicker设置只能选择当前时间之前或之后的时间" tabindex="-1"><a class="header-anchor" href="#timepicker设置只能选择当前时间之前或之后的时间" aria-hidden="true">#</a> TimePicker设置只能选择当前时间之前或之后的时间</h3><p>picker-options 当前时间日期选择器特有的选项</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;el-date-picker
	v-model=&quot;item.endYear&quot;
    :picker-options=&quot;pickerOptions&quot;
    type=&quot;datetime&quot;
    &gt;
&lt;/el-date-picker&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>:picker-options=“pickerOptions” 是限制选择时间的属性

data() {
    // 这里存放数据
    return {
      pickerOptions:{
          disabledDate (time) {
            //disabledDate 文档上：设置禁用状态，参数为当前日期，要求返回 Boolean
            return time.getTime() &gt; Date.now()//选当前时间之前的时间
            //return time.getTime() &lt; Date.now()//选当前时间之后的时间
          }
      },
    }
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="element-表格实现导入" tabindex="-1"><a class="header-anchor" href="#element-表格实现导入" aria-hidden="true">#</a> element 表格实现导入</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dialog</span>
      <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>upload.title<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:visible.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>upload.open<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400px<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">append-to-body</span>
    <span class="token punctuation">&gt;</span></span>
    
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-upload</span>
        <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>upload<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:limit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uploadData<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.xlsx, .xls<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:headers</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>upload.headers<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>upload.url<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>upload.isUploading<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:before-upload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>beforFileUp<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:on-progress</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleFileUploadProgress<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:on-success</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleFileSuccess<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:auto-upload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">drag</span>
      <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-icon-upload<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-upload__text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>将文件拖到此处，或<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>点击上传<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-upload__tip text-center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tip<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>仅允许导入xls、xlsx格式文件。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-link</span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:underline</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
            <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span> <span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline</span><span class="token punctuation">&quot;</span></span></span>
            <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>importTemplate<span class="token punctuation">&quot;</span></span>
            <span class="token punctuation">&gt;</span></span>下载模板<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-link</span>
          <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-upload</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- &lt;el-button type=&quot;primary&quot; @click=&quot;submitFileForm&quot;&gt;确 定&lt;/el-button&gt; --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>upload.open = false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>取 消<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dialog</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> getToken <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils/auth&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">upload</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 是否显示弹出层（员工导入）</span>
        <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">// 弹出层标题（员工导入）</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;导入&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 是否禁用上传</span>
        <span class="token literal-property property">isUploading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">// 是否更新已经存在的员工数据</span>
        <span class="token comment">// updateSupport: 0,</span>
        <span class="token comment">// 设置上传的请求头部</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">Authorization</span><span class="token operator">:</span> <span class="token string">&quot;Bearer &quot;</span> <span class="token operator">+</span> <span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 上传的地址</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_BASE_API</span> <span class="token operator">+</span> <span class="token string">&quot;/performance/abcdefg&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 上传时要传递的参数</span>
        <span class="token literal-property property">uploadData</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">taskId</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">templateId</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fileName</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fileName</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">submitFileForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">handleFileSuccess</span><span class="token punctuation">(</span><span class="token parameter">response<span class="token punctuation">,</span> file<span class="token punctuation">,</span> fileList</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;13579&#39;</span><span class="token punctuation">,</span>response<span class="token punctuation">,</span> file<span class="token punctuation">,</span> fileList<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>upload<span class="token punctuation">.</span>open <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>upload<span class="token punctuation">.</span>isUploading <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>upload<span class="token punctuation">.</span><span class="token function">clearFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//   this.$alert(</span>
    <span class="token comment">//     &quot;&lt;div style=&#39;overflow: auto;overflow-x: hidden;max-height: 70vh;padding: 10px 20px 0;&#39;&gt;&quot; +</span>
    <span class="token comment">//       response.msg +</span>
    <span class="token comment">//       &quot;&lt;/div&gt;&quot;,</span>
    <span class="token comment">//     &quot;导入结果&quot;,</span>
    <span class="token comment">//     { dangerouslyUseHTMLString: true }</span>
    <span class="token comment">//   );</span>
    <span class="token comment">//   this.getList();</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;上传成功&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&quot;getTableData&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">beforFileUp</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;before&quot;</span><span class="token punctuation">,</span>file<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>uploadData<span class="token punctuation">.</span>fileName<span class="token operator">=</span>file<span class="token punctuation">.</span>name
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 文件上传中处理</span>
    <span class="token function">handleFileUploadProgress</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> file<span class="token punctuation">,</span> fileList</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// console.log(&#39;before&#39;,file)</span>
        <span class="token comment">// this.uploadData.fileName=file.name</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>upload<span class="token punctuation">.</span>isUploading <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">importExcelHandleOpen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>upload<span class="token punctuation">.</span>open <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">importTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token string">&#39;performance/abc&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>queryParams
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">user_template_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.xlsx</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>less<span class="token punctuation">&#39;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据格式转化" tabindex="-1"><a class="header-anchor" href="#数据格式转化" aria-hidden="true">#</a> 数据格式转化</h2><h3 id="列表形数据转树形数据" tabindex="-1"><a class="header-anchor" href="#列表形数据转树形数据" aria-hidden="true">#</a> 列表形数据转树形数据</h3><p>来自若依框架</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 构造树型结构数据
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">data</span> 数据源
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">id</span> id字段 默认 &#39;id&#39;
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">parentId</span> 父节点字段 默认 &#39;parentId&#39;
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">children</span> 孩子节点字段 默认 &#39;children&#39;
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">handleTree</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> id<span class="token punctuation">,</span> parentId<span class="token punctuation">,</span> children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> id <span class="token operator">||</span> <span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">parentId</span><span class="token operator">:</span> parentId <span class="token operator">||</span> <span class="token string">&#39;parentId&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">childrenList</span><span class="token operator">:</span> children <span class="token operator">||</span> <span class="token string">&#39;children&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> childrenListMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> nodeIds <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> tree <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> d <span class="token keyword">of</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> parentId <span class="token operator">=</span> d<span class="token punctuation">[</span>config<span class="token punctuation">.</span>parentId<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>childrenListMap<span class="token punctuation">[</span>parentId<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      childrenListMap<span class="token punctuation">[</span>parentId<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    nodeIds<span class="token punctuation">[</span>d<span class="token punctuation">[</span>config<span class="token punctuation">.</span>id<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> d<span class="token punctuation">;</span>
    childrenListMap<span class="token punctuation">[</span>parentId<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> d <span class="token keyword">of</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> parentId <span class="token operator">=</span> d<span class="token punctuation">[</span>config<span class="token punctuation">.</span>parentId<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nodeIds<span class="token punctuation">[</span>parentId<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      tree<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> t <span class="token keyword">of</span> tree<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">adaptToChildrenList</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">adaptToChildrenList</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>childrenListMap<span class="token punctuation">[</span>o<span class="token punctuation">[</span>config<span class="token punctuation">.</span>id<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      o<span class="token punctuation">[</span>config<span class="token punctuation">.</span>childrenList<span class="token punctuation">]</span> <span class="token operator">=</span> childrenListMap<span class="token punctuation">[</span>o<span class="token punctuation">[</span>config<span class="token punctuation">.</span>id<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>o<span class="token punctuation">[</span>config<span class="token punctuation">.</span>childrenList<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> c <span class="token keyword">of</span> o<span class="token punctuation">[</span>config<span class="token punctuation">.</span>childrenList<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">adaptToChildrenList</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> tree<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue项目使用scss时-版本冲突" tabindex="-1"><a class="header-anchor" href="#vue项目使用scss时-版本冲突" aria-hidden="true">#</a> vue项目使用scss时，版本冲突</h2><p>下载scss后，启动项目报错，这个错误发生的原因是node和scss的版本不兼容，出现这种问题需要去网上查找兼容的scss版本，在重新安装。（找这个还挺麻烦的，来回卸载重下（试错）还是很费时的。版本冲突很麻烦，推荐使用less）</p><p>我的node的版本是 v16.13.1，以下是和我的node版本兼容的scss版本</p><p><strong>安装node-sass</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install node-sass@6.0.1 --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>安装sass-loader</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install sass-loader@10.2.0 --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="vue开发中出现loading-chunk-failed-踩坑纪实" tabindex="-1"><a class="header-anchor" href="#vue开发中出现loading-chunk-failed-踩坑纪实" aria-hidden="true">#</a> Vue开发中出现Loading Chunk Failed 踩坑纪实</h2><p>（出现这个错误会页面空白）</p>`,22),an={href:"https://juejin.cn/post/7080189425975558181",target:"_blank",rel:"noopener noreferrer"},tn=n("h2",{id:"vue实现全屏滚动效果",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue实现全屏滚动效果","aria-hidden":"true"},"#"),s(" vue实现全屏滚动效果")],-1),en={href:"https://blog.csdn.net/weixin_41192489/article/details/111104443",target:"_blank",rel:"noopener noreferrer"},pn=e(`<h2 id="vue页面中的锚点跳转" tabindex="-1"><a class="header-anchor" href="#vue页面中的锚点跳转" aria-hidden="true">#</a> vue页面中的锚点跳转</h2><p>在vue项目中，页面中设置锚点，并在某一位置跳转到锚点位置</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>基本信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>        跳转到的地方 根据id跳转

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue路由导航守卫" tabindex="-1"><a class="header-anchor" href="#vue路由导航守卫" aria-hidden="true">#</a> vue路由导航守卫</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// router文件中</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/...&#39;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;...&#39;</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">isLogin</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span>  <span class="token comment">// true显示，false不显示</span>
<span class="token punctuation">}</span>

<span class="token comment">//  路由全局首位</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span>from<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">//   登录验证  1 进入路由界面是否需要验证</span>
    <span class="token comment">//  2  再验证是否登录</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>isLogin<span class="token punctuation">)</span><span class="token punctuation">{</span>    <span class="token comment">// true需要登录</span>
    <span class="token comment">//  再验证是否登录，假设已经登录</span>
        <span class="token keyword">let</span> token<span class="token operator">=</span>window<span class="token punctuation">.</span>sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>        
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token comment">//  没有登陆过，跳转登录界面</span>
            <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span>        
        <span class="token punctuation">}</span>    
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-this-router-跳转打开新页面" tabindex="-1"><a class="header-anchor" href="#vue-this-router-跳转打开新页面" aria-hidden="true">#</a> vue this.$router 跳转打开新页面</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>go (item) {
      const url = this.$router.resolve({ path: &#39;/job/company&#39;, query: { id: item.id } })
      window.open(url.href, &#39;_blank&#39;)
    },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git中上传时忽略文件-gitignore-配置" tabindex="-1"><a class="header-anchor" href="#git中上传时忽略文件-gitignore-配置" aria-hidden="true">#</a> git中上传时忽略文件 .gitignore 配置</h2><p>对于.gitignore的配置可参考如下的文章</p>`,10),on={href:"https://blog.csdn.net/ThinkWon/article/details/101447866",target:"_blank",rel:"noopener noreferrer"},ln={href:"https://juejin.cn/post/6998911250323390501",target:"_blank",rel:"noopener noreferrer"},cn=e(`<p>普通的vue文件的可参考如下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.DS_Store
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="axios请求获取本地静态文件-动态获取json数据" tabindex="-1"><a class="header-anchor" href="#axios请求获取本地静态文件-动态获取json数据" aria-hidden="true">#</a> axios请求获取本地静态文件(动态获取json数据)</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// json数据存放在 public文件夹下(动态获取json数据)

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="百度地图根据地址解析坐标系-根据地址展示地图位置" tabindex="-1"><a class="header-anchor" href="#百度地图根据地址解析坐标系-根据地址展示地图位置" aria-hidden="true">#</a> 百度地图根据地址解析坐标系（根据地址展示地图位置）</h2>`,11),un={href:"https://lbs.baidu.com/index.php?title=webapi/guide/webservice-geocoding",target:"_blank",rel:"noopener noreferrer"},rn={href:"https://dafrok.github.io/vue-baidu-map/#/zh/index",target:"_blank",rel:"noopener noreferrer"},dn=e(`<p>VUE BAIDU MAP</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install vue-baidu-map --save

main.js

import Vue from &#39;vue&#39;
import BaiduMap from &#39;vue-baidu-map&#39;

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: &#39;YOUR_APP_KEY&#39;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install --save vue-jsonp

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

&lt;style&gt;
.bm-view {
  width: 100%;
  height: 300px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件内使用 address:&#39;要解析的地址名&#39; ak:&#39;百度网站上申请的ak,个人标识&#39; output: &#39;json&#39;,callback: &#39;showLocation&#39;固定</p><p>返回值里 json.result.location是一个包含坐标系的对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//mapCenter: &quot;&quot;,
//mapCenterAddress: { lat: &quot;123&quot;, lng: &quot;123&quot; },

// 百度地图地址解析(mapCenter是地址)
    TypeMap () {
      // this.mapCenter = &quot;中国（山东）自由贸易试验区济南片区新泺大街1166号奥盛大厦1号楼2333-2室&quot;
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
    
    
   mounted(){
   		this.mapCenter = &#39;山东省济南市天桥区1123号&#39;
        this.typeMap()
   }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue的v-html解析富文本传来的表格不显示边线" tabindex="-1"><a class="header-anchor" href="#vue的v-html解析富文本传来的表格不显示边线" aria-hidden="true">#</a> vue的v-html解析富文本传来的表格不显示边线</h2>`,8),kn={href:"https://blog.csdn.net/xh1506101064/article/details/106675796",target:"_blank",rel:"noopener noreferrer"},vn=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;content-table&quot; v-html=&quot;abc&quot;&gt;&lt;/div&gt;


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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-keep-alive-页面缓存" tabindex="-1"><a class="header-anchor" href="#vue-keep-alive-页面缓存" aria-hidden="true">#</a> vue keep-alive 页面缓存</h2><p>router</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> {
    path: &#39;/companyFronts/index&#39;,
    name: &#39;companyFonts&#39;,
    component: () =&gt; import(&#39;@/views/companyFronts/jobIndex/index.vue&#39;),
    meta: { title: &#39;企业列表&#39;, icon: &#39;&#39;, affix: true, keepAlive: true }
  },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.vue</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;app&quot;&gt;
      &lt;keep-alive&gt;
        &lt;router-view v-if=&quot;$route.meta.keepAlive&quot;&gt;&lt;/router-view&gt;
      &lt;/keep-alive&gt;
      &lt;router-view v-if=&quot;!$route.meta.keepAlive&quot;&gt;&lt;/router-view&gt;
    &lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ant-design-of-vue" tabindex="-1"><a class="header-anchor" href="#ant-design-of-vue" aria-hidden="true">#</a> Ant Design of Vue</h2><h3 id="ant-design-of-vue-a-table-表格行满足条件高亮" tabindex="-1"><a class="header-anchor" href="#ant-design-of-vue-a-table-表格行满足条件高亮" aria-hidden="true">#</a> Ant Design of Vue a-table 表格行满足条件高亮</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;a-table
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ant-design-vue表格实现导入" tabindex="-1"><a class="header-anchor" href="#ant-design-vue表格实现导入" aria-hidden="true">#</a> ant design vue表格实现导入</h3><p>importExcel.vue</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-modal</span>
    <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:confirm-loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uploading<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>importExcelHandleCancel<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@ok</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>importExcelHandleChange<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-spin</span> <span class="token attr-name">tip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>上传中...<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:spinning</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uploading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-upload-dragger</span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.xlsx, .xls<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:file-list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fileList<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:multiple</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:remove</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleRemove<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:before-upload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>beforeUpload<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ant-upload-drag-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inbox<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ant-upload-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>请将文件拖拽到此处上传<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ant-upload-hint<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          请先导出再导入上传，支持单个上传，也可以点击后选择文件上传
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-upload-dragger</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>importTemplate<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>下载模板<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-spin</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-modal</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> importPositionData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/api/rpo/recruit&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;ImportExcel&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;导入&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">uploadStatus</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fileList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// 是否禁用上传</span>
      <span class="token literal-property property">uploading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">updateSupport</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tableData</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">projcetid</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">importTemplate</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tableData<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tableData<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">download</span><span class="token punctuation">(</span>
        <span class="token string">&quot;/position/positionInfo/downloadTemplateExcel&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">职位导入_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.xlsx</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/** 导入excel窗体关闭 */</span>
    <span class="token function">importExcelHandleCancel</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>open <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>fileList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token comment">// 关闭后刷新列表</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&quot;ok&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/** 导入excel窗体开启 */</span>
    <span class="token function">importExcelHandleOpen</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tableData <span class="token operator">=</span> val
      <span class="token keyword">this</span><span class="token punctuation">.</span>open <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">beforeUpload</span> <span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>fileList <span class="token operator">=</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/** 导入excel */</span>
    <span class="token function">importExcelHandleChange</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>uploading <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> fileList <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
      <span class="token keyword">const</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span> fileList<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token comment">// formData.append(&#39;updateSupport&#39;, this.updateSupport)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>formData<span class="token punctuation">,</span> fileList<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token function">importPositionData</span><span class="token punctuation">(</span>formData<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>fileList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>msg<span class="token punctuation">)</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>open <span class="token operator">=</span> <span class="token boolean">false</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&quot;ok&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>uploading <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">handleCheckedUpdateSupport</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>updateSupport <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>updateSupport <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">handleRemove</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>fileList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>uploading <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>importExcel</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>importExcel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>importExcel</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dashed<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$refs.importExcel.importExcelHandleOpen()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vertical-align-top<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            批量导入
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内网穿透" tabindex="-1"><a class="header-anchor" href="#内网穿透" aria-hidden="true">#</a> 内网穿透</h2>`,22),mn={href:"https://natapp.cn/",target:"_blank",rel:"noopener noreferrer"},bn=n("p",null,"下载软件，网站上配置隧道",-1),gn=n("p",null,"启动命令：natapp.exe -authtoken=你的authtoken",-1),hn=n("p",null,"这个authtoken是在natapp里面创建免费的隧道产生的。",-1),fn=n("p",null,"注意隧道的端口要配置成你的后台端口，例如9090",-1),qn=n("p",null,"直接在上面的命令后面加上就可以启动你的natapp，设置内网穿透了。",-1),yn=n("p",null,"内网穿透就是把本机的ip和端口暴露到外网，通过指定的url可以访问你本地的服务，当然，这存在一定的安全风险，请谨慎使用！",-1),xn={href:"http://nyqre4.natappfree.cc",target:"_blank",rel:"noopener noreferrer"},wn={href:"https://blog.csdn.net/u013154103/article/details/102481846",target:"_blank",rel:"noopener noreferrer"},_n=n("p",null,"vue项目使用内网穿透要加配置",-1),jn=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`disableHostCheck:true
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),Cn={href:"https://blog.csdn.net/dakache11/article/details/83989296",target:"_blank",rel:"noopener noreferrer"},Dn={href:"https://blog.csdn.net/GTbond/article/details/124375319",target:"_blank",rel:"noopener noreferrer"};function En(Sn,Ln){const a=i("ExternalLinkIcon");return o(),l("div",null,[k,n("p",null,[n("a",v,[s("vsCode 代码片段 自动生成格式 (99cc.vip)"),t(a)])]),n("p",null,[n("a",m,[s("snippet generator (snippet-generator.app)"),t(a)])]),b,n("p",null,[n("a",g,[s("(206条消息) Vscode如何配置属于自己的ESlint_vscode eslint配置_·甘之如饴·的博客-CSDN博客"),t(a)])]),h,n("p",null,[n("a",f,[s("https://blog.csdn.net/qq_39606853/article/details/122192555"),t(a)])]),q,n("p",null,[n("a",y,[s("利用Gitee搭建免费图床（详细教程）_gitee图床-CSDN博客"),t(a)])]),n("p",null,[s("下载 picGo "),n("a",x,[s("PicGo (molunerfinn.com)"),t(a)])]),w,n("p",null,[s("对于blob可点击 "),n("a",_,[s("JS中的Blob对象 - 简书 (jianshu.com)"),t(a)])]),n("p",null,[n("a",j,[s("JavaScript 中 Blob 对象 - 掘金 (juejin.cn)"),t(a)]),s(" 文章查看")]),C,n("p",null,[n("a",D,[s("前端文件下载的正确打开方式 (qq.com)"),t(a)])]),E,n("p",null,[n("a",S,[s("你真的会用标签下载文件吗? (qq.com)"),t(a)])]),L,n("p",null,[s("验证不生效可参考文章 "),n("a",T,[s("https://www.jianshu.com/p/5ebd1bd9ecaf"),t(a)])]),F,n("p",null,[n("a",N,[s("vue拖拽表单生成器 - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[s("适用ant design vue ( "),n("a",P,[s("KFormDesign (gitee.io)"),t(a)]),s(" )")]),I,n("p",null,[n("a",U,[s("(115条消息) vue-判断设备是手机端还是pc端，进行两套页面样式的编写_hh3167253066的博客-CSDN博客_vue判断手机端还是pc端"),t(a)])]),A,n("p",null,[n("a",$,[s("(115条消息) vue项目PC端移动端适配方案_coderDragon的博客-CSDN博客_vue项目pc端和移动端适配"),t(a)])]),R,n("p",null,[n("a",V,[s("(198条消息) vue项目适配屏幕分辨率与屏幕的缩放适配详细教程_vue 分辨率适配_汪小敏同学的博客-CSDN博客"),t(a)])]),B,n("p",null,[n("a",O,[s("(227条消息) PC端网站在手机模式下打开显示不全的问题_手机pc端口 显示不全面_大大大颖er的博客-CSDN博客"),t(a)])]),z,n("p",null,[n("a",Y,[s("https://juejin.cn/post/7062717813764390948"),t(a)])]),n("p",null,[n("strong",null,[n("a",M,[s("postcss-px2vp"),t(a)])])]),G,n("p",null,[n("a",H,[s("(230条消息) vue-cli中使用postcss-px-to-viewport 将px转换成vw_px to vw_蒲公英芽的博客-CSDN博客"),t(a)])]),K,n("p",null,[n("a",J,[s("https://juejin.cn/post/7052955004683943950"),t(a)])]),n("p",null,[n("a",W,[s("https://juejin.cn/post/7041826704574119966"),t(a)])]),Q,n("p",null,[s("如果报错，则需要指定postcss-pxtorem版本，如： npm install "),n("a",Z,[s("postcss-pxtorem@5.1.1"),t(a)]),s(" --save-dev")]),X,n("p",null,[n("a",nn,[s("https://blog.csdn.net/coralime/article/details/122979010"),t(a)])]),sn,n("p",null,[n("a",an,[s("Vue开发中出现Loading Chunk Failed 踩坑纪实 - 掘金 (juejin.cn)"),t(a)])]),tn,n("p",null,[s("查看以下博客 "),n("a",en,[s("(130条消息) vue全屏滚动——vue-fullpage.js教程_朝阳39的博客-CSDN博客_vue-fullpage"),t(a)])]),pn,n("p",null,[n("a",on,[s("(132条消息) Git忽略文件.gitignore详解_ThinkWon的博客-CSDN博客_gitignore"),t(a)])]),n("p",null,[n("a",ln,[s("Git入门之.gitignore - 掘金 (juejin.cn)"),t(a)])]),cn,n("p",null,[n("a",un,[s("逆地理编码 gc | 百度地图API SDK (baidu.com)"),t(a)])]),n("p",null,[n("a",rn,[s("https://dafrok.github.io/vue-baidu-map/#/zh/index"),t(a)])]),dn,n("p",null,[n("a",kn,[s("(210条消息) 更改v-html的样式_v-html 样式修改_oduoke~~的博客-CSDN博客"),t(a)])]),vn,n("p",null,[s("我用的是natapp，下载地址："),n("a",mn,[s("https://natapp.cn/"),t(a)])]),bn,gn,hn,fn,qn,yn,n("p",null,[s("使用命令开启natapp后，会生成一个外网的地址指向你本地的服务地址，当你访问 "),n("a",xn,[s("http://nyqre4.natappfree.cc"),t(a)]),s("，跟你访问 127.0.0.1:9090 效果是一样的，只不过一个是对外的，一个是只能本地访问。")]),n("p",null,[n("a",wn,[s("内网穿透 vue 返回 invalid host header（304 Not Modified）-----gxy_勤读意现的博客-CSDN博客"),t(a)])]),_n,jn,n("p",null,[n("a",Cn,[s("vue项目中无法实现内网穿透，因为localhost的限制_dakache11的博客-CSDN博客"),t(a)])]),n("p",null,[n("a",Dn,[s("vue内网穿透_vue项目内网穿透 转圈_GG·bond的博客-CSDN博客"),t(a)])])])}const Nn=p(d,[["render",En],["__file","method.html.vue"]]);export{Nn as default};
