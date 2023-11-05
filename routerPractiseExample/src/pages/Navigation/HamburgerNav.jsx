import {useState, useContext} from 'react'

import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom';

import {  NavLink, ScrollRestoration } from "react-router-dom"
import '../Styles/HamburgerNav.css'; 

import {FaInstagram, FaTwitter} from "react-icons/fa";

import { MdFacebook } from 'react-icons/md'; 

import { FaYoutube } from 'react-icons/fa';
// import Belief from '../Belief';
import { Navigate } from 'react-router';
import Events from '../Events';
import Give from '../Give';

// import { FaTwitter } from 'react-icons/fa';


function HamburgerNav() {
  
  // Set up the React use State Hook here 
  const [menuClass, setMenuClass] = useState("menu  hidden"); 
  const [burgerBar, setBurgerBar] = useState("burger-bar unclicked"); 
  
  
  const [callEffect, setCallEffect] = useState(false); 
  
  const [isMenuClicked, setIsMenuClicked] = useState(false); 
  
  const [mouseEnter, setMouseEnter] = useState(false); 
  
  const [mouseLeave, setMouseLeave] = useState(false); 
  
  
  const [dropDownClass, setDropDownClass] = useState("dropdown dropHidden");
  
  
  
  
  // Add in the Use Effect hook here 
  
 
  
  
  // Create the toggle function here 
  const handleClick = () => {
            
       if(!isMenuClicked){
        
        setBurgerBar("burger-bar clicked"); 
        setMenuClass("menu visible"); 
       }
        else{
          setBurgerBar("burger-bar unclicked"); 
          setMenuClass("menu hidden"); 
          console.log("Is this firing???")
        }         
        
        // Now toggle the state back 
        setIsMenuClicked(!isMenuClicked); 
        
  }
  
  const handleHover = () => {
    
      if(!mouseEnter){

        setDropDownClass("dropdown dropVisible");
        console.log("is this working:");
        
      }
      
      else{
        setDropDownClass("dropdown dropHidden"); 
        console.log("Is this firing???")
        
        
      }
      setMouseEnter(!mouseEnter);
    
  }
  
  const handleMouseNear = () =>{
    setDropDownClass("dropdown dropVisible");
    
  }
  
  const handleMouseOver = () => {
      
      if(mouseEnter){
          
        setDropDownClass("dropdown dropVisible");
          
          
        
      }
      
  }
  
  const goHome = () => {
    
    return <Navigate to="/testimonies" replace={true}  />
      
    }
  
  const handleMouseLeave = () => {
    
    setDropDownClass("dropdown dropHidden");
    
    
  }
  
 
  
  return (
    <div className='navpositionalContainer' >
     <div className='navMainContainer'>
     {/* Add in the code here to make the navbar  */}
     <nav className='navbar'>
     
     {/* Add in the smaller screen logo here  */}
     <div className="smallerLogoPositionalContainer">
     <div className="smallLogoContainer">

     <h1 className="smallerLogo" > Light 2 All  </h1>
     </div>
     </div>
     
     
     <div className='iconContainer' onClick={handleClick}>
     
     <div className={burgerBar}></div>
     <div className={burgerBar}></div>
     <div className={burgerBar}></div>
     
     </div>
     
     
     {/* Add in the menu here  */}
     <div className={menuClass} >
     
     <div className="navListContainer">
     
     {/* HAMBURGER MENU */}
     
     <ul className="navbarMenuList" >
          
          <div onClick={handleClick} className="navListItemContainer">
          <li onClick={handleClick}  className="navMenuListItem">
          <NavLink onClick={handleClick} className="navLinkItem" to="/">Home</NavLink><span className="lineSpan" ></span>
          </li>
          </div>
          <div onClick={handleClick} className="navListItemContainer">
          <li onClick={handleClick} className="navMenuListItem">
          <NavLink onClick={handleClick} className="navLinkItem" to="testimonies">Testimonies</NavLink><span ></span>
          </li>
          </div>
          <div onClick={handleClick} className="navListItemContainer">
          <li onClick={handleClick} className="navMenuListItem" >
          <NavLink onClick={handleClick}  className="navLinkItem" to="about">About </NavLink><span ></span>
          </li>   
          </div>
          <div onClick={handleClick}  className="navListItemContainer">
          <li onClick={handleClick}  className="navMenuListItem" >
          <NavLink onClick={handleClick} className="navLinkItem" to="give">Give  </NavLink><span ></span>
          </li>
          </div>
          <div onClick={handleClick} className="navListItemContainer">
          <li onClick={handleClick} className="navMenuListItem">
          <NavLink onClick={handleClick} className="navLinkItem" to="ministry">Ministry</NavLink>
          </li>
          </div>
         
          </ul>
          
          {/* Add in the social media list here  */}
          <div className="hamburgerSocialMediaListContainer">
            <ul className="hamburgerSocialMediaList" >
            
            <li className="hamburgerSocialMediaItem">
            <a className="socialMediaLink"  href='https://www.instagram.com/'>
      
               <FaInstagram   />  
                </a>
              
            </li>
            <li className="hamburgerSocialMediaItem">
            <a href='https://www.instagram.com/'>
      
      <FaYoutube />  
      </a>
              
            </li>
            <li className="hamburgerSocialMediaItem">
            <a  href='https://www.facebook.com/' alt="alt">
        
        <MdFacebook   />
      
        </a>
              
            </li>
            
          </ul>
            
          </div>
          
          
          
    <div className="callToActionContentContainer">
    <div className="callToActionContainer">
      
    
    <div className="hamburgerButtonContainer">

    <NavLink onClick={handleClick}  className="hamburgerEvents" to="events" element={<Events/>}>
    Get Updates       
    </NavLink>
    </div>
    
    <div className="donateButtonContainer">
      <NavLink onClick={handleClick} className="hamburgerGive" to="give" element={<Give/>}>
        Give
      </NavLink>
      
    </div>
      
      
    </div>
          
     </div>
    </div>
     </div>
     
     <div className="navbarListPositionalContainer">
     
     
     {/* MAIN NAVBAR  */}
     
     <ul className="navbarList" >
          
          <li id="homeButton"  className="navListItem">
          <NavLink className="hamburgerNavLink"  to="/">Home</NavLink><span className="span" >/</span>
          
          </li>
          <li  className="navListItem">
          <NavLink className="hamburgerNavLink" to="testimonies">Testimonies</NavLink><span className='span' >/</span>
          </li>
          <li onMouseOver={handleMouseNear} onMouseLeave={handleMouseLeave} onMouseEnter={handleHover}  className="navListItem" id="aboutHover" >
          <NavLink className="hamburgerNavLink" onMouseOver={handleMouseNear} onMouseEnter={handleHover} >About
          <ul onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} className={dropDownClass} >
          
          
          {/* Turn these into NavLinks  */}
          <li  className="aboutListItem">
          <NavLink className="dropDownNavLink" to="blog">
          Blog

          </NavLink>
          
          </li>
          <li  className="aboutListItem">
          <NavLink className="dropDownNavLink" to="contact">
          Contact Us 
    
          </NavLink>
          
          </li>     
          <li  className="aboutListItem">
          <NavLink className="dropDownNavLink" to="ministrymaterial">
          Ministry Material 
    
          </NavLink>
          
          </li>
          <li  className="aboutListItem">
          <NavLink className="dropDownNavLink" to="belief">
          Belief
    
          </NavLink>
          
          </li>
          
          </ul>
          
          
          </NavLink  ><span className='span' >/</span>
          </li>   
          <li className="navListItem" >
          <NavLink className="hamburgerNavLink" to="give">Give  </NavLink><span className="span" >/</span>
          </li>
          
          <li   className="navListItem">
          <NavLink className="hamburgerNavLink" to="ministry">Ministry</NavLink>
          
          </li>
         
          </ul>
     </div>
     
     
     
     </nav>
     {/* Add in the image positional container here  */}
   
   
    </div>
     
    </div>
  );
  
}

export default HamburgerNav
