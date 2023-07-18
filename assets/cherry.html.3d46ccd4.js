import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as t,a as n,b as e,e as i,f as a,r as d}from"./app.684a5af9.js";const o="/blog/press4.png",c="/blog/press1.png",p="/blog/press2.png",u="/blog/press3.png",v={},m=a('<h1 id="vuepress-and-nginx-and-docker" tabindex="-1"><a class="header-anchor" href="#vuepress-and-nginx-and-docker" aria-hidden="true">#</a> vuePress and nginx and docker</h1><h2 id="vuepress基本使用-部署github" tabindex="-1"><a class="header-anchor" href="#vuepress基本使用-部署github" aria-hidden="true">#</a> vuePress基本使用（部署github）</h2><h2 id="非自动化部署" tabindex="-1"><a class="header-anchor" href="#非自动化部署" aria-hidden="true">#</a> (非自动化部署)</h2><p>github 创建仓库 blog<br> 在 blog 下新建分支 gh-pages</p><p><img src="'+o+'" alt="press1" loading="lazy"></p><p>切换分支到 gh-pages<br> 本地新建 blog 文件夹 连接远程 github仓库<br> 在blog文件夹下下载配置vuepress,并将源代码打包<br> 在github的blog仓库下的settings里面设置git pages,切换到gh-pages<br> 将打包后的dist目录下的文件上传至github的gh-pages 分支。</p><p><img src="'+c+'" alt="press1" loading="lazy"></p><p><img src="'+p+'" alt="press1" loading="lazy"></p>',8),h={href:"https://fankozhang.github.io/blog/",target:"_blank",rel:"noopener noreferrer"},b=a('<p><img src="'+u+`" alt="press1" loading="lazy"></p><p>如果出现样式不显示问题，记得修改base路径<br> 一般base路径改成 &#39; /blog/&#39; ，视自己的文件而定。</p><h2 id="自动化部署" tabindex="-1"><a class="header-anchor" href="#自动化部署" aria-hidden="true">#</a> （自动化部署）</h2><p>github 创建仓库 blog</p><p>本地新建 blog 文件夹 连接远程 github仓库</p><p>在本地blog文件夹中编写源码，在package.json中配置如下的运行命令。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &quot;scripts&quot;: {
    &quot;docs:build&quot;: &quot;vuepress build src&quot;,
    &quot;docs:clean-dev&quot;: &quot;vuepress dev src --clean-cache&quot;,
    &quot;docs:dev&quot;: &quot;vuepress dev src&quot;
  },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在blog文件夹下按 <strong>blob/.github/workflows</strong>路径创建文件夹，在workflows文件夹下创建deploy-docs.yml文件，文件内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
name: 部署文档

on:
  push:
    branches:
      # 确保这是你正在使用的分支名称
      - main

jobs:
  deploy-gh-pages:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
          # 如果你文档需要 Git 子模块，取消注释下一行
          # submodules: true



      - name: 设置 Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm

      - name: 安装依赖
        run: npm ci

      - name: 构建文档
        env:
          NODE_OPTIONS: --max_old_space_size=8192
        run: |-
          npm run docs:build
          &gt; src/.vuepress/dist/.nojekyll

      - name: 部署文档
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 这是文档部署到的分支名称
          branch: gh-pages
          folder: src/.vuepress/dist

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当源文件和.github文件的内容都准备好后，将blog文件夹下的内容全部上传到github仓库。工作流运行一段时间后，打包成功，在gh-pages分支查看打包后的源码。随后刷新github pages的网页地址，就能看到更新后的内容。</p><p>当下次对本地blog文件夹下的源代码进行修改时，直接提交远程仓库即可。工作流会自动执行打包命令。等一段时间后刷新，就能看到刷新后的内容了。</p><h2 id="vuepress主题" tabindex="-1"><a class="header-anchor" href="#vuepress主题" aria-hidden="true">#</a> vuepress主题</h2>`,12),g={href:"https://theme-hope.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},_=n("h2",{id:"nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx","aria-hidden":"true"},"#"),e(" nginx")],-1),x={href:"https://www.bilibili.com/video/BV1ZU4y1m7GL?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.csdn.net/qq_44299529/category_11626217.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.w3schools.cn/nginx/nginx_http_expires.asp",target:"_blank",rel:"noopener noreferrer"},w=n("h3",{id:"安装虚拟机-linux-nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装虚拟机-linux-nginx","aria-hidden":"true"},"#"),e(" 安装虚拟机，linux, nginx")],-1),z=n("p",null,"装上centos7 linux。在Linux上安装 nginx 我参考了如下两篇文章",-1),q={href:"https://juejin.cn/post/6990643580809248781",target:"_blank",rel:"noopener noreferrer"},y={href:"https://juejin.cn/post/7136114724542316558",target:"_blank",rel:"noopener noreferrer"},C=n("p",null,"安装nginx的过程中出现 nginx: [emerg] still could not bind() 需要注意端口和进程占用的问题",-1),j={href:"https://blog.csdn.net/jiaoshu__/article/details/119304374",target:"_blank",rel:"noopener noreferrer"},N={href:"https://blog.csdn.net/ProBaiXiaodi/article/details/124943251",target:"_blank",rel:"noopener noreferrer"},A={href:"https://mp.weixin.qq.com/s/33K0XfZ8bAT95qmrhzvRDw",target:"_blank",rel:"noopener noreferrer"},D=a('<p>使用阿里服务器安装的时候要设置安全组 ，入口 和 出口 都要设置80端口的，否则网页打不开。</p><h3 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令" aria-hidden="true">#</a> 基本命令</h3><p>管理员权限 su root</p><p>start nginx.exe // 部署nginx文件后，启动nginx服务</p><p>1、cd /usr/local/nginx/sbin/ <em>//进入目录</em></p><p>2、./nginx <em>//启动</em></p><p>./nginx -t 检查配置文件是否有问题</p><p>./nginx -v 查看nginx版本</p><p>./nginx -h 查看帮助</p><p>3、./nginx -s stop <em>//停止</em></p><p>4、./nginx -s quit <em>//安全退出</em>（比stop友好）</p><p>5、./nginx -s reload <em>//重载配置文件（修改了配置文件需要执行此命令 比较常用）</em></p><p>6、ps aux|grep nginx <em>//查看ngnix进程</em></p><p>ps -ef|grep nginx 查看nginx进程</p><p>netstat -ntlp|grep 80 查看端口情况</p><p>kill -9 进程号</p><p>netstat -antp | grep nginx 查看端口是否开启</p><h3 id="增加server-开放端口" tabindex="-1"><a class="header-anchor" href="#增加server-开放端口" aria-hidden="true">#</a> 增加server（开放端口）</h3><p>当在一个config文件里配置多个server时，要将server里监听的端口号开放出来，否则外部访问不了</p>',19),E={href:"https://blog.csdn.net/qq_42584971/article/details/103874472",target:"_blank",rel:"noopener noreferrer"},T=n("p",null,"设置防火墙对外开放端口",-1),I=n("p",null,"firewall-cmd --list-all 查看开放的端口号 sudo firewall-cmd --add-port=8000/tcp --permanent 开放8000端口 （需要的端口开放出来）",-1),L=n("p",null,"重启防火墙firewall-cmd --reload",-1),P=n("h3",{id:"nginx日志切割",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx日志切割","aria-hidden":"true"},"#"),e(" nginx日志切割")],-1),S={href:"https://juejin.cn/post/6964052819980582949",target:"_blank",rel:"noopener noreferrer"},G={href:"https://blog.csdn.net/lc013/article/details/103775702",target:"_blank",rel:"noopener noreferrer"},O=a(`<h3 id="配置静态资源文件服务器-存放静态文件" tabindex="-1"><a class="header-anchor" href="#配置静态资源文件服务器-存放静态文件" aria-hidden="true">#</a> 配置静态资源文件服务器 （存放静态文件）</h3><p>在 根目录的 home 文件夹下新建 assets 文件夹用于存放 静态文件（图片，视频） (自己选择放在那个文件夹下，但要确定配置的文件不能出错)</p><p>nginx.config 增加如下server配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置静态服务器，存放静态文件</span>
	server <span class="token punctuation">{</span>
        listen       <span class="token number">90</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>
        
         location / <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
            index  index.html index.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

		<span class="token comment">#同一个server下配置多个locationlocation的匹配路径不能一样</span>
		<span class="token comment"># location后面是路径的匹配规则，会拼接到root路径后面;变成  /home/assets</span>
        
        location /assets <span class="token punctuation">{</span>
            root   /home<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        location /static <span class="token punctuation">{</span>
            <span class="token comment">#alias  用于配置路径的别名</span>
            <span class="token builtin class-name">alias</span>		/home/assets<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开监听的 90 端口 sudo firewall-cmd --add-port=90/tcp --permanent ； 重启防火墙firewall-cmd --reload</p><p>重启nginx ./nginx -s reload</p><p>访问路径</p>`,7),U={href:"http://192.168.64.128:90/",target:"_blank",rel:"noopener noreferrer"},B={href:"http://192.168.64.128:90/assets/12345678.png",target:"_blank",rel:"noopener noreferrer"},K={href:"http://192.168.64.128:90/static/12345678.png",target:"_blank",rel:"noopener noreferrer"},V=n("h3",{id:"开启gzip压缩",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#开启gzip压缩","aria-hidden":"true"},"#"),e(" 开启gzip压缩")],-1),M={href:"https://blog.csdn.net/php12345679/article/details/80843939",target:"_blank",rel:"noopener noreferrer"},$=a(`<p>gzip配置的常用参数</p><p>gzip on|off; #是否开启gzip</p><p>gzip_buffers 32 4K| 16 8K #缓冲(压缩在内存中缓冲几块? 每块多大?)</p><p>gzip_comp_level [1-9] #推荐6 压缩级别(级别越高,压的越小,越浪费CPU计算资源)</p><p>gzip_disable #正则匹配UA 什么样的Uri不进行gzip</p><p>gzip_min_length 200 # 开始压缩的最小长度(再小就不要压缩了,意义不在)</p><p>gzip_http_version 1.0|1.1 # 开始压缩的http协议版本(可以不设置,目前几乎全是1.1协议)</p><p>gzip_proxied # 设置请求者代理服务器,该如何缓存内容</p><p>gzip_types text/plain application/xml # 对哪些类型的文件用压缩 如txt,xml,html ,css</p><p>gzip_vary on|off # 是否传输gzip压缩标志</p><p>注意：</p><p>图片/mp3这样的二进制文件,不必压缩</p><p>因为压缩率比较小, 比如100-&gt;80字节,而且压缩也是耗费CPU资源的.</p><p>比较小的文件不必压缩,</p><p>示例：nginx config 加入如下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gzip on;
	gzip_buffers 32 4K;
	gzip_comp_level 6;
        gzip_min_length 100;
	gzip_types  text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
        gzip_disable &quot;MSIE [1-6]\\.&quot;; #配置禁用gzip条件，支持正则。此处表示ie6及以下不启用gzip（因为ie低版本不支持）
        gzip_vary on;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路径匹配" tabindex="-1"><a class="header-anchor" href="#路径匹配" aria-hidden="true">#</a> 路径匹配</h3><p>= 精确匹配</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
        listen       <span class="token number">91</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

	  <span class="token comment">#精确匹配</span>
        location <span class="token operator">=</span> / <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
            index  index.html index.htm<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
	 location <span class="token operator">=</span> /assets/12345678.png <span class="token punctuation">{</span>
            root   /home<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>~ 正则匹配</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
        listen       <span class="token number">92</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

	  <span class="token comment">#正则表达式匹配  *代表不区分大小写，不写区分大小写 （匹配到的后缀名的都能请求到）</span>
        location ~* <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>GIF<span class="token operator">|</span>png<span class="token operator">|</span>bmp<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            root   /home<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>^~ 以某个字符路径开头请求</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
        listen       93;
        server_name  localhost;

	  #  ^~ 以某个字符路径开头请求  （ ^  非 的意思）
	  #  可以请求到 /home/assets/img 下的资源,请求不到 /home/assets/video 下的资源
	  
        location  ^~ /assets/img {
            root   /home;
          }
        
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx跨域配置" tabindex="-1"><a class="header-anchor" href="#nginx跨域配置" aria-hidden="true">#</a> nginx跨域配置</h3>`,24),H={href:"https://blog.csdn.net/qq_38011415/article/details/107095403",target:"_blank",rel:"noopener noreferrer"},Z=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
        listen       <span class="token number">90</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

		<span class="token comment">#允许跨域请求的域，* 代表所有</span>
		add_header <span class="token string">&#39;Access-Control-Allow-Origin&#39;</span> *<span class="token punctuation">;</span>
		<span class="token comment">#允许请求的header</span>
		add_header <span class="token string">&#39;Access-Control-Allow-Headers&#39;</span> *<span class="token punctuation">;</span>
		<span class="token comment">#允许带上cookie请求</span>
		add_header <span class="token string">&#39;Access-Control-Allow-Credentials&#39;</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">;</span>
		<span class="token comment">#允许请求的方法，比如 GET,POST,PUT,DELETE</span>
		add_header <span class="token string">&#39;Access-Control-Allow-Methods&#39;</span> *<span class="token punctuation">;</span>

        location /assets <span class="token punctuation">{</span>
            root   /home<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置防盗链" tabindex="-1"><a class="header-anchor" href="#配置防盗链" aria-hidden="true">#</a> 配置防盗链</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
        listen       90;
        server_name  localhost;

		#允许跨域请求的域，* 代表所有
		add_header &#39;Access-Control-Allow-Origin&#39; *;
		#允许请求的header
		add_header &#39;Access-Control-Allow-Headers&#39; *;
		#允许带上cookie请求
		add_header &#39;Access-Control-Allow-Credentials&#39; &#39;true&#39;;
		#允许请求的方法，比如 GET,POST,PUT,DELETE
		add_header &#39;Access-Control-Allow-Methods&#39; *;

		#防盗链配置 #对源站点进行验证  valid_referers 后面是匹配的域名
        valid_referers  *.imooc.com;
		#非法引入会进入下方判断
		if ($invalid_referer) {
				return 403;
		}

        location /assets {
            
            root   /home;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx-搭建-集群" tabindex="-1"><a class="header-anchor" href="#nginx-搭建-集群" aria-hidden="true">#</a> nginx 搭建 集群</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#配置上游服务器 (每一个server都是一台服务器) tomcats是名字，可自己配置
#weight用设置权重，默认为1，weight数值越大，权重越高，请求的次数越多
upstream tomcats {
    server192.168.1.173:8080 weight=1;
    server192.168.1.174:8080 weight=2;
    server192.168.1.175:8080;
    
    #keepalive 加上这个设置可以提高吞吐量  
    keepalive   32;
}
server{
	listen  80;
	servername   www.tomcats.com;
	location / {
     proxy_pass  http://tomcats;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx中的upstream指令参数" tabindex="-1"><a class="header-anchor" href="#nginx中的upstream指令参数" aria-hidden="true">#</a> nginx中的upstream指令参数</h3>`,6),W={href:"https://blog.csdn.net/qq_44299529/article/details/122946397",target:"_blank",rel:"noopener noreferrer"},X=n("h3",{id:"nginx控制浏览器缓存",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx控制浏览器缓存","aria-hidden":"true"},"#"),e(" nginx控制浏览器缓存")],-1),R=n("p",null,"expires用于对缓存的设置（可以在server里面配置，也可以在location里面配置）",-1),F={href:"https://cloud.tencent.com/developer/article/1918457",target:"_blank",rel:"noopener noreferrer"},J=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    expires    24h;                             # 设置Expires的值为当前时间之后的24小时，
                         　　                        # Cache-Control的值为24小时
    expires    modified +24h;           # 编辑Expires的值增加24小时，Cache-Control的值增
                                                       # 加24小时
    expires    @15h;                         # 设置Expires的值为当前日的15点，Cache-Control的值
                                                       # 为当前时间到当前日15点的时间差
    expires    $expires;                     # 根据变量$expires的内容设置缓存时间
    add_header Cache-Control no-cache; 
    add_trailer  X-Always $host always;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx-反向代理缓存" tabindex="-1"><a class="header-anchor" href="#nginx-反向代理缓存" aria-hidden="true">#</a> nginx 反向代理缓存</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#proxy_cache_path设置缓存保存的目录
#keys_zone设置共享内以及占用的空间大小
#max_size设置缓存大小
#inactive超过此时间，则缓存自动清理
#use_temp_path关闭临时目录

proxy_cache_path /usr/local/nginx/upsteam_cache keys_zone=mycache:5m max_size=1g ina
ctive=30s use_temp_path=off;

server {
        listen       90;
        server_name  localhost;
        
        #proxy_cache	开启使用缓存，缓存名为 keys_zone 后面设置的名字
        proxy_cache    mycache
        #针对200和304状态码的缓存设置过期时间
        proxy_cache_valid   200  304  8h:
        
         location /assets {
            root   /home;
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx搭建高可用集群" tabindex="-1"><a class="header-anchor" href="#nginx搭建高可用集群" aria-hidden="true">#</a> nginx搭建高可用集群</h3><p>高可用：一般指2台机器启动着相同的业务系统，当有一台机器down机了，另外一台服务器能快速的接管，对于访问当用户是无感知的</p><p>nginx+keepalived</p>`,6),Y={href:"https://juejin.cn/post/7025845075217219614",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://developer.aliyun.com/article/885619",target:"_blank",rel:"noopener noreferrer"},nn=n("h3",{id:"使用nginx出现的问题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用nginx出现的问题","aria-hidden":"true"},"#"),e(" 使用nginx出现的问题：")],-1),en=n("h4",{id:"耗时长的数据请求-返回404",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#耗时长的数据请求-返回404","aria-hidden":"true"},"#"),e(" 耗时长的数据请求，返回404")],-1),sn={href:"https://blog.csdn.net/weixin_43568226/article/details/122390109",target:"_blank",rel:"noopener noreferrer"},an={href:"https://blog.csdn.net/HD243608836/article/details/111564684",target:"_blank",rel:"noopener noreferrer"},ln=n("h2",{id:"docker",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker","aria-hidden":"true"},"#"),e(" docker")],-1),rn={href:"https://www.bilibili.com/video/BV1gr4y1U7CY/?spm_id_from=333.337.search-card.all.click&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://www.aliyundrive.com/s/nh9WKM1ZG6A",target:"_blank",rel:"noopener noreferrer"},dn={href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"},on={href:"https://github.com/docker/docker-ce",target:"_blank",rel:"noopener noreferrer"},cn={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},pn=a('<p>docker commit 提交容器副本使之成为一个新的镜像</p><p>·docker commit -m=&quot;提交的描述信息&quot; -a=&quot;作者&quot; 容器ID 要创建的目标镜像名:[标签名]</p><p>docker commit -m=&quot;ubuntu add vim ok&quot; -a=&quot;fankozhang&quot; 50d70d915a7e fankozhang/myubuntu:1.1</p><h3 id="操作过程中遇到问题" tabindex="-1"><a class="header-anchor" href="#操作过程中遇到问题" aria-hidden="true">#</a> 操作过程中遇到问题 ：</h3><h4 id="docker下删除自己创建的镜像报错-cannot-be-forced-image-has-dependent-child-images" tabindex="-1"><a class="header-anchor" href="#docker下删除自己创建的镜像报错-cannot-be-forced-image-has-dependent-child-images" aria-hidden="true">#</a> Docker下删除自己创建的镜像报错 (cannot be forced) - image has dependent child images</h4><p>删除镜像命令 ： docker rmi 镜像Id</p><p>大概意思就是这个镜像被别的镜像所依赖，不能强制删除，需要查找child images，再逐个删除。查找被这个镜像所依赖的镜像命令如下：</p><p><code>docker image inspect --format=&#39;{{.RepoTags}} {{.Id}} {{.Parent}}&#39; $(docker image ls -q --filter since=镜像Id)</code></p><p>将所有需要依赖这个镜像的镜像都删除掉，才能删除这个镜像。</p>',9);function un(vn,mn){const s=d("ExternalLinkIcon");return r(),t("div",null,[m,n("p",null,[e("在访问github pages显示的地址就可以了，我的地址是 "),n("a",h,[e("https://fankozhang.github.io/blog/"),i(s)])]),b,n("p",null,[e("当真正想搞一个vuepree文档网站的时候，不一定从头搭建，可以使用适应的主题，使用主题可以实现快速搭建项目，主题可以自己搜索，我使用的主题是 "),n("a",g,[e("vuepress-theme-hope "),i(s)])]),_,n("p",null,[n("a",x,[e("参考视频 nginx_哔哩哔哩_bilibili"),i(s)])]),n("p",null,[n("a",k,[e("参考博客专栏"),i(s)])]),n("p",null,[n("a",f,[e("Nginx expires 页面缓存时间配置 (w3schools.cn)"),i(s)])]),w,z,n("p",null,[n("a",q,[e("Linux Nginx安装及使用 - 掘金 (juejin.cn)"),i(s)])]),n("p",null,[n("a",y,[e("Linux安装Nginx - 掘金 (juejin.cn)"),i(s)]),e(" 方便快捷")]),C,n("p",null,[n("a",j,[e("(141条消息) 故障排查（Nginx服务启动失败）报错：still could not bind()_吃不吃西红柿的博客-CSDN博客"),i(s)])]),n("p",null,[n("a",N,[e("emerg] still could not bind()怎么解决_一枝风的博客-CSDN博客"),i(s)])]),n("p",null,[n("a",A,[e("还在手动配置Nginx？太LOW了，这个超强大的 Nginx 可视化管理工具太牛逼了！ (qq.com)"),i(s)])]),D,n("p",null,[n("a",E,[e("(关于nginx新增对外开放端口的问题_nginx开放端口"),i(s)])]),T,I,L,P,n("p",null,[n("a",S,[e("Nginx 生产推荐配置以及日志切割清理 )"),i(s)])]),n("p",null,[e("创建定时任务 "),n("a",G,[e("(141条消息) Linux 定时执行shell 脚本_spearhead_cai的博客-CSDN博客"),i(s)])]),O,n("p",null,[n("a",U,[e("http://192.168.64.128:90/"),i(s)]),e(" 这个会访问到第一个的location的文件")]),n("p",null,[n("a",B,[e("http://192.168.64.128:90/assets/12345678.png"),i(s)]),e(" 这个会访问到第二个的location的文件（静态资源）")]),n("p",null,[n("a",K,[e("http://192.168.64.128:90/static/12345678.png)"),i(s)]),e(" 这个会访问到第三个的location的文件，路径设置别名，访问到的内容一样（静态资源）")]),V,n("p",null,[n("a",M,[e("参考文章 Nginx优化之gzip压缩提升网站速度_苦艾酒丶的博客-CSDN博客"),i(s)])]),$,n("p",null,[e("参考文章 "),n("a",H,[e("(141条消息) Nginx跨域配置_程序员小强的博客-CSDN博客_nginx 跨域"),i(s)])]),Z,n("p",null,[n("a",W,[e("nginx中的upstream指令参数__nginx upstream参数"),i(s)])]),X,R,n("p",null,[n("a",F,[e("nginx expires配置详解 - 腾讯云开发者社区-腾讯云 (tencent.com)"),i(s)])]),J,n("p",null,[n("a",Y,[e("手把手教你nginx生产环境下高可用环境搭建 - 掘金 (juejin.cn)"),i(s)])]),n("p",null,[n("a",Q,[e("Nginx+keepalived实现高可用集群-阿里云开发者社区 (aliyun.com)"),i(s)])]),nn,en,n("p",null,[e("在前台往后台发送了一个请求，实现选取字段导出的功能，返回的一个文档流，由于数据量大，耗时长，选取某些字段时能返回正常的文档流，但选取某些字段时又返回404错误，于是我测试了很多的字段，发现并不是传值字段的问题。而后发现那些返回 404 的请求的,等待服务器响应的时间都是 1min,由此判断，可能是请求响应时长方面的问题，但我查看了前端代码,没找到设置1min时长过期的代码，在1min的基础上，我搜索了网页请求1min返回404是什么问题，最终确认是nginx的配置有问题，参考如下文章 "),n("a",sn,[e("Nginx报错404，由于请求处理时间过长_"),i(s)]),e(),n("a",an,[e("nginx中的timeout超时设置，请求超时、响应等待超时等_"),i(s)]),e(" 最终解决了问题。（nginx默认的超时时长为60s,而我的请求耗时1.4min，没有对超时时长做配置，所以返回了404，增加超时时长后，请求正常返回。）")]),ln,n("p",null,[n("a",rn,[e("视频地址 2022版 尚硅谷Docker实战教程_哔哩哔哩_bilibili"),i(s)])]),n("p",null,[e("资料 ："),n("a",tn,[e("https://www.aliyundrive.com/s/nh9WKM1ZG6A"),i(s)])]),n("p",null,[e("Docker 官网："),n("a",dn,[e("https://www.docker.com"),i(s)])]),n("p",null,[e("Github Docker 源码："),n("a",on,[e("https://github.com/docker/docker-ce"),i(s)])]),n("p",null,[e("安装docker镜像的仓库： "),n("a",cn,[e("Docker Hub Container Image Library | App Containerization"),i(s)])]),pn])}const gn=l(v,[["render",un],["__file","cherry.html.vue"]]);export{gn as default};
