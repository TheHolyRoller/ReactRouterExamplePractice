import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Picture from './Picture'; 
import Paragraph from './Paragraph';
import Footer from './Footer';
import Cards from './Cards'; 
import LandingPage from '../Styles/LandingPage.module.css'; 

// Now add in the files for all these imports 

function LandingPage() {
  return (
  <>
    <div className='home'>
    {/* <div className={LandingPage.navbar}> */}
    {/* <Navbar /> */}
    {/* </div> */}
    <div className={LandingPage.picture}>
    <Picture/>
    </div>
    <div className={LandingPage.paragraph}>
    <Paragraph/>
    </div>
    <div className={LandingPage.cards}>
    <Cards/>
    </div>
    <div className={LandingPage.footer}>
    <Footer/>
    </div>
    </div>
  </>
  );
  
  
}

export default LandingPage
