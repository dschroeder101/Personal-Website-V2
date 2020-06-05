import React from 'react';
import ContactForm from './ContactForm.js';

class Contact extends React.Component {
    render() {
        return (
            <div className="content-area">
                <h2>Contact</h2>
                <p>
                    Please fill out your contact information and message, and I'll get back to you as soon as possible!
                </p>
                <ContactForm toggleMessageNotification={this.props.toggleMessageNotification}></ContactForm>
            </div>
        );
    }
}

export default Contact;
