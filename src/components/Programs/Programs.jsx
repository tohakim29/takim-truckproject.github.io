import React, {useState} from 'react'
import {GiCarWheel} from 'react-icons/gi'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png';


const Programs = () => {
  
  const [data, setData ] = useState(programsData);
  return (
    <div className='Programs' id='programs'>
        {/*header */}
        <div className="programs-header">
            <span className="stroke-text">Explore our</span>
            <span>Services</span>
            <span className="stroke-text">to be informed</span>
        </div>



        {/*header */}
        <div className="program-categories">
           {data.map( (program)=>{
             return (  
              <div className="category">
                <GiCarWheel/>
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now"><span>Contact Now</span><img src={RightArrow}/></div>
              </div> 
           
             )
          })
        }
        </div>
    </div>
  )
}

export default Programs