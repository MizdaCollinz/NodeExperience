const request = require('request');
const fs = require('fs');

//Process.argv all arguments, argv0 first argument
let args = process.argv;
let search = args[2];

//TODO Only proceed if searchterm found, Handle leaderboard argument

//Send request to dadjoke api

request({
    url:'https://icanhazdadjoke.com/search', 
    qs: {
        'term': search
    },
    headers: {
        'User-Agent': 'MizdaCollinz',
        'Accept' : 'text/plain'
    } 
}, function(error, response, body){
    
    console.log('status:', response && response.statusCode);
    if(error != null){
        console.log('error:', error);
    } else {
        let jokes = body.split("\n");
        let index = Math.floor(Math.random() * jokes.length);
        let joke = jokes[index];

        //TODO change to append
        //TODO handle no jokes found
        fs.writeFile("jokes.txt", joke, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("File was saved.");
        })
    }
   
   
    

});
