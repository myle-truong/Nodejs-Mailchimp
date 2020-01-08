//jshint esverion:6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {

    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;
    //console.log(firstName, lastName, email)

    var data = {
        members: [{
            email_adress: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    };
    var jsonData = JSON.stringify(data);
    //console.log(jsonData);

    var options = {
        url: "https://us4.api.mailchimp.com/3.0/lists/b8ecfbaff6",
        method: "POST",
        headers: {
            Authorization: "hanatruong c4c51ccd3c52aef2728a3ae493f51a10-us4"
        },
        body: jsonData
    };

    request(options, (error, response, body) => {
        if (error) {
            console.log(error);
        } else {
            console.log(response.statusCode);
        }
    });
});


app.listen(3000, () => {
    console.log("Server started on port 3000")
});


// API: c4c51ccd3c52aef2728a3ae493f51a10-us4
// ListID: b8ecfbaff6