const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    table:Number,
    details:{
        selected:[String],
        total:Number,
        count:Number
    }
});

const tableModel = mongoose.model('Table', tableSchema, "table");

module.exports = tableModel