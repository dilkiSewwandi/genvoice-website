"use client"; // Ensure this is added at the top for the client-side component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

const SettingsPage = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const router = useRouter(); // Initialize useRouter

  // Simulated stored password
  const storedPassword = 'GenVoice123!';

  const handlePasswordChange = (event) => {
    event.preventDefault();

    // Validate current password
    if (currentPassword !== storedPassword) {
      setError('Current password is incorrect.');
      setSuccess(''); // Clear success message
      return;
    }

    // Validate new password and confirmation match
    if (newPassword !== confirmPassword) {
      setError('New passwords do not match.');
      setSuccess(''); // Clear success message
      return;
    }

    // Set success message and clear errors
    setSuccess('Password changed successfully!');
    setError(''); 

    // Clear form fields after password change
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  // Function to handle back button click
  const handleBack = () => {
    router.push('/'); // Redirect to home page
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black"> {/* Changed background to black */}
      <form onSubmit={handlePasswordChange} className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Change Password</h2>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Current Password</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(event) => setCurrentPassword(event.target.value)}
            className="border border-gray-300 p-3 rounded-lg mb-4 w-full text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
            className="border border-gray-300 p-3 rounded-lg mb-4 w-full text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Confirm New Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className="border border-gray-300 p-3 rounded-lg mb-4 w-full text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

        <button
          type="submit"
          className="bg-gradient-to-br from-purple-400 to-pink-600 hover:bg-slate-200 text-white py-3 px-6 rounded-full w-full font-semibold transition duration-300 ease-in-out mb-4"
        >
          Change Password
        </button>

        <button
          type="button"
          onClick={handleBack}
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-full w-full font-semibold transition duration-300 ease-in-out"
        >
          Back to Home
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
