import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as d,a as e,b as s,e as r,f as n,r as t}from"./app.afc88ad2.js";const u="/blog/press4.png",v="/blog/press1.png",c="/blog/press2.png",o="/blog/press3.png",b={},p=n('<h1 id="vuepress" tabindex="-1"><a class="header-anchor" href="#vuepress" aria-hidden="true">#</a> vuePress</h1><h2 id="vuepress基本使用-部署github" tabindex="-1"><a class="header-anchor" href="#vuepress基本使用-部署github" aria-hidden="true">#</a> vuePress基本使用（部署github）</h2><h2 id="非自动化部署" tabindex="-1"><a class="header-anchor" href="#非自动化部署" aria-hidden="true">#</a> (非自动化部署)</h2><p>github 创建仓库 blog<br> 在 blog 下新建分支 gh-pages</p><p><img src="'+u+'" alt="press1" loading="lazy"></p><p>切换分支到 gh-pages<br> 本地新建 blog 文件夹 连接远程 github仓库<br> 在blog文件夹下下载配置vuepress,并将源代码打包<br> 在github的blog仓库下的settings里面设置git pages,切换到gh-pages<br> 将打包后的dist目录下的文件上传至github的gh-pages 分支。</p><p><img src="'+v+'" alt="press1" loading="lazy"></p><p><img src="'+c+'" alt="press1" loading="lazy"></p>',8),m={href:"https://fankozhang.github.io/blog/",target:"_blank",rel:"noopener noreferrer"},g=n('<p><img src="'+o+`" alt="press1" loading="lazy"></p><p>如果出现样式不显示问题，记得修改base路径<br> 一般base路径改成 &#39; /blog/&#39; ，视自己的文件而定。</p><h2 id="自动化部署" tabindex="-1"><a class="header-anchor" href="#自动化部署" aria-hidden="true">#</a> （自动化部署）</h2><p>github 创建仓库 blog</p><p>本地新建 blog 文件夹 连接远程 github仓库</p><p>在本地blog文件夹中编写源码，在package.json中配置如下的运行命令。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &quot;scripts&quot;: {
    &quot;docs:build&quot;: &quot;vuepress build src&quot;,
    &quot;docs:clean-dev&quot;: &quot;vuepress dev src --clean-cache&quot;,
    &quot;docs:dev&quot;: &quot;vuepress dev src&quot;
  },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在blog文件夹下按 <strong>blob/.github/workflows</strong>路径创建文件夹，在workflows文件夹下创建deploy-docs.yml文件，文件内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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
          &gt; src/.vuepress/dist/.nojekyll

      - name: 部署文档
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 这是文档部署到的分支名称
          branch: gh-pages
          folder: src/.vuepress/dist

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当源文件和.github文件的内容都准备好后，将blog文件夹下的内容全部上传到github仓库。工作流运行一段时间后，打包成功，在gh-pages分支查看打包后的源码。随后刷新github pages的网页地址，就能看到更新后的内容。</p><p>当下次对本地blog文件夹下的源代码进行修改时，直接提交远程仓库即可。工作流会自动执行打包命令。等一段时间后刷新，就能看到刷新后的内容了。</p>`,11);function h(_,f){const i=t("ExternalLinkIcon");return a(),d("div",null,[p,e("p",null,[s("在访问github pages显示的地址就可以了，我的地址是 "),e("a",m,[s("https://fankozhang.github.io/blog/"),r(i)])]),g])}const k=l(b,[["render",h],["__file","cherry.html.vue"]]);export{k as default};
