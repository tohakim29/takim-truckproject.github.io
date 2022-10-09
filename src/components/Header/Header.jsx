import React, {useState} from 'react'
import {Link} from 'react-scroll';
import './Header.css'


import Bars from '../../assets/bars.png'



const Header = () => {


const mobile = window.innerWidth<=844 ? true : false;
const [menuOpened, setMenuOpened] = useState(false)

  return (
    <div className="header">
      
       <div className='header-logo' >R</div>
   
        {(menuOpened===false && mobile===true) ?  (
          <div onClick={()=>{setMenuOpened(true)}}  className='header-hamburger'>
            <img src={Bars} alt="Bars" style={{width:"1.5rem",height:'1.5rem'}}/>
          </div>
        ) : ( 
                <ul className = 'header-menu' >
                  <li> <Link onClick={()=>{setMenuOpened(false)}}  to='home' spy={true} smooth={true} activeClass='active'>  home</Link></li>
                  <li> <Link onClick={()=>{setMenuOpened(false)}}  to='programs' spy={true} smooth={true}>programs</Link>  </li>
                  <li> <Link onClick={()=>{setMenuOpened(false)}}  to='reasons' spy={true} smooth={true}>Why us</Link>  </li>
                  <li> <Link onClick={()=>{setMenuOpened(false)}}  to='plans' spy={true} smooth={true}> Plans</Link> </li>
                  <li> <Link onClick={()=>{setMenuOpened(false)}}  to='testimonials' spy={true} smooth={true} > Testimonials</Link> </li>
                  <li> <Link onClick={()=>{setMenuOpened(false)}}  to='join-us' spy={true} smooth={true} > Contac Us</Link> </li>
                </ul>
        )}
       
    </div>
  )
}

export default Header