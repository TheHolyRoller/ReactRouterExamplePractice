


import { Outlet, NavLink, ScrollRestoration } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs";
// Import the Landing Page here 
// import LandingPage from '../pages/help/LandingPage'; 

// This could break things 

import Footer from '../pages/Footer'; 
import ImageSlider from "../pages/ImageSlider";
// Import the style sheet here 
import RootLayoutCSS from  '../Styles/RootLayout.module.css'; 

// Import all the files here for the Navbar 

import '../pages/Ministry'; 
import '../pages/KidsMinistry'; 
import '../pages/Volunteering'; 
import '../pages/NewHamburger';
import Cards from '../pages/Cards'; 
import NewHamburger from "../pages/NewHamburger";
// import Sunset from '../assets/Sunset'; 
import Picture from "../pages/Picture";




export default function RootLayout() {
  
  const slides = [ 
    {url: 'https://images.pexels.com/photos/4491315/pexels-photo-4491315.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Beach' },
    {url: 'https://images.pexels.com/photos/4458003/pexels-photo-4458003.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Boat' },
    {url: 'https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Forest' },
    {url: 'https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'City' },
    {url: 'https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Italy' },
    
    ];
  

  return (
    <div className="root-layout">
      <ScrollRestoration />
      <header className={RootLayoutCSS.navbarContainer}>
      
        <nav className={RootLayoutCSS.navbar}>
         
          <div className={RootLayoutCSS.flexListContainer}>
          <div className={RootLayoutCSS.listContainer}>
          <ul className={RootLayoutCSS.navList}>
          <li id={RootLayoutCSS.item} className={RootLayoutCSS.listItem}>
          <NavLink id={RootLayoutCSS.navlink} to="help">Help</NavLink><span className={RootLayoutCSS.spanSlash}>/</span>
          </li>
          <li id={RootLayoutCSS.item} className={RootLayoutCSS.listItem}>
          <NavLink id={RootLayoutCSS.navlink} to="about">About </NavLink><span className={RootLayoutCSS.spanSlash}>/</span>
          </li>   
          <li id={RootLayoutCSS.item} className={RootLayoutCSS.listItem}>
          <NavLink id={RootLayoutCSS.navlink} to="careers">Careers</NavLink><span className={RootLayoutCSS.spanSlash}>/</span>
          </li>
          <li id={RootLayoutCSS.item} className={RootLayoutCSS.listItem}>
          <NavLink id={RootLayoutCSS.navlink} to="cards">Cards  </NavLink><span className={RootLayoutCSS.spanSlash}>/</span>
          </li>
          <li id={RootLayoutCSS.item} className={RootLayoutCSS.listItem}>
          <NavLink id={RootLayoutCSS.navlink} to="info">Info</NavLink>
          </li>
          </ul>
          </div>
          </div>
          
         
          <div className={RootLayoutCSS.hamburgerMenuContainer}>
           <NewHamburger className={RootLayoutCSS.hamburgerMenu}/>
          </div>
          
        </nav>
        <Breadcrumbs />
      </header> 
      <main>
        <Outlet />  
        
        
        <Cards className={RootLayoutCSS.cards}/>
         
        <Footer className={RootLayoutCSS.footer} />
      </main>
    </div>
  );
}