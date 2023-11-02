import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,a as n,b as s,e as t,f as e,r as c}from"./app.a6537d53.js";const l={},u=n("h1",{id:"springboot",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#springboot","aria-hidden":"true"},"#"),s(" springboot")],-1),r={id:"学前拓展-mybatis-b站视频资料",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#学前拓展-mybatis-b站视频资料","aria-hidden":"true"},"#",-1),k={href:"https://www.aliyundrive.com/drive/folder/64b62f7c7f489a9922244688af39ca6ae035ebb2",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,"idea操作，编译报错解决",-1),m={href:"https://jingyan.baidu.com/article/48b558e35cbfc73e39c09a4e.html",target:"_blank",rel:"noopener noreferrer"},b=n("strong",null,"按下Ctrl+Shift+A",-1),g=n("p",null,"java： 错误：无效的源发行版：14",-1),h={href:"https://blog.csdn.net/weixin_43785284/article/details/122015400",target:"_blank",rel:"noopener noreferrer"},y=n("p",null,"JAVA‘无效目标发行版 17’的解决方案",-1),f={href:"https://blog.csdn.net/m0_67391121/article/details/126020133",target:"_blank",rel:"noopener noreferrer"},w=e(`<h2 id="springboot整合junit" tabindex="-1"><a class="header-anchor" href="#springboot整合junit" aria-hidden="true">#</a> springBoot整合junit</h2><p>1.导入测试对应的starter 2,测试类使用@SpringBootTest修饰 3,使用自动装配的形式添加要测试的对象</p><p>springBoot项目创建会自动生成测试类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1,测试类如果存在于引导类所在包或子包中无需指定引导类 2.测试类如果不存在于引导类所在的包或子包中需要通过@SpringBootTest(c1asses= ***.class)属性指定引导类</p><h2 id="整合mybatis-mysql-数据库配置" tabindex="-1"><a class="header-anchor" href="#整合mybatis-mysql-数据库配置" aria-hidden="true">#</a> 整合myBatis ，mysql（数据库配置）</h2><p>该心配置：数据库连接相关信息（连什么？连谁？什么权限) 映射配置：SQL映射（ML/注解)</p><p>建模块时可勾选 SQL-&gt;MyBatis Framework,MySQL Driver ,不勾选则自己导入坐标</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        &lt;!--1.导入对应的starter--&gt;
        
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意事项：</p><p>1,勾选MyBatis技术，也就是导入MyBatis对应的starter 2.数据库连接相关信息转换成配置 3.数据库SQL映射需要添加@Mapper被容器识别到</p><h2 id="整合mybatis-plus" tabindex="-1"><a class="header-anchor" href="#整合mybatis-plus" aria-hidden="true">#</a> 整合MyBatis-Plus</h2><p>MyBatis-Plus与MyBatis区别: 导入坐标不同 数据层实现简化</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        &lt;dependency&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1,手工添加MyBatis-Plus对应的starter 2.数据层接口使用BaseMapperi简化开发 3.需要使用的第三方技术无法通过勾选确定时，需要手工添加坐标</p><h2 id="整合-druid" tabindex="-1"><a class="header-anchor" href="#整合-druid" aria-hidden="true">#</a> 整合 Druid</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssmp-整合案例" tabindex="-1"><a class="header-anchor" href="#ssmp-整合案例" aria-hidden="true">#</a> SSMP 整合案例</h2><p>maven导入相关依赖</p><h3 id="实体类创建-lombok" tabindex="-1"><a class="header-anchor" href="#实体类创建-lombok" aria-hidden="true">#</a> 实体类创建(lombok)</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 仅用作实体类注解展示</span>
<span class="token annotation punctuation">@TableName</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token comment">//@TableId 将属性所对应的字段指定为主键</span>
    <span class="token comment">//@TableId,注解的value,属性用于指定主键的字段</span>
    <span class="token comment">//@TableId注解的type属性设置主罐生成策略</span>
    <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>type <span class="token operator">=</span> <span class="token class-name">IdType</span><span class="token punctuation">.</span><span class="token constant">AUTO</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token comment">//指定属性所对应的字段名 如数据库字段名为 （user_name）</span>
    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> pwd<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span><span class="token string">&quot;is_deleted&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@TableLogic</span>  <span class="token comment">// 逻辑删除，数据库字段加（is_deleted）</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> isDelated<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> token<span class="token punctuation">;</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Book.class</strong></p><p>Lombok,一个Java类库，提供了一组注解，简化P0J0实体类开发</p><p>lombok版本由SpringBoot提供，导入依赖无需指定版本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
			&lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
			&lt;artifactId&gt;lombok&lt;/artifactId&gt;
		&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用注解：@Data</p><p>为当前实体类在编译期设置对应的get/set方法，toString.方法，hashCode.方法，equals方法等</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Data
public class Book {
    private Integer id;
    private String name;
    private String author;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据层开发" tabindex="-1"><a class="header-anchor" href="#数据层开发" aria-hidden="true">#</a> 数据层开发</h3><p>导入配置数据库依赖和连接信息</p><p><em><strong><u>myBatis写法</u></strong></em></p><p><strong>bookDao Interface</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">BookDao</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from book where id = #{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">Book</span> <span class="token function">getBookById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//  myBatis-plus 写法简化</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查询测试" tabindex="-1"><a class="header-anchor" href="#查询测试" aria-hidden="true">#</a> 查询测试：</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="新增保存测试" tabindex="-1"><a class="header-anchor" href="#新增保存测试" aria-hidden="true">#</a> 新增保存测试：</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改测试" tabindex="-1"><a class="header-anchor" href="#修改测试" aria-hidden="true">#</a> 修改测试：</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 将数据库 id 为 2 的数据做更新</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">void</span> <span class="token function">testUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">Book</span> book <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		book<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		book<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;三国&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		book<span class="token punctuation">.</span><span class="token function">setAuthor</span><span class="token punctuation">(</span><span class="token string">&quot;施耐庵&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		bookDao<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>book<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除测试" tabindex="-1"><a class="header-anchor" href="#删除测试" aria-hidden="true">#</a> 删除测试：</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 删除数据库 id 为 4 的那条数据</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">void</span> <span class="token function">testDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		bookDao<span class="token punctuation">.</span><span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：1,手工导入starter.坐标（2个) 2,配置数据源与MyBatisPlus对应的配置 3.开发Dao接口（继承BaseMapper) 4.制作测试类测试Dao功能是否有效</p><h4 id="分页查询测试" tabindex="-1"><a class="header-anchor" href="#分页查询测试" aria-hidden="true">#</a> 分页查询测试：</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1,使用IPage封装分页数据 2,分页操作依赖MyBatisPlus:分页拦截器实现功能 3.借助MyBatisPlus日志查阅执行SQL语句</p><h4 id="按条件查询测试" tabindex="-1"><a class="header-anchor" href="#按条件查询测试" aria-hidden="true">#</a> 按条件查询测试：</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 查询 name 字段 为 西游记 的数据，类似select * from book where name like %spring%</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为方便调试可以开启mybatisplus的日志" tabindex="-1"><a class="header-anchor" href="#为方便调试可以开启mybatisplus的日志" aria-hidden="true">#</a> 为方便调试可以开启MyBatisPlus的日志</h3><p>application.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
  <span class="token key atrule">global-config</span><span class="token punctuation">:</span>
    <span class="token key atrule">db-config</span><span class="token punctuation">:</span>
      <span class="token key atrule">id-type</span><span class="token punctuation">:</span> auto
  <span class="token key atrule">configuration</span><span class="token punctuation">:</span>
    <span class="token key atrule">log-impl</span><span class="token punctuation">:</span> org.apache.ibatis.logging.stdout.StdOutImpl

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="业务层开发" tabindex="-1"><a class="header-anchor" href="#业务层开发" aria-hidden="true">#</a> 业务层开发</h3><h4 id="普通的业务开发操作" tabindex="-1"><a class="header-anchor" href="#普通的业务开发操作" aria-hidden="true">#</a> 普通的业务开发操作</h4><p>新建 service/BookService Interface</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface BookService {
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.Service接口名称定义成业务名称，并与Dao接口名称进行区分 2.制作测试类测试Service功能是否有效</p><h4 id="mybatis-plus-简化常规的业务操作" tabindex="-1"><a class="header-anchor" href="#mybatis-plus-简化常规的业务操作" aria-hidden="true">#</a> mybatis-plus 简化常规的业务操作</h4><p>快速开发方案 使用MyBatisPlus提供有业务层通用接口 ISerivce 与业务层通用实现类(ServiceImpl&lt;M,T&gt;) 在通用类基础上做功能重载或功能追加 注意重载时不要覆盖原始操作，避免原始提供的功能丢失</p><p>新建 service/IbookService Interface</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface IbookService extends IService&lt;Book&gt; {

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表现层开发" tabindex="-1"><a class="header-anchor" href="#表现层开发" aria-hidden="true">#</a> 表现层开发</h3><p>​ 基于Restful进行表现层接口开发 ​ 使用Postman测试表现层接口功能</p><p>1.基于Restfu1制作表现层接口 新增：POST 删除：DELETE 修改：PUT 查询：GET 2.接收参数 实体数据：@RequestBody 路径变量：@PathVariable</p>`,92),S={href:"https://blog.csdn.net/CJPSR/article/details/131094717",target:"_blank",rel:"noopener noreferrer"},q=e(`<p>controller/BookController restful接口</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="表现层消息一致性处理" tabindex="-1"><a class="header-anchor" href="#表现层消息一致性处理" aria-hidden="true">#</a> 表现层消息一致性处理</h4><p>设计表现层返回结果的模型类，用于后端与前端进行数据格式统一，也称为前后端数据协议</p><p>controller/util/R</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 当返回数据时，需要什么数据自行添加，并加入对应的构造函数</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.设计统一的返回值结果类型便于前端开发读取数据 2,返回值结果类型可以根据需求自行设定，没有固定格式 3,返回值结果模型类用于后端与前端进行数据格式统一，也称为前后端数据协议</p><h4 id="springmvc异常处理器" tabindex="-1"><a class="header-anchor" href="#springmvc异常处理器" aria-hidden="true">#</a> springMVC异常处理器</h4><p>当接口出现异常时，返回数据又不一致，需要进行处理（当要给不同异常做不同处理时，可以多写几个异常处理）</p><p>controller/util/ProjectExceptionAdvics</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 作为springMVC异常处理器</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打包" tabindex="-1"><a class="header-anchor" href="#打包" aria-hidden="true">#</a> 打包</h2><p>打开maven面板， 先clean,在点击package打包（点击 Toggle &#39;Skip Tests&#39;Mode 跳过测试过程，提示不安全）</p><p>（MAVEN:打包报错 Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.1:compile）</p>`,16),x={href:"https://blog.csdn.net/Int_Xu/article/details/108184768",target:"_blank",rel:"noopener noreferrer"},_=e(`<p>修改pom.xml （配置和版本如下）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;build&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令行 java -jar jar包文件名 运行</p><p>指定端口号 java -jar jar包文件名 <strong>--server.port=8085</strong></p>`,4),I={href:"https://blog.csdn.net/qq_44142640/article/details/111687863",target:"_blank",rel:"noopener noreferrer"},T={href:"https://blog.csdn.net/liu_feng_zi_/article/details/118730467",target:"_blank",rel:"noopener noreferrer"},B=e(`<p>打包后运行，按条件查询时，出现类似 evaluating expression ‘ew.sqlSegment != null and ew.sqlSegment != ‘‘ and ew. mybaties plus问题 的错误：原因是mybatis-plus的版本不兼容，（3.5.2可以正常使用）</p><p>Windonws.端口被占用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#查询端口
netstat -ano
#查询指定端口
netstat-ano |findstr &quot;端口号&quot;
#根据进程PID查询进程名称
tasklist |findstr &quot;进程PID号&quot;
#根据PID杀死任务
taskki11/F/PID &quot;进程PID号&quot;
#根据进程名称杀死任务
taskki11 -f -t -im &quot;进程名称&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署运行-配置服务环境" tabindex="-1"><a class="header-anchor" href="#部署运行-配置服务环境" aria-hidden="true">#</a> 部署运行(配置服务环境)</h2>`,4),j={href:"https://blog.csdn.net/feosun/article/details/73196299",target:"_blank",rel:"noopener noreferrer"},M=n("p",null,"linux安装java运行环境：jdk",-1),C=n("p",null,"上传 jar 包 到usr/local/app 文件夹下",-1),R=n("p",null,"linux下载mysql usr/local/mysql",-1),D={href:"https://blog.csdn.net/u011421988/article/details/107234718",target:"_blank",rel:"noopener noreferrer"},P={href:"https://blog.csdn.net/qq_41817925/article/details/118674315",target:"_blank",rel:"noopener noreferrer"},A={href:"https://blog.csdn.net/BertonYip/article/details/80829524",target:"_blank",rel:"noopener noreferrer"},O=n("p",null,"Mysql 启动报错解析：Starting MySQL.. ERROR! The server quit without updating PID file (/usr/local/mysql/dat",-1),L={href:"https://blog.csdn.net/Qevery678/article/details/96422599",target:"_blank",rel:"noopener noreferrer"},N={href:"https://www.cnblogs.com/MrYoodb/p/15811199.html",target:"_blank",rel:"noopener noreferrer"},E={href:"https://blog.csdn.net/qq_43611486/article/details/99609644",target:"_blank",rel:"noopener noreferrer"},Q=e(`<h3 id="linux安装mysql总结" tabindex="-1"><a class="header-anchor" href="#linux安装mysql总结" aria-hidden="true">#</a> <strong>linux安装MySQL总结</strong></h3><p>/usr/local 目录下</p><p><strong>下载MySQL</strong> <code>wget https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-8.0.21-linux-glibc2.12-x86_64.tar.xz</code></p><p><strong>解压mysql</strong> <code>tar xvJf mysql-8.0.21-linux-glibc2.12-x86_64.tar.xz</code></p><p><strong>重命名文件夹</strong> （重命名为MySQL） <code>mv mysql-8.0.21-linux-glibc2.12-x86_64 mysql</code></p><p><strong>/usr/local/mysql 目录下创建data文件夹 存储文件</strong> <code>mkdir data</code></p><p><strong>创建用户组以及用户和密码</strong> <code>groupadd mysql</code> <code>useradd -g mysql mysql</code></p><p><strong>授权用户 改变mysql目录权限</strong> <code>chown -R mysql.mysql /usr/local/mysql</code></p><p><strong>数据库初始化</strong> <code>./bin/mysqld --user=mysql --basedir=/usr/local/mysql --datadir=/usr/local/mysql/data --initialize</code> 得到临时密码，要记住，后面修改数据库密码要用到</p><p><strong>修改my.cnf文件</strong> <code>vi /etc/my.cnf</code> 内容如下所示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[mysqld]
    basedir = /usr/local/mysql
    datadir = /usr/local/mysql/data
    socket = /usr/local/mysql/mysql.sock
    character-set-server=utf8
    port = 3306
   sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES
   max_allowed_packet = 500M
   net_read_timeout = 120
    net_write_timeout = 900
 [client]
   socket = /usr/local/mysql/mysql.sock
   default-character-set=utf8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2013报错长连接 加 net_write_timeout = 900)</p><p><strong>创建mysql服务</strong></p><p>（1）<code>cp -a /usr/local/mysql/support-files/mysql.server /etc/init.d/mysqld</code></p><p>（2）赋予权限，使用<code>chmod +x /etc/rc.d/init.d/mysql</code>d命令；</p><p>（3）使用<code>chkconfig --add mysqld</code>创建mysql服务。</p><p>检查mysql服务是否生效，使用<code>chkconfig --list mysqld</code>命令。</p><p><strong>配置全局环境变量</strong></p><p>编辑/etc/profile文件，使用vim /etc/profile命令，在profile文件中添加如下两行配置，使用:wq命令保存后退出。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`export PATH=$PATH:/usr/local/mysql/bin:/usr/local/mysql/lib\`\`export PATH\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置环境变量立即生效使用<code>source /etc/profile</code>命令。</p><p><strong>启动mysql服务</strong>，使用service mysql start命令；使用service mysql status命令，查看是否启动成功。</p><p>service mysql start （用这个命令） service mysql restart (重启)</p><p><strong>查看启动状态</strong></p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>service mysql status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>将mysql命令添加到服务</strong></p><div class="language-cobol line-numbers-mode" data-ext="cobol"><pre class="language-cobol"><code>ln -s <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>mysql<span class="token operator">/</span>bin<span class="token operator">/</span>mysql <span class="token operator">/</span>usr<span class="token operator">/</span>bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>登录mysql</strong> <code>mysql -uroot -p</code> 密码使用之前随机生成的密码</p><p><strong>修改root密码</strong> 其中123456是新的密码自己设置</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">USER</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;localhost&#39;</span> IDENTIFIED <span class="token keyword">WITH</span> mysql_native_password <span class="token keyword">BY</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>执行 使密码生效</strong> <code>flush privileges</code></p><p><strong>设置mysql远程登录</strong></p><p>1）切换数据库，使用use mysql;命令。</p><p>2）修改mysql库中host值，使用update user set host=&#39;%&#39; where user=&#39;root&#39; limit 1;命令。</p><p>3）刷新mysql权限，使用flush privileges;命令。</p><p>navicat连接虚拟机的MySQL连不上，查看打开修改虚拟机的端口</p>`,36),U={href:"https://blog.csdn.net/weixin_49015210/article/details/117748687",target:"_blank",rel:"noopener noreferrer"},z=n("p",null,[s("服务器上指定端口号 java -jar jar包文件名 "),n("strong",null,"--server.port=8085"),s(" 运行jar包时，要开启端口号")],-1),J=n("p",null,"输入命令然后回车 /sbin/iptables -I INPUT -p tcp --dport 8085 -j ACCEPT",-1),V=n("p",null,"再次输入 iptables -vnL|grep 8085 回车即可看到8085端口状态信息",-1),F=n("p",null,"当端口都打开后，用postman测试接口，成功返回数据。",-1),W=n("p",null,"1.使用 jar 命令启动SpringBoot工程时可以使用临时属性替换配置文件中的属性 2.临时属性添加方式：java -jar 工程名.jar --属性名=值 3.多个临时属性之间使用空格分隔 4.临时属性必须是当前boot工程支持的属性，否则设置无效",-1),H=n("h3",{id:"扩展linux安装redis",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#扩展linux安装redis","aria-hidden":"true"},"#"),s(" 扩展linux安装redis")],-1),K=n("br",null,null,-1),G={href:"https://download.redis.io/releases/",target:"_blank",rel:"noopener noreferrer"},Y=n("p",null,"（注意下载版本，有的版本下载make报错）",-1),X=n("p",null,"2.解压安装包，命令：tar -zxvf redis-4.0.0.tar.gz -C /usr/local 3.安装Redis的依赖环境gcc,命令：yum install gcc-c++ 4.进入/usr/local/redis-4.0.0,进行编译，命令：make 5.进入redis的src目录，进行安装，命令：make install",-1),$=n("p",null,"Linux中redis服务启动，可以使用redis-server,默认端口号为6379 ./redis.server",-1),Z=n("p",null,"Ctrl+C停止Redis服务",-1),nn=n("p",null,"启动redis客户端 ./redis-cli （命令keys * 查看所有数据 ）",-1),sn=n("h3",{id:"扩展linux安装jdk",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#扩展linux安装jdk","aria-hidden":"true"},"#"),s(" 扩展linux安装jdk")],-1),an={href:"https://blog.csdn.net/m0_50217781/article/details/112414571",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://so.csdn.net/so/search?q=openjdk&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},en={href:"https://so.csdn.net/so/search?q=version&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},pn=n("h3",{id:"linux下打开对外开放端口号",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#linux下打开对外开放端口号","aria-hidden":"true"},"#"),s(" linux下打开对外开放端口号")],-1),on={href:"https://blog.csdn.net/laidanlove250/article/details/97667113",target:"_blank",rel:"noopener noreferrer"},cn=e(`<h2 id="临时属性设置-开发环境" tabindex="-1"><a class="header-anchor" href="#临时属性设置-开发环境" aria-hidden="true">#</a> 临时属性设置（开发环境）</h2><p>通过编程形式带参数启动SpringBoot程序，为程序添加运行参数</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringMybatisApplication</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arg <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		arg<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;--server.port=8080&quot;</span><span class="token punctuation">;</span>

		<span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">SpringMybatisApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不携带参数启动SpringBoot程序</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringMybatisApplication</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">SpringMybatisApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置文件分类" tabindex="-1"><a class="header-anchor" href="#配置文件分类" aria-hidden="true">#</a> 配置文件分类</h2><p><strong>1.SpringBoot中4级配置文件</strong> 1级：file:config/application.yml 【最高】 2级：file:application.yml 3级：classpath:config/application.yml 4级：classpath:application.yml 【最低】 <strong>2.作用：</strong> 1级与2级留做系统打包后设置通用属性，1级常用于运维经理进行线上整体项目部署方案调控 3级与4级用于系统开发阶段设置通用属性，3级常用于项目经理进行整体项目属性调控</p><p>1.配置文件分为4种 项目类路径配置文件：服务于开发人员本机开发与测试 项目类路径conf1g目录中配置文件：服务于项目经理整体调控 工程路径配置文件：服务于运维人员配置涉密线上环境 工程路径config目录中配置文件：服务于运维经理整体调控 2,多层级配置文件间的属性采用叠加并覆盖的形式作用于程序</p><p>1.SpringBoot在开发和运行环境均支持使用临时参数修改工程配置 2.SpringBoot支持4级配置文件，应用于开发与线上环境进行配置的灵活设置 3.SpringBoot.支持使用自定义配置文件的形式修改配置文件存储位置 4.基于微服务开发时配置文件将使用配置中心进行管理</p><h2 id="多环境开发" tabindex="-1"><a class="header-anchor" href="#多环境开发" aria-hidden="true">#</a> 多环境开发</h2><h3 id="application-yml中配置多个环境" tabindex="-1"><a class="header-anchor" href="#application-yml中配置多个环境" aria-hidden="true">#</a> application.yml中配置多个环境</h3><p>1,多环境开发需要设置若干种常用环境，例如开发、生产、测试环境 2,yaml格式中设置多环境使用 --- 区分环境设置边界 3.每种环境的区别在于加载的配置属性不同 4,启用某种环境时需要指定启动时使用该环境</p><p>application.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#应用环境  ---下可配置多个环境，active选择使用哪个环境</span>
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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多个配置文件" tabindex="-1"><a class="header-anchor" href="#多个配置文件" aria-hidden="true">#</a> 多个配置文件</h3><p>1.主启动配置文件application.yml （active配置环境文件名称用哪个）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring:
  profiles:
    active: dev

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.环境分类配置文件application-pro.yml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server:
  port: 80

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3,环境分类配置文件application-dev.yml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server:
  port:81

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.环境分类配置文件application-test.yml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server:
  port:82

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="group属性设置配置文件分组" tabindex="-1"><a class="header-anchor" href="#group属性设置配置文件分组" aria-hidden="true">#</a> group属性设置配置文件分组</h3><p>多环境开发使用group属性设置配置文件分组，便于线上维护管理</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring:
  profiles:
    active: dev
    group:
      &quot;dev&quot;:devDB,devRedis,devMVC
      &quot;pro&quot;:proDB,proRedis,proMVC
      &quot;test&quot;:testDB,testRedis,testMVC

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="springboot与maven的多环境兼容" tabindex="-1"><a class="header-anchor" href="#springboot与maven的多环境兼容" aria-hidden="true">#</a> springboot与maven的多环境兼容</h3>`,27),ln={href:"https://blog.csdn.net/puzi0315/article/details/127196143",target:"_blank",rel:"noopener noreferrer"},un=e(`<p>1 mave 的 pom.xml 下加入如下环境配置，每个profile配置一个环境变量， activation &gt; activeByDefault 为 true ,代表使用这个环境</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;profiles&gt;
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 SpringBoot中引用Maven属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring:
  profiles:
    active: @pom.profile@

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3 执行Maven打包指令，并在生成的boot打包文件 .jar文件中查看对应信息</p><p>注意：</p><p>1 当Maven与SpringBoot同时对多环境进行控制时，以Mavn为主，SpringBoot使用@，，@占位符读取Maven.对应的配置属性值 2 基于SpringBoot读取Maveni配置属性的前提下，如果在Idea下测试工程时pom.xml每次更新需要手动compile方可生效</p><h2 id="日志" tabindex="-1"><a class="header-anchor" href="#日志" aria-hidden="true">#</a> 日志</h2><p>日志(log)作用：</p><p>编程期调试代码</p><p>运营期记录信息</p><p>​ 记录日常运营重要信息（峰值流量、平均响应时长…） ​ 记录应用报错信息（错误堆栈） ​ 记录运维过程数据（扩容、宕机、报警…)</p>`,12),rn={href:"https://blog.csdn.net/gjwloveforever/article/details/124774662",target:"_blank",rel:"noopener noreferrer"},dn=e(`<p>日志级别 TRACE:运行堆栈信息，使用率低 DEBUG:程序员调试代码使用 INFO:记录运维过程数据 WARN:记录运维过程报警数据 ERROR:记录错误堆栈信息 FATAL:灾难信息，合并计入ERROR</p><p>1,日志用于记录开发调试与运维过程消息 2,日志的级别共6种，通常使用4种即可，分别是DEBUG,INF0,WARN,ERROR 3,可以通过日志组或代码包的形式进行日志显示级别的控制</p><p>application.yml 日志配置</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">file</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> server.log  <span class="token comment">#普通配置生成日志的文件名</span>
  <span class="token key atrule">logback</span><span class="token punctuation">:</span>
    <span class="token key atrule">rollingpolicy</span><span class="token punctuation">:</span>
      <span class="token key atrule">max-file-size</span><span class="token punctuation">:</span> 10MB   <span class="token comment"># 一个日志文件最大的大小</span>
      <span class="token key atrule">file-name-pattern</span><span class="token punctuation">:</span> server.%d<span class="token punctuation">{</span>yyyy<span class="token punctuation">-</span>MM<span class="token punctuation">-</span>dd<span class="token punctuation">}</span>.%i.log  <span class="token comment">#生成多条日志文件时,配置文件名格式</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="热部署-只在开发环境有效" tabindex="-1"><a class="header-anchor" href="#热部署-只在开发环境有效" aria-hidden="true">#</a> 热部署（只在开发环境有效）</h2>`,5),kn={href:"https://blog.csdn.net/lwj_07/article/details/126226074",target:"_blank",rel:"noopener noreferrer"},vn=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>各种方式一定要加上devtools的依赖（在idea设置也需要引入devtools的依赖）
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-devtools&lt;/artifactId&gt;
    &lt;optional&gt;true&lt;/optional&gt;
&lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置高优先级属性禁用热部署</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@SpringBootApplication
public class SpringMybatisApplication {

	public static void main(String[] args) {

		System.setProperty(&quot;spring.devtools.restart.enabled&quot;,&quot;false&quot;);

		SpringApplication.run(SpringMybatisApplication.class, args);
	}

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实用开发" tabindex="-1"><a class="header-anchor" href="#实用开发" aria-hidden="true">#</a> 实用开发</h2><h3 id="bean-属性绑定" tabindex="-1"><a class="header-anchor" href="#bean-属性绑定" aria-hidden="true">#</a> bean 属性绑定</h3><p>application.yml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>servers:
  ipAdress: 127.0.0.1
  port: 2345
  timeOut: -1


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ServerConfig.class 实体类</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Component   //定义Spring管理Bean
@Data      // lombok配置
@ConfigurationProperties(prefix = &quot;servers&quot;)  //提供读取配置文件的一个注解
public class ServerConfig {
    private String ipAdress;
    private int port;
    private Long timeout;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解除使用@ConfigurationProperties注释警告（加 dependency ）</p><p>Spring Boot Configuration Annotation Processor not configured Open Documentation.....</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        &lt;dependency&gt;
			&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
			&lt;artifactId&gt;spring-boot-configuration-processor&lt;/artifactId&gt;
		&lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用@ConfigurationProperties.为第三方bean绑定属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Bean
@ConfigurationProperties(prefix= &quot;datasource&quot;)
public DruidDataSource dataSource(){
     DruidDataSource ds new DruidDataSource();
     return ds;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>datasource:
  driverclassName: com.mysql.jdbc.Driver

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@EnableConfigurationProperties注解可以将使用@ConfigurationProperties注解对应的类加入Spring容器</p><p>注意：@EnableConfigurationProperties.与@Component不能同时使用</p><h3 id="springboot支持jdk8提供的时间与空间计量单位" tabindex="-1"><a class="header-anchor" href="#springboot支持jdk8提供的时间与空间计量单位" aria-hidden="true">#</a> SpringBoot支持JDK8提供的时间与空间计量单位</h3><p>@DurationUnit 注解在实体类中配置属性的 时间单位</p><p>@DurationUnit注解在实体类中配置属性的 容量单位</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class ServerConfig {
    private String ipAdress;
    private int port;
    private Long timeout;

    @DurationUnit(ChronoUnit.MINUTES)  // 时间属性单位是分钟
    private Duration setTimeOut;
    @DataSizeUnit(DataUnit.MEGABYTES)  // 容量属性单位是MB
    private DataSize dataSize;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bean属性校验" tabindex="-1"><a class="header-anchor" href="#bean属性校验" aria-hidden="true">#</a> bean属性校验</h2><p>1 添加依赖： 导入JSR383规范</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
			&lt;groupId&gt;javax.validation&lt;/groupId&gt;
			&lt;artifactId&gt;validation-api&lt;/artifactId&gt;
		&lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 @Validated 用于开启配置校验</p><p>@Max，@Min 等注解用于配置属性具体的配置规则</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Validated
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4 总结</p><p>1,启用Bean属性校验 导入JSR303与Hibernate校验框架坐标 使用@Validated注解启用校验功能 使用具体校验规则规范数据校验格式</p><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><h3 id="临时参数" tabindex="-1"><a class="header-anchor" href="#临时参数" aria-hidden="true">#</a> 临时参数</h3><p>application.yml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>test:
  prop: value1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取yml数据，或者临时参数。（临时参数优先级：args&gt;properties &gt;yml）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span><span class="token punctuation">(</span>properties<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;test.prop=testvalue1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>args<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;--test.arg=testvalue2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PropertiesAndArgsTest</span>
        <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${test.prop}&quot;</span><span class="token punctuation">)</span>  <span class="token comment">//获取参数</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> msg<span class="token punctuation">;</span>
        <span class="token annotation punctuation">@Test</span>
        <span class="token keyword">void</span> <span class="token function">testProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="加载测试配置" tabindex="-1"><a class="header-anchor" href="#加载测试配置" aria-hidden="true">#</a> 加载测试配置</h3><p>使用@Import注解加载当前测试类专用的配置（在测试中加载）</p><p>加载测试范围配置应用于小范围测试环境</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@SpringBootTest
@Import(MsgConfig.class)   // 加载 MsgConfig.class 的文件
public class ConfigurationTest{
  @Autowired   // msg是在MsgConfig.class中的一个bean
  private String msg;
  @Test
  void testConfiguration(){
    System.out.println(msg);
  }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="web环境模拟测试" tabindex="-1"><a class="header-anchor" href="#web环境模拟测试" aria-hidden="true">#</a> web环境模拟测试</h3><p>web环境模拟测试 设置测试端口 模拟测试启动 模拟测试匹配（各组成部分信息均可匹配)</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span> <span class="token punctuation">(</span>webEnvironment<span class="token operator">=</span><span class="token class-name">SpringBootTest<span class="token punctuation">.</span>WebEnvironment</span><span class="token punctuation">.</span><span class="token constant">RANDOM_PORT</span><span class="token punctuation">)</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="业务层测试事务回滚" tabindex="-1"><a class="header-anchor" href="#业务层测试事务回滚" aria-hidden="true">#</a> 业务层测试事务回滚</h3><p>使测试时的数据不会加到数据库中</p><p>为测试用例添加事务，SpringBoot会对测试用例对应的事务提交操作进行回滚</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@SpringBootTest
@Transactional

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想在测试用例中提交事务，可以通过@Rol1back注解设置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@SpringBootTest
@Transactional
@Rollback(false)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="springboot测试用例设置随机数据" tabindex="-1"><a class="header-anchor" href="#springboot测试用例设置随机数据" aria-hidden="true">#</a> SpringBoot测试用例设置随机数据</h3>`,52),mn={href:"https://blog.csdn.net/m0_45877477/article/details/125481585",target:"_blank",rel:"noopener noreferrer"},bn=e(`<h2 id="数据层解决方案" tabindex="-1"><a class="header-anchor" href="#数据层解决方案" aria-hidden="true">#</a> 数据层解决方案</h2><p>现有数据层解决方案技术选型 Druid +MyBatis-Plus +MySQL</p><h3 id="内嵌的数据源" tabindex="-1"><a class="header-anchor" href="#内嵌的数据源" aria-hidden="true">#</a> 内嵌的数据源</h3><p>SpringBoot提供了3种内嵌的数据源对象供开发者选择：</p><p>HikariCP:默认内置数据源对象 Tomcat提供DataSource：HikariCP不可用的情况下，且在web环境中，将使用tomcat服务器配置的数据源对象 Commons DBCP:Hikariz不可用，tomcat数据源也不可用，将使用dbcp数据源</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysq1://localhost:3306/ssm_db
    username: root
    password: root
  hikari:
    maximum-pool-size: 50

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内置持久化解决方案一一jdbctemplate" tabindex="-1"><a class="header-anchor" href="#内置持久化解决方案一一jdbctemplate" aria-hidden="true">#</a> 内置持久化解决方案一一JdbcTemplate</h3>`,7),gn={href:"https://www.imooc.com/article/46879",target:"_blank",rel:"noopener noreferrer"},hn=e('<h3 id="内嵌数据库" tabindex="-1"><a class="header-anchor" href="#内嵌数据库" aria-hidden="true">#</a> 内嵌数据库</h3><p>SpringBoot提供了3种内嵌数据库供开发者选择，提高开发测试效率 H2，HSQL，Derby</p><h3 id="nosql-redis-mongo" tabindex="-1"><a class="header-anchor" href="#nosql-redis-mongo" aria-hidden="true">#</a> NoSQL（redis,mongo）</h3><p>市面上常见的NoSQL解决方案 Redis，Mongo，ES</p><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h3><p>Redis是一款key-value存储结构的内存级NoSQL数据库 支持多种数据存储格式 支持持久化 支持集群</p>',6),yn={href:"https://www.bilibili.com/video/BV1CL411778r?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},fn={href:"https://juejin.cn/post/7103413121108148231?searchId=2023072217271551246D108BFEAC7A75B5",target:"_blank",rel:"noopener noreferrer"},wn={href:"https://juejin.cn/post/7225596319447187515?searchId=2023072217271551246D108BFEAC7A75B5#heading-18",target:"_blank",rel:"noopener noreferrer"},Sn={href:"https://juejin.cn/post/7083793185142505503?searchId=20230722175214B26171A4359A33735BBA",target:"_blank",rel:"noopener noreferrer"},qn=n("em",null,"redis可视化工具",-1),xn={href:"https://gitee.com/qishibo/AnotherRedisDesktopManager/releases",target:"_blank",rel:"noopener noreferrer"},_n=n("h5",{id:"springboot整合redis客户端",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#springboot整合redis客户端","aria-hidden":"true"},"#"),s(),n("strong",null,"springBoot整合redis"),s("客户端")],-1),In={href:"https://blog.csdn.net/lwj_07/article/details/126265935",target:"_blank",rel:"noopener noreferrer"},Tn={href:"https://blog.csdn.net/weixin_59654772/article/details/125692784",target:"_blank",rel:"noopener noreferrer"},Bn={href:"https://juejin.cn/post/7076244567569203208#heading-7",target:"_blank",rel:"noopener noreferrer"},jn=e(`<p>依赖：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;
        &lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>springboot 中操作 redis (与客户端中操作redis不同步)</p><p>客户端：RedisTemplate以对象作为key和value,内部对数据进行序列化</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要获取客户端中同步的数据要用 StringRedisTemplate</p><p>客户端：StringRedisTemplate以字符串作为key和value,与Redis.客户端操作等效</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="redistemplate自定义配置及序列化" tabindex="-1"><a class="header-anchor" href="#redistemplate自定义配置及序列化" aria-hidden="true">#</a> RedisTemplate自定义配置及序列化</h5>`,11),Mn={href:"https://blog.csdn.net/Good_omen/article/details/123993468",target:"_blank",rel:"noopener noreferrer"},Cn={href:"https://blog.csdn.net/qq_58772217/article/details/128799831",target:"_blank",rel:"noopener noreferrer"},Rn={href:"https://blog.csdn.net/qq_51033936/article/details/127022985",target:"_blank",rel:"noopener noreferrer"},Dn=e(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisConfig</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 自定义RedisTemplate
     * redisTemplate 序列化使用的jdkSerializeable，存储二进制字节码, 所以自定义序列化类
     * <span class="token keyword">@param</span> <span class="token parameter">redisConnectionFactory</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">redisTemplate</span><span class="token punctuation">(</span><span class="token class-name">RedisConnectionFactory</span> redisConnectionFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> redisTemplate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 设置value的序列化规则和 key的序列化规则</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">setKeySerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StringRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//通用</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">setValueSerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GenericJackson2JsonRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//  hash类型</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">setHashKeySerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StringRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">setHashValueSerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GenericJackson2JsonRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//注入连接工厂</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">setConnectionFactory</span><span class="token punctuation">(</span>redisConnectionFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="redistemplate判断key是否过期且存在" tabindex="-1"><a class="header-anchor" href="#redistemplate判断key是否过期且存在" aria-hidden="true">#</a> redisTemplate判断key是否过期且存在?</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> redisTemplate<span class="token punctuation">;</span>
 
<span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">StringRedisTemplate</span> template<span class="token punctuation">;</span>
 
<span class="token doc-comment comment">/**
 * 判断key是否存在
 * <span class="token keyword">@param</span> <span class="token parameter">key</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">exists</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> template<span class="token punctuation">.</span><span class="token function">hasKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token doc-comment comment">/**
 * 判断key是否过期
 * <span class="token keyword">@param</span> <span class="token parameter">key</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isExpire</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token operator">?</span><span class="token boolean">false</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
 
<span class="token doc-comment comment">/**
 * 从redis中获取key对应的过期时间;
 * 如果该值有过期时间，就返回相应的过期时间;
 * 如果该值没有设置过期时间，就返回-1;
 * 如果没有该值，就返回-2;
 * <span class="token keyword">@param</span> <span class="token parameter">key</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">expire</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getOperations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getExpire</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="rediscache工具类封装" tabindex="-1"><a class="header-anchor" href="#rediscache工具类封装" aria-hidden="true">#</a> RedisCache工具类封装</h5>`,4),Pn={href:"https://blog.csdn.net/xiguasweet/article/details/105135242",target:"_blank",rel:"noopener noreferrer"},An=e(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisCache</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">public</span> <span class="token class-name">RedisTemplate</span> redisTemplate<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 缓存的基本对象。Integer String 实体类
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>  缓存的键值
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 缓存的值
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span>
     * <span class="token keyword">@return</span>    缓存的对象
     */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">ValueOperations</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">setCacheObject</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">T</span> value<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">ValueOperations</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> operations <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        operations<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> operations<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>  缓存的键值
     * <span class="token keyword">@param</span> <span class="token parameter">value</span>  缓存的值
     * <span class="token keyword">@param</span> <span class="token parameter">timeout</span>  时间
     * <span class="token keyword">@param</span> <span class="token parameter">timeUnit</span>  时间颗粒度
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span>
     * <span class="token keyword">@return</span>   缓存的对象
     */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">ValueOperations</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">setCacheObject</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">T</span> value<span class="token punctuation">,</span> <span class="token class-name">Integer</span> timeout<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span> timeUnit<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">ValueOperations</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> operations <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        operations<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> timeout<span class="token punctuation">,</span> timeUnit<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> operations<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获得缓存的基本对象
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   缓存键值
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span>
     * <span class="token keyword">@return</span>   缓存键值对应的数据
     */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">getCacheObject</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">ValueOperations</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> operations <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> operations<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 删除单个对象
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteObject</span><span class="token punctuation">(</span><span class="token class-name">String</span>  key<span class="token punctuation">)</span><span class="token punctuation">{</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * 删除集合对象
     *
     * <span class="token keyword">@param</span> <span class="token parameter">collection</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteObject</span><span class="token punctuation">(</span><span class="token class-name">Collection</span> collection<span class="token punctuation">)</span><span class="token punctuation">{</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>collection<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * 缓存list数据
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>    缓存的键值
     * <span class="token keyword">@param</span> <span class="token parameter">dataList</span>    带缓存的list数据
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span>
     * <span class="token keyword">@return</span>    缓存的对象
     */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">ListOperations</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">setCacheList</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> dataList<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">ListOperations</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> listOperations <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>dataList <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> size <span class="token operator">=</span> dataList<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                listOperations<span class="token punctuation">.</span><span class="token function">leftPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> dataList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> listOperations<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     *  获得缓存的list对象
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>  缓存的键值
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span>
     * <span class="token keyword">@return</span>   缓存键值对应的集合数据
     */</span>
    <span class="token keyword">public</span>  <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">getCacheList</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ListOperations</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> listOperations <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Long</span> size <span class="token operator">=</span> listOperations<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>listOperations<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 缓存Set
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 缓存键值
     * <span class="token keyword">@param</span> <span class="token parameter">dataSet</span> 缓存的数据
     * <span class="token keyword">@return</span> 缓存数据的对象
     */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">BoundSetOperations</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">setCacheSet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> dataSet<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BoundSetOperations</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> setOperation <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">boundSetOps</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> it <span class="token operator">=</span> dataSet<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            setOperation<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> setOperation<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获得缓存的set
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">getCacheSet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> dataSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BoundSetOperations</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> operation <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">boundSetOps</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataSet <span class="token operator">=</span> operation<span class="token punctuation">.</span><span class="token function">members</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> dataSet<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 缓存Map
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>
     * <span class="token keyword">@param</span> <span class="token parameter">dataMap</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">HashOperations</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">setCacheMap</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> dataMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HashOperations</span> hashOperations <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> dataMap<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> entry <span class="token operator">:</span> dataMap<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                hashOperations<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> hashOperations<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获得缓存的Map
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">getCacheMap</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> map<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *获得缓存的基本对象列表
     * <span class="token keyword">@param</span> <span class="token parameter">pattern</span>  字符串前缀
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">keys</span><span class="token punctuation">(</span><span class="token class-name">String</span> pattern<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>pattern<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="redistemplate常用方法" tabindex="-1"><a class="header-anchor" href="#redistemplate常用方法" aria-hidden="true">#</a> RedisTemplate常用方法</h5>`,2),On={href:"https://blog.csdn.net/zzvar/article/details/118388897",target:"_blank",rel:"noopener noreferrer"},Ln={href:"https://juejin.cn/post/7175756564752990267#heading-48",target:"_blank",rel:"noopener noreferrer"},Nn=n("h5",{id:"redistemplate-opsforvalue-方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#redistemplate-opsforvalue-方法","aria-hidden":"true"},"#"),s(" redisTemplate.opsForValue()方法")],-1),En={href:"https://blog.csdn.net/qq_43842093/article/details/121527498",target:"_blank",rel:"noopener noreferrer"},Qn={href:"https://blog.csdn.net/weixin_43658899/article/details/121062760",target:"_blank",rel:"noopener noreferrer"},Un=e(`<h5 id="redis使用-手机号获取验证码" tabindex="-1"><a class="header-anchor" href="#redis使用-手机号获取验证码" aria-hidden="true">#</a> redis使用（手机号获取验证码）</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// redis测试</span>
<span class="token comment">// 手机验证码功能</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@CrossOrigin</span>   <span class="token comment">// 解决跨域</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PhoneValidateController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RedisTemplate</span> redisTemplate<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">StringRedisTemplate</span> stringRedisTemplate<span class="token punctuation">;</span>
    <span class="token comment">// 生成验证码4位（调用手机号API短信接口）</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getGenerateCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> num<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 用户在客户端输入手机号，点击发送后随机生成4位数字码。有效期为60秒。
     * 输入验证码，点击验证，返回成功或者失败。
     * 获取验证码清求
     * 根据用户输入的手机号生成对应KEY key=phone:code:手机号码
     * 如果KEY不存在，对KEY进行赋值，并设置过期时间：60秒。
     * 如果KEY存在：提示：验证码还在有效期内（己发送，请查看手机）
     */</span>
    <span class="token comment">// 获取访客ip地址</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getCurrentIp</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> servletRequest<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> servletRequest<span class="token punctuation">.</span><span class="token function">getRemoteAddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 获取验证码请求</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/getValidateCode&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getValidateCode</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">&quot;phoneNumber&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> phoneNumber<span class="token punctuation">,</span><span class="token class-name">HttpServletRequest</span> servletRequest<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 存放手机验证码的 redis key</span>
        <span class="token class-name">String</span> key<span class="token operator">=</span><span class="token string">&quot;phone:code:&quot;</span><span class="token operator">+</span>phoneNumber<span class="token punctuation">;</span>
        <span class="token class-name">ValueOperations</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> ops<span class="token operator">=</span> stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 全局ip锁定的key</span>
        <span class="token class-name">String</span> phoneCodeIpLockKey<span class="token operator">=</span><span class="token string">&quot;phone:code:lock&quot;</span><span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getCurrentIp</span><span class="token punctuation">(</span>servletRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>stringRedisTemplate<span class="token punctuation">.</span><span class="token function">hasKey</span><span class="token punctuation">(</span>phoneCodeIpLockKey<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;超过校验次数，有恶意访问行为，以被系统限制访问&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/**
         * T0D0 且每个IP地址。在5分钟内只能验证3次。并给相应信息提示。锁定这个IP 12小附。
         * 保护模式（手机短信资费）
         * 1、生成保护key phone:code:ip
         * 2、判断保护key是否存在
         * 如果不存在，进行+1并设定过期时间5分钟，
         * 如果存在，进行+1
         * 3、判惭保护ky值是否大于3,如果大于，生成一个新的锁IPKEY:
         * phone:code:lock:ip 过期时间为：12小时
         */</span>
        <span class="token class-name">String</span> proteckKey<span class="token operator">=</span><span class="token string">&quot;phone:code&quot;</span><span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getCurrentIp</span><span class="token punctuation">(</span>servletRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>stringRedisTemplate<span class="token punctuation">.</span><span class="token function">hasKey</span><span class="token punctuation">(</span>proteckKey<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            ops<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span>proteckKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
            stringRedisTemplate<span class="token punctuation">.</span><span class="token function">expire</span><span class="token punctuation">(</span>proteckKey<span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">HOURS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            ops<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span>proteckKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;ops.get(proteckKey)&quot;</span><span class="token operator">+</span>ops<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>proteckKey<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>ops<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>proteckKey<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">&gt;=</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//IP需要被锁定12小时</span>
            ops<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>phoneCodeIpLockKey<span class="token punctuation">,</span>phoneCodeIpLockKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
            stringRedisTemplate<span class="token punctuation">.</span><span class="token function">expire</span><span class="token punctuation">(</span>phoneCodeIpLockKey<span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">HOURS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token string">&quot;超过校验次数，有恶意访问行为，以被系统限制访问&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>stringRedisTemplate<span class="token punctuation">.</span><span class="token function">hasKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> phoneCode<span class="token operator">=</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getGenerateCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;手机号已发送API知信接口，验证码是&quot;</span><span class="token operator">+</span>phoneCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
            ops<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> phoneCode<span class="token operator">+</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token string">&quot;检证码发送成功，请查看手机短信&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;验证码获取失败，请避免重复获取，耐心等待，还剩时间&quot;</span><span class="token operator">+</span>stringRedisTemplate<span class="token punctuation">.</span><span class="token function">getExpire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span><span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;秒&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 确定按钮将前合用户输入的验证码信.息和Rdis中KEY查询进行比较
     * 如果相等验证码比较成功，用户手机绑定成功/登录成功。
     * 如果比较失败，验证码输入错误
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/validate&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">validate</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">&quot;code&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> code<span class="token punctuation">,</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">&quot;phoneNumber&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> phoneNumber<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">ValueOperations</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> ops<span class="token operator">=</span> stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 生成 redis key</span>
        <span class="token class-name">String</span> key<span class="token operator">=</span><span class="token string">&quot;phone:code:&quot;</span><span class="token operator">+</span>phoneNumber<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>code<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>ops<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;手机号码校验成功，执行登录等相应业务逻缉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 清空redis相应key :节省内存空间</span>
            <span class="token keyword">return</span> <span class="token string">&quot;手机号码校验成功/登求成功&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token string">&quot;验证码校验失败&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="redis使用-百度首页热点新闻列表" tabindex="-1"><a class="header-anchor" href="#redis使用-百度首页热点新闻列表" aria-hidden="true">#</a> redis使用（百度首页热点新闻列表）</h5><p>ListCacheServiceImpl</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ListCacheServiceImpl</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 需求：热点新闹列表获取最新5条首页新闻。
     * 1、查询：默认首页显示5条热点新闻。具备分页功能。
     * 2、后台管理员可以通过置顶新闻。
     */</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> redisTemplate<span class="token punctuation">;</span>
    <span class="token comment">//ListOperations&lt;String, String&gt; listOper=redisTemplate.opsForList();</span>
    <span class="token annotation punctuation">@Resource</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;redisTemplate&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">ListOperations</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> listOper<span class="token punctuation">;</span>
    <span class="token comment">// 初始化5条新闻</span>
    <span class="token keyword">public</span>  <span class="token keyword">void</span> <span class="token function">initBaiduNews5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">String</span> key<span class="token operator">=</span><span class="token string">&quot;baidu:new:top5&quot;</span><span class="token punctuation">;</span>
        listOper<span class="token punctuation">.</span><span class="token function">rightPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span><span class="token string">&quot;1.新闻一&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        listOper<span class="token punctuation">.</span><span class="token function">rightPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span><span class="token string">&quot;2.新闻一&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        listOper<span class="token punctuation">.</span><span class="token function">rightPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span><span class="token string">&quot;3.新闻一&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        listOper<span class="token punctuation">.</span><span class="token function">rightPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span><span class="token string">&quot;4.新闻一&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        listOper<span class="token punctuation">.</span><span class="token function">rightPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span><span class="token string">&quot;5.新闻一&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        listOper<span class="token punctuation">.</span><span class="token function">rightPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span><span class="token string">&quot;6.新闻一&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getTop5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">String</span> key<span class="token operator">=</span><span class="token string">&quot;baidu:new:top5&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list<span class="token operator">=</span>listOper<span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 官方小编可以商业化置顶新闻</span>
    <span class="token keyword">public</span> <span class="token class-name">Long</span> <span class="token function">addBaiDuNewsTop</span><span class="token punctuation">(</span><span class="token class-name">String</span> context<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">String</span> key<span class="token operator">=</span><span class="token string">&quot;baidu:new:top5&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> listOper<span class="token punctuation">.</span><span class="token function">leftPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>test测试功能</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Redis List案例1模仿百度首页新闻展示（查的是Redis非MS0L)</span>
	<span class="token annotation punctuation">@Autowired</span>
	<span class="token keyword">private</span> <span class="token class-name">ListCacheServiceImpl</span> listCacheServiceImpl<span class="token punctuation">;</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testGetBaiDuTop5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// 初始化将MYSQL数据(虚拟数据)存入Redis</span>
		listCacheServiceImpl<span class="token punctuation">.</span><span class="token function">initBaiduNews5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list<span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> listCacheServiceImpl<span class="token punctuation">.</span><span class="token function">getTop5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o <span class="token operator">:</span> list<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		listCacheServiceImpl<span class="token punctuation">.</span><span class="token function">addBaiDuNewsTop</span><span class="token punctuation">(</span><span class="token string">&quot;置顶新闻&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list2<span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> listCacheServiceImpl<span class="token punctuation">.</span><span class="token function">getTop5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o <span class="token operator">:</span> list2<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="redis使用-任务队列-商城" tabindex="-1"><a class="header-anchor" href="#redis使用-任务队列-商城" aria-hidden="true">#</a> redis使用（任务队列，商城）</h5><p>ProductQueueServiceImpl 生成的快递流程的任务队列</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductQueueServiceImpl</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> redisTemplate<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Resource</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;redisTemplate&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">ListOperations</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> listOper<span class="token punctuation">;</span>
   <span class="token comment">// 1 生成物流队列（客户完成支付功能会根据商家发货地址~用户收货地址）</span>
   <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">initProductQueue</span><span class="token punctuation">(</span><span class="token class-name">String</span> cardId<span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token comment">// 待执行的任务队列</span>
       <span class="token class-name">String</span> key<span class="token operator">=</span><span class="token string">&quot;product:queue:execute:&quot;</span><span class="token operator">+</span>cardId<span class="token punctuation">;</span>
       listOper<span class="token punctuation">.</span><span class="token function">leftPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span><span class="token string">&quot;1、商家发货（快递小哥上门取货）&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       listOper<span class="token punctuation">.</span><span class="token function">leftPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span><span class="token string">&quot;2、北京市海淀区--》北京首都国际机场&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       listOper<span class="token punctuation">.</span><span class="token function">leftPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span><span class="token string">&quot;3、北京首都机场--》南京禄口机场&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       listOper<span class="token punctuation">.</span><span class="token function">leftPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span><span class="token string">&quot;4、禄口机场---》建邺区&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       listOper<span class="token punctuation">.</span><span class="token function">leftPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span><span class="token string">&quot;5、建邺区--》南京千锋二楼&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       listOper<span class="token punctuation">.</span><span class="token function">leftPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span><span class="token string">&quot;6、已签收&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token comment">// 2 消费队列</span>
   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">touchQueue</span><span class="token punctuation">(</span><span class="token class-name">String</span> cardId<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//待执行的任务队列</span>
       <span class="token class-name">String</span> key<span class="token operator">=</span><span class="token string">&quot;product:queue:execute:&quot;</span><span class="token operator">+</span>cardId<span class="token punctuation">;</span>
       <span class="token comment">//己完成队列</span>
       <span class="token class-name">String</span> succKey<span class="token operator">=</span><span class="token string">&quot;product:queue:success:&quot;</span><span class="token operator">+</span>cardId<span class="token punctuation">;</span>
       <span class="token keyword">return</span> listOper<span class="token punctuation">.</span><span class="token function">rightPopAndLeftPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>succKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token comment">// 3 商家/物流公司：这个快递还有几顶任务未完成？</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">productQueueExcut</span><span class="token punctuation">(</span><span class="token class-name">String</span> cardId<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//待执行的任务队列</span>
        <span class="token class-name">String</span> key<span class="token operator">=</span><span class="token string">&quot;product:queue:execute:&quot;</span><span class="token operator">+</span>cardId<span class="token punctuation">;</span>
        <span class="token keyword">return</span> listOper<span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 4 买家：我的快递到哪了？</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">productQueueSuccess</span><span class="token punctuation">(</span><span class="token class-name">String</span> cardId<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//待执行的任务队列</span>
        <span class="token class-name">String</span> succKey<span class="token operator">=</span><span class="token string">&quot;product:queue:success:&quot;</span><span class="token operator">+</span>cardId<span class="token punctuation">;</span>
        <span class="token keyword">return</span> listOper<span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span>succKey<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>test测试功能</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
	<span class="token keyword">private</span> <span class="token class-name">ProductQueueServiceImpl</span> productQueueServiceImpl<span class="token punctuation">;</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testProductQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;买家支付成功物流队列运输开始&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> cardId<span class="token operator">=</span><span class="token string">&quot;123654896214&quot;</span><span class="token punctuation">;</span>
		productQueueServiceImpl<span class="token punctuation">.</span><span class="token function">initProductQueue</span><span class="token punctuation">(</span>cardId<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前需要待执行的任务队列是&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list<span class="token operator">=</span>productQueueServiceImpl<span class="token punctuation">.</span><span class="token function">productQueueExcut</span><span class="token punctuation">(</span>cardId<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token operator">:</span>list<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;快递小哥开始进行触发队列事件&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> queueMessage<span class="token operator">=</span>productQueueServiceImpl<span class="token punctuation">.</span><span class="token function">touchQueue</span><span class="token punctuation">(</span>cardId<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;快递小哥完成了任务队列：&quot;</span><span class="token operator">+</span>queueMessage<span class="token operator">+</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		productQueueServiceImpl<span class="token punctuation">.</span><span class="token function">productQueueSuccess</span><span class="token punctuation">(</span>cardId<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前需要待执行的任务队列是：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list1<span class="token operator">=</span>productQueueServiceImpl<span class="token punctuation">.</span><span class="token function">productQueueExcut</span><span class="token punctuation">(</span>cardId<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token operator">:</span>list1<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我的货物到那儿了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list2<span class="token operator">=</span>productQueueServiceImpl<span class="token punctuation">.</span><span class="token function">productQueueSuccess</span><span class="token punctuation">(</span>cardId<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token operator">:</span>list2<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="jedis" tabindex="-1"><a class="header-anchor" href="#jedis" aria-hidden="true">#</a> jedis</h5>`,13),zn={href:"https://blog.csdn.net/I_r_o_n_M_a_n/article/details/122685882",target:"_blank",rel:"noopener noreferrer"},Jn=n("p",null,"lettcus与jedis区别 jedis连接Redis.服务器是直连模式，当多线程模式下使用jedis会存在线程安全问题，解决方案可以通过配置连接池使每个连接专用，这样整体性能就大受影响。 lettcus基于Netty框架进行与Redis服务器连接，底层设计中采用StatefulRedisConnection。StatefulRedisConnection自身是线程安全的，可以保障并发访问安全问题，所以一个连接可以被多线程复用。当然lettcus也支持多连接实例一起工作。",-1),Vn=n("h4",{id:"mongodb",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mongodb","aria-hidden":"true"},"#"),s(" MongoDB")],-1),Fn=n("p",null,"MongoDB是一个开源、高性能、无模式的文档型数据库。NoSQL数据库产品中的一种，是最像关系型数据库的非 关系型数据库",-1),Wn=n("p",null,"MongoDB数据库的常用命令",-1),Hn={href:"https://blog.csdn.net/qq_55648724/article/details/128171457",target:"_blank",rel:"noopener noreferrer"},Kn=n("p",null,"springBoot整合 mongoDB",-1),Gn={href:"https://blog.csdn.net/weixin_47343544/article/details/127175205",target:"_blank",rel:"noopener noreferrer"},Yn={href:"https://cloud.tencent.com/developer/article/2245018",target:"_blank",rel:"noopener noreferrer"},Xn=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 引入mongodb--&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-data-mongodb&lt;/artifactId&gt;
        &lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    @Autowired
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="elasticsearch-es" tabindex="-1"><a class="header-anchor" href="#elasticsearch-es" aria-hidden="true">#</a> Elasticsearch (ES)</h4><p>Elasticsearch是一个分布式全文搜索引擎</p>`,4),$n={href:"https://www.elastic.co/cn/downloads/elasticsearch",target:"_blank",rel:"noopener noreferrer"},Zn={href:"https://blog.csdn.net/ganquanzhong/article/details/108633025",target:"_blank",rel:"noopener noreferrer"},ns=e(`<p>启动：bin/elasticsearch.bat</p><p>warning: ignoring JAVA_HOME=C:\\Program Files\\Java\\jdk1.8.0_74; using bundled JDK</p><p>(jdk版本和elasticsearch版本不兼容，可以切换低版本的elasticsearch)</p><p>Elasticsearch 8.0报错：received plaintext http traffic on an https channel, closing connection</p><p>解决： ES8默认开启了 SSL 认证。 <strong>使用 https 发送请求，即：把 http 请求改成 https 即可。</strong></p><p>或者修改 config/elasticsearch.yml xpack.security.enabled: false</p><h2 id="整合第三方数据" tabindex="-1"><a class="header-anchor" href="#整合第三方数据" aria-hidden="true">#</a> 整合第三方数据</h2><h3 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存" aria-hidden="true">#</a> 缓存</h3><p>缓存是一种介于数据永久存储介质与数据应用之间的数据临时存储介质</p><p>使用缓存可以有效的减少低速数据读取过程的次数（例如磁IO），提高系统性能 缓存不仅可以用于提高永久性存储介质的数据读取效率，还可以提供临时的数据存储空间</p><p>//测试缓存</p><p>msgService (interface)</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MsgService</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span>  <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">String</span> tel<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Boolean</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token class-name">String</span> tel<span class="token punctuation">,</span><span class="token class-name">String</span> code<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>msgServiceImpl.class</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MsgController.class</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SpringBoot:提供了缓存技术，方便缓存使用</p><p>1 导入缓存的依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        &lt;dependency&gt;
			&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
			&lt;artifactId&gt;spring-boot-starter-cache&lt;/artifactId&gt;
		&lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 开启缓存功能 ： 在启动类上加上 @EnableCaching 注解</p><p>3 设置当前操作的结果数据进入缓存</p><p>@Cacheable( value 开辟缓存空间 key： 缓存根据id去查询，要有#)</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
    <span class="token annotation punctuation">@Cacheable</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">&quot;cacheSpace&quot;</span><span class="token punctuation">,</span>key<span class="token operator">=</span><span class="token string">&quot;#id&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Book</span> <span class="token function">getById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> bookDao<span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在不影响方法执行的情况下更新缓存时用CachePut</p><p>@CachePut(value=&quot;cacheSpace&quot;,key=&quot;#id&quot;)</p><p>不推荐将 @Cacheable 和 @CachePut 注解到同一个方法。</p><p>整合其他的缓存技术</p>`,28),ss={href:"https://blog.csdn.net/Learning_xzj/article/details/125510872",target:"_blank",rel:"noopener noreferrer"},as={href:"https://blog.csdn.net/weixin_44299027/article/details/125559446",target:"_blank",rel:"noopener noreferrer"},ts={href:"https://gitee.com/ld/J2Cache",target:"_blank",rel:"noopener noreferrer"},es=e(`<h2 id="任务" tabindex="-1"><a class="header-anchor" href="#任务" aria-hidden="true">#</a> 任务</h2><h3 id="定时任务" tabindex="-1"><a class="header-anchor" href="#定时任务" aria-hidden="true">#</a> 定时任务</h3><p>市面上流行的定时任务技术：Quartz ，Spring Task</p><p>springboot整合Quartz</p><p>相关概念： 工作（job):用于定义具体执行的工作 工作明细（JobDetail):用于描述定时工作相关的信息 触发器(Trigger):用于描述触发工作的规则，通常使用cron表达式定义调度规则 调度器(Scheduler):描述了工作明细与触发器的对应关系</p><h2 id="springboot-项目常用maven配置" tabindex="-1"><a class="header-anchor" href="#springboot-项目常用maven配置" aria-hidden="true">#</a> springBoot 项目常用maven配置</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
	xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
	&lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
	&lt;parent&gt;
		&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
		&lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
		&lt;version&gt;2.4.5&lt;/version&gt;
		&lt;relativePath/&gt; &lt;!-- lookup parent from repository --&gt;
	&lt;/parent&gt;
	&lt;groupId&gt;com.example.mybatis&lt;/groupId&gt;
	&lt;artifactId&gt;demo&lt;/artifactId&gt;
	&lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
	&lt;name&gt;demo&lt;/name&gt;
	&lt;description&gt;Demo project for Spring Boot&lt;/description&gt;
	&lt;properties&gt;
		&lt;java.version&gt;17&lt;/java.version&gt;
	&lt;/properties&gt;
	&lt;dependencies&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
			&lt;artifactId&gt;spring-boot-starter&lt;/artifactId&gt;
		&lt;/dependency&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
			&lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
			&lt;scope&gt;test&lt;/scope&gt;
		&lt;/dependency&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
			&lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
			&lt;scope&gt;compile&lt;/scope&gt;
		&lt;/dependency&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;com.baomidou&lt;/groupId&gt;
			&lt;artifactId&gt;mybatis-plus-boot-starter&lt;/artifactId&gt;
			&lt;version&gt;3.4.2&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
			&lt;artifactId&gt;lombok&lt;/artifactId&gt;
			&lt;version&gt;1.18.20&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;com.alibaba&lt;/groupId&gt;
			&lt;artifactId&gt;fastjson&lt;/artifactId&gt;
			&lt;version&gt;1.2.76&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;commons-lang&lt;/groupId&gt;
			&lt;artifactId&gt;commons-lang&lt;/artifactId&gt;
			&lt;version&gt;2.6&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;mysql&lt;/groupId&gt;
			&lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
			&lt;scope&gt;runtime&lt;/scope&gt;
		&lt;/dependency&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;com.alibaba&lt;/groupId&gt;
			&lt;artifactId&gt;druid-spring-boot-starter&lt;/artifactId&gt;
			&lt;version&gt;1.1.23&lt;/version&gt;
		&lt;/dependency&gt;

		&lt;dependency&gt;
			&lt;groupId&gt;com.github.xiaoymin&lt;/groupId&gt;
			&lt;artifactId&gt;knife4j-spring-boot-starter&lt;/artifactId&gt;
			&lt;version&gt;3.0.2&lt;/version&gt;
		&lt;/dependency&gt;
	&lt;/dependencies&gt;

	&lt;build&gt;
		&lt;plugins&gt;
			&lt;plugin&gt;
				&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
				&lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
			&lt;/plugin&gt;
		&lt;/plugins&gt;
	&lt;/build&gt;

&lt;/project&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="springboot-项目常用application-yml配置" tabindex="-1"><a class="header-anchor" href="#springboot-项目常用application-yml配置" aria-hidden="true">#</a> springBoot 项目常用application.yml配置</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server:
  port: 8089
spring:
  application:
    #应用的名称，可选
    name: reggie_take_out
  datasource:
    druid:
      driver-class-name: com.mysql.cj.jdbc.Driver
      url: jdbc:mysql://localhost:3306/reggie?serverTimezone=Asia/Shanghai&amp;useUnicode=true&amp;characterEncoding=utf-8&amp;zeroDateTimeBehavior=convertToNull&amp;useSSL=false&amp;allowPublicKeyRetrieval=true
      username: root
      password: root

mybatis-plus:
  configuration:
    #在映射实体或者属性时，将数据库中表名和字段名中的下划线去掉，按照驼峰命名法映射
    map-underscore-to-camel-case: true
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
  global-config:
    db-config:
      # 设置统一的主键生成策略
      id-type: ASSIGN_ID
      # 设置实体类所对应的表的统一前缀
      # table_prefix:t_

reggie:
  #  指定上传文件暂存的位置
  path: D:\\img\\
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jwt" tabindex="-1"><a class="header-anchor" href="#jwt" aria-hidden="true">#</a> JWT</h2><p>什么是JWT? JSON Web Token,通过数字签名的方式，以JSQN对象为载体，在不同的服务终端之间安全的传输信息。 JWT有什么用？ JW工最常见的场景就是授权认证，一旦用户登录，后续每个请求都将包含JWT，系统在每次处理用户请求的之前，都要先进行JWT安全校验，通过之后再进行处理。 JWT的组成 JWT由3部分组成，用拼接</p>`,11),ps={href:"https://blog.csdn.net/qq_44972847/article/details/109249604",target:"_blank",rel:"noopener noreferrer"},os=e(`<ul><li>头部(header)</li><li>载荷(payload)</li><li>签证(signature)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &lt;dependency&gt;
     &lt;groupId&gt;io.jsonwebtoken&lt;/groupId&gt;
     &lt;artifactId&gt;jjwt&lt;/artifactId&gt;
     &lt;version&gt;0.9.1&lt;/version&gt;
 &lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>生成和解析 JWT</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">DemoApplicationTests</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token keyword">long</span> time<span class="token operator">=</span><span class="token number">1000</span><span class="token operator">*</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">24</span><span class="token punctuation">;</span>  <span class="token comment">//  超时时间（毫秒计算）</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> signature<span class="token operator">=</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">;</span>  <span class="token comment">// 签名(自定义)</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">jwt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// 生成token</span>
		<span class="token class-name">JwtBuilder</span> jwtBuilder<span class="token operator">=</span> <span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> jwtToken<span class="token operator">=</span>jwtBuilder
				<span class="token comment">// header</span>
				<span class="token punctuation">.</span><span class="token function">setHeaderParam</span><span class="token punctuation">(</span><span class="token string">&quot;type&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;JWT&quot;</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">setHeaderParam</span><span class="token punctuation">(</span><span class="token string">&quot;alg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;HS256&quot;</span><span class="token punctuation">)</span>
				<span class="token comment">// payload</span>
				<span class="token punctuation">.</span><span class="token function">claim</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;tom&quot;</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">claim</span><span class="token punctuation">(</span><span class="token string">&quot;pwd&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">setSubject</span><span class="token punctuation">(</span><span class="token string">&quot;admin-test&quot;</span><span class="token punctuation">)</span>
				<span class="token comment">// 过时时间</span>
				<span class="token punctuation">.</span><span class="token function">setExpiration</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span>time<span class="token punctuation">)</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		        <span class="token comment">// Signature</span>
		        <span class="token punctuation">.</span><span class="token function">signWith</span><span class="token punctuation">(</span><span class="token class-name">SignatureAlgorithm</span><span class="token punctuation">.</span><span class="token constant">HS512</span><span class="token punctuation">,</span>signature<span class="token punctuation">)</span>
				<span class="token comment">// 拼接起来</span>
				<span class="token punctuation">.</span><span class="token function">compact</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>jwtToken<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// 解析token</span>
		<span class="token class-name">String</span> token<span class="token operator">=</span><span class="token string">&quot;eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJuYW1lIjoidG9tIiwicHdkIjoiMTIzNDU2Iiwic3ViIjoiYWRtaW4tdGVzdCIsImV4cCI6MTY4OTc1MzUwMywianRpIjoiNzgzOTE5NTMtM2EwNy00ZWNkLTkyZTgtMjNkNjZmODdiNTIyIn0.YcmlLiXIwYJOL83ynRz4JiPRf0UyLtIhu2iE16PzuLk6ETEyu_Jxjo8gewWTdDl-oOD8bUiNDxUmHMKmLayn9g&quot;</span><span class="token punctuation">;</span>
		<span class="token class-name">JwtParser</span> jwtParser<span class="token operator">=</span><span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">parser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Jws</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Claims</span><span class="token punctuation">&gt;</span></span> claimsJws <span class="token operator">=</span>jwtParser<span class="token punctuation">.</span><span class="token function">setSigningKey</span><span class="token punctuation">(</span>signature<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">parseClaimsJws</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Claims</span> claims<span class="token operator">=</span>claimsJws<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>claims<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>claims<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;pwd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>claims<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>claims<span class="token punctuation">.</span><span class="token function">getExpiration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>claims<span class="token punctuation">.</span><span class="token function">getSubject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="登录" tabindex="-1"><a class="header-anchor" href="#登录" aria-hidden="true">#</a> 登录</h2><h3 id="工具类-jwtutil" tabindex="-1"><a class="header-anchor" href="#工具类-jwtutil" aria-hidden="true">#</a> <strong>工具类</strong> JwtUtil</h3>`,6),is={href:"https://blog.csdn.net/qq_51553982/article/details/122778454",target:"_blank",rel:"noopener noreferrer"},cs=e(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//  工具类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JwtUtil</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">long</span> time<span class="token operator">=</span><span class="token number">1000</span><span class="token operator">*</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">24</span><span class="token punctuation">;</span>  <span class="token comment">//  超时时间,有效期（毫秒计算）</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> signature<span class="token operator">=</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">;</span>  <span class="token comment">// 签名(自定义)</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">createToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 生成token</span>
        <span class="token class-name">JwtBuilder</span> jwtBuilder<span class="token operator">=</span> <span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> jwtToken<span class="token operator">=</span>jwtBuilder
                <span class="token comment">// header</span>
                <span class="token punctuation">.</span><span class="token function">setHeaderParam</span><span class="token punctuation">(</span><span class="token string">&quot;type&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;JWT&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setHeaderParam</span><span class="token punctuation">(</span><span class="token string">&quot;alg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;HS256&quot;</span><span class="token punctuation">)</span>
                <span class="token comment">// payload</span>
                <span class="token punctuation">.</span><span class="token function">claim</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">claim</span><span class="token punctuation">(</span><span class="token string">&quot;pwd&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setSubject</span><span class="token punctuation">(</span><span class="token string">&quot;admin-test&quot;</span><span class="token punctuation">)</span>
                <span class="token comment">// 过时时间</span>
                <span class="token punctuation">.</span><span class="token function">setExpiration</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span>time<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token comment">// Signature</span>
                <span class="token punctuation">.</span><span class="token function">signWith</span><span class="token punctuation">(</span><span class="token class-name">SignatureAlgorithm</span><span class="token punctuation">.</span><span class="token constant">HS512</span><span class="token punctuation">,</span>signature<span class="token punctuation">)</span>
                <span class="token comment">// 拼接起来</span>
                <span class="token punctuation">.</span><span class="token function">compact</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> jwtToken<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span>  <span class="token keyword">static</span> <span class="token class-name">Boolean</span> <span class="token function">checkToken</span><span class="token punctuation">(</span><span class="token class-name">String</span> token<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>token<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Jws</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Claims</span><span class="token punctuation">&gt;</span></span> claimsJws<span class="token operator">=</span><span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">parser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setSigningKey</span><span class="token punctuation">(</span>signature<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">parseClaimsJws</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ExpiredJwtException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>UserController.java</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/users&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">NAME</span><span class="token operator">=</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">PWD</span><span class="token operator">=</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">getUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> userService<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 登录验证，返回token</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">NAME</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token constant">PWD</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getPwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 添加token</span>
            user<span class="token punctuation">.</span><span class="token function">setToken</span><span class="token punctuation">(</span><span class="token class-name">JwtUtil</span><span class="token punctuation">.</span><span class="token function">createToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> user<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 验证token</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/checkToken&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Boolean</span> <span class="token function">checkToken</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">String</span> token <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">JwtUtil</span><span class="token punctuation">.</span><span class="token function">checkToken</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),ls={href:"https://blog.csdn.net/qq_41450736/article/details/113523308",target:"_blank",rel:"noopener noreferrer"},us=n("h2",{id:"rabbitmq",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rabbitmq","aria-hidden":"true"},"#"),s(" RabbitMQ")],-1),rs={href:"https://juejin.cn/post/7198430801850105916",target:"_blank",rel:"noopener noreferrer"},ds={href:"https://developer.aliyun.com/article/769883",target:"_blank",rel:"noopener noreferrer"},ks={href:"https://blog.csdn.net/huzecom/article/details/103499692",target:"_blank",rel:"noopener noreferrer"},vs={href:"https://www.bilibili.com/video/BV1Xm4y1i7HP?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},ms=e(`<h3 id="docker安装rabbitmq" tabindex="-1"><a class="header-anchor" href="#docker安装rabbitmq" aria-hidden="true">#</a> docker安装RabbitMQ</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull rabbitmq:management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建并运行容器" tabindex="-1"><a class="header-anchor" href="#创建并运行容器" aria-hidden="true">#</a> 创建并运行容器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> docker run -id --name=rabbitmq -v rabbitmq-home:/var/lib/rabbitmq -p 15672:15672 -p 5672:5672 -e RABBITMQ_DEFAULT_USER=fankozhang -e RABBITMQ_DEFAULT_PASS=123456 rabbitmq:management 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>15672</code>端口：RabbitMQ的<strong>管理页面</strong>端口</li><li><code>5672</code>端口：RabbitMQ的<strong>消息接收</strong>端口</li><li><code>RABBITMQ_DEFAULT_USER</code>环境变量：指定RabbitMQ的<strong>用户名</strong>，这里我指定为<code>fankozhang</code>，大家部署时替换成自己定义的</li><li><code>RABBITMQ_DEFAULT_PASS</code>环境变量：指定RabbitMQ的<strong>密码</strong>，这里我指定为<code>123456</code>，大家部署时替换成自己定义的</li></ul><p>这样容器就部署完成了！在浏览器访问你的<code>服务器地址:15672</code>即可访问到RabbitMQ的管理界面，用户名和密码即为刚刚指定的环境变量的配置值。</p>`,6),bs={href:"http://127.0.0.1:15672",target:"_blank",rel:"noopener noreferrer"},gs=e("<p>RabbitMQ的组成，它是有这几部分：</p><ul><li>Broker：消息队列服务进程。此进程包括两个部分：Exchange和Queue。</li><li>Exchange：消息队列交换机。<strong>按一定的规则将消息路由转发到某个队列</strong>。</li><li>Queue：消息队列，存储消息的队列。</li><li>Producer：消息生产者。生产方客户端将消息同交换机路由发送到队列中。</li><li>Consumer：消息消费者。消费队列中存储的消息。</li></ul><p>这些组成部分是如何协同工作的呢，大概的流程如下</p><ul><li>消息生产者连接到RabbitMQ Broker，创建connection，开启channel。</li><li>生产者声明交换机类型、名称、是否持久化等。</li><li>生产者发送消息，并指定消息是否持久化等属性和routing key。</li><li>exchange收到消息之后，<strong>根据routing key路由到跟当前交换机绑定的相匹配的队列</strong>里面。</li><li>消费者监听接收到消息之后开始业务处理。</li></ul>",4),hs={id:"示例-b站视频地址",tabindex:"-1"},ys=n("a",{class:"header-anchor",href:"#示例-b站视频地址","aria-hidden":"true"},"#",-1),fs={href:"https://www.bilibili.com/video/BV1Am4y1z7Tu?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},ws=e(`<p>创建生产者</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoApplication</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
		<span class="token class-name">String</span> exchangeName<span class="token operator">=</span><span class="token string">&quot;xc_exchange_name&quot;</span><span class="token punctuation">;</span> <span class="token comment">//交换机名称</span>
		<span class="token class-name">String</span> queueName <span class="token operator">=</span><span class="token string">&quot;xc_queue_name&quot;</span><span class="token punctuation">;</span>      <span class="token comment">//队列名称</span>
		<span class="token comment">// 创建连接工厂，设置连接信息</span>
		<span class="token class-name">ConnectionFactory</span> factory<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		factory<span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span><span class="token string">&quot;123.56.80.155&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		factory<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">&quot;fankozhang&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		factory<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		factory<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token number">5672</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 创建连接</span>
		<span class="token class-name">Connection</span> connection<span class="token operator">=</span>factory<span class="token punctuation">.</span><span class="token function">newConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//创建信道</span>
		<span class="token class-name">Channel</span> channel<span class="token operator">=</span>connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">//创建交换机(参数如下)</span>
		<span class="token comment">//1,交换机名称</span>
		<span class="token comment">//2.交换机类型，direct,topic,fanout headers</span>
		<span class="token comment">//3.指定交换机是否需要持久化，如果设置为true,那么交换机的元数据要待久化</span>
		<span class="token comment">//4.指定交换机在没有队列绑定时，是否需要删除，设置false表示不删除</span>
		<span class="token comment">//5.Map&lt;String,Object&gt;类型，用来指定我们换机其他的一些机构化参数，我们在这里直接设置成null</span>
		channel<span class="token punctuation">.</span><span class="token function">exchangeDeclare</span><span class="token punctuation">(</span>exchangeName<span class="token punctuation">,</span> <span class="token class-name">BuiltinExchangeType</span><span class="token punctuation">.</span><span class="token constant">DIRECT</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">//生成一个队列(参数如下)</span>
		<span class="token comment">//1.队列名称</span>
		<span class="token comment">//2.队列是否需要持久化，但是要注意，这里的特久化只是队列名称等这些元数据的持久化，不是队列中消息的持久化</span>
		<span class="token comment">//3.表示队列是不是私有的，如果是私有的，只有创建他的应用程序才能消费消怠</span>
		<span class="token comment">//4.队列在没有消费者订阅的情况下是否自动删除</span>
		<span class="token comment">//5.队列的一些结构化信息，比如声明死信队列，磁盘队列会用到</span>

		channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span>queueName<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//将我们的交换机和队列绑定(参数如下)</span>
		<span class="token comment">//1.队列名称</span>
		<span class="token comment">//2.交换饥名称</span>
		<span class="token comment">//3.路山健，在我门直连馍式下，可以为我们的队列名称</span>
		channel<span class="token punctuation">.</span><span class="token function">queueBind</span><span class="token punctuation">(</span>queueName<span class="token punctuation">,</span>exchangeName<span class="token punctuation">,</span>queueName<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 发送消息</span>
		<span class="token class-name">String</span> msg<span class="token operator">=</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">;</span>
		<span class="token comment">//发送消息</span>
		<span class="token comment">//1.发送到娜个交换视</span>
		<span class="token comment">//2.队列名称</span>
		<span class="token comment">//3.其他参数信息</span>
		<span class="token comment">//4.发送消息的消息体</span>
		channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span>exchangeName<span class="token punctuation">,</span>queueName<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span> msg<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 关闭连接</span>
		channel<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建消费者(消费上面生产者生产的消息，创建连接信息和上面保持一致)</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoApplication</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>

		<span class="token comment">// 创建连接工厂，设置连接信息</span>
		<span class="token class-name">ConnectionFactory</span> factory<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		factory<span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span><span class="token string">&quot;123.56.80.155&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		factory<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">&quot;fankozhang&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		factory<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		factory<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token number">5672</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 创建连接</span>
		<span class="token class-name">Connection</span> connection<span class="token operator">=</span>factory<span class="token punctuation">.</span><span class="token function">newConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//创建信道</span>
		<span class="token class-name">Channel</span> channel<span class="token operator">=</span>connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


		<span class="token comment">//按受消息的回调函数</span>
		<span class="token class-name">DeliverCallback</span> deliverCallBack<span class="token operator">=</span><span class="token punctuation">(</span>consumerTage<span class="token punctuation">,</span>message<span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
				<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;接收到消息&quot;</span><span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token comment">//取消消息的回调函数</span>
		<span class="token class-name">CancelCallback</span> cancelCallback<span class="token operator">=</span>consumerTage<span class="token operator">-&gt;</span><span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;消息中断&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token comment">//消费消息</span>
		<span class="token comment">//1.消费哪个队列</span>
		<span class="token comment">//2.消费成功之后是否需要自动应答，t♪U:自动应答</span>
		<span class="token comment">//3.按受消息的回调函数</span>
		<span class="token comment">//4.取消消息的回调函数</span>
		channel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span><span class="token string">&quot;xc_queue_name&quot;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span>deliverCallBack<span class="token punctuation">,</span>cancelCallback<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rabbitmq交换机类型" tabindex="-1"><a class="header-anchor" href="#rabbitmq交换机类型" aria-hidden="true">#</a> RabbitMQ交换机类型</h3>`,5),Ss={href:"https://www.cnblogs.com/hsiang/p/14747030.html",target:"_blank",rel:"noopener noreferrer"},qs=n("p",null,"RabbitMQ一共四种交换机，如下所示：",-1),xs=n("ol",null,[n("li",null,"Direct Exchange：直连交换机，根据Routing Key(路由键)进行投递到不同队列。"),n("li",null,"Fanout Exchange：扇形交换机，采用广播模式，根据绑定的交换机，路由到与之对应的所有队列。"),n("li",null,"Topic Exchange：主题交换机，对路由键进行模式匹配后进行投递，符号#表示一个或多个词，*表示一个词。"),n("li",null,"Header Exchange：头交换机，不处理路由键。而是根据发送的消息内容中的headers属性进行匹配。")],-1),_s=n("h2",{id:"模板引擎-thymeleaf",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#模板引擎-thymeleaf","aria-hidden":"true"},"#"),s(" 模板引擎（thymeleaf）")],-1),Is={href:"https://blog.csdn.net/Lzy410992/article/details/115371017",target:"_blank",rel:"noopener noreferrer"},Ts={href:"https://fanlychie.github.io/post/thymeleaf.html",target:"_blank",rel:"noopener noreferrer"},Bs=e(`<p>依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
			&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
			&lt;artifactId&gt;spring-boot-starter-thymeleaf&lt;/artifactId&gt;
		&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践：</h3>`,3),js=n("p",null,[s('resources/template/index.html (资源里面新建 index.html 文件) th:text="'),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mrow",null,[n("mi",null,"m"),n("mi",null,"s"),n("mi",null,"g")]),n("mi",{mathvariant:"normal"},'"'),n("mtext",null,"的")]),n("annotation",{encoding:"application/x-tex"},'{msg}"的')])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal"},"m"),n("span",{class:"mord mathnormal"},"s"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g")]),n("span",{class:"mord"},'"'),n("span",{class:"mord cjk_fallback"},"的")])])]),s("msg 是thymeleaf占位符语法")],-1),Ms=e(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>th</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.thymeleaf.org<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Index Page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${msg}<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span>red</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>Welcome to BeiJing!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${msgg}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--下面这个可以用 |  | 拼接字符串--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>|\${msgg} this is thymeleaf 教程|<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${msgg}+&#39;this is thymeleaf 教程&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${user.name}+\${user.age} + &#39;this is thymeleaf 教程&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>controllser</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Api</span><span class="token punctuation">(</span>tags <span class="token operator">=</span> <span class="token string">&quot;thymeleaf相关&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> thymeController <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/index/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span><span class="token string">&quot;thymeleafTest&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token class-name">Model</span> model<span class="token punctuation">,</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">User</span> user<span class="token operator">=</span>userService<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//model.addAttribute(&quot;msg&quot;, &quot;欢迎使用 thymeleaf&quot;);</span>
        model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;欢迎使用thymeleaf&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;msgg&quot;</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入网页地址，可以看到 msg 为 欢迎使用 thymeleaf 展示在 html 中</p><h3 id="整合thymeleaf-实现模板文件转word打印" tabindex="-1"><a class="header-anchor" href="#整合thymeleaf-实现模板文件转word打印" aria-hidden="true">#</a> 整合thymeleaf 实现模板文件转word打印</h3>`,5),Cs={href:"https://blog.csdn.net/HXNLYW/article/details/106330927",target:"_blank",rel:"noopener noreferrer"},Rs=n("h3",{id:"整合flyingsaucer-thymeleaf-实现模板文件转pdf打印",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#整合flyingsaucer-thymeleaf-实现模板文件转pdf打印","aria-hidden":"true"},"#"),s(" 整合FlyingSaucer + thymeleaf 实现模板文件转pdf打印")],-1),Ds={href:"https://blog.csdn.net/HXNLYW/article/details/104478142",target:"_blank",rel:"noopener noreferrer"},Ps=n("p",null,"字体文件放在 resources/static/font/simsun.ttf 位置 ，不加入字体文件导出pdf时会格式错误",-1),As={href:"https://wwmj.lanzoue.com/iYBOx1a6cbab",target:"_blank",rel:"noopener noreferrer"},Os=n("h2",{id:"文章收藏",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#文章收藏","aria-hidden":"true"},"#"),s(" 文章收藏")],-1),Ls={href:"https://mp.weixin.qq.com/s/evA1d1vY9Nqt72zFNQvgeA",target:"_blank",rel:"noopener noreferrer"};function Ns(Es,Qs){const a=c("ExternalLinkIcon");return o(),i("div",null,[u,n("h3",r,[d,s(" 学前拓展：mybatis "),n("a",k,[s("B站视频资料"),t(a)])]),v,n("p",null,[n("a",m,[s("IDEA最右侧栏的Maven窗口不见了怎么调出来-百度经验 (baidu.com)"),t(a)]),s(),b]),g,n("p",null,[n("a",h,[s("https://blog.csdn.net/weixin_43785284/article/details/122015400"),t(a)])]),y,n("p",null,[n("a",f,[s("https://blog.csdn.net/m0_67391121/article/details/126020133"),t(a)])]),w,n("p",null,[n("a",S,[s("(228条消息) Controller层接收前端页面传参种类及实现_前端传值到controller_爱学习的小健的博客-CSDN博客"),t(a)])]),q,n("p",null,[n("a",x,[s("(210条消息) MAVEN:打包报错 Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.1:compile_Int_Xu的博客-CSDN博客"),t(a)])]),_,n("p",null,[n("a",I,[s("(227条消息) jar包在linux上持续运行及终止运行的命令_linux 停止持久运行_羊糕的博客-CSDN博客"),t(a)])]),n("p",null,[n("a",T,[s("(227条消息) Linux 解决nohup: 忽略输入并把输出追加到“nohup.out“和nohup: 忽略输入重定向错误到标准输出端_千与千与千的博客-CSDN博客"),t(a)])]),B,n("p",null,[s("VIM中常用命令 "),n("a",j,[s("https://blog.csdn.net/feosun/article/details/73196299"),t(a)])]),M,C,R,n("p",null,[n("a",D,[s("(210条消息) linux 安装mysql8.0 超详细图文教程__亮亮同學的博客-CSDN博客"),t(a)])]),n("p",null,[s("安装mysql，进行初始化时失败报错 ： "),n("a",P,[s(" 初始化Mysql报错：初始化数据库显示libaio.so.1_兔飞小朋友的博客-CSDN博客"),t(a)])]),n("p",null,[s("报错：log-error set to '/var/log/mariadb/mariadb.log', however file don't exists. Create writable for user 'mysql'. "),n("a",A,[s("(219条消息) Linux安装MySQL时候出现log-error set to '/var/log/mariadb/mariadb.log', however file don't exists._BertonYip的博客-CSDN博客"),t(a)])]),O,n("p",null,[n("a",L,[s("(219条消息) Mysql 启动报错解析：Starting MySQL.. ERROR! The server quit without updating PID file (/usr/local/mysql/dat_清风的BLOG的博客-CSDN博客"),t(a)])]),n("p",null,[n("a",N,[s("Linux 安装 MySQL 8.0.26 超详细图文步骤 - yoodb - 博客园 (cnblogs.com)"),t(a)]),s(" (实测有效)")]),n("p",null,[n("a",E,[s("(210条消息) Linux怎样到切换到超级用户_linux超级用户权限怎么打开_bo_无问西东的博客-CSDN博客"),t(a)])]),Q,n("p",null,[n("a",U,[s("(210条消息) 05.navicat连接不上虚拟机内的mysql_navicat连不上虚拟机中的mysql_weixin_49015210的博客-CSDN博客"),t(a)])]),z,J,V,F,W,H,n("p",null,[s("Redis下载与安装"),K,s(" 在Linux系统安装Redis步骤： 1.将Redis安装包上传到Linux 下载地址("),n("a",G,[s("https://download.redis.io/releases/"),t(a)]),s(")")]),Y,X,$,Z,nn,sn,n("p",null,[n("a",an,[s("(227条消息) linux 安装jdk 两种方法：手动安装 和yum安装：_阿尔卑斯狼__的博客-CSDN博客"),t(a)])]),n("p",null,[s("yum install -y java-1.8.0-"),n("a",tn,[s("openjdk"),t(a)]),s(".x86_64")]),n("p",null,[s("查看 java -"),n("a",en,[s("version"),t(a)])]),pn,n("p",null,[n("a",on,[s("(227条消息) linux下打开对外开放端口号_linux开通端口_laidanlove250的博客-CSDN博客"),t(a)])]),cn,n("p",null,[n("a",ln,[s("(214条消息) springboot与maven的多环境兼容解决方案_springboot兼容pom_沐雪架构师的博客-CSDN博客"),t(a)])]),un,n("p",null,[n("a",rn,[s("(214条消息) SpringBoot的日志_springboot 日志_威少总冠军的博客-CSDN博客"),t(a)])]),dn,n("p",null,[n("a",kn,[s("(214条消息) springboot实现热部署_springboot热部署_lwj_07的博客-CSDN博客"),t(a)])]),vn,n("p",null,[n("a",mn,[s("(215条消息) SpringBoot测试用例设置随机数据_springboot生成随机id_梨轻巧的博客-CSDN博客"),t(a)])]),bn,n("p",null,[n("a",gn,[s("SpringBoot使用JdbcTemplate_慕课手记 (imooc.com)"),t(a)])]),hn,n("p",null,[n("a",yn,[s("参考B站redis视频"),t(a)])]),n("p",null,[s("redis配置文件： "),n("a",fn,[s("Redis配置文件详解 - 掘金 (juejin.cn)"),t(a)]),s(),n("a",wn,[s("Redis配置文件Redis.conf详解 - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[s("redis 常用指令 "),n("a",Sn,[s("redis 常用指令 - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[qn,s(),n("a",xn,[s("https://gitee.com/qishibo/AnotherRedisDesktopManager/releases"),t(a)])]),_n,n("p",null,[s("参考： "),n("a",In,[s("(215条消息) springboot整合redis_springboot redis_lwj_07的博客-CSDN博客"),t(a)])]),n("p",null,[s("​ "),n("a",Tn,[s("(215条消息) 如何用SpringBoot整合Redis（详细讲解~）_我是一棵卷心菜的博客-CSDN博客"),t(a)])]),n("p",null,[s("​ "),n("a",Bn,[s("SpringBoot教程(十四) | SpringBoot集成Redis(全网最全) - 掘金 (juejin.cn)"),t(a)])]),jn,n("p",null,[s("增加RedisConfig的配置类（ "),n("a",Mn,[s(" redistemplate使用前需要配置一下connectionfactory和序列化方式_"),t(a)]),s(" ）")]),n("p",null,[n("a",Cn,[s("redis配置序列化_redis序列化-CSDN博客"),t(a)])]),n("p",null,[n("a",Rn,[s("【精选】最详细 | redis实战:JackSon/FastJson方式序列化深度解析_redis使用fastjson序列化_阿千弟的博客-CSDN博客"),t(a)])]),Dn,n("p",null,[n("a",Pn,[s("RedisCache redis工具类_rediscache.setcacheobject-CSDN博客"),t(a)])]),An,n("p",null,[n("a",On,[s("(230条消息) RedisTemplate常用方法（超详细）_Yan Yang的博客-CSDN博客"),t(a)])]),n("p",null,[n("a",Ln,[s("RedisTemplate操作Redis，这一篇文章就够了（一） - 掘金 (juejin.cn)"),t(a)])]),Nn,n("p",null,[n("a",En,[s("(230条消息) redisTemplate.opsForValue()中方法讲解_Archie_java的博客-CSDN博客"),t(a)])]),n("p",null,[n("a",Qn,[s("(230条消息) RedisTemplate使用最详解（一）--- opsForValue()_opsforvalue().set_学习中啊哈哈的博客-CSDN博客"),t(a)])]),Un,n("p",null,[n("a",zn,[s("(216条消息) Redis 基础 Jedis -- Jedis（Java程序操作Redis的工具）_CodeJiao的博客-CSDN博客"),t(a)])]),Jn,Vn,Fn,Wn,n("p",null,[n("a",Hn,[s("(216条消息) MongoDB数据库的常用命令_mongodb数据库命令_勤奋上进的兔子的博客-CSDN博客"),t(a)])]),Kn,n("p",null,[n("a",Gn,[s("(216条消息) 《SpringBoot篇》15.SpringBoot整合MongoDB超详细教程（包括安装教程）_springboot mongodb_陈老老老板的博客-CSDN博客"),t(a)])]),n("p",null,[n("a",Yn,[s("全面学习MongoDB，在Spring Boot项目中整合 MongoDB-腾讯云开发者社区-腾讯云 (tencent.com)"),t(a)])]),Xn,n("p",null,[s("下载： "),n("a",$n,[s("Download Elasticsearch | Elastic"),t(a)])]),n("p",null,[s("文档参考： "),n("a",Zn,[s("(217条消息) ElasticSearch使用教程、设计到实战_ForFuture Code的博客-CSDN博客"),t(a)])]),ns,n("p",null,[n("a",ss,[s("(218条消息) 【SpringBoot整合缓存】-----Redis缓存篇_springboot redis缓存_潮浪之巅的博客-CSDN博客"),t(a)]),s(),n("a",as,[s("(218条消息) 【JetCache】JetCache的使用方法与步骤_No8g攻城狮的博客-CSDN博客"),t(a)])]),n("p",null,[n("a",ts,[s("J2Cache: Java 两级缓存框架，可以让应用支持两级缓存框架 ehcache(Caffeine) + redis 。避免完全使用独立缓存系统所带来的网络IO开销问题 (gitee.com)"),t(a)])]),es,n("p",null,[n("a",ps,[s("(228条消息) JWT的组成_Jint001的博客-CSDN博客"),t(a)])]),os,n("p",null,[n("a",is,[s("JWT工具类（拿来直接用就完了，注释解释的很详细）_/** * jwt 工具类 * * @author json * @date 2021/11/15 -CSDN博客"),t(a)])]),cs,n("p",null,[n("a",ls,[s("(228条消息) 使用springBoot实现token校验_springboot 校验token_秃头小陈~的博客-CSDN博客"),t(a)])]),us,n("p",null,[s("参考文档： "),n("a",rs,[s("Docker安装部署RabbitMQ - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[n("a",ds,[s("超详细的RabbitMQ入门"),t(a)])]),n("p",null,[n("a",ks,[s("RabbitMQ详解之你要的RabbitMQ这里都有_adobehu的博客-CSDN博客"),t(a)])]),n("p",null,[n("a",vs,[s("01-今日课程介绍_哔哩哔哩_bilibili"),t(a)])]),ms,n("p",null,[n("a",bs,[s("http://127.0.0.1:15672"),t(a)]),s(" （使用服务器的 ip 地址） 打开RabbitMQ的管理页面（使用设置的用户名和密码可以登录进去）")]),gs,n("h4",hs,[ys,s(" 示例（ "),n("a",fs,[s("B站视频地址"),t(a)]),s(" ）")]),ws,n("p",null,[n("a",Ss,[s("RabbitMQ交换机类型简述 "),t(a)])]),qs,xs,_s,n("p",null,[n("a",Is,[s("Thymeleaf基本使用_thymeleaf ui-CSDN博客"),t(a)])]),n("p",null,[n("a",Ts,[s("Thymeleaf 教程 | 範宗雲 (fanlychie.github.io)"),t(a)])]),Bs,js,Ms,n("p",null,[n("a",Cs,[s("整合thymeleaf 实现模板文件转word打印_springboot导出word纸张大小-CSDN博客"),t(a)])]),Rs,n("p",null,[n("a",Ds,[s("《SpringBoot2.0 实战》系列-整合FlyingSaucer + thymeleaf 实现模板文件转pdf打印-CSDN博客"),t(a)])]),Ps,n("p",null,[n("a",As,[s("https://wwmj.lanzoue.com/iYBOx1a6cbab"),t(a)]),s(" 密码:guv2")]),Os,n("p",null,[n("a",Ls,[s("告别繁琐：SpringBoot 拦截器与统一功能处理 (qq.com)"),t(a)])])])}const Js=p(l,[["render",Ns],["__file","spring-boot.html.vue"]]);export{Js as default};
