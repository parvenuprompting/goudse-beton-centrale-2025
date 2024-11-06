import React from 'react';
import { Droplet, CheckCircle2, Users, Ruler } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import BackButton from '../../components/BackButton';

const MortelpompPage = () => {
  const benefits = [
    {
      icon: Ruler,
      title: 'Compact & Flexibel',
      description: 'Perfect voor kleine oppervlaktes en nauwkeurig werk'
    },
    {
      icon: Users,
      title: 'Complete Service',
      description: 'Optioneel inclusief pomp en personeel voor afwerking'
    },
    {
      icon: CheckCircle2,
      title: 'Veelzijdig',
      description: 'Geschikt voor diverse soorten mortel en beton'
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
        title="GBC Kleine Mortelpomp"
        description="Ideaal voor kleinere projecten en moeilijk bereikbare locaties"
        Icon={Droplet}
        imageUrl="https://i.imgur.com/64uud0I.jpg"
        imagePosition="bottom"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Description */}
          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed">
              De kleine flexibele betonpomp kan de oplossing zijn voor uw werken die niet met een 
              mixerpomp of betonpomp uitgevoerd kunnen worden. De betonpompen die u misschien kent, 
              zijn vaak groot en daardoor zijn ze alleen te gebruiken voor grote oppervlaktes.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Het komt natuurlijk ook voor dat er kleine oppervlakten gestort moeten worden met 
              beton. In dat geval kan er beter worden gekozen voor kleine betonpompen. Een kleine 
              betonpomp huren is bij ons geen enkel probleem, en zal ervoor zorgen dat niet alleen 
              een klein oppervlak gestort kan worden, maar ook dat u nauwkeuriger kunt werken dan 
              met een grote pomp.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <benefit.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Applications */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Toepassingen</h2>
            <p className="text-gray-700 mb-4">
              Ook de GBC Nextfloor cementgebonden gietmortel en anhydriet gietmortel laten zich 
              prima met deze kleine betonpomp verwerken.
            </p>
          </div>

          {/* Rental & Service */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Verhuur & Service</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Flexibele Oplossingen</h3>
                <p className="text-gray-700">
                  Kleine betonpompen kunt u bij ons huren, maar in overleg kunnen we onderzoeken 
                  of wij het storten uit handen te geven.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Complete Service voor Dekvloeren</h3>
                <p className="text-gray-700">
                  De GBC Nextfloor cementgebonden gietmortel is ook zeer geschikt voor een enkele 
                  woning of klein project waarin dekvloeren dienen te worden aangebracht. Deze 
                  dienst verlenen wij u graag waarbij wij de pomp verzorgen en het personeel 
                  leveren voor de afwerking van de vloer.
                </p>
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Note:</strong> De aannemer is verantwoordelijk om de hoogte van de 
                    vloer aan te geven en te bewaken.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortelpompPage;