import React from 'react'

import IR from '../pages/Styles/CardsRow.module.css'; 


function CardsRow() {
  return (
    <div className={IR.mainContainer}>
    
    <div className={IR.trackContainer}>
    
    
    {/* Add in the containers for each row here  */}
    
    
    <div id={IR.firstCardID} className={IR.rowContainer}>
                
    {/* Add in the image container here  */}
    <div className={IR.imageContainer}>
    
      {/* Add in the Image here  */}
    <div className={IR.image}></div>
        
        
    </div>
    
    {/* Add in the text container here  */}
    <div className={IR.textContainer}>
        
    {/* Add in the header container here  */}
    <div className={IR.textHeaderContainer}>
    
    
    
    <div className={IR.textHeader}>
      Health 
      
    </div>
      
      
    </div>
    
    {/* Add in the text here  */}
    <p className={IR.text}>

    Digital Literacy and Basic Education form the pillars of Ekal’s strategy in Rural India

    </p>
    </div>
    
    {/* Add in the button container here  */}
    <div className={IR.buttonContainer}>
        
    <div className={IR.button}>
    Button 
    </div>
    
    
    </div>
    
    </div>
    
    
    {/* --------------SECOND ROW ----------------*/}
    
    
    
    
    <div id={IR.previousCard} className={IR.rowContainer}>
                
                {/* Add in the image container here  */}
                <div className={IR.imageContainer}>
                {/* <div className={IR.headerContainer}>
                
                <h3 className={IR.header} >
                Cool Header 
                    
                </h3>
                
                </div> */}
                  {/* Add in the Image here  */}
                <div className={IR.image}></div>
                    
                </div>
                
                {/* Add in the text container here  */}
                <div className={IR.textContainer}>
                <div className={IR.textHeaderContainer}>
    
                <div className={IR.textHeader}>
                  Health 
                  
                </div>
                  
                  
                </div>
                {/* Add in the text here  */}
                <p className={IR.text}>
            
                Digital Literacy and Basic Education form the pillars of Ekal’s strategy in Rural India
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut provident a totam praesentium neque molestiae eum distinctio tempore aperiam quia asperiores repudiandae unde ad et architecto dolores nobis laboriosam cupiditate, blanditiis inventore at error dolorum earum ipsam? Dicta dolore ex voluptates, esse magnam impedit ea vero quod dolor quis accusantium. */}
                </p>
                </div>
                
                {/* Add in the button container here  */}
                <div className={IR.buttonContainer}>
                    
                <div className={IR.button}>
                Button 
                </div>
                
                
                </div>
                
                </div>
                
                
                
                
                
                
{/* ----------THIRD ROW --------------- */}
<div id={IR.lastCardID} className={IR.rowContainer}>
                
                {/* Add in the image container here  */}
                <div className={IR.imageContainer}>
                {/* <div className={IR.headerContainer}>
                
                
                
                <h3 className={IR.header} >
                Cool Header 
                    
                </h3>
                
                </div> */}
                  {/* Add in the Image here  */}
                <div className={IR.image}></div>
                    
                </div>
                
                {/* Add in the text container here  */}
                <div className={IR.textContainer}>
                
                {/* Add in the header container here  */}
                <div className={IR.textHeaderContainer}>
    
                <div className={IR.textHeader}>
                  Health 
                  
                </div>
                  
                  
                  
                </div>
                
                    
                {/* Add in the text here  */}
                <p className={IR.text}>
            
                Digital Literacy and Basic Education form the pillars of Ekal’s strategy in Rural India
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut provident a totam praesentium neque molestiae eum distinctio tempore aperiam quia asperiores repudiandae unde ad et architecto dolores nobis laboriosam cupiditate, blanditiis inventore at error dolorum earum ipsam? Dicta dolore ex voluptates, esse magnam impedit ea vero quod dolor quis accusantium. */}
                </p>
                </div>
                
                {/* Add in the button container here  */}
                <div className={IR.buttonContainer}>
                    
                <div className={IR.button}>
                Button 
                </div>
                
                
                </div>
                
                </div>
    
    
    </div>
      
    </div>
  );
}

export default CardsRow
