import React from "react";
import hero_Image from "../../assets/hero.png"
import "./Hero.css";
import Navbar from '../../components/Navbar/Navbar'
import { Link} from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
      <Navbar/>
        {/* The JYM SPACE */}
        <div className="the-jym-space">
          <div></div>
          <span>Fitness is the ultimate fashion</span>
        </div>

        {/*HERO HEADING */}
        <div className="hero-text">
          <div>
            <span> JYM </span>
          </div>
          <div>
            <span className="stroke-text">SPACE</span>
          </div>
          <div>
            <span>
              Jym Space is a new-age Gym Management Software <br></br>
              that caters to management and clients with a blend of <br></br>
              interactive community building and insightful dashboards.
            </span>
          </div>
          <div>
            <span>We welcome you to the future of gyms!</span>
            {/*HERO BUTTON*/}
            <div className="hero-button">
              <button className="btn">REGISTER NOW!</button>
            </div>
          </div>
        </div>
      </div>

      <div className="right-h">
      <Link to='/Signin' className="btn-sign">SIGN IN</Link>

      </div>
      <img src={hero_Image} alt="" className='hero-image' />
      
      
    </div>
  );
};

export default Hero;
