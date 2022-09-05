import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ContactUs from "../../assets/ContactUs.jpg";
import "./ContactUsForm.css";
const ContactUsForm = () => {
  return (
    <div>
      <Navbar/>
      <div className="contact-form">
        <div className="contact-container">
      <div className="left-contact">
        <form id="contact" action="" method="post">
          <h3>Get a Quote here</h3>
          <h4>Contact us for custom quote</h4>
          <fieldset>
            <input
              placeholder="Your name"
              type="text"
              tabindex="1"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Email Address"
              type="email"
              tabindex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Phone Number (optional)"
              type="tel"
              tabindex="3"
              required
            />
          </fieldset>
          <fieldset>
            <select id="plans" >
            <option value="" disabled selected hidden>Select plans</option>
              <option value="">Free Trail</option>
              <option value="">Pro Plan</option>
              <option value="">Premium Plan</option>
            </select>
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Type your message here...."
              tabindex="5"
              required
            ></textarea>
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
      <div className="right-contact">
      <img src={ContactUs} alt="" />
      </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactUsForm;