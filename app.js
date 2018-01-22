const express = require("express");

let server = express();

// logging
server.use("/", function(request, response, next){
    console.log("request received for " + request.url);
    next();
})

server.get("/api/employee", function (request, response){
    let employee = {
        name: request.query.name,
        id: request.query.id
    }
    response.send(employee);
});
server.get("/", function (request, response){
    response.send("Welcome to server");
});

server.listen(5001, function(error){
    if(!error){
        console.log("Server is up and running on PORT 5001");
    }
});