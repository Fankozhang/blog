import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as v,a as n,b as e,e as a,f as t,r as l}from"./app.57c9ff20.js";const o="/blog/javaCreateSimple.png",c="/blog/javaWebCreate.png",m="/blog/javaWebCreate2.png",p="/blog/javaWebCreate3.png",u="/blog/javaWebCreate4.png",g="/blog/javaModuleCreate.png",b="/blog/javaModuleCreate2.png",h="/blog/javaModuleCreate3.png",_="/blog/javaModuleCreate4.png",j="/blog/javaModuleCreate5.png",x="/blog/javaModuleCreate6.png",f="/blog/javaModuleCreate7.png",S="/blog/javaModuleCreate8.png",y={},C=t('<h1 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h1><h2 id="idea创建java项目-maven" tabindex="-1"><a class="header-anchor" href="#idea创建java项目-maven" aria-hidden="true">#</a> <strong>idea创建java项目（maven）</strong></h2><h3 id="_1-创建普通java项目-quickstart" tabindex="-1"><a class="header-anchor" href="#_1-创建普通java项目-quickstart" aria-hidden="true">#</a> <strong>1 创建普通Java项目（quickstart）</strong></h3><p><img src="'+o+'" alt="javaCreateSimple" loading="lazy"></p><h3 id="_2创建普通java-web项目-maven-archetype-webapp" tabindex="-1"><a class="header-anchor" href="#_2创建普通java-web项目-maven-archetype-webapp" aria-hidden="true">#</a> 2创建普通Java web项目（maven-archetype-webapp）</h3><p><img src="'+c+`" alt="javaWebCreate" loading="lazy"></p><p>pom.xml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;properties&gt;
  &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
  &lt;maven.compiler.source&gt;1.8&lt;/maven.compiler.source&gt;
  &lt;maven.compiler.target&gt;1.8&lt;/maven.compiler.target&gt;
&lt;/properties&gt;

&lt;dependencies&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;junit&lt;/groupId&gt;
    &lt;artifactId&gt;junit&lt;/artifactId&gt;
    &lt;version&gt;4.12&lt;/version&gt;
    &lt;scope&gt;test&lt;/scope&gt;
  &lt;/dependency&gt;
&lt;/dependencies&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),M=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;build&gt;
  &lt;finalName&gt;simple-java-web&lt;/finalName&gt;
  &lt;plugins&gt;
    &lt;plugin&gt;

      &lt;groupId&gt;org.eclipse.jetty&lt;/groupId&gt;

      &lt;artifactId&gt;jetty-maven-plugin&lt;/artifactId&gt;

      &lt;version&gt;9.4.11.v20180605&lt;/version&gt;

      &lt;configuration&gt;

        &lt;scanIntervalSeconds&gt;10&lt;/scanIntervalSeconds&gt;

        &lt;webAppConfig&gt;

          &lt;contextPath&gt;/test&lt;/contextPath&gt;

        &lt;/webAppConfig&gt;

      &lt;/configuration&gt;

    &lt;/plugin&gt;

    &lt;plugin&gt;
      &lt;groupId&gt;org.apache.tomcat.maven&lt;/groupId&gt;
      &lt;artifactId&gt;tomcat7-maven-plugin&lt;/artifactId&gt;
      &lt;version&gt;2.2&lt;/version&gt;
      &lt;configuration&gt;
        &lt;port&gt;8081&lt;/port&gt; &lt;!--启动的端口号，默认8081 --&gt;
        &lt;path&gt;/test&lt;/path&gt; &lt;!-- 项目站点名，对外访问路径 --&gt;
        &lt;uriEncoding&gt;UTF-8&lt;/uriEncoding&gt;
        &lt;server&gt;tomcat7&lt;/server&gt;
      &lt;/configuration&gt;
    &lt;/plugin&gt;
  &lt;/plugins&gt;
&lt;/build&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+'" alt="javaWebCreate2" loading="lazy"><img src="'+p+'" alt="javaWebCreate3" loading="lazy"><img src="'+u+'" alt="javaWebCreate4" loading="lazy"></p>',2),q={href:"http://localhost:8080/test",target:"_blank",rel:"noopener noreferrer"},k={href:"http://localhost:8081/test",target:"_blank",rel:"noopener noreferrer"},I=t('<h3 id="_3创建多模块项目" tabindex="-1"><a class="header-anchor" href="#_3创建多模块项目" aria-hidden="true">#</a> <strong>3创建多模块项目</strong></h3><p>创建项目 项目名 maven-parent</p><p><img src="'+g+'" alt="javaModuleCreate" loading="lazy"></p><p>创建 module 3个</p><p><img src="'+b+'" alt="javaModuleCreate2" loading="lazy"></p><p><img src="'+h+'" alt="javaModuleCreate3" loading="lazy"></p><p>maven-dao maven-service maven-controller（3个模块） 创建maven-dao maven-service <strong>用quickstart</strong> 创建maven-controller <strong>用maven-archetype-webapp</strong></p><p><strong>生成目录结构</strong></p><p><img src="'+_+'" alt="javaModuleCreate4" loading="lazy"></p><p>修改所有的子模块的pom.xml配置</p><p><img src="'+j+`" alt="javaModuleCreate5" loading="lazy"></p><p>UserDao</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package org.example.dao;

public class UserDao {
    public static void testDao(){
        System.out.println(&quot;testDao&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>UserService</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package org.example.service;

import org.example.dao.UserDao;

public class UserService {
    public static void testService() {
        System.out.println(&quot;userService&quot;);
        // 调用maven-dao模块的方法
        UserDao.testDao();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>UserServlet</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package org.example;

import org.example.service.UserService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(&quot;/user&quot;)
public class UserServlet extends HttpServlet {

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.service(req, resp);
        System.out.println(&quot;userServlet&quot;);
        UserService.testService();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在三个module的pom.xml引入相关联模块的依赖</p><p>dao不用引</p><p><img src="`+x+'" alt="javaModuleCreate6" loading="lazy"></p><p><img src="'+f+'" alt="javaModuleCreate7" loading="lazy"></p><p><img src="'+S+'" alt="javaModuleCreate8" loading="lazy"></p><p>配置maven命令，启动</p><h2 id="java-ssm框架" tabindex="-1"><a class="header-anchor" href="#java-ssm框架" aria-hidden="true">#</a> java SSM框架</h2>',24),w={href:"https://www.bilibili.com/video/BV1Ya411S7aT/?spm_id_from=333.337.search-card.all.click&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},z={href:"https://pan.baidu.com/s/1jx1hRb7ugMFFJP81Fvcy1Q?pwd=yyds",target:"_blank",rel:"noopener noreferrer"},U={href:"https://gitee.com/zhengguangqq/ssm-md",target:"_blank",rel:"noopener noreferrer"};function E(W,F){const s=l("pluginManagement"),i=l("ExternalLinkIcon");return d(),v("div",null,[C,n("p",null,[e("删除pom.xml中 "),a(s),e(" 标签和里面的内容 plugins标签中加了jetty和tomcat,可以测试项目运行")]),M,n("p",null,[e("( compile命令编译 package命令打包 ) 访问路径为 ： jetty "),n("a",q,[e("http://localhost:8080/test"),a(i)]),e(" tomcat "),n("a",k,[e("http://localhost:8081/test"),a(i)])]),I,n("p",null,[e("决定看ssm框架视频， "),n("a",w,[e("【尚硅谷】SSM框架全套教程，MyBatis+Spring+SpringMVC+SSM整合一套通关_哔哩哔哩_bilibili"),a(i)]),e(" 。")]),n("p",null,[e("需要资料当然要到评论区取找了，资源链接："),n("a",z,[e("https://pan.baidu.com/s/1jx1hRb7ugMFFJP81Fvcy1Q?pwd=yyds"),a(i)]),e(" 提取码：yyds 。 "),n("a",U,[e("https://gitee.com/zhengguangqq/ssm-md"),a(i)]),e(" 尚硅谷的ssm md格式笔记")])])}const N=r(y,[["render",E],["__file","1.html.vue"]]);export{N as default};
