import React from 'react'

import Moon from '../assets/Moon.jpg'; 

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

import Footer from '../pages/Navigation/Footer'; 


import CarouselComponent from './CarouselComponent';

function Ministry() {
  return (
    <div className={MinistryCSS.mainContainer}>
      
      
      <header className={MinistryCSS.imageContainer} >
      
      <div className={MinistryCSS.heroImage}>
    
    <div className={MinistryCSS.heroTextContainer}>
    
    <div className={MinistryCSS.heroText}>
      Hero Text 
    
    </div>
    </div>
    
    <img className={MinistryCSS.heroImageScr}  src={Moon}></img>
      
    </div>
      </header>
      
      
      
      {/* Add in the content container here  */}
      <div className={MinistryCSS.pageContent} >
      
      
      {/* Add in the first row of content here  */}
      
      <div className={MinistryCSS.rowZero}>
            
      {/* Add in the image Carousel here with the Text  */}
        {/* <ImageSlider/> */}
      
      <CarouselComponent/>
      
      <div className={MinistryCSS.textContainer}>
      

      <div className={MinistryCSS.sliderHeaderContainer}>
      
      <div className={MinistryCSS.sliderHeader}>
      
      About what we do in Albania 
        
      </div>
        
        
      </div>
      
      <div className={MinistryCSS.sliderParagraphContainer}>
      
      
      <p className={MinistryCSS.sliderText}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere corporis eius commodi blanditiis soluta? Quaerat eveniet facere dignissimos ratione, animi fugit officiis doloremque expedita unde molestias perspiciatis, doloribus quas perferendis placeat. Consequuntur rerum labore beatae? Voluptas vero iure culpa, dolores at nobis accusantium atque placeat deserunt libero doloremque nulla officiis.
      
      </p>
        
        
      </div>
      

      <div className={MinistryCSS.SliderTextButtonContainer}>
      
      <div className={MinistryCSS.sliderTextButton}>
        
        Learn More 
        
      </div>
        
      </div>
      
        
      </div>
      
      </div>
      
      <div className={MinistryCSS.firstRow}>
      
      <div className={MinistryCSS.textContainer}>
      
      <p className={MinistryCSS.text} >
      </p>
      </div>


      <ImageRow/>
      
      </div>
      

      <div className={MinistryCSS.secondRow}>
      <CardsRow/>
      
      </div>
      
      <div className={MinistryCSS.imageTextRow}>
      <ImageTextRow/>
      
      </div>
      
      </div>
      
      <div className={MinistryCSS.footerContainer}>

      {/* <Footer/> */}

      </div>
      
    </div>
  );
  
}

export default Ministry