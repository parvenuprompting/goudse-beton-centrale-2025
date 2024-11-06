import React from 'react';
import { Truck, Ruler, Clock, Users } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import BackButton from '../../components/BackButton';

const MixerpompPage = () => {
  const specifications = [
    { label: 'Type', value: 'Stetter' },
    { label: 'Inhoud', value: '7 m³' },
    { label: 'Doorrijhoogte', value: '4 meter' },
    { label: 'Stortcapaciteit', value: '50 m³/uur' },
    { label: 'Pompbereik horizontaal', value: '21 meter' },
    { label: 'Pompbereik Verticaal', value: '26 meter' },
    { label: 'Min. uitklaphoogte in een hal', value: '10 meter' }
  ];

  const benefits = [
    {
      icon: Ruler,
      title: 'Groot Bereik',
      description: '21 meter horizontaal bereik, uitbreidbaar met liggende leiding'
    },
    {
      icon: Clock,
      title: 'Efficiënt',
      description: 'Voorkomt lange wachttijden door optimale afstemming'
    },
    {
      icon: Users,
      title: 'Kostenbesparend',
      description: 'Eenvoudige bediening door één persoon'
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
        title="GBC Mixerpomp"
        description="Efficiënte levering en verwerking van mortel met geïntegreerde pompinstallatie"
        Icon={Truck}
        imageUrl="https://i.imgur.com/MmpM6A1.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Description */}
          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed">
              Efficiënt en snel. Kranen, liften en kruiwagens zijn overbodig met de inzet van een 
              mixerpomp van de GBC. Met een groot horizontaal bereik van 21 meter uit de giek en 
              verlengd met liggende leiding worden obstakels eenvoudig overbrugd, zodat ook op 
              kleine bouwplaatsen de betonmortel snel verwerkt wordt.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Betonmengsel én pomp zijn optimaal op elkaar afgestemd. Dit voorkomt verrassingen 
              en lange wachttijden. Een mixerpomp houdt de personeelskosten laag. De pomp wordt 
              immers eenvoudig door één persoon bediend.
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

          {/* Technical Specifications */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Technische Gegevens Mixerbetonpomp</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="min-w-full">
                <tbody className="divide-y divide-gray-200">
                  {specifications.map((spec, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-700 font-medium">{spec.label}</td>
                      <td className="px-6 py-4 text-gray-600">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://www.gbcgouda.nl/media/3221/mixerpomp-bereik-van-nieuwpoort741f.jpg?width=369.5652173913044&height=500"
                alt="Mixerpomp bereik"
                className="w-full h-auto"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-gray-800">Mixerpomp Bereik</h3>
                <p className="text-gray-600">Visualisatie van het bereik van onze mixerpomp</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://www.gbcgouda.nl/media/3220/opstelplaats-mixerpomp-van-nieuwpoort33d3.jpg?width=248&height=149"
                alt="Opstelplaats mixerpomp"
                className="w-full h-auto"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-gray-800">Opstelplaats</h3>
                <p className="text-gray-600">Voorbeeld van een mixerpomp opstelling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MixerpompPage;