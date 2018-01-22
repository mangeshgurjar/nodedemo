const express = require("express");
const defaultRouter = require("./routes/default");
const employeeRouter = require("./routes/employee");

let server = express();

// logging
server.use("/", function(request, response, next){
    console.log("request received for " + request.url);
    next();
})

server.use("/api/employee", employeeRouter);
server.use("/", defaultRouter);

server.listen(5001, function(error){
    if(!error){
        console.log("Server is up and running on PORT 5001");
    }
});