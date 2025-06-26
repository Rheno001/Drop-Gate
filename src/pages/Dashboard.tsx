import React from 'react';
import { useAddress } from '@thirdweb-dev/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard: React.FC = () => {
  const address = useAddress();

  if (!address) {
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
          Connected Wallet: <span className="font-mono">{address.slice(0, 6)}...{address.slice(-4)}</span>
        </p>

        {/* My Uploads */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">My Uploads</h2>
          <div className="border border-gray-800 bg-gray-900 rounded-lg p-6">
            <p className="text-gray-500">You haven’t uploaded any content yet.</p>
          </div>
        </section>

        {/* My Purchases */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">My Purchases</h2>
          <div className="border border-gray-800 bg-gray-900 rounded-lg p-6">
            <p className="text-gray-500">No purchases yet.</p>
          </div>
        </section>

        {/* Earnings Summary */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Earnings Summary</h2>
          <div className="border border-gray-800 bg-gray-900 rounded-lg p-6">
            <p className="text-gray-300 text-lg">Total Earned: $0.00</p>
            {/* <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md text-white font-medium">Withdraw</button> */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
