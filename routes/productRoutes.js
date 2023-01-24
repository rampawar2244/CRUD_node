const express = require("express");
const router = express.Router();
const { products_all, products_add, findNote, updateNote, deleteNote } = require("../controller/productController")
router.get("/getProduct", products_all)
router.get("/getProduct/:id", findNote)
router.put("/getProducts/:id", updateNote)
router.delete("/getProducts/:id", deleteNote)
router.post("/add", products_add)
 

module.exports = router