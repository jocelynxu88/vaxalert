# VaxAlert
![image](https://user-images.githubusercontent.com/68765813/148687574-d567df99-4716-4032-9679-5c2405a12cf5.png)

## 😷🦠 Inspiration
Ensuring that everyone has the ability to book a COVID-19 vaccine is important, now more than ever.
The process of booking a vaccine through pharmacies can be long and tedious, as users must navigate to *each* individual pharmacy site to view availability. Regardless of organizations such as Vaccine Hunters Canada which aid eligible Canadians in finding vaccines, finding a spot to a vaccination appointment locally is still almost impossible. Our project, VaxAlert, aims to address this by allowing users the opportunity to select a location and receive a text message notification when any pharmacy in that region has available vaccine times.

## 💉 What it does
The premise of our project is based around a user-friendly, responsive webpage where visitors can enter their contact information, needed vaccine type, and location. While storing this information, a web scraping program would be used to flag when vaccine appointments become available on a pharmacy website. Based on the collected information, a notification will then be sent to the appropriate people by text. This eliminates the burden of constantly checking several different pharmacy websites and signing up for dozens of waitlists individually, allowing the community to become better protected from the pandemic.

## 🚀 Launch
1. Clone the repo.
2. Install the following dependecies:
    * npm
    * react-bootstrap bootstrap@5.1.3
    * react-grid-system
    * twilio (`npm install twilio`)
    * node-env-run, nodemon, npm-run-all, express-pino-logger, and pino-colada (`npm install node-env-run nodemon npm-run-all express-pino-logger pino-colada --save-dev`)
    * express body-parser
    * axios
2. Rename the `sample.env` file to `.env` and add in your Twilio account credentials.
3. In the project directory, run: `npm run dev`. 
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🖥 Usage
1. Enter your information (e.g., name, postal code, vaccine, email address, and phone number) into the form.
![image](https://user-images.githubusercontent.com/68765813/148687687-7c486a39-9991-42bb-9040-e123d701597b.png)

2. Submit the form and wait for your vaccine notification!

   <img src="https://user-images.githubusercontent.com/68765813/148687741-87af2842-663e-456f-baf9-c888f2824355.png" alt="text notification" width="300">

## 💻 Other Scripts

#### `npm start`

Runs the frontend. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


#### `npm server`

Runs the backend express server.
Opens [http://localhost:3001](http://localhost:3001) to view it in your browser.

## ➡ Learn More
We submitted VaxAlert for the [SheHacks+ 6](https://shehacks.ca/) hackathon. Check out our Devpost to learn more about the challenges we ran into, our accomplishments, and future ideas! https://devpost.com/software/vaxalert

## 👩‍💻 Contributors
Sarah Arnold, Kailin Chu, Nishckria Nataraja Babu, Jocelyn Xu
