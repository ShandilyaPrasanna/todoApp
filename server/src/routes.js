const todos=require("./todos.json");
const fs = require('fs');

export default [{
    method:"GET",
    path:"/getTodos",
    handler:function(){
        let rawdata = fs.readFileSync('src/todos.json');
        return rawdata
    }
},{
    method:"POST",
    path:"/addTODO",
    handler:function(request,h){
        const {id,text,status}=JSON.parse(request.payload);
        let data = JSON.parse(fs.readFileSync('src/todos.json'));
        if(!data.ids.includes(id)){
            data.ids.push(id);
            data.todos[id]={text,status};
        }
         fs.writeFileSync('src/todos.json', JSON.stringify(data));
        return "SAVED SUCCESSFULLY";
    },
 },{
        method:"delete",
        path:"/deleteTODO",
        handler:function(request,h){
           
            const {id}=JSON.parse(request.payload);
            let data = JSON.parse(fs.readFileSync('src/todos.json'));
            if(data.ids.includes(id)){
                data.ids.splice(data.ids.indexOf(id),1);
                delete data.todos[id]
            }
             fs.writeFileSync('src/todos.json', JSON.stringify(data));
             return "deleted SUCCESSFULLY";
        }
}]