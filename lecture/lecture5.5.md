# JS 对象

## 一、对象

无序的数据集合，是一些列键值的集合。

### 1.1 写法

简写：let obj = {'name':'frank'}
正规: let obj = new Object({'name':'frank'})
_注意：键名一定是字符串，空字符串也是字符串；如果键名是中文、数字或字符必须要加引号。_

一些奇怪的属性名：

```
1e2:'a' \\ 会先计算1e2是数字100。结果是'100':'a'
.234:'b' \\把.234变成0.234
0xFF:'c' \\先把十六进制数转成十进制数后显示。结果'256':'c'
```

除非用`'1e2':'a'`，否则会先转义再显示。
用 Object.key(obj)可以得到对应 obj 的所有 key 名。

### 1.2 关于对象的细节

核心记住一点：键名一定是字符串。

```
let a = 'xxx'
var obj = {
    a : 111
} \\Object.key(obj) 显示 'a':'111'
```

如果我就想用 a 这个变量内的值作为键名。那用 ES6 新出的语法可实现。

```
var obj = {
    [a] : 111
}
\\以前的写法是一下这样。
var obj = {}
obj[a] = 111
\\新的语法相当于把老的两行写到一行里。
```

### 1.3 关于对象的原型

1. 任何对象都包含一个原型`\_\_proto__`
2. 原型 Object 也有一个原型，它的原型的 null。

## 二、对象的增删改查

### 2.1 增

直接赋值

1. let obj = {name:'frank'}
2. obj.name = 'frank'
3. obj['name'] = 'frank'

批量赋值
Object.assign(obj,{p1:1,p2:2,p3:3}) //ES6 新出的 API

### 2.2 删

delate.obj.name 槽都删掉了
obj.name = undefined 把键'name'的值改为 undefined，槽还在。
用 in 操作符来查看是否 name 在 object 里。（它不会区分是自身的还是原型的）
`name in obj === ture`

### 2.3 改

等同于增加操作

### 2.4 查

查看自身所有属性 `Object.keys(obj)`
查看自身所有值 `Object.values(obj)`
查看自身所有键值对 `Object.entries(obj)`
查看自身+共有属性`Object.dir(obj)`
判断一个属性是自身的还是共有的`Object.hasOwnProperty('toString')`如果返回 ture，那么 obj 有自己的`toString`属性，如果返回 false，那么它自身没有`toString`属性。

### 2.5 修改原型

#### 2.5.1 修改原型属性

obj.toString= 'xxx' 只会修改 obj 自身的属性，写的时候不会修改或增加原型，只有读的时候可以读到原型。用 console.dir()就可以证明了。一般来说永远不要修改原型。

若要修改原型属性，不要直接修改 obj.**proto**,修改 window.Object.prototype。这两个是同一个地址。

#### 2.5.2 修改原型

使用 Object.creat(原型对象)来改变一个对象的原型。
例：

```
let obj = Object.create(common) //只能先加原型对象，对obj的对象增加要再后面再写
obj.name = 'frank'
obj.age = 18
```

注意：
`var obj1 = Object.creat({name:'frank'})` 写入到 obj1 的原型属性内。
`var obj2 = new Object({name:'frank'})` 写入到 obj2 的自有属性内。
