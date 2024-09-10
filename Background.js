import React from 'react'
import './Background.css'
import background from './background.webp'
import logo from './logo.png'
function Background() {
  return (
    <div className='Background'>
      <img src={logo} alt='logo' className='logo'/>
      
       <img src={background} alt='background' className='background-image'/>
       
       <div className='background'>
        <div>
        <p className='we-are'>WE ARE</p>
       </div>
       
         <p className='the-web-addict'>The Web Addicts</p>
         </div>
         <div>
         <p className='parag'>We are a team of creative designers and developers building high 
          quality websites, mobile apps & e-commerce</p>
        <button className='get-to-know-us-button'>Get to know us</button>
        </div>

    </div>
  )
}

export default Background