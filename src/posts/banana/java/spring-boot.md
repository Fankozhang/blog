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



# springboot

### 学前拓展：mybatis    [B站视频资料](https://www.aliyundrive.com/drive/folder/64b62f7c7f489a9922244688af39ca6ae035ebb2) 



idea操作，编译报错解决

 [IDEA最右侧栏的Maven窗口不见了怎么调出来-百度经验 (baidu.com)](https://jingyan.baidu.com/article/48b558e35cbfc73e39c09a4e.html)    **按下Ctrl+Shift+A** 

java： 错误：无效的源发行版：14

https://blog.csdn.net/weixin_43785284/article/details/122015400

JAVA‘无效目标发行版 17’的解决方案

https://blog.csdn.net/m0_67391121/article/details/126020133



## springBoot整合junit

1.导入测试对应的starter
2,测试类使用@SpringBootTest修饰
3,使用自动装配的形式添加要测试的对象

springBoot项目创建会自动生成测试类

```java
package com.example.demo;

import com.example.demo.dao.BookDao;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

// 测试类使用@SpringBootTest修饰
@SpringBootTest
class DemoApplicationTests {
    // 1注入要测试的对象
	@Autowired
	private BookDao bookDao;

    
    //在需要测试的方法上添加@Test注解，然后找到run该方法，点击可直接运行，测试该方法有无bug。
	@Test
	void contextLoads() {
		//2.执行要测试的对象对应的方法
		bookDao.save();
	}

}
```

1,测试类如果存在于引导类所在包或子包中无需指定引导类
2.测试类如果不存在于引导类所在的包或子包中需要通过@SpringBootTest(c1asses= ***.class)属性指定引导类

## 整合myBatis （数据库配置）

该心配置：数据库连接相关信息（连什么？连谁？什么权限)
映射配置：SQL映射（ML/注解)

建模块时可勾选 SQL->MyBatis Framework,MySQL Driver ,不勾选则自己导入坐标

```
        <!--1.导入对应的starter-->
        
        <dependency>
			<groupId>org.mybatis.spring.boot</groupId>
			<artifactId>mybatis-spring-boot-starter</artifactId>
			<version>3.0.0</version>
		</dependency>

		<dependency>
			<groupId>com.mysql</groupId>
			<artifactId>mysql-connector-j</artifactId>
			<scope>runtime</scope>
		</dependency>
```

application.yml配置信息

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mybatis?serverTimezone=GMT%2B8&useUnicode=true&characterEncoding=utf-8&useSSL=false&allowPublicKeyRetrieval=true
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: root
    password: root
```

运行报错大多都是因为 application.yml 配置信息填写有误

```java
@Mapper
public interface UserDao {
    @Select("select * from user where id = #{id}")
    public User getById(Integer id);
}
```

注意事项：

1,勾选MyBatis技术，也就是导入MyBatis对应的starter
2.数据库连接相关信息转换成配置
3.数据库SQL映射需要添加@Mapper被容器识别到



## 整合MyBatis-Plus

MyBatis-Plus与MyBatis区别:      导入坐标不同      数据层实现简化

```
        <dependency>
			<groupId>com.baomidou</groupId>
			<artifactId>mybatis-plus-boot-starter</artifactId>
			<version>3.4.3</version>
		</dependency>
```



```
@Mapper
public interface UserDao extends BaseMapper<User> {

}
```

```
# 设置MP相关的配置(非必要)
# 使用mybatis_plus时给所有表加前缀（搜索相关知识学习）
mybatis-plus:
  global-config:
    db-config:
      table-prefix: my_
```

1,手工添加MyBatis-Plus对应的starter
2.数据层接口使用BaseMapperi简化开发
3.需要使用的第三方技术无法通过勾选确定时，需要手工添加坐标

## 整合 Druid

```
<dependency>
			<groupId>com.alibaba</groupId>
			<artifactId>druid-spring-boot-starter</artifactId>
			<version>1.2.6</version>
		</dependency>
```

配置 druid 数据源

application.yml

```yaml
spring:
  datasource:
    druid:
      url: jdbc:mysql://localhost:3306/mybatis?serverTimezone=GMT%2B8&useUnicode=true&characterEncoding=utf-8&useSSL=false&allowPublicKeyRetrieval=true
      driver-class-name: com.mysql.cj.jdbc.Driver
      username: root
      password: root
```

## SSMP 整合案例

maven导入相关依赖

### 实体类创建(lombok)

```java
// 仅用作实体类注解展示
@TableName("user")
public class User {
    //@TableId 将属性所对应的字段指定为主键
    //@TableId,注解的value,属性用于指定主键的字段
    //@TableId注解的type属性设置主罐生成策略
    @TableId(value = "id",type = IdType.AUTO)
    private Integer id;
    //指定属性所对应的字段名 如数据库字段名为 （user_name）
    @TableField("name")
    private String name;
    private String pwd;

    @TableField("is_deleted")
    @TableLogic  // 逻辑删除，数据库字段加（is_deleted）
    private Integer isDelated;

    private String token;


}
```

**Book.class**

Lombok,一个Java类库，提供了一组注解，简化P0J0实体类开发

lombok版本由SpringBoot提供，导入依赖无需指定版本

```
<dependency>
			<groupId>org.projectlombok</groupId>
			<artifactId>lombok</artifactId>
		</dependency>
```

常用注解：@Data  

为当前实体类在编译期设置对应的get/set方法，toString.方法，hashCode.方法，equals方法等

```
@Data
public class Book {
    private Integer id;
    private String name;
    private String author;
}
```

### 数据层开发

导入配置数据库依赖和连接信息

***<u>myBatis写法</u>***

**bookDao Interface**  

```java
@Mapper
public interface BookDao {
    @Select("select * from book where id = #{id}")
    Book getBookById(Integer id);
}

//  myBatis-plus 写法简化
```

测试：

```java
@SpringBootTest
class SpringMybatisApplicationTests {
	@Autowired
	private BookDao bookDao;
	
	@Test
	void bookTest(){
		System.out.println(bookDao.getBookById(1));

	}

}
```

打印结果：     Book(id=1, name=西游记, author=吴承恩)

***<u>myBatis-plus写法</u>***

**bookDao Interface**  

```
@Mapper
public interface BookDao extends BaseMapper<Book> {
}
```

#### 查询测试：

```java
@SpringBootTest
class SpringMybatisApplicationTests {
	@Autowired
	private BookDao bookDao;

    // 查询 id 为 1 的数据
	@Test
	void bookTest(){
		System.out.println(bookDao.selectById(1));
	}
    // 查询表中所有数据
    @Test
	void selectAll(){
		System.out.println(bookDao.selectList(null));
	}

}
```

#### 新增保存测试：

```java
@Test
	void testSave(){
		Book book = new Book();
		book.setName("红楼梦");
		book.setAuthor("施耐庵");
		bookDao.insert(book);
	}
```

报错 ：Could not set property 'id' of 'class com.example.spring_mybatis.domain.Book' with value '1657285673607540737' Cause: java.lang.IllegalArgumentException: argument type mismatch

myBatis的id自增测策略 和 数据库的不同导致的报错，解决方法

application 增加配置（id-type 设置）

```
mybatis-plus:
  global-config:
    db-config:
      id-type: auto
```

#### 修改测试：

```java
// 将数据库 id 为 2 的数据做更新
	@Test
	void testUpdate(){
		Book book = new Book();
		book.setId(2);
		book.setName("三国");
		book.setAuthor("施耐庵");
		bookDao.updateById(book);
	}
```

#### 删除测试：

```java
// 删除数据库 id 为 4 的那条数据
	@Test
	void testDelete() {
		bookDao.deleteById(4);
	}
```

总结：1,手工导入starter.坐标（2个)
            2,配置数据源与MyBatisPlus对应的配置
            3.开发Dao接口（继承BaseMapper)
           4.制作测试类测试Dao功能是否有效

#### 分页查询测试：

```java
@Test
	void testGetPage(){
		IPage page = new Page(2,2);
		bookDao.selectPage(page,null);
        
        // 获取分页信息
        System.out.println(page.getCurrent());
		System.out.println(page.getSize());
		System.out.println(page.getTotal());
		System.out.println(page.getPages());
		System.out.println(page.getRecords());
	}
```

mybatis-plus 使用分页查询时要用到 分页查询的拦截器

新建 config/MpConfig

```java
// @Configuration注解必须要有

@Configuration
public class MpConfig {
    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor(){
        MybatisPlusInterceptor mybatisPlusInterceptor=new MybatisPlusInterceptor();
       mybatisPlusInterceptor.addInnerInterceptor(new PaginationInnerInterceptor());
        return mybatisPlusInterceptor;
    }
}
```

1,使用IPage封装分页数据
2,分页操作依赖MyBatisPlus:分页拦截器实现功能
3.借助MyBatisPlus日志查阅执行SQL语句



#### 按条件查询测试：

```java
// 查询 name 字段 为 西游记 的数据，类似select * from book where name like %spring%
@Test
	void testby(){
		QueryWrapper<Book> queryWrapper=new QueryWrapper<>();
		queryWrapper.like("name","西游记");
		System.out.println(bookDao.selectList(queryWrapper));
	}

// 推荐使用这种写法
@Test
	void testby2(){
		String name=null;
		LambdaQueryWrapper<Book> lambdaQueryWrapper=new LambdaQueryWrapper<>();
        // 当传入的参数不为 null 才执行按参数查询
		lambdaQueryWrapper.like(name!=null,Book::getName,name);
		System.out.println(bookDao.selectList(lambdaQueryWrapper));
	}
```



### 为方便调试可以开启MyBatisPlus的日志

application.yml

```yaml
mybatis-plus:
  global-config:
    db-config:
      id-type: auto
  configuration:
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl

```

### 业务层开发

#### 普通的业务开发操作

新建 service/BookService  Interface

```
public interface BookService {
    Boolean save(Book book);
    Boolean update(Book book);
    Boolean delete(Integer id);
    Book getById(Integer id);
    List<Book> getAll();
    IPage<Book> getPage(Integer currentPage,Integer pageSize);
}
```

service/Impl/ServiceImpl    class

```
// @Service 定义成业务层service的Bean
@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookDao bookDao;

    @Override
    public Boolean save(Book book) {
        return bookDao.insert(book)>0;
    }

    @Override
    public Boolean update(Book book) {
        return bookDao.insert(book)>0;
    }

    @Override
    public Boolean delete(Integer id) {
        return bookDao.deleteById(id)>0;
    }

    @Override
    public Book getById(Integer id) {
        return bookDao.selectById(id);
    }

    @Override
    public List<Book> getAll() {
        return bookDao.selectList(null);
    }
    
    @Override
    public IPage<Book> getPage(Integer currentPage, Integer pageSize) {
        IPage page = new Page(currentPage,pageSize);
        return bookDao.selectPage(page,null);
    }
}
```

测试：（和之前的数据层测试差不多）

```
@SpringBootTest
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
        book.setName("红楼梦");
        book.setAuthor("施耐庵");
        bookService.save(book);
    }

    // 将数据库 id 为 2 的数据做更新
    @Test
    void testUpdate(){
        Book book = new Book();
        book.setId(2);
        book.setName("三国");
        book.setAuthor("施耐庵");
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

```

1.Service接口名称定义成业务名称，并与Dao接口名称进行区分
2.制作测试类测试Service功能是否有效

#### mybatis-plus 简化常规的业务操作

快速开发方案
		使用MyBatisPlus提供有业务层通用接口  ISerivce  与业务层通用实现类(ServiceImpl<M,T>)
		在通用类基础上做功能重载或功能追加
		注意重载时不要覆盖原始操作，避免原始提供的功能丢失

新建 service/IbookService  Interface

```
public interface IbookService extends IService<Book> {

    // 在里面也可以写自己的业务操作，只是尽量别和 Iservice 里面的方法重复
    // 追加的操作与原始操作通过名称区分，功能能类似
}
```

service/Impl/ServiceImpl    class

```
public class BookServiceImpl extends ServiceImpl<BookDao, Book> implements IbookService {

}
```

测试

```
@SpringBootTest
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
        book.setName("红楼梦");
        book.setAuthor("施耐庵");
        bookService.save(book);
    }

    // 将数据库 id 为 2 的数据做更新
    @Test
    void testUpdate(){
        Book book = new Book();
        book.setId(2);
        book.setName("三国");
        book.setAuthor("施耐庵");
        bookService.updateById(book);
    }

    // 删除数据库 id 为 1 的那条数据
    @Test
    void testDelete() {
        bookService.removeById(1);
    }

    @Test
    void testGetPage(){
        IPage<Book> pages=new Page<Book>(1,3);
        //IPage page = new Page(2,2);
        IPage<Book> page=bookService.page(pages);
        System.out.println(page.getCurrent());
        System.out.println(page.getSize());
        System.out.println(page.getTotal());
        System.out.println(page.getPages());
        System.out.println(page.getRecords());
    }
}
```

### 表现层开发

​       基于Restful进行表现层接口开发
​       使用Postman测试表现层接口功能

1.基于Restfu1制作表现层接口
		新增：POST
		删除：DELETE
		修改：PUT
		查询：GET
2.接收参数
		实体数据：@RequestBody
		路径变量：@PathVariable

 [(228条消息) Controller层接收前端页面传参种类及实现_前端传值到controller_爱学习的小健的博客-CSDN博客](https://blog.csdn.net/CJPSR/article/details/131094717) 

controller/BookController      restful接口

```java
@RestController
@RequestMapping("/books")     // 路径
public class BookController {
    @Autowired
    private IbookService bookService;

    @GetMapping
    public List<Book> getAll(){
        return bookService.list();
    }

    @PostMapping
    public Boolean save(@RequestBody Book book){
        return bookService.save(book);
    }

    @PutMapping
    public Boolean update(@RequestBody Book book){
        return bookService.updateById(book);
    }

    @DeleteMapping("{id}")
    public Boolean delete(@PathVariable Integer id){
        return bookService.removeById(id);
    }

    @GetMapping("{id}")
    public Book getBookById(@PathVariable Integer id){
        return bookService.getById(id);
    }
    
    // 分页查询
    @GetMapping("/{currentPage}/{pageSize}")
    public List<Book> getPage(@PathVariable Integer currentPage,@PathVariable Integer pageSize){
        IPage<Book> pages=new Page<Book>(currentPage,pageSize);

        return bookService.page(pages).getRecords();
    }
}
```

#### 表现层消息一致性处理

设计表现层返回结果的模型类，用于后端与前端进行数据格式统一，也称为前后端数据协议

controller/util/R

```java
// 当返回数据时，需要什么数据自行添加，并加入对应的构造函数
@Data
public class R {
    private Boolean flag;
    private Object data;

    public R(){

    }
    public R(Boolean flag){
        this.flag=flag;
    }

    public R(Boolean flag,Object data ){
        this.flag=flag;
        this.data=data;
    }
    public R(Boolean flag,String msg ){
        this.flag=flag;
        this.msg=msg;
    }
}
```

controller/BookController

```java
@RestController
@RequestMapping("/books")
public class BookController {
    @Autowired
    private IbookService bookService;

    @GetMapping
    public R getAll(){
        return new R(true,bookService.list());
    }

    @PostMapping
    public R save(@RequestBody Book book){
        //R r=new R();
        //Boolean flag=bookService.save(book);
        //r.setFlag(flag);
        //return r;

        return new R(bookService.save(book));
    }

    @PutMapping
    public R update(@RequestBody Book book){
        return new R(bookService.updateById(book)) ;
    }

    @DeleteMapping("/{id}")
    public R delete(@PathVariable Integer id){
        return new R(bookService.removeById(id)) ;
    }

    @GetMapping("/{id}")
    public R getBookById(@PathVariable Integer id){
        return new R(true,bookService.getById(id)) ;
    }

    //  分页查询，参数查询 Book book获取参来的参数，LambdaQueryWrapper设置筛选的规则
    @GetMapping("/{currentPage}/{pageSize}")
    public R getPage(@PathVariable Integer currentPage,@PathVariable Integer pageSize,Book book){
        System.out.println(book);
        IPage<Book> pages=new Page<Book>(currentPage,pageSize);
        // 如果当前页码值大于了总页码值，那么重新执行查询操作，使用最大页码值作为当前页码值
        if(currentPage>bookService.page(pages).getPages()){
            pages=new Page<Book>(bookService.page(pages).getPages(),pageSize);
        }
        LambdaQueryWrapper<Book> lambdaQueryWrapper=new LambdaQueryWrapper<Book>();
        lambdaQueryWrapper.like(Strings.isNotEmpty(book.getName()),Book::getName,book.getName());
        lambdaQueryWrapper.like(Strings.isNotEmpty(book.getAuthor()),Book::getAuthor,book.getAuthor());
        return new R(true,bookService.page(pages,lambdaQueryWrapper)) ;
    }
}
```

1.设计统一的返回值结果类型便于前端开发读取数据
2,返回值结果类型可以根据需求自行设定，没有固定格式
3,返回值结果模型类用于后端与前端进行数据格式统一，也称为前后端数据协议

#### springMVC异常处理器

当接口出现异常时，返回数据又不一致，需要进行处理（当要给不同异常做不同处理时，可以多写几个异常处理）

controller/util/ProjectExceptionAdvics

```java
// 作为springMVC异常处理器
//@ControllerAdvice
@RestControllerAdvice
public class ProjectExceptionAdvice {

    // 拦截所有异常信息
    @ExceptionHandler(Exception.class)
    public R doException(Exception ex){
        //记录日志
        //迹知运媚
        // 迦知开发
        // ex.printStackTrace();  查看
        // https://blog.csdn.net/m0_49976286/article/details/119565008
        ex.printStackTrace();  
        return new R(false,"服务器异常");
    }
}
```

## 打包

打开maven面板， 先clean,在点击package打包（点击 Toggle 'Skip Tests'Mode 跳过测试过程，提示不安全）

（MAVEN:打包报错 Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.1:compile）

 [(210条消息) MAVEN:打包报错 Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.1:compile_Int_Xu的博客-CSDN博客](https://blog.csdn.net/Int_Xu/article/details/108184768) 

修改pom.xml  （配置和版本如下）

```
<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-compiler-plugin</artifactId>
				<configuration>
					<source>1.8</source>
					<target>1.8</target>
					<encoding>UTF-8</encoding>
				</configuration>
			</plugin>
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-resources-plugin</artifactId>
				<version>3.1.0</version>
				<configuration>
					<encoding>UTF-8</encoding>
				</configuration>
			</plugin>
		</plugins>
	</build>
```

命令行  java -jar  jar包文件名    运行

指定端口号   java -jar  jar包文件名   **--server.port=8085** 

 [(227条消息) jar包在linux上持续运行及终止运行的命令_linux 停止持久运行_羊糕的博客-CSDN博客](https://blog.csdn.net/qq_44142640/article/details/111687863) 

 [(227条消息) Linux 解决nohup: 忽略输入并把输出追加到“nohup.out“和nohup: 忽略输入重定向错误到标准输出端_千与千与千的博客-CSDN博客](https://blog.csdn.net/liu_feng_zi_/article/details/118730467) 

打包后运行，按条件查询时，出现类似 evaluating expression ‘ew.sqlSegment != null and ew.sqlSegment != ‘‘ and ew. mybaties plus问题  的错误：原因是mybatis-plus的版本不兼容，（3.5.2可以正常使用）

Windonws.端口被占用

```
#查询端口
netstat -ano
#查询指定端口
netstat-ano |findstr "端口号"
#根据进程PID查询进程名称
tasklist |findstr "进程PID号"
#根据PID杀死任务
taskki11/F/PID "进程PID号"
#根据进程名称杀死任务
taskki11 -f -t -im "进程名称"
```

## 部署运行(配置服务环境)

VIM中常用命令  https://blog.csdn.net/feosun/article/details/73196299

linux安装java运行环境：jdk

上传 jar 包 到usr/local/app 文件夹下

 linux下载mysql   usr/local/mysql 

 [(210条消息) linux 安装mysql8.0 超详细图文教程__亮亮同學的博客-CSDN博客](https://blog.csdn.net/u011421988/article/details/107234718) 

 安装mysql，进行初始化时失败报错 ： [ 初始化Mysql报错：初始化数据库显示libaio.so.1_兔飞小朋友的博客-CSDN博客](https://blog.csdn.net/qq_41817925/article/details/118674315) 



 报错：log-error set to '/var/log/mariadb/mariadb.log', however file don't exists. Create writable for user 'mysql'.     [(219条消息) Linux安装MySQL时候出现log-error set to '/var/log/mariadb/mariadb.log', however file don't exists._BertonYip的博客-CSDN博客](https://blog.csdn.net/BertonYip/article/details/80829524) 



Mysql 启动报错解析：Starting MySQL.. ERROR! The server quit without updating PID file (/usr/local/mysql/dat

 [(219条消息) Mysql 启动报错解析：Starting MySQL.. ERROR! The server quit without updating PID file (/usr/local/mysql/dat_清风的BLOG的博客-CSDN博客](https://blog.csdn.net/Qevery678/article/details/96422599) 



 [Linux 安装 MySQL 8.0.26 超详细图文步骤 - yoodb - 博客园 (cnblogs.com)](https://www.cnblogs.com/MrYoodb/p/15811199.html)    (实测有效)

 [(210条消息) Linux怎样到切换到超级用户_linux超级用户权限怎么打开_bo_无问西东的博客-CSDN博客](https://blog.csdn.net/qq_43611486/article/details/99609644) 



### **linux安装MySQL总结**

  /usr/local 目录下 

**下载MySQL**    `wget https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-8.0.21-linux-glibc2.12-x86_64.tar.xz` 

 **解压mysql**     `tar xvJf mysql-8.0.21-linux-glibc2.12-x86_64.tar.xz` 

 **重命名文件夹** （重命名为MySQL）     `mv mysql-8.0.21-linux-glibc2.12-x86_64 mysql`

**/usr/local/mysql  目录下创建data文件夹 存储文件**     `mkdir data`  

 **创建用户组以及用户和密码**      `groupadd mysql`       `useradd -g mysql mysql`

 **授权用户   改变mysql目录权限**     `chown -R mysql.mysql /usr/local/mysql` 

 **数据库初始化**    `./bin/mysqld --user=mysql --basedir=/usr/local/mysql --datadir=/usr/local/mysql/data --initialize`    得到临时密码，要记住，后面修改数据库密码要用到

 **修改my.cnf文件**    `vi /etc/my.cnf`   内容如下所示

```
[mysqld]
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
```

 (2013报错长连接  加 net_write_timeout = 900)

**创建mysql服务**    

（1）`cp -a /usr/local/mysql/support-files/mysql.server /etc/init.d/mysqld` 

（2）赋予权限，使用`chmod +x /etc/rc.d/init.d/mysql`d命令；

（3）使用`chkconfig --add mysqld`创建mysql服务。

 检查mysql服务是否生效，使用`chkconfig --list mysqld`命令。 

**配置全局环境变量**

编辑/etc/profile文件，使用vim /etc/profile命令，在profile文件中添加如下两行配置，使用:wq命令保存后退出。

```
`export PATH=$PATH:/usr/local/mysql/bin:/usr/local/mysql/lib``export PATH`
```

 设置环境变量立即生效使用`source /etc/profile`命令。 

 **启动mysql服务**，使用service mysql start命令；使用service mysql status命令，查看是否启动成功。

 service mysql start （用这个命令）   service mysql restart (重启)

**查看启动状态** 

```lua
service mysql status
```

**将mysql命令添加到服务** 

```cobol
ln -s /usr/local/mysql/bin/mysql /usr/bin
```

 **登录mysql**     `mysql -uroot -p` 密码使用之前随机生成的密码 

**修改root密码** 其中123456是新的密码自己设置

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
```

 **执行  使密码生效**    `flush privileges`

**设置mysql远程登录** 

1）切换数据库，使用use mysql;命令。

2）修改mysql库中host值，使用update user set host='%' where user='root' limit 1;命令。

3）刷新mysql权限，使用flush privileges;命令。









