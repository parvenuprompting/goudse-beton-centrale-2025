import React from 'react';
import { Wrench, Users, Clock, Shield, Droplet } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import BackButton from '../../components/BackButton';

const NadenvulmortelPage = () => {
  const features = [
    {
      icon: Clock,
      title: 'Snelle verwerking',
      description: 'Met slechts 2 à 3 personen worden circa 125 m¹ gevuld met een mixerpomp, betonpomp of kleine mortelpomp.'
    },
    {
      icon: Shield,
      title: 'Hoogwaardige oplossing',
      description: 'Een kant en klaar product, geleverd vanuit de betoncentrale, dat borg staat voor een consistente samenstelling en geborgde kwaliteit.'
    },
    {
      icon: Users,
      title: 'Een schone klus',
      description: 'Met behulp van een specieslang van slechts 4 cm diameter is het een efficiënte en arbo-vriendelijke verwerking en wordt restafval voorkomen.'
    },
    {
      icon: Droplet,
      title: 'Uitstekende verwerkbaarheid',
      description: 'Nadenvulmortel heeft uitstekende vloei-eigenschappen, valt niet door de naden en spoelt niet uit bij regen.'
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
        title="GBC Nadenvulmortel"
        description="Specialistische mortel voor het professioneel vullen van naden en voegen"
        Icon={Wrench}
        imageUrl="https://i.imgur.com/48LS2Xs.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Description */}
          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed">
              Wordt het kubelen of gieten? Vanaf nu is een grote ploeg mensen voor het vullen 
              van naden met kraan of kubel overbodig. Met de GBC nadenvulmortel worden voegen 
              op ieder gewenst tijdstip snel, arbeidsvriendelijk en kostenbesparend gevuld.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Dienstverlening en procesoptimalisatie onze passie!
            </h2>
            <p className="text-blue-800">
              We streven naar optimale efficiëntie en kwaliteit in elk project.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Voordelen op een rij</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Efficiënte verwerking met minimale mankracht</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Consistente kwaliteit door centrale productie</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Arbo-vriendelijke verwerking</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Minimaal restafval</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Weerbestendig tijdens verwerking</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NadenvulmortelPage;