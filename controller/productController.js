const Products = require("../model/Products");
const getProducts = require("../model/getProducts");
const express = require("express");
var router = express.Router();
//Get all products
module.exports.products_all = async (req, res) =>{
    try{
        const product = await Products.find({})
        console.log("get data");
       return res.status(200).json({product})
  }
       catch(err){
           console.log("err",err);
       }
}

module.exports.products_add = async (req, res) =>{
    try{
        const {title, price} = req.body;
        const note = await Products.create({
            title:title,
             price:price,
         
        })
       return res.status(200).json({ note: note })
  }
       catch(err){
           console.log("err",err);
       }
}
 
 
module.exports.findNote = async (req, res) =>{
    try{
       const findId = req.params.id;
       const note = await Products.findById(findId)
       res.json({note:note})
  }
       catch(err){
           console.log("err",err);
       } 
}
//Add new products
module.exports.updateNote = async (req, res) =>{
   try{
    const updateNote = req.params.id;

    const title = req.body.title;
    const price = req.body.price;

    const note = await Products.findByIdAndUpdate(updateNote,{
     title:title,
     price:price,
    })
    res.json({ note : note })
   }
   catch(err){
   console.log(err);
   }
    }

    module.exports.deleteNote = async (req, res) =>{
        try{
            const delNote = req.params.id;
            const note = await Products.findByIdAndRemove(delNote)
            res.json({ note : note})
        }
        catch(err){
            console.log(err);
        }
    }
//Delete products
const products_delete = async (req, res) =>{}

// module.exports = {
//     products_all,
//     products_details,
//     products_create,
//     products_delete,
// }