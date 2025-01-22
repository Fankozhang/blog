---
date: 2022-01-12
category:
  - react
tag:
  - react
  - bilibili
  - study
star: true
sticky: true
---



# react

## 我在b站看过的react的视频，学习的视频地址为： [React入门到实战(2022全网最新）_](https://www.bilibili.com/video/BV1Z44y1K7Fj/?spm_id_from=333.337.search-card.all.click&vd_source=f25f5a8d75a3a60d5a288f726803ec11) 

 这个视频是当时刚看完vue2的时候，顺道看的，由于做的都是有关vue的项目，没怎么用过react,这个视频可以让我对react有点基本了解吧。

技术栈为：React + Hook + React-router-v6 + Mobx + AntD    

 源码地址：https://gitee.com/react-cp/react-pc-code   

React基础讲义: https://www.yuque.com/fechaichai/qeamqf/xbai87   

React和Mobx讲义: https://www.yuque.com/fechaichai/qeamqf/apomum   

ReactPc项目讲义: https://www.yuque.com/fechaichai/tzzlh1 

我跟着视频写的源码放在了码云上了，项目大概写了一半。 [react_lianxi_jikeyuan: react练习项目-极客园 (gitee.com)](https://gitee.com/fankozhang/react_lianxi_jikeyuan) 

## 项目创建

轻松搞定Vite6+React19全家桶：https://juejin.cn/post/7453825145221644303

## vite创建react项目

https://juejin.cn/post/7240838046789812282?searchId=20240111164719A152F422F9A9C8A6FEFD#heading-11

[企业级前端工程化配置指南](https://segmentfault.com/a/1190000044458156)https://segmentfault.com/a/1190000044458156#item-6

```
npm init vite@latest
```

按照vite创建项目流程，选择react配置即可创建react项目



[一文搞定react-router-dom最新版V6路由的入门及使用_react-router-domv6-CSDN博客](https://blog.csdn.net/qq_38188228/article/details/136549361)

### 创建路由(方法1)

```
npm install react-router-dom
```

在App.jsx中引入路由

```jsx
// 引入组件
import About from './views/About'
import List from './views/List'
import Success from "./views/Success"

// 引入路由相关内容  BrowserRouter配置路由模式（最好设置在App跟组件上） Routes用设置路由出口   Route写在Routes内部，用于配置和匹配路由的路径和组件
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Link to="/about">About</Link>
        <Link to="/list">List</Link>
        <Link to="/success">Success</Link>
      
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/success/:ids" element={<Success />}></Route>
        </Routes>
       
        <h1>Vite + React</h1>
        <div>
        	  有Link的，一定要有Route和其匹配 
        </div>
     
      </BrowserRouter>
    </div>
  )
}

export default App
```

About.jsx  (路由组件)

```jsx
//  useNavigate 是用于路由函数式跳转的

import {  Routes, Route, Link,useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate()

  return (
    <div className="App">
       {/* 这里的'/success'不需要route，因为在App.jsx跟组件中有配置 navigate传参如下所示 */}
      <button onClick={()=>{navigate('/success',{replace:false})}}>go</button>
          <Link to="/success">about to the success</Link>
       <button onClick={()=>{navigate('/success/123456789')}}>go the success2</button>
    </div>
  )
}

export default About
```

### 路由参数获取

Success.jsx  (获取参数)

当路由和传参是以下路径时，用 useSearchParams 来获取参数

 `<Route path="/success?id=1234567" element={<Success />}></Route>`

`<button onClick={()=>{navigate('/success',{replace:false})}}>go</button>`

当路由和传参是以下路径时，用 useParams 来获取参数

`<Route path="/success/:ids" element={<Success />}></Route>`

`<button onClick={()=>{navigate('/success/123456789')}}>go the success2</button>`

```jsx
//  useSearchParams 用于获取路由跳转传递的参数

import { useSearchParams ,useParams} from 'react-router-dom'

function Success() {
    
    const [params]=useSearchParams()
    const id=params.get('id')
    
    const paramsUse=useParams()
    let ids=paramsUse.ids

return (
    <div className="App">
      <div>success</div>
      <div>id {id}</div>
      <div>ids {ids}</div>
    </div>
  )
}

export default Success
```

### 创建路由(方法2)

参考：[浅析React Router V6 useRoutes的使用-CSDN博客](https://blog.csdn.net/ncgNCGg/article/details/122409089)

```jsx
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import About from './About';
import Home from './Home';
const MyRoutes = () => {
	return useRoutes([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/home',
			element: <Home />,
		},
		{
			path: '/about',
			element: <About />
		},
	]);
};
function App() {
	return (
		<div>
			<Router>
				<MyRoutes />
			</Router>
		</div>
	);
}
export default App;
```



### 引入 ant design

[在 Vite 中使用 - Ant Design (antgroup.com)](https://ant-design.antgroup.com/docs/react/use-with-vite-cn)

```
npm install antd --save    /   yarn add antd     /  cnpm install antd --save
```

```
引入 Antd的css(全局样式）  没有引入样式，样式也存在（非必要项）

@import 'antd/dist/antd.css';
```

jsx组件内使用（先引入，再使用）

```
  import { Button } from 'antd';
  
  <Button type="primary">Primary</Button>
```

#### 组件中文配置

App 组件外包裹一层  ConfigProvider

```
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
 
return (
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
);
```

#### 修改antd组件内部样式

https://juejin.cn/post/6943774663524745247

## next创建react项目

[介绍 | Next.js 中文网 (nodejs.cn)](https://next.nodejs.cn/docs/#main-features)

https://nextjscn.org/docs/app/building-your-application/routing/pages



开源项目：https://blog.csdn.net/m0_37981569/article/details/144006475

创建项目命令

```bash
npx create-next-app@latest
```

### 应用路由、页面路由

应用路由属于较新的路由，这里使用的是应用路由。

### "use client"

next项目中使用  useState  需要在组件顶部加上  "use client";  

在`app`目录下，Next.js默认使用 [Server Components](https://beta.nextjs.org/docs/rendering/server-and-client-components#server-components) ，

您的组件或其父组件之一应该在顶部有 `"use client"`。这样，它就变成了 [Client Component](https://beta.nextjs.org/docs/rendering/server-and-client-components#client-components) ，一个“普通”的 React 组件

[javascript - 您正在导入一个需要 useState 的组件。它仅在客户端组件中有效，但其父组件均未标记为 "use client" - IT工具网 (coder.work)](https://www.coder.work/article/7990955)

### 页面跳转

```jsx
import Link from 'next/link'

 <Link href="/about">about</Link>
```

```jsx
'use client'

import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
  )
}
```

### 引入 antd

[在 Next.js 中使用 - Ant Design (antgroup.com)](https://ant-design.antgroup.com/docs/react/use-with-next-cn)

## umi 创建 react 项目(umi命令前加pnpm)

https://umijs.org/docs/guides/getting-started

```
pnpm dlx create-umi@latest

依次按步骤选择需要的模板

pnpm run dev
```

启动项目之前，可以再安装一些依赖

```
pnpm i @umijs/plugins -D

pnpm i antd @ant-design/pro-components -S      antdesign 的相关依赖安装后就可以直接使用
```

### Tailwind CSS 配置生成器

```
umi g tailwindcss       运行命令后可以直接使用Tailwind CSS
```

### umi-request 封装使用

https://github.com/umijs/umi-request/blob/master/README_zh-CN.md

下载依赖

```
pnpm install umi-request --save
```

request 封装

```js

import { notification } from 'antd';
import { history } from 'umi';
import { extend } from 'umi-request';


/** 异常处理程序 */
const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    // ........ 可以继续添加接口错误信息
  };
   
  const errorHandler = (error) => {
    const { response } = error;
    if (response && response.status) {
      const errorText = codeMessage[response.status] || response.statusText;
      const { status, url } = response;
      notification.error({
        message: `请求错误 ${status}: ${url}`,
        description: errorText,
      });
    } else if (!response) {
      notification.error({
        description: '网络异常，无法连接服务器',
        message: '网络异常',
      });
    }
    return response;
  };
   
  //对 extend 实例进行简单的封装
  const request = extend({
    prefix: 'http://11.11.11.11:8084',  // 统一的请求前缀
    timeout: 3000,                    // 超时时间
    headers: {                        // headers中搭载token等请求头信息
      'Content-Type': 'application/x-www-form-urlencoded',
      Authentication: localStorage.getItem('token') || '',
    },
    //处理请求错误 调用上面的错误处理逻辑
    errorHandler: errorHandler,
  });
   
   
  // 对实例request进行请求拦截
  // 可以在里面对url、option中的参数进行进一步处理
  request.interceptors.request.use((url, options) => {
    return {
      options: {
        ...options,
        interceptors: true,
      },
    };
  });
   
  // 对实例request进行响应拦截, 统一处理接口错误信息
  request.interceptors.response.use(async (response) => {
    if (response.status !== 200) {
      switch (response.status) {
        case 401:
          notification.warn({
            message: '登录超时，请重新登陆!',
          });
          history.push('/login');
          break;
      }
    }
    return response;
  });

  export default request
```

request 使用

```js
import request from "../utils/request";

export async function getDataList(params) {
    return request('/classes/page/list', {
      method: 'GET',
      params,
    });
  }
```



## 组件

### 图片展示

```
import imgUrl from './assets/MyLogo.jpg'

<img src={imgUrl} style={{width:'100px',height:'100px'}}/>

src里面直接写图片路径显示不出来
```



## 父组件调用子组件

参考： [react v-18父组件调用子组件的方法和数据_react18 父组件调用子组件方法-CSDN博客](https://blog.csdn.net/QQ_Empire/article/details/135134779)

###  常见问题：

`Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?`

发生这种情况是因为默认情况下，React 不允许组件访问其他组件的 DOM 节点。甚至自己的子组件也不行！这是故意的。Refs 是一种脱围机制，应该谨慎使用。手动操作 **另一个** 组件的 DOM 节点会使你的代码更加脆弱。

相反，**想要** 暴露其 DOM 节点的组件必须**选择**该行为。一个组件可以指定将它的 ref “转发”给一个子组件。下面是如何使用 `forwardRef` API：



### 子组件

[子组件](https://so.csdn.net/so/search?q=子组件&spm=1001.2101.3001.7020)     (通过useImperativeHandle() 抛出）

```jsx
import React, { useImperativeHandle } from "react";
// 注意 props 和 ref 是通过 React.forwardRef 传递的
// eslint-disable-next-line react/display-name
const TestThing =React.forwardRef((props ,ref) => {
    useImperativeHandle(
        ref,
        () => ({ num,setTheNum }) //父组件通过ref获取值，要在这里抛出
      );
    const [num, setNum] = useState(5)
    const setTheNum=(addNum)=>{
        setNum(num+addNum)
    }
    return (
      <div ref={ref}>
        {num}
      </div>
    )
  })
  
  export default TestThing
```



### 父组件

```jsx
import { useRef } from 'react';
import TestThing from './components/TestThing/index.jsx'
function App () {
  // ref 通过 ref 绑定子组件
  const TestThingRef = useRef(null);

  const clickComp=()=>{
    // TestThingRef.current 获取子组件抛出的数据和方法
    console.log(TestThingRef.current)  
    TestThingRef.current.setTheNum(2)   
  }
 
  return (
    <div className="App">
         <div>
        <TestThing ref={TestThingRef}></TestThing>
        <button onClick={clickComp}>新增</button>
      </div>
    </div>
  )
}

export default App
```



## redux使用

[一文让你彻底弄懂Redux的基本原理以及其如何在React中使用！ - 掘金 (juejin.cn)](https://juejin.cn/post/7369211590364069899?searchId=20240715162256D9B73649BE5BC206FDD5)

### 依赖下载

> 在React中使用redux，官方建议安装两个其他插件 - Redux Toolkit 和 React-Redux

1. `Redux Toolkit（RTK）`：官方推荐编写Redux逻辑的方式，是一套**工具**的集合集，简化书写方式
2. `React-Redux` ：用来 链接 Redux 和 React 组件的**中间件**

```
npm install @reduxjs/toolkit react-redux
```

### store/modules/counterStore.js

```js
import { createSlice } from '@reduxjs/toolkit'

const counter = createSlice({
  // 模块名称独一无二
  name: 'counter',
  // 初始数据
  initialState: {
    count: 5
  },
  // 修改数据的同步方法
  reducers: {
    // 不传参修改
    add (state) {
      state.count++
    },
    //传参修改， action为一个对象 对象中有一个固定的属性叫做payload 为传递过来的参数
    add2(state, action){
        state.count=state.count+action.payload
    }
  }
})

const { add,add2 } = counter.actions
const counterReducer = counter.reducer

// 导出修改数据的函数
export { add ,add2}
// 导出reducer
export default counterReducer
```

### store/index.js

```js
import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './modules/counterStore'

export default configureStore({
  reducer: {
    // 注册子模块
    counter: counterReducer
  }
})
```



### 入口文件中，通过Provider提供store数据

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 导入store
import store from './store'
// 导入store提供组件Provider
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  // 提供store数据
  <React.StrictMode>
  <Provider store={store}>
   
      <App />
   
  </Provider>
   </React.StrictMode>
  
)
```



### 页面使用数据，修改操作 App.js

```jsx
import { useSelector, useDispatch } from 'react-redux'
import { add,add2 } from './store/modules/counterStore'

function App () {
  // 使用数据
  const { count } = useSelector(state => state.counter)
  // 修改数据
  const dispatch = useDispatch()
  const clickHandler = () => {
    // 1. 生成action对象
    const action = add()
    // 2. 提交action进行数据更新
    dispatch(action)
  }
  const clickHandler2=(num)=>{
    console.log(num)
    // 1. 生成action对象
    const action2 = add2(num)
    // 2. 提交action进行数据更新
    dispatch(action2)
  }
  
  return (
    <div className="App">
      {count}
      {/* 不传参修改count的值 */}
      <button onClick={clickHandler}>+</button>
      {/* 传参修改count的值 */}
      <button onClick={()=>{clickHandler2(3)}}>+3</button>
    </div>
  )
}

export default App
```



## axios

[React 项目中引入 Axios | Axios 中文文档 (jsnoteclub.com)](https://jsnoteclub.com/axios/best-practices/react-axios/)

```
npm install axios
```

### 简易封装：request.js

```js
import axios from "axios"

// 创建一个 Axios 实例
const request = axios.create({
  baseURL: "http://1.94.16.149:8084", // 设置基本URL
  timeout: 5000, // 设置超时时间
//   headers: { Authorization: "Bearer " + token } // 设置请求头
})

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做一些处理，比如添加loading效果
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    // 对响应数据做一些处理，比如解析响应结果
    return response.data
  },
  (error) => {
    // 对响应错误做些什么
    return Promise.reject(error)
  }
)

export default request
```

### 使用

```jsx

import {useState, useEffect } from 'react';
import request from './utils/request.js';
function App () {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const getList=()=>{
    request.get('/classes/page/list').then(res=>{
      console.log(res.data.records)
      setResponseData(res.data.records)
    }).catch(error => {
      // 处理错误
      setError(error);
    });
  }

  useEffect(() => {
    getList()
  }, []); // 添加依赖以确保只在组件挂载时发起请求
  
  return (
    <div className="App">
      <div>
        {
          responseData && responseData.map(item => (
            <div key={item.id}>{item.className}-{item.classDesc}</div>
          ))
        }
      </div>
    </div>
  )
}

export default App

```

## Hooks

[React 内置 Hook – React 中文文档](https://zh-hans.react.dev/reference/react/hooks)

[【React Hooks】掌握及对比常用的8个Hooks（优化及使用场景） - 掘金 (juejin.cn)](https://juejin.cn/post/6916317848386142216#heading-21)

[一篇文章带你理解 React 中最“臭名昭著”的 useMemo 和 useCallback](https://juejin.cn/post/7165338403465068552)

### useState

```
const [state, setState] = useState(initialState)                // initialState 初始值
```

修改对象&&数组的值： [React函数组件状态Hook—useState《进阶-对象&&数组》_react usestate 对象数组-CSDN博客](https://blog.csdn.net/qq_42696432/article/details/134444702)

需要注意 setState 是异步操作



### useRef

#### 通过 ref 操作 DOM (参考父组件调用子组件)

React 将会把 DOM 节点设置为 ref 对象的 `current` 属性。现在可以借助 ref 对象访问 `<input>` 的 DOM 节点

```jsx
import { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);
  // ...
  return <input ref={inputRef} />;
}

function handleClick() {
    inputRef.current.focus();
  }
```

#### 无法获取自定义组件的 ref 

[useRef – React 中文文档](https://zh-hans.react.dev/reference/react/useRef#i-cant-get-a-ref-to-a-custom-component)

默认情况下，自定义组件不会暴露它们内部 DOM 节点的 ref。

需要将自定义组件包装在 [`forwardRef`](https://zh-hans.react.dev/reference/react/forwardRef) 里

```jsx
import { forwardRef } from 'react';

const MyInput = forwardRef(({ value, onChange }, ref) => {
  return (
    <input
      value={value}
      onChange={onChange}
      ref={ref}
    />
  );
});

export default MyInput;
```



### **useEffect**

#### **1. 不添加依赖项**

组件首次渲染执行一次，以及不管是哪个状态更改引起组件更新时都会重新执行

```js
useEffect(()=>{
    console.log('副作用执行了')
})
```

#### **2. 添加空数组**

组件只在首次渲染时执行一次

```js
useEffect(()=>{
	 console.log('副作用执行了')
},[])
```

#### **3. 添加特定依赖项**

副作用函数在首次渲染时执行，在依赖项发生变化时重新执行

```js
useEffect(() => {    
        console.log('副作用执行了')  
    }, [count])  
```



### useMemo(缓存值)

[useMemo – React 中文文档](https://zh-hans.react.dev/reference/react/useMemo)

[React中的useMemo和useCallback：它们的区别及应用场景_usememo usecallback 区别-CSDN博客](https://blog.csdn.net/alive_new/article/details/137477773)

useMemo是一个Hook，它接受一个函数和一个依赖数组。它返回该函数的缓存结果，并且只有当依赖项发生改变时才会重新计算。

主要用于优化性能

```jsx
import React, { useImperativeHandle, useMemo } from "react";
// 注意 props 和 ref 是通过 React.forwardRef 传递的
// eslint-disable-next-line react/display-name
const TestThing = React.forwardRef((props, ref) => {
  useImperativeHandle(
    ref,
    () => ({ num }) //父组件通过ref获取值，要在这里抛出
  );
  const [num, setNum] = useState(5)
  const doubleNum = (num) => {
    return num * 2
  }
  const cachedValue = useMemo(() => { return doubleNum(num) }, [num])
  return (
    <div>
      <div ref={ref}>
        {num}
        <button onClick={()=>{setNum(num*2)}}>+</button>
      </div>
      <div>
        <div>{cachedValue}</div>
      </div>
    </div>
  )
})
```

### useCallback(缓存函数)

[useCallback – React 中文文档](https://zh-hans.react.dev/reference/react/useCallback#usecallback)

 useCallback也是一个Hook，它接收一个函数和一个依赖数组。它返回一个缓存的函数，并且只有当依赖项发生改变时才会重新创建。

```jsx
import React, { useImperativeHandle } from "react";
// 注意 props 和 ref 是通过 React.forwardRef 传递的
// eslint-disable-next-line react/display-name
const TestThing2 = React.forwardRef((props, ref) => {
  useImperativeHandle(
    ref,
    () => ({ num }) //父组件通过ref获取值，要在这里抛出
  );
  const [num, setNum] = useState(5)
  const doubleNum=useCallback((addNum)=>{setNum(addNum+num)},[num])
  return (
    <div>
      <div ref={ref}>
        {num}
        <button onClick={()=>{doubleNum(5)}}>+</button>
      </div>
    </div>
  )
})
export default TestThing2
```



useMemo和useCallback的主要区别在于它们缓存的对象类型不同。useMemo用于缓存值（可以是任何值，包括对象、函数等），而useCallback专门用于缓存函数。

### useContext

#### 使用示例：

父组件 Home.jsx

```jsx
import React,{ useState,useContext } from "react";
import TestThing from "./components/TestThing/index";

export const ThingContext = React.createContext(123);  // 123是默认值
const Home = () => {
  const [num, setNum] = useState(10);
  return (
    <div >
      <div
        onClick={() => {
          setNum(num * 2);
        }}
      >
        {num}
      </div>

       {/* 子组件要修改值时，需要把修改数据的方法也通过value传递给后代 */}
      <ThingContext.Provider value={{num,setNum}}>
        <TestThing></TestThing>
        <Asp></Asp>
      </ThingContext.Provider>
      
    </div>
  );
};

const Asp=()=>{
    const {num,setNum}=useContext(ThingContext)
    return (
        <div onClick={()=>{setNum(num*2)}}>
          {num}
        </div>
      )
}

export default Home;
```

子组件 TestThing.jsx

```jsx
import { useContext } from "react";
import {ThingContext} from '../../Home.jsx'   // 从父组件获取的 createContext()

// eslint-disable-next-line react/display-name
const TestThing= (() => {
  const {num,setNum}=useContext(ThingContext)
 
  return (
    <div onClick={()=>{setNum(num*2)}}>
      {num}
    </div>
  )
})
export default TestThing
```

### useReducer

```jsx
import { useReducer } from 'react';
function counterReducer(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      case 'RESET':
        return { count: 0 };
      default:
        throw new Error();
    }
  }

function TestThing2() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </>
  );
}

export default TestThing2
```

## 参数，分页查询页面增删改查示例

### App.jsx 表格页

```jsx

import React, { useEffect, useState } from "react";
import { Button, Pagination, Form, Input, Table, Popconfirm } from "antd";
import { getDataList, editData, addData, delData } from "@/api/test";
import AddOrUpdate from "./addOrUpdate";

export default function Foo() {
  // 列表数据
  let [list, setList] = useState([]);
  //列表总数
  let [total, setTotal] = useState(0);
  // 获取列表数据时的分页参数
  let [pageQuery, setPageQuery] = useState({
    pageNum: 1,
    pageSize: 5,
  });
  // 获取列表数据时的搜索参数
  let [searchParam, setSearchParam] = useState({});

  // 搜索的表单数据
  const [form] = Form.useForm();

  // 弹窗是否显示
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  // 弹框标题
  const [title, setTitle] = useState("");

  // 列表点击的数据
  const [record, setRecord] = useState({});

  // 当页面加载或分页参数变化时，重新获取数据
  useEffect(() => {
    getList();
    console.log("副作用执行了");
  }, [pageQuery]);

  const getList = () => {
    getDataList({ ...pageQuery, ...searchParam }).then((res) => {
      console.log(res);
      if (res.code == "200") {
        setList(res.data.records);
        setTotal(res.data.total);
      }
    });
  };

  const onChange = (page: any, pageSize: any) => {
    setPageQuery({
      pageNum: page,
      pageSize: pageSize,
    });
  };

  const onShowSizeChange = (current: any, pageSize: any) => {
    setPageQuery({
      pageNum: current,
      pageSize: pageSize,
    });
  };

  // 表单提交时触发
  const handleSearch = () => {
    form.validateFields().then((values) => {
      console.log("values", values);
      setSearchParam(values);
      setPageQuery({ ...pageQuery, pageNum: 1 });
    });
  };

  const reset = () => {
    form.resetFields();
    setSearchParam({});
    setPageQuery({
      pageNum: 1,
      pageSize: 5,
    });
  };

  const onEdit = (value: any) => {
    console.log("onEdit", value, record);
    let temp = value;
    if (record && record.id) {
      temp.id = record.id;
    }
    editData(temp).then((res) => {
      if (res.code == 200) {
        getList();
      }
    });
  };

  const onAdd = (value: any) => {
    addData(value).then((res) => {
      if (res.code == 200) {
        getList();
      }
    });
  };

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      fixed: "left",
    },
    {
      title: "书名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "作者",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "操作",
      key: "operation",
      fixed: "right",
      width: 200,
      render: (_: any, record: any) => (
        <>
          <Button
            type="link"
            onClick={() => {
              console.log(record);
              setModalVisible(true);
              setTitle("修改");
              setRecord(JSON.parse(JSON.stringify(record)));
            }}
          >
            修改
          </Button>

          <Popconfirm
            title="删除"
            description="您确认要删除这条数据吗?"
            onConfirm={() => {
              console.log(record);
              delData(record.id).then((res) => {
                if (res) {
                  getList();
                }
              });
            }}
            okText="是"
            cancelText="否"
          >
            <Button danger type="link">
              删除
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];
  return (
    <div>
      <Form form={form} layout="inline" onFinish={handleSearch}>
        <Form.Item name="name" label="书名">
          <Input placeholder="请输入书名" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={reset}>
            重置
          </Button>
        </Form.Item>
      </Form>

      <div>
        <Button
          onClick={() => {
            setModalVisible(true);
            setTitle("新增");
            setRecord({
              name:'',
              author:''
            })
          }}
          type="primary"
        >
          新增
        </Button>
      </div>

      <Table
        dataSource={list}
        columns={columns}
        rowKey={(record) => record.id}
        pagination={false}
        style={{ marginBottom: "10px" }}
      />

      <Pagination
        total={total}
        showSizeChanger
        showQuickJumper
        showTotal={(total) => `共 ${total} 条`}
        current={pageQuery.pageNum}
        pageSize={pageQuery.pageSize}
        onChange={onChange}
        onShowSizeChange={onShowSizeChange}
      />

      <AddOrUpdate
        onEdit={onEdit}
        onAdd={onAdd}
        modalVisible={modalVisible}
        title={title}
        record={record}
        onOk={() => setModalVisible(false)}
        onCancel={() => {
          setModalVisible(false);
          setRecord({});
        }}
      ></AddOrUpdate>
    </div>
  );
}

```

### AddOrUpdate.jsx  表单弹框

```jsx

import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Input } from "antd";
export default function AddOrUpdate({
  title,
  modalVisible,
  record,
  onOk,
  onCancel,
  onEdit,
  onAdd,
}) {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(record);
  }, [record]);

  const handleOk = () => {
    form.submit();
    onOk();
  };

  const handleCancel = () => {
    form.setFieldsValue({});
    onCancel();
  };

  const onFinish = (values) => {
    console.log("values", values);
    if (title == "修改") {
      onEdit(values);
    } else if (title == "新增") {
      onAdd(values);
    }
  };

  return (
    <>
      <Modal
        open={modalVisible}
        title={title}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            取消
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            确认
          </Button>,
        ]}
      >
        {record && <p>record: {JSON.stringify(record)}</p>}
        <Form form={form} layout="inline" onFinish={onFinish}>
          <Form.Item name="name" label="书名">
            <Input placeholder="请输入书名" />
          </Form.Item>
          <Form.Item name="author" label="作者">
            <Input placeholder="请输入作者" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

```



## 简易的增删改查示例(通过Ref实现)

可参考： https://gitee.com/kong_yiji_and_lavmi/react-ant-admin/blob/vite/src/pages/list/search.tsx

https://blog.csdn.net/CuiCui_web/article/details/107108677

### App.jsx 表格页

```jsx
import { useState, useEffect, useRef } from "react";
import request from "./utils/request.js";    // 封装 axios 请求
import { Button } from "antd";
import AddOrUpdate from "./components/AddOrUpdate/index.jsx";
import { Table ,Pagination,Input} from "antd";
function App() {
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "班级名",
      dataIndex: "className",
      key: "className",
    },
    {
      title: "班级描述",
      dataIndex: "classDesc",
      key: "classDesc",
    },
    {
      title: "操作",
      key: "operation",
      fixed: "right",
      width: 100,
      render: (_, record) => (
        <>
          <a
            onClick={() => {
              editIt(record);
            }}
          >
            修改
          </a>
          <a
            style={{ marginLeft: "10px" }}
            onClick={() => {
              delIt(record);
            }}
          >
            删除
          </a>
        </>
      ),
    },
  ];
  const [queryParam,setQueryParam]=useState({
    pageNum: 1,
    pageSize: 5,
  });
  const [total,setTotal]=useState(0)
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const getList = () => {
    request
      .get("/classes/page/list",{params:queryParam})
      .then((res) => {
        // console.log(res.data.records);
        setResponseData(res.data.records);
        setTotal(res.data.total)
      })
      .catch((error) => {
        // 处理错误
        setError(error);
      });
  };
  const pageChange=(page, pageSize)=>{
    console.log(page,pageSize)
    setQueryParam({
      ...queryParam,
      pageNum: page,
      pageSize: pageSize,
    })
    // React的状态更新是异步的， 分页改变时，需要用 useEffect 来监听调用 getList 方法
    // console.log(queryParam) 由于状态更新是异步的，此处打印的还是原来的值
    // getList()
  }
  const search=()=>{
    setQueryParam({
      ...queryParam,
      pageNum: 1,
    })
  }
  const resetList=()=>{
    setQueryParam({
      pageNum: 1,
      pageSize: 5,
    })
  }
  useEffect(() => {
    getList()
  }, [queryParam]);

  const [formTitle, setFormTitle] = useState("");
  const editIt = (record) => {
    console.log("editIt", record);
    AddOrUpdateRef.current.setIsModalOpen(true);
    AddOrUpdateRef.current.form.resetFields();
    AddOrUpdateRef.current.form.setFieldsValue(record);
    if (record.id) {
      AddOrUpdateRef.current.setFormId(record.id);
    }
    setFormTitle("修改");
  };
  const addIt = () => {
    AddOrUpdateRef.current.setIsModalOpen(true);
    AddOrUpdateRef.current.form.resetFields();
    AddOrUpdateRef.current.form.setFieldsValue({});
    AddOrUpdateRef.current.setFormId("");
    setFormTitle("新增");
  };

  const delIt = (record) => {
    request.get(`/classes/del`, { params: { ids: record.id } }).then((res) => {
      if (res.code == 200) {
        getList();
      }
    });
  };

  useEffect(() => {
    getList();
  }, []); // 添加依赖以确保只在组件挂载时发起请求

  const handleInputChange=(event) =>{
    const { name, value } = event.target;
    console.log("name",name,value)
    setQueryParam(prevState => ({
      ...prevState,
      pageNum:1,
      [name]: value
    }));
  }
  // ref 通过 ref 绑定子组件
  const AddOrUpdateRef = useRef(null);
  return (
    <div className="App">
      <div>
        <div>
          <span>班级名：</span>
          <Input placeholder="请输入班级名" name='className' allowClear={true}   value={queryParam.className} onChange={handleInputChange} style={{width:'200px'}}/>
          <Button type="primary" onClick={search} style={{margin:'0 10px '}}>
            查询
          </Button>
          <Button onClick={resetList}>
            重置
          </Button>
        </div>
        <div style={{margin:'10px 0'}}>
          <Button type="primary" onClick={addIt}>
            新增
          </Button>
        </div>
        <div>
          <Table
            dataSource={responseData}
            columns={columns}
            rowKey={(record) => record.id}
            pagination={false}
            style={{marginBottom:'10px'}}
          />
          {/* 没有使用Table自带的分页器 */}
           <Pagination showQuickJumper showSizeChanger current={queryParam.pageNum} pageSize={queryParam.pageSize}
            total={total} onChange={pageChange}  showTotal={(total) => `共 ${total} 条`} />
        </div>
      </div>

      <div>
        <AddOrUpdate
          ref={AddOrUpdateRef}
          formTitle={formTitle}
          onRefreshTable={getList}
        ></AddOrUpdate>
      </div>
    </div>
  );
}

export default App;

```

### AddOrUpdate.jsx  表单弹框

```jsx
import React, { useState, useImperativeHandle } from "react";
import { Button, Modal, Form, Input} from "antd";
import request from "../../utils/request";
// 注意 props 和 ref 是通过 React.forwardRef 传递的
// eslint-disable-next-line react/display-name
const AddOrUpdate = React.forwardRef((props, ref) => {
  useImperativeHandle(
    ref,
    () => ({ isModalOpen, setIsModalOpen, form, formId, setFormId }) 
    //父组件通过ref获取值，要在这里抛出
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formId, setFormId] = useState("");
  const [form] = Form.useForm();
  const handleOk = () => {
    setIsModalOpen(false);
    console.log("form", form.getFieldsValue());
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    console.log("finish", values);
    console.log("formId", formId);
    console.log("finishLast", { ...form.getFieldsValue(), id: formId });
    if (formId) {
      request
        .post("/classes/edit", { ...form.getFieldsValue(), id: formId })
        .then((res) => {
          console.log(res.data);
          if (res.code == 200) {
            setIsModalOpen(false);
            props.onRefreshTable();
          }
        });
    } else {
      request.post("/classes/add", form.getFieldsValue()).then((res) => {
        console.log(res.data);
        if (res.code == 200) {
          setIsModalOpen(false);
          props.onRefreshTable();
        }
      });
    }
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  return (
    <>
      <Modal
        title={props.formTitle}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        autoComplete="off"
        footer={null}
      >
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
        >
          {/* <Form.Item
            name="id"
            label="id"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item> */}
          <Form.Item
            name="className"
            label="班级名"
            rules={[
              {
                required: true,
                message: "班级名不能为空",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="classDesc" label="班级描述">
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button onClick={handleCancel} style={{marginRight:'10px'}}>
              取消
            </Button>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
});

export default AddOrUpdate;

```

