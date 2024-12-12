import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/users/signup', { username, password });
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Username" 
              required 
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Password" 
              required 
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500" 
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Sign Up
          </button>
        </form>
        <button 
          onClick={() => navigate('/login')} 
          className="w-full py-2 mt-4 text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default Signup;
