import React from 'react'


// Import the font awesome icons here 
import '@fortawesome/fontawesome-svg-core'; 
import '@fortawesome/free-regular-svg-icons'; 
import '@fortawesome/react-fontawesome'; 
import '@fortawesome/fontawesome-svg-core'
// import FontAwesomeIcon from '@fortawesome/fontawesome-svg-core'; 

// import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons'; 
import { faCoffee, faPause } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { FaLaptopCode } from 'react-icons/fa';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

// import { faLaptop } from 'react-icons/fa';
// import { FaLaptop } from '@fortawesome/fontawesome-svg-core'; 

import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import C from '../pages/Styles/CTA.module.css'; 

function CTA() {
  return (
    <div className={C.mainContainer}>
    
    <div className={C.contentContainer}>
      
      {/* Add in the headliner container here  */}
      
      <div className={C.headlineContainer}>
        <h2 className={C.CTAHealine}>
        Join Online 
        </h2>
        
        
        
      </div>
      
      {/* Add in the Grid container here  */}
        
      <article className={C.gridCTAContainer} > 
        
      {/* Add in the first Section container here  */}
      <section className={C.columnContainer}>
        
        {/* Add in the icon container here  */}
        <div  id={C.clockIconContainerID} className={C.iconContainer}>
          
          {/* Add in the icon here  */}
          <FontAwesomeIcon icon={faClock} />
        </div>
        
        {/* Add in the header container here  */}
        <div className={C.headerContainer}>
          
          <h3 className={C.columnHeader}>
          
          Tuesday Services 
          
          </h3>
          
          
        </div>
        
        
        {/* Add in the details container here  */}
        <div className={C.detailsContainer}>
          
          <div className={C.details}>
            AC Worship 

          </div>
          
          
          <span className={C.details} > At 7:00 am </span>
          
          
        </div>
        
        {/* Add in the service details container here  */}
        <div className={C.serviceDetailsContainer}>
         
         
         {/* Add in the header container here  */}
         <div className={C.serviceHeaderContainer}>

         <h3 className={C.serviceHeader} >
          
          Wednesday 
          
         </h3>
         </div>
         
         {/* Add in the Service Details here  */}
         <div className={C.locationDetailsContainer}>

          <span className={C.locationDetails} >
            
            Bible Study 

          </span>
          <div className={C.locationDetails} >
      
          Evening Prayer 
            
          </div>
          
          
         </div>
         
          
          
        </div>
        
        
      </section>
      
      
      
      {/* Add in the second column here  */}
      
      <section className={C.columnContainer}>
      
      {/* Add in the icon container here  */}
      <div id={C.clockIconID}  className={C.iconContainer}>
        
        {/* Add in the icon here  */}
        <span className={C.laptopIcon} >
        <FontAwesomeIcon icon={faLaptop} />
        
        
        </span>
        
      </div>
      
      
      {/* Add in the header container here  */}
      <div className={C.columnHeaderContainer}>
        
        {/* Add in the header here  */}
        <h3 className={C.columnHeader} >
        Watch Online 
          
        </h3>
        
      </div>
      
      {/* Add in the details section container here  */}
      
      <div className={C.serviceDetailsContainer}>

      
      <span id={C.serviceDetailsID} className={C.serviceDetails} >
    
      Sunday: 10:00am
        
      </span>
      <span className={C.serviceDetails} >
      Wednesday: 7:00pm
      </span>

      {/* Add in the button container here  */}
      <div className={C.serviceButtonContainer}>
        
        {/* Add in the button here  */}
        <div className={C.serviceButton}>
          Watch Live 
        </div>
        
      </div>
      
        
        
      </div>
      
     
        
      </section>
      
      {/* Add in the third Column here  */}
        
      <section className={C.columnContainer}>
        
        {/* Add in the icon container here  */}
        
        <div className={C.iconContainer}>
        

        <span className={C.giveIcon} >
        <FontAwesomeIcon icon={faDollarSign} />
        
        
        </span>
        
        </div>
        
        {/* Add in the header container here  */}
        <div className={C.headerContainer}>
          
          <h3 className={C.columnHeader}>
            Give 
            
          </h3>
          
          
        </div>
        
        {/* Add in the details container here  */}
        <div className={C.giveDetailsContainer}>
          <p className={C.giveParagraph}>
          Lives are being changed every week because of your generous giving. Be a part of what AC is doing.
            
          </p>
          
          {/* Add in the button container here  */}
          <div className={C.giveButtonContainer}>
            
            
            <div className={C.giveButton}>
              Give 
              
            </div>
            
          </div>
          
          
          
        </div>
        
        
      </section>  
        
        
      </article>
      
    </div>
    </div>
  );
}

export default CTA
