

import React from 'react'
import NewHamburgerCSS from '../Styles/NewHamburger.module.css'; 


import { Link } from 'react-router-dom'; 

import Give from './Give'; 
import Home from './Home'; 
import Meetings from './Meetings'; 
import Volunteering from './Volunteering';
import About from './About'; 
import Ministry from './Ministry';


function NewHamburger() {
  return (
    // Main container 
    <div className={NewHamburgerCSS.HamburgerMaincontainer}>
    <input type="checkbox"/>
   
   <div className={NewHamburgerCSS.hamburgerIconWrapperContainer}>
   <div className={NewHamburgerCSS.hamburgerIconPositionContainer}>
   <div className={NewHamburgerCSS.hamburgerIconWrapper}>
   <span className={NewHamburgerCSS.bar}></span>
   <span className={NewHamburgerCSS.bar}></span>
   <span className={NewHamburgerCSS.bar}></span>
   </div>
    </div>
   </div>



    <section className={NewHamburgerCSS.slideMenu}>
    {/* Add in the list container here */}
    <ul className={NewHamburgerCSS.menuList}>
      {/* Add in the list items here  */}
      <li className={NewHamburgerCSS.listItem}>
      {/* Add in the anchor tags here with their content */}
      <Link to='home' element={<Home/>}>
        Home 
      </Link>
      
      </li>
      
      {/* Add in the rest of the list items here  */}
      <li className={NewHamburgerCSS.listItem}>
        {/* Add in the anchor tag here  */}
        
        </li>
        <li>
        <Link to='about' element={<About/>}>
          About
        </Link>
        
        </li>
        
        <li className={NewHamburgerCSS.listItem}>
          <Link to='ministry' element={<Ministry/>}>
          Ministry 
          </Link>
          
        </li>
        
        <li className={NewHamburgerCSS.listItem}>
          <Link to='meetings' element={<Meetings/>}>
            Meetings 
          </Link>
          
          
        </li>
      
        <li className={NewHamburgerCSS.listItem}>
          <Link to='volunteering' element={<Volunteering/>}>
           Volunteering 
          </Link>
          
        </li>
      
      <li className={NewHamburgerCSS.listItem}> 
      <Link to='give' element={<Give/>}>
        Give 
      </Link>
      
      </li>
    </ul>
    </section>
    
    
    
    </div>
    
  );
  
}

export default NewHamburger
