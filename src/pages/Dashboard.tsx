import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAccount } from "wagmi";
import { StorageManager } from "../components/Dashboard/StorageManager";
import {UploadsManager} from "../components/Dashboard/UploadsManager";

const Dashboard: React.FC = () => {
  const { isConnected, address } = useAccount();
  const [activeSection, setActiveSection] = useState<"summary" | "storage" | "uploads">("summary");

  if (!isConnected && !address) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <p className="text-xl">Please connect your wallet to view your dashboard.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Dashboard</h1>
        <p className="text-gray-400 mb-12">
          Connected Wallet: <span className="font-mono">{address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'N/A'}</span>
        </p>

        <div className="flex gap-4 mb-8">
          <button
            className={`px-4 py-2 rounded ${activeSection === "summary" ? "bg-gray-800 text-white" : "bg-gray-700 text-gray-300"}`}
            onClick={() => setActiveSection("summary")}
          >
            Summary
          </button>
          <button
            className={`px-4 py-2 rounded ${activeSection === "storage" ? "bg-gray-800 text-white" : "bg-gray-700 text-gray-300"}`}
            onClick={() => setActiveSection("storage")}
          >
            Storage Manager
          </button>
          <button
            className={`px-4 py-2 rounded ${activeSection === "uploads" ? "bg-gray-800 text-white" : "bg-gray-700 text-gray-300"}`}
            onClick={() => setActiveSection("uploads")}
          >
            My Uploads
          </button>
        </div>

        {activeSection === "summary" && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Summary</h2>
            <div className="border border-gray-800 bg-gray-900 rounded-lg p-6">
              <p className="text-gray-300 text-lg">Total Earned: $0.00</p>
              {/* Add more summary info here */}
            </div>
          </section>
        )}

        {activeSection === "storage" && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Storage Manager</h2>
            <div className="border border-gray-800 bg-gray-900 rounded-lg p-6">
              <StorageManager />
            </div>
          </section>
        )}

        {activeSection === "uploads" && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">My Uploads</h2>
            <div className="border border-gray-800 bg-gray-900 rounded-lg p-6">
              <UploadsManager />
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;