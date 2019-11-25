# JS 函数的执行时机

## 1 解释为什么如下代码会打印 6 个 6

```
let i = 0
for(i = 0; i<6; i++){
  setTimeout(()=>{
    console.log(i)
  },0)
}
```

因为 setTimeout()是等一下马上执行，这个“马上”是指处理完所有这些代码后再去执行。所以在执行完所有代码后 a 的值已经是 6 了。由于执行了 6 次 setTimeout()，所以打印了 6 次 6。

## 打印出 0、1、2、3、4、5 的代码

```
for(let i = 0; i<6; i++){
  setTimeout(()=>{
    console.log(i)
  },0)
}
```

## 其他方法

可以尝试每次 i 的值在变动时把变量的值赋值给一个数组用来记录。i 变动但数组值不变。在执行完所有函数后再打印数组。

```
for(let i = 0; i<6; i++){
    let arr1 = []
    arr1[i] = i
  setTimeout(()=>{
    console.log(arr1[i])
  },0)
}
```
