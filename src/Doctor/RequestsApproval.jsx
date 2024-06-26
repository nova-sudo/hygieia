import React, { useState } from 'react';
import DocBackground from './DocBackground';
import "./DocBackground.css";

const RequestsApproval = () => {
  // Example requests data
  const [requests, setRequests] = useState([
    { id: 1, type: 'Prescription', details: 'Medication A', status: 'Pending' },
    { id: 2, type: 'Appointment', details: '10:00 AM, John Doe', status: 'Pending' },
    { id: 3, type: 'Prescription', details: 'Medication B', status: 'Pending' },
   
  ]);

  const handleApprove = (id) => {
    setRequests(prevRequests => prevRequests.map(request =>
      request.id === id ? { ...request, status: 'Approved' } : request
    ));
  };

  const handleReject = (id) => {
    setRequests(prevRequests => prevRequests.map(request =>
      request.id === id ? { ...request, status: 'Rejected' } : request
    ));
  };

  return (
    <div id="cover" className='relative' class="transition-fade">
      <DocBackground/>
      <div className="container mx-auto px-4 py-8 relative font-right z-10">
        <h2 className="text-8xl font-bold mb-10 ">Requests Approval</h2>
        <div className=" text-black">
          <table className="min-w-full border-collapse  border-gray-200 rounded-lg bg-white">
            <thead>
              <tr>
                <th className=" border-gray-200 px-4 py-2">ID</th>
                <th className=" border-gray-200 px-4 py-2">Type</th>
                <th className=" border-gray-200 px-4 py-2">Details</th>
                <th className=" border-gray-200 px-4 py-2">Status</th>
                <th className=" border-gray-200 px-4 py-2">Actions</th>
              </tr>
            </thead>
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default RequestsApproval;
