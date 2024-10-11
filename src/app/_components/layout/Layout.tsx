'use client'; 
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Footer from '../Footer'; 

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control the sidebar visibility

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen); // Function to toggle the sidebar

  return (
    <div className="flex flex-col min-h-screen">
      <button
        onClick={toggleSidebar}
        className="p-2 text-3xl font-bold fixed top-0 left-5 z-50 bg-white text-black rounded-md shadow-lg"
        style={{ height: '50px', width: '50px' }} // Ensuring the button is square
      >
        ☰
      </button>
      <div className="flex flex-grow">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="ml-16 w-full p-8 bg-background text-white">
          {children}
        </div>
      </div>
      <Footer /> {/* Footer will always be at the bottom */}
    </div>
  );
}
