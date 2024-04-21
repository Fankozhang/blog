import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as d,a as e,b as n,e as i,f as a,r as l}from"./app.bc2d2ee5.js";const o="/blog/press4.png",c="/blog/press1.png",p="/blog/press2.png",u="/blog/press3.png",v="/blog/docker-images.jpg",m="/blog/ali-container.jpg",h="/blog/docker-mounts.jpg",b="/blog/docker_redis.jpg",g="/blog/mysql-zhu-cong.jpg",_="/blog/docker-network.png",k={},f=a('<h1 id="vuepress-and-nginx-and-docker" tabindex="-1"><a class="header-anchor" href="#vuepress-and-nginx-and-docker" aria-hidden="true">#</a> vuePress and nginx and docker</h1><h2 id="vuepress基本使用-部署github" tabindex="-1"><a class="header-anchor" href="#vuepress基本使用-部署github" aria-hidden="true">#</a> vuePress基本使用（部署github）</h2><h2 id="非自动化部署" tabindex="-1"><a class="header-anchor" href="#非自动化部署" aria-hidden="true">#</a> (非自动化部署)</h2><p>github 创建仓库 blog<br> 在 blog 下新建分支 gh-pages</p><p><img src="'+o+'" alt="press1" loading="lazy"></p><p>切换分支到 gh-pages<br> 本地新建 blog 文件夹 连接远程 github仓库<br> 在blog文件夹下下载配置vuepress,并将源代码打包<br> 在github的blog仓库下的settings里面设置git pages,切换到gh-pages<br> 将打包后的dist目录下的文件上传至github的gh-pages 分支。</p><p><img src="'+c+'" alt="press1" loading="lazy"></p><p><img src="'+p+'" alt="press1" loading="lazy"></p>',8),x={href:"https://fankozhang.github.io/blog/",target:"_blank",rel:"noopener noreferrer"},y=a('<p><img src="'+u+`" alt="press1" loading="lazy"></p><p>如果出现样式不显示问题，记得修改base路径<br> 一般base路径改成 &#39; /blog/&#39; ，视自己的文件而定。</p><h2 id="自动化部署" tabindex="-1"><a class="header-anchor" href="#自动化部署" aria-hidden="true">#</a> （自动化部署）</h2><p>github 创建仓库 blog</p><p>本地新建 blog 文件夹 连接远程 github仓库</p><p>在本地blog文件夹中编写源码，在package.json中配置如下的运行命令。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &quot;scripts&quot;: {
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当源文件和.github文件的内容都准备好后，将blog文件夹下的内容全部上传到github仓库。工作流运行一段时间后，打包成功，在gh-pages分支查看打包后的源码。随后刷新github pages的网页地址，就能看到更新后的内容。</p><p>当下次对本地blog文件夹下的源代码进行修改时，直接提交远程仓库即可。工作流会自动执行打包命令。等一段时间后刷新，就能看到刷新后的内容了。</p><h2 id="vuepress主题" tabindex="-1"><a class="header-anchor" href="#vuepress主题" aria-hidden="true">#</a> vuepress主题</h2>`,12),q={href:"https://theme-hope.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},w=e("h2",{id:"建个人博客、文档网站",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#建个人博客、文档网站","aria-hidden":"true"},"#"),n(" 建个人博客、文档网站")],-1),D={href:"https://mp.weixin.qq.com/s/4wJG837mG_gUXmqXQwLO4Q",target:"_blank",rel:"noopener noreferrer"},j=e("h2",{id:"nginx",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nginx","aria-hidden":"true"},"#"),n(" nginx")],-1),z={href:"https://www.bilibili.com/video/BV1ZU4y1m7GL?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},A={href:"https://www.bilibili.com/video/BV1Z84y1D7RM/?spm_id_from=333.1007.tianma.7-1-23.click",target:"_blank",rel:"noopener noreferrer"},S={href:"https://blog.csdn.net/qq_44299529/category_11626217.html",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.w3schools.cn/nginx/nginx_http_expires.asp",target:"_blank",rel:"noopener noreferrer"},I={href:"https://juejin.cn/post/7112826654291918855#heading-1",target:"_blank",rel:"noopener noreferrer"},E={href:"https://mp.weixin.qq.com/s/QGs1PJ9i7KXS7AF23bOCbA",target:"_blank",rel:"noopener noreferrer"},N={href:"https://juejin.cn/post/7270153705877241890",target:"_blank",rel:"noopener noreferrer"},O=e("h3",{id:"安装虚拟机-linux-nginx",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装虚拟机-linux-nginx","aria-hidden":"true"},"#"),n(" 安装虚拟机，linux, nginx")],-1),R=e("p",null,"装上centos7 linux。在Linux上安装 nginx 我参考了如下两篇文章",-1),T={href:"https://juejin.cn/post/6990643580809248781",target:"_blank",rel:"noopener noreferrer"},M={href:"https://juejin.cn/post/7136114724542316558",target:"_blank",rel:"noopener noreferrer"},P=e("p",null,"安装nginx的过程中出现 nginx: [emerg] still could not bind() 需要注意端口和进程占用的问题",-1),L={href:"https://blog.csdn.net/jiaoshu__/article/details/119304374",target:"_blank",rel:"noopener noreferrer"},G={href:"https://blog.csdn.net/ProBaiXiaodi/article/details/124943251",target:"_blank",rel:"noopener noreferrer"},V={href:"https://mp.weixin.qq.com/s/33K0XfZ8bAT95qmrhzvRDw",target:"_blank",rel:"noopener noreferrer"},H=e("p",null,"使用阿里服务器安装的时候要设置安全组 ，入口 和 出口 都要设置80端口的，否则网页打不开。",-1),U=e("h3",{id:"ubuntu安装nginx",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ubuntu安装nginx","aria-hidden":"true"},"#"),n(" ubuntu安装nginx")],-1),X={href:"https://developer.aliyun.com/article/759280",target:"_blank",rel:"noopener noreferrer"},B=e("p",null,"当出现 status inactive时查看如下解决办法：",-1),$={href:"https://zhuanlan.zhihu.com/p/139381645",target:"_blank",rel:"noopener noreferrer"},Q=e("p",null,"在Ubuntu中，使用sudo ufw status命令查看当前防火墙状态。 不活动，是关闭状态。",-1),Y=e("p",null,"在Ubuntu中，使用sudo ufw enable命令来开启防火墙。",-1),F=e("p",null,"在Ubuntu中，使用sudo ufw disable命令来关闭防火墙。",-1),K=e("p",null,[e("strong",null,"如上安装nginx所在路径为 /etc/nginx")],-1),J={href:"https://blog.csdn.net/qq_43279579/article/details/110354816",target:"_blank",rel:"noopener noreferrer"},W=a('<h3 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令" aria-hidden="true">#</a> 基本命令</h3><p>管理员权限 su root</p><p>start nginx.exe // 部署nginx文件后，启动nginx服务</p><p>1、cd /usr/local/nginx/sbin/ <em>//进入目录</em></p><p>2、./nginx <em>//启动</em></p><p>./nginx -t 检查配置文件是否有问题</p><p>./nginx -v 查看nginx版本</p><p>./nginx -h 查看帮助</p><p>3、./nginx -s stop <em>//停止</em></p><p>4、./nginx -s quit <em>//安全退出</em>（比stop友好）</p><p>5、./nginx -s reload <em>//重载配置文件（修改了配置文件需要执行此命令 比较常用 重启）</em></p><p>6、ps aux|grep nginx <em>//查看ngnix进程</em></p><p>ps -ef|grep nginx 查看nginx进程</p><p>netstat -ntlp|grep 80 查看端口情况</p><p>kill -9 进程号</p><p>netstat -antp | grep nginx 查看端口是否开启</p><h3 id="增加server-开放端口" tabindex="-1"><a class="header-anchor" href="#增加server-开放端口" aria-hidden="true">#</a> 增加server（开放端口）</h3><p>当在一个config文件里配置多个server时，要将server里监听的端口号开放出来，否则外部访问不了</p>',18),Z={href:"https://blog.csdn.net/qq_42584971/article/details/103874472",target:"_blank",rel:"noopener noreferrer"},ee=e("p",null,"设置防火墙对外开放端口",-1),ne=e("p",null,"firewall-cmd --list-all 查看开放的端口号 sudo firewall-cmd --add-port=8000/tcp --permanent 开放8000端口 （需要的端口开放出来）",-1),se=e("p",null,"重启防火墙firewall-cmd --reload",-1),ie=e("h3",{id:"nginx日志切割",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nginx日志切割","aria-hidden":"true"},"#"),n(" nginx日志切割")],-1),ae={href:"https://juejin.cn/post/6964052819980582949",target:"_blank",rel:"noopener noreferrer"},re={href:"https://blog.csdn.net/lc013/article/details/103775702",target:"_blank",rel:"noopener noreferrer"},te=a(`<h3 id="配置静态资源文件服务器-存放静态文件" tabindex="-1"><a class="header-anchor" href="#配置静态资源文件服务器-存放静态文件" aria-hidden="true">#</a> 配置静态资源文件服务器 （存放静态文件）</h3><p>在 根目录的 home 文件夹下新建 assets 文件夹用于存放 静态文件（图片，视频） (自己选择放在那个文件夹下，但要确定配置的文件不能出错)</p><p>nginx.config 增加如下server配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置静态服务器，存放静态文件</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开监听的 90 端口 sudo firewall-cmd --add-port=90/tcp --permanent ； 重启防火墙firewall-cmd --reload</p><p>重启nginx ./nginx -s reload</p><p>访问路径</p>`,7),de={href:"http://192.168.64.128:90/",target:"_blank",rel:"noopener noreferrer"},le={href:"http://192.168.64.128:90/assets/12345678.png",target:"_blank",rel:"noopener noreferrer"},oe={href:"http://192.168.64.128:90/static/12345678.png",target:"_blank",rel:"noopener noreferrer"},ce=e("h3",{id:"开启gzip压缩",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#开启gzip压缩","aria-hidden":"true"},"#"),n(" 开启gzip压缩")],-1),pe={href:"https://blog.csdn.net/php12345679/article/details/80843939",target:"_blank",rel:"noopener noreferrer"},ue=a(`<p>gzip配置的常用参数</p><p>gzip on|off; #是否开启gzip</p><p>gzip_buffers 32 4K| 16 8K #缓冲(压缩在内存中缓冲几块? 每块多大?)</p><p>gzip_comp_level [1-9] #推荐6 压缩级别(级别越高,压的越小,越浪费CPU计算资源)</p><p>gzip_disable #正则匹配UA 什么样的Uri不进行gzip</p><p>gzip_min_length 200 # 开始压缩的最小长度(再小就不要压缩了,意义不在)</p><p>gzip_http_version 1.0|1.1 # 开始压缩的http协议版本(可以不设置,目前几乎全是1.1协议)</p><p>gzip_proxied # 设置请求者代理服务器,该如何缓存内容</p><p>gzip_types text/plain application/xml # 对哪些类型的文件用压缩 如txt,xml,html ,css</p><p>gzip_vary on|off # 是否传输gzip压缩标志</p><p>注意：</p><p>图片/mp3这样的二进制文件,不必压缩</p><p>因为压缩率比较小, 比如100-&gt;80字节,而且压缩也是耗费CPU资源的.</p><p>比较小的文件不必压缩,</p><p>示例：nginx config 加入如下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gzip on;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx跨域配置" tabindex="-1"><a class="header-anchor" href="#nginx跨域配置" aria-hidden="true">#</a> nginx跨域配置</h3>`,24),ve={href:"https://blog.csdn.net/qq_38011415/article/details/107095403",target:"_blank",rel:"noopener noreferrer"},me=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx中的upstream指令参数" tabindex="-1"><a class="header-anchor" href="#nginx中的upstream指令参数" aria-hidden="true">#</a> nginx中的upstream指令参数</h3>`,6),he={href:"https://blog.csdn.net/qq_44299529/article/details/122946397",target:"_blank",rel:"noopener noreferrer"},be=e("h3",{id:"nginx控制浏览器缓存",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nginx控制浏览器缓存","aria-hidden":"true"},"#"),n(" nginx控制浏览器缓存")],-1),ge=e("p",null,"expires用于对缓存的设置（可以在server里面配置，也可以在location里面配置）",-1),_e={href:"https://cloud.tencent.com/developer/article/1918457",target:"_blank",rel:"noopener noreferrer"},ke=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx搭建高可用集群" tabindex="-1"><a class="header-anchor" href="#nginx搭建高可用集群" aria-hidden="true">#</a> nginx搭建高可用集群</h3><p>高可用：一般指2台机器启动着相同的业务系统，当有一台机器down机了，另外一台服务器能快速的接管，对于访问当用户是无感知的</p><p>nginx+keepalived</p>`,6),fe={href:"https://juejin.cn/post/7025845075217219614",target:"_blank",rel:"noopener noreferrer"},xe={href:"https://developer.aliyun.com/article/885619",target:"_blank",rel:"noopener noreferrer"},ye=e("h3",{id:"使用nginx出现的问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用nginx出现的问题","aria-hidden":"true"},"#"),n(" 使用nginx出现的问题：")],-1),qe=e("h4",{id:"耗时长的数据请求-返回404",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#耗时长的数据请求-返回404","aria-hidden":"true"},"#"),n(" 耗时长的数据请求，返回404")],-1),we={href:"https://blog.csdn.net/weixin_43568226/article/details/122390109",target:"_blank",rel:"noopener noreferrer"},De={href:"https://blog.csdn.net/HD243608836/article/details/111564684",target:"_blank",rel:"noopener noreferrer"},je=e("h4",{id:"服务器文件大-nginx代理后下载不了",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#服务器文件大-nginx代理后下载不了","aria-hidden":"true"},"#"),n(" 服务器文件大，nginx代理后下载不了")],-1),ze={href:"https://www.cnblogs.com/binghe001/p/13356662.html",target:"_blank",rel:"noopener noreferrer"},Ae={href:"https://www.cnblogs.com/breezey/p/6740229.html",target:"_blank",rel:"noopener noreferrer"},Se={href:"https://blog.csdn.net/qq_29864051/article/details/129546567",target:"_blank",rel:"noopener noreferrer"},Ce=e("h2",{id:"docker",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker","aria-hidden":"true"},"#"),n(" docker")],-1),Ie={href:"https://www.bilibili.com/video/BV1gr4y1U7CY/?spm_id_from=333.337.search-card.all.click&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},Ee={href:"https://www.aliyundrive.com/s/6k6jNmKMkiR",target:"_blank",rel:"noopener noreferrer"},Ne={href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"},Oe={href:"https://github.com/docker/docker-ce",target:"_blank",rel:"noopener noreferrer"},Re={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},Te={href:"https://mp.weixin.qq.com/s/MwDXbeVVXMPsCHP0ixqxFg",target:"_blank",rel:"noopener noreferrer"},Me={href:"https://juejin.cn/post/7287510147257679935",target:"_blank",rel:"noopener noreferrer"},Pe={href:"https://mp.weixin.qq.com/s/bIsWfzAXtT8i_Bx3r2cYBg",target:"_blank",rel:"noopener noreferrer"},Le=e("h3",{id:"安装docker",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装docker","aria-hidden":"true"},"#"),n(" 安装docker")],-1),Ge={href:"https://blog.csdn.net/m0_51338272/article/details/122801639",target:"_blank",rel:"noopener noreferrer"},Ve={href:"https://blog.csdn.net/qq_41569732/article/details/105631072",target:"_blank",rel:"noopener noreferrer"},He=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>step 1: 安装必要的一些系统工具
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
Step 2: 添加软件源信息
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
Step 3: 更新yum索引列表并安装Docker引擎
sudo yum makecache fast
yum索引列表没有更新可以直接使用yum makecache
sudo yum install docker-ce
安装过程中会提示确认，输入y以确认。
Step 4: 开启Docker服务
//sudo service docker start
// 开启服务时出现Redirecting to /bin/systemctl start docker.service
切换启动命令
启动docker：systemctl start docker

查看下ps -ef | grep &quot;docker&quot; docker启动了

配置下载docker镜像的仓库（下载docker镜像的仓库）
阿里搜索容器，找到容器与镜像服务，镜像工具，镜像加速器-》运行网站的命令

测试安装
在Terminal中输入docker run hello-world。
看到 Hello from Docker！ 字段说明我们的安装步骤没有问题，Docker已经成功安装~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="docker-启动类命令" tabindex="-1"><a class="header-anchor" href="#docker-启动类命令" aria-hidden="true">#</a> docker 启动类命令</h4><p>停止docker：systemctl stop docker 重启docker：systemctl restart docker 查看docker状态： systemctl status docker 开机启动： systemctl enable docker 查看docker概要信息： docker info 查看docker总体帮助文档： docker --help 查看docker命令帮助文档： docker 具体命令 --help</p><h3 id="docker常用命令" tabindex="-1"><a class="header-anchor" href="#docker常用命令" aria-hidden="true">#</a> Docker常用命令</h3>`,4),Ue={href:"https://juejin.cn/post/7177550197159886907#heading-11",target:"_blank",rel:"noopener noreferrer"},Xe=a(`<h4 id="查看-docker-版本" tabindex="-1"><a class="header-anchor" href="#查看-docker-版本" aria-hidden="true">#</a> 查看 <strong>Docker 版本</strong></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Docker版本号
docker -v
# Docker版本详细信息
docker version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看镜像列表" tabindex="-1"><a class="header-anchor" href="#查看镜像列表" aria-hidden="true">#</a> 查看<strong>镜像列表</strong></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查看最新创建的镜像，以下两个命令等价
docker images
docker image ls
# 查看所有镜像
docker images --all
docker iamges -a
# 查看与Redis相关的镜像
docker images redis
# 只显示镜像ID，可以与docker rmi命令结合使用
docker images -q
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看镜像结果显示如下：</p><p><img src="`+v+`" alt="javaCreateSimple" loading="lazy"></p><p>REPOSITORY：表示镜像的仓库源</p><p>TAG：镜像的标签版本号</p><p>IMAGE ID：镜像ID</p><p>CREATED：镜像创建时间</p><p>SIZE：镜像大小</p><h4 id="搜索可用镜像-拉取镜像-删除镜像" tabindex="-1"><a class="header-anchor" href="#搜索可用镜像-拉取镜像-删除镜像" aria-hidden="true">#</a> 搜索可用镜像， <strong>拉取镜像</strong> ，删除镜像</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker search redis            // 搜索redis相关的镜像
docker search --limit 5 redis  // --limit : 只列出N个镜像，默认25个


docker pull redis              // 拉取最新版，相当于docker pull redis:latest
docker pull redis:7.0.5        // 拉取指定版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker system df   查看镜像/容器/数据卷所占的空间

docker rmi 某个XXX镜像名字ID           删除镜像
docker rmi  -f 镜像ID                删除单个
docker rmi -f 镜像名1:TAG 镜像名2:TAG  删除多个
docker rmi $(docker images -f &quot;dangling=true&quot; -aq)  删除所有符合过滤条件的镜像
docker rmi -f $(docker images -qa)   删除全部
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="容器命令" tabindex="-1"><a class="header-anchor" href="#容器命令" aria-hidden="true">#</a> 容器命令</h4><h5 id="运行docker容器" tabindex="-1"><a class="header-anchor" href="#运行docker容器" aria-hidden="true">#</a> <strong>运行docker容器</strong></h5><p><code>docker run [OPTIONS] IMAGE [COMMAND] [ARG...]</code></p><p>OPTIONS说明（常用）：有些是一个减号，有些是两个减号 --name=&quot;容器新名字&quot; 为容器指定一个名称； -d: 后台运行容器并返回容器ID，也即启动守护式容器(后台运行)； -i：以交互模式运行容器，通常与 -t 同时使用； -t：为容器重新分配一个伪输入终端，通常与 -i 同时使用； 也即启动交互式容器(前台有伪终端，等待交互)；</p><p>-P: 随机端口映射，大写P<br> -p: 指定端口映射，小写p 左边是映射的宿主机端口，右边是容器端口。</p><p>使用镜像centos:latest以交互模式启动一个容器,在容器内执行/bin/bash命令。</p><h5 id="启动交互式命令容器" tabindex="-1"><a class="header-anchor" href="#启动交互式命令容器" aria-hidden="true">#</a> 启动交互式命令容器</h5><p><code>docker run -it centos /bin/bash</code> （<strong>以交互式命令运行一个容器</strong>）</p><p><code>docker run -it --name=myCentos centos bash</code> （<strong>以交互式命令运行一个容器</strong>）</p><p>/bin/bash：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。 要退出终端，直接输入 exit</p><h5 id="列出当前所有正在运行的容器" tabindex="-1"><a class="header-anchor" href="#列出当前所有正在运行的容器" aria-hidden="true">#</a> <strong>列出当前所有正在运行的容器</strong></h5><p><code>docker ps [OPTIONS]</code></p><p>OPTIONS说明（常用）： -a :列出当前所有正在运行的容器+历史上运行过的 -l :显示最近创建的容器。 -n：显示最近n个创建的容器。 -q :静默模式，只显示容器编号。</p><h5 id="退出容器-两种方式" tabindex="-1"><a class="header-anchor" href="#退出容器-两种方式" aria-hidden="true">#</a> <strong>退出容器 两种方式</strong></h5><table><thead><tr><th>退出容器</th><th>两种退出方式</th></tr></thead><tbody><tr><td>exit</td><td>run进去容器，exit退出，容器停止</td></tr><tr><td>ctrl+p+q</td><td>run进去容器，ctrl+p+q退出，容器不停止</td></tr><tr><td>启动已停止运行的容器</td><td>docker start 容器ID或者容器名</td></tr><tr><td>重启容器</td><td>docker restart 容器ID或者容器名</td></tr><tr><td>停止容器</td><td>docker stop 容器ID或者容器名</td></tr><tr><td>强制停止容器</td><td>docker kill 容器ID或容器名</td></tr><tr><td>删除已停止的容器</td><td>docker rm 容器ID</td></tr><tr><td>删除一个容器</td><td>docker rm -f 容器ID</td></tr><tr><td>一次性删除多个容器实例</td><td>docker rm -f $(docker ps -a -q) docker ps -a -q</td></tr></tbody></table><p><strong>启动一个已经停止的容器实例</strong></p><p>docker start 容器ID或容器名</p><ol><li>先查看已经暂停的容器实例信息 2. 通过docker start 59ec 启动容器 3. 通过docker ps 查看当前启动的容器</li></ol><p><strong>重启一个容器</strong></p><p>docker restart 容器ID或容器名 ：不管容器是否启动，直接重启容器</p><ol><li>首先 docker ps 查看正在运行的容器信息，显示2分钟前启动运行 2. docker restart 59ec 重启容器 3. 再次 docker ps 查看容器信息 显示 2秒前启动运行</li></ol><h5 id="启动守护式容器-后台服务器" tabindex="-1"><a class="header-anchor" href="#启动守护式容器-后台服务器" aria-hidden="true">#</a> 启动守护式容器(后台服务器)</h5><p>有镜像才能创建容器，这是根本前提 (下载一个Redis6.0.8镜像演示)</p><p>在大部分的场景下，我们希望 docker 的服务是在后台运行的， 我们可以过 -d 指定容器的后台运行模式。</p><p><code>docker run -d 容器名</code></p><p><code>docker logs 容器ID</code> 查看容器日志</p><p><code>docker top 容器ID</code> 查看容器内运行的进程</p><p><code>docker inspect 容器ID</code> 查看容器内部细节</p><p><code>docker exec -it 容器ID /bin/bash</code> 进入正在运行的容器并以命令行交互</p><p><code>docker attach 容器ID</code> <em>重新进入（尽量不要用）</em></p><p>exec 是在容器中打开新的终端，并且可以启动新的进程 用exit退出，不会导致容器的停止。</p><p>attach 直接进入容器启动命令的终端，不会启动新的进程 用exit退出，会导致容器的停止。</p><h5 id="从容器内拷贝文件到主机上" tabindex="-1"><a class="header-anchor" href="#从容器内拷贝文件到主机上" aria-hidden="true">#</a> 从容器内拷贝文件到主机上</h5><p><code>docker cp 容器ID:容器内路径 目的主机路径</code></p><h5 id="导入和导出容器" tabindex="-1"><a class="header-anchor" href="#导入和导出容器" aria-hidden="true">#</a> 导入和导出容器</h5>`,49),Be={href:"https://cloud.tencent.com/developer/article/2027894",target:"_blank",rel:"noopener noreferrer"},$e=a('<p>· export 导出容器的内容留作为一个tar归档文件[对应import命令]</p><p>· import 从tar包中的内容创建一个新的文件系统再导入为镜像[对应export]</p><p><code>docker export 容器ID &gt; 文件名.tar</code> 终端下 ls 命令查看导出的文件（保存到终端目录下/root）</p><p><code>cat 文件名.tar | docker import - 镜像用户/镜像名:镜像版本号</code></p><h3 id="docker镜像commit操作" tabindex="-1"><a class="header-anchor" href="#docker镜像commit操作" aria-hidden="true">#</a> <strong>Docker镜像commit操作</strong></h3><p>docker commit 提交容器副本使之成为一个新的镜像</p><p>·docker commit -m=&quot;提交的描述信息&quot; -a=&quot;作者&quot; 容器ID 要创建的目标镜像名:[标签名]</p><p>docker commit -m=&quot;ubuntu add vim ok&quot; -a=&quot;fankozhang&quot; 50d70d915a7e fankozhang/myubuntu:1.1</p>',8),Qe={href:"https://zhuanlan.zhihu.com/p/589267256",target:"_blank",rel:"noopener noreferrer"},Ye=a('<h4 id="将本地镜像推送到阿里云" tabindex="-1"><a class="header-anchor" href="#将本地镜像推送到阿里云" aria-hidden="true">#</a> <strong>将本地镜像推送到阿里云</strong></h4><p><img src="'+m+'" alt="javaCreateSimple" loading="lazy"></p><p>按照操作指南进行操作</p><h4 id="本地镜像发布到私有库" tabindex="-1"><a class="header-anchor" href="#本地镜像发布到私有库" aria-hidden="true">#</a> 本地镜像发布到私有库</h4>',4),Fe={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},Ke=a("<p>Docker Registry是官方提供的工具，可以用于构建私有镜像仓库</p><p>下载镜像Docker Registry <code>docker pull registry</code></p><p>运行私有库Registry，相当于本地有个私有Docker hub</p><p>docker run -d -p 5000:5000 -v /zzyyuse/myregistry/:/tmp/registry --privileged=true registry</p><p>默认情况，仓库被创建在容器的/var/lib/registry目录下，建议自行用容器卷映射，方便于宿主机联调</p><p>示例：创建一个新的镜像（ ubuntu安装ifconfig命令） ，执行 commit 命令</p><p>docker commit -m=&quot;ubuntu add ifconfig ok&quot; -a=&quot;fankozhang&quot; 50d70d915a7e fankozhang/myubuntu-ifconfig:1.1</p><p>测试镜像是否能有 ifconfig 命令，正常使用</p><p>curl验证私服库上有什么镜像</p>",9),Je={href:"http://127.0.0.1:5000/v2/_catalog",target:"_blank",rel:"noopener noreferrer"},We=a(`<p>使用 docker tag将 镜像 打标签</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>格式为：docker tag IMAGE[:TAG] [REGISTRY_HOST[:REGISTRY_PORT]/]REPOSITORY[:TAG]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>docker tag fankozhang/myubuntu-ifconfig:1.1 127.0.0.1:5000/fankozhang/myubuntu-ifconfig:1.1</code></p><p>修改配置文件使之支持http</p><p>vim /etc/docker/daemon.json</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;registry-mirrors&quot;: [&quot;https://xkn10dbr.mirror.aliyuncs.com&quot;],
  &quot;insecure-registries&quot;: [
    &quot; 127.0.0.1:5000&quot;
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述理由：docker默认不允许http方式推送镜像，通过配置选项来取消这个限制。====&gt; 修改完后如果不生效，建议重启docker</p><p>push推送到私服库（保持registry的运行，否则会push不成功）</p><p><code>docker push 127.0.0.1:5000/fankozhang/myubuntu-ifconfig:1.1 </code></p>`,9),Ze={href:"http://127.0.0.1:5000/v2/_catalog",target:"_blank",rel:"noopener noreferrer"},en=e("p",null,"（上面的127.0.0.1 都可替换成自己的 ip 地址，私有地址）",-1),nn=e("p",null,"docker pull 127.0.0.1:5000/fankozhang/myubuntu-ifconfig:1.1 （命令正常运行，测试成功）",-1),sn=e("p",null,"Docker挂载主机目录访问如果出现cannot open directory .: Permission denied",-1),an=e("p",null,"解决办法：在挂载目录后多加一个--privileged=true参数即可",-1),rn=e("p",null,"如果是CentOS7安全模块会比之前系统版本加强，不安全的会先禁止，所以目录挂载的情况被默认为不安全的行为，",-1),tn=e("p",null,"在SELinux里面挂载目录被禁止掉了额，如果要开启，我们一般使用--privileged=true命令，扩大容器的权限解决挂载目录没有权限的问题，也即",-1),dn=e("p",null,"使用该参数，container内的root拥有真正的root权限，否则，container内的root只是外部的一个普通用户权限。",-1),ln=e("h3",{id:"docker容器数据卷",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker容器数据卷","aria-hidden":"true"},"#"),n(" Docker容器数据卷")],-1),on={href:"https://juejin.cn/post/7042600867731603486",target:"_blank",rel:"noopener noreferrer"},cn=a('<p>运行一个带有容器卷存储功能的容器实例</p><p>docker run -it --privileged=true -v /宿主机绝对路径目录:/容器内目录 镜像名</p><p><strong>docker run -it --privileged=true -v /tmp/host_data:/tmp/docker_data ubuntu</strong></p><p><strong>ubuntu 容器内 /tmp/docker_data 目录下运行 touch dockerIn.txt，宿主机的 /tmp/host_data 目录下也会有 dockerIn.txt文件，相反在宿主机的 /tmp/host_data 目录下新建 touch hostIn.txt 文件，ubuntu 容器内 /tmp/docker_data 目录下也会有hostIn.txt 文件</strong>（docker容器与宿主机间文件互通）</p><p>查看数据卷是否挂载成功</p><p>docker inspect 容器ID</p><p>能查看到：<img src="'+h+`" alt="javaCreateSimple" loading="lazy">则表示运行成功，这里展示了映射的路径；</p><p>docker run -it --privileged=true -v /宿主机绝对路径目录:/容器内目录:<strong>ro</strong> 镜像名 （ro = read only）</p><p>此时如果宿主机写入内容，可以同步给容器内，容器可以读取到，此时容器自己只能读取不能写</p><p><strong>卷的继承和共享</strong> （实现多个容器之间的数据共享）</p><p>容器1完成和宿主机的映射</p><p>docker run -it --privileged=true -v /mydocker/u:/tmp --name u1 ubuntu</p><p>容器2继承容器1的卷规则</p><p>docker run -it --privileged=true --volumes-from 父类 --name u2 ubuntu</p><h3 id="docker-的-linux-容器安装命令" tabindex="-1"><a class="header-anchor" href="#docker-的-linux-容器安装命令" aria-hidden="true">#</a> Docker 的 linux 容器安装命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>安装 <span class="token function">vim</span> 编辑器

// 进入docker容器里，id是容器的id或者name
root@ubuntu:/<span class="token comment"># docker exec -it id</span>
// 先更新apt,如果root用户 <span class="token function">sudo</span> 就不需要加
root@1:/<span class="token comment"># sudo apt-get update</span>
// 下载，中途会有一个y/n  请输入y
root@1:/<span class="token comment"># sudo apt-get install vim</span>
//安装完成，会有版本信息，退出信息界面请安ESC 然后:q<span class="token operator">!</span> 回车
root@1:/<span class="token comment"># vi -v </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>安装ifconfig命令
apt-get install net-tools

安装ping命令
apt-get install iproute2

安装ssh
apt-get install openssh-server service ssh start

关闭防火墙
ufw disable

在PC中添加到容器的路由
已管理员身份运行CMD并执行如下命令： route add 172.17.0.0 mask 255.255.255.0 192.168.209.165 其中172.17.0.0为容器所在网段，192.168.209.165为容器的宿主机的IP地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker常规安装简介" tabindex="-1"><a class="header-anchor" href="#docker常规安装简介" aria-hidden="true">#</a> Docker常规安装简介</h3><p>搜索镜像 拉取镜像 查看镜像 启动镜像（服务端口映射） 停止容器 移除容器</p><h4 id="安装tomcat" tabindex="-1"><a class="header-anchor" href="#安装tomcat" aria-hidden="true">#</a> 安装tomcat</h4><ol><li><p>docker hub上面查找tomcat镜像 <code>docker search tomcat</code></p></li><li><p>从docker hub上拉取tomcat镜像到本地 <code>docker pull tomcat</code></p></li><li><p>docker images查看是否有拉取到的tomcat</p></li><li><p>使用tomcat镜像创建容器实例(也叫运行镜像) docker run -it -p 8080:8080 tomcat</p></li><li><p>· 访问猫首页 （报 404） 可能没有映射端口或者没有关闭防火墙</p></li><li><p>（tomcat新版问题） 解决，进入tomcat容器，执行 mv webapps.dist webapps</p></li><li><p>（免修改版本） docker pull billygoo/tomcat8-jdk8</p><p>docker run -d -p 8080:8080 --name mytomcat8 billygoo/tomcat8-jdk8</p></li></ol><h4 id="安装-mysql" tabindex="-1"><a class="header-anchor" href="#安装-mysql" aria-hidden="true">#</a> 安装 mysql</h4><h5 id="简单使用" tabindex="-1"><a class="header-anchor" href="#简单使用" aria-hidden="true">#</a> 简单使用</h5><ol><li><p>docker pull mysql:5.7 (选择自己要用的版本)</p></li><li><p>查看宿主机 MySQL ps -ef|grep mysql （关闭宿主机MySQL service mysql stop）防止docker安装MySQL，生成MySQL容器时 3306 端口被占用</p></li><li><p>使用MySQL 镜像</p></li><li><table><thead><tr><th>docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7</th></tr></thead><tbody><tr><td>docker ps</td></tr><tr><td>docker exec -it 容器ID /bin/bash</td></tr><tr><td>mysql -uroot -p</td></tr></tbody></table></li><li><p>如果能够正常运行进入 MySQL 终端 建库建表 ，则使用成功</p></li><li><p>navicat连接宿主机访问，能够正常访问（插入数据后会有编码问题）</p></li></ol><h5 id="实战型使用-推荐使用" tabindex="-1"><a class="header-anchor" href="#实战型使用-推荐使用" aria-hidden="true">#</a> 实战型使用（推荐使用）</h5><ol><li><p>新建mysql容器实例（增加容器数据卷，实力删除后，数据依旧存在）</p></li><li><p>docker run -d -p 3306:3306 --privileged=true -v /zzyyuse/mysql/log:/var/log/mysql -v /zzyyuse/mysql/data:/var/lib/mysql -v /zzyyuse/mysql/conf:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=123456 --name mysql mysql:5.7</p></li><li><p>宿主机内 /zzyyuse/mysql/conf 目录下新建 my.cnf</p><p>通过容器卷同步给mysql容器实例 （解决乱码问题）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[client]
default_character_set=utf8
[mysqld]
collation_server = utf8_general_ci
character_set_server = utf8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重新启动mysql容器实例再重新进入并查看字符编码</p></li><li><p>结论：docker安装完MySQL并run出容器后，建议请先修改完字符集编码后再新建mysql库-表-插数据</p></li></ol><h4 id="安装redis" tabindex="-1"><a class="header-anchor" href="#安装redis" aria-hidden="true">#</a> 安装redis</h4><h5 id="简易配置" tabindex="-1"><a class="header-anchor" href="#简易配置" aria-hidden="true">#</a> 简易配置</h5>`,28),pn=e("li",null,[e("p",null,[e("code",null,"docker pull redis")])],-1),un={href:"https://blog.csdn.net/hu4545/article/details/126174419",target:"_blank",rel:"noopener noreferrer"},vn=e("p",null,[e("code",null,"redis-cli shutdown")],-1),mn=e("li",null,[e("p",null,"docker run -d -p 6379:6379 redis")],-1),hn=e("li",null,[e("p",null,"docker exec -it 9b4dbc9ea076 /bin/bash 进入redis容器")],-1),bn=e("li",null,[e("p",null,"redis-cli")],-1),gn=e("h5",{id:"实用配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#实用配置","aria-hidden":"true"},"#"),n(" 实用配置")],-1),_n={href:"https://juejin.cn/post/7069389775035170823#heading-8",target:"_blank",rel:"noopener noreferrer"},kn=e("li",null,[e("p",null,"宿主机建目录用于数据卷，存放redis配置文件 mkdir -p /app/redis")],-1),fn=e("p",null,"/app/redis目录下新建 redis.conf ，并将一个redis.conf文件模板拷贝进/app/redis目录下",-1),xn=e("img",{src:b,alt:"javaCreateSimple",loading:"lazy"},null,-1),yn={href:"https://link.juejin.cn/?target=http%3A%2F%2Fwww.redis.cn%2Fdownload.html",target:"_blank",rel:"noopener noreferrer"},qn=a("<li><p><strong>修改<code>redis.conf</code>配置文件：</strong> 主要配置的如下：</p><p><code>bind 127.0.0.1</code> #注释掉这部分，使redis可以外部访问 <code>daemonize no</code>#用守护线程的方式启动 （yes配置和docker run中-d参数冲突，导致容器启动失败） <code>requirepass 你的密码</code>#给redis设置密码 （可选） <code>appendonly yes</code>#redis持久化　　默认是no <code>tcp-keepalive 300</code> #防止出现远程主机强迫关闭了一个现有的连接的错误 默认是300 (非必要)</p></li><li><p>使用redis镜像创建容器(也叫运行镜像)</p></li>",2),wn=a(`<p>docker run -p 6379:6379 --name myredis --privileged=true</p><pre><code>-v /app/redis/redis.conf:/etc/redis/redis.conf 
</code></pre><p>-v /app/redis/data:/data -d redis</p><p>redis-server /etc/redis/redis.conf</p><ol start="5"><li><p>docker exec -it 9b4dbc9ea076 /bin/bash 进入redis容器</p></li><li><p>redis-cli 测试redis功能</p></li></ol><h3 id="docker复杂安装详说-有点难搞" tabindex="-1"><a class="header-anchor" href="#docker复杂安装详说-有点难搞" aria-hidden="true">#</a> <strong>Docker复杂安装详说</strong>（有点难搞）</h3><h5 id="安装mysql主从复制" tabindex="-1"><a class="header-anchor" href="#安装mysql主从复制" aria-hidden="true">#</a> 安装mysql主从复制</h5>`,7),Dn={href:"https://www.bilibili.com/video/BV1jT411r77s?p=2&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},jn={href:"https://juejin.cn/post/7220579581919903781?searchId=20230730035439185CEB966A46B5C9ADA9#heading-22",target:"_blank",rel:"noopener noreferrer"},zn={href:"https://blog.csdn.net/zyxwvuuvwxyz/article/details/109744258",target:"_blank",rel:"noopener noreferrer"},An={href:"https://blog.csdn.net/abcde123_123/article/details/106244181",target:"_blank",rel:"noopener noreferrer"},Sn=a(`<p>主从搭建步骤</p><ol><li><p>新建主服务器容器实例3307</p><p>docker run -p 3307:3306 --name mysql-master \\</p><p>-v /mydata/mysql-master/log:/var/log/mysql \\</p><p>-v /mydata/mysql-master/data:/var/lib/mysql \\</p><p>-v /mydata/mysql-master/conf:/etc/mysql \\</p><p>-e MYSQL_ROOT_PASSWORD=root \\</p><p>-d mysql:5.7</p></li><li></li><li><p>宿主机进入/mydata/mysql-master/conf目录下新建my.cnf,内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[mysqld]
## 同一局域网内注意要唯一
server-id=1  
## 开启二进制日志功能，可以随便取（关键）
log-bin=mysql-bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[mysqld]
## 设置server_id，同一局域网中需要唯一
server_id=101 
## 指定不需要同步的数据库名称
binlog-ignore-db=mysql  
## 开启二进制日志功能
log-bin=mall-mysql-bin  
## 设置二进制日志使用内存大小（事务）
binlog_cache_size=1M  
## 设置使用的二进制日志格式（mixed,statement,row）
binlog_format=mixed  
## 二进制日志过期清理时间。默认值为0，表示不自动清理。
expire_logs_days=7  
## 跳过主从复制中遇到的所有错误或指定类型的错误，避免slave端复制中断。
## 如：1062错误是指一些主键重复，1032错误是因为主从数据库数据不一致
slave_skip_errors=1062
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改完配置后重启master实例 docker restart mysql-master</p></li></ol><p>进入mysql-master容器 docker exec -it mysql-master /bin/bash</p><pre><code>mysql -uroot -p
</code></pre>`,4),Cn={start:"5"},In=a(`<li><p>master容器实例内创建数据同步用户</p><p>CREATE USER &#39;slave&#39;@&#39;%&#39; IDENTIFIED BY &#39;123456&#39;;</p><p>GRANT REPLICATION SLAVE, REPLICATION CLIENT ON <em>.</em> TO &#39;slave&#39;@&#39;%&#39;;</p></li><li><p>新建从服务器容器实例3308</p><p>docker run -p 3308:3306 --name mysql-slave -v /mydata/mysql-slave/log:/var/log/mysql -v /mydata/mysql-slave/data:/var/lib/mysql -v /mydata/mysql-slave/conf:/etc/mysql -e MYSQL_ROOT_PASSWORD=zf202111 -d mysql:5.7</p></li><li><p>宿主机进入/mydata/mysql-slave/conf目录下新建my.cnf,内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[mysqld]
## skip-grant-tables（登录时跳过权限检查,密码登录出错时增加用来修改密码）
## 设置server_id,注意要唯一
server-id=2  
## 开启二进制日志功能，以备Slave作为其它Slave的Master时使用
log-bin=mysql-slave-bin   
## relay_log配置中继日志
relay_log=edu-mysql-relay-bin  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,3),En=e("p",null,"进入mysql内用密码登录mysql时显示",-1),Nn=e("p",null,"ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: YES)",-1),On={href:"https://www.cnblogs.com/zhongyehai/p/10695334.html",target:"_blank",rel:"noopener noreferrer"},Rn={href:"https://blog.csdn.net/gao_jun1/article/details/111029254",target:"_blank",rel:"noopener noreferrer"},Tn=a('<li><p>在从数据库中配置主从复制</p><p>change master to master_host=&#39;172.17.0.3&#39;, master_user=&#39;slave&#39;, master_password=&#39;123456&#39;, master_port=3301, master_log_file=&#39;mysql-bin.000001&#39;, master_log_pos=154, master_connect_retry=30;</p><p>主从复制命令参数说明</p><p>master_host：主数据库的IP地址；</p><p>master_port：主数据库的运行端口；</p><p>master_user：在主数据库创建的用于同步数据的用户账号；</p><p>master_password：在主数据库创建的用于同步数据的用户密码；</p><p>(以下的参数在主数据库用命令 show master status; 查看)</p><p>master_log_file：指定从数据库要复制数据的日志文件，通过查看主数据的状态，获取File参数；</p><p>master_log_pos：指定从数据库从哪个位置开始复制数据，通过查看主数据的状态，获取Position参数；</p><p>master_connect_retry：连接失败重试的时间间隔，单位为秒。</p></li><li><p>在从数据库中查看主从同步状态</p><p>show slave status \\G;</p><p><img src="'+g+'" alt="javaCreateSimple" loading="lazy"></p></li><li><p>在从数据库中开启主从同步</p><p>start slave;</p></li><li><p>查看从数据库状态发现已经同步</p></li><li><p>主从复制测试</p></li>',5),Mn={href:"https://blog.csdn.net/youligg/article/details/113831140",target:"_blank",rel:"noopener noreferrer"},Pn=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> DROP USER &#39;slave&#39;@&#39;%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="dockerfile解析" tabindex="-1"><a class="header-anchor" href="#dockerfile解析" aria-hidden="true">#</a> DockerFile解析</h3><p>Dockerfile是用来构建Docker镜像的文本文件，是由一条条构建镜像所需的指令和参数构成的脚本。</p>`,3),Ln={href:"https://docs.docker.com/engine/reference/builder/",target:"_blank",rel:"noopener noreferrer"},Gn=a("<p><strong>DockerFile构建过程解析</strong></p><p>Dockerfile内容基础知识</p><p>· 1：每条保留字指令都必须为大写字母且后面要跟随至少一个参数</p><p>· 2：指令按照从上到下，顺序执行</p><p>· 3：#表示注释</p><p>· 4：每条指令都会创建一个新的镜像层并对镜像进行提交</p><p>Docker执行Dockerfile的大致流程</p><p>· （1）docker从基础镜像运行一个容器</p><p>· （2）执行一条指令并对容器作出修改</p><p>· （3）执行类似docker commit的操作提交一个新的镜像层</p><p>· （4）docker再基于刚提交的镜像运行一个新容器</p><p>· （5）执行dockerfile中的下一条指令直到所有指令都执行完成</p>",12),Vn={href:"https://juejin.cn/post/7063365782595436551",target:"_blank",rel:"noopener noreferrer"},Hn=e("h4",{id:"测试-自定义镜像mycentosjava8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#测试-自定义镜像mycentosjava8","aria-hidden":"true"},"#"),n(" 测试：自定义镜像mycentosjava8")],-1),Un=e("p",null,"要求 Centos7镜像具备vim+ifconfig+jdk8",-1),Xn=e("p",null,"JDK的下载镜像地址 官网 下载地址：",-1),Bn={href:"https://www.oracle.com/java/technologies/downloads/#java8",target:"_blank",rel:"noopener noreferrer"},$n={href:"https://mirrors.yangxingzhen.com/jdk/",target:"_blank",rel:"noopener noreferrer"},Qn=a(`<p>准备编写Dockerfile文件</p><p>宿主机创建路径 /usr/myDockerFile</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM centos
<span class="token comment"># 指定作者和邮箱</span>
MAINTAINER fankozhang<span class="token operator">&lt;</span><span class="token number">3180806542</span>@qq.com<span class="token operator">&gt;</span>

<span class="token comment"># 环境，登录以后进入 /usr 这个路径</span>
ENV MYPATH /usr
WORKDIR <span class="token variable">$MYPATH</span>
 
<span class="token comment">#安装vim编辑器</span>
RUN yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">vim</span>
<span class="token comment">#安装ifconfig命令查看网络IP</span>
RUN yum <span class="token parameter variable">-y</span> <span class="token function">install</span> net-tools
<span class="token comment">#安装java8及lib库</span>
RUN yum <span class="token parameter variable">-y</span> <span class="token function">install</span> glibc.i686
RUN <span class="token function">mkdir</span> /usr/local/java
<span class="token comment">#ADD 是相对路径jar,把jdk-8u171-linux-x64.tar.gz添加到容器中,安装包必须要和Dockerfile文件在同一位置</span>
ADD jdk-8u171-linux-x64.tar.gz /usr/local/java/
<span class="token comment">#配置java环境变量</span>
ENV JAVA_HOME /usr/local/java/jdk1.8.0_171
ENV JRE_HOME <span class="token variable">$JAVA_HOME</span>/jre
ENV CLASSPATH <span class="token variable">$JAVA_HOME</span>/lib/dt.jar:<span class="token variable">$JAVA_HOME</span>/lib/tools.jar:<span class="token variable">$JRE_HOME</span>/lib:<span class="token variable">$CLASSPATH</span>
ENV <span class="token environment constant">PATH</span> <span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>
 
EXPOSE <span class="token number">80</span>
 
CMD <span class="token builtin class-name">echo</span> <span class="token variable">$MYPATH</span>
CMD <span class="token builtin class-name">echo</span> <span class="token string">&quot;success--------------ok&quot;</span>
CMD /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建 <code>docker build -t 新镜像名字:TAG .</code> <code>docker build -t centosvim:1.1 .</code></p><p>注意，上面TAG后面有个空格，有个点</p><p>（yum下载时会报错，具体原因和解决可看下方博客，自行尝试）</p>`,6),Yn={href:"https://blog.csdn.net/Machiel_One/article/details/127519205?ops_request_misc=&request_id=&biz_id=102&utm_term=",target:"_blank",rel:"noopener noreferrer"},Fn=e("sub",null,"all",-1),Kn=e("sup",null,"v92",-1),Jn=a('<p>运行生成的镜像 <code>docker run -it 新镜像名字:TAG</code></p><h3 id="虚悬镜像" tabindex="-1"><a class="header-anchor" href="#虚悬镜像" aria-hidden="true">#</a> 虚悬镜像</h3><p>仓库名、标签都是&lt; none &gt;的镜像，俗称dangling image</p><p>查看 <strong>docker image ls -f dangling=true</strong></p><p>删除（虚悬镜像已经失去存在价值，可以删除） docker image prune</p><h3 id="docker-nginx-部署-vue-项目" tabindex="-1"><a class="header-anchor" href="#docker-nginx-部署-vue-项目" aria-hidden="true">#</a> Docker + Nginx 部署 Vue 项目</h3>',6),Wn={href:"https://zhuanlan.zhihu.com/p/345622879",target:"_blank",rel:"noopener noreferrer"},Zn=a('<h3 id="docker-网络" tabindex="-1"><a class="header-anchor" href="#docker-网络" aria-hidden="true">#</a> Docker 网络</h3><h4 id="查看docker网络模式命令" tabindex="-1"><a class="header-anchor" href="#查看docker网络模式命令" aria-hidden="true">#</a> 查看docker网络模式命令</h4><p>查看网络 docker network ls</p><p>查看网络源数据 docker network inspect XXX网络名字</p><p>删除网络 docker network rm XXX网络名字</p><h4 id="网络模式" tabindex="-1"><a class="header-anchor" href="#网络模式" aria-hidden="true">#</a> 网络模式</h4><p><img src="'+_+'" alt="javaCreateSimple" loading="lazy"></p><p>· bridge模式：使用--network bridge指定，默认使用docker0</p><p>· host模式：使用--network host指定</p><p>· none模式：使用--network none指定</p><p>· container模式：使用--network container:NAME或者容器ID指定</p>',11),es={href:"https://juejin.cn/post/7041923410649153543",target:"_blank",rel:"noopener noreferrer"},ns=e("h3",{id:"docker-compose容器编排",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker-compose容器编排","aria-hidden":"true"},"#"),n(" Docker-compose容器编排")],-1),ss={href:"https://juejin.cn/post/6992848354753380389?searchId=20231211102438BE77AE4A0746C6596E13",target:"_blank",rel:"noopener noreferrer"},is=e("p",null,[n("Compose 是 Docker 公司推出的一个工具软件，可以管理多个 Docker 容器组成一个应用。你需要定义一个 YAML 格式的配置文件docker-compose.yml，"),e("u",null,"写好多个容器之间的调用关系"),n("。然后，只要一个命令，就能同时启动/关闭这些容器")],-1),as=e("p",null,"Docker-Compose是Docker官方的开源项目， 负责实现对Docker容器集群的快速编排。",-1),rs={href:"https://blog.csdn.net/pushiqiang/article/details/78682323",target:"_blank",rel:"noopener noreferrer"},ts=e("p",null,"· 官网",-1),ds={href:"https://docs.docker.com/compose/compose-file/compose-file-v3/",target:"_blank",rel:"noopener noreferrer"},ls=e("p",null,"· 官网下载",-1),os={href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"},cs=a(`<p>· 安装步骤</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -L &quot;https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)&quot; -o /usr/local/bin/docker-compose

添加可执行权限
chmod +x /usr/local/bin/docker-compose


yum install docker-compose  // centos
docker-compose --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>· 卸载步骤</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo rm /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Compose核心概念</strong></p><p>一文件 docker-compose.yml</p><p>两要素</p><p>服务（service） 一个个应用容器实例，比如订单微服务、库存微服务、mysql容器、nginx容器或者redis容器</p><p>工程（project） 由一组关联的应用容器组成的一个完整业务单元，在 docker-compose.yml 文件中定义。</p><p><strong>Compose使用的三个步骤</strong></p><p>· 编写Dockerfile定义各个微服务应用并构建出对应的镜像文件</p><p>· 使用 docker-compose.yml 定义一个完整业务单元，安排好整体应用中的各个容器服务。</p><p>· 最后，执行docker-compose up命令 来启动并运行整个应用程序，完成一键部署上线</p><p>1.1.3. Compose常用命令</p><p><strong>常用命令</strong></p><p>docker-compose -h # 查看帮助</p><p>docker-compose up # 启动所有docker-compose服务 切换到docker-compose.yml所在目录运行</p><p>docker-compose up -d # 启动所有docker-compose服务并后台运行</p><p>docker-compose down # 停止并删除容器、网络、卷、镜像。</p><p>docker-compose exec yml里面的服务id # 进入容器实例内部 docker-compose exec docker-compose.yml文件中写的服务id /bin/bash</p><p>docker-compose ps # 展示当前docker-compose编排过的运行的所有容器</p><p>docker-compose top # 展示当前docker-compose编排过的容器进程</p><p>docker-compose logs yml里面的服务id # 查看容器输出日志</p><p>docker-compose config # 检查配置</p><p>docker-compose config -q # 检查配置，有问题才有输出</p><p>docker-compose restart # 重启服务</p><p>docker-compose start # 启动服务</p><p>docker-compose stop # 停止服务</p>`,28),ps={href:"https://developer.aliyun.com/article/986242",target:"_blank",rel:"noopener noreferrer"},us=e("h3",{id:"portainer安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#portainer安装","aria-hidden":"true"},"#"),n(" portainer安装")],-1),vs={href:"https://docs.portainer.io/start/install-ce/server/docker/linux",target:"_blank",rel:"noopener noreferrer"},ms=a(`<p>1 创建挂载目录 ： docker volume create portainer_data</p><p>查看具体挂载的信息： docker inspect portainer_data</p><p>2 运行命令（官网默认端口是带证书的，不需要，可以使用9000端口）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 9000 端口已经占用的话，可以换一个端口

docker run -d -p 8000:8000 -p 8088:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>密码要求12位，admin adminzf20......</p><h3 id="docker容器监控之-cadvisor-influxdb-granfana" tabindex="-1"><a class="header-anchor" href="#docker容器监控之-cadvisor-influxdb-granfana" aria-hidden="true">#</a> Docker容器监控之 CAdvisor+InfluxDB+Granfana</h3><p>· CAdvisor监控收集+InfluxDB存储数据+Granfana展示图表</p><h3 id="操作过程中遇到问题" tabindex="-1"><a class="header-anchor" href="#操作过程中遇到问题" aria-hidden="true">#</a> 操作过程中遇到问题 ：</h3><h4 id="docker下删除自己创建的镜像报错-cannot-be-forced-image-has-dependent-child-images" tabindex="-1"><a class="header-anchor" href="#docker下删除自己创建的镜像报错-cannot-be-forced-image-has-dependent-child-images" aria-hidden="true">#</a> Docker下删除自己创建的镜像报错 (cannot be forced) - image has dependent child images</h4><p>删除镜像命令 ： docker rmi 镜像Id</p><p>大概意思就是这个镜像被别的镜像所依赖，不能强制删除，需要查找child images，再逐个删除。查找被这个镜像所依赖的镜像命令如下：</p><p><code>docker image inspect --format=&#39;{{.RepoTags}} {{.Id}} {{.Parent}}&#39; $(docker image ls -q --filter since=镜像Id)</code></p><p>将所有需要依赖这个镜像的镜像都删除掉，才能删除这个镜像。</p><h2 id="k8s" tabindex="-1"><a class="header-anchor" href="#k8s" aria-hidden="true">#</a> k8s</h2>`,16),hs={href:"https://www.bilibili.com/video/BV13Q4y1C7hS/?spm_id_from=333.337.search-card.all.click&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},bs={href:"https://www.yuque.com/leifengyang/oncloud/ctiwgo",target:"_blank",rel:"noopener noreferrer"},gs={href:"https://www.bilibili.com/video/BV1be411z7HB/?p=2&spm_id_from=pageDriver&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},_s=e("h3",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),n(" 安装")],-1);function ks(fs,xs){const s=l("ExternalLinkIcon");return t(),d("div",null,[f,e("p",null,[n("在访问github pages显示的地址就可以了，我的地址是 "),e("a",x,[n("https://fankozhang.github.io/blog/"),i(s)])]),y,e("p",null,[n("当真正想搞一个vuepree文档网站的时候，不一定从头搭建，可以使用适应的主题，使用主题可以实现快速搭建项目，主题可以自己搜索，我使用的主题是 "),e("a",q,[n("vuepress-theme-hope "),i(s)])]),w,e("p",null,[e("a",D,[n("10分钟快速搭建个人博客、文档网站！ (qq.com)"),i(s)])]),j,e("p",null,[e("a",z,[n("参考视频 nginx_哔哩哔哩_bilibili"),i(s)])]),e("p",null,[e("a",A,[n("https://www.bilibili.com/video/BV1Z84y1D7RM/?spm_id_from=333.1007.tianma.7-1-23.click"),i(s)])]),e("p",null,[e("a",S,[n("参考博客专栏"),i(s)])]),e("p",null,[e("a",C,[n("Nginx expires 页面缓存时间配置 (w3schools.cn)"),i(s)])]),e("p",null,[n("nginx使用："),e("a",I,[n("https://juejin.cn/post/7112826654291918855#heading-1"),i(s)])]),e("p",null,[e("a",E,[n("写给高级前端的 Nginx 知识，一网打尽！！ (qq.com)"),i(s)])]),e("p",null,[e("a",N,[n("三年前端还不会配置Nginx？刷完这篇就够了 - 掘金 (juejin.cn)"),i(s)])]),O,R,e("p",null,[e("a",T,[n("Linux Nginx安装及使用 - 掘金 (juejin.cn)"),i(s)])]),e("p",null,[e("a",M,[n("Linux安装Nginx - 掘金 (juejin.cn)"),i(s)]),n(" 方便快捷")]),P,e("p",null,[e("a",L,[n("(141条消息) 故障排查（Nginx服务启动失败）报错：still could not bind()_吃不吃西红柿的博客-CSDN博客"),i(s)])]),e("p",null,[e("a",G,[n("emerg] still could not bind()怎么解决_一枝风的博客-CSDN博客"),i(s)])]),e("p",null,[e("a",V,[n("还在手动配置Nginx？太LOW了，这个超强大的 Nginx 可视化管理工具太牛逼了！ (qq.com)"),i(s)])]),H,U,e("p",null,[e("a",X,[n("如何在 Ubuntu 20.04 上安装 Nginx-阿里云开发者社区 (aliyun.com)"),i(s)])]),B,e("p",null,[e("a",$,[n("如何在 Ubuntu 20.04 上使用 UFW 来设置防火墙 - 知乎 (zhihu.com)"),i(s)])]),Q,Y,F,K,e("p",null,[e("a",J,[n("Ubuntu上使用nginx完成一个简单web网站_ubuntu在nginx搭建简单网页-CSDN博客"),i(s)])]),W,e("p",null,[e("a",Z,[n("(关于nginx新增对外开放端口的问题_nginx开放端口"),i(s)])]),ee,ne,se,ie,e("p",null,[e("a",ae,[n("Nginx 生产推荐配置以及日志切割清理 )"),i(s)])]),e("p",null,[n("创建定时任务 "),e("a",re,[n("(141条消息) Linux 定时执行shell 脚本_spearhead_cai的博客-CSDN博客"),i(s)])]),te,e("p",null,[e("a",de,[n("http://192.168.64.128:90/"),i(s)]),n(" 这个会访问到第一个的location的文件")]),e("p",null,[e("a",le,[n("http://192.168.64.128:90/assets/12345678.png"),i(s)]),n(" 这个会访问到第二个的location的文件（静态资源）")]),e("p",null,[e("a",oe,[n("http://192.168.64.128:90/static/12345678.png)"),i(s)]),n(" 这个会访问到第三个的location的文件，路径设置别名，访问到的内容一样（静态资源）")]),ce,e("p",null,[e("a",pe,[n("参考文章 Nginx优化之gzip压缩提升网站速度_苦艾酒丶的博客-CSDN博客"),i(s)])]),ue,e("p",null,[n("参考文章 "),e("a",ve,[n("(141条消息) Nginx跨域配置_程序员小强的博客-CSDN博客_nginx 跨域"),i(s)])]),me,e("p",null,[e("a",he,[n("nginx中的upstream指令参数__nginx upstream参数"),i(s)])]),be,ge,e("p",null,[e("a",_e,[n("nginx expires配置详解 - 腾讯云开发者社区-腾讯云 (tencent.com)"),i(s)])]),ke,e("p",null,[e("a",fe,[n("手把手教你nginx生产环境下高可用环境搭建 - 掘金 (juejin.cn)"),i(s)])]),e("p",null,[e("a",xe,[n("Nginx+keepalived实现高可用集群-阿里云开发者社区 (aliyun.com)"),i(s)])]),ye,qe,e("p",null,[n("在前台往后台发送了一个请求，实现选取字段导出的功能，返回的一个文档流，由于数据量大，耗时长，选取某些字段时能返回正常的文档流，但选取某些字段时又返回404错误，于是我测试了很多的字段，发现并不是传值字段的问题。而后发现那些返回 404 的请求的,等待服务器响应的时间都是 1min,由此判断，可能是请求响应时长方面的问题，但我查看了前端代码,没找到设置1min时长过期的代码，在1min的基础上，我搜索了网页请求1min返回404是什么问题，最终确认是nginx的配置有问题，参考如下文章 "),e("a",we,[n("Nginx报错404，由于请求处理时间过长_"),i(s)]),n(),e("a",De,[n("nginx中的timeout超时设置，请求超时、响应等待超时等_"),i(s)]),n(" 最终解决了问题。（nginx默认的超时时长为60s,而我的请求耗时1.4min，没有对超时时长做配置，所以返回了404，增加超时时长后，请求正常返回。）")]),je,e("p",null,[e("a",ze,[n("【Nginx】图片显示过慢，文件下载不完全，竟然是Nginx的锅！！ - 冰河团队 - 博客园 (cnblogs.com)"),i(s)])]),e("p",null,[e("a",Ae,[n("https://www.cnblogs.com/breezey/p/6740229.html"),i(s)])]),e("p",null,[e("a",Se,[n("https://blog.csdn.net/qq_29864051/article/details/129546567"),i(s)])]),Ce,e("p",null,[e("a",Ie,[n("视频地址 2022版 尚硅谷Docker实战教程_哔哩哔哩_bilibili"),i(s)])]),e("p",null,[n("资料 ： Docker笔记 "),e("a",Ee,[n("https://www.aliyundrive.com/s/6k6jNmKMkiR"),i(s)])]),e("p",null,[n("Docker 官网："),e("a",Ne,[n("https://www.docker.com"),i(s)])]),e("p",null,[n("Github Docker 源码："),e("a",Oe,[n("https://github.com/docker/docker-ce"),i(s)])]),e("p",null,[n("安装docker镜像的仓库： "),e("a",Re,[n("Docker Hub Container Image Library | App Containerization"),i(s)])]),e("p",null,[e("a",Te,[n("Docker 入门终极指南，详细版！别再说不会用 Docker 了！ (qq.com)"),i(s)])]),e("p",null,[e("a",Me,[n("前端也可以学习的Docker - 掘金 (juejin.cn)"),i(s)])]),e("p",null,[e("a",Pe,[n("Docker学习资料集（从入门到实践） (qq.com)"),i(s)])]),Le,e("p",null,[e("a",Ge,[n(" Docker安装指南——如何在Linux中安装Docker？（最新2022-2 for centOS stream 8）"),i(s)])]),e("p",null,[e("a",Ve,[n("Docker启动停止重启 "),i(s)])]),He,e("p",null,[e("a",Ue,[n("超详细的 Docker 基本概念及常用命令 - 掘金 (juejin.cn)"),i(s)])]),Xe,e("p",null,[e("a",Be,[n("Docker镜像与容器备份迁移（export、import与commit、save、load）(tencent.com)"),i(s)])]),$e,e("p",null,[e("a",Qe,[n("Docker系列教程4：使用Docker Hub并将镜像推送到自有仓库 - 知乎 (zhihu.com)"),i(s)])]),Ye,e("p",null,[n("官方Docker Hub地址："),e("a",Fe,[n("https://hub.docker.com/"),i(s)])]),Ke,e("p",null,[n("curl -XGET "),e("a",Je,[n("http://127.0.0.1:5000/v2/_catalog"),i(s)])]),We,e("p",null,[n("再次运行 curl -XGET "),e("a",Ze,[n("http://127.0.0.1:5000/v2/_catalog"),i(s)]),n(" 可以查看到 push 的镜像则成功")]),en,nn,sn,an,rn,tn,dn,ln,e("p",null,[e("a",on,[n("全网最详细的docker数据卷教程 - 掘金 (juejin.cn)"),i(s)])]),cn,e("ol",null,[pn,e("li",null,[e("p",null,[n("宿主机安装了redis,防止端口占用，先关闭宿主机 redis "),e("a",un,[n(" Linux下Redis服务启动与关闭_"),i(s)])]),vn]),mn,hn,bn]),gn,e("p",null,[n("参考： "),e("a",_n,[n("最详细的docker中安装并配置redis - 掘金 (juejin.cn)"),i(s)])]),e("ol",null,[kn,e("li",null,[fn,e("p",null,[xn,n(" 文件模板获取参考 "),e("a",yn,[n("www.redis.cn/download.ht…"),i(s)]),n(" 解压后获取，并复制到 redis.conf")])]),qn]),wn,e("p",null,[n("什么是MySQL主从复制，参考 "),e("a",Dn,[n("运维-主从复制-原理_哔哩哔哩_bilibili"),i(s)]),n(),e("a",jn,[n("MySQL主从复制原理剖析与应用实践 )"),i(s)])]),e("p",null,[e("a",zn,[n(" docker+mysql 主从配置_码农的进阶之路的博客-CSDN博客"),i(s)])]),e("p",null,[e("a",An,[n(" 使用Docker搭建MySQL主从复制（一主一从）_"),i(s)])]),Sn,e("ol",Cn,[In,e("li",null,[En,Nn,e("p",null,[n("应该重置密码 可参考 "),e("a",On,[n("mysql登录报错：ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: YES) )"),i(s)]),n(),e("a",Rn,[n("https://blog.csdn.net/gao_jun1/article/details/111029254"),i(s)])])]),Tn]),e("p",null,[e("a",Mn,[n("(230条消息) Mysql 主从复制 及常见错误解决方法_Kevin_Wuzl的博客-CSDN博客"),i(s)])]),Pn,e("p",null,[n("官网 "),e("a",Ln,[n("Dockerfile 参考 |码头工人文档"),i(s)])]),Gn,e("p",null,[e("a",Vn,[n("Dockerfile文件配置全面详解 - 掘金 (juejin.cn)"),i(s)])]),Hn,Un,Xn,e("p",null,[e("a",Bn,[n("https://www.oracle.com/java/technologies/downloads/#java8"),i(s)])]),e("p",null,[e("a",$n,[n("小柒博客 | 开源软件镜像站 (yangxingzhen.com)"),i(s)])]),Qn,e("p",null,[n("[Docker通过DockerFile自定义Centos 镜像_docker制作centos镜像_Machiel_One的博客-CSDN博客]("),e("a",Yn,[n("https://blog.csdn.net/Machiel_One/article/details/127519205?ops_request_misc=&request_id=&biz_id=102&utm_term="),i(s)]),n(" docker build -t centosvim:1.1&utm_medium=distribute.pc_search_result.none-task-blog-2"),Fn,n("sobaiduweb~default-1-127519205.142"),Kn,n("insert_down28v1&spm=1018.2226.3001.4187)")]),Jn,e("p",null,[e("a",Wn,[n("Docker + Nginx 部署 Vue 项目 - 知乎 (zhihu.com)"),i(s)])]),Zn,e("p",null,[e("a",es,[n("全网最详细的Docker网络教程详解 - 掘金 (juejin.cn)"),i(s)])]),ns,e("p",null,[e("a",ss,[n("【前端Docker部署实战】Docker镜像+Nginx配置部署 Vue 项目 - 掘金 (juejin.cn)"),i(s)])]),is,as,e("p",null,[n("参考文章： "),e("a",rs,[n("docker-compose教程（安装，使用, 快速入门）_pushiqiang的博客-CSDN博客"),i(s)])]),ts,e("p",null,[n("· "),e("a",ds,[n("https://docs.docker.com/compose/compose-file/compose-file-v3/"),i(s)])]),ls,e("p",null,[n("· "),e("a",os,[n("https://docs.docker.com/compose/install/"),i(s)])]),cs,e("p",null,[n("使用示例：Docker Compose 部署 WordPress ："),e("a",ps,[n("https://developer.aliyun.com/article/986242"),i(s)])]),us,e("p",null,[e("a",vs,[n("Install Portainer CE with Docker on Linux - Portainer Documentation"),i(s)])]),ms,e("p",null,[e("a",hs,[n("云原生Java架构师的第一课K8s+Docker+KubeSphere+DevOps_哔哩哔哩_bilibili"),i(s)])]),e("p",null,[e("a",bs,[n("Kubernetes核心实战 (yuque.com)"),i(s)])]),e("p",null,[e("a",gs,[n("1-1 K8s架构师课程大纲详解-_哔哩哔哩_bilibili"),i(s)])]),_s])}const ws=r(k,[["render",ks],["__file","nginx-docker.html.vue"]]);export{ws as default};
