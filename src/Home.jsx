import React from "react"
import { useEffect } from 'react';
import { useCallback } from "react";
import {Link} from 'react-router-dom'
import './Home.css';
import Background from './Background'
import { FaNotesMedical } from "react-icons/fa6";
import { TiMediaFastForward } from "react-icons/ti";






function Home() {

  
    return (
               
               
               
            <div id="cover" class="transition-fade">
                  <Background/>
                    

                    
                                 
                        <h1 className=" text-9xl font-bold font-right text-header " id="HYGIEIA">HYGIEIA</h1>
                        <FaNotesMedical id="i1"/>
                         <Link to="/signup" className="font-bold font-right text-2xl px-3 bg-white text-black rounded-2xl " id="Hsignup">SignUp</Link>

                        <Link to="/choice"><TiMediaFastForward className="  rounded-full pl-2 pb-2 mt-5 text-9xl font-right bg-white text-black" id="rectangleB"/></Link>  

                  

            </div>
              
               
               
               
      
      
          
     
      
      
      
        
        
     
    );
}

export default Home


