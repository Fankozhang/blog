---
icon: edit
date: 2022-01-05
tag:
  - java
  - security
typora-copy-images-to: upload
typora-root-url: ..\..\..\.vuepress\public

---

# RuoYi  & Ruoyi-vue-plus

[RuoYi 若依官方网站 |Java|SpringBoot|SrpingBoot2.0|SrpingCloud|Alibaba|MyBatis|Shiro|OAuth2.0|Thymeleaf|BootStrap|Vue|Element-UI||www.ruoyi.vip](http://ruoyi.vip/)

基础入门若依 ：    https://www.bilibili.com/video/BV1684y1X7tK?p=1  资料：[阿里云盘 (aliyundrive.com)](https://www.aliyundrive.com/drive/file/backup/654313898bd10ccec4d34eaf918c075038adbd51)

【链接：https://pan.baidu.com/s/1ako2ZmIYTJZXOKTP3oesRg?pwd=8888
提取码：8888】

运行若依框架

[分享一下基于若依的二开经验_基于若依框架的二次开发-CSDN博客](https://blog.csdn.net/i5858588/article/details/130093020)



B站，up主有好几个若依的讲解视频：(内含若依部署内容)

[【开源项目分析，要学就学最新版3.8.3过渡3.8.4】若依-Vue（前后端分离版）【完整集合版191集】_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1zm4y1A7yQ/?spm_id_from=333.999.0.0&vd_source=f25f5a8d75a3a60d5a288f726803ec11)

[#Ruoyi-Vue讲义 (qq.com)](https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&__biz=Mzg5OTgxOTg0Ng==&scene=1&album_id=2441331662295973890&count=3&uin=&key=&devicetype=Windows+11+x64&version=63090621&lang=zh_CN&ascene=0)



## swagger文档修改

初始若依运行后  swagger文档地址： http://localhost:8080/swagger-ui/index.html

将默认的  swagger  替换 配置knife4j

admin模块里添加  **knife4j**  依赖

```
<dependency>
            <groupId>com.github.xiaoymin</groupId>
            <artifactId>knife4j-spring-boot-starter</artifactId>
            <version>3.0.3</version>
</dependency>
```

framework 模块   SecurityConfig 配置文件的  antMatchers 中放行 doc.html （**不需要登录访问的接口地址都加在这个地方**）

![image-20231103230252362](/202311032302452.png)

admin模块  修改SwaggerConfig 配置文件文档版本类型为   SWAGGER_2

```
return new Docket(DocumentationType.SWAGGER_2)
```



配置完成後在对应的 controller 和 方法 上加入对应的注解，就能在swagger文档上看到了

swagger文档的路径中如果有前缀，在admin模块的application.yml配置中去除

```
# Swagger配置
swagger:
  # 是否开启swagger
  enabled: true
  # 请求前缀
  pathMapping: 
```

[针对【若依】出现的分页问题-CSDN博客](https://blog.csdn.net/weixin_45604849/article/details/134123354)

## 在RuoYi中新建自己的模块,修改代码生成

新建[Module]    **选中项目右键->new->Module**

创建maven模块，模块取名（自己设置）  ruoyi-selft

ruoyi-framework，admin  模块中 pom.xml 增加依赖,   根目录下的pom.xml中也增加这个依赖

```xml
 <!--自定义模块-->
        <dependency>
            <groupId>com.ruoyi</groupId>
            <artifactId>ruoyi-self</artifactId>
             <!--根目录下的pom.xml中要添加 version -->
            <version>${ruoyi.version}</version>
        </dependency>
```

修改代码生成的配置

generator  模块修改  resources  下的  generator.yml文件,   主要修改 author，packageName，其余视情况修改

```yml
# 代码生成
gen:
  # 作者
  author: fankozhang
  # 默认生成包路径 system 需改成自己的模块名称 如 system monitor tool
  packageName: com.ruoyi.self
  # 自动去除表前缀，默认是false
  autoRemovePre: false
  # 表前缀（生成类名不会包含表前缀，多个用逗号分隔）
  tablePrefix: self_
```



[Ruoyi-Vue若依前后端分离版 代码生成使用方法（生成新页面、生成新模块）保姆式教学_若依前端页面生成-CSDN博客](https://blog.csdn.net/Ayaki_murasami/article/details/110821720)



生成代码时，生成信息如下配置，运行sql语句，前后端代码复制到相应的目录：

![image-20231104014549035](/202311040145125.png)

代码生成后，如果代码依赖爆红，在自定义模块中加上如下依赖。

```
<dependencies>
        <dependency>
            <groupId>com.ruoyi</groupId>
            <artifactId>ruoyi-common</artifactId>
        </dependency>

    </dependencies>
```

若运行时遇到依赖循环报错

则去除 common 模块里和 自定义模块 ruoyi-self 相关的依赖



**若依代码生成主子表的时候**，前端生成的页面 CreateSubForm.vue  可能出现如下乱码问题：可以注释掉，或改成相应的字段名

```
form: {
        ${$javaField}: undefined,

        ${$javaField}: undefined,

        ${$javaField}: undefined,

        ${$javaField}: undefined,

        ${$javaField}: undefined

      },
```

## 代码生成

[若依源码解析：代码生成ruoyi-generator_若依代码生成器_编写美好前程的博客-CSDN博客](https://blog.csdn.net/qq_27575627/article/details/130912290)



## **[ruoyi_vue3_ts](https://gitee.com/lyforvue/ruoyi_vue3_ts)**  

[ruoyi_vue3_ts: 来自若依vue3的js版本，改写为ts版本 (gitee.com)](https://gitee.com/lyforvue/ruoyi_vue3_ts)



## RuoYi-Vue-Plus

[框架介绍 (dromara.org)](https://plus-doc.dromara.org/#/README)

作者：[May (sgs98) - Gitee.com](https://gitee.com/sgs98)

相关视频教程可参考 [抓蛙师的个人空间-抓蛙师个人主页-哔哩哔哩视频 (bilibili.com)](https://space.bilibili.com/520725002/channel/seriesdetail?sid=2498849)

## 运行

### 后端启动

sql文件路径   RuoYi-Vue-Plus\script\sql

数据库中新建 ry-vue-plus 数据库，依次运行 上面 sql 路径里面的三个sql文件，如果需要版本升级，需要运行 update 文件夹里面的sql文件



application-dev.yml  里面修改数据库连接的配置信息

application-dev.yml  增加redis前缀

```
redisson:
  # redis key前缀
  keyPrefix: ruoYiPlus
```

开启 redis server

maven下载依赖，如果运行出错，可以clean 和 install 之后再重新启动后台项目



### 前端启动

npm install --registry=https://registry.npmmirror.com

npm run dev



## 接口文档

官网推荐使用apifox ,   如何将接口导入apifox看官网：[接口文档 (dromara.org)](https://plus-doc.dromara.org/#/ruoyi-vue-plus/framework/association/doc)

