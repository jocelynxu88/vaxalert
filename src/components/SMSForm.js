import React, { Component } from 'react';
import './SMSForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class SMSForm extends Component {
    // constructor
    constructor(props){
        super(props);
        this.state = {
            message: {
                to: '',
                body: ''
            },
            submitting: false,
            error: false
        };
        // binding both method to the SMS forms object
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // gets information from the text area
    onHandleChange(event) {
        const name = event.target.getAttribute('name');
        this.setState({
            message: {...this.state.message, [name]: event.target.value}
        });
    }

    // when submit is clicked, use API
    // automatically PREVENT default
    onSubmit(event) {
        event.preventDefault();
        this.setState({submitting: true});
        fetch('/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.message)
        })
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    this.setState({
                        error: false,
                        submitting: false,
                        message: {
                            to: '',
                            body: ''
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
    
    render() {
        return (
            <form
                onSubmit = {this.onSubmit}
                className = {this.state.error ? 'error sms-form' : 'sms-form'}
            >
                <div>
                    <label htmlFor="to">To:</label>
                    <input
                        type="tel"
                        name="to"
                        id="to"
                        // set form field values using onHandleChange
                        value={this.state.message.to}
                        onChange={this.onHandleChange}
                    />
                </div>
                <div>
                    <label htmlFor="body">Body:</label>
                    <textarea 
                        name="body" 
                        id="body"
                        value={this.state.message.body}
                        onChange={this.onHandleChange}
                    />
                </div>
                <Button type="submit" className="custom-btn" disabled={this.state.submitting}>
                    Send message
                </Button>{' '}
            </form>
        );
    }
    
}

export default SMSForm;
