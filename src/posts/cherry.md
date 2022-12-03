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

### (非自动化部署)
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

### （自动化部署）
