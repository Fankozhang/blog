---
icon: edit
date: 2022-01-05
tag:
  - java
typora-root-url: ..\..\..\.vuepress\public
---

# Java

## idea快捷键

ctrl+o :  查看类中所有方法

## 输入 java 命令报错

 [(210条消息) 【已解决】Error: could not open `C:\Program Files\Java\jre1.8.0_121\lib\amd64\jvm.cfg‘_来老铁干了这碗代码的博客-CSDN博客](https://blog.csdn.net/weixin_43899069/article/details/115796539) 

java升级时，会在环境变量的path路径中增加以下两条路径，与我们安装java的路径重合。

**解决方法：**
删掉环境变量中的这两条语句， 同时找到对应文件，删除即可。

C:\ProgramData\Oracle\Java\javapath

C:\Program Files (x86)\Common Files\Oracle\Java\javapath



## jdk

GraalVM-jdk之Windows详细安装及使用教程 https://zhuanlan.zhihu.com/p/673241258





 [使用IDEA 创建 SpringBoot 多模块项目_idea 建springboot module-CSDN博客](https://blog.csdn.net/tangthh123/article/details/106837999) 

## **idea创建java项目（maven）** 

### **1 创建普通Java项目（quickstart）** 

![javaCreateSimple](/javaCreateSimple.png)

### 2创建普通Java web项目（maven-archetype-webapp） 

![javaWebCreate](/javaWebCreate.png)



 pom.xml 

```
<properties>
  <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
  <maven.compiler.source>1.8</maven.compiler.source>
  <maven.compiler.target>1.8</maven.compiler.target>
</properties>

<dependencies>
  <dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.12</version>
    <scope>test</scope>
  </dependency>
</dependencies>
```

 删除pom.xml中  <pluginManagement></pluginManagement>  标签和里面的内容
plugins标签中加了jetty和tomcat,可以测试项目运行 

```
<build>
  <finalName>simple-java-web</finalName>
  <plugins>
    <plugin>

      <groupId>org.eclipse.jetty</groupId>

      <artifactId>jetty-maven-plugin</artifactId>

      <version>9.4.11.v20180605</version>

      <configuration>

        <scanIntervalSeconds>10</scanIntervalSeconds>

        <webAppConfig>

          <contextPath>/test</contextPath>

        </webAppConfig>

      </configuration>

    </plugin>

    <plugin>
      <groupId>org.apache.tomcat.maven</groupId>
      <artifactId>tomcat7-maven-plugin</artifactId>
      <version>2.2</version>
      <configuration>
        <port>8081</port> <!--启动的端口号，默认8081 -->
        <path>/test</path> <!-- 项目站点名，对外访问路径 -->
        <uriEncoding>UTF-8</uriEncoding>
        <server>tomcat7</server>
      </configuration>
    </plugin>
  </plugins>
</build>
```

![javaWebCreate2](/javaWebCreate2.png)![javaWebCreate3](/javaWebCreate3.png)![javaWebCreate4](/javaWebCreate4.png)



 (   compile命令编译   package命令打包   )
访问路径为 ：
jetty   http://localhost:8080/test
 tomcat    http://localhost:8081/test 



### **3创建多模块项目** 

 创建项目  项目名 maven-parent 



![javaModuleCreate](/javaModuleCreate.png)

 创建 module  3个 



![javaModuleCreate2](/javaModuleCreate2.png)

![javaModuleCreate3](/javaModuleCreate3.png)

 maven-dao     maven-service     maven-controller（3个模块）
创建maven-dao   maven-service    **用quickstart**
创建maven-controller **用maven-archetype-webapp** 

 **生成目录结构** 

![javaModuleCreate4](/javaModuleCreate4.png)

 修改所有的子模块的pom.xml配置 

![javaModuleCreate5](/javaModuleCreate5.png)

UserDao

```
package org.example.dao;

public class UserDao {
    public static void testDao(){
        System.out.println("testDao");
    }
}
```

 UserService 

```
package org.example.service;

import org.example.dao.UserDao;

public class UserService {
    public static void testService() {
        System.out.println("userService");
        // 调用maven-dao模块的方法
        UserDao.testDao();
    }
}
```

 UserServlet 

```
package org.example;

import org.example.service.UserService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/user")
public class UserServlet extends HttpServlet {

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.service(req, resp);
        System.out.println("userServlet");
        UserService.testService();
    }
}
```




在三个module的pom.xml引入相关联模块的依赖

dao不用引  

![javaModuleCreate6](/javaModuleCreate6.png)

![javaModuleCreate7](/javaModuleCreate7.png)

![javaModuleCreate8](/javaModuleCreate8.png)

 配置maven命令，启动 



## java SSM框架

决定看ssm框架视频， [【尚硅谷】SSM框架全套教程，MyBatis+Spring+SpringMVC+SSM整合一套通关_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Ya411S7aT/?spm_id_from=333.337.search-card.all.click&vd_source=f25f5a8d75a3a60d5a288f726803ec11) 。

 需要资料当然要到评论区取找了，资源链接：https://pan.baidu.com/s/1jx1hRb7ugMFFJP81Fvcy1Q?pwd=yyds 提取码：yyds 。     https://gitee.com/zhengguangqq/ssm-md   尚硅谷的ssm md格式笔记 



尚硅谷SSM新版视频教程-2023版
B站直达：https://www.bilibili.com/video/BV1AP411s7D7
百度网盘：https://pan.baidu.com/s/12roPcN1oBmDKk3wwnMSu_A?pwd=yyds 提取码：yyds
阿里云盘：https://www.aliyundrive.com/s/SGmyMwGpsZv（教程配套资料请从百度网盘下载）

资料 ： [教案 · 东方凝洛/尚硅谷ssm-springboot-2023视频资料 - 码云 - 开源中国 (gitee.com)](https://gitee.com/fankozhang/ssm/tree/master/教案) 

### myBatis

 [MyBatis 动态 SQL 最全教程，这样写 SQL 太爽了！ (qq.com)](https://mp.weixin.qq.com/s/jEGLpIA9HWOdN3WOq46K1g) 

### MyBatis-plus

[MyBatis-plus最详细的入门使用教程来了 (qq.com)](https://mp.weixin.qq.com/s/kKH0c2GTtd_c2Ptqh-zJbA)

黑马视频：[day01-MybatisPlus - 飞书云文档 (feishu.cn)](https://b11et3un53m.feishu.cn/wiki/PsyawI04ei2FQykqfcPcmd7Dnsc)



## mysql

视频学习： [01-MySQL教程简介_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1iq4y1u7vj?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11)     资料：   [/mysql/尚硅谷视频老师笔记 ](https://github.com/Fankozhang/mySource/tree/main/资料合计/mysql/尚硅谷视频老师笔记) 

 [【狂神-MySQL】MySQL全部详细知识点整理（共10章）_狂神 mysql_-Blue.的博客-CSDN博客](https://blog.csdn.net/qq_47540091/article/details/121875715) 

### 查询结构：

```
#方式1：
SELECT ...,....,...
FROM ...,...,....
WHERE 多表的连接条件
AND 不包含组函数的过滤条件
GROUP BY ...,...
HAVING 包含组函数的过滤条件
ORDER BY ... ASC/DESC
LIMIT ...,...

#方式2：
SELECT ...,....,...
FROM ... JOIN ... 
ON 多表的连接条件
JOIN ...
ON ...
WHERE 不包含组函数的过滤条件
AND/OR 不包含组函数的过滤条件
GROUP BY ...,...
HAVING 包含组函数的过滤条件
ORDER BY ... ASC/DESC
LIMIT ...,...

#其中：
#（1）from：从哪些表中筛选
#（2）on：关联多表查询时，去除笛卡尔积
#（3）where：从表中筛选的条件
#（4）group by：分组依据
#（5）having：在统计结果中再次筛选
#（6）order by：排序
#（7）limit：分页
```

### SELECT 查询时的执行顺序

你需要记住 SELECT 查询时的两个顺序：

**1. 关键字的顺序是不能颠倒的：**

```
SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY ... LIMIT...
```

**2.SELECT 语句的执行顺序**（在 MySQL 和 Oracle 中，SELECT 执行顺序基本相同）：

```
FROM -> WHERE -> GROUP BY -> HAVING -> SELECT 的字段 -> DISTINCT -> ORDER BY -> LIMIT
```

## 我的前后端分离测试项目

 [README.md · 东方凝洛/我的测试仓库 - Gitee.com](https://gitee.com/fankozhang/my-testing-warehouse/blob/master/README.md) 