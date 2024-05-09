import React from "react"
import { useEffect } from 'react';
import { useCallback } from "react";
import {Link} from 'react-router-dom'
import "./DocLanding.css"
import DocBackground from "./DocBackground";
import { FaNotesMedical } from "react-icons/fa6";

import { CgProfile } from "react-icons/cg";
import { PiShieldCheckeredFill } from "react-icons/pi";
import { MdHistoryEdu } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { PiUsersFourBold } from "react-icons/pi";
import { FaUserDoctor } from "react-icons/fa6";
import { PiArticleNyTimesBold } from "react-icons/pi";
import { TbMessage2Heart } from "react-icons/tb";
import { FaCodePullRequest } from "react-icons/fa6";


function DocLanding() {
          
    
    return (
               
               
               
            <div id="cover" class="transition-fade">
                  <DocBackground/>
                    
                       
                    
                                 
                        <h1 className=" text-9xl font-bold font-right text-header " id="userHYGIEIA">HYGIEIA</h1>
                        <FaUserDoctor id="iL2"/>
                        
                        <nav class="menu">
   <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
   <label class="menu-open-button" for="menu-open">
    <span class="lines line-1"></span>
    <span class="lines line-2"></span>
    <span class="lines line-3"></span>
  </label>
    
   <Link  class="menu-item blackx"> </Link>
   <Link to="/docCRUD" class="menu-item black"> <CgProfile className=" text-5xl translate-x-4 translate-y-4" class="logoz"/> </Link>
   <Link to="/appointments" class="menu-item black"> < PiArticleNyTimesBold className="text-5xl translate-x-4 translate-y-4" class="logoz" /></Link>
   <Link to="/DoctorMessages" class="menu-item black"> <TbMessage2Heart className="text-5xl translate-x-1 translate-y-2" class="logoz"/></Link>
   <Link to="/RequestsApproval" class="menu-item black"> <FaCodePullRequest className="text-5xl  translate-x-2 translate-y-1" class="logoz"/> </Link>
   <Link  class="menu-item blackx">  </Link>

</nav>
                         
                        



                  

            </div>
              
               
               
               
      
      
          
     
      
      
      
        
        
     
    );
}

export default DocLanding


