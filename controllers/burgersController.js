import express from "express";

const router = express.Router();
import burger from "../models/burger.js";

router.get("/", (req, res) => {
  res.redirect("/burgers");
});

router.get("/burgers", (req, res) => {
  burger.all(burgerData => {
    res.render("index", {
      burger_data: burgerData
    });
  });
});

router.post("/burgers/create", (req, res) => {
  burger.create(req.body.burger_name, result => {
    console.log(result);
    res.redirect("/");
  });
});

router.put("/burgers/update", (req, res) => {
  burger.update(req.body.burger_id, result => {
    console.log(result);
    res.redirect("/");
  });
});

export default router;