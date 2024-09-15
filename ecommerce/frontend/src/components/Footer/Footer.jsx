import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Footer = () => {
  return (
    <>
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>ipsa voluptatem repellendus! Quaerat, quo pariatur. Atque minus dolore similique delectus quam, quae rem. Ex a consequatur voluptatibus. Minima, molestiae provident voluptas vitae et quas ullam voluptates, esse iste animi, odio nobis omnis quidem impedit tempora cum! Ipsam.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
            <div className="footer-content-center">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul><li>0132939293</li>
                <li>mdzidane22@gmail.com</li></ul>
               
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 @ Tomato.com - All Right Reserved</p>
    </div>

    
    </>
  )
}

export default Footer