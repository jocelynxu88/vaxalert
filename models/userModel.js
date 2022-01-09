const mongoose = require("mongoose");

const userSchema = {
    name: String,
    postalcode: String,
    pedpfizer: Boolean, 
    pfizer: Boolean, 
    moderna: Boolean, 
    email: String, 
    phone: String
    
}

const User=mongoose.model("User", userSchema);

module.exports = User;