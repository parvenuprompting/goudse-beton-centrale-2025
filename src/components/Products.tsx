import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    title: 'Betonmortel',
    description: 'Van eco-vriendelijk tot zelfverdichtend beton',
    image: 'https://i.imgur.com/UgOyLG6.jpg',
    path: '/betonmortel'
  },
  {
    title: 'Dekvloeren',
    description: 'Weber Cemfloor cementgebonden gietvloeren',
    image: 'https://i.imgur.com/ngUtUtw.jpg',
    path: '/dekvloeren'
  },
  {
    title: 'Duurzaamheid',
    description: 'CSC "R" en BREEAM gecertificeerd',
    image: 'https://i.imgur.com/R61J1AY.jpg',
    path: '/duurzaamheid'
  }
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Onze Betonoplossingen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button 
                  onClick={() => navigate(product.path)}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Lees meer →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;