


// import the image here 


import  '../pages/Styles/Home.css'; 

import { Outlet, NavLink, ScrollRestoration } from "react-router-dom"
import React from 'react'; 

import Footer from '../pages/Navigation/Footer'; 

import CardRender from './Cards/CardRender';
import TabletCards from './Cards/TabletCards';


export default function Home() {
    return (
      <div className="home">
        
        
        <div className="homeImageContainer">
          
          
          
          <p className="homeImageText" >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis excepturi laborum magnam aperiam tenetur, sapiente nemo ducimus quod vero temporibus!
          </p>          
          
          
        </div>
        <div className="homeParagraphContainer">
        
        {/* <p className="homeParagraph" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni similique odio velit ea, dignissimos aspernatur iste beatae cumque non iusto.</p> */}
      
      
        </div>
        
        
        {/* Add in the line container here  */}
        <div className="homeLineContainer">
         
          
          <div className="homeLine">
         
         
            
          </div>
          </div>
        
        
        
        {/* Add in the Cards container here  */}
        <div className="homeCardsPositionalContainer">
        <div className="homeCardsContainer">
        
        <TabletCards/>
        {/* <CardRender/> */}
        
        </div>
        </div>
        
        <Footer/>
      </div>
    );
    
  }
  