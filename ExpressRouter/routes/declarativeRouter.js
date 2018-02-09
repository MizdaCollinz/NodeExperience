// Equivalent functionality to index.js but with better self documenting code
//Each Router declares all types of HTTP request that can be sent to it

const express = require("express");
const router = express.Router();

const users = [];
var id = 1;

// declare all the methods on the /users route (prefix specified in app.js)
router
  .route("")
  .get((req, res, next) => {
    return res.render("index", { users });
  })
  .post((req, res, next) => {
    users.push({
      name: req.body.name,
      id: ++id
    });
    return res.redirect("/users");
  });

router.route("/new").get((req, res, next) => {
  return res.render("new");
});

router
  .route("/:id")
  .get((req, res, next) => {
    const user = users.find(val => val.id === Number(req.params.id));
    return res.render("show", { user });
  })
  .patch((req, res, next) => {
    const user = users.find(val => val.id === Number(req.params.id));
    user.name = req.body.name;
    return res.redirect("/users");
  })
  .delete((req, res, next) => {
    const userIndex = users.findIndex(val => val.id === Number(req.params.id));
    users.splice(userIndex, 1);
    return res.redirect("/users");
  });

router.route("/:id/edit").get((req, res, next) => {
  const user = users.find(val => val.id === Number(req.params.id));
  res.render("edit", { user });
});

module.exports = router;