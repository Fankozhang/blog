---
icon: edit
date: 2022-01-05
tag:
  - java
  - security

---

# Spring Security

[SpringSecurity框架教程-Spring Security+JWT实现项目级前端分离认证授权-挑战黑马&尚硅谷_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1mm4y1X7Hc/?spm_id_from=333.999.0.0&vd_source=f25f5a8d75a3a60d5a288f726803ec11)

[【精选】【全网最细致】SpringBoot整合Spring Security + JWT实现用户认证_springboot springsecurity jwt_小灵宝的博客-CSDN博客](https://blog.csdn.net/qq_44709990/article/details/123082560)

[springboot整合springsecurity最完整，只看这一篇就够了 - QianTM - 博客园 (cnblogs.com)](https://www.cnblogs.com/qiantao/p/14605154.html)

## 依赖

```
 <!-- springboot security -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
```

引入依赖启动后登录（默认用户名：user ，密码： 控制台会输出密码）

## 登录验证流程

https://gitee.com/fankozhang/gitee-chart-bed/raw/master/202310220042786.png

![](https://gitee.com/fankozhang/gitee-chart-bed/raw/master/202310220042786.png)