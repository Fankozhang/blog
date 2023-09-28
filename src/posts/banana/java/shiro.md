---
date: 2022-01-05
category:
  - java
tag:
  - java
  - ssm
  - spring-boot
  - shiro

typora-root-url: ..\..\..\.vuepress\public


---





# shiro

 [Java开发 Shiro框架详解(轻松入门) - 掘金 (juejin.cn)](https://juejin.cn/post/6991664333314850853) 

Shiro有三大核心组件，即`Subject`、`SecurityManager` 和 `Realm`

- Subject: 为`认证主体`。应用代码直接交互的对象是Subject,Subject代表了当前的用户。包含`Principals`和`Credentials`两个信息。
- SecurityManager:为`安全管理员`。是Shiro架构的核心。与Subject的所有交互都会委托给SecurityManager, Subject相当于是一个门面，而SecurityManager才是真正的执行者。它负责与Shiro 的其他组件进行交互。
- Realm：是`一个域`。充当了Shiro与应用安全数据间的“桥梁”。Shiro从Realm中获取安全数据（如用户、角色、权限），就是说SecurityManager要验证用户身份，那么它需要从Realm中获取相应的用户进行比较，来确定用户的身份是否合法；也需要从Realm得到用户相应的角色、权限，进行验证用户的操作是否能过进行，可以把Realm看成DataSource，即安全数据源。

- `Authentication`: 身份认证、登录，验证用户是不是拥有相应的身份;
- `Authorization`:授权,即权限验证，验证某个已认证的用户是否拥有某个权限，即判断用户能否进行什么操作，如:验证某个用户是否拥有某个角色，或者细粒度的验证某个用户对某个资源是否具有某个权限!
- `Session Manager`: 会话管理，即用户登录后就是第-次会话，在没有退出之前，它的所有信息都在会话中;会话可以是普通的JavaSE环境，也可以是Web环境;
- `Cryptography`: 加密,保护数据的安全性，如密码加密存储到数据库中，而不是明文存储;
- `Web Support`: Web支持，可以非常容易的集成到Web环境;
- `Caching`: 缓存，比如用户登录后，其用户信息，拥有的角色、权限不必每次去查,这样可以提高效率
- `Concurrency`: Shiro支持多线程应用的并发验证，即，如在一个线程中开启另一个线程,能把权限自动的传播过去
- `Testing`:提供测试支持;
- `RunAs`:允许一个用户假装为另-一个用户(如果他们允许)的身份进行访问;
- `Remember Me`:记住我，这个是非常常见的功能，即一-次登录后， 下次再来的话不用登录了