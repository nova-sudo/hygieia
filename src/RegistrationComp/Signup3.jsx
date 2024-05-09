import React, { useState } from 'react';
import Background from '../Background';
import {Link} from "react-router-dom"
import "./Signup1.css"
import { VscArrowRight } from "react-icons/vsc";
function SignUp3() {

  return (
          

    <div classname="" class="transition-fade">
        
    <Background/>
    <div id="placeholder"> <label
      htmlFor="file"
      className=" font-right w-[300px] h-[200px] rounded-xl border ml-16 mt-20 cursor-pointer flex flex-col justify-center items-center p-5 text-black text-xl font-semibold"
    >
      <input type="file" name="file" id="file" className="hidden" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-20 h-20"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
      </svg>
      <p>Select your files for doctor's review</p>  
      

    </label>
            <Link to="/paymentpage"><VscArrowRight className="  font-right text-white bg-black animate-pulse text-xl" id="rectangleS3"/></Link>
 
    </div>

</div>
  );
}

export default SignUp3;
