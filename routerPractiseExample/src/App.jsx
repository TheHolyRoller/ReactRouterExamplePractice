import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom';

// pages
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/Faq'
import Contact, { contactAction } from './pages/help/Contact'
import NotFound from './pages/help/NotFound';
import Careers, { careersLoader } from './pages/careers/careers'
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails"
import CareersError from './pages/careers/CareersError'


import Info from './pages/Info'; 
import PageLink from './pages/PageLink';
import Testimonies from './pages/Testimonies'; 
import Give from './pages/Give'; 
import Ministry from './pages/Ministry';
import MinistryMaterial from './pages/MinistryMaterial';

  

// layouts
import RootLayout from './layouts/RootLayout';

import HamburgerNav from './pages/Navigation/HamburgerNav'; 
import HelpLayout from './layouts/HelpLayout'
import CareersLayout from './layouts/CareersLayout'

const router = createBrowserRouter(
  
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      
      <Route index element={<Home />} />  
      <Route path="about" element={<About />} />
      <Route path='give' element={<Give/>}/>
      <Route path='testimonies' element={<Testimonies/>}/>
      <Route path='ministrymaterial' element={<MinistryMaterial/>}/>
      <Route path='ministry' element={<Ministry/>}/>
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact/>} action={contactAction} />
      </Route>
      <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}>
        <Route  
          index 
          element={<Careers />} 
          loader={careersLoader}
          // errorElement={<CareersError />}
        />
        <Route 
          path=":id" 
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App