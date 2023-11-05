


import { Outlet, NavLink, ScrollRestoration } from "react-router-dom"
import { Link } from 'react-router-dom'; 

import Renderer from "../Components/Renderer";

import '../pages/Styles/RootLayout.module.css'; 



import { useOutletContext } from "react-router-dom";

import '../pages/Ministry'; 
import '../pages/KidsMinistry'; 
import '../pages/Volunteering'; 

import Home from '../pages/Home'; 

import HamburgerNav from '../pages/Navigation/HamburgerNav'; 
import Footer from "../pages/Navigation/Footer";


export default function RootLayout() {
  
  const slides = [ 
    {url: 'https://images.pexels.com/photos/4491315/pexels-photo-4491315.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Beach' },
    {url: 'https://images.pexels.com/photos/4458003/pexels-photo-4458003.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Boat' },
    {url: 'https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Forest' },
    {url: 'https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'City' },
    {url: 'https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Italy' },
    
    ];
    
    
    const goHome = () => {
    
    return <Navigate to="/" replace={true}  />
      
    }

    // const [name] = useOutletContext();

  return (
      <>
      <div className="navHolder">
      <ScrollRestoration/>
      <HamburgerNav/>
        
      </div>
      <div className="root-layout">


     
      {/* <Renderer/> */}
    <main>
      <Outlet/>
      
    </main>
    
    <div className="footerContainer">
      <Footer/>
      
    </div>
      
    </div>
      </>
  );
}