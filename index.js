const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const productRouter = require("./routes/productRoutes")
dotenv.config();
// app.use(productRouter);   
//connect to db
mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.cvynbad.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

).then(()=>{
    app.listen(4000, ()=> console.log("The server running on 4000!"))
}).catch((err)=>{
    console.log(err);
})
app.use(express.json())
app.use("/products", productRouter)
//routes middleware
