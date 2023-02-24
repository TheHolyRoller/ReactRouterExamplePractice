import { useState } from "react";
import { Navigate, Outlet, useSearchParams } from "react-router-dom";

// Import the pages here 
// import ImageSlider from "./ImageSlider";
import ImageSlider from './ImageSlider.jsx'; 
import AboutCSS from '../Styles/About.module.css'; 


export default function About() {


  const slides = [ 
    {url: 'https://images.pexels.com/photos/4491315/pexels-photo-4491315.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Beach' },
    {url: 'https://images.pexels.com/photos/4458003/pexels-photo-4458003.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Boat' },
    {url: 'https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Forest' },
    {url: 'https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'City' },
    {url: 'https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Italy' },
    
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
      <div id={AboutCSS.paragraphContainerID} className={AboutCSS.paragraphContainer}>
      <p id={AboutCSS.paragraphSection}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>
      <p id={AboutCSS.paragraphSection}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>
      <p id={AboutCSS.paragraphSection}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>
      </div>
      <div className={AboutCSS.containerStyles}>
      {/* <Outlet/> */}
      <div className={AboutCSS.mainSlideContainer}>
      <div className={AboutCSS.imageSliderContainer}>
      <ImageSlider className={AboutCSS.imageSlider} slides={slides} />
      </div>
      </div>
      </div>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}
