# nest

https://nest.nodejs.cn/providers

## 创建项目

```bash
$ npm i -g @nestjs/cli
$ nest new project-name
```

项目核心文件的简要概述：

| `app.controller.ts`      | 具有单一路由的基本控制器。                                   |
| ------------------------ | ------------------------------------------------------------ |
| `app.controller.spec.ts` | 控制器的单元测试。                                           |
| `app.module.ts`          | 应用的根模块。                                               |
| `app.service.ts`         | 具有单一方法的基本服务。                                     |
| `main.ts`                | 使用核心函数 `NestFactory` 创建 Nest 应用实例的应用入口文件。 |

## 运行应用[#](https://nest.nodejs.cn/first-steps#运行应用)

```bash
$ npm run start
```

为了加快开发过程（构建速度加快 20 倍），你可以通过将 `-b swc` 标志传递给 `start` 脚本来使用 [SWC 构建器](https://nest.nodejs.cn/recipes/swc)，如下所示 `npm run start -- -b swc`。

注意：使用  `npm run start -- -b swc`  需要下载相关依赖

```bash
#要监视文件中的更改，此命令将监视你的文件，自动重新编译并重新加载服务器。  (推荐)

$ npm run start:dev
```

## 增删改查生成器（仅限 TypeScript）

https://nest.nodejs.cn/recipes/crud-generator#%E5%A2%9E%E5%88%A0%E6%94%B9%E6%9F%A5%E7%94%9F%E6%88%90%E5%99%A8%EF%BC%88%E4%BB%85%E9%99%90-typescript%EF%BC%89

## controller

### 快速生成资源

```
nest g resource [name]
```

### 请求参数获取

```ts
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';   

@Controller('cats')
export class CatsController {
  @Get('list')
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}
```

**提示 : 为了利用 `express` 类型（如上面的 `request: Request` 参数示例），请安装 `@types/express` 软件包**



@Req  返回的内容太多，可以使用开箱即用的专用装饰器，例如 `@Body()` 或 `@Query()`。下面是提供的装饰器列表和它们代表的普通平台特定对象。

| `@Request(), @Req()`       | `req`                               |
| -------------------------- | ----------------------------------- |
| `@Response(), @Res()`***** | `res`                               |
| `@Next()`                  | `next`                              |
| `@Session()`               | `req.session`                       |
| `@Param(key?: string)`     | `req.params` / `req.params[key]`    |
| `@Body(key?: string)`      | `req.body` / `req.body[key]`        |
| `@Query(key?: string)`     | `req.query` / `req.query[key]`      |
| `@Headers(name?: string)`  | `req.headers` / `req.headers[name]` |
| `@Ip()`                    | `req.ip`                            |
| `@HostParam()`             | `req.hosts`                         |

示例： @Query()

```ts
import { Controller, Get, Query } from '@nestjs/common';
@Controller('user')
export class UserController {
  @Get('list')
  findAll(@Query() query: any): string {
    console.log(query);
    return '123';
  }
}

// 访问：http://localhost:3000/user/list?a=1&b=2
// 返回  { a: '1', b: '2' }
```

### 路由参数

**提示从 `@nestjs/common` 包中导入 `Param`。**

```ts
@Get(':id')
findOne(@Param() params: any): string {
  console.log(params.id);
  return `This action returns a #${params.id} cat`;
}
```

```ts
@Get(':id')
findOne(@Param('id') id: string): string {
  return `This action returns a #${id} cat`;
}
```

### 异步性

数据提取大多是异步的。这就是 Nest 支持 `async` 功能并与它配合使用的原因。

```ts
@Get()
async findAll(): Promise<any[]> {
  return [];
}
```

上面的代码是完全有效的。此外，Nest 路由处理程序更强大，因为它能够返回 RxJS [可观察流](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html)。Nest 将自动订阅下面的源并获取最后触发的值（一旦流完成）。

```ts
@Get()
findAll(): Observable<any[]> {
  return of([]);
}
```



## Providers（service）

### 快速创建Providers

```
$ nest g service [name]
```

## mysql数据库连接

https://nest.nodejs.cn/techniques/database#%E6%95%B0%E6%8D%AE%E5%BA%93

TypeORM：https://typeorm.bootcss.com/

```
$ npm install --save @nestjs/typeorm typeorm mysql2
```

