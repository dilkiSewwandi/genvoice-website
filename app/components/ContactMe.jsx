// ContactMe.jsx

"use client";

import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; 

const ContactMe = () => {
  return (
    <div id="contact" className="mt-12 text-center"> 
      <h2 className="text-4xl font-bold text-white mt-20 mb-4">Get in Touch with Me!</h2>
      <div className="flex justify-center mt-10 space-x-9">
        <a href="https://www.linkedin.com/in/dilki-sewwandi" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white text-3xl hover:text-blue-600" />
        </a>
        <a href="https://github.com/dilkiSewwandi" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white text-3xl hover:text-gray-300" />
        </a>
        <a href="mailto:dsewwandi2001@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-white text-3xl hover:text-red-500" />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;


