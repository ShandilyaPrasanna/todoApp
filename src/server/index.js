import Hapi from "hapi";

const server=Hapi.server({
 host:"localhost",
 port:3000
});

server.route({
    method:"GET",
    path:"/",
    handler:function(){
        return "THIS IS HOMEPAGE"
    }
})

async function start(){
    try {
        await server.start();
    }
    catch(err){
       console.log("Something went wrong")
    }
    console.log("Server is running");
}

start();

