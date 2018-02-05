const methodOverride = require('method-override');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.set('view engine', 'pug');

//Method override
//specify name of key in query string - override post with _method=DELETE or _method=PATCH
app.use(methodOverride("_method"));

// Setup body parser for POST request processing
app.use(bodyParser.urlencoded({extended: true}));

//Public folder
app.use(express.static(__dirname + '/public'));

const users = [];
var id = 1;

//Arrow functions for callbacks
app.get('/', (req,res,next) => {
    return res.redirect('/users');
});

app.get('/users', (req, res, next) => {
    return res.render('index',{users});
});

app.get('/users/new', (req, res, next) => {
    //Form page to post to /users
    return res.render('new');
});

app.get('/users/:id', (req, res, next) => {
    //Find user by id - convert req.params.id to a number for comparison
    //val is a user object, if predicate true, return that user
    const user = users.find(val => val.id === Number(req.params.id));

    return res.render('show', {user});
});

app.get('/users/:id/edit', (req, res, next) => {
    const user = users.find(val => val.id === Number(req.params.id));
    //Render edit page passing in the user we found
    return res.render('edit', {user});
});

app.post('/users', (req, res, next) => {
    //Add object to users array
    users.push({
        //Key of name and value from form
        name: req.body.name,
        //id mapped to id
        id
    });
    //Increment id for next user
    id++;
    return res.redirect('/users');
});

app.patch('/users/:id', (req, res, next) => {
    const user = users.find(val => val.id === Number(req.params.id));
    //Update name with data from form
    user.name = req.body.name;
    return res.redirect('/users');
});

app.delete('/users/:id', (req, res, next) => {
    const userIndex = users.findIndex(val => val.id === Number(req.params.id));
    //Splice user from the array (Remove)
    users.splice(userIndex, 1);
    return res.redirect('/users');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})