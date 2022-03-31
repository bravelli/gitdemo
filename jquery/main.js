/*测试1
const api = Jquery('.test')//Jqrery（选择器）用于获取对应的元素，但它返回一个对象
api.addClass('red').addClass('blue')//链式操作，红的还是返回api，可以接着点
//obj.fn(p1) <==> obj.fn.call(obj,p1) 其中this指代obj

const x1 = Jquery('.test').find('.child')
console.log(x1)
*/
const x2 =Jquery('.test').find('.child')
x2.addClass('green')
x2.parent().children().print()