import React from 'react';

import { useState } from 'react';




  import '@fortawesome/fontawesome-svg-core'; 
  import '@fortawesome/free-regular-svg-icons'; 
  import '@fortawesome/react-fontawesome'; 
  import '@fortawesome/fontawesome-svg-core'


import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { faCoffee, faPause } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Factory } from 'react';

import Signup from '../Components/Signup'; 


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
import SignUpFooterCSS from '../pages/Styles/SignUpFooter.module.css';




function SignUpFooter() {
  
  // Add in the UseState Hook here 
  const [hover, setHover] = useState(false);
  
  const handleMouseEnter = () => {
    
    setHover(true); 

  }
  
  const handleMouseLeave = () => {
  
    setHover(false); 

  }

  
  
  
  
  return (
  <footer className={SignUpFooterCSS.footer}> 
  
  <div className={SignUpFooterCSS.contentContainer}>

    <article className={SignUpFooterCSS.Logosection}>
    

    
   <div className={SignUpFooterCSS.socialMediaListContainer}>
    
   {/* <div className={SignUpFooterCSS.logoContainer}>
    
    <div className={SignUpFooterCSS.logo} >Logo</div>
        
        
    </div> */}
    {/* <ul className={SignUpFooterCSS.socialMediaList}>
    
    <li className={SignUpFooterCSS.socialMediaListItem}>

    
    <svg fill="#1C2033" width="32" height="32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M47.4008 25.8H41.8008H39.8008V23.8V17.6V15.6H41.8008H46.0008C47.1008 15.6 48.0008 14.8 48.0008 13.6V3C48.0008 1.9 47.2008 1 46.0008 1H38.7008C30.8008 1 25.3008 6.6 25.3008 14.9V23.6V25.6H23.3008H16.5008C15.1008 25.6 13.8008 26.7 13.8008 28.3V35.5C13.8008 36.9 14.9008 38.2 16.5008 38.2H23.1008H25.1008V40.2V60.3C25.1008 61.7 26.2008 63 27.8008 63H37.2008C37.8008 63 38.3008 62.7 38.7008 62.3C39.1008 61.9 39.4008 61.2 39.4008 60.6V40.3V38.3H41.5008H46.0008C47.3008 38.3 48.3008 37.5 48.5008 36.3V36.2V36.1L49.9008 29.2C50.0008 28.5 49.9008 27.7 49.3008 26.9C49.1008 26.4 48.2008 25.9 47.4008 25.8Z" /></svg>
    
    
    
    
    </li>
    <li className={SignUpFooterCSS.socialMediaListItem}>
    <svg fill="#1C2033" width="32" height="32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M62.9 19.2C62.8 16 62.2 13.7 61.5 11.6C60.8 9.5 59.7 7.8 58 6.1C56.3 4.4 54.6 3.4 52.6 2.6C50.6 1.8 48.4 1.3 45 1.2C41.5 1 40.5 1 32 1C23.5 1 22.6 1 19.2 1.1C15.8 1.2 13.7 1.8 11.6 2.5C9.5 3.2 7.8 4.4 6.1 6.1C4.4 7.8 3.3 9.5 2.6 11.6C1.8 13.6 1.3 15.8 1.2 19.2C1.1 22.6 1 23.5 1 32C1 40.5 1 41.4 1.1 44.8C1.2 48.2 1.8 50.3 2.5 52.4C3.2 54.5 4.3 56.2 6 57.9C7.7 59.6 9.5 60.7 11.5 61.4C13.5 62.1 15.7 62.7 19.1 62.8C22.5 63 23.4 63 31.9 63C40.4 63 41.3 63 44.7 62.9C48.1 62.8 50.2 62.2 52.3 61.5C54.4 60.8 56.1 59.7 57.8 58C59.5 56.3 60.6 54.5 61.3 52.5C62 50.5 62.6 48.3 62.7 44.9C62.8 41.7 62.8 40.7 62.8 32.2C62.8 23.7 63 22.6 62.9 19.2ZM57.3 44.5C57.2 47.5 56.6 49.1 56.2 50.3C55.6 51.7 54.9 52.8 53.8 53.8C52.7 54.9 51.7 55.5 50.3 56.2C49.2 56.6 47.6 57.2 44.5 57.3C41.3 57.3 40.3 57.3 32.1 57.3C23.9 57.3 22.8 57.3 19.6 57.2C16.6 57.1 15 56.5 13.8 56.1C12.4 55.5 11.3 54.8 10.3 53.7C9.2 52.6 8.6 51.6 7.9 50.2C7.5 49.1 6.9 47.5 6.8 44.4C6.8 41.3 6.8 40.3 6.8 32C6.8 23.7 6.8 22.7 6.9 19.5C7 16.5 7.6 14.9 8 13.7C8.6 12.3 9.3 11.2 10.3 10.2C11.4 9.1 12.4 8.5 13.8 7.9C14.9 7.5 16.5 6.9 19.6 6.8C22.8 6.7 23.8 6.7 32.1 6.7C40.4 6.7 41.4 6.7 44.6 6.8C47.6 6.9 49.2 7.5 50.4 7.9C51.8 8.5 52.9 9.2 53.9 10.2C55 11.3 55.6 12.3 56.3 13.7C56.7 14.8 57.3 16.4 57.4 19.5C57.5 22.7 57.5 23.7 57.5 32C57.5 40.3 57.4 41.3 57.3 44.5Z" /><path d="M32.0016 16.0996C23.1016 16.0996 16.1016 23.2996 16.1016 31.9996C16.1016 40.8996 23.3016 47.8996 32.0016 47.8996C40.7016 47.8996 48.0016 40.8996 48.0016 31.9996C48.0016 23.0996 40.9016 16.0996 32.0016 16.0996ZM32.0016 42.3996C26.2016 42.3996 21.6016 37.6996 21.6016 31.9996C21.6016 26.2996 26.3016 21.5996 32.0016 21.5996C37.8016 21.5996 42.4016 26.1996 42.4016 31.9996C42.4016 37.7996 37.8016 42.3996 32.0016 42.3996Z" /><path d="M48.7 19.1002C50.7435 19.1002 52.4 17.4436 52.4 15.4002C52.4 13.3567 50.7435 11.7002 48.7 11.7002C46.6565 11.7002 45 13.3567 45 15.4002C45 17.4436 46.6565 19.1002 48.7 19.1002Z" /></svg>
    
    
    </li>
    <li className={SignUpFooterCSS.socialMediaListItem}>

    <svg fill="#1C2033" width="36" height="36" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M61.7 17.0998C61 14.3998 58.9 12.2998 56.2 11.5998C51.4 10.2998 32 10.2998 32 10.2998C32 10.2998 12.6 10.2998 7.8 11.5998C5.1 12.2998 3 14.3998 2.3 17.0998C1 21.9998 1 31.9998 1 31.9998C1 31.9998 1 42.0998 2.3 46.8998C3 49.5998 5.1 51.6998 7.8 52.3998C12.6 53.6998 32 53.6998 32 53.6998C32 53.6998 51.4 53.6998 56.2 52.3998C58.9 51.6998 61 49.5998 61.7 46.8998C63 42.0998 63 31.9998 63 31.9998C63 31.9998 63 21.9998 61.7 17.0998ZM25.8 41.2998V22.6998L41.9 31.9998L25.8 41.2998Z" /></svg>
    
    </li>
        
    </ul> */}
    
   </div>
    
    <section className={SignUpFooterCSS.listContainer}>
   
    </section>    
    </article>
    
  
    
    <article className={SignUpFooterCSS.Contactsection}> 

      
      
      <div className={SignUpFooterCSS.headlineContainer}> 
      <div className={SignUpFooterCSS.headline}>
      Contact Us: 
      </div>
      </div>
      
      <section className={SignUpFooterCSS.listContainer}>
      
      <ul className={SignUpFooterCSS.list}> 
        
    {/* Add in the email container here  */}
    <li className={SignUpFooterCSS.emailContainer} >
    <div className={SignUpFooterCSS.contactEmail}>
    contact@email.com
    
    </div>
        
    </li>
    
    {/* Add in the Address container here make sure to add a bit of top space between the two items  */}
    <li className={SignUpFooterCSS.addressContainer}>
    
    <div id={SignUpFooterCSS.addressId}  className={SignUpFooterCSS.addressContainer}>
    24 Avery Avenu, Brooklyn 
    
        
    </div>
   

    </li>
    <li className={SignUpFooterCSS.secondAddressLineItem}>
     <div className={SignUpFooterCSS.secondAddressLine}>
    Dreamy Drive         
    </div>

    </li>
    
    {/* Add in the phone number container here  */}
    <li className={SignUpFooterCSS.phoneNumberListItem}>
    <div className={SignUpFooterCSS.phoneNumber}>
        +35569784 
    </div>
    </li>
    
      </ul>

      </section>
    </article>
      
      
      
      {/* Put the third section in here  */}
      <article className={SignUpFooterCSS.SignUpsection}> 
      {/* Put in the headline container here  */}
      <div className={SignUpFooterCSS.headlineContainer}> 
      
      <div className={SignUpFooterCSS.headline}>
      Subscribe:
      </div>
      </div>
      
      {/* Put the list container here  */}
      <section className={SignUpFooterCSS.listContainer}> 
      {/* Put the list here  */}
      
      {/* Add in the text container here  */}
      <div className={SignUpFooterCSS.textContainer}>
        <p className={SignUpFooterCSS.signUpText}>
          Stay up to date with our newsletter 
          
        </p>
        
        
      </div>
      
      

      <div className={SignUpFooterCSS.signUpContainer}>
      <Signup/>
      </div>
      </section>
      </article>
  
  </div>
  
  {/* Put the social media section in here  */}
  <div className={SignUpFooterCSS.socialMediaSection}>
    <ul className={SignUpFooterCSS.socialMediaList}>
      <li> 
      <a href='#' alt="alt"> 
      </a>
      </li>
      
      
      <div className={SignUpFooterCSS.hoverEffectParentContainer}>
      <div id={SignUpFooterCSS.socialID} className={SignUpFooterCSS.hoverEffectContainer}>
      <li className={SignUpFooterCSS.socialMediaListItem}>
      
      
      
      
      <a href='https://www.instagram.com/'>
      
      </a>
      </li>
      
      <li className={SignUpFooterCSS.socialMediaListItem}> 
        <a className={SignUpFooterCSS.facebookLink} href='https://www.facebook.com/' alt="alt">
        
          </a>
      </li>
      </div>
      </div>
      </ul>
      </div>
      
    <div className={SignUpFooterCSS.footerLine}></div>
    
  </footer>
  );
}

export default SignUpFooter
