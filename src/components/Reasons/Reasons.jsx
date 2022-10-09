import React from 'react'
import './Reasons.css'


import image1 from '../../assets/TruckImg/container.png'
import image2 from '../../assets/TruckImg/ship.png'
import image3 from '../../assets/TruckImg/truck.png'
import image4 from '../../assets/TruckImg/van.png'

import nb from '../../assets/nb.png'

import tick from '../../assets/TruckImg/tick.png'

const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>

        <div className="left-r">
          <img src={image1} />
          <img src={image2} />
          <img src={image3} />
          <img src={image4} />
         
        </div>


        <div className="right-r">
              <span>some reasons</span>
              <div> 
                <span className="stroke-text">why</span>
                <span> choose us?</span>
              </div>    

            <div className="details-r">
              <div>
                <img src={tick}  /><span>Over 14+ Expert Drivers </span>
              </div>
              <div>
                <img src={tick}  /><span>Fast and Quality</span>
              </div>
              <div>
                <img src={tick}  /><span>First Time get 20% discount</span>
              </div>
              <div>
                <img src={tick}  /><span>Reliable Partner</span>
              </div>
            </div>

            <span style={{color: 'var(--gray)',
                  fontWeight: 'normal',
                   }} >
                    our partners
            </span>

            <div className="partners">
              <img src={nb}  />
              <img src={nb}  />
              <img src={nb}  />
            
            </div>
        </div>
    </div>
  )
}

export default Reasons