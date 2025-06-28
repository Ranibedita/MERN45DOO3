import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <div className="contact-page"> 
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
         <div className="contact-content"> 
          {/* Contact Form */}
          <form className="contact-form">
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />

            <label>Email</label>
            <input type="email" placeholder="Your Email" required />

            <label>Subject</label>
            <input type="text" placeholder="Subject" />

            <label>Message</label>
            <textarea placeholder="Your Message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>

          {/* Contact Info */}
          <div className="contact-info">
            <h2>Reach Us</h2>
            <p><strong>Address:</strong> Bhubaneswar,IRC Village</p>
            <p><strong>Phone:</strong> 7205515970</p>
            <p><strong>Email:</strong> healthcare@gmail.com</p>
            <p><strong>Hours:</strong> Mon - Fri: 9AM - 6PM</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
