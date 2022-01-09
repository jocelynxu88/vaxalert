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
function checkAvailability(pharmJson, pedPfizer, pfizer, moderna) {
  vaccine_available = "none";
  if (pedPfizer && pharmJson.isPediatricPfizer) {
    vaccine_available = "Pediatric Pfizer";
  }
  else if (pfizer && pharmJson.isPfizer) {
    vaccine_available = "Pfizer";
  }
  else if (moderna && pharmJson.isModerna) {
    vaccine_available ="Moderna";
  }
  return vaccine_available;
}
// get json information
function getPharmaciesAPI(postalCode, pedPfizer, pfizer, moderna, phoneNumber, name) {
  let link = `https://covid19.pchealth.ca/api/data/Get?address=${postalCode},%20ON,%20Canada&page=0&nelat=0&nelng=0&swlat=0&swlng=0`;
  axios.get(link)
    .then((response) => {
      //console.log(response.data)
      let pharmaciesAll = response.data;
      let pharmacies = pharmaciesAll.results;
      for (let i = 0; i < pharmacies.length; i++) {
        vaccine = checkAvailability(pharmacies[i], pedPfizer, pfizer, moderna);
        // if vaccine exists, then break
        if (!(vaccine === "none")) {
          console.log(vaccine + pharmacies[i].storeName);
          console.log(vaccine + pharmacies[i].storeURL);
          sendMessage(vaccine, pharmacies[i].storeName, pharmacies[i].storeURL, pharmacies[i].address, phoneNumber, name);
          break;
        }
      }
    })
    .catch((error) => {
     console.error(error);
    });
}
// setInterval, performs function every X milliseconds
// setInterval(getPharmaciesAPI, checkingFrequency);
// getPharmaciesAPI();

// sends message directly without using a json or post request
// https://www.twilio.com/docs/sms/quickstart/node
function sendMessage(vaccine, storeName, storeURL, address, phoneNumber, name) {
  client.messages
  .create({
     body:  `Hello ${name}! There is a ${vaccine} vaccine available at ${storeName}: ${address} \nBook your appointment here: ${storeURL}`,
     from: process.env.TWILIO_PHONE_NUMBER,
     to: phoneNumber
   })
  .then(message => console.log(message.sid));
}

/*
// message sending function that would use the post request written for the SMS form
function sendMessageTest(vaccine, storeName, storeURL, address) {
  state = {
    message: {
        to: '',
        body: ''
    },
    submitting: false,
    error: false
  };

  fetch('/api/messages', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(state.message)
  })
    .then(res => res.json())
    .then(data => {
        if(data.success) {
            this.setState({
                error: false,
                submitting: false,
                message: {
                    to: '',
                    body: `There is a ${vaccine} vaccine available at ${storeName}: ${address}. \nBook here: ${storeURL}`
                }
            });
        }
        else {
            this.setState({
                error:true,
                submitting: false
            });
        }
    });
}
*/

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

app.post('/check-availability', (req, res) => {
    //res.header('Content-Type', 'application/json');
    console.log("hey" + req.body.moderna);
    getPharmaciesAPI(req.body.postalcode, req.body.pedpfizer, req.body.pfizer, req.body.moderna, req.body.phone, req.body.name);
    /*client.messages
        .create({
            from: process.env.TWILIO_PHONE_NUMBER,
            to: req.body.to,
            body: req.body.body
        })*/
      });
app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
