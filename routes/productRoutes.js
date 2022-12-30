const express = require("express");
const router = express.Router();
const { products_all, products_add } = require("../controller/productController")
router.get("/", products_all)
router.post("/add", products_add)
 

module.exports = router