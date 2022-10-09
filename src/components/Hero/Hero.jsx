import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import NumberCounter from  "number-counter";

import {motion} from 'framer-motion'


import Heart from '../../assets/TruckImg/wheel.png'
import hero_image from '../../assets/TruckImg/hero-image1.png'
//import hero_image_back from '../../assets/TruckImg/hero-image-back.png'
import calories from '../../assets/TruckImg/speedometer.png'



const Hero = () => {

const transition = {type: 'spring', duration: 3}
const mobile   = window.innerWidth <=844 ? true  : false;

  return (
    <div className="hero" id="home">

      <div className="blur blur-hero"></div>
      
      <div className="left-h">
              <Header/> 
              <div className="the-best-ad">
                 <motion.div
                  initial= {{left:  mobile ?  "125px" : '159px'  }}
                  whileInView= {{left: '7px'}}
                  transition={{...transition,type:'tween'}}
                 ></motion.div>
                <span>the best service for you</span>
              </div>

              <div className="hero-text">
                <div>
                  <span className='stroke-text'> Assign Your </span>
                  <span>destination</span>
                </div>
                <div>                
                  <span>A & B</span>
                  
                </div>
                <div>  
                  <span>We are offering smooth delievery arround the world</span>
                </div>
              </div>

              {/* figures*/}
              <div className="figures">
                <div>
                      <span>
                        <NumberCounter end={140878} start={140767} delay='4' preFix="+" />
                      </span>
                      <span>miles</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={1125} start={985} delay='4' preFix="+" />
                    </span>
                    <span>deliveries</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={100} start={77} delay='4' preFix="+" />
                    </span>
                    <span>connected drivers</span>
                </div>
              </div>


              <div className="hero-buttons">
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>
              </div>
      </div>


      
      <div className="right-h">
        <button className='btn'>Join Now</button>
        <motion.div className="heart-rate"
               initial= {{right: '-1rem'}}
               whileInView= {{right: '3rem'}}
               transition={transition}
        >
                <img src={Heart} alt='' />
          <span>Miles </span>
          <span>1000...</span>
        </motion.div>

        <motion.img src={hero_image} className='hero-image'
            initial= {{right: '5rem'}}
            whileInView= {{right: '25rem'}}
            transition={transition}
        />
        
      {/* 
        <motion.img  src={hero_image_back} className='hero-image-back'
          initial= {{right: '61rem'}}
          whileInView= {{right: '50rem'}}
          transition={transition}
        />
      */ }   

        <motion.div className="calories"
            initial= {{right: '27rem'}}
            whileInView= {{right: '18rem'}}
            transition={transition}
        >
          <img src={calories} alt='' />
          <div>
                <span>Speed</span>
                <span>100Mph</span>
          </div>
          
        </motion.div>

      </div>





    </div>
  )
}

export default Hero