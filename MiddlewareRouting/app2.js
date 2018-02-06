const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

const app = express();

// TODO test express-generator
// TODO test use of locus for debugging

// Setup pug pages and middleware
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended: true}));

//Default to the index page
app.get('/', (req,res, next) => {
    return res.render('index');
});

// Catch 404 and forward to error handling
app.use((err,req,res,next) => {
    return res.render('error', {
        message: err.message,
        //Developing -> retrieve the stack trace, otherwise empty object to user
        error: app.get('env' === 'development' ? err : {})
    });
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

