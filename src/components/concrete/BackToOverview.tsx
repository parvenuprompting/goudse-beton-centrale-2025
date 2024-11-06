import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BackToOverview = () => {
  return (
    <Link 
      to="/betonmortel"
      className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition duration-300 mb-6"
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      Terug naar overzicht
    </Link>
  );
};

export default BackToOverview;