import React, { useRef } from 'react'
import "./Join.css"

import emailjs from 'emailjs-com';



const Join = () => {

const form = useRef()


////////////////////
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_2eg1gr2', 'template_c3bxfwj', form.current, '0-7xqHMlzeusVpg3y')
    .then((result) => {
        console.log(result.text);
       
    }, (error) => {
        console.log(error.text);
    });
};
////////////////////


  return (
    <div className="Join" id="join-us">
            <div className="left-j">
                <hr/>

                    <div >
                        <span className="stroke-text">Ready </span>
                        <span>TO GO </span>
                    </div>
                    <div >
                        <span>YOUR FREIGHT </span>
                        <span className="stroke-text">IS SECURE </span>
                    </div>
            </div>



            <div className="right-j">
             <form ref={form} className='email-container' onSubmit={sendEmail} >
                <input type="email" name="user_email" placeholder='Enter your email adsress'/>
                <button className='btn btn-j'>Contact Now</button>
             </form>
            </div>

    </div>
  )
}

export default Join