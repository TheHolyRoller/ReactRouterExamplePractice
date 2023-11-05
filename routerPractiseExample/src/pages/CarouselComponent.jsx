import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../pages/Styles/CarouselComponent.css';


// import Cathedra from '../assets/Harbour'; 


export default function CarouselComponent() {
    return (

        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div className="firstImage" >
                    
                    <img  src="https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fEJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&h=300&q=60" />
                </div>
                <div>
                    <img  src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8QmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=700&h=300&q=60" />
                </div>
                <div>
                    <img  src="https://images.unsplash.com/photo-1681025243141-25cd6f243a13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=300&q=20" />
                </div>
            </Carousel>
        </div>
    );
}