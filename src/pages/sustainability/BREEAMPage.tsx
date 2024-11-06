import React from 'react';
import { Shield, BarChart, Leaf, Recycle } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import BackButton from '../../components/BackButton';

const BREEAMPage = () => {
  const materialCredits = [
    {
      code: 'Mat 1',
      title: 'Materialen met lage milieubelasting',
      description: "Identificatie en stimulering van materialen met lage milieubelasting. Onze ontwerptool Groen beton berekent voor elk mengsel een MKI waarde in euro's."
    },
    {
      code: 'Mat 5',
      title: 'Onderbouwde herkomst',
      description: 'Toepassing van materialen met onderbouwde herkomst, aangetoond door ons ISO 14001 milieumanagementsysteem.'
    },
    {
      code: 'WST 2',
      title: 'Gerecycled materiaal',
      description: 'Stimulering van gerecycled herbruikbaar toeslagmateriaal, wat we realiseren met onze ECO betonmortel.'
    }
  ];

  const mki = [
    { type: 'Stelspecie 100kg', mki: '3.25', gwp: '37.74' },
    { type: 'C12/15 X0 100% Eco', mki: '6.62', gwp: '84.68' },
    { type: 'C20/25 XC2', mki: '8.33', gwp: '100.85' },
    { type: 'C30/37 XC4', mki: '9.11', gwp: '110.93' }
  ];

  return (
    <div className="pt-20">
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-4">
          <BackButton />
        </div>
      </div>
      <ServiceHero
        title="BREEAM Certificering"
        description="Het instrument voor duurzame gebouwde omgeving"
        Icon={Shield}
        imageUrl="https://i.imgur.com/wEoWtIL.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Description */}
          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed">
              BREEAM is hét instrument om de duurzaamheid van nieuwbouw en bestaande gebouwen 
              meetbaar te maken. De Nederlandse versie (BREEAM-NL) wordt beheerd door de Dutch 
              Green Building Council.
            </p>
          </div>

          {/* Material Credits */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Materiaal Credits</h3>
            <div className="grid gap-6">
              {materialCredits.map((credit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-lg p-2 mr-4">
                      <span className="text-blue-800 font-semibold">{credit.code}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{credit.title}</h4>
                      <p className="text-gray-700">{credit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MKI Values */}
          <div>
            <h3 className="text-xl font-semibold mb-6">MKI en GWP Waarden</h3>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-gray-700">Type</th>
                    <th className="px-6 py-3 text-right text-gray-700">MKI (€)</th>
                    <th className="px-6 py-3 text-right text-gray-700">GWP (kg CO₂)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {mki.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-700">{item.type}</td>
                      <td className="px-6 py-4 text-right text-gray-700">{item.mki}</td>
                      <td className="px-6 py-4 text-right text-gray-700">{item.gwp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-start">
                <Leaf className="w-6 h-6 text-green-600 mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold mb-2">Milieuvoordelen</h4>
                  <p className="text-gray-700">
                    Lagere CO₂-uitstoot en minder milieubelasting door duurzame productie en 
                    materiaalgebruik.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start">
                <BarChart className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold mb-2">Prestatiemeting</h4>
                  <p className="text-gray-700">
                    Objectieve beoordeling van duurzaamheidsprestaties volgens internationale 
                    standaarden.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Circular Economy */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-start">
              <Recycle className="w-8 h-8 text-green-600 mt-1 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-4">Circulaire Economie</h3>
                <p className="text-gray-700">
                  Onze BREEAM-certificering ondersteunt de transitie naar een circulaire economie 
                  door het stimulering van hergebruik van materialen en het minimaliseren van afval 
                  in het productieproces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BREEAMPage;