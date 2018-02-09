const express = require("express");
//Router object on base express module - similar to usual app objects
const router = express.Router();

const users = [];
var id = 0;

router.get("", (req, res, next) => {
    return res.render("index", {users});
});

router.get("/new", (req, res, next) => {
    return res.render("new");
});

router.get("/:id", (req, res, next) => {
    const user = users.find(val => val.id === Number(req.params.id));
    return res.render("show", { user });
});

router.get("/:id/edit", (req, res, next ) => {
    const user = users.find(val => val.id === Number(req.params.id));
    return res.render("edit", { user });
});

router.post("", (req, res, next) => {
    users.push({
        name: req.body.name,
        id: ++id
    });
    return res.redirect("");
});

router.patch("/:id", (req, res, next) => {
    const user = users.find( val => val.id === Number(req.params.id));
    user.name = req.body.name;
    return res.redirect("/users");
});

router.delete("/:id", (req, res, next) => {
    const userIndex = users.findIndex(val => val.id === Number(req.params.id));
    users.splice(userIndex, 1);
    return res.redirect("");
});

module.exports = router;