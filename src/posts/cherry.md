---
icon: edit
date: 2022-01-09
category:
  - Cherry
tag:
  - red
  - small
  - round
---

# vuePress

## vuePress基本使用（部署github）

## (非自动化部署)
github 创建仓库  blog  
在 blog 下新建分支  gh-pages  
切换分支到  gh-pages  
本地新建 blog 文件夹  连接远程 github仓库  
在blog文件夹下下载配置vuepress,并将源代码打包  
在github的blog仓库下的settings里面设置git pages,切换到gh-pages  
将打包后的dist目录下的文件上传至github的gh-pages 分支。  
在访问git pages显示的地址就可以了，我的地址是 https://fankozhang.github.io/blog/  
如果出现样式不显示问题，记得修改base路径  
一般base路径改成 ' /blog/' ，是自己的文件而定。  

## （自动化部署）

github 创建仓库  blog    

本地新建 blog 文件夹  连接远程 github仓库     

在本地blog文件夹中编写源码，在package.json中配置如下的运行命令。

```
 "scripts": {
    "docs:build": "vuepress build src",
    "docs:clean-dev": "vuepress dev src --clean-cache",
    "docs:dev": "vuepress dev src"
  },
```

在blog文件夹下按  **blob/.github/workflows**路径创建文件夹，在workflows文件夹下创建deploy-docs.yml文件，文件内容如下：

```

name: 部署文档

on:
  push:
    branches:
      # 确保这是你正在使用的分支名称
      - main

jobs:
  deploy-gh-pages:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
          # 如果你文档需要 Git 子模块，取消注释下一行
          # submodules: true



      - name: 设置 Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm

      - name: 安装依赖
        run: npm ci

      - name: 构建文档
        env:
          NODE_OPTIONS: --max_old_space_size=8192
        run: |-
          npm run docs:build
          > src/.vuepress/dist/.nojekyll

      - name: 部署文档
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 这是文档部署到的分支名称
          branch: gh-pages
          folder: src/.vuepress/dist

```

当源文件和.github文件的内容都准备好后，将blog文件夹下的内容全部上传到github仓库。工作流运行一段时间后，打包成功，在gh-pages分支查看打包后的源码。随后刷新github pages的网页地址，就能看到更新后的内容。

当下次对本地blog文件夹下的源代码进行修改时，直接提交远程仓库即可。工作流会自动执行打包命令。等一段时间后刷新，就能看到刷新后的内容了。