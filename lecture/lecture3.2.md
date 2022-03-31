# CSS 动画

## 一、浏览器的渲染原理

### 1.1 三种更新方式

1. JS/CSS > 样式 > 布局 > 绘制 > 合成
   常规渲染方式，如果将任何一个元素删掉，会导致样式发生改变。如`div.remove()`，那么全部流程需要走一遍。
2. JS/CSS > 样式 > 绘制 > 合成
   如果只改变某元素的背景颜色，那么布局未发生改变。直接从绘制开始。
3. JS/CSS > 样式 > 合成
   改变 transform，则布局绘制都未发生改变。仅在最后合成显示上做变化。

那么我怎么知道改变哪个属性会触发哪种更新方式：

- 用 chrmoe 开发者工具，在 console 左侧找到 rendering 里的 paint flashing 勾选上。
- csstriggers.com 这个网站把所有属性都试过了

## 二、transform

### 2.1 常用的四种用法：

1. 位移：
   transform:translate(12px,50%);
   transform:translateX(2em);
   transform:translateY(3in);
2. 缩放：
   transform:scale(2,0.5);
   transform:scaleX(2);
   transform:scaleY(1.5);
3. 旋转：
   transform: rotate(0.5turn);
   transform: rotate(90deg);
4. 倾斜：
   transform: skew(30deg,20deg);
   transform: skewX(1.2rad);
   transform: skewY(60deg);

### 2.2 transition 过渡

语法： transition: 属性名 时长 过渡方式 延迟
例：transition:all 1s 1s (默认过度方式为 ease)
过度方式有：linear|ease|ease-in|ease-out 等

注意：并不是所有的属性都能过度。比如 display:none => block 没法过渡。只有变化的过程可以以数字形式来逐渐转变的属性才可以过渡。比如 background 颜色，opacity 透明度是可以过渡的。

### 2.3 @keyframes 关键帧

标准写法：

```
@keyframes 关键帧名字 {
    0% {top:0; left:0;}
    30% {top:50px;}
    100% {top:100px; left:100%;}
}
```

## 三、animation

缩写写法：animation:时长 过渡方式 延迟 次数 方向 填充模式 是否暂停

- 时长：1s 或者 100ms；
- 过渡方式：跟 transition 取值一样，如 linear，ease
- 次数：3|2.4|infinite
- 方向：reverse|alternate|alternate-reverse
- 填充模式：none|forwards(来回变换)|backwards|both
- 是否暂停：paused|running

以上的所有缩写属性都有单独的属性名对应。
