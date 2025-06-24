import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ConnectWallet from '../components/connectWallet';
import { FaLock, FaWallet, FaFileAlt, FaBook, FaCoins } from 'react-icons/fa';

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const isConnected = false; // Replace with actual wallet connection logic

  const faqs = [
    {
      question: "What is DropGate?",
      answer: "DropGate is a decentralized marketplace where creators can sell digital content like articles, images, and ideas directly to buyers using cryptocurrency. Built on Web3 technology and powered by Filecoin for secure storage."
    },
    {
      question: "How do I get started?",
      answer: "Connect your crypto wallet, upload your content, set a price, and earn. No traditional signup — your wallet is your identity."
    },
    {
      question: "What types of content can I sell?",
      answer: "Articles, blogs, infographics, images, tutorials — anything digital that provides value."
    },
    {
      question: "How are payments processed?",
      answer: "Smart contracts handle payments. When someone buys, your wallet is credited instantly."
    },
    {
      question: "What are the fees?",
      answer: "A flat 2.5% fee per sale — lower than traditional platforms due to decentralization."
    },
    {
      question: "Is my content secure?",
      answer: "Yes. All content is encrypted and stored on IPFS via Filecoin. Only buyers receive download keys."
    }
  ];

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="bg-gray-950 text-white min-h-screen scroll-smooth">
      <Navbar />
      <main className="flex-grow space-y-32">

        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden py-28 px-6 text-center">
          <FaBook className="absolute text-yellow-500 opacity-10 text-[200px] top-10 left-10 animate-float-slow pointer-events-none" />
          <FaCoins className="absolute text-green-400 opacity-10 text-[200px] bottom-10 right-10 animate-float-slow pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Sell Ideas, Not Just Products.
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              DropGate is a decentralized platform where you can sell articles and images for as little as $0 — powered by Web3 and Filecoin.
            </p>
            <div className="flex justify-center gap-6 flex-wrap mb-6">
              <Link to="/browse" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition">Browse Content</Link>
              <Link to="/upload" className="bg-gray-800 hover:bg-gray-700 border border-gray-600 px-6 py-3 rounded-lg font-medium transition">Upload Yours</Link>
            </div>
            <a
              href="https://github.com/your-repo-link"
              target="_blank"
              className="text-sm underline text-blue-400 hover:text-blue-300"
              rel="noopener noreferrer"
            >
              Contribute on GitHub
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-gray-900 py-20 px-6 scroll-mt-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14 text-center">
            <div>
              <FaWallet className="text-blue-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Connect Wallet</h3>
              <p className="text-gray-400">Login securely with your crypto wallet. No accounts or passwords.</p>
            </div>
            <div>
              <FaFileAlt className="text-purple-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Upload Content</h3>
              <p className="text-gray-400">Monetize your ideas by uploading articles and images.</p>
            </div>
            <div>
              <FaLock className="text-green-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Delivery</h3>
              <p className="text-gray-400">Buyers receive a unique, tamper-proof download link.</p>
            </div>
          </div>
        </section>

        {/* Upload Steps Section */}
        <section className="bg-gray-950 py-32 px-6 scroll-mt-20" id="steps">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-20">How to Upload Your Content</h2>
            <div className="relative flex flex-col md:flex-row justify-between items-center gap-20">
              <div className="flex flex-col items-center">
                <div className="bg-blue-700 p-5 rounded-full w-20 h-20 flex items-center justify-center text-xl font-bold">1</div>
                <h4 className="mt-6 text-lg font-semibold">Connect Wallet</h4>
                <p className="text-gray-400 mt-2 text-sm max-w-xs">Login securely using your crypto wallet.</p>
              </div>
              <div className="hidden md:block w-1/5 border-t-2 border-dotted border-gray-500 mt-10"></div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-700 p-5 rounded-full w-20 h-20 flex items-center justify-center text-xl font-bold">2</div>
                <h4 className="mt-6 text-lg font-semibold">Upload File</h4>
                <p className="text-gray-400 mt-2 text-sm max-w-xs">Choose your content and set your price.</p>
              </div>
              <div className="hidden md:block w-1/5 border-t-2 border-dotted border-gray-500 mt-10"></div>
              <div className="flex flex-col items-center">
                <div className="bg-green-700 p-5 rounded-full w-20 h-20 flex items-center justify-center text-xl font-bold">3</div>
                <h4 className="mt-6 text-lg font-semibold">Get Paid</h4>
                <p className="text-gray-400 mt-2 text-sm max-w-xs">Buyers pay and get a secure download link.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-28 px-6 bg-gray-900 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked <span className="text-blue-500">Questions</span></h2>
              <p className="text-xl text-gray-400">Everything you need to know about DropGate</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-700 transition"
                  >
                    <span className="text-lg font-medium">{faq.question}</span>
                    <span className="text-2xl text-blue-400">{openFaq === index ? '−' : '+'}</span>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-gray-300">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="bg-gradient-to-b from-gray-950 to-black py-20 px-6 text-center scroll-mt-20">
          <h2 className="text-3xl font-bold mb-4">Ready to Share Your Work?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Connect your wallet and start earning crypto for your micro-content today.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {!isConnected ? (
              <ConnectWallet />
            ) : (
              <Link to="/upload" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition">
                Upload a File
              </Link>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
