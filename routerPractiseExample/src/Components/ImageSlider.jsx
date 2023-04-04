import {useCallback, useState, useEffect} from 'react'
// Import the useState and useEffect React hooks here 

import '../pages/Styles/ImageSlider.css'; 


function ImageSlider() {
  
  const [currentIndex, setCurrentIndex] = useState(0); 
  
  const slides = [ 
    {url: 'https://images.pexels.com/photos/4491315/pexels-photo-4491315.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Beach' },
    {url: 'https://images.pexels.com/photos/4458003/pexels-photo-4458003.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Boat' },
    {url: 'https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Forest' },
    {url: 'https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'City' },
    {url: 'https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Italy' },
    
    ];
  
const nextSlide = () =>{
        
    const isLastIndex = currentIndex === slides.length - 1; 
    
    const newIndex = isLastIndex ? 0 : currentIndex + 1; 
    
    setCurrentIndex(newIndex); 

}
  
  
 const previousSlide = () => {
        
        
        const isFirstSlide = currentIndex == 0; 
    
        const newIndex = isFirstSlide ? slides.length-1 : currentIndex - 1;
        
        
        setCurrentIndex(newIndex);
 } 

const slideContainerStyles = {
    
    height: '100%', 
    position: 'relative', 
}


const slideStyles = {
    
    width: '100%', 
    height: '100%', 
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover', 
    backgroundImage: `url(${slides[currentIndex].url})`
}

const leftArrowStyles = {

    position: 'absolute', 
    top: '50%', 
    transform: 'translate(0 -50%)', 
    left: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: '1',
    cursor: 'pointer'

}


const rightArrowStyles = {

        position: 'absolute', 
        top: '50%', 
        transform: 'translate(0 -50%)', 
        right: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: '1',
        cursor: 'pointer'
}


const dotsContainerStyles = {



display: 'flex', 
justifyContent: 'center'


}

const dotStyles = {

    margin: '0 3px', 
    cursor: 'pointer', 
    fontSize: '35px', 
}



return(



<div className="positionalContainer">

<div className="holder"></div>
 
 <div className="mainContainer">
    
    
 <div className='carouselContainer'>

 <div style={leftArrowStyles} className='leftArrowContainer'>
 
 
 <div  className='leftArrow' onClick={nextSlide}>
 ❰
 
 </div>
 </div>
 
 <div style={rightArrowStyles} className='rightArrowContainer'>
 
 <div  className='rightArrow' onClick={previousSlide}>
 ❱
 </div>
 </div>

 
 {/* Position and style these correctly  */}
 <div className='centeringContainer'>
 <div className='navigationalPositionalDotsContainer'>
 <div  className="navigationDotsContainer">
 
 
 </div>
 
 </div>
 </div>
 
 {/* Add in the image container here  */}
 <div style={slideStyles} className='imageContainer'>
 
 
 </div>
 
 
 {/* ---CAROUSEL CONTAINER */}
 </div>
 
 <div className="textSection">
 
 <div className="textContainer">
 
 
 {/* Add in the heading container here  */}
 <div className="headingContainer">
 
 <h1 className="imageSliderHeader">
    About the Ministry 
    
    
 </h1>
 
 
 </div>
 
 {/* Add in the SVG container here  */}
 
 <div className="SVGContainer">
    
    {/* Add in the SVG here  */}
    <div className="SVG">

    -------
    </div>
    
 </div>
 
 

<p className="imageCarouselParagraph" >
{/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quos suscipit asperiores quia repellat mollitia dolorem cupiditate perferendis, accusamus distinctio quae cum maxime commodi autem molestias quod modi neque quisquam! */}
Ekal Vidyalaya Foundation of Canada (Ekal Canada) was founded in 2007. Ekal is a registered Canadian charity and a non-profit organization engaged in the education of tribal, indigenous children in rural India and Nepal. Ekal Canada has ZERO administrative cost. This means 100% of the proceeds from your donations go towards Ekal’s programs. Ekal is the largest grassroots movement for rural education in the world.
</p>


{/* Add in the button container here  */}
<div className="buttonContainer">

<div className="imageSliderButton">

<span className="imageSliderButtonSpan" >

 About  
    
</span>
    <span>
        Us
    </span>
    
    {/* Add in the icon Arrow container here  */}
    <span className="sliderIconArrowContainer">
        {/* Add in the icon here  */}
        
        
    </span>
    
</div>
    
    
</div>
    
 </div>
 
 
 {/* text Section  */}
 </div>
 
 {/* Main container  */}
 </div>
 
</div>

);
  
}

export default ImageSlider
