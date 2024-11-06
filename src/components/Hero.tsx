import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuoteClick = () => {
    navigate('/offerte');
  };

  return (
    <div className="relative h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://i.imgur.com/B6w1eNM.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-end pb-24">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">
            Betrouwbare Betonoplossingen voor Elk Project
          </h1>
          <p className="text-lg mb-6">
            Met veel passie adviseren wij u over onze diensten en producten.
          </p>
          <div className="flex space-x-4">
            <button 
              onClick={handleQuoteClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition duration-300"
            >
              Offerte aanvragen
            </button>
            <button 
              onClick={handleContactClick}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 py-2 rounded-md transition duration-300"
            >
              Contact opnemen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;