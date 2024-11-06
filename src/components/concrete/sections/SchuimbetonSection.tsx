import React from 'react';
import { Feather } from 'lucide-react';
import ProductSection from '../ProductSection';
import FeatureList from '../FeatureList';
import BackToOverview from '../BackToOverview';

const SchuimbetonSection = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <BackToOverview />
        <ProductSection
          title="GBC Schuimbeton"
          icon={<Feather className="w-8 h-8 text-purple-600" />}
          imageUrl="https://i.imgur.com/Y1OUd2g.jpg"
          imageAlt="GBC Schuimbeton"
        >
          <div className="space-y-6">
            <p className="text-gray-600">
              GBC schuimbeton bestaat voornamelijk uit lucht en water. Door zijn specifieke 
              eigenschappen en verwerkbaarheid is deze betonsoort geschikt voor verschillende 
              bijzondere toepassingen in woning- en wegenbouw.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Innovatieve Productie</h3>
              <p className="text-gray-700">
                Door de aanwezigheid van onze innovatieve droogstoffen installatie beschikt de 
                GBC over de mogelijkheid om zowel de droge alsook de natte schuiminstallaties 
                te beleveren.
              </p>
            </div>

            <FeatureList
              items={[
                'Uitstekende isolerende eigenschappen',
                'Eenvoudig aan te brengen in moeilijk bereikbare ruimten',
                'Ideaal voor funderingen en vloerliften',
                'Perfect voor renovatieprojecten',
                'Geschikt voor dakafschotlagen'
              ]}
              bgColor="bg-purple-50"
              iconColor="text-purple-600"
            />

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Toepassingen in Woningbouw</h3>
              <p className="text-gray-700">
                In de woningbouw wordt het product vooral gebruikt om zijn isolerende eigenschappen. 
                Bij toepassing kan het product eenvoudig met een slang ook in de moeilijk 
                bereikbare ruimten komen.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Wegenbouw Toepassingen</h3>
              <p className="text-gray-700">
                In de wegenbouw wordt GBC schuimbeton vooral toegepast als basis in gebieden met 
                een geringe draagkracht. Het wordt ook gebruikt onder sportvelden voor optimale 
                gewichtsverdeling en stabiliteit.
              </p>
            </div>
          </div>
        </ProductSection>
      </div>
    </div>
  );
};

export default SchuimbetonSection;