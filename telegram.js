const mongoose = require("mongoose")

const teleSchema = new mongoose.Schema({
    media: String,
    message: String,
    contact: Number,
    react: String,
    reply: String,

});
const usermodel = mongoose.model("user", teleSchema);

module.exports = usermodel;


