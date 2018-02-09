const express = require("express");

const router = express.Router();

var items = [];
//Shopping item defined by Name:___ and Price:___

router.route("")
    .get(
        (req, res, next ) => {
            return res.render("items", { items });
    })
    .post(
        (req, res, next ) => {
            let item = items.find(val => val.name === req.body.name);
            if(item === undefined){
                items.push({
                    name: req.body.name,
                    price: req.body.price
                });
            }
            return res.redirect("/");
    })
    .delete(
        (req, res, next ) => {
            items = [];
            return res.redirect("/");
    });

router.route("/new")
    .get(
        (req, res, next) => {
            return res.render("new-items");
    });

router.route("/:id")
    .get( (req, res, next) => {
        let item = items.find(val => val.name === req.params.id);
        return res.render("show-item", { item });
    })
    .patch( (req, res, next) => {
        let item = items.find(val => val.name === req.params.id);
        item.name = req.body.name;
        item.price = req.body.price;
        return res.redirect("/");
    })
    .delete( (req, res, next ) => {
        let itemIndex = items.findIndex(val => val.name === req.params.id);
        console.log(`Deleting ${itemIndex}`);
        items.splice(itemIndex,1);
        return res.redirect("/");
    });

router.route("/:id/edit")
    .get( (req, res, next ) => {
        let item = items.find(val => val.name === req.params.id);
        return res.render("patch-items",{ item });
    });

// TODO Search functionality
// router.route("/search")
//     .get();

module.exports = router;