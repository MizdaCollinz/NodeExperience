const express = require('express');
const app = express();

app.get("/", function(request,response){
    // Request - contain data about request (query string, url params, form data)
    // Response - methods for determining how to respond html/text/json
    return response.send("Hello Worlds!");
});

app.get("/instructor/:firstName", function(request,response){
    //Dynamic firstName

    //Send back text with data from url
    return response.send(
        `The name of this instructor is ${request.params.firstName}`
    );
});
app.listen(3000,function() {
    console.log(
        "The server has started on port 3000"
    );
});