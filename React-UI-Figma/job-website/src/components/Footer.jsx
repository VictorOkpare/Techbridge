import React from 'react'
import { LuInstagram, LuLinkedin, LuFacebook, LuTwitter} from "react-icons/lu";
import "./footer.css" 

import Logo from "../assets/images/logo.png"

const Footer = () => {
  return (
    <footer>
       <hr/>
        <div className="upperdiv">
            <div className=" div1">
            <img src={Logo}/>
            <p>Getajobng provides a full online service for anyone looking for a new job. We're not a recruitment agency, we're a job site.</p>
            </div>

            <div className="div2">
            <h3>Information</h3>
            <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Terms & Conditions</li>
            </ul>
            </div>

            <div className="div2">
            <h3>Job Seekers</h3>
            <ul>
                <li>Create Account</li>
                <li>Job List</li>
                <li>FAQ</li>
            </ul>
            </div>

            <div className="div2">
            <h3>Employers</h3>
            <ul>
                <li>Create Account</li>
                <li>Post a Job</li>
                <li>FAQ</li>
            </ul>
            </div>

            <div className="div3">
            <h3>Social Media:</h3>
            <LuInstagram className='icon'/>
            <LuTwitter className='icon'/>
            <LuFacebook className='icon'/>
            <LuLinkedin className='icon'/>

            </div>
        </div>

        <div className='lowerdiv'>
            <p>© Copyright Get-A-Job RMS 2019, All right reserved</p>
        </div>
        
    </footer>
  )
}

export default Footer