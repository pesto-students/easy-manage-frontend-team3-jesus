import React from "react";
import "./Features.css";
import { featuresData } from "../../data/featuresData";

const Features = () => {
  return (
    <div className="features" id="features">
      <div className="features-header">
        <span className="stroke-text-green">What</span>
        <span className="stroke-text">We</span>
        <span className="stroke-text-green">Provide ?</span>
      </div>
      <div className="features-categories">
        {featuresData.map((featuresData) => (
          <div className="category">
             <span className="image">{featuresData.image}</span>
            <span className="heading">{featuresData.heading}</span>
            <span className="details">{featuresData.details}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
