import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as i,a as n,b as s,e as t,f as e,r as o}from"./app.66989759.js";const l="/blog/../public/image-20231201224447731.png",u={},r=n("h1",{id:"flutter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#flutter","aria-hidden":"true"},"#"),s(" Flutter")],-1),d={href:"https://book.flutterchina.club/#%E7%AC%AC%E4%BA%8C%E7%89%88%E5%8F%98%E5%8C%96",target:"_blank",rel:"noopener noreferrer"},k={href:"https://juejin.cn/post/7235142303274205241?searchId=202311250958591EE0D7726A46687C04CC",target:"_blank",rel:"noopener noreferrer"},v={href:"https://flutter.cn/docs",target:"_blank",rel:"noopener noreferrer"},m={href:"http://www.laomengit.com/guide/introduction/mobile_system.html",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,"flutter属于声名式UI",-1),g={href:"https://www.bilibili.com/video/BV19x4y1R7LE?p=36&spm_id_from=pageDriver&vd_source=f25f5a8d75a3a60d5a288f726803ec11",target:"_blank",rel:"noopener noreferrer"},h={href:"https://juejin.cn/user/26804746471054/search?search_type=0",target:"_blank",rel:"noopener noreferrer"},f={href:"https://dart.cn/guides",target:"_blank",rel:"noopener noreferrer"},_=n("h2",{id:"包下载网站",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#包下载网站","aria-hidden":"true"},"#"),s(" 包下载网站")],-1),w={href:"https://pub.dev/",target:"_blank",rel:"noopener noreferrer"},y=e(`<p>导入包：</p><p>1 flutter pub add 包名</p><p>​ 示例： flutter pub add http</p><p>2 pubspec.yaml 在 dependencies 下加入 依赖包名和版本， 运行 flutter pub get</p><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dependencies:
  flutter:
    sdk: flutter
  cupertino_icons: ^1.0.2
  http: ^1.1.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3 导包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import &#39;package:http/http.dart&#39; as http;

关于import
1、as关键字-  给库起别名！目的：防止类名方法名冲突！
2、导入库，默认是整个文件中的都会导入
        *shoW:执行需要导入的内容
        *hide:需要隐藏的内容。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pubspec-yaml-配置文件" tabindex="-1"><a class="header-anchor" href="#pubspec-yaml-配置文件" aria-hidden="true">#</a> pubspec.yaml 配置文件</h2>`,9),x={href:"https://juejin.cn/post/6891263591058538510",target:"_blank",rel:"noopener noreferrer"},C=n("h2",{id:"flutter安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#flutter安装","aria-hidden":"true"},"#"),s(" flutter安装")],-1),S={href:"https://docs.flutter.dev/release/archive?tab=windows#windows",target:"_blank",rel:"noopener noreferrer"},B=n("p",null,"双击flutter安装目录下的flutter_console.bat执行安装, 完成后就能运行flutter命令了",-1),j=n("p",null,"设置环境变量： Path 增加安装路径，目录到安装包bin的路径",-1),I=n("h3",{id:"android-studio",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#android-studio","aria-hidden":"true"},"#"),s(" android studio")],-1),F={href:"https://blog.csdn.net/qq_43231248/article/details/132591061",target:"_blank",rel:"noopener noreferrer"},T=n("p",null,"下载flutter插件",-1),W=n("p",null,"配置sdk , 命令行 flutter doctor -v 第一行显示 sdk 路径",-1),q={href:"https://blog.csdn.net/willway_wang/article/details/123014598",target:"_blank",rel:"noopener noreferrer"},D=n("h3",{id:"vscode",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vscode","aria-hidden":"true"},"#"),s(" vscode")],-1),A={href:"https://juejin.cn/post/6844904005320048653",target:"_blank",rel:"noopener noreferrer"},M={href:"https://blog.csdn.net/qq_40020447/article/details/105657603",target:"_blank",rel:"noopener noreferrer"},N={href:"https://blog.csdn.net/qq_35017833/article/details/104636488",target:"_blank",rel:"noopener noreferrer"},L={href:"https://blog.csdn.net/weixin_45862329/article/details/129861888",target:"_blank",rel:"noopener noreferrer"},E=n("p",null,[n("img",{src:l,alt:"image-20231201224447731",loading:"lazy"})],-1),z={href:"https://blog.csdn.net/weixin_43840202/article/details/110353440",target:"_blank",rel:"noopener noreferrer"},R=n("p",null,"解决 找到文件 C:\\Users\\�ŷ�.gradle\\wrapper\\dists\\gradle-7.5-all\\6qsw290k5lz422uaf8jf6m7co\\gradle-7.5-all.zip",-1),H=n("p",null,"所有gradle版本下载地址",-1),P={href:"https://services.gradle.org/distributions/",target:"_blank",rel:"noopener noreferrer"},U={href:"https://mirrors.cloud.tencent.com/gradle/",target:"_blank",rel:"noopener noreferrer"},G=e(`<p>一定要下载对应的版本，替换掉文件</p><p>gradle-wrapper.ropeties</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
distributionUrl=https\\://services.gradle.org/distributions/gradle-7.5-all.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终android目录下 build.gradle如下所示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>buildscript {
    ext.kotlin_version = &#39;1.7.10&#39;
    repositories {
    //    google()
       mavenCentral()
        maven { url &#39;https://maven.aliyun.com/repository/google&#39; }
        maven { url &#39;https://maven.aliyun.com/repository/jcenter&#39; }
        maven { url &#39;https://maven.aliyun.com/nexus/content/groups/public&#39; }
    }

    dependencies {
        classpath &quot;org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version&quot;
    }
}

allprojects {
    repositories {
        google()
        mavenCentral()
    }
}

rootProject.buildDir = &#39;../build&#39;
subprojects {
    project.buildDir = &quot;\${rootProject.buildDir}/\${project.name}&quot;
}
subprojects {
    project.evaluationDependsOn(&#39;:app&#39;)
}

tasks.register(&quot;clean&quot;, Delete) {
    delete rootProject.buildDir
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vscode热更新" tabindex="-1"><a class="header-anchor" href="#vscode热更新" aria-hidden="true">#</a> vscode热更新</h2><p>flutter run 运行程序</p><p>在终端中，按下快捷键 R 或输入 <code>r</code> 来触发 Flutter 的热重载功能。你也可以使用 VSCode 的内置菜单栏中的“调试”选项来执行热重载。</p><h2 id="dart" tabindex="-1"><a class="header-anchor" href="#dart" aria-hidden="true">#</a> dart</h2>`,9),O={href:"https://www.w3cschool.cn/nxvsy/",target:"_blank",rel:"noopener noreferrer"},V=n("h2",{id:"渲染",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#渲染","aria-hidden":"true"},"#"),s(" 渲染")],-1),$={href:"https://zhuanlan.zhihu.com/p/135969091",target:"_blank",rel:"noopener noreferrer"},K=e(`<p>在Flutter中，Widget是Flutter用户界面的基本构成单元，可以说一切皆Widget。</p><h2 id="widget" tabindex="-1"><a class="header-anchor" href="#widget" aria-hidden="true">#</a> widget</h2><p>两种 widget 类型 : 有状态 stateful 无状态的 stateless</p><p>页面基础</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token comment">// 一定要导入dart包，同时通过 void main（）执行runApp才能进行下一步的操作。</span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">runApp</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token class-name">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token metadata function">@override</span> <span class="token comment">// build方法返回小部件</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">MaterialApp</span><span class="token punctuation">(</span>
        <span class="token comment">// 是否显示 debug 标识</span>
        debugShowCheckedModeBanner<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        home<span class="token punctuation">:</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
      <span class="token comment">// appBar在app头部显示</span>
      appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>
          centerTitle<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 标题居中</span>
          title<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;hello flutter&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 设置标题</span>
          backgroundColor<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF73D2FF</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//标题背景色</span>
      <span class="token comment">// bottomNavigationBar 底部导航</span>
            bottomNavigationBar<span class="token punctuation">:</span> <span class="token class-name">BottomNavigationBar</span><span class="token punctuation">(</span>
              type<span class="token punctuation">:</span> <span class="token class-name">BottomNavigationBarType</span><span class="token punctuation">.</span>fixed<span class="token punctuation">,</span>
                <span class="token comment">//  选中的导航的颜色</span>
              fixedColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>green<span class="token punctuation">,</span>
              items<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token punctuation">[</span>
                <span class="token class-name">BottomNavigationBarItem</span><span class="token punctuation">(</span>
                  icon<span class="token punctuation">:</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>home<span class="token punctuation">)</span><span class="token punctuation">,</span>
                  label<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;首页&#39;</span></span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name">BottomNavigationBarItem</span><span class="token punctuation">(</span>
                  icon<span class="token punctuation">:</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>favorite<span class="token punctuation">)</span><span class="token punctuation">,</span>
                  label<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;收藏&#39;</span></span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name">BottomNavigationBarItem</span><span class="token punctuation">(</span>
                  icon<span class="token punctuation">:</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>settings<span class="token punctuation">)</span><span class="token punctuation">,</span>
                  label<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;设置&#39;</span></span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              currentIndex<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// body里面放入自定义的widget，主体内容</span>
      body<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">MyWidget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 自定义的 MyWidget 部件 (此处是无状态的)</span>
<span class="token keyword">class</span> <span class="token class-name">MyWidget</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">MyWidget</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">super</span><span class="token punctuation">.</span>key<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span> <span class="token comment">// build方法返回小部件</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">const</span> <span class="token class-name">Center</span><span class="token punctuation">(</span>
        child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>
      <span class="token string-literal"><span class="token string">&#39;hello world1234567890&#39;</span></span><span class="token punctuation">,</span>
      <span class="token comment">// 文字方向</span>
      textDirection<span class="token punctuation">:</span> <span class="token class-name">TextDirection</span><span class="token punctuation">.</span>ltr<span class="token punctuation">,</span>
      style<span class="token punctuation">:</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>
          fontSize<span class="token punctuation">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
          fontWeight<span class="token punctuation">:</span> <span class="token class-name">FontWeight</span><span class="token punctuation">.</span>bold<span class="token punctuation">,</span>
          color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>blue<span class="token punctuation">,</span>
          backgroundColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="appbar的一些参数设置" tabindex="-1"><a class="header-anchor" href="#appbar的一些参数设置" aria-hidden="true">#</a> AppBar的一些参数设置</h3>`,6),Q={href:"https://blog.csdn.net/hnnd123/article/details/82735502",target:"_blank",rel:"noopener noreferrer"},X=e(`<h2 id="创建car类-列表排列【竖着】demo" tabindex="-1"><a class="header-anchor" href="#创建car类-列表排列【竖着】demo" aria-hidden="true">#</a> 创建car类（列表排列【竖着】Demo）</h2><p>car.dart</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Car {
  const Car({this.name, this.imageUrl});
  final String? name;
  final String? imageUrl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>main.dart 渲染出一个竖着排列的列表</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flur/model/Car.dart&#39;</span></span><span class="token punctuation">;</span>


<span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">Home</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">super</span><span class="token punctuation">.</span>key<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 加了_是指内部访问（指的是文件的内部）</span>
  <span class="token class-name">Widget</span> <span class="token function">itemForRow</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">,</span> int index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>
        color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>white<span class="token punctuation">,</span>
        margin<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        child<span class="token punctuation">:</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
          children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token class-name">Image</span><span class="token punctuation">.</span><span class="token function">network</span><span class="token punctuation">(</span>datas<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>imageUrl<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">Container</span><span class="token punctuation">(</span>
              height<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;</span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">index</span></span><span class="token string"> </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">datas<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>name</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Center</span><span class="token punctuation">(</span>
      child<span class="token punctuation">:</span> <span class="token class-name">ListView</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span>
        itemCount<span class="token punctuation">:</span> datas<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
        itemBuilder<span class="token punctuation">:</span> itemForRow<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Car</span><span class="token punctuation">&gt;</span></span> datas <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token keyword">const</span> <span class="token class-name">Car</span><span class="token punctuation">(</span>
      name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;车子1&#39;</span></span><span class="token punctuation">,</span>
      imageUrl<span class="token punctuation">:</span>
          <span class="token string-literal"><span class="token string">&#39;https://img.zcool.cn/community/01903158b7a4e7a801219c773f0437.jpg@2o.jpg&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">const</span> <span class="token class-name">Car</span><span class="token punctuation">(</span>
      name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;车子2&#39;</span></span><span class="token punctuation">,</span>
      imageUrl<span class="token punctuation">:</span>
          <span class="token string-literal"><span class="token string">&#39;https://img.zcool.cn/community/01903158b7a4e7a801219c773f0437.jpg@2o.jpg&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">const</span> <span class="token class-name">Car</span><span class="token punctuation">(</span>
      name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;车子3&#39;</span></span><span class="token punctuation">,</span>
      imageUrl<span class="token punctuation">:</span>
          <span class="token string-literal"><span class="token string">&#39;https://img.zcool.cn/community/01903158b7a4e7a801219c773f0437.jpg@2o.jpg&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">const</span> <span class="token class-name">Car</span><span class="token punctuation">(</span>
      name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;车子4&#39;</span></span><span class="token punctuation">,</span>
      imageUrl<span class="token punctuation">:</span>
          <span class="token string-literal"><span class="token string">&#39;https://img.zcool.cn/community/01903158b7a4e7a801219c773f0437.jpg@2o.jpg&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">const</span> <span class="token class-name">Car</span><span class="token punctuation">(</span>
      name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;车子4&#39;</span></span><span class="token punctuation">,</span>
      imageUrl<span class="token punctuation">:</span>
          <span class="token string-literal"><span class="token string">&#39;https://img.zcool.cn/community/01903158b7a4e7a801219c773f0437.jpg@2o.jpg&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一个带有底部导航的页面切换demo-仿vx" tabindex="-1"><a class="header-anchor" href="#一个带有底部导航的页面切换demo-仿vx" aria-hidden="true">#</a> 一个带有底部导航的页面切换Demo（仿vx）</h2><p>main.dart提供了底部导航，通过修改 _currentIndex的值实现不同的底部导航按钮的高亮显示，body的内容通过 _pages 的列表根据不同的 _currentIndex 的值实现 widget 的切换</p><p>find.dart里面的 _DiscoverCell 类里面有 widget属性 可以获取到 DiscoverCell 类里面的属性</p><h3 id="main-dart" tabindex="-1"><a class="header-anchor" href="#main-dart" aria-hidden="true">#</a> main.dart</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flur/tabBar/connect.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flur/tabBar/find.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flur/tabBar/mine.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flur/tabBar/rootWedget.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">runApp</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token class-name">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">super</span><span class="token punctuation">.</span>key<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// This widget is the root of your application.</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">MaterialApp</span><span class="token punctuation">(</span>
      title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;我的一个flutter&#39;</span></span><span class="token punctuation">,</span>
      <span class="token comment">// 是否显示 debug 标识</span>
      debugShowCheckedModeBanner<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      theme<span class="token punctuation">:</span> <span class="token class-name">ThemeData</span><span class="token punctuation">(</span>
          colorScheme<span class="token punctuation">:</span> <span class="token class-name">ColorScheme</span><span class="token punctuation">.</span><span class="token function">fromSeed</span><span class="token punctuation">(</span>seedColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>deepPurple<span class="token punctuation">)</span><span class="token punctuation">,</span>
          useMaterial3<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token comment">// 修改点击底部导航的点击效果</span>
          highlightColor<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token function">fromRGBO</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          splashColor<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token function">fromRGBO</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      home<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">MyHomePage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MyHomePage</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">MyHomePage</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">super</span><span class="token punctuation">.</span>key<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MyHomePage</span><span class="token punctuation">&gt;</span></span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">_MyHomePageState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _MyHomePageState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MyHomePage</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token comment">// 选中的底部导航</span>
  int _currentIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token comment">// 选中的底部导航切换的widget</span>
  <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Widget</span><span class="token punctuation">&gt;</span></span> _pages <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token keyword">const</span> <span class="token function">rootWidget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">const</span> <span class="token function">connectWidget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">const</span> <span class="token function">findWidget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">const</span> <span class="token function">mineWidget</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
        <span class="token comment">// appBar: AppBar(</span>
        <span class="token comment">//   backgroundColor: const Color(0xFF73D2FF),</span>
        <span class="token comment">//   title: const Text(&#39;hello flutter&#39;),</span>
        <span class="token comment">//   centerTitle: true, // 标题居中</span>
        <span class="token comment">// ),</span>
        <span class="token comment">// bottomNavigationBar 底部导航</span>
        bottomNavigationBar<span class="token punctuation">:</span> <span class="token class-name">BottomNavigationBar</span><span class="token punctuation">(</span>
          type<span class="token punctuation">:</span> <span class="token class-name">BottomNavigationBarType</span><span class="token punctuation">.</span>fixed<span class="token punctuation">,</span>
          fixedColor<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>green<span class="token punctuation">,</span>
          items<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token punctuation">[</span>
            <span class="token class-name">BottomNavigationBarItem</span><span class="token punctuation">(</span>
              icon<span class="token punctuation">:</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>home<span class="token punctuation">)</span><span class="token punctuation">,</span>
              label<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;首页&#39;</span></span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">BottomNavigationBarItem</span><span class="token punctuation">(</span>
              icon<span class="token punctuation">:</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>favorite<span class="token punctuation">)</span><span class="token punctuation">,</span>
              label<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;通讯录&#39;</span></span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">BottomNavigationBarItem</span><span class="token punctuation">(</span>
              icon<span class="token punctuation">:</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>settings<span class="token punctuation">)</span><span class="token punctuation">,</span>
              label<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;发现&#39;</span></span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token comment">//  使用自定义的底部导航栏图片</span>
            <span class="token class-name">BottomNavigationBarItem</span><span class="token punctuation">(</span>
              <span class="token comment">// 默认的 icon 样式</span>
              icon<span class="token punctuation">:</span> <span class="token class-name">Image</span><span class="token punctuation">(</span>
                image<span class="token punctuation">:</span> <span class="token class-name">AssetImage</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;images/my.png&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                width<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                height<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
               <span class="token comment">// 高亮时的 icon 样式</span>
              activeIcon<span class="token punctuation">:</span> <span class="token class-name">Image</span><span class="token punctuation">(</span>
                image<span class="token punctuation">:</span> <span class="token class-name">AssetImage</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;images/mineHeader.png&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                width<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                height<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
              label<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;我的&#39;</span></span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          currentIndex<span class="token punctuation">:</span> _currentIndex<span class="token punctuation">,</span>
          <span class="token comment">// 点击切换选中的导航栏</span>
          onTap<span class="token punctuation">:</span> <span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              _currentIndex <span class="token operator">=</span> index<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        body<span class="token punctuation">:</span> _pages<span class="token punctuation">[</span>_currentIndex<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rootwidget-dart" tabindex="-1"><a class="header-anchor" href="#rootwidget-dart" aria-hidden="true">#</a> rootWidget.dart</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> rootWidget <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function">rootWidget</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">super</span><span class="token punctuation">.</span>key<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span>rootWidget<span class="token punctuation">&gt;</span></span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">_MyWidgetState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _MyWidgetState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span>rootWidget<span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ignore: dead_code</span>
    <span class="token keyword">return</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
      appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>
        backgroundColor<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF73D2FF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        title<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;首页&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        centerTitle<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 标题居中</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      body<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Center</span><span class="token punctuation">(</span>
        child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;首页&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="connectwidget-dart" tabindex="-1"><a class="header-anchor" href="#connectwidget-dart" aria-hidden="true">#</a> connectWidget.dart</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> connectWidget <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function">connectWidget</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">super</span><span class="token punctuation">.</span>key<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span>connectWidget<span class="token punctuation">&gt;</span></span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">_MyWidgetState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _MyWidgetState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span>connectWidget<span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
      appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>
        backgroundColor<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF73D2FF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        title<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;通讯录&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        centerTitle<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 标题居中</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      body<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Center</span><span class="token punctuation">(</span>
        child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;通讯录&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="find-dart-发现页面" tabindex="-1"><a class="header-anchor" href="#find-dart-发现页面" aria-hidden="true">#</a> find.dart (发现页面)</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// ignore_for_file: unnecessary_null_comparison</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flur/tabBar/findChild.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> findWidget <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function">findWidget</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">super</span><span class="token punctuation">.</span>key<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span>findWidget<span class="token punctuation">&gt;</span></span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">_findWidgetState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _findWidgetState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span>findWidget<span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">Color</span> _themeColor <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token function">fromRGBO</span><span class="token punctuation">(</span><span class="token number">220</span><span class="token punctuation">,</span> <span class="token number">220</span><span class="token punctuation">,</span> <span class="token number">220</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
        appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>
          backgroundColor<span class="token punctuation">:</span> _themeColor<span class="token punctuation">,</span>
          title<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;发现&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          centerTitle<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 标题居中</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        body<span class="token punctuation">:</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>
            height<span class="token punctuation">:</span> <span class="token number">800</span><span class="token punctuation">,</span>
            color<span class="token punctuation">:</span> _themeColor<span class="token punctuation">,</span>
            child<span class="token punctuation">:</span> <span class="token class-name">ListView</span><span class="token punctuation">(</span>
              children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token keyword">const</span> <span class="token class-name">DiscoverCell</span><span class="token punctuation">(</span>
                  title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;欢迎1111&#39;</span></span><span class="token punctuation">,</span>
                  subTitle<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;副标题&#39;</span></span><span class="token punctuation">,</span>
                  imageName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;images/mineHeader.png&#39;</span></span><span class="token punctuation">,</span>
                  subImageName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;images/mineHeader.png&#39;</span></span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token keyword">const</span> <span class="token class-name">SizedBox</span><span class="token punctuation">(</span>height<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token keyword">const</span> <span class="token class-name">DiscoverCell</span><span class="token punctuation">(</span>
                  title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;欢迎22&#39;</span></span><span class="token punctuation">,</span>
                  subTitle<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;副标题&#39;</span></span><span class="token punctuation">,</span>
                  imageName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;images/mineHeader.png&#39;</span></span><span class="token punctuation">,</span>
                  subImageName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;images/mineHeader.png&#39;</span></span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name">Container</span><span class="token punctuation">(</span>
                  color<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token function">fromARGB</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">223</span><span class="token punctuation">,</span> <span class="token number">253</span><span class="token punctuation">,</span> <span class="token number">224</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                  height<span class="token punctuation">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token keyword">const</span> <span class="token class-name">DiscoverCell</span><span class="token punctuation">(</span>
                  title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;欢迎33&#39;</span></span><span class="token punctuation">,</span>
                  subTitle<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;副标题&#39;</span></span><span class="token punctuation">,</span>
                  imageName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;images/mineHeader.png&#39;</span></span><span class="token punctuation">,</span>
                  subImageName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;images/mineHeader.png&#39;</span></span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token keyword">const</span> <span class="token class-name">SizedBox</span><span class="token punctuation">(</span>height<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token keyword">const</span> <span class="token class-name">DiscoverCell</span><span class="token punctuation">(</span>
                  title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;欢迎4&#39;</span></span><span class="token punctuation">,</span>
                  subTitle<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;副标题&#39;</span></span><span class="token punctuation">,</span>
                  imageName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;images/mineHeader.png&#39;</span></span><span class="token punctuation">,</span>
                  subImageName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;images/mineHeader.png&#39;</span></span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 有状态的widget</span>
<span class="token keyword">class</span> <span class="token class-name">DiscoverCell</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> title<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> subTitle<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> imageName<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span> subImageName<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token class-name">DiscoverCell</span><span class="token punctuation">(</span>
      <span class="token punctuation">{</span><span class="token keyword">super</span><span class="token punctuation">.</span>key<span class="token punctuation">,</span>
      required <span class="token keyword">this</span><span class="token punctuation">.</span>title<span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>subTitle <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;&#39;</span></span><span class="token punctuation">,</span>
      required <span class="token keyword">this</span><span class="token punctuation">.</span>imageName<span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>subImageName <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;&#39;</span></span><span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token comment">// assert提醒，可以没有</span>
      <span class="token punctuation">:</span> <span class="token keyword">assert</span><span class="token punctuation">(</span>title <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;title不能为空&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">assert</span><span class="token punctuation">(</span>imageName <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;imageName不能为空&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DiscoverCell</span><span class="token punctuation">&gt;</span></span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">_DiscoverCell</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _DiscoverCell <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DiscoverCell</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token class-name">Color</span> _currentColor <span class="token operator">=</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>white<span class="token punctuation">;</span> <span class="token comment">//控制手势操作时的颜色</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">GestureDetector</span><span class="token punctuation">(</span>
        onTap<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 跳转到findChildWidget，新页面，并且携带参数 title</span>
          <span class="token class-name">Navigator</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
              <span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">MaterialPageRoute</span><span class="token punctuation">(</span>builder<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span>widget<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token function">findChildWidget</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> widget<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              _currentColor <span class="token operator">=</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>white<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        onTapDown<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">TapDownDetails</span> details<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;点下了&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            _currentColor <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token function">fromARGB</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">245</span><span class="token punctuation">,</span> <span class="token number">242</span><span class="token punctuation">,</span> <span class="token number">242</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        onTapCancel<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;点下离开&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            _currentColor <span class="token operator">=</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>white<span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        child<span class="token punctuation">:</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>
          color<span class="token punctuation">:</span> _currentColor<span class="token punctuation">,</span>
          child<span class="token punctuation">:</span> <span class="token class-name">Row</span><span class="token punctuation">(</span>
            <span class="token comment">// 主轴方向</span>
            mainAxisAlignment<span class="token punctuation">:</span> <span class="token class-name">MainAxisAlignment</span><span class="token punctuation">.</span>spaceBetween<span class="token punctuation">,</span>
            children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token comment">// left</span>
              <span class="token class-name">Container</span><span class="token punctuation">(</span>
                height<span class="token punctuation">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
                padding<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                child<span class="token punctuation">:</span> <span class="token class-name">Row</span><span class="token punctuation">(</span>
                  children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
                    <span class="token keyword">const</span> <span class="token class-name">Image</span><span class="token punctuation">(</span>
                      image<span class="token punctuation">:</span> <span class="token class-name">AssetImage</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;images/mineHeader.png&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                      width<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
                      height<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
                    <span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token comment">// 间隙</span>
                    <span class="token keyword">const</span> <span class="token class-name">SizedBox</span><span class="token punctuation">(</span>
                      width<span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
                    <span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token class-name">Text</span><span class="token punctuation">(</span>widget<span class="token punctuation">.</span>title<span class="token punctuation">)</span>
                  <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token comment">//right</span>
              <span class="token class-name">Container</span><span class="token punctuation">(</span>
                height<span class="token punctuation">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
                padding<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                child<span class="token punctuation">:</span> <span class="token class-name">Row</span><span class="token punctuation">(</span>
                  children<span class="token punctuation">:</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Widget</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>widget<span class="token punctuation">.</span>subTitle <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                      <span class="token class-name">Text</span><span class="token punctuation">(</span>widget<span class="token punctuation">.</span>subTitle<span class="token punctuation">)</span>
                    <span class="token keyword">else</span>
                      <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token comment">// 间隙</span>
                    <span class="token keyword">const</span> <span class="token class-name">SizedBox</span><span class="token punctuation">(</span>
                      width<span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
                    <span class="token punctuation">)</span><span class="token punctuation">,</span>
                    widget<span class="token punctuation">.</span>subImageName <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> widget<span class="token punctuation">.</span>subImageName <span class="token operator">!=</span> <span class="token string-literal"><span class="token string">&#39;&#39;</span></span>
                        <span class="token operator">?</span> <span class="token class-name">Image</span><span class="token punctuation">.</span><span class="token function">asset</span><span class="token punctuation">(</span>widget<span class="token punctuation">.</span>subImageName<span class="token punctuation">)</span>
                        <span class="token punctuation">:</span> <span class="token class-name">Container</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token comment">// Image(image: image)</span>
                    <span class="token keyword">const</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span>
                      <span class="token class-name">Icons</span><span class="token punctuation">.</span>arrow_forward_ios<span class="token punctuation">,</span>
                      size<span class="token punctuation">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
                    <span class="token punctuation">)</span>
                  <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="minewidget-dart" tabindex="-1"><a class="header-anchor" href="#minewidget-dart" aria-hidden="true">#</a> mineWidget.dart</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> mineWidget <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function">mineWidget</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">super</span><span class="token punctuation">.</span>key<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span>mineWidget<span class="token punctuation">&gt;</span></span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">_MyWidgetState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _MyWidgetState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span>mineWidget<span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
      appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>
        backgroundColor<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF73D2FF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        title<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;我的&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        centerTitle<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 标题居中</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      body<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Center</span><span class="token punctuation">(</span>
        child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;我的&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="flutter获取屏幕宽高" tabindex="-1"><a class="header-anchor" href="#flutter获取屏幕宽高" aria-hidden="true">#</a> flutter获取屏幕宽高</h2>`,19),Z={href:"https://www.jianshu.com/p/154991a223e2",target:"_blank",rel:"noopener noreferrer"},J=e(`<h3 id="_1-系统提供的方法" tabindex="-1"><a class="header-anchor" href="#_1-系统提供的方法" aria-hidden="true">#</a> 1.系统提供的方法</h3><p>这个方法可以得到当前控件的宽，高</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">final</span> size <span class="token operator">=</span><span class="token class-name">MediaQuery</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span>size<span class="token punctuation">;</span>
<span class="token keyword">final</span> width <span class="token operator">=</span>size<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
<span class="token keyword">final</span> height <span class="token operator">=</span>size<span class="token punctuation">.</span>height<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-使用起来最简单的方法" tabindex="-1"><a class="header-anchor" href="#_2-使用起来最简单的方法" aria-hidden="true">#</a> 2.使用起来最简单的方法</h3><p>使用这个方法，能够快速的得到屏幕的宽高</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;dart:ui&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">final</span> width <span class="token operator">=</span> window<span class="token punctuation">.</span>physicalSize<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
<span class="token keyword">final</span> height <span class="token operator">=</span> window<span class="token punctuation">.</span>physicalSize<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本widget-基本使用设置" tabindex="-1"><a class="header-anchor" href="#基本widget-基本使用设置" aria-hidden="true">#</a> 基本widget，基本使用设置</h2><h3 id="container" tabindex="-1"><a class="header-anchor" href="#container" aria-hidden="true">#</a> Container</h3><p>使用示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> Container(
            alignment: Alignment.centerLeft,
            padding: const EdgeInsets.only(left: 10),
            color: wechatThemeColor,
            height:  20 ,
            child: Text(  &quot;微信号：1234567&quot;,    style: TextStyle(color: Colors.grey))
        ),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>container里面文字居左</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alignment: Alignment.centerLeft,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="text-flutter文本显示和样式" tabindex="-1"><a class="header-anchor" href="#text-flutter文本显示和样式" aria-hidden="true">#</a> Text(Flutter文本显示和样式)</h3>`,13),Y={href:"https://blog.csdn.net/ruoshui_t/article/details/90409586",target:"_blank",rel:"noopener noreferrer"},nn=e(`<p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Text(  &quot;微信号：1234567&quot;,    style: TextStyle(color: Colors.grey))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>文字超出显示省略号</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Text(&#39;12345&#39;,
      maxLines: 1,     //最多显示几行
      overflow: TextOverflow.ellipsis,       // 超出显示省略号
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图片的使用" tabindex="-1"><a class="header-anchor" href="#图片的使用" aria-hidden="true">#</a> 图片的使用</h3>`,5),sn={href:"https://juejin.cn/post/6975697905499783205",target:"_blank",rel:"noopener noreferrer"},an={href:"https://www.jianshu.com/p/9b4d79a038c6",target:"_blank",rel:"noopener noreferrer"},tn=e(`<p>项目根目录下创建 images 文件夹用于存放图片文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Image(
       image: AssetImage(&#39;images/mineHeader.png&#39;),
       width: 20,
       height: 20,
),
Image(
       image: NetworkImage(imageUrl)，
       width: 20,
       height: 20,
),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用到的图片文件路径需要在 pubspec.yaml 中进行配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flutter:
  assets:
    - images/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flutter颜色设置" tabindex="-1"><a class="header-anchor" href="#flutter颜色设置" aria-hidden="true">#</a> flutter颜色设置</h3>`,5),en={href:"https://www.jianshu.com/p/131e9b7bf572",target:"_blank",rel:"noopener noreferrer"},pn=e(`<div class="language-undefined line-numbers-mode" data-ext="undefined"><pre class="language-undefined"><code>1、Color c1 = Color(0xFF3CAAFA);
2、Color c2 = Color.fromRGBO(60, 170, 250, 1);
3、Color c3 = Color.fromARGB(255, 60, 170, 250);
4、Color c5 = Colors.blue;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>1、<code>Color(int value)</code><strong>Color(0xFF3CAAFA)</strong>,value接收的是一个十六进制（0x开头),FF表示的是十六进制透明度(00-FF),3CAAFA是十六进制色值。</li><li>2、<code>Color.fromRGBO(int r, int g, int b, double opacity)</code> *<strong>Color.fromRGBO(60, 170, 250, 1)*</strong>，r、g、b分别表示red、green、blue，常规的红绿蓝三色，取值范围为0-255，opacity表示透明度，取值0.0-1.0。</li><li>3、<code>Color.fromARGB(int a, int r, int g, int b)</code> *<strong>Color.fromARGB(255, 60, 170, 250)*</strong>,a表示透明度，取值0-255，rgb同上一样。</li><li>4、<code>Colors._()</code> Colors类定义了很多颜色，可以直接使用，例如 Colors.blue,其实就是第一种***Color(int value)***的封装。</li></ul><h3 id="icon图标" tabindex="-1"><a class="header-anchor" href="#icon图标" aria-hidden="true">#</a> Icon图标</h3>`,3),cn={href:"https://fluttericon.cn/",target:"_blank",rel:"noopener noreferrer"},on=e(`<p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>             Icon(
                Icons.audiotrack,
                color: Colors.green,
                size: 30.0,
              ),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gesturedetector处理用户手势操作" tabindex="-1"><a class="header-anchor" href="#gesturedetector处理用户手势操作" aria-hidden="true">#</a> <strong>GestureDetector处理用户手势操作</strong></h3>`,3),ln={href:"https://juejin.cn/post/7009859979096096804#heading-4",target:"_blank",rel:"noopener noreferrer"},un=e(`<p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>            GestureDetector(
              // 点击触发
              onTap: () {
                print(&quot;添加联系人&quot;);
                // 页面跳转
                Navigator.of(context).push(MaterialPageRoute(
                    builder: (context) =&gt;
                        const findChildWidget(title: &quot;添加联系人&quot;)));
              },
              child: Container(
                margin: const EdgeInsets.only(right: 10),
                child: const Icon(
                  Icons.person_add_alt_1_rounded,
                  size: 30.0,
                ),
              ))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="navigator-导航-页面跳转" tabindex="-1"><a class="header-anchor" href="#navigator-导航-页面跳转" aria-hidden="true">#</a> Navigator 导航 页面跳转</h3>`,3),rn={href:"https://juejin.cn/post/6873084082553782286",target:"_blank",rel:"noopener noreferrer"},dn=e(`<p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 页面跳转  跳转到 findChildWidget  携带的参数为 title
                Navigator.of(context).push(MaterialPageRoute(
                    builder: (context) =&gt;
                        const findChildWidget(title: &quot;添加联系人&quot;)));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="listview-列表组件之一" tabindex="-1"><a class="header-anchor" href="#listview-列表组件之一" aria-hidden="true">#</a> ListView 列表组件之一</h3>`,3),kn={href:"https://juejin.cn/post/6971076180317470728",target:"_blank",rel:"noopener noreferrer"},vn={href:"https://flutter.cn/docs/cookbook/lists/basic-list",target:"_blank",rel:"noopener noreferrer"},mn=e(`<p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ListView(
  children: const &lt;Widget&gt;[
    ListTile(
      leading: Icon(Icons.map),
      title: Text(&#39;Map&#39;),
    ),
    ListTile(
      leading: Icon(Icons.photo_album),
      title: Text(&#39;Album&#39;),
    ),
    ListTile(
      leading: Icon(Icons.phone),
      title: Text(&#39;Phone&#39;),
    ),
  ],
),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="popupmenubutton" tabindex="-1"><a class="header-anchor" href="#popupmenubutton" aria-hidden="true">#</a> PopupMenuButton</h3><p>appBar 右上角的按钮</p>`,4),bn={href:"https://juejin.cn/post/6844903906938634248",target:"_blank",rel:"noopener noreferrer"},gn=e(`<p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>appBar: AppBar(
        backgroundColor: const Color(0xFF73D2FF),
        title: const Text(&#39;首页&#39;),
        centerTitle: true, // 标题居中
        actions: [
          Container(
            margin: const EdgeInsets.only(right: 10),
            child: PopupMenuButton(
              color: Colors.white,
              offset: const Offset(0, 40),
              itemBuilder: (BuildContext context) {
                return &lt;PopupMenuItem&lt;String&gt;&gt;[
                  const PopupMenuItem(child: Text(&#39;发起群聊1&#39;)),
                  const PopupMenuItem(child: Text(&#39;发起群聊2&#39;)),
                  const PopupMenuItem(child: Text(&#39;发起群聊3&#39;))
                ];
              },
              child: const Icon(
                Icons.add_circle_outline,
                size: 30.0,
              ),
            ),
          )
        ],
      ),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2>`,3),hn={href:"https://juejin.cn/post/7023254324851507214",target:"_blank",rel:"noopener noreferrer"},fn=n("h2",{id:"看到的开源项目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#看到的开源项目","aria-hidden":"true"},"#"),s(" 看到的开源项目")],-1),_n={href:"https://mp.weixin.qq.com/s/gGZFyEOn1r2GsQO07LTxWQ",target:"_blank",rel:"noopener noreferrer"},wn=n("h2",{id:"网络请求",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#网络请求","aria-hidden":"true"},"#"),s(" 网络请求")],-1),yn=n("h3",{id:"制造接口数据",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#制造接口数据","aria-hidden":"true"},"#"),s(" 制造接口数据")],-1),xn={href:"http://rap2.taobao.org/repository/joined?user=239769",target:"_blank",rel:"noopener noreferrer"},Cn={href:"http://mockjs.com/",target:"_blank",rel:"noopener noreferrer"},Sn={href:"https://randomuser.me/documentation#howto",target:"_blank",rel:"noopener noreferrer"},Bn=n("h3",{id:"http",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#http","aria-hidden":"true"},"#"),s(" http")],-1),jn={href:"https://pub.dev/packages/http",target:"_blank",rel:"noopener noreferrer"},In={href:"https://flutter.cn/docs/cookbook/networking/fetch-data",target:"_blank",rel:"noopener noreferrer"},Fn=e(`<p>安装包： flutter pub add http</p><h4 id="我使用的dart页面示例" tabindex="-1"><a class="header-anchor" href="#我使用的dart页面示例" aria-hidden="true">#</a> 我使用的dart页面示例：</h4><p>接口返回虚拟数据：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;chatList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;imageUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://randomuser.me/api/portraits/men/49.jpg&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;曹明&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;步安保集西关别八解那看局总须由心基。离接思受被体易部之内做保器区广具。并切名便目子信才观处后带建证。称例儿带些难不极下我斯己求然一难半。&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;imageUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://randomuser.me/api/portraits/men/38.jpg&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;田平&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;往参给参领相须越面调支关主后比。关命产议断华力历现价导员维小太参关有。国导会名世消六身划工通外油题最他第。&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取数据</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token comment">// 导包</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:http/http.dart&#39;</span></span> <span class="token operator">as</span> http<span class="token punctuation">;</span>
<span class="token comment">// json转换</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;dart:convert&#39;</span></span><span class="token punctuation">;</span>

 <span class="token comment">// Map 转 json   json.encode( Map );    </span>
 <span class="token comment">// json 转 Map   json.decode( Map );     </span>

<span class="token keyword">class</span> <span class="token class-name">Chat</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span><span class="token operator">?</span> name<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span><span class="token operator">?</span> message<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">String</span><span class="token operator">?</span> imageUrl<span class="token punctuation">;</span>

  <span class="token class-name">Chat</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>imageUrl<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 工厂构造</span>
  <span class="token keyword">factory</span> <span class="token class-name">Chat</span><span class="token punctuation">.</span><span class="token function">fromMap</span><span class="token punctuation">(</span><span class="token class-name">Map</span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Chat</span><span class="token punctuation">(</span>
      name<span class="token punctuation">:</span> map<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;name&#39;</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      message<span class="token punctuation">:</span> map<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;message&#39;</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      imageUrl<span class="token punctuation">:</span> map<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;imageUrl&#39;</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token function">formMap</span><span class="token punctuation">(</span><span class="token class-name">String</span> body<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 网络请求是异步请求，注意  async await 的使用</span>
<span class="token function">getDatas</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> url <span class="token operator">=</span>
        <span class="token class-name">Uri</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;http://rap2api.taobao.org/app/mock/315841/getMessageList&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">final</span> response <span class="token operator">=</span> <span class="token keyword">await</span> http<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// print(&#39;Response status: \${response.statusCode}&#39;);</span>
    <span class="token comment">// print(&#39;Response body: \${response.body}&#39;);</span>
    <span class="token comment">// json 转 Map   再转模型数据</span>
    <span class="token keyword">final</span> chatModle <span class="token operator">=</span> <span class="token class-name">Chat</span><span class="token punctuation">.</span><span class="token function">fromMap</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于获取数据是异步的，实现异步渲染，getDatas 还要进一步修改</p>`,7),Tn={href:"https://api.flutter-io.cn/flutter/dart-async/Future-class.html",target:"_blank",rel:"noopener noreferrer"},Wn=n("code",null,"Future",-1),qn=e(`<div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code> <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Chat</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">getDatas</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> response <span class="token operator">=</span> <span class="token keyword">await</span> http<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span>
        <span class="token class-name">Uri</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;http://rap2api.taobao.org/app/mock/315841/getMessageList&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>statusCode <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 获取响应数据，转成map类型</span>
      <span class="token keyword">final</span> responseBody <span class="token operator">=</span> json<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// map作为 list的遍历方法</span>
      <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Chat</span><span class="token punctuation">&gt;</span></span> chatList <span class="token operator">=</span> responseBody<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;chatList&#39;</span></span><span class="token punctuation">]</span>
          <span class="token punctuation">.</span>map<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Chat</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token class-name">Chat</span><span class="token punctuation">.</span><span class="token function">fromMap</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> chatList<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// If the server did not return a 200 OK response,</span>
      <span class="token comment">// then throw an exception.</span>
      <span class="token keyword">throw</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span>
          <span class="token string-literal"><span class="token string">&#39;statusCode: </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">response<span class="token punctuation">.</span>statusCode</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span> <span class="token string-literal"><span class="token string">&#39;Failed to load chat&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="数据渲染-futurebuilder-渲染" tabindex="-1"><a class="header-anchor" href="#数据渲染-futurebuilder-渲染" aria-hidden="true">#</a> 数据渲染（FutureBuilder 渲染）</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> Container(
          child: FutureBuilder(
              future: getDatas(), //这里发起数据请求
              builder: (BuildContext context, AsyncSnapshot snapshot) {
                print(snapshot.data); // 获取到的数据
                print(snapshot.connectionState);  //获取数据状态
                // 正在加载
                if (snapshot.connectionState == ConnectionState.waiting) {
                  return const Center(
                    child: Text(&quot;加载中&quot;),
                  );
                }
                // 加载完毕
                return ListView(
                  children: snapshot.data.map&lt;Widget&gt;((Chat item) {
                    return return ListTile(
                      title: Text(
                        item.name,
                      ),
                      subtitle: Text(item.message,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: const TextStyle(
                              fontSize: 10, color: Colors.blueGrey)),
                      leading: CircleAvatar(
                        backgroundImage: NetworkImage(item.imageUrl),
                      ),
                    );
                  }).toList(),
                );
              }),
        )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="数据获取后渲染-listview渲染" tabindex="-1"><a class="header-anchor" href="#数据获取后渲染-listview渲染" aria-hidden="true">#</a> 数据获取后渲染（ListView渲染）</h5><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Chat</span><span class="token punctuation">&gt;</span></span> _datas <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO: implement initState</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 获取网络数据</span>
    <span class="token function">getDatas</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Chat</span><span class="token punctuation">&gt;</span></span> datas<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
              <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                _datas <span class="token operator">=</span> datas<span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">catchError</span><span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token function">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">whenComplete</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;获取数据完毕&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  
  
  <span class="token comment">// 渲染数据</span>
  <span class="token class-name">Container</span><span class="token punctuation">(</span>
                child<span class="token punctuation">:</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>
                    child<span class="token punctuation">:</span> _datas<span class="token punctuation">.</span>isEmpty
                        <span class="token operator">?</span> <span class="token keyword">const</span> <span class="token class-name">Center</span><span class="token punctuation">(</span>child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;loading...&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                        <span class="token punctuation">:</span> <span class="token class-name">ListView</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span>
                            itemCount<span class="token punctuation">:</span> _datas<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
                            itemBuilder<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">,</span> int index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                              <span class="token keyword">return</span> <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
                                title<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>
                                  _datas<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span>
                                <span class="token punctuation">)</span><span class="token punctuation">,</span>
                                subtitle<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>_datas<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>message<span class="token punctuation">,</span>
                                    maxLines<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                                    overflow<span class="token punctuation">:</span> <span class="token class-name">TextOverflow</span><span class="token punctuation">.</span>ellipsis<span class="token punctuation">,</span>
                                    style<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>
                                        fontSize<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>blueGrey<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                leading<span class="token punctuation">:</span> <span class="token class-name">CircleAvatar</span><span class="token punctuation">(</span>
                                  backgroundImage<span class="token punctuation">:</span>
                                      <span class="token class-name">NetworkImage</span><span class="token punctuation">(</span>_datas<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>imageUrl<span class="token punctuation">)</span><span class="token punctuation">,</span>
                                <span class="token punctuation">)</span><span class="token punctuation">,</span>
                              <span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dio" tabindex="-1"><a class="header-anchor" href="#dio" aria-hidden="true">#</a> dio</h3>`,6),Dn={href:"https://github.com/cfug/dio/blob/main/dio/README-ZH.md",target:"_blank",rel:"noopener noreferrer"},An={href:"https://book.flutterchina.club/chapter11/dio.html",target:"_blank",rel:"noopener noreferrer"},Mn=n("h2",{id:"mixins-混入",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mixins-混入","aria-hidden":"true"},"#"),s(" Mixins 混入")],-1),Nn=n("p",null,"目的：给一个类增加功能。是多继承。（我还不太清楚）",-1),Ln={href:"https://juejin.cn/post/7132651702980706312#heading-4",target:"_blank",rel:"noopener noreferrer"},En=n("h2",{id:"异常处理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#异常处理","aria-hidden":"true"},"#"),s(" 异常处理")],-1),zn=n("h2",{id:"异步处理-多线程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#异步处理-多线程","aria-hidden":"true"},"#"),s(" 异步处理 多线程")],-1),Rn={href:"https://juejin.cn/post/7039115158261596191",target:"_blank",rel:"noopener noreferrer"},Hn=n("h2",{id:"flutter-生命周期",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#flutter-生命周期","aria-hidden":"true"},"#"),s(" flutter 生命周期")],-1),Pn={href:"https://juejin.cn/post/7023254324851507214",target:"_blank",rel:"noopener noreferrer"},Un=n("h2",{id:"ui库",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ui库","aria-hidden":"true"},"#"),s(" UI库")],-1),Gn={href:"https://www.getwidget.dev/",target:"_blank",rel:"noopener noreferrer"};function On(Vn,$n){const a=o("ExternalLinkIcon");return c(),i("div",null,[r,n("p",null,[n("a",d,[s("第二版序 | 《Flutter实战·第二版》 (flutterchina.club)"),t(a)])]),n("p",null,[n("a",k,[s("万字长文，为你送上全网最全Flutter学习资料！ - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[s("官网："),n("a",v,[s("Flutter 开发文档 - Flutter 中文文档 - Flutter 中文开发者网站 - Flutter"),t(a)])]),n("p",null,[n("a",m,[s("http://www.laomengit.com/guide/introduction/mobile_system.html"),t(a)])]),b,n("p",null,[s("视频学习："),n("a",g,[s("发送网络请求_哔哩哔哩_bilibili"),t(a)])]),n("p",null,[n("a",h,[s("周糖果 的个人主页 - 搜索 - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[n("a",f,[s("Dart 语言开发文档 | Dart"),t(a)])]),_,n("p",null,[n("a",w,[s("Dart packages (pub.dev)"),t(a)])]),y,n("p",null,[n("a",x,[s("【Flutter 实战】pubspec.yaml 配置文件详解 - 掘金 (juejin.cn)"),t(a)])]),C,n("p",null,[s("下载："),n("a",S,[s("Flutter SDK archive | Flutter"),t(a)])]),B,j,I,n("p",null,[n("a",F,[s("https://blog.csdn.net/qq_43231248/article/details/132591061"),t(a)])]),T,W,n("p",null,[n("a",q,[s("Android实战——正确配置 XXX_HOME 环境变量_androidhome配置-CSDN博客"),t(a)])]),D,n("p",null,[n("a",A,[s("vscode 启动与调试 flutter 项目 - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[n("a",M,[s("flutter+vscode+独立运行AVD 环境搭建(新手入坑记录)-CSDN博客"),t(a)])]),n("p",null,[n("a",N,[s("初识flutter，遇到Android sdkmanager tool not found-CSDN博客"),t(a)])]),n("p",null,[n("a",L,[s("记坑：flutter doctor --android-licenses 【报错】Exception in thread “main“ Android sdkmanager tool was foun_万里江山似锦绣的博客-CSDN博客"),t(a)])]),E,n("p",null,[n("a",z,[s("https://blog.csdn.net/weixin_43840202/article/details/110353440"),t(a)])]),R,H,n("p",null,[n("a",P,[s("https://services.gradle.org/distributions/"),t(a)]),s(" 镜像网站： "),n("a",U,[s("https://mirrors.cloud.tencent.com/gradle/"),t(a)])]),G,n("p",null,[n("a",O,[s("Dart 中文教程_w3cschool"),t(a)])]),V,n("p",null,[s("Flutter渲染原理解析："),n("a",$,[s("https://zhuanlan.zhihu.com/p/135969091"),t(a)])]),K,n("p",null,[n("a",Q,[s("Flutter 控件 AppBar的一些参数设置_flutter appbar 参数-CSDN博客"),t(a)])]),X,n("p",null,[n("a",Z,[s("flutter 获取屏幕宽高 - 简书 (jianshu.com)"),t(a)])]),J,n("p",null,[n("a",Y,[s("Flutter Text(Flutter文本显示和样式)_flutter text strutstyle-CSDN博客"),t(a)])]),nn,n("p",null,[n("a",sn,[s("Flutter 中 Image 的 5 种加载方式详解 | Flutter Widgets - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[n("a",an,[s("Flutter入门（9）：Flutter 组件之 Image、AssetImage 详解 - 简书 (jianshu.com)"),t(a)])]),tn,n("p",null,[s("常规用法 "),n("a",en,[s("Flutter颜色(Color)使用和十六进制颜色转换 - 简书 (jianshu.com)"),t(a)])]),pn,n("p",null,[n("a",cn,[s("Flutter Icon 图标网"),t(a)])]),on,n("p",null,[n("a",ln,[s("Flutter 手势系列教程---GestureDetector - 掘金 (juejin.cn)"),t(a)])]),un,n("p",null,[n("a",rn,[s("Flutter导航Navigator使用详解 - 掘金 (juejin.cn)"),t(a)])]),dn,n("p",null,[n("a",kn,[s("Flutter 中 ListView 的 4 种构建方式详解 | Flutter Widgets - 掘金 (juejin.cn)"),t(a)])]),n("p",null,[n("a",vn,[s("基础列表 - Flutter 中文文档 - Flutter 中文开发者网站 - Flutter"),t(a)])]),mn,n("p",null,[n("a",bn,[s("Flutter | 超实用简单菜单弹出框 PopupMenuButton - 掘金 (juejin.cn)"),t(a)])]),gn,n("p",null,[n("a",hn,[s("Flutter 的生命周期 - 掘金 (juejin.cn)"),t(a)])]),fn,n("p",null,[n("a",_n,[s("使用 Flutter 实现音视频剪辑项目 App (qq.com)"),t(a)])]),wn,yn,n("p",null,[n("a",xn,[s("RAP2 (taobao.org)"),t(a)])]),n("p",null,[n("a",Cn,[s("Mock.js (mockjs.com)"),t(a)]),s(" 数据生成匹配规则在这里查看")]),n("p",null,[s("虚拟数据获取，如虚拟头像，匹配规则按照路径修改 "),n("a",Sn,[s("Random User Generator | Documentation"),t(a)])]),Bn,n("p",null,[n("a",jn,[s("http | Dart Package (pub.dev)"),t(a)])]),n("p",null,[n("a",In,[s("获取网络数据 - Flutter 中文文档 - Flutter 中文开发者网站 - Flutter"),t(a)])]),Fn,n("ul",null,[n("li",null,[n("a",Tn,[Wn,t(a)]),s(" 是 Dart 用来处理异步操作的一个核心类，它通常代表一个可能的值或者将来或许会用到的错误。")])]),qn,n("p",null,[n("a",Dn,[s("dio/dio/README-ZH.md at main · cfug/dio · GitHub"),t(a)])]),n("p",null,[n("a",An,[s("11.3 Http请求库-dio | 《Flutter实战·第二版》 (flutterchina.club)"),t(a)])]),Mn,Nn,n("p",null,[n("a",Ln,[s("Flutter 语法进阶 | 深入理解混入类 mixin - 掘金 (juejin.cn)"),t(a)])]),En,zn,n("p",null,[n("a",Rn,[s("Flutter-Dart中的异步和多线程讲解 - 掘金 (juejin.cn)"),t(a)])]),Hn,n("p",null,[n("a",Pn,[s("Flutter 的生命周期 - 掘金 (juejin.cn)"),t(a)])]),Un,n("p",null,[n("a",Gn,[s("开源 Flutter UI 库，简化 Flutter 应用程序开发 - Getwidget"),t(a)])])])}const Xn=p(u,[["render",On],["__file","flutter.html.vue"]]);export{Xn as default};
