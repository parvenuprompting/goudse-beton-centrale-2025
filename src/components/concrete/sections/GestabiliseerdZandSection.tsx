import React from 'react';
import { Package } from 'lucide-react';
import ProductSection from '../ProductSection';
import FeatureList from '../FeatureList';
import BackToOverview from '../BackToOverview';

const GestabiliseerdZandSection = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <BackToOverview />
        <ProductSection
          title="GBC Gestabiliseerd Zand en Stampbeton"
          icon={<Package className="w-8 h-8 text-yellow-600" />}
          imageUrl="https://i.imgur.com/I8P04x1.jpg"
          imageAlt="Gestabiliseerd Zand"
        >
          <div className="space-y-6">
            <p className="text-gray-600">
              Hoofdzakelijk in gebruik voor wegenbouw. Tevens de ideale basis voor een vlakke, 
              draagkrachtige ondergrond bij het stellen van trottoirbanden en betonnen (keer)wanden.
            </p>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Stabiele Basis</h3>
              <p className="text-gray-700">
                Gemaakt van 99.5% circulaire grondstoffen. Het cement geeft het zand (extra) 
                stabiliteit en hydraulische eigenschappen. Vervaardiging gebeurt in onze 
                betoncentrale in Gouda voor een optimale menging.
              </p>
            </div>

            <FeatureList
              items={[
                'Voorkom uitdrogen bij droog en warm weer',
                'GBC stampbeton wordt geleverd met 4/32 grind',
                'Ook beschikbaar met ECO granulaat 8/16 mm',
                'Leverbaar met vertrager voor langere verwerkbaarheid',
                'Geleverd onder Besluit Bodem Kwaliteit certificaat'
              ]}
              bgColor="bg-yellow-50"
              iconColor="text-yellow-600"
            />

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Vertragen voor Langere Verwerkbaarheid</h3>
              <p className="text-gray-700">
                GBC gestabiliseerd zand kan ook met vertrager worden geleverd. Door deze 
                toevoeging kan de zand cementspecie zelfs tot 8, 24 of 48 uur verwerkbaar 
                blijven. Belangrijk is wel de bewaaradviezen op te volgen.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Kwaliteit</h3>
              <p className="text-gray-700">
                Het gestabiliseerde zand wordt onder Besluit Bodem Kwaliteit* (BBK) certificaat 
                geleverd. (*Minimaal 100kg cement per kuub)
              </p>
            </div>
          </div>
        </ProductSection>
      </div>
    </div>
  );
};

export default GestabiliseerdZandSection;