import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as o,a as n,b as e,e as a,f as i,r as d}from"./app.53799a08.js";const r={},c=n("h1",{id:"项目部署相关",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#项目部署相关","aria-hidden":"true"},"#"),e(" 项目部署相关")],-1),p=n("h2",{id:"linux-服务器运维管理面板",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#linux-服务器运维管理面板","aria-hidden":"true"},"#"),e(" Linux 服务器运维管理面板")],-1),u={href:"https://1panel.cn/docs/installation/online_installation/#1",target:"_blank",rel:"noopener noreferrer"},v=n("h2",{id:"端口操作",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#端口操作","aria-hidden":"true"},"#"),e(" 端口操作：")],-1),m={href:"https://blog.csdn.net/daocaokafei/article/details/115364111",target:"_blank",rel:"noopener noreferrer"},b=i(`<p>列出所有打开的端口 ： netstat -lntu</p><p>systemctl start firewalld <em>#开启防火墙</em></p><p>firewall-cmd --permanent --zone=public --add-port=8080/tcp 开放端口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1:查看防火状态

systemctl status firewalld

service  iptables status

2:暂时关闭防火墙

systemctl stop firewalld

service  iptables stop

3:永久关闭防火墙

systemctl disable firewalld

chkconfig iptables off

4:重启防火墙

systemctl enable firewalld

service iptables restart  

5:永久关闭后重启

//暂时还没有试过

chkconfig iptables on　
————————————————
版权声明：本文为CSDN博主「魔道不误砍柴功」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_35971258/article/details/79318842
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关文章" tabindex="-1"><a class="header-anchor" href="#相关文章" aria-hidden="true">#</a> 相关文章：</h2>`,5),h={href:"https://mp.weixin.qq.com/s/TEk9PnWBceh35g1Px5XcLQ",target:"_blank",rel:"noopener noreferrer"},k=n("h2",{id:"参考案例-若依部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考案例-若依部署","aria-hidden":"true"},"#"),e(" 参考案例(若依部署)")],-1),g={href:"https://blog.csdn.net/weixin_40816738/article/details/105374594",target:"_blank",rel:"noopener noreferrer"},_=n("p",null,"部署项目时一定要注意 nginx 的配置，不然会页面访问失败",-1),x=n("h3",{id:"element-版本部署时-nginx-配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#element-版本部署时-nginx-配置","aria-hidden":"true"},"#"),e(" element 版本部署时 nginx 配置")],-1),f={href:"http://doc.ruoyi.vip/ruoyi-vue/document/hjbs.html#nginx%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},y=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>worker_processes  1;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ant-design-vue-版本部署时-nginx-配置" tabindex="-1"><a class="header-anchor" href="#ant-design-vue-版本部署时-nginx-配置" aria-hidden="true">#</a> ant design vue 版本部署时 nginx 配置</h3>`,2),q={href:"https://docs.geekera.cn/RuoYi-Antdv/use.html#%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8",target:"_blank",rel:"noopener noreferrer"},E=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ubuntu服务器部署nginx-静态页面" tabindex="-1"><a class="header-anchor" href="#ubuntu服务器部署nginx-静态页面" aria-hidden="true">#</a> ubuntu服务器部署nginx，静态页面</h2><h3 id="ubuntu安装nginx" tabindex="-1"><a class="header-anchor" href="#ubuntu安装nginx" aria-hidden="true">#</a> ubuntu安装nginx</h3>`,3),w={href:"https://developer.aliyun.com/article/759280",target:"_blank",rel:"noopener noreferrer"},j=i(`<h3 id="安装-nginx" tabindex="-1"><a class="header-anchor" href="#安装-nginx" aria-hidden="true">#</a> 安装 Nginx</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt update
sudo apt install nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如上安装nginx服务器所在路径为 /etc/nginx</strong></p><h3 id="验证nginx状态" tabindex="-1"><a class="header-anchor" href="#验证nginx状态" aria-hidden="true">#</a> 验证nginx状态：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo systemctl status nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置防火墙" tabindex="-1"><a class="header-anchor" href="#配置防火墙" aria-hidden="true">#</a> 配置防火墙</h3>`,6),S={href:"https://zhuanlan.zhihu.com/p/139381645",target:"_blank",rel:"noopener noreferrer"},A=i(`<p>服务器上安装运行 Nginx，需要配置好防火墙，允许流量通过 HTTP（<code>80</code>）和 HTTPS（<code>443</code>）端口。假设你正在使用<code>UFW</code>,你可以做的是启用 ‘Nginx Full’ profile，它包含了这两个端口：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo ufw allow &#39;Nginx Full&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>想要验证状态，输入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo ufw status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>验证状态时出现 status active 则是配置成功，当出现 status inactive时查看如下解决办法：</p><p>​ 在Ubuntu中，使用sudo ufw enable命令来开启防火墙。</p><p>​ 在Ubuntu中，使用sudo ufw disable命令来关闭防火墙。</p><p>测试系统是否安装 UFW，没有的话安装一下 UFW</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt update
sudo apt install ufw
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>检查 UFW 的状态</p><p>安装过程不会自动激活防火墙，以避免服务器被锁住。你可以检查 UFW 的状态</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo ufw status verbose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当出现 Status: inactive 时则表示正常</p><h3 id="访问nginx默认页面" tabindex="-1"><a class="header-anchor" href="#访问nginx默认页面" aria-hidden="true">#</a> 访问nginx默认页面</h3><p>当访问服务器ip能出现nginx默认页面时，nginx就算配置成功了。</p><h3 id="nginx部署静态网页" tabindex="-1"><a class="header-anchor" href="#nginx部署静态网页" aria-hidden="true">#</a> nginx部署静态网页</h3>`,16),B={href:"https://blog.csdn.net/qq_43279579/article/details/110354816",target:"_blank",rel:"noopener noreferrer"},D=i(`<p>1 进入nginx默认的网页目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /var/www/html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你会看到index.html、index.htm、index.nginx-debian.html，三个文件中的任意一个。就是nginx默认页面</p><p>把自己的 index.html 页面放到这个目录下。重新启动nginx服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx -s reload             *//重载配置文件（修改了配置文件需要执行此命令 比较常用  重启）*
sudo systemctl restart nginx
如果没有这一步，浏览器打开页面不会发生改变。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启成功后可以看到nginx的页面发生改变。此时静态网页配置成功</p><p>2 如果需要存放 index.html 的页面路径发生改变，不放在/var/www/html下 , 则需要修改nginx的配置文件以实现页面部署</p><p>配置路径 ： /etc/nginx/sites-enabled/default</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>将   root /var/www/html;  配置的路径改为 index.html 文件所在的路径 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改完相关配置以后，通过 sudo nginx -t 查看配置文件是否有误，无误后再重启 nginx ，页面发生变化，此时静态网页配置成功</p><h2 id="springboot项目部署" tabindex="-1"><a class="header-anchor" href="#springboot项目部署" aria-hidden="true">#</a> springBoot项目部署</h2><h3 id="服务器安装jdk1-8" tabindex="-1"><a class="header-anchor" href="#服务器安装jdk1-8" aria-hidden="true">#</a> 服务器安装jdk1.8</h3><p>命令：java -version：查看JDK安装版本， 出现 Command &#39;java&#39; not found ，则需要安装 jdk</p><h4 id="命令行安装" tabindex="-1"><a class="header-anchor" href="#命令行安装" aria-hidden="true">#</a> 命令行安装</h4>`,14),M={href:"https://so.csdn.net/so/search?q=%E5%AE%89%E8%A3%85jdk&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},C=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get update

sudo apt-get install [openjdk](https://so.csdn.net/so/search?q=openjdk&amp;spm=1001.2101.3001.7020)-8-jdk



centos :  yum install java-1.8.0-openjdk* -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql安装" tabindex="-1"><a class="header-anchor" href="#mysql安装" aria-hidden="true">#</a> mysql安装</h3>`,2),I={href:"https://blog.csdn.net/cruiserblog/article/details/106934570",target:"_blank",rel:"noopener noreferrer"},R=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get update  #更新源
sudo apt-get install mysql-server #安装
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成后，可以通过下面的命令来查看时候安装成功：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl status mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>登陆MySQL</p><p>以root用户登陆</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>  <span class="token comment"># -u 指定用户名 -p需要输入密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> mysql <span class="token comment">#可以不需要指定用户名密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>修改root密码</strong> 其中123456是新的密码自己设置</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">USER</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;localhost&#39;</span> IDENTIFIED <span class="token keyword">WITH</span> mysql_native_password <span class="token keyword">BY</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>执行 使密码生效</strong> <code>flush privileges</code></p><p>当你在Linux中进入MySQL命令行后，要退出MySQL命令行，可以使用以下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>exit;  或者   quit;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这两个命令都可以让你从MySQL命令行中退出。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo service mysql start # 启动mysql service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>navicat链接mysql 报错 2003，具体可能的问题如下：</p>`,16),T={href:"https://blog.csdn.net/weixin_49015210/article/details/117748687",target:"_blank",rel:"noopener noreferrer"},F=n("p",null,"如果还是链接不上navicat，按如下的文章再进行配置：主要关注 第 5 步 - 修改MySql远程连接配置，和第 6 步 - 打开防火墙",-1),N={href:"https://blog.csdn.net/u014378628/article/details/118406005",target:"_blank",rel:"noopener noreferrer"},L=n("p",null,"至此，我的navicat已经可以正常连上服务器的 mysql，正常导入数据，",-1),P={href:"http://bing.com",target:"_blank",rel:"noopener noreferrer"},z={href:"https://cn.bing.com/search?pc=&q=centos%E5%AE%89%E8%A3%85",target:"_blank",rel:"noopener noreferrer"},O=n("h3",{id:"redis安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#redis安装","aria-hidden":"true"},"#"),e(" redis安装")],-1),U={href:"https://gblfy.blog.csdn.net/article/details/114371657",target:"_blank",rel:"noopener noreferrer"},H=i(`<h3 id="springboot打包成jar包" tabindex="-1"><a class="header-anchor" href="#springboot打包成jar包" aria-hidden="true">#</a> springBoot打包成jar包</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>打包之前修改 application 相关的配置

  修改数据库连接
  修改Redis连接信息
  文件路径  application.yml中的profile需要改为服务器存在的真实路径，根据实际情况调整
  日志存储路径调整 logback.xml文件中的路径建议改为./logs，根据实际情况调整
  编译打包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 /usr/local/ruoyi 目录创建一个文件夹，将jar包放入 （文件夹位置可自定义）</p><p>nohup java -jar ruoyi-admin.jar</p><p>Web server failed to start. Port 8080 was already in use.</p>`,5),J={href:"https://blog.csdn.net/u012995500/article/details/104494808",target:"_blank",rel:"noopener noreferrer"},$=n("h2",{id:"docker部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker部署","aria-hidden":"true"},"#"),e(" Docker部署")],-1),W={href:"https://blog.csdn.net/weixin_46594796/article/details/133962200",target:"_blank",rel:"noopener noreferrer"},V=n("h3",{id:"docker-安装-nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-安装-nginx","aria-hidden":"true"},"#"),e(" docker 安装 nginx")],-1),Y={href:"https://blog.csdn.net/BThinker/article/details/123507820",target:"_blank",rel:"noopener noreferrer"},K=i(`<h2 id="vue项目跨域配置" tabindex="-1"><a class="header-anchor" href="#vue项目跨域配置" aria-hidden="true">#</a> vue项目跨域配置</h2><p>我部署的一个springBoot+vue的项目，用nginx部署后，一直请求不到，困扰了很长时间，最后发现是vue项目配置跨域不对的问题。</p><p>vue.config.js 跨域配置参考如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 可用
  server: {
    port: 80,
    host: true,
    open: true,
    proxy: {
      &#39;/api&#39;: {
        target: &#39;http://12.12.12.12:8084&#39;,
        changeOrigin: true,
        rewrite: (p) =&gt; p.replace(/^\\/api/, &#39;&#39;)
      }
    }
  },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.env.local</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>配置跨域的请求路径

VITE_APP_BASE_API = &#39;/api&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>axios请求 baseUrl配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import axios from &quot;axios&quot;;
//  导出基准地址，原因： 其他地方不是通过 axios 发送请求的地方用上基准地址
// export const baseURL=&#39;http://localhost:8084/api&#39;  不能这麽用，部署后请求不到
export const baseURL=i<wbr>mport.meta.env.VITE_APP_BASE_API
const instance=axios.create({
    // axios 的一些配置，baseurl timeout 
    baseURL,
    timeout:5000
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署后 nginx 配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location /api/ {
            proxy_set_header Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header REMOTE-HOST $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass http://12.12.12.12:8084/;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="java项目跨域配置-swagger资源映射" tabindex="-1"><a class="header-anchor" href="#java项目跨域配置-swagger资源映射" aria-hidden="true">#</a> java项目跨域配置，swagger资源映射</h2><p>WebMvcConfig.java</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableSwagger2</span>
<span class="token annotation punctuation">@EnableKnife4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebMvcConfig</span> <span class="token keyword">extends</span> <span class="token class-name">WebMvcConfigurationSupport</span> <span class="token punctuation">{</span>
    <span class="token comment">//  解决跨域问题</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addCorsMappings</span><span class="token punctuation">(</span><span class="token class-name">CorsRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        registry<span class="token punctuation">.</span><span class="token function">addMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/**&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 所有接口</span>
                <span class="token punctuation">.</span><span class="token function">allowCredentials</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// 是否发送 Cookie</span>
                <span class="token punctuation">.</span><span class="token function">allowedOriginPatterns</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 支持域</span>
                <span class="token punctuation">.</span><span class="token function">allowedMethods</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;PUT&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DELETE&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 支持方法</span>
                <span class="token punctuation">.</span><span class="token function">allowedHeaders</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">exposedHeaders</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">registry</span>:
     * <span class="token keyword">@return</span> void
     * <span class="token keyword">@author</span> 张帆
     * <span class="token keyword">@description</span> 设置资源映射，swagger访问
     * <span class="token keyword">@date</span> 2023/6/3 17:11
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">addResourceHandlers</span><span class="token punctuation">(</span><span class="token class-name">ResourceHandlerRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;资源映射&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">&quot;doc.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:/META-INF/resources/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">&quot;/webjars/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:/META-INF/resources/webjars/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">&quot;/backend/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:/backend/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">&quot;/front/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:/front/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Docket</span> <span class="token function">createRestApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 文档类型</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span><span class="token punctuation">.</span><span class="token constant">SWAGGER_2</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">apis</span><span class="token punctuation">(</span><span class="token class-name">RequestHandlerSelectors</span><span class="token punctuation">.</span><span class="token function">basePackage</span><span class="token punctuation">(</span><span class="token string">&quot;com.example.mytest.test.controller&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">paths</span><span class="token punctuation">(</span><span class="token class-name">PathSelectors</span><span class="token punctuation">.</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">ApiInfo</span> <span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ApiInfoBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string">&quot;mytest&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token string">&quot;1.0&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token string">&quot;mytest接口文档&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="minio" tabindex="-1"><a class="header-anchor" href="#minio" aria-hidden="true">#</a> Minio</h2><h3 id="linux-安装minio" tabindex="-1"><a class="header-anchor" href="#linux-安装minio" aria-hidden="true">#</a> linux 安装Minio</h3>`,15),Q={href:"https://www.minio.org.cn/docs/minio/linux/index.html",target:"_blank",rel:"noopener noreferrer"},X=n("h3",{id:"docker-安装-实测可用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-安装-实测可用","aria-hidden":"true"},"#"),e(" docker 安装（实测可用）")],-1),G={href:"https://blog.csdn.net/BThinker/article/details/125412751",target:"_blank",rel:"noopener noreferrer"},Z=i('<p><strong>下载Minio镜像</strong></p><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">docker pull minio/minio</td><td style="text-align:left;">下载最新版Minio镜像 (其实此命令就等同于 : docker pull minio/minio:latest )</td></tr><tr><td style="text-align:left;">docker pull minio/minio:RELEASE.2022-06-20T23-13-45Z.fips</td><td style="text-align:left;">下载指定版本的Minio镜像 (xxx指具体版本号)</td></tr></tbody></table>',2),nn={href:"https://so.csdn.net/so/search?q=Docker&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},en=i(`<p><strong>创建目录</strong></p><blockquote><p>一个用来存放配置，一个用来存储上传文件的目录</p><p>启动前需要先创建Minio外部挂载的配置文件（ /home/minio/config）,和存储上传文件的目录（ /home/minio/data）</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir -p /home/minio/config
mkdir -p /home/minio/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>创建Minio容器并运行</strong></p><p>多行模式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -p 9000:9000 -p 9090:9090 \\
     --net=host \\
     --name minio \\
     -d --restart=always \\
     -e &quot;MINIO_ACCESS_KEY=minioadmin&quot; \\
     -e &quot;MINIO_SECRET_KEY=minioadmin&quot; \\
     -v /home/minio/data:/data \\
     -v /home/minio/config:/root/.minio \\
     minio/minio server \\
     /data --console-address &quot;:9090&quot; -address &quot;:9000&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单行模式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -p 9000:9000 -p 9090:9090      --net=host      --name minio      -d --restart=always      -e &quot;MINIO_ACCESS_KEY=minioadmin&quot;      -e &quot;MINIO_SECRET_KEY=minioadmin&quot;      -v /home/minio/data:/data      -v /home/minio/config:/root/.minio      minio/minio server      /data --console-address &quot;:9090&quot; -address &quot;:9000&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>9090端口指的是minio的客户端端口</p><p>MINIO_ACCESS_KEY ：账号</p><p>MINIO_SECRET_KEY ：密码（账号长度必须大于等于5，密码长度必须大于等于8位）</p><p><strong>访问</strong></p>`,12),sn={href:"http://127.0.0.1:9090/login",target:"_blank",rel:"noopener noreferrer"},an={href:"https://blog.csdn.net/destin223/article/details/134110194#:~:text=%E8%AE%BF%E9%97%AE%E6%96%87%E4%BB%B6%E7%BD%91%E5%9D%80%E4%B8%BA%EF%BC%9Aip%3Aaddress%2Fbucket%E7%9A%84%E5%90%8D%E5%AD%97%2F%E6%96%87%E4%BB%B6%E7%9A%84%E5%90%8D%E5%AD%97%E3%80%82,2%E3%80%81%E8%BF%9B%E5%85%A5%E9%A1%B5%E9%9D%A2%E5%90%8E%EF%BC%8C%E9%85%8D%E7%BD%AE%E5%8F%AA%E8%AF%BB%E8%AE%BF%E9%97%AE%E6%9D%83%E9%99%90%EF%BC%8Cprefix%E6%8C%89%E7%85%A7%E6%8F%90%E7%A4%BA%E8%BE%93%E5%85%A5%E5%B0%B1%E5%A5%BD%E3%80%82",target:"_blank",rel:"noopener noreferrer"},tn=n("p",null,"bucket 的 Access Policy 设置为public可以直接浏览器访问",-1),ln=n("p",null,"在minio上传的文件以 ip:address/bucket的名字/文件的名字 路径来访问",-1),on={href:"http://1.14.16.145:9000/test/MyLogo.jpg",target:"_blank",rel:"noopener noreferrer"},dn={href:"https://mp.weixin.qq.com/s/Ejz4RMt9m0nBgFFPGFtjrg",target:"_blank",rel:"noopener noreferrer"},rn=n("h2",{id:"自动化部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自动化部署","aria-hidden":"true"},"#"),e(" 自动化部署")],-1),cn={href:"https://blog.csdn.net/weixin_43976226/article/details/133039035",target:"_blank",rel:"noopener noreferrer"},pn={href:"https://www.bilibili.com/video/BV1ds4y1k7QM/?spm_id_from=333.337.search-card.all.click&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},un=n("h3",{id:"jenkens-docker安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jenkens-docker安装","aria-hidden":"true"},"#"),e(" jenkens（docker安装）")],-1),vn={href:"https://developer.aliyun.com/article/892646",target:"_blank",rel:"noopener noreferrer"},mn={href:"https://blog.csdn.net/BThinker/article/details/124178670",target:"_blank",rel:"noopener noreferrer"},bn={href:"https://www.bilibili.com/video/BV1Da411G7s4?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},hn=i(`<li><p>拉取镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#查询镜像
docker search jenkins

# docker pull jenkinsci/blueocean     // 这个镜像使用的时候有些插件如汉化插件 版本原因无法下载。
# docker pull jenkinsci/blueocean:1.25.3       具体版本下载


#下载镜像（推荐使用）
docker pull jenkins/jenkins      // 这个镜像的插件大多正常下载，且自动下载汉化插件，个人推荐用这个
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建 Jenkins 工作目录，将容器内目录挂载到此目录上，这样我们可以在宿主机上对文件的修改同步到容器内。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir -p /usr/local/jenkins
chmod 777 /usr/local/jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动容器，同时映射宿主机和容器内端口。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># -d 后台方式启动
# -p 映射端口，宿主机端口:容器内端口
# -v 挂载卷，将容器Jenkins工作目录/var/jenkins_home挂载到宿主机目录/usr/local/jenkins
# -name 给容器起个别名
docker run -d -p 8099:8080 -p 50099:50000 -v /usr/local/jenkins:/var/jenkins_home --name myjenkins jenkins/jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>docker ps 查看容器是否启动成功。</p></li><li><p>查看 Jenkins 容器日志。 docker logs myjenkins 能够看到一个密码，可以记下来，登录jenkens网页的时候会用到(7abe59afbbd34dc4bf04c609a1e93d50)</p></li><li><p>将 Jenkins 端口添加到防火墙。 （服务器安全组别忘了设置）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>firewall-cmd --zone=public --add-port=8099/tcp --permanent
systemctl restart firewalld
firewall-cmd --zone=public --list-ports
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置镜像加速</p><p>打开宿主机 Jenkins 工作目录下的<code>hudson.model.UpdateCenter.xml</code>文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /usr/local/jenkins/hudson.model.UpdateCenter.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>url 修改为国内的清华大学官方镜像地址，最终内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&#39;1.1&#39; encoding=&#39;UTF-8&#39;?&gt;
&lt;sites&gt;
  &lt;site&gt;
    &lt;id&gt;default&lt;/id&gt;
    &lt;url&gt;https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json&lt;/url&gt;
  &lt;/site&gt;
&lt;/sites&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重启 Jenkins 服务。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker stop 容器ID
docker start 容器ID


docker restart jenkins

网址访问 ip+端口号+&#39;/restart&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>nginx 登录地址</p><p>服务器ip地址:8099</p><p>输入密码，安装插件（有些下载不了可以先不安装），创建账户，按照流程进行下一步的操作</p><p>重启后，进入操作界面</p></li>`,9),kn=n("p",null,"中文插件配置",-1),gn=n("p",null,[n("strong",null,"操作步骤：")],-1),_n=n("li",null,"安装插件：Manage Jenkins -> Manage Plugins -> Available -> Filter 中输入 Locale -> 勾选后点击 Install without restart",-1),xn=n("li",null,[e("设置中文：Manage Jenkins -> Configure System -> Default Language 中输入 "),n("code",null,"zh_CN"),e(" -> 勾选 Ignore browser preference and force this language to all users -> 点击 Save")],-1),fn={href:"https://plugins.jenkins.io/maven-plugin",target:"_blank",rel:"noopener noreferrer"},yn={href:"https://plugins.jenkins.io/publish-over-ssh",target:"_blank",rel:"noopener noreferrer"},qn=n("h3",{id:"jenkins的基本配置与基本使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jenkins的基本配置与基本使用","aria-hidden":"true"},"#"),e(" Jenkins的基本配置与基本使用")],-1),En={href:"https://juejin.cn/post/7101851443073646623#heading-28",target:"_blank",rel:"noopener noreferrer"},wn=i(`<h4 id="docker安装maven" tabindex="-1"><a class="header-anchor" href="#docker安装maven" aria-hidden="true">#</a> docker安装maven</h4><p>选择安装maven的路径</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /opt/software
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),jn={href:"https://archive.apache.org/dist/maven/maven-3/3.6.3/binaries/",target:"_blank",rel:"noopener noreferrer"},Sn=i(`<p>下载完成后，解压Maven到 安装Maven的目录。 tar -zxvf apache-maven-3.6.3-bin.tar.gz</p><p>添加到全局环境变量：服务器输入命令 export PATH=/path/to/apache-maven-3.6.3/bin:$PATH</p><p><strong>配置settings.xml（可选）</strong> 此处使用了阿里云的Maven仓库</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>mirror<span class="token punctuation">&gt;</span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>id<span class="token punctuation">&gt;</span></span>aliyunmaven<span class="token operator">&lt;</span><span class="token operator">/</span>id<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>mirrorOf<span class="token punctuation">&gt;</span></span><span class="token operator">*</span><span class="token operator">&lt;</span><span class="token operator">/</span>mirrorOf<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>name<span class="token punctuation">&gt;</span></span>阿里云公共仓库<span class="token operator">&lt;</span><span class="token operator">/</span>name<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>url<span class="token punctuation">&gt;</span></span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>maven<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>repository<span class="token operator">/</span><span class="token keyword">public</span><span class="token operator">&lt;</span><span class="token operator">/</span>url<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>mirror<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用maven需要有java的环境</strong></p><p>yum安装如下：</p><p>查询要安装jdk的版本</p>`,7),An=n("p",null,"命令：yum -y list java*",-1),Bn=n("h4",{id:"_1-2-安装jdk1-8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-2-安装jdk1-8","aria-hidden":"true"},"#"),e(" 1.2 安装jdk1.8")],-1),Dn={href:"https://so.csdn.net/so/search?q=openjdk&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},Mn=n("h4",{id:"_1-3-查询jdk版本",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-3-查询jdk版本","aria-hidden":"true"},"#"),e(" 1.3 查询jdk版本")],-1),Cn={href:"https://so.csdn.net/so/search?q=version&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},In=n("p",null,"这样就安装成功了。 默认给安装到 usr/lib/jvm/",-1),Rn=n("p",null,[n("strong",null,"测试安装"),e(" mvn -version 正确输出")],-1),Tn=n("h4",{id:"docker-安装-git",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-安装-git","aria-hidden":"true"},"#"),e(" docker 安装 git")],-1),Fn={href:"https://blog.csdn.net/qq_38628046/article/details/123591295",target:"_blank",rel:"noopener noreferrer"},Nn=n("p",null,"yum install -y git",-1),Ln=n("h2",{id:"线上文件路径",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#线上文件路径","aria-hidden":"true"},"#"),e(" 线上文件路径")],-1),Pn=n("p",null,"/home/mysql nginx minio",-1),zn=n("p",null,"jar包 /usr/local/app",-1);function On(Un,Hn){const s=d("ExternalLinkIcon");return l(),o("div",null,[c,p,n("p",null,[e("1Panel : "),n("a",u,[e("在线安装 - 1Panel 文档"),a(s)])]),v,n("p",null,[n("a",m,[e("https://blog.csdn.net/daocaokafei/article/details/115364111"),a(s)])]),b,n("p",null,[n("a",h,[e("Springboot+Vue在开发和部署相关问题解决 (qq.com)"),a(s)])]),k,n("p",null,[n("a",g,[e("RuoYi-Vue 部署 Linux环境 若依前后端分离项目（jar包+nginx 单机版本）_ruoyi-vue 部署 linux环境 若依前后端分离项目(jar包+nginx 单机版本) 原创-CSDN博客"),a(s)])]),_,x,n("p",null,[n("a",f,[e("环境部署 | RuoYi"),a(s)])]),y,n("p",null,[n("a",q,[e("快速开始 | 极客文档 (geekera.cn)"),a(s)])]),E,n("p",null,[n("a",w,[e("如何在 Ubuntu 20.04 上安装 Nginx-阿里云开发者社区 (aliyun.com)"),a(s)])]),j,n("p",null,[n("a",S,[e("如何在 Ubuntu 20.04 上使用 UFW 来设置防火墙 - 知乎 (zhihu.com)"),a(s)])]),A,n("p",null,[n("a",B,[e("Ubuntu上使用nginx完成一个简单web网站_ubuntu在nginx搭建简单网页-CSDN博客"),a(s)])]),D,n("p",null,[e("安装的 "),n("a",M,[e("jdk"),a(s)]),e("1.8")]),C,n("p",null,[e("[在Ubuntu20.04上安装MySQL8.0及正确配置"),n("a",I,[e("已验证]_ubuntu 编译安装 mysql8.0.30-CSDN博客"),a(s)])]),R,n("p",null,[n("a",T,[e("05.navicat连接不上虚拟机内的mysql_navicat连接不上虚拟机的数据库-CSDN博客"),a(s)])]),F,n("p",null,[n("a",N,[e("【精选】Ubuntu 20.04 安装 MySQL 8.0 并且远程连接数据库(包括后续遇到的新坑)_synchronizing state of mysql.service with sysv ser_Nymph2333的博客-CSDN博客"),a(s)])]),L,n("p",null,[e("centos: [centos安装 mysql8.0 - 搜索 ("),n("a",P,[e("bing.com"),a(s)]),e(")]("),n("a",z,[e("https://cn.bing.com/search?pc=&q=centos安装"),a(s)]),e(" mysql8.0)")]),O,n("p",null,[n("a",U,[e("Redis-6.2.5 安装 Linux环境(单机)_redis6.2需要gcc什么般般-CSDN博客"),a(s)])]),H,n("p",null,[n("a",J,[e("Linux 和 windows 下解决端口占用问题（ Port was already in use）_port 10802was alread inuse-CSDN博客"),a(s)])]),$,n("p",null,[n("a",W,[e("Docker部署SpringBoot +Vue项目流程详解（含域名 + HTTPS）_docker部署vue的前端项目-CSDN博客"),a(s)])]),V,n("p",null,[e("实测可用："),n("a",Y,[e("https://blog.csdn.net/BThinker/article/details/123507820"),a(s)])]),K,n("p",null,[n("a",Q,[e("MinIO对象存储 Linux — MinIO中文文档 | MinIO Linux中文文档"),a(s)])]),X,n("p",null,[n("a",G,[e("Docker 搭建 Minio 容器 (完整详细版)_docker minio-CSDN博客"),a(s)])]),Z,n("p",null,[n("strong",null,[e("检查当前所有"),n("a",nn,[e("Docker"),a(s)]),e("下载的镜像")]),e(" docker images")]),en,n("p",null,[e("访问："),n("a",sn,[e("http://127.0.0.1:9090/login"),a(s)]),e(" 用户名：密码 minioadmin：minioadmin （自己设置的）")]),n("p",null,[n("a",an,[e("minIO设置直接通过访问链接在浏览器中打开文件_minio直接访问文件-CSDN博客"),a(s)])]),tn,ln,n("p",null,[e("例子："),n("a",on,[e("http://1.14.16.145:9000/test/MyLogo.jpg"),a(s)])]),n("p",null,[e("实测可用（java使用 minio）："),n("a",dn,[e("Docker 搭建 Minio 容器 (完整详细版) (qq.com)"),a(s)])]),rn,n("p",null,[n("a",cn,[e("Jenkins+Gitee+Docker+Ruoyi项目前后端分离部署-CSDN博客"),a(s)])]),n("p",null,[n("a",pn,[e("使用Docker版Jenkins搭建流水线_ 这个视频演示和我下载的jenkins版本差不多"),a(s)])]),un,n("p",null,[n("a",vn,[e("使用 Docker 安装 Jenkins 并实现项目自动化部署-阿里云开发者社区 (aliyun.com)"),a(s)])]),n("p",null,[n("a",mn,[e("Docker 搭建 Jenkins 容器 (完整详细版)_docker jenkins-CSDN博客"),a(s)])]),n("p",null,[n("a",bn,[e("自动化部署基础架构_哔哩哔哩_bilibili"),a(s)])]),n("ul",null,[hn,n("li",null,[kn,gn,n("ul",null,[_n,xn,n("li",null,[e("插件 "),n("a",fn,[e("Maven Integration"),a(s)]),e(" maven构建工具 "),n("a",yn,[e("Publish Over SSH"),a(s)]),e(" 上传工具")])])])]),qn,n("p",null,[n("a",En,[e("Jenkins的四种安装部署方式以及Jenkins的基本配置与基本使用 - 掘金 (juejin.cn)"),a(s)])]),wn,n("p",null,[e("下载想要版本的maven（.tar.gz），上传到服务器 "),n("a",jn,[e("Index of /dist/maven/maven-3/3.6.3/binaries (apache.org)"),a(s)])]),Sn,n("blockquote",null,[An,Bn,n("blockquote",null,[n("p",null,[e("命令：yum install -y java-1.8.0-"),n("a",Dn,[e("openjdk"),a(s)]),e(".x86_64")])]),Mn,n("blockquote",null,[n("p",null,[e("命令：java -"),n("a",Cn,[e("version"),a(s)])])]),In]),Rn,Tn,n("p",null,[n("a",Fn,[e("Java开发者在Linux环境安装各类开发工具汇总_java linux安装常用软件-CSDN博客"),a(s)])]),Nn,Ln,Pn,zn])}const Wn=t(r,[["render",On],["__file","bushu.html.vue"]]);export{Wn as default};
