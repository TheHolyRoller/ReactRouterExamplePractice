import React from 'react'
import IR from '../pages/Styles/ImageTextRow.module.css'; 


function ImageTextRow() {
  return (
    <div className={IR.mainContainer}>
    
    <div className={IR.rowContainer}>
    
    {/* Add in the image container here  */}
    <div className={IR.imageSection}>
    <div className={IR.imageContainer}>
        <div className={IR.image}></div>
        
        
        
    </div>
    </div>


    
    {/* Add in the text section container here  */}
    <div className={IR.textSection}>
    
    {/* Add in the header container here  */}
    <div className={IR.headerContainer}>
    <div className={IR.header} >
    Kids Ministry 
    </div>
        
    </div>
    
    
      
    {/* Add in the text container here  */}
    <div className={IR.textContainer}>
        <p className={IR.text} >
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ducimus expedita repudiandae vel laborum maxime dolore neque placeat repellendus minima. */}
            Our Mission is the holistic development of remote villages, tribal areas of India and developing neighboring countries through well-designed, effectual education supporting Literacy, Healthcare, Economic Development and Empowerment. Ekal is the largest non-government organization engaged in the education of the poorest of the poor in the world.        </p>

        
        
    </div>        
        
{/* Add in the Call to action button container here  */}
    <div className={IR.buttonContainer}>
        <div className={IR.button} >
        
        
        Take Action 
        </div>
        
    </div>
        
    </div>

    </div>
    
    
    {/* ImageTextRow */}
    </div>
  );
}

export default ImageTextRow
