import { useState } from "react";
import { Navigate, Outlet, useSearchParams , AbortedDeferredError} from "react-router-dom";


import A from '../pages/Styles/About.module.css'; 


import Blog from '../pages/Blog';
import Belief from "./Belief";
import Resources from "./Resources";
import Events from "./Events";



export default function About() {


  const [user, setUser] = useState('mario')
  const [searchParams] = useSearchParams()
  
  const name = searchParams.get('name')
  
  if (!user) {
  // You can use this as a home button but also to Navigate to places that you don't want to use as Outlet children 
    return <Navigate to="/" replace={true} />
  }
  
  

  return (
    <div className={A.mainContainer}>
      
      
      {/* <Blog/> */}
      
      <Belief/>
      
      {/* <Resources/> */}
      
      
      {/* <Events/> */}

      
    </div>
  );
}
