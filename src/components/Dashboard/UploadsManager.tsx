import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useAccount } from "wagmi";
import { useFileUpload } from "../../hooks/useFileUpload";
import { supabase } from '../../utils/supabase/supabaseClient';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';


interface UploadFormData {
  file: File | null;
  title: string;
  description: string;
  price: number;
}

export const UploadsManager: React.FC = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState<UploadFormData>({
    file: null,
    title: '',
    description: '',
    price: 0,
  });
  
  const { uploadFileMutation, uploadedInfo, handleReset, status, progress } =
    useFileUpload();

  const { isPending: isLoading, mutateAsync: uploadFile } = uploadFileMutation;

  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const {address} = useAccount();
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
   useEffect(()=>{
    if(uploadedInfo && !isLoading){
      console.log("uploadedInfo",uploadedInfo);
      console.log("status",status);
      console.log("progress",progress);
      (async () => {
        try {
          const { data, error: dbError } = await supabase
            .from('file_metadata')
            .insert([
              {
                fileroot_id: uploadedInfo.commp || '',
                proofset_id: uploadedInfo.proofsetId || null,
                title: formData.title,
                description: formData.description,
                owner: address,
                provider_id: uploadedInfo.providerId || null,
                price: formData.price,
              },
            ]);
          if (dbError) throw dbError;
          setUploadSuccess(true);
          setTimeout(() => navigate('/browse'), 2000);
        } catch (err) {
          setError('Failed to save metadata.');
        } finally {
          // Reset uploadedInfo so this effect doesn't run again
          handleReset();
        }
      })();
    }
  },[uploadedInfo, isLoading])

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
      // TODO: Replace with real upload to IPFS/Filecoin backend
      await uploadFile(formData.file);
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
      {/* <Navbar /> */}
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
            <label className="block text-sm mb-2">Price (in USDFC)</label>
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
      {/* <Footer /> */}
    </div>
  );
};

// export default UploadsManager;
