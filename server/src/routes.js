const todos=require("./todos.json");
const fs = require('fs');

export default [{
    method:"GET",
    path:"/",
    handler:function(){
        let rawdata = fs.readFileSync('src/todos.json');
        console.log("aaaa",JSON.parse(rawdata));
        return "THIS IS HOMEPAGE"
    }
},{
    method:"POST",
    path:"/addTODO",
    handler:function(request,h){
        const {id,text,status}=request.payload;
        let data = JSON.parse(fs.readFileSync('src/todos.json'));
        if(!data.ids.includes(id)){
            data.ids.push(id);
            data.todos[id]={text,status};
        }
         fs.writeFileSync('src/todos.json', JSON.stringify(data));
        return "SAVED SUCCESSFULLY";
    }
}]