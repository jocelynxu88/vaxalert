import React from "react";
import './App.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import EntryForm from "./components/Form.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-grid-system';
import SMSForm from "./components/SMSForm";
import {ReactComponent as AlertGraphic} from "./components/AlertGraphic.svg";
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Source+Sans+Pro:wght@300;700&display=swap');
</style>

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
                <p>Sign up to receive alerts for COVID vaccine availability in pharmacies!</p>
              </div>
            </Col>
            <Col md={5}>
              <div className="cutegraphic">
                <AlertGraphic/>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="formlayout">
                <EntryForm /> 
                {/* <SMSForm /> */}
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
