import React from 'react'
import './ContactBackground.css'
import logo2 from './logo2.png'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import TextMover from './TextMover';
function ContactBackground() {
  return (
    <div className='ContactBackground<'>
    <img src={logo2} alt='logo' className='logo2'/>
    <h5 className='contact-us'>CONTACT US</h5>
    <h1 className='description'>Hello, Welcome to twa!<br/>
    a project or a job application?</h1>
    <hr className='firstline'/>
        <a href='m'className='mail'>info@thewebaddicts.com</a>
        <hr className='secondline'/>
        <a href='m'className='firstphone'>+961 70 444 309</a>
        <a href='m'className='secondphone'>+961 1 485 075</a>
        <hr className='thirdline'/>
        <a href='https://maps.app.goo.gl/GT3DvnExAcDgbRwj7' className='Location'>
           Aramex Building, 1st Floor, Mirna <br/> Chalouhi Highway - Lebanon
        </a>
        <a href="https://www.facebook.https://www.facebook.com/thewebaddictscom" className= 'facebook' target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} color="black" />
      </a>
     
      <a href="https://www.instagram.https://www.instagram.com/thewebaddicts/" target="_blank" rel="noopener noreferrer" className='Instagram'>
        <FaInstagram size={30} color="black" />
      </a>
      <a href="https://www.linkedin.com/company/thewebaddicts/?originalSubdomain=lb" className='Linkedin'target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} color="black" />
      </a>
      <TextMover/>
    </div>
  )
}

export default ContactBackground