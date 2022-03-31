# JavaScript 历史

## JavaScript 的诞生

它是由 Netscape 的布兰登(Brendan Eich)设计。最初设计出来就是网景公司需要一种网页脚本语言，使得浏览器可以和网页互动。1995 年最初网景公司将其脚本语言命名为 LiveScript,后来由于网景公司与 SUN 公司(开发 Java)的合作，所以命名为“java+scrip”。是为了营销而考虑的。在 1996 年 8 月 IE3 发布，微软推出了 JScript 来对抗 JavaScript。同年 11 月，网景向 ECMA（欧洲计算机制造商协会） 提交语言标准，但由于版权问题，JS 语言标准改名叫 ECMAScript。
由于微软将 IE 浏览器捆绑进了 windows，很快在 1998 年网景浏览器节节败退。为了最后对抗微软，将浏览器开源（Firefox），但结果并不理想，年底，网景公司被美国在线 AOL 收购。之后布兰登一直维护运营 Firefox。
2001 年，IE6 随着 windowsXP 一起发布，在 2004 年 IE6 全球时长占有率 80%以上。且一直统治到 2010 年。由于 IE6 的巨大成功，微软认为不需要花费更多精力去维护，所以直接解散了 IE6 的开发团队。在此期间。由于 IE6 不兼容 W3C 标准（主要是 CSS）。也不断爆出安全漏洞。在 2004 年，谷歌雇佣了一些 Firefox 和 IE 的开发者，开始开发新的浏览器。历时 4 年，在 2008 年 Chrome 终于发布，并迅速拿下 1%份额。2011 年，Chrome 份额超过 Firefox，在 2016 年 Chrome 的全球份额达到 62%。

## JaveScript 的基本特点

JavaScript 是一种属于网络的脚本语言,已经被广泛用于 Web 应用开发,常用来为网页添加各式各样的动态功能,为用户提供更流畅美观的浏览效果。通常 JavaScript 脚本是通过嵌入在 HTML 中来实现自身的功能的。

1. 脚本语言。JavaScript 是一种解释型的脚本语言,C、C++等语言先编译后执行,而 JavaScript 是在程序的运行过程中逐行进行解释。
2. 主要用来向 HTML（标准通用标记语言下的一个应用）页面添加交互行为。可以直接嵌入 HTML 页面，但写成单独的 js 文件有利于结构和行为的分离。
3. 基于对象。JavaScript 是一种基于对象的脚本语言,它不仅可以创建对象,也能使用现有的对象。
4. JavaScript 语言中采用的是弱类型的变量类型,对使用的数据类型未做出严格的要求,是基于 Java 基本语句和控制的脚本语言,其设计简单紧凑。
5. 动态性。JavaScript 是一种采用事件驱动的脚本语言,它不需要经过 Web 服务器就可以对用户的输入做出响应。在访问一个网页时,鼠标在网页中进行鼠标点击或上下移、窗口移动等操作 JavaScript 都可直接对这些事件给出相应的响应。
6. 跨平台性。JavaScript 脚本语言不依赖于操作系统,仅需要浏览器的支持。因此一个 JavaScript 脚本在编写后可以带到任意机器上使用,前提上机器上的浏览器支 持 JavaScript 脚本语言,目前 JavaScript 已被大多数的浏览器所支持。
7. 不同于服务器端脚本语言，例如 PHP 与 ASP，JavaScript 主要被作为客户端脚本语言在用户的浏览器上运行，不需要服务器的支持。所以在早期程序员比较青睐于 JavaScript 以减少对服务器的负担，而与此同时也带来另一个问题：安全性。而随着服务器的强壮，虽然程序员更喜欢运行于服务端的脚本以保证安全，但 JavaScript 仍然以其跨平台、容易上手等优势大行其道。同时，有些特殊功能（如 AJAX）必须依赖 Javascript 在客户端进行支持。随着引擎如 V8 和框架如 Node.js 的发展，及其事件驱动及异步 IO 等特性，JavaScript 逐渐被用来编写服务器端程序。

## 为什么 JavaScript 有设计缺陷？由三个客观原因

1. 设计阶段过于仓促
   Javascript 的设计，其实只用了十天。而且，设计师是为了向公司交差，本人并不愿意这样设计（参见《Javascript 诞生记》）。
   另一方面，这种语言的设计初衷，是为了解决一些简单的网页互动（比如，检查"用户名"是否填写），并没有考虑复杂应用的需要。设计者做梦也想不到，Javascript 将来可以写出像 Gmail 这种极其庞大复杂的网页。
2. 没有先例
   Javascript 同时结合了函数式编程和面向对象编程的特点，这很可能是历史上的第一例。而且直到今天为止，Javascript 仍然是世界上唯一使用`Prototype`继承模型的主要语言。这使得它没有设计先例可以参考。
3. 过早的标准化
   Javascript 的发展非常快，根本没有时间调整设计。
   1995 年 5 月，设计方案定稿；10 月，解释器开发成功；12 月，向市场推出，立刻被广泛接受，全世界的用户大量使用。Javascript 缺乏一个从小到大、慢慢积累用户的过程，而是连续的爆炸式扩散增长。大量的既成网页和业余网页设计者的参与，使得调整语言规格困难重重。更糟的是，Javascript 的规格还没来及调整，就固化了。1996 年 8 月，微软公司强势介入，宣布推出自己的脚本语言 Jscript；11 月，为了压制微软，网景公司决定申请 Javascript 的国际标准；1997 年 6 月，第一个国际标准 ECMA-262 正式颁布。也就是说，Javascript 推出一年半之后，国际标准就问世了。设计缺陷还没有充分暴露就成了标准。相比之下，C 语言问世将近 20 年之后，国际标准才颁布。

## JavaScript 10 个设计缺陷

1. 不适合开发大型程序。Javascript 没有名称空间（namespace），很难模块化；没有如何将代码分布在多个文件的规范；允许同名函数的重复定义，后面的定义可以覆盖前面的定义，很不利于模块化加载。

2. 非常小的标准库
   Javascript 提供的标准函数库非常小，只能完成一些基本操作，很多功能都不具备。

3. null 和 undefined
   null 属于对象（object）的一种，意思是该对象为空；undefined 则是一种数据类型，表示未定义。

```
typeof null; // object
typeof undefined; // undefined
```

两者非常容易混淆，但是含义完全不同。

```
var foo;
alert(foo == null); // true
alert(foo == undefined); // true
alert(foo === null); // false
alert(foo === undefined); // true
```

4. 全局变量难以控制

Javascript 的全局变量，在所有模块中都是可见的；任何一个函数内部都可以生成全局变量，这大大加剧了程序的复杂性。

```
a = 1;
(function(){
b=2;
alert(a);
})(); // 1
alert(b); //2
```

5. 自动插入行尾分号
   Javascript 的所有语句，都必须以分号结尾。但是，如果你忘记加分号，解释器并不报错，而是为你自动加上分号。有时候，这会导致一些难以发现的错误。
   比如，下面这个函数根本无法达到预期的结果，返回值不是一个对象，而是 undefined。

```
function(){
return {i=1};
}//解释器自动在return语句后面加上了分号。
```

6. 加号运算符 +号作为运算符，有两个含义，可以表示数字与数字的和，也可以表示字符与字符的连接。
   如果一个操作项是字符，另一个操作项是数字，则数字自动转化为字符。这样的设计，不必要地加剧了运算的复杂性。

```
alert(1+"10"); // 110
alert("10"+1); // 101
```

7. NaN
   NaN 是一种数字，表示超出了解释器的极限。它有一些很奇怪的特性：

```
NaN === NaN; //false
NaN !== NaN; //true
alert( 1 + NaN ); // NaN
```

与其设计 NaN，不如解释器直接报错，反而有利于简化程序。

8. 数组和对象的区分
   由于 Javascript 的数组也属于对象（object），所以要区分一个对象到底是不是数组，相当麻烦。Douglas Crockford 的代码是这样的：

```
if ( arr &&
typeof arr === 'object' &&
typeof arr.length === 'number' &&
!arr.propertyIsEnumerable('length')){
alert("arr is an array");
}
```

9. == 和 ===

==用来判断两个值是否相等。当两个值类型不同时，会发生自动转换，得到的结果非常不符合直觉。

```
"" == "0" // false
0 == "" // true
0 == "0" // true
false == "false" // false
false == "0" // true
false == undefined // false
false == null // false
null == undefined // true
" \t\r\n" == 0 // true
```

推荐任何时候都使用"==="（精确判断）比较好。

10. 基本类型的包装对象
    Javascript 有三种基本数据类型：字符串、数字和布尔值。它们都有相应的建构函数，可以生成字符串对象、数字对象和布尔值对象。

```
new Boolean(false);
new Number(1234);
new String("Hello World");
```

与基本数据类型对应的对象类型，作用很小，造成的混淆却很大。

```
alert( typeof 1234); // number
alert( typeof new Number(1234)); // object
```

## 浏览器的功能

发起请求，下载 HTML，解析 HTML，下载 CSS，解析 CSS，渲染界面
功能模块：用户界面、（html+css）渲染引擎、JS 渲染引擎、存储等。上面的功能模块一般各处于不同的线程（比进程小的单位）

### JS 引擎

chrome 用的是 V8 引擎，C++编写，主要功能为

- 编译：把 JS 代码翻译为机器能执行的字节码或机器码
- 优化：改写代码，使其变得更高效
- 执行：执行上面的字节码或者机器码
- 垃圾回收： 把 JS 用完的内存回收，利于后续使用。

执行 JS 代码

1. 准备工作
   提供 API:window/document/setTimeout。这些都不是 JS 自身具备的功能，我们称之为运行环境 runtime environment，一旦把 JS 放进这个页面，就开始执行 JS。那 JS 放在哪里执行呢？回答：放到内存里执行。
2. 内存图
   只有数字，字符，布尔是非对象。其他为对象。非对象存储在 Stack，对象存储在 Heap。

## 原型链

window.Object.prototype

JS 在开天辟地的时候已经给你创建了一些原型函数（全局函数）。
我们只关注小写的对象的隐藏属性，后面再去搞懂大写的隐藏属性。这个隐藏属性叫\_\_proto\_\_
它和 prototype 区别是什么：都存在原型的地址。只不过 prototype 挂在函数上，\_\_proto\_\_挂在每个新生成的对象是。