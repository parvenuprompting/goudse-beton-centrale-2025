import React from 'react';
import { Construction, Check, Clock, Shield, Leaf, Target, Radio, DollarSign } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import BackButton from '../../components/BackButton';

const BetonpompPage = () => {
  const advantages = [
    {
      icon: Clock,
      text: 'U haalt uw strakke planning'
    },
    {
      icon: Check,
      text: 'Het verpompen van betonmortel is bedrijfszeker'
    },
    {
      icon: Shield,
      text: 'Het verpompen van betonmortel is veilig voor uw personeel'
    },
    {
      icon: Leaf,
      text: 'Het verpompen van betonmortel is milieuvriendelijk'
    },
    {
      icon: Target,
      text: 'Het verpompen van betonmortel gaat snel, tot maximaal 160 m³ per uur per machine'
    },
    {
      icon: Construction,
      text: 'Met de betonpomp kunt u het beton ook naar moeilijk bereikbare plaatsen pompen'
    },
    {
      icon: Radio,
      text: 'Betonpompen zijn voorzien van radiografische afstandsbediening, dus de machinist staat bij het werk'
    },
    {
      icon: DollarSign,
      text: 'Het verpompen van betonmortel is gemakkelijk, kostenbesparend en gebruiksvriendelijk'
    }
  ];

  const pumpTypes = [
    { type: 'Betonpomp', range: '63-59 m¹', note: '(5-delig)' },
    { type: 'Betonpomp', range: '58-54 m¹', note: '' },
    { type: 'Betonpomp', range: '52-48 m¹', note: '(5-delig)' },
    { type: 'Betonpomp', range: '42-38 m¹', note: '' },
    { type: 'Betonpomp', range: '36-32 m¹', note: '' },
    { type: 'Betonpomp', range: '34-30 m¹', note: '' },
    { type: 'Betonpomp', range: '31-27 m¹', note: 'met telescoop' },
    { type: 'Hallenpomp', range: '28-24 m¹', note: '' },
    { type: 'Hallenpomp', range: '24-20 m¹', note: '' },
    { type: 'Citypomp', range: '16-20 m¹', note: '' },
    { type: 'Citypomp', range: '12-16 m¹', note: '' },
    { type: 'Aanhanger betonpomp', range: '', note: 'tbv diverse gietmortels' }
  ];

  return (
    <div className="pt-20">
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-4">
          <BackButton />
        </div>
      </div>
      <ServiceHero
        title="GBC Betonpomp"
        description="Betonpompen vanaf 16 m¹ tot 63 m¹ overspanning"
        Icon={Construction}
        imageUrl="https://i.imgur.com/6w1zBwy.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Description */}
          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed">
              Een betonpomp transporteert op eenvoudige, veilige en milieuvriendelijke manier 
              iedere hoeveelheid GBC betonmortel van de betonmixer naar de gewenste plaats. 
              Een snelle storttijd met een groot pompbereik. Wij bieden Betonpompen aan voor 
              ieder project.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Verpompen van beton voor een fundering van een schuurtje in de achtertuin tot 
              een complete parkeergarage, of een groot infra project. Wij denken graag al in 
              een vroeg stadium met u mee en bekijken samen met u wat de beste oplossing is 
              voor uw project.
            </p>
          </div>

          {/* Advantages */}
          <div>
            <h2 className="text-2xl font-bold mb-6">De voordelen van betonpompen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div 
                  key={index}
                  className="flex items-start bg-white p-4 rounded-lg shadow-lg"
                >
                  <advantage.icon className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">{advantage.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pump Types */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Betonpompen verticaal - horizontaal bereik</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-gray-700 font-semibold">Type</th>
                    <th className="px-6 py-3 text-left text-gray-700 font-semibold">Bereik</th>
                    <th className="px-6 py-3 text-left text-gray-700 font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pumpTypes.map((pump, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-700">{pump.type}</td>
                      <td className="px-6 py-4 text-gray-700">{pump.range}</td>
                      <td className="px-6 py-4 text-gray-600">{pump.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://www.gbcgouda.nl/media/4147/gbc-1-zellingwijknl-9-12-10-bronvermelding61e2.jpg?width=613&height=460"
              alt="GBC Betonpomp in actie"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetonpompPage;