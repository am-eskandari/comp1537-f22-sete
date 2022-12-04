const express = require('express');
const app = express();
const https = require('https');
const axios = require('axios')

app.listen(5000, (err) => {
    if (err) console.log(err)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    const api = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY' // or a weather api
});

// https.get(api, (response) => {
//     console.log(response.statusCode)

//     response.on('data', (data) => {
//         complete_response += data;
//     })
//     response.on('end', () => {
//         console.log(JSON.parse(complete_response))
//     });

// });

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({
    extended: true
}));

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const citySchema = new mongoose.Schema({
    name: String,
    temperature: Number,
    description: String
});
const cityModel = mongoose.model("cities", citySchema);


app.post('/', async (req, res) => {
    const data = await cityModel.findOne({ "name": req.body.cityName })
    res.json(data)
})