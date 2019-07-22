import Hapi from "hapi";
import routes from "./routes";

const server=Hapi.server({
 host:"localhost",
 port:5000,
 routes: {
 cors: {
    origin: ["*"],
    headers: ["Access-Control-Allow-Origin","Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type", "CORELATION_ID"],
    credentials: true
}
 }
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

