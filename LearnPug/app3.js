// Send form data in a POST request

const express = require("express");
const app = express();

var subs = [];

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'pug');

app.get('/', function(request, response) {
    console.log(subs.toString());
    return response.render('login');
});

app.post("/create-new-user", function(request, response) {
    // Create/update/delete data here
    subs.push(request.body.username);
    // return response.send(request.body); 
    return response.redirect('/'); //Respond to browser with location
});

app.listen(3000, function() {
    console.log('Server started on port 3000');
});