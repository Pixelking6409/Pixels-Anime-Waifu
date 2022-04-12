const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const UserProfile = new Schema({
    User: { type: String, require: true, unique: true },
    Balance: Number,
    Bank: Number,
});

module.exports = mongoose.model("UserProfile", UserProfile);