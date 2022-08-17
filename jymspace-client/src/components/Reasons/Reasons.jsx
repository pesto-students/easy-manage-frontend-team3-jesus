import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import checkmark from '../../assets/tick-mark.png'
const Reasons = () => {
  return (
    <div className="reasons" id='reasons'>
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r">
            <div>
                <span className='stroke-text right-reason'>Why </span>
                <span className='stroke-text-green right-reason'>Choose Us ?</span>
            </div>
            <div className='details-r'>
            <div><img src={checkmark} alt=""></img><span>Manage Employees and Users</span></div>
            <div><img src={checkmark} alt="" /><span>Affordable Price</span></div>
            <div><img src={checkmark} alt="" /><span>Integrated Billing</span></div>
            <div><img src={checkmark} alt="" /><span>24/7 Support</span></div>
            </div>
        </div>
    </div>
  )
}

export default Reasons