
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ContactUs from "../../assets/ContactUs.jpg";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactUsForm.css";
const ContactUsForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4yjmgjf', 'template_ded7pnb', form.current, 'ynwxhhYCJROs27MsM')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="contact-form">
        <div className="contact-container">
          <div className="left-contact">
            <form ref={form} id="contact" action="" method="post" onSubmit={sendEmail}>
              <h3>Get a Quote here</h3>
              <h4>Contact us for custom quote</h4>
              <fieldset>
                <input
                  placeholder="Your name"
                  type="text"
                  tabindex="1"
                  name="user_name"
                  required
                  autofocus
                />
              </fieldset>
              <fieldset>
                <input
                  placeholder="Your Email Address"
                  type="email"
                  name="user_email"
                  tabindex="2"
                  required
                />
              </fieldset>
              <fieldset>
                <input
                  placeholder="Your Phone Number (optional)"
                  type="tel"
                  name="user_contact"
                  tabindex="3"
                  required
                />
              </fieldset>
              <fieldset>
                <textarea
                  placeholder="Type your message here...."
                  name="message"
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
                  value="send"
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
      <Footer />
    </div>
  );
};

export default ContactUsForm;
