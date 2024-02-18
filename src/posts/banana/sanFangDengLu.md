---
date: 2022-01-06
category:
  - node
tag:
  -login
---

# 三方登录

## gitee

参考： [gitee第三方登录详解（github基本同理）-CSDN博客](https://blog.csdn.net/m0_46198325/article/details/125385632)

三方登录文档：[Gitee OAuth 文档](https://gitee.com/api/v5/oauth_doc#/)

### application.yml(配置信息)

```yml
gitee:
  id: 40a386bef9dd1bebe907e1f819a570a0c765593ebfa304d97a5e41b0629a85c7
  secret: db36d89eaedeab68888b9d09735b15f511b275e5f0ee681be027b7f824dddb8c
  callback: http://127.0.0.1:8084/callback
```

### GiteeHttpClient(不重要)

```java
@Component
public class GiteeHttpClient {

    /**
     * 获取Access Token
     */
    public static JSONObject getAccessToken(String url) throws IOException {
        HttpClient client = HttpClients.createDefault();
        HttpPost post = new HttpPost(url);
        post.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36");
        HttpResponse response = client.execute(post);
        HttpEntity entity = response.getEntity();
        if(entity != null){
            String result = EntityUtils.toString(entity, "UTF-8");
            return JSONObject.parseObject(result);
        }
        post.releaseConnection();
        return null;
    }

    public static JSONObject getUserInfo(String url) throws IOException {
        JSONObject jsonObject = null;
        CloseableHttpClient client = HttpClients.createDefault();
        HttpGet httpGet = new HttpGet(url);
        httpGet.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36");
        HttpResponse response = client.execute(httpGet);
        HttpEntity entity = response.getEntity();
        if(entity != null){
            String result = EntityUtils.toString(entity, "UTF-8");
            jsonObject = JSONObject.parseObject(result);
        }
        httpGet.releaseConnection();
        return jsonObject;
    }
}

```

### 业务代码

#### 前端： 

（这里也可以请求接口，由后端返回授权的路径）

```
const client_id='40a386bef9dd1bebe907e1f819a570a0c765593ebfa304d97a5e41b0629a85c7'
const redirect_uri='http://127.0.0.1:8084/callback'
window.open(`https://gitee.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`)
```

#### 后端：

```java
@Controller
public class GiteeController {
    @Value("${gitee.id}")
    private String id;

    @Value("${gitee.secret}")
    private String secret;

    @Value("${gitee.callback}")
    private String callback;

    //  前端直接跳转的生成后的路由，这一个接口可以省略，主要就是拼接授权页面的路径。
    @GetMapping("/auth")
    public String getAuth(HttpSession session){
        String uuid = UUID.randomUUID().toString().replaceAll("-","");
        session.setAttribute("state", uuid);
        // Step1：获取Authorization Code
        String url = "https://gitee.com/oauth/authorize?response_type=code" +
                "&client_id=" + id +
                "&redirect_uri=" + URLEncoder.encode(callback) +
                "&state=" + uuid +
                "&scope=user_info";
        //因为使用的是thymeleaf模板引擎，所以是无法解析一个网址的，只能重定向（不必非写这个）
        return url;
    }

    @GetMapping("/callback")
    public void getCallback(HttpServletRequest request, HttpServletResponse response) throws IOException {
        HttpSession session = request.getSession();
        String code = request.getParameter("code");
        String state = request.getParameter("state");
        String uuid = (String) session.getAttribute("state");
        if(uuid != null){
            if(!uuid.equals(state)){
                //return "index";
                System.out.println("index");
            }
        }
        // Step2：通过Authorization Code获取Access Token
        String url = "https://gitee.com/oauth/token?grant_type=authorization_code" +
                "&client_id=" + id +
                "&client_secret=" + secret +
                "&code=" + code +
                "&redirect_uri=" + callback;

        JSONObject accessToken = GiteeHttpClient.getAccessToken(url);
        // Step3: 获取用户信息
        url = "https://gitee.com/api/v5/user?access_token=" + accessToken.get("access_token");
        JSONObject jsonObject = GiteeHttpClient.getUserInfo(url);
        /**
         * 获取到用户信息之后，就该写你自己的业务逻辑了
         */
        System.out.println(jsonObject);
        System.out.println("Hello");
        // 跳转到前端页面
        response.sendRedirect("http://127.0.0.1:5173/#/index?data="+jsonObject);
    }
}
```



## justAuth

官网：[使用指南 | JustAuth](https://www.justauth.cn/guide/)

参考，很实用：[Vue+JustAuth+SpringBoot,前后端分离项目Vue集成第三方登录_justauth前后端分离-CSDN博客](https://blog.csdn.net/weixin_46684099/article/details/118297276)

### 依赖

不指定版本可能引入依赖失败。

```xml
<!--JustAuth-->
		<dependency>
			<groupId>me.zhyd.oauth</groupId>
			<artifactId>JustAuth</artifactId>
			<version>1.15.9</version>
		</dependency>
		<!--http请求相关-->
		<dependency>
			<groupId>cn.hutool</groupId>
			<artifactId>hutool-http</artifactId>
			<version>5.3.9</version>
		</dependency>
```

### 业务代码（Gitee登录）

#### 前端：

在点击了第三方登录的按钮后，会返回授权路径，授权后由后端返回授权信息。

```js
export const gettheUrl=(params)=>{
    return request('/oauth/render/Gitee','get',params)
}

gettheOne().then(res=>{
    // window.open(res)
    location.href=res
})
```

#### 后端：

```java
@RestController
@RequestMapping("/oauth")
public class RestAuthController {

    @RequestMapping("/render/Gitee")
    public String renderAuth(HttpServletResponse response) throws IOException {
        AuthRequest authRequest = getAuthRequest();
        //response.sendRedirect(authRequest.authorize(AuthStateUtils.createState()));
        //  生成第三方授权跳转的页面地址，返回给前端打开。
        String authorizeUrl = authRequest.authorize(AuthStateUtils.createState());
        return authorizeUrl;
    }

    @RequestMapping("/callback")
    public void login(AuthCallback callback, HttpServletResponse response) throws IOException {
        AuthRequest authRequest = getAuthRequest();
        //  获取登录的Gitee账号信息
        AuthResponse<AuthUser> log = authRequest.login(callback);
        System.out.println(JSONObject.toJSONString(log));
        //  跳转到前端页面
        response.sendRedirect("http://127.0.0.1:5173/#/index?data="+JSONObject.toJSONString(log));

    }

    private AuthRequest getAuthRequest() {
        return new AuthGiteeRequest(AuthConfig.builder()
                .clientId("40a386bef9dd1bebe907e1f819a570a0c765593ebfa304d97a5e41b0629a85c7")
                .clientSecret("db36d89eaedeab68888b9d09735b15f511b275e5f0ee681be027b7f824dddb8c")
                .redirectUri("http://127.0.0.1:8084/oauth/callback")    //  callback方法
                .build());
    }
}
```



### 问题：

#### demo项目点击gitee登录，gitee页面显示 请求范围无效、未知或格式不正确

[demo项目点击gitee登录，gitee页面显示 请求范围无效、未知或格式不正确 · Issue #I3UK1G · yadong.zhang/JustAuth - Gitee.com](https://gitee.com/yadong.zhang/JustAuth/issues/I3UK1G)

应用设置的权限和代码要能对应上，权限勾选的少了就会出现这个问题。

```
// .scopes(AuthScopeUtils.getScopes(AuthGiteeScope.values()))    // 需要勾选所有的权限
// .scopes(AuthScopeUtils.getScopes(AuthGiteeScope.USER_INFO))   // 只需要勾选 USER_INFO 的权限
```

