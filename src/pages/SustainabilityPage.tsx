import React from 'react';
import { Leaf, Award, Shield } from 'lucide-react';
import ProductSection from '../components/concrete/ProductSection';

const SustainabilityPage = () => {
  return (
    <div className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Duurzaamheid</h1>
          <p className="text-xl text-gray-300">
            Onze inzet voor een duurzame toekomst in de betonindustrie
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8">
          {/* CSC Certification Section */}
          <ProductSection
            title="CSC Goud 'R' Certificering"
            icon={<Leaf className="w-8 h-8 text-green-600" />}
            imageUrl="https://i.imgur.com/dAOo7Yu.png"
            imageAlt="CSC Certification"
          >
            <div className="space-y-6">
              <p className="text-gray-600">
                De Concrete Sustainability Council (CSC) is een initiatief van de cement- en 
                betonindustrie. CSC heeft een certificatiesysteem ontwikkeld voor het verantwoord 
                inkopen van grondstoffen voor beton.
              </p>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Onze Prestaties</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Eerste bedrijf in Nederland met R-module (2020)</li>
                  <li>• Meer dan 10% secundair toeslagmateriaal in elke kuub</li>
                  <li>• CSC Goud certificaat houder</li>
                  <li>• Jaarlijkse reductiedoelstelling van 2%</li>
                  <li>• Continue monitoring en verbetering</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Strenge Eisen</h3>
                <p className="text-gray-700">
                  Om het keurmerk te mogen voeren, voldoen we aan strenge eisen op gebied van:
                </p>
                <ul className="mt-2 space-y-2 text-gray-700">
                  <li>• Kwaliteit en betrouwbaarheid van levering</li>
                  <li>• CO₂-emissie en materiaalkringloop</li>
                  <li>• Veiligheid en arbeidsomstandigheden</li>
                  <li>• Wet- en regelgeving</li>
                  <li>• Mensenrechten en maatschappelijke effecten</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Maatschappelijk Verantwoord Ondernemen</h3>
                <p className="text-gray-700">
                  Als CSC-gecertificeerd bedrijf tonen we aan dat we een partner zijn die 
                  kwaliteit en professionaliteit combineert met maatschappelijk verantwoord 
                  ondernemen. We bieden onze klanten de zekerheid dat onze grondstoffen, 
                  producten en bedrijfsvoering aansluiten bij hun eigen MVO-ambities.
                </p>
              </div>
            </div>
          </ProductSection>

          {/* BREEAM Section */}
          <ProductSection
            title="BREEAM Certificering"
            icon={<Award className="w-8 h-8 text-yellow-600" />}
            imageUrl="https://i.imgur.com/a8Q8Ssm.png"
            imageAlt="BREEAM Certification"
          >
            <div className="space-y-6">
              <p className="text-gray-600">
                BREEAM is hét instrument om de duurzaamheid van nieuwbouw en bestaande gebouwen 
                meetbaar te maken. De Nederlandse versie (BREEAM-NL) wordt beheerd door de Dutch 
                Green Building Council.
              </p>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Materiaal Credits</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Mat 1</h4>
                    <p className="text-gray-700">
                      Identificatie en stimulering van materialen met lage milieubelasting. 
                      Onze ontwerptool Groen beton berekent voor elk mengsel een MKI waarde 
                      in euro's.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Mat 5</h4>
                    <p className="text-gray-700">
                      Toepassing van materialen met onderbouwde herkomst, aangetoond door 
                      ons ISO 14001 milieumanagementsysteem.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">WST 2</h4>
                    <p className="text-gray-700">
                      Stimulering van gerecycled herbruikbaar toeslagmateriaal, wat we 
                      realiseren met onze ECO betonmortel.
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left">Type</th>
                      <th className="px-4 py-3 text-right">MKI (€)</th>
                      <th className="px-4 py-3 text-right">GWP (kg CO₂)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      ['Stelspecie 100kg', '3.25', '37.74'],
                      ['C12/15 X0 100% Eco', '6.62', '84.68'],
                      ['C20/25 XC2', '8.33', '100.85'],
                      ['C30/37 XC4', '9.11', '110.93'],
                    ].map(([type, mki, gwp]) => (
                      <tr key={type} className="hover:bg-gray-50">
                        <td className="px-4 py-3">{type}</td>
                        <td className="px-4 py-3 text-right">{mki}</td>
                        <td className="px-4 py-3 text-right">{gwp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ProductSection>

          {/* ISO 14001 Section */}
          <ProductSection
            title="ISO 14001 Certificering"
            icon={<Shield className="w-8 h-8 text-blue-600" />}
            imageUrl="https://i.imgur.com/69mldsF.png"
            imageAlt="ISO 14001 Certification"
          >
            <div className="space-y-6">
              <p className="text-gray-600">
                De Goudse Betonmortel Centrale streeft naar meerwaarde door samenwerking in 
                projecten en het leveren van maatwerk voor de bouw. Het reduceren van onze 
                milieu-impact is hierbij een kernprincipe.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Onze Aanpak</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Breed milieumanagement programma</li>
                  <li>• Extern getoetste certificering sinds 2012</li>
                  <li>• Integratie van CO₂-reductiedoelen</li>
                  <li>• Continue verbeteringscyclus</li>
                  <li>• NEN-EN-ISO 14001:2015 gecertificeerd</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Verduurzaming Bouw</h3>
                <p className="text-gray-700">
                  De constante verbeteringscyclus van ISO 14001 zien wij als uitdaging om onze 
                  verantwoordelijkheid te nemen in het verder verduurzamen van de bouw. We gaan 
                  verder dan alleen CO₂ en energie, met een complete focus op duurzaam ontwikkelen 
                  en bouwen.
                </p>
              </div>
            </div>
          </ProductSection>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityPage;