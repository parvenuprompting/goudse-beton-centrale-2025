import React from 'react';
import { Construction } from 'lucide-react';
import ProductSection from '../ProductSection';
import FeatureList from '../FeatureList';
import BackToOverview from '../BackToOverview';

const GietbouwBetonSection = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <BackToOverview />
        <ProductSection
          title="GBC Gietbouw Beton"
          icon={<Construction className="w-8 h-8 text-orange-600" />}
          imageUrl="https://i.imgur.com/jfKhW6Q.jpg"
          imageAlt="GBC Gietbouw Beton"
        >
          <div className="space-y-6">
            <p className="text-gray-600">
              Door de oplopende levertijden in de prefab industrie en het tekort aan 
              kalkzandsteenlijmers zal het gietbouwproces weer meer en meer de keuze in het 
              bouwproces gaan worden.
            </p>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Veilig Proces</h3>
              <p className="text-gray-700">
                Bij koude gietbouw wordt een slimme combinatie van bindmiddelen en hulpstoffen 
                toegepast die ervoor zorgt dat het beton ook zonder verwarmen voldoende sterkte 
                zal ontwikkelen gedurende de gebruikelijke verhardingstijd van circa 16 uur.
              </p>
            </div>

            <FeatureList
              items={[
                'Gebalanceerde temperatuurontwikkeling',
                'Geschikt voor binnenstedelijke projecten',
                'Geen stookkosten of gasinstallatie nodig',
                'Lagere faalkosten in afbouwfase',
                'Hoge bouwsnelheid door dagelijks ontkisten'
              ]}
              bgColor="bg-orange-50"
              iconColor="text-orange-600"
            />

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Temperatuurbalans</h3>
              <p className="text-gray-700">
                Bij koude gietbouw ontwikkelt de mortel van circa 15°C in het verhardingsproces 
                een temperatuur van hooguit 30 tot 40°C. Bij het ontkisten is het temperatuurverschil 
                relatief beperkt in vergelijking met gestookte gietbouw.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Toepassingen</h3>
              <p className="text-gray-700">
                Ideaal voor de bouw van appartementen en seriematige grondgebonden woningen, 
                vooral in binnenstedelijke locaties waar opslag of toepassing van propaan of 
                aardgas niet mogelijk of toegestaan is.
              </p>
            </div>
          </div>
        </ProductSection>
      </div>
    </div>
  );
};

export default GietbouwBetonSection;