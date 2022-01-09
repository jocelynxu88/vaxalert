const express = require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");

app.use(cors());
app.use(express.json());

//CONNECTING TO MONGOOSE
mongoose.connect("mongodb+srv://vaxalertadmin:shehacks2022@cluster0.i2jki.mongodb.net/vaxAlertDB")

app.use("/", require("./routes/userRoute"));

app.listen(3002,function(){
    console.log("express server running");
})