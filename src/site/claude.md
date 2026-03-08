---
icon: edit
date: 2026-03-04
tag:
  - site
  - ai

---

# claude code

## claude code安装

电脑要安装node,git

node 命令行安装claude code： （node版本建议尽量是最新的）

```text
npm install -g @anthropic-ai/claude-code
```

配置国产大模型API KEY：

- 在c盘下找到.claude文件夹，通常在系统用户文件夹下，例如 ：    C:\Users\username\.claude

- 有`settings.json` 配置文件，打开`settings.json` 配置文件，没有配置文件则新建一个`settings.json` 配置文件，这个配置文件是配置你的大模型信息的

  文件配置如下内容：

  ```json
  {"env": {
      "ANTHROPIC_BASE_URL": "https://api.deepseek.com/anthropic  api的基础地址，自己自行配置",       
      "ANTHROPIC_AUTH_TOKEN": "你的API KEY，身份验证令牌",
      "ANTHROPIC_MODEL": "deepseek-reasoner  主模型名称",
      "ANTHROPIC_SMALL_FAST_MODEL": "deepseek-reasoner  轻量/快速模型名称，也可以和主模型一样，但不推荐"
  }}
  ```

- 重新进入claude，输入claude命令，查看国产模型是否接入成功



## yolo模式

在Claude Code中启用YOLO模式可以实现全自动化操作，**跳过所有权限提示，提升工作效率。**

管理 Claude Code 的工具权限可以参考（权限相关讲解内容较多）：https://juejin.cn/post/7523268191477989422

### 如何启用YOLO模式

1. [**使用命令行参数**：在启动Claude Code时，可以通过添加`--dangerously-skip-permissions`参数来启用YOLO模式。这将使Claude Code在执行过程中不再询问任何权限。](https://tenten.co/learning/claude-code-yolo/)

   ```
   claude --dangerously-skip-permissions
   ```

2. **配置文件设置**：可以在Claude Code的配置文件中设置权限模式。将以下内容添加到`settings.json`文件中，以默认启用YOLO模式：

   ```
   {
       "permissions": {
       	"defaultMode": "bypassPermissions"
       }
   }
   ```

   



## MCP   安装

数据库连接工具安装参考：https://blog.csdn.net/YuArai/article/details/153631844

#### 数据库连接工具    database-server  

Claude Code 连接数据库的核心方式是通过 **MCP (Model Context Protocol)**。

简单来说，Claude Code 本身不直接存储数据库凭证，而是通过一个“中间代理”（MCP Server）来与数据库交互。你可以通过以下步骤完成连接：

------

##### 1. 安装数据库 MCP Server

你需要先在本地安装一个支持数据库操作的 MCP 服务程序。常用的开源选择是 `@executeautomation/database-server`，它支持 MySQL、PostgreSQL、SQLite 和 SQL Server。

在终端运行：

```
npm install -g @executeautomation/database-server
```

##### 2. 配置mcp服务器

命令中 database-server 是mcp的名字

```
claude mcp add --transport stdio database-server -- cmd /c "npx @executeautomation/database-server --mysql --host <数据库主机> --port <端口> --database <数据库名> --user <用户名> --password <密码>"
```

claude mcp add --transport stdio database-server -- cmd /c "npx @executeautomation/database-server --mysql --host 127.0.0.1 --port 3306 --database mybatis --user root --password 123456"

##### 3.验证连接

成功运行添加命令后，请执行：

```
claude mcp list
```

如果看到 `mysql-db` 显示为 **active**，表示安装连接成功。可以开始数据库查询了。(此时可以进入claude让他查询数据库数据了)

如果是  - ✗ Failed to connect ，则要查找原因，直至显示为status.

##### 4.移除mcp

```
claude mcp remove <名字>
```

## cc switch

CC Switch是一款跨平台桌面All-in-One助手工具，可统一管理Claude Code、Codex、OpenCode和Gemini CLI的API Provider、MCP服务、Skills扩展等配置，支持通过图形界面一键切换不同供应商（如官方、第三方中转、自建服务等）的API请求路由，无需手动修改配置文件，提升多模型API管理效率。

下载： [Release CC Switch v3.11.1 · farion1231/cc-switch (github.com)](https://github.com/farion1231/cc-switch/releases/tag/v3.11.1)

## figma

下载安装：[Figma Downloads | Web Design App for Desktops & Mobile](https://www.figma.com/downloads/)

汉化：[Figma软件汉化-Figma中文版下载-Figma中文社区](https://www.figma.cool/cn)