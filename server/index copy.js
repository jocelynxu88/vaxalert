// require and initialise the Twilio library with the credentials
const express = require('express');
const bodyParser = require('body-parser');
const { request, response } = require('express');
const pino = require('express-pino-logger')();
const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// require axios for get request
const axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);

// checking for vaccine availability variables
const checkingFrequency = 5 * 60000; // first number corresponds to frequency in minutes

let requestCounter = 0;

// main functionality -- searching jsons

// get json information
//function getPharamciesAPI() {
  postalCode = 'L7G0A9';
  let link = `https://covid19.pchealth.ca/api/data/Get?address=${postalCode},%20ON,%20Canada&page=0&nelat=0&nelng=0&swlat=0&swlng=0`;
  link = 'https://facebook.github.io/react-native/movies.json';
  const res = await axios.get(link); 
  res.constructor.name;



  /*
   .then((response) => response.json())
   .then((responseJson) => {
     return responseJson.movies;
   })
   .catch((error) => {
     console.error(error);
   });*/
//}

// setInterval, performs function every X milliseconds
const intervalId = setInterval(function () {
  request()
  if (err) {
    console.log('Request Error - ${err}');
  }
  else {
    // check whether 
    
  }
}, checkingFrequency)

app.get('/api/greeting', (req, res) => {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

  
app.post('/api/messages', (req, res) => {
    res.header('Content-Type', 'application/json');
    client.messages
        .create({
            from: process.env.TWILIO_PHONE_NUMBER,
            to: req.body.to,
            body: req.body.body
        })
        .then(() => {
            res.send(JSON.stringify({success: true}));
        })
        .catch(err => {
            console.log(err);
            res.send(JSON.stringify({success: false}));
        });
  });

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
