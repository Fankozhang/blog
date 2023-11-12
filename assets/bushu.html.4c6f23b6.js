import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as r,a as e,b as n,e as a,f as s,r as l}from"./app.383a807c.js";const o={},c=e("h1",{id:"项目部署相关",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#项目部署相关","aria-hidden":"true"},"#"),n(" 项目部署相关")],-1),u=e("h2",{id:"相关文章",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#相关文章","aria-hidden":"true"},"#"),n(" 相关文章：")],-1),v={href:"https://mp.weixin.qq.com/s/TEk9PnWBceh35g1Px5XcLQ",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"参考案例-若依部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考案例-若依部署","aria-hidden":"true"},"#"),n(" 参考案例(若依部署)")],-1),m={href:"https://blog.csdn.net/weixin_40816738/article/details/105374594",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,"部署项目时一定要注意 nginx 的配置，不然会页面访问失败",-1),b=e("h3",{id:"element-版本部署时-nginx-配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#element-版本部署时-nginx-配置","aria-hidden":"true"},"#"),n(" element 版本部署时 nginx 配置")],-1),g={href:"http://doc.ruoyi.vip/ruoyi-vue/document/hjbs.html#nginx%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},x=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    server {
        listen       80;
        server_name  localhost;
		charset utf-8;

		location / {
            root   /home/ruoyi/projects/ruoyi-ui;
			try_files $uri $uri/ /index.html;
            index  index.html index.htm;
        }
		
		location /prod-api/ {
			proxy_set_header Host $http_host;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header REMOTE-HOST $remote_addr;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_pass http://localhost:8080/;
		}

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ant-design-vue-版本部署时-nginx-配置" tabindex="-1"><a class="header-anchor" href="#ant-design-vue-版本部署时-nginx-配置" aria-hidden="true">#</a> ant design vue 版本部署时 nginx 配置</h3>`,2),_={href:"https://docs.geekera.cn/RuoYi-Antdv/use.html#%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8",target:"_blank",rel:"noopener noreferrer"},f=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
	# 你的域名
    server_name ruoyi.setworld.net;
    index index.html index.htm;
	# 你的打包路径
    root /data/ruoyi-antdv/dist;
	# gzip 加速
    gzip on;
    gzip_static on;
    gzip_min_length 1k;
    gzip_comp_level 9;
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/    gif image/png;
    gzip_vary on;
    gzip_disable &quot;MSIE [1-6]\\.&quot;;
    location / {
        try_files $uri $uri/ /index.html =404;
    }
    location /api/ {
		# 你的后台地址
        proxy_pass http://127.0.0.1:8080/;
        #proxy_set_header Host $http_host;
        client_max_body_size    20m;
        client_body_buffer_size 1280k;
        proxy_connect_timeout 15s;
        proxy_send_timeout 15s;
        proxy_read_timeout 15s;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ubuntu服务器部署nginx-静态页面" tabindex="-1"><a class="header-anchor" href="#ubuntu服务器部署nginx-静态页面" aria-hidden="true">#</a> ubuntu服务器部署nginx，静态页面</h2><h3 id="ubuntu安装nginx" tabindex="-1"><a class="header-anchor" href="#ubuntu安装nginx" aria-hidden="true">#</a> ubuntu安装nginx</h3>`,3),y={href:"https://developer.aliyun.com/article/759280",target:"_blank",rel:"noopener noreferrer"},k=s(`<h3 id="安装-nginx" tabindex="-1"><a class="header-anchor" href="#安装-nginx" aria-hidden="true">#</a> 安装 Nginx</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt update
sudo apt install nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如上安装nginx服务器所在路径为 /etc/nginx</strong></p><h3 id="验证nginx状态" tabindex="-1"><a class="header-anchor" href="#验证nginx状态" aria-hidden="true">#</a> 验证nginx状态：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo systemctl status nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置防火墙" tabindex="-1"><a class="header-anchor" href="#配置防火墙" aria-hidden="true">#</a> 配置防火墙</h3>`,6),w={href:"https://zhuanlan.zhihu.com/p/139381645",target:"_blank",rel:"noopener noreferrer"},q=s(`<p>服务器上安装运行 Nginx，需要配置好防火墙，允许流量通过 HTTP（<code>80</code>）和 HTTPS（<code>443</code>）端口。假设你正在使用<code>UFW</code>,你可以做的是启用 ‘Nginx Full’ profile，它包含了这两个端口：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo ufw allow &#39;Nginx Full&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>想要验证状态，输入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo ufw status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>验证状态时出现 status active 则是配置成功，当出现 status inactive时查看如下解决办法：</p><p>​ 在Ubuntu中，使用sudo ufw enable命令来开启防火墙。</p><p>​ 在Ubuntu中，使用sudo ufw disable命令来关闭防火墙。</p><p>测试系统是否安装 UFW，没有的话安装一下 UFW</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt update
sudo apt install ufw
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>检查 UFW 的状态</p><p>安装过程不会自动激活防火墙，以避免服务器被锁住。你可以检查 UFW 的状态</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo ufw status verbose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当出现 Status: inactive 时则表示正常</p><h3 id="访问nginx默认页面" tabindex="-1"><a class="header-anchor" href="#访问nginx默认页面" aria-hidden="true">#</a> 访问nginx默认页面</h3><p>当访问服务器ip能出现nginx默认页面时，nginx就算配置成功了。</p><h3 id="nginx部署静态网页" tabindex="-1"><a class="header-anchor" href="#nginx部署静态网页" aria-hidden="true">#</a> nginx部署静态网页</h3>`,16),j={href:"https://blog.csdn.net/qq_43279579/article/details/110354816",target:"_blank",rel:"noopener noreferrer"},E=s(`<p>1 进入nginx默认的网页目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /var/www/html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你会看到index.html、index.htm、index.nginx-debian.html，三个文件中的任意一个。就是nginx默认页面</p><p>把自己的 index.html 页面放到这个目录下。重新启动nginx服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx -s reload             *//重载配置文件（修改了配置文件需要执行此命令 比较常用  重启）*
sudo systemctl restart nginx
如果没有这一步，浏览器打开页面不会发生改变。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启成功后可以看到nginx的页面发生改变。此时静态网页配置成功</p><p>2 如果需要存放 index.html 的页面路径发生改变，不放在/var/www/html下 , 则需要修改nginx的配置文件以实现页面部署</p><p>配置路径 ： /etc/nginx/sites-enabled/default</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>将   root /var/www/html;  配置的路径改为 index.html 文件所在的路径 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改完相关配置以后，通过 sudo nginx -t 查看配置文件是否有误，无误后再重启 nginx ，页面发生变化，此时静态网页配置成功</p><h2 id="springboot项目部署" tabindex="-1"><a class="header-anchor" href="#springboot项目部署" aria-hidden="true">#</a> springBoot项目部署</h2><h3 id="服务器安装jdk1-8" tabindex="-1"><a class="header-anchor" href="#服务器安装jdk1-8" aria-hidden="true">#</a> 服务器安装jdk1.8</h3><p>命令：java -version：查看JDK安装版本， 出现 Command &#39;java&#39; not found ，则需要安装 jdk</p><h4 id="命令行安装" tabindex="-1"><a class="header-anchor" href="#命令行安装" aria-hidden="true">#</a> 命令行安装</h4>`,14),S={href:"https://so.csdn.net/so/search?q=%E5%AE%89%E8%A3%85jdk&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},N=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get update

sudo apt-get install [openjdk](https://so.csdn.net/so/search?q=openjdk&amp;spm=1001.2101.3001.7020)-8-jdk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql安装" tabindex="-1"><a class="header-anchor" href="#mysql安装" aria-hidden="true">#</a> mysql安装</h3>`,2),z={href:"https://blog.csdn.net/cruiserblog/article/details/106934570",target:"_blank",rel:"noopener noreferrer"},F=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get update  #更新源
sudo apt-get install mysql-server #安装
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成后，可以通过下面的命令来查看时候安装成功：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl status mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>登陆MySQL</p><p>以root用户登陆</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>  <span class="token comment"># -u 指定用户名 -p需要输入密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> mysql <span class="token comment">#可以不需要指定用户名密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>修改root密码</strong> 其中123456是新的密码自己设置</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">USER</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;localhost&#39;</span> IDENTIFIED <span class="token keyword">WITH</span> mysql_native_password <span class="token keyword">BY</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>执行 使密码生效</strong> <code>flush privileges</code></p><p>当你在Linux中进入MySQL命令行后，要退出MySQL命令行，可以使用以下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>exit;  或者   quit;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这两个命令都可以让你从MySQL命令行中退出。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo service mysql start # 启动mysql service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>navicat链接mysql 报错 2003，具体可能的问题如下：</p>`,16),L={href:"https://blog.csdn.net/weixin_49015210/article/details/117748687",target:"_blank",rel:"noopener noreferrer"},U=e("p",null,"如果还是链接不上navicat，按如下的文章再进行配置：主要关注 第 5 步 - 修改MySql远程连接配置，和第 6 步 - 打开防火墙",-1),D={href:"https://blog.csdn.net/u014378628/article/details/118406005",target:"_blank",rel:"noopener noreferrer"},B=e("p",null,"至此，我的navicat已经可以正常连上服务器的 mysql，正常导入数据，",-1),T=e("h3",{id:"redis安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#redis安装","aria-hidden":"true"},"#"),n(" redis安装")],-1),$={href:"https://gblfy.blog.csdn.net/article/details/114371657",target:"_blank",rel:"noopener noreferrer"},C=s(`<h3 id="springboot打包成jar包" tabindex="-1"><a class="header-anchor" href="#springboot打包成jar包" aria-hidden="true">#</a> springBoot打包成jar包</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>打包之前修改 application 相关的配置

  修改数据库连接
  修改Redis连接信息
  文件路径  application.yml中的profile需要改为服务器存在的真实路径，根据实际情况调整
  日志存储路径调整 logback.xml文件中的路径建议改为./logs，根据实际情况调整
  编译打包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 /usr/local/ruoyi 目录创建一个文件夹，将jar包放入 （文件夹位置可自定义）</p><p>nohup java -jar ruoyi-admin.jar</p><p>Web server failed to start. Port 8080 was already in use.</p>`,5),R={href:"https://blog.csdn.net/u012995500/article/details/104494808",target:"_blank",rel:"noopener noreferrer"};function I(M,W){const i=l("ExternalLinkIcon");return t(),r("div",null,[c,u,e("p",null,[e("a",v,[n("Springboot+Vue在开发和部署相关问题解决 (qq.com)"),a(i)])]),p,e("p",null,[e("a",m,[n("RuoYi-Vue 部署 Linux环境 若依前后端分离项目（jar包+nginx 单机版本）_ruoyi-vue 部署 linux环境 若依前后端分离项目(jar包+nginx 单机版本) 原创-CSDN博客"),a(i)])]),h,b,e("p",null,[e("a",g,[n("环境部署 | RuoYi"),a(i)])]),x,e("p",null,[e("a",_,[n("快速开始 | 极客文档 (geekera.cn)"),a(i)])]),f,e("p",null,[e("a",y,[n("如何在 Ubuntu 20.04 上安装 Nginx-阿里云开发者社区 (aliyun.com)"),a(i)])]),k,e("p",null,[e("a",w,[n("如何在 Ubuntu 20.04 上使用 UFW 来设置防火墙 - 知乎 (zhihu.com)"),a(i)])]),q,e("p",null,[e("a",j,[n("Ubuntu上使用nginx完成一个简单web网站_ubuntu在nginx搭建简单网页-CSDN博客"),a(i)])]),E,e("p",null,[n("安装的 "),e("a",S,[n("jdk"),a(i)]),n("1.8")]),N,e("p",null,[n("[在Ubuntu20.04上安装MySQL8.0及正确配置"),e("a",z,[n("已验证]_ubuntu 编译安装 mysql8.0.30-CSDN博客"),a(i)])]),F,e("p",null,[e("a",L,[n("05.navicat连接不上虚拟机内的mysql_navicat连接不上虚拟机的数据库-CSDN博客"),a(i)])]),U,e("p",null,[e("a",D,[n("【精选】Ubuntu 20.04 安装 MySQL 8.0 并且远程连接数据库(包括后续遇到的新坑)_synchronizing state of mysql.service with sysv ser_Nymph2333的博客-CSDN博客"),a(i)])]),B,T,e("p",null,[e("a",$,[n("Redis-6.2.5 安装 Linux环境(单机)_redis6.2需要gcc什么般般-CSDN博客"),a(i)])]),C,e("p",null,[e("a",R,[n("Linux 和 windows 下解决端口占用问题（ Port was already in use）_port 10802was alread inuse-CSDN博客"),a(i)])])])}const Q=d(o,[["render",I],["__file","bushu.html.vue"]]);export{Q as default};
