import React from "react";

interface FileCardProps {
  title: string;
  description: string;
  price: number;
  thumbnailUrl?: string;
  owner: string;
}

const FileCard: React.FC<FileCardProps> = ({ title, description, price, thumbnailUrl, owner }) =>{
    
    

    
    
    return(
    <div className="bg-gray-900 rounded-lg shadow-md p-4 flex flex-col items-center">
        <div className="w-32 h-32 bg-gray-700 rounded mb-4 flex items-center justify-center overflow-hidden">
        {thumbnailUrl ? (
            <img src={thumbnailUrl} alt={title} className="object-cover w-full h-full" />
        ) : (
            <span className="text-gray-400">No Thumbnail</span>
        )}
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-2">{description}</p>
        <div className="text-green-400 font-semibold">Price: ${price}</div>
        <button onClick={()=>{}}></button>
    </div>
    );
}

export default FileCard;