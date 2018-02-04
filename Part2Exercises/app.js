const express = require('express');
const app = express();

app.set('view engine', 'pug');

var items = [{'name': 'Bacon' , 'price':2.50},{'name':'Eggs','price': 3.50}];

// Setup body parser for POST request processing
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request,response) {
    return response.redirect('/items');
});

app.get('/items', function(request, response) {
    return response.render('items',{items});
});

app.get('/items/new', function(request, response) {
    return response.render('new-items');
});

app.post('/items', function(request, response) {
    let name = request.body.name;
    let price = request.body.price;
    // Add newly posted item to the cart
    items.push({'name':name,'price':price});
    return response.redirect('/items');
});

app.listen(3000, function () {
    console.log(
      "The server has started on port 3000. Head to localhost:3000 in the browser and see what's there!"
    );
});