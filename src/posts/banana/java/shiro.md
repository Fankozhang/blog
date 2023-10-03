---
date: 2022-01-05
category:
  - java
tag:
  - java
  - ssm
  - spring-boot
  - shiro

typora-root-url: ..\..\..\.vuepress\public


---





# shiro

[使用IDEA 创建 SpringBoot 多模块项目_idea 建springboot module-CSDN博客](https://blog.csdn.net/tangthh123/article/details/106837999) 



 [Java开发 Shiro框架详解(轻松入门) - 掘金 (juejin.cn)](https://juejin.cn/post/6991664333314850853) 

 [03springboot整合shiro_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1bM41167u4?p=3&spm_id_from=pageDriver&vd_source=f25f5a8d75a3a60d5a288f726803ec11) 

 [springboot整合shiro（完整版）_shiro springboot_码化腾的博客-CSDN博客](https://blog.csdn.net/w399038956/article/details/120434244) 



 [Apache Shiro入门到精通_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1bM41167u4/?spm_id_from=333.337.search-card.all.click&vd_source=f25f5a8d75a3a60d5a288f726803ec11) 

较为完整： [SpringBoot之整合Shiro(最详细)_springboot shiro_Java追求者的博客-CSDN博客](https://blog.csdn.net/Yearingforthefuture/article/details/117384035) 



 [Shiro之注解篇_shiro常用注解-CSDN博客](https://blog.csdn.net/qq_43654581/article/details/120776947) 

## Shiro的三大功能

Shiro有三大核心组件，即`Subject`、`SecurityManager` 和 `Realm`

- Subject: 为`认证主体`。应用代码直接交互的对象是Subject,Subject代表了当前的用户。包含`Principals`和`Credentials`两个信息。
- SecurityManager:为`安全管理员`。是Shiro架构的核心。与Subject的所有交互都会委托给SecurityManager, Subject相当于是一个门面，而SecurityManager才是真正的执行者。它负责与Shiro 的其他组件进行交互。
- Realm：是`一个域`。充当了Shiro与应用安全数据间的“桥梁”。Shiro从Realm中获取安全数据（如用户、角色、权限），就是说SecurityManager要验证用户身份，那么它需要从Realm中获取相应的用户进行比较，来确定用户的身份是否合法；也需要从Realm得到用户相应的角色、权限，进行验证用户的操作是否能过进行，可以把Realm看成DataSource，即安全数据源。

- `Authentication`: 身份认证、登录，验证用户是不是拥有相应的身份;
- `Authorization`:授权,即权限验证，验证某个已认证的用户是否拥有某个权限，即判断用户能否进行什么操作，如:验证某个用户是否拥有某个角色，或者细粒度的验证某个用户对某个资源是否具有某个权限!
- `Session Manager`: 会话管理，即用户登录后就是第-次会话，在没有退出之前，它的所有信息都在会话中;会话可以是普通的JavaSE环境，也可以是Web环境;
- `Cryptography`: 加密,保护数据的安全性，如密码加密存储到数据库中，而不是明文存储;
- `Web Support`: Web支持，可以非常容易的集成到Web环境;
- `Caching`: 缓存，比如用户登录后，其用户信息，拥有的角色、权限不必每次去查,这样可以提高效率
- `Concurrency`: Shiro支持多线程应用的并发验证，即，如在一个线程中开启另一个线程,能把权限自动的传播过去
- `Testing`:提供测试支持;
- `RunAs`:允许一个用户假装为另-一个用户(如果他们允许)的身份进行访问;
- `Remember Me`:记住我，这个是非常常见的功能，即一-次登录后， 下次再来的话不用登录了

## 创建项目

依赖

```
<!--引入shiro依赖-->
<dependency>
			<groupId>org.apache.shiro</groupId>
			<artifactId>shiro-spring</artifactId>
			<version>1.6.0</version>
		</dependency>
```

当依赖后找不到 ShiroFilterFactoryBean ，我换了依赖

```
<dependency>
			<groupId>org.apache.shiro</groupId>
			<artifactId>shiro-spring-boot-starter</artifactId>
			<version>1.5.3</version>
		</dependency>
```

## shiro权限框架中五张基本数据表

 [shiro权限框架中五张基本数据表_shiro权限五张表er图-CSDN博客](https://blog.csdn.net/weixin_41865602/article/details/90293378) 

**表设计**
开发用户-角色-权限管理系统，首先我们需要知道用户-角色-权限管理系统的表结构设计。

在用户-角色-权限管理系统找那个一般会涉及5张表，分别为：

**1.sys_users用户表
2.sys_roles角色表
3.sys_permissions权限表（或资源表）
4.sys_users_roles用户-角色关联表
5.sys_roles_permissions角色-权限关联表（或角色-资源关联表）**

```sql
-- create database shiro default character set utf8;

drop table if exists sys_users;
drop table if exists sys_roles;
drop table if exists sys_permissions;
drop table if exists sys_users_roles;
drop table if exists sys_roles_permissions;

create table sys_users (
  id bigint auto_increment comment '编号',
  username varchar(100) comment '用户名',
  password varchar(100) comment '密码',
  salt varchar(100) comment '盐值',
  role_id varchar(50) comment '角色列表',
  locked bool default false comment '是否锁定',
  constraint pk_sys_users primary key(id)
) charset=utf8 ENGINE=InnoDB;
create unique index idx_sys_users_username on sys_users(username);

create table sys_roles (
  id bigint auto_increment comment '角色编号',
  role varchar(100) comment '角色名称',
  description varchar(100) comment '角色描述',
  pid bigint comment '父节点',
  available bool default false comment '是否锁定',
  constraint pk_sys_roles primary key(id)
) charset=utf8 ENGINE=InnoDB;
create unique index idx_sys_roles_role on sys_roles(role);

create table sys_permissions (
  id bigint auto_increment comment '编号',
  permission varchar(100) comment '权限编号',
  description varchar(100) comment '权限描述',
  rid bigint comment '此权限关联角色的id',
  available bool default false comment '是否锁定',
  constraint pk_sys_permissions primary key(id)
) charset=utf8 ENGINE=InnoDB;
create unique index idx_sys_permissions_permission on sys_permissions(permission);

create table sys_users_roles (
  id  bigint auto_increment comment '编号',
  user_id bigint comment '用户编号',
  role_id bigint comment '角色编号',
  constraint pk_sys_users_roles primary key(id)
) charset=utf8 ENGINE=InnoDB;

create table sys_roles_permissions (
  id bigint auto_increment comment '编号',
  role_id bigint comment '角色编号',
  permission_id bigint comment '权限编号',
  constraint pk_sys_roles_permissions primary key(id)
) charset=utf8 ENGINE=InnoDB;

```

 **初始化表** 

```sql
insert into sys_users values(1,'TyCoding','123','salt','管理员',0);
insert into sys_roles values(21,'user:create','用户创建',0,0);
insert into sys_permissions values(31,'user:create','用户创建',0,0);
insert into sys_users_roles values(1,1,21);
insert into sys_roles_permissions values(1,21,31);

```



## 配置 过滤器，安全管理器，数据源

### 配置类： ShiroConfig

```java
package com.example.shiro_login.config;

import com.example.shiro_login.shiro.MyRealm;
import org.apache.shiro.realm.Realm;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * @author 张帆
 * @version 1.0
 * Create by 2023/9/30 16:47
 */
@Configuration
public class ShiroConfig {

    //ShiroFilter 核心过滤器
    @Bean
    public ShiroFilterFactoryBean getShiroFilterFactoryBean(DefaultWebSecurityManager securityManager) {
        ShiroFilterFactoryBean shiroFilterFactoryBean = new ShiroFilterFactoryBean();
        //给ShiroFilter配置安全管理器
        shiroFilterFactoryBean.setSecurityManager(securityManager);
         //// 设置权限
        ////配置系统受限资源
        ////配置系统公共资源
        //Map<String, String> map = new HashMap<String, String>();
        //map.put("/user/login","anon");//表示这个为公共资源 一定是在受限资源上面
        //map.put("/**","authc");//表示这个受限资源需要认证和授权
        //// 设置认证界面路径
        //shiroFilterFactoryBean.setLoginUrl("/login.jsp");
        //shiroFilterFactoryBean.setFilterChainDefinitionMap(map);
        return shiroFilterFactoryBean;
    }
    //创建安全管理器
    @Bean
    public DefaultWebSecurityManager getDefaultWebSecurityManager(Realm realm) {
        DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
        securityManager.setRealm(realm);
        return securityManager;
    }
    //创建自定义Realm
    @Bean
    public Realm getRealm() {
        MyRealm realm = new MyRealm();
        return realm;
    }
}

```

### Realm自定义： MyRealm

```java
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import sun.security.krb5.Realm;

/**
 * @author 张帆
 * @version 1.0
 * Create by 2023/9/30 17:12
 */
public class MyRealm extends  AuthorizingRealm {

    //获取授权信息
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        return null;
    }
    //获取认证信息
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        return null;
    }
}

```



## 身份认证和退出

修改MyRealm，增加 @Component 注解，安全管理器中 getDefaultWebSecurityManager的参数换成 MyRealm

### ShiroConfig

```java
//创建安全管理器
    @Bean
    public DefaultWebSecurityManager getDefaultWebSecurityManager(MyRealm realm) {
        DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
        securityManager.setRealm(realm);
        return securityManager;
    }
```

### MyRealm（认证，授权）

```java
@Component
public class MyRealm extends  AuthorizingRealm {

    @Autowired
    private UserMapper userMapper;

    //获取授权信息
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        return null;
    }
    //获取认证信息
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
         // 获取当前用户的用户信息
        String username = (String) authenticationToken.getPrincipal();
        // 去数据库中查询用户
        User user= userMapper.findUserByName(username);
        if (user==null){
            return null;
        }
        if (username.equals(user.getUsername())) {
            //AuthenticationInfo authInfo = new AuthenticationInfo(username,user.getPassword(),"myReal"); //myReal是real起的名字
            return new SimpleAuthenticationInfo(username,user.getPassword(),this.getName());
        }
        return null;

    }
}

```

### 数据库获取用户信息

#### UserMapper

```java
@Mapper
public interface UserMapper {
    User findUserByName(String username);
}
```

#### UserMapper.xml

```xml
<mapper namespace="com.example.shiro_login.mapper.UserMapper">
    <select id="findUserByName" parameterType="string" resultType="com.example.shiro_login.User">
        select * from sys_users where username= #{username}
    </select>
</mapper>
```

### UserController

```java
@RestController
@RequestMapping("/user")
public class UserController {
    @RequestMapping("/login")
    public String login(String username, String password){
        //获取当前用户
        Subject currentUser= SecurityUtils.getSubject();
        //封装凭证
        UsernamePasswordToken token= new UsernamePasswordToken(username,password);
        // 身份认证   (认证失败 抛异常)
        try {
            currentUser.login(token);
        }catch (UnknownAccountException e){
            return "error:用户名不存在";
        }catch ( IncorrectCredentialsException e){
            return "errpr:密码错误";
        }catch ( Exception e){
            return "未知错误";
        }

        //响应
        return "login ok";
    }
}
```

## 授权

一个用户拥有什么权限，就能进行什么操作。反之，不能操作。

查找当前用户的角色和权限。
RBAC:Role-Base Access-Controll           基于角色的权限设计
Resource-Base Access-Controll            基于资源的权限设计

### 创建实体类

#### User

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private Integer id;
    private  String username;
    private String password;
    private String salt;
    private Integer locked;

    //// 角色列表
    //private List<Role> roleList;
    ////权限列表
    //private List<Permission> permissionList;

}

```



#### Role

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Role {
    private Integer id;
    private String role;
    private String description;
    private Integer available;
}

```

#### Permission

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Permission {
    private Integer id;
    private String permission;
    private String description;
    private Integer available;
}
```

### 更改UserMapper

```java
@Mapper
public interface UserMapper {
    User findUserByName(String username);

    List<String> findRoleByUsername(String username);

    List<String> findPermissionByUsername(String username);
}
```

### UserMapper.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >

<mapper namespace="com.example.shiro_login.mapper.UserMapper">
    <select id="findUserByName" parameterType="string" resultType="com.example.shiro_login.domain.User">
        select * from sys_users where username= #{username}
    </select>

    <select id="findRoleByUsername" parameterType="string" resultType="String">
        select r.role
        from sys_users u,sys_roles r,sys_users_roles ur
        where u.id=ur.user_id
        and r.id=ur.role_id
        and u.username=#{username}

    </select>

    <select id="findPermissionByUsername" parameterType="string"  resultType="String">
        select p.permission
        from sys_users u,sys_roles r,sys_users_roles ur,sys_permissions p,sys_roles_permissions rp
        where u.id=ur.user_id
          and r.id=ur.role_id
          and r.id=rp.role_id
          and p.id=rp.permission_id
          and u.username=#{username}
    </select>
</mapper>

```

### 修改 MyRealm获取授权代码

```java
//获取授权信息
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        // 获取当前用户名
        String username =(String) principalCollection.getPrimaryPrincipal();
        System.out.println("getPrimaryPrincipal"+username);
        //根据用户名查询该用户的所有角色和权限
        List<String> roleList=userMapper.findRoleByUsername(username);
        List<String> permissionList=userMapper.findPermissionByUsername(username);

        //返回当前用户的所有角色和权限
        SimpleAuthorizationInfo info=new SimpleAuthorizationInfo();
        info.addRoles(roleList);
        info.addStringPermissions(permissionList);
        return info;
    }
```

### 过滤器授权（基于url的权限拦截）

#### 在UserController加入部分接口用于测试

```java
 // 增加部分测试接口
    @RequestMapping("/add/student")
    public String addStudent(){
        return "add Student";
    }
    @RequestMapping("/remove/student")
    public String removeStudent(){
        return "remove Student";
    }
    @RequestMapping("/update/student")
    public String updateStudent(){
        return "update Student";
    }
    @RequestMapping("/select/student")
    public String selectStudent(){
        return "select Student";
    }
```

#### ShiroConfig中修改过滤器

```java
 @Bean
    public ShiroFilterFactoryBean getShiroFilterFactoryBean(DefaultWebSecurityManager securityManager) {
        ShiroFilterFactoryBean shiroFilterFactoryBean = new ShiroFilterFactoryBean();
        //给ShiroFilter配置安全管理器
        shiroFilterFactoryBean.setSecurityManager(securityManager);
        //// 设置权限
        ////配置系统受限资源
        ////配置系统公共资源
        Map<String, String> map = new HashMap<String, String>();
        map.put("/user/login","anon");// anon表示这个为公共资源,所有人都可访问 一定是在受限资源上面
        map.put("/user/remove/student","authc"); // authc 表示这个受限资源需要认证和授权
        map.put("/user/add/student","perms[user:create]");  //perms 拥有什么具体的权限才能访问
        // map.put("/user/add/student","perms[user:*]");
         map.put("/user/add/student","roles[admin]");  // roles 是什么角色才能访问
        shiroFilterFactoryBean.setFilterChainDefinitionMap(map);

        //  页面设置，认证失败跳转 login.html,(默认是404)
        shiroFilterFactoryBean.setLoginUrl("/static/login.html");
        return shiroFilterFactoryBean;
    }
```

#### 认证失败跳转 login.html

resources/static/login.html

```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
认证失败
</body>
</html>
```

### 注解授权

 [Shiro之注解篇_shiro常用注解-CSDN博客](https://blog.csdn.net/qq_43654581/article/details/120776947) 

#### 后端接口服务注解

通过给接口服务方法添加注解可以实现权限校验，可以加在[控制器](https://so.csdn.net/so/search?q=控制器&spm=1001.2101.3001.7020)方法上，也可以加 在业务方法上，一般加在控制器方法上。常用注解如下：

（1）@RequiresAuthentication

验证用户是否登录，等同于方法subject.isAuthenticated()

（2）@RequiresUser

验证用户是否被记忆： 登录认证成功subject.isAuthenticated()为true 登录后被记忆subject.isRemembered()为true

（3）@RequiresGuest

验证是否是一个guest的请求，是否是游客的请求 此时subject.getPrincipal()为null

（4）@RequiresRoles

验证subject是否有相应角色，有角色访问方法，没有则会抛出异常 AuthorizationException。 例如：

> @RequiresRoles(“aRoleName”)
>
> void someMethod();

只有subject有aRoleName角色才能访问方法someMethod()

（5）@RequiresPermissions

验证subject是否有相应权限，有权限访问方法，没有则会抛出异常 AuthorizationException。 例如：

> @RequiresPermissions (“file:read”,”wite:aFile.txt”)
>
> void someMethod();

subject必须同时含有file:read和wite:aFile.txt权限才能访问方法someMethod()



#### 接口增加权限注解

```java
// 增加部分测试接口
    @RequestMapping("/add/student")
    @RequiresAuthentication //必须认证通过才能调用
    @RequiresUser   //必须认证通过或记住我
    public String addStudent(){
        return "add Student";
    }
    @RequestMapping("/remove/student")
    @RequiresGuest   // 必须匿名访问，认证后不能访问
    public String removeStudent(){
        return "remove Student";
    }

    @RequestMapping("/update/student")
    @RequiresPermissions("user:update")    //必须有指定的权限
    public String updateStudent(){
        return "update Student";
    }
    @RequestMapping("/select/student")
    @RequiresRoles("admin")     //必须有指定的角色
    public String selectStudent(){
        return "select Student";
    }
```

记住我：controller 登陆时 token 增加     token.setRememberMe(true);

```
//获取当前用户
Subject currentUser= SecurityUtils.getSubject();
//封装凭证
UsernamePasswordToken token= new UsernamePasswordToken(username,password);

// 记住我
token.setRememberMe(true);
```



#### 开启权限注解

ShiroConfig增加配置

```java
    //开启权限注解
    //1通知
    //2自动代理
    @Bean
    public AuthorizationAttributeSourceAdvisor authorizationAttributeSourceAdvisor(DefaultWebSecurityManager webSecurityManager) {
        AuthorizationAttributeSourceAdvisor authorizationAttributeSourceAdvisor = new AuthorizationAttributeSourceAdvisor();
        authorizationAttributeSourceAdvisor.setSecurityManager(webSecurityManager);
        return authorizationAttributeSourceAdvisor;
    }

     /** 
     * 开启注解方式控制访问url
     */
    @Bean
    public DefaultAdvisorAutoProxyCreator defaultAdvisorAutoProxyCreator() {
        DefaultAdvisorAutoProxyCreator defaultAAP = new DefaultAdvisorAutoProxyCreator();
        defaultAAP.setProxyTargetClass(true);
        return defaultAAP;
    }
```

### 在 thymeleaf 中使用 shiro 标签

 [【thymeleaf 】在 thymeleaf 中使用 shiro 标签_thymeleaf-extras-shiro maven-CSDN博客](https://blog.csdn.net/sayyy/article/details/115691278) 



## 加密

 [shiro实现密码加密验证的方法及原理_shiro密码加密和验证-CSDN博客](https://blog.csdn.net/lucky_shanshan/article/details/119353198) 

### ShiroConfig增加如下配置

```java
//加密
    @Bean
    public HashedCredentialsMatcher hashedCredentialsMatcher(){
        HashedCredentialsMatcher hashedCredentialsMatcher = new HashedCredentialsMatcher();
        //设置加密算法
        hashedCredentialsMatcher.setHashAlgorithmName("md5");
        //设置加密的次数(散列次数) 
        hashedCredentialsMatcher.setHashIterations(5);
        return hashedCredentialsMatcher;
    }
```

### MyRealm

去除 @Component 注解

```java
//@Component
public class MyRealm extends  AuthorizingRealm {

    
    @Override
    public void setCredentialsMatcher(CredentialsMatcher credentialsMatcher){
        super.setCredentialsMatcher(credentialsMatcher);
    }

    
}

```

### ShiroConfig修改

```java
//创建自定义Realm
    @Bean
    public MyRealm getRealm(HashedCredentialsMatcher credentialsMatcher) {
        MyRealm realm = new MyRealm();
        realm.setCredentialsMatcher(credentialsMatcher);
        return realm;
    }
```

### 获取认证信息时加盐（MyRealm）

```java
 //获取认证信息
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
         // 获取当前用户的用户信息
        String username = (String) authenticationToken.getPrincipal();
        // 去数据库中查询用户
        User user= userMapper.findUserByName(username);
        if (user==null){
            return null;
        }

        //String salt="1234567"
        String salt = new SecureRandomNumberGenerator().nextBytes().toString();


        if (username.equals(user.getUsername())) {
            //AuthenticationInfo authInfo = new AuthenticationInfo(username,user.getPassword(),"myReal"); //myReal是real起的名字
            return new SimpleAuthenticationInfo(username,user.getPassword(),ByteSource.Util.bytes(salt),this.getName());
        }
        return null;

    }
```



## 退出认证

```java
@RequestMapping("/logout")
    public String logout(String username, String password){
        //清除认证信息，退出
        SecurityUtils.getSubject().logout();
        return "退出登录";
    }
```

## 记住我

认证通过，将认证信息保存下来。
下次可以直接访问，无需再认证。

获取 rememberMe 的参数，token生成时传入

 [使用SpringBoot+Shiro实现记住我功能_shiro记住我功能springboot-CSDN博客](https://blog.csdn.net/nov4th/article/details/103739476) 

### controller

```java
 @RequestMapping("/login")
    public String login(String username, String password,boolean rememberMe){
        //获取当前用户
        Subject currentUser= SecurityUtils.getSubject();
        //封装凭证
        //记住我rememberMe:.必须在认证前设置有效
        UsernamePasswordToken token= new UsernamePasswordToken(username,password,rememberMe);
        
        
        // 身份认证   (认证失败 抛异常)
        try {
            //执行ogin:
            //securitymanager.调用认证器：
            //认证器通过realm获取用户信息：
            //认证器将用户输入的密码，采用指定的加密器 (md5,2,salt)进行加密：
            //使用密文和数据库的密码进行比对。
            currentUser.login(token);
        }catch (UnknownAccountException e){
            return "error:用户名不存在";
        }catch ( IncorrectCredentialsException e){
            return "errpr:密码错误";
        }catch ( Exception e){
            return "未知错误";
        }

        // 记住我
        token.setRememberMe(true);
        //响应
        return "login ok";
    }

```

### ShiroConfig 增加配置

```java
 /**
     * cookie管理对象
     * @return
     */
    @Bean
    public CookieRememberMeManager rememberMeManager(){
        CookieRememberMeManager cookieRememberMeManager = new CookieRememberMeManager();
        cookieRememberMeManager.setCookie(rememberMeCookie());
        //rememberMe cookie加密的密钥 建议每个项目都不一样 默认AES算法 密钥长度(128 256 512 位)
        //cookieRememberMeManager.setCipherKey(Base64.decode("4AvVhmFLUs0KTA3Kprsdag=="));
        return cookieRememberMeManager;
    }

    @Bean
    public SimpleCookie rememberMeCookie(){
        //这个参数是cookie的名称，对应前端的checkbox的name = rememberMe
        SimpleCookie simpleCookie = new SimpleCookie("rememberMe");
        //setcookie的httponly属性如果设为true的话，会增加对xss防护的安全系数。它有以下特点：
        //setcookie()的第七个参数
        //设为true后，只能通过http访问，javascript无法访问
        //防止xss读取cookie
        simpleCookie.setHttpOnly(true);
        //simpleCookie.setPath("/");
        //记住我cookie生效时间 ,单位秒
        simpleCookie.setMaxAge(30000);
        return simpleCookie;
    }
```

```java
    //安全管理器中加入rememberMeManager
    @Bean
    public DefaultWebSecurityManager getDefaultWebSecurityManager(MyRealm realm) {
        DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
        securityManager.setRealm(realm);
        //加入rememberMeManager
        securityManager.setRememberMeManager(rememberMeManager());
        return securityManager;
    }
```

## 缓存

### ShiroConfig配置Ehcache

```java
  @Bean
    public MemoryConstrainedCacheManager getCacheManager(){
        return new MemoryConstrainedCacheManager();
    }
    
 
 //创建安全管理器
    @Bean
    public DefaultWebSecurityManager getDefaultWebSecurityManager(MyRealm realm) {
        DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
        securityManager.setRealm(realm);
        securityManager.setRememberMeManager(rememberMeManager());
        // 在安全管理器增加缓存配置，也可以在realm中增加
        //可以添加给某个realm,也可以添加给securitymanager
        // 如果添加给securitymanager,所有realm都采用缓存。
        securityManager.setCacheManager(getCacheManager());
        return securityManager;
    }
    
  
```

## 会话管理

 [shiro——session会话管理_shiro session-CSDN博客](https://blog.csdn.net/dgh112233/article/details/100019711) 

 [Shiro中的Session管理 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/150644469) 

 [springboot + shiro 配置session管理_快乐的小三菊的博客-CSDN博客](https://blog.csdn.net/xhf852963/article/details/117324259) 



 [【Shiro第七篇】SpringBoot + Shiro实现会话管理_setsessionlisteners-CSDN博客](https://blog.csdn.net/Weixiaohuai/article/details/109841589) 

**DefaultSessionManager**

> DefaultSecurityManager使用的默认实现，用于JavaSE环境

**ServletContainerSessionManager**

> DefaultWebSecurityManager使用的默认实现，用于Web环境，其直接使用Servlet容器的会话

**DefaultWebSessionManager**

> 用于Web环境的实现，可以替代ServletContainerSessionManager，自己维护着会话，直接废弃了Servlet容器的会话管理



 在实际工作中使用DefaultWebSessionManager 

会话跟踪：shiro中有session对象，客户端浏览器有cookie (SESSIONID),共同维护一个会话，存储相同的会
话编号。

1. 会话

所谓会话，即用户访问应用时保持的连接关系，在多次交互中应用能够识别出当前访问的用户是谁，且可以在多次交互中保存一些数据。如访问一些网站时登录成功后，网站可以记住用户，且在退出之前都可以识别当前用户是谁。

```java
subject.getSession(); 获取Session对象
session.getId(); 获取当前会话的唯一标识。
session.getHost(); 获取当前 Subject 的主机地址
session.getTimeout(); / session.setTimeout(毫秒); 获取 / 设置当前 Session 的过期时间；如果不设置默认是会话管理器的全局过期时间。
session.getStartTimestamp(); / session.getLastAccessTime(); 获取会话的启动时间及最后访问时间；
session.setAttribute("key", "123"); / session.removeAttribute("key"); 设置 / 获取 / 删除会话属性
session.touch(); / session.stop(); 更新会话最后访问时间及销毁会话
```

- 会话管理器

会话管理器管理着应用中所有 Subject 的会话的创建、维护、删除、失效、验证等工作，是 Shiro 的核心组件。Shiro 提供了三个默认实现：

```
DefaultSessionManager：DefaultSecurityManager 使用的默认实现，用于 JavaSE 环境；
ServletContainerSessionManager：DefaultWebSecurityManager 使用的默认实现，用于 Web 环境，其直接使用 Servlet 容器的会话；
DefaultWebSessionManager：用于 Web 环境的实现，可以替代 ServletContainerSessionManager，自己维护着会话，直接废弃了 Servlet 容器的会话管理
```

- 会话监听器

会话监听器用于监听会话创建、过期及停止事件。

```
onStart: 会话创建时触发
onExpiration: 会话过期时触发
onStop: 退出/会话过期时触发
```

- 会话存储 / 持久化

Shiro 提供 SessionDAO 用于会话的 CRUD，即 DAO（Data Access Object）模式实现：

```java

//如DefaultSessionManager在创建完session后会调用该方法；如保存到关系数据库/文件系统/NoSQL数据库；即可以实现会话的持久化；返回会话ID；主要此处返回的ID.equals(session.getId())；
Serializable create(Session session);
//根据会话ID获取会话
Session readSession(Serializable sessionId) throws UnknownSessionException;
//更新会话；如更新会话最后访问时间/停止会话/设置超时时间/设置移除属性等会调用
void update(Session session) throws UnknownSessionException;
//删除会话；当会话过期/会话停止（如用户退出时）会调用
void delete(Session session);
//获取当前所有活跃用户，如果用户量多此方法影响性能
Collection<Session> getActiveSessions();
```

- 会话验证

Shiro 提供了会话验证调度器，用于定期的验证会话是否已过期，如果过期将停止会话；出于性能考虑，一般情况下都是获取会话时来验证会话是否过期并停止会话的；但是如在 web 环境中，如果用户不主动退出是不知道会话是否过期的，因此需要定期的检测会话是否过期，Shiro 提供了会话验证调度器 SessionValidationScheduler 来做这件事情。

- 在线会话管理

有时候需要显示当前在线人数、当前在线用户，有时候可能需要强制某个用户下线等，此时就需要获取相应的在线用户并进行一些操作。

下面通过一个Shiro在线会话管理统计当前系统在线人数，查询在线用户信息、强制让某个用户下线等等。

### 设置会话管理器

ShiroConfig

```java

/**
     * 注册SessionManager会话管理器
     */
    @Bean
    public DefaultWebSessionManager webSessionManager(){
        DefaultWebSessionManager webSessionManager = new DefaultWebSessionManager();
        return webSessionManager;
    }

    //创建安全管理器
    @Bean
    public DefaultWebSecurityManager getDefaultWebSecurityManager(MyRealm realm) {
        DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
        securityManager.setRealm(realm);
        securityManager.setRememberMeManager(rememberMeManager());
        securityManager.setCacheManager(getCacheManager());
        // 安全管理器 设置会话管理器
        securityManager.setSessionManager(webSessionManager());
        return securityManager;
    }
```

## 分布式集群会话共享

 [shiro 在集群环境下用redis(集群版)做session共享-CSDN博客](https://blog.csdn.net/BQGLHL/article/details/75640961) 

将会话对象序列化，存储在redis上，实现会话共享

## 前后端分离

1、shiro会话跟踪
服务器有session对象
客户端有cookie
但是在前后端分离开发中，一般不使用cookie。

2、解决方案：
token字符串存储在sessionStoragei或者localStorage。
请求时，将token放在请求头中headers。
响应时，将token放在响应头中headers。

3、请求处理
自定义一个会话管理器，重写DefaultWebSessionManager的getSessionld(ServletRequest request,.
ServletResponse response).
该方法作用：从请求对象中获取会话编号。
默认从cookier中获取，改为从请求头中获取指定的键值对。

4、响应处理
默认响应，将会话编号保存在cookie中。

改为：将会话编号保存在响应头的token中。

### 重写 DefaultWebSessionManager

 [Spring Boot ： 整合 Shiro 重写 DefaultWebSessionManager-CSDN博客](https://blog.csdn.net/xyjcfucdi128/article/details/103528233) 

```java
package com.example.shiro_login.manager;

import org.apache.shiro.web.servlet.ShiroHttpServletRequest;
import org.apache.shiro.web.session.mgt.DefaultWebSessionManager;
import org.apache.shiro.web.util.WebUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.Serializable;

/**
 * @program: bims
 * @Author: wangmx
 * @Description:  重写 DefaultWebSessionManager
 */

public class MySessionManager extends DefaultWebSessionManager {
    private static final Logger log = LoggerFactory.getLogger(DefaultWebSessionManager.class);
    private String authorization = "Authorization";

    /**
     * 重写获取sessionId的方法调用当前Manager的获取方法
     *
     * @param request
     * @param response
     * @return
     */
    @Override
    protected Serializable getSessionId(ServletRequest request, ServletResponse response) {
        return this.getReferencedSessionId(request, response);
    }

    /**
     * 获取sessionId从请求中
     *
     * @param request
     * @param response
     * @return
     */
    private Serializable getReferencedSessionId(ServletRequest request, ServletResponse response) {
        String id = this.getSessionIdCookieValue(request, response);
        if (id != null) {
            request.setAttribute(ShiroHttpServletRequest.REFERENCED_SESSION_ID_SOURCE, "cookie");
        } else {
            id = this.getUriPathSegmentParamValue(request, "JSESSIONID");
            if (id == null) {
                // 获取请求头中的session
                id = WebUtils.toHttp(request).getHeader(this.authorization);
                if (id == null) {
                    String name = this.getSessionIdName();
                    id = request.getParameter(name);
                    if (id == null) {
                        id = request.getParameter(name.toLowerCase());
                    }
                }
            }
            if (id != null) {
                request.setAttribute(ShiroHttpServletRequest.REFERENCED_SESSION_ID_SOURCE, "url");
            }
        }

        if (id != null) {
            request.setAttribute(ShiroHttpServletRequest.REFERENCED_SESSION_ID, id);
            request.setAttribute(ShiroHttpServletRequest.REFERENCED_SESSION_ID_IS_VALID, Boolean.TRUE);
        }
        //log.info("id: "+id);
        return id;
    }

    // copy super
    private String getSessionIdCookieValue(ServletRequest request, ServletResponse response) {
        if (!this.isSessionIdCookieEnabled()) {
            log.debug("Session ID cookie is disabled - session id will not be acquired from a request cookie.");
            return null;
        } else if (!(request instanceof HttpServletRequest)) {
            log.debug("Current request is not an HttpServletRequest - cannot get session ID cookie.  Returning null.");
            return null;
        } else {
            HttpServletRequest httpRequest = (HttpServletRequest) request;
            return this.getSessionIdCookie().readValue(httpRequest, WebUtils.toHttp(response));
        }
    }

    // copy super
    private String getUriPathSegmentParamValue(ServletRequest servletRequest, String paramName) {
        if (!(servletRequest instanceof HttpServletRequest)) {
            return null;
        } else {
            HttpServletRequest request = (HttpServletRequest) servletRequest;
            String uri = request.getRequestURI();
            if (uri == null) {
                return null;
            } else {
                int queryStartIndex = uri.indexOf(63);
                if (queryStartIndex >= 0) {
                    uri = uri.substring(0, queryStartIndex);
                }

                int index = uri.indexOf(59);
                if (index < 0) {
                    return null;
                } else {
                    String TOKEN = paramName + "=";
                    uri = uri.substring(index + 1);
                    index = uri.lastIndexOf(TOKEN);
                    if (index < 0) {
                        return null;
                    } else {
                        uri = uri.substring(index + TOKEN.length());
                        index = uri.indexOf(59);
                        if (index >= 0) {
                            uri = uri.substring(0, index);
                        }

                        return uri;
                    }
                }
            }
        }
    }

    // copy super
    private String getSessionIdName() {
        String name = this.getSessionIdCookie() != null ? this.getSessionIdCookie().getName() : null;
        if (name == null) {
            name = "JSESSIONID";
        }

        return name;
    }
}


```

### ShiroConfig修改 SessionManager会话管理器

```java
/**
     * 注册SessionManager会话管理器
     */
    //@Bean
    //public DefaultWebSessionManager webSessionManager(){
    //    DefaultWebSessionManager webSessionManager = new DefaultWebSessionManager();
    //    return webSessionManager;
    //}

    @Bean
    public MySessionManager webSessionManager(RedisSessionDao sessionDao){
        MySessionManager mySessionManager=new MySessionManager();
        mySessionManager.setSessionDAO(sessionDao);
        return mySessionManager;
    }
```



## JWT

参考文章： [SpringBoot+Shiro+Jwt实现登录认证——最干的干货 - 掘金 (juejin.cn)](https://juejin.cn/post/6992391181330186270) 

 [Shiro整合JWT实现认证和权限鉴定（执行流程清晰详细）-阿里云开发者社区 (aliyun.com)](https://developer.aliyun.com/article/1296302) 

或我的springboot部分内容有jwt的相关内容

依赖

```
<dependency>
			<groupId>com.auth0</groupId>
			<artifactId>java-jwt</artifactId>
			<version>3.11.0</version>
		</dependency>
 <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt</artifactId>
            <version>0.9.1</version>
        </dependency>
```