navicat连接虚拟机的MySQL连不上，查看打开修改虚拟机的端口

 [(210条消息) 05.navicat连接不上虚拟机内的mysql_navicat连不上虚拟机中的mysql_weixin_49015210的博客-CSDN博客](https://blog.csdn.net/weixin_49015210/article/details/117748687) 

服务器上指定端口号   java -jar  jar包文件名   **--server.port=8085**  运行jar包时，要开启端口号

输入命令然后回车
/sbin/iptables -I INPUT -p tcp --dport 8085 -j ACCEPT

再次输入 iptables -vnL|grep 8085 回车即可看到8085端口状态信息

当端口都打开后，用postman测试接口，成功返回数据。



1.使用 jar 命令启动SpringBoot工程时可以使用临时属性替换配置文件中的属性
2.临时属性添加方式：java -jar 工程名.jar --属性名=值
3.多个临时属性之间使用空格分隔
4.临时属性必须是当前boot工程支持的属性，否则设置无效



### 扩展linux安装redis

Redis下载与安装    
在Linux系统安装Redis步骤：
1.将Redis安装包上传到Linux  下载地址(https://download.redis.io/releases/)  

（注意下载版本，有的版本下载make报错）

2.解压安装包，命令：tar -zxvf redis-4.0.0.tar.gz -C /usr/local
3.安装Redis的依赖环境gcc,命令：yum install gcc-c++
4.进入/usr/local/redis-4.0.0,进行编译，命令：make
5.进入redis的src目录，进行安装，命令：make install



Linux中redis服务启动，可以使用redis-server,默认端口号为6379        ./redis.server 

Ctrl+C停止Redis服务

启动redis客户端   ./redis-cli      （命令keys *    查看所有数据   ）



### 扩展linux安装jdk

 [(227条消息) linux 安装jdk 两种方法：手动安装 和yum安装：_阿尔卑斯狼__的博客-CSDN博客](https://blog.csdn.net/m0_50217781/article/details/112414571) 

 yum install -y java-1.8.0-[openjdk](https://so.csdn.net/so/search?q=openjdk&spm=1001.2101.3001.7020).x86_64 

查看   java -[version](https://so.csdn.net/so/search?q=version&spm=1001.2101.3001.7020) 

###  linux下打开对外开放端口号

 [(227条消息) linux下打开对外开放端口号_linux开通端口_laidanlove250的博客-CSDN博客](https://blog.csdn.net/laidanlove250/article/details/97667113) 

## 临时属性设置（开发环境）

通过编程形式带参数启动SpringBoot程序，为程序添加运行参数

```java
@SpringBootApplication
public class SpringMybatisApplication {

	public static void main(String[] args) {
		String[] arg =new String[1];
		arg[0]="--server.port=8080";

		SpringApplication.run(SpringMybatisApplication.class, args);
	}

}

```

不携带参数启动SpringBoot程序

```java
@SpringBootApplication
public class SpringMybatisApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringMybatisApplication.class);
	}

}

```

## 配置文件分类

**1.SpringBoot中4级配置文件**
1级：file:config/application.yml   【最高】
2级：file:application.yml
3级：classpath:config/application.yml
4级：classpath:application.yml    【最低】
**2.作用：**
1级与2级留做系统打包后设置通用属性，1级常用于运维经理进行线上整体项目部署方案调控
3级与4级用于系统开发阶段设置通用属性，3级常用于项目经理进行整体项目属性调控

1.配置文件分为4种
	项目类路径配置文件：服务于开发人员本机开发与测试
	项目类路径conf1g目录中配置文件：服务于项目经理整体调控
	工程路径配置文件：服务于运维人员配置涉密线上环境
	工程路径config目录中配置文件：服务于运维经理整体调控
2,多层级配置文件间的属性采用叠加并覆盖的形式作用于程序



1.SpringBoot在开发和运行环境均支持使用临时参数修改工程配置
2.SpringBoot支持4级配置文件，应用于开发与线上环境进行配置的灵活设置
3.SpringBoot.支持使用自定义配置文件的形式修改配置文件存储位置
4.基于微服务开发时配置文件将使用配置中心进行管理



## 多环境开发

### application.yml中配置多个环境

1,多环境开发需要设置若干种常用环境，例如开发、生产、测试环境
2,yaml格式中设置多环境使用    ---    区分环境设置边界
3.每种环境的区别在于加载的配置属性不同
4,启用某种环境时需要指定启动时使用该环境

application.yml

```yml
#应用环境  ---下可配置多个环境，active选择使用哪个环境
#公共配置 不同环境相同的配置写在这
spring:
  profiles:
    active: pro

---
#设置环境
#生产环境
spring:
  config:
    activate:
      on-profile: pro
server:
  port: 80

---
#开发环境
spring:
  config:
    activate:
      on-profile: dev
server:
  port: 81

---
#测试环境
spring:
  config:
    activate:
      on-profile: test
server:
  port: 82


```



### 多个配置文件

1.主启动配置文件application.yml   （active配置环境文件名称用哪个）

```
spring:
  profiles:
    active: dev

```

2.环境分类配置文件application-pro.yml

```
server:
  port: 80

```

3,环境分类配置文件application-dev.yml

```
server:
  port:81

```

4.环境分类配置文件application-test.yml

```
server:
  port:82

```



### group属性设置配置文件分组

多环境开发使用group属性设置配置文件分组，便于线上维护管理

```
spring:
  profiles:
    active: dev
    group:
      "dev":devDB,devRedis,devMVC
      "pro":proDB,proRedis,proMVC
      "test":testDB,testRedis,testMVC

```



### springboot与maven的多环境兼容

 [(214条消息) springboot与maven的多环境兼容解决方案_springboot兼容pom_沐雪架构师的博客-CSDN博客](https://blog.csdn.net/puzi0315/article/details/127196143) 

1  mave 的 pom.xml 下加入如下环境配置，每个profile配置一个环境变量，  activation > activeByDefault 为 true ,代表使用这个环境

```
<profiles>
        <profile>
            <id>dev</id>
            <properties>
                <pom.profile>dev</pom.profile>
            </properties>
            <activation>
                <activeByDefault>true</activeByDefault>
            </activation>
        </profile>
        <profile>
            <id>test</id>
            <properties>
                <pom.profile>test</pom.profile>
            </properties>
        </profile>
 
        <profile>
            <id>prod</id>
            <properties>
                <pom.profile>prod</pom.profile>
            </properties>
        </profile>
 
    </profiles>

```

2  SpringBoot中引用Maven属性

```
spring:
  profiles:
    active: @pom.profile@

```

3  执行Maven打包指令，并在生成的boot打包文件 .jar文件中查看对应信息

注意：

1  当Maven与SpringBoot同时对多环境进行控制时，以Mavn为主，SpringBoot使用@，，@占位符读取Maven.对应的配置属性值
2  基于SpringBoot读取Maveni配置属性的前提下，如果在Idea下测试工程时pom.xml每次更新需要手动compile方可生效



## 日志

日志(log)作用：  

编程期调试代码     

运营期记录信息

​       记录日常运营重要信息（峰值流量、平均响应时长…）
​       记录应用报错信息（错误堆栈）
​       记录运维过程数据（扩容、宕机、报警…)

 [(214条消息) SpringBoot的日志_springboot 日志_威少总冠军的博客-CSDN博客](https://blog.csdn.net/gjwloveforever/article/details/124774662) 

日志级别
TRACE:运行堆栈信息，使用率低
DEBUG:程序员调试代码使用
INFO:记录运维过程数据
WARN:记录运维过程报警数据
ERROR:记录错误堆栈信息
FATAL:灾难信息，合并计入ERROR

1,日志用于记录开发调试与运维过程消息
2,日志的级别共6种，通常使用4种即可，分别是DEBUG,INF0,WARN,ERROR
3,可以通过日志组或代码包的形式进行日志显示级别的控制

application.yml  日志配置

```yml
logging:
  file:
    name: server.log  #普通配置生成日志的文件名
  logback:
    rollingpolicy:
      max-file-size: 10MB   # 一个日志文件最大的大小
      file-name-pattern: server.%d{yyyy-MM-dd}.%i.log  #生成多条日志文件时,配置文件名格式

```



## 热部署（只在开发环境有效）

 [(214条消息) springboot实现热部署_springboot热部署_lwj_07的博客-CSDN博客](https://blog.csdn.net/lwj_07/article/details/126226074) 

```
各种方式一定要加上devtools的依赖（在idea设置也需要引入devtools的依赖）
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <optional>true</optional>
</dependency>

```

设置高优先级属性禁用热部署

```
@SpringBootApplication
public class SpringMybatisApplication {

	public static void main(String[] args) {

		System.setProperty("spring.devtools.restart.enabled","false");

		SpringApplication.run(SpringMybatisApplication.class, args);
	}

}

```





## 实用开发

### bean 属性绑定

application.yml

```
servers:
  ipAdress: 127.0.0.1
  port: 2345
  timeOut: -1


```

ServerConfig.class  实体类

```
@Component   //定义Spring管理Bean
@Data      // lombok配置
@ConfigurationProperties(prefix = "servers")  //提供读取配置文件的一个注解
public class ServerConfig {
    private String ipAdress;
    private int port;
    private Long timeout;
}

```

解除使用@ConfigurationProperties注释警告（加 dependency ）

Spring Boot Configuration Annotation Processor not configured      Open Documentation.....

```
        <dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-configuration-processor</artifactId>
		</dependency>

```



使用@ConfigurationProperties.为第三方bean绑定属性

```
@Bean
@ConfigurationProperties(prefix= "datasource")
public DruidDataSource dataSource(){
     DruidDataSource ds new DruidDataSource();
     return ds;
}

```

```
datasource:
  driverclassName: com.mysql.jdbc.Driver

```

@EnableConfigurationProperties注解可以将使用@ConfigurationProperties注解对应的类加入Spring容器

注意：@EnableConfigurationProperties.与@Component不能同时使用



### SpringBoot支持JDK8提供的时间与空间计量单位

 @DurationUnit 注解在实体类中配置属性的 时间单位

 @DurationUnit注解在实体类中配置属性的 容量单位

```
public class ServerConfig {
    private String ipAdress;
    private int port;
    private Long timeout;

    @DurationUnit(ChronoUnit.MINUTES)  // 时间属性单位是分钟
    private Duration setTimeOut;
    @DataSizeUnit(DataUnit.MEGABYTES)  // 容量属性单位是MB
    private DataSize dataSize;
}

```



## bean属性校验

1  添加依赖：  导入JSR383规范

```
<dependency>
			<groupId>javax.validation</groupId>
			<artifactId>validation-api</artifactId>
		</dependency>

```

2  @Validated 用于开启配置校验

@Max，@Min 等注解用于配置属性具体的配置规则 

```
@Validated
public class ServerConfig {
    private String ipAdress;
    private int port;
    
    @Max(value = 800,message = "最大值不超过800")
    @Min(value = 80,message = "最小值不超过800")
    private Long timeout;

    @DurationUnit(ChronoUnit.MINUTES)  // 时间属性单位是分钟
    private Duration setTimeOut;
    @DataSizeUnit(DataUnit.MEGABYTES)  // 容量属性单位是MB
    private DataSize dataSize;
}

```

3  运行报错时，需要增加依赖   

实用 hibernate 框架是供的校验器做实现类

```
        <dependency>
			<groupId>org.hibernate.validator</groupId>
			<artifactId>hibernate-validator</artifactId>
		</dependency>

```

4  总结

1,启用Bean属性校验
导入JSR303与Hibernate校验框架坐标
使用@Validated注解启用校验功能
使用具体校验规则规范数据校验格式



## 测试

### 临时参数

application.yml

```
test:
  prop: value1

```

获取yml数据，或者临时参数。（临时参数优先级：args>properties >yml）

```java
@SpringBootTest(properties={"test.prop=testvalue1"},args={"--test.arg=testvalue2"})
    public class PropertiesAndArgsTest
        @Value("${test.prop}")  //获取参数
        private String msg;
        @Test
        void testProperties(){
            System.out.println(msg);
        }
    }

```



### 加载测试配置

使用@Import注解加载当前测试类专用的配置（在测试中加载）

加载测试范围配置应用于小范围测试环境

```
@SpringBootTest
@Import(MsgConfig.class)   // 加载 MsgConfig.class 的文件
public class ConfigurationTest{
  @Autowired   // msg是在MsgConfig.class中的一个bean
  private String msg;
  @Test
  void testConfiguration(){
    System.out.println(msg);
  }

}

```

### web环境模拟测试

web环境模拟测试
设置测试端口
模拟测试启动
模拟测试匹配（各组成部分信息均可匹配)

```java
@SpringBootTest (webEnvironment=SpringBootTest.WebEnvironment.RANDOM_PORT)
// 开启虚VC调用
@AutoConfigureMockMvc
public class WebTest{
     @Test
    //注入虚拟MVC调用对象  MockMvc
    public void testWeb(@Autowired MockMvc mvc)throws Exception{
        //创建虚拟请求，当前访问/books
        MockHttpServletRequestBuilder builder= MockMvcRequestBuilders.get("/books");
        //执行请求
        ResultActions action=mvc.perform(builder);
        
        //设定预彻值与真实值进行比较，成功测试通过，失败测试失毁
		//定义本次调用的预阻
		StatusResultMatchers status=MockMvcResultMatchers.status();
		//顾计本次调用时成功的：状态 200
		ResultMatcher ok =status.isOk();
		//添伽预计值到本次调用过星中进行匹鹿
		action.andExpect(ok);
        
        
      //  测试请求体  
        //匹配执行结果(是否预期值)
        //定义执行结果匹配器
        ContentResultMatchers content =MockMvcResultMatchers.content();
       //定义预期执行结果
        ResultMatcher result =content().string("springboot");
        //使用本次真实执行结果与预期结果进行比对
        action.andExpect(result);
    }
}

```

### 业务层测试事务回滚

使测试时的数据不会加到数据库中

为测试用例添加事务，SpringBoot会对测试用例对应的事务提交操作进行回滚

```
@SpringBootTest
@Transactional

```

如果想在测试用例中提交事务，可以通过@Rol1back注解设置

```
@SpringBootTest
@Transactional
@Rollback(false)

```

### SpringBoot测试用例设置随机数据

 [(215条消息) SpringBoot测试用例设置随机数据_springboot生成随机id_梨轻巧的博客-CSDN博客](https://blog.csdn.net/m0_45877477/article/details/125481585) 

## 数据层解决方案

现有数据层解决方案技术选型
Druid +MyBatis-Plus +MySQL

### 内嵌的数据源

SpringBoot提供了3种内嵌的数据源对象供开发者选择：

HikariCP:默认内置数据源对象
Tomcat提供DataSource：HikariCP不可用的情况下，且在web环境中，将使用tomcat服务器配置的数据源对象
Commons DBCP:Hikariz不可用，tomcat数据源也不可用，将使用dbcp数据源

```
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysq1://localhost:3306/ssm_db
    username: root
    password: root
  hikari:
    maximum-pool-size: 50

```



### 内置持久化解决方案一一JdbcTemplate

 [SpringBoot使用JdbcTemplate_慕课手记 (imooc.com)](https://www.imooc.com/article/46879) 

### 内嵌数据库

SpringBoot提供了3种内嵌数据库供开发者选择，提高开发测试效率
H2，HSQL，Derby



### NoSQL（redis,mongo）

市面上常见的NoSQL解决方案
Redis，Mongo，ES

### Redis

Redis是一款key-value存储结构的内存级NoSQL数据库
支持多种数据存储格式
支持持久化
支持集群

 [参考B站redis视频](https://www.bilibili.com/video/BV1CL411778r?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11) 

redis配置文件：  [Redis配置文件详解 - 掘金 (juejin.cn)](https://juejin.cn/post/7103413121108148231?searchId=2023072217271551246D108BFEAC7A75B5)   [Redis配置文件Redis.conf详解 - 掘金 (juejin.cn)](https://juejin.cn/post/7225596319447187515?searchId=2023072217271551246D108BFEAC7A75B5#heading-18) 

redis 常用指令   [redis 常用指令 - 掘金 (juejin.cn)](https://juejin.cn/post/7083793185142505503?searchId=20230722175214B26171A4359A33735BBA) 

*redis可视化工具*   https://gitee.com/qishibo/AnotherRedisDesktopManager/releases

##### **springBoot整合redis**客户端

 参考：  [(215条消息) springboot整合redis_springboot redis_lwj_07的博客-CSDN博客](https://blog.csdn.net/lwj_07/article/details/126265935) 

​               [(215条消息) 如何用SpringBoot整合Redis（详细讲解~）_我是一棵卷心菜的博客-CSDN博客](https://blog.csdn.net/weixin_59654772/article/details/125692784) 

​               [SpringBoot教程(十四) | SpringBoot集成Redis(全网最全) - 掘金 (juejin.cn)](https://juejin.cn/post/7076244567569203208#heading-7) 

依赖：

```
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-redis</artifactId>
        </dependency>

```

配置

```yml
spring:
  redis:
    # Redis服务器地址
    host: 127.0.0.1
    # Redis服务器端口号
    port: 6379
    # 使用的数据库索引，默认是0
    database: 0
    # 连接超时时间
    timeout: 1800000
    # 设置密码  没有密码不要写，否则会报错
    password: "123456" 
    # 默认lettuce  ，可以配置使用jedis
    lettuce:
      pool:
        # 最大阻塞等待时间，负数表示没有限制
        max-wait: -1
        # 连接池中的最大空闲连接
        max-idle: 5
        # 连接池中的最小空闲连接
        min-idle: 0
        # 连接池中最大连接数，负数表示没有限制
        max-active: 20

```



springboot 中操作 redis  (与客户端中操作redis不同步)

客户端：RedisTemplate以对象作为key和value,内部对数据进行序列化

```java
@SpringBootTest
class ConfigurationApplicationTests {

	@Autowired
	private RedisTemplate redisTemplate;

	@Test   // 向redis中录入一条数据
	void set(){
		ValueOperations ops= redisTemplate.opsForValue();
		ops.set("name","占山");
	}
	@Test   // 向redis中读取一条数据
	void get(){
		ValueOperations ops= redisTemplate.opsForValue();
		Object name= ops.get("name");
		System.out.println(name);
	}

	@Test   // 向redis中录入一组数据，类似于js的对象
	void hset(){
		HashOperations ops=redisTemplate.opsForHash();
		ops.put("info","name","占山");
		ops.put("info","age","11");
		ops.put("info","sex","男");
	}

	@Test   // 向redis中读取hset中存入的数据
	void hget(){
		HashOperations ops=redisTemplate.opsForHash();
		Object infoName=ops.get("info","name");
		Object infoAge=ops.get("info","age");
		Object infoSex=ops.get("info","sex");
		System.out.println(infoName);
		System.out.println(infoAge);
		System.out.println(infoSex);
	}


}


```

要获取客户端中同步的数据要用 StringRedisTemplate

客户端：StringRedisTemplate以字符串作为key和value,与Redis.客户端操作等效

```java
@SpringBootTest
class ConfigurationApplicationTests {

	@Autowired
	private StringRedisTemplate stringRedisTemplate;
	
	@Test   // 向redis中读取一条数据
	void get(){
		ValueOperations<String,String> ops= stringRedisTemplate.opsForValue();
		Object name= ops.get("name");
		System.out.println(name);
	}

}

```

##### RedisTemplate自定义配置及序列化

增加RedisConfig的配置类（ [ redistemplate使用前需要配置一下connectionfactory和序列化方式_](https://blog.csdn.net/Good_omen/article/details/123993468) ）

```java
@Configuration
public class RedisConfig {
    /**
     * 自定义RedisTemplate
     * redisTemplate 序列化使用的jdkSerializeable，存储二进制字节码, 所以自定义序列化类
     * @param redisConnectionFactory
     * @return
     */
    @Bean
    public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory) {

        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();

        // 设置value的序列化规则和 key的序列化规则
        redisTemplate.setKeySerializer(new StringRedisSerializer());
        //通用
        redisTemplate.setValueSerializer(new GenericJackson2JsonRedisSerializer());

        //  hash类型
        redisTemplate.setHashKeySerializer(new StringRedisSerializer());
        redisTemplate.setHashValueSerializer(new GenericJackson2JsonRedisSerializer());

        //注入连接工厂
        redisTemplate.setConnectionFactory(redisConnectionFactory);
        return redisTemplate;
    }
}

```



##### redisTemplate判断key是否过期且存在?

```java
@Autowired
private RedisTemplate<String, Object> redisTemplate;
 
@Autowired
private StringRedisTemplate template;
 
/**
 * 判断key是否存在
 * @param key
 * @return
 */
public boolean exists(String key) {
	return template.hasKey(key);
}
 
/**
 * 判断key是否过期
 * @param key
 * @return
 */
public boolean isExpire(String key) {
	return expire(key) > 0?false:true;
}
 
 
/**
 * 从redis中获取key对应的过期时间;
 * 如果该值有过期时间，就返回相应的过期时间;
 * 如果该值没有设置过期时间，就返回-1;
 * 如果没有该值，就返回-2;
 * @param key
 * @return
 */
public long expire(String key) {
	return redisTemplate.opsForValue().getOperations().getExpire(key);
}
```

#####  RedisTemplate常用方法

 [(230条消息) RedisTemplate常用方法（超详细）_Yan Yang的博客-CSDN博客](https://blog.csdn.net/zzvar/article/details/118388897) 

 [RedisTemplate操作Redis，这一篇文章就够了（一） - 掘金 (juejin.cn)](https://juejin.cn/post/7175756564752990267#heading-48) 

##### redisTemplate.opsForValue()方法

 [(230条消息) redisTemplate.opsForValue()中方法讲解_Archie_java的博客-CSDN博客](https://blog.csdn.net/qq_43842093/article/details/121527498) 

 [(230条消息) RedisTemplate使用最详解（一）--- opsForValue()_opsforvalue().set_学习中啊哈哈的博客-CSDN博客](https://blog.csdn.net/weixin_43658899/article/details/121062760) 

##### redis使用（手机号获取验证码）

```java
// redis测试
// 手机验证码功能
@Slf4j
@RestController
@CrossOrigin   // 解决跨域
public class PhoneValidateController {
    @Autowired
    private RedisTemplate redisTemplate;
    @Autowired
    private StringRedisTemplate stringRedisTemplate;
    // 生成验证码4位（调用手机号API短信接口）
    public int getGenerateCode(){
        int num=(int) (Math.random()*10000);
        return num;
    }
    /**
     * 用户在客户端输入手机号，点击发送后随机生成4位数字码。有效期为60秒。
     * 输入验证码，点击验证，返回成功或者失败。
     * 获取验证码清求
     * 根据用户输入的手机号生成对应KEY key=phone:code:手机号码
     * 如果KEY不存在，对KEY进行赋值，并设置过期时间：60秒。
     * 如果KEY存在：提示：验证码还在有效期内（己发送，请查看手机）
     */
    // 获取访客ip地址
    public String getCurrentIp(HttpServletRequest servletRequest){
        return servletRequest.getRemoteAddr();
    }
    // 获取验证码请求
    @ResponseBody
    @GetMapping("/getValidateCode")
    public Object getValidateCode(@RequestParam("phoneNumber") String phoneNumber,HttpServletRequest servletRequest){
        // 存放手机验证码的 redis key
        String key="phone:code:"+phoneNumber;
        ValueOperations<String,String> ops= stringRedisTemplate.opsForValue();
        // 全局ip锁定的key
        String phoneCodeIpLockKey="phone:code:lock"+this.getCurrentIp(servletRequest);
        if(stringRedisTemplate.hasKey(phoneCodeIpLockKey)){
            return "超过校验次数，有恶意访问行为，以被系统限制访问";
        }

        /**
         * T0D0 且每个IP地址。在5分钟内只能验证3次。并给相应信息提示。锁定这个IP 12小附。
         * 保护模式（手机短信资费）
         * 1、生成保护key phone:code:ip
         * 2、判断保护key是否存在
         * 如果不存在，进行+1并设定过期时间5分钟，
         * 如果存在，进行+1
         * 3、判惭保护ky值是否大于3,如果大于，生成一个新的锁IPKEY:
         * phone:code:lock:ip 过期时间为：12小时
         */
        String proteckKey="phone:code"+this.getCurrentIp(servletRequest);
        if(!stringRedisTemplate.hasKey(proteckKey)){
            ops.increment(proteckKey);
            stringRedisTemplate.expire(proteckKey,12,TimeUnit.HOURS);
        }else{
            ops.increment(proteckKey);
        }
        log.info("ops.get(proteckKey)"+ops.get(proteckKey));
        if(Integer.parseInt(ops.get(proteckKey))>=3){
            //IP需要被锁定12小时
            ops.set(phoneCodeIpLockKey,phoneCodeIpLockKey);
            stringRedisTemplate.expire(phoneCodeIpLockKey,12,TimeUnit.HOURS);
            return "超过校验次数，有恶意访问行为，以被系统限制访问";
        }

        if(!stringRedisTemplate.hasKey(key)){
            int phoneCode=this.getGenerateCode();
            log.info("手机号已发送API知信接口，验证码是"+phoneCode);
            ops.set(key, phoneCode+"", 5, TimeUnit.SECONDS);
            return "检证码发送成功，请查看手机短信";
        }else{
            return "验证码获取失败，请避免重复获取，耐心等待，还剩时间"+stringRedisTemplate.getExpire(key,TimeUnit.SECONDS)+"秒";
        }
    }

    /**
     * 确定按钮将前合用户输入的验证码信.息和Rdis中KEY查询进行比较
     * 如果相等验证码比较成功，用户手机绑定成功/登录成功。
     * 如果比较失败，验证码输入错误
     */
    @GetMapping("/validate")
    @ResponseBody
    public Object validate(@RequestParam("code") String code,@RequestParam("phoneNumber") String phoneNumber){
        ValueOperations<String,String> ops= stringRedisTemplate.opsForValue();
        // 生成 redis key
        String key="phone:code:"+phoneNumber;
        if(code.equals(ops.get(key))){
            log.info("手机号码校验成功，执行登录等相应业务逻缉");
            // 清空redis相应key :节省内存空间
            return "手机号码校验成功/登求成功";
        }
        return "验证码校验失败";
    }

}

```

##### redis使用（百度首页热点新闻列表）

ListCacheServiceImpl

```java
@Service
@Slf4j
public class ListCacheServiceImpl {
    /**
     * 需求：热点新闹列表获取最新5条首页新闻。
     * 1、查询：默认首页显示5条热点新闻。具备分页功能。
     * 2、后台管理员可以通过置顶新闻。
     */
    @Autowired
    private RedisTemplate<String, Object> redisTemplate;
    //ListOperations<String, String> listOper=redisTemplate.opsForList();
    @Resource(name = "redisTemplate")
    ListOperations<String, String> listOper;
    // 初始化5条新闻
    public  void initBaiduNews5(){
        String key="baidu:new:top5";
        listOper.rightPush(key,"1.新闻一");
        listOper.rightPush(key,"2.新闻一");
        listOper.rightPush(key,"3.新闻一");
        listOper.rightPush(key,"4.新闻一");
        listOper.rightPush(key,"5.新闻一");
        listOper.rightPush(key,"6.新闻一");
    }
    public Object getTop5(){
        String key="baidu:new:top5";
        List<String> list=listOper.range(key,0,4);
        return list;
    }
    // 官方小编可以商业化置顶新闻
    public Long addBaiDuNewsTop(String context){
        String key="baidu:new:top5";
        return listOper.leftPush(key,context);
    }
}
```

test测试功能

```java
// Redis List案例1模仿百度首页新闻展示（查的是Redis非MS0L)
	@Autowired
	private ListCacheServiceImpl listCacheServiceImpl;
	@Test
	public void testGetBaiDuTop5(){
		// 初始化将MYSQL数据(虚拟数据)存入Redis
		listCacheServiceImpl.initBaiduNews5();
		List<String> list= (List<String>) listCacheServiceImpl.getTop5();
		for(Object o : list){
			System.out.println(o);
		}
		listCacheServiceImpl.addBaiDuNewsTop("置顶新闻");
		List<String> list2= (List<String>) listCacheServiceImpl.getTop5();
		for(Object o : list2){
			System.out.println(o);
		}
	}

```



##### redis使用（任务队列，商城）

ProductQueueServiceImpl  生成的快递流程的任务队列

```java

@Service
@Slf4j
public class ProductQueueServiceImpl {
    @Autowired
    private RedisTemplate<String, Object> redisTemplate;
    @Resource(name = "redisTemplate")
    ListOperations<String, String> listOper;
   // 1 生成物流队列（客户完成支付功能会根据商家发货地址~用户收货地址）
   public List<String> initProductQueue(String cardId){
       // 待执行的任务队列
       String key="product:queue:execute:"+cardId;
       listOper.leftPush(key,"1、商家发货（快递小哥上门取货）");
       listOper.leftPush(key,"2、北京市海淀区--》北京首都国际机场");
       listOper.leftPush(key,"3、北京首都机场--》南京禄口机场");
       listOper.leftPush(key,"4、禄口机场---》建邺区");
       listOper.leftPush(key,"5、建邺区--》南京千锋二楼");
       listOper.leftPush(key,"6、已签收");
       return null;
   }
   // 2 消费队列
   public String touchQueue(String cardId){
        //待执行的任务队列
       String key="product:queue:execute:"+cardId;
       //己完成队列
       String succKey="product:queue:success:"+cardId;
       return listOper.rightPopAndLeftPush(key,succKey);
   }
   // 3 商家/物流公司：这个快递还有几顶任务未完成？
    public List<String> productQueueExcut(String cardId){
        //待执行的任务队列
        String key="product:queue:execute:"+cardId;
        return listOper.range(key,0,-1);
    }
    // 4 买家：我的快递到哪了？
    public List<String> productQueueSuccess(String cardId){
        //待执行的任务队列
        String succKey="product:queue:success:"+cardId;
        return listOper.range(succKey,0,-1);
    }
}
```

test测试功能

```java
@Autowired
	private ProductQueueServiceImpl productQueueServiceImpl;
	@Test
	public void testProductQueue(){
		System.out.println("买家支付成功物流队列运输开始");
		String cardId="123654896214";
		productQueueServiceImpl.initProductQueue(cardId);
		System.out.println("当前需要待执行的任务队列是");
		List<String> list=productQueueServiceImpl.productQueueExcut(cardId);
		for(String s:list){
			System.out.println(s);
		}
		System.out.println("快递小哥开始进行触发队列事件");
		String queueMessage=productQueueServiceImpl.touchQueue(cardId);
		System.out.println("快递小哥完成了任务队列："+queueMessage+"\n");
		productQueueServiceImpl.productQueueSuccess(cardId);
		System.out.println("当前需要待执行的任务队列是：");
		List<String> list1=productQueueServiceImpl.productQueueExcut(cardId);
		for(String s:list1){
			System.out.println(s);
		}
		System.out.println("我的货物到那儿了");
		List<String> list2=productQueueServiceImpl.productQueueSuccess(cardId);
		for(String s:list2){
			System.out.println(s);
		}
	}
```



##### jedis

 [(216条消息) Redis 基础 Jedis -- Jedis（Java程序操作Redis的工具）_CodeJiao的博客-CSDN博客](https://blog.csdn.net/I_r_o_n_M_a_n/article/details/122685882) 

lettcus与jedis区别
jedis连接Redis.服务器是直连模式，当多线程模式下使用jedis会存在线程安全问题，解决方案可以通过配置连接池使每个连接专用，这样整体性能就大受影响。
lettcus基于Netty框架进行与Redis服务器连接，底层设计中采用StatefulRedisConnection。StatefulRedisConnection自身是线程安全的，可以保障并发访问安全问题，所以一个连接可以被多线程复用。当然lettcus也支持多连接实例一起工作。



#### MongoDB

MongoDB是一个开源、高性能、无模式的文档型数据库。NoSQL数据库产品中的一种，是最像关系型数据库的非
关系型数据库

MongoDB数据库的常用命令

 [(216条消息) MongoDB数据库的常用命令_mongodb数据库命令_勤奋上进的兔子的博客-CSDN博客](https://blog.csdn.net/qq_55648724/article/details/128171457) 

springBoot整合 mongoDB

 [(216条消息) 《SpringBoot篇》15.SpringBoot整合MongoDB超详细教程（包括安装教程）_springboot mongodb_陈老老老板的博客-CSDN博客](https://blog.csdn.net/weixin_47343544/article/details/127175205) 

 [全面学习MongoDB，在Spring Boot项目中整合 MongoDB-腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/2245018) 

```
<!-- 引入mongodb-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-mongodb</artifactId>
        </dependency>

```

```
    @Autowired
	private MongoTemplate mongoTemplate;
	@Test
	void testMongo(){
		User user = new User();
		user.setName("一个名字");
		user.setAge(18);

		// 向 mongoDB 中存入一条数据
		mongoTemplate.save(user);
		// 从 mongoDB 中读取数据
		List<User> userlist = mongoTemplate.findAll(User.class);
		System.out.println(userlist);
	}

```

#### Elasticsearch (ES)

Elasticsearch是一个分布式全文搜索引擎

下载： [Download Elasticsearch | Elastic](https://www.elastic.co/cn/downloads/elasticsearch) 

文档参考： [(217条消息) ElasticSearch使用教程、设计到实战_ForFuture Code的博客-CSDN博客](https://blog.csdn.net/ganquanzhong/article/details/108633025) 

启动：bin/elasticsearch.bat

warning: ignoring JAVA_HOME=C:\Program Files\Java\jdk1.8.0_74; using bundled JDK

(jdk版本和elasticsearch版本不兼容，可以切换低版本的elasticsearch)

Elasticsearch 8.0报错：received plaintext http traffic on an https channel, closing connection

解决：  ES8默认开启了 SSL 认证。   **使用 https 发送请求，即：把 http 请求改成 https 即可。** 

或者修改 config/elasticsearch.yml         xpack.security.enabled: false

## 整合第三方数据

### 缓存

缓存是一种介于数据永久存储介质与数据应用之间的数据临时存储介质

使用缓存可以有效的减少低速数据读取过程的次数（例如磁IO），提高系统性能
缓存不仅可以用于提高永久性存储介质的数据读取效率，还可以提供临时的数据存储空间



//测试缓存

msgService  (interface)

```java
public interface MsgService {
    public String  get(String tel);
    public Boolean check(String tel,String code);
}

```

msgServiceImpl.class

```java
@Service
public class MsgServiceImpl implements MsgService {
    private HashMap<String, String> cache=new HashMap<String, String>();
    @Override
    public String get(String tel) {
        String code=tel.substring(tel.length()-6);
        cache.put(tel,code);
        return code;
    }

    @Override
    public Boolean check(String tel, String code) {
        String queryCode=cache.get(tel);
        return code.equals(queryCode);
    }
}

```

MsgController.class

```java
@RestController
@RequestMapping("/msg")
public class MsgController {
    @Autowired
    private MsgService msgService;

    @GetMapping("{tel}")
    public  String get(@PathVariable String tel){
        return msgService.get(tel);
    }
    @PostMapping
    public boolean check(String tel,String code){
        return msgService.check( tel, code);
    }

}

```



SpringBoot:提供了缓存技术，方便缓存使用

1 导入缓存的依赖

```
        <dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-cache</artifactId>
		</dependency>

```

2  开启缓存功能 ：  在启动类上加上   @EnableCaching  注解

3  设置当前操作的结果数据进入缓存

@Cacheable( value 开辟缓存空间   key： 缓存根据id去查询，要有#)

```java
@Override
    @Cacheable(value="cacheSpace",key="#id")
    public Book getById(Integer id) {
        return bookDao.selectById(id);
    }

```

 在不影响方法执行的情况下更新缓存时用CachePut

@CachePut(value="cacheSpace",key="#id")

不推荐将 @Cacheable 和 @CachePut 注解到同一个方法。 



整合其他的缓存技术

 [(218条消息) 【SpringBoot整合缓存】-----Redis缓存篇_springboot redis缓存_潮浪之巅的博客-CSDN博客](https://blog.csdn.net/Learning_xzj/article/details/125510872)  [(218条消息) 【JetCache】JetCache的使用方法与步骤_No8g攻城狮的博客-CSDN博客](https://blog.csdn.net/weixin_44299027/article/details/125559446) 

 [J2Cache: Java 两级缓存框架，可以让应用支持两级缓存框架 ehcache(Caffeine) + redis 。避免完全使用独立缓存系统所带来的网络IO开销问题 (gitee.com)](https://gitee.com/ld/J2Cache) 

## 任务

### 定时任务

市面上流行的定时任务技术：Quartz ，Spring Task

springboot整合Quartz 

相关概念：
工作（job):用于定义具体执行的工作
工作明细（JobDetail):用于描述定时工作相关的信息
触发器(Trigger):用于描述触发工作的规则，通常使用cron表达式定义调度规则
调度器(Scheduler):描述了工作明细与触发器的对应关系







## springBoot 项目常用maven配置

```
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.4.5</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.example.mybatis</groupId>
	<artifactId>demo</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>demo</name>
	<description>Demo project for Spring Boot</description>
	<properties>
		<java.version>17</java.version>
	</properties>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
			<scope>compile</scope>
		</dependency>

		<dependency>
			<groupId>com.baomidou</groupId>
			<artifactId>mybatis-plus-boot-starter</artifactId>
			<version>3.4.2</version>
		</dependency>

		<dependency>
			<groupId>org.projectlombok</groupId>
			<artifactId>lombok</artifactId>
			<version>1.18.20</version>
		</dependency>

		<dependency>
			<groupId>com.alibaba</groupId>
			<artifactId>fastjson</artifactId>
			<version>1.2.76</version>
		</dependency>

		<dependency>
			<groupId>commons-lang</groupId>
			<artifactId>commons-lang</artifactId>
			<version>2.6</version>
		</dependency>

		<dependency>
			<groupId>mysql</groupId>
			<artifactId>mysql-connector-java</artifactId>
			<scope>runtime</scope>
		</dependency>

		<dependency>
			<groupId>com.alibaba</groupId>
			<artifactId>druid-spring-boot-starter</artifactId>
			<version>1.1.23</version>
		</dependency>

		<dependency>
			<groupId>com.github.xiaoymin</groupId>
			<artifactId>knife4j-spring-boot-starter</artifactId>
			<version>3.0.2</version>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>

</project>

```

## springBoot 项目常用application.yml配置

```
server:
  port: 8089
spring:
  application:
    #应用的名称，可选
    name: reggie_take_out
  datasource:
    druid:
      driver-class-name: com.mysql.cj.jdbc.Driver
      url: jdbc:mysql://localhost:3306/reggie?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull&useSSL=false&allowPublicKeyRetrieval=true
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
  path: D:\img\
```





## JWT

什么是JWT?
JSON Web Token,通过数字签名的方式，以JSQN对象为载体，在不同的服务终端之间安全的传输信息。
JWT有什么用？
JW工最常见的场景就是授权认证，一旦用户登录，后续每个请求都将包含JWT，系统在每次处理用户请求的之前，都要先进行JWT安全校验，通过之后再进行处理。
JWT的组成
JWT由3部分组成，用拼接

 [(228条消息) JWT的组成_Jint001的博客-CSDN博客](https://blog.csdn.net/qq_44972847/article/details/109249604) 

- 头部(header)
- 载荷(payload)
- 签证(signature)

```
 <dependency>
     <groupId>io.jsonwebtoken</groupId>
     <artifactId>jjwt</artifactId>
     <version>0.9.1</version>
 </dependency>
```

**生成和解析 JWT**

```java
@SpringBootTest
class DemoApplicationTests {
	private long time=1000*60*60*24;  //  超时时间（毫秒计算）
	private String signature="admin";  // 签名(自定义)
	@Test
	public void jwt(){
		// 生成token
		JwtBuilder jwtBuilder= Jwts.builder();
		String jwtToken=jwtBuilder
				// header
				.setHeaderParam("type","JWT")
				.setHeaderParam("alg", "HS256")
				// payload
				.claim("name","tom")
				.claim("pwd","123456")
				.setSubject("admin-test")
				// 过时时间
				.setExpiration(new Date(System.currentTimeMillis()+time))
				.setId(UUID.randomUUID().toString())
		        // Signature
		        .signWith(SignatureAlgorithm.HS512,signature)
				// 拼接起来
				.compact();
		System.out.println(jwtToken);

	}

	@Test
	public void Parse(){
		// 解析token
		String token="eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJuYW1lIjoidG9tIiwicHdkIjoiMTIzNDU2Iiwic3ViIjoiYWRtaW4tdGVzdCIsImV4cCI6MTY4OTc1MzUwMywianRpIjoiNzgzOTE5NTMtM2EwNy00ZWNkLTkyZTgtMjNkNjZmODdiNTIyIn0.YcmlLiXIwYJOL83ynRz4JiPRf0UyLtIhu2iE16PzuLk6ETEyu_Jxjo8gewWTdDl-oOD8bUiNDxUmHMKmLayn9g";
		JwtParser jwtParser=Jwts.parser();
		Jws<Claims> claimsJws =jwtParser.setSigningKey(signature).parseClaimsJws(token);
		Claims claims=claimsJws.getBody();
		System.out.println(claims.get("name"));
		System.out.println(claims.get("pwd"));
		System.out.println(claims.getId());
		System.out.println(claims.getExpiration());
		System.out.println(claims.getSubject());

	}

}
```

## 登录

**工具类**

```java
//  工具类
public class JwtUtil {
    private static long time=1000*60*60*24;  //  超时时间,有效期（毫秒计算）
    private static String signature="admin";  // 签名(自定义)
    public static String createToken(){
        // 生成token
        JwtBuilder jwtBuilder= Jwts.builder();
        String jwtToken=jwtBuilder
                // header
                .setHeaderParam("type","JWT")
                .setHeaderParam("alg", "HS256")
                // payload
                .claim("name","admin")
                .claim("pwd","123456")
                .setSubject("admin-test")
                // 过时时间
                .setExpiration(new Date(System.currentTimeMillis()+time))
                .setId(UUID.randomUUID().toString())
                // Signature
                .signWith(SignatureAlgorithm.HS512,signature)
                // 拼接起来
                .compact();
        return jwtToken;
    }

    public  static Boolean checkToken(String token){
        if(token==null){
            return false;
        }
        try {
            Jws<Claims> claimsJws=Jwts.parser().setSigningKey(signature).parseClaimsJws(token);
        } catch (ExpiredJwtException e) {
            return false;
        }
        return true;
    }
}

```

UserController.java

```java
@RestController
@RequestMapping("/users")
public class UserController {
    private final String NAME="admin";
    private final String PWD="123456";
    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getUserList(){
        return userService.list();
    }

    // 登录验证，返回token
    @GetMapping("/login")
    public User login(User user){
        if(NAME.equals(user.getName()) && PWD.equals(user.getPwd())){
            // 添加token
            user.setToken(JwtUtil.createToken());
            return user;
        }
        return null;
    }
    
    // 验证token
    @GetMapping("/checkToken")
    public Boolean checkToken(HttpServletRequest request){
        String token = request.getHeader("token");
        return JwtUtil.checkToken(token);
    }


}
```

 [(228条消息) 使用springBoot实现token校验_springboot 校验token_秃头小陈~的博客-CSDN博客](https://blog.csdn.net/qq_41450736/article/details/113523308) 



## RabbitMQ

参考文档： [Docker安装部署RabbitMQ - 掘金 (juejin.cn)](https://juejin.cn/post/7198430801850105916)  

[超详细的RabbitMQ入门](https://developer.aliyun.com/article/769883) 

 [RabbitMQ详解之你要的RabbitMQ这里都有_adobehu的博客-CSDN博客](https://blog.csdn.net/huzecom/article/details/103499692) 

 [01-今日课程介绍_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Xm4y1i7HP?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11) 

### docker安装RabbitMQ

```
docker pull rabbitmq:management
```

### 创建并运行容器

```
 docker run -id --name=rabbitmq -v rabbitmq-home:/var/lib/rabbitmq -p 15672:15672 -p 5672:5672 -e RABBITMQ_DEFAULT_USER=fankozhang -e RABBITMQ_DEFAULT_PASS=123456 rabbitmq:management 
```

- `15672`端口：RabbitMQ的**管理页面**端口
- `5672`端口：RabbitMQ的**消息接收**端口
- `RABBITMQ_DEFAULT_USER`环境变量：指定RabbitMQ的**用户名**，这里我指定为`fankozhang`，大家部署时替换成自己定义的
- `RABBITMQ_DEFAULT_PASS`环境变量：指定RabbitMQ的**密码**，这里我指定为`123456`，大家部署时替换成自己定义的

这样容器就部署完成了！在浏览器访问你的`服务器地址:15672`即可访问到RabbitMQ的管理界面，用户名和密码即为刚刚指定的环境变量的配置值。

 http://127.0.0.1:15672 （使用服务器的 ip 地址）  打开RabbitMQ的管理页面（使用设置的用户名和密码可以登录进去）

RabbitMQ的组成，它是有这几部分：

- Broker：消息队列服务进程。此进程包括两个部分：Exchange和Queue。
- Exchange：消息队列交换机。**按一定的规则将消息路由转发到某个队列**。
- Queue：消息队列，存储消息的队列。
- Producer：消息生产者。生产方客户端将消息同交换机路由发送到队列中。
- Consumer：消息消费者。消费队列中存储的消息。

这些组成部分是如何协同工作的呢，大概的流程如下

- 消息生产者连接到RabbitMQ Broker，创建connection，开启channel。
- 生产者声明交换机类型、名称、是否持久化等。
- 生产者发送消息，并指定消息是否持久化等属性和routing key。
- exchange收到消息之后，**根据routing key路由到跟当前交换机绑定的相匹配的队列**里面。
- 消费者监听接收到消息之后开始业务处理。

#### 示例（ [B站视频地址](https://www.bilibili.com/video/BV1Am4y1z7Tu?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11) ）

创建生产者

```java
@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) throws Exception {
		String exchangeName="xc_exchange_name"; //交换机名称
		String queueName ="xc_queue_name";      //队列名称
		// 创建连接工厂，设置连接信息
		ConnectionFactory factory=new ConnectionFactory();
		factory.setHost("123.56.80.155");
		factory.setUsername("fankozhang");
		factory.setPassword("123456");
		factory.setPort(5672);

		// 创建连接
		Connection connection=factory.newConnection();
        //创建信道
		Channel channel=connection.createChannel();

		//创建交换机(参数如下)
		//1,交换机名称
		//2.交换机类型，direct,topic,fanout headers
		//3.指定交换机是否需要持久化，如果设置为true,那么交换机的元数据要待久化
		//4.指定交换机在没有队列绑定时，是否需要删除，设置false表示不删除
		//5.Map<String,Object>类型，用来指定我们换机其他的一些机构化参数，我们在这里直接设置成null
		channel.exchangeDeclare(exchangeName, BuiltinExchangeType.DIRECT,true,false,null);

		//生成一个队列(参数如下)
		//1.队列名称
		//2.队列是否需要持久化，但是要注意，这里的特久化只是队列名称等这些元数据的持久化，不是队列中消息的持久化
		//3.表示队列是不是私有的，如果是私有的，只有创建他的应用程序才能消费消怠
		//4.队列在没有消费者订阅的情况下是否自动删除
		//5.队列的一些结构化信息，比如声明死信队列，磁盘队列会用到

		channel.queueDeclare(queueName, true,false,false,null);
		//将我们的交换机和队列绑定(参数如下)
		//1.队列名称
		//2.交换饥名称
		//3.路山健，在我门直连馍式下，可以为我们的队列名称
		channel.queueBind(queueName,exchangeName,queueName);

		// 发送消息
		String msg="hello world";
		//发送消息
		//1.发送到娜个交换视
		//2.队列名称
		//3.其他参数信息
		//4.发送消息的消息体
		channel.basicPublish(exchangeName,queueName,null, msg.getBytes());

        // 关闭连接
		channel.close();
		connection.close();
	}

}
```

创建消费者(消费上面生产者生产的消息，创建连接信息和上面保持一致)

```java
@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) throws Exception{

		// 创建连接工厂，设置连接信息
		ConnectionFactory factory=new ConnectionFactory();
		factory.setHost("123.56.80.155");
		factory.setUsername("fankozhang");
		factory.setPassword("123456");
		factory.setPort(5672);
		// 创建连接
		Connection connection=factory.newConnection();
		//创建信道
		Channel channel=connection.createChannel();


		//按受消息的回调函数
		DeliverCallback deliverCallBack=(consumerTage,message)->{
				System.out.println("接收到消息"+new String(message.getBody()));
		};
		//取消消息的回调函数
		CancelCallback cancelCallback=consumerTage->{
			System.out.println("消息中断");
		};
		//消费消息
		//1.消费哪个队列
		//2.消费成功之后是否需要自动应答，t♪U:自动应答
		//3.按受消息的回调函数
		//4.取消消息的回调函数
		channel.basicConsume("xc_queue_name",true,deliverCallBack,cancelCallback);
	}


}

```



### RabbitMQ交换机类型

 [RabbitMQ交换机类型简述 ](https://www.cnblogs.com/hsiang/p/14747030.html) 

RabbitMQ一共四种交换机，如下所示：

1. Direct Exchange：直连交换机，根据Routing Key(路由键)进行投递到不同队列。
2. Fanout Exchange：扇形交换机，采用广播模式，根据绑定的交换机，路由到与之对应的所有队列。
3. Topic Exchange：主题交换机，对路由键进行模式匹配后进行投递，符号#表示一个或多个词，*表示一个词。
4. Header Exchange：头交换机，不处理路由键。而是根据发送的消息内容中的headers属性进行匹配。

## 文章收藏

 [告别繁琐：SpringBoot 拦截器与统一功能处理 (qq.com)](https://mp.weixin.qq.com/s/evA1d1vY9Nqt72zFNQvgeA) 