export default [{
    method:"GET",
    path:"/",
    handler:function(){
        return "THIS IS HOMEPAGE"
    }
},{
    method:"POST",
    path:"/addTODO",
    handler:function(request,h){
        const payload=request.payload;
        return payload.todo;
    }
}]