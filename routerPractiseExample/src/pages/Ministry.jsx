import React from 'react'
import Footer from './Navigation/Footer';

// Import the Style sheet here 
import MinistryCSS from '../pages/Styles/Ministry.module.css'; 

import ImageRow from './ImageRow'; 

import ImagesRow from './ImageRow';
import CardsRow from './CardsRow';
import ImageTextRow from './ImageTextRow';
import { MdInsights } from 'react-icons/md';
import TextImage from './TextImage';
// import ImageSlider from '../Components/ImageSlider';
import ImageSlider from '../Components/ImageSlider'; 



function Ministry() {
  return (
    <div className={MinistryCSS.mainContainer}>
      {/* Ministry */}
      
      {/* Add in the hero section here  */}
      <header className={MinistryCSS.imageContainer} >
      
      <div className={MinistryCSS.heroImage}></div>
      
      <div className={MinistryCSS.imageTextContainer}>
      
      {/* Add in the image header here  */}
      <div className={MinistryCSS.imageHeaderContainer}>
      
      <h1 className={MinistryCSS.imageHeader}>
      
      
      Image Header 
        
      </h1>
      
      
      </div>
      
      
      <p className={MinistryCSS.imageText} >
      
      {/* Lorem ipsum dolor sit amet consectetur adipisicing.  */}
      
      </p>
      
      <div className={MinistryCSS.buttonContainer}>
        
        <button className={MinistryCSS.callToActionButton} >
          
          
        </button>
        
        <button className={MinistryCSS.learnMoreButton} ></button>
        
        
      </div>
      
      
      </div>
      
      </header>
      
      
      {/* Add in the content container here  */}
      <div className={MinistryCSS.pageContent} >
      
      
      {/* Add in the first row of content here  */}
      
      <div className={MinistryCSS.rowZero}>
            
      {/* Add in the image Carousel here with the Text  */}
        <ImageSlider/>
      
      </div>
      
      <div className={MinistryCSS.firstRow}>
      
      {/* Add in the page paragraph here  */}
      <div className={MinistryCSS.textContainer}>
      
      <p className={MinistryCSS.text} >
      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta optio reprehenderit perspiciatis. Voluptate similique qui eligendi pariatur neque maiores. Ullam. */}
      </p>
      </div>
      
      {/* Add in the Image Row component here  */}
      <ImageRow/>
      
      </div>
      
      
      {/* Add in the second Row of Content here  */}
      <div className={MinistryCSS.secondRow}>
      
      {/* Add in the Key Ministry Row here  */}
      {/* <ImagesRow/> */}
      <CardsRow/>
      
      </div>
      
      <div className={MinistryCSS.thirdRow}>
        
        {/* Add in the video Text Row here  */}
        
        
        
      </div>
      
      
      <div className={MinistryCSS.fourthRow}>
      
      {/* Add in the Image Text Row here for the mission statement  */}
      
      <ImageTextRow/>
      
      
      
      </div>
      
      
      <div className={MinistryCSS.fifthRow}>
      
      {/* Add in the Text Image here  */}
      
      <TextImage/>
      
      
      
      
      </div>
      
      
      
      {/* Add in the sixth Row here  */}
      <div className={MinistryCSS.sixthRow}>
      
      {/* Add in the final call to action here  */}
      
      

      
      
      </div>
      
      
      </div>
      
      {/* Add in the footer here  */}
      
      <div className={MinistryCSS.footerContainer}>

      <Footer/>
        
        
        
        
      </div>
      
    </div>
  );
  
}

export default Ministry