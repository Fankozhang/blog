---
icon: edit
date: 2022-01-05
tag:
  - flutter
  - native

typora-copy-images-to: ./
typora-root-url: ..\.vuepress\publixi

---

# Flutter

[第二版序 | 《Flutter实战·第二版》 (flutterchina.club)](https://book.flutterchina.club/#第二版变化)

[万字长文，为你送上全网最全Flutter学习资料！ - 掘金 (juejin.cn)](https://juejin.cn/post/7235142303274205241?searchId=202311250958591EE0D7726A46687C04CC)

官网：[Flutter 开发文档 - Flutter 中文文档 - Flutter 中文开发者网站 - Flutter](https://flutter.cn/docs)

flutter属于声名式UI

视频学习：[发送网络请求_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV19x4y1R7LE?p=36&spm_id_from=pageDriver&vd_source=f25f5a8d75a3a60d5a288f726803ec11)

## 包下载网站 

[Dart packages (pub.dev)](https://pub.dev/)

导入包：

1  flutter pub add  包名

​    示例：   flutter pub add http

2  pubspec.yaml   在 dependencies 下加入  依赖包名和版本， 运行   flutter pub get

   示例：

```
dependencies:
  flutter:
    sdk: flutter
  cupertino_icons: ^1.0.2
  http: ^1.1.2
```



## 安装

下载：[Flutter SDK archive | Flutter](https://docs.flutter.dev/release/archive?tab=windows#windows)

 双击flutter安装目录下的flutter_console.bat执行安装, 完成后就能运行flutter命令了

设置环境变量： Path 增加安装路径，目录到安装包bin的路径

### android studio

https://blog.csdn.net/qq_43231248/article/details/132591061

下载flutter插件

配置sdk ,   命令行 flutter doctor -v   第一行显示 sdk 路径

### vscode

[vscode 启动与调试 flutter 项目 - 掘金 (juejin.cn)](https://juejin.cn/post/6844904005320048653)

[flutter+vscode+独立运行AVD 环境搭建(新手入坑记录)-CSDN博客](https://blog.csdn.net/qq_40020447/article/details/105657603)

[初识flutter，遇到Android sdkmanager tool not found-CSDN博客](https://blog.csdn.net/qq_35017833/article/details/104636488)

[记坑：flutter doctor --android-licenses 【报错】Exception in thread “main“ Android sdkmanager tool was foun_万里江山似锦绣的博客-CSDN博客](https://blog.csdn.net/weixin_45862329/article/details/129861888)

![image-20231201224447731](/../public/image-20231201224447731.png)

https://blog.csdn.net/weixin_43840202/article/details/110353440

解决  找到文件   C:\Users\�ŷ�\.gradle\wrapper\dists\gradle-7.5-all\6qsw290k5lz422uaf8jf6m7co\gradle-7.5-all.zip

所有gradle版本下载地址

https://services.gradle.org/distributions/            镜像网站： https://mirrors.cloud.tencent.com/gradle/

一定要下载对应的版本，替换掉文件

最终android目录下  build.gradle如下所示

```
buildscript {
    ext.kotlin_version = '1.7.10'
    repositories {
    //    google()
       mavenCentral()
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        maven { url 'https://maven.aliyun.com/nexus/content/groups/public' }
    }

    dependencies {
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"
    }
}

allprojects {
    repositories {
        google()
        mavenCentral()
    }
}

rootProject.buildDir = '../build'
subprojects {
    project.buildDir = "${rootProject.buildDir}/${project.name}"
}
subprojects {
    project.evaluationDependsOn(':app')
}

tasks.register("clean", Delete) {
    delete rootProject.buildDir
}
```

## vscode热更新

flutter run  运行程序

在终端中，按下快捷键 R 或输入 `r` 来触发 Flutter 的热重载功能。你也可以使用 VSCode 的内置菜单栏中的“调试”选项来执行热重载。

## dart

[Dart 中文教程_w3cschool](https://www.w3cschool.cn/nxvsy/)

## 渲染

Flutter渲染原理解析：https://zhuanlan.zhihu.com/p/135969091

在Flutter中，Widget是Flutter用户界面的基本构成单元，可以说一切皆Widget。

## widget

两种 widget 类型 :    有状态 stateful      无状态的 stateless

页面基础

```dart
import 'package:flutter/material.dart';

// 一定要导入dart包，同时通过 void main（）执行runApp才能进行下一步的操作。
void main() {
  runApp(const App());
}

class App extends StatelessWidget {
  const App({Key? key}) : super(key: key);
  @override // build方法返回小部件
  Widget build(BuildContext context) {
    return MaterialApp(
        // 是否显示 debug 标识
        debugShowCheckedModeBanner: false,
        home: Scaffold(
      // appBar在app头部显示
      appBar: AppBar(
          centerTitle: true, // 标题居中
          title: const Text('hello flutter'), // 设置标题
          backgroundColor: const Color(0xFF73D2FF)), //标题背景色
      // bottomNavigationBar 底部导航
            bottomNavigationBar: BottomNavigationBar(
              type: BottomNavigationBarType.fixed,
                //  选中的导航的颜色
              fixedColor: Colors.green,
              items: const [
                BottomNavigationBarItem(
                  icon: Icon(Icons.home),
                  label: '首页',
                ),
                BottomNavigationBarItem(
                  icon: Icon(Icons.favorite),
                  label: '收藏',
                ),
                BottomNavigationBarItem(
                  icon: Icon(Icons.settings),
                  label: '设置',
                ),
              ],
              currentIndex: 0,
            ),
      // body里面放入自定义的widget，主体内容
      body: const MyWidget(),
    ));
  }
}

// 自定义的 MyWidget 部件 (此处是无状态的)
class MyWidget extends StatelessWidget {
  const MyWidget({super.key});

  @override // build方法返回小部件
  Widget build(BuildContext context) {
    return const Center(
        child: Text(
      'hello world1234567890',
      // 文字方向
      textDirection: TextDirection.ltr,
      style: TextStyle(
          fontSize: 24,
          fontWeight: FontWeight.bold,
          color: Colors.blue,
          backgroundColor: Colors.red),
    ));
  }
}
```

###  AppBar的一些参数设置

[Flutter 控件 AppBar的一些参数设置_flutter appbar 参数-CSDN博客](https://blog.csdn.net/hnnd123/article/details/82735502)

## 创建car类（列表排列【竖着】Demo）

car.dart

```
class Car {
  const Car({this.name, this.imageUrl});
  final String? name;
  final String? imageUrl;
}
```

main.dart      渲染出一个竖着排列的列表

```dart
import 'package:flur/model/Car.dart';


class Home extends StatelessWidget {
  const Home({super.key});

  // 加了_是指内部访问（指的是文件的内部）
  Widget itemForRow(BuildContext context, int index) {
    return Container(
        color: Colors.white,
        margin: const EdgeInsets.all(10),
        child: Column(
          children: [
            Image.network(datas[index].imageUrl!),
            Container(
              height: 10,
            ),
            Text('$index ${datas[index].name}')
          ],
        ));
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ListView.builder(
        itemCount: datas.length,
        itemBuilder: itemForRow,
      ),
    );
  }
}

final List<Car> datas = [
  const Car(
      name: '车子1',
      imageUrl:
          'https://img.zcool.cn/community/01903158b7a4e7a801219c773f0437.jpg@2o.jpg'),
  const Car(
      name: '车子2',
      imageUrl:
          'https://img.zcool.cn/community/01903158b7a4e7a801219c773f0437.jpg@2o.jpg'),
  const Car(
      name: '车子3',
      imageUrl:
          'https://img.zcool.cn/community/01903158b7a4e7a801219c773f0437.jpg@2o.jpg'),
  const Car(
      name: '车子4',
      imageUrl:
          'https://img.zcool.cn/community/01903158b7a4e7a801219c773f0437.jpg@2o.jpg'),
  const Car(
      name: '车子4',
      imageUrl:
          'https://img.zcool.cn/community/01903158b7a4e7a801219c773f0437.jpg@2o.jpg'),
];

```

## 一个带有底部导航的页面切换Demo（仿vx）

main.dart提供了底部导航，通过修改 _currentIndex的值实现不同的底部导航按钮的高亮显示，body的内容通过 _pages 的列表根据不同的 _currentIndex 的值实现 widget 的切换

find.dart里面的  _DiscoverCell 类里面有 widget属性 可以获取到 DiscoverCell 类里面的属性

### main.dart

```dart

import 'package:flur/tabBar/connect.dart';
import 'package:flur/tabBar/find.dart';
import 'package:flur/tabBar/mine.dart';
import 'package:flur/tabBar/rootWedget.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '我的一个flutter',
      // 是否显示 debug 标识
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
          useMaterial3: true,
          // 修改点击底部导航的点击效果
          highlightColor: const Color.fromRGBO(1, 0, 0, 0.0),
          splashColor: const Color.fromRGBO(1, 0, 0, 0.0)),
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});
  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  // 选中的底部导航
  int _currentIndex = 0;
  // 选中的底部导航切换的widget
  final List<Widget> _pages = [
    const rootWidget(),
    const connectWidget(),
    const findWidget(),
    const mineWidget()
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        // appBar: AppBar(
        //   backgroundColor: const Color(0xFF73D2FF),
        //   title: const Text('hello flutter'),
        //   centerTitle: true, // 标题居中
        // ),
        // bottomNavigationBar 底部导航
        bottomNavigationBar: BottomNavigationBar(
          type: BottomNavigationBarType.fixed,
          fixedColor: Colors.green,
          items: const [
            BottomNavigationBarItem(
              icon: Icon(Icons.home),
              label: '首页',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.favorite),
              label: '通讯录',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.settings),
              label: '发现',
            ),
            //  使用自定义的底部导航栏图片
            BottomNavigationBarItem(
              // 默认的 icon 样式
              icon: Image(
                image: AssetImage('images/my.png'),
                width: 20,
                height: 20,
              ),
               // 高亮时的 icon 样式
              activeIcon: Image(
                image: AssetImage('images/mineHeader.png'),
                width: 20,
                height: 20,
              ),
              label: '我的',
            ),
          ],
          currentIndex: _currentIndex,
          // 点击切换选中的导航栏
          onTap: (index) {
            setState(() {
              _currentIndex = index;
            });
          },
        ),
        body: _pages[_currentIndex]);
  }
}

```

### rootWidget.dart

```dart
import 'package:flutter/material.dart';

class rootWidget extends StatefulWidget {
  const rootWidget({super.key});

  @override
  State<rootWidget> createState() => _MyWidgetState();
}

class _MyWidgetState extends State<rootWidget> {
  @override
  Widget build(BuildContext context) {
    // ignore: dead_code
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color(0xFF73D2FF),
        title: const Text('首页'),
        centerTitle: true, // 标题居中
      ),
      body: const Center(
        child: Text('首页'),
      ),
    );
  }
}
```

### connectWidget.dart

```dart
import 'package:flutter/material.dart';

class connectWidget extends StatefulWidget {
  const connectWidget({super.key});

  @override
  State<connectWidget> createState() => _MyWidgetState();
}

class _MyWidgetState extends State<connectWidget> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color(0xFF73D2FF),
        title: const Text('通讯录'),
        centerTitle: true, // 标题居中
      ),
      body: const Center(
        child: Text('通讯录'),
      ),
    );
  }
}
```

### find.dart  (发现页面)

```dart
// ignore_for_file: unnecessary_null_comparison

import 'package:flur/tabBar/findChild.dart';
import 'package:flutter/material.dart';

class findWidget extends StatefulWidget {
  const findWidget({super.key});

  @override
  State<findWidget> createState() => _findWidgetState();
}

class _findWidgetState extends State<findWidget> {
  final Color _themeColor = const Color.fromRGBO(220, 220, 220, 1.0);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: _themeColor,
          title: const Text('发现'),
          centerTitle: true, // 标题居中
        ),
        body: Container(
            height: 800,
            color: _themeColor,
            child: ListView(
              children: [
                const DiscoverCell(
                  title: '欢迎1111',
                  subTitle: '副标题',
                  imageName: 'images/mineHeader.png',
                  subImageName: 'images/mineHeader.png',
                ),
                const SizedBox(height: 10),
                const DiscoverCell(
                  title: '欢迎22',
                  subTitle: '副标题',
                  imageName: 'images/mineHeader.png',
                  subImageName: 'images/mineHeader.png',
                ),
                Container(
                  color: const Color.fromARGB(255, 223, 253, 224),
                  height: 0.5,
                ),
                const DiscoverCell(
                  title: '欢迎33',
                  subTitle: '副标题',
                  imageName: 'images/mineHeader.png',
                  subImageName: 'images/mineHeader.png',
                ),
                const SizedBox(height: 10),
                const DiscoverCell(
                  title: '欢迎4',
                  subTitle: '副标题',
                  imageName: 'images/mineHeader.png',
                  subImageName: 'images/mineHeader.png',
                ),
              ],
            )));
  }
}

// 有状态的widget
class DiscoverCell extends StatefulWidget {
  final String title;
  final String subTitle;
  final String imageName;
  final String subImageName;

  const DiscoverCell(
      {super.key,
      required this.title,
      this.subTitle = '',
      required this.imageName,
      this.subImageName = ''})
      // assert提醒，可以没有
      : assert(title != null, 'title不能为空'),
        assert(imageName != null, 'imageName不能为空');
  @override
  State<DiscoverCell> createState() => _DiscoverCell();
}

class _DiscoverCell extends State<DiscoverCell> {
  Color _currentColor = Colors.white; //控制手势操作时的颜色
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
        onTap: () {
          // 跳转到findChildWidget，新页面，并且携带参数 title
          Navigator.of(context)
              .push(MaterialPageRoute(builder: (BuildContext context) {
            print(widget.title);
            return findChildWidget(title: widget.title);
          }));
          setState(() {
            setState(() {
              _currentColor = Colors.white;
            });
          });
        },
        onTapDown: (TapDownDetails details) {
          print("点下了");
          setState(() {
            _currentColor = const Color.fromARGB(255, 245, 242, 242);
          });
        },
        onTapCancel: () {
          print("点下离开");
          setState(() {
            _currentColor = Colors.white;
          });
        },
        child: Container(
          color: _currentColor,
          child: Row(
            // 主轴方向
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              // left
              Container(
                height: 40,
                padding: const EdgeInsets.all(10),
                child: Row(
                  children: [
                    const Image(
                      image: AssetImage('images/mineHeader.png'),
                      width: 30,
                      height: 30,
                    ),
                    // 间隙
                    const SizedBox(
                      width: 15,
                    ),
                    Text(widget.title)
                  ],
                ),
              ),
              //right
              Container(
                height: 40,
                padding: const EdgeInsets.all(10),
                child: Row(
                  children: <Widget>[
                    if (widget.subTitle != null)
                      Text(widget.subTitle)
                    else
                      const Text(''),
                    // 间隙
                    const SizedBox(
                      width: 15,
                    ),
                    widget.subImageName != null && widget.subImageName != ''
                        ? Image.asset(widget.subImageName)
                        : Container(),
                    // Image(image: image)
                    const Icon(
                      Icons.arrow_forward_ios,
                      size: 14,
                    )
                  ],
                ),
              )
            ],
          ),
        ));
  }
}

```



### mineWidget.dart

```dart
import 'package:flutter/material.dart';

class mineWidget extends StatefulWidget {
  const mineWidget({super.key});

  @override
  State<mineWidget> createState() => _MyWidgetState();
}

class _MyWidgetState extends State<mineWidget> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color(0xFF73D2FF),
        title: const Text('我的'),
        centerTitle: true, // 标题居中
      ),
      body: const Center(
        child: Text('我的'),
      ),
    );
  }
}
```

## flutter获取屏幕宽高

[flutter 获取屏幕宽高 - 简书 (jianshu.com)](https://www.jianshu.com/p/154991a223e2)

### 1.系统提供的方法

这个方法可以得到当前控件的宽，高

```dart
final size =MediaQuery.of(context).size;
final width =size.width;
final height =size.height; 
```

### 2.使用起来最简单的方法

使用这个方法，能够快速的得到屏幕的宽高

```dart
import 'dart:ui';

final width = window.physicalSize.width;
final height = window.physicalSize.height;
```

## 基本widget，基本使用设置

### Container

使用示例：

```
 Container(
            alignment: Alignment.centerLeft,
            padding: const EdgeInsets.only(left: 10),
            color: wechatThemeColor,
            height:  20 ,
            child: Text(  "微信号：1234567",    style: TextStyle(color: Colors.grey))
        ),
```

container里面文字居左

```
alignment: Alignment.centerLeft,
```



### Text(Flutter文本显示和样式)

[Flutter Text(Flutter文本显示和样式)_flutter text strutstyle-CSDN博客](https://blog.csdn.net/ruoshui_t/article/details/90409586)

示例：

```
Text(  "微信号：1234567",    style: TextStyle(color: Colors.grey))
```

文字超出显示省略号

```
Text('12345',
      maxLines: 1,     //最多显示几行
      overflow: TextOverflow.ellipsis,       // 超出显示省略号
)
```



### 图片的使用

[Flutter 中 Image 的 5 种加载方式详解 | Flutter Widgets - 掘金 (juejin.cn)](https://juejin.cn/post/6975697905499783205)

[Flutter入门（9）：Flutter 组件之 Image、AssetImage 详解 - 简书 (jianshu.com)](https://www.jianshu.com/p/9b4d79a038c6)

项目根目录下创建 images 文件夹用于存放图片文件

```
Image(
       image: AssetImage('images/mineHeader.png'),
       width: 20,
       height: 20,
),
Image(
       image: NetworkImage(imageUrl)，
       width: 20,
       height: 20,
),
```

使用到的图片文件路径需要在 pubspec.yaml 中进行配置

```
flutter:
  assets:
    - images/
```

### flutter颜色设置

常规用法  [Flutter颜色(Color)使用和十六进制颜色转换 - 简书 (jianshu.com)](https://www.jianshu.com/p/131e9b7bf572)

```undefined
1、Color c1 = Color(0xFF3CAAFA);
2、Color c2 = Color.fromRGBO(60, 170, 250, 1);
3、Color c3 = Color.fromARGB(255, 60, 170, 250);
4、Color c5 = Colors.blue;
```

- 1、`Color(int value)`
  **Color(0xFF3CAAFA)**,value接收的是一个十六进制（0x开头),FF表示的是十六进制透明度(00-FF),3CAAFA是十六进制色值。
- 2、`Color.fromRGBO(int r, int g, int b, double opacity)`
  ***Color.fromRGBO(60, 170, 250, 1)\***，r、g、b分别表示red、green、blue，常规的红绿蓝三色，取值范围为0-255，opacity表示透明度，取值0.0-1.0。
- 3、`Color.fromARGB(int a, int r, int g, int b)`
  ***Color.fromARGB(255, 60, 170, 250)\***,a表示透明度，取值0-255，rgb同上一样。
- 4、`Colors._()`
  Colors类定义了很多颜色，可以直接使用，例如 Colors.blue,其实就是第一种***Color(int value)\***的封装。



### Icon图标

[Flutter Icon 图标网](https://fluttericon.cn/)

示例：

```
             Icon(
                Icons.audiotrack,
                color: Colors.green,
                size: 30.0,
              ),
```

### **GestureDetector处理用户手势操作**

[Flutter 手势系列教程---GestureDetector - 掘金 (juejin.cn)](https://juejin.cn/post/7009859979096096804#heading-4)

示例：

```
            GestureDetector(
              // 点击触发
              onTap: () {
                print("添加联系人");
                // 页面跳转
                Navigator.of(context).push(MaterialPageRoute(
                    builder: (context) =>
                        const findChildWidget(title: "添加联系人")));
              },
              child: Container(
                margin: const EdgeInsets.only(right: 10),
                child: const Icon(
                  Icons.person_add_alt_1_rounded,
                  size: 30.0,
                ),
              ))
```

### Navigator 导航 页面跳转

[Flutter导航Navigator使用详解 - 掘金 (juejin.cn)](https://juejin.cn/post/6873084082553782286)

示例：

```
// 页面跳转  跳转到 findChildWidget  携带的参数为 title
                Navigator.of(context).push(MaterialPageRoute(
                    builder: (context) =>
                        const findChildWidget(title: "添加联系人")));
```

### ListView 列表组件之一

[Flutter 中 ListView 的 4 种构建方式详解 | Flutter Widgets - 掘金 (juejin.cn)](https://juejin.cn/post/6971076180317470728)

[基础列表 - Flutter 中文文档 - Flutter 中文开发者网站 - Flutter](https://flutter.cn/docs/cookbook/lists/basic-list)

示例：

```
ListView(
  children: const <Widget>[
    ListTile(
      leading: Icon(Icons.map),
      title: Text('Map'),
    ),
    ListTile(
      leading: Icon(Icons.photo_album),
      title: Text('Album'),
    ),
    ListTile(
      leading: Icon(Icons.phone),
      title: Text('Phone'),
    ),
  ],
),
```

### PopupMenuButton

appBar 右上角的按钮

[Flutter | 超实用简单菜单弹出框 PopupMenuButton - 掘金 (juejin.cn)](https://juejin.cn/post/6844903906938634248)

示例：

```
appBar: AppBar(
        backgroundColor: const Color(0xFF73D2FF),
        title: const Text('首页'),
        centerTitle: true, // 标题居中
        actions: [
          Container(
            margin: const EdgeInsets.only(right: 10),
            child: PopupMenuButton(
              color: Colors.white,
              offset: const Offset(0, 40),
              itemBuilder: (BuildContext context) {
                return <PopupMenuItem<String>>[
                  const PopupMenuItem(child: Text('发起群聊1')),
                  const PopupMenuItem(child: Text('发起群聊2')),
                  const PopupMenuItem(child: Text('发起群聊3'))
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
```



## 生命周期

[Flutter 的生命周期 - 掘金 (juejin.cn)](https://juejin.cn/post/7023254324851507214)



## 看到的开源项目

[使用 Flutter 实现音视频剪辑项目 App (qq.com)](https://mp.weixin.qq.com/s/gGZFyEOn1r2GsQO07LTxWQ)

## 网络请求

### 制造接口数据

[RAP2 (taobao.org)](http://rap2.taobao.org/repository/joined?user=239769)    

[Mock.js (mockjs.com)](http://mockjs.com/)   数据生成匹配规则在这里查看

虚拟数据获取，如虚拟头像，匹配规则按照路径修改  [Random User Generator | Documentation](https://randomuser.me/documentation#howto)

### http

[http | Dart Package (pub.dev)](https://pub.dev/packages/http)

[获取网络数据 - Flutter 中文文档 - Flutter 中文开发者网站 - Flutter](https://flutter.cn/docs/cookbook/networking/fetch-data)

安装包：   flutter pub add http

#### 我使用的dart页面示例：

接口返回虚拟数据：

```json
{
  "chatList": [
    {
      "imageUrl": "https://randomuser.me/api/portraits/men/49.jpg",
      "name": "曹明",
      "message": "步安保集西关别八解那看局总须由心基。离接思受被体易部之内做保器区广具。并切名便目子信才观处后带建证。称例儿带些难不极下我斯己求然一难半。"
    },
    {
      "imageUrl": "https://randomuser.me/api/portraits/men/38.jpg",
      "name": "田平",
      "message": "往参给参领相须越面调支关主后比。关命产议断华力历现价导员维小太参关有。国导会名世消六身划工通外油题最他第。"
    }
  ]
}
```

获取数据

```dart
import 'package:flutter/material.dart';
// 导包
import 'package:http/http.dart' as http;
// json转换
import 'dart:convert';

 // Map 转 json   json.encode( Map );    
 // json 转 Map   json.decode( Map );     

class Chat {
  final String? name;
  final String? message;
  final String? imageUrl;

  Chat({this.name, this.message, this.imageUrl});
  // 工厂构造
  factory Chat.fromMap(Map map) {
    return Chat(
      name: map['name'],
      message: map['message'],
      imageUrl: map['imageUrl'],
    );
  }

  static formMap(String body) {}
}

// 网络请求是异步请求，注意  async await 的使用
getDatas() async {
    final url =
        Uri.parse("http://rap2api.taobao.org/app/mock/315841/getMessageList");
    final response = await http.get(url);
    // print('Response status: ${response.statusCode}');
    // print('Response body: ${response.body}');
    // json 转 Map   再转模型数据
    final chatModle = Chat.fromMap(json.decode(response.body));
  }
```

由于获取数据是异步的，实现异步渲染，getDatas  还要进一步修改

- [`Future`](https://api.flutter-io.cn/flutter/dart-async/Future-class.html) 是 Dart 用来处理异步操作的一个核心类，它通常代表一个可能的值或者将来或许会用到的错误。

```dart
 Future<List<Chat>> getDatas() async {
    final response = await http.get(
        Uri.parse('http://rap2api.taobao.org/app/mock/315841/getMessageList'));

    if (response.statusCode == 200) {
      // 获取响应数据，转成map类型
      final responseBody = json.decode(response.body);
      // map作为 list的遍历方法
      List<Chat> chatList = responseBody['chatList']
          .map<Chat>((item) => Chat.fromMap(item))
          .toList();
      return chatList;
    } else {
      // If the server did not return a 200 OK response,
      // then throw an exception.
      throw Exception(
          'statusCode: ${response.statusCode}' 'Failed to load chat');
    }
  }

```

##### 数据渲染（FutureBuilder 渲染）

```
 Container(
          child: FutureBuilder(
              future: getDatas(), //这里发起数据请求
              builder: (BuildContext context, AsyncSnapshot snapshot) {
                print(snapshot.data); // 获取到的数据
                print(snapshot.connectionState);  //获取数据状态
                // 正在加载
                if (snapshot.connectionState == ConnectionState.waiting) {
                  return const Center(
                    child: Text("加载中"),
                  );
                }
                // 加载完毕
                return ListView(
                  children: snapshot.data.map<Widget>((Chat item) {
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
```

##### 数据获取后渲染（ListView渲染）

```dart
  List<Chat> _datas = [];
 @override
  void initState() {
    // TODO: implement initState
    super.initState();
    // 获取网络数据
    getDatas()
        .then((List<Chat> datas) => {
              setState(() {
                _datas = datas;
              })
            })
        .catchError((e) => {print(e)})
        .whenComplete(() => {print('获取数据完毕')});
  }
  
  
  
  // 渲染数据
  Container(
                child: Container(
                    child: _datas.isEmpty
                        ? const Center(child: Text("loading..."))
                        : ListView.builder(
                            itemCount: _datas.length,
                            itemBuilder: (BuildContext context, int index) {
                              return ListTile(
                                title: Text(
                                  _datas[index].name,
                                ),
                                subtitle: Text(_datas[index].message,
                                    maxLines: 1,
                                    overflow: TextOverflow.ellipsis,
                                    style: const TextStyle(
                                        fontSize: 10, color: Colors.blueGrey)),
                                leading: CircleAvatar(
                                  backgroundImage:
                                      NetworkImage(_datas[index].imageUrl),
                                ),
                              );
                            }))));
```

## Mixins 混入

目的：给一个类增加功能。是多继承。（我还不太清楚）

[Flutter 语法进阶 | 深入理解混入类 mixin - 掘金 (juejin.cn)](https://juejin.cn/post/7132651702980706312#heading-4)

## UI库

[开源 Flutter UI 库，简化 Flutter 应用程序开发 - Getwidget](https://www.getwidget.dev/)