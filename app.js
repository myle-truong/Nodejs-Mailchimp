//jshint esverion:6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const APIkey = 'c4c51ccd3c52aef2728a3ae493f51a10-us4'
const list_id = 'b8ecfbaff6'

const app = express();

app.use(express.static('public')); //location cua data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html')
});

app.post('/', (req, res) => {

    let firstName = req.body.fName;
    let lastName = req.body.lName;
    let email = req.body.email;
    //console.log(firstName, lastName, email);

    let option = {
        url: 'https://us4.api.mailchimp.com/3.0/lists/b8ecfbaff6',
        method: 'POST',
    };

    request(option, (error, response, body) => {
        if (error) {
            console.log(error);
        } else {
            console.log(response.statusCode);
        }
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000')
});

//api
//c4c51ccd3c52aef2728a3ae493f51a10-us4