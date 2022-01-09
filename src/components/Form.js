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
    const [user, setUser] = useState({
        name: "", postalcode: "", pedpfizer: false, pfizer: false, moderna: false, email: "", phone:""
    });

    // const handleChange = (event) => {
    //   const name = event.target.name;
    //   const value = event.target.value;
    //   setUser(values => ({...values, [name]: value}))
    // }
    function handleChange(event){
          const{name,value} = event.target;

          setUser(prevInput =>{
              return{
                  ...prevInput,
                  [name]:value
              }

          })
        }
        
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(user);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        
        <div className="form-group">
             <label >Full Name</label>
             <input onChange={handleChange} name="name" value={user.name} type="text" className="form-control" id="fullname" placeholder="e.g. Jane Doe" />
        </div>
        <div className="form-group">
             <label>Postal Code</label>
             <input onChange={handleChange} name="postalcode" value={user.postalcode} type="text" className="form-control" id="postalcode" placeholder="e.g. A1B 2C3"  />
        </div>
        
            <label> Type of Vaccine: 
                <div className="form-check">
                <input onChange={handleChange} name="pedpfizer"value={user.pedpfizer} className="form-check-input" type="checkbox" id="vaccine1" value={true} />
                <label className="form-check-label" >Pediatric Pfizer</label>
                </div>
                <div className="form-check">
                <input onChange={handleChange} name="pfizer"value={user.pfizer} className="form-check-input" type="checkbox" id="vaccine2" value={true}/>
                <label className="form-check-label" >Pfizer</label>
                </div>
                <div className="form-check">
                <input onChange={handleChange} name="moderna"value={user.moderna} className="form-check-input" type="checkbox" id="vaccine3" value={true} />
                <label className="form-check-label" >Moderna</label>
                </div>
            </label>
            <div className="form-group">
    <label >Email address</label>
    <input onChange={handleChange} name="email"value={user.email} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="example@email.com"/>

  </div>
        
        <div className="form-group">
             <label >Phone Number</label>
             <input onChange={handleChange}name="phone" value={user.phone} type="tel" className="form-control" id="phone" placeholder="(###) ###-####" required/>
        </div>
        <Button onClick={handleSubmit} type="submit" className="custom-btn btn-lg" >
            Submit
        </Button>{' '}
      </form>
    )
  }

export default EntryForm;