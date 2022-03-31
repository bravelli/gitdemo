window.dom = {
    find(selector,scape){
        return (scape||document).querySelectorAll(selector)
    },
    style(node,name,value){
        if(arguments.length === 3){
            node.style[name] = value
        }
    },
    each(nodeList,fn){
        for(let i = 0 ; i < nodeList.length ; i++) {
            fn.call(null, nodeList[i])
        }
}
}