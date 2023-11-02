import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as o,a as e,b as n,e as i,f as t,r as l}from"./app.a6537d53.js";const v="/blog/javaCreateSimple.png",c="/blog/javaWebCreate.png",m="/blog/javaWebCreate2.png",u="/blog/javaWebCreate3.png",p="/blog/javaWebCreate4.png",g="/blog/javaModuleCreate.png",b="/blog/javaModuleCreate2.png",h="/blog/javaModuleCreate3.png",_="/blog/javaModuleCreate4.png",E="/blog/javaModuleCreate5.png",f="/blog/javaModuleCreate6.png",x="/blog/javaModuleCreate7.png",S="/blog/javaModuleCreate8.png",j={},y=t('<h1 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h1><h2 id="idea快捷键" tabindex="-1"><a class="header-anchor" href="#idea快捷键" aria-hidden="true">#</a> idea快捷键</h2><p>ctrl+o : 查看类中所有方法</p><h2 id="输入-java-命令报错" tabindex="-1"><a class="header-anchor" href="#输入-java-命令报错" aria-hidden="true">#</a> 输入 java 命令报错</h2>',4),C={href:"https://blog.csdn.net/weixin_43899069/article/details/115796539",target:"_blank",rel:"noopener noreferrer"},M=e("p",null,"java升级时，会在环境变量的path路径中增加以下两条路径，与我们安装java的路径重合。",-1),w=e("p",null,[e("strong",null,"解决方法："),n(" 删掉环境变量中的这两条语句， 同时找到对应文件，删除即可。")],-1),B=e("p",null,"C:\\ProgramData\\Oracle\\Java\\javapath",-1),I=e("p",null,"C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath",-1),k={href:"https://blog.csdn.net/tangthh123/article/details/106837999",target:"_blank",rel:"noopener noreferrer"},q=t('<h2 id="idea创建java项目-maven" tabindex="-1"><a class="header-anchor" href="#idea创建java项目-maven" aria-hidden="true">#</a> <strong>idea创建java项目（maven）</strong></h2><h3 id="_1-创建普通java项目-quickstart" tabindex="-1"><a class="header-anchor" href="#_1-创建普通java项目-quickstart" aria-hidden="true">#</a> <strong>1 创建普通Java项目（quickstart）</strong></h3><p><img src="'+v+'" alt="javaCreateSimple" loading="lazy"></p><h3 id="_2创建普通java-web项目-maven-archetype-webapp" tabindex="-1"><a class="header-anchor" href="#_2创建普通java-web项目-maven-archetype-webapp" aria-hidden="true">#</a> 2创建普通Java web项目（maven-archetype-webapp）</h3><p><img src="'+c+`" alt="javaWebCreate" loading="lazy"></p><p>pom.xml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;properties&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),A=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;build&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+'" alt="javaWebCreate2" loading="lazy"><img src="'+u+'" alt="javaWebCreate3" loading="lazy"><img src="'+p+'" alt="javaWebCreate4" loading="lazy"></p>',2),D={href:"http://localhost:8080/test",target:"_blank",rel:"noopener noreferrer"},R={href:"http://localhost:8081/test",target:"_blank",rel:"noopener noreferrer"},O=t('<h3 id="_3创建多模块项目" tabindex="-1"><a class="header-anchor" href="#_3创建多模块项目" aria-hidden="true">#</a> <strong>3创建多模块项目</strong></h3><p>创建项目 项目名 maven-parent</p><p><img src="'+g+'" alt="javaModuleCreate" loading="lazy"></p><p>创建 module 3个</p><p><img src="'+b+'" alt="javaModuleCreate2" loading="lazy"></p><p><img src="'+h+'" alt="javaModuleCreate3" loading="lazy"></p><p>maven-dao maven-service maven-controller（3个模块） 创建maven-dao maven-service <strong>用quickstart</strong> 创建maven-controller <strong>用maven-archetype-webapp</strong></p><p><strong>生成目录结构</strong></p><p><img src="'+_+'" alt="javaModuleCreate4" loading="lazy"></p><p>修改所有的子模块的pom.xml配置</p><p><img src="'+E+`" alt="javaModuleCreate5" loading="lazy"></p><p>UserDao</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package org.example.dao;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在三个module的pom.xml引入相关联模块的依赖</p><p>dao不用引</p><p><img src="`+f+'" alt="javaModuleCreate6" loading="lazy"></p><p><img src="'+x+'" alt="javaModuleCreate7" loading="lazy"></p><p><img src="'+S+'" alt="javaModuleCreate8" loading="lazy"></p><p>配置maven命令，启动</p><h2 id="java-ssm框架" tabindex="-1"><a class="header-anchor" href="#java-ssm框架" aria-hidden="true">#</a> java SSM框架</h2>',24),N={href:"https://www.bilibili.com/video/BV1Ya411S7aT/?spm_id_from=333.337.search-card.all.click&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},L={href:"https://pan.baidu.com/s/1jx1hRb7ugMFFJP81Fvcy1Q?pwd=yyds",target:"_blank",rel:"noopener noreferrer"},F={href:"https://gitee.com/zhengguangqq/ssm-md",target:"_blank",rel:"noopener noreferrer"},z={href:"https://www.bilibili.com/video/BV1AP411s7D7",target:"_blank",rel:"noopener noreferrer"},T={href:"https://pan.baidu.com/s/12roPcN1oBmDKk3wwnMSu_A?pwd=yyds",target:"_blank",rel:"noopener noreferrer"},U={href:"https://www.aliyundrive.com/s/SGmyMwGpsZv%EF%BC%88%E6%95%99%E7%A8%8B%E9%85%8D%E5%A5%97%E8%B5%84%E6%96%99%E8%AF%B7%E4%BB%8E%E7%99%BE%E5%BA%A6%E7%BD%91%E7%9B%98%E4%B8%8B%E8%BD%BD%EF%BC%89",target:"_blank",rel:"noopener noreferrer"},W={href:"https://gitee.com/fankozhang/ssm/tree/master/%E6%95%99%E6%A1%88",target:"_blank",rel:"noopener noreferrer"},H={href:"https://mp.weixin.qq.com/s/jEGLpIA9HWOdN3WOq46K1g",target:"_blank",rel:"noopener noreferrer"},P=e("h2",{id:"mysql",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mysql","aria-hidden":"true"},"#"),n(" mysql")],-1),G={href:"https://www.bilibili.com/video/BV1iq4y1u7vj?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/Fankozhang/mySource/tree/main/%E8%B5%84%E6%96%99%E5%90%88%E8%AE%A1/mysql/%E5%B0%9A%E7%A1%85%E8%B0%B7%E8%A7%86%E9%A2%91%E8%80%81%E5%B8%88%E7%AC%94%E8%AE%B0",target:"_blank",rel:"noopener noreferrer"},J={href:"https://blog.csdn.net/qq_47540091/article/details/121875715",target:"_blank",rel:"noopener noreferrer"},Y=e("em",null,"狂神 mysql",-1),Q=t(`<h3 id="查询结构" tabindex="-1"><a class="header-anchor" href="#查询结构" aria-hidden="true">#</a> 查询结构：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#方式1：
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="select-查询时的执行顺序" tabindex="-1"><a class="header-anchor" href="#select-查询时的执行顺序" aria-hidden="true">#</a> SELECT 查询时的执行顺序</h3><p>你需要记住 SELECT 查询时的两个顺序：</p><p><strong>1. 关键字的顺序是不能颠倒的：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY ... LIMIT...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2.SELECT 语句的执行顺序</strong>（在 MySQL 和 Oracle 中，SELECT 执行顺序基本相同）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM -&gt; WHERE -&gt; GROUP BY -&gt; HAVING -&gt; SELECT 的字段 -&gt; DISTINCT -&gt; ORDER BY -&gt; LIMIT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="我的前后端分离测试项目" tabindex="-1"><a class="header-anchor" href="#我的前后端分离测试项目" aria-hidden="true">#</a> 我的前后端分离测试项目</h2>`,9),K={href:"https://gitee.com/fankozhang/my-testing-warehouse/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"};function Z(X,$){const a=l("ExternalLinkIcon"),s=l("pluginManagement");return d(),o("div",null,[y,e("p",null,[e("a",C,[n("(210条消息) 【已解决】Error: could not open `C:\\Program Files\\Java\\jre1.8.0_121\\lib\\amd64\\jvm.cfg‘_来老铁干了这碗代码的博客-CSDN博客"),i(a)])]),M,w,B,I,e("p",null,[e("a",k,[n("使用IDEA 创建 SpringBoot 多模块项目_idea 建springboot module-CSDN博客"),i(a)])]),q,e("p",null,[n("删除pom.xml中 "),i(s),n(" 标签和里面的内容 plugins标签中加了jetty和tomcat,可以测试项目运行")]),A,e("p",null,[n("( compile命令编译 package命令打包 ) 访问路径为 ： jetty "),e("a",D,[n("http://localhost:8080/test"),i(a)]),n(" tomcat "),e("a",R,[n("http://localhost:8081/test"),i(a)])]),O,e("p",null,[n("决定看ssm框架视频， "),e("a",N,[n("【尚硅谷】SSM框架全套教程，MyBatis+Spring+SpringMVC+SSM整合一套通关_哔哩哔哩_bilibili"),i(a)]),n(" 。")]),e("p",null,[n("需要资料当然要到评论区取找了，资源链接："),e("a",L,[n("https://pan.baidu.com/s/1jx1hRb7ugMFFJP81Fvcy1Q?pwd=yyds"),i(a)]),n(" 提取码：yyds 。 "),e("a",F,[n("https://gitee.com/zhengguangqq/ssm-md"),i(a)]),n(" 尚硅谷的ssm md格式笔记")]),e("p",null,[n("尚硅谷SSM新版视频教程-2023版 B站直达："),e("a",z,[n("https://www.bilibili.com/video/BV1AP411s7D7"),i(a)]),n(" 百度网盘："),e("a",T,[n("https://pan.baidu.com/s/12roPcN1oBmDKk3wwnMSu_A?pwd=yyds"),i(a)]),n(" 提取码：yyds 阿里云盘："),e("a",U,[n("https://www.aliyundrive.com/s/SGmyMwGpsZv（教程配套资料请从百度网盘下载）"),i(a)])]),e("p",null,[n("资料 ： "),e("a",W,[n("教案 · 东方凝洛/尚硅谷ssm-springboot-2023视频资料 - 码云 - 开源中国 (gitee.com)"),i(a)])]),e("p",null,[e("a",H,[n("MyBatis 动态 SQL 最全教程，这样写 SQL 太爽了！ (qq.com)"),i(a)])]),P,e("p",null,[n("视频学习： "),e("a",G,[n("01-MySQL教程简介_哔哩哔哩_bilibili"),i(a)]),n(" 资料： "),e("a",V,[n("/mysql/尚硅谷视频老师笔记 "),i(a)])]),e("p",null,[e("a",J,[n("【狂神-MySQL】MySQL全部详细知识点整理（共10章）"),Y,n("-Blue.的博客-CSDN博客"),i(a)])]),Q,e("p",null,[e("a",K,[n("README.md · 东方凝洛/我的测试仓库 - Gitee.com"),i(a)])])])}const ie=r(j,[["render",Z],["__file","basic.html.vue"]]);export{ie as default};
