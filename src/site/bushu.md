---
icon: edit
date: 2022-01-05
tag:
  - question
  - method

typora-copy-images-to: ./
typora-root-url: ..\.vuepress\publixi
---

# 项目部署相关

## 参考案例(若依部署)

[RuoYi-Vue 部署 Linux环境 若依前后端分离项目（jar包+nginx 单机版本）_ruoyi-vue 部署 linux环境 若依前后端分离项目(jar包+nginx 单机版本) 原创-CSDN博客](https://blog.csdn.net/weixin_40816738/article/details/105374594)

部署项目时一定要注意  nginx  的配置，不然会页面访问失败

### element  版本部署时 nginx 配置

[环境部署 | RuoYi](http://doc.ruoyi.vip/ruoyi-vue/document/hjbs.html#nginx配置)

```
worker_processes  1;

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
```

### ant design vue  版本部署时 nginx 配置

[快速开始 | 极客文档 (geekera.cn)](https://docs.geekera.cn/RuoYi-Antdv/use.html#开始使用)

```
server {
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
    gzip_disable "MSIE [1-6]\.";
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
```



## ubuntu服务器部署nginx，静态页面

### ubuntu安装nginx

[如何在 Ubuntu 20.04 上安装 Nginx-阿里云开发者社区 (aliyun.com)](https://developer.aliyun.com/article/759280)

### 安装 Nginx

```
sudo apt update
sudo apt install nginx
```

**如上安装nginx服务器所在路径为   /etc/nginx**

### 验证nginx状态：

```
sudo systemctl status nginx
```

### 配置防火墙

[如何在 Ubuntu 20.04 上使用 UFW 来设置防火墙 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/139381645)

服务器上安装运行 Nginx，需要配置好防火墙，允许流量通过 HTTP（`80`）和 HTTPS（`443`）端口。假设你正在使用`UFW`,你可以做的是启用 ‘Nginx Full’ profile，它包含了这两个端口：

```
sudo ufw allow 'Nginx Full'
```

想要验证状态，输入：

```
sudo ufw status
```

验证状态时出现 status active 则是配置成功，当出现 status inactive时查看如下解决办法：

​       在Ubuntu中，使用sudo ufw enable命令来开启防火墙。

​       在Ubuntu中，使用sudo ufw disable命令来关闭防火墙。

测试系统是否安装 UFW，没有的话安装一下 UFW

```
sudo apt update
sudo apt install ufw
```

检查 UFW 的状态

安装过程不会自动激活防火墙，以避免服务器被锁住。你可以检查 UFW 的状态

```
sudo ufw status verbose
```

当出现  Status: inactive  时则表示正常

### 访问nginx默认页面

当访问服务器ip能出现nginx默认页面时，nginx就算配置成功了。

### nginx部署静态网页

[Ubuntu上使用nginx完成一个简单web网站_ubuntu在nginx搭建简单网页-CSDN博客](https://blog.csdn.net/qq_43279579/article/details/110354816)

1  进入nginx默认的网页目录

```
cd /var/www/html
```

你会看到index.html、index.htm、index.nginx-debian.html，三个文件中的任意一个。就是nginx默认页面

把自己的  index.html  页面放到这个目录下。重新启动nginx服务

```
nginx -s reload             *//重载配置文件（修改了配置文件需要执行此命令 比较常用  重启）*
sudo systemctl restart nginx
如果没有这一步，浏览器打开页面不会发生改变。
```

重启成功后可以看到nginx的页面发生改变。此时静态网页配置成功



2  如果需要存放 index.html 的页面路径发生改变，不放在/var/www/html下 , 则需要修改nginx的配置文件以实现页面部署

配置路径  ：  /etc/nginx/sites-enabled/default

```
将   root /var/www/html;  配置的路径改为 index.html 文件所在的路径 。
```

修改完相关配置以后，通过   sudo nginx -t   查看配置文件是否有误，无误后再重启 nginx ，页面发生变化，此时静态网页配置成功

## springBoot项目部署

### 服务器安装jdk1.8

命令：java -version：查看JDK安装版本，  出现  Command 'java' not found  ，则需要安装  jdk

#### 命令行安装

安装的  [jdk](https://so.csdn.net/so/search?q=安装jdk&spm=1001.2101.3001.7020)1.8

```
sudo apt-get update

sudo apt-get install [openjdk](https://so.csdn.net/so/search?q=openjdk&spm=1001.2101.3001.7020)-8-jdk
```



### mysql安装

[在Ubuntu20.04上安装MySQL8.0及正确配置[已验证\]_ubuntu 编译安装 mysql8.0.30-CSDN博客](https://blog.csdn.net/cruiserblog/article/details/106934570)

```
sudo apt-get update  #更新源
sudo apt-get install mysql-server #安装
```

安装完成后，可以通过下面的命令来查看时候安装成功：

```
systemctl status mysql
```

登陆MySQL

以root用户登陆

```bash
sudo mysql -u root -p  # -u 指定用户名 -p需要输入密码
```

或者:

```bash
sudo mysql #可以不需要指定用户名密码
```

**修改root密码** 其中123456是新的密码自己设置

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
```

 **执行  使密码生效**    `flush privileges`



当你在Linux中进入MySQL命令行后，要退出MySQL命令行，可以使用以下命令：

```
exit;  或者   quit;
```

这两个命令都可以让你从MySQL命令行中退出。



```
sudo service mysql start # 启动mysql service
```

navicat链接mysql  报错 2003，具体可能的问题如下：

[05.navicat连接不上虚拟机内的mysql_navicat连接不上虚拟机的数据库-CSDN博客](https://blog.csdn.net/weixin_49015210/article/details/117748687)

如果还是链接不上navicat，按如下的文章再进行配置：主要关注 第 5 步 - 修改MySql远程连接配置，和第 6 步 - 打开防火墙

[【精选】Ubuntu 20.04 安装 MySQL 8.0 并且远程连接数据库(包括后续遇到的新坑)_synchronizing state of mysql.service with sysv ser_Nymph2333的博客-CSDN博客](https://blog.csdn.net/u014378628/article/details/118406005)

至此，我的navicat已经可以正常连上服务器的  mysql，正常导入数据，

### redis安装

[Redis-6.2.5 安装 Linux环境(单机)_redis6.2需要gcc什么般般-CSDN博客](https://gblfy.blog.csdn.net/article/details/114371657)

### springBoot打包成jar包

```
打包之前修改 application 相关的配置

  修改数据库连接
  修改Redis连接信息
  文件路径  application.yml中的profile需要改为服务器存在的真实路径，根据实际情况调整
  日志存储路径调整 logback.xml文件中的路径建议改为./logs，根据实际情况调整
  编译打包
```

在  /usr/local/ruoyi  目录创建一个文件夹，将jar包放入   （文件夹位置可自定义）

 nohup java -jar ruoyi-admin.jar



Web server failed to start. Port 8080 was already in use.

[Linux 和 windows 下解决端口占用问题（ Port was already in use）_port 10802was alread inuse-CSDN博客](https://blog.csdn.net/u012995500/article/details/104494808)