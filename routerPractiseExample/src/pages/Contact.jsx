 
 
 import React from 'react'
 
//  Import the stylesheet here 
import CON from '../pages/Styles/Contact.module.css'; 
import Footer from '../pages/Navigation/Footer'; 

import Form from '../pages/Form'; 

import Moon from '../assets/Moon.jpg'; 

 
 
 
 function Contact() {
   return (
     <div className={CON.mainContainer} >
     
     
     <div className={CON.contentContainer}>

    {/* Add in the Hero container here  */}
    <div className={CON.heroContainer}>
    <div className={CON.heroImage}>
    
    <div className={CON.heroTextContainer}>
    
    <div className={CON.heroText}>
      Stay in touch 
          
    </div>
    </div>
    
    <img className={CON.heroImageScr}  src={Moon}></img>
      
    </div>
    </div>

    <div className={CON.contactFormContainer}>

        <Form/>
    </div>

     </div>
     
       {/* Contact  */}
     </div>
   );
 }
 
 export default Contact
 
 