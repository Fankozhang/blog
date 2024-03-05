import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as o,a as e,b as n,e as i,f as t,r as l}from"./app.d07e8db8.js";const c="/blog/javaCreateSimple.png",v="/blog/javaWebCreate.png",m="/blog/javaWebCreate2.png",p="/blog/javaWebCreate3.png",u="/blog/javaWebCreate4.png",b="/blog/javaModuleCreate.png",h="/blog/javaModuleCreate2.png",g="/blog/javaModuleCreate3.png",_="/blog/javaModuleCreate4.png",f="/blog/javaModuleCreate5.png",x="/blog/javaModuleCreate6.png",y="/blog/javaModuleCreate7.png",E="/blog/javaModuleCreate8.png",j={},S=t('<h1 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h1><h2 id="idea快捷键" tabindex="-1"><a class="header-anchor" href="#idea快捷键" aria-hidden="true">#</a> idea快捷键</h2><p>ctrl+o : 查看类中所有方法</p><h2 id="输入-java-命令报错" tabindex="-1"><a class="header-anchor" href="#输入-java-命令报错" aria-hidden="true">#</a> 输入 java 命令报错</h2>',4),w={href:"https://blog.csdn.net/weixin_43899069/article/details/115796539",target:"_blank",rel:"noopener noreferrer"},C=e("p",null,"java升级时，会在环境变量的path路径中增加以下两条路径，与我们安装java的路径重合。",-1),M=e("p",null,[e("strong",null,"解决方法："),n(" 删掉环境变量中的这两条语句， 同时找到对应文件，删除即可。")],-1),B=e("p",null,"C:\\ProgramData\\Oracle\\Java\\javapath",-1),k=e("p",null,"C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath",-1),q=e("h2",{id:"jdk",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#jdk","aria-hidden":"true"},"#"),n(" jdk")],-1),I={href:"https://zhuanlan.zhihu.com/p/673241258",target:"_blank",rel:"noopener noreferrer"},A={href:"https://blog.csdn.net/tangthh123/article/details/106837999",target:"_blank",rel:"noopener noreferrer"},D=t('<h2 id="idea创建java项目-maven" tabindex="-1"><a class="header-anchor" href="#idea创建java项目-maven" aria-hidden="true">#</a> <strong>idea创建java项目（maven）</strong></h2><h3 id="_1-创建普通java项目-quickstart" tabindex="-1"><a class="header-anchor" href="#_1-创建普通java项目-quickstart" aria-hidden="true">#</a> <strong>1 创建普通Java项目（quickstart）</strong></h3><p><img src="'+c+'" alt="javaCreateSimple" loading="lazy"></p><h3 id="_2创建普通java-web项目-maven-archetype-webapp" tabindex="-1"><a class="header-anchor" href="#_2创建普通java-web项目-maven-archetype-webapp" aria-hidden="true">#</a> 2创建普通Java web项目（maven-archetype-webapp）</h3><p><img src="'+v+`" alt="javaWebCreate" loading="lazy"></p><p>pom.xml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;properties&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),z=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;build&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+'" alt="javaWebCreate2" loading="lazy"><img src="'+p+'" alt="javaWebCreate3" loading="lazy"><img src="'+u+'" alt="javaWebCreate4" loading="lazy"></p>',2),R={href:"http://localhost:8080/test",target:"_blank",rel:"noopener noreferrer"},O={href:"http://localhost:8081/test",target:"_blank",rel:"noopener noreferrer"},L=t('<h3 id="_3创建多模块项目" tabindex="-1"><a class="header-anchor" href="#_3创建多模块项目" aria-hidden="true">#</a> <strong>3创建多模块项目</strong></h3><p>创建项目 项目名 maven-parent</p><p><img src="'+b+'" alt="javaModuleCreate" loading="lazy"></p><p>创建 module 3个</p><p><img src="'+h+'" alt="javaModuleCreate2" loading="lazy"></p><p><img src="'+g+'" alt="javaModuleCreate3" loading="lazy"></p><p>maven-dao maven-service maven-controller（3个模块） 创建maven-dao maven-service <strong>用quickstart</strong> 创建maven-controller <strong>用maven-archetype-webapp</strong></p><p><strong>生成目录结构</strong></p><p><img src="'+_+'" alt="javaModuleCreate4" loading="lazy"></p><p>修改所有的子模块的pom.xml配置</p><p><img src="'+f+`" alt="javaModuleCreate5" loading="lazy"></p><p>UserDao</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package org.example.dao;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在三个module的pom.xml引入相关联模块的依赖</p><p>dao不用引</p><p><img src="`+x+'" alt="javaModuleCreate6" loading="lazy"></p><p><img src="'+y+'" alt="javaModuleCreate7" loading="lazy"></p><p><img src="'+E+'" alt="javaModuleCreate8" loading="lazy"></p><p>配置maven命令，启动</p><h2 id="java-ssm框架" tabindex="-1"><a class="header-anchor" href="#java-ssm框架" aria-hidden="true">#</a> java SSM框架</h2>',24),N={href:"https://www.bilibili.com/video/BV1Ya411S7aT/?spm_id_from=333.337.search-card.all.click&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},F={href:"https://pan.baidu.com/s/1jx1hRb7ugMFFJP81Fvcy1Q?pwd=yyds",target:"_blank",rel:"noopener noreferrer"},P={href:"https://gitee.com/zhengguangqq/ssm-md",target:"_blank",rel:"noopener noreferrer"},T={href:"https://www.bilibili.com/video/BV1AP411s7D7",target:"_blank",rel:"noopener noreferrer"},U={href:"https://pan.baidu.com/s/12roPcN1oBmDKk3wwnMSu_A?pwd=yyds",target:"_blank",rel:"noopener noreferrer"},V={href:"https://www.aliyundrive.com/s/SGmyMwGpsZv%EF%BC%88%E6%95%99%E7%A8%8B%E9%85%8D%E5%A5%97%E8%B5%84%E6%96%99%E8%AF%B7%E4%BB%8E%E7%99%BE%E5%BA%A6%E7%BD%91%E7%9B%98%E4%B8%8B%E8%BD%BD%EF%BC%89",target:"_blank",rel:"noopener noreferrer"},W={href:"https://gitee.com/fankozhang/ssm/tree/master/%E6%95%99%E6%A1%88",target:"_blank",rel:"noopener noreferrer"},G=e("h3",{id:"mybatis",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mybatis","aria-hidden":"true"},"#"),n(" myBatis")],-1),H={href:"https://mybatis.org/mybatis-3/zh_CN/index.html",target:"_blank",rel:"noopener noreferrer"},J={href:"https://mybatis.net.cn/",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://mp.weixin.qq.com/s/jEGLpIA9HWOdN3WOq46K1g",target:"_blank",rel:"noopener noreferrer"},Y=e("h3",{id:"mybatis-plus",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mybatis-plus","aria-hidden":"true"},"#"),n(" MyBatis-plus")],-1),K={href:"https://baomidou.com/pages/24112f/",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://mp.weixin.qq.com/s/kKH0c2GTtd_c2Ptqh-zJbA",target:"_blank",rel:"noopener noreferrer"},X={href:"https://b11et3un53m.feishu.cn/wiki/PsyawI04ei2FQykqfcPcmd7Dnsc",target:"_blank",rel:"noopener noreferrer"},$=e("h3",{id:"mybatis-flex",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mybatis-flex","aria-hidden":"true"},"#"),n(" mybatis-flex")],-1),ee={href:"https://mybatis-flex.com/zh/intro/what-is-mybatisflex.html",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://gitee.com/mybatis-flex/mybatis-flex#english--%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://www.bilibili.com/video/BV11h411A7cU/?spm_id_from=333.788",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://zhuanlan.zhihu.com/p/669378593",target:"_blank",rel:"noopener noreferrer"},te={href:"https://juejin.cn/post/7306192146768183311#heading-7",target:"_blank",rel:"noopener noreferrer"},le=e("h2",{id:"mysql",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mysql","aria-hidden":"true"},"#"),n(" mysql")],-1),se={href:"https://www.bilibili.com/video/BV1iq4y1u7vj?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},re={href:"https://github.com/Fankozhang/mySource/tree/main/%E8%B5%84%E6%96%99%E5%90%88%E8%AE%A1/mysql/%E5%B0%9A%E7%A1%85%E8%B0%B7%E8%A7%86%E9%A2%91%E8%80%81%E5%B8%88%E7%AC%94%E8%AE%B0",target:"_blank",rel:"noopener noreferrer"},de={href:"https://blog.csdn.net/qq_47540091/article/details/121875715",target:"_blank",rel:"noopener noreferrer"},oe=e("em",null,"狂神 mysql",-1),ce=t(`<h3 id="查询结构" tabindex="-1"><a class="header-anchor" href="#查询结构" aria-hidden="true">#</a> 查询结构：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#方式1：
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mysql建表时注意什么" tabindex="-1"><a class="header-anchor" href="#mysql建表时注意什么" aria-hidden="true">#</a> MySQL建表时注意什么？</h3><p>MVSQL建表的经验有很多，下边列举一些：</p>`,10),ve=e("li",null,"1、注意选择存储引擎，如果要支持事务需要选择InnoDB。",-1),me=e("li",null,"2、注意字段类型的选择，对于日期类型如果要记录时分秒建议使用datetime,只记录年月日使用date类型，对于 字符类型的选择，固定长度字段选择char,不固定长度的字段选择varchar,varchar比char节省空间但速度没有 char快；对于内容介绍类的长广文本字段使用text或longtext类型：如果存储图片等二进制数据使用blob或 longblob类型；对金额字段建议使用DECIMAL；对于数值类型的字段在确保取值范围足够的前提下尽量使用占用 空间较小的类型",-1),pe=e("li",null,"3、主键字段建议使用自然主键，不要有业务意义，建议使用int unsigned类型，特殊场景使用bigint类型。",-1),ue=e("li",null,"4、如果要存储text、blob字段建议单独建一张表，使用外键关联。",-1),be=e("li",null,"5、尽量不要定义外键，保证表的独立性，可以存在外键意义的字段。",-1),he=e("li",null,"6、设置字段默认值，比如：状态、创建时间等。",-1),ge=e("li",null,"7、每个字段写清楚注释。",-1),_e=e("li",null,"8、注意字段的约束，比如：非空、唯一、主键等",-1),fe={href:"https://blog.csdn.net/m0_48805880/article/details/126423801",target:"_blank",rel:"noopener noreferrer"},xe=e("h2",{id:"我的前后端分离测试项目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#我的前后端分离测试项目","aria-hidden":"true"},"#"),n(" 我的前后端分离测试项目")],-1),ye={href:"https://gitee.com/fankozhang/my-testing-warehouse/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"};function Ee(je,Se){const a=l("ExternalLinkIcon"),s=l("pluginManagement");return d(),o("div",null,[S,e("p",null,[e("a",w,[n("(210条消息) 【已解决】Error: could not open `C:\\Program Files\\Java\\jre1.8.0_121\\lib\\amd64\\jvm.cfg‘_来老铁干了这碗代码的博客-CSDN博客"),i(a)])]),C,M,B,k,q,e("p",null,[n("GraalVM-jdk之Windows详细安装及使用教程 "),e("a",I,[n("https://zhuanlan.zhihu.com/p/673241258"),i(a)])]),e("p",null,[e("a",A,[n("使用IDEA 创建 SpringBoot 多模块项目_idea 建springboot module-CSDN博客"),i(a)])]),D,e("p",null,[n("删除pom.xml中 "),i(s),n(" 标签和里面的内容 plugins标签中加了jetty和tomcat,可以测试项目运行")]),z,e("p",null,[n("( compile命令编译 package命令打包 ) 访问路径为 ： jetty "),e("a",R,[n("http://localhost:8080/test"),i(a)]),n(" tomcat "),e("a",O,[n("http://localhost:8081/test"),i(a)])]),L,e("p",null,[n("决定看ssm框架视频， "),e("a",N,[n("【尚硅谷】SSM框架全套教程，MyBatis+Spring+SpringMVC+SSM整合一套通关_哔哩哔哩_bilibili"),i(a)]),n(" 。")]),e("p",null,[n("需要资料当然要到评论区取找了，资源链接："),e("a",F,[n("https://pan.baidu.com/s/1jx1hRb7ugMFFJP81Fvcy1Q?pwd=yyds"),i(a)]),n(" 提取码：yyds 。 "),e("a",P,[n("https://gitee.com/zhengguangqq/ssm-md"),i(a)]),n(" 尚硅谷的ssm md格式笔记")]),e("p",null,[n("尚硅谷SSM新版视频教程-2023版 B站直达："),e("a",T,[n("https://www.bilibili.com/video/BV1AP411s7D7"),i(a)]),n(" 百度网盘："),e("a",U,[n("https://pan.baidu.com/s/12roPcN1oBmDKk3wwnMSu_A?pwd=yyds"),i(a)]),n(" 提取码：yyds 阿里云盘："),e("a",V,[n("https://www.aliyundrive.com/s/SGmyMwGpsZv（教程配套资料请从百度网盘下载）"),i(a)])]),e("p",null,[n("资料 ： "),e("a",W,[n("教案 · 东方凝洛/尚硅谷ssm-springboot-2023视频资料 - 码云 - 开源中国 (gitee.com)"),i(a)])]),G,e("p",null,[n("官网："),e("a",H,[n("mybatis – MyBatis 3 | 简介"),i(a)]),n(),e("a",J,[n("MyBatis中文网"),i(a)])]),e("p",null,[e("a",Q,[n("MyBatis 动态 SQL 最全教程，这样写 SQL 太爽了！ (qq.com)"),i(a)])]),Y,e("p",null,[n("官网： "),e("a",K,[n("简介 | MyBatis-Plus (baomidou.com)"),i(a)])]),e("p",null,[e("a",Z,[n("MyBatis-plus最详细的入门使用教程来了 (qq.com)"),i(a)])]),e("p",null,[n("黑马视频："),e("a",X,[n("day01-MybatisPlus - 飞书云文档 (feishu.cn)"),i(a)])]),$,e("p",null,[n("官网："),e("a",ee,[n("https://mybatis-flex.com/zh/intro/what-is-mybatisflex.html"),i(a)])]),e("p",null,[n("仓库："),e("a",ne,[n("https://gitee.com/mybatis-flex/mybatis-flex#english--简体中文"),i(a)])]),e("p",null,[n("视频教程： "),e("a",ie,[n("https://www.bilibili.com/video/BV11h411A7cU/?spm_id_from=333.788"),i(a)])]),e("p",null,[n("和其他mybatis框架的区别："),e("a",ae,[n("https://zhuanlan.zhihu.com/p/669378593"),i(a)])]),e("p",null,[n("基础使用："),e("a",te,[n("https://juejin.cn/post/7306192146768183311#heading-7"),i(a)])]),le,e("p",null,[n("视频学习： "),e("a",se,[n("01-MySQL教程简介_哔哩哔哩_bilibili"),i(a)]),n(" 资料： "),e("a",re,[n("/mysql/尚硅谷视频老师笔记 "),i(a)])]),e("p",null,[e("a",de,[n("【狂神-MySQL】MySQL全部详细知识点整理（共10章）"),oe,n("-Blue.的博客-CSDN博客"),i(a)])]),ce,e("ul",null,[ve,me,pe,ue,be,he,ge,_e,e("li",null,[n("时间类型选择："),e("a",fe,[n("https://blog.csdn.net/m0_48805880/article/details/126423801"),i(a)]),n(" （推荐优先使用 datetime ）")])]),xe,e("p",null,[e("a",ye,[n("README.md · 东方凝洛/我的测试仓库 - Gitee.com"),i(a)])])])}const Me=r(j,[["render",Ee],["__file","basic.html.vue"]]);export{Me as default};
