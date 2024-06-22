---
icon: edit
date: 2022-01-05
tag:
  - java
  - sa-token
typora-copy-images-to: upload
typora-root-url: ..\..\..\.vuepress\public


---

# Satoken

官网 (文档特别清晰，跟着文档学习即可) ：[在 SpringBoot 环境集成 (sa-token.cc)](https://sa-token.cc/doc.html#/start/example)

纯净的springBoot示例项目：[刘潇/springboot-pure - 码云 - 开源中国 (gitee.com)](https://gitee.com/click33/springboot-pure)



[Sa-token基本使用教程（全网最详细！！！）-CSDN博客](https://blog.csdn.net/Xixi0864/article/details/137650195)

## sa-token依赖

注：如果你使用的是 SpringBoot 3.x，只需要将 `sa-token-spring-boot-starter` 修改为 `sa-token-spring-boot3-starter` 即可。

```xml
<!-- Sa-Token 权限认证，在线文档：https://sa-token.cc -->
		<dependency>
			<groupId>cn.dev33</groupId>
			<artifactId>sa-token-spring-boot-starter</artifactId>
			<version>1.37.0</version>
		</dependency>
```

## 配置文件

可以**零配置启动项目** ，但同时你也可以在 `application.yml` 中增加如下配置，定制性使用框架

```yml
server:
    # 端口
    port: 8081

############## Sa-Token 配置 (文档: https://sa-token.cc) ##############
sa-token:
    # token 名称（同时也是 cookie 名称）
    token-name: satoken
    # token 有效期（单位：秒） 默认30天，-1 代表永久有效
    timeout: 2592000
    # token 最低活跃频率（单位：秒），如果 token 超过此时间没有访问系统就会被冻结，默认-1 代表不限制，永不冻结
    active-timeout: -1
    # 是否允许同一账号多地同时登录 （为 true 时允许一起登录, 为 false 时新登录挤掉旧登录）
    is-concurrent: true
    # 在多人登录同一账号时，是否共用一个 token （为 true 时所有登录共用一个 token, 为 false 时每次登录新建一个 token）
    is-share: true
    # token 风格（默认可取值：uuid、simple-uuid、random-32、random-64、random-128、tik）
    token-style: uuid
    # 是否输出操作日志
    is-log: true
```

## 测试功能controller

官网的登录功能测试

示例代码：[sa-token-demo/sa-token-demo-case/src/main/java/com/pj/cases/use/LoginAuthController.java · dromara/Sa-Token - Gitee.com](https://gitee.com/dromara/sa-token/blob/master/sa-token-demo/sa-token-demo-case/src/main/java/com/pj/cases/use/LoginAuthController.java)

```java
@RestController
@RequestMapping("/user/")
public class TestController {
    // 测试登录，浏览器访问： http://localhost:8081/user/doLogin?username=zhang&password=123456
    @RequestMapping("doLogin")
    public String doLogin(String username, String password) {
        // 此处仅作模拟示例，真实项目需要从数据库中查询数据进行比对
        if("zhang".equals(username) && "123456".equals(password)) {
            // 会话登录：参数填写要登录的账号id，建议的数据类型：long | int | String， 不可以传入复杂类型，如：User、Admin 等等
            // StpUtil.login(Object id);   
            StpUtil.login(10001);
            return "登录成功";
        }
        return "登录失败";
    }

    // 查询登录状态，浏览器访问： http://localhost:8081/user/isLogin
    @RequestMapping("isLogin")
    public String isLogin() {
        return "当前会话是否登录：" + StpUtil.isLogin();
    }
    
     // 查询 Token 信息  ---- http://localhost:8081/acc/tokenInfo
    @RequestMapping("tokenInfo")
    public SaResult tokenInfo() {
        return SaResult.data(StpUtil.getTokenInfo());
    }
    
    // 测试注销  ---- http://localhost:8081/acc/logout
    @RequestMapping("logout")
    public SaResult logout() {
        StpUtil.logout();
        return SaResult.ok();
    }
}
```

## 权限认证

### 获取当前账号权限码集合

你需要做的就是新建一个类，实现 `StpInterface`接口，例如以下代码：

```java
/**
 * 自定义权限认证接口扩展，Sa-Token 将从此实现类获取每个账号拥有的权限码
 *
 * @author click33
 * @since 2022-10-13
 */
@Component    // 打开此注解，保证此类被springboot扫描，即可完成sa-token的自定义权限验证扩展
public class StpInterfaceImpl implements StpInterface {
    
    //参数解释：
    //loginId：账号id，即你在调用 StpUtil.login(id) 时写入的标识值。
    //loginType：账号体系标识，此处可以暂时忽略，在 [ 多账户认证 ] 章节下会对这个概念做详细的解释。

    /**
     * 返回一个账号所拥有的权限码集合
     */
    @Override
    public List<String> getPermissionList(Object loginId, String loginType) {
        // 本list仅做模拟，实际项目中要根据具体业务逻辑来查询权限
        List<String> list = new ArrayList<String>();
        list.add("101");
        list.add("user.add");
        list.add("user.update");
        list.add("user.get");
        // list.add("user.delete");
        list.add("art.*");
        return list;
    }

    /**
     * 返回一个账号所拥有的角色标识集合
     */
    @Override
    public List<String> getRoleList(Object loginId, String loginType) {
        // 本list仅做模拟，实际项目中要根据具体业务逻辑来查询角色
        List<String> list = new ArrayList<String>();
        list.add("admin");
        list.add("super-admin");
        return list;
    }

}
```

### [权限校验](https://sa-token.cc/doc.html#/use/jur-auth?id=_3、权限校验)

```java
// 获取：当前账号所拥有的权限集合
StpUtil.getPermissionList();

// 判断：当前账号是否含有指定权限, 返回 true 或 false
StpUtil.hasPermission("user.add");        

// 校验：当前账号是否含有指定权限, 如果验证未通过，则抛出异常: NotPermissionException 
StpUtil.checkPermission("user.add");        

// 校验：当前账号是否含有指定权限 [指定多个，必须全部验证通过]
StpUtil.checkPermissionAnd("user.add", "user.delete", "user.get");        

// 校验：当前账号是否含有指定权限 [指定多个，只要其一验证通过即可]
StpUtil.checkPermissionOr("user.add", "user.delete", "user.get");  

// 扩展：NotPermissionException 对象可通过 getLoginType() 方法获取具体是哪个 StpLogic 抛出的异常
```

### [角色校验](https://sa-token.cc/doc.html#/use/jur-auth?id=_4、角色校验)

```java
// 获取：当前账号所拥有的角色集合
StpUtil.getRoleList();

// 判断：当前账号是否拥有指定角色, 返回 true 或 false
StpUtil.hasRole("super-admin");        

// 校验：当前账号是否含有指定角色标识, 如果验证未通过，则抛出异常: NotRoleException
StpUtil.checkRole("super-admin");        

// 校验：当前账号是否含有指定角色标识 [指定多个，必须全部验证通过]
StpUtil.checkRoleAnd("super-admin", "shop-admin");        

// 校验：当前账号是否含有指定角色标识 [指定多个，只要其一验证通过即可] 
StpUtil.checkRoleOr("super-admin", "shop-admin");

//扩展：NotRoleException 对象可通过 getLoginType() 方法获取具体是哪个 StpLogic 抛出的异常
```

### 拦截全局异常

你可以创建一个全局异常拦截器，统一返回给前端的格式，参考：

```
@RestControllerAdvice
public class GlobalExceptionHandler {
    // 全局异常拦截 
    @ExceptionHandler
    public SaResult handlerException(Exception e) {
        e.printStackTrace(); 
        return SaResult.error(e.getMessage());
    }
}
```

详细参考 ： 码云：GlobalException.java](https://gitee.com/dromara/sa-token/blob/master/sa-token-demo/sa-token-demo-case/src/main/java/com/pj/current/GlobalException.java)

### [权限通配符](https://sa-token.cc/doc.html#/use/jur-auth?id=_6、权限通配符)

Sa-Token允许你根据通配符指定**泛权限**，例如当一个账号拥有`art.*`的权限时，`art.add`、`art.delete`、`art.update`都将匹配通过

```java
// 当拥有 art.* 权限时
StpUtil.hasPermission("art.add");        // true
StpUtil.hasPermission("art.update");     // true
StpUtil.hasPermission("goods.add");      // false

// 当拥有 *.delete 权限时
StpUtil.hasPermission("art.delete");      // true
StpUtil.hasPermission("user.delete");     // true
StpUtil.hasPermission("user.update");     // false

// 当拥有 *.js 权限时
StpUtil.hasPermission("index.js");        // true
StpUtil.hasPermission("index.css");       // false
StpUtil.hasPermission("index.html");      // false

//上帝权限：当一个账号拥有 "*" 权限时，他可以验证通过任何权限码 （角色认证同理）
```

### 权限精确到按钮级？

思路：如此精确的范围控制只依赖后端已经难以完成，此时需要前端进行一定的逻辑判断。

1. 在登录时，把当前账号拥有的所有权限码一次性返回给前端。
2. 前端将权限码集合保存在`localStorage`或其它全局状态管理对象中。
3. 在需要权限控制的按钮上，使用 js 进行逻辑判断，例如在`Vue`框架中我们可以使用如下写法：

```
<button v-if="arr.indexOf('user.delete') > -1">删除按钮</button>
```

1. 其中：`arr`是当前用户拥有的权限码数组，`user.delete`是显示按钮需要拥有的权限码，`删除按钮`是用户拥有权限码才可以看到的内容。

注意：以上写法只为提供一个参考示例，不同框架有不同写法，大家可根据项目技术栈灵活封装进行调用。