import React from 'react'

// Import the stylesheet here 
import phoneCardsCSS from  '../Styles/phoneCards.module.css'; 


function phoneCards() {
  return (
    <div className={phoneCardsCSS.phoneCardsContainer}>

      <section className={phoneCardsCSS.card} >
      
      <div className={phoneCardsCSS.cardTitleContainer} >
      <h1 className={phoneCardsCSS.cardTitle}>
      Card Title 
      </h1>
      
      </div>
      
      <div className={phoneCardsCSS.imageMainContainer}>
      <div className={phoneCardsCSS.imageContainer}>
      
      
      </div>
      </div>
      <div className={phoneCardsCSS.textContainer}>
      <p className={phoneCardsCSS.paragraph}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas non laboriosam possimus eum ipsa quidem tempore! Eaque eligendi, reprehenderit veritatis tempore laboriosam iure, quasi repudiandae, aperiam aliquid perspiciatis quas. Velit.
      
      </p>
      
      </div>
      
      
      <div className={phoneCardsCSS.buttonContainer}>
      <button className={phoneCardsCSS.button}>
      Learn More 
      </button>
      
      </div>

      </section>

      <section className={phoneCardsCSS.card} >
      
      <div className={phoneCardsCSS.cardTitleContainer} >
      <h1 className={phoneCardsCSS.cardTitle}>
      Card Title 
      </h1>
      
      </div>
      
      <div className={phoneCardsCSS.imageMainContainer}>
      <div className={phoneCardsCSS.imageContainer}>
      
      
      </div>
      </div>
      <div className={phoneCardsCSS.textContainer}>
      <p className={phoneCardsCSS.paragraph}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas non laboriosam possimus eum ipsa quidem tempore! Eaque eligendi, reprehenderit veritatis tempore laboriosam iure, quasi repudiandae, aperiam aliquid perspiciatis quas. Velit.
      
      </p>
      
      </div>
      
      
      <div className={phoneCardsCSS.buttonContainer}>
      <button className={phoneCardsCSS.button}>
      Learn More 
      </button>
      
      </div>
      </section>
      
    </div>
  );
}

export default phoneCards
