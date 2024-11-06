import React from 'react';
import { Wrench } from 'lucide-react';
import ProductSection from '../ProductSection';
import FeatureList from '../FeatureList';
import BackToOverview from '../BackToOverview';

const StaalvezelBetonSection = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <BackToOverview />
        <ProductSection
          title="GBC Staalvezel Beton"
          icon={<Wrench className="w-8 h-8 text-gray-600" />}
          imageUrl="https://i.imgur.com/rILz7hZ.jpg"
          imageAlt="Staalvezel Beton"
        >
          <div className="space-y-6">
            <p className="text-gray-600">
              GBC Betonmortel met staalvezels, kunststofvezels en/of combinatie daarvan heeft 
              naast een hoge treksterkte ook andere bijzondere eigenschappen. Denk aan een hoge 
              taaiheid. De GBC combineert deze eigenschappen in GBC staalvezelbeton.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Alternatief voor Traditionele Wapening</h3>
              <p className="text-gray-700">
                GBC staalvezelbeton is een goed alternatief voor het traditioneel gewapende beton. 
                In plaats van de wapeningsstaven worden er staalvezels aan de betonspecie toegevoegd 
                waardoor dezelfde constructieve eigenschappen behaald kunnen worden.
              </p>
            </div>

            <FeatureList
              items={[
                'Tijdbesparing door geïntegreerd proces',
                'Een derde minder staal nodig',
                'Kwart minder energie verbruik',
                'Kleinere carbon footprint',
                'Hogere draagkracht voor slankere constructies'
              ]}
              bgColor="bg-gray-50"
              iconColor="text-gray-600"
            />

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Procesoptimalisatie</h3>
              <p className="text-gray-700">
                In tegenstelling tot traditioneel gewapend beton, waarbij de betonproductie en 
                het maken en plaatsen van de wapening gescheiden werkprocessen zijn, is de 
                productie van SVB één proces. Alles komt uit de betonmixer.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Duurzaamheidsvoordelen</h3>
              <p className="text-gray-700">
                Met staalvezels vraagt de productie minder tijd, minder logistiek en opslag, 
                minder administratie en productcontroles. Dit resulteert in een significant 
                lagere milieubelasting.
              </p>
            </div>
          </div>
        </ProductSection>
      </div>
    </div>
  );
};

export default StaalvezelBetonSection;