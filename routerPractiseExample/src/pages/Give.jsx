import React from 'react'

import Moon from '../assets/Moon.jpg'; 

import SignUpFooter from '../Components/SignUpFooter';

// Import the stylesheet here 
import G from '../pages/Styles/Give.module.css'; 
import Footer from '../pages/Navigation/Footer'; 
// import Payment from '../Components/Payment'; 
import Payment from '../Components/Payment';

function Give() {
  return (
    <div className={G.mainContainer}>
    
    <div className={G.contentContainer}>
      
      {/* Add in the Hero Section container here  */}
      
      <div className={G.heroImage}>
    
    <div className={G.heroTextContainer}>
    
    <div className={G.heroText}>
      Hero Text 
    
    </div>
    </div>
    
    <img className={G.heroImageScr}  src={Moon}></img>
      
    </div>
      
      
      {/* Add in the paragraph container here  */}
      
      <div className={G.paragraphContainer}>

        {/* Add in the paragraph here  */}
        <p className={G.giveParagraph} >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum, omnis nulla sequi repellendus eum earum tempora quas, eaque est officiis quos magnam voluptas aliquam ipsum fugit temporibus expedita eligendi?
          
        </p>
        
      </div>
      
      {/* Add in the give button container here  */}
      <section className={G.giveSectionContainer} >
      
      {/* Add in the Give Component here  */}
      <div className={G.giveSectionHolder}>
        <Payment/>
      </div>
        
      </section>
      
      
      {/* Add in the footer container here  */}
      <div className={G.footerContainer}>
        
        {/* <Footer/> */}
        
      </div>
      
      
    </div>
    

    </div>
  ); 
}

export default Give
