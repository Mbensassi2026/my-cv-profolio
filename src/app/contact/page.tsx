import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa'; 
import Layout from '../_components/layout/Layout';

const contactDetails = [
  { icon: <FaGithub />, url: 'https://github.com/Mbensassi2026', label: 'Github', hoverClass: 'hover-bg:github' },
  { icon: <FaLinkedinIn />, url: 'https://linkedin.com/in/mohammedbensassi', label: 'LinkedIn', hoverClass: 'hover-bg:linkedin' },
  { icon: <FaEnvelope />, url: 'mailto:email@example.com', label: 'Email', hoverClass: 'hover-bg:email' },
  { icon: <FaInstagram />, url: 'https://instagram.com/yourusername', label: 'Instagram', hoverClass: 'hover-bg:instagram' },
  { icon: <FaTiktok />, url: 'https://tiktok.com/@yourusername', label: 'TikTok', hoverClass: 'hover-bg:tiktok' },
  { icon: <FaDiscord />, url: 'https://discord.com/invite/yourinvitecode', label: 'Discord', hoverClass: 'hover-bg:discord' } // Add your Discord invite link
];

export default function ContactPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg p-2 shadow-lg w-full max-w-2xl text-center">  
          <h1 className="text-4xl text-black font-bold mb-8 underline">Contact Me</h1>
          <ul>
            {contactDetails.map((contact, index) => (
              <li key={index} className="mb-4 flex items-center gap-4 justify-center">
                <a href={contact.url} className="flex items-center gap-2 text-gray-400 transition duration-300">
                  <span className={`icon-container ${contact.hoverClass}`}>
                    {contact.icon}
                  </span>
                  <span className="hover:text-gray-400">{contact.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

