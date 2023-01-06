//initialize with importing the required modules
const { urlencoded } = require('express');
const express = require('express');
const app = express();

// these are middleware that helps you encode the data
app.use(express.urlencoded());
app.use(express.json());

//create a model, make sure the collection name is plural
const unicornModel = mongoose.model('unicorns', unicornsSchema);

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


//new get route
app.get('/unicorns', (req, res) => {
    unicornModel.find({}, (err, data) => {
        if (err) res.send(err);
        res.send(data);
    });
});


// get by name route
app.post('/getUnicornByNameRoute', (req, res) => {
    console.log(req.body);
    unicornModel.find({ name: req.body.unicornNameInHTTPBody }, (err, data) => {
        if (err) console.log(err);
        res.send(data);
    });
});

// get by weight route
app.post('/getUnicornByWeightRoute', (req, res) => {
    console.log(req.body);
    unicornModel.find(
        {
            weight: {
                $gte: req.body.minWeightInHTTPBody,
                $lte: req.body.maxWeightInHTTPBody
            },
        },
        (err, data) => {
            if (err) console.log(err);
            res.send(data);
        });
});

// get by weight route
app.post('/getUnicornByFavFoodRoute', (req, res) => {
    console.log(req.body);
    unicornModel.find(
        {
            loves: { $all: req.body.foodInHTTPBody }
        },
        (err, data) => {
            if (err) console.log(err);
            res.send(data);
        });
});



//express.static is used to serve static files such as images, CSS files, and JavaScript files
app.use(express.static('./public'));