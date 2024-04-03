import React from "react"
import { useEffect, useState } from 'react';
import { useCallback } from "react";
import {Link} from 'react-router-dom'
import "./UserBackground.css"
import UserBackground from "./userBackground";







function UserSymCheck() {
          
             // this is just for testing the interface, in the next phase we will havve implemented symptome checking  using infermedica's api
             const [symptoms, setSymptoms] = useState({
                fever: false,
                cough: false,
                soreThroat: false,
                difficultyBreathing: false,
              });
            
              const handleCheckboxChange = (e) => {
                const { name, checked } = e.target;
                setSymptoms(prevState => ({
                  ...prevState,
                  [name]: checked,
                }));
              };
            
              const handleSubmit = (e) => {
                e.preventDefault();
                // Here you can add your logic to analyze symptoms and provide recommendations
                console.log(symptoms);
              };
                   
    
    return (
      
            <div id="cover" className="relative">
                  <UserBackground id="userbG" />
                    
                       
                    
                                 
                  <div className="min-h-screen text-black font-right decoration-black relative flex items-center justify-center  z-15 ">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Symptom Checker</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="fever"
                name="fever"
                checked={symptoms.fever}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-black"
              />
              <label htmlFor="fever" className="ml-2">Fever</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="cough"
                name="cough"
                checked={symptoms.cough}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-black"
              />
              <label htmlFor="cough" className="ml-2">Cough</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="soreThroat"
                name="soreThroat"
                checked={symptoms.soreThroat}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-black"
              />
              <label htmlFor="soreThroat" className="ml-2">Sore Throat</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="difficultyBreathing"
                name="difficultyBreathing"
                checked={symptoms.difficultyBreathing}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-black"
              />
              <label htmlFor="difficultyBreathing" className="ml-2">Difficulty Breathing</label>
            </div>
          </div>
          <button type="submit" className="mt-6 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
        </form>
      </div>
    </div>
                        
                        
                         
                        



                  

            </div>
              
               
               
               
      
      
          
     
      
      
      
        
        
     
    );
}

export default UserSymCheck
