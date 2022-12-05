import React from 'react'
import './Article.css'



function Article() {
  return ( 
    <div className='row'>
      <div className='left-box'>
      <div ><img src='./image-hero-mobile.png' className='hero-mobile' alt='hero'/></div>
        <div id="head1">Make <br />remote work</div>
        <p id="para">Get your team in sync, no matter your location.<br />
          Stremline processes,create team rituals,and <br />
          watch productivity soar</p>
        <button id="learn-btn">Learn more</button>
        
        <div class="clients">
          
    <img src="./client-audiophile.svg" alt="client"/>
    <img src="./client-databiz.svg"  alt="client"/>
    <img src="./client-maker.svg"  alt="client"/>
    <img src="./client-meet.svg" alt="client"/>
   
</div>
      </div> 
    <div className='right-box'> <img src="./image-hero-desktop.png" className="hero-main" alt="Hero" /></div>
 
    </div >  



  )
}

export default Article