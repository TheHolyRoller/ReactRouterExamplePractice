import React from 'react';
import { Link } from 'react-router-dom'; 
// Add the extra needed imports here 
import { Outlet, NavLink, ScrollRestoration } from "react-router-dom"


// Import the React hooks here 
import CardsCSS from '../Styles/Cards.module.css';

// import LearnMore from '../Components/LearnMore'; 

function Cards() {
  return (
    <div className={CardsCSS.container}>
    {/* Add in the card container here  */}
    <section className={CardsCSS.card}> 
    <div className={CardsCSS.cardContainer}>
    {/* Add in the Google maps Iframe here  */}
    
    {/* Add in the container for the Google maps directions here  */}
    {/* <div className={CardsCSS.googleDirectionsContainer}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42045.57883852398!2d2.084175362907312!3d48.803866646106975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67db475f420bd%3A0x869e00ad0d844aba!2s78000%20Versailles%2C%20France!5e0!3m2!1sen!2s!4v1677167438769!5m2!1sen!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div className={CardsCSS.youtubeVideoContainer}>
    <iframe src="https://www.youtube.com/embed/0djHLRdFQDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div> */}
    
    
    {/* Add in the Card headline here  */}
    <div className={CardsCSS.title}> 
   <h1 className={CardsCSS.cardHeader}>
    Meet the pastor 
    </h1>
    </div>
    
    <div className={CardsCSS.mainImageContainer}>
    
    <div className={CardsCSS.imageContainer}>
      {/* Add in the image here for the Card  */}
      <img className={CardsCSS.imageTag} src="../assets/Kitten.jpg" />
  
  
      </div>
    </div>
      {/* Add in the text paragraph here  */}
       <p className={CardsCSS.paragraph}>
       {/* Add in the text here  */}
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quos provident, eos fugit velit tenetur assumenda culpa, cum atque qui voluptas possimus sit officiis animi doloremque magni hic vel repellendus.
      
       </p>
       
       {/* Add in the button here  */}
       <div className={CardsCSS.button}>
      
      
       </div>
         
    </div>
      
    </section>
    {/* Add in the second card here  */}
    {/* SECOND CARD  */}
    <section className={CardsCSS.card}> 
    <div className={CardsCSS.cardContainer}>
    
    
    <div className={CardsCSS.title}> 
   <h1 className={CardsCSS.cardHeader}>
    Meet the pastor 
    </h1>
    </div>
    
    <div className={CardsCSS.mainImageContainer}>
    
    <div className={CardsCSS.imageContainer}>
      
      
      <img className={CardsCSS.imageTag} src="../assets/Kitten.jpg" />
  
  
      </div>  
    </div>
      {/* Add in the text paragraph here  */}
      
      {/* Add in the paragraph container here  */}
      
       <p className={CardsCSS.paragraph}>
       {/* Add in the text here  */}
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quos provident, eos fugit velit tenetur assumenda culpa, cum atque qui voluptas possimus sit officiis animi doloremque magni hic vel repellendus.
      
      
       </p>
       
       {/* Add in the button here  */}
       <div className={CardsCSS.button}>
    
       </div>
         
    </div>
      
    </section>
  
  
    
    {/* THIRD CARD HERE  */}
    <section className={CardsCSS.card}> 
    <div className={CardsCSS.cardContainer}>
    
    
    {/* Add in the Card headline here  */}
    <div className={CardsCSS.title}> 
   <h1 className={CardsCSS.cardHeader}>
    Meet the pastor 
    </h1>
    </div>
    
    <div className={CardsCSS.mainImageContainer}>
    
    <div className={CardsCSS.imageContainer}>
      {/* Add in the image here for the Card  */}
      <img className={CardsCSS.imageTag} src="../assets/Kitten.jpg" />
  
      </div>
    </div>
      {/* Add in the text paragraph here  */}
       <p className={CardsCSS.paragraph}>
       {/* Add in the text here  */}
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quos provident, eos fugit velit tenetur assumenda culpa, cum atque qui voluptas possimus sit officiis animi doloremque magni hic vel repellendus.
       </p>
       
       {/* Add in the button here  */}
       <div className={CardsCSS.button}>
       {/* <Link to='learnmore' element={<LearnMore/>}>
       Learn more 
       </Link> */}
       </div>
         
    </div>
      
    </section>
 


    </div>
  )
}

export default Cards
