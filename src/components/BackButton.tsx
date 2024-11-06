import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
      <span>Terug</span>
    </button>
  );
};

export default BackButton;