import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LoginCard from './components/LoginCard';
import WellMarkers from './components/WellMarkers';
import BackgroundCanvas from './components/BackgroundCanvas';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  return (
    <main className="relative w-full min-h-screen bg-[#040D0A] text-[#F2F7F5] overflow-x-hidden select-none flex flex-col justify-between">
      {/* 1. Base Cinematic Background Image with Fallback */}
      <img
        src="/background.jpg"
        onError={(e) => {
          e.currentTarget.src = "/reference.jpg";
        }}
        alt="Oil India eRTMAC-NWIS Drilling Subsurface Visualization"
        className="fixed inset-0 w-full h-full object-cover object-center pointer-events-none z-0 filter brightness-[0.95] contrast-[1.05]"
      />

      {/* Dark overlay gradient to guarantee UI text legibility */}
      <div className="fixed inset-0 bg-gradient-to-r from-[#040D0A]/85 via-[#040D0A]/55 to-[#040D0A]/80 pointer-events-none z-0"></div>

      {/* 2. Atmospheric & Laser Energy Canvas Overlay */}
      <ErrorBoundary>
        <BackgroundCanvas />
      </ErrorBoundary>

      {/* 3. Interactive Well Trajectory Pins & Telemetry Popups */}
      <ErrorBoundary>
        <WellMarkers />
      </ErrorBoundary>

      {/* 4. Top Navigation Bar */}
      <Navbar />

      {/* 5. Main Hero & Login Content Grid */}
      <div className="relative z-20 flex-1 px-6 lg:px-12 py-4 flex flex-col lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto w-full">
        {/* Left Side: Hero Title & 4 Stat Cards */}
        <div className="flex flex-col justify-center max-w-xl w-full">
          <HeroSection />
        </div>

        {/* Right Side: Glassmorphism Login Card */}
        <div className="flex items-center justify-center lg:justify-end w-full lg:w-auto">
          <LoginCard />
        </div>
      </div>
    </main>
  );
}
