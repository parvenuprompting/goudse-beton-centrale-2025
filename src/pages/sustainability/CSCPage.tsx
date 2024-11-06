import React from 'react';
import { Award, Leaf, Recycle, CheckCircle2 } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import BackButton from '../../components/BackButton';

const CSCPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-4">
          <BackButton />
        </div>
      </div>
      <ServiceHero
        title='CSC "R" Certificering'
        description="Duurzame betonproductie met focus op circulariteit"
        Icon={Award}
        imageUrl="https://i.imgur.com/VsplMLQ.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Description */}
          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed">
              De Concrete Sustainability Council (CSC) is een initiatief van de cement- en 
              betonindustrie. CSC heeft een certificatiesysteem ontwikkeld voor het verantwoord 
              inkopen van grondstoffen voor beton.
            </p>
          </div>

          {/* Achievements */}
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Onze Prestaties</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3" />
                <span className="text-gray-700">Eerste bedrijf in Nederland met R-module (2020)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3" />
                <span className="text-gray-700">Meer dan 10% secundair toeslagmateriaal in elke kuub</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3" />
                <span className="text-gray-700">CSC Goud certificaat houder</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3" />
                <span className="text-gray-700">Jaarlijkse reductiedoelstelling van 2%</span>
              </li>
            </ul>
          </div>

          {/* Requirements */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Strenge Eisen</h3>
            <p className="text-gray-700 mb-4">
              Om het keurmerk te mogen voeren, voldoen we aan strenge eisen op gebied van:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Leaf className="w-6 h-6 text-green-600 mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold mb-2">Milieu Impact</h4>
                  <p className="text-gray-600">CO₂-emissie en materiaalkringloop</p>
                </div>
              </div>
              <div className="flex items-start">
                <Recycle className="w-6 h-6 text-green-600 mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold mb-2">Circulariteit</h4>
                  <p className="text-gray-600">Hergebruik en recycling van materialen</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Voordelen CSC Certificering</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Aantoonbare duurzaamheid voor BREEAM-projecten</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Voldoet aan MVO-eisen van opdrachtgevers</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Transparante productieketen</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Bijdrage aan circulaire economie</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSCPage;