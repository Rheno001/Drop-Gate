import React, { useEffect, useState } from "react";
import FileCard from "../components/Browse/FileCard";
import { supabase } from "../utils/supabase/supabaseClient"; // adjust import as needed
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface FileMeta {
  id: number;
  title: string;
  description: string;
  price: number;
  owner: string;
  // Add thumbnailUrl if you have it in your DB
}

function Browse() {
  const [files, setFiles] = useState<FileMeta[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const { data, error } = await supabase
        .from("file_metadata")
        .select("id, title, description, price, owner");
      if (data) setFiles(data);
    };
    fetchFiles();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
       <Navbar />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {files.map((file) => (
            <FileCard
              key={file.id}
              title={file.title}
              description={file.description}
              price={file.price}
              owner={file.owner}
              // thumbnailUrl={file.thumbnailUrl}
            />
          ))}
        </div>
      <Footer />
    </div>
  );
}

export default Browse;