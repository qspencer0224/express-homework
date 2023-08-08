const express = require('express')
//require modules

const app = express();

let PORT = 3000

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

const responses = require('./models/responses')

//GREETING
app.get('/greeting/:name', (req, res) =>{
    console.log('REQ PARAMS: ', req.params)
    console.log('REQ QUERY: ', req.query)
    res.send(`What's up, ${req.params.name}`)
})

//TIP CALCULATOR
app.get('/tip/:total/:tipPercentage', (req, res) =>{
    let tip = req.params.total * (req.params.tipPercentage / 100)
    res.send (`<h1>Your expected tip is ${tip}</h1>`)
})

app.get('/magic/:question', (req, res) =>{
    let randomResponse = responses[Math.floor(Math.random() * responses.length)]
    res.send(`${req.params.question}<h1>${randomResponse}</h1>`)
})



app.listen(PORT, (req, res) =>{
    console.log(`Listening on PORT ${PORT}`)
})