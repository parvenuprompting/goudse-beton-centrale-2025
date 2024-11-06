import React from 'react';
import { Droplet } from 'lucide-react';
import ProductSection from '../ProductSection';
import FeatureList from '../FeatureList';
import BackToOverview from '../BackToOverview';

const VloeispecieSection = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <BackToOverview />
        <ProductSection
          title="GBC Vloeispecie"
          icon={<Droplet className="w-8 h-8 text-blue-600" />}
          imageUrl="https://i.imgur.com/VaXHZjt.jpg"
          imageAlt="GBC Vloeispecie"
        >
          <div className="space-y-6">
            <p className="text-gray-600">
              GBC vloeispecie is zeer geschikt voor het maken van werkvloeren. Het is een 
              vloeibaar mengsel van cement, zand en water en kan dus makkelijk met slangen 
              aangebracht worden.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Arbo-technisch Voordeel</h3>
              <p className="text-gray-700">
                Voorheen werd vaak GBC Betonmortel gebruikt die door middel van een kraan met 
                betonkubel werd gestort. Dit vereiste echter zware lichamelijke arbeid. GBC 
                Vloeispecie wordt met een vloeipomp aangebracht, waarbij de vloeispecie door 
                de slangen verpompt wordt.
              </p>
            </div>

            <FeatureList
              items={[
                'Gemakkelijk en praktisch overal aan te brengen',
                'Efficiënte, tijd- en kostenbesparende productie',
                'Regelbare vloeibaarheid',
                'Geschikt voor vervuilde grond en kruipruimten',
                'Volledig recyclebaar'
              ]}
              bgColor="bg-blue-50"
              iconColor="text-blue-600"
            />

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Eigenschappen</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Ongevoelig voor vocht en schimmel</li>
                <li>• Bestand tegen rot en ongedierte</li>
                <li>• Resistent tegen zuren</li>
                <li>• Bestand tegen extreme weersinvloeden</li>
                <li>• Brandwerend</li>
              </ul>
            </div>
          </div>
        </ProductSection>
      </div>
    </div>
  );
};

export default VloeispecieSection;