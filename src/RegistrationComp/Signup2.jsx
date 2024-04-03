import React, { useState } from 'react';
import {Link} from "react-router-dom"
import Background from '../Background';
import "./Signup1.css"
import { VscArrowRight } from "react-icons/vsc";
function SignUp2() {

  return (
          

    <div>
        
    <Background/>
    <div  className=" text-black "    id="placeholder">
       <h1 className=" font-right font-bold text-3xl pb-5 " id="signUp"> Personal Details  </h1>
      <label id="userlabel"> Date of birth</label>
            <input className="px-5 text-xl " type="text"  id="rectangleS4" />
            <label id="emaillabel">Gender </label>
            <input className="px-5 text-xl " type="date"  id="rectangleS1" />
            <label id="passlabel">Location</label>
             <input className="px-5 text-xl" type="text"  id="rectangleS2" />
            
  
             
             <Link to="/signup3"><VscArrowRight className="translate-y-32 font-right text-white bg-black animate-pulse text-xl" id="rectangleS3"/></Link>
           
       
    </div>
</div>
  );
}

export default SignUp2;
