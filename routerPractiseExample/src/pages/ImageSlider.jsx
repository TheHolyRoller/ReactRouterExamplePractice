import React from 'react'; 
import { useState, useEffect } from 'react';
import SliderCSS from '../Styles/ImageSlider.module.css';

// const slides = [ 
//     {url: 'https://images.pexels.com/photos/4491315/pexels-photo-4491315.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Beach' },
//     {url: 'https://images.pexels.com/photos/4458003/pexels-photo-4458003.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Boat' },
//     {url: 'https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Forest' },
//     {url: 'https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'City' },
//     {url: 'https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Italy' },
    
//     ];

    
    // It might be saying that this is undefined 
const ImageSlider  = ({slides}) => {
const [currentIndex, setCurrentIndex] = useState(0); 


const slideContainerStyles = {
    
    height: '100%', 
    position: 'relative', 
    marginBottom: '5%', 
    overflow: 'hidden',
    // opacity: '0'
    


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
    fontSize: '20px', 
         

}


const goToPrevious = () => {

const isFirstSlide = currentIndex === 0; 

const newIndex = isFirstSlide ? slides.length-1 : currentIndex -1; 

setCurrentIndex(newIndex); 


};


const goToNext = () => {

const isLastSlide = currentIndex === slides.length - 1; 
const newIndex = isLastSlide ? 0 : currentIndex + 1; 

setCurrentIndex(newIndex); 
    
}

const goToSlide = (slideIndex) => {
    
    setCurrentIndex(slideIndex); 
    
    
 
}

    return(
    
    <div id={SliderCSS.slideContainer}  style={slideContainerStyles} className={SliderCSS.imageSliderContainer}>
    <div style={leftArrowStyles} onClick={goToPrevious} className={SliderCSS.sliderArrow}>
    
    ❰  
    </div>
    <div style={rightArrowStyles} onClick={goToNext} className={SliderCSS.sliderArrow}>
    ❱
    </div>
    
 <div style={slideStyles} className={SliderCSS.backgroundImage}> 
    </div > 
    
    <div style={dotsContainerStyles} className={SliderCSS.navigationPipsContainer}>
    
    {slides.map((slide, slideIndex) => (
    
    
    <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)} className={SliderCSS.navigationPip}>● </div>
    
    )
    
    )}
        
    </div>
    
     </div> 
    
    
    
    ) 
    

};
export default ImageSlider; 

