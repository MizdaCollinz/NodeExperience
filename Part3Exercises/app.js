const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const shopRoutes = require("./routes");

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//Use router
app.use("/items", shopRoutes);

app.get("/", (req, res, next) => {
    return res.redirect("/items");
});

app.listen(3000, function() {
    console.log("Server listening on port 3000");
});