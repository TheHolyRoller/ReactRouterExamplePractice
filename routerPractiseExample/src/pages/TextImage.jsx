import React from 'react'
// import TS from './Styles/TextImage.module.css'; 

// import IR from '../Styles/TextImage.module.css'; 
import IR from '../pages/Styles/TextImage.module.css'; 


function TextImage() {
  return (
    <div className={IR.mainContainer}>
    <div className={IR.rowContainer}>
    <div className={IR.textSection}>
    
    {/* Add in the header container here  */}
    <div className={IR.headerContainer}>
    <div className={IR.header} >
    Village Ministry 
    </div>
        
    </div>
    
    
    {/* Add in the text container here  */}
    <div className={IR.textContainer}>
        <p className={IR.text}>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ducimus expedita repudiandae vel laborum maxime dolore neque placeat repellendus minima. */}
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellat doloremque sed iusto eos pariatur dolore repudiandae, minus cumque, veritatis voluptates magnam tempora dolor natus fuga fugit suscipit aut at aperiam explicabo impedit quam quae enim! Nobis voluptatum delectus incidunt nam cupiditate maiores, officiis libero animi et autem fugit cumque quasi soluta eos temporibus adipisci amet ratione? Sequi deleniti nobis sapiente, a dolor impedit accusamus, est modi voluptatem id eius delectus nulla quis ducimus odit culpa facere adipisci molestiae recusandae sed laudantium dignissimos. Quia veritatis nihil eum dolor, nulla est numquam voluptatum at velit magni consequuntur quos possimus dolorem placeat!    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem blanditiis quod dicta alias nemo delectus ipsa velit. Illo qui quaerat perspiciatis repellendus corporis dolorem impedit temporibus facilis dolore, alias laudantium? */}
        Our Mission is the holistic development of remote villages, tribal areas of India and developing neighboring countries through well-designed, effectual education supporting Literacy, Healthcare, Economic Development and Empowerment. Ekal is the largest non-government organization engaged in the education of the poorest of the poor in the world.       

        </p>
        
    </div>        
        
{/* Add in the Call to action button container here  */}
    <div className={IR.buttonContainer}>
        <div className={IR.button} >
        
        Take Action 
        </div>
        
    </div>
        
    </div>
    
    
    
    <div className={IR.imageSection}>
    <div className={IR.imageContainer}>
        <div className={IR.image}></div>
        
    </div>
    </div>

    
    {/* Add in the text section container here  */}
    
    </div>
    
      {/* Text Image  */}
    </div>
  )
}

export default TextImage
