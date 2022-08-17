import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import checkmark from "../../assets/tick-mark.png";

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="programs-header">
        <span className="stroke-text header-text">Start Your</span>
        <span className="stroke-text-green header-text"> Journey </span>
        <span className="stroke-text header-text">With Us </span>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
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
  );
};

export default Plans;
