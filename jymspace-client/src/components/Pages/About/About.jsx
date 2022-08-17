import React from "react";
import "./About.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Aboutimg from "../../../assets/about img.jpg";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="banner">
        <h1 className="tagline">Mangement and interaction made easy</h1>
        <img src={Aboutimg} alt="" className="about-img" />
      </div>
      <div className="about-text">About Us</div>
      <p className='about-para'>
        At Jym Space we believe all Gym problem will be solved in one platform.{" "}
        <br />
        We work together to design, create and produce work that we are proud of<br/>
        for folks that we believe in.<br/>
        We hope you enjoy our products as much as we enjoy offering them to you. <br/>If you have any questions or comments, please don't hesitate to contact us.
      </p>
      <Footer />
    </div>
  );
};

export default About;
