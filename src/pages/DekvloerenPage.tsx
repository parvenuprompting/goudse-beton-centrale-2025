import React from 'react';
import { Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProductSection from '../components/concrete/ProductSection';
import FeatureList from '../components/concrete/FeatureList';

const DekvloerenPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Dekvloeren</h1>
          <p className="text-xl text-gray-300">Professionele dekvloeroplossingen voor elk project</p>
        </div>
      </div>

      {/* Products */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8">
          {/* Weber Cemfloor */}
          <ProductSection
            title="Weber Cemfloor Zandcementgebonden Gietdekvloermortel"
            icon={<Layers className="w-8 h-8 text-blue-600" />}
            imageUrl="https://i.imgur.com/AG1N5tW.jpg"
            imageAlt="Weber Cemfloor Dekvloer"
            onMoreInfo={() => navigate('/diensten/weber-cemfloor/zandcement')}
          >
            <div className="space-y-6">
              <p className="text-gray-600">
                Weber Cemfloor zandcement combi- en gietdekvloermortel is het arbo-technisch 
                alternatief voor de traditioneel gesmeerde zandcement dekvloer. Toepasbaar van 
                20 mm tot 120 mm.
              </p>

              <FeatureList
                items={[
                  'Arbo-technisch alternatief voor traditionele methoden',
                  'Toepasbaar van 20mm tot 120mm',
                  'Efficiënte verwerking',
                  'Hoge kwaliteit eindresultaat',
                  'Geschikt voor vloerverwarming'
                ]}
                bgColor="bg-blue-50"
                iconColor="text-blue-600"
              />
            </div>
          </ProductSection>

          {/* Anhydriet */}
          <ProductSection
            title="Anhydriet Gietdekvloermortel"
            icon={<Layers className="w-8 h-8 text-green-600" />}
            imageUrl="https://i.imgur.com/kFZ4oWH.jpg"
            imageAlt="Anhydriet Dekvloer"
            onMoreInfo={() => navigate('/diensten/anhydriet')}
          >
            <div className="space-y-6">
              <p className="text-gray-600">
                Direct op de draagvloer, zwevend op een isolatielaag of als basis voor 
                vloerverwarming; het zijn slechts enkele toepassingen van de calciumsulfaat 
                gebonden gietdekvloer. Toepasbaar van 30 mm tot 100 mm.
              </p>

              <FeatureList
                items={[
                  'Direct op draagvloer toepasbaar',
                  'Geschikt voor zwevende constructies',
                  'Ideaal voor vloerverwarming',
                  'Toepasbaar van 30mm tot 100mm',
                  'Calciumsulfaat gebonden'
                ]}
                bgColor="bg-green-50"
                iconColor="text-green-600"
              />
            </div>
          </ProductSection>

          {/* Renoline */}
          <ProductSection
            title="Renoline Anhydriet Gietdekvloermortel"
            icon={<Layers className="w-8 h-8 text-purple-600" />}
            imageUrl="https://i.imgur.com/340vVML.jpg"
            imageAlt="Renoline Dekvloer"
            onMoreInfo={() => navigate('/diensten/renoline')}
          >
            <div className="space-y-6">
              <p className="text-gray-600">
                Toepasbaar vanaf 1 cm. De innovatieve GBC Renoline anhydriet gietvloer renoveert 
                uw bestaande dekvloer. Dure egalisatie mortels kunnen achterwege blijven.
              </p>

              <FeatureList
                items={[
                  'Toepasbaar vanaf 10mm',
                  'Maximale dikte 30mm',
                  'Vervangt dure egalisatiemortels',
                  'Ideaal voor renovatie',
                  'Innovatieve oplossing'
                ]}
                bgColor="bg-purple-50"
                iconColor="text-purple-600"
              />
            </div>
          </ProductSection>
        </div>
      </div>
    </div>
  );
};

export default DekvloerenPage;