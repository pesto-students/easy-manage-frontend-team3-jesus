import React from 'react'
import hero_Image from '../../assets/hero.png'
import './Hero.css'
import { Navbar } from '../../components'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='left-h'>
        <Navbar />
        {/*HERO HEADING */}
        <div className='hero-text'>
          <div>
            <span> JYM </span>
          </div>
          <div>
            <span className='stroke-text'>SPACE</span>
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
            <div className='hero-button'>
              <Link to='/ContactUs' className='btn'>
                GET A QUOTE &#8594;
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='right-h'></div>
      <img src={hero_Image} alt='' className='hero-image' />
    </div>
  )
}

export default Hero
