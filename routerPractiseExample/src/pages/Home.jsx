


// import the image here 

import  '../pages/Styles/Home.css'; 

import { Outlet, NavLink, ScrollRestoration } from "react-router-dom"
import React from 'react'; 

// import Footer from '../pages/Navigation/Footer'; 
import Moon from '../assets/Moon.jpg'; 



import CardRender from './Cards/CardRender';
import TabletCards from './Cards/TabletCards';
import CTA from '../pages/CTA'; 





import SignUpFooter from '../Components/SignUpFooter'; 

import Footer from '../pages/Navigation/Footer'; 



import CarouselComponent from './CarouselComponent';


export default function Home() {
    return (
      <div className="home">
        
        
        <div className="heroImage">
    
    <div className="heroTextContainer">
    
    <div className="heroText">
      Hero Text 
    
    </div>
    </div>
    
    
    <img className="heroImageScr"  src={Moon}></img>
      
    </div>
        <div className='extraParagraphContainer'>
          
          <h1  className="extraParagraph" >
            
          Fulfilling the Great Commission through fervent prayer, passionate worship and dedication to helping people fulfill their God-given destinies            
            
          </h1>
          
          
        </div>
        
        <div className="homeLineContainer">
         
          
          <div className="homeLine">
            
          </div>
          </div>
        
        
        <div className="homeCardsContainer">
          <TabletCards/>
        
        </div>
        
        <div className="homeCTAPositionalContainer">
        <div className="homeCTAContainer">
        
        <CTA/>
        
        </div>
        
        </div>
        
        <div className="footerContainer">

        </div>
      </div>
    );
    
  }
  