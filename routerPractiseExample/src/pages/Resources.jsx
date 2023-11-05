import React from 'react'

// Import the style sheet here 
import R from '../pages/Styles/Resources.module.css'; 
import Footer from '../pages/Navigation/Footer'; 


function Resources() {
  return (
    <div className={R.mainContainer}>
    
    <div className={R.contentContainer}>
    
    
    {/* Add in the hero container here  */}
    
    <div className={R.heroContainer}>
    
    {/* Add in the text container here  */}
    
    <div className={R.heroTextContainer}>
            
    <p className={R.heroText}>
    
    <h1 className={R.heroTextHeader}>
       Hero text  
    </h1>
        
    </p>
        
    </div>
        
        
{/* Add in the hero image container here  */}
        
<div className={R.heroImageContainer}>
    
    {/* Add in the hero image here  */}

<div className={R.heroImage}></div>
    
    
    
</div>        

    </div>
    
    
{/* Add in the page content container here  */}

<section className={R.pageContentContainer}>


{/* Add in the page main title container here  */}

<div className={R.pageMainTitleContainer}>

  {/* Add in page main Title here  */}
  
  <div className={R.pageMainTitle}>

    Page Title 
    
  </div>
  
  
</div>


{/* Add in page instructions container here  */}

<div className={R.pageInstructionsContainer}>
  
  Click to Download 
  
  
<div className={R.pageInstructions}></div>
  
  
  
</div>


{/* Add in grid title container here  */}

<div className={R.gridTitleContainer}>
  
  {/* Add in the Grid title here  */}

<div className={R.gridTitle}>
  
  Grid Title 
  
</div>
  
</div>


{/* Add in the grid container here  */}

<div className={R.gridContainer}>

{/* Add in the first Column Container here  */}
  
<div className={R.gridColumn}>


{/* Add in the grid list here  */}

<ul className={R.downloadList}> 

<li className={R.downloadItem}>
The Abiding Ministry of the Holy Spirit
  
</li>
<li className={R.downloadItem}>
The Abiding Ministry of the Holy Spirit
  
</li>
<li className={R.downloadItem}>
The Abiding Ministry of the Holy Spirit
  
</li>
<li className={R.downloadItem}>
The Abiding Ministry of the Holy Spirit
  
</li>
<li className={R.downloadItem}>
The Abiding Ministry of the Holy Spirit
  
</li>
  
  
</ul>
  
  
</div>


<div className={R.gridColumn}>


{/* Add in the grid list here  */}

<ul className={R.downloadList}> 

<li className={R.downloadItem}>
The Abiding Ministry of the Holy Spirit
  
</li>
<li className={R.downloadItem}>
The Abiding Ministry of the Holy Spirit
  
</li>
<li className={R.downloadItem}>
The Abiding Ministry of the Holy Spirit
  
</li>
<li className={R.downloadItem}>
The Abiding Ministry of the Holy Spirit
  
</li>
<li className={R.downloadItem}>
The Abiding Ministry of the Holy Spirit
  
</li>
  
</ul>
  
  
</div>
  
  
  
</div>


</section>
    
        
        
      Resources
      
      {/* add in the footer container in here  */}
    <div className={R.footerContainer}>
      
      {/* Add in the footer here  */}
      <Footer/>
      
    </div>
      
      
    </div>
    
    
      
    </div>
  );
  
}

export default Resources
