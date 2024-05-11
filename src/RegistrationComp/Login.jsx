import React, { useState } from "react";
import { VscArrowRight } from "react-icons/vsc";
import { Link } from "react-router-dom";
import './Signup1.css'
import Background from '../Background'
import '../Background.css'

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      // Redirect to the next page after successful login
      window.location.href = '/choice';
    })
    .catch(error => console.error('Error:', error.message));
  };

  return (
    <div class="transition-fade">
      <Background/>
      <div  className="text-black " id="placeholder">
        <h1 className="font-right font-bold text-3xl " id="signUp">Log In </h1>
        <form onSubmit={handleSubmit}>
          <label id="userlabel" > Username</label>
          <input className="px-5 text-xl " type="text" name="username" id="rectangleS1"  value={formData.username} onChange={handleChange} />
          <label id="passlabel">Password</label>
          <input className="px-5 text-xl" id="rectangleS2"  type="password" name="password" value={formData.password} onChange={handleChange} />
          <button type="submit"><VscArrowRight className="font-right text-white bg-black animate-pulse text-xl" id="rectangleS3" /></button>
        </form>
      </div>
    </div>
  );
}

export default Login;
