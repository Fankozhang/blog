---
# icon: edit
date: 2022-01-01
category:
  - html
tag:
  - html

---

# TypeScript基本功能快速了解

官网：[TypeScript: Documentation - 基础 (typescriptlang.org)](https://www.typescriptlang.org/zh/docs/handbook/2/basic-types.html)

教程：[TypeScript 基本用法 | 阮一峰 TypeScript 教程 (p6p.net)](https://typescript.p6p.net/typescript-tutorial/basic.html)     

   [原始数据类型 (tsejx.github.io)](https://tsejx.github.io/typescript-guidebook/syntax/basics/basic-types/)

## tsconfig.json

[tsconfig.json · TypeScript中文网 · TypeScript——JavaScript的超集 (tslang.cn)](https://www.tslang.cn/docs/handbook/tsconfig-json.html)

[25. tsconfig.json 文件 - 《阮一峰《TypeScript 教程》》 - 书栈网 · BookStack](https://www.bookstack.cn/read/wangdoc-typescript-tutorial/docs-tsconfig.json.md)

ts项目根目录  tsc --init  可以生成  tsconfig.json 文件

## 类型

### 基本类型

- boolean
- string
- number
- bigint
- symbol
- object
- undefined
- null

TypeScript 继承了 JavaScript 的类型设计，以上8种类型可以看作 TypeScript 的基本类型。

注意，上面所有类型的名称都是小写字母，首字母大写的`Number`、`String`、`Boolean`等在 JavaScript 语言中都是内置对象，而不是类型名称。

另外，undefined 和 null 既可以作为值，也可以作为类型，取决于在哪里使用它们。



### object 类型

#### **大写的  `Object`类型**

事实上，除了`undefined`和`null`这两个值不能转为对象，其他任何值都可以赋值给`Object`类型。

`undefined`和`null`赋值给`Object`类型，就会报错。



空对象`{}`是`Object`类型的简写形式，所以使用`Object`时常常用空对象代替。

```ts
let obj:{};
obj = true;
obj = 'hi';
obj = 1;
obj = { foo: 123 };
obj = [1, 2];
obj = (a:number) => a + 1;
```



#### **小写的`object`*类型***

根据 JavaScript 的设计，object 类型包含了所有对象、数组和函数。

```ts
const x:object = { foo: 123 };
const y:object = [1, 2, 3];
const z:object = (n:number) => n + 1;
```

上面示例中，对象、数组、函数都属于 object 类型。



小写的`object`类型代表 JavaScript 里面的狭义对象，即可以用字面量表示的对象，只包含对象、数组和函数，不包括原始类型的值。

```ts
let obj:object;
obj = { foo: 123 };
obj = [1, 2];
obj = (a:number) => a + 1;
obj = true; // 报错
obj = 'hi'; // 报错
obj = 1; // 报错
```



### 包装对象类型

- boolean
- string
- number
- bigint
- symbol

上面这五种原始类型的值，都有对应的包装对象（wrapper object）。所谓“包装对象”，指的是这些值在需要时，会自动产生的对象。



五种包装对象之中，symbol 类型和 bigint 类型无法直接获取它们的包装对象（即`Symbol()`和`BigInt()`不能作为构造函数使用），但是剩下三种可以。

- `Boolean()`
- `String()`
- `Number()`

以上三个构造函数，执行后可以直接获取某个原始类型值的包装对象。



**包装对象类型与字面量类型**

```
'hello' // 字面量
new String('hello') // 包装对象
```

上面示例中，第一行是字面量，第二行是包装对象，它们都是字符串。

为了区分这两种情况，TypeScript 对五种原始类型分别提供了大写和小写两种类型。

- Boolean 和 boolean
- String 和 string
- Number 和 number
- BigInt 和 bigint
- Symbol 和 symbol

### undefined 和 null 的特殊性

`undefined`和`null`既是值，又是类型。

作为值，它们有一个特殊的地方：任何其他类型的变量都可以赋值为`undefined`或`null`。

JavaScript 的行为是，变量如果等于`undefined`就表示还没有赋值，如果等于`null`就表示值为空。所以，TypeScript 就允许了任何类型的变量都可以赋值为这两个值。

### 值类型

TypeScript 规定，单个值也是一种类型，称为“值类型”。

```ts
let x:'hello';
x = 'hello';    // 正确x = 'world'; // 报错
```

上面示例中，变量`x`的类型是字符串`hello`，导致它只能赋值为这个字符串，赋值为其他字符串就会报错。

### 联合类型

联合类型（union types）指的是多个类型组成的一个新类型，使用符号`|`表示。

联合类型`A|B`表示，任何一个类型只要属于`A`或`B`，就属于联合类型`A|B`。

```ts
let x:string|number;
x = 123; // 正确
x = 'abc'; // 正确

let name:string|null;
name = 'John';
name = null;
```

### 交叉类型

交叉类型（intersection types）指的多个类型组成的一个新类型，使用符号`&`表示。

交叉类型`A&B`表示，任何一个类型必须同时属于`A`和`B`，才属于交叉类型`A&B`，即交叉类型同时满足`A`和`B`的特征。

```
let x:number&string;
```

上面示例中，变量`x`同时是数值和字符串，这当然是不可能的，所以 TypeScript 会认为`x`的类型实际是`never`。

交叉类型的主要用途是表示对象的合成。

```
let obj:  { foo: string } &  { bar: string };
obj = {  foo: 'hello',  bar: 'world'};
```

上面示例中，变量`obj`同时具有属性`foo`和属性`bar`。

交叉类型常常用来为对象类型添加新属性。

```
type A = { foo: number };type B = A & { bar: number };
```

上面示例中，类型`B`是一个交叉类型，用来在`A`的基础上增加了属性`bar`。

### type 命令

`type`命令用来定义一个类型的别名。

```ts
type Age = number;
let age:Age = 55;
```

上面示例中，`type`命令为`number`类型定义了一个别名`Age`。这样就能像使用`number`一样，使用`Age`作为类型。

**别名不允许重名。**

别名的作用域是块级作用域。这意味着，代码块内部定义的别名，影响不到外部。

`type`命令属于类型相关的代码，编译成 JavaScript 的时候，会被全部删除。

### typeof 运算符

JavaScript 语言中，typeof 运算符是一个一元运算符，返回一个字符串，代表操作数的类型。

```
typeof 'foo'; // 'string'
```

上面示例中，`typeof`运算符返回字符串`foo`的类型是`string`。



JavaScript 里面，`typeof`运算符只可能返回八种结果，而且都是字符串。

```ts
typeof undefined; // "undefined"
typeof true; // "boolean"
typeof 1337; // "number"
typeof "foo"; // "string"
typeof {}; // "object"
typeof parseInt; // "function"
typeof Symbol(); // "symbol"
typeof 127n // "bigint"
```



同一段代码可能存在两种`typeof`运算符，一种用在值相关的 JavaScript 代码部分，另一种用在类型相关的 TypeScript 代码部分。

```ts
let a = 1;
let b:typeof a;
if (typeof a === 'number') {
  b = a;
}
```

上面示例中，用到了两个`typeof`，第一个是类型运算，第二个是值运算。它们是不一样的，不要混淆。

## 数组类型

### 类型定义

类型定义1

```ts
let arr:number[] = [1, 2, 3];    // 数组arr的类型是number[]，其中number表示数组成员类型是number。

let arr:(number|string)[];       // 如果数组成员的类型比较复杂，可以写在圆括号里面。

let arr:any[];                   // 如果数组成员可以是任意类型，写成any[]。当然，这种写法是应该避免的。
```

类型定义2

```ts
let arr:Array<number> = [1, 2, 3];      // 数组arr的类型是Array<number>，其中number表示成员类型是number。

let arr:Array<number|string>;
```



数组类型声明了以后，成员数量是不限制的，任意数量的成员都可以，也可以是空数组。

### 只读 readonly

```ts
const arr:readonly number[] = [0, 1];
arr[1] = 2; // 报错
arr.push(3); // 报错
delete arr[0]; // 报错
```

`arr`是一个只读数组，删除、修改、新增数组成员都会报错。



实际上，TypeScript 提供了两个专门的泛型，用来生成只读数组的类型。

```ts
const a1:ReadonlyArray<number> = [0, 1];
const a2:Readonly<number[]> = [0, 1];
```



### 多维数组

TypeScript 使用`T[][]`的形式，表示二维数组，`T`是最底层数组成员的类型。

```
var multi:number[][] =  [[1,2,3], [23,24,25]];
```

上面示例中，变量`multi`的类型是`number[][]`，表示它是一个二维数组，最底层的数组成员类型是`number`。

## 元组类型

元组（tuple）是 TypeScript 特有的数据类型，JavaScript 没有单独区分这种类型。它表示成员类型可以自由设置的数组，即数组的各个成员的类型可以不同。

元组必须明确声明每个成员的类型。

### 类型定义

```ts
const s:[string, string, boolean]= ['a', 'b', true];

let a:[number, number?] = [1];         //  元组成员的类型可以添加问号后缀（?），表示该成员是可选的。
                                       //  注意，问号只能用于元组的尾部成员，也就是说，所有可选成员必须在必选成员之后。

// 由于需要声明每个成员的类型，所以大多数情况下，元组的成员数量是有限的

// 但是，使用扩展运算符（...），可以表示不限成员数量的元组。
type NamedNums = [
  string,
  ...number[]
];
```

**数组和元组类型区分：**  TypeScript 的区分方法是，成员类型写在方括号里面的就是元组，写在外面的就是数组。

使用元组时，必须明确给出类型声明，不能省略，否则 TypeScript 会把一个值自动推断为数组。

### 只读元组

```ts
// 写法一
type t = readonly [number, string]
// 写法二
type t = Readonly<[number, string]>
```

## symbol 类型

### 类型定义

每一个 Symbol 值都是独一无二的，与其他任何值都不相等。

```ts
let x:symbol = Symbol();
let y:symbol = Symbol();
x === y           // false
```

变量`x`和`y`的类型都是`symbol`，且都用`Symbol()`生成，但是它们是不相等的。

## 函数类型

### 类型定义

#### 给出参数的类型和返回值的类型。

需要在声明函数时，给出参数的类型和返回值的类型。

```ts
function hello(txt:string):void {      //  返回值的类型通常可以不写，因为 TypeScript 自己会推断出来。
  console.log('hello ' + txt);         //  由于没有return语句，TypeScript 会推断出函数hello()没有返回值。
}
```

#### 变量被赋值为函数

如果变量被赋值为一个函数，变量的类型有两种写法。

```ts
// 写法一
const hello = function (txt:string) {
  console.log('hello ' + txt);
}
// 写法二
const hello: (txt:string) => void = function (txt) {   // 注意函数的参数要放在圆括号里面，不放会报错。
  console.log('hello ' + txt);
};
```

#### 变量要套用另一个函数类型

如果一个变量要套用另一个函数类型，有一个小技巧，就是使用`typeof`运算符。

```ts
function add(
  x:number,
  y:number
) {
  return x + y;
}
const myAdd:typeof add = function (x, y) {
  return x + y;
}
```

#### 对象的写法

函数类型还可以采用对象的写法。

```ts
let add:{
  (x:number, y:number):number
};
add = function (x, y) {
  return x + y;
};
```



####  Interface 来声明

函数类型也可以使用 Interface 来声明，这种写法就是对象写法的翻版

```tsx
interface myfn {
  (a:number, b:number): number;
}
var add:myfn = (a, b) => a + b;
```



#### Function 类型表示函数

Function 类型表示函数，任何函数都属于这个类型。

参数`f`的类型就是`Function`，代表这是一个函数。

Function 类型的值都可以直接执行。

Function 类型的函数可以接受任意数量的参数，每个参数的类型都是`any`，返回值的类型也是`any`，代表没有任何约束，所以不建议使用这个类型，给出函数详细的类型声明会更好。

```ts
function doSomething(f:Function) {
  return f(1, 2, 3);
}
```

#### 箭头函数

箭头函数是普通函数的一种简化写法，它的类型写法与普通函数类似。

```ts
const repeat = (str:string,times:number):string => str.repeat(times);
```



### 可选参数  ？

如果函数的某个参数可以省略，则在参数名后面加问号表示。

```ts
function f(x?:number) {
  // ...
}
f(); // OK
f(10); // OK
```



### 默认参数  x:number = 0

**可选参数与默认值不能同时使用。**

```ts
function createPoint(
  x:number = 0,
  y:number = 0
):[number, number] {
  return [x, y];
}
```

具有默认值的参数如果不位于参数列表的末尾，调用时不能省略，如果要触发默认值，必须显式传入`undefined`。

### 参数解构

```ts
function sum(  { a, b, c }: { a: number;  b: number; c: number}  ) {
  console.log(a + b + c);
}


//  参数结构可以结合类型别名（type 命令）一起使用，代码会看起来简洁一些。
type ABC = { a:number; b:number; c:number };

function sum({ a, b, c }:ABC) {
  console.log(a + b + c);
}
```

###  只读参数 readonly

如果函数内部不能修改某个参数，可以在函数定义时，在参数类型前面加上`readonly`关键字，表示这是只读参数。

```ts
function arraySum(
  arr:readonly number[]
) {
  // ...
  arr[0] = 0; // 报错
}
```

### never 类型

`never`类型表示肯定不会出现的值。它用在函数的返回值，就表示某个函数肯定不会返回值，即函数不会正常执行结束。

它主要有以下两种情况。

（1）抛出错误的函数。

```ts
function fail(msg:string):never   {  throw new Error(msg);}
```

（2）无限执行的函数。

```ts
const sing = function():never   {  while (true) {    console.log('sing');};
```

### 高阶函数，函数重载，构造函数

一个函数的返回值还是一个函数，那么前一个函数就称为高阶函数（higher-order function）。

有些函数可以接受不同类型或不同个数的参数，并且根据参数的不同，会有不同的函数行为。这种根据参数类型不同，执行不同逻辑的行为，称为函数重载（function overload）。



构造函数的类型写法，就是在参数列表前面加上`new`命令。

```
class Animal {
  numLegs:number = 4;
}
type AnimalConstructor = new () => Animal;
function create(c:AnimalConstructor):Animal {
  return new c();
}
const a = create(Animal);
```

## 对象类型

### 类型定义

#### 简单定义

```ts
//  就是使用大括号表示对象，在大括号内部声明每个属性和方法的类型。
const obj:{
  x:number;
  y:number;
} = { x: 1, y: 1 };


// 一旦声明了类型，对象赋值时，就不能缺少指定的属性，也不能有多余的属性。
type MyObj = {
  x:number;
  y:number;
};
const o1:MyObj = { x: 1 }; // 报错
const o2:MyObj = { x: 1, y: 1, z: 1 }; // 报错
```

对象的方法使用函数类型描述。

```ts
const obj:{
  x: number;
  y: number;
  add(x:number, y:number): number;
  // 或者写成
  // add: (x:number, y:number) => number;
} = {
  x: 1,
  y: 1,
  add(x, y) {
    return x + y;
  }
};
```

#### type,interface

`type`命令可以为对象类型声明一个别名，TypeScript 还提供了`interface`命令，可以把对象类型提炼为一个接口。

```ts
// 写法一
type MyObj = {
  x:number;
  y:number;
};
const obj:MyObj = { x: 1, y: 1 };

// 写法二
interface MyObj {
  x: number;
  y: number;
}
const obj:MyObj = { x: 1, y: 1 };
```

### 可选属性 ?

```ts
const obj: {
  x: number;
  y?: number;
} = { x: 1 };

// 可选属性等同于允许赋值为undefined
```



### 只读属性  readonly

属性名前面加上`readonly`关键字，表示这个属性是只读属性，不能修改。

```ts
interface MyInterface {
  readonly prop: number;
}
```



### 属性名的索引类型(建议谨慎使用)

属性非常多,采用属性名表达式的写法来描述类型，称为“属性名的索引类型”。

```ts
type MyObj = {
  [property: string]: string      // 索引类型里面，最常见的就是属性名的字符串索引。
};

const obj:MyObj = {
  foo: 'a',
  bar: 'b',
  baz: 'c',
};
```

JavaScript 对象的属性名（即上例的`property`）的类型有三种可能，除了上例的`string`，还有`number`和`symbol`。



对象可以同时有多种类型的属性名索引，比如同时有数值索引和字符串索引。但是，数值索引不能与字符串索引发生冲突，必须服从后者，这是因为在 JavaScript 语言内部，所有的数值属性名都会自动转为字符串属性名。

```ts
type MyType = {
  [x: number]: boolean; // 报错
  [x: string]: string;
}

// 数值索引与字符串索引冲突了，所以报错了
```

### 解构赋值

解构赋值的类型写法，跟为对象声明类型是一样的。

```ts
const {id, name, price}:{
  id: string;
  name: string;
  price: number
} = product;
```

注意，目前没法为解构变量指定类型，因为对象解构里面的冒号，JavaScript 指定了其他用途。

```ts
let { x: foo, y: bar } = obj;           // 等同于let foo = obj.x;let bar = obj.y;
```

上面示例中，冒号不是表示属性`x`和`y`的类型，而是为这两个属性指定新的变量名。如果要为`x`和`y`指定类型，不得不写成下面这样。

```ts
let { x: foo, y: bar }  : { x: string; y: number } = obj;
```

这一点要特别小心，TypeScript 里面很容易搞糊涂。



### 空对象

先声明一个空对象，然后向空对象添加属性。但是，TypeScript 不允许动态添加属性，所以对象不能分步生成，必须生成时一次性声明所有属性。

```ts
// 错误
const pt = {};
pt.x = 3;
pt.y = 4;
// 正确
const pt = {
  x: 3,
  y: 4
};
```

如果确实需要分步声明，一个比较好的方法是，使用扩展运算符（`...`）合成一个新对象。

```ts
const pt0 = {};
const pt1 = { x: 3 };
const pt2 = { y: 4 };
const pt = {
  ...pt0, ...pt1, ...pt2
};
```



空对象作为类型，其实是`Object`类型的简写形式。

```ts
let d:{};  
// 等同于
// let d:Object;
d = {};
d = { x: 1 };
d = 'hello';
d = 2;
```

上面示例中，各种类型的值（除了`null`和`undefined`）都可以赋值给空对象类型，跟`Object`类型的行为是一样的。



## interface 

interface 是对象的模板，可以看作是一种类型约定，中文译为“接口”。使用了某个模板的对象，就拥有了指定的类型结构。

```ts
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

//  实现该接口很简单，只要指定它作为对象的类型即可。
const p:Person = {
  firstName: 'John',
  lastName: 'Smith',
  age: 25
};
```



方括号运算符可以取出 interface 某个属性的类型。

```ts
interface Foo {
  a: string;
}
type A = Foo['a']; // string
```

### 表示对象的各种语法

interface 可以表示对象的各种语法，它的成员有5种形式。

- 对象属性
- 对象的属性索引
- 对象方法
- 函数
- 构造函数

#### （1）对象属性

```ts
interface Point {
  x: number;
  y: number;
  z?: string;      // 可选
  readonly h: string;  // 只读
}
```

#### （2）对象的属性索引

属性索引共有`string`、`number`和`symbol`三种类型。

一个接口中，最多只能定义一个字符串索引。字符串索引会约束该类型中所有名字为字符串的属性。

```ts
interface A {
  [prop: string]: number;
}
```

#### （3）对象的方法

对象的方法共有三种写法。

```ts
// 写法一
interface A {
  f(x: boolean): string;
}
// 写法二
interface B {
  f: (x: boolean) => string;
}
// 写法三
interface C {
  f: { (x: boolean): string };
}
```



类型方法可以重载。

```ts
interface A {
  f(): number;
  f(x: boolean): boolean;
  f(x: string, y: string): string;
}
```

interface 里面的函数重载，不需要给出实现。但是，由于对象内部定义方法时，无法使用函数重载的语法，所以需要额外在对象外部给出函数方法的实现。

```ts
interface A {
  f(): number;
  f(x: boolean): boolean;
  f(x: string, y: string): string;
}
function MyFunc(): number;
function MyFunc(x: boolean): boolean;
function MyFunc(x: string, y: string): string;
function MyFunc(
  x?:boolean|string, y?:string
):number|boolean|string {
  if (x === undefined && y === undefined) return 1;
  if (typeof x === 'boolean' && y === undefined) return true;
  if (typeof x === 'string' && typeof y === 'string') return 'hello';
  throw new Error('wrong parameters');  
}
const a:A = {
  f: MyFunc
}
```

上面示例中，接口`A`的方法`f()`有函数重载，需要额外定义一个函数`MyFunc()`实现这个重载，然后部署接口`A`的对象`a`的属性`f`等于函数`MyFunc()`就可以了。

#### （4）函数

interface 也可以用来声明独立的函数。

```ts
interface Add {
  (x:number, y:number): number;
}
const myAdd:Add = (x,y) => x + y;
```

#### （5）构造函数

interface 内部可以使用`new`关键字，表示构造函数。

```ts
interface ErrorConstructor {
  new (message?: string): Error;
}
```

接口`ErrorConstructor`内部有`new`命令，表示它是一个构造函数。

TypeScript 里面，构造函数特指具有`constructor`属性的类，详见《Class》一章。

### interface 的继承(`extends`)

interface 可以继承其他类型，主要有下面几种情况。

#### interface 继承 interface

interface 可以使用`extends`关键字，继承其他 interface。

```ts
interface Shape {
  name: string;
}
interface Circle extends Shape {
  radius: number;
}
```

`Circle`继承了`Shape`，所以`Circle`其实有两个属性`name`和`radius`。这时，`Circle`是子接口，`Shape`是父接口。

`extends`关键字会从继承的接口里面拷贝属性类型，这样就不必书写重复的属性。



interface 允许多重继承。

```ts
interface Style {
  color: string;
}
interface Shape {
  name: string;
}
interface Circle extends Style, Shape {
  radius: number;
}
```

`Circle`同时继承了`Style`和`Shape`，所以拥有三个属性`color`、`name`和`radius`。

多重接口继承，实际上相当于多个父接口的合并。



如果子接口与父接口存在同名属性，那么子接口的属性会覆盖父接口的属性。

注意，子接口与父接口的同名属性必须是类型兼容的，不能有冲突，否则会报错。

```ts
interface Foo {
  id: string;
}
interface Bar extends Foo {
  id: number; // 报错 (id的属性不一样)
}
```

#### interface继承type (type的类型对象)

interface 可以继承`type`命令定义的对象类型。

```ts
type Country = {
  name: string;
  capital: string;
}
interface CountryWithPop extends Country {
  population: number;
}
```

`CountryWithPop`继承了`type`命令定义的`Country`对象，并且新增了一个`population`属性。

注意，如果`type`命令定义的类型不是对象，interface 就无法继承。



#### interface 继承 class

```ts
class A {
  x:string = '';
  y():boolean {
    return true;
  }
}
interface B extends A {
  z: number
}
```

上面示例中，`B`继承了`A`，因此`B`就具有属性`x`、`y()`和`z`。

实现`B`接口的对象就需要实现这些属性。

```ts
const b:B = {
  x: '',
  y: function(){ return true },
  z: 123
}
```

上面示例中，对象`b`就实现了接口`B`，而接口`B`又继承了类`A`。

### 接口合并

多个同名接口会合并成一个接口。

```ts
interface Box {
  height: number;
  width: number;
}
interface Box {
  length: number;
}
```

两个`Box`接口会合并成一个接口，同时有`height`、`width`和`length`三个属性。

### interface 与 type 的异同

interface 与 type 的区别有下面几点。

（1）`type`能够表示非对象类型，而`interface`只能表示对象类型（包括数组、函数等）。

（2）`interface`可以继承其他类型，`type`不支持继承。

（3）同名`interface`会自动合并，同名`type`则会报错。也就是说，TypeScript 不允许使用`type`多次定义同一个类型。

（4）`interface`不能包含属性映射（mapping），`type`可以，详见《映射》一章。

```ts
interface Point {
  x: number;
  y: number;
}
// 正确
type PointCopy1 = {
  [Key in keyof Point]: Point[Key];
};
// 报错
interface PointCopy2 {
  [Key in keyof Point]: Point[Key];
};
```

（5）`this`关键字只能用于`interface`。

```ts
// 正确
interface Foo {
  add(num:number): this;
};
// 报错
type Foo = {
  add(num:number): this;
};
```

type 命令声明的方法`add()`，返回`this`就报错了。interface 命令没有这个问题。

（6）type 可以扩展原始数据类型，interface 不行。

```ts
// 正确
type MyStr = string & {
  type: 'new'
};
// 报错
interface MyStr extends string {
  type: 'new'
}
```

（7）`interface`无法表达某些复杂类型（比如交叉类型和联合类型），但是`type`可以。

```ts
type A = { /* ... */ };
type B = { /* ... */ };
type AorB = A | B;
type AorBwithName = AorB & {
  name: string
};

//类型`AorB`是一个联合类型，`AorBwithName`则是为`AorB`添加一个属性。这两种运算，`interface`都没法表达。
```



**综上所述，如果有复杂的类型运算，那么没有其他选择只能使用`type`；一般情况下，`interface`灵活性比较高，便于扩充类型或自动合并，建议优先使用。**