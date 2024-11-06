import React from 'react';
import { Building2, Package, Truck, Settings } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import BackButton from '../../components/BackButton';

const DroogstoffenPage = () => {
  const products = [
    {
      title: 'Drymix ZC',
      description: 'Het bindmiddel voor de zandcement smeervloeren markt',
      icon: Package
    },
    {
      title: 'Drymix GS',
      description: 'Bindmiddel voor grondstabilisatie',
      icon: Building2
    },
    {
      title: 'Drymix SB',
      description: 'Bindmiddel voor schuimbeton',
      icon: Settings
    },
    {
      title: 'Drymix Grout',
      description: 'Cement op samenstelling',
      icon: Package
    }
  ];

  return (
    <div className="pt-20">
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-4">
          <BackButton />
        </div>
      </div>
      <ServiceHero
        title="GBC Drymix Droogstoffen"
        description="Specialistische droge mortels voor diverse toepassingen in de bouw"
        Icon={Building2}
        imageUrl="https://i.imgur.com/MiQmsPm.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Description */}
          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed">
              De Goudse Betonmortel Centrale (GBC) is voorzien van een droogstoffen menginstallatie. 
              Met deze menginstallatie bieden wij de mogelijkheid om specifieke Drymix bindmiddelmengsels 
              op maat te produceren en te leveren. Door de aanwezigheid van een zeer uitgebreid silopark, 
              16 stuks met een volume van 3.700 ton, zijn wij uw partner bij uitstek. Onze Drymix producten 
              worden vooral ingezet bij de productie van schuimbeton en zandcement dekvloeren.
            </p>
          </div>

          {/* Highlight Box */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Uw grondstoffen mix onze passie!
            </h2>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-blue-700">
                <Settings className="w-6 h-6 mr-2" />
                <span>80 ton productie per uur</span>
              </div>
              <div className="flex items-center text-blue-700">
                <Truck className="w-6 h-6 mr-2" />
                <span>Uitgekiende logistiek</span>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Onze producten speciaal afgestemd op uw leveringspakket
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <product.icon className="w-8 h-8 text-blue-600" />
                    <h3 className="text-xl font-semibold ml-3">{product.title}</h3>
                  </div>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Service */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-start">
              <Truck className="w-8 h-8 text-blue-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Extra Service</h3>
                <p className="text-gray-700">
                  In overleg kunt u uw zandcement vrachtwagen bij ons bevoorraden met het 
                  bindmiddel Drymix ZC en vloeren zand.
                </p>
              </div>
            </div>
          </div>

          {/* Facilities Highlight */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Onze Faciliteiten</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">16 silo's met totaal volume van 3.700 ton</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Productiecapaciteit van 80 ton per uur</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Geavanceerde menginstallatie voor maatwerk</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Optimale logistieke planning en bevoorrading</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroogstoffenPage;