import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DocBackground from './DocBackground';

const DoctorMessages = () => {
  const [symptomsData, setSymptomsData] = useState([]);
  const [prescriptions, setPrescriptions] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetchSymptomsData();
  }, []);

  const fetchSymptomsData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/symptoms');
      setSymptomsData(response.data);
    } catch (error) {
      console.error('Error fetching symptom data:', error);
      setErrorMessage('Failed to fetch symptom data. Please try again later.');
    }
  };

  const handlePrescriptionChange = (username, prescription) => {
    setPrescriptions(prevPrescriptions => ({
      ...prevPrescriptions,
      [username]: prescription
    }));
  };

  const savePrescription = async (username) => {
    try {
      setIsLoading(true);
      await axios.post('http://localhost:5000/prescriptions', {
        username,
        prescription: prescriptions[username]
      });
      setIsLoading(false);
    } catch (error) {
      console.error('Error saving prescription:', error);
      setErrorMessage('Failed to save prescription. Please try again later.');
      setIsLoading(false);
    }
  };

  return (
    <div className="relative font-right transition-fade rounded-lg bg-gray-100 min-h-screen">
      <DocBackground />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <h1 className="text-8xl font-bold mb-4">Doctor Messages</h1>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="overflow-x-auto">
          <table className="mt-2 w-full rounded-lg border-collapse text-black  bg-white">
            <thead>
              <tr className=" rounded-lg">
                <th className="px-4 py-2 rounded-lg">Username</th>
                <th className="px-4 py-2 rounded-lg">Sex</th>
                <th className="px-4 py-2 rounded-lg">Age</th>
                <th className="px-4 py-2 rounded-lg">Symptoms</th>
                <th className="px-4 py-2 rounded-lg">Prescription</th>
              </tr>
            </thead>
            <tbody>
              {symptomsData.map(symptom => (
                <tr key={symptom._id} className=" rounded-lg">
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
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      className=" rounded px-2 py-1 w-full"
                      value={prescriptions[symptom.username] || ''}
                      onChange={e => handlePrescriptionChange(symptom.username, e.target.value)}
                    />
                    <button
                      className="mt-2 bg-black hover:bg-white  hover:text-black text-white font-bold py-2 px-4 rounded"
                      onClick={() => savePrescription(symptom.username)}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Saving...' : 'Save'}
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

export default DoctorMessages;
