import React, { useState } from "react";
import "../App.css"
import "./UserBackground.css";
import UserBackground from "./userBackground";

function UserSymHist() {
  const [checkHistory, setCheckHistory] = useState([
    {
      id: 1,
      date: '2024-04-01',
      symptoms: ['Fever', 'Cough'],
      diagnosis: 'Common Cold',
    },
    {
      id: 2,
      date: '2024-03-25',
      symptoms: ['Sore Throat', 'Difficulty Breathing'],
      diagnosis: 'COVID-19',
    },
    // Add more check history entries as needed
  ]);

  return (
    <div id="cover" className="overflow-x-hidden overflow-y-hidden" class="transition-fade">
      <UserBackground id="userbG" />

      <div className="container relative font-right z-10 mx-auto px-4 py-8 ">
        <h2 className="text-8xl  font-bold mb-10">Symptom Check History</h2>
        <div className="rounded-lg bg-white  shadow-md  text-black ">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Symptoms</th>
                <th className="border border-gray-300 px-4 py-2">Diagnosis</th>
              </tr>
            </thead>
            <tbody>
              {checkHistory.map((entry) => (
                <tr key={entry.id}>
                  <td className="border border-gray-300 px-4 py-2">{entry.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{entry.date}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <ul>
                      {entry.symptoms.map((symptom) => (
                        <li key={symptom}>{symptom}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{entry.diagnosis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserSymHist;
