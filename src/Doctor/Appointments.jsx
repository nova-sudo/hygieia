import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DocBackground from './DocBackground';

const Appointments = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [appointments, setAppointments] = useState([]);

  const handleSetAppointments = async () => {
    setIsLoading(true);
    try {
  
      await axios.post('http://localhost:5000/set-appointments');
      setIsLoading(false);
    
      fetchAppointments();
    } catch (error) {
      console.error('Error setting appointments:', error);
      setErrorMessage('Failed to set appointments. Please try again later.');
      setIsLoading(false);
    }
  };

  const fetchAppointments = async () => {
    try {
    
      const response = await axios.get('http://localhost:5000/appointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      setErrorMessage('Failed to fetch appointments. Please try again later.');
    }
  };

  useEffect(() => {
   
    fetchAppointments();
  }, []); 

  return (
    <div id="cover" className="relative transition-fade">
      <DocBackground id="docbG" />
      <div className="container relative z-10 mx-auto px-4 font-right py-8">
        <h1 className="text-8xl font-bold mb-4">Appointments</h1>
        <button
          className="bg-black mb-20 hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded"
          onClick={handleSetAppointments}
          disabled={isLoading}
        >
          {isLoading ? 'Setting Appointments...' : 'Set Appointments'}
        </button>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <h2 className="text-4xl font-bold mt-4">Appointments List</h2>
        <div className="overflow-x-auto">
          <table className="mt-2 w-full border-collapse border text-black border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(appointment => (
                <tr key={appointment._id} className="bg-white text-black">
                  <td className="px-4 py-2">{appointment.username}</td>
                  <td className="px-4 py-2">{new Date(appointment.date).toLocaleDateString()}</td>
                  <td className="px-4 py-2">{new Date(appointment.time).toLocaleTimeString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
