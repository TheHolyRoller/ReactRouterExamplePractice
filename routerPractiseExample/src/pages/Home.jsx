
// Add in the imports here 

// import Picture from "./Picture";
import HomeCSS from '../Styles/Home.module.css'; 
import { Outlet, NavLink, ScrollRestoration } from "react-router-dom"
import React from 'react'; 
import Cards from './Cards';
import Footer from './Footer';



// For some reason image imports are not working 
// import Sunset from './Sunset';
// import Kitten from '../Images/Kitten'; 



export default function Home() {
    return (
      <div className="home">
        <h2>Welcome</h2>
        
        
        <div className={HomeCSS.imageContainer}>
        <img className={HomeCSS.HomeImage} src='https://images.pexels.com/photos/4360488/pexels-photo-4360488.jpeg?auto=compress&cs=tinysrgb&w=600'/>
        </div>
        
        
        <div className={HomeCSS.paragraphContainer}>
        <p className={HomeCSS.Homeparagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor assumenda, itaque nesciunt alias voluptatum nobis blanditiis eos officiis aperiam earum eum vel quas odio optio, distinctio ab sunt unde incidunt ipsum omnis amet magnam accusantium aut! Excepturi, cupiditate iusto!</p>
        <p className={HomeCSS.Homeparagraph}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus veniam ducimus eligendi nihil, cumque ab eveniet modi architecto quidem, non odit saepe facere voluptas esse mollitia illo fuga exercitationem id dicta iusto eaque numquam quaerat ad! Fugit velit beatae laudantium.</p>
        <p className={HomeCSS.Homeparagraph}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus veniam ducimus eligendi nihil, cumque ab eveniet modi architecto quidem, non odit saepe facere voluptas esse mollitia illo fuga exercitationem id dicta iusto eaque numquam quaerat ad! Fugit velit beatae laudantium.</p>
        </div>
      
      
        {/* <Cards className={HomeCSS.cards} /> */}
      </div>
    );
    
  }
  