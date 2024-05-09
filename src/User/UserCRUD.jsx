import React from "react"
import { useEffect } from 'react';
import { useCallback } from "react";
import {Link} from 'react-router-dom'
import "./UserBackground.css"
import UserBackground from "./userBackground";







function UserCRUD() {
          
    
    return (
        <div  id="cover" class="transition-fade">
     <UserBackground id="userbG" />
        <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8 translate-y-28 font-right">
           
            <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <div className="text-center">
                    <img
                        className="mx-auto h-12 w-auto"
                        src="/user-icon.svg"
                        alt="User Icon"
                    />
                    <h2 className="mt-6 text-3xl font-extrabold text-black">
                        User Profile
                    </h2>
                </div>
                <div className="mt-6">
                    <div className="w-full flex justify-between">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <p className="mt-2 text-sm text-gray-900" id="username">
                            JohnDoe
                        </p>
                    </div>
                    <div className="w-full flex justify-between mt-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <p className="mt-2 text-sm text-gray-900" id="email">
                            johndoe@example.com
                        </p>
                    </div>
                    <div className="w-full flex justify-between mt-4">
                        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                            Bio
                        </label>
                        <p className="mt-2 text-sm text-gray-900" id="bio">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris.
                        </p>
                    </div>
                    <div className="mt-6">
                        <button
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                        >
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
               
              
              
               
               
               
      
      
          
     
      
      
      
        
        
     
    );
}

export default UserCRUD
