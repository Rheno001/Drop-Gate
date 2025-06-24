import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaGithub, FaDiscord } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6 mt-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">DropGate</h2>
          <p className="text-sm text-gray-400">
            Decentralized marketplace for micro-content. Sell your ideas for crypto.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Explore</h3>
          <ul className="space-y-2">
            <li><Link to="/browse" className="hover:text-white">Browse Content</Link></li>
            <li><Link to="/upload" className="hover:text-white">Upload</Link></li>
            <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
            <li><Link to="/" className="hover:text-white">Home</Link></li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Connect</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" aria-label="Twitter" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" aria-label="GitHub" className="hover:text-white"><FaGithub /></a>
            <a href="#" aria-label="Discord" className="hover:text-indigo-400"><FaDiscord /></a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Built with <span className="text-purple-400">Web3</span> · Powered by <span className="text-blue-400">Filecoin</span>
          </p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} DropGate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
