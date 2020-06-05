import React from 'react';
import {FormGroup, FormControl, FormLabel, Button} from 'react-bootstrap';

class ContactForm extends React.Component {

    constructor() {
        super();
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendFormData = this.sendFormData.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    state = {
        name: '',
        email: '',
        message: ''
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }

    handleMessageChange(e) {
        this.setState({message: e.target.value});
    }

    handleSubmit(event) {
        console.log("Submit clicked...")
        event.preventDefault();
        this.sendFormData();
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }

    requestBuildQueryString(params) {
        const queryString = [];
        for (let property in params)
            if (params.hasOwnProperty(property)) {
                queryString.push(encodeURIComponent(property) + '=' + encodeURIComponent(params[property]));
            }
        const completedQueryString = queryString.join('&');
        console.log(completedQueryString);
        return completedQueryString;
    }

    sendFormData = () => {
        //Retrieve form values
        const formData = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };

        //Send the form data
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState === 4) {
                if (xmlhttp.status === 200 && xmlhttp.statusText === 'OK') {
                    console.log('Success');
                    this.resetForm();
                    this.props.toggleMessageNotification(true);
                    setTimeout(() => {this.props.toggleMessageNotification(false)}, 5000);
                } else {
                    console.log('Error');
                }
            }
        };
        xmlhttp.open('POST', 'send', true);
        xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlhttp.send(this.requestBuildQueryString(formData));
    }

    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <FormLabel>
                        Name
                    </FormLabel>
                    <FormControl required type="text" value={this.state.name} placeholder="Enter your name" onChange={this.handleNameChange}></FormControl>
                    <FormLabel>
                        Email address
                    </FormLabel>
                    <FormControl required type="text" value={this.state.email} placeholder="Enter your email address" onChange={this.handleEmailChange}></FormControl>
                    <FormLabel>
                        Message
                    </FormLabel>
                    <FormControl required componentClass="textarea" rows="4" type="text" value={this.state.message} placeholder="Enter your message" onChange={this.handleMessageChange}></FormControl>
                </FormGroup>
                <Button className="btn btn-primary" type="submit">
                    Submit
                </Button>
            </form>
        );
    }
}

export default ContactForm;
