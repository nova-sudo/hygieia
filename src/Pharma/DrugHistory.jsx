import React, { useState } from 'react';
import PhBackground from './PHBackground';

const DrugHistory = () => {
  // Example drug history data
  const [drugHistory, setDrugHistory] = useState([
    { id: 1, userName: 'John Doe', drugName: 'Medication A', dateSent: '2024-04-01' },
    { id: 2, userName: 'Jane Smith', drugName: 'Medication B', dateSent: '2024-03-30' },
    { id: 3, userName: 'Michael Johnson', drugName: 'Medication C', dateSent: '2024-03-28' },
    // Add more drug history items as needed
  ]);

  return (
    <div className='relative' class="transition-fade">
      <PhBackground />
      <div className="container mx-auto px-4 py-8 font-right relative z-10">
        <h2 className="text-8xl font-bold mb-10">Drug History</h2>
        <div className="rounded-lg text-black bg-white  shadow-md ">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-200 px-4 py-2">ID</th>
                <th className="border border-gray-200 px-4 py-2">User Name</th>
                <th className="border border-gray-200 px-4 py-2">Drug Name</th>
                <th className="border border-gray-200 px-4 py-2">Date Sent</th>
              </tr>
            </thead>
            <tbody>
              {drugHistory.map(drug => (
                <tr key={drug.id}>
                  <td className="border border-gray-200 px-4 py-2">{drug.id}</td>
                  <td className="border border-gray-200 px-4 py-2">{drug.userName}</td>
                  <td className="border border-gray-200 px-4 py-2">{drug.drugName}</td>
                  <td className="border border-gray-200 px-4 py-2">{drug.dateSent}</td>
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
