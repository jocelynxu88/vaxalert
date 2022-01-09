import React from 'react';
import { useState } from "react";
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './Form.css';
// import {Checkbox} from 'react-bootstrap';

// class EntryForm extends Component {
//     render() {
//       return (
//       <Container>
//         <Form>
//           <Form.Group controlId="form.Name">
//               <Form.Label>Name</Form.Label>
//               <Form.Control type="text" placeholder="Enter name" />
//           </Form.Group>
//           <Form.Group controlId="form.Email">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control type="email" placeholder="name@example.com" />
//           </Form.Group>
//           <Form.Group controlId="form.Phone">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control type="tel" placeholder="(###)-###-####" />
//           </Form.Group>
//           <Form.Group>
//               <input type="checkbox"> <label>Pfizer</label></input>
//             {/* <Checkbox inline>Pediatric Pfizer</Checkbox> <Checkbox inline>Pfizer</Checkbox>{' '}
//             <Checkbox inline>Moderna</Checkbox> */}
//         </Form.Group>
//         </Form>
//       </Container>
//       );
//     }
         
//   }
  
//   export default EntryForm;

function EntryForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert("submitted");
    }
  
    return (
      <form onSubmit={handleSubmit}>
        {/* <div class="form-group">
            <label for="location">Location</label>
            <select class="form-control" id="location">
            <option>Select...</option>
            <option>Ottawa</option>
            <option>Owen Sound</option>
            <option>London</option>
            <option>Hamilton</option>
        </select>
        </div> */}
        <div class="form-group">
             <label for="postalcode">Postal Code</label>
             <input type="text" class="form-control" id="postalcode" placeholder="e.g. A1B 2C3" />
        </div>
        <div class="form-group">
             <label for="fullname">Full Name</label>
             <input type="text" class="form-control" id="fullname" placeholder="e.g. Jane Doe" />
        </div>
        
            <label> Type of Vaccine: 
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="vaccine1" value="PEDPFIZER" />
                <label class="form-check-label" for="vaccine1">Pediatric Pfizer</label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="vaccine2" value="PFIZER" />
                <label class="form-check-label" for="vaccine2">Pfizer</label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="vaccine3" value="MODERNA" />
                <label class="form-check-label" for="vaccine3">Moderna</label>
                </div>
            </label>
            <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="example@email.com"/>

  </div>
        
            
        {/* <div>
                
        <label>Type of Vaccine:
            <div>
                <label>Pediatric Pfizer
                    <input name="vaccine" type="checkbox" value="PFIZER"/>
                </label>
                <label>Pfizer
                    <input name="vaccine" type="checkbox" value="PFIZER"/>
                </label>
                <label>Moderna
                    <input name="vaccine" type="checkbox" value="MOERNA"/>
                </label>
            </div>
        </label>
        </div> */}
        {/* <div>
            <label>Email:
                <input name="email" type="email" placeholder="example@email.com" required />

            </label>
        </div> */}
        {/* <div class="form-group">
            <label>Phone Number:
                <input  name="phone" type="tel" placeholder="(###)###-####" required />

            </label>
        </div> */}
        <div class="form-group">
             <label for="phone">Phone Number</label>
             <input type="tel" class="form-control" id="phone" placeholder="(###) ###-####" required/>
        </div>
        <Button type="submit" className="custom-btn" >
            Submit
        </Button>{' '}
      </form>
    )
  }

export default EntryForm;