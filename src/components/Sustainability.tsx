import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Shield, Leaf } from 'lucide-react';

const initiatives = [
  {
    icon: Award,
    title: 'CSC "R" Keurmerk',
    description: 'Certificering voor duurzame betonproductie',
    path: '/duurzaamheid/csc',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Shield,
    title: 'BREEAM',
    description: 'Erkenning voor milieuvriendelijke productiemethoden',
    path: '/duurzaamheid/breeam',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Leaf,
    title: 'ISO 14001',
    description: 'Milieumanagementsysteem certificering',
    path: '/duurzaamheid/iso14001',
    color: 'bg-purple-100 text-purple-600'
  }
];

const Sustainability = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Onze Duurzaamheidsdoelstellingen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              onClick={() => navigate(initiative.path)}
              className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 p-8"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-4 rounded-full ${initiative.color} mb-6`}>
                  <initiative.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;