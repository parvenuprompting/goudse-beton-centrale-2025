import React from 'react';
import { Layers, Zap, CheckCircle2, AlertTriangle, MapPin } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import BackButton from '../../components/BackButton';

const AnhydrietPage = () => {
  const strengthTypes = [
    { type: 'CA C16 F4', druksterkte: '16 N/mm²', buigtreksterkte: '4 N/mm²' },
    { type: 'CA C20 F5', druksterkte: '20 N/mm²', buigtreksterkte: '5 N/mm²' },
    { type: 'CA C25 F6', druksterkte: '25 N/mm²', buigtreksterkte: '6 N/mm²' },
    { type: 'CA C30 F7', druksterkte: '30 N/mm²', buigtreksterkte: '7 N/mm²' },
    { type: 'CA C35 F7', druksterkte: '35 N/mm²', buigtreksterkte: '7 N/mm²' }
  ];

  const regions = [
    'Het Groene Hart',
    'Rotterdam',
    'Den Haag',
    'Westland',
    'Zuid-Hollandse eilanden',
    'Utrecht',
    'Betuwe',
    'West-Brabant',
    'Drechtsteden'
  ];

  return (
    <div className="pt-20">
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-4">
          <BackButton />
        </div>
      </div>
      <ServiceHero
        title="Anhydriet Gietdekvloermortel"
        description="30 mm tot 100 mm - De ideale basis voor uw vloer"
        Icon={Layers}
        imageUrl="https://i.imgur.com/kFZ4oWH.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Energy Savings Highlight */}
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-green-900">
                Bespaar tot 9% op uw energiekosten
              </h2>
            </div>
            <p className="text-green-800">
              Bij toepassing van een warmtepomp en vloerverwarming kunt u tot 9% besparen op uw energie.
            </p>
            <a 
              href="https://www.gietdekvloeren.com/warmtepomp-gietdekvloer-verlaging-energiekosten/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-green-700 hover:text-green-800 font-medium"
            >
              Lees meer over energiebesparing →
            </a>
          </div>

          {/* Main Description */}
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Arbo innovaties zijn onze passie!</h2>
            <p className="text-gray-700">
              Werken met een GBC anhydrietvloer spaart de gezondheid van de vloerenlegger. Het zware 
              lichamelijke werk, nodig voor het aanbrengen van zandcement smeer dekvloeren, is door 
              het gieten verleden tijd. De rug, armen en knieën van uw mensen worden gespaard.
            </p>
            <p className="text-gray-700 mt-4">
              Een zeer belangrijke reden hiervoor is de arbeidsvriendelijke verwerking van de gietvloer. 
              In tegenstelling tot een smeervloer is de werkhouding bij het aanbrengen van een gietvloer 
              aanzienlijk ergonomisch. Het verlicht de lichamelijke arbeid aanzienlijk. Het gevolg 
              hiervan is een sterke daling van het ziekteverzuim en vermindering van de WAO-instroom.
            </p>
          </div>

          {/* Clean Process */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Een schone klus</h3>
            <p className="text-gray-700">
              Met de inzet van een aanhanger pomp en slangen komt de gietmortel direct op de vloer 
              zonder rest gietspecie.
            </p>
          </div>

          {/* Important Notes */}
          <div className="bg-yellow-50 p-6 rounded-lg">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 mr-3" />
              <div>
                <h3 className="text-xl font-semibold mb-4">Aandachtspunten bij GBC anhydrietspecie</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Niet geschikt voor blijvend natte toepassingen</li>
                  <li>• Tegellijm en egaline moeten specifiek worden afgestemd</li>
                  <li>• Eerste 48 uur: gesloten ruimte met minimaal 80% luchtvochtigheid</li>
                  <li>• Voorkom directe zoninstraling en tocht</li>
                  <li>• Droogtijd: ongeveer 1 cm per week onder normale condities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Delivery Area */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <MapPin className="w-6 h-6 text-blue-600 mr-2" />
              Leveringsgebied
            </h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {regions.map((region, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span className="text-gray-700">{region}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Properties */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Eigenschappen GBC anhydriet gietmortel</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-gray-700">Type</th>
                    <th className="px-6 py-3 text-left text-gray-700">Druksterkte</th>
                    <th className="px-6 py-3 text-left text-gray-700">Buigtreksterkte</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {strengthTypes.map((type, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">{type.type}</td>
                      <td className="px-6 py-4">{type.druksterkte}</td>
                      <td className="px-6 py-4">{type.buigtreksterkte}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quality Standards */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Kwaliteit</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-2" />
                <p className="text-gray-700">
                  Voldoet aan NEN 13813 en CUR aanbeveling 107
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-2" />
                <p className="text-gray-700">
                  Eerste 48 uur geen belasting toegestaan
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-2" />
                <p className="text-gray-700">
                  Mogelijke vlieshuid moet in afbouwfase worden verwijderd of opgeschuurd
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnhydrietPage;