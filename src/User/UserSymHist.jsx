import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserBackground from './userBackground';

const UserSymHist = () => {
  const [symptomsData, setSymptomsData] = useState([]);

  useEffect(() => {
    // Fetch symptom data from backend
    axios.get('http://localhost:5000/symptoms')
      .then(response => {
        setSymptomsData(response.data); // Assuming the response is an array of symptom objects
      })
      .catch(error => {
        console.error('Error fetching symptom data:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="relative ">
      <UserBackground id="userbG z-0" />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <h1 className="font-right pb-10 font-bold text-8xl mb-4">User Symptoms History</h1>
        <div className="rounded-lg overflow-hidden border border-gray-200 bg-white text-black font-right">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-gray-100">Username</th>
                <th className="px-4 py-2 bg-gray-100">Sex</th>
                <th className="px-4 py-2 bg-gray-100">Age</th>
                <th className="px-4 py-2 bg-gray-100">Symptoms</th>
              </tr>
            </thead>
            <tbody>
              {symptomsData.map(symptom => (
                <tr key={symptom._id.$oid}>
                  <td className="px-4 py-2">{symptom.username}</td>
                  <td className="px-4 py-2">{symptom.symptomData.sex}</td>
                  <td className="px-4 py-2">{symptom.symptomData.age.value} {symptom.symptomData.age.unit}</td>
                  <td className="px-4 py-2">
                    <ul>
                      {symptom.symptomData.evidence.map(evidence => (
                        <li key={evidence.id}>{evidence.id}</li>
                      ))}
                    </ul>
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

export default UserSymHist;
