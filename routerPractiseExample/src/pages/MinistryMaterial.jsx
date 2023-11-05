        // import {useState, uEffect, useContext, useRef, useCallback, useReducer} from 'react'
        import {useState, useEffect, useCallback, useContext, useReducer, useRef} from 'react'; 

        // Import the stylesheet here 
        import M from '../pages/Styles/MinistryMaterial.module.css'; 
        import Footer from '../pages/Navigation/Footer'; 
        import {ProgressBar} from 'audio-progress-bar';


        // import {useState, useEffect, useContext, useRef, useCallback, useReducer} from 'react'


        import '@fortawesome/fontawesome-svg-core'; 
        import '@fortawesome/free-regular-svg-icons'; 
        import '@fortawesome/react-fontawesome'; 
        import '@fortawesome/fontawesome-svg-core'
        // import FontAwesomeIcon from '@fortawesome/fontawesome-svg-core'; 

        // import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons'; 
        import { faCoffee, faPause } from '@fortawesome/free-solid-svg-icons'; 
        import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

        import { faPlay } from '@fortawesome/free-solid-svg-icons';
        import { faForwardStep } from '@fortawesome/free-solid-svg-icons';
        import { faForwardFast } from '@fortawesome/free-solid-svg-icons';
        import { faFastForward } from '@fortawesome/free-solid-svg-icons';
        import { faForward } from '@fortawesome/free-solid-svg-icons';

        import { faBackward } from '@fortawesome/free-solid-svg-icons';
        import { faBackwardFast } from '@fortawesome/free-solid-svg-icons';
        import { faBackwardStep } from '@fortawesome/free-solid-svg-icons';
        import { faBackspace } from '@fortawesome/free-solid-svg-icons';


        import { faPlus } from '@fortawesome/free-solid-svg-icons';
        import { faMinus } from '@fortawesome/free-solid-svg-icons';


        import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
        import { faVolumeLow } from '@fortawesome/free-solid-svg-icons';
        import { faVolumeDown } from '@fortawesome/free-solid-svg-icons'; 
        import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
        import { faVolumeMute } from '@fortawesome/free-solid-svg-icons';



        import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
        import { faInfinity } from '@fortawesome/free-solid-svg-icons';

        import { fa1 } from '@fortawesome/free-solid-svg-icons';


        // Import the audio files here '
        import audios from '../assets/Tornado_Siren_II-Delilah-747233690.mp3';
        import plane from '../assets/airplane-landing_daniel_simion.mp3'; 
        
        import Moon from '../assets/Moon.jpg'; 
        
        
        // import InputSlider from './InputSlider';

        // Import the image Files here 

        // import cathedral from '../assets/Cathedral.jpg'; 
        import Harbour from '../assets/Harbour.jpg'; 


        const audioFiles = [
          
          {
          title: "first song", 
          label: "music",
          image: "https://images.unsplash.com/photo-1680082286331-4473a0801b0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
          file: audios

            
          },
          
          {
            title: "second song", 
            label: "music", 
            image: "https://images.unsplash.com/photo-1680004661457-772c03735a30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            file: plane
            
            
          }
          
        ];


        // Add in the Audio Player Functions here 






        function MinistryMaterial({audios, plane}) {
          
          
          
          
          
          
          const progressBarRef = useRef(); 
                    
              const playAnimationRef = useRef();
              
              const audioRef = useRef();
              
              const [index, setIndex] = useState(0);
              
              const [audio, setAudio] = useState(new Audio(audioFiles[index].file));
              
              // Add in the time state variables here 
              
              
              const [trackTitle, setTrackTitle] = useState(""); 
              
              
              const [time, setTime] = useState(0); 
              
              const [duration, setDuration] = useState(0); 
              
              const [currentWidth, setCurrentWidth] = useState(0); 
              
              
              const [filled, setFilled] = useState(0);
              const [isRunning, setIsRunning] = useState(false);
              
              // Bob 
              const [lineClicked, setLineClicked] = useState(false); 
              
              
              
              
              const [timeProgress, setTimeProgress] = useState(0); 
              
              const [playing, setPlaying] = useState(false); 
              
              const [clicked, setClicked] = useState(false); 
              
              
              const [isLooped, setisLooped] = useState(false); 
              
              
              const [percentage, setPercentage] = useState(0);
              
              const [metadata, setMetadata] = useState({});
              
              const [volume, setVolume] = useState(60); 
                    
              
              
              const [muteVolume, setMuteVolume] = useState(false);
                
                // ----BING references-------  
                const volumeSliderRef = useRef();

                const toggleClicked = () => {
                  
                  setClicked(true); 
                  

                  
                  
                }
              
              // This does not appear to be working of firing 
              const updateTime = () => {
                  
                  // Find out what currentTime is and what to use instead 
                  setTimeProgress((audio.currentTime / audio.duration) * 100);
                  
                  console.log(audioRef.currentTime); 
                  console.log("Is this firing?")
              }
              
              
              // Add in the volume functions here 
              const increaseVolume = () => {
                
                // Add in the functionality to increase the volume here 
                console.log("increase Volume "); 
                
                audioRef.current.volume += 1; 
                const increasedVolume = audioRef.current.volume; 
                
                setVolume(increasedVolume);
                
              }
              
              
              const decreaseVolume = () => {
                
                console.log("decrease volume ");
                audioRef.current.volume -= 1; 
                const decreasedVolume = audioRef.current.volume; 
                
                setVolume(decreasedVolume);
                
                // console.log(volume); 
                
                
                
              }
              
              const clickedPlay = () => {
              
              setLineClicked(true); 
              
              if(!lineClicked){
                
                
                togglePlayPause(); 
              }
              
              
              }
              
              // Create the Track index functions here 
              const playCurrent = () => {

                // Add in the 
                // const newIndex = (index + 1) % audioFiles.length;
                
                const newIndex = (1); 
                
                
                // Update the index state
                  setIndex(newIndex);
                
                const newAudio = new Audio(audioFiles[index].file); 
                setAudio(newAudio);
                clickedPlay(); 

              }
              
              
              
              
              
              
              // ----BING Volume Functions -----------
              
              // BING SCROLLING FUNCTION 
              const handleClick = (event) => {
                // Get the audio element from the prop
                const audio = audioRef.current;
            
                // Get the progress bar element from the ref
                const progressBar = progressBarRef.current;
            
                // Get the bounding rectangle of the progress bar
                const rect = progressBar.getBoundingClientRect();
            
                // Get the x coordinate of the click relative to the progress bar
                const x = event.clientX - rect.left;
            
                // Get the width of the progress bar
                const width = progressBar.offsetWidth;
            
                // Calculate the percentage of the click position
                const percentage = (x / width) * 100;
            
                // Get the duration of the audio element
                const duration = audio.duration;
            
                // Calculate the new current time based on the percentage and duration
                const newTime = (percentage / 100) * duration;
            
                // Set the current time of the audio element to the new time
                audio.currentTime = newTime;

                
                
                console.log("Clicked"); 
                
                // Experimental 
                setTime(audio); 
                setFilled(audio); 
                
                
              };
              
              
              useEffect(() => {
                  
                setFilled(currentWidth)
                
                
                
              }, [currentWidth])
              
              
              
              useEffect(() => {
                
                
                console.log('is this working ');
                
                setFilled(timeProgress); 

                
              },[ timeProgress])
              
              
              
              
              
              // BING AUDIO FUNCTIONS 
              
              // Put this in a useEffect hook here 
              useEffect(() => {
                // Get the audio element from the prop
                const audio = audioRef.current;
            
                // Define a function to handle the volumechange event
                const handleVolumeChange = () => {
                  // Get the volume from the audio element
                  const volume = audio.volume;
            
                  // Set the volume state with the value
                  setVolume(volume);
                };
            
                // Add an event listener for the volumechange event
                // audio.addEventListener('volumechange', handleVolumeChange);
            
                // Remove the event listener on cleanup
                return () => {
                  // audio.removeEventListener('volumechange', handleVolumeChange);
                };
                // Add in the needed variabled here 
              }, []);
              
        
              
              
              // This animates the progress bar 
              const repeat = useCallback(() => {
                const currentTime = audioRef.current.currentTime;
                setTimeProgress(currentTime);
                progressBarRef.current.value = currentTime;
                progressBarRef.current.style.setProperty(
                
                // Replace this with another variable that dictates the width of the progress bar 
                  '--range-progress',
                  `${(progressBarRef.current.value / duration) * 100}%`
                );
            
                playAnimationRef.current = requestAnimationFrame(repeat);
              }, [audioRef, duration, progressBarRef, setTimeProgress]);
            
            
            // For animation of Progress Bar 
              useEffect(() => {
                if (playing) {
                  audioRef.current.play();
                  playAnimationRef.current = requestAnimationFrame(repeat);
                } else {
                  audioRef.current.pause();
                  cancelAnimationFrame(playAnimationRef.current);
                }
              }, [playing, audioRef, repeat]);
              
              // This is not needed !!!!!!!!!
              useEffect(() => {


                return () =>{
                  
                  audio.removeEventListener('timeupdate', updateTime); 
                }
            // This is not being changed 
            }, [time]);
            
              // This loads in the length in seconds of a song 
            const onLoadedMetadata = () => {
              
              const seconds = audioRef.current.duration;
              progressBarRef.current.max = seconds;
              console.log(audioRef.current.duration);
              
              setDuration(seconds);
            };
              
              // This is supposed to update the width of the progress bar 
              
              
              // Removing the logic here does not make a difference 
              const handleProgressChange = (e) => {
                

                  // This is not being logged out 
                  console.log(progressBarRef.current.value); 
                  
                  audioRef.current.currentTime = progressBarRef.current.value;
                  
                  
                  setCurrentWidth(progressBarRef.current.value);


                  
              }
              
              const togglePlayPause = () => {
                // Check if the audio is playing or not
                const isPlaying = !audioRef.current.paused;
                
                console.log("Toggle Play");
                setClicked(true); 
                
                
                // If it is playing, pause it
                if (isPlaying) {
                  audioRef.current.pause();
                } else {
                  // If it is not playing, play it
                  audioRef.current.play();
                }
                setPlaying(!playing); 
                
              };
              
              // Add in the time formatter here 
              const formatTime = (time) => {
                if (time && !isNaN(time)) {
                  const minutes = Math.floor(time / 60);
                  const formatMinutes =
                    minutes < 10 ? `0${minutes}` : `${minutes}`;
                  const seconds = Math.floor(time % 60);
                  const formatSeconds =
                    seconds < 10 ? `0${seconds}` : `${seconds}`;
                  return `${formatMinutes}:${formatSeconds}`;
                }
                return '00:00';
              };
              
              
              
              
              // Add in the function here to unpause the song 
              const unPause = () => {
                
                console.log("unpause"); 
                
                togglePlayPause();
                togglePlayPause(); 
                
                
              }

              
              const nextAudio = () => {
                
                
                console.log("Why is there no autoplay");
                  
                  if(!isLooped){
                    const newIndex = (index + 1) % audioFiles.length;
                
                // Update the index state
                  setIndex(newIndex);
                
                const newAudio = new Audio(audioFiles[index].file); 
                setAudio(newAudio);
                    
                  }
                  else{
                    
                    const newIndex = (index + 2) % audioFiles.length;
                
                    
                setIndex(newIndex);
                
                const newAudio = new Audio(audioFiles[index].file); 
                setAudio(newAudio);
                
                audio.loop = true; 
                // timeReset(); 
                togglePlayPause(); 
                
                  }
                
                
              }
              
              
              
              const timeReset = () => {
                
                console.log("is this working"); 

                audioRef.current.currentTime -= 15000; 
                

              }
              
              

              const previousAudio = () => {
                
                audioRef.current.pause(); 
                
                const newIndex = (index - 1 + audioFiles.length) % audioFiles.length; 
                    
                setIndex(newIndex); 
                
                const newAudio = new Audio(audioFiles[index].file); 
                setAudio(newAudio);
                
              }
              
              
              const skipForward = () => {
                audioRef.current.currentTime += 15;
              };
              
              const skipBackward = () => {
                audioRef.current.currentTime -= 15;
              };
              
          
          
          return (
            <div className={M.mainContainer} >
            
            <div className={M.contentContainer}>
              
              {/* Add in the hero container here  */}
              <div className={M.heroContainer}>
              <div className={M.heroImage}>
    
    <div className={M.heroTextContainer}>
    
    <div className={M.heroText}>
      Hero Text 
      
      
    </div>
    </div>
    
    <img className={M.heroImageScr}  src={Moon}>
      
      
    </img>
      
    </div>
                
              </div>
              
              {/* Add in the Track list container here  */}
              <div onClick={playCurrent}  className={M.trackListContainer}>

                
              {/* Add in the first track container here  */}
              <div className={M.trackItemContainer}>
              
              {/* Add in the title container here  */}
              <div className={M.titleContainer}>

              <div className={M.trackItemTitle}>
                
              
              {trackTitle}
              Track <span className={M.spacerSpan} >Title</span> 
                <div className={M.trackSpacer}></div>
              
              <div className={M.trackItemDurationContainer}>
                
                
                <span className={M.trackDuration} >42:26</span>
                  
                </div>
                
              </div>
             
              
                
                
              </div>
              
              {/* Add in the duration container here  */}
              
                
                
              {/* Add in the Author container here  */}
              <div className={M.trackAuthorContainer}>
              
              <div className={M.trackAuthor}>
                Pastor Matt Store 
                
                
              </div>
                
              </div>
                
                
                
              </div>
              <div className={M.trackItemContainer}>
              
              {/* Add in the title container here  */}
              <div className={M.titleContainer}>

              <div className={M.trackItemTitle}>
              
              
              
              {trackTitle}
              Track <span className={M.spacerSpan} >Title</span> 
                <div className={M.trackSpacer}></div>
              
              <div className={M.trackItemDurationContainer}>
                
                
                <span className={M.trackDuration} >42:26</span>
                  
                </div>
                
              </div>
             
              
                
                
              </div>
              
              {/* Add in the duration container here  */}
              
                
                
              {/* Add in the Author container here  */}
              <div className={M.trackAuthorContainer}>
              
              <div className={M.trackAuthor}>
                Pastor Matt Store 
                
                
              </div>
                
              </div>
                
                
                
              </div>
              <div className={M.trackItemContainer}>
              
              {/* Add in the title container here  */}
              <div className={M.titleContainer}>

              <div className={M.trackItemTitle}>
              
              
              
              {trackTitle}
              Track <span className={M.spacerSpan} >Title</span> 
                <div className={M.trackSpacer}></div>
              
              <div className={M.trackItemDurationContainer}>
                
                
                <span className={M.trackDuration} >42:26</span>
                  
                </div>
                
              </div>
             
              
                
                
              </div>
              
              {/* Add in the duration container here  */}
              
                
                
              {/* Add in the Author container here  */}
              <div className={M.trackAuthorContainer}>
              
              <div className={M.trackAuthor}>
                Pastor Matt Store 
                
                
              </div>
                
              </div>
                
                
                
              </div>
              <div className={M.trackItemContainer}>
              
              {/* Add in the title container here  */}
              <div className={M.titleContainer}>

              <div className={M.trackItemTitle}>
              
              
              
              {trackTitle}
              Track <span className={M.spacerSpan} >Title</span> 
                <div className={M.trackSpacer}></div>
              
              <div className={M.trackItemDurationContainer}>
                
                
                <span className={M.trackDuration} >42:26</span>
                  
                </div>
                
              </div>
             
              
                
                
              </div>
              

              <div className={M.trackAuthorContainer}>
              
              <div className={M.trackAuthor}>
                Pastor Matt Store 
                
                
              </div>
                
              </div>
                
                
                
              </div>
              <div className={M.trackItemContainer}>
              
              {/* Add in the title container here  */}
              <div className={M.titleContainer}>

              <div className={M.trackItemTitle}>
              
              
              
              {trackTitle}
              Track <span className={M.spacerSpan} >Title</span> 
                <div className={M.trackSpacer}></div>
              
              <div className={M.trackItemDurationContainer}>
                
                
                <span className={M.trackDuration} >42:26</span>
                  
                </div>
                
              </div>
             
              
                
                
              </div>
              

              
              <div className={M.trackAuthorContainer}>
              
              <div className={M.trackAuthor}>
                Pastor Matt Store 
                
                
              </div>
                
              </div>
                
                
                
              </div>
              <div className={M.trackItemContainer}>
              

              <div className={M.titleContainer}>

              <div className={M.trackItemTitle}>
              
              
              
              {trackTitle}
              Track <span className={M.spacerSpan} >Title</span> 
                <div className={M.trackSpacer}></div>
              
              <div className={M.trackItemDurationContainer}>
                
                
                <span className={M.trackDuration} >42:26</span>
                  
                </div>
                
              </div>
             
              
                
                
              </div>
              

              
              <div className={M.trackAuthorContainer}>
              
              <div className={M.trackAuthor}>
                Pastor Matt Store 
                
                
              </div>
                
              </div>
                
                
                
              </div>
                
              </div>
              
              
              <div className={M.audioPlayerContainer}>
                
              
            
                
                <section className={M.trackSectionContainer}>
                  
                  {/* Add in the first track container here  */}
{/* TRACK CONTAINER */}







<div className={M.trackContainer}>

        <div className={M.progressContainer}>
          
          
        <div className={M.trackContainer}>
          
        </div>


        <input className={M.trackProgress}  type="range" ref={progressBarRef} defaultValue="0" onClick={handleClick}  onChange={event => { { handleProgressChange; } }} />

          <div className={M.userControlsContainer}>
          
              
              <div onClick={previousAudio}  className={M.previousTrackContainer}>
              <div onClick={previousAudio}  className={M.previousTrack}>
              <FontAwesomeIcon  icon={faBackwardStep}/>
              </div>
              </div>
              
              <div className={M.playButtonContainer}>
                
                  
                <div onClick={togglePlayPause} className={M.playButtonContainer}>
              
              <audio onEnded={nextAudio} ref={audioRef} src={audioFiles[index].file} onLoadedMetadata={onLoadedMetadata}  />
              {  !playing ?  <FontAwesomeIcon  icon={faPlay}/> : <FontAwesomeIcon icon={faPause}/> }
              
              
              
              </div>
                
              </div>
              
              
              
              
              <div onClick={nextAudio}  className={M.nextTrackContainer}>
              <div onClick={nextAudio}  className={M.nextTrack}>
              <FontAwesomeIcon  icon={faForwardStep}/>
              </div>
              </div>
              
              
              
            
          </div>
          <div className={M.trackLengthContainer}>

        {/* Add in the track length here  */}
        <div className={M.trackLength}>
                    
        </div>
          
        </div>
        <div className={M.authorContainer}>


        <div className={M.trackAuthor}>
          
        </div>

        </div>


        {/* Progress container  */}
        </div>

        {/* track section container  */}
        </div>

            
                </section>
                
              {/* Audio Player container  */}
              </div>
              
              <div className={M.footerContainer}>
              
              
              </div>
              
            </div>
            
            </div>
          );
          
        }

        export default MinistryMaterial
