import React, { useState } from "react";
import axios from 'axios';
import UserBackground from "./userBackground";

function UserOrderHist() {
  const [username, setUsername] = useState('');
  const [prescriptions, setPrescriptions] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/prescriptions/${username}`);
      setPrescriptions(response.data);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Failed to fetch prescriptions. Please try again later.');
    }
  };

  return (
    <div id="cover" className="relative transition-fade">
      <UserBackground id="userbG" />
      <div className="container mx-auto px-4 py-8 relative z-10 font-right">
        <h1 className="text-8xl pb-10 font-bold mb-4">User Prescription History</h1>
        <form onSubmit={handleSubmit} className="mb-4 pb-10">
          <label htmlFor="username" className="block text-4xl  mb-2 ">Enter Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="border text-black border-gray-300 rounded px-3 py-1"
            required
          />
          <button type="submit" className="ml-2 bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded">
            Fetch Prescriptions
          </button>
        </form>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div>
          <h2 className="text-4xl font-bold mb-2">Prescriptions:</h2>
          <table className="rounded-lg overflow-hidden text-black w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4">Prescription</th>
                <th className="py-2 px-4">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {prescriptions.map((prescription, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="py-2 px-4">{prescription.prescription}</td>
                  <td className="py-2 px-4">{new Date(prescription.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserOrderHist;
