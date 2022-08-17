import React from 'react'
import "./Footer.css"
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import github from '../../assets/github.png'
const Footer = () => {
  return (
    <section className='footer'>
        <hr/>
       
         <div className="social-links">   
        <img src={instagram}alt="" />
        <img src={facebook}alt="" />
        <img src={twitter}alt="" />
        <img src={github}alt="" />
        </div>
        
        <div className="list">
            <li>Home</li>
            <li>Pricing</li>
            <li>About us</li>
            <li>Contact Us</li>
            <li>Free Trial</li>
        </div>
        <p className="copyright">JYM SPACE @ 2022</p>
        </section>

  )
}

export default Footer   