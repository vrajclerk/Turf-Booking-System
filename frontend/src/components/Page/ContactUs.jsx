//import React from 'react'
import './contact.css';
const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1 className="heading">Contact Us</h1>
      <p className="contact-info">For any inquiries, please feel free to reach out to us:</p>
      <div className="contact-details">
        <p>Email: <a href="mailto:info@example.com" className="email-link">tester31190@gmail.com</a></p>
        <p>Phone: <span className="phone-number">+91 8238133795</span></p>
        <p>Address: <span className="address">B-7,Yogitraj Society,College road,Nadiad.<br/>State:Gujarat<br/>Zip:387001</span></p>
      </div>
    </div>
  );
};

export default ContactUs;

