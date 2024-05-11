import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhBackground from './PHBackground';

const DrugPrescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const fetchPrescriptions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/prescriptions');
      setPrescriptions(response.data);
    } catch (error) {
      console.error('Error fetching prescriptions:', error);
    }
  };

  const handleToggleOrderAvailability = async (prescriptionId, currentOrderAvailable) => {
    try {
      await axios.put(`http://localhost:5000/prescriptions/${prescriptionId}`, {
        orderAvailable: !currentOrderAvailable 
      });
      // Update the state to reflect the change
      setPrescriptions(prevPrescriptions =>
        prevPrescriptions.map(prescription =>
          prescription._id === prescriptionId ? { ...prescription, orderAvailable: !currentOrderAvailable } : prescription
        )
      );
    } catch (error) {
      console.error('Error toggling order availability:', error);
    }
  };

  const handleSendOrder = async (prescriptionId) => {
    try {
 
      console.log(`Order for prescription ${prescriptionId} sent`);
      // Update the state to reflect that order is on its way
      setPrescriptions(prevPrescriptions =>
        prevPrescriptions.map(prescription =>
          prescription._id === prescriptionId ? { ...prescription, orderStatus: 'Order on its way' } : prescription
        )
      );
    } catch (error) {
      console.error('Error sending order:', error);
    }
  };

  return (
    <div id="cover" className="relative transition-fade">
      <PhBackground />
      <div className="container mx-auto px-4 font-right py-8 relative z-10">
        <h1 className="text-8xl pb-20 font-bold mb-4">Drug Prescriptions</h1>
        <div className="overflow-x-auto rounded-lg bg-white text-black shadow-md">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Prescription</th>
                <th className="px-4 py-2">Created At</th>
                <th className="px-4 py-2">Order Available</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {prescriptions.map((prescription, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{prescription.prescription}</td>
                  <td className="border px-4 py-2">{new Date(prescription.createdAt).toLocaleString()}</td>
                  <td className="border px-4 py-2">
                    {prescription.orderAvailable ? 'Available' : 'Unavailable'}
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleToggleOrderAvailability(prescription._id, prescription.orderAvailable)}
                      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ${
                        prescription.orderAvailable ? '' : 'opacity-50 cursor-not-allowed'
                      }`}
                      disabled={!prescription.orderAvailable}
                    >
                      {prescription.orderAvailable ? 'Toggle Availability' : 'Unavailable'}
                    </button>
                    <button
                      onClick={() => handleSendOrder(prescription._id)}
                      className={`bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mt-2 ${
                        prescription.orderAvailable ? '' : 'opacity-50 cursor-not-allowed'
                      }`}
                      disabled={!prescription.orderAvailable}
                    >
                      {prescription.orderStatus || 'Send Order'}
                    </button>
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
