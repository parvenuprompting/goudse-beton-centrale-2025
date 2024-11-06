import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Package, Wrench, Construction, Droplet, Building2 } from 'lucide-react';

const services = [
  {
    icon: Package,
    title: 'Weber Cemfloor',
    description: 'Hoogwaardige cementgebonden gietmortel voor perfecte dekvloeren. Ideaal voor zowel nieuwbouw als renovatie.',
    details: [
      'Snelle verwerking',
      'Uitstekende vloeieigenschappen',
      'Geschikt voor vloerverwarming'
    ],
    path: '/diensten/weber-cemfloor'
  },
  {
    icon: Building2,
    title: 'GBC Droogstoffen',
    description: 'Specialistische droge mortels voor diverse toepassingen in de bouw.',
    details: [
      'Constante kwaliteit',
      'Op maat samengesteld',
      'Voor verschillende toepassingen'
    ],
    path: '/diensten/droogstoffen'
  },
  {
    icon: Truck,
    title: 'GBC Mixerpomp',
    description: 'Efficiënte levering en verwerking van mortel met geïntegreerde pompinstallatie.',
    details: [
      'Directe verwerking',
      'Minimaal materiaalverlies',
      'Hoge verwerkingssnelheid'
    ],
    path: '/diensten/mixerpomp'
  },
  {
    icon: Droplet,
    title: 'GBC Kleine Mortelpomp',
    description: 'Ideaal voor kleinere projecten en moeilijk bereikbare locaties.',
    details: [
      'Compact en wendbaar',
      'Perfect voor renovaties',
      'Nauwkeurige dosering'
    ],
    path: '/diensten/mortelpomp'
  },
  {
    icon: Construction,
    title: 'GBC Betonpomp',
    description: 'Professionele betonpompen voor efficiënte verwerking op grote schaal.',
    details: [
      'Grote pompcapaciteit',
      'Bereik tot 42 meter',
      'Voor alle betonsoorten'
    ],
    path: '/diensten/betonpomp'
  },
  {
    icon: Wrench,
    title: 'GBC Nadenvulmortel',
    description: 'Specialistische mortel voor het professioneel vullen van naden en voegen.',
    details: [
      'Hoge sterkteklasse',
      'Krimparm',
      'Duurzame hechting'
    ],
    path: '/diensten/nadenvulmortel'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Onze Diensten</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <service.icon className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold ml-3">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Meer informatie
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;