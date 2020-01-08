//jshint esverion:6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html')
});

app.listen(3000, () => {
    console.log('Server started on port 3000')
});