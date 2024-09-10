import React from 'react'
import logo2 from './logo2.png'
import './AboutBackground.css'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Fa stands for Font Awesome icons
import { useNavigate } from 'react-router-dom';
function AboutBackground() {
  const navigate = useNavigate();

  return (
    <div className='AboutBackground'>
        <img src={logo2} alt='logo' className='logo2'/>
        <h3>01</h3>
        <h1>Work</h1>
        <h3>02</h3>
        <h1>Services</h1>
        <h3 id="hiddenElement">03</h3>
        <h1>About Us</h1> 
        <h3>04</h3>
        <h1 onClick={() => navigate('/contact us')}>Contact Us</h1>
        <hr className='line1'/>
        <a href='m'className='email'>info@thewebaddicts.com</a>
        <hr className='line2'/>
        <a href='m'className='phone1'>+961 70 444 309</a>
        <a href='m'className='phone2'>+961 1 485 075</a>
        <hr className='line3'/>
        <a href='https://maps.app.goo.gl/GT3DvnExAcDgbRwj7' className='location'>
           Aramex Building, 1st Floor, Mirna <br/> Chalouhi Highway - Lebanon
        </a>
        <a href="https://www.facebook.https://www.facebook.com/thewebaddictscom" className= 'Facebook' target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} color="black" />
      </a>
     
      <a href="https://www.instagram.https://www.instagram.com/thewebaddicts/" target="_blank" rel="noopener noreferrer" className='Instagram'>
        <FaInstagram size={30} color="black" />
      </a>
      <a href="https://www.linkedin.com/company/thewebaddicts/?originalSubdomain=lb" className='Linkedin'target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} color="black" />
      </a>
        </div>
    
        
  )
}

export default AboutBackground