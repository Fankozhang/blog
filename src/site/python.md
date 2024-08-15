---
icon: edit
date: 2022-01-05
tag:
  - python
  - python

---

# python

 下载： [Download Python | Python.org](https://www.python.org/downloads/)    安装时勾选 add to path

[Python 教程 (w3schools.cn)](https://www.w3schools.cn/python/default.asp)

[Python教程 - 廖雪峰的官方网站 (liaoxuefeng.com)](https://www.liaoxuefeng.com/wiki/1016959663602400)

## python主要的数据类型和方法

ai生成 请生成一张表格，一列展示python中所有的数据类型，一列展示这种数据类型存储什么类型的数据，一列展示这种数据类型的特点，一列展示这种数据类型有哪些方法，一列展示这种方法的使用方法和作用。 

| 数据类型 | 存储类型 | 特点                 | 方法           | 作用                           |
| -------- | -------- | -------------------- | -------------- | ------------------------------ |
| int      | 整数     | 精度有限             | `__add__`      | 加法                           |
| int      | 整数     | 精度有限             | `__sub__`      | 减法                           |
| int      | 整数     | 精度有限             | `__mul__`      | 乘法                           |
| int      | 整数     | 精度有限             | `__truediv__`  | 真除法                         |
| int      | 整数     | 精度有限             | `__floordiv__` | 整除法                         |
| int      | 整数     | 精度有限             | `__mod__`      | 取模                           |
| int      | 整数     | 精度有限             | `__pow__`      | 幂运算                         |
| int      | 整数     | 精度有限             | `__abs__`      | 取绝对值                       |
| int      | 整数     | 精度有限             | `__bool__`     | 转换为布尔类型                 |
| float    | 浮点数   | 精度有限             | `__add__`      | 加法                           |
| float    | 浮点数   | 精度有限             | `__sub__`      | 减法                           |
| float    | 浮点数   | 精度有限             | `__mul__`      | 乘法                           |
| float    | 浮点数   | 精度有限             | `__truediv__`  | 真除法                         |
| float    | 浮点数   | 精度有限             | `__floordiv__` | 整除法                         |
| float    | 浮点数   | 精度有限             | `__mod__`      | 取模                           |
| float    | 浮点数   | 精度有限             | `__pow__`      | 幂运算                         |
| float    | 浮点数   | 精度有限             | `__abs__`      | 取绝对值                       |
| float    | 浮点数   | 精度有限             | `__bool__`     | 转换为布尔类型                 |
| complex  | 复数     | 实部和虚部都是浮点数 | `__add__`      | 加法                           |
| complex  | 复数     | 实部和虚部都是浮点数 | `__sub__`      | 减法                           |
| complex  | 复数     | 实部和虚部都是浮点数 | `__mul__`      | 乘法                           |
| complex  | 复数     | 实部和虚部都是浮点数 | `__truediv__`  | 真除法                         |
| complex  | 复数     | 实部和虚部都是浮点数 | `__floordiv__` | 整除法                         |
| complex  | 复数     | 实部和虚部都是浮点数 | `__mod__`      | 取模                           |
| complex  | 复数     | 实部和虚部都是浮点数 | `__pow__`      | 幂运算                         |
| complex  | 复数     | 实部和虚部都是浮点数 | `__abs__`      | 取模                           |
| complex  | 复数     | 实部和虚部都是浮点数 | `__bool__`     | 转换为布尔类型                 |
| bool     | 布尔值   | 只有True和False      | `__and__`      | 与运算                         |
| bool     | 布尔值   | 只有True和False      | `__or__`       | 或运算                         |
| bool     | 布尔值   | 只有True和False      | `__not__`      | 非运算                         |
| bool     | 布尔值   | 只有True和False      | `__bool__`     | 转换为整数                     |
| str      | 字符串   | 一串字符             | `__add__`      | 连接字符串                     |
| str      | 字符串   | 一串字符             | `__mul__`      | 重复字符串                     |
| str      | 字符串   | 一串字符             | `__getitem__`  | 获取指定位置的字符             |
| str      | 字符串   | 一串字符             | `__len__`      | 获取字符串长度                 |
| str      | 字符串   | 一串字符             | `__contains__` | 判断是否包含子串               |
| str      | 字符串   | 一串字符             | `upper()`      | 转换为大写                     |
| str      | 字符串   | 一串字符             | `lower()`      | 转换为小写                     |
| str      | 字符串   | 一串字符             | `strip()`      | 去除两端的空格                 |
| str      | 字符串   | 一串字符             | `replace()`    | 替换子串                       |
| str      | 字符串   | 一串字符             | `split()`      | 按照指定分隔符分割为列表       |
| list     | 列表     | 一组有序的元素       | `__add__`      | 连接列表                       |
| list     | 列表     | 一组有序的元素       | `__mul__`      | 重复列表                       |
| list     | 列表     | 一组有序的元素       | `__getitem__`  | 获取元素                       |
| list     | 列表     | 一组有序的元素       | `__setitem__`  | 设置元素                       |
| list     | 列表     | 一组有序的元素       | `__delitem__`  | 删除元素                       |
| list     | 列表     | 一组有序的元素       | `__len__`      | 获取列表长度                   |
| list     | 列表     | 一组有序的元素       | `__contains__` | 判断是否包含元素               |
| list     | 列表     | 一组有序的元素       | `append()`     | 在列表末尾添加元素             |
| list     | 列表     | 一组有序的元素       | `extend()`     | 在列表末尾添加另一个列表的元素 |

| 类型  | 描述 | 示例                 | 方法           | 描述                                   |
| ----- | ---- | -------------------- | -------------- | -------------------------------------- |
| list  | 列表 | 一组有序的元素       | `insert()`     | 在指定位置插入元素                     |
| list  | 列表 | 一组有序的元素       | `remove()`     | 删除指定元素                           |
| list  | 列表 | 一组有序的元素       | `pop()`        | 删除并返回指定位置的元素               |
| list  | 列表 | 一组有序的元素       | `index()`      | 返回指定元素的位置                     |
| list  | 列表 | 一组有序的元素       | `count()`      | 返回指定元素在列表中出现的次数         |
| list  | 列表 | 一组有序的元素       | `sort()`       | 对列表进行排序                         |
| list  | 列表 | 一组有序的元素       | `reverse()`    | 反转列表                               |
| tuple | 元组 | 一组有序的不可变元素 | `__add__`      | 连接元组                               |
| tuple | 元组 | 一组有序的不可变元素 | `__mul__`      | 重复元组                               |
| tuple | 元组 | 一组有序的不可变元素 | `__getitem__`  | 获取元素                               |
| tuple | 元组 | 一组有序的不可变元素 | `__len__`      | 获取元组长度                           |
| tuple | 元组 | 一组有序的不可变元素 | `__contains__` | 判断是否包含元素                       |
| set   | 集合 | 一组无序的元素       | `__or__`       | 并集                                   |
| set   | 集合 | 一组无序的元素       | `__and__`      | 交集                                   |
| set   | 集合 | 一组无序的元素       | `__sub__`      | 差集                                   |
| set   | 集合 | 一组无序的元素       | `__xor__`      | 对称差集                               |
| set   | 集合 | 一组无序的元素       | `__len__`      | 获取集合元素个数                       |
| set   | 集合 | 一组无序的元素       | `__contains__` | 判断元素是否在集合中                   |
| set   | 集合 | 一组无序的元素       | `add()`        | 添加元素到集合中                       |
| set   | 集合 | 一组无序的元素       | `remove()`     | 删除集合中的指定元素                   |
| set   | 集合 | 一组无序的元素       | `pop()`        | 随机删除并返回一个元素                 |
| set   | 集合 | 一组无序的元素       | `clear()`      | 清空集合                               |
| dict  | 字典 | 一组键值对           | `__len__`      | 获取字典中键值对的个数                 |
| dict  | 字典 | 一组键值对           | `__contains__` | 判断键是否存在于字典中                 |
| dict  | 字典 | 一组键值对           | `keys()`       | 获取字典中所有的键                     |
| dict  | 字典 | 一组键值对           | `values()`     | 获取字典中所有的值                     |
| dict  | 字典 | 一组键值对           | `items()`      | 获取字典中所有的键值对                 |
| dict  | 字典 | 一组键值对           | `get()`        | 获取指定键的值，如果不存在则返回默认值 |
| dict  | 字典 | 一组键值对           | `pop()`        | 删除指定键并返回对应的值               |
| dict  | 字典 | 一组键值对           | `popitem()`    | 随机删除并返回一个键值对               |
| dict  | 字典 | 一组键值对           | `clear()`      | 清空字典                               |

## 文件操作

 [Python File(文件) 方法 | 菜鸟教程 (runoob.com)](https://www.runoob.com/python/file-methods.html) 

open() 方法用于打开一个文件，并返回文件对象，在对文件进行处理过程都需要使用到这个函数 

```python
open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)
```

参数说明:

- file: 必需，文件路径（相对或者绝对路径）。
- mode: 可选，文件打开模式
- buffering: 设置缓冲
- encoding: 一般使用utf8
- errors: 报错级别
- newline: 区分换行符
- closefd: 传入的file参数类型
- opener: 设置自定义开启器，开启器的返回值必须是一个打开的文件描述符。

mode 参数有：

| 模式 | 描述                                                         |
| :--- | :----------------------------------------------------------- |
| t    | 文本模式 (默认)。                                            |
| x    | 写模式，新建一个文件，如果该文件已存在则会报错。             |
| b    | 二进制模式。                                                 |
| +    | 打开一个文件进行更新(可读可写)。                             |
| U    | 通用换行模式（不推荐）。                                     |
| r    | 以只读方式打开文件。文件的指针将会放在文件的开头。这是默认模式。 |
| rb   | 以二进制格式打开一个文件用于只读。文件指针将会放在文件的开头。这是默认模式。一般用于非文本文件如图片等。 |
| r+   | 打开一个文件用于读写。文件指针将会放在文件的开头。           |
| rb+  | 以二进制格式打开一个文件用于读写。文件指针将会放在文件的开头。一般用于非文本文件如图片等。 |
| w    | 打开一个文件只用于写入。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。 |
| wb   | 以二进制格式打开一个文件只用于写入。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。一般用于非文本文件如图片等。 |
| w+   | 打开一个文件用于读写。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。 |
| wb+  | 以二进制格式打开一个文件用于读写。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。一般用于非文本文件如图片等。 |
| a    | 打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。 |
| ab   | 以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。 |
| a+   | 打开一个文件用于读写。如果该文件已存在，文件指针将会放在文件的结尾。文件打开时会是追加模式。如果该文件不存在，创建新文件用于读写。 |
| ab+  | 以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。如果该文件不存在，创建新文件用于读写。 |

默认为文本模式，如果要以二进制模式打开，加上 **b** 。

file 对象使用 open 函数来创建，下表列出了 file 对象常用的函数：

| 序号 | 方法及描述                                                   |
| :--- | :----------------------------------------------------------- |
| 1    | [file.close()](https://www.runoob.com/python/file-close.html)关闭文件。关闭后文件不能再进行读写操作。 |
| 2    | [file.flush()](https://www.runoob.com/python/file-flush.html)刷新文件内部缓冲，直接把内部缓冲区的数据立刻写入文件, 而不是被动的等待输出缓冲区写入。 |
| 3    | [file.fileno()](https://www.runoob.com/python/file-fileno.html)返回一个整型的文件描述符(file descriptor FD 整型), 可以用在如os模块的read方法等一些底层操作上。 |
| 4    | [file.isatty()](https://www.runoob.com/python/file-isatty.html)如果文件连接到一个终端设备返回 True，否则返回 False。 |
| 5    | [file.next()](https://www.runoob.com/python/file-next.html)返回文件下一行。 |
| 6    | [file.read([size\])](https://www.runoob.com/python/python-file-read.html)从文件读取指定的字节数，如果未给定或为负则读取所有。 |
| 7    | [file.readline([size\])](https://www.runoob.com/python/file-readline.html)读取整行，包括 "\n" 字符。 |
| 8    | [file.readlines([sizeint\])](https://www.runoob.com/python/file-readlines.html)读取所有行并返回列表，若给定sizeint>0，则是设置一次读多少字节，这是为了减轻读取压力。 |
| 9    | [file.seek(offset[, whence\])](https://www.runoob.com/python/file-seek.html)设置文件当前位置 |
| 10   | [file.tell()](https://www.runoob.com/python/file-tell.html)返回文件当前位置。 |
| 11   | [file.truncate([size\])](https://www.runoob.com/python/file-truncate.html)截取文件，截取的字节通过size指定，默认为当前文件位置。 |
| 12   | [file.write(str)](https://www.runoob.com/python/python-file-write.html)将字符串写入文件，返回的是写入的字符长度。 |
| 13   | [file.writelines(sequence)](https://www.runoob.com/python/file-writelines.html)向文件写入一个序列字符串列表，如果需要换行则要自己加入每行的换行符。 |

### 读取文件

简单示例：读取同目录下 a.txt 文件的内容打印出来

```python
f=open('a.txt', 'r',encoding="UTF-8")
print(f.read())

# close 方法解除程序对文件的占用
f.close()
```

通过文件路径来获取文件

```python
fs=open('D:/pythonDemo/print-test/x.vue','r',encoding="UTF-8")

print(fs.read())

fs.close()
```

通过 with open() as  可以自动解除对程序的占用

```python
with open('a.txt', 'r',encoding="UTF-8") as f2:
    print(f2.read())
```

### 写入

```python
#1.打开文件
f =open('a.txt','w')
#2.文件写入
f.write('hello world')
#3.内容刷新
f.flush()

# close方法内置了 flush 的功能
# f.close()
```

注意：

W模式，文件不存在，会创建新文件
W模式，文件存在，会清空原有内容

直接调用wrte,内容并未真正写入文件，而是会积攒在程序的内存中，称之为缓冲区
当调用flush的时候，内容会真正写入文件
这样做是避免频繁的操作硬盘，导致效率下降（攒一堆，一次性写磁盘）

### 追加内容

```python
#1.打开文件
f =open('a.txt','a')
#2.文件写入
f.write(' hello world')
#3.内容刷新
f.flush()
f.close()
```

注意事项：
a模式，文件不存在，会创建新文件
a模式，文件存在，会在原有内容后面继续写入中
可以使用”\n”来写出换行符

### 文件备份

以下将 a.txt 内容备份到 b.txt 文件里，没有 b.txt 文件会自动创建

```
f=open('a.txt','r')
fs=open('b.txt','w')
fs.write(f.read())
f.close()
fs.close()
```

## 异常捕获

 以下为简单的*try....except...else*的语法： 此处 Exception 是顶层，捕获所有异常

```
try:
    print(1/0)
except Exception as e:
    print(e)
else:
    print('我是else,是没有异常的时候执行的代码')
```

 try-finally 语句无论是否发生异常都将执行最后的代码。 

```
try:
    f=open('test.txt','r')
except Exception as e:
    f =open('test.txt','w')
else:
    print('没有异常，真开心')
finally:
    f.close()
```

异常具有传递性

## 模块

[详解Python模块化——模块（Modules）和包（Packages）_python包与模块-CSDN博客](https://blog.csdn.net/Bit_Coders/article/details/119318000)

**什么是模块**
Python模块（Module）,是一个Python文件，以.py结尾.模块能定义函数，类和变量,模块里也能包含可执行的代码
模块的作用：python中有很多各种不同的模块，每一个模块都可以帮助我们快速的实现一些功能，比如实现和时间相关的功能就可以使用time模块,我们可以认为一个模块就是一个工具包，每一个工具包中都有各种不同的工具供我们使用,进而实现各种不同的功能.
大白话：模块就是一个Python文件，里面有类、函数、变量等，我们可以拿过来用（导入模块去使用）

**导入方式**

```
语法一:import + 模块名
语法二:import + 模块名 + as + 别名
语法三:from + 模块名 + import + *
以上均为全部导入
前两者的区别在于当调用模块名很长时，可选择第二种
后两者的区别在于当使用第二种语法导入函数是需要别名作为前缀如：别名.fun()
而使用第三种语法时可直接使用：fun()
但是当程序中导入多个模块时第三种语法不易区分fun()来自于哪个模块，此时就体现了第二种语法的好处（因为它使用时带前缀即别名)
在python3中使用语法三需要在同一级文件下创建一个__init__包,__init__包要用__all__=[]将需要调用的模块放进去才能用，没有放进去的模块不可在此语法中调用

语法四:from + 模块名 + import + 指定部分（如：fun1、fun2、name2）
#功能定义别名
from + 模块名 + import + 功能 as 别名
这种语法属于部分导入
其缺点和语法三相同,无法分辨所调用来自哪个模块

```

1.如何自定义模块并导入？
在Python代码文件中正常写代码即可，通过import、from关键字和导入Python内置模块一样导入即可使用。
2.main变量的功能是？
if——main——=”——main——”表示，只有当程序是直接执行的才会进入
f内部，如果是被导入的，则f无法进入
3.注意事项
不同模块，同名的功能，如果都被导入，那么后导入的会覆盖先导入的
——al——变量可以控制import*的时候哪些功能可以被导入

## python包

```
1.什么是Python的包？
包就是一个文件夹，里面可以存放许多Python的模块（代码文件)，通过包，在逻辑上将一批模块归为一类，方便使用。
2.__init__.py文件的作用？
创建包会默认自动创建的文件，通过这个文件来表示一个文件夹是Python的包，而非普通的文件夹。
3.all变量的作用？
同模块中学习到的是一个作用，控import*能够导入的内容


包里面要有  __init__.py  文件
__init__.py  文件中   __all__=['module1','module2']  控制import * 能访问的模块
```

## 安装第三方包~pip

[PyPI · The Python Package Index](https://pypi.org/)

第三方包的安装非常简单，我们只需要使用Python内置的pip程序即可。
打开我们许久未见的：命令提示符程序，在里面输入：
pip install 包名称
即可通过网络快速安装第三方包

我们可以通过如下命令，让其连接国内的网站进行包的安装：
pip install -i https://pypi..tuna.tsinghua.edu.cn/simple 包名称    (报错了，如下)

pip安装第三方库报错pip._vendor.urllib3.exceptions.ReadTimeoutError: HTTPSConnectionPool解决方法

 [(205条消息) pip安装第三方库报错pip._vendor.urllib3.exceptions.ReadTimeoutError: HTTPSConnectionPool解决方法_pip._vendor.urllib3.exceptions.sslerror: [ssl: dec_qq_doooppooo的博客-CSDN博客](https://blog.csdn.net/qq_40803429/article/details/121671905) 



经测试，以下安装有效

 pip --default-timeout=100 install 库名称 -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com 



 vscode下载的python包通常会存放在电脑的Python安装目录下的Lib/site-packages文件夹中。具体路径可能因操作系统和Python版本而异。 

```
pip install --index-url https://mirrors.aliyun.com/pypi/simple/ <package-name>    实测下载有效
```



## Python数据和Json数据的相互转化

```txt
#导入json模块

import json

#准备符合格式json格式要求的oython数据

data = [{"name":"老王","age":16},{"name":"张三","age":20}]

#通过json.dumps(data)方法把python数据转化为了json数据,ensure_ascii=False不适用ascll编码

data= json.dumps(data)
data=json.dumps(data,ensure_ascii=False)

#通过json.loads(data)方法把json数据转化为了python数据

data= json.loads(data)
```

## pyecharts

文档： [简介 - pyecharts - A Python Echarts Plotting Library built with love.](https://pyecharts.org/#/zh-cn/intro) 

pyecharts-gallery 官方示例库  [中文简介 - Document (pyecharts.org)](https://gallery.pyecharts.org/#/README) 



下载pyecharts包；使用时注意pyecharts版本，旧版文档，使用方法不同

通过pyecharts会在你的workspace中出现一个render的html ,通过使用os模块的os.system("render.html")自动打开html文件

```
from pyecharts.charts import Bar
from pyecharts import options as opts
import os
 
bar = Bar()
bar.add_xaxis(["衬衫", "毛衣", "领带", "裤子", "风衣", "高跟鞋", "袜子"])
bar.add_yaxis("商家A", [114, 55, 27, 101, 125, 27, 105])
bar.add_yaxis("商家B", [57, 134, 137, 129, 145, 60, 49])
bar.set_global_opts(title_opts=opts.TitleOpts(title="某商场销售情况"))
bar.render()
 
os.system("render.html")
```

## python 类型注解

 [(205条消息) Python类型注解_python 注解_zy010101的博客-CSDN博客](https://blog.csdn.net/zy010101/article/details/124319230) 

## python连接mysql

参考：  [(205条消息) pymysql详解（connect连接、游标cursor、获取查询结果集、获取实时数据、解决查询数据为历史数据问题、insert into需要注意的地方）_pymysql cursor_XC_SunnyBoy的博客-CSDN博客](https://blog.csdn.net/XC_SunnyBoy/article/details/108546128) 

安装 pymysql

 pymysql.connect() 方法返回的是Connections模块下的Connection 实例，connect() 方法传参就是在给Connection类的 _*init*_ 初始化魔术方法参数，也可以理解为 connect() 方法就是在创建新的 Connetion 类 

| connect() / Connection初始化 常用参数 | 说明   |
| ------------------------------------- | ------ |
| host                                  | 主机ip |
| user                                  | 用户名 |
| password                              | 密码   |
| database                              | 数据库 |
| port                                  | 端口号 |
| charset                               | 字符集 |

**数据库连接**   

一定要注意链接的信息要填写准确，否则会报错

```python
import pymysql

# 打开数据库连接   autocommit=True 设置自动提交
db = pymysql.connect(host='localhost',user='root', password='root', database='python',
,autocommit=True)

# 使用 cursor() 方法创建一个游标对象 cursor

cursor = db.cursor()

# 数据库操作需要使用Cursor类的实例（即通过 db.cursor() 创建的 cursor 游标对象）提供的 execute() 方法，执行SQL语句，成功则返回结果
# 这里插入数据的时候插入的表名有个需要注意的地方，插入表名的时候可以带着库名，否则可能有意想不到的错误
sql = "insert into t_book(book_name,price,stock) values('西游记',100,100)"
s=cursor.execute(sql)
# 修改数据时，通过commit确认
# autocommit=True 设置自动提交后，可以不用这一步
db.commit()
print(s)

sql2='select * from t_book'
cursor.execute(sql2)
#调用了fetchall方法：查询时获取结果集中的所有行，一行构成一个元组，然后再将这些元组返回（即嵌套元组）
res=cursor.fetchall()
print(res)


# 关闭数据库连接
db.close()
```

**获取查询结果集的方法**

 当调用 cursor.execute(sql) 方法查询数据的时候，如果执行成功，获取查询的结果集的方法有

| 名称                 | 说明                                                         |
| -------------------- | ------------------------------------------------------------ |
| fetchone()           | 获取结果集的下一行                                           |
| fetchmany(size=None) | size指定返回的行数,None则返回空元组                          |
| fetchall()           | 返回剩下的所有行,如果走到末尾,就返回空元组,否则返回一个元组,其元素是每一行的记录封装的一个元组 |
| cursor.rownumber     | 返回当前行号.可以修改,支持负数                               |
| cursor.rowcount      | 返回的总行数                                                 |

 注意： fetch操作的是结果集，结果集是保存在客户端的，也就是说fetch的时候，查询已经结束了

## python爬虫

参考： [入门学Python一定要知道的requests模块安装及使用 - 掘金 (juejin.cn)](https://juejin.cn/post/6999135569322180621) 

 [Python网络请求库Requests，妈妈再也不会担心我的网络请求了(一) - 掘金 (juejin.cn)](https://juejin.cn/post/6844903789825114126) 

 [Python网络请求库Requests，妈妈再也不会担心我的网络请求了(二) - 掘金 (juejin.cn)](https://juejin.cn/post/6844903791544762381) 

### 使用requests库 （get请求）

```python
import requests
from bs4 import BeautifulSoup    # pip install requests beautifulsoup4

# 目标url
url = "https://www.baidu.com"

# 向目标url发送get请求
response = requests.get(url)

# 打印响应内容
response.encoding='utf-8'  #设置编码格式
print(response.text)
print(response.content.decode()) # 注意这里！不设置编码格式时，推测出的编码字符集


# 检查请求是否成功
if response.status_code == 200:
    # 解析HTML
    soup = BeautifulSoup(response.text, 'html.parser')
    # 提取数据
    # 假设我们要找的是所有的段落<a>标签
    paragraphs = soup.find_all('a')
    # 打印每个段落的内容
    for paragraph in paragraphs:
        print(paragraph.get_text())
else:
    print(f"Failed to retrieve the page. Status code: {response.status_code}")
    

print(response.url)							# 打印响应的url
print(response.status_code)					# 打印响应的状态码
print(response.request.headers)				# 打印响应对象的请求头
print(response.headers)						# 打印响应头
print(response.request._cookies)			# 打印请求携带的cookies
print(response.cookies)						# 打印响应中携带的cookies

# 把页面源码写入文件中
f=open('baidu.html','w',encoding='UTF-8')
f.write(response.content.decode())
f.flush()
f.close()

# get方法有参
cs_url = 'http://www.so.com/s'
param  = {'ie':'utf-8', 'q':'query'}
r = requests.get (cs_url, params = param)
print r.url
```

1.response.text是requests模块按照chardet模块推测出的编码字符集进行解码的结果

2.网络传输的字符串都是bytes类型的，所以response.text = response.content.decode('推测出的编码字符集')

### post请求

```python
import requests
# 目标url
url = "https://www.oschina.net/MjAyMi8xLzE2/v1/search/index"
# 请求体
data={
    "from":0,
    "keyword":"python",
    "size": 20,
    "type": "DEFAULT_ALL"
}
#请求头
headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.62"}
# 向目标url发送get请求
response = requests.post(url,data=data,headers=headers)
print(response.text)
#如果返回的数据是json,可以直接resp.json()
print(response.json())

# 打印列表数据
for item in response.json()['data']:
    print(item)
```

### 请求分页数据示例：

```python
import requests
import time

def fetch_and_print_page_data(base_url, params):
    # url = f"{base_url}?page={page}"
    # response = requests.get(url)
    response = requests.get(base_url,params=params)
    
    if response.status_code == 200:
        data = response.json()
        for item in data['rows']:
            print(item['name'])
        print(params['pageNum'])
    else:
        print(f"Failed to retrieve page {params}: {response.status_code}")

# 基础URL
base_url = "https://example.com/list"

# 初始页码
params = {
    'pageNum': 1,
    'pageSize': 10
}

# 循环请求数据
while True:
    fetch_and_print_page_data(base_url, params)
    params['pageNum']=params['pageNum']+1
    time.sleep(1)  # 等待1秒
```



### 上传文件

```
url = 'https://httpbin.org/post'
files = {'file': open('image.png', 'rb')}
response = requests.post(url, files=files)
print(response.text)
```

## pandas数据处理

[入门 — pandas 2.2.1 文档 - pandas 中文](https://pandas.ac.cn/docs/getting_started/index.html#getting-started)

https://juejin.cn/post/7303924750655930383?searchId=202408101102496C05153C03052860F91A

[pandas用法-全网最详细教程_pandas详细教程-CSDN博客](https://blog.csdn.net/Strive_For_Future/article/details/126710810)

下载：

```
pip install pandas
```

### pandas 数据格式 Series  DataFrame

```python
import pandas as pd

# 创建Series
s = pd.Series([1, 3, 5, 6, '8'])
print(s)   # 输出Series


# DataFrame
data = {
    'Name': ['Tom', 'Nick', 'John', 'Tom'],
    'Age': [20, 21, 19, 20],
    'City': ['New York', 'London', 'Berlin', 'Paris']
}
df = pd.DataFrame(data)
```

### 读取 excel 文件数据

```python
import pandas as pd

# 从Excel文件读取数据  (可能需要 pip install xlrd)
dExcel = pd.read_excel('work.xls')
# dExcel = pd.read_excel('work.xls',sheet_name='Sheet2')   有多个sheet页可以指定读取的 sheet 名称,不加这个参数读取第一个 sheet
print(dExcel)
print(dExcel.duplicated())   # 检测是否有重复值
print(dExcel.drop_duplicates())   # 删除重复值

# 读取所有工作表(所有sheet)    想要读取所有的sheet，可以将sheet_name设置为None，这样它会返回一个字典，其中键是sheet的名字，值是对应的DataFrame。
all_sheets_data = pd.read_excel('work.xls', sheet_name=None)
# 现在all_sheets_data是一个字典，每个键对应一个工作表的名字，值是一个DataFrame
print('all_sheets_data',all_sheets_data)
for sheet_name, data in all_sheets_data.items():
    print(f"Data from {sheet_name}:")
    print(data)
    print("\n---\n")
```

### pandas如何将数据导出到excel

```python
import pandas as pd
# DataFrame
data = {
    '姓名': ['Tom', 'Nick', 'John', 'Tom'],
    '年龄': [20, 21, 19, 20],
    '城市': ['New York', 'London', 'Berlin', 'Paris']
}
df = pd.DataFrame(data)

# 指定输出文件名
output_file = 'output.xlsx'
# 使用openpyxl作为引擎      pip install  openpyxl
with pd.ExcelWriter(output_file, engine='openpyxl') as writer:
    df.to_excel(writer, sheet_name='Sheet1', index=False)
    df.to_excel(writer, sheet_name='Sheet2', index=False)  #可以设置不同的数据存入不同的 sheet 表里
    df.to_csv('output.csv', index=False)   # 可以将DataFrame保存为CSV文件
    
# 如果你想使用xlsxwriter作为引擎，可以这样：    pip install xlsxwriter
# with pd.ExcelWriter(output_file, engine='xlsxwriter') as writer:
#     df.to_excel(writer, sheet_name='Sheet1', index=False)
```

在这个例子中，我们使用`pd.ExcelWriter`来创建一个Excel文件的写入器，指定了输出文件的名称以及使用的引擎（这里是`openpyxl`）。然后，我们调用`df.to_excel`方法将DataFrame写入到Excel文件中，指定工作表的名称为'Sheet1'，并且不包含索引列（`index=False`）。

如果你的DataFrame有多个，并且你想将它们写入同一个Excel文件的不同工作表中，可以多次调用`to_excel`方法，每次指定不同的工作表名称



记得在完成所有写入操作后调用`writer.save()`或使用`with`语句来自动关闭文件。在上面的例子中，由于使用了`with`语句，所以不需要显式调用`save()`方法。

### 读取 csv  文件

```python
import pandas as pd
# 读取csv文件要设置编码格式，chardet可以用来获取文件编码，需要下载 pip install chardet
import chardet
# 读取文件并检测编码
with open('work.csv', 'rb') as f:
    result = chardet.detect(f.read())
# 输出检测到的编码
print("Detected encoding:", result['encoding'])
# 通过文件编码读取 csv 文件的数据
dCsv=pd.read_csv('work.csv',encoding=result['encoding'])
print(dCsv)
```

