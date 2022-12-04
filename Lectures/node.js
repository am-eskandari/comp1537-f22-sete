// https://github.com/nabil828/nodejs-tutorial#deploy-your-site-to-heroku
// https://www.youtube.com/watch?v=mnMS96b_wWg

const express = require('express'); // import express module 
const app = express();  // create express object called app


// node .\node.js to restart node
// nodemon .\node.js to restart node automatically after changes
// refresh the page to see effects

// to try this out
// localhost:5000/xxxxxx for specific path
// localhost:5000/xxxxxx?city=vancouver&unit=metric for specific path with query string 

app.listen(5000) // listen on port 5000

// Hello World Route
// .get is a method to establish a route
app.get('/', (req, res) => {
    console.log('Hello World');
    res.send('<h1>Hello World</h1>');
});

// About Route
// https://expressjs.com/en/api.html#res
app.get('/about', (req, res) => {
    res.write('<h1>About</h1>');
    res.write('<p>This is a paragraph</p>');
    // always send once per route
    res.send('<h1>About Page</h1>');
    // res.json({ name: 'Nabil' }); // send json
    // res.status(404).send('Not Found'); // send status code
    // res.end(); // end response
});


// EXAMPLE: Weather App
const cities = [
    { name: 'Toronto', weather: 10.93 },
    { name: 'Vancouver', weather: 12.93 },
]
// third route
app.get('/weather', (req, res, next) => {
    let found = false
    cities.forEach((city) => {
        if (city.name === req.query.city) {
            found = true
            res.status(200).json({ // 200 is the default status code
                temp: city.weather
            })
        }
    })
    if (found)
        return next(); // return the response
    else
        res.send("city not found") //always send back a response