## a 标签
#### 属性
1. `href` (hyper reference) 超链接，后面可以写以下内容。
    * 网址，可以是包含协议的https://google.com，也可以是无协议的//google.com
    * 绝对路径，/a/b/c，这里面a前面的/不是硬盘的根目录，而是http协议中，服务器所在地址的根目录。
    * 相对路径，a/b/c,默认是在当前目录下。你页面在哪个目录，哪个就是当前目录。写全了就是./a/b/c
    * 伪协议，直接执行js的代码了。比如：`<a href="javascript:alert(1);">`如果要达到a标签点一下什么反应也没有。`<a href="javascript:;">`,如果href里面什么也不写，那点一下页面就会刷新。如果href里面写个#，那点一下页面会回到顶部。
    * \#ID,跳转到指定ID的标签。`<a href="#id">`
    * mailto:邮箱,会打开电脑默认邮箱软件，并把邮箱地址填到收件人处。
    * tel:手机，会直接拨号过去 
2. `target` 以什么方式打开网页
    * _self 在当前页面打卡，也是默认设置。
    * _blank 在新的标签页打开
    * _top 在顶层页面里打开
    * _parent 在它的父级（上一级）窗口打开
    * 或者一个id，相当于重新创建一个新窗口叫id，在该窗口打开。

## table 标签
1. 表格大框架,并且浏览器会自动帮你排序。
```
<table>
    <thead>
    </thead>
    <tbody>
    </tbody>
    <tfoot>
    </tfoot>
</table>
```
2. `<tr> `代表横向的书写，`<th>` 表头，`<td> `表内数据
3. CSS中几个基本的表样式属性
   * `table-layout` 有auto和fixed两种。其中auto是非等宽，fixed是等宽的。
   * `border-spacing:10px;` 表格的间隙大小。
   * `border-collapse:collapse;` 取消表格之间的间隙

## img 标签
他的作用就是发出get请求，展示一张图片。
#### 属性
1. `src` (source)，添加一个url或者路径。
2. `alt=“xxx”` (alteration)，如果图片未加载出来即显示xxx文字。
3. `width`和`height` img标签自带属性，非CSS样式，只写宽度即可保持图片原比例。
4. `onload`和`onerror` img标签相应是否成功的属性，可以用JS来添加相应事件。
   ```
   <script>
    xxx.onload = function(){
        console.log("图片加载成功");
    }
    xxx.onerror = function(){
        console.log("图片加载失败");
        xxx.src = '/404.png';
    }
   </script>
   ```
#### 如何适应手机屏幕大小
```
img{
    max-width:100%;
}
```
## form 标签
 表示了文档中的一个区域，此区域包含有交互控制元件，用来向 Web 服务器提交信息。下面是一个简单的form标签。
```
<form action="/xxx" method="post">
    <input name="username" type="text">
    <button type="submit">提交</button>
```
#### 属性
1. `action` 指示要访问的位置
2. `method` 用来表示用Get或Post去访问。
3. `autocomplete` 值有on和off，on就会在文本框有提示内容，off则无。
4. `target` 是指提交到哪个页面

#### 注意
* `form`内默认必须有一个type=submit的`button`标签，如果它的type不是submit，则不能提交。
* `form`内的input要有`name`。
* `input`和`button`有什么曲别：`input`没有闭合标签，`button`有闭合标签，可以在标签内加入许多其他标签。而input则不能。

## input 标签
#### 属性
1. `type` 
   * text 最简单的文本框，可以输入文字
   * color 颜色选择器
   * password 显示全部为*
   * radio 单选框
    ```
    <input name=gender type="radio">男
    <input name=gender type="radio">女
    ```
   * checkbox 多选框
    ```
    <input type="checkbox" name=hobby>唱跳
    <input type="checkbox"  name=hobby>RAP
    <input type="checkbox" name=hobby>篮球
    ```
    * file 可以添加文件，默认只能添加一个。若要多选。使用`multiple`
    ```
    <input type="file" multiple >
    ```
    * hidden 页面是看不见的，不是给人输入的。是给JS或机器输入记录一些内容的。
#### 属性
1. onchange 当用户改变内容时候相应
2. onfocus 当用户点击该标签时相应
3. onblur 鼠标从该标签离开时
#### 验证器
`<input type="text" required>` 必须在文本框输入内容，否则不能提交。