import serve from '../util/request'

export function getLogin(obj){
   return serve({
       url:"/api/login",
       method:"post",
       data:obj
   })
}


export function del(obj){
    return serve({
        url:"/api/manage/user/delete",
        method:"post",
        data:obj
    })
}

export function getAll(obj){
    return serve({
        url:"/api/manage/user/list",
        method:"get",
        params:obj
    })
}

export function getShangpin(obj){
    return serve({
        url:"/api/manage/product/list",
        method:"get",
        params:obj
    })
}

export function addYonghu(obj){
    return serve({
        url:"/api/manage/user/add",
        method:"post",
        data:obj
    })
}

export function getQuanxian(obj){
    return serve({
        url:"/api/manage/role/list",
        method:"get",
        params:obj
    })
}

export function getDingdan(obj){
    return serve({
        url:"/api/manage/order/list",
        method:"get",
        params:obj
    })
}

export function getPinlei(obj){
    return serve({
        url:"/api/manage/category/list",
        method:"get",
        params:obj
    })
}

export function addPinlei(obj){
    return serve({
        url:"/api/manage/category/add",
        method:"post",
        data:obj
    })
}

export function changePinlei(obj){
    return serve({
        url:"/api/manage/category/update",
        method:"post",
        data:obj
    })
}

export function searchShangpin(obj){
    return serve({
        url:"/api/manage/product/search",
        method:"get",
        params:obj
    })
}

export function addShangpin(obj){
    return serve({
        url:"/api/manage/category/update",
        method:"post",
        data:obj
    })
}

export function addQuanxian(obj){
    return serve({
        url:"/api/manage/role/add",
        method:"post",
        data:obj
    })
}

export function addImg(obj){
    return serve({
        url:"/api/manage/img/upload",
        method:"post",
        data:obj
    })
}

export function delImg(obj){
    return serve({
        url:"/api/manage/img/delete",
        method:"post",
        data:obj
    })
}

export function sreachDingdan(obj){
    return serve({
        url:"/api/manage/order/search",
        method:"get",
        params:obj
    })
}