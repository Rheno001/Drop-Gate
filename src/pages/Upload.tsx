import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface UploadFormData {
  file: File | null;
  title: string;
  description: string;
  price: number;
}

const Upload: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UploadFormData>({
    file: null,
    title: '',
    description: '',
    price: 0,
  });

  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // TODO: Replace this with actual wallet logic
  const isConnected = true;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'number') {
      setFormData((prev) => ({ ...prev, [name]: parseFloat(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.file || !formData.title || !formData.description) {
      setError('All fields are required.');
      return;
    }

    setIsUploading(true);

    try {
      // Simulate async upload
      await new Promise((res) => setTimeout(res, 1500));

      // TODO: Replace with real upload to IPFS/Filecoin backend

      setUploadSuccess(true);
      setTimeout(() => navigate('/browse'), 2000);
    } catch (err) {
      console.error(err);
      setError('Upload failed. Try again.');
    } finally {
      setIsUploading(false);
    }
  };

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <p className="text-xl">Please connect your wallet to upload content.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar />
      <main className="max-w-3xl mx-auto py-20 px-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Upload Your Content</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* File */}
          <div>
            <label className="block text-sm mb-2">Select File</label>
            <input
              type="file"
              accept=".jpg,.png,.pdf,.txt,.md,.docx"
              onChange={handleFileChange}
              className="block w-full bg-gray-800 border border-gray-700 p-2 rounded-md text-white"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 p-2 rounded-md text-white"
              placeholder="e.g. How to Start Freelancing"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 p-2 rounded-md text-white"
              rows={4}
              placeholder="Describe what you're uploading"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm mb-2">Price (in USDT)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              min={0}
              step={0.01}
              className="w-full bg-gray-800 border border-gray-700 p-2 rounded-md text-white"
              placeholder="e.g. 2.50"
            />
          </div>

          {/* Error / Success */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {uploadSuccess && (
            <p className="text-green-500 text-sm">Upload successful! Redirecting...</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-medium"
            disabled={isUploading}
          >
            {isUploading ? 'Uploading...' : 'Upload Content'}
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Upload;
