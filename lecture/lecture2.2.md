### HTML 入门

1. CRM 学习法：

- copy 抄文档
- run 运行
- modify 修改问题，不断完善

2. HTML 在哪里调试

- vscode，webstorm 看颜色的提示
- W3C validator（在线/npm 工具）

3. 在哪里查资料

- Google 搜素 关键字+mdn
- 看阮一峰的网道博客
- 看 W3C 的标准文档
  ### HTML 的起手式

```
<!DOCTYPE html>
<html lang="en">
  <!--中文是zh-CN-->
  <head>
    <!--head内一般为不显示的内容-->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--适应手机屏幕尺寸-->
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <!--使IE使用最新版本显示-->
    <title>Document</title>
    <!--标签页显示名称-->
  </head>
  <body></body>
  <!--内容的主体-->
</html>
```

### 章节标签

1. <header>一般放顶部的导航、广告</header>
   <footer>&copy；版权声明</footer>
2. 章节标签就是标识文章结构的

```
<main><!-- 主体-->
  <h1>文章标题</h1>
    <section><!--第一段-->
      <h2>第一章标题</h2>
      <p>文字段落</p>
      </section>
    <section><!--第二段-->
      <h3>第一小节</h3>
      <p>内容</p>
    </section>
</main>
<aside> 非主体，一般可以用来放参考资料</aside>
```

### 默认样式

html 会有默认样式，因为 html 诞生的时候还没有 css，怎么查看一个元素的默认样式呢，打开 Chrome 开发者工具，Elements->Style->user agent stylesheet。
默认样式大部分是很丑，如何把所有默认元素都干掉。
方法一：采用方方的 cssreset

```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*::before,
*::after {
  box-sizing: border-box;
}
a {
  color: inherit;
  text-decoration: none;
}
input,
button {
  font-family: inherit;
}
ol,
ul {
  list-style: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
```

方法二：采用一些大厂的，比如到 www.taobao.com，打开开发者工具找到任意标签。在他的 style 里找到 h1,h2,h3 这种很长的标签一般就是。比如淘宝网的找到是在原代码的第 28 行（把整行复制，开头部分是它的 cssreset，从类的定义开始不是，后面都删除）。

```
blockquote,
body,
button,
dd,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
input,
legend,
li,
ol,
p,
pre,
td,
textarea,
th,
ul {
  margin: 0;
  padding: 0;
}
body,
button,
input,
select,
textarea {
  font: 12px/1.5 tahoma, arial, "Hiragino Sans GB", "\5b8b\4f53", sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
address,
cite,
dfn,
em,
var {
  font-style: normal;
}
code,
kbd,
pre,
samp {
  font-family: courier new, courier, monospace;
}
small {
  font-size: 12px;
}
ol,
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
sup {
  vertical-align: text-top;
}
sub {
  vertical-align: text-bottom;
}
legend {
  color: #000;
}
fieldset,
img {
  border: 0;
}
button,
input,
select,
textarea {
  font-size: 100%;
}
button {
  border-radius: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
```

### 全局属性

1.  `class`给标签一个分类，可以同时给一个标签两个分类，同属于这两种特性。`<div class="middle bordered`
    在 CSS 引用的时候要使用`.middle{}`和`.bordered{}`的方式进行引用。
2.  `contenteditable`指任何一个元素是否可在网页内直接编辑。如果把`<style>`标签放到`<body>`内，改变他可编辑属性。就会在网页内自己更改页面样式。
3.  `hidden`使标签隐藏起来。一般`<head>`内的标签都时隐藏起来的，页面能看到的是`<body>`里的内容。
4.  `id`给标签加一个名字，全局唯一名字，命名要避开系统已有的关键字，或者 JS 中本身就是`window`的全局属性名称。CSS 中引用，使用`#id {}`
    > 如何查到哪些不可以使用。在 chrome 开发者工具中，consolo 里输入`window.`，后面出现的关键字全部不可以使用.。
5.  `style`添加一个样式。
    优先级排序：JS>标签内 style 属性>头部<style>标签内
6.  `tabindex`指按下`Tab`访问的顺序。按照 tabindex=1 到 tabindex=100，由小到大的顺序进行访问。有两个特殊值，当是 0 的时候，代表最后一个访问，当时-1 的时候，代表永远不去访问。
7.  `title` 对某段文字的备注。当标题很长缩进到一行显示时。可以使用 title 进行备注。

```element.style{
whit-space:nowrap;
text-overfow:ellipsis;
overflow:hidden;
```
