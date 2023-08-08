---
date: 2022-01-05
category:
  - java
tag:
  - java
  - ssm
  - spring-boot
typora-root-url: ..\..\.vuepress\public
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



