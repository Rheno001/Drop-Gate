import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import ConnectWallet from './connectWallet';
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <Link to="/">DropGate</Link>
        </div>

        {/* Hamburger menu (mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/browse" className="text-gray-700 hover:text-black">Browse</Link>
          <Link to="/upload" className="text-gray-700 hover:text-black">Upload</Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-black">Dashboard</Link>
          <ConnectButton />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4">
          <Link to="/browse" className="block py-2 text-gray-700 hover:text-black">Browse</Link>
          <Link to="/upload" className="block py-2 text-gray-700 hover:text-black">Upload</Link>
          <Link to="/dashboard" className="block py-2 text-gray-700 hover:text-black">Dashboard</Link>
          <div className="py-2">
            <ConnectButton />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
