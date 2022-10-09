import React from 'react'
import './PlansCard.css'
import whiteTick from '../../assets/whiteTick.png'

import {plansData} from '../../data/plansData.js'

const PlansCard = () => {
  return (
   <div className="plans-container" id='plans'>
        <div className="blur plans-blur-1"></div>
        <div className="programs-header" style={{gap:'2rem'}}>
            <span className='stroke-text'>Ready to start</span>
            <span>Your Move</span>
            <span  className='stroke-text'>Now Withus</span>
        </div>


     
        <div className="plans">
            {plansData.map( (plan,i)=>{
                return(
                    <>
                    <div className="plan" key={i}  >
                        {plan.icon}
                        <span>{plan.name} </span>
                        <span>{plan.price} </span>

                        <div className="features">
                           {plan.features.map( (feature, i)=>(
                                    <div className="feature">
                                        <img src={whiteTick}  alt='' />
                                        <span key={i}>{feature}</span>
                                    </div>
                                 ) )}
                        </div>


                        <div>
                            <span>See more benefits - </span>
                        </div>
                        <button className='btn'>Join Now</button>
                    </div>

                  
                    </>
                )
            })}
        </div>

   </div>
  )
}

export default PlansCard