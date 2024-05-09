import React from 'react';
import {Link} from 'react-router-dom'
import './Choice.css';
import ChBackground from "./ChBackground"
import { PiUsersFourBold } from "react-icons/pi";

import { PiPillFill } from "react-icons/pi";
import { LiaUserNurseSolid } from "react-icons/lia";


function Choice() {


  return (

   <div class="transition-fade">
       <ChBackground/>
       <div>             <h1 className=" text-9xl font-bold font-right  bg-white text-black rounded-lg  " id="chHYGIEIA">Hi, you are a  +_+ </h1>

       <div classNaame="bg-white ">    
                        <Link to="/userlanding" ><PiUsersFourBold className=" rounded-lg font-bold font-right text-header bg-white text-black hover:animate-pulse hover:bg-green-300 hover:text-white " id="chuserHYGIEIA"/></Link>
                        

                        <Link to="/doclanding"><LiaUserNurseSolid className=" rounded-lg font-bold font-right text-header bg-white text-black  hover:animate-pulse hover:bg-red-400 hover:text-white" id="chdocHYGIEIA"/></Link>
                       

                        <Link to="/phlanding"><PiPillFill className=" rounded-lg font-bold font-right text-header bg-white text-black  hover:animate-pulse hover:bg-blue-400 hover:text-white" id="chphaHYGIEIA"/></Link></div>
                         </div>
                    
                         {/* put the name change them with logos instead */}
                      

        
   </div>
  
  );
}

export default Choice;
