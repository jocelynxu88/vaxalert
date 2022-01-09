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
function checkAvailability(pharmJson, pedPfizer, pfizer, moderna, astra) {
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
  else if (astra && pharmJson.isAstraZeneca) {
    vaccine_available ="AstraZeneca";
  }
  return vaccine_available;
}
// get json information
function getPharmaciesAPI() {
  postalCode = 'L7G0A9';
  let link = `https://covid19.pchealth.ca/api/data/Get?address=${postalCode},%20ON,%20Canada&page=0&nelat=0&nelng=0&swlat=0&swlng=0`;
  axios.get(link)
    .then((response) => {
      //console.log(response.data)
      let pedPfizer = false;
      let pfizer = true;
      let moderna = true;
      let astra = false;
      let pharmaciesAll = response.data;
      let pharmacies = pharmaciesAll.results;
      for (let i = 0; i < pharmacies.length; i++) {
        vaccine = checkAvailability(pharmacies[i], pedPfizer, pfizer, moderna, astra);
        // if vaccine exists, then break
        if (!(vaccine === "none")) {
          console.log(vaccine + pharmacies[i].storeName);
          console.log(vaccine + pharmacies[i].storeURL);
          sendMessage(vaccine, pharmacies[i].storeName, pharmacies[i].storeURL, pharmacies[i].address);
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
getPharmaciesAPI();

// sends message directly without using a json or post request
// https://www.twilio.com/docs/sms/quickstart/node
function sendMessage(vaccine, storeName, storeURL, address) {
  client.messages
  .create({
     body:  `There is a ${vaccine} vaccine available at ${storeName}: ${address} \nBook your appointment here: ${storeURL}`,
     from: process.env.TWILIO_PHONE_NUMBER,
     to: '+' // insert phone number here
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

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
