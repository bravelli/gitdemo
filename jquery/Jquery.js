/*第一版
window.Jquery = function (selector) {
    const elements = document.querySelectorAll(selector)
    const api = {

        addClass(className){
            for(let i = 0;i<elements.length;i++){
                elements[i].classList.add(className)
            }
            return this //this 指代 api
        }, //addClass函数访问了外部变量 elements，就叫必包

        find(selector){
            let array = []
            for(let i = 0;i<elements.length;i++){
                const elements2 = Array.from(elements[i].querySelectorAll(selector))
                array = array.concat(elements2)
            }
            return array;
        }


    }
    return api

}//Jquery是函数，他构造出来的对象约定叫Jquery对象

 */

window.Jquery = function (selectorOrArray) {
    let elements
    if (typeof selectorOrArray === 'string'){
     elements = document.querySelectorAll(selectorOrArray)}
    else if(selectorOrArray instanceof Array){
        elements = selectorOrArray
    }
    const api = {

        addClass(className) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className)
            }
            return this //this 指代 api
        }, //addClass函数访问了外部变量 elements，就叫闭包

        find(selector) {
            let array = []
            for (let i = 0; i < elements.length; i++) {
                const elements2 = Array.from(elements[i].querySelectorAll(selector))
                array = array.concat(elements2)
            }
            array.oldApi = this
            return Jquery(array)
        },

        each(fn){
            for(let i=0;i<elements.length;i++){
                fn.call(null,elements[i],i)
            }
            return this
        },

        parent(){
            const array = []
            this.each((node)=>{
                if(array.indexOf(node.parentNode) === -1 ){
                array.push(node.parentNode)}}
                )
            return Jquery(array)
        },

        children(){
            const array = []
            this.each((node)=>{
                if(array.indexOf(node.parentNode) === -1 ){
                    array.push(...node.children)}}//...展开操作符
            )
            return Jquery(array)
         },

        print(){
            console.log(elements)
        },

        oldApi: selectorOrArray.oldApi,
        end(){
            return this.oldApi
        },

    }
    return api
}