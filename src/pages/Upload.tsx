

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { UploadsManager } from '../components/Dashboard/UploadsManager';

const Upload: React.FC = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar />
      <UploadsManager/>
      <Footer />
    </div>
  );
};

export default Upload;