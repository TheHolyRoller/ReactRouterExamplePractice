import React from 'react'
import { Outlet, NavLink, ScrollRestoration } from "react-router-dom"
import HamburgerNav from '../pages/Navigation/HamburgerNav'


function Renderer() {
  return (
    <div className="outletContainer" >
    <HamburgerNav/>
    
    </div>
  )
}

export default Renderer
