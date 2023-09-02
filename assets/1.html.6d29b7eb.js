import{_ as l,a as o,b as c,c as u,d,e as r,f as v,g as k,h as m,i as b,j as g,k as h,l as y}from"./javaModuleCreate8.27a0c1be.js";import{_ as f}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as x,c as S,a as n,b as s,e as a,f as t,r as i}from"./app.f8c0a96f.js";const _={},w=t('<h1 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h1><h2 id="idea快捷键" tabindex="-1"><a class="header-anchor" href="#idea快捷键" aria-hidden="true">#</a> idea快捷键</h2><p>ctrl+o : 查看类中所有方法</p><h2 id="输入-java-命令报错" tabindex="-1"><a class="header-anchor" href="#输入-java-命令报错" aria-hidden="true">#</a> 输入 java 命令报错</h2>',4),q={href:"https://blog.csdn.net/weixin_43899069/article/details/115796539",target:"_blank",rel:"noopener noreferrer"},B=t('<p>java升级时，会在环境变量的path路径中增加以下两条路径，与我们安装java的路径重合。</p><p><strong>解决方法：</strong> 删掉环境变量中的这两条语句， 同时找到对应文件，删除即可。</p><p>C:\\ProgramData\\Oracle\\Java\\javapath</p><p>C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath</p><h2 id="idea创建java项目-maven" tabindex="-1"><a class="header-anchor" href="#idea创建java项目-maven" aria-hidden="true">#</a> <strong>idea创建java项目（maven）</strong></h2><h3 id="_1-创建普通java项目-quickstart" tabindex="-1"><a class="header-anchor" href="#_1-创建普通java项目-quickstart" aria-hidden="true">#</a> <strong>1 创建普通Java项目（quickstart）</strong></h3><p><img src="'+l+'" alt="javaCreateSimple" loading="lazy"></p><h3 id="_2创建普通java-web项目-maven-archetype-webapp" tabindex="-1"><a class="header-anchor" href="#_2创建普通java-web项目-maven-archetype-webapp" aria-hidden="true">#</a> 2创建普通Java web项目（maven-archetype-webapp）</h3><p><img src="'+o+`" alt="javaWebCreate" loading="lazy"></p><p>pom.xml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;properties&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),I=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;build&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+'" alt="javaWebCreate2" loading="lazy"><img src="'+u+'" alt="javaWebCreate3" loading="lazy"><img src="'+d+'" alt="javaWebCreate4" loading="lazy"></p>',2),j={href:"http://localhost:8080/test",target:"_blank",rel:"noopener noreferrer"},M={href:"http://localhost:8081/test",target:"_blank",rel:"noopener noreferrer"},D=t('<h3 id="_3创建多模块项目" tabindex="-1"><a class="header-anchor" href="#_3创建多模块项目" aria-hidden="true">#</a> <strong>3创建多模块项目</strong></h3><p>创建项目 项目名 maven-parent</p><p><img src="'+r+'" alt="javaModuleCreate" loading="lazy"></p><p>创建 module 3个</p><p><img src="'+v+'" alt="javaModuleCreate2" loading="lazy"></p><p><img src="'+k+'" alt="javaModuleCreate3" loading="lazy"></p><p>maven-dao maven-service maven-controller（3个模块） 创建maven-dao maven-service <strong>用quickstart</strong> 创建maven-controller <strong>用maven-archetype-webapp</strong></p><p><strong>生成目录结构</strong></p><p><img src="'+m+'" alt="javaModuleCreate4" loading="lazy"></p><p>修改所有的子模块的pom.xml配置</p><p><img src="'+b+`" alt="javaModuleCreate5" loading="lazy"></p><p>UserDao</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package org.example.dao;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在三个module的pom.xml引入相关联模块的依赖</p><p>dao不用引</p><p><img src="`+g+'" alt="javaModuleCreate6" loading="lazy"></p><p><img src="'+h+'" alt="javaModuleCreate7" loading="lazy"></p><p><img src="'+y+'" alt="javaModuleCreate8" loading="lazy"></p><p>配置maven命令，启动</p><h2 id="java-ssm框架" tabindex="-1"><a class="header-anchor" href="#java-ssm框架" aria-hidden="true">#</a> java SSM框架</h2>',24),T={href:"https://www.bilibili.com/video/BV1Ya411S7aT/?spm_id_from=333.337.search-card.all.click&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},P={href:"https://pan.baidu.com/s/1jx1hRb7ugMFFJP81Fvcy1Q?pwd=yyds",target:"_blank",rel:"noopener noreferrer"},C={href:"https://gitee.com/zhengguangqq/ssm-md",target:"_blank",rel:"noopener noreferrer"},R=n("h2",{id:"java-springboot",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#java-springboot","aria-hidden":"true"},"#"),s(" java springboot")],-1),A={href:"https://jingyan.baidu.com/article/48b558e35cbfc73e39c09a4e.html",target:"_blank",rel:"noopener noreferrer"},E=n("p",null,"java： 错误：无效的源发行版：14",-1),N={href:"https://blog.csdn.net/weixin_43785284/article/details/122015400",target:"_blank",rel:"noopener noreferrer"},L=n("p",null,"JAVA‘无效目标发行版 17’的解决方案",-1),z={href:"https://blog.csdn.net/m0_67391121/article/details/126020133",target:"_blank",rel:"noopener noreferrer"},O=t(`<h3 id="springboot整合junit" tabindex="-1"><a class="header-anchor" href="#springboot整合junit" aria-hidden="true">#</a> springBoot整合junit</h3><p>1.导入测试对应的starter 2,测试类使用@SpringBootTest修饰 3,使用自动装配的形式添加要测试的对象</p><p>springBoot项目创建会自动生成测试类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">BookDao</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span></span><span class="token punctuation">;</span>

<span class="token comment">// 测试类使用@SpringBootTest修饰</span>
<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">DemoApplicationTests</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1注入要测试的对象</span>
	<span class="token annotation punctuation">@Autowired</span>
	<span class="token keyword">private</span> <span class="token class-name">BookDao</span> bookDao<span class="token punctuation">;</span>

    
    <span class="token comment">//在需要测试的方法上添加@Test注解，然后找到run该方法，点击可直接运行，测试该方法有无bug。</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//2.执行要测试的对象对应的方法</span>
		bookDao<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1,测试类如果存在于引导类所在包或子包中无需指定引导类 2.测试类如果不存在于引导类所在的包或子包中需要通过@SpringBootTest(c1asses= ***.class)属性指定引导类</p><h3 id="整合mybatis-数据库配置" tabindex="-1"><a class="header-anchor" href="#整合mybatis-数据库配置" aria-hidden="true">#</a> 整合myBatis （数据库配置）</h3><p>该心配置：数据库连接相关信息（连什么？连谁？什么权限) 映射配置：SQL映射（ML/注解)</p><p>建模块时可勾选 SQL-&gt;MyBatis Framework,MySQL Driver ,不勾选则自己导入坐标</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        &lt;!--1.导入对应的starter--&gt;
        
        &lt;dependency&gt;
			&lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;
			&lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;
			&lt;version&gt;3.0.0&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;com.mysql&lt;/groupId&gt;
			&lt;artifactId&gt;mysql-connector-j&lt;/artifactId&gt;
			&lt;scope&gt;runtime&lt;/scope&gt;
		&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>application.yml配置信息</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/mybatis<span class="token punctuation">?</span>serverTimezone=GMT%2B8<span class="token important">&amp;useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false&amp;allowPublicKeyRetrieval=true</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行报错大多都是因为 application.yml 配置信息填写有误</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserDao</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from user where id = #{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">getById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意事项：</p><p>1,勾选MyBatis技术，也就是导入MyBatis对应的starter 2.数据库连接相关信息转换成配置 3.数据库SQL映射需要添加@Mapper被容器识别到</p><h3 id="整合mybatis-plus" tabindex="-1"><a class="header-anchor" href="#整合mybatis-plus" aria-hidden="true">#</a> 整合MyBatis-Plus</h3><p>MyBatis-Plus与MyBatis区别: 导入坐标不同 数据层实现简化</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        &lt;dependency&gt;
			&lt;groupId&gt;com.baomidou&lt;/groupId&gt;
			&lt;artifactId&gt;mybatis-plus-boot-starter&lt;/artifactId&gt;
			&lt;version&gt;3.4.3&lt;/version&gt;
		&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Mapper
public interface UserDao extends BaseMapper&lt;User&gt; {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 设置MP相关的配置(非必要)
# 使用mybatis_plus时给所有表加前缀（搜索相关知识学习）
mybatis-plus:
  global-config:
    db-config:
      table-prefix: my_
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1,手工添加MyBatis-Plus对应的starter 2.数据层接口使用BaseMapperi简化开发 3.需要使用的第三方技术无法通过勾选确定时，需要手工添加坐标</p><h3 id="整合-druid" tabindex="-1"><a class="header-anchor" href="#整合-druid" aria-hidden="true">#</a> 整合 Druid</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
			&lt;groupId&gt;com.alibaba&lt;/groupId&gt;
			&lt;artifactId&gt;druid-spring-boot-starter&lt;/artifactId&gt;
			&lt;version&gt;1.2.6&lt;/version&gt;
		&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置 druid 数据源</p><p>application.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">druid</span><span class="token punctuation">:</span>
      <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/mybatis<span class="token punctuation">?</span>serverTimezone=GMT%2B8<span class="token important">&amp;useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false&amp;allowPublicKeyRetrieval=true</span>
      <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
      <span class="token key atrule">username</span><span class="token punctuation">:</span> root
      <span class="token key atrule">password</span><span class="token punctuation">:</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ssmp-整合案例" tabindex="-1"><a class="header-anchor" href="#ssmp-整合案例" aria-hidden="true">#</a> SSMP 整合案例</h3><p>maven导入相关依赖</p><h4 id="实体类创建-l0mbok" tabindex="-1"><a class="header-anchor" href="#实体类创建-l0mbok" aria-hidden="true">#</a> 实体类创建(l0mbok)</h4><p><strong>Book.class</strong></p><p>Lombok,一个Java类库，提供了一组注解，简化P0J0实体类开发</p><p>lombok版本由SpringBoot提供，导入依赖无需指定版本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
			&lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
			&lt;artifactId&gt;lombok&lt;/artifactId&gt;
		&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用注解：@Data</p><p>为当前实体类在编译期设置对应的get/set方法，toString.方法，hashCode.方法，equals方法等</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Data
public class Book {
    private Integer id;
    private String name;
    private String author;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数据层开发" tabindex="-1"><a class="header-anchor" href="#数据层开发" aria-hidden="true">#</a> 数据层开发</h4><p>导入配置数据库依赖和连接信息</p><p><em><strong><u>myBatis写法</u></strong></em></p><p><strong>bookDao Interface</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">BookDao</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from book where id = #{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">Book</span> <span class="token function">getBookById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//  myBatis-plus 写法简化</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">SpringMybatisApplicationTests</span> <span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Autowired</span>
	<span class="token keyword">private</span> <span class="token class-name">BookDao</span> bookDao<span class="token punctuation">;</span>
	
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">void</span> <span class="token function">bookTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bookDao<span class="token punctuation">.</span><span class="token function">getBookById</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果： Book(id=1, name=西游记, author=吴承恩)</p><p><em><strong><u>myBatis-plus写法</u></strong></em></p><p><strong>bookDao Interface</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Mapper
public interface BookDao extends BaseMapper&lt;Book&gt; {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="查询测试" tabindex="-1"><a class="header-anchor" href="#查询测试" aria-hidden="true">#</a> 查询测试：</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">SpringMybatisApplicationTests</span> <span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Autowired</span>
	<span class="token keyword">private</span> <span class="token class-name">BookDao</span> bookDao<span class="token punctuation">;</span>

    <span class="token comment">// 查询 id 为 1 的数据</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">void</span> <span class="token function">bookTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bookDao<span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
    <span class="token comment">// 查询表中所有数据</span>
    <span class="token annotation punctuation">@Test</span>
	<span class="token keyword">void</span> <span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bookDao<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="新增保存测试" tabindex="-1"><a class="header-anchor" href="#新增保存测试" aria-hidden="true">#</a> 新增保存测试：</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
	<span class="token keyword">void</span> <span class="token function">testSave</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">Book</span> book <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		book<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;红楼梦&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		book<span class="token punctuation">.</span><span class="token function">setAuthor</span><span class="token punctuation">(</span><span class="token string">&quot;施耐庵&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		bookDao<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>book<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>报错 ：Could not set property &#39;id&#39; of &#39;class com.example.spring_mybatis.domain.Book&#39; with value &#39;1657285673607540737&#39; Cause: java.lang.IllegalArgumentException: argument type mismatch</p><p>myBatis的id自增测策略 和 数据库的不同导致的报错，解决方法</p><p>application 增加配置（id-type 设置）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mybatis-plus:
  global-config:
    db-config:
      id-type: auto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="修改测试" tabindex="-1"><a class="header-anchor" href="#修改测试" aria-hidden="true">#</a> 修改测试：</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 将数据库 id 为 2 的数据做更新</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">void</span> <span class="token function">testUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">Book</span> book <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		book<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		book<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;三国&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		book<span class="token punctuation">.</span><span class="token function">setAuthor</span><span class="token punctuation">(</span><span class="token string">&quot;施耐庵&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		bookDao<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>book<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="删除测试" tabindex="-1"><a class="header-anchor" href="#删除测试" aria-hidden="true">#</a> 删除测试：</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 删除数据库 id 为 4 的那条数据</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">void</span> <span class="token function">testDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		bookDao<span class="token punctuation">.</span><span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：1,手工导入starter.坐标（2个) 2,配置数据源与MyBatisPlus对应的配置 3.开发Dao接口（继承BaseMapper) 4.制作测试类测试Dao功能是否有效</p><h5 id="分页查询测试" tabindex="-1"><a class="header-anchor" href="#分页查询测试" aria-hidden="true">#</a> 分页查询测试：</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
	<span class="token keyword">void</span> <span class="token function">testGetPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">IPage</span> page <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Page</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		bookDao<span class="token punctuation">.</span><span class="token function">selectPage</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 获取分页信息</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">getCurrent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">getTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">getPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">getRecords</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mybatis-plus 使用分页查询时要用到 分页查询的拦截器</p><p>新建 config/MpConfig</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// @Configuration注解必须要有</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MpConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">MybatisPlusInterceptor</span> <span class="token function">mybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">MybatisPlusInterceptor</span> mybatisPlusInterceptor<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">MybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       mybatisPlusInterceptor<span class="token punctuation">.</span><span class="token function">addInnerInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PaginationInnerInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> mybatisPlusInterceptor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1,使用IPage封装分页数据 2,分页操作依赖MyBatisPlus:分页拦截器实现功能 3.借助MyBatisPlus日志查阅执行SQL语句</p><h5 id="按条件查询测试" tabindex="-1"><a class="header-anchor" href="#按条件查询测试" aria-hidden="true">#</a> 按条件查询测试：</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 查询 name 字段 为 西游记 的数据，类似select * from book where name like %spring%</span>
<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">void</span> <span class="token function">testby</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> queryWrapper<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		queryWrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;西游记&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bookDao<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span>queryWrapper<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token comment">// 推荐使用这种写法</span>
<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">void</span> <span class="token function">testby2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">String</span> name<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> lambdaQueryWrapper<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 当传入的参数不为 null 才执行按参数查询</span>
		lambdaQueryWrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span>name<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token class-name">Book</span><span class="token operator">::</span><span class="token function">getName</span><span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bookDao<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span>lambdaQueryWrapper<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="为方便调试可以开启mybatisplus的日志" tabindex="-1"><a class="header-anchor" href="#为方便调试可以开启mybatisplus的日志" aria-hidden="true">#</a> 为方便调试可以开启MyBatisPlus的日志</h4><p>application.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
  <span class="token key atrule">global-config</span><span class="token punctuation">:</span>
    <span class="token key atrule">db-config</span><span class="token punctuation">:</span>
      <span class="token key atrule">id-type</span><span class="token punctuation">:</span> auto
  <span class="token key atrule">configuration</span><span class="token punctuation">:</span>
    <span class="token key atrule">log-impl</span><span class="token punctuation">:</span> org.apache.ibatis.logging.stdout.StdOutImpl

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="业务层开发" tabindex="-1"><a class="header-anchor" href="#业务层开发" aria-hidden="true">#</a> 业务层开发</h4><h5 id="普通的业务开发操作" tabindex="-1"><a class="header-anchor" href="#普通的业务开发操作" aria-hidden="true">#</a> 普通的业务开发操作</h5><p>新建 service/BookService Interface</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface BookService {
    Boolean save(Book book);
    Boolean update(Book book);
    Boolean delete(Integer id);
    Book getById(Integer id);
    List&lt;Book&gt; getAll();
    IPage&lt;Book&gt; getPage(Integer currentPage,Integer pageSize);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>service/Impl/ServiceImpl class</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// @Service 定义成业务层service的Bean
@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookDao bookDao;

    @Override
    public Boolean save(Book book) {
        return bookDao.insert(book)&gt;0;
    }

    @Override
    public Boolean update(Book book) {
        return bookDao.insert(book)&gt;0;
    }

    @Override
    public Boolean delete(Integer id) {
        return bookDao.deleteById(id)&gt;0;
    }

    @Override
    public Book getById(Integer id) {
        return bookDao.selectById(id);
    }

    @Override
    public List&lt;Book&gt; getAll() {
        return bookDao.selectList(null);
    }
    
    @Override
    public IPage&lt;Book&gt; getPage(Integer currentPage, Integer pageSize) {
        IPage page = new Page(currentPage,pageSize);
        return bookDao.selectPage(page,null);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：（和之前的数据层测试差不多）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@SpringBootTest
public class BookServiceTest {
    // 业务层测试
    @Autowired
    private BookService bookService;
    @Test
    void testGetById(){
        System.out.println(bookService.getById(1));
    }

    @Test
    void selectAll(){
        System.out.println(bookService.getAll());
    }

    @Test
    void testSave(){
        Book book = new Book();
        book.setName(&quot;红楼梦&quot;);
        book.setAuthor(&quot;施耐庵&quot;);
        bookService.save(book);
    }

    // 将数据库 id 为 2 的数据做更新
    @Test
    void testUpdate(){
        Book book = new Book();
        book.setId(2);
        book.setName(&quot;三国&quot;);
        book.setAuthor(&quot;施耐庵&quot;);
        bookService.update(book);
    }

    // 删除数据库 id 为 1 的那条数据
    @Test
    void testDelete() {
        bookService.delete(1);
    }
    
    // 分页查询
     @Test
    void testGetPage(){
        IPage page=bookService.getPage(1,3);
        System.out.println(page.getCurrent());
        System.out.println(page.getSize());
        System.out.println(page.getTotal());
        System.out.println(page.getPages());
        System.out.println(page.getRecords());
    }


}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.Service接口名称定义成业务名称，并与Dao接口名称进行区分 2.制作测试类测试Service功能是否有效</p><h5 id="mybatis-plus-简化常规的业务操作" tabindex="-1"><a class="header-anchor" href="#mybatis-plus-简化常规的业务操作" aria-hidden="true">#</a> mybatis-plus 简化常规的业务操作</h5><p>快速开发方案 使用MyBatisPlus提供有业务层通用接口 ISerivce 与业务层通用实现类(ServiceImpl&lt;M,T&gt;) 在通用类基础上做功能重载或功能追加 注意重载时不要覆盖原始操作，避免原始提供的功能丢失</p><p>新建 service/IbookService Interface</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface IbookService extends IService&lt;Book&gt; {

    // 在里面也可以写自己的业务操作，只是尽量别和 Iservice 里面的方法重复
    // 追加的操作与原始操作通过名称区分，功能能类似
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>service/Impl/ServiceImpl class</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class BookServiceImpl extends ServiceImpl&lt;BookDao, Book&gt; implements IbookService {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@SpringBootTest
public class BookServiceTest {
    // 业务层测试
    @Autowired
    private IbookService bookService;
    @Test
    void testGetById(){
        System.out.println(bookService.getById(1));
    }

    @Test
    void selectAll(){
        System.out.println(bookService.list());
    }

    @Test
    void testSave(){
        Book book = new Book();
        book.setName(&quot;红楼梦&quot;);
        book.setAuthor(&quot;施耐庵&quot;);
        bookService.save(book);
    }

    // 将数据库 id 为 2 的数据做更新
    @Test
    void testUpdate(){
        Book book = new Book();
        book.setId(2);
        book.setName(&quot;三国&quot;);
        book.setAuthor(&quot;施耐庵&quot;);
        bookService.updateById(book);
    }

    // 删除数据库 id 为 1 的那条数据
    @Test
    void testDelete() {
        bookService.removeById(1);
    }

    @Test
    void testGetPage(){
        IPage&lt;Book&gt; pages=new Page&lt;Book&gt;(1,3);
        //IPage page = new Page(2,2);
        IPage&lt;Book&gt; page=bookService.page(pages);
        System.out.println(page.getCurrent());
        System.out.println(page.getSize());
        System.out.println(page.getTotal());
        System.out.println(page.getPages());
        System.out.println(page.getRecords());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="表现层开发" tabindex="-1"><a class="header-anchor" href="#表现层开发" aria-hidden="true">#</a> 表现层开发</h4><p>​ 基于Restful进行表现层接口开发 ​ 使用Postman测试表现层接口功能</p><p>1.基于Restfu1制作表现层接口 新增：POST 删除：DELETE 修改：PUT 查询：GET 2.接收参数 实体数据：@RequestBody 路径变量：@PathVariable</p><p>controller/BookController restful接口</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/books&quot;</span><span class="token punctuation">)</span>     <span class="token comment">// 路径</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">IbookService</span> bookService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> <span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> bookService<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@PostMapping</span>
    <span class="token keyword">public</span> <span class="token class-name">Boolean</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Book</span> book<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> bookService<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>book<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@PutMapping</span>
    <span class="token keyword">public</span> <span class="token class-name">Boolean</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Book</span> book<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> bookService<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>book<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@DeleteMapping</span><span class="token punctuation">(</span><span class="token string">&quot;{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Boolean</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> bookService<span class="token punctuation">.</span><span class="token function">removeById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Book</span> <span class="token function">getBookById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> bookService<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 分页查询</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/{currentPage}/{pageSize}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPage</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> currentPage<span class="token punctuation">,</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> pageSize<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">IPage</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> pages<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>currentPage<span class="token punctuation">,</span>pageSize<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> bookService<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>pages<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getRecords</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="表现层消息一致性处理" tabindex="-1"><a class="header-anchor" href="#表现层消息一致性处理" aria-hidden="true">#</a> 表现层消息一致性处理</h5><p>设计表现层返回结果的模型类，用于后端与前端进行数据格式统一，也称为前后端数据协议</p><p>controller/util/R</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 当返回数据时，需要什么数据自行添加，并加入对应的构造函数</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">R</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Boolean</span> flag<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Object</span> data<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">R</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">R</span><span class="token punctuation">(</span><span class="token class-name">Boolean</span> flag<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>flag<span class="token operator">=</span>flag<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">R</span><span class="token punctuation">(</span><span class="token class-name">Boolean</span> flag<span class="token punctuation">,</span><span class="token class-name">Object</span> data <span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>flag<span class="token operator">=</span>flag<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token operator">=</span>data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">R</span><span class="token punctuation">(</span><span class="token class-name">Boolean</span> flag<span class="token punctuation">,</span><span class="token class-name">String</span> msg <span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>flag<span class="token operator">=</span>flag<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>msg<span class="token operator">=</span>msg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>controller/BookController</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/books&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">IbookService</span> bookService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span>
    <span class="token keyword">public</span> <span class="token class-name">R</span> <span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">R</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span>bookService<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@PostMapping</span>
    <span class="token keyword">public</span> <span class="token class-name">R</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Book</span> book<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//R r=new R();</span>
        <span class="token comment">//Boolean flag=bookService.save(book);</span>
        <span class="token comment">//r.setFlag(flag);</span>
        <span class="token comment">//return r;</span>

        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">R</span><span class="token punctuation">(</span>bookService<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>book<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@PutMapping</span>
    <span class="token keyword">public</span> <span class="token class-name">R</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Book</span> book<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">R</span><span class="token punctuation">(</span>bookService<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>book<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@DeleteMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">R</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">R</span><span class="token punctuation">(</span>bookService<span class="token punctuation">.</span><span class="token function">removeById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">R</span> <span class="token function">getBookById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">R</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span>bookService<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//  分页查询，参数查询 Book book获取参来的参数，LambdaQueryWrapper设置筛选的规则</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/{currentPage}/{pageSize}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">R</span> <span class="token function">getPage</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> currentPage<span class="token punctuation">,</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> pageSize<span class="token punctuation">,</span><span class="token class-name">Book</span> book<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>book<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">IPage</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> pages<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>currentPage<span class="token punctuation">,</span>pageSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 如果当前页码值大于了总页码值，那么重新执行查询操作，使用最大页码值作为当前页码值</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>currentPage<span class="token operator">&gt;</span>bookService<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>pages<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            pages<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>bookService<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>pages<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>pageSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> lambdaQueryWrapper<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        lambdaQueryWrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token class-name">Strings</span><span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span>book<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token class-name">Book</span><span class="token operator">::</span><span class="token function">getName</span><span class="token punctuation">,</span>book<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        lambdaQueryWrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token class-name">Strings</span><span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span>book<span class="token punctuation">.</span><span class="token function">getAuthor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token class-name">Book</span><span class="token operator">::</span><span class="token function">getAuthor</span><span class="token punctuation">,</span>book<span class="token punctuation">.</span><span class="token function">getAuthor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">R</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span>bookService<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>pages<span class="token punctuation">,</span>lambdaQueryWrapper<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.设计统一的返回值结果类型便于前端开发读取数据 2,返回值结果类型可以根据需求自行设定，没有固定格式 3,返回值结果模型类用于后端与前端进行数据格式统一，也称为前后端数据协议</p><h5 id="springmvc异常处理器" tabindex="-1"><a class="header-anchor" href="#springmvc异常处理器" aria-hidden="true">#</a> springMVC异常处理器</h5><p>当接口出现异常时，返回数据又不一致，需要进行处理（当要给不同异常做不同处理时，可以多写几个异常处理）</p><p>controller/util/ProjectExceptionAdvics</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 作为springMVC异常处理器</span>
<span class="token comment">//@ControllerAdvice</span>
<span class="token annotation punctuation">@RestControllerAdvice</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProjectExceptionAdvice</span> <span class="token punctuation">{</span>

    <span class="token comment">// 拦截所有异常信息</span>
    <span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span><span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">R</span> <span class="token function">doException</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//记录日志</span>
        <span class="token comment">//迹知运媚</span>
        <span class="token comment">// 迦知开发</span>
        <span class="token comment">// ex.printStackTrace();  查看</span>
        <span class="token comment">// https://blog.csdn.net/m0_49976286/article/details/119565008</span>
        ex<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">R</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token string">&quot;服务器异常&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包" tabindex="-1"><a class="header-anchor" href="#打包" aria-hidden="true">#</a> 打包</h3><p>打开maven面板， 先clean,在点击package打包（点击 Toggle &#39;Skip Tests&#39;Mode 跳过测试过程，提示不安全）</p><p>（MAVEN:打包报错 Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.1:compile）</p>`,107),U={href:"https://blog.csdn.net/Int_Xu/article/details/108184768",target:"_blank",rel:"noopener noreferrer"},Q=t(`<p>修改pom.xml （配置和版本如下）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;build&gt;
		&lt;plugins&gt;
			&lt;plugin&gt;
				&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
				&lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
			&lt;/plugin&gt;
			&lt;plugin&gt;
				&lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
				&lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;
				&lt;configuration&gt;
					&lt;source&gt;1.8&lt;/source&gt;
					&lt;target&gt;1.8&lt;/target&gt;
					&lt;encoding&gt;UTF-8&lt;/encoding&gt;
				&lt;/configuration&gt;
			&lt;/plugin&gt;
			&lt;plugin&gt;
				&lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
				&lt;artifactId&gt;maven-resources-plugin&lt;/artifactId&gt;
				&lt;version&gt;3.1.0&lt;/version&gt;
				&lt;configuration&gt;
					&lt;encoding&gt;UTF-8&lt;/encoding&gt;
				&lt;/configuration&gt;
			&lt;/plugin&gt;
		&lt;/plugins&gt;
	&lt;/build&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令行 java -jar jar包文件名 运行</p><p>指定端口号 java -jar jar包文件名 <strong>--server.port=8085</strong></p><p>打包后运行，按条件查询时，出现类似 evaluating expression ‘ew.sqlSegment != null and ew.sqlSegment != ‘‘ and ew. mybaties plus问题 的错误：原因是mybatis-plus的版本不兼容，（3.5.2可以正常使用）</p><p>Windonws.端口被占用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#查询端口
netstat -ano
#查询指定端口
netstat-ano |findstr &quot;端口号&quot;
#根据进程PID查询进程名称
tasklist |findstr &quot;进程PID号&quot;
#根据PID杀死任务
taskki11/F/PID &quot;进程PID号&quot;
#根据进程名称杀死任务
taskki11 -f -t -im &quot;进程名称&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署运行-配置服务环境" tabindex="-1"><a class="header-anchor" href="#部署运行-配置服务环境" aria-hidden="true">#</a> 部署运行(配置服务环境)</h3>`,8),V={href:"https://blog.csdn.net/feosun/article/details/73196299",target:"_blank",rel:"noopener noreferrer"},W=n("p",null,"linux安装java运行环境：jdk",-1),F=n("p",null,"上传 jar 包 到use/local/app 文件夹下",-1),J=n("p",null,"linux下载mysql usr/local/mysql",-1),H={href:"https://blog.csdn.net/u011421988/article/details/107234718",target:"_blank",rel:"noopener noreferrer"},G={href:"https://blog.csdn.net/qq_41817925/article/details/118674315",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://blog.csdn.net/BertonYip/article/details/80829524",target:"_blank",rel:"noopener noreferrer"},K=n("p",null,"Mysql 启动报错解析：Starting MySQL.. ERROR! The server quit without updating PID file (/usr/local/mysql/dat",-1),X={href:"https://blog.csdn.net/Qevery678/article/details/96422599",target:"_blank",rel:"noopener noreferrer"},$={href:"https://www.cnblogs.com/MrYoodb/p/15811199.html",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://blog.csdn.net/qq_43611486/article/details/99609644",target:"_blank",rel:"noopener noreferrer"},nn=t(`<p><strong>linux安装MySQL总结</strong></p><p>/usr/local 目录下</p><p><strong>下载MySQL</strong> <code>wget https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-8.0.21-linux-glibc2.12-x86_64.tar.xz</code></p><p><strong>解压mysql</strong> <code>tar xvJf mysql-8.0.21-linux-glibc2.12-x86_64.tar.xz</code></p><p><strong>重命名文件夹</strong> （重命名为MySQL） <code>mv mysql-8.0.21-linux-glibc2.12-x86_64 mysql</code></p><p><strong>/usr/local/mysql 目录下创建data文件夹 存储文件</strong> <code>mkdir data</code></p><p><strong>创建用户组以及用户和密码</strong> <code>groupadd mysql</code> <code>useradd -g mysql mysql</code></p><p><strong>授权用户 改变mysql目录权限</strong> <code>chown -R mysql.mysql /usr/local/mysql</code></p><p><strong>数据库初始化</strong> <code>./bin/mysqld --user=mysql --basedir=/usr/local/mysql --datadir=/usr/local/mysql/data --initialize</code> 得到临时密码，要记住，后面修改数据库密码要用到</p><p><strong>修改my.cnf文件</strong> <code>vi /etc/my.cnf</code> 内容如下所示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[mysqld]
    basedir = /usr/local/mysql
    datadir = /usr/local/mysql/data
    socket = /usr/local/mysql/mysql.sock
    character-set-server=utf8
    port = 3306
   sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES
   net_read_timeout = 120
net_write_timeout = 900
 [client]
   socket = /usr/local/mysql/mysql.sock
   default-character-set=utf8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2013,Lost connection to MySQL server during query 报错处理 长连接）</p>`,12),sn={href:"https://blog.csdn.net/weixin_39561473/article/details/90213914",target:"_blank",rel:"noopener noreferrer"},an=t('<p><strong>创建mysql服务</strong></p><p>（1）<code>cp -a /usr/local/mysql/support-files/mysql.server /etc/init.d/mysqld</code></p><p>（2）赋予权限，使用<code>chmod +x /etc/rc.d/init.d/mysql</code>d命令；</p><p>（3）使用<code>chkconfig --add mysqld</code>创建mysql服务。</p><p>检查mysql服务是否生效，使用<code>chkconfig --list mysqld</code>命令。</p><p><strong>配置全局环境变量</strong></p><p>编辑/etc/profile文件，使用vim /etc/profile命令，在profile文件中添加如下两行配置，使用:wq命令保存后退出。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>`export PATH=$PATH:/usr/local/mysql/bin:/usr/local/mysql/lib``export PATH`\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置环境变量立即生效使用<code>source /etc/profile</code>命令。</p><p><strong>启动mysql服务</strong>，使用service mysql start命令；使用service mysql status命令，查看是否启动成功。</p><p>service mysql start （用这个命令） service mysql restart (重启)</p><p><strong>查看启动状态</strong></p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>service mysql status\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>将mysql命令添加到服务</strong></p><div class="language-cobol line-numbers-mode" data-ext="cobol"><pre class="language-cobol"><code>ln -s <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>mysql<span class="token operator">/</span>bin<span class="token operator">/</span>mysql <span class="token operator">/</span>usr<span class="token operator">/</span>bin\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>登录mysql</strong> <code>mysql -uroot -p</code> 密码使用之前随机生成的密码</p><p><strong>修改root密码</strong> 其中123456是新的密码自己设置</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">USER</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;localhost&#39;</span> IDENTIFIED <span class="token keyword">WITH</span> mysql_native_password <span class="token keyword">BY</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>执行 使密码生效</strong> <code>flush privileges</code></p><p><strong>设置mysql远程登录</strong></p><p>1）切换数据库，使用use mysql;命令。</p><p>2）修改mysql库中host值，使用update user set host=&#39;%&#39; where user=&#39;root&#39; limit 1;命令。</p><p>3）刷新mysql权限，使用flush privileges;命令。</p><p>在阿里云服务器上要进行配置，否则navicat连接时报2003的错误，解决方法如下：</p>',24),en={href:"https://blog.csdn.net/kaifaxiaoliu/article/details/80403736",target:"_blank",rel:"noopener noreferrer"},tn=n("p",null,"实例里面管理，加入安全组，并在安全组里配置 mysql的 3306 端口",-1),pn=n("p",null,"navicat连接虚拟机的MySQL连不上，查看打开修改虚拟机的端口",-1),ln={href:"https://blog.csdn.net/weixin_49015210/article/details/117748687",target:"_blank",rel:"noopener noreferrer"},on=t(`<p>服务器上指定端口号 java -jar jar包文件名 <strong>--server.port=8085</strong> 运行jar包时，要开启端口号</p><p>输入命令然后回车 /sbin/iptables -I INPUT -p tcp --dport 8085 -j ACCEPT</p><p>再次输入 iptables -vnL|grep 8085 回车即可看到8085端口状态信息</p><p>当端口都打开后，用postman测试接口，成功返回数据。</p><p>1.使用 jar 命令启动SpringBoot工程时可以使用临时属性替换配置文件中的属性 2.临时属性添加方式：java -jar 工程名.jar --属性名=值 3.多个临时属性之间使用空格分隔 4.临时属性必须是当前boot工程支持的属性，否则设置无效</p><h3 id="临时属性设置-开发环境" tabindex="-1"><a class="header-anchor" href="#临时属性设置-开发环境" aria-hidden="true">#</a> 临时属性设置（开发环境）</h3><p>通过编程形式带参数启动SpringBoot程序，为程序添加运行参数</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringMybatisApplication</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arg <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		arg<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;--server.port=8080&quot;</span><span class="token punctuation">;</span>

		<span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">SpringMybatisApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不携带参数启动SpringBoot程序</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringMybatisApplication</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">SpringMybatisApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置文件分类" tabindex="-1"><a class="header-anchor" href="#配置文件分类" aria-hidden="true">#</a> 配置文件分类</h3><p><strong>1.SpringBoot中4级配置文件</strong> 1级：file:config/application.yml 【最高】 2级：file:application.yml 3级：classpath:config/application.yml 4级：classpath:application.yml 【最低】 <strong>2.作用：</strong> 1级与2级留做系统打包后设置通用属性，1级常用于运维经理进行线上整体项目部署方案调控 3级与4级用于系统开发阶段设置通用属性，3级常用于项目经理进行整体项目属性调控</p><p>1.配置文件分为4种 项目类路径配置文件：服务于开发人员本机开发与测试 项目类路径conf1g目录中配置文件：服务于项目经理整体调控 工程路径配置文件：服务于运维人员配置涉密线上环境 工程路径config目录中配置文件：服务于运维经理整体调控 2,多层级配置文件间的属性采用叠加并覆盖的形式作用于程序</p><p>1.SpringBoot在开发和运行环境均支持使用临时参数修改工程配置 2.SpringBoot支持4级配置文件，应用于开发与线上环境进行配置的灵活设置 3.SpringBoot.支持使用自定义配置文件的形式修改配置文件存储位置 4.基于微服务开发时配置文件将使用配置中心进行管理</p><h3 id="多环境开发" tabindex="-1"><a class="header-anchor" href="#多环境开发" aria-hidden="true">#</a> 多环境开发</h3><h4 id="application-yml中配置多个环境" tabindex="-1"><a class="header-anchor" href="#application-yml中配置多个环境" aria-hidden="true">#</a> application.yml中配置多个环境</h4><p>1,多环境开发需要设置若干种常用环境，例如开发、生产、测试环境 2,yaml格式中设置多环境使用 --- 区分环境设置边界 3.每种环境的区别在于加载的配置属性不同 4,启用某种环境时需要指定启动时使用该环境</p><p>application.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#应用环境  ---下可配置多个环境，active选择使用哪个环境</span>
<span class="token comment">#公共配置 不同环境相同的配置写在这</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
    <span class="token key atrule">active</span><span class="token punctuation">:</span> pro

<span class="token punctuation">---</span>
<span class="token comment">#设置环境</span>
<span class="token comment">#生产环境</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">config</span><span class="token punctuation">:</span>
    <span class="token key atrule">activate</span><span class="token punctuation">:</span>
      <span class="token key atrule">on-profile</span><span class="token punctuation">:</span> pro
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>

<span class="token punctuation">---</span>
<span class="token comment">#开发环境</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">config</span><span class="token punctuation">:</span>
    <span class="token key atrule">activate</span><span class="token punctuation">:</span>
      <span class="token key atrule">on-profile</span><span class="token punctuation">:</span> dev
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">81</span>

<span class="token punctuation">---</span>
<span class="token comment">#测试环境</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">config</span><span class="token punctuation">:</span>
    <span class="token key atrule">activate</span><span class="token punctuation">:</span>
      <span class="token key atrule">on-profile</span><span class="token punctuation">:</span> test
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">82</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多个配置文件" tabindex="-1"><a class="header-anchor" href="#多个配置文件" aria-hidden="true">#</a> 多个配置文件</h4><p>1.主启动配置文件application.yml （active配置环境文件名称用哪个）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring:
  profiles:
    active: dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.环境分类配置文件application-pro.yml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server:
  port: 80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3,环境分类配置文件application-dev.yml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server:
  port:81
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>4.环境分类配置文件application-test.yml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server:
  port:82
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="group属性设置配置文件分组" tabindex="-1"><a class="header-anchor" href="#group属性设置配置文件分组" aria-hidden="true">#</a> group属性设置配置文件分组</h4><p>多环境开发使用group属性设置配置文件分组，便于线上维护管理</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring:
  profiles:
    active: dev
    group:
      &quot;dev&quot;:devDB,devRedis,devMVC
      &quot;pro&quot;:proDB,proRedis,proMVC
      &quot;test&quot;:testDB,testRedis,testMVC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="springboot与maven的多环境兼容" tabindex="-1"><a class="header-anchor" href="#springboot与maven的多环境兼容" aria-hidden="true">#</a> springboot与maven的多环境兼容</h4>`,32),cn={href:"https://blog.csdn.net/puzi0315/article/details/127196143",target:"_blank",rel:"noopener noreferrer"},un=t(`<p>1 mave 的 pom.xml 下加入如下环境配置，每个profile配置一个环境变量， activation &gt; activeByDefault 为 true ,代表使用这个环境</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;profiles&gt;
        &lt;profile&gt;
            &lt;id&gt;dev&lt;/id&gt;
            &lt;properties&gt;
                &lt;pom.profile&gt;dev&lt;/pom.profile&gt;
            &lt;/properties&gt;
            &lt;activation&gt;
                &lt;activeByDefault&gt;true&lt;/activeByDefault&gt;
            &lt;/activation&gt;
        &lt;/profile&gt;
        &lt;profile&gt;
            &lt;id&gt;test&lt;/id&gt;
            &lt;properties&gt;
                &lt;pom.profile&gt;test&lt;/pom.profile&gt;
            &lt;/properties&gt;
        &lt;/profile&gt;
 
        &lt;profile&gt;
            &lt;id&gt;prod&lt;/id&gt;
            &lt;properties&gt;
                &lt;pom.profile&gt;prod&lt;/pom.profile&gt;
            &lt;/properties&gt;
        &lt;/profile&gt;
 
    &lt;/profiles&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 SpringBoot中引用Maven属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring:
  profiles:
    active: @pom.profile@
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3 执行Maven打包指令，并在生成的boot打包文件 .jar文件中查看对应信息</p><p>注意：</p><p>1 当Maven与SpringBoot同时对多环境进行控制时，以Mavn为主，SpringBoot使用@，，@占位符读取Maven.对应的配置属性值 2 基于SpringBoot读取Maveni配置属性的前提下，如果在Idea下测试工程时pom.xml每次更新需要手动compile方可生效</p><h3 id="日志" tabindex="-1"><a class="header-anchor" href="#日志" aria-hidden="true">#</a> 日志</h3><p>日志(log)作用：</p><p>编程期调试代码</p><p>运营期记录信息</p><p>​ 记录日常运营重要信息（峰值流量、平均响应时长…） ​ 记录应用报错信息（错误堆栈） ​ 记录运维过程数据（扩容、宕机、报警…)</p>`,12),dn={href:"https://blog.csdn.net/gjwloveforever/article/details/124774662",target:"_blank",rel:"noopener noreferrer"},rn=t(`<p>日志级别 TRACE:运行堆栈信息，使用率低 DEBUG:程序员调试代码使用 INFO:记录运维过程数据 WARN:记录运维过程报警数据 ERROR:记录错误堆栈信息 FATAL:灾难信息，合并计入ERROR</p><p>1,日志用于记录开发调试与运维过程消息 2,日志的级别共6种，通常使用4种即可，分别是DEBUG,INF0,WARN,ERROR 3,可以通过日志组或代码包的形式进行日志显示级别的控制</p><p>application.yml 日志配置</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">file</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> server.log  <span class="token comment">#普通配置生成日志的文件名</span>
  <span class="token key atrule">logback</span><span class="token punctuation">:</span>
    <span class="token key atrule">rollingpolicy</span><span class="token punctuation">:</span>
      <span class="token key atrule">max-file-size</span><span class="token punctuation">:</span> 10MB   <span class="token comment"># 一个日志文件最大的大小</span>
      <span class="token key atrule">file-name-pattern</span><span class="token punctuation">:</span> server.%d<span class="token punctuation">{</span>yyyy<span class="token punctuation">-</span>MM<span class="token punctuation">-</span>dd<span class="token punctuation">}</span>.%i.log  <span class="token comment">#生成多条日志文件时,配置文件名格式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="热部署-只在开发环境有效" tabindex="-1"><a class="header-anchor" href="#热部署-只在开发环境有效" aria-hidden="true">#</a> 热部署（只在开发环境有效）</h3>`,5),vn={href:"https://blog.csdn.net/lwj_07/article/details/126226074",target:"_blank",rel:"noopener noreferrer"},kn=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>各种方式一定要加上devtools的依赖（在idea设置也需要引入devtools的依赖）
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-devtools&lt;/artifactId&gt;
    &lt;optional&gt;true&lt;/optional&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置高优先级属性禁用热部署</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@SpringBootApplication
public class SpringMybatisApplication {

	public static void main(String[] args) {

		System.setProperty(&quot;spring.devtools.restart.enabled&quot;,&quot;false&quot;);

		SpringApplication.run(SpringMybatisApplication.class, args);
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实用开发" tabindex="-1"><a class="header-anchor" href="#实用开发" aria-hidden="true">#</a> 实用开发</h3><h4 id="bean-属性绑定" tabindex="-1"><a class="header-anchor" href="#bean-属性绑定" aria-hidden="true">#</a> bean 属性绑定</h4><p>application.yml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>servers:
  ipAdress: 127.0.0.1
  port: 2345
  timeOut: -1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ServerConfig.class 实体类</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Component   //定义Spring管理Bean
@Data      // lombok配置
@ConfigurationProperties(prefix = &quot;servers&quot;)  //提供读取配置文件的一个注解
public class ServerConfig {
    private String ipAdress;
    private int port;
    private Long timeout;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解除使用@ConfigurationProperties注释警告（加 dependency ）</p><p>Spring Boot Configuration Annotation Processor not configured Open Documentation.....</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        &lt;dependency&gt;
			&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
			&lt;artifactId&gt;spring-boot-configuration-processor&lt;/artifactId&gt;
		&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用@ConfigurationProperties.为第三方bean绑定属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Bean
@ConfigurationProperties(prefix= &quot;datasource&quot;)
public DruidDataSource dataSource(){
     DruidDataSource ds new DruidDataSource();
     return ds;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>datasource:
  driverclassName: com.mysql.jdbc.Driver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>@EnableConfigurationProperties注解可以将使用@ConfigurationProperties注解对应的类加入Spring容器</p><p>注意：@EnableConfigurationProperties.与@Component不能同时使用</p><h4 id="springboot支持jdk8提供的时间与空间计量单位" tabindex="-1"><a class="header-anchor" href="#springboot支持jdk8提供的时间与空间计量单位" aria-hidden="true">#</a> SpringBoot支持JDK8提供的时间与空间计量单位</h4><p>@DurationUnit 注解在实体类中配置属性的 时间单位</p><p>@DurationUnit注解在实体类中配置属性的 容量单位</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class ServerConfig {
    private String ipAdress;
    private int port;
    private Long timeout;

    @DurationUnit(ChronoUnit.MINUTES)  // 时间属性单位是分钟
    private Duration setTimeOut;
    @DataSizeUnit(DataUnit.MEGABYTES)  // 容量属性单位是MB
    private DataSize dataSize;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="bean属性校验" tabindex="-1"><a class="header-anchor" href="#bean属性校验" aria-hidden="true">#</a> bean属性校验</h4><p>1 添加依赖： 导入JSR383规范</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
			&lt;groupId&gt;javax.validation&lt;/groupId&gt;
			&lt;artifactId&gt;validation-api&lt;/artifactId&gt;
		&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 @Validated 用于开启配置校验</p><p>@Max，@Min 等注解用于配置属性具体的配置规则</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
@Validated
public class ServerConfig {
    private String ipAdress;
    private int port;
    
    @Max(value = 800,message = &quot;最大值不超过800&quot;)
    @Min(value = 80,message = &quot;最小值不超过800&quot;)
    private Long timeout;

    @DurationUnit(ChronoUnit.MINUTES)  // 时间属性单位是分钟
    private Duration setTimeOut;
    @DataSizeUnit(DataUnit.MEGABYTES)  // 容量属性单位是MB
    private DataSize dataSize;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3 运行报错时，需要增加依赖</p><p>实用 hibernate 框架是供的校验器做实现类</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        &lt;dependency&gt;
			&lt;groupId&gt;org.hibernate.validator&lt;/groupId&gt;
			&lt;artifactId&gt;hibernate-validator&lt;/artifactId&gt;
		&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4 总结</p><p>1,启用Bean属性校验 导入JSR303与Hibernate校验框架坐标 使用@Validated注解启用校验功能 使用具体校验规则规范数据校验格式</p><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><h4 id="临时参数" tabindex="-1"><a class="header-anchor" href="#临时参数" aria-hidden="true">#</a> 临时参数</h4><p>application.yml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>test:
  prop: value1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>获取yml数据，或者临时参数。（临时参数优先级：args&gt;properties &gt;yml）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span><span class="token punctuation">(</span>properties<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;test.prop=testvalue1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>args<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;--test.arg=testvalue2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PropertiesAndArgsTest</span>
        <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${test.prop}&quot;</span><span class="token punctuation">)</span>  <span class="token comment">//获取参数</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> msg<span class="token punctuation">;</span>
        <span class="token annotation punctuation">@Test</span>
        <span class="token keyword">void</span> <span class="token function">testProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="加载测试配置" tabindex="-1"><a class="header-anchor" href="#加载测试配置" aria-hidden="true">#</a> 加载测试配置</h4><p>使用@Import注解加载当前测试类专用的配置（在测试中加载）</p><p>加载测试范围配置应用于小范围测试环境</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@SpringBootTest
@Import(MsgConfig.class)   // 加载 MsgConfig.class 的文件
public class ConfigurationTest{
  @Autowired   // msg是在MsgConfig.class中的一个bean
  private String msg;
  @Test
  void testConfiguration(){
    System.out.println(msg);
  }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="web环境模拟测试" tabindex="-1"><a class="header-anchor" href="#web环境模拟测试" aria-hidden="true">#</a> web环境模拟测试</h4><p>web环境模拟测试 设置测试端口 模拟测试启动 模拟测试匹配（各组成部分信息均可匹配)</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span> <span class="token punctuation">(</span>webEnvironment<span class="token operator">=</span><span class="token class-name">SpringBootTest<span class="token punctuation">.</span>WebEnvironment</span><span class="token punctuation">.</span><span class="token constant">RANDOM_PORT</span><span class="token punctuation">)</span>
<span class="token comment">// 开启虚VC调用</span>
<span class="token annotation punctuation">@AutoConfigureMockMvc</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebTest</span><span class="token punctuation">{</span>
     <span class="token annotation punctuation">@Test</span>
    <span class="token comment">//注入虚拟MVC调用对象  MockMvc</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testWeb</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Autowired</span> <span class="token class-name">MockMvc</span> mvc<span class="token punctuation">)</span><span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token comment">//创建虚拟请求，当前访问/books</span>
        <span class="token class-name">MockHttpServletRequestBuilder</span> builder<span class="token operator">=</span> <span class="token class-name">MockMvcRequestBuilders</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/books&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//执行请求</span>
        <span class="token class-name">ResultActions</span> action<span class="token operator">=</span>mvc<span class="token punctuation">.</span><span class="token function">perform</span><span class="token punctuation">(</span>builder<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//设定预彻值与真实值进行比较，成功测试通过，失败测试失毁</span>
		<span class="token comment">//定义本次调用的预阻</span>
		<span class="token class-name">StatusResultMatchers</span> status<span class="token operator">=</span><span class="token class-name">MockMvcResultMatchers</span><span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//顾计本次调用时成功的：状态 200</span>
		<span class="token class-name">ResultMatcher</span> ok <span class="token operator">=</span>status<span class="token punctuation">.</span><span class="token function">isOk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//添伽预计值到本次调用过星中进行匹鹿</span>
		action<span class="token punctuation">.</span><span class="token function">andExpect</span><span class="token punctuation">(</span>ok<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        
      <span class="token comment">//  测试请求体  </span>
        <span class="token comment">//匹配执行结果(是否预期值)</span>
        <span class="token comment">//定义执行结果匹配器</span>
        <span class="token class-name">ContentResultMatchers</span> content <span class="token operator">=</span><span class="token class-name">MockMvcResultMatchers</span><span class="token punctuation">.</span><span class="token function">content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token comment">//定义预期执行结果</span>
        <span class="token class-name">ResultMatcher</span> result <span class="token operator">=</span><span class="token function">content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&quot;springboot&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//使用本次真实执行结果与预期结果进行比对</span>
        action<span class="token punctuation">.</span><span class="token function">andExpect</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="业务层测试事务回滚" tabindex="-1"><a class="header-anchor" href="#业务层测试事务回滚" aria-hidden="true">#</a> 业务层测试事务回滚</h4><p>使测试时的数据不会加到数据库中</p><p>为测试用例添加事务，SpringBoot会对测试用例对应的事务提交操作进行回滚</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@SpringBootTest
@Transactional
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想在测试用例中提交事务，可以通过@Rol1back注解设置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@SpringBootTest
@Transactional
@Rollback(false)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="springboot测试用例设置随机数据" tabindex="-1"><a class="header-anchor" href="#springboot测试用例设置随机数据" aria-hidden="true">#</a> SpringBoot测试用例设置随机数据</h4>`,52),mn={href:"https://blog.csdn.net/m0_45877477/article/details/125481585",target:"_blank",rel:"noopener noreferrer"},bn=t(`<h3 id="数据层解决方案" tabindex="-1"><a class="header-anchor" href="#数据层解决方案" aria-hidden="true">#</a> 数据层解决方案</h3><p>现有数据层解决方案技术选型 Druid +MyBatis-Plus +MySQL</p><h4 id="内嵌的数据源" tabindex="-1"><a class="header-anchor" href="#内嵌的数据源" aria-hidden="true">#</a> 内嵌的数据源</h4><p>SpringBoot提供了3种内嵌的数据源对象供开发者选择：</p><p>HikariCP:默认内置数据源对象 Tomcat提供DataSource：HikariCP不可用的情况下，且在web环境中，将使用tomcat服务器配置的数据源对象 Commons DBCP:Hikariz不可用，tomcat数据源也不可用，将使用dbcp数据源</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysq1://localhost:3306/ssm_db
    username: root
    password: root
  hikari:
    maximum-pool-size: 50
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="内置持久化解决方案一一jdbctemplate" tabindex="-1"><a class="header-anchor" href="#内置持久化解决方案一一jdbctemplate" aria-hidden="true">#</a> 内置持久化解决方案一一JdbcTemplate</h4>`,7),gn={href:"https://www.imooc.com/article/46879",target:"_blank",rel:"noopener noreferrer"},hn=t('<h4 id="内嵌数据库" tabindex="-1"><a class="header-anchor" href="#内嵌数据库" aria-hidden="true">#</a> 内嵌数据库</h4><p>SpringBoot提供了3种内嵌数据库供开发者选择，提高开发测试效率 H2，HSQL，Derby</p><h4 id="nosql" tabindex="-1"><a class="header-anchor" href="#nosql" aria-hidden="true">#</a> NoSQL</h4><p>市面上常见的NoSQL解决方案 Redis，Mongo，ES</p><h5 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h5><p>Redis是一款key-value存储结构的内存级NoSQL数据库 支持多种数据存储格式 支持持久化 支持集群</p><h6 id="springboot整合redis客户端" tabindex="-1"><a class="header-anchor" href="#springboot整合redis客户端" aria-hidden="true">#</a> <strong>springBoot整合redis</strong>客户端</h6>',7),yn={href:"https://blog.csdn.net/lwj_07/article/details/126265935",target:"_blank",rel:"noopener noreferrer"},fn={href:"https://blog.csdn.net/weixin_59654772/article/details/125692784",target:"_blank",rel:"noopener noreferrer"},xn=t(`<p>依赖：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;
        &lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token comment"># Redis服务器地址</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> 127.0.0.1
    <span class="token comment"># Redis服务器端口号</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">6379</span>
    <span class="token comment"># 使用的数据库索引，默认是0</span>
    <span class="token key atrule">database</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token comment"># 连接超时时间</span>
    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">1800000</span>
    <span class="token comment"># 设置密码  没有密码不要写，否则会报错</span>
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">&quot;123456&quot;</span> 
    <span class="token comment"># 默认lettuce  ，可以配置使用jedis</span>
    <span class="token key atrule">lettuce</span><span class="token punctuation">:</span>
      <span class="token key atrule">pool</span><span class="token punctuation">:</span>
        <span class="token comment"># 最大阻塞等待时间，负数表示没有限制</span>
        <span class="token key atrule">max-wait</span><span class="token punctuation">:</span> <span class="token number">-1</span>
        <span class="token comment"># 连接池中的最大空闲连接</span>
        <span class="token key atrule">max-idle</span><span class="token punctuation">:</span> <span class="token number">5</span>
        <span class="token comment"># 连接池中的最小空闲连接</span>
        <span class="token key atrule">min-idle</span><span class="token punctuation">:</span> <span class="token number">0</span>
        <span class="token comment"># 连接池中最大连接数，负数表示没有限制</span>
        <span class="token key atrule">max-active</span><span class="token punctuation">:</span> <span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>springboot 中操作 redis (与客户端中操作redis不同步)</p><p>客户端：RedisTemplate以对象作为key和value,内部对数据进行序列化</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">ConfigurationApplicationTests</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Autowired</span>
	<span class="token keyword">private</span> <span class="token class-name">RedisTemplate</span> redisTemplate<span class="token punctuation">;</span>

	<span class="token annotation punctuation">@Test</span>   <span class="token comment">// 向redis中录入一条数据</span>
	<span class="token keyword">void</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">ValueOperations</span> ops<span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		ops<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;占山&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token annotation punctuation">@Test</span>   <span class="token comment">// 向redis中读取一条数据</span>
	<span class="token keyword">void</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">ValueOperations</span> ops<span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Object</span> name<span class="token operator">=</span> ops<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Test</span>   <span class="token comment">// 向redis中录入一组数据，类似于js的对象</span>
	<span class="token keyword">void</span> <span class="token function">hset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">HashOperations</span> ops<span class="token operator">=</span>redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		ops<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;占山&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		ops<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;11&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		ops<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;sex&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;男&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Test</span>   <span class="token comment">// 向redis中读取hset中存入的数据</span>
	<span class="token keyword">void</span> <span class="token function">hget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">HashOperations</span> ops<span class="token operator">=</span>redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Object</span> infoName<span class="token operator">=</span>ops<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Object</span> infoAge<span class="token operator">=</span>ops<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Object</span> infoSex<span class="token operator">=</span>ops<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;sex&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>infoName<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>infoAge<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>infoSex<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要获取客户端中同步的数据要用 StringRedisTemplate</p><p>客户端：StringRedisTemplate以字符串作为key和value,与Redis.客户端操作等效</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">ConfigurationApplicationTests</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Autowired</span>
	<span class="token keyword">private</span> <span class="token class-name">StringRedisTemplate</span> stringRedisTemplate<span class="token punctuation">;</span>
	
	<span class="token annotation punctuation">@Test</span>   <span class="token comment">// 向redis中读取一条数据</span>
	<span class="token keyword">void</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">ValueOperations</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> ops<span class="token operator">=</span> stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Object</span> name<span class="token operator">=</span> ops<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="jedis" tabindex="-1"><a class="header-anchor" href="#jedis" aria-hidden="true">#</a> jedis</h6>`,11),Sn={href:"https://blog.csdn.net/I_r_o_n_M_a_n/article/details/122685882",target:"_blank",rel:"noopener noreferrer"},_n=n("p",null,"lettcus与jedis区别 jedis连接Redis.服务器是直连模式，当多线程模式下使用jedis会存在线程安全问题，解决方案可以通过配置连接池使每个连接专用，这样整体性能就大受影响。 lettcus基于Netty框架进行与Redis服务器连接，底层设计中采用StatefulRedisConnection。StatefulRedisConnection自身是线程安全的，可以保障并发访问安全问题，所以一个连接可以被多线程复用。当然lettcus也支持多连接实例一起工作。",-1),wn=n("h5",{id:"mongodb",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mongodb","aria-hidden":"true"},"#"),s(" MongoDB")],-1),qn=n("p",null,"MongoDB是一个开源、高性能、无模式的文档型数据库。NoSQL数据库产品中的一种，是最像关系型数据库的非 关系型数据库",-1),Bn=n("p",null,"MongoDB数据库的常用命令",-1),In={href:"https://blog.csdn.net/qq_55648724/article/details/128171457",target:"_blank",rel:"noopener noreferrer"},jn=n("p",null,"springBoot整合 mongoDB",-1),Mn={href:"https://blog.csdn.net/weixin_47343544/article/details/127175205",target:"_blank",rel:"noopener noreferrer"},Dn={href:"https://cloud.tencent.com/developer/article/2245018",target:"_blank",rel:"noopener noreferrer"},Tn=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 引入mongodb--&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-data-mongodb&lt;/artifactId&gt;
        &lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    @Autowired
	private MongoTemplate mongoTemplate;
	@Test
	void testMongo(){
		User user = new User();
		user.setName(&quot;一个名字&quot;);
		user.setAge(18);

		// 向 mongoDB 中存入一条数据
		mongoTemplate.save(user);
		// 从 mongoDB 中读取数据
		List&lt;User&gt; userlist = mongoTemplate.findAll(User.class);
		System.out.println(userlist);
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="elasticsearch-es" tabindex="-1"><a class="header-anchor" href="#elasticsearch-es" aria-hidden="true">#</a> Elasticsearch (ES)</h5><p>Elasticsearch是一个分布式全文搜索引擎</p>`,4),Pn={href:"https://www.elastic.co/cn/downloads/elasticsearch",target:"_blank",rel:"noopener noreferrer"},Cn={href:"https://blog.csdn.net/ganquanzhong/article/details/108633025",target:"_blank",rel:"noopener noreferrer"},Rn=t(`<h3 id="整合第三方数据" tabindex="-1"><a class="header-anchor" href="#整合第三方数据" aria-hidden="true">#</a> 整合第三方数据</h3><h4 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存" aria-hidden="true">#</a> 缓存</h4><p>缓存是一种介于数据永久存储介质与数据应用之间的数据临时存储介质</p><p>使用缓存可以有效的减少低速数据读取过程的次数（例如磁IO），提高系统性能 缓存不仅可以用于提高永久性存储介质的数据读取效率，还可以提供临时的数据存储空间</p><p>//测试缓存</p><p>msgService (interface)</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MsgService</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span>  <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">String</span> tel<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Boolean</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token class-name">String</span> tel<span class="token punctuation">,</span><span class="token class-name">String</span> code<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>msgServiceImpl.class</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MsgServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">MsgService</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> cache<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">String</span> tel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> code<span class="token operator">=</span>tel<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>tel<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>tel<span class="token punctuation">,</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> code<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Boolean</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token class-name">String</span> tel<span class="token punctuation">,</span> <span class="token class-name">String</span> code<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> queryCode<span class="token operator">=</span>cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>tel<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> code<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>queryCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MsgController.class</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/msg&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MsgController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">MsgService</span> msgService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;{tel}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span>  <span class="token class-name">String</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">String</span> tel<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> msgService<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>tel<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@PostMapping</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token class-name">String</span> tel<span class="token punctuation">,</span><span class="token class-name">String</span> code<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> msgService<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span> tel<span class="token punctuation">,</span> code<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SpringBoot:提供了缓存技术，方便缓存使用</p><p>1 导入缓存的依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        &lt;dependency&gt;
			&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
			&lt;artifactId&gt;spring-boot-starter-cache&lt;/artifactId&gt;
		&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 开启缓存功能 ： 在启动类上加上 @EnableCaching 注解</p><p>3 设置当前操作的结果数据进入缓存</p><p>@Cacheable( value 开辟缓存空间 key： 缓存根据id去查询，要有#)</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
    <span class="token annotation punctuation">@Cacheable</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">&quot;cacheSpace&quot;</span><span class="token punctuation">,</span>key<span class="token operator">=</span><span class="token string">&quot;#id&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Book</span> <span class="token function">getById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> bookDao<span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在不影响方法执行的情况下更新缓存时用CachePut</p><p>@CachePut(value=&quot;cacheSpace&quot;,key=&quot;#id&quot;)</p><p>不推荐将 @Cacheable 和 @CachePut 注解到同一个方法。</p><p>整合其他的缓存技术</p>`,22),An={href:"https://blog.csdn.net/Learning_xzj/article/details/125510872",target:"_blank",rel:"noopener noreferrer"},En={href:"https://blog.csdn.net/weixin_44299027/article/details/125559446",target:"_blank",rel:"noopener noreferrer"},Nn={href:"https://gitee.com/ld/J2Cache",target:"_blank",rel:"noopener noreferrer"},Ln=n("h3",{id:"任务",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#任务","aria-hidden":"true"},"#"),s(" 任务")],-1),zn=n("h4",{id:"定时任务",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#定时任务","aria-hidden":"true"},"#"),s(" 定时任务")],-1),On=n("p",null,"市面上流行的定时任务技术：Quartz ，Spring Task",-1),Un=n("p",null,"springboot整合Quartz",-1),Qn=n("p",null,"相关概念： 工作（job):用于定义具体执行的工作 工作明细（JobDetail):用于描述定时工作相关的信息 触发器(Trigger):用于描述触发工作的规则，通常使用cron表达式定义调度规则 调度器(Scheduler):描述了工作明细与触发器的对应关系",-1);function Vn(Wn,Fn){const e=i("ExternalLinkIcon"),p=i("pluginManagement");return x(),S("div",null,[w,n("p",null,[n("a",q,[s("(210条消息) 【已解决】Error: could not open `C:\\Program Files\\Java\\jre1.8.0_121\\lib\\amd64\\jvm.cfg‘_来老铁干了这碗代码的博客-CSDN博客"),a(e)])]),B,n("p",null,[s("删除pom.xml中 "),a(p),s(" 标签和里面的内容 plugins标签中加了jetty和tomcat,可以测试项目运行")]),I,n("p",null,[s("( compile命令编译 package命令打包 ) 访问路径为 ： jetty "),n("a",j,[s("http://localhost:8080/test"),a(e)]),s(" tomcat "),n("a",M,[s("http://localhost:8081/test"),a(e)])]),D,n("p",null,[s("决定看ssm框架视频， "),n("a",T,[s("【尚硅谷】SSM框架全套教程，MyBatis+Spring+SpringMVC+SSM整合一套通关_哔哩哔哩_bilibili"),a(e)]),s(" 。")]),n("p",null,[s("需要资料当然要到评论区取找了，资源链接："),n("a",P,[s("https://pan.baidu.com/s/1jx1hRb7ugMFFJP81Fvcy1Q?pwd=yyds"),a(e)]),s(" 提取码：yyds 。 "),n("a",C,[s("https://gitee.com/zhengguangqq/ssm-md"),a(e)]),s(" 尚硅谷的ssm md格式笔记")]),R,n("p",null,[n("a",A,[s("IDEA最右侧栏的Maven窗口不见了怎么调出来-百度经验 (baidu.com)"),a(e)])]),E,n("p",null,[n("a",N,[s("https://blog.csdn.net/weixin_43785284/article/details/122015400"),a(e)])]),L,n("p",null,[n("a",z,[s("https://blog.csdn.net/m0_67391121/article/details/126020133"),a(e)])]),O,n("p",null,[n("a",U,[s("(210条消息) MAVEN:打包报错 Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.1:compile_Int_Xu的博客-CSDN博客"),a(e)])]),Q,n("p",null,[s("VIM中常用命令 "),n("a",V,[s("https://blog.csdn.net/feosun/article/details/73196299"),a(e)])]),W,F,J,n("p",null,[n("a",H,[s("(210条消息) linux 安装mysql8.0 超详细图文教程__亮亮同學的博客-CSDN博客"),a(e)])]),n("p",null,[s("安装mysql，进行初始化时失败报错 ： "),n("a",G,[s(" 初始化Mysql报错：初始化数据库显示libaio.so.1_兔飞小朋友的博客-CSDN博客"),a(e)])]),n("p",null,[s("报错：log-error set to '/var/log/mariadb/mariadb.log', however file don't exists. Create writable for user 'mysql'. "),n("a",Y,[s("(219条消息) Linux安装MySQL时候出现log-error set to '/var/log/mariadb/mariadb.log', however file don't exists._BertonYip的博客-CSDN博客"),a(e)])]),K,n("p",null,[n("a",X,[s("(219条消息) Mysql 启动报错解析：Starting MySQL.. ERROR! The server quit without updating PID file (/usr/local/mysql/dat_清风的BLOG的博客-CSDN博客"),a(e)])]),n("p",null,[n("a",$,[s("Linux 安装 MySQL 8.0.26 超详细图文步骤 - yoodb - 博客园 (cnblogs.com)"),a(e)]),s(" (实测有效)")]),n("p",null,[n("a",Z,[s("(210条消息) Linux怎样到切换到超级用户_linux超级用户权限怎么打开_bo_无问西东的博客-CSDN博客"),a(e)])]),nn,n("p",null,[n("a",sn,[s("https://blog.csdn.net/weixin_39561473/article/details/90213914"),a(e)]),s(" （net_write_timeout = 900）")]),an,n("p",null,[n("a",en,[s("https://blog.csdn.net/kaifaxiaoliu/article/details/80403736"),a(e)])]),tn,pn,n("p",null,[n("a",ln,[s("(210条消息) 05.navicat连接不上虚拟机内的mysql_navicat连不上虚拟机中的mysql_weixin_49015210的博客-CSDN博客"),a(e)])]),on,n("p",null,[n("a",cn,[s("(214条消息) springboot与maven的多环境兼容解决方案_springboot兼容pom_沐雪架构师的博客-CSDN博客"),a(e)])]),un,n("p",null,[n("a",dn,[s("(214条消息) SpringBoot的日志_springboot 日志_威少总冠军的博客-CSDN博客"),a(e)])]),rn,n("p",null,[n("a",vn,[s("(214条消息) springboot实现热部署_springboot热部署_lwj_07的博客-CSDN博客"),a(e)])]),kn,n("p",null,[n("a",mn,[s("(215条消息) SpringBoot测试用例设置随机数据_springboot生成随机id_梨轻巧的博客-CSDN博客"),a(e)])]),bn,n("p",null,[n("a",gn,[s("SpringBoot使用JdbcTemplate_慕课手记 (imooc.com)"),a(e)])]),hn,n("p",null,[s("参考： "),n("a",yn,[s("(215条消息) springboot整合redis_springboot redis_lwj_07的博客-CSDN博客"),a(e)])]),n("p",null,[s("​ "),n("a",fn,[s("(215条消息) 如何用SpringBoot整合Redis（详细讲解~）_我是一棵卷心菜的博客-CSDN博客"),a(e)])]),xn,n("p",null,[n("a",Sn,[s("(216条消息) Redis 基础 Jedis -- Jedis（Java程序操作Redis的工具）_CodeJiao的博客-CSDN博客"),a(e)])]),_n,wn,qn,Bn,n("p",null,[n("a",In,[s("(216条消息) MongoDB数据库的常用命令_mongodb数据库命令_勤奋上进的兔子的博客-CSDN博客"),a(e)])]),jn,n("p",null,[n("a",Mn,[s("(216条消息) 《SpringBoot篇》15.SpringBoot整合MongoDB超详细教程（包括安装教程）_springboot mongodb_陈老老老板的博客-CSDN博客"),a(e)])]),n("p",null,[n("a",Dn,[s("全面学习MongoDB，在Spring Boot项目中整合 MongoDB-腾讯云开发者社区-腾讯云 (tencent.com)"),a(e)])]),Tn,n("p",null,[s("下载： "),n("a",Pn,[s("Download Elasticsearch | Elastic"),a(e)])]),n("p",null,[s("文档参考： "),n("a",Cn,[s("(217条消息) ElasticSearch使用教程、设计到实战_ForFuture Code的博客-CSDN博客"),a(e)])]),Rn,n("p",null,[n("a",An,[s("(218条消息) 【SpringBoot整合缓存】-----Redis缓存篇_springboot redis缓存_潮浪之巅的博客-CSDN博客"),a(e)]),s(),n("a",En,[s("(218条消息) 【JetCache】JetCache的使用方法与步骤_No8g攻城狮的博客-CSDN博客"),a(e)])]),n("p",null,[n("a",Nn,[s("J2Cache: Java 两级缓存框架，可以让应用支持两级缓存框架 ehcache(Caffeine) + redis 。避免完全使用独立缓存系统所带来的网络IO开销问题 (gitee.com)"),a(e)])]),Ln,zn,On,Un,Qn])}const Yn=f(_,[["render",Vn],["__file","1.html.vue"]]);export{Yn as default};
