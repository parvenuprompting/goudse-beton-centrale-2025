import React from 'react';
import { Leaf } from 'lucide-react';
import ProductSection from '../ProductSection';
import FeatureList from '../FeatureList';
import BackToOverview from '../BackToOverview';

const CSCBetonmortelSection = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <BackToOverview />
        <ProductSection
          title='CSC "R" Betonmortel'
          icon={<Leaf className="w-8 h-8 text-green-600" />}
          imageUrl="https://i.imgur.com/acaW1E3.png"
          imageAlt="CSC R Betonmortel"
        >
          <div className="space-y-6">
            <p className="text-gray-600">
              MKI per product te bepalen vanuit de gevalideerde "groene ontwerptool". 
              Secundaire grondstoffen cement minimaal 75% en zand en grind gemiddeld 25%.
            </p>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Circulaire Materialen</h3>
              <p className="text-gray-700">
                GBC groen ECO beton is een betonmortel op basis van circulaire materialen zoals 
                gewassen gerecyclede spoorwegballast, ECO granulaat, ECO zand of betongranulaat. 
                Deze secundaire stoffen worden hergebruikt en zijn voorzien van een KOMO certificaat 
                op basis van NEN-EN 12620 en NEN 5905.
              </p>
            </div>

            <FeatureList
              items={[
                'Secundaire granulaten 100% toepasbaar',
                'Spoorballast wordt zorgvuldig gewassen en verwerkt',
                'Geen negatief effect op CO₂-profiel',
                'ECO zand en ECO granulaat uit thermisch gereinigd asfalt',
                'Maximaal 50% vervanging zonder aanpassing rekenregels'
              ]}
              bgColor="bg-green-50"
              iconColor="text-green-600"
            />

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Hoogovenslak voor Laag CO₂ Profiel</h3>
              <p className="text-gray-700">
                Door de toepassing van maximaal 80% slak wordt de uitstoot van broeikasgassen tot 
                bijna nul gereduceerd. De GBC heeft de mogelijkheden in huis om gecertificeerde 
                betonmengsels te ontwerpen met een lage CO₂-uitstoot.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">GBC Groen ECO Betonassortiment</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• GBC groen ECO beton: 55, 75 of 100% vervanging van grove toeslagmaterialen</li>
                <li>• GBC groen ECO beton laag CO₂: Combinatie met 80% hoogovenslak</li>
                <li>• GBC groen ECO beton nul CO₂: Volledige CO₂-compensatie via emissierechten</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Climate Neutral Group Samenwerking</h3>
              <p className="text-gray-700">
                We werken samen met de Climate Neutral Group aan een klimaat neutrale wereld. 
                Onvermijdelijke CO₂-uitstoot wordt gecompenseerd via duurzame energieprojecten 
                zoals windmolenparken, zonnepanelen en duurzame bosprojecten.
              </p>
            </div>
          </div>
        </ProductSection>
      </div>
    </div>
  );
};

export default CSCBetonmortelSection;