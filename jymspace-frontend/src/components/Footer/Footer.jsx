import React from "react";
import "./Footer.css";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import github from "../../assets/github.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className="footer">
      <hr />

      <div className="social-links">
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <img src={github} alt="" />
      </div>

      <div className="list-footer">
        <Link className="links-footer" to="/">Home</Link>
        <Link className="links-footer" to="/AboutUs">About us</Link>
        <Link className="links-footer" to="/ContactUs">Contact Us</Link>
      </div>
      <p className="copyright">JYM SPACE @ 2022</p>
    </section>
  );
};

export default Footer;
