import React from 'react';
import { useState } from "react";
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './Form.css';
import axios from "axios";


function EntryForm() {
    const [user, setUser] = useState({
        name: "", postalcode: "", pedpfizer: false, pfizer: false, moderna: false, email: "", phone:""
    });

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
      const newUser={
        name: user.name,
        postalcode: user.postalcode,
        pedpfizer: user.pedpfizer, 
        pfizer: user.pfizer, 
        moderna: user.moderna, 
        email: user.email, 
        phone: user.phone
      }
      console.log(user);
      //could not get proxy connection to work on github
      axios.post("http://localhost:3002/", newUser)
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