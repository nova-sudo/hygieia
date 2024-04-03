import React from 'react';
import "./DocBackground.css"
import DocBackground from './DocBackground';

const Appointments = () => {
  // Example appointments data
  const appointments = [
    { time: '09:00 AM', patient: 'John Doe' },
    { time: '10:00 AM', patient: 'Jane Smith' },
    { time: '11:00 AM', patient: 'Michael Johnson' },
    // Add more appointments as needed
  ];

  return (

    <div id="cover" className='relative'>  <DocBackground id="docbG "/>
    
    <div className="container relative z-10 mx-auto px-4 font-right py-8">
      <h2 className="text-2xl font-bold mb-4">Doctor's Appointments</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 rounded-lg">
          <thead>
            <tr>
              <th className="border border-gray-200 px-4 py-2">Time</th>
              <th className="border border-gray-200 px-4 py-2">Patient</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(appointment => (
              <tr key={appointment.time}>
                <td className="border border-gray-200 px-4 py-2">{appointment.time}</td>
                <td className="border border-gray-200 px-4 py-2">{appointment.patient}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div></div>
  
  );
};

export default Appointments;
