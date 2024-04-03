import React, { useState } from "react";
import { VscArrowRight } from "react-icons/vsc";
import {Link} from "react-router-dom"
import './Signup1.css'
import Background from '../Background'
import '../Background.css'

function Login() {
  
 

  return (
    <div>
        
        <Background/>
        <div  className=" text-black "    id="placeholder">
           <h1 className=" font-right font-bold text-3xl " id="signUp">Log In </h1>
                <label id="userlabel"> Username</label>
                <input className="px-5 text-xl " type="text" name="Username" id="rectangleS1" />
                                    
                <label id="passlabel">Password</label>
                 <input className="px-5 text-xl" type="password" name="password" id="rectangleS2" />
                
                 
                
                 
                 <Link to="/choice"><VscArrowRight className="font-right text-white bg-black animate-pulse text-xl" id="rectangleS3"/></Link>
               
           
        </div>
    </div>
  );
}

export default Login;
