"use client";

import React, { useState } from 'react';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === 'genvoice' && password === 'GenVoice123!') {
      setIsLoggedIn(true); 
    } else {
      setError('Invalid username or password'); 
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black"> 
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2> 
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="border border-gray-300 p-3 rounded-lg mb-4 w-full text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="border border-gray-300 p-3 rounded-lg mb-4 w-full text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="bg-gradient-to-br from-purple-400 to-pink-600 hover:bg-slate-200 text-white py-3 px-6 rounded-full w-full font-semibold transition duration-300 ease-in-out"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
