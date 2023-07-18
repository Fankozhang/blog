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



# 实战项目

 下载地址：https://pan.baidu.com/s/1LxIxcHDO7SYB96SE-GZfuQ
提取码：dor4 

瑞吉外卖参考博客： [ 瑞吉外卖笔记_风吟Pro的博客-CSDN博客](https://blog.csdn.net/weixin_46906696/article/details/125040457) 

​                                   [瑞吉外卖项目详细分析笔记及所有功能补充代码_随身携带的笑的博客-CSDN博客](https://blog.csdn.net/giveupgivedown/article/details/128708122?csdn_share_tail={"type"%3A"blog"%2C"rType"%3A"article"%2C"rId"%3A"128708122"%2C"source"%3A"giveupgivedown"}) 

## swagger（瑞吉外卖）

使用方式
操作步骤：
1、导入knife4j的maven坐标

```
<dependency>
			<groupId>com.github.xiaoymin</groupId>
			<artifactId>knife4j-spring-boot-starter</artifactId>
			<version>3.0.2</version>
		</dependency>
```

2、导入knife4j相关配置类

webMvcConfig （加两个注解  @EnableSwagger2  @EnableKnife4j）

```
@Slf4j
@Configuration
@EnableSwagger2
@EnableKnife4j
public class WebMvcConfig extends WebMvcConfigurationSupport {

	/**
     * @param registry:
     * @return void
     * @author 张帆
     * @description 设置资源映射
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
                .apis(RequestHandlerSelectors.basePackage("com.example.reggie.demo.controller"))
                .paths(PathSelectors.any())
                .build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("瑞吉外卖")
                .version("1.0")
                .description("瑞吉外卖接口文档")
                .build();
    }

}

```

3、设置静态资源，否则接口文档页面无法访问

```
 registry.addResourceHandler("doc.html").addResourceLocations("classpath:/META-INF/resources/");
registry.addResourceHandler("/webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/");
```

4、在LoginCheckFilter中设置不需要处理的请求路径

```
 //定义不需要处理的请求路径
        String[] urls = new String[]{
                "/employee/login",
                "/employee/logout",
                "/backend/**",
                "/front/**",
                "/common/**",
                // 移动端地址
                "/user/sendMsg/**",
                "/user/login",
              // swagger
                "/doc.html",
                "/webjars/**",
                "/swagger/resources",
                "v2/api-docs"
        };
```

常用注解
注解说明
@Api                             用在请求的类上，例如Controller.,表示对类的说明
@ApiModel                  用在类上，通常是实体类，表示一个返回响应数据的信息
@ApiModelProperty   用在属性上，描述响应类的属性
@ApiOperation           用在请求的方法上，说明方法的用途、作用
@ApilmplicitParams   用在请求的方法上，表示一组参数说明
@ApilmplicitParam     用在@ApilmplicitParams注解中，指定一个请求参数的各个方面