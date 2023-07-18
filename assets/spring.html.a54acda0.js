import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as a,a as n,b as e,e as s,f as t,r as l}from"./app.684a5af9.js";const o={},u=n("h1",{id:"实战项目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#实战项目","aria-hidden":"true"},"#"),e(" 实战项目")],-1),c={href:"https://pan.baidu.com/s/1LxIxcHDO7SYB96SE-GZfuQ",target:"_blank",rel:"noopener noreferrer"},v={href:"https://blog.csdn.net/weixin_46906696/article/details/125040457",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/giveupgivedown/article/details/128708122?csdn_share_tail=%7B%22type%22%3A%22blog%22%2C%22rType%22%3A%22article%22%2C%22rId%22%3A%22128708122%22%2C%22source%22%3A%22giveupgivedown%22%7D",target:"_blank",rel:"noopener noreferrer"},b=t(`<h2 id="swagger-瑞吉外卖" tabindex="-1"><a class="header-anchor" href="#swagger-瑞吉外卖" aria-hidden="true">#</a> swagger（瑞吉外卖）</h2><p>使用方式 操作步骤： 1、导入knife4j的maven坐标</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
			&lt;groupId&gt;com.github.xiaoymin&lt;/groupId&gt;
			&lt;artifactId&gt;knife4j-spring-boot-starter&lt;/artifactId&gt;
			&lt;version&gt;3.0.2&lt;/version&gt;
		&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、导入knife4j相关配置类</p><p>webMvcConfig （加两个注解 @EnableSwagger2 @EnableKnife4j）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Slf4j
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
        log.info(&quot;资源映射&quot;);
 registry.addResourceHandler(&quot;doc.html&quot;).addResourceLocations(&quot;classpath:/META-INF/resources/&quot;);
registry.addResourceHandler(&quot;/webjars/**&quot;).addResourceLocations(&quot;classpath:/META-INF/resources/webjars/&quot;);      registry.addResourceHandler(&quot;/backend/**&quot;).addResourceLocations(&quot;classpath:/backend/&quot;);
        registry.addResourceHandler(&quot;/front/**&quot;).addResourceLocations(&quot;classpath:/front/&quot;);
    }

    @Bean
    public Docket createRestApi() {
        // 文档类型
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage(&quot;com.example.reggie.demo.controller&quot;))
                .paths(PathSelectors.any())
                .build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title(&quot;瑞吉外卖&quot;)
                .version(&quot;1.0&quot;)
                .description(&quot;瑞吉外卖接口文档&quot;)
                .build();
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、设置静态资源，否则接口文档页面无法访问</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> registry.addResourceHandler(&quot;doc.html&quot;).addResourceLocations(&quot;classpath:/META-INF/resources/&quot;);
registry.addResourceHandler(&quot;/webjars/**&quot;).addResourceLocations(&quot;classpath:/META-INF/resources/webjars/&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>4、在LoginCheckFilter中设置不需要处理的请求路径</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> //定义不需要处理的请求路径
        String[] urls = new String[]{
                &quot;/employee/login&quot;,
                &quot;/employee/logout&quot;,
                &quot;/backend/**&quot;,
                &quot;/front/**&quot;,
                &quot;/common/**&quot;,
                // 移动端地址
                &quot;/user/sendMsg/**&quot;,
                &quot;/user/login&quot;,
              // swagger
                &quot;/doc.html&quot;,
                &quot;/webjars/**&quot;,
                &quot;/swagger/resources&quot;,
                &quot;v2/api-docs&quot;
        };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用注解 注解说明 @Api 用在请求的类上，例如Controller.,表示对类的说明 @ApiModel 用在类上，通常是实体类，表示一个返回响应数据的信息 @ApiModelProperty 用在属性上，描述响应类的属性 @ApiOperation 用在请求的方法上，说明方法的用途、作用 @ApilmplicitParams 用在请求的方法上，表示一组参数说明 @ApilmplicitParam 用在@ApilmplicitParams注解中，指定一个请求参数的各个方面</p>`,11);function p(g,q){const i=l("ExternalLinkIcon");return r(),a("div",null,[u,n("p",null,[e("下载地址："),n("a",c,[e("https://pan.baidu.com/s/1LxIxcHDO7SYB96SE-GZfuQ"),s(i)]),e(" 提取码：dor4")]),n("p",null,[e("瑞吉外卖参考博客： "),n("a",v,[e(" 瑞吉外卖笔记_风吟Pro的博客-CSDN博客"),s(i)])]),n("p",null,[e("​ "),n("a",m,[e("瑞吉外卖项目详细分析笔记及所有功能补充代码_随身携带的笑的博客-CSDN博客"),s(i)])]),b])}const _=d(o,[["render",p],["__file","spring.html.vue"]]);export{_ as default};
