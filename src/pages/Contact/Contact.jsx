import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-ways">
        <div className="adresse contact-section">
          <i className="bi bi-house-fill"></i>
          <h2>Adress</h2>
          <p>Phagwara, Punjab</p>
        </div>
        <div className="phone-call contact-section">
          <i className="bi bi-telephone-fill"></i>
          <h2>Phone</h2>
          <p>7004429452</p>
        </div>
        <div className="email contact-section">
          <i className="bi bi-envelope-fill"></i>
          <h2>Email</h2>
          <p>adityakumarssm16@gmail.com</p>
        </div>
      </div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <h2>Contact Us Form</h2>
        <div className="name-subject-mail">
          <input type="text" placeholder="Name *" required />
          <input type="text" placeholder="Subject *" required />
          <input type="email" placeholder="Email *" required />
        </div>
        <textarea
          required
          name="contact-message"
          id="contact-message"
          cols="30"
          rows="5"
          placeholder="Your message *"></textarea>
        <button className="contact-send-button" type="submit">
          send
        </button>
      </form>
    </div>
  );
};

export default Contact;
