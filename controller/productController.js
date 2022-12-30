const Products = require("../model/Products");
const express = require("express");
var router = express.Router();
//Get all products
module.exports.products_all = async (req, res) =>{
    try{
        const product = await Products.find({})
        console.log("rest here");
       return res.status(200).json({product})
  }
       catch(err){
           console.log("err",err);
       }
}

module.exports.products_add = async (req, res) =>{
    try{
        const {title, price} = req.body;
        const product = new Products({title, price})
        console.log("rest here");
        await product.save();
       return res.status(200).json({product})
  }
       catch(err){
           console.log("err",err);
       }
}
 
//Single  products
const products_details = async (req, res) =>{}
//Add new products
const products_create = async (req, res) =>{
 
    }

//Delete products
const products_delete = async (req, res) =>{}

// module.exports = {
//     products_all,
//     products_details,
//     products_create,
//     products_delete,
// }