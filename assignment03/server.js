//initialize with importing the required modules
const { urlencoded } = require('express');
const express = require('express');
const app = express();

app.listen(5000, (err) => {
    if (err) console.log(err);
    console.log('Server is running on port 5000');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});
// Path: assignment03\client.js


//initialize with importing mongoose
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://0.0.0.0:27017/test',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) console.log(err);
        console.log('connected to database');
    }
)

// constructed schema
//enum is used to define the values that can be used for the field
// [] is used to define the array of values
const unicornsSchema = new mongoose.Schema({
    name: String,
    dob: Date,
    loves: [String],
    weight: Number,
    gender: {
        type: String,
        enum: ['m', 'f']
    },
    vampires: Number,
    vaccinated: Boolean
});

//create a model, make sure the collection name is plural
const unicornModel = mongoose.model('unicorns', unicornsSchema);

//new get route
app.get('/unicorns', (req, res) => {
    unicornModel.find({}, (err, data) => {
        if (err) res.send(err);
        res.send(data);
    });
});