---
date: 2022-01-05
category:
  - java
tag:
  - java
  - ssm
  - spring-boot
typora-root-url: ..\..\..\.vuepress\public
---





# springCloud(Alibaba）

 [02-4、分布式架构_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1fe4y1b7ha?p=4&vd_source=f25f5a8d75a3a60d5a288f726803ec11) 

资料： https://pan.baidu.com/s/1LxIxcHDO7SYB96SE-GZfuQ?pwd=dor4#list/path=%2F  dor4



参考内容： [Spring Cloud_柒间的博客-CSDN博客](https://blog.csdn.net/qq_43663493/category_11461587.html) 

## 项目搭建

快速生成项目：[Cloud Native App Initializer (aliyun.com)](https://start.aliyun.com/bootstrap.html)

### 创建父工程

父工程一般只用于聚合，导入依赖等，不需要打成jar包，用 idea 创建一个spring项目，Type 选择 Maven POM ,

一直下一步，别的都不需要选。知道==直到项目创建成功。版本可用2.7.5 ，**<u><java.version>17</java.version></u>**,

description标签下加上 `<packaging>pom</packaging>`，因为父工程不需要打成 jar 包的

![](/202310202206615.png)

父工程 pom.xml   (引入spring-cloud-alibaba-dependencies ，里面有cloud alibaba的依赖版本信息 )

```xml
<properties>
        <java.version>17</java.version>
        <spring.cloud.alibaba.version>2.2.5.RELEASE</spring.cloud.alibaba.version>
        <spring.cloud.version>Hoxton.SR6</spring.cloud.version>
    </properties>

<!--全局引入下载依赖地址，并不会引入依赖-->
    <dependencyManagement>
        <dependencies>
            <!--阿里巴巴下载仓库-->
            <!--Spring cloud alibaba,的版本管理，通过dependency完成继承-->
            <dependency>
                <groupId>com.alibaba.cloud</groupId>
                <artifactId>spring-cloud-alibaba-dependencies</artifactId>
                <version>${spring.cloud.alibaba.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
            <!--springcloud下载仓库-->
            <dependency>
                <groupId>org.springframework.cloud</groupId>
                <artifactId>spring-cloud-dependencies</artifactId>
                <version>${spring.cloud.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
```



### 创建子工程

创建order子工程，子工程可以直接创建 maven 模块，不一定需要创建spring 模块，因为创建 maven 模块项目会直接继承父工程，

随后修改配置文件 pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <parent>
        <artifactId>demo</artifactId>
        <groupId>com.fan.cloud</groupId>
        <version>0.0.1-SNAPSHOT</version>
    </parent>
    <modelVersion>4.0.0</modelVersion>
    <artifactId>order</artifactId>
    
    <!--添加web依赖，从父工程继承-->
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>


</project>
```

创建项目结构( controller,...........)

创建启动类

```java
package com.fan.cloud.order;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OrderApplication {

    public static void main(String[] args) {
        System.out.println("我的测试项目启动了");
        SpringApplication.run(OrderApplication.class, args);
    }

}
```

 

***其余的子工程都按照上面的方式创建***





## restTemplate

 [Springboot之restTemplate配置及使用_resttemplate 注入_](https://blog.csdn.net/weixin_43702146/article/details/116567707) 

 [Spring之RestTemplate详解 - 简书 (jianshu.com)](https://www.jianshu.com/p/58949f8334f5) 

[SpringBoot调用外部接口的四大神技  微信公众平台 (qq.com)](https://mp.weixin.qq.com/s/WjjHV_JZ1k7BajtGwY3VWQ)

基于RestTemplate发起的http请求实现远程调用

java开发中，使用http连接，访问`第三方网络接口`，通常使用的连接工具为`HttpClient`和`OKHttp`。

这两种连接工具，使用起来比较`复杂`，新手容易出问题。如果使用spring框架，可以使用`restTemplate`来进行http连接请求。

restTemplate默认的连接方式是java中的`HttpConnection`，可以使用`ClientHttpRequestFactory`指定不同的HTTP连接方式。

（使用restTemplate来发送http请求，微服务项目之间互相隔离，可以通过restTemplate来请求数据）

```java
@Configuration
public class RestTemplateConfig {
    /**
     * 没有实例化RestTemplate时，初始化RestTemplate
     * @return
     */
    @ConditionalOnMissingBean(RestTemplate.class)
    @Bean
    public RestTemplate restTemplate(){
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate;
    }
}
```

```java
@Autowired
private RestTemplate restTemplate;
/**
 * 单元测试（restTemplate发起基本请求，不带参的get请求）
 */
@Test
public void testGet(){
    //请求地址
    String url = "http://localhost:8080/testGet";

    //发起请求,直接返回对象
    // url请求路径   ResponseBean.class：默认返回json，转为数据类型
    ResponseBean responseBean = restTemplate.getForObject(url, ResponseBean.class);
    System.out.println(responseBean.toString());
}
```



## 提供者与消费者

服务提供者：一次业务中，被其它微服务调用的服务。（提供接口给其它微服务）
服务消费者：一次业务中，调用其它微服务的服务。（调用其它微服务提供的接口）

服务调用关系
服务提供者：暴露接口给其它微服务调用
服务消费者：调用其它微服务提供的接口
提供者与消费者角色其实是相对的
一个服务可以同时是服务提供者和服务消费者

## Eureka注册中心

eureka的作用
消费者该如何获取服务提供者具体信息？
       ◆服务提供者启动时向eureka注册自己的信息
       ◆eureka保存这些信息
       ◆消费者根据服务名称向eureka拉取提供者信息
如果有多个服务提供者，消费者该如何选择？
      ◆服务消费者利用负载均衡算法，从服务列表中挑选一个
消费者如何感知服务提供者健康状态？
      ◆服务提供者会每隔30秒向EurekaServer发送心跳请求，报告健康状态
      ◆eureka会更新记录服务列表信息，心跳不正常会被剔除
      ◆消费者就可以拉取到最新的信息



在Eureka架构中，微服务角色有两类：
●EurekaServer:服务端，注册中心
      记录服务信息
      心跳监控
●EurekaClient:客户端
      Provider:服务提供者，例如案例中的user-service
                    注册自己的信息到EurekaServer
                    每隔30秒向EurekaServer发送心跳
      consumer:服务消费者，例如案例中的order-service
                    根据服务名称从EurekaServer拉取服务列表
                    基于服务列表做负载均衡，选中一个微服务后发起远程调用

## Nacos

官网： [Nacos 快速开始](https://nacos.io/zh-cn/docs/v2/quickstart/quick-start.html) 

 [Nacos1.4.0 Windows10单机模式启动和集群启动_nacos1.4.0windows_谁不想飞舞青春的博客-CSDN博客](https://blog.csdn.net/weixin_48040732/article/details/109492067) 

 [SpringCloud Alibaba 教程_spring cloud alibaba 教程_爱码猿的博客-CSDN博客](https://blog.csdn.net/dndndnnffj/article/details/119515618) 

### **启动服务器**

- 注：Nacos的运行建议至少在2C4G 60G的机器配置下运行。

**Linux/Unix/Mac**

启动命令(standalone代表着单机模式运行，非集群模式):

```
sh startup.sh -m standalone
```

如果您使用的是ubuntu系统，或者运行脚本报错提示[[符号找不到，可尝试如下运行：

```
bash startup.sh -m standalone
```

**Windows**

启动命令(standalone代表着单机模式运行，非集群模式):

```
startup.cmd -m standalone
```

默认端口：8844

进入nacos页面后，默认账号和密码都是 nacos

### 依赖

子工程内加入 nacos 的相关依赖

```xml
<dependency> <!--springCloud提供用于监控-->
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
    <dependency> <!-- 用于服务注册到Nacos -->
        <groupId>com.alibaba.cloud</groupId>
        <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
    </dependency>

```



application.yml

```yml
server:
  port: 8011
  #应用名称(nacos会将该名称当做服务名称)
spring:
  application:
    name: order
  cloud:
    nacos:
      server-addr: 127.0.0.1:8848
      username: nacos
      password: nacos
#      namespace: public   命名空间
#      config:
#      file-extension: yaml

```



注意依赖版本，版本有问题启动不了（版本报错后跟换了版本，springboot和nacos都用了  2.2.3.RELEASE 版本）



### nacos使用示例

```java
    @Bean
    @LoadBalanced   //LoadBalanced负载均衡器，需要
    public RestTemplate restTemplate(RestTemplateBuilder builder){
        RestTemplate restTemplate=builder.build();
        return restTemplate;
    }
```

```java
@RestController
@RequestMapping("/order")
public class OrderController {
    @Autowired
    RestTemplate restTemplate;
    @RequestMapping(value = "/add")
    public String reduct(){
        System.out.println("增加库存");
        String msg=restTemplate.getForObject("http://stock/stock/reduct",String.class);
        return "hello "+msg;
    }
}
```



### nacos集群部署

 [15、Nacos集群部署_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1fe4y1b7ha?p=19&spm_id_from=pageDriver&vd_source=f25f5a8d75a3a60d5a288f726803ec11) 



### 负载均衡 Ribbon

Nacos使用Ribbon

nacos-discovery依赖了ribbon,可以不用再引入ribbon依赖

在RestTemplate的bean上加上   @LoadBalanced 注解就可以使用了，详见  **nacos使用示例**

 

使用 Ribbon 简化restTemplate调用

1. 在声明restTemplate的Bean时候，添加一个注解：@LoadBalanced 
2. 2. 在使用restTemplate发起请求时，需要定义url时，host:port可以替换为 服务提供方的 应用名称 



 [Ribbon的基本使用_ribbon使用_程序媛千柔的博客-CSDN博客](https://blog.csdn.net/TianYinet/article/details/119876840) 

 [花一个周末，掌握 SpringCloud Ribbon 核心原理 - 掘金 (juejin.cn)](https://juejin.cn/post/6933767343570944008) 



**设置负载均衡策略：两种方法：**

1.配置类， 注意：配置类不能放在运行类能扫描到的包下，可以放到它上一层的包里面

```java
@Configuration
public class MyRule {
    @Bean
    public IRule rule(){
        return new RandomRule();
    }
}
//注意：这个new RandomRule()可以改成其他IRule接口的实现类
```

 注意：这个`new RandomRule()`可以改成其他**IRule接口**的实现类 

```
/*
    配置Ribbon的负载均衡策略 name
    * name：设置 服务提供方的 应用名称
    * configuration:设置负载均衡Bean
 */
@RibbonClient(name = "EUREKA-PROVIDE",configuration = MyRule.class)
```

2.配置文件的方式

```
# 配置的方式设置Ribbon的负载均衡策略
nacos-provider: # 设置的服务提供方的 应用名称 如：order...
  ribbon:
    NFloadBalancerRuleClassName: com.netflix.loadbalancer.RandomRule # 策略类(全路径名)
```



**自定义负载均衡策略**

 [Ribbon自定义负载均衡算法_ribbon自定义负载均衡策略_lio...的博客-CSDN博客](https://blog.csdn.net/weixin_46334920/article/details/114867996) 



## feign

 [SpringBoot 使用 Feign 无废话 All-in-one 指南 - 掘金 (juejin.cn)](https://juejin.cn/post/7169549885723639838) 

 Feign 是声明式、模板化的 HTTP 客户端， 可以帮助我们更快捷、优雅地调用 HTTP API；Spring Cloud 为 Feign 添加了 Spring MVC 的注解支持，并整合了 Ribbon 和 Eureka 来为使用 Feign 时提供负载均衡；在 Spring Cloud 中使用 Feign 是非常容易的。 

### 基本使用

使用 feign 来代替 RestTemplate 的调用

```
 <!--openfein的依赖-->
  <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-starter-openfeign</artifactId>
      <version>2.1.3.RELEASE</version>
  </dependency>
```

改造Order服务的内容



StockFeignService

```java
//添加feign接口和方法      @FeignClient
//name指定调用rest接口所对应的服务名
//path指定调用rest接口所在的StockController指定@RequestMapping
@FeignClient(name ="stock",path = "/stock")
public interface StockFeignService {
    //声明需要调用的rest接口对应的方法
    @RequestMapping(value = "/reduct")
    public String reduct();
}
```

修改 OrderController

```java
@RestController
@RequestMapping("/order")
public class OrderController {
    //@Autowired
    //RestTemplate restTemplate;
    //@RequestMapping(value = "/add")
    //public String reduct(){
    //    System.out.println("增加库存");
    //    String msg=restTemplate.getForObject("http://stock/stock/reduct",String.class);
    //    return "hello "+msg;
    //}
    @Autowired
    private StockFeignService stockFeignService;
    @RequestMapping(value = "/add")
    public String reduct(){
        System.out.println("增加库存");
        String msg=stockFeignService.reduct();
        return "hello "+msg;
    }

}
```

启动类增加  @EnableFeignClients  注解

```java
@SpringBootApplication
@EnableFeignClients
public class OrderApplication {

    public static void main(String[] args) {
        System.out.println("我的测试项目启动了");
        SpringApplication.run(OrderApplication.class, args);
    }



}
```



### 日志配置

有时候我们遇到Bug,比如接口调用失败、参数没收到等问题，或者想看看调用性能，就需要配置Feign的日志了，以此让Feign把请求信息输出来。

在发送和接收请求的时候，其内部将日志的打印输出定义成了四个等级，对应的详情如下：

| 级别    | 说明                                                         |
| ------- | ------------------------------------------------------------ |
| NONE    | 【性能最佳，适用于生产】：不记录任何日志（默认值）。         |
| BASIC   | 【适用于生产环境追踪问题】：仅记录请求方法、URL、响应状态代码以及执行时间。 |
| HEADERS | 记录BASIC级别的基础上，记录请求和响应的header。              |
| FULL    | 【比较适用于开发及测试环境定位问题】：记录请求和响应的header、body和元数据。 |

1.全局配置，定义一个配置类  ，通过配置类修改日志级别

FeignConfig

```java
//全局配置：当使用Configuration会将配置作用所有的服务提供方
//局部配置：如果只想针对某一个服务进行配置，就不要加aConfiguration
    @Configuration
public class FeignConfig {
    @Bean
     public Logger.Level feignLoggerLevel() {
        return Logger.Level.FULL;
    }
}
```

2. 通过配置文件修改日志级别 

 注意需要指定接口的全限定名 

```yml
#springboot默认的日志级别是info,feign的dubug日志级别就不会输入
logging:
  level:
    com.fan.cloud.order.feign : DEBUG
```



logger局部配置

```yml
fengin:
  client:
    config:
      stock:   #nacos服务名
        loggerLevel: BASIC
        contract: feign.Contract.Default  #契约配置  设置为默认的契约 (还原成feign原生注解)
```

### 超时时间配置

 [Feign 如何设置超时时间（connectionTimeout、readTimout）_feign timeout_cab5的博客-CSDN博客](https://blog.csdn.net/yangchao1125/article/details/104410068) 

```yml
feign:
  client:
    config:
      stock:  #nacos服务名
        connectTimeout: 10000 #单位毫秒
        readTimeout: 10000 #单位毫秒
```

### 拦截器

 [Feign拦截器：RequestInterceptor_所遇皆惊喜的博客-CSDN博客](https://blog.csdn.net/ZSA222/article/details/124260506) 

 [SpringCloud组件OpenFeign——拦截器_openfeign拦截参数修改_luffylv的博客-CSDN博客](https://blog.csdn.net/m0_47503416/article/details/123426212) 

```java
@Configuration
public class CustomFeignInterceptor implements RequestInterceptor {
    @Override
    public void apply(RequestTemplate template) {
        // 对template的一系列操作
        // 例如设置请求头信息
        template.header("X-Forwarded-For", "origin.host.com");
    }
}
```

## nacos配置中心

 [Nacos配置中心用法详细介绍_nacos配置中心使用_张维鹏的博客-CSDN博客](https://blog.csdn.net/a745233700/article/details/122916208) 

 [SpringBoot+Nacos实现配置中心——Nacos学习 - 掘金 (juejin.cn)](https://juejin.cn/post/7026160025638797320) 

缺少这个依赖，是获取不到nacos的配置信息的

依赖：

```
<dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
        </dependency>
```



配置管理 data id 的命名规则（要遵守，否则读取不到配置）：

dataId=p**re**f**i**x−{spring.profile.active}.${file-extension}

其中profix默认为${spring.application.name}

nacos配置中心  增加一条配置

```
Data ID:order
Group:DEFAULT_GROUP
配置格式: TEXT  JSON XML YAML HTML Properties (选择Properties，选择其他，yml增加file-extension)
配置内容:
student.name=zhansan
student.age=300
```

nacos的相关配置放到  bootstrap.yml  文件中

```yml
spring:
  application:
    # 会自动根据服务名拉取dataid对应的配置文件
    name: order    #这里的name为nacos服务的 Data ID
  cloud:
    nacos:
      config:
        server-addr: 127.0.0.1:8848
        username: nacos
        password: nacos
        #Nacos客户端默认是Properties的文件扩展名，网页上的配置格式
        #一旦修改成了非Properties格式，则必须通过file-extension进行设置，并配置好data id
        # file-extension:yml
```

获取配置中心配置的内容

```java
@SpringBootApplication
@EnableFeignClients
public class OrderApplication {

    public static void main(String[] args) {
        System.out.println("我的测试项目启动了");
        ConfigurableApplicationContext applicationContext=SpringApplication.run(OrderApplication.class, args);
        String userName= applicationContext.getEnvironment().getProperty("student.name");
        String userAge= applicationContext.getEnvironment().getProperty("student.age");
        System.out.println(userName+", "+userAge);
    }



}
```

controller 类里面读取配置信息

```
    @Value("${student.name}")
    public String studentName;
    @Value("${student.age}")
    public String studentAge;
```

若在 nacos 配置中心 修改了配置， controller 里面不会获取到实时更新后的配置，要在 controller 类上增加  **@RefreshScope**  注解才能实时获取更改后的配置数据



**nacos共享配置**

 [Nacos配置管理-多环境配置共享 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/622959833) 

 [Nacos共享配置(shared-configs)和扩展配(extension-config) - 简书 (jianshu.com)](https://www.jianshu.com/p/8715072d3f4c) 



## Sentinel

 [介绍 · alibaba/Sentinel Wiki (github.com)](https://github.com/alibaba/Sentinel/wiki/介绍) 

 [Sentinel](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Falibaba%2FSentinel) 是阿里中间件团队开源的，面向分布式服务架构的轻量级高可用流量控制组件，主要以流量为切入点，从流量控制、熔断降级、系统负载保护等多个维度来帮助用户保护服务的稳定性。 

 [Sentinel_ 相关技术  云烟成雨TD的博客-CSDN博客](https://blog.csdn.net/qq_43437874/category_10481990.html) 

服务雪崩效应：因服务提供者的不可用导致服务调用者的不可用，并将不可用逐斩放大的过程，就叫服务雪崩效应

### 项目集成

`Sentinel` 可以简单的分为 `Sentinel` 核心库和 `Dashboard控制台`。核心库不依赖 `Dashboard`，但是结合 `Dashboard` 可以取得最好的效果。

- **核心库（Java 客户端）**：不依赖任何框架/库，能够运行于 Java 8 及以上的版本的运行时环境，同时对 Dubbo / Spring Cloud 等框架也有较好的支持。
- **控制台（Dashboard）**：Dashboard 主要负责管理推送规则、监控、管理机器信息等。

上面有说 `资源是 Sentinel 的关键概念` 使用 Sentinel 来进行资源保护，主要分为这几个步骤:

1. 定义资源
2. 定义规则
3. 检验规则是否生效



### Sentinel 的开发流程

Sentinel 的开发流程如下：

1. **引入 Sentinel 依赖**：在项目中引入 Sentinel 的依赖，将 Sentinel 整合到项目中；
2. **定义资源**：通过对主流框架提供适配或 Sentinel 提供的显式 API 和注解，可以定义需要保护的资源，此外 Sentinel 还提供了资源的实时统计和调用链路分析；
3. **定义规则**：根据实时统计信息，对资源定义规则，例如流控规则、熔断规则、热点规则、系统规则以及授权规则等。
4. **检验规则是否在生效**：运行程序，检验规则是否生效，查看效果。



### 集成Sentinel

 [微服务系列：Spring Cloud Alibaba 之 Sentinel 详细入门 - 掘金 (juejin.cn)](https://juejin.cn/post/7058453493752791070) 

 [一篇文章彻底学会使用Spring Cloud Alibaba Sentinel - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/569512349) 

sentinel依赖：

```
<dependency>
	<groupId>com.alibaba.cloud</groupId>
	<artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>
</dependency>
```

sentinel配置

```yml
server:
  port: 9201
spring:
  application:
    # 应用名称
    name: order
  cloud:
    sentinel:
      transport:
        # 控制台地址
        dashboard: 127.0.0.1:8718
```

###  `Sentinel` 定义资源

 `Sentinel` 定义资源的方式有好几种，有抛出异常的方式、返回布尔值的方式、注解的方式等 

 `Sentinel`提供了`@SentinelResource`注解用于定义资源，并提供了`AspectJ`的扩展用于自动定义资源、处理`BlockException`等。 

`@SentinelResource`注解包含以下属性：

| 参数               | 描述                                          |
| ------------------ | --------------------------------------------- |
| value              | 资源名称，必需项（不能为空）                  |
| entryType          | 资源调用方向，可选项（默认为`EntryType.OUT`） |
| resourceType       | 资源的分类                                    |
| blockHandler       | 对应处理`BlockException`的函数名称            |
| blockHandlerClass  | 处理类的`Class`对象，函数必需为`static`函数   |
| fallback           | 用于在抛出异常的时候提供`fallback`处理逻辑    |
| defaultFallback    | 用作默认的回退的方法                          |
| fallbackClass      | 异常类的`Class`对象，函数必需为`static`函数   |
| exceptionsToTrace  | 异常类跟踪列表（默认为Throwable.class）       |
| exceptionsToIgnore | 排除掉的异常类型                              |

 注意：注解方式埋点不支持 private 方法。 

- `blockHandler` / `blockHandlerClass`: `blockHandler` 对应处理 `BlockException` 的函数名称，可选项。blockHandler 函数访问范围需要是 `public`，返回类型需要与原方法相匹配，参数类型需要和原方法相匹配并且最后加一个额外的参数，类型为 `BlockException`。blockHandler 函数默认需要和原方法在同一个类中。若希望使用其他类的函数，则可以指定 `blockHandlerClass` 为对应的类的 `Class` 对象，注意对应的函数必需为 static 函数，否则无法解析。



示例：

```java
@Service
public class IUserServiceImpl implements IUserService {

    public static final String RESOURCE_NAME = "selectUserByName"; // 资源名称

    @Override
    @SentinelResource(value = RESOURCE_NAME, blockHandler = "selectUserByNameBlockHandler", fallback = "selectUserByNameFallback")
    public String selectUserByName(String username) {
        return "{"userName": " + username + ", "age": 25}";
    }

    // 服务流量控制处理，注意细节，一定要跟原函数的返回值和形参一致，并且形参最后要加个BlockException参数，否则会报错，FlowException: null
    public String selectUserByNameBlockHandler(String username, BlockException ex)
    {
        System.out.println("selectUserByNameBlockHandler异常信息：" + ex.getMessage());
        return "{"code":"500","msg": "" + username + "服务流量控制处理"}";
    }

    // 服务熔断降级处理，函数签名与原函数一致或加一个 Throwable 类型的参数
    public String selectUserByNameFallback(String username, Throwable throwable)
    {
        System.out.println("selectUserByNameFallback异常信息：" + throwable.getMessage());
        return "{"code":"500","msg": "" + username + "服务熔断降级处理"}";
    }
}
```

### Sentinel定义规则

流量控制规则(`FlowRule`)重要属性

| 参数            | 描述                                              | 描述                        |
| --------------- | ------------------------------------------------- | --------------------------- |
| resource        | 资源名，资源名是限流规则的作用对象                |                             |
| limitApp        | 流控针对的调用来源，若为 default 则不区分调用来源 | default，代表不区分调用来源 |
| grade           | 限流阈值类型，QPS 模式（1）或并发线程数模式（0）  | QPS 模式                    |
| count           | 限流阈值                                          |                             |
| strategy        | 调用关系限流策略：直接、链路、关联                | 根据资源本身（直接）        |
| controlBehavior | 流量控制效果(直接拒绝、Warm Up、匀速排队)         | 直接拒绝                    |
| clusterMode     | 是否集群限流                                      | 否                          |

```java
@SpringBootApplication
public class SentinelApplication {

    public static void main(String[] args) {
        SpringApplication.run(SentinelApplication.class, args);
        initFlowQpsRule();
    }

    //定义了每秒最多接收2个请求
    private static void initFlowQpsRule() {
        List<FlowRule> rules = new ArrayList<>();
        FlowRule rule = new FlowRule(IUserServiceImpl.RESOURCE_NAME);
        // set limit qps to 2
        rule.setCount(2);
        rule.setGrade(RuleConstant.FLOW_GRADE_QPS);
        rule.setLimitApp("default");
        rules.add(rule);
        FlowRuleManager.loadRules(rules);
    }
}

```

```
注意 FlowRule rule = new FlowRule(IUserServiceImpl.RESOURCE_NAME) 资源名称
```

### sentinel-BlockException统一异常处理

 [sentinel-BlockException统一异常处理_sentinel 统一异常_搞钱自律的博客-CSDN博客](https://blog.csdn.net/weixin_43472934/article/details/122475687) 

```java
@Component
public class MyBlockExceptionHandler implements BlockExceptionHandler {

    Logger log = LoggerFactory.getLogger(this.getClass());

    public void handle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, BlockException e) throws Exception {
        //getRule返回资源、规则的详细信息
        log.info("BlockExceptionHandler BlockException================"+e.getRule());

        Result r = null;
        if(e instanceof FlowException){
            r = Result.error(100,"接口被限流了");
        }else if (e instanceof DegradeException){
            r = Result.error(101,"服务降级了");
        }else if (e instanceof ParamFlowException){
            r = Result.error(102,"热点参数限流了");
        }else if (e instanceof AuthorityException){
            r = Result.error(104,"授权规则不通过");
        }

        //返回Json数据
        httpServletResponse.setStatus(500);
        httpServletResponse.setCharacterEncoding("UTF-8");
        httpServletResponse.setContentType(MediaType.APPLICATION_JSON_VALUE);
        PrintWriter writer=null;
        try {
            writer=httpServletResponse.getWriter();
            writer.write(JSON.toJSONString(r));
            writer.flush();
        } catch (IOException ioException) {
            log.error("异常：{}",ioException);
        }finally {
            if(writer!=null) {
                writer.close();
            }
        }
    }
}
```

### Sentinel 持久化

 [SpringCloud Alibaba Sentinel规则持久化 - 掘金 (juejin.cn)](https://juejin.cn/post/7000995878332792839#heading-2) 



 [sentinel持久化到Nacos-push模式_小相公爱玩的博客-CSDN博客](https://blog.csdn.net/u010342147/article/details/124303587) 

导入依赖

```
<!--sentinel持久化 -->
	<dependency>
		<groupId>com.alibaba.csp</groupId>
		<artifactId>sentinel-datasource-nacos</artifactId>
	</dependency>
```



### Sentinel 控制台

从`https://github.com/alibaba/Sentinel/releases`下载`sentinel-dashboard-$version.jar`包。 

github下载速度慢，我下载的1.8.6版本

  https://wwmj.lanzoue.com/iAm1s19me1jc      密码:9art 

我们可以用以下命令来启动下载的 jar 包 

```
java -Dserver.port=8718 -jar sentinel-dashboard-1.8.6.jar
```

 其中 `-Dserver.port=8718` 指定控制台端口 

 启动成功浏览器访问地址 [http://localhost:8718](https://link.juejin.cn/?target=http%3A%2F%2Flocalhost%3A8718) ，默认用户名密码：`sentinel/sentinel` 

 [Sentinel的基本使用(5)-控制台使用_sentinel 控制台访问地址__微风轻起的博客-CSDN博客](https://blog.csdn.net/qq_25179481/article/details/124225426) 

 [Sentinel使用教程_sentinel教程_守拙的小黑的博客-CSDN博客](https://blog.csdn.net/qq_36185997/article/details/107152602) 

 [Sentinel搭建与使用 - AlwaysZmx - 博客园 (cnblogs.com)](https://www.cnblogs.com/alwayszmx/p/15901889.html) 

## Alibaba微服务分布式事务组件一Seata

 [快速启动 | Seata](https://seata.io/zh-cn/docs/user/quickstart/) 

 Seata 是一款开源的分布式事务解决方案，致力于提供高性能和简单易用的分布式事务服务。Seata 将为用户提供了 AT、TCC、SAGA 和 XA 事务模式，为用户打造一站式的分布式解决方案。 



AT模式（auto transcation）主要使用

### seata部署

 [新人文档 | Seata](https://seata.io/zh-cn/docs/ops/deploy-guide-beginner) 

Seata分TC、TM和RM三个角色，TC（Server端）为单独服务端部署，TM和RM（Client端）由业务系统集成。

资源目录介绍

[点击查看(或根据版本分支选择对应的资源目录)](https://github.com/seata/seata/tree/master/script)

- client

  > 存放client端sql脚本 (包含 undo_log表) ，参数配置

- config-center

  > 各个配置中心参数导入脚本，config.txt(包含server和client，原名nacos-config.txt)为通用参数文件

- server

  > server端数据库脚本 (包含 lock_table、branch_table 与 global_table) 及各个容器配置

 

Server端存储模式（store.mode）现有file、db、redis三种（后续将引入raft,mongodb），file模式无需改动，直接启动即可，下面专门讲下db和redis启动步骤。 

此处使用的   db

#### 启动Server

步骤一：启动[点击下载](https://github.com/seata/seata/releases)    https://wwmj.lanzoue.com/iOlnL19sazod 

由于我使用的spring cloud alibaba版本为2.2.3.RELEASE,所以我下载的 1.3.0 版本的  server 

步骤二：修改配置文件， 1.3.0 版本为 conf/file.conf ,高版本按照官网的提示去修改对应的文件

mode = "db"      修改配置文件中 数据库连接信息 

步骤三：新建数据库，和配置库连接信息的数据库名一样

数据库内运行文件 [seata/script/server/db/mysql.sql at master · seata/seata (github.com)](https://github.com/seata/seata/blob/master/script/server/db/mysql.sql) 

### db+Nacos的方式部署高可用集群模式

 [db+Nacos的方式部署高可用集群模式_nacos db_柒间的博客-CSDN博客](https://blog.csdn.net/qq_43663493/article/details/121401862) 

seata的conf文件夹下  registry.conf 

registry 和 config   里面 type修改为nacos 配修改nacos 连接配置信息

```
type = "nacos"

nacos {
    application = "seata-server"
    serverAddr = "127.0.0.1:8848"
    group = "SEATA_GROUP"
    namespace = ""
    cluster = "default"
    username = "nacos"
    password = "nacos"
  }
```



 把config-center config.txt文件([连接直达](https://github.com/seata/seata/blob/1.3.0/script/config-center/config.txt))复制到本地，并做如下修改。主要修改：store.mode 变量，和数据库连接信息。 

修改后运行  config-center/nacos/nacos-config.py

如果nacos中有新的配置信息出现，则配置成功



 启动服务，安装目录下的bin目录点击`seata-server.bat`,默认端口8091。 

命令启动: seata-server.sh -h 127.0.0.1 -p 8091 -m db -n 1 -e test

```text
    -h: 注册到注册中心的ip   
    -p: Server rpc 监听端口    
    -m: 全局事务会话信息存储模式，file、db、redis，优先读取启动参数 (Seata-Server 1.3及以上版本支持redis)    
    -n: Server node，当有多个Server时，需区分各自节点，用于生成不同区间的transactionId，以免冲突         -e: 多环境配置参考 http://seata.io/en-us/docs/ops/multi-configuration-isolation.html
```

 我的mysql是8版本，启动服务报错，查看下面文章

[Seata0.9.0大坑之连接MySQL8.0_seata-server0.9.0配置连接mysql8.0_月落呜啼霜满天天天的博客-CSDN博客](https://blog.csdn.net/stephen_curry300/article/details/121585707) 



在nacos服务列表看见新加的服务信息则配置成功



### Seata Client

 [Seata(二): Seata-Client集成 & 配置_seata client-CSDN博客](https://blog.csdn.net/weixin_42257984/article/details/123949682) 

添加依赖：

```
<!--sentinel-->
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-seata</artifactId>
        </dependency>
```

各微服务对应数据库中添加undo_Iog表

```sql
-- for AT mode you must to init this sql for you business database. the seata server not need it.
CREATE TABLE IF NOT EXISTS `undo_log`
(
    `branch_id`     BIGINT       NOT NULL COMMENT 'branch transaction id',
    `xid`           VARCHAR(128) NOT NULL COMMENT 'global transaction id',
    `context`       VARCHAR(128) NOT NULL COMMENT 'undo_log context,such as serialization',
    `rollback_info` LONGBLOB     NOT NULL COMMENT 'rollback info',
    `log_status`    INT(11)      NOT NULL COMMENT '0:normal status,1:defense status',
    `log_created`   DATETIME(6)  NOT NULL COMMENT 'create datetime',
    `log_modified`  DATETIME(6)  NOT NULL COMMENT 'modify datetime',
    UNIQUE KEY `ux_undo_log` (`xid`, `branch_id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  DEFAULT CHARSET = utf8 COMMENT ='AT transaction mode undo table';
```

 服务A调用服务B，作为调用方A添加@GlobalTransaction注解 



## Spring Cloud微服务网关Gateway:组件



### 简单使用

 [初级程序员必须懂的微服务SpringCloud GateWay - 掘金 (juejin.cn)](https://juejin.cn/post/7281905382485426187) 

 API 网关充当了前端客户端和后端微服务之间的入口点，为微服务提供了一种集中式的、可管理的方式来处理请求。Spring Cloud Gateway 就是在这个背景下应运而生的。 

```
 <!-- Spring Cloud Gateway依赖 -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-gateway</artifactId>
        </dependency>
```

只引入gateway的依赖，我运行时报错了，此时需要引入另外一个依赖

```
 <dependency>
   	<groupId>org.springframework</groupId>
 	<artifactId>spring-webflux</artifactId>
    <version>5.2.4.RELEASE</version>
 </dependency>
```

然后删除掉项目的web依赖  https://blog.csdn.net/weixin_40571937/article/details/112516295

再运行时，项目能够成功启动了。



配置yml

```yml
server:
  port: 8010
spring:
  cloud:
    gateway:
      routes: #routes下可以配置多个路由
        - id: stock-route         #id标识
          uri: http://localhost:8011  # 要代理的目标URI（要请求的服务的地址）
          # 断言规则，用于路由匹配的规则（规则匹配，如果匹配成功就路由转发，如果匹配失败就返回404）
          predicates:
            - Path=/stock-serve/**  # 匹配的路径规则
              # 请求这个路径 http://localhost:8010/stock-serve/order/add （本服务）路由到下面
              # http://localhost:8011/stock-serve/order/add  （被请求的服务）
          filters:
            - StripPrefix=1  # 过滤器，用于去掉请求前缀（/stock-serve）
```

### 整合nacos

**其实就是在原有的配置上修改 uri 为 nacos 上的服务名**

修改yml

```yml
server:
  port: 8010
spring:
  cloud:
    gateway:
      routes: #routes下可以配置多个路由
        - id: stock-route         #id标识
          uri: lb://stock  # 要代理的目标URI（要请求的服务的地址）
          # lb:使用nacos中的本地负载均衡策略  stock是服务名
          # 断言规则，用于路由匹配的规则（规则匹配，如果匹配成功就路由转发，如果匹配失败就返回404）
          predicates:
            - Path=/stock-serve/**  # 匹配的路径规则
              # 请求这个路径 http://localhost:8010/stock-serve/order/add （本服务）路由到下面
              # http://localhost:8011/stock-serve/order/add  （被请求的服务）
          filters:
            - StripPrefix=1  # 过滤器，用于去掉请求前缀（/stock-serve）
```



### 路由的断言规则

https://juejin.cn/post/7077197582077788167#heading-23

自定义路由的断言工厂：

 [Spring Cloud Gateway自定义路由断言工厂-CSDN博客](https://blog.csdn.net/chaojunma/article/details/107331172) 

### 过滤器

 [Spring Cloud : Gateway 网关过滤器 GatewayFilter（四）_spring cloud gateway filter condition-CSDN博客](https://blog.csdn.net/zouliping123456/article/details/116128179) 

 [过滤器_gateway设置字符编码过滤 -   31种过滤器_EngineZhang的博客-CSDN博客](https://blog.csdn.net/zhang0114/article/details/123179037) 

自定义过滤工厂

 [SpringCloudAlibaba - Gateway 自定义过滤器工厂_abstractnamevaluegatewayfilterfactory 扩展-CSDN博客](https://blog.csdn.net/weixin_41182727/article/details/120564252) 

全局过滤器

局部：局部针对某个路由，需要在路由中进行配置
全局：针对所有路由请求，一旦定义就会投入使用

### 跨域配置

 [spring-cloud（十三）GateWay 跨域、HTTP 超时配置_gateway 默认超时时间-CSDN博客](https://blog.csdn.net/leilei1366615/article/details/109171478) 

### Spring Cloud Gateway 整合Sentinel

 [Spring Cloud Gateway 整合阿里 Sentinel网关限流实战！ - 掘金 (juejin.cn)](https://juejin.cn/post/7026520607978160142) 

 [Spring Cloud Gateway 整合 sentinel 实现流控熔断_gateway sentinel_张维鹏的博客-CSDN博客](https://blog.csdn.net/a745233700/article/details/122917160) 



## Skywalking分布式链路追踪

 [全网最详细的Skywalking分布式链路追踪 - 掘金 (juejin.cn)](https://juejin.cn/post/7072709231949905957) 

 [SkyWalking 极简入门 | Apache SkyWalking](https://skywalking.apache.org/zh/2020-04-19-skywalking-quick-start/#) 

### 环境搭建

 [SkyWalking环境搭建与使用_skywalking搭建-CSDN博客](https://blog.csdn.net/qq_42402854/article/details/126920266) 



## 实战项目

视频查看：[黑马程序员Java项目企业级微服务实战《学成在线》](https://www.bilibili.com/video/BV1j8411N7Bm?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11)

黑马Java微服务项目《学成在线》配套资源
在线学习：https://www.bilibili.com/video/BV1j8411N7Bm/
网盘链接：https://pan.baidu.com/s/16iXzw7cFDk3FqG9DfPqbdg?pwd=6633
提取码：6633