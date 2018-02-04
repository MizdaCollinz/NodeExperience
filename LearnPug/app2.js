// Send data using a GET request

const express = require('express');
const app = express();

app.set("view engine", "pug");

app.get("/", function(request,response){
    return response.render("new-user");
});

app.get("/create-new-user", function(request,response) {
    return response.send(request.query);
});

app.listen(3000, function() {
    console.log("Server on port 3000 ");
});