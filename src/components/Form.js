import React from 'react';
import { useState } from "react";
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function Form() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
            <label>Location:
                <select name="location">
                    <option>Select...</option>
                    <option>Ottawa</option>
                    <option>Owen Sound</option>
                </select>

            </label>
        </div>
        <div>
            <label>Full Name:
                <input 
                type="text" 
                name="first" 
                placeholder="e.g. Jane Doe"
                onChange={handleChange} required
                />
            </label>
        </div>
        <div>
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
        </div>
        {/* <div>
            <label>Email:
                <input name="email" type="email" placeholder="example@email.com" required />

            </label>
        </div> */}
        <div>
            <label>Phone Number:
                <input name="phone" type="tel" placeholder="(###)###-####" required />

            </label>
        </div>
        <Button type="submit" className="custom-btn" >
            Submit
        </Button>{' '}
      </form>
    )
  }

export default Form;