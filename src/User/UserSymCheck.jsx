import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserBackground from './userBackground';
import "../App.css";

function UserSymCheck() {
  const [symptoms, setSymptoms] = useState([]);
  const [selected, setSelected] = useState([]);
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [ageUnit, setAgeUnit] = useState('year');
  const [diagnoses, setDiagnoses] = useState([]);
  const [diagnosisError, setDiagnosisError] = useState('');
  const [triageResult, setTriageResult] = useState(null);
  const [specialistInfo, setSpecialistInfo] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [username, setUsername] = useState('');

  // Fetch symptoms data from API
  useEffect(() => {
    const fetchSymptoms = async () => {
      try {
        const response = await fetch('https://api.infermedica.com/v3/concepts?types=symptom', {
          method: 'GET',
          headers: {
            'App-Id': 'c938324a',
            'App-Key': '09240096b18d68944cba4e11d841e04d',
          },
        });
        const data = await response.json();
        setSymptoms(data);
      } catch (error) {
        console.error('Error fetching symptoms:', error);
      }
    };

    fetchSymptoms();
  }, []);

  // Function to handle symptom selection
  const handleSymptomSelect = (symptomId) => {
    setSelected((prevSelected) =>
      prevSelected.includes(symptomId)
        ? prevSelected.filter((id) => id !== symptomId)
        : [...prevSelected, symptomId]
    );
  };

  // Function to prepare evidence for diagnoses
  const prepareEvidence = () => {
    return selected.map(symptomId => {
      return {
        id: symptomId,
        choice_id: 'present',
        source: 'initial'
      };
    });
  };

  // Function to handle diagnosis request
  const handleDiagnose = async () => {
    const evidence = prepareEvidence();
    const requestData = {
      sex,
      age: {
        value: parseInt(age),
        unit: ageUnit
      },
      evidence
    };
    
    try {
      const response = await axios.post('https://api.infermedica.com/v3/diagnosis', requestData, {
        headers: {
          'App-Id': 'c938324a',
          'App-Key': '09240096b18d68944cba4e11d841e04d',
          'Content-Type': 'application/json'
        }
      });
      setDiagnoses(response.data.conditions);
      setDiagnosisError('');

      // Call triage API with the same data
      const triageResponse = await axios.post('https://api.infermedica.com/v3/triage', requestData, {
        headers: {
          'App-Id': 'c938324a',
          'App-Key': '09240096b18d68944cba4e11d841e04d',
          'Content-Type': 'application/json'
        }
      });
      setTriageResult(triageResponse.data);

      // Call recommend specialist API if triage is successful
      if (triageResponse.data) {
        const specialistResponse = await axios.post('https://api.infermedica.com/v3/recommend_specialist', requestData, {
          headers: {
            'App-Id': 'c938324a',
            'App-Key': '09240096b18d68944cba4e11d841e04d',
            'Content-Type': 'application/json'
          }
        });
        setSpecialistInfo(specialistResponse.data);
      }

      // Save symptom data to the server
      await saveSymptoms(requestData);

    } catch (error) {
      console.error('Error:', error);
      setDiagnosisError('Error. Please try again later.');
    }
  };

  // Function to save symptom data to the server
  const saveSymptoms = async (requestData) => {
    try {
      await axios.post('http://localhost:5000/save-symptoms', {
        username: username,
        symptomData: requestData
      });
    } catch (error) {
      console.error('Error saving symptom data:', error);
    }
  };
  

  // Function to filter symptoms based on search term
  const filteredSymptoms = symptoms.filter(symptom =>
    symptom.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='relative h-screen overflow-auto overflow-x-hidden ' class="transition-fade">
      <UserBackground className="relative z=0" />
      <div className="container mx-auto font-right relative z-10 text-black text-center">
        <h1 className="text-8xl font-bold mb-10 pt-14 pb-14 text-white">Symptom Checker</h1>
        
        {/* Inputs for sex, age, and age unit */}
        {diagnoses.length === 0 && !triageResult && (
          <div className=" -translate-y-20 mb-4 text-xl mx-auto">
             <label htmlFor="name" className="block mb-2 text-white">username:</label>
            <input type="text" id="name" className="border rounded-full px-2 py-1 mb-2" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="sex" className="block mb-2 text-white">Gender:</label>
            <input type="text" id="sex" className="border rounded-full px-2 py-1 mb-2" value={sex} onChange={(e) => setSex(e.target.value)} />
            <label htmlFor="age" className="block mb-2 text-white">Age:</label>
            <input type="number" id="age" className="border rounded-full px-2 py-1 mb-2" value={age} onChange={(e) => setAge(e.target.value)} />
            <label htmlFor="ageUnit" className="block mb-2 text-white">Age Unit:</label>
            <select id="ageUnit" className="border rounded-full px-2 py-1 mb-2" value={ageUnit} onChange={(e) => setAgeUnit(e.target.value)}>
              <option value="year">Year</option>
              <option value="month">Month</option>
            </select>
          </div> 
        )}
        
        {/* Search input for symptoms */}
        {diagnoses.length === 0 && !triageResult && (
          <input
            type="text"
            placeholder="Search symptoms..."
            className="border -translate-y-20 rounded-full px-2 py-1 mb-4 mx-auto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        )}
        
        {/* Button to initiate diagnosis */}
        {diagnoses.length === 0 && !triageResult && (
          <button className="bg-black -translate-y-20 text-white rounded-full px-4 ml-4 py-2 mt-4 mx-auto" onClick={handleDiagnose}>Diagnose</button>
        )}

        {/* Display symptoms for selection */}
        {(searchTerm && !diagnoses.length && !triageResult) && (
          <div className="grid grid-cols-3 gap-4 -translate-y-20  mx-auto">
            {filteredSymptoms.map((symptom) => (
              <div
                key={symptom.id}
                className={`p-2 border border-black border-solid rounded cursor-pointer ${selected.includes(symptom.id) ? 'bg-black border-black text-white' : ''}`}
                onClick={() => handleSymptomSelect(symptom.id)}
              >
                {symptom.name}
              </div>
            ))}
          </div>
        )}

        {/* Display diagnoses, triage result, and recommended specialist in 1 row with 3 columns */}
        <div className="grid grid-cols-3 gap-4 mx-auto">
          {/* Display diagnoses */}
          {diagnoses.length > 0 && (
            <div className='text-black bg-white rounded p-4' style={{ width: 'fit-content', margin: '5px' }}> 
              <h2 className="mt-2 rounded-full font-bold mb-5 text-4xl">Diagnoses:</h2>
              <ul>
                {diagnoses.map((diagnosis, index) => (
                  <li className="text-xl" key={index}>{diagnosis.name}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Display triage result */}
          {triageResult && (
            <div className='text-black bg-white rounded p-7' style={{ width: 'fit-content', margin: '5px' }}>
              <h2 className="text-4xl font-bold mb-5">Triage Result:</h2>
              <p className="text-xl">Triage Level: {triageResult.triage_level}</p>
              <p className="text-xl">Root Cause: {triageResult.root_cause}</p>
              <p className="text-xl">Teleconsultation Applicable: {triageResult.teleconsultation_applicable ? 'Yes' : 'No'}</p>
              <h3 className="text-4xl font-bold mt-5 mb-5">Serious Symptoms:</h3>
              <ul>
                {triageResult.serious.map((symptom) => (
                  <li className='text-xl' key={symptom.id}>{symptom.name}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Display recommended specialist */}
          {specialistInfo && (
            <div className="text-black bg-white rounded p-4" style={{ width: 'fit-content', margin: '5px' }}>
              <h2 className="text-4xl font-bold mb-5 rounded-full">Recommended Specialist:</h2>
              <p className="text-xl">Name: {specialistInfo.recommended_specialist.name}</p>
              <p className="text-xl">Recommended Channel: {specialistInfo.recommended_channel}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserSymCheck;
