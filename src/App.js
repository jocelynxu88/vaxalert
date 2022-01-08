import React from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-grid-system';
import SMSForm from "./components/SMSForm";


function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <div>
        <Container>
          <Row>
            <Col md={8}>
              <div className="intro">
                <h1>Get notified.</h1>
                <h1>Get vaccinated.</h1>
                <Button variant="info">Start Now</Button>{' '}
              </div>

            </Col>
            <Col md={4}>
              <div className="cutegraphic">
                <img alt="vaccinegraphic" src="https://images-na.ssl-images-amazon.com/images/I/8136d0VMhSL.jpg" />
              </div>
              
            </Col>
          </Row>
        </Container>
        </div>
        <div>
        <h1>hellllo</h1>
        <SMSForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
