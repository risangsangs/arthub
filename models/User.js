const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const User = mongoose.model("User", TableSchema);

module.exports = User;