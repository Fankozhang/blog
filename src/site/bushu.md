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

## Linux 服务器运维管理面板

1Panel :  [在线安装 - 1Panel 文档](https://1panel.cn/docs/installation/online_installation/#1)

## 端口操作：

https://blog.csdn.net/daocaokafei/article/details/115364111

列出所有打开的端口 ：  netstat -lntu

systemctl start firewalld *#开启防火墙*

firewall-cmd --permanent --zone=public --add-port=8080/tcp  开放端口

```
1:查看防火状态

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
```



## 相关文章：

[Springboot+Vue在开发和部署相关问题解决 (qq.com)](https://mp.weixin.qq.com/s/TEk9PnWBceh35g1Px5XcLQ)

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



centos :  yum install java-1.8.0-openjdk* -y
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





centos:  [centos安装 mysql8.0 - 搜索 (bing.com)](https://cn.bing.com/search?pc=&q=centos安装 mysql8.0)



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



## Docker部署

[Docker部署SpringBoot +Vue项目流程详解（含域名 + HTTPS）_docker部署vue的前端项目-CSDN博客](https://blog.csdn.net/weixin_46594796/article/details/133962200)

### docker 安装 nginx

实测可用：https://blog.csdn.net/BThinker/article/details/123507820



## vue项目跨域配置

我部署的一个springBoot+vue的项目，用nginx部署后，一直请求不到，困扰了很长时间，最后发现是vue项目配置跨域不对的问题。

vue.config.js  跨域配置参考如下：

```
// 可用
  server: {
    port: 80,
    host: true,
    open: true,
    proxy: {
      '/api': {
        target: 'http://12.12.12.12:8084',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, '')
      }
    }
  },
```

.env.local

```
配置跨域的请求路径

VITE_APP_BASE_API = '/api'
```

axios请求 baseUrl配置

```
import axios from "axios";
//  导出基准地址，原因： 其他地方不是通过 axios 发送请求的地方用上基准地址
// export const baseURL='http://localhost:8084/api'  不能这麽用，部署后请求不到
export const baseURL=import.meta.env.VITE_APP_BASE_API
const instance=axios.create({
    // axios 的一些配置，baseurl timeout 
    baseURL,
    timeout:5000
})
```

部署后 nginx 配置

```
location /api/ {
            proxy_set_header Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header REMOTE-HOST $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass http://12.12.12.12:8084/;
        }
```



## java项目跨域配置，swagger资源映射

WebMvcConfig.java

```java
@Slf4j
@Configuration
@EnableSwagger2
@EnableKnife4j
public class WebMvcConfig extends WebMvcConfigurationSupport {
    //  解决跨域问题
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // 所有接口
                .allowCredentials(true) // 是否发送 Cookie
                .allowedOriginPatterns("*") // 支持域
                .allowedMethods("GET", "POST", "PUT", "DELETE") // 支持方法
                .allowedHeaders("*")
                .exposedHeaders("*");
    }

    /**
     * @param registry:
     * @return void
     * @author 张帆
     * @description 设置资源映射，swagger访问
     * @date 2023/6/3 17:11
     */
    @Override
    protected void addResourceHandlers(ResourceHandlerRegistry registry) {
        log.info("资源映射");
        registry.addResourceHandler("doc.html").addResourceLocations("classpath:/META-INF/resources/");
        registry.addResourceHandler("/webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/");      registry.addResourceHandler("/backend/**").addResourceLocations("classpath:/backend/");
        registry.addResourceHandler("/front/**").addResourceLocations("classpath:/front/");
    }

    @Bean
    public Docket createRestApi() {
        // 文档类型
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.example.mytest.test.controller"))
                .paths(PathSelectors.any())
                .build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("mytest")
                .version("1.0")
                .description("mytest接口文档")
                .build();
    }

}
```



## Minio

### linux 安装Minio

[MinIO对象存储 Linux — MinIO中文文档 | MinIO Linux中文文档](https://www.minio.org.cn/docs/minio/linux/index.html)

### docker 安装（实测可用）

 [Docker 搭建 Minio 容器 (完整详细版)_docker minio-CSDN博客](https://blog.csdn.net/BThinker/article/details/125412751)

**下载Minio镜像**

| 命令                                                      | 描述                                                         |
| :-------------------------------------------------------- | :----------------------------------------------------------- |
| docker pull minio/minio                                   | 下载最新版Minio镜像 (其实此命令就等同于 : docker pull minio/minio:latest ) |
| docker pull minio/minio:RELEASE.2022-06-20T23-13-45Z.fips | 下载指定版本的Minio镜像 (xxx指具体版本号)                    |

 **检查当前所有[Docker](https://so.csdn.net/so/search?q=Docker&spm=1001.2101.3001.7020)下载的镜像**         docker images

**创建目录**

> 一个用来存放配置，一个用来存储上传文件的目录
>
> 启动前需要先创建Minio外部挂载的配置文件（ /home/minio/config）,和存储上传文件的目录（ /home/minio/data）

```
mkdir -p /home/minio/config
mkdir -p /home/minio/data
```

**创建Minio容器并运行**

多行模式 

```
docker run -p 9000:9000 -p 9090:9090 \
     --net=host \
     --name minio \
     -d --restart=always \
     -e "MINIO_ACCESS_KEY=minioadmin" \
     -e "MINIO_SECRET_KEY=minioadmin" \
     -v /home/minio/data:/data \
     -v /home/minio/config:/root/.minio \
     minio/minio server \
     /data --console-address ":9090" -address ":9000"
```

单行模式 

```
docker run -p 9000:9000 -p 9090:9090      --net=host      --name minio      -d --restart=always      -e "MINIO_ACCESS_KEY=minioadmin"      -e "MINIO_SECRET_KEY=minioadmin"      -v /home/minio/data:/data      -v /home/minio/config:/root/.minio      minio/minio server      /data --console-address ":9090" -address ":9000"

```

9090端口指的是minio的客户端端口

MINIO_ACCESS_KEY ：账号

MINIO_SECRET_KEY ：密码（账号长度必须大于等于5，密码长度必须大于等于8位）

**访问**

访问：http://127.0.0.1:9090/login 用户名：密码 minioadmin：minioadmin  （自己设置的）



[minIO设置直接通过访问链接在浏览器中打开文件_minio直接访问文件-CSDN博客](https://blog.csdn.net/destin223/article/details/134110194#:~:text=访问文件网址为：ip%3Aaddress%2Fbucket的名字%2F文件的名字。,2、进入页面后，配置只读访问权限，prefix按照提示输入就好。)

 bucket 的 Access Policy 设置为public可以直接浏览器访问

在minio上传的文件以    ip:address/bucket的名字/文件的名字  路径来访问

例子：http://1.14.16.145:9000/test/MyLogo.jpg



实测可用（java使用 minio）：[Docker 搭建 Minio 容器 (完整详细版) (qq.com)](https://mp.weixin.qq.com/s/Ejz4RMt9m0nBgFFPGFtjrg)



## 自动化部署

[Jenkins+Gitee+Docker+Ruoyi项目前后端分离部署-CSDN博客](https://blog.csdn.net/weixin_43976226/article/details/133039035)

[使用Docker版Jenkins搭建流水线_ 这个视频演示和我下载的jenkins版本差不多](https://www.bilibili.com/video/BV1ds4y1k7QM/?spm_id_from=333.337.search-card.all.click&vd_source=f25f5a8d75a3a60d5a288f726803ec11)

### jenkens（docker安装）

 [使用 Docker 安装 Jenkins 并实现项目自动化部署-阿里云开发者社区 (aliyun.com)](https://developer.aliyun.com/article/892646) 

[Docker 搭建 Jenkins 容器 (完整详细版)_docker jenkins-CSDN博客](https://blog.csdn.net/BThinker/article/details/124178670)

[自动化部署基础架构_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Da411G7s4?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11)

- 拉取镜像

  ```
  #查询镜像
  docker search jenkins
  
  # docker pull jenkinsci/blueocean     // 这个镜像使用的时候有些插件如汉化插件 版本原因无法下载。
  # docker pull jenkinsci/blueocean:1.25.3       具体版本下载
  
  
  #下载镜像（推荐使用）
  docker pull jenkins/jenkins      // 这个镜像的插件大多正常下载，且自动下载汉化插件，个人推荐用这个
  ```

- 创建 Jenkins 工作目录，将容器内目录挂载到此目录上，这样我们可以在宿主机上对文件的修改同步到容器内。

  ```
  mkdir -p /usr/local/jenkins
  chmod 777 /usr/local/jenkins
  ```

- 启动容器，同时映射宿主机和容器内端口。

  ```
  # -d 后台方式启动
  # -p 映射端口，宿主机端口:容器内端口
  # -v 挂载卷，将容器Jenkins工作目录/var/jenkins_home挂载到宿主机目录/usr/local/jenkins
  # -name 给容器起个别名
  docker run -d -p 8099:8080 -p 50099:50000 -v /usr/local/jenkins:/var/jenkins_home --name myjenkins jenkins/jenkins
  ```

- docker ps 查看容器是否启动成功。

- 查看 Jenkins 容器日志。      docker logs myjenkins       能够看到一个密码，可以记下来，登录jenkens网页的时候会用到(7abe59afbbd34dc4bf04c609a1e93d50)

- 将 Jenkins 端口添加到防火墙。     （服务器安全组别忘了设置）

  ```
  firewall-cmd --zone=public --add-port=8099/tcp --permanent
  systemctl restart firewalld
  firewall-cmd --zone=public --list-ports
  ```

- 配置镜像加速

  打开宿主机 Jenkins 工作目录下的`hudson.model.UpdateCenter.xml`文件。

  ```
  vim /usr/local/jenkins/hudson.model.UpdateCenter.xml
  ```

  url 修改为国内的清华大学官方镜像地址，最终内容如下：

  ```
  <?xml version='1.1' encoding='UTF-8'?>
  <sites>
    <site>
      <id>default</id>
      <url>https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json</url>
    </site>
  </sites>
  ```

- 重启 Jenkins 服务。

  ```
  docker stop 容器ID
  docker start 容器ID
  
  
  docker restart jenkins
  
  网址访问 ip+端口号+'/restart'
  ```

- nginx 登录地址

  服务器ip地址:8099

  输入密码，安装插件（有些下载不了可以先不安装），创建账户，按照流程进行下一步的操作
  
  重启后，进入操作界面
  
- 中文插件配置

  **操作步骤：**

  - 安装插件：Manage Jenkins -> Manage Plugins -> Available -> Filter 中输入 Locale -> 勾选后点击 Install without restart
  - 设置中文：Manage Jenkins -> Configure System -> Default Language 中输入 `zh_CN` -> 勾选 Ignore browser preference and force this language to all users -> 点击 Save
  - 插件  [Maven Integration](https://plugins.jenkins.io/maven-plugin)    maven构建工具       [Publish Over SSH](https://plugins.jenkins.io/publish-over-ssh)  上传工具

### Jenkins的基本配置与基本使用

[Jenkins的四种安装部署方式以及Jenkins的基本配置与基本使用 - 掘金 (juejin.cn)](https://juejin.cn/post/7101851443073646623#heading-28)

#### docker安装maven 

选择安装maven的路径

```
cd /opt/software
```

下载想要版本的maven（.tar.gz），上传到服务器     [Index of /dist/maven/maven-3/3.6.3/binaries (apache.org)](https://archive.apache.org/dist/maven/maven-3/3.6.3/binaries/)

下载完成后，解压Maven到 安装Maven的目录。        tar -zxvf apache-maven-3.6.3-bin.tar.gz

添加到全局环境变量：服务器输入命令     export PATH=/path/to/apache-maven-3.6.3/bin:$PATH

**配置settings.xml（可选）**
此处使用了阿里云的Maven仓库

```java
<mirror>
    <id>aliyunmaven</id>
    <mirrorOf>*</mirrorOf>
    <name>阿里云公共仓库</name>
    <url>https://maven.aliyun.com/repository/public</url>
</mirror>
```

**使用maven需要有java的环境**

yum安装如下：

查询要安装jdk的版本

> 命令：yum -y list java*
>
> #### 1.2 安装jdk1.8
>
> > 命令：yum install -y java-1.8.0-[openjdk](https://so.csdn.net/so/search?q=openjdk&spm=1001.2101.3001.7020).x86_64
>
> #### 1.3 查询jdk版本
>
> > 命令：java -[version](https://so.csdn.net/so/search?q=version&spm=1001.2101.3001.7020)
>
> 这样就安装成功了。
> 默认给安装到 usr/lib/jvm/

**测试安装**    mvn -version  正确输出

#### docker 安装 git 

[Java开发者在Linux环境安装各类开发工具汇总_java linux安装常用软件-CSDN博客](https://blog.csdn.net/qq_38628046/article/details/123591295)

yum install -y git



## 线上文件路径

/home/mysql    nginx  minio 

jar包  /usr/local/app