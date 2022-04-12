const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const UserBalance = new Schema({
    User: String, 
    Balance: Number,
});

module.exports = mongoose.model("UserBalance", UserBalance);