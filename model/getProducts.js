const mongoose = require("mongoose");
const getProductSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    RollNo: String,
})

module.exports = mongoose.model("getProducts", getProductSchema)