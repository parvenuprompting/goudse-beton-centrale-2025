import React from 'react';
import { Shield, Target, RefreshCcw, CheckCircle2 } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import BackButton from '../../components/BackButton';

const ISO14001Page = () => {
  const approaches = [
    {
      icon: Target,
      title: 'Doelgerichte Aanpak',
      description: 'Breed milieumanagement programma met concrete doelstellingen'
    },
    {
      icon: Shield,
      title: 'Externe Validatie',
      description: 'Extern getoetste certificering sinds 2012'
    },
    {
      icon: RefreshCcw,
      title: 'Continue Verbetering',
      description: 'Integratie van CO₂-reductiedoelen en verbeteringscyclus'
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
        title="ISO 14001 Certificering"
        description="Systematisch milieumanagement voor duurzame bedrijfsvoering"
        Icon={Shield}
        imageUrl="https://i.imgur.com/vr0xPZP.png"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Description */}
          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed">
              De Goudse Betonmortel Centrale streeft naar meerwaarde door samenwerking in 
              projecten en het leveren van maatwerk voor de bouw. Het reduceren van onze 
              milieu-impact is hierbij een kernprincipe.
            </p>
          </div>

          {/* Approaches Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approaches.map((approach, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <approach.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{approach.title}</h3>
                <p className="text-gray-600">{approach.description}</p>
              </div>
            ))}
          </div>

          {/* Implementation */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Onze Aanpak</h3>
            <ul className="space-y-3">
              {[
                'Breed milieumanagement programma',
                'Extern getoetste certificering sinds 2012',
                'Integratie van CO₂-reductiedoelen',
                'Continue verbeteringscyclus',
                'NEN-EN-ISO 14001:2015 gecertificeerd'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sustainability Focus */}
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Verduurzaming Bouw</h3>
            <p className="text-gray-700">
              De constante verbeteringscyclus van ISO 14001 zien wij als uitdaging om onze 
              verantwoordelijkheid te nemen in het verder verduurzamen van de bouw. We gaan 
              verder dan alleen CO₂ en energie, met een complete focus op duurzaam ontwikkelen 
              en bouwen.
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Voordelen van ISO 14001</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Voor het Milieu</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Verminderde milieu-impact</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Efficiënter gebruik van grondstoffen</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Lagere CO₂-uitstoot</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Voor de Organisatie</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Verbeterde bedrijfsprocessen</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Kostenbesparingen</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Verhoogde klanttevredenheid</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISO14001Page;