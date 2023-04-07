import { useState } from "react";
import { Navigate, Outlet, useSearchParams } from "react-router-dom";

// Import the pages here 
// import ImageSlider from "./ImageSlider";
// import ImageSlider from './ImageSlider.jsx'; 
// import AboutCSS from '../Styles/About.module.css'; 
// import Paragraph from "./Paragraph.jsx";


import AboutCSS from '../pages/Styles/About.module.css'; 


export default function About() {


// Figure out why these are not working 
  const slides = [ 
    {url: 'https://images.unsplash.com/photo-1563187867-2cd158d07999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Qm9hdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60', title: 'Beach' },
    {url: 'https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9hdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60', title: 'Boat' },
    {url: 'https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Rm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60', title: 'Forest' },
    {url: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8TG9uZG9uJTIwY2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60', title: 'City' },
    {url: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8SXRhbHl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60', title: 'Italy' },
    
    ];
    
    
    const containerStyles = {
      
      width: '500xp', 
      height: '280px', 
      margin: '0 auto'
      
      
    }


  const [user, setUser] = useState('mario')
  const [searchParams] = useSearchParams()
  
  const name = searchParams.get('name')
  
  if (!user) {
  // You can use this as a home button but also to Navigate to places that you don't want to use as Outlet children 
    return <Navigate to="/" replace={true} />
  }
  

  return (
    <div className="about">
      {name && <p>Hi, {name}!</p>}
    
      <h2>About Us</h2>
      
      
      <button id={AboutCSS.button} onClick={() => setUser(null)}>Logout</button>
      

      
    </div>
  );
}
