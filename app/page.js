"use client"; 

import { useState } from 'react'; 
import Image from "next/image";
import Login from "./components/Login";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from './components/AboutSection';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      {isLoggedIn ? (
        <>
          <NavBar />
          <div className="container mt-24 mx-auto px-12 py-4">
            <HeroSection />
            <AboutSection />
          </div>
        </>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </main>
  );
}
