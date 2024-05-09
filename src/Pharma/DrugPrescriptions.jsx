import React, { useState } from 'react';
import PhBackground from './PHBackground';

const DrugPrescriptions = () => {
  // Example prescription data
  const [prescriptions, setPrescriptions] = useState([
    { id: 1, userName: 'John Doe', drugName: 'Medication A', status: 'Pending' },
    { id: 2, userName: 'Jane Smith', drugName: 'Medication B', status: 'Approved' },
    { id: 3, userName: 'Michael Johnson', drugName: 'Medication C', status: 'No Approval Needed' },
    // Add more prescriptions as needed
  ]);

  const handleOrder = (id) => {
    // Logic to send order
    console.log(`Order sent for prescription with ID ${id}`);
  };

  return (
    <div id="cover" className='relative' class="transition-fade">
      <PhBackground/>
      <div className="container mx-auto px-4 font-right py-8 relative z-10">
        <h2 className="text-8xl font-bold mb-10">Drug Prescriptions</h2>
        <div className=" text-black">
          <table className="min-w-full  border-gray-200 rounded-lg bg-white">
            <thead>
              <tr>
                <th className=" border-gray-200 px-4 py-2">ID</th>
                <th className=" border-gray-200 px-4 py-2">User Name</th>
                <th className=" border-gray-200 px-4 py-2">Drug Name</th>
                <th className=" border-gray-200 px-4 py-2">Status</th>
                <th className=" border-gray-200 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {prescriptions.map(prescription => (
                <tr key={prescription.id}>
                  <td className=" border-gray-200 px-4 py-2">{prescription.id}</td>
                  <td className="border-y border-gray-200 px-4 py-2">{prescription.userName}</td>
                  <td className="border-y border-gray-200 px-4 py-2">{prescription.drugName}</td>
                  <td className="border-y border-gray-200 px-4 py-2">{prescription.status}</td>
                  <td className=" border-y border-gray-200 px-4 py-2">
                    {prescription.status === 'Pending' && (
                      <button onClick={() => handleOrder(prescription.id)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Send Order</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DrugPrescriptions;
