const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    des:String,
    available:Boolean,
    type:String
});

const itemModel = mongoose.model('Items', itemSchema, "items");

module.exports = itemModel