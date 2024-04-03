import React, { useState } from 'react';
import DocBackground from './DocBackground';
import "./DocBackground.css"
import { FcAcceptDatabase } from "react-icons/fc";



const DoctorMessages = () => {
  // Example messages data
  const [messages, setMessages] = useState([
    { id: 1, userName: 'John Doe', message: 'I have a question about my medication.', doctorResponse: '' },
    { id: 2, userName: 'Jane Smith', message: 'I need to reschedule my appointment.', doctorResponse: '' },
    
  ]);

  const handleResponse = (id, response) => {
    setMessages(prevMessages => prevMessages.map(message =>
      message.id === id ? { ...message, doctorResponse: response } : message
    ));
  };

  return (
     <div id="cover" className='relative'>
      <DocBackground/>
      <div className="container font-right mx-auto px-4 py-8 relative z-10">
      <h2 className="text-2xl font-bold mb-4">User Messages</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 rounded-lg">
          <thead>
            <tr>
              <th className="border border-gray-200 px-4 py-2">ID</th>
              <th className="border border-gray-200 px-4 py-2">User Name</th>
              <th className="border border-gray-200 px-4 py-2">Message</th>
              <th className="border border-gray-200 px-4 py-2">Doctor Response</th>
              <th className="border border-gray-200 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map(message => (
              <tr key={message.id}>
                <td className="border border-gray-200 px-4 py-2">{message.id}</td>
                <td className="border border-gray-200 px-4 py-2">{message.userName}</td>
                <td className="border border-gray-200 px-4 py-2">{message.message}</td>
                <td className="border border-gray-200 px-4 py-2">{message.doctorResponse}</td>
                <td className="border border-gray-200 px-4 py-2">
                  {message.doctorResponse === '' && (
                    <button onClick={() => handleResponse(message.id, 'Your response here')} className=" font-bold py-2 px-4 rounded"><FcAcceptDatabase className='text-xl '/>     </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div></div>

    
  );
};

export default DoctorMessages;
