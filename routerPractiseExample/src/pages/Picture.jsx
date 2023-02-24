import React from 'react';
// Import React hooks here 

// Import the Style sheet module here 
import PictureCSS from '../Styles/Picture.module.css'; 




function Picture() {
  return (
    <div className={PictureCSS.container}>
  
    <div className={PictureCSS.imageContainer}>
    
    
    <img alt="The picture didn't load ouch!" src='https://images.pexels.com/photos/13949284/pexels-photo-13949284.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>
    
    
    <div className={PictureCSS.imageTextContainer}>
      
      <p className={PictureCSS.imageParagraph}>
      Here is some image Text 
      </p>
      <p className={PictureCSS.imageVerse}>  
      John 3:16

      </p>
      
    </div>

    
    </div>
    </div>
  );
}

export default Picture
