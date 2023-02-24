import React from 'react';

import FooterCSS from '../Styles/Footer.module.css'; 
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Outlet, NavLink, ScrollRestoration } from "react-router-dom"



// import FaceBook from  '../assets/facebook'; 
import {FaInstagram, FaTwitter} from "react-icons/fa";

import { MdFacebook } from 'react-icons/md'; 
// import About from '../Components/About'; 
// import Ministry from '../Components/Ministry'; 
// import Volunteering from './Volunteering';
// import KidsMinistry from './KidsMinistry';
import Ministry from './Ministry';
import KidsMinistry from './KidsMinistry';
import Volunteering from './Volunteering';
import About from './About';

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
} from "react-share";
// import Volunteering from './Volunteering';









function Footer() {
  
  // Add in the UseState Hook here 
  const [hover, setHover] = useState(false);
  
  const handleMouseEnter = () => {
    
    setHover(true); 

  }
  
  const handleMouseLeave = () => {
  
    setHover(false); 

  }
  
  
  
  
  return (
  <footer className={FooterCSS.footer}> 
  {/* Put the contents container here */}
  <div className={FooterCSS.contentContainer}>
    {/* Put the first section here  */}
    
    {/* Section One  */}
    <article className={FooterCSS.section}>
    {/* Put the H1 Container here */}
    <div className={FooterCSS.headlineContainer}>
    {/* Put the H1 Tag here  */}
    <h1>Get Connected: </h1>
    
    </div>
    
    <section className={FooterCSS.listContainer}>
    <ul className={FooterCSS.list}>
    <li id={FooterCSS.contactListItem} className={FooterCSS.listItem}>
    <a id={FooterCSS.anchorTag} href="tel:242341209430" alt="alt"> 
    {/* Put the button text here  */}
    <strong id={FooterCSS.strongTag}> T:</strong>
    242341209430
    
    
    </a>
    </li>
    <li id={FooterCSS.contactListItem}> 
    <a id={FooterCSS.anchorTag} href="mailto:test@mail.com"> 
    admin@email.com 
    </a>
    
    </li>
    
    <li id={FooterCSS.contactListItem} className={FooterCSS.listItem}>
    <a id={FooterCSS.anchorTag} href="mailto:test@mail.com"> 
    contact@email.com
    
    </a>
    </li>
    
    </ul>
    </section>    
    </article>
    
  
    
    <article className={FooterCSS.section}> 

      
      <div className={FooterCSS.headlineContainer}> 
      <h1 className={FooterCSS.headline}>
      Location: 
      </h1>
      </div>
      
      <section className={FooterCSS.listContainer}>
      
      {/* Give these list items their own IDS  */}
      <ul className={FooterCSS.list}> 
      {/* Put the list items here  */}
      <li id={FooterCSS.contactListItem} className={FooterCSS.listItem}> 
      
      <a id={FooterCSS.anchorTag} href='#' alt="atl"> 
      31 Street 
      
      </a>
      </li>
      <li id={FooterCSS.contactListItem} className={FooterCSS.listItem}> 
      <a id={FooterCSS.anchorTag} href='#'>
        California Avenue
      </a>
      </li>
      </ul>

      </section>
    </article>
      
      
      
      {/* Put the third section in here  */}
      <article className={FooterCSS.section}> 
      {/* Put in the headline container here  */}
      <div className={FooterCSS.headlineContainer}> 
      
      <h1 className={FooterCSS.headline}>
      Outreach:
      </h1>
      </div>
      {/* Put the list container here  */}
      <section className={FooterCSS.section}> 
      {/* Put the list here  */}
      
      <ul className={FooterCSS.list}>
      <li id={FooterCSS.contactListItem} className={FooterCSS.listItem}>
      <Link id={FooterCSS.routerLink} to='ministry' element={<Ministry/>}> 
      Ministry to the Poor 
      </Link> 
      
      
      
      </li>
        <li id={FooterCSS.contactListItem} className={FooterCSS.listItem}>  
        <Link id={FooterCSS.routerLink} to='volunteering' element={<Volunteering/>}>
          Volunteer 
        </Link>
        
        </li>
        
        
        <li className={FooterCSS.listItem}>
          <Link id={FooterCSS.routerLink} to='kidsministry' element={<KidsMinistry/>}>
            Kids Ministry 
          </Link>
        
        </li>
        
        
        <li id={FooterCSS.contactListItem} className={FooterCSS.listItem}>
        {/* Find out why these Links are making everything disappear  */}
          <Link id={FooterCSS.routerLink} to='about' element={<About/>}>
            Learn More 
          </Link>
 
        </li>
        
      </ul>
      </section>
      </article>
  
  </div>
  
  {/* Put the social media section in here  */}
  <div className={FooterCSS.socialMediaSection}>
    <ul className={FooterCSS.socialMediaList}>
      <li> 
      <a href='#' alt="alt"> 
      {/* Add in the social media icon here  */}
      </a>
      </li>
      
      <div className={FooterCSS.hoverEffectParentContainer}>
      <div className={FooterCSS.hoverEffectContainer}>
      <li className={FooterCSS.socialMediaListItem}>
      
      
      <a href='https://www.instagram.com/'>
      
      
      {/* Add in the onMouseEnter and Leave functions here  */}
      {/* Add in the style prop with the necessary logic here  */}
      <FaInstagram   className={FooterCSS.instagramFAIcon}/>  
      </a>
      </li>
      
      
      
      {/* Add the logic in here so that we can change the style of these elements on hover with React  */}
      
      
      <li className={FooterCSS.socialMediaListItem}> 
      {/* Add in the URL to facebook here  */}
      
      {/* Add in the main hover effect container here  */}
      
        <a className={FooterCSS.facebookLink} href='https://www.facebook.com/' alt="alt">
        {/* find out why this is not working  */}
          {/* <FacebookIcon className={FooterCSS.faceBookNPMIcon}/> */}
          
          
          
          <MdFacebook className={FooterCSS.facebookMaterialIcon} />
        
          </a>
      </li>
      </div>
      </div>
      </ul>
      </div>
  
  </footer>
  );
}

export default Footer
