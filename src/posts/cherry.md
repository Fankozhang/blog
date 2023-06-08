---
date: 2022-01-09
category:
  - Cherry
tag:
  - red
  - small
  - round
typora-copy-images-to: ..\.vuepress\public
typora-root-url: ..\.vuepress\public
---

# vuePress and nginx and docker

## vuePress基本使用（部署github）

## (非自动化部署)
github 创建仓库  blog  
在 blog 下新建分支  gh-pages  

![press1](/press4.png)

切换分支到  gh-pages  
本地新建 blog 文件夹  连接远程 github仓库  
在blog文件夹下下载配置vuepress,并将源代码打包  
在github的blog仓库下的settings里面设置git pages,切换到gh-pages  
将打包后的dist目录下的文件上传至github的gh-pages 分支。  

![press1](/press1.png)

![press1](/press2.png)



在访问github pages显示的地址就可以了，我的地址是 https://fankozhang.github.io/blog/  

![press1](/press3.png)



如果出现样式不显示问题，记得修改base路径  
一般base路径改成 ' /blog/' ，视自己的文件而定。  

## （自动化部署）

github 创建仓库  blog    

本地新建 blog 文件夹  连接远程 github仓库     

在本地blog文件夹中编写源码，在package.json中配置如下的运行命令。

```
 "scripts": {
    "docs:build": "vuepress build src",
    "docs:clean-dev": "vuepress dev src --clean-cache",
    "docs:dev": "vuepress dev src"
  },
```

在blog文件夹下按  **blob/.github/workflows**路径创建文件夹，在workflows文件夹下创建deploy-docs.yml文件，文件内容如下：

```

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
          > src/.vuepress/dist/.nojekyll

      - name: 部署文档
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 这是文档部署到的分支名称
          branch: gh-pages
          folder: src/.vuepress/dist

```

当源文件和.github文件的内容都准备好后，将blog文件夹下的内容全部上传到github仓库。工作流运行一段时间后，打包成功，在gh-pages分支查看打包后的源码。随后刷新github pages的网页地址，就能看到更新后的内容。

当下次对本地blog文件夹下的源代码进行修改时，直接提交远程仓库即可。工作流会自动执行打包命令。等一段时间后刷新，就能看到刷新后的内容了。



## vuepress主题

当真正想搞一个vuepree文档网站的时候，不一定从头搭建，可以使用适应的主题，使用主题可以实现快速搭建项目，主题可以自己搜索，我使用的主题是    [vuepress-theme-hope ](https://theme-hope.vuejs.press/zh/) 



## nginx

 [参考视频  nginx_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1ZU4y1m7GL?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11) 

 [参考博客专栏](https://blog.csdn.net/qq_44299529/category_11626217.html) 

 [Nginx expires 页面缓存时间配置 (w3schools.cn)](https://www.w3schools.cn/nginx/nginx_http_expires.asp) 

### 安装虚拟机，linux, nginx

装上centos7 linux。在Linux上安装 nginx 我参考了如下两篇文章

 [Linux Nginx安装及使用 - 掘金 (juejin.cn)](https://juejin.cn/post/6990643580809248781) 

 [Linux安装Nginx - 掘金 (juejin.cn)](https://juejin.cn/post/7136114724542316558) 

安装nginx的过程中出现 nginx: [emerg] still could not bind() 需要注意端口和进程占用的问题

 [(141条消息) 故障排查（Nginx服务启动失败）报错：still could not bind()_吃不吃西红柿的博客-CSDN博客](https://blog.csdn.net/jiaoshu__/article/details/119304374) 

[emerg\] still could not bind()怎么解决_一枝风的博客-CSDN博客](https://blog.csdn.net/ProBaiXiaodi/article/details/124943251) 



 [还在手动配置Nginx？太LOW了，这个超强大的 Nginx 可视化管理工具太牛逼了！ (qq.com)](https://mp.weixin.qq.com/s/33K0XfZ8bAT95qmrhzvRDw) 

### 基本命令

管理员权限 su root

start nginx.exe  // 部署nginx文件后，启动nginx服务

 1、cd /usr/local/nginx/sbin/     *//进入目录* 

2、./nginx                       *//启动* 

./nginx -t    检查配置文件是否有问题

./nginx -v   查看nginx版本

./nginx -h   查看帮助

3、./nginx -s stop               *//停止*

 4、./nginx -s quit               *//安全退出*（比stop友好）

 5、./nginx -s reload             *//重载配置文件（修改了配置文件需要执行此命令 比较常用）*

 6、ps aux|grep nginx             *//查看ngnix进程* 



ps -ef|grep nginx       查看nginx进程

 netstat -ntlp|grep 80    查看端口情况

 kill -9 进程号   

 netstat -antp | grep nginx    查看端口是否开启



### 增加server（开放端口）

当在一个config文件里配置多个server时，要将server里监听的端口号开放出来，否则外部访问不了

 [(关于nginx新增对外开放端口的问题_nginx开放端口](https://blog.csdn.net/qq_42584971/article/details/103874472) 

 设置防火墙对外开放端口 

 firewall-cmd --list-all     查看开放的端口号
sudo firewall-cmd --add-port=8000/tcp --permanent       开放8000端口 （需要的端口开放出来）

重启防火墙firewall-cmd --reload 



### nginx日志切割  

 [Nginx 生产推荐配置以及日志切割清理 )](https://juejin.cn/post/6964052819980582949) 

创建定时任务 [(141条消息) Linux 定时执行shell 脚本_spearhead_cai的博客-CSDN博客](https://blog.csdn.net/lc013/article/details/103775702) 



### 配置静态资源文件服务器 （存放静态文件）

在 根目录的  home  文件夹下新建  assets 文件夹用于存放 静态文件（图片，视频） (自己选择放在那个文件夹下，但要确定配置的文件不能出错)    

nginx.config  增加如下server配置

```shell
# 配置静态服务器，存放静态文件
	server {
        listen       90;
        server_name  localhost;
        
         location / {
            root   html;
            index  index.html index.htm;
        }

		#同一个server下配置多个locationlocation的匹配路径不能一样
		# location后面是路径的匹配规则，会拼接到root路径后面;变成  /home/assets
        
        location /assets {
            root   /home;
        }
        
        location /static {
            #alias  用于配置路径的别名
            alias		/home/assets;
        }
        
    }
```

打开监听的 90 端口   sudo firewall-cmd --add-port=90/tcp --permanent  ； 重启防火墙firewall-cmd --reload 

重启nginx     ./nginx -s reload

访问路径   

 [http://192.168.64.128:90/](http://192.168.64.128:90/)    这个会访问到第一个的location的文件

[http://192.168.64.128:90/assets/12345678.png](http://192.168.64.128:90/assets/12345678.png)   这个会访问到第二个的location的文件（静态资源）

 [http://192.168.64.128:90/static/12345678.png)](http://192.168.64.128:90/static/12345678.png)   这个会访问到第三个的location的文件，路径设置别名，访问到的内容一样（静态资源）

### 开启gzip压缩

 [参考文章   Nginx优化之gzip压缩提升网站速度_苦艾酒丶的博客-CSDN博客](https://blog.csdn.net/php12345679/article/details/80843939) 

gzip配置的常用参数

gzip on|off;       #是否开启gzip

gzip_buffers 32 4K| 16 8K        #缓冲(压缩在内存中缓冲几块? 每块多大?)

gzip_comp_level [1-9]            #推荐6 压缩级别(级别越高,压的越小,越浪费CPU计算资源)

gzip_disable           #正则匹配UA 什么样的Uri不进行gzip

gzip_min_length  200          # 开始压缩的最小长度(再小就不要压缩了,意义不在)

gzip_http_version 1.0|1.1          # 开始压缩的http协议版本(可以不设置,目前几乎全是1.1协议)

gzip_proxied             # 设置请求者代理服务器,该如何缓存内容

gzip_types   text/plain application/xml          # 对哪些类型的文件用压缩 如txt,xml,html ,css

gzip_vary on|off                 # 是否传输gzip压缩标志

注意：

图片/mp3这样的二进制文件,不必压缩

因为压缩率比较小, 比如100->80字节,而且压缩也是耗费CPU资源的.

比较小的文件不必压缩,

示例：nginx config 加入如下配置：

```
gzip on;
	gzip_buffers 32 4K;
	gzip_comp_level 6;
        gzip_min_length 100;
	gzip_types  text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
        gzip_disable "MSIE [1-6]\."; #配置禁用gzip条件，支持正则。此处表示ie6及以下不启用gzip（因为ie低版本不支持）
        gzip_vary on;
```

### 路径匹配

=   精确匹配

```shell
server {
        listen       91;
        server_name  localhost;

	  #精确匹配
        location = / {
            root   html;
            index  index.html index.htm;
          }
	 location = /assets/12345678.png {
            root   /home;
          }
        
    }
```

~   正则匹配

```shell
server {
        listen       92;
        server_name  localhost;

	  #正则表达式匹配  *代表不区分大小写，不写区分大小写 （匹配到的后缀名的都能请求到）
        location ~* \.(GIF|png|bmp|jpg|jpeg) {
            root   /home;
          }
        
    }

```

^~  以某个字符路径开头请求

```
server {
        listen       93;
        server_name  localhost;

	  #  ^~ 以某个字符路径开头请求  （ ^  非 的意思）
	  #  可以请求到 /home/assets/img 下的资源,请求不到 /home/assets/video 下的资源
	  
        location  ^~ /assets/img {
            root   /home;
          }
        
    }
```

### nginx跨域配置

参考文章 [(141条消息) Nginx跨域配置_程序员小强的博客-CSDN博客_nginx 跨域](https://blog.csdn.net/qq_38011415/article/details/107095403) 

```shell
server {
        listen       90;
        server_name  localhost;

		#允许跨域请求的域，* 代表所有
		add_header 'Access-Control-Allow-Origin' *;
		#允许请求的header
		add_header 'Access-Control-Allow-Headers' *;
		#允许带上cookie请求
		add_header 'Access-Control-Allow-Credentials' 'true';
		#允许请求的方法，比如 GET,POST,PUT,DELETE
		add_header 'Access-Control-Allow-Methods' *;

        location /assets {
            root   /home;
        }
}
```

### 配置防盗链

```
server {
        listen       90;
        server_name  localhost;

		#允许跨域请求的域，* 代表所有
		add_header 'Access-Control-Allow-Origin' *;
		#允许请求的header
		add_header 'Access-Control-Allow-Headers' *;
		#允许带上cookie请求
		add_header 'Access-Control-Allow-Credentials' 'true';
		#允许请求的方法，比如 GET,POST,PUT,DELETE
		add_header 'Access-Control-Allow-Methods' *;

		#防盗链配置 #对源站点进行验证  valid_referers 后面是匹配的域名
        valid_referers  *.imooc.com;
		#非法引入会进入下方判断
		if ($invalid_referer) {
				return 403;
		}

        location /assets {
            
            root   /home;
        }
```

### nginx 搭建 集群

```
#配置上游服务器 (每一个server都是一台服务器) tomcats是名字，可自己配置
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
```

### nginx中的upstream指令参数

 [nginx中的upstream指令参数__nginx upstream参数](https://blog.csdn.net/qq_44299529/article/details/122946397) 

### nginx控制浏览器缓存

expires用于对缓存的设置（可以在server里面配置，也可以在location里面配置）

 [nginx expires配置详解 - 腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1918457) 

```
server {
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
```

### nginx  反向代理缓存



```
#proxy_cache_path设置缓存保存的目录
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
```

### nginx搭建高可用集群

 高可用：一般指2台机器启动着相同的业务系统，当有一台机器down机了，另外一台服务器能快速的接管，对于访问当用户是无感知的 

nginx+keepalived

 [手把手教你nginx生产环境下高可用环境搭建 - 掘金 (juejin.cn)](https://juejin.cn/post/7025845075217219614) 

 [Nginx+keepalived实现高可用集群-阿里云开发者社区 (aliyun.com)](https://developer.aliyun.com/article/885619) 



### 使用nginx出现的问题：

#### 耗时长的数据请求，返回404

在前台往后台发送了一个请求，实现选取字段导出的功能，返回的一个文档流，由于数据量大，耗时长，选取某些字段时能返回正常的文档流，但选取某些字段时又返回404错误，于是我测试了很多的字段，发现并不是传值字段的问题。而后发现那些返回 404 的请求的,等待服务器响应的时间都是 1min,由此判断，可能是请求响应时长方面的问题，但我查看了前端代码,没找到设置1min时长过期的代码，在1min的基础上，我搜索了网页请求1min返回404是什么问题，最终确认是nginx的配置有问题，参考如下文章 [Nginx报错404，由于请求处理时间过长_](https://blog.csdn.net/weixin_43568226/article/details/122390109)      [nginx中的timeout超时设置，请求超时、响应等待超时等_](https://blog.csdn.net/HD243608836/article/details/111564684) 最终解决了问题。（nginx默认的超时时长为60s,而我的请求耗时1.4min，没有对超时时长做配置，所以返回了404，增加超时时长后，请求正常返回。）

## docker

  [视频地址 2022版  尚硅谷Docker实战教程_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1gr4y1U7CY/?spm_id_from=333.337.search-card.all.click&vd_source=f25f5a8d75a3a60d5a288f726803ec11) 

资料 ：https://www.aliyundrive.com/s/nh9WKM1ZG6A 



Docker 官网：[https://www.docker.com](https://www.docker.com/)

Github Docker 源码：https://github.com/docker/docker-ce

安装docker镜像的仓库： [Docker Hub Container Image Library | App Containerization](https://hub.docker.com/) 



docker commit  提交容器副本使之成为一个新的镜像

·docker commit -m="提交的描述信息" -a="作者" 容器ID 要创建的目标镜像名:[标签名]

docker commit -m="ubuntu add vim ok" -a="fankozhang"  50d70d915a7e  fankozhang/myubuntu:1.1

 

### 操作过程中遇到问题 ：

#### Docker下删除自己创建的镜像报错 (cannot be forced) - image has dependent child images

删除镜像命令 ：     docker rmi 镜像Id 

大概意思就是这个镜像被别的镜像所依赖，不能强制删除，需要查找child images，再逐个删除。查找被这个镜像所依赖的镜像命令如下：

 `docker image inspect --format='{{.RepoTags}} {{.Id}} {{.Parent}}' $(docker image ls -q --filter since=镜像Id)` 

将所有需要依赖这个镜像的镜像都删除掉，才能删除这个镜像。