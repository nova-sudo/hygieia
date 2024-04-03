import React from "react"
import { useEffect } from 'react';
import { useCallback } from "react";
import {Link} from 'react-router-dom'
import "./PhLanding.css"
import PhBackground from "./PHBackground";

import { CgProfile } from "react-icons/cg";


import { PiPillFill } from "react-icons/pi";

import { FaPrescriptionBottleAlt } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { MdOutlineInventory } from "react-icons/md";


function PhLanding() {
          
    
    return (
               
               
               
            <div id="cover">
                  <PhBackground/>
                    
                       
                    
                                 
                        <h1 className=" text-9xl font-bold font-right text-header " id="userHYGIEIA">HYGIEIA</h1>
                        <PiPillFill id="iL3"/>
                        
                        <nav class="menu">
   <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
   <label class="menu-open-button" for="menu-open">
    <span class="lines line-1"></span>
    <span class="lines line-2"></span>
    <span class="lines line-3"></span>
  </label>
    
   <Link  class="menu-item blackx"> </Link>
   <Link to="/PhCRUD" class="menu-item black"> <CgProfile className=" text-5xl translate-x-4 translate-y-4" class="logoz"/> </Link>
   <Link to="/DrugPrescriptions" class="menu-item black"> < FaPrescriptionBottleAlt className="text-5xl translate-x-4 translate-y-4" class="logoz" /></Link>
   <Link to="/drugHistory" class="menu-item black"> <MdWorkHistory className="text-5xl translate-x-4 translate-y-4" class="logoz"/></Link>
   <Link to="/PharmacyInventory" class="menu-item black"> <MdOutlineInventory className="text-5xl translate-x-4 translate-y-4" class="logoz"/> </Link>
   <Link  class="menu-item blackx">  </Link>

</nav>
                         
                        



                  

            </div>
              
               
               
               
      
      
          
     
      
      
      
        
        
     
    );
}

export default PhLanding


