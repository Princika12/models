const mongoose = require("mongoose")

const linkdSchema = new mongoose.Schema({
    postNo: Number,
    likes: Number,
    photo: String,
    react: String,
    searchBar: String,

});
const usermodel = mongoose.model("user", linkdSchema);

module.exports = usermodel;