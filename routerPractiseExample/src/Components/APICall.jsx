import React from 'react'
import { useEffect, useState, useRef } from 'react'

import A from '../pages/Styles/APICall.module.css'; 


// Add in the imports for the string removal here 

const Definition = () => {

  const [verse, setVerse] = useState()
  const [chapter, setChapter] = useState([]);
  const [book, setBook] = useState([]); 
  
  

  async function  fetchData(){
  
  
  
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b337d41dbemshdaad5a36266fe8dp10fa6ejsn6fb1a2232388',
		'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com'
	}
};
    
const url = 'https://ajith-holy-bible.p.rapidapi.com/GetVerseOfaChapter?Verse=3&chapter=7&Book=Luke'; 
    
let response = await fetch(url, options).catch(err => console.error(err));



let data = await response.json();

console.log(data.Output); 

let verse = data.Output; 
console.log(verse); 

setVerse(verse); 

}
  useEffect(() => {

    fetchData();

  }, [verse])

  return (
    <div className={A.mainContainer} >
      <div className={A.headerContainer}>
      <h1 className={A.header} >Verse of the Day  </h1>
      </div>
      <p className={A.verse} > {verse} </p>
    </div>
  );
  

}


export default Definition
