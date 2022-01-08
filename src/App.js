import React from "react";
import './App.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Form from "./components/Form.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-grid-system';
import SMSForm from "./components/SMSForm";
import {ReactComponent as AlertGraphic} from "./components/AlertGraphic.svg";


function App() {
  return (
    <div className="App">
      <div>
        <Header />

        <Container>
          <Row>
            <Col md={7}>
              <div className="intro">
                <h1>Get notified.</h1>
                <h1>Get vaccinated.</h1>
                <p>The go-to site to get vaxxed to the max(ed)</p>
              </div>
            </Col>
            <Col md={5}>
              <div className="cutegraphic">
                {/* <img alt="vaccinegraphic" src="https://images-na.ssl-images-amazon.com/images/I/8136d0VMhSL.jpg" /> */}
                <AlertGraphic/>
                {/* <img src={AlertGraphic}/> */}
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="formlayout">
                <Form /> 
                <SMSForm />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;
