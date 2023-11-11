---
icon: edit
date: 2022-01-05
tag:
  - java
  - security
typora-copy-images-to: upload
typora-root-url: ..\..\..\.vuepress\public
---

# SpringSecurity

[SpringSecurity框架教程-Spring Security+JWT实现项目级前端分离认证授权-挑战黑马&尚硅谷_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1mm4y1X7Hc/?spm_id_from=333.999.0.0&vd_source=f25f5a8d75a3a60d5a288f726803ec11)

[【精选】【全网最细致】SpringBoot整合Spring Security + JWT实现用户认证_springboot springsecurity jwt_小灵宝的博客-CSDN博客](https://blog.csdn.net/qq_44709990/article/details/123082560)

[springboot整合springsecurity最完整，只看这一篇就够了 - QianTM - 博客园 (cnblogs.com)](https://www.cnblogs.com/qiantao/p/14605154.html)

[强哥带你详解RABC权限模型与Spring Security (qq.com)](https://mp.weixin.qq.com/s/QizFRAb4t8gewbR5PHwU0g)

## 依赖,  application.yml

```xml
 <!-- springboot security -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
```

引入依赖启动后登录（默认用户名：user ，密码： 控制台会输出密码）

启动类注解修改如下 可以跳过默认登录页

```
@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
```



其他用到的依赖：

```xml
        <!--redis依赖-->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-redis</artifactId>
		</dependency>
		<!--fastjson依赖-->
		<dependency>
			<groupId>com.alibaba</groupId>
			<artifactId>fastjson</artifactId>
			<version>1.2.42</version>
		</dependency>
		<!--jwt依赖-->
		<dependency>
			<groupId>io.jsonwebtoken</groupId>
			<artifactId>jjwt</artifactId>
			<version>0.9.0</version>
		</dependency>
		<!--mybatis-plus-->
		<dependency>
			<groupId>com.baomidou</groupId>
			<artifactId>mybatis-plus-boot-starter</artifactId>
			<version>3.4.3</version>
		</dependency>
		<!--mysql-->
		<dependency>
			<groupId>com.mysql</groupId>
			<artifactId>mysql-connector-j</artifactId>
			<scope>runtime</scope>
		</dependency>
```

application.yml

```yaml
server:
  port: 8092

spring:
  datasource:
    url: jdbc:mysql://localhost:3306/shiro-test?serverTimezone=GMT%2B8&useUnicode=true&characterEncoding=utf-8&useSSL=false&allowPublicKeyRetrieval=true
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: root
    password: root
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



## 登录验证流程

![](/202310220123889.png)

![image-20231022013812741](/202310220138839.png)

认证流程：

![image-20231022015805093](/202310220158198.png)

Authentication接口：它的实现类，表示当前访问系统的用户，封装了用户相关信息。
AuthenticationManager接口：定义了认证Authentication的方法
UserDetailsService接口：加载用户特定数据的核心接口。里面定义了一个根据用户名查询用户信息的方法。
UserDetailsi接口：提供核心用户信息。通过UserDetailsService根据用户名获取处理的用户信息要封装成JserDetails对象返回。然后将
这些信息封装到Authentication对象中。



## 思路

登录
①自定义登录接▣
        调用ProviderManager的方法进行认证如果认证通过生成jwt
        把用户信息存入redis中l
②自定义UserDetailsService
        在这个实现列中去查询数据库

 校验：
①定义wt认证过滤器
        获取token
		解析token获取其中的userid
		从redis中获取用户信息
		存入SecurityContextHolder

## 表设计

参考shiro中的权限表设计。

## 返回结果类型Result

```java
@Data
public class Result<T> implements Serializable {

    private Integer code; //编码：1成功，0和其它数字为失败
    private String msg; //错误信息
    private T data; //数据

    public static <T> Result<T> success() {
        Result<T> result = new Result<T>();
        result.code = 1;
        return result;
    }

    public static <T> Result<T> success(T object) {
        Result<T> result = new Result<T>();
        result.data = object;
        result.code = 1;
        return result;
    }

    public static <T> Result<T> error(String msg) {
        Result result = new Result();
        result.msg = msg;
        result.code = 0;
        return result;
    }

}
```

## Redis配置

### RedisConfig

```java
@Configuration
public class RedisConfig extends CachingConfigurerSupport {

    private static final String STANDARD_PATTERN = "yyyy/MM/dd HH:mm:ss";
    private static final String DATE_PATTERN = "yyyy/MM/dd";
    private static final String TIME_PATTERN = "HH:mm:ss";

    @Bean
    public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory connectionFactory) {
        RedisTemplate<String, Object> template = new RedisTemplate<>();
        // 使用Jackson2JsonRedisSerialize 替换默认序列化
        Jackson2JsonRedisSerializer<Object> jackson2JsonRedisSerializer =
                new Jackson2JsonRedisSerializer<>(Object.class);

        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.activateDefaultTyping(objectMapper.getPolymorphicTypeValidator(),
                ObjectMapper.DefaultTyping.NON_FINAL,
                JsonTypeInfo.As.PROPERTY);
        objectMapper.disable(SerializationFeature.FAIL_ON_EMPTY_BEANS);
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        this.registerLocalDateTime(objectMapper);
        jackson2JsonRedisSerializer.setObjectMapper(objectMapper);

        template.setConnectionFactory(connectionFactory);
// key采用String的序列化方式
        template.setKeySerializer(new StringRedisSerializer());
        // value序列化方式采用jackson
        template.setValueSerializer(jackson2JsonRedisSerializer);
        // hash的key也采用String的序列化方式
        template.setHashKeySerializer(new StringRedisSerializer());
        // hash的value序列化方式采用jackson
        template.setHashValueSerializer(jackson2JsonRedisSerializer);
        template.afterPropertiesSet();
        return template;
    }

    /**
     * 处理时间类型
     *
     * @param objectMapper
     */
    private void registerLocalDateTime(ObjectMapper objectMapper) {
        // 设置java.util.Date时间类的序列化以及反序列化的格式
        objectMapper.setDateFormat(new SimpleDateFormat(STANDARD_PATTERN));

        JavaTimeModule timeModule = new JavaTimeModule();
        // LocalDateTime
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern(STANDARD_PATTERN);
        timeModule.addSerializer(LocalDateTime.class, new LocalDateTimeSerializer(dateTimeFormatter));
        timeModule.addDeserializer(LocalDateTime.class, new LocalDateTimeDeserializer(dateTimeFormatter));
        // LocalDate
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern(DATE_PATTERN);
        timeModule.addSerializer(LocalDate.class, new LocalDateSerializer(dateFormatter));
        timeModule.addDeserializer(LocalDate.class, new LocalDateDeserializer(dateFormatter));
        // LocalTime
        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern(TIME_PATTERN);
        timeModule.addSerializer(LocalTime.class, new LocalTimeSerializer(timeFormatter));
        timeModule.addDeserializer(LocalTime.class, new LocalTimeDeserializer(timeFormatter));
        objectMapper.registerModule(timeModule);

    }
}

```

### RedisCache(工具类)

```java
@Component
public class RedisCache {

    @Autowired
    public RedisTemplate redisTemplate;

    /**
     * 缓存的基本对象。Integer String 实体类
     *
     * @param key  缓存的键值
     * @param value 缓存的值
     * @param <T>
     * @return    缓存的对象
     */
    public <T> ValueOperations<String, T> setCacheObject(String key, T value){
        ValueOperations<String, T> operations = redisTemplate.opsForValue();
        operations.set(key, value);
        return operations;
    }

    /**
     *
     * @param key  缓存的键值
     * @param value  缓存的值
     * @param timeout  时间
     * @param timeUnit  时间颗粒度
     * @param <T>
     * @return   缓存的对象
     */
    public <T> ValueOperations<String, T> setCacheObject(String key, T value, Integer timeout, TimeUnit timeUnit){
        ValueOperations<String, T> operations = redisTemplate.opsForValue();
        operations.set(key, value, timeout, timeUnit);
        return operations;
    }

    /**
     * 获得缓存的基本对象
     *
     * @param key   缓存键值
     * @param <T>
     * @return   缓存键值对应的数据
     */
    public <T> T getCacheObject(String key){
        ValueOperations<String, T> operations = redisTemplate.opsForValue();
        return operations.get(key);
    }

    /**
     * 删除单个对象
     *
     * @param key
     */
    public void deleteObject(String  key){
        redisTemplate.delete(key);
    }


    /**
     * 删除集合对象
     *
     * @param collection
     */
    public void deleteObject(Collection collection){
        redisTemplate.delete(collection);
    }


    /**
     * 缓存list数据
     *
     * @param key    缓存的键值
     * @param dataList    带缓存的list数据
     * @param <T>
     * @return    缓存的对象
     */
    public <T> ListOperations<String, T> setCacheList(String key, List<T> dataList){
        ListOperations<String, T> listOperations = redisTemplate.opsForList();
        if (dataList != null) {
            int size = dataList.size();
            for (int i = 0; i < size; i++) {
                listOperations.leftPush(key, dataList.get(i));
            }
        }
        return listOperations;
    }


    /**
     *  获得缓存的list对象
     *
     * @param key  缓存的键值
     * @param <T>
     * @return   缓存键值对应的集合数据
     */
    public  <T> List<T> getCacheList(String key){
        List<T> list = new ArrayList<>();
        ListOperations<String, T> listOperations = redisTemplate.opsForList();
        Long size = listOperations.size(key);

        for (int i = 0; i < size; i++) {
            list.add(listOperations.index(key, i));
        }
        return list;
    }

    /**
     * 缓存Set
     *
     * @param key 缓存键值
     * @param dataSet 缓存的数据
     * @return 缓存数据的对象
     */
    public <T> BoundSetOperations<String, T> setCacheSet(String key, Set<T> dataSet) {
        BoundSetOperations<String, T> setOperation = redisTemplate.boundSetOps(key);
        Iterator<T> it = dataSet.iterator();
        while (it.hasNext())
        {
            setOperation.add(it.next());
        }
        return setOperation;
    }

    /**
     * 获得缓存的set
     *
     * @param key
     * @return
     */
    public <T> Set<T> getCacheSet(String key) {
        Set<T> dataSet = new HashSet<T>();
        BoundSetOperations<String, T> operation = redisTemplate.boundSetOps(key);
        dataSet = operation.members();
        return dataSet;
    }

    /**
     * 缓存Map
     *
     * @param key
     * @param dataMap
     * @return
     */
    public <T> HashOperations<String, String, T> setCacheMap(String key, Map<String, T> dataMap) {
        HashOperations hashOperations = redisTemplate.opsForHash();
        if (null != dataMap)
        {
            for (Map.Entry<String, T> entry : dataMap.entrySet())
            {
                hashOperations.put(key, entry.getKey(), entry.getValue());
            }
        }
        return hashOperations;
    }

    /**
     * 获得缓存的Map
     *
     * @param key
     * @return
     */
    public <T> Map<String, T> getCacheMap(String key) {
        Map<String, T> map = redisTemplate.opsForHash().entries(key);
        return map;
    }

    /**
     *获得缓存的基本对象列表
     * @param pattern  字符串前缀
     * @return
     */
    public Collection<String> keys(String pattern){
        return redisTemplate.keys(pattern);
    }
}

```





## 实体类

### User

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("sys_users")
public class User {
    private Integer id;
    private  String username;
    private String password;
    private String salt;
    private Integer locked;

}
```

### LoginUser  (security登陆时使用到)

重写UserDetails接口实现类

```java
package com.example.security.security.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

/**
 * @author 张帆
 * @version 1.0
 * Create by 2023/10/27 20:06
 */
// 重写 UserDetails 的方法
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginUser implements UserDetails {
    @Autowired
    private User user;     //自己写的实体类
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return user.getPassword();  // 获取密码
    }

    @Override
    public String getUsername() {
        return user.getUsername();  // 获取用户名
    }
    //  下面的四个原来返回是false，改为 true，方便测试使用
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

```

### permission

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("sys_permissions")
public class Permission {
    private Integer id;
    private String permission;
    private String description;
}
```



## 重写 UserDetailService  (security包里的)

```
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
```

### UserDetailsService

```Java
package com.example.security.security.service;

import com.example.security.security.domain.LoginUser;

public interface UserDetailsService {
    LoginUser loadUserByUsername(String username);
}
```

### UserDetailsServiceImpl

```java
package com.example.security.security.service.serviceImpl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.example.security.security.domain.LoginUser;
import com.example.security.security.domain.User;
import com.example.security.security.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Objects;

/**
 * @author 张帆
 * @version 1.0
 * Create by 2023/10/22 16:01
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // 查询用户信息
        LambdaQueryWrapper<User> lambdaQueryWrapper=new LambdaQueryWrapper<User>();
        lambdaQueryWrapper.eq(User::getUsername, username);
        User user=userMapper.selectOne(lambdaQueryWrapper);
        //如果没有查询到用户就抛出异常
        if(Objects.isNull(user)){
            throw new RuntimeException("用户名或密码错误");
        }

        // TODO 查询对应的权限信息
        
        // LoginUser implements UserDetails,所以返回类型是 UserDetails
        return new LoginUser(user);
    }
}

```



## 使用Scurity登录页登录（数据库）

直接使用数据库的用户名。密码登录时跳转失败；

因为现在数据库中的密码是未加密的，使用security的登陆时会失败。

解决：在数据库的密码前面加上  {noop}  （表示密码是明文存储的），再登陆跳转成功

## 密码加密存储

实际项目中我们不会把密码明文存储在数据库中。
默认使用的PasswordEncoder要求数据库中的密码格式为：{id}password。它会根据id去判断密码的加密方式。但是我们一般不会采
用这种方式。所以就需要替换PasswordEncoder。

我们一般会使用Spring Security为我们提供的 BCryptPasswordEncoder；

 我们只需要把 BCryptPasswordEncoder对象注入到Spring容器中，Spring Security就会使用该PasswordEncoder来进行密码校验，所以我们可以定义一个Spring Security配置类，该配置类需要继承 WebSecurityConfigurerAdapter。

[SpringBoot整合SpringSecurity实现密码加密解密、登录认证退出功能_springsecurity取消登录验证_rabbit_zli的博客-CSDN博客](https://blog.csdn.net/manqishizhizhu/article/details/124201084)

### SecurityConfig

代码提示：WebSecurityConfigurerAdapter过时了

```Java
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    /**
     * 创建BCryptPasswordEncoder注入容器
     * @return
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
```

### passwordEncoder测试

打印出来的passwordEncoded，passwordEncoded2结果不一样

```java
@Test
	public void TestBCryptPasswordEncoder(){
		BCryptPasswordEncoder passwordEncoder=new BCryptPasswordEncoder();
		String passwordEncoded=passwordEncoder.encode("1234");
		String passwordEncoded2=passwordEncoder.encode("1234");
		System.out.println(passwordEncoded);
		System.out.println(passwordEncoded2);
        
        System.out.println(passwordEncoder.matches("1234","$2a$10$RbxwDc11pJX0zpTy/wDzwuAqZC2oX/O81TTdt5E1ZbCPkP6VzGZgC"));
		System.out.println(passwordEncoder.matches("1234","$2a$10$2ikCvXpvoVGifg.rQjg2geaU5k0JyFC1gftG7UNXUbTfCSjKd4Dbi"));
	}

$2a$10$RbxwDc11pJX0zpTy/wDzwuAqZC2oX/O81TTdt5E1ZbCPkP6VzGZgC
$2a$10$2ikCvXpvoVGifg.rQjg2geaU5k0JyFC1gftG7UNXUbTfCSjKd4Dbi
    true
    true
```

### 页面测试（账号，密码登录）

数据库新增用户： security    1234  ,  存储加密后的密码    security  $2a$10$RbxwDc11pJX0zpTy/wDzwuAqZC2oX/O81TTdt5E1ZbCPkP6VzGZgC

页面登录   security    1234   后跳转正常

## JWT

### jwt工具类

```java
package com.example.security.security.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;
import java.util.Date;
import java.util.UUID;

/**
 * JWT工具类
 */
public class JwtUtil {

    //有效期为
    public static final Long JWT_TTL = 60 * 60 *1000L;// 60 * 60 *1000  一个小时
    //设置秘钥明文
    public static final String JWT_KEY = "rabbit";

    public static String getUUID(){
        String token = UUID.randomUUID().toString().replaceAll("-", "");
        return token;
    }

    /**
     * 生成jtw
     * @param subject token中要存放的数据（json格式）
     * @return
     */
    public static String createJWT(String subject) {
        JwtBuilder builder = getJwtBuilder(subject, null, getUUID());// 设置过期时间
        return builder.compact();
    }

    /**
     * 生成jtw
     * @param subject token中要存放的数据（json格式）
     * @param ttlMillis token超时时间
     * @return
     */
    public static String createJWT(String subject, Long ttlMillis) {
        JwtBuilder builder = getJwtBuilder(subject, ttlMillis, getUUID());// 设置过期时间
        return builder.compact();
    }

    private static JwtBuilder getJwtBuilder(String subject, Long ttlMillis, String uuid) {
        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;
        SecretKey secretKey = generalKey();
        long nowMillis = System.currentTimeMillis();
        Date now = new Date(nowMillis);
        if(ttlMillis==null){
            ttlMillis=JwtUtil.JWT_TTL;
        }
        long expMillis = nowMillis + ttlMillis;
        Date expDate = new Date(expMillis);
        return Jwts.builder()
                .setId(uuid)              //唯一的ID
                .setSubject(subject)   // 主题  可以是JSON数据
                .setIssuer("sg")     // 签发者
                .setIssuedAt(now)      // 签发时间
                .signWith(signatureAlgorithm, secretKey) //使用HS256对称加密算法签名, 第二个参数为秘钥
                .setExpiration(expDate);
    }

    /**
     * 创建token
     * @param id
     * @param subject
     * @param ttlMillis
     * @return
     */
    public static String createJWT(String id, String subject, Long ttlMillis) {
        JwtBuilder builder = getJwtBuilder(subject, ttlMillis, id);// 设置过期时间
        return builder.compact();
    }

    public static void main(String[] args) throws Exception {
        //String jwt = createJWT("2123");  生成jwt
        //System.out.println(jwt); 
        // 解密jwt
        Claims claims = parseJWT("eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkODM4YmM4NWJiODI0NjYzOTFjZTA0ODUyOGExZmQ2ZSIsInN1YiI6IjIxMjMiLCJpc3MiOiJzZyIsImlhdCI6MTY5ODQxMzU5OCwiZXhwIjoxNjk4NDE3MTk4fQ.sn9HPRiudLhaWfpqqPsKJnxXjtp8ZDpeEZD69WBF39o");
        String subject = claims.getSubject();
        System.out.println(subject);
        // System.out.println(claims);
    }

    /**
     * 生成加密后的秘钥 secretKey
     * @return
     */
    public static SecretKey generalKey() {
        byte[] encodedKey = Base64.getDecoder().decode(JwtUtil.JWT_KEY);
        SecretKey key = new SecretKeySpec(encodedKey, 0, encodedKey.length, "AES");
        return key;
    }

    /**
     * 解析
     *
     * @param jwt
     * @return
     * @throws Exception
     */
    public static Claims parseJWT(String jwt) throws Exception {
        SecretKey secretKey = generalKey();
        return Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(jwt)
                .getBody();
    }


}


```

## 自定义登录接口

在实际开发中，我们通常有的接口，不需要登录也能访问，比如：登录页面、注册、忘记密码等，所以我们需要在 Spring Security配置一些信息以及编写一些放行的方法： 在接口中我们通过 AuthenticationManager 的 authenticate() 方法来进行用户认证，所以需要在 SecurityConfig 中配置把 AuthenticationManager 注入Spring IoC容器 认证成功的话，需要生成一个 JWT，放入响应中返回。并且为了让用户下回请求时能通过 JWT 识别处具体是哪个用户，我们需要把用户信息存入Redis



### 自定义登录接口

调用ProviderManager的方法进行认证如果认证通过生成jwt ， 把用户信息存入redis中



### SecurityConfig中重写 AuthenticationManager

对于不需要登录就可以访问的接口在这里配置

```java
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    /**
     * 创建BCryptPasswordEncoder注入容器
     * @return
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                // 关闭 csrf
                .csrf().disable()
                // 不通过session获取SecurityContext
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                // 对于登录接口 允许匿名访问(不登陆)
                .antMatchers("/user/login").anonymous()
                .antMatchers("/user/loginByPhone").anonymous()

                // 除了上面的请求，任何请求都需要鉴权认证
                .anyRequest().authenticated();
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}

```

### LoginController

```java
@RestController
public class LoginController {
    @Autowired
    private LoginService loginService;
    @PostMapping("/user/login")
    public Result login(@RequestBody User user){
        System.out.println("登录"+user);
        //登录
        return loginService.login(user);
    }
}

```

### LoginService

```java
package com.example.security.security.service;

import com.example.security.security.domain.Result;
import com.example.security.security.domain.User;

public interface LoginService {
    public  Result login(User user);
}
```

### LoginServiceImpl

```java
@Service
public class LoginServiceImpl implements LoginService {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private RedisCache redisCache;

    @Override
    public Result login(User user) {
        //AuthenticationManager authenticate() 方法来进行用户认证
        UsernamePasswordAuthenticationToken authenticationToken=new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword());
         Authentication authentication= authenticationManager.authenticate(authenticationToken);
        //如果认证没通过，给出对应的提示
        if(Objects.isNull(authentication)){
            throw new RuntimeException("登陆失败");
        }
        //如果认证通过了，使用userid生成一个jwt jwt存入Result返回
        LoginUser loginUser=(LoginUser) authentication.getPrincipal();
        String userId=loginUser.getUser().getId().toString();
        String jwt= JwtUtil.createJWT(userId);
        Map<String,String> map=new HashMap<>();
        map.put("token",jwt);
        //把完整的用户信息存入redis(需要开启redis，并配置好redis)  userid作为key
        redisCache.setCacheObject("login:"+userId,loginUser);
        //登陆成功，返回token
        return  Result.success(map);
    }
}

```

### 定义Jwt认证过滤器(Token 解析过滤器)

**获取token**
**解析token获取其中的userid**
**从redis中获取用户信息**
**存入SecurityContextHolder**

```java
@Component
public class JwtAuthenticationTokenFilter extends OncePerRequestFilter {
    @Autowired
    private RedisCache redisCache;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        // 1. 获取Token
        String token = request.getHeader("token");
        if (!StringUtils.hasText(token)) {
            // 没有获取到Token 放行，让其它过滤器去拦截
            filterChain.doFilter(request, response);
            return;
        }
        // 2. 解析Token 获取userID
        String userId = null;
        try {
            Claims claims = JwtUtil.parseJWT(token);
            userId = claims.getSubject();
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Token异常!");
        }
        // 3. 从Redis中取出用户数据
        String redis_key = "login:"+userId;
        LoginUser loginUser= redisCache.getCacheObject(redis_key);
        if(Objects.isNull(loginUser)){
            throw new RuntimeException("Token异常! 用户未登录");
        }
        //  TODO 4. 获取权限信息村装到Authentication中
        //   将用户信息存入SecurityContextHolder
        UsernamePasswordAuthenticationToken authentication =
                new UsernamePasswordAuthenticationToken(loginUser,null,null);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        // 5. 放行
        filterChain.doFilter(request, response);
    }
}
```

### 配置过滤器链

前面我们已经编写好了 Spring Security 的Token解析过滤器，但我们还需去配置过滤器，并且我们把过滤器配置好后还需指定其在Spring容器中的顺序，所以需将我们前面写好的解析Token的过滤器配置到用户认证授权的过滤器UsernamePasswordAuthenticationFilter前面。 在 SecurityConfig.java 中的 configure() 方法中配置 http.addFilterBefore()

**SecurityConfig**

```java
import com.example.security.security.filter.JwtAuthenticationTokenFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    

    /**
     * 创建BCryptPasswordEncoder注入容器
     * @return
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Autowired
    private JwtAuthenticationTokenFilter jwtAuthenticationTokenFilter;
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                // 关闭 csrf
                .csrf().disable()
                // 不通过session获取SecurityContext
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                // 对于登录接口 允许匿名访问
                .antMatchers("/user/login").anonymous()
                .antMatchers("/user/loginByPhone").anonymous()

                // 除了上面的请求，任何请求都需要鉴权认证
                .anyRequest().authenticated();
        // 添加jwtAuthenticationTokenFilter
        http.addFilterBefore(jwtAuthenticationTokenFilter, UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}

```

### 退出登录

LoginController中加入 退出

```java
@PostMapping("/user/logout")
    public Result logout(){
        return loginService.logout();
    }
```

LoginService

```
 public Result logout();
```

LoginService

```java
@Override
    public Result logout() {
        /**
         * 1. 从 SecurityContextHolder 中获取用户信息(ID)
         * 2. 从Redis中删除对应的Key
         */
        UsernamePasswordAuthenticationToken authentication
                = (UsernamePasswordAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();
        LoginUser loginUser=(LoginUser) authentication.getPrincipal();
        String userId = loginUser.getUser().getId().toString();
        // 根据Key删除Redis的值
        redisCache.deleteObject("login:"+userId);
        return Result.success("退出成功~");
    }
```

## 授权

### 授权基本流程

在SpringSecurity中，会使用默认的FilterSecuritylnterceptor来进行权限校验。在FilterSecurityInterceptor中会从
SecurityContextHolder获取其中的Authentication,然后获取其中的权限信息。当前用户是否拥有访问当前资源所需的权限。
所以我们在项目中只需要把当前登录用户的权限信息也存入Authentication。.
然后设置我们的资源所需要的权限即可。

### 授权实现

SpringSecurity为我们提供了基于注解的权限控制方案，这也是我们项目中主要采用的方式。我们可以使用注解去指定访问对应的资源
所需的权限。

开启基于方法的安全认证机制，也就是说在web层的controller启用注解机制的安全确认



SecurityConfig   类上加上注解

```
@EnableGlobalMethodSecurity(prePostEnabled = true)
```

**Spring Security默认是禁用注解的，要想开启注解，需要在继承WebSecurityConfigurerAdapter的类上加@EnableGlobalMethodSecurity注解，来判断用户对某个控制层的方法是否具有访问权限**

通过@PreAuthorize标签控制controller层接口权限

testController

```java
@RestController
@RequestMapping("/test")
public class TestController {
    @PreAuthorize("hasAuthority('test')")       //test权限名称
    @GetMapping("/hello")
    public String hello(){
        System.out.println("Hello!");
        return "hello";
    }
}
```

### 封装权限信息

我们前面在写UserDetailsServicelmpl的时候说过，在查询出用户后还要获取对应的权限信息，封装到UserDetails中返回。
我们先直接把权限信息写死封装到JserDetails中进行测试。
我们之前定义了UserDetails的实现类LoginUser,想要让其能封装权限信息就要对其进行修改。

#### 修改LoginUser

```java
@Data
@NoArgsConstructor
public class LoginUser implements UserDetails {
        @Autowired
    private User user;

    //权限列表
    private List<String> permissions;
	// 建一个有参构造
    public LoginUser(User user, List<String> permissions) {
        this.user = user;
        this.permissions = permissions;
    }

    //  重写 getAuthorities 增加权限信息
    @JSONField(serialize = false)  // 存redis不需要序列化
    private List<SimpleGrantedAuthority> authorities;
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        //把permissions中String类型的权限信，息封装成SimpleGrantedAuthority对象
        if(authorities!=null){
            return authorities;
        }

        //以下两种写法择一即可
        // authorities=new ArrayList<>();
        // for (String permission : permissions){
        //    SimpleGrantedAuthority authority =new SimpleGrantedAuthority(permission);
        //    authorities.add (authority);
        // }
        authorities = permissions.stream()
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
        return authorities;
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

```

### sql(根据用户id查询权限)

```sql
select DISTINCT p.permission
        from sys_users u,sys_roles r,sys_users_roles ur,sys_permissions p,sys_roles_permissions rp
        where u.id=ur.user_id
          and r.id=ur.role_id
          and r.id=rp.role_id
          and p.id=rp.permission_id
          and u.id=3
```



### 代码实现

我们只需要根据用户id去查询到其所对应的权限信息即可。
所以我们可以先定义个mapper,其中提供一个方法可以根据userid查询权限信息。

**UserDetailsServiceImpl**

```java
@Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // 查询用户信息
        LambdaQueryWrapper<User> lambdaQueryWrapper=new LambdaQueryWrapper<User>();
        lambdaQueryWrapper.eq(User::getUsername, username);
        User user=userMapper.selectOne(lambdaQueryWrapper);
        //如果没有查询到用户就抛出异常
        if(Objects.isNull(user)){
            throw new RuntimeException("用户名或密码错误");
        }

        // TODO 查询对应的权限信息(通过接口获取)
        //List<String> list =new ArrayList<String>(Arrays.asList("test","admin"));
        List<String> list =permissionMapper.selectPermissionByUserId(user.getId());
        return new LoginUser(user,list);
    }
```

permissionMapper

```java
@Mapper
public interface PermissionMapper extends BaseMapper<Permission> {
    // 根据用户 id 查询权限列表
    List<String> selectPermissionByUserId(Integer userId);
}
```

permissionMapper.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >

<mapper namespace="com.example.security.security.mapper.PermissionMapper">
    <select id="selectPermissionByUserId" parameterType="Integer"  resultType="java.lang.String">
        select p.permission
        from sys_users u,sys_roles r,sys_users_roles ur,sys_permissions p,sys_roles_permissions rp
        where u.id=ur.user_id
          and r.id=ur.role_id
          and r.id=rp.role_id
          and p.id=rp.permission_id
          and u.id=#{userId}
    </select>
</mapper>
```

JwtAuthenticationTokenFilter   修改

```java
@Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        // 1. 获取Token
        String token = request.getHeader("token");
        if (!StringUtils.hasText(token)) {
            // 没有获取到Token 放行，让其它过滤器去拦截
            filterChain.doFilter(request, response);
            return;
        }
        // 2. 解析Token 获取userID
        String userId = null;
        try {
            Claims claims = JwtUtil.parseJWT(token);
            userId = claims.getSubject();
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Token异常!");
        }
        // 3. 从Redis中取出用户数据（redis配置有误，可能会报错）
        String redis_key = "login:"+userId;
        LoginUser loginUser= redisCache.getCacheObject(redis_key);
        // LoginUser loginUser =(LoginUser) redisTemplate.opsForValue().get(redis_key);

        if(Objects.isNull(loginUser)){
            throw new RuntimeException("Token异常! 用户未登录");
        }
        //  TODO 4. 获取权限信息村装到Authentication中
        //   将用户信息存入SecurityContextHolder
        //   注意第三个参数由 null 改为了loginUser.getAuthorities()
        UsernamePasswordAuthenticationToken authentication =
                new UsernamePasswordAuthenticationToken(loginUser,null,loginUser.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authentication);
        // 5. 放行
        filterChain.doFilter(request, response);
    }
```

### 测试：redis序列化报错，尚未解决

## 自定义认证失败处理器

我们还希望在认证失败或者是授权失败的情况下也能和我们的接口一样返回相同结构的JSON,这样可以让前端能对响应进行统一的处
理。要实现这个功能我们需要知道SpringSecurity的异常处理机制。
在SpringSecurity中，如果我们在认证或者授权的过程中出现了异常会被ExceptionTranslationFilter捕获到。在
ExceptionTranslationFilter中会去判断是认证失败还是授权失败出现的异常。
如果是认证过程中出现的异常会被封装成AuthenticationException:然后调用AuthenticationEntryPoint对象的方法去进行异常处
理。
如果是授权过程中出现的异常会被封装成AccessDeniedException然后调用AccessDeniedHandler对象的方法去进行异常处理。
所以如果我们需要自定义异常处理，我们只需要自定义AuthenticationEntryPointi和AccessDeniedHandler然后配置给SpringSecurity
即可。

https://juejin.cn/post/7142764132213719047

AuthenticationEntryPointImpl

```java
@Component
public class AuthenticationEntryPointImpl implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException
            authException)throws IOException, ServletException{

        Result<String> result=Result.error(HttpStatus.FORBIDDEN.value()+ "您的权限不足");
        String json = JSON.toJSONString(result);
        //处理异常
        WebUtil.renderString(response, json);

    }


}
```

AccessDeniedHandlerImpl

```java
@Component
public class AccessDeniedHandlerImpl implements AccessDeniedHandler {

    @Override
    public void handle(HttpServletRequest request,
                       HttpServletResponse response,
                       AccessDeniedException accessDeniedException)
            throws IOException, ServletException {
        Result<String> result=Result.error(HttpStatus.FORBIDDEN.value()+ "您的权限不足");
        String json = JSON.toJSONString(result);
        //处理异常
        WebUtil.renderString(response, json);
    }
}
```

WebUtil

```java
public class WebUtil {

    //将字符串渲染到客户端
    //
    //@param response渲染对象
    //@param string待渲染的字符串
    //@return nul1

    public static String renderstring(HttpServletResponse response, String string) {
        try {
            response.setStatus(200);
            response.setContentType("application/json");
            response.setCharacterEncoding("utf-8");
            response.getWriter().print(string);
        } catch (IOException e) {
            e.printStackTrace();

        }
        return null;
    }

    public static void renderString(HttpServletResponse response, String string) {
        try {
            response.setStatus(200);
            response.setContentType("application/json");
            response.setCharacterEncoding("utf-8");
            response.getWriter().print(string);
        } catch (IOException e) {
            e.printStackTrace();

        }
    }
}
```

SecurityConfig

```java
@Autowired
    private AuthenticationEntryPointImpl authenticationEntryPoint;
    @Autowired
    private AccessDeniedHandlerImpl accessDeniedHandler;
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                // 关闭 csrf
                .csrf().disable()
                // 不通过session获取SecurityContext
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                // 对于登录接口 允许匿名访问
                .antMatchers("/user/login").anonymous()
                .antMatchers("/user/loginByPhone").anonymous()

                // 除了上面的请求，任何请求都需要鉴权认证
                .anyRequest().authenticated();
        //添加过滤器
        http.addFilterBefore(jwtAuthenticationTokenFilter, UsernamePasswordAuthenticationFilter.class);

        // 配置异常处理器
        http.exceptionHandling()
                .authenticationEntryPoint(authenticationEntryPoint)
                .accessDeniedHandler(accessDeniedHandler);
    }

```

## 跨域

[SpringBoot 优雅配置跨域多种方式及Spring Security跨域访问配置的坑_springsecurity 允许多域名访问api-CSDN博客](https://blog.csdn.net/u011738045/article/details/119973754)

### 拦截器方式

重写WebMvcConfigurer的`addCorsMappings` 方法

CorsConfig 配置类

```java
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")//项目中的所有接口都支持跨域
                .allowedOriginPatterns("*")//所有地址都可以访问，也可以配置具体地址
                .allowCredentials(true)
                .allowedMethods("*")//"GET", "HEAD", "POST", "PUT", "DELETE", "OPTIONS"
                .maxAge(3600);// 跨域允许时间
    }
}
```

## **自定义权限校验方法**

https://blog.51cto.com/wangzhenjun/5605871#:~:text=%E5%9F%BA%E4%BA%8ESpring,%E5%8F%82%E8%80%83%E8%8B%A5%E4%BE%9D%E7%9A%84%E6%B3%A8%E8%A7%A3%EF%BC%81

## 自定义认证成功处理器

https://blog.csdn.net/zhongjianboy/article/details/123646433

## 自定义认证失败处理器

https://blog.csdn.net/zhongjianboy/article/details/123648334

## **注销成功处理器**

https://www.cnblogs.com/yu3304/p/17357048.html



## OAuth2.0

https://www.bilibili.com/video/BV1dN4y1Z7zd/?spm_id_from=333.1007.tianma.5-3-17.click&vd_source=f25f5a8d75a3a60d5a288f726803ec11

OAuth 2.0开放授权实现微信扫码登录第三方平台
链接：https://pan.baidu.com/s/1Ao3HMlI90pvmuhzZf-BzLQ?pwd=q7rl



https://zhuanlan.zhihu.com/p/89020647

https://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html



OAuth(Open Authorization)是一个关于授权（authorization)的开放网络标准，允许用户授权第三方应用访问他们存储在另外的服务提供者上的信息，而不需要将用户名和密码提供给第三方。
OAuth在全世界得到广泛应用，目前的版本是2.0版。

协议特点：
筒单：不管是OAuth服务提供者还是应用开发者，都很易于理解与使用；
安全：没有涉及到用户密钥等信息，更安全更灵活；
开放：任何服务提供商都可以实现OAuth,任何软件开发商都可以使用OAuth

用处：第三方平台登录

### 角色：应用、api和用户

- oAuth的客户。oAuth的“客户”是那些尝试访问用户账户信息的应用程序，而这个访问操作需要得到用户的同意才能完成。
- 资源服务器（Resource Server，也叫做api server）。资源服务器提供了访问用户信息的api接口。
- 授权服务器（认证服务器）（Authorization Server）：授权服务器提供了接口来让用户决定同意或者拒绝当前访问请求。很多情况下，Authorization Server和Resource Server是合在一个系统里的，虽然oAuth2.0允许它们独立开，甚至用不同的域名。
- 用户：用户是他们自身账户信息的拥有者，对本次访问请求有决定权。



### 四种授权模式

授权码模式(Authorization Code Grant)   目前最安全最复杂也是最常用的授权流程
隐式授权模式(Implicit Grant)
用户名密码模式(Resource Owner Password Credentials Grant)
客户端模式(Client Credentials Grant)



### 理论基础-java生成二维码

Hutool是一个JaVa工具包类库，对文件、流、加密解密、转码、正则、线程、XML等DK方法进行封装，组成各种Util工具类。

```
<dependency>
    <groupId>cn.hutool</groupId>
    <artifactId>hutool-all</artifactId>
    <version>5.8.16</version>
</dependency>
```

生成二维码https://www.hutool.cn/docs/#/extra/%E4%BA%8C%E7%BB%B4%E7%A0%81%E5%B7%A5%E5%85%B7-QrCodeUtil?id=%e4%bd%bf%e7%94%a8

生成二维码还需要引入  [zxing](https://www.hutool.cn/docs/#/extra/二维码工具-QrCodeUtil?id=引入zxing)  （考虑到Hutool的非强制依赖性，因此zxing需要用户自行引入）

```
<dependency>
    <groupId>com.google.zxing</groupId>
    <artifactId>core</artifactId>
    <version>3.3.3</version>
</dependency>
```



```
// 生成指定url对应的二维码到文件，宽和高都是300像素 ，生成位置是 d:/qrcode.jpg
QrCodeUtil.generate("https://hutool.cn/", 300, 300, FileUtil.file("d:/qrcode.jpg"));
```



### 微信扫码登录

https://cloud.tencent.com/developer/article/1985478 流程详细

https://cloud.tencent.com/developer/article/2245870?areaId=106001

https://cloud.tencent.com/developer/article/2225357?areaId=106001

![image-20231029054644147](/202310290546382.png)

#### 测试账号申请使用 cpolar（内网穿透）

https://www.cpolar.com/

使用cpolar生成的**公网地址**申请测试账号

![image-20231029061904426](/202310290619504.png)

接口配置信息会向填写的url发送内容，这里使用 WeChatController 里的方法接收

WeChatController        

```
@RestController
public class WeChatController {
    @RequestMapping("/wechat")
    public String WxSignatureCheck(
            @RequestParam(value ="signature")String signature,
            @RequestParam(value= "timestamp")String timestamp,
            @RequestParam(value= "nonce")String nonce,
            @RequestParam(value= "echostr")String echostr
    ){
        System.out.println("收到微信校验请求，echostr:{}"+echostr);
        //TODO 校验是否微信的请求
        return echostr;
    }
}
```

提示配置成功则成功了

在下图位置配置上域名  48112c0.r17.cpolar.top

![image-20231029062239785](/202310290622873.png)

微信网页授权流程参考官网：

https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html

网页授权流程分为四步：

1. 引导用户进入授权页面同意授权，获取code
2. 通过code换取网页授权access_token（与基础支持中的access_token不同）
3. 如果需要，开发者可以刷新网页授权access_token，避免过期
4. 通过网页授权access_token和openid获取用户基本信息（支持UnionID机制）



第一步流程

```java
@GetMapping("/wxLogin")
    @ResponseBody
    public void wxLoginPage(HttpServletResponse response) throws Exception {
        //redirect_Url是回调的地址  注意要转成 UrlEncode 格式
        String redirectUrl= URLEncoder.encode("http://48112c0.r17.cpolar.top/wxCallback","UTF-8");
        //构透二推码链接地址(appid 换成自己的)
        String url ="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxcc4117be0cfcbc3f&redirect_uri="
                +redirectUrl+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
        //生成二维码的，扫描后跳转上面的地址
        response.setContentType("image/png");
        List<Integer> list =new ArrayList<>();
        QrCodeUtil.generate(url, 300, 300,"jpg",response.getOutputStream());

    }
```

第二部流程

TokenInfo

```java
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TokenInfo {
     //"access_token":"ACCESS_TOKEN",
     //"expires_in":7200,
     //"refresh_token":"REFRESH_TOKEN",
     //"openid":"OPENID",
     //"scope":"SCOPE",
    private String accessToken;
    private String expiresIn;
    private String refreshToken;
    private String openid;
    private String scope;

}
```