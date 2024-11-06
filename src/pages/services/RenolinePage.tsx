import React from 'react';
import { Layers, Recycle, Clock, CheckCircle2, AlertTriangle } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import BackButton from '../../components/BackButton';

const RenolinePage = () => {
  const strengthTypes = [
    { type: 'CA 25-F6', druksterkte: '25 N/mm²', buigtreksterkte: '6 N/mm²' },
    { type: 'CA 30-F7', druksterkte: '30 N/mm²', buigtreksterkte: '7 N/mm²' },
    { type: 'CA 35-F7', druksterkte: '35 N/mm²', buigtreksterkte: '7 N/mm²' }
  ];

  const benefits = [
    'Volgende dag beloopbaar',
    'Tot 1.500 m² per dag renovatie mogelijk',
    'Minder belastend voor vloerenleggers',
    '100% gerecyclede materialen',
    'Praktisch nihil krimpgedrag',
    'Consistent van samenstelling',
    'Snel verpompbaar',
    'Hoge vloeimaat voor egaal resultaat'
  ];

  return (
    <div className="pt-20">
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-4">
          <BackButton />
        </div>
      </div>
      <ServiceHero
        title="Renoline Anhydriet Gietdekvloermortel"
        description="10 mm tot 30 mm - De innovatieve renovatie-oplossing"
        Icon={Layers}
        imageUrl="https://i.imgur.com/340vVML.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Mission Statement */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Uw slankheid onze passie!
            </h2>
            <p className="text-blue-800">
              Dure egalisatie mortels kunnen achterwege blijven.
            </p>
          </div>

          {/* Main Description */}
          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed">
              De innovatieve GBC Renoline anhydriet gietvloer renoveert oude vloeren probleemloos 
              en zonder risico's. Hiermee wordt kostbare nieuwbouw voorkomen en vervallen eventuele 
              sloop- en stortkosten. De volgende dag is de vloer beloopbaar, waardoor het bouwproces 
              versneld kan worden. Per dag kan er tot wel 1.500 vierkante meter vloer worden 
              gerenoveerd. Het verwerkingsproces van de vloeren is simpel en veel minder belastend 
              voor de vloerenleggers.
            </p>
          </div>

          {/* Case Study */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">De praktijk</h3>
            <p className="text-gray-700">
              Voor een nieuwe tandartspraktijk in Rotterdam werd een oppervlakte van 200 m² in 
              anderhalf uur voorzien van GBC Reno anhydriet. Het oude gebouw dat daarvoor een 
              sauna herbergde, had een deels ruwe vloer doordat de oude tegelvloer was uitgehakt. 
              GBC Reno anhydriet is inmiddels breed geaccepteerd in de renovatiemarkt en wordt 
              veelvuldig toegepast.
            </p>
          </div>

          {/* Benefits Grid */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Voordelen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal Base */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Ideale ondergrond</h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                De GBC Renoline anhydriet gietvloer is de ideale ondergrond voor afwerkvloeren 
                zoals tegels, PVC, laminaat of tapijt. Overleg met uw lijmleverancier welk advies 
                het beste past bij de toe te passen applicatie.
              </p>
              <div className="flex items-center">
                <Recycle className="w-6 h-6 text-green-600 mr-3" />
                <p className="text-gray-700">
                  100% gerecyclede materialen voor een duurzame toekomst
                </p>
              </div>
            </div>
          </div>

          {/* Technical Properties */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Technische eigenschappen</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-gray-700">Type</th>
                    <th className="px-6 py-3 text-left text-gray-700">Druksterkte</th>
                    <th className="px-6 py-3 text-left text-gray-700">Buigtreksterkte</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {strengthTypes.map((type, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">{type.type}</td>
                      <td className="px-6 py-4">{type.druksterkte}</td>
                      <td className="px-6 py-4">{type.buigtreksterkte}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-gray-600">
              Gemiddeld gewicht: 2100 kg/m³
            </p>
          </div>

          {/* Important Notes */}
          <div className="bg-yellow-50 p-6 rounded-lg">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 mr-3" />
              <div>
                <h3 className="text-xl font-semibold mb-4">Aandachtspunten bij GBC anhydrietspecie</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Eerste 48 uur: gesloten ruimte met minimaal 80% luchtvochtigheid</li>
                  <li>• Voorkom directe zoninstraling en tocht</li>
                  <li>• Droogtijd: ongeveer 1 cm per week onder normale condities</li>
                  <li>• Ondergrond moet druk- en vormvast, blijvend droog zijn</li>
                  <li>• Ondergrond moet schoon en vrij van schadelijke stoffen zijn</li>
                  <li>• Naden en kieren goed afdichten</li>
                  <li>• Bij hechtende vloeren primer vereist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenolinePage;