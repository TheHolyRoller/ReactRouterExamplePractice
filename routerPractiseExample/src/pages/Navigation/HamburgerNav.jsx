import {useState, useEffect, useContext} from 'react'



import { Outlet, NavLink, ScrollRestoration } from "react-router-dom"
import '../Styles/HamburgerNav.css'; 




function HamburgerNav() {
  
  // Set up the React use State Hook here 
  const [menuClass, setMenuClass] = useState("menu  hidden"); 
  const [burgerBar, setBurgerBar] = useState("burger-bar unclicked"); 
  const [isMenuClicked, setIsMenuClicked] = useState(false); 
  
  const [mouseEnter, setMouseEnter] = useState(false); 
  
  const [mouseLeave, setMouseLeave] = useState(false); 
  
  
  const [dropDownClass, setDropDownClass] = useState("dropdown dropHidden");
  
  
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
  
  const handleMouseLeave = () => {
    
    // if(mouseEnter)
    
    setDropDownClass("dropdown dropHidden");
    
    
  }
  
 
  
  return (
    <div className='navpositionalContainer' >
     <div className='navMainContainer'>
     {/* Add in the code here to make the navbar  */}
     <nav className='navbar' >
     
     
     <div className='iconContainer' onClick={handleClick}>
     
     <div className='bar'></div>
     <div className='bar'></div>
     <div className='bar'></div>
     
     </div>
     
     
     {/* Add in the menu here  */}
     <div className={menuClass} >
     
     <div className="navListContainer">
     
     {/* HAMBURGER MENU */}
     
     <ul className="navbarMenuList" >
          
          <li  className="navListItem">
          <NavLink  to="/">Home</NavLink><span ></span>
          </li>
          <li  className="navMenuListItem">
          <NavLink  to="testimonies">Testimonies</NavLink><span ></span>
          </li>
          <li className="navMenuListItem" >
          <NavLink  to="about">About </NavLink><span ></span>
          </li>   
          <li className="navMenuListItem" >
          <NavLink  to="give">Give </NavLink><span ></span>
          </li>
          <li  className="navMenuListItem">
          <NavLink  to="ministry">Ministry</NavLink>
          
          </li>
         
          </ul>
          
     </div>
     </div>
     
     <div className="navbarListPositionalContainer">
     
     
     {/* MAIN NAVBAR  */}
     
     <ul className="navbarList" >
          
          <li  className="navListItem">
          <NavLink  to="/">Home</NavLink><span className="span" >/</span>
          </li>
          <li  className="navListItem">
          <NavLink  to="testimonies">Testimonies</NavLink><span className='span' >/</span>
          </li>
          <li onMouseOver={handleMouseNear} onMouseEnter={handleHover}  className="navListItem" id="aboutHover" >
          <NavLink onMouseOver={handleMouseNear} onMouseEnter={handleHover}  to="about">About
          <ul onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} className={dropDownClass} >
          <li  className="aboutListItem">
          What we do 
          </li>
          <li>
            What we've done 
          </li>      
          <li>
          How can you help 
          
          </li>
          
          </ul>
          
          
          </NavLink><span className='span' >/</span>
          </li>   
          <li className="navListItem" >
          <NavLink  to="give">Give </NavLink><span className="cspan" >/</span>
          </li>
          <li  className="navListItem">
          <NavLink  to="ministry">Ministry</NavLink>
          
          </li>
         
          </ul>
     </div>
     
     
     
     </nav>
     {/* Add in the image positional container here  */}
     <header className='navimagePositionalContainer'>

     {/* <div className='imageContainer'> </div> */}
     <Outlet>
        
        </Outlet>
     
     </header>
   
   
   
    </div>
     
    </div>
  );
  
}

export default HamburgerNav
