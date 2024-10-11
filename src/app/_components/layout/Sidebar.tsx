import React from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';

// Define an interface for the component props
interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div className={`fixed top-0 left-0 h-full w-16 bg-accent shadow-lg transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex flex-col items-center">
        <a href="/" className="sidebar-icon">
          <AiOutlineHome size="28" />
          <span className="sidebar-tooltip">Home</span>
        </a>
        <a href="/about" className="sidebar-icon">
          <AiOutlineUser size="28" />
          <span className="sidebar-tooltip">About</span>
        </a>
        <a href="/projects" className="sidebar-icon">
          <AiOutlineProject size="28" />
          <span className="sidebar-tooltip">Projects</span>
        </a>
        <a href="/contact" className="sidebar-icon">
          <AiOutlineMail size="28" />
          <span className="sidebar-tooltip">Contact</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
