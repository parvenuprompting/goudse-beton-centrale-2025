import React from 'react';
import { Factory } from 'lucide-react';
import ProductSection from '../ProductSection';
import FeatureList from '../FeatureList';
import BackToOverview from '../BackToOverview';

const GBCBetonmortelSection = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <BackToOverview />
        <ProductSection
          title="GBC Betonmortel"
          icon={<Factory className="w-8 h-8 text-blue-600" />}
          imageUrl="https://i.imgur.com/rhoIAJx.jpg"
          imageAlt="GBC Betonmortel"
        >
          <div className="space-y-6">
            <p className="text-gray-600">
              Kennis, ervaring en assortiment. De GBC in Gouda is al meer dan 63 jaar expert in 
              de productie van mortelproducten en specialistische oplossingen op het gebied van 
              betonmortel en gietbouw. Ons bedrijf levert oplossingen vanaf 1 kuub betonmortel.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Duurzame Productie</h3>
              <p className="text-gray-700">
                Als eerste producent in Nederland beschikken wij al 4 jaar over het CSC "R" 
                certificaat. Al onze betonmortelproducten worden gemaakt met een belangrijk 
                aandeel circulaire grondstoffen. We hebben inmiddels ca 600 zonnepanelen en 
                rijden met 4 betonmixers met elektrisch aangedreven trommels.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Uitgekiende Logistiek</h3>
              <p className="text-gray-700">
                Een perfecte timing is cruciaal voor een efficiënt bouwproces. De planning van 
                de GBC zet alles op alles om het juiste product op het juiste tijdstip op de 
                juiste plaats te behalen. We worden geholpen door GPS-systemen en een uitgebreid 
                netwerk van goed opgeleide en passievolle chauffeurs.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4">Onze Sterke Punten</h3>
            <FeatureList
              items={[
                'CSC "R" goud 4 sterren certificaat',
                'Minimaal 75% vervanging van CEM I 52,5 cement',
                'Laagste MKI waarden in de markt',
                'Gevalideerde groene ontwerptool',
                'Transparante werkwijze en controle'
              ]}
              bgColor="bg-blue-50"
              iconColor="text-blue-600"
            />

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Advies op Maat</h3>
              <p className="text-gray-700">
                De nieuwste grond-, hulp- en vulstoffen maken de meest geavanceerde betonmengsels 
                mogelijk, toegespitst op ieder specifiek ontwerp. Of het nu gaat om een fundering 
                van een afdekvloer voor een nieuwbouwwoning, een overloop van een brug, een 
                ondergrondse parkeergarage of een mestkelder - voor ieder project adviseren wij 
                de beste optie.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <img
                src="https://www.gbcgouda.nl/media/5091/csc6ec1.jpg?width=68&height=94"
                alt="CSC Gold R Certificate"
                className="h-24 w-auto"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </ProductSection>
      </div>
    </div>
  );
};

export default GBCBetonmortelSection;