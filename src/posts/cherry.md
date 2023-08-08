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

 [Linux安装Nginx - 掘金 (juejin.cn)](https://juejin.cn/post/7136114724542316558)   方便快捷

安装nginx的过程中出现 nginx: [emerg] still could not bind() 需要注意端口和进程占用的问题

 [(141条消息) 故障排查（Nginx服务启动失败）报错：still could not bind()_吃不吃西红柿的博客-CSDN博客](https://blog.csdn.net/jiaoshu__/article/details/119304374) 

[emerg\] still could not bind()怎么解决_一枝风的博客-CSDN博客](https://blog.csdn.net/ProBaiXiaodi/article/details/124943251) 



 [还在手动配置Nginx？太LOW了，这个超强大的 Nginx 可视化管理工具太牛逼了！ (qq.com)](https://mp.weixin.qq.com/s/33K0XfZ8bAT95qmrhzvRDw) 



使用阿里服务器安装的时候要设置安全组 ，入口 和 出口 都要设置80端口的，否则网页打不开。

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

资料 ： Docker笔记 https://www.aliyundrive.com/s/6k6jNmKMkiR 



Docker 官网：[https://www.docker.com](https://www.docker.com/)

Github Docker 源码：https://github.com/docker/docker-ce

安装docker镜像的仓库： [Docker Hub Container Image Library | App Containerization](https://hub.docker.com/) 



 [Docker 入门终极指南，详细版！别再说不会用 Docker 了！ (qq.com)](https://mp.weixin.qq.com/s/MwDXbeVVXMPsCHP0ixqxFg) 





### 安装docker

 [ Docker安装指南——如何在Linux中安装Docker？（最新2022-2 for centOS stream 8）](https://blog.csdn.net/m0_51338272/article/details/122801639) 

 [Docker启动停止重启 ](https://blog.csdn.net/qq_41569732/article/details/105631072) 

```
step 1: 安装必要的一些系统工具
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

查看下ps -ef | grep "docker" docker启动了

配置下载docker镜像的仓库（下载docker镜像的仓库）
搜索容器，找到容器与镜像服务，镜像工具，镜像加速器-》运行网站的命令

测试安装
在Terminal中输入docker run hello-world。
看到 Hello from Docker！ 字段说明我们的安装步骤没有问题，Docker已经成功安装~
```

#### docker 启动类命令

停止docker：systemctl stop docker
重启docker：systemctl restart docker
查看docker状态： systemctl status docker
开机启动： systemctl enable docker
查看docker概要信息： docker info
查看docker总体帮助文档： docker --help
查看docker命令帮助文档： docker 具体命令 --help

### Docker常用命令

 [超详细的 Docker 基本概念及常用命令 - 掘金 (juejin.cn)](https://juejin.cn/post/7177550197159886907#heading-11) 

####  查看 **Docker 版本** 

```
# Docker版本号
docker -v
# Docker版本详细信息
docker version
```

####  查看**镜像列表** 

```
# 查看最新创建的镜像，以下两个命令等价
docker images
docker image ls
# 查看所有镜像
docker images --all
docker iamges -a
# 查看与Redis相关的镜像
docker images redis
# 只显示镜像ID，可以与docker rmi命令结合使用
docker images -q
```

查看镜像结果显示如下：

![javaCreateSimple](/docker-images.jpg)

REPOSITORY：表示镜像的仓库源

TAG：镜像的标签版本号

IMAGE ID：镜像ID

CREATED：镜像创建时间

SIZE：镜像大小

####  搜索可用镜像， **拉取镜像** ，删除镜像

```
docker search redis            // 搜索redis相关的镜像
docker search --limit 5 redis  // --limit : 只列出N个镜像，默认25个


docker pull redis              // 拉取最新版，相当于docker pull redis:latest
docker pull redis:7.0.5        // 拉取指定版本
```

```
docker system df   查看镜像/容器/数据卷所占的空间

docker rmi 某个XXX镜像名字ID           删除镜像
docker rmi  -f 镜像ID                删除单个
docker rmi -f 镜像名1:TAG 镜像名2:TAG  删除多个
docker rmi $(docker images -f "dangling=true" -aq)  删除所有符合过滤条件的镜像
docker rmi -f $(docker images -qa)   删除全部
```

#### 容器命令

##### **运行docker容器**

`docker run [OPTIONS] IMAGE [COMMAND] [ARG...]`        

OPTIONS说明（常用）：有些是一个减号，有些是两个减号
--name="容器新名字"       为容器指定一个名称；
-d: 后台运行容器并返回容器ID，也即启动守护式容器(后台运行)；
-i：以交互模式运行容器，通常与 -t 同时使用；
-t：为容器重新分配一个伪输入终端，通常与 -i 同时使用；
也即启动交互式容器(前台有伪终端，等待交互)；

-P: 随机端口映射，大写P
-p: 指定端口映射，小写p

使用镜像centos:latest以交互模式启动一个容器,在容器内执行/bin/bash命令。

##### 启动交互式命令容器

`docker run -it centos /bin/bash`   （**以交互式命令运行一个容器**）

`docker run -it --name=myCentos centos bash` （**以交互式命令运行一个容器**）

/bin/bash：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。
要退出终端，直接输入 exit



##### **列出当前所有正在运行的容器**

`docker ps [OPTIONS]`

OPTIONS说明（常用）：
-a :列出当前所有正在运行的容器+历史上运行过的
-l :显示最近创建的容器。
-n：显示最近n个创建的容器。
-q :静默模式，只显示容器编号。



##### **退出容器   两种方式**

| 退出容器               | 两种退出方式                                           |
| ---------------------- | ------------------------------------------------------ |
| exit                   | run进去容器，exit退出，容器停止                        |
| ctrl+p+q               | run进去容器，ctrl+p+q退出，容器不停止                  |
| 启动已停止运行的容器   | docker start 容器ID或者容器名                          |
| 重启容器               | docker restart 容器ID或者容器名                        |
| 停止容器               | docker stop 容器ID或者容器名                           |
| 强制停止容器           | docker kill 容器ID或容器名                             |
| 删除已停止的容器       | docker rm 容器ID                                       |
| 删除一个容器           | docker rm -f 容器ID                                    |
| 一次性删除多个容器实例 | docker rm -f $(docker ps -a -q)        docker ps -a -q |



##### 启动守护式容器(后台服务器)

有镜像才能创建容器，这是根本前提      (下载一个Redis6.0.8镜像演示)

在大部分的场景下，我们希望 docker 的服务是在后台运行的， 我们可以过 -d 指定容器的后台运行模式。

`docker run -d 容器名`



 `docker logs 容器ID`                             查看容器日志

`docker top 容器ID`                               查看容器内运行的进程

 `docker inspect 容器ID`                     查看容器内部细节



 `docker exec -it 容器ID /bin/bash`      进入正在运行的容器并以命令行交互

`docker attach 容器ID`                                 *重新进入（尽量不要用）*

exec 是在容器中打开新的终端，并且可以启动新的进程 用exit退出，不会导致容器的停止。

 attach 直接进入容器启动命令的终端，不会启动新的进程 用exit退出，会导致容器的停止。



##### 从容器内拷贝文件到主机上  

`docker cp  容器ID:容器内路径 目的主机路径`

   

##### 导入和导出容器

 [Docker镜像与容器备份迁移（export、import与commit、save、load）(tencent.com)](https://cloud.tencent.com/developer/article/2027894) 

· export 导出容器的内容留作为一个tar归档文件[对应import命令]

· import 从tar包中的内容创建一个新的文件系统再导入为镜像[对应export]

`docker export 容器ID > 文件名.tar`     终端下 ls 命令查看导出的文件（保存到终端目录下/root）

`cat 文件名.tar | docker import - 镜像用户/镜像名:镜像版本号`



### **Docker镜像commit操作**

docker commit  提交容器副本使之成为一个新的镜像

·docker commit -m="提交的描述信息" -a="作者" 容器ID 要创建的目标镜像名:[标签名]

docker commit -m="ubuntu add vim ok" -a="fankozhang"  50d70d915a7e  fankozhang/myubuntu:1.1



 [Docker系列教程4：使用Docker Hub并将镜像推送到自有仓库 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/589267256) 

####  **将本地镜像推送到阿里云**

![javaCreateSimple](/ali-container.jpg)



按照操作指南进行操作

#### 本地镜像发布到私有库

官方Docker Hub地址：https://hub.docker.com/

Docker Registry是官方提供的工具，可以用于构建私有镜像仓库

下载镜像Docker Registry                        `docker pull registry`

运行私有库Registry，相当于本地有个私有Docker hub

docker run -d -p 5000:5000 -v /zzyyuse/myregistry/:/tmp/registry --privileged=true registry

默认情况，仓库被创建在容器的/var/lib/registry目录下，建议自行用容器卷映射，方便于宿主机联调

示例：创建一个新的镜像（ ubuntu安装ifconfig命令）  ，执行 commit 命令

docker commit -m="ubuntu add ifconfig ok" -a="fankozhang"  50d70d915a7e  fankozhang/myubuntu-ifconfig:1.1

测试镜像是否能有 ifconfig 命令，正常使用

curl验证私服库上有什么镜像

 curl -XGET http://127.0.0.1:5000/v2/_catalog

使用 docker tag将  镜像 打标签

```text
格式为：docker tag IMAGE[:TAG] [REGISTRY_HOST[:REGISTRY_PORT]/]REPOSITORY[:TAG]
```

 `docker tag  fankozhang/myubuntu-ifconfig:1.1  127.0.0.1:5000/fankozhang/myubuntu-ifconfig:1.1`

修改配置文件使之支持http

vim  /etc/docker/daemon.json 

```
{
  "registry-mirrors": ["https://xkn10dbr.mirror.aliyuncs.com"],
  "insecure-registries": [
    " 127.0.0.1:5000"
  ]
}
```

上述理由：docker默认不允许http方式推送镜像，通过配置选项来取消这个限制。====> 修改完后如果不生效，建议重启docker 

 push推送到私服库（保持registry的运行，否则会push不成功）     

 `docker push 127.0.0.1:5000/fankozhang/myubuntu-ifconfig:1.1 `    

再次运行  curl -XGET http://127.0.0.1:5000/v2/_catalog  可以查看到 push 的镜像则成功

（上面的127.0.0.1 都可替换成自己的 ip 地址，私有地址）

 docker pull  127.0.0.1:5000/fankozhang/myubuntu-ifconfig:1.1  （命令正常运行，测试成功）



 Docker挂载主机目录访问如果出现cannot open directory .: Permission denied

解决办法：在挂载目录后多加一个--privileged=true参数即可

如果是CentOS7安全模块会比之前系统版本加强，不安全的会先禁止，所以目录挂载的情况被默认为不安全的行为，

在SELinux里面挂载目录被禁止掉了额，如果要开启，我们一般使用--privileged=true命令，扩大容器的权限解决挂载目录没有权限的问题，也即

使用该参数，container内的root拥有真正的root权限，否则，container内的root只是外部的一个普通用户权限。

### Docker容器数据卷

 [全网最详细的docker数据卷教程 - 掘金 (juejin.cn)](https://juejin.cn/post/7042600867731603486) 

 运行一个带有容器卷存储功能的容器实例

 docker run -it --privileged=true -v /宿主机绝对路径目录:/容器内目录   镜像名

 **docker run -it --privileged=true -v /tmp/host_data:/tmp/docker_data  ubuntu**

**ubuntu 容器内 /tmp/docker_data 目录下运行 touch dockerIn.txt，宿主机的 /tmp/host_data 目录下也会有 dockerIn.txt文件，相反在宿主机的 /tmp/host_data 目录下新建  touch hostIn.txt 文件，ubuntu 容器内 /tmp/docker_data 目录下也会有hostIn.txt 文件**（docker容器与宿主机间文件互通）

 查看数据卷是否挂载成功

 docker inspect 容器ID

能查看到：![javaCreateSimple](/docker-mounts.jpg)则表示运行成功，这里展示了映射的路径；



 docker run -it --privileged=true -v /宿主机绝对路径目录:/容器内目录:**ro**  镜像名  （ro = read only）

此时如果宿主机写入内容，可以同步给容器内，容器可以读取到，此时容器自己只能读取不能写 



**卷的继承和共享** （实现多个容器之间的数据共享）

容器1完成和宿主机的映射

 docker run -it --privileged=true -v /mydocker/u:/tmp --name u1 ubuntu

容器2继承容器1的卷规则

docker run -it  --privileged=true --volumes-from 父类  --name u2 ubuntu



### Docker 的 linux 容器安装命令

```shell
安装 vim 编辑器

// 进入docker容器里，id是容器的id或者name
root@ubuntu:/# docker exec -it id
// 先更新apt,如果root用户 sudo 就不需要加
root@1:/# sudo apt-get update
// 下载，中途会有一个y/n  请输入y
root@1:/# sudo apt-get install vim
//安装完成，会有版本信息，退出信息界面请安ESC 然后:q! 回车
root@1:/# vi -v 
```

```
安装ifconfig命令
apt-get install net-tools

安装ping命令
apt-get install iproute2

安装ssh
apt-get install openssh-server service ssh start

关闭防火墙
ufw disable

在PC中添加到容器的路由
已管理员身份运行CMD并执行如下命令： route add 172.17.0.0 mask 255.255.255.0 192.168.209.165 其中172.17.0.0为容器所在网段，192.168.209.165为容器的宿主机的IP地址
```



### Docker常规安装简介

搜索镜像  拉取镜像   查看镜像  启动镜像（服务端口映射）  停止容器  移除容器

#### 安装tomcat

1.  docker hub上面查找tomcat镜像      `docker search tomcat`

2. 从docker hub上拉取tomcat镜像到本地       `docker pull tomcat`

3. docker images查看是否有拉取到的tomcat

4. 使用tomcat镜像创建容器实例(也叫运行镜像)                                                                                                           docker run -it -p 8080:8080 tomcat  

5. · 访问猫首页  （报 404）   可能没有映射端口或者没有关闭防火墙  

6.  （tomcat新版问题） 解决，进入tomcat容器，执行  mv webapps.dist webapps

7. （免修改版本）   docker pull billygoo/tomcat8-jdk8

    docker run -d -p 8080:8080 --name mytomcat8 billygoo/tomcat8-jdk8

#### 安装 mysql

##### 简单使用

1.  docker pull mysql:5.7   (选择自己要用的版本)

2. 查看宿主机 MySQL     ps -ef|grep mysql  （关闭宿主机MySQL  service mysql stop）防止docker安装MySQL，生成MySQL容器时 3306 端口被占用

3. 使用MySQL 镜像

4. | docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7 |
   | ------------------------------------------------------------ |
   | docker ps                                                    |
   | docker exec -it 容器ID /bin/bash                             |
   | mysql -uroot -p                                              |

5. 如果能够正常运行进入 MySQL 终端 建库建表 ，则使用成功

6. navicat连接宿主机访问，能够正常访问（插入数据后会有编码问题）

##### 实战型使用（推荐使用）

1. 新建mysql容器实例（增加容器数据卷，实力删除后，数据依旧存在）

2. docker run -d -p 3306:3306 --privileged=true -v /zzyyuse/mysql/log:/var/log/mysql -v /zzyyuse/mysql/data:/var/lib/mysql -v /zzyyuse/mysql/conf:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=123456 --name mysql mysql:5.7

3. 宿主机内  /zzyyuse/mysql/conf 目录下新建 my.cnf

   通过容器卷同步给mysql容器实例  （解决乱码问题）

   ```
   [client]
   default_character_set=utf8
   [mysqld]
   collation_server = utf8_general_ci
   character_set_server = utf8
   ```

4. 重新启动mysql容器实例再重新进入并查看字符编码

5. 结论：docker安装完MySQL并run出容器后，建议请先修改完字符集编码后再新建mysql库-表-插数据

#### 安装redis

##### 简易配置

1.  `docker pull redis` 

2. 宿主机安装了redis,防止端口占用，先关闭宿主机 redis    [ Linux下Redis服务启动与关闭_](https://blog.csdn.net/hu4545/article/details/126174419) 

    `redis-cli shutdown` 

3.  docker run -d -p 6379:6379 redis          

4.  docker exec -it 9b4dbc9ea076  /bin/bash       进入redis容器

5.  redis-cli

##### 实用配置

参考： [最详细的docker中安装并配置redis - 掘金 (juejin.cn)](https://juejin.cn/post/7069389775035170823#heading-8) 

1. 宿主机建目录用于数据卷，存放redis配置文件   mkdir -p /app/redis

2. /app/redis目录下新建 redis.conf ，并将一个redis.conf文件模板拷贝进/app/redis目录下

   ![javaCreateSimple](/docker_redis.jpg)  文件模板获取参考    [www.redis.cn/download.ht…](https://link.juejin.cn/?target=http%3A%2F%2Fwww.redis.cn%2Fdownload.html)    解压后获取，并复制到 redis.conf

3. **修改`redis.conf`配置文件：**
   主要配置的如下：

   `bind 127.0.0.1` #注释掉这部分，使redis可以外部访问
   `daemonize no`#用守护线程的方式启动 （yes配置和docker run中-d参数冲突，导致容器启动失败）
   `requirepass 你的密码`#给redis设置密码  （可选）
   `appendonly yes`#redis持久化　　默认是no
   `tcp-keepalive 300` #防止出现远程主机强迫关闭了一个现有的连接的错误 默认是300   (非必要)   

4.  使用redis镜像创建容器(也叫运行镜像)

   docker run -p 6379:6379 --name myredis --privileged=true

    -v /app/redis/redis.conf:/etc/redis/redis.conf 

   -v  /app/redis/data:/data -d redis 

   redis-server /etc/redis/redis.conf

5. docker exec -it 9b4dbc9ea076  /bin/bash       进入redis容器      

6. redis-cli   测试redis功能



### **Docker复杂安装详说**（有点难搞）

##### 安装mysql主从复制

什么是MySQL主从复制，参考 [运维-主从复制-原理_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1jT411r77s?p=2&vd_source=f25f5a8d75a3a60d5a288f726803ec11)   [MySQL主从复制原理剖析与应用实践 )](https://juejin.cn/post/7220579581919903781?searchId=20230730035439185CEB966A46B5C9ADA9#heading-22) 

 [ docker+mysql 主从配置_码农的进阶之路的博客-CSDN博客](https://blog.csdn.net/zyxwvuuvwxyz/article/details/109744258) 

 [ 使用Docker搭建MySQL主从复制（一主一从）_](https://blog.csdn.net/abcde123_123/article/details/106244181) 

主从搭建步骤

1. 新建主服务器容器实例3307

   docker run -p 3307:3306 --name mysql-master \

   -v /mydata/mysql-master/log:/var/log/mysql \

   -v /mydata/mysql-master/data:/var/lib/mysql \

   -v /mydata/mysql-master/conf:/etc/mysql \

   -e MYSQL_ROOT_PASSWORD=root \

   -d mysql:5.7

2. 

3. 宿主机进入/mydata/mysql-master/conf目录下新建my.cnf,内容如下：

   ```
   [mysqld]
   ## 同一局域网内注意要唯一
   server-id=1  
   ## 开启二进制日志功能，可以随便取（关键）
   log-bin=mysql-bin
   ```

   ```
   [mysqld]
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
   ```

4.  修改完配置后重启master实例       docker restart mysql-master

   进入mysql-master容器                    docker exec -it mysql-master /bin/bash

    mysql -uroot -p

5. master容器实例内创建数据同步用户

   CREATE USER 'slave'@'%' IDENTIFIED BY '123456';

   GRANT REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'slave'@'%';

6. 新建从服务器容器实例3308

   docker run -p 3308:3306 --name mysql-slave -v /mydata/mysql-slave/log:/var/log/mysql -v /mydata/mysql-slave/data:/var/lib/mysql -v /mydata/mysql-slave/conf:/etc/mysql -e MYSQL_ROOT_PASSWORD=zf202111 -d mysql:5.7

7. 宿主机进入/mydata/mysql-slave/conf目录下新建my.cnf,内容如下：

   ```
   [mysqld]
   ## skip-grant-tables（登录时跳过权限检查,密码登录出错时增加用来修改密码）
   ## 设置server_id,注意要唯一
   server-id=2  
   ## 开启二进制日志功能，以备Slave作为其它Slave的Master时使用
   log-bin=mysql-slave-bin   
   ## relay_log配置中继日志
   relay_log=edu-mysql-relay-bin  
   ```

8. 进入mysql内用密码登录mysql时显示   

   ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: YES)

   应该重置密码 可参考  [mysql登录报错：ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: YES) )](https://www.cnblogs.com/zhongyehai/p/10695334.html)        https://blog.csdn.net/gao_jun1/article/details/111029254

9. 在从数据库中配置主从复制

   change master to master_host='172.17.0.3', master_user='slave', master_password='123456', master_port=3301, master_log_file='mysql-bin.000001', master_log_pos=154, master_connect_retry=30;

   

   主从复制命令参数说明

   master_host：主数据库的IP地址；

   master_port：主数据库的运行端口；

   master_user：在主数据库创建的用于同步数据的用户账号；

   master_password：在主数据库创建的用于同步数据的用户密码；

   (以下的参数在主数据库用命令   show master status; 查看)

   master_log_file：指定从数据库要复制数据的日志文件，通过查看主数据的状态，获取File参数；

   master_log_pos：指定从数据库从哪个位置开始复制数据，通过查看主数据的状态，获取Position参数；

   master_connect_retry：连接失败重试的时间间隔，单位为秒。

   

10. 在从数据库中查看主从同步状态

    show slave status \G;

    ![javaCreateSimple](/mysql-zhu-cong.jpg)

11. 在从数据库中开启主从同步

    start slave;

12. 查看从数据库状态发现已经同步

13. 主从复制测试



 [(230条消息) Mysql 主从复制 及常见错误解决方法_Kevin_Wuzl的博客-CSDN博客](https://blog.csdn.net/youligg/article/details/113831140) 



```
 DROP USER 'slave'@'%';
```



### DockerFile解析

Dockerfile是用来构建Docker镜像的文本文件，是由一条条构建镜像所需的指令和参数构成的脚本。

官网  [Dockerfile 参考 |码头工人文档](https://docs.docker.com/engine/reference/builder/) 

 **DockerFile构建过程解析**

Dockerfile内容基础知识

· 1：每条保留字指令都必须为大写字母且后面要跟随至少一个参数

· 2：指令按照从上到下，顺序执行

· 3：#表示注释

· 4：每条指令都会创建一个新的镜像层并对镜像进行提交

Docker执行Dockerfile的大致流程

· （1）docker从基础镜像运行一个容器

· （2）执行一条指令并对容器作出修改

· （3）执行类似docker commit的操作提交一个新的镜像层

· （4）docker再基于刚提交的镜像运行一个新容器

· （5）执行dockerfile中的下一条指令直到所有指令都执行完成

 [Dockerfile文件配置全面详解 - 掘金 (juejin.cn)](https://juejin.cn/post/7063365782595436551) 



#### 测试：自定义镜像mycentosjava8

 要求     Centos7镜像具备vim+ifconfig+jdk8

 JDK的下载镜像地址   官网    下载地址：

https://www.oracle.com/java/technologies/downloads/#java8

 [小柒博客 | 开源软件镜像站 (yangxingzhen.com)](https://mirrors.yangxingzhen.com/jdk/) 

准备编写Dockerfile文件

宿主机创建路径 /usr/myDockerFile

```sh
FROM centos
# 指定作者和邮箱
MAINTAINER fankozhang<3180806542@qq.com>

# 环境，登录以后进入 /usr 这个路径
ENV MYPATH /usr
WORKDIR $MYPATH
 
#安装vim编辑器
RUN yum -y install vim
#安装ifconfig命令查看网络IP
RUN yum -y install net-tools
#安装java8及lib库
RUN yum -y install glibc.i686
RUN mkdir /usr/local/java
#ADD 是相对路径jar,把jdk-8u171-linux-x64.tar.gz添加到容器中,安装包必须要和Dockerfile文件在同一位置
ADD jdk-8u171-linux-x64.tar.gz /usr/local/java/
#配置java环境变量
ENV JAVA_HOME /usr/local/java/jdk1.8.0_171
ENV JRE_HOME $JAVA_HOME/jre
ENV CLASSPATH $JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib:$CLASSPATH
ENV PATH $JAVA_HOME/bin:$PATH
 
EXPOSE 80
 
CMD echo $MYPATH
CMD echo "success--------------ok"
CMD /bin/bash
```

构建    `docker build -t 新镜像名字:TAG .`          `docker build -t centosvim:1.1 .`

 注意，上面TAG后面有个空格，有个点

（yum下载时会报错，具体原因和解决可看下方博客，自行尝试）

 [Docker通过DockerFile自定义Centos 镜像_docker制作centos镜像_Machiel_One的博客-CSDN博客](https://blog.csdn.net/Machiel_One/article/details/127519205?ops_request_misc=&request_id=&biz_id=102&utm_term= docker build -t centosvim:1.1&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-1-127519205.142^v92^insert_down28v1&spm=1018.2226.3001.4187) 

 运行生成的镜像 `docker run -it 新镜像名字:TAG`



###  虚悬镜像

仓库名、标签都是< none >的镜像，俗称dangling image

查看    **docker image ls -f dangling=true**

 删除（虚悬镜像已经失去存在价值，可以删除）     docker image prune

 



### Docker + Nginx 部署 Vue 项目

 [Docker + Nginx 部署 Vue 项目 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/345622879)  





### Docker 网络

#### 查看docker网络模式命令

查看网络                 docker network ls

查看网络源数据     docker network inspect  XXX网络名字

删除网络                 docker network rm XXX网络名字

#### 网络模式

![javaCreateSimple](/docker-network.png)

· bridge模式：使用--network  bridge指定，默认使用docker0

· host模式：使用--network host指定

· none模式：使用--network none指定

· container模式：使用--network container:NAME或者容器ID指定

 [全网最详细的Docker网络教程详解 - 掘金 (juejin.cn)](https://juejin.cn/post/7041923410649153543) 



### Docker-compose容器编排

Compose 是 Docker 公司推出的一个工具软件，可以管理多个 Docker 容器组成一个应用。你需要定义一个 YAML 格式的配置文件docker-compose.yml，<u>写好多个容器之间的调用关系</u>。然后，只要一个命令，就能同时启动/关闭这些容器

Docker-Compose是Docker官方的开源项目， 负责实现对Docker容器集群的快速编排。

参考文章： [docker-compose教程（安装，使用, 快速入门）_pushiqiang的博客-CSDN博客](https://blog.csdn.net/pushiqiang/article/details/78682323) 

· 官网

· https://docs.docker.com/compose/compose-file/compose-file-v3/

· 官网下载

· https://docs.docker.com/compose/install/

· 安装步骤

```
curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

添加可执行权限
chmod +x /usr/local/bin/docker-compose

docker-compose --version
```

· 卸载步骤

```
sudo rm /usr/local/bin/docker-compose
```



 **Compose核心概念**

一文件      docker-compose.yml

两要素

服务（service）       一个个应用容器实例，比如订单微服务、库存微服务、mysql容器、nginx容器或者redis容器

工程（project）      由一组关联的应用容器组成的一个完整业务单元，在 docker-compose.yml 文件中定义。

**Compose使用的三个步骤**

· 编写Dockerfile定义各个微服务应用并构建出对应的镜像文件

· 使用 docker-compose.yml 定义一个完整业务单元，安排好整体应用中的各个容器服务。

· 最后，执行docker-compose up命令 来启动并运行整个应用程序，完成一键部署上线

1.1.3. Compose常用命令

**常用命令**

docker-compose -h              # 查看帮助

docker-compose up              # 启动所有docker-compose服务

docker-compose up -d             # 启动所有docker-compose服务并后台运行

docker-compose down             # 停止并删除容器、网络、卷、镜像。

docker-compose exec  yml里面的服务id         # 进入容器实例内部 docker-compose exec docker-compose.yml文件中写的服务id /bin/bash

docker-compose ps            # 展示当前docker-compose编排过的运行的所有容器

docker-compose top           # 展示当前docker-compose编排过的容器进程

 

docker-compose logs  yml里面的服务id   # 查看容器输出日志

docker-compose config   # 检查配置

docker-compose config -q # 检查配置，有问题才有输出

docker-compose restart  # 重启服务

docker-compose start   # 启动服务

docker-compose stop    # 停止服务

### portainer安装

 [Install Portainer CE with Docker on Linux - Portainer Documentation](https://docs.portainer.io/start/install-ce/server/docker/linux) 

（官网默认端口是带证书的，不需要，可以使用9000端口）

1 docker volume create portainer_data

2 

```
docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce
```



### Docker容器监控之 CAdvisor+InfluxDB+Granfana

· CAdvisor监控收集+InfluxDB存储数据+Granfana展示图表



### 操作过程中遇到问题 ：

#### Docker下删除自己创建的镜像报错 (cannot be forced) - image has dependent child images

删除镜像命令 ：     docker rmi 镜像Id 

大概意思就是这个镜像被别的镜像所依赖，不能强制删除，需要查找child images，再逐个删除。查找被这个镜像所依赖的镜像命令如下：

 `docker image inspect --format='{{.RepoTags}} {{.Id}} {{.Parent}}' $(docker image ls -q --filter since=镜像Id)` 

将所有需要依赖这个镜像的镜像都删除掉，才能删除这个镜像。



## k8s

 [云原生Java架构师的第一课K8s+Docker+KubeSphere+DevOps_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV13Q4y1C7hS/?spm_id_from=333.337.search-card.all.click&vd_source=f25f5a8d75a3a60d5a288f726803ec11) 

 [Kubernetes核心实战 (yuque.com)](https://www.yuque.com/leifengyang/oncloud/ctiwgo) 