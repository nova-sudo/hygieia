import React from "react"
import { useEffect } from 'react';
import { useCallback } from "react";
import {Link} from 'react-router-dom'

import UserBackground from "./userBackground";
import "./UserBackground.css"






function UserOrderHist() {
          
     // Example data of past orders
  const pastOrders = [
    {
      id: 1,
      date: '2023-04-01',
      items: [
        { name: 'Product A', quantity: 2, price: 10 },
        { name: 'Product B', quantity: 1, price: 15 },
      ],
      total: 35,
    },
    {
      id: 2,
      date: '2023-03-25',
      items: [
        { name: 'Product C', quantity: 1, price: 20 },
        { name: 'Product D', quantity: 3, price: 12 },
      ],
      total: 56,
    },
    // Add more past orders as needed
  ];
    
    return (
               
               
               
           
        <div id="cover" className="relative">
        <UserBackground id="userbG" />
        <div className="container mx-auto px-4 py-8 relative z-10 font-right">
            <h1 className="text-5xl mb-10 font-semibold ">Drug Order History </h1>
            <div>
                <table className="min-w-full border-collapse border ">
                    <thead>
                        <tr >
                            <th className="border border-gray-300 px-4 py-2">Order ID</th>
                            <th className="border border-gray-300 px-4 py-2">Date</th>
                            <th className="border border-gray-300 px-4 py-2">Items</th>
                            <th className="border border-gray-300 px-4 py-2">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pastOrders.map(order => (
                            <tr key={order.id}>
                                <td className="border border-gray-300 px-4 py-2">{order.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{order.date}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <ul>
                                        {order.items.map(item => (
                                            <li key={item.name}>
                                                {item.name} ({item.quantity}) - ${item.price}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="border border-gray-300 px-4 py-2">${order.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
              
               
               
               
      
      
          
     
      
      
      
        
        
     
    );
}

export default UserOrderHist
