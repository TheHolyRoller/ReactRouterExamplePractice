import React from 'react'
// Import the stylesheet here 
// import '../Styles/ImageRow.css'; 
import ImageRowCSS from '../pages/Styles/ImageRow.module.css'; 


function ImageRow() {
  return (
    <div className={ImageRowCSS.positionalContainer}>
        <div className={ImageRowCSS.mainContainer}>
      {/* Image Row  */}
        <div className={ImageRowCSS.imageOne}>
        
        
        <div className={ImageRowCSS.paragraphContainer}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, earum?</p>
        </div>
        
        </div>
        
        {/* Add in the First text section here  */}
        <div className={ImageRowCSS.imageTwo}>
        <div className={ImageRowCSS.paragraphContainer}>
        <p className="ImageRowParagraph" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, earum?</p>
        </div>
          
          
          
          
        </div>
        {/* Add in the second text section here  */}
        </div>
        
        
        
    </div>
  );
}

export default ImageRow
