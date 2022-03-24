import React, { Component } from "react";
import "./Contact.css"; 
class Contact extends Component {
    render() {
        return (
            <div id="Contact" className="contact-section">
                <h1 className="heading">Contact <span> us</span></h1>
                <form action="" class="contact_form grid">
                    <div class="contact_inputs grid">
                        <div class="contact_content">
                            <label  class="contact_label">Name</label>
                            <input type="text" class="contact_input"/>
                        </div>
                        <div class="contact_content">
                            <label for="" class="contact_label">Email</label>
                            <input type="email" class="contact_input"/>
                        </div>
                        <div class="contact_content">
                            <label for="" class="contact_label">Phone Number</label>
                            <input type="number" class="contact_input"/>
                        </div>
                        <div class="contact_content">
                            <label for="" class="contact_label">Message</label>
                            <textarea name="" id="" cols="0" rows="5" class="contact_input"></textarea>
                        </div>
                        <div class="button-section">
                            <a href="#" class="form-btn">
                                Send Message
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Contact;