import React from 'react';

// Add in the React Router Imports here 
import { Outlet, NavLink, ScrollRestoration } from "react-router-dom"


function PageLink() {
  return (
    <div>
      <NavLink to="LandingPage"></NavLink>
    </div>
  )
}

export default PageLink
