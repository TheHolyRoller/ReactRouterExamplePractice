


import { Outlet, NavLink, ScrollRestoration } from "react-router-dom"
import { Link } from 'react-router-dom'; 


// import Footer from '../pages/Footer'; 






import '../pages/Ministry'; 
import '../pages/KidsMinistry'; 
import '../pages/Volunteering'; 
// import Cards from '../pages/Cards'; 
// import Picture from "../pages/Picture";
// import Paragraph from "../pages/Paragraph";
// import Home from '../pages/Home';
import Home from '../pages/Home'; 
// import About from '../pages/About'; 

// import Give from '../pages/Give'; 
// import Ministry from "../pages/Ministry";
// import Meetings from "../pages/Meetings";
// import Volunteering from "../pages/Volunteering";


// import HamburgerNav from "../pages/HamburgerNav";
import HamburgerNav from '../pages/Navigation/HamburgerNav'; 


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

  return (
      
      <div className="root-layout">
      
      
      
      {/* Add in the HamburgerNav here  */}
      <ScrollRestoration/>
      <HamburgerNav/>
      
    </div>
  );
}