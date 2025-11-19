import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer_container">
                    <div className="footer_column">
                        <p className='heading1'><a style={{
                            color: '#282c3f',
                            fontSize: '12px',
                            textDecoration: 'none'
                        }} href='/'>Online shopping</a></p>
                        <a href="#">Men</a>
                        <a href="#">Women</a>
                        <a href="#">Kids</a>
                        <a href="#">Home & Living</a>
                        <a href="#">Beauty</a>
                        <a href="#">Gift Card</a>
                        <a href="#">Myntra Insider</a>
                    </div>

                    <div className="footer_column">
                        <p className='heading1'>Customer Policies</p>

                        <a href="#">Contact Us</a>
                        <a href="#">FAQ</a>
                        <a href="#">T&C</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Track Orders</a>
                        <a href="#">Shipping</a>
                        <a href="#">Cancellation</a>
                        <a href="#">Returns</a>
                        <a href="#">Privacy policy</a>
                        <a href='#'>Grievance Officer</a>
                    </div>

                    <div className="footer_column">
                        <p className='heading1'>Experience myntra app on Mobile</p>
                        <div className='Image_container'>
                            <a href="#"><img className='image1' src='/images/Google_play.png' /></a>
                            <a href="#"><img className='image2' src='/images/App_store.png' /></a>
                        </div>
                        <div className='social_heading'>
                            Keep in Touch</div>
                        <div className='social_container'>
                            <a href=''><IoLogoFacebook /></a>
                            <a href=''><FaTwitter /></a>
                            <a href=''><TiSocialYoutube /></a>
                            <a href=''><TiSocialInstagram /></a>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    © 2023 www.myntra.com. All rights reserved.
                </div>
            </footer>
        </>
    )
}
