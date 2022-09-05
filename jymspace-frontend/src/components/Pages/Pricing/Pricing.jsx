import React from 'react'
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import { plansData } from '../../../Data/plansData';
import checkmark from "../../../assets/tick-mark.png";

import './Pricing.css'

const Pricing = () => {
  return (
    <>
    <Navbar/>
    <div className="pricing-container" >
      <div className="pricing-programs-header">
        <span className="stroke-text header-text">Start Your</span>
        <span className="stroke-text-green header-text"> Journey </span>
        <span className="stroke-text header-text">With Us </span>
      </div>
      <div className="pricing">
        {plansData.map((plan, i) => (
          <div className="pricing-plan" key={i}>
            <span>{plan.icon}</span>
            <span>{plan.name}</span>
            <span>${plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={checkmark} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span> See more benefits -> </span>
            </div>
            <button className="btn">JOIN NOW</button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    
    </>
  )
}

export default Pricing;