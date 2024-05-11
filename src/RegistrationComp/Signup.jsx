import React, { useState } from "react";
import Background from "../Background";
function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    location: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      window.location.href = '/login';
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <>  
    <div className="min-h-screen font-right text-black bg-white flex justify-center items-center">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-1/3 p-4">
            <h1 className="font-bold text-3xl text-black mb-8">Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2" htmlFor="username">Username</label>
                <input className="w-full px-3 py-2 border rounded" type="text" name="username" id="username" value={formData.username} onChange={handleChange} />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
                <input className="w-full px-3 py-2 border rounded" type="text" name="email" id="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2" htmlFor="password">Password</label>
                <input className="w-full px-3 py-2 border rounded" type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
              </div>
              <div className="flex justify-between">
                <div className="w-5/12 mr-4">
                  <label className="block text-sm font-semibold mb-2" htmlFor="dateOfBirth">Date of Birth</label>
                  <input className="w-full px-3 py-2 border rounded" type="date" name="dateOfBirth" id="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
                </div>
                <div className="w-5/12 ml-4">
                  <label className="block text-sm font-semibold mb-2" htmlFor="gender">Gender</label>
                  <input className="w-full px-3 py-2 border rounded" type="text" name="gender" id="gender" value={formData.gender} onChange={handleChange} />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2" htmlFor="location">Location</label>
                <input className="w-full px-3 py-2 border rounded" type="text" name="location" id="location" value={formData.location} onChange={handleChange} />
              </div>
              <button type="submit" className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div></>
  
  );
}

export default Signup;
