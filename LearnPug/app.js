const express = require("express");
const app = express();

const colors = ["red", "green", "blue"];

app.set("view engine", "pug"); // notice here we are telling express to render views using the pug templating engine.
app.use(express.static(__dirname + "/public")); // we are using the express.static middleware and specifying a path for static files to be found (__dirname is a variable that we can use to refer to the directory name of the current module)

app.get("/", function (request, response) {
  const firstName = "Elie";
  return response.render("index", { name: firstName }); // here we are rendering a template called index.pug inside of the views folder. We are also passing a value to the template called "name". Inside of the template, the value of that variable will be the value of the firstName variable, which is "Elie"
});

app.get("/colors", function (request, response) {
  // {colors} is ES2015 object shorthand notation for {colors: colors}
  return response.render("data", { colors }); // here we are rendering a template called data.pug inside of the views folder. We are also passing a value to the template called "colors". Inside of the template, the value of that variable will be the value of the colors variables, which is an array.
});

app.get("/hello", function( request, response) {
  return response.render("hello");
})

app.listen(3000, function () {
  console.log(
    "The server has started on port 3000. Head to localhost:3000 in the browser and see what's there!"
  );
});