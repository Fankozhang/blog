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



## vite创建react项目

https://juejin.cn/post/7240838046789812282?searchId=20240111164719A152F422F9A9C8A6FEFD#heading-11

```
npm init vite@latest
```

按照vite创建项目流程，选择react配置即可创建react项目

### 创建路由

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

### 引入 ant design

```
npm install antd --save    /   yarn add antd     /  cnpm install antd --save
```

```
引入 Antd的css(全局样式）没有引入样式，样式也存在（非必要项）

@import 'antd/dist/antd.css';
```

jsx组件内使用（先引入，再使用）

```
  import { Button } from 'antd';
  
  <Button type="primary">Primary</Button>
```



## next创建react项目

[介绍 | Next.js 中文网 (nodejs.cn)](https://next.nodejs.cn/docs/#main-features)

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

