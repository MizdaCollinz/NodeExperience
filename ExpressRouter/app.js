const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
//Require our routes index.js
const userRouters = require("./routes");

app.set("view engine", "pug");
app.use(express.static(__dirname = "/public"));
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(methodOverride("_method"));

app.use("/users", userRouters);

app.get("/", (req, res, next) => {
    return res.redirect("/users");
});

app.listen(3000, function() {
    console.log("Server listening on port 3000");
});