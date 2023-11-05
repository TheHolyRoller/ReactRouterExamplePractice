import React from 'react'

import Contact from './Contact'

// Import the stylesheet here 
import T from '../pages/Styles/Testimonies.module.css'; 
import Footer from './Navigation/Footer';


import MinistryMaterial from './MinistryMaterial';



import TabletCards from '../pages/Cards/TabletCards'; 

import APICall from '../Components/APICall'; 


import Image from '../assets/SeaHouses.jpg';

import Moon from '../assets/Moon.jpg'; 
import SMoon from '../assets/SMoon.jpg'; 

import ImageTextRow from '../pages/ImageTextRow'; 


function Testimonies() {
  return (
    <div className={T.mainContainer} >
    
    <div className={T.contentContainer}>
    
    <div className={T.heroContainer}>
    
    
    <div className={T.heroImage}>
    
    <div className={T.heroTextContainer}>
    
    <div className={T.heroText}>
      Hero Text 
      
      
    </div>
    </div>
    
    <img className={T.heroImageScr}  src={Moon}>
      
      
    </img>
      
    </div>
      
    </div>
    
    {/* Add in the API Component container here  */}
    <div className={T.apiContainer}>
      
    <div className={T.apiPositionalContainer}>
    <APICall/>
    </div>
      
      
    </div>
      
      <div className={T.MinistryMaterialContainer}>
      
      <div className={T.currentProjectsContainer}>
      
      {/* Add in the Cards here  */}
      <TabletCards/>

      </div>
      
      
      

      <div className={T.prayerRequestsContainer}>
    
    {/* <ImageTextRow/> */}
        
      </div>
      
      
      </div>
      
      
      <div className={T.footerContainer}>
    
      </div>
      
    </div>
    
    
    </div>
  );
  
}

export default Testimonies
