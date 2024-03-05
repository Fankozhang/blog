---
icon: edit
date: 2022-01-05
tag:
  - React native
  - native

typora-copy-images-to: ./
typora-root-url: ..\.vuepress\publixi


---

# react native

官网：[简介 · React Native 中文网](https://reactnative.cn/docs/getting-started)

视频参考：[P1. 01.简介_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Pt4y1n7bD?p=1&vd_source=f25f5a8d75a3a60d5a288f726803ec11)

检查运行环境 ： npx react-native doctor           npx react-native info npx react-native     部分error不影响运行

创建项目：npx react-native init AwesomeProject

运行  npm start,   需要启动Metro之后，才能在 android 运行

环境变量一定要配对，包括tools的相关变量。 提前启动模拟器

我这个被要求的jdk17  使用的17.0.9   可以去官网下载，需要配置好环境变量



[[react native\] android sdk not found - 掘金 (juejin.cn)](https://juejin.cn/post/7263128272504963127)

[android - ReactNative 找不到 Android SDK - IT工具网 (coder.work)](https://www.coder.work/article/7545226)

[保姆级别——Android Studio安装教程&环境变量配置 - 掘金 (juejin.cn)](https://juejin.cn/post/7239249100335759421#heading-15)

[React Native环境配置搭建（全网最全 没有之一）_cannot start server in new window because no termi-CSDN博客](https://blog.csdn.net/summer___cold/article/details/135421493)

（react native环境变量配置有点麻烦，尽量在科学上网的情况下下载依赖的文件）



gradle-wrapper.properties 文件修改

```
distributionUrl=https://mirrors.cloud.tencent.com/gradle/gradle-8.1.1-all.zip    使用国内镜像文件下载更快 
```

## 移动端开发相关知识（了解）

[H5 - 苏苏同学的专栏 - 掘金 (juejin.cn)](https://juejin.cn/column/7052955706885963790)

## 环境变量配置（根据自己路径配置）：

| 变量名       | 变量值                      |
| ------------ | --------------------------- |
| JAVA17_HOME  | E:\jdk\jdk-17.0.9           |
| ANDROID_HOME | E:\androidStudio\androidSdk |
| JAVA_HOME    | %JAVA17_HOME%               |

**path 里面加入**

%JAVA_HOME%\jre\bin

%JAVA_HOME%\bin

E:\androidStudio\androidSdk

%ANDROID_HOME%\platform-tools

%ANDROID_HOME%\tools

%ANDROID_HOME%\build-tools\34.0.0

%ANDROID_HOME%\emulator

%ANDROID_HOME%\build-tools

%ANDROID_HOME%\tools\bin



## 清除编译缓存（npm start运行之前运行）

编译缓存不清除的话，可能会出现编译时还是用之前的环境变量下载的依赖文件运行，造成编译错误

在React Native中，清除编译缓存可以通过以下步骤实现：

1. 清除Metro缓存:

   ```
   # react native
   npx react-native start --reset-cache
   
   # npm
   npm start -- --reset-cache
   ```

2. 清除iOS工程缓存:

   ```
   rm -rf ios/build
   ```

3. 清除Android工程缓存:

   ```
   rm -rf android/build
   ```

这些命令将清除React Native项目中的编译缓存，以确保在重新编译应用程序时不会出现任何问题。

关于React Native清除编译缓存的更多信息，您可以参考官方文档： https://reactnative.dev/docs/next/cli#start--reset-cache



## StyleSheet

StyleSheet 提供了一种类似 CSS 样式表的抽象。

**RN中的样式与CSS的不同**
没有继承性  （RN中的继承只发生在Text组件上）
样式名采用小驼峰命名   （fontSize VS font-size）
所有尺寸都是没有单位
有些特殊的样式名

### RN中样式的声名方式

1  通过style属性直接声明
属性值为对象：`<组件 style={{样式}}/>`
属性值为数组：`<组件 style={[{样式1}，... ，{样式N}]}/>`

2  在style属性中调用StyleSheet声明的样式  (类似于类样式)
引入 ：`import {StyleSheet,View} from 'react-native'`
声明 ： `const styles=StyleSheet.create({too:{样式1},bar:{样式2}})`

使用 ：`<View style={[styles.foo,styles.bar]}>内容<View>`

### flexBox（flex布局）

#### 主要的Flexbox属性

- `flex` - 定义了该视图在屏幕上的填充程度。可用的值是大于或等于0的整数。
- `flexDirection` - 决定孩子们在哪个方向--垂直或水平方向--进行布局。可用的值包括`column`,`row`,`column-reverse`, 和`row-reverse`
- `justifyContent` - 决定一个项目应该如何沿着主轴线渲染（由`flexDirection` 属性决定）。可用的值包括：`flex-start`,`flex-end`,`center`,`space-between`,`space-around`, 和`space-evenly`
- `alignItems` - 这决定了一个项目应该如何沿次要轴线呈现（由`flexDirection` 属性决定）。可用的值是`flex-start`,`flex-end`,`center`, 和`baseline`
- `alignSelf` - 决定一个子项应该如何对齐自己，并覆盖`alignItems` 。可用的值是：`flex-start`,`flex-end`,`center`, 和`baseline`

注意点：`flexDirection`  声明主轴方向：row (Web默认)   column(RN默认)   ，  移动端布局column才是主轴

### 响应式布局

[React Native 响应式布局实践-CSDN博客](https://blog.csdn.net/byeweiyang/article/details/80128865)

#### Dimensions（获取设备屏幕的宽高）

Dimensions API 是 React Native 提供的获取屏幕信息用的 API。开发人员可以通过调用 Dimensions.get()方法取得一个包含屏幕长宽信息的对象，来把握当前用户的设备的屏幕大小，并且以此来简易推测用户是否处于横屏状态。

注意：尽管尺寸信息立即就可用，但它可能会在将来被修改（譬如设备的方向改变），所以基于这些常量的渲染逻辑和样式应当每次 render 之后都调用此函数，而不是将对应的值保存下来。（举例来说，你可能需要使用内联的样式而不是在`StyleSheet`中保存相应的尺寸）。

使用如下：

```jsx
import { Dimensions } from 'react-native';
```

你可以用下面的方法来获取设备的宽高：

```jsx
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
```

使用示例可查看官网示例： [Dimensions · React Native 中文网](https://reactnative.cn/docs/next/dimensions#方法)

使用：

```
        //  RN 获取屏幕高度的时候，不能直接写百分比（100%），最好用 Dimensions.get('window').height 获取
          style={{
            width: '50%',
            height: Dimensions.get('window').height / 2, 
            backgroundColor: 'red',
          }}
```

#### [`useWindowDimensions`](https://reactnative.cn/docs/next/usewindowdimensions)（官网推荐）

也是用于获取设备屏幕的宽高

注意：这是一个 hook，只能在函数式组件里使用，

```jsx
import { useWindowDimensions } from 'react-native';
```

`useWindowDimensions`会在屏幕尺寸变化时自动更新获取到的设备`width`和`height`值。使用方法如下：

```jsx
const windowWidth = useWindowDimensions().width;
const windowHeight = useWindowDimensions().height;
```

### 

#### Platform （获取平台信息）

Platform API 是 React Native 提供的获取平台信息用的 API，同时也提供了一些方法来方便开发人员对各个平台进行分支处理。

Platform.OS 和 Platform.Version 属性分别提供了当前设备的 OS 信息以及 OS 版本信息。开发人员可以根据相应的值，对 UI 组件进行分支处理。下面的例子在用户使用 iOS 的情况下会显示组件，而在 Android 的情况下则会显示组件。

```
import { Platform } from 'react-native';
```

```
Platform.constants;     // 返回一个对象，该对象包含与平台相关的所有可用的通用常量和特定常量。
```

返回对应的变量代表什么，查看官网表格：[Platform · React Native 中文网 --- Platform · React Native 中文网](https://reactnative.cn/docs/next/platform)

```js
Platform.isPad;          // 返回一个布尔值，用于定义设备是否为 iPad。

Platform.isTV;           // 返回一个布尔值，该布尔值定义设备是否为电视。

Platform.isTesting;      // 返回一个布尔值，该布尔值定义应用程序是否在设置了测试标志的开发人员模式下运行。

static Platform.OS       // 返回表示当前操作系统的字符串值。

Platform.Version;        // 返回操作系统的版本。
```



方法  `select()`

```js
static select(config: object): any          //返回当前运行的平台最合适的值。
```

Select 方法返回当前运行的平台最合适的值。也就是说，如果您在手机上运行， `android` `ios` 并且按键将优先。如果未指定这些，则将使用 key， `native` 然后使用 `default` key。
该 `config` 参数是具有以下键的对象：

- `android` (any) `android` （任何）
- `ios` (any) `ios` （任何）
- `native` (any) `native` （任何）
- `default` (any) `default` （任何）

Platform  可用于根据不同的设备，展示不同的样式或组件

官网使用示例：

在 Android 上具有绿色背景色，在 iOS 上具有红色背景色，在其他平台上具有 `flex: 1` 蓝色背景色。

```jsx
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        backgroundColor: 'green'
      },
      ios: {
        backgroundColor: 'red'
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue'
      }
    })
  }
});
```

由于对应平台键的值可以是 类型 `any` ，方法也可用于返回特定于平台的组件， `select` 如下所示：

```jsx
const Component = Platform.select({
  ios: () => require('ComponentIOS'),
  android: () => require('ComponentAndroid')
})();

<Component />;
```

```jsx
const Component = Platform.select({
  native: () => require('ComponentForNative'),
  default: () => require('ComponentForWeb')
})();

<Component />;
```

## 通过@获取文件路径

babel.config.js

```
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': ['./src'],
        },
      },
    ],
  ],
};
```



## 组件

RN中的核心组件，是对原生组件的封装
原生组件：Android 或 ioS 内的组件
核心组件：RN中最常用的，来在 react-native 中使用的组件

核心组件查看官网： [核心组件和API · React Native 中文网](https://reactnative.cn/docs/components-and-apis)

### View

注意：View 标签里面不能直接写文字，要用 Text 标签包裹

### Text

多行显示省略号

1：显示几行(numberOfLines)

`<Text numberOfLines={1}/>`

2：省略号显示的位置(ellipsizeMode)  可以是以下几个值tail、head、 middle、clip

默认的是tail (尾部) 

头部 head

中间 middle

从尾部截掉 clip

`<Text numberOfLines={1} ellipsizeMode={'tail'}>`

### Alert 弹框

启动一个提示对话框，包含对应的标题和信息。

```js
static  alert(title, message?, buttons?, options?)
```

**参数：**

| 名称         | 类型                                                         | 说明                                                         |
| :----------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| title 标题   | string Required string 必填                                  | 对话框的标题。传递 `null` 字符串或空字符串将隐藏标题。       |
| message 消息 | string 字符串                                                | 显示在对话框标题下方的可选消息。(iOS 上你可以指定任意数量的按钮,Android 上最多能指定三个按钮，这三个按钮分别具有“中间态”、“消极态”和“积极态”的概念) |
| buttons 按钮 | [Buttons]   按钮                                             | 包含按钮配置的可选数组。                                     |
| options 选项 | [Options](https://reactnative.cn/docs/next/alert#options) Android | Android 的可选警报配置。                                     |

#### Alert示例：

```jsx
// 点击按钮，弹出 Alert

function Text1() {
  const showAlert = () =>
    Alert.alert(
      '标题',
      'message 消息',
      [
         //  这里的数组标识的是 按钮 的配置
        {
          text: '请稍后',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: '取消',
          onPress: () => Alert.alert('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: '确认',
          onPress: () => {
            console.log(1);
          },
        },
      ],
      {
        // option参数.  android 的可选配置
        text: '取消',
        cancelable: true, // 可以通过点击提示框的外面来取消提示框（默认没有开启）
        // onDismiss  捕获用户的取消操作
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );

  return (
    <View>
      <Button title="Show alert" onPress={showAlert} />
    </View>
  );
}
```

#### ios示例 `prompt()`：

```
static prompt(title, message?, callbackOrButtons?, type?, defaultValue?, keyboardType?)
```

创建并显示一个提示，以警报的形式输入一些文本。

**参数：**

| 名称                | 类型                                                         | 说明                                                         |
| :------------------ | :----------------------------------------------------------- | :----------------------------------------------------------- |
| title 标题          | string Required string 必填                                  | 对话框的标题。                                               |
| message 消息        | string 字符串                                                | 显示在文本输入上方的可选消息。                               |
| callbackOrButtons   | function[Buttons](https://reactnative.cn/docs/next/alert#buttons) 功能按钮 | 如果传递了一个函数，它将使用提示的值进行调用  `(text: string) => void` ，当用户点击“确定”时。如果传递数组，则将根据数组内容配置按钮。 |
| 类型                | [AlertType 警报类型](https://reactnative.cn/docs/next/alert#alerttype) | 这将配置文本输入。                                           |
| defaultValue 默认值 | string 字符串                                                | 文本输入中的默认文本。                                       |
| keyboardType        | string 字符串                                                | The keyboard type of first text field (if exists). One of TextInput [keyboardTypes](https://reactnative.cn/docs/next/textinput#keyboardtype). 第一个文本字段的键盘类型（如果存在）。TextInput keyboardTypes 之一。 |

### StatusBar 状态栏

状态栏是一个区域，通常位于屏幕顶部，显示当前时间、Wi-Fi 和蜂窝网络信息、电池电量和/或其他状态图标。

```jsx
 <StatusBar
        hidden={false}    // 默认隐藏，设置为 false 展示出来
        backgroundColor="red"  // 设置状态栏背景颜色
        barStyle={'light-content'}  //default默认状态栏样式（iOS 为深色，Android 为浅色） light-content 浅色字体  dark-content 深字体
      />
```

### Switch  开关组件

```jsx
function Text1() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (
    <View>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}    // 开关轨道的自定义颜色。
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}      // 前景开关句柄的颜色。 如果在 iOS 上设置此选项，开关句柄将失去投影。
        ios_backgroundColor="#3e3e3e"    // 在 iOS 上，自定义背景颜色。 当开关值为 false 或开关被禁用（且开关为半透明）时，可以看到该背景颜色。
        onValueChange={toggleSwitch}    //当用户尝试更改开关的值时调用。 接收新值作为参数。 如果你想接收事件，请使用 onChange。
        value={isEnabled}               // 开关的值。 如果为真，开关将打开。 默认值为 false。
      />
    </View>
  );
}
```

### ActivityIndicator 圆形加载指示器

loding 效果

```jsx
<ActivityIndicator
        size="large" // enum('small', 'large')   android 可以设置 number
        color="#00ff00" // 加载控件的前景色。
        animating={true} // 显示指示器 (true) 还是隐藏指示器 (false)。
      />
```

### Image 图片

[在React Native中缓存图片。一个有例子的教程 - 掘金 (juejin.cn)](https://juejin.cn/post/7067108601671712781)

用于显示不同类型的图片，包括网络图片、静态资源、临时本地图片以及本地磁盘中的图片，例如相机胶卷。

请注意，对于网络和数据图片，你将需要手动指定图片的尺寸！

用@/访问需要增加配置：代码写在src里面：[react native 配置路径别名alias_react-native 路径 alias-CSDN博客](https://blog.csdn.net/weixin_43233914/article/details/127073727)

加载方式:  

```jsx
      {/* 加载本地路径 目录图片 */}
      <Image
        style={{width: 100, height: 100}}
        source={require('@/assets/images/MyLogo.jpg')}
      />
      {/* 加载 url 图片 */}
      <Image
        style={{width: 100, height: 100}}
        source={{
          uri: 'https://rn.nodejs.cn/img/tiny_logo.png',
        }}
      />
	  <Image
        style={{width: 165, height: 165}}
        src={item.pic}
      />
      {/* 加载 Base64 图片 */}
      <Image
        style={{width: 100, height: 100}}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />

{/* 背景图片 */}
<ImageBackground source={...} style={{width: '100%', height: '100%'}}>
    <Text>Inside</Text>
  </ImageBackground>
```

### TextInput 输入

```jsx
function Text1() {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        secureTextEntry={true}  // 密码输入，输入变成 *
      />
      <TextInput
        onChangeText={onChangeNumber}
        value={number}
        placeholder="请输入内容"
        keyboardType="numeric" // 弹出的键盘类型

        multiline={true}  // 多行输入
        numberOfLines={5} // 设置 TextInput 的输入行数。 将其与设置为 true 的多行一起使用，以便能够填充行。
		textAlignVertical={'top'}  // 多行输入在 iOS 上将文本对齐到顶部，在 Android 上将其居中。 将 textAlignVertical 设置为 top 时，可在两个平台中实现相同的行为。
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

```

### Touchable组件

TouchableHighlight                        触碰后，高亮显示
TouchableOpacity                           触碰后，透明度降低（模糊显示）
TouchableWithoutFeedback         触碰后，无任何响应



### ScrollView 滚动显示

ScrollView 必须具有有界高度才能工作

```jsx
function Text1() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{margin: 20}} //contentContainerStyle这些样式将应用于封装所有子视图的滚动视图内容容器。
        showsVerticalScrollIndicator={false} // 当 true 时，显示垂直滚动指示器。
        showsHorizontalScrollIndicator={false} // 当 true 时，显示水平滚动指示器。
      >
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        {/* 解决ScrollView在Android下，滚动不到底的问题 */}
        <View style={{height: Platform.OS === 'ios' ? 0 : 100}} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'pink',
  },
  text: {
    fontSize: 42,
  },
});
```

### SafeAreaView 安全显示区域（ios）

主要针对liu

`SafeAreaView`的目的是在一个“安全”的可视区域内渲染内容。具体来说就是因为目前有 iPhone X 这样的带有“刘海”的全面屏设备，所以需要避免内容渲染到不可见的“刘海”范围内。本组件目前仅支持 iOS 设备以及 iOS 11 或更高版本。

`SafeAreaView`会自动根据系统的各种导航栏、工具栏等预留出空间来渲染内部内容。更重要的是，它还会考虑到设备屏幕的局限，比如屏幕四周的圆角或是顶部中间不可显示的“刘海”区域。

使用：只需简单地把你原有的视图用`SafeAreaView`包起来，同时设置一个`flex: 1`的样式。当然可能还需要一些和你的设计相匹配的背景色。

注意：在android挖孔屏幕中，使用 SafeAreaView 可能并不能显示出安全区域，此时需要引入别的库来解决这一问题

#### react-native-safe-area-context 反应原生安全区域上下文

**注意：如果使用了路由导航器的标题，那么就可以不使用 SafeAreaView 了，否则顶部可能会有空白**

```
npm install react-native-safe-area-context
```

使用：

```jsx
import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

// 注意  SafeAreaView 从 react-native-safe-area-context 引入，而不是从 'react-native' 引入。
import { SafeAreaView  } from 'react-native-safe-area-context';

export default function App() {
 
  return (
      <SafeAreaView style={styles.container}>
        <Text>Open up App.js to start working on your app!123456</Text>
        <Button title="存储" onPress={() => storeData('hello RN')} />
        <Button title="获取" onPress={getData} />
        <Text>{storesData}</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 16,
  },
});
```



### SectionList

用于渲染分段列表的高性能界面，支持最方便的功能：

如果你不需要部分支持并想要一个更简单的界面，请使用 `FlatList` 。

```jsx
const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const App = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}        // 要渲染的实际数据
      keyExtractor={(item, index) => item + index}         //用于提取指定索引处给定项目的唯一键。
         //  渲染每个部分的内容
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
        //   渲染在每个部分的顶部。
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
          //   渲染在每个部分的底部。
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
```



### FlatList

用于渲染基本、扁平列表的高性能界面，支持最方便的功能：

```jsx
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
function Text1() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{margin: 20}} //contentContainerStyle这些样式将应用于封装所有子视图的滚动视图内容容器。
        showsVerticalScrollIndicator={false} // 当 true 时，显示垂直滚动指示器。
        showsHorizontalScrollIndicator={false} // 当 true 时，显示水平滚动指示器。
      >
        <FlatList
          horizontal={true} // 设置为 true 时，水平滚动。
          data={DATA}   // 渲染的数据
          renderItem={({item}) => <Item title={item.title} />}   //渲染每一项的组件
          keyExtractor={item => item.id}     //key值
          ListHeaderComponent={<View><Scroll content={content}></Scroll></View>}  // 渲染在所有项目的顶部。
          ListFooterComponent={<View><Scroll content={content}></Scroll></View>}  // 渲染在所有项目的底部。
          onEndReached={handleReach}   // 底部触发 （可用于底部加载数据）
          onEndReachedThreshold={0.5}  //距离底部多少时触发事件onEndReachedThreshold参数最好设置为0.1或者0.2这样，符合大部分软件的设计模式
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'pink',
  },
  text: {
    fontSize: 42,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
```

### Animated 创建动画

**RN中可以直接使用的动画组件**
Animated.View
Animated.Text
Animated.ScrollView
Animated.Image



**如何创建动画（步骤）**
创建初始值
	Animated.Value()单个值
	Animated.ValueXY()向量值
将初始值绑定的动画组件上
	一般将其绑定到某个样式属性下，例如：opacity、translate
通过动画类型API,一帧一帧地更改初始值
	Animated.decay()                 加速效果
	Animated.spring()                弹跳效果
	Animated.timing()               时间渐变效果

```jsx
const App = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    //  时间渐变效果      static timing(value, config): CompositeAnimation;
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,               // 动画长度（毫秒）。
      useNativeDriver: true,        //你可以通过在动画配置中指定 useNativeDriver: true 来使用原生驱动程序，必须的
    }).start();
  };

  const fadeOut = () => {
    //  时间渐变效果
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});
```

## 第三方组件

需要单独安装的组件

使用步骤：        安装     配置     使用

安装相关的文件后，若使用时出现网页不显示，报错等问题   可以尝试 **清除编译缓存** 后再重新启动项目

### WebView相当于内置浏览器

[在React Native中使用WebView的全面指南 - 掘金 (juejin.cn)](https://juejin.cn/post/7279295129348522042)

安装： yarn add react-native-webview                  npm install --save react-native-webview

```jsx
import {WebView} from 'react-native-webview';

function Text1() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{
          uri: 'https://m.baidu.com',
        }}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
}
```

```jsx
<SafeAreaView style={{flex: 1}}>
      <WebView source={{html: "<h1 style='color:#ff0000'>Hello word</h1>"}} />
    </SafeAreaView>
```



### Picker 选择框

[@react-native-picker/picker - npm (npmjs.com)](https://www.npmjs.com/package/@react-native-picker/picker)

[@react-native-picker/picker 的使用详解 (bytenote.net)](https://www.bytenote.net/article/188922163288342529)

安装：npm install @react-native-picker/picker --save

```jsx
import {Picker} from '@react-native-picker/picker';

function Text1() {
  const [selectedValue, setSelectedValue] = useState('mango');
  const fruits = [
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
    {label: 'Orange', value: 'orange'},
    {label: 'Mango', value: 'mango'},
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
          
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Apple" value="apple" />
        <Picker.Item label="Banana" value="banana" />
        <Picker.Item label="Orange" value="orange" />
        <Picker.Item label="Mango" value="mango" />
      </Picker>
          
          
      {/* 动态地根据数据源生成选项。通过使用 Array.map 方法，可以将数据源映射成 Picker.Item 组件的数组。 */}
      <Picker
        enabled={true}          // 设置选择器是否可操作
        prompt="选择一个水果"     // 设置选择器提示文本
        // mode="dropdown"      //mode 用于设置选择器的模式（enum('dialog', 'dropdown')）  弹出还是下拉 （只在android起作用）
        style={{backgroundColor: 'lightgrey', fontSize: 16}}
        itemStyle={{color: 'blue'}}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        {fruits.map(fruit => (
          <Picker.Item
            key={fruit.value}
            label={fruit.label}
            value={fruit.value}
          />
        ))}
      </Picker>
          
    </SafeAreaView>
  );
}
```



### Swiper展示轮播效果

[react-native-swiper - npm (npmjs.com)](https://www.npmjs.com/package/react-native-swiper)

安装：npm i react-native-swiper --save

```jsx
import Swiper from 'react-native-swiper'
 
export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper  showsButtons={true}>
        <View >
          <Text >Hello Swiper</Text>
        </View>
        <View >
          <Text >Beautiful</Text>
        </View>
        <View >
          <Text >And simple</Text>
        </View>
      </Swiper>
    )
  }
}
```

| Prop  基本属性               |     Default     |                             Type                             | Description  描述                   |
| :--------------------------- | :-------------: | :----------------------------------------------------------: | :---------------------------------- |
| horizontal                   |      true       | `bool   | 如果 `true` ，滚动视图的子项将水平排列在一行中，而不是垂直排列在列中。 |                                     |
| loop                         |      true       |                            `bool`                            | 设置为 `false` 可禁用连续循环模式。 |
| index                        |        0        |                           `number`                           | 初始载玻片的索引号。                |
| showsButtons                 |      false      |                            `bool`                            | 设置为 `true` 使控制按钮可见。      |
| autoplay 自动播放            |      false      |                            `bool`                            | 设置为 `true` 启用自动播放模式。    |
| onIndexChanged onIndex已更改 | (index) => null |                            `func                             | 当用户轻扫时使用新索引调用          |

### AsyncStorage持久化存储系统

[Installation | Async Storage (react-native-async-storage.github.io)](https://react-native-async-storage.github.io/async-storage/docs/install/)

异步存储只能存储 `string` 数据。为了存储对象数据，您需要先对其进行序列化。对于可以序列化为 JSON 的数据，可以在保存数据和 `JSON.parse()` 加载数据时使用 `JSON.stringify()` 。

```
import AsyncStorage from '@react-native-async-storage/async-storage';
```

引入，重启后编译报错 ：  Error: [@RNC/AsyncStorage]: NativeModule: AsyncStorage is null.

暂未找到合适的解决办法  （使用 Expo 创建的react项目运行后没有这样的问题。）

使用如下展示：

```jsx
import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView  } from 'react-native-safe-area-context';

export default function App() {
  const [storesData, setstoresData] = useState('');
  const storeData = async value => {
    console.log('storeData', value);
    try {
      await AsyncStorage.setItem('my-key', value);
    } catch (e) {
      // saving error
    }
  };
  const getData = async () => {
    console.log('123');
    try {
      const value = await AsyncStorage.getItem('my-key');
      console.log('getData', value);
      if (value !== null) {
        // value previously stored
        console.log(value);
        setstoresData(value)
      }
    } catch (e) {
      console.log('error', e);
      // error reading value
    }
  };
  return (
      // 安全区域展示
      <SafeAreaView style={styles.container}>
        <Button title="存储" onPress={() => storeData('hello RN')} />
        <Button title="获取" onPress={getData} />
        <Text>{storesData}</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    
  );
}
```



### Geolocation获取定位信息

[@react-native-community/geolocation - npm (npmjs.com)](https://www.npmjs.com/package/@react-native-community/geolocation)

### Camera调用摄像头

[Installation · React Native Camera (react-native-camera.github.io)](https://react-native-camera.github.io/react-native-camera/docs/installation.html)

### video 视频播放器（报错，暂未解决）

[react-native-video - npm (npmjs.com)](https://www.npmjs.com/package/react-native-video)         [A  component for React Native – Video (react-native-video.github.io)](https://react-native-video.github.io/react-native-video)



使用参考：[A  component for React Native – Video (react-native-video.github.io)](https://react-native-video.github.io/react-native-video)

报错：对照源码改代码 [react-native-video/examples/basic/android/app/build.gradle at master · react-native-video/react-native-video · GitHub](https://github.com/react-native-video/react-native-video/blob/master/examples/basic/android/app/build.gradle)

```
npm install --save react-native-video
```

Android 安装配置：  **android/settings.gradle**

```
include ':react-native-video'
project(':react-native-video').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-video/android-exoplayer')
```

**android/app/build.gradle**

从版本 >= 5.0.0 开始，您必须应用以下更改：

```
dependencies {
   ...
    compile project(':react-native-video')
+   implementation "androidx.appcompat:appcompat:1.0.0"
-   implementation "com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}"

}
```

#### expo 视频播放(正常播放，编译warning)

安装：  npx expo install expo-av

```jsx
import { Video, ResizeMode } from 'expo-av';

export default function App() {
  return (
    <View style={styles.container}>
        <Video
        style={{width:400,height:400}}
        source={{
          uri: 'http://1.94.16.149:9000/test/movie.mp4',
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
      />
      <StatusBar style="auto" />
    </View>
  );
}
```

#### expo-video-player

下载，引入报错（暂未解决）

### [**React Native ECharts**](https://wuba.github.io/react-native-echarts/zh-Hans/)

[简介 | React Native ECharts (wuba.github.io)](https://wuba.github.io/react-native-echarts/zh-Hans/docs/intro)

### Icon 图标

具体的图标查看网站    [Material Community Icons (enapter.com) ](https://static.enapter.com/rn/icons/material-community.html) 

具体的图标查看网站    [react-native-vector-icons directory (oblador.github.io)](https://oblador.github.io/react-native-vector-icons/)  

 [React Native 应用程序的 react-native-vector-icons -图标和字体](https://blog.logrocket.com/react-native-vector-icons-fonts-react-native-app-ui/)



安装使用步骤具体看 npm 介绍： [react-native-vector-icons - npm (npmjs.com)](https://www.npmjs.com/package/react-native-vector-icons)

```
npm install --save react-native-vector-icons
```

配置： 编辑 `android/app/build.gradle` （NOT `android/build.gradle` ） 并添加：

```
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
```

使用： （具体的图标名称去上面的网站上查看）

```
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

<FontAwesome name="home" size={26} />
<MaterialCommunityIcons name="account-edit-outline" color={'#FF7200'} size={26} />
```



## 路由

**这一部分建议按照官网来查看，通过官网中的示例，可以尽快搞懂用法**

RN中的路由是通过React-Navigation来完成的
	React中通过React-Router实现路由
	RN0.44之前，React-Navigation在核心中维护，0.44之后，独立维护

[开始使用 |React 导航 --- Getting started | React Navigation](https://reactnavigation.org/docs/getting-started/)     [React Navigation 6.x 导航器 - 掘金 (juejin.cn)](https://juejin.cn/post/7009526375606386718)

RN 之react-navigation：https://juejin.cn/post/7339780797392044071#heading-13

### 安装：安装部分最好跟着官网一步步来

npm install --save react-navigation            npx expo install react-native-screens react-native-safe-area-context

```
安装的时候，需要安装多个。按照官方文档，依次输入命令行。
也可以直接输入下面命令行一步完成。

yarn add  react-native-screens react-native-safe-area-context
 react-native-gesture-handler  //动画相关的依赖   // 这两使用非必须安装 (安装可能报错，但不安装，后续运行也可能报错)
 react-native-reanimated
```

`react-native-screens` 软件包需要一个额外的配置步骤才能在 Android 设备上正常工作。编辑 `MainActivity.kt` 或 `MainActivity.java` 位于 下 `android/app/src/main/java/<your package name>/` 的文件。

将突出显示的代码添加到类的 `MainActivity` 主体中：（kotlin 和 java 写法不一样，具体查官网）

kotlin

```
import android.os.Bundle;

class MainActivity: ReactActivity() {
  // ...
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
  }
  // ...
}
```

java

```
import android.os.Bundle;

public class MainActivity extends ReactActivity {
  // ...
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
  // ...
}
```





### stack navigator 堆栈导航器

RN中默认没有类似浏览器的history对象
在RN中跳转之前，先将路由声明在Stack中

安装：npm install @react-navigation/native-stack

NavigationContainer 一定是在最外层（具体属性查看官网，英文版）

<Stack.Navigator    …属性 />    作用于整个导航（包含多个屏幕）
<Stack.Screen      …属性/>   仅仅作用于当前屏幕

[React Navigation 入门（三） - StackNavigator 属性详解-CSDN博客](https://blog.csdn.net/qq_24867873/article/details/78657683)

**声名路由参考以下**： App.jsx

`createNativeStackNavigator` 是一个函数，它返回一个包含 2 个属性的对象： `Screen` 和 `Navigator` 。它们都是用于配置导航器的 React 组件。应 `Navigator` 包含 `Screen` 元素作为其子元素，以定义路由的配置。

`NavigationContainer` 是管理导航树并包含导航状态的组件。此组件必须包装所有导航器结构。通常，我们会在应用的根目录下呈现此组件，该根目录通常是从 `App.js` .

```jsx
import React from 'react';

import Text1 from './src/views/Text1';
import Example from './src/views/Example';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function App() {
  // return <Text1 />;
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Text1" //默认展示的页面名称
        screenOptions={{
          headerShown: false,   // 是显示还是隐藏屏幕的标题。默认情况下显示标头。设置此项可隐藏标头。false
          gestureEnabled: true,   //  是否可以使用手势关闭此屏幕。
          cardOverlayEnabled: true,  // 启用叠加层（您不能点击叠加层以这种方式关闭屏幕，请参阅下面的替代方法）cardOverlayEnabled: true
          ...TransitionPresets.ModalPresentationIOS,     //过渡预设 您可以将这些预设展开以自定义屏幕的动画
        }}
      >
        <Stack.Screen
          name="Text1"
          component={Text1}
          options={{
            title: '首页',
            headerStyle: {
              backgroundColor: 'red',
            },
          }}
        />
        <Stack.Screen name="Example" component={Example} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


// 页面跳转：   onPress={() => navigation.navigate('Profile')}
```

### BottomTab 导航 （底部选项卡）

安装：  npm install @react-navigation/bottom-tabs

```jsx
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//  组件参数中：navigation有跳转方法，可传参，  route包含跳转参数 （route?.params）
function HomeScreen({navigation}) {
     console.log(route);
  // 当用户在选项卡栏中按下当前屏幕的选项卡按钮时，将触发此事件。
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      // e.preventDefault();   阻止默认事件
      //  写下切换按钮要操作的内容
      console.log('123');
    });
    return unsubscribe;
  }, [navigation]);
  // 当用户长时间按下选项卡栏中当前屏幕的选项卡按钮时，将触发此事件。
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabLongPress', e => {
      console.log('456');
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.jumpTo('Settings', {owner: '用有人张三'})}
      />
      <FontAwesome name="home" size={26} />
    </View>
  );
}

function SettingsScreen({navigation, route}) {
  console.log(route);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
      <Text>{route?.params?.owner}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.jumpTo('Home', {owner: '用有人张三'})}
      />
      <MaterialCommunityIcons
        name="account-edit-outline"
        color={'#FF7200'}
        size={26}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home" // 默认选中的导航
      screenOptions={{
        tabBarActiveTintColor: '#e91e63', //高亮的颜色
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home', // 展示的label名
          tabBarIcon: ({color, size}) => (
            //  这里可以直接放入图片
            <Image
              style={{width: 30, height: 30}}
              source={require('@/assets/images/MyLogo.jpg')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings', // 展示的label名
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} /> // 图标
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
```

### 底部的 Material Design 主题标签栏

**也是一个BottomTab 导航 （底部选项卡） 只是样式有变化**

安装：npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons

官网示例：

```jsx
import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Feed() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      labelStyle={{fontSize: 12}}
      style={{backgroundColor: 'tomato'}}
      barStyle={{backgroundColor: '#694fad'}} // 底部导航栏的样式。您可以在此处传递自定义背景颜色：
        
        >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

```



### 抽屉导航器(依赖报错，暂未解决)

安装：npm install @react-navigation/drawer

安装并配置抽屉导航器所需的库：  npm install react-native-gesture-handler react-native-reanimated

要完成 的安装，请在入口文件的顶部添加以下内容（确保它位于**顶部**，并且之前没有其他内容）例如 或 ： `react-native-gesture-handler` `index.js` `App.js`

```
import 'react-native-gesture-handler';
```



#### Expo(可正常运行)

npm install @react-navigation/drawer

npx expo install react-native-gesture-handler react-native-reanimated



```jsx
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator  initialRouteName="Feed">
      <Drawer.Screen
        name="Feed"
        component={Feed}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{ drawerLabel: 'Updates' }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: 'Profile' }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
```



### 顶部的 Material Design 标签栏 导航器

安装： npm install @react-navigation/material-top-tabs react-native-tab-view

npm install react-native-pager-view

官网示例如下：

```jsx
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function FeedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ tabBarLabel: 'Updates' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

```

### 

### 导航嵌套：

[带有嵌套导航器的屏幕选项 |React 导航 --- Screen options with nested navigators | React Navigation](https://reactnavigation.org/docs/screen-options-resolution)

官网展示了好几种嵌套方法：如下是展示效果比较好的

```jsx
import * as React from 'react';
import {View, Button} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'Feed':
      return 'News feed';
    case 'Profile':
      return 'My profile';
    case 'Account':
      return 'My account';
  }
}

function FeedScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function ProfileScreen() {
  return <View />;
}

function AccountScreen() {
  return <View />;
}

function SettingsScreen() {
  return <View />;
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
          })}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

```

## 数据请求

[访问网络 · React Native 中文网](https://reactnative.cn/docs/network#发起请求)

可以通过fetch发起请求，也可以引入其他的请求库

```jsx
import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
function Feed() {
  const [list, setList] = useState([]);
  const getList = () => {
    fetch('http://rap2api.taobao.org/app/mock/315841/getMessageList')
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        setList(responseJson.chatList);
      });
  };
  useEffect(() => {
    console.log('执行副作用'); // 普通函数，执行副作用，可以实现componentDidMount、componentDidUpdate
    getList();
  }, []);
  return (
    <View style={{flex: 1, position: 'relative'}}>
      <Text
        style={{
          zIndex: 1,
          textAlign: 'center',
          fontSize: 16,
          fontWeight: 600,
          padding: 5,
        }}>
        标题
      </Text>
      {/* <Image
          style={{width: '100%', position: 'absolute', top: 0}}
          source={require('@/assets/images/MyLogo.jpg')}
        /> */}
      <ScrollView
        contentContainerStyle={{}} //contentContainerStyle这些样式将应用于封装所有子视图的滚动视图内容容器。
        showsVerticalScrollIndicator={false} // 当 true 时，显示垂直滚动指示器。
        showsHorizontalScrollIndicator={false} // 当 true 时，显示水平滚动指示器。
      >
        <View>
          {list.map(item => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  padding: 10,
                  margin: 10,
                  backgroundColor: 'white',
                }}>
                <View style={{paddingRight: 10}}>
                  <Image
                    style={{width: 50, height: 50, borderRadius: 5}}
                    source={{
                      uri: item.imageUrl,
                    }}
                  />
                </View>
                <View style={{flex: 1}}>
                  <Text key={item.message}>{item.message}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
     
    </View>
  );
}

export default Feed;
```

注意：setState之后无法获取最新值查看：[React Hook 避坑指南（useState & useEffect） - 掘金 (juejin.cn)](https://juejin.cn/post/7232187022398767162#heading-6)

## 打包

打包可完全按照官网步骤进行，测试后可以正常打包

[打包发布 · React Native 中文网](https://reactnative.cn/docs/signed-apk-android)

安装运行 app-debug.apk 后发现有些静态资源获取不到，可能是因为需要 https 请求才行

## UI库

### Ant Design Mobile RN

[Ant Design Mobile RN of React - Ant Design](https://rn.mobile.ant.design/docs/react/introduce-cn)

### NutUi  京东

[NutUI - 移动端 React Native 组件库 (jd.com)](https://nutui.jd.com/react-native/#/zh-CN/guide/start)

## Expo （可以避免一些错误，推荐使用）

Expo 里面也有一些组件可供使用：[Reference - Expo Documentation](https://docs.expo.dev/versions/latest/)

[Tutorial: Introduction - Expo Documentation](https://docs.expo.dev/tutorial/introduction/)

[概述 - Expo 中文网 (nodejs.cn)](https://expo.nodejs.cn/overview/)

[RN 学习小记之使用 Expo 创建项目 - 掘金 (juejin.cn)](https://juejin.cn/post/7246694803814531133?from=search-suggest#heading-5)

cnpm install --global expo-cli

报错：This project is missing expo-updates. Please install it in order to publish an update.

npx expo install expo-updates

**安装Expo**

```
npm install --global expo-cli
```

初始化一个新的Expo应用:      此命令将为项目创建一个新目录，名称为： **StickerSmash**。

```
 npx create-expo-app StickerSmash    
```

要在网络上运行该项目，我们需要安装以下依赖，这将有助于在网络上运行该项目：

```
npx expo install react-dom react-native-web @expo/webpack-config
```

运行：

```
npx expo start
```

google应用商店下载 Expo go,扫描运行出现的二维码，可以查看运行结果。  如果遇到超时，尝试关闭电脑的防火墙，随后运行成功。

代码示例：

```jsx
import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView  } from 'react-native-safe-area-context';

export default function App() {
  const [storesData, setstoresData] = useState('');
  const storeData = async value => {
    console.log('storeData', value);
    try {
      await AsyncStorage.setItem('my-key', value);
    } catch (e) {
      // saving error
    }
  };
  const getData = async () => {
    console.log('123');
    try {
      const value = await AsyncStorage.getItem('my-key');
      console.log('getData', value);
      if (value !== null) {
        // value previously stored
        console.log(value);
        setstoresData(value)
      }
    } catch (e) {
      console.log('error', e);
      // error reading value
    }
  };
  return (
      // 安全区域展示
      <SafeAreaView style={styles.container}>
        <Text>Open up App.js to start working on your app!123456</Text>
        <Button title="存储" onPress={() => storeData('hello RN')} />
        <Button title="获取" onPress={getData} />
        <Text>{storesData}</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    
  );
}
```



### Expo构建：

[创建你的第一个版本 - Expo 中文网 (nodejs.cn)](https://expo.nodejs.cn/build/setup/)

cnpm install --global eas-cli 

配置项目： eas build:configure   (生成 esa.json文件)

 eas build --platform android 

eas build -p android --profile preview

网络问题，上传失败。(上传有时成功，有时失败。挺烦的。)  尝试用科学上网。能访问到 [google.cloud.com](https://google.cloud.com/)  就行 

上传成功后，访问底下生成的链接，跳转到 Expo 网站查看生成的程序。

android 默认打包生成的是  aab 格式，如果要生成 apk 格式，需要做以下配置：

eas.json修改：

```
"preview": {
      "distribution": "internal",
      "ios": {
        "resourceClass": "m-medium"
      },"android": {
          "buildType": "apk"
      }
    },
```

此时运行  eas build -p android --profile preview  ，上传打包完成后，进入 Expo 网站，Download build 下载下来的是 apk 文件，手机可以安装查看。



[创建开发版本 - Expo 中文网 (nodejs.cn)](https://expo.nodejs.cn/develop/development-builds/create-a-build/)

**npx expo install expo-dev-client**   (暂不推荐使用)

eas build --profile preview --platform all  打包（包括ios）

eas build --profile development --platform android

启动：npx expo start --dev-client

eas update  更新

### [本地应用编译](https://expo.nodejs.cn/guides/local-app-development/#本地应用编译)

要在本地构建项目，你可以使用 Expo CLI 中的编译命令生成 **android** 和 **ios** 目录：

```
npx expo run:android
npx expo run:ios


npx expo prebuild --clean  重新构建
```

生成android目录后，打包行为和之前的一样   [打包发布 · React Native 中文网](https://reactnative.cn/docs/signed-apk-android)

最终打包报错了，暂未解决。

## react-native热更新与冷更新

[react-native热更新与冷更新踩坑指南 - 掘金 (juejin.cn)](https://juejin.cn/post/7190203133585260599#heading-1)

## 代码模板

```jsx
import * as React from 'react';
import {Text, View} from 'react-native';
import { SafeAreaView  } from 'react-native-safe-area-context';
function Product() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <View><Text>1</Text></View>
      </View>
    </SafeAreaView>
  );
}

export default Product;
```

## 问题：

### FlatList 触底加载

使用 FlatList 组件的 onEndReached 方法实现。注意不要把 FlatList 放在 ScrollView里面，会报性能错误。可以将头部，尾部的页面通过 `ListHeaderComponent`

`ListFooterComponent` 渲染到 FlatList 里面，以实现页面的布局

[RN解决警告：VirtualizedLists should never be nested inside plain ScrollViews-CSDN博客](https://blog.csdn.net/gang544043963/article/details/106525516)

