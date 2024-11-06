import React from 'react';
import { Package, CheckCircle2, AlertTriangle, Thermometer, Ruler } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import BackButton from '../../components/BackButton';

const WeberCemfloorZandcementPage = () => {
  const specifications = [
    { property: 'Druksterkte van 16 tot 24 uur', value: '4 MPa (beloopbaar)' },
    { property: 'Huidtreksterkte (norm 0,7 MPa)', value: '> 1 MPa' },
    { property: 'Volumieke massamortelsoort', value: '2150 kg/m³' },
    { property: 'Vloeimaat (Hägermann kegel)', value: '260 ± 20 mm' },
    { property: 'Minimale dikte dekvloer', value: '20 mm' },
    { property: 'Maximale dikte dekvloer', value: '120 mm' }
  ];

  const strengthTypes = [
    {
      type: 'C16 F3',
      druksterkte: '16 MPa',
      buigtreksterkte: '3 MPa'
    },
    {
      type: 'C20 F4',
      druksterkte: '20 MPa',
      buigtreksterkte: '4 MPa'
    },
    {
      type: 'C25 F5',
      druksterkte: '25 MPa',
      buigtreksterkte: '5 MPa'
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
        title="Weber Cemfloor Zandcementgebonden Gietdekvloermortel"
        description="20 mm tot 120 mm - Het arbo-technische alternatief voor traditionele dekvloeren"
        Icon={Package}
        imageUrl="https://i.imgur.com/AG1N5tW.jpg"
      />
      {/* Rest of the component remains the same */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Mission Statement */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Zandcement gieten onze passie!
            </h2>
          </div>

          {/* Main Description */}
          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed">
              Weber Cemfloor zandcement combi- en gietdekvloermortel is het arbo-technisch alternatief 
              voor de traditioneel gesmeerde zandcement dekvloeren, waarbij een zeer hoge kwaliteit 
              zandcement dekvloer wordt gerealiseerd. Een gespecialiseerd netwerk van centrales in 
              Nederland voert dit product vanuit een intensieve samenwerking met Weber.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Zowel zwevend als hechtend is het de ideale dekvloer, die kan dienen voor alle mogelijke 
              later aan te brengen eindvloerenvloeren, zoals tegels, PVC, PU, tapijt en parket. Door 
              het hoge vloeigedrag kunnen in een staande werkhouding vele vierkante meters per medewerker 
              per dag worden gerealiseerd en kan een hoge vlakheid worden bereikt.
            </p>
          </div>

          {/* Certification */}
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Certificering</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                <span>NEN-EN 13813</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                <span>CUR-Aanbeveling 110</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                <span>CE-markering</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                <span>KOMO certificaat</span>
              </div>
            </div>
          </div>

          {/* Strength Types */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Beschikbare Kwaliteiten</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {strengthTypes.map((type, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold mb-4">{type.type}</h4>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <span className="font-medium">Druksterkte:</span> {type.druksterkte}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Buigtreksterkte:</span> {type.buigtreksterkte}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Technische Specificaties</h3>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="min-w-full">
                <tbody className="divide-y divide-gray-200">
                  {specifications.map((spec, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-700 font-medium">{spec.property}</td>
                      <td className="px-6 py-4 text-gray-600">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cracking Information */}
          <div className="bg-yellow-50 p-6 rounded-lg">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 mr-3" />
              <div>
                <h3 className="text-xl font-semibold mb-4">Scheurvorming</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Zowel bij hechtende als zwevende dekvloeren kunnen scheuren ontstaan. De 
                    scheurwijdte blijft normaal tot 0,3 mm, conform de NEN 2742. Deze plastische 
                    krimpscheuren ontstaan vaak de eerste dagen of na ca. 8 weken.
                  </p>
                  <p>
                    Bij zwevende dekvloeren en dekvloeren op een tussenlaag moet de grootte van 
                    vloervelden worden beperkt tot maximaal 10 x 10 m¹.
                  </p>
                  <p>
                    Voor PVC of PU vloeren is minimaal 3 mm flexibele egaline vereist om eventuele 
                    scheuren te neutraliseren.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Processing Instructions */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Verwerking</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <p className="text-gray-700">
                De mortel wordt aangevoerd per betonmixer en kan worden verpompt met een aanhangerpomp. 
                Afwerking gebeurt met een aluminium drijfrei in twee richtingen.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="font-semibold mb-3">Temperatuur Vereisten</h4>
                  <div className="flex items-center">
                    <Thermometer className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">5°C - 25°C tijdens verwerking</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Verwerkingstijd</h4>
                  <div className="flex items-center">
                    <Ruler className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">Tot 1,5 uur na aankomst</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Checklist for Floor Heating */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Checklist Vloerverwarming</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Leidingen om de 30 cm vastzetten tegen opdrijven</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Leidingen vullen met water voor lekcontrole</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Minimaal 25 mm gietvloerdikte boven leidingen</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Dilataties langs wanden bij zwevende dekvloeren</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Wapeningsgaas en kantstroken rond kolommen</span>
              </li>
            </ul>
          </div>

          {/* External Link */}
          <div className="text-center">
            <a 
              href="https://www.nl.weber/vloeren/weber-cemfloor/weber-cemfloor-readymix-rm/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Meer informatie op de Weber Cemfloor website →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeberCemfloorZandcementPage;