const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db.js');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const itemModel = require('./models/itemModel.js');
const tableModel = require('./models/tableModel.js');

app.use(express.json());
app.use(cors());
db.getDB();

app.get('/', async(req, res) => {
    await itemModel.find({})
    .then(result => res.json(result))
    .catch(e => console.log(e));
})

app.get('/payment/:tableNo', async(req, res) => {
    let { tableNo } = req.params;
    await tableModel.findOne({table:tableNo})
    .then(result => res.json(result))
    .catch(err => console.log(err));
})

app.put('/payment/:tableNo', async(req, res) => {
    console.log(req.body);
    let {tableNo} = req.params;
    let {newString, cost} = req.body;
    
    await tableModel.findOneAndUpdate({table:tableNo}, { $push: {"details.selected": { $each:newString }}, "details.total":cost})
    .then(result => res.json(result))
    .catch(err => console.log(err));
})

app.get('/:type', async(req, res) => {
    let type = req.params.type;
    await itemModel.find({type:type})
    .then(result => res.json(result))
    .catch(e => console.log(e));
});

app.post('/search', async(req, res) => {
    let { query } = req.body;
    console.log(query);

    await itemModel.find({ name : { $regex: query, $options: 'i' }})
    .then(result => res.json(result))
    .catch(err => console.log(err));
})

app.get('/search', async(req, res) => {
    let { query } = req.body;
    console.log(query);

    await itemModel.find({ name : { $regex: query, $options: 'i' }})
    .then(result => res.json(result))
    .catch(err => console.log(err));
})

app.listen(8000, (req, res) => {
    console.log('Server is listening on Port: 8000');
})