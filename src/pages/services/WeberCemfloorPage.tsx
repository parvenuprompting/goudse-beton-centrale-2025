import React from 'react';
import { Package, Mail, CheckCircle2, AlertTriangle } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import BackButton from '../../components/BackButton';

const WeberCemfloorPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-4">
          <BackButton />
        </div>
      </div>
      <ServiceHero
        title="Weber Cemfloor"
        description="Hoogwaardige cementgebonden gietmortel voor perfecte dekvloeren"
        Icon={Package}
        imageUrl="https://i.imgur.com/AG1N5tW.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Intro Section */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Projecten tot 100 m² voeren wij graag voor u uit!</h2>
            <div className="flex items-center text-blue-600">
              <Mail className="w-5 h-5 mr-2" />
              <a href="mailto:verkoop@gbcgouda.nl" className="hover:underline">
                Stuur uw aanvraag naar verkoop@gbcgouda.nl
              </a>
            </div>
          </div>

          {/* Main Description */}
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Arbo innovaties zijn onze passie!</h2>
            <p className="text-gray-700 mb-6">
              GBC Cemfloor cementgebonden combi- en gietdekvloermortel is het arbo-technisch alternatief voor de traditioneel gesmeerde dekvloeren, waarbij een zeer hoge kwaliteit dekvloer wordt gerealiseerd. Een gespecialiseerd netwerk van centrales in Nederland voert dit product.
            </p>
            <p className="text-gray-700 mb-6">
              Zowel zwevend als hechtend is het de ideale dekvloer, die kan dienen voor alle mogelijke later aan te brengen eindvloerenvloeren, zoals tegels, PVC, PU, tapijt en parket. Door het hoge vloeigedrag kunnen in een staande werkhouding vele vierkante meters per medewerker per dag worden gerealiseerd en kan een hoge vlakheid worden bereikt. De dekvloer is de volgende dag beloopbaar.
            </p>
          </div>

          {/* Certification */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Certificering</h3>
            <p className="text-gray-700">
              Weber Cemfloor cementgebonden gietvloermortel voldoet aan:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                <span>NEN-EN 13813</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                <span>CUR-Aanbeveling 110</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                <span>CE-markering</span>
              </li>
            </ul>
          </div>

          {/* Types Table */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Beschikbare Types</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-gray-700">Type</th>
                    <th className="px-6 py-3 text-left text-gray-700">Toepassing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">CT C16 F3</td>
                    <td className="px-6 py-4">Voor hechtende en zwevende dekvloeren</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">CT C20 F4</td>
                    <td className="px-6 py-4">Voor hechtende en zwevende dekvloeren</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">CT C25 F5</td>
                    <td className="px-6 py-4">Voor renovatie balkenbroodjes vloeren (druklaag en dekvloer in 1 product)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Properties Table */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Eigenschappen</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-gray-700">Eigenschap</th>
                    <th className="px-6 py-3 text-left text-gray-700">C16 F3</th>
                    <th className="px-6 py-3 text-left text-gray-700">C20 F4</th>
                    <th className="px-6 py-3 text-left text-gray-700">C25 F5</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Gemiddelde druksterkte</td>
                    <td className="px-6 py-4">16 N/mm²</td>
                    <td className="px-6 py-4">20 N/mm²</td>
                    <td className="px-6 py-4">25 N/mm²</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Gemiddelde buigtreksterkte</td>
                    <td className="px-6 py-4">3 N/mm²</td>
                    <td className="px-6 py-4">4 N/mm²</td>
                    <td className="px-6 py-4">5 N/mm²</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold mb-2">Algemene Eigenschappen</h4>
                <ul className="space-y-2">
                  <li>• Druksterkte na 16-24 uur: 4 N/mm² (beloopbaar)</li>
                  <li>• Volumieke massamortelsoort: 2180 kg/m³</li>
                  <li>• Vloeimaat (Hägermann kegel): 260 ± 20 mm</li>
                  <li>• Minimale dikte dekvloer: 50 mm</li>
                  <li>• Maximale dikte dekvloer: 100 mm</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cracking Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Scheurvorming</h3>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mb-4" />
              <p className="text-gray-700 mb-4">
                Zowel bij hechtende als zwevende dekvloeren kunnen scheuren ontstaan. De scheurwijdte blijft normaal tot 0,3 mm, conform de NEN 2742. Bij Weber Cemfloor gietdekvloeren ontstaan deze plastische krimpscheuren vaak na ca. 8 weken.
              </p>
              <p className="text-gray-700">
                Bij zwevende dekvloeren en dekvloeren op een tussenlaag kan bij grote vloervelden grotere scheuren ontstaan. Beperk daarom de grootte van de vloervelden tot maximaal 10 x 10 m¹.
              </p>
            </div>
          </div>

          {/* Processing Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Verwerking</h3>
            <div className="prose max-w-none text-gray-700">
              <p>
                Weber Cemfloor cementgebonden gietdekvloermortel wordt aangevoerd per betonmixer en kan worden verpompt met een aanhangerpomp. De dekvloer wordt afgewerkt door een aluminium drijfrei licht op en neer te bewegen in twee richtingen.
              </p>
              <ul className="mt-4 space-y-2">
                <li>• Controleer dekvloerdikte en peil vooraf en frequent tijdens het aanbrengen</li>
                <li>• Temperatuur van ruimte en ondergrond moet tussen 5 en 25°C zijn</li>
                <li>• Voor eindvloer adviseren wij de dekvloer licht op te schuren</li>
                <li>• Flexibele egaline op basis van cement toepassen, minimale dikte 3mm</li>
              </ul>
            </div>
          </div>

          {/* Checklist */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Checklist Vloerverwarming</h3>
            <div className="bg-green-50 p-6 rounded-lg">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-2" />
                  <span>Vastzetten om de 30 cm om opdrijven van leidingen te voorkomen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-2" />
                  <span>Minimaal 25 mm gietvloerdikte boven de leidingen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-2" />
                  <span>Dilataties en kantstroken aanbrengen (dubbele kantstrook bij kolommen)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeberCemfloorPage;