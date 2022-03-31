# CSS 基本概念

层叠样式表：**层叠**指可以多次对同一选择器样式声明，可以用不同选择器对同一样式声明，也可以用多个文件进行层叠覆盖。
我怎么知道哪些浏览器支持 CSS 的哪些特性呢。使用`caniuse.com`查询。

## 一、CSS 语法

### 1.1 语法

```
选择器{
属性名：属性值；/_注释_/
}
```

注意:

- 所有符号为英文符号
- 区分大小写

### 1.2 如何调试

- 使用官方的 W3C 验证器（google 搜 w3c css spec）
- 看编辑器 vscode、webstorm 的颜色提示。
- 使用浏览器的开发者工具。

**Border调试法**：border:1px solid red;

## 二、如何学习 CSS

找一个好看的页面，照着样子去写，遇到问题查资料。反复修改调试。直到一模一样。

### 2.1 在哪里查资料

- google 搜素关键字+MDN
- CSS tricks （英文）
- 张鑫旭的博客

### 2.2 在哪里搜素材练习

- Freepik 搜素 PSD web
- 中文 365PSD UI 套件
- 效果图就看 dribbble.com

## 三、文档流

### 3.1 display 属性

1. inline 元素从左至右依次排列，直到排列不下另起一行。内联元素总宽度是他每一个内联元素宽度总和，且不支持 width，也不支持 height。span 的实际高度是行高 inline-height：，不是由 height 决定的。
2. block 元素从上至下，每个元素占一行。不会出现并列的情况。它能有多宽又有多宽（取决于 pedding，border），所以一般情况永远不要写宽度 width：100%。它的高度是由内部文档流元素的总和(因为某些元素可以脱离文档流，加一个决定定位)。可以设置 height。
3. inline-block 不会出现跨行的一个元素。既有 inline 的从左到右。又有 block 不会跨行。它默认的宽度相当于 span，尽量的窄。但是它与 span 的区别是可以设置宽度。它的高度像 block，也会包住所有内部文档流元素。可以设置 height。
4. 新的 html5 任何元素都可以给一个 display，随时改是 inline 和 block。
5. 特殊情况，当你给 div 标签设置了高度，可能实际文档会超过你设置的高度。这种情况叫做溢出 overflow。可以分为 overflow-x 和 overflow-y
   - overflow:visible 超出部分直接显示出来
   - overflow:hidden 超出部分隐藏起来
   - overflow:scroll 超出部分可以滚动展示（有个 bug，就算你没有溢出也会有拖动条）
   - overflow:auto 只有溢出才滚动展示，否则不滚动无拖动条。
6. 脱离文档流。第一种方法就是加一个决对定位。position：absolute/fixed。第二种方法是 float:left。

### 3.2 盒模型

1. content-box 和 border-box 曲别相差一个 padding 和 border；
2. margin 合并的情况。其中父子合并用 padding/border 可以挡住。用 overflow:hidden 和 display:flex 也可以挡住。兄弟合并可以用 inline-block 挡住。
3. 长度单位：px,em,percent,rem,vw,vh 等。
4. 颜色有三种：
   - 十六进制#FF6600（淘宝色）
   - RGBA 颜色 rgb(0,0,0,0.5)
   - hsl 颜色 hsl(360,100%,100%)

## 四、CSS 布局

布局分为两种：固定宽度布局，一般宽度为 960/1000/1024px，不固定宽度布局，主要靠文档流的原理来布局。还有一种混合布局（PC 上固定宽度，手机上不固定宽度）

### 4.1 float 布局

在子元素上加 float：left 和 width，在父元素上加.clearfix，父元素的 class='clearfix', CSS 中写：

```
.clearfix:after {
content：'';
display:block;
clear:both;
}
```

一些经验：

1. 子元素的最后一个元素最好不设置宽度，让它自适应。
2. 在 IE6/7 上存在 margin bug，解决办法 a:在你的 margin-left:10px 下面加一句\_margin-left:5px。或者换成加 display：inline-block
3. 不想 border 占整个盒模型的 1px，可以改用 outline 1px solid red，它的 1px 不算在盒模型内。
4. 块元素 float 布局要左右居中加一个 margin-left:auto,margin-right:auto。
