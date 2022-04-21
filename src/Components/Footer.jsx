import React from 'react'
import '../Styles/Footer.css'

function Footer() {
  return (
    <footer className='footer_container'>
        <div className='contact_conatiner' >
            <div className='about_us' >
                  <h3 >  ABOUT US </h3>
                  <p>paragraph about us</p>
            </div>
            <div className='contact_us'>
                    <h3>Contact US</h3>
                    <p>paragraph Contact us</p>
            </div>
            <div className='around_the_web'>
                    <h3>Around the web</h3>
                    <div className='socical_media_icons'>
                        <i className="fa-brands fa-facebook-square fa-2x" style={{color: "aquamarine" }} ></i>
                        <i className="fa-brands fa-instagram-square fa-2x" style={{color: "red" }} ></i>
                        <i className="fa-brands fa-linkedin fa-2x"></i>
                    </div>
            </div>
        </div>
        <div className='owner_container'>
            <h3>By Hannafi Mohamed Aziz</h3>
            <h4>© All Rights Reserved 2022</h4>
        </div>
        <div className='bottom_footer'></div>
    </footer>
  ) 
}

export default Footer