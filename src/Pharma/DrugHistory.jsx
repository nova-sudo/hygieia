import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhBackground from './PHBackground';

const DrugHistory = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const fetchPrescriptions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/prescriptions');
    
      const availablePrescriptions = response.data.filter(prescription => prescription.orderAvailable);
      setPrescriptions(availablePrescriptions);
    } catch (error) {
      console.error('Error fetching prescriptions:', error);
    }
  };

  return (
    <div className='relative' class="transition-fade">
      <PhBackground />
      <div className="container mx-auto px-4 py-8 font-right relative z-10">
        <h1 className="text-8xl pb-20 font-bold mb-4">Drug History</h1>
        <div className="overflow-x-auto rounded-lg bg-white shadow-md">
          <table className="table-auto w-full text-black">
            <thead>
              <tr className="bg-gray-200 ">
                <th className="px-4 py-2">Prescription</th>
                <th className="px-4 py-2">Created At</th>
                <th className="px-4 py-2">Associated User</th>
              </tr>
            </thead>
            <tbody>
              {prescriptions.map((prescription, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{prescription.prescription}</td>
                  <td className="border px-4 py-2">{new Date(prescription.createdAt).toLocaleString()}</td>
                  <td className="border px-4 py-2">{prescription.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DrugHistory;
