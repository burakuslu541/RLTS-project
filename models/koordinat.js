const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const koordinat = new Schema({

    x:String,
    y:String,
    date: {type: Date, default: Date.now}
    
}, {
    timeStamp: true
})
module.exports = mongoose.model("koordinat", koordinat);