import React from "react"
import { useEffect } from 'react';
import { useCallback } from "react";
import {Link} from 'react-router-dom'
import "./UserLanding.css"
import UserBackground from "./userBackground";
import { FaNotesMedical } from "react-icons/fa6";

import { CgProfile } from "react-icons/cg";
import { PiShieldCheckeredFill } from "react-icons/pi";
import { MdHistoryEdu } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { PiUsersFourBold } from "react-icons/pi";



function UserLanding() {
          
    
    return (
               
               
               
            <div id="cover">
                  <UserBackground/>
                    
                       
                    
                                 
                        <h1 className=" text-9xl font-bold font-right text-header " id="userHYGIEIA">HYGIEIA</h1>
                        <PiUsersFourBold id="iL1"/>
                        
                        <nav class="menu">
   <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
   <label class="menu-open-button" for="menu-open">
    <span class="lines line-1"></span>
    <span class="lines line-2"></span>
    <span class="lines line-3"></span>
  </label>
    
   <Link  class="menu-item blackx"> </Link>
   <Link to="/UserCRUD" class="menu-item black"> < CgProfile className="text-5xl translate-x-4 translate-y-4" class="logoz" /></Link>

   <Link to="/UserSymCheck" class="menu-item black"> < PiShieldCheckeredFill className="text-5xl translate-x-4 translate-y-4" class="logoz" /></Link>
   <Link to="/UserOrderHist" class="menu-item black"> <MdHistoryEdu className="text-5xl translate-x-4 translate-y-4" class="logoz"/></Link>
   <Link to="/UserSymHist" class="menu-item black"> <LuHistory className="text-5xl translate-x-4 translate-y-4" class="logoz"/> </Link>
   <Link  class="menu-item blackx">  </Link>

</nav>
                         
                        



                  

            </div>
              
               
               
               
      
      
          
     
      
      
      
        
        
     
    );
}

export default UserLanding


