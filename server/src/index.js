import Hapi from "hapi";
import routes from "./routes";

const server=Hapi.server({
 host:"localhost",
 port:5000
});

routes.forEach(route=>{
    server.route(route)
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

