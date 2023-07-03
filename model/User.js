const mongoose = require("mongoose")

const User = mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    confirmPassword:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model("User", User)
