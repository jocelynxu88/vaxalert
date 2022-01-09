const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.route("").post((req,res)=> {
    const name = req.body.name;
    const postalcode = req.body.postalcode;
    const pedpfizer= req.body.pedpfizer;
    const pfizer= req.body.pfizer;
    const moderna= req.body.moderna;
    const email= req.body.email;
    const phone= req.body.phone;
    const newUser = new User({
        name,
        postalcode,
        pedpfizer,
        pfizer,
        moderna,
        email,
        phone
    });

    newUser.save();
})

module.exports=router;