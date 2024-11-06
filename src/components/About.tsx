import React from 'react';
import { Building2, Leaf, Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Historie Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Historie Goudse Betonmortel Centrale</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-600">
                In de jaren vijftig is Van Nieuwpoort samen met De Waardt Bouwmaterialen een van de pioniers in de ontwikkeling van transportbeton in Nederland. Samen met twee andere aandeelhouders is de oprichting van de Goudse Betonmortel Centrale (GBC) tot stand gekomen. De Goudse Betoncentrale (GBC) is vanaf de start in 1959 de kraamkamer en proefvijver voor de verdere ontwikkeling van de betonmortel innovatie in de regio Gouda.
              </p>
              <p className="text-gray-600">
                De rood-wit gekleurde silo's domineren nog steeds het beeld langs de Gouwe. De aanmaak van betonmortel is altijd een ambachtelijk en tijdrovend proces geweest, waarvoor specialisme is vereist. Werd dosering en menging van de grondstoffen de eerste jaren nog handmatig verricht, tegenwoordig verloopt dit proces volautomatisch.
              </p>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
                alt="GBC Faciliteit"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Meer activiteiten Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Meer activiteiten</h2>
          <p className="text-gray-600 mb-4">
            Door de innovatieve grondslag binnen de GBC is er in de loop der jaren een droogstoffenlijn uitgerold. Die activiteit heeft de GBC in staat gesteld om de cement en vulstoffen verder te optimaliseren. In de jaren negentig werd er aan de Nijverheidsstraat een installatie gebouwd die ook de metselmortel markt in zowel de natte- als ook de droge lijn kan bedienen.
          </p>
          <p className="text-gray-600">
            Aan alle geproduceerde halffabrikaten worden de hoogste eisen gesteld, ze staan dan ook voortdurend onder controle in ons moderne en uitgebreide labaratorium.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Leaf className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Duurzaamheid</h3>
            <p className="text-gray-600">
              Sinds de jaren 2000 heeft de GBC een sterke focus op Maatschappelijk Verantwoord Ondernemen. Door duurzaam te produceren en door het leveren van duurzame producten wil de GBC bijdragen aan een verdere verduurzaming van de bouw.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Veiligheid</h3>
            <p className="text-gray-600">
              Veilig werken staat hoog bij ons in het vaandel. Sinds juli 2022 zijn we VCA gecertificeerd. "Ik werk veilig of ik werk niet" wordt ondersteund door de directie van De Goudse Betonmortel Centrale.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Building2 className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Gelieerde Bedrijven</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• MegaMix Randstad B.V.</li>
              <li>• Betonmortelcentrale Alphen B.V.</li>
              <li>• Drymix B.V.</li>
            </ul>
          </div>
        </div>

        {/* Veiligheid Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Veiligheidscampagne</h2>
          <p className="text-gray-600 mb-4">
            De brancheorganisatie van de betonmortelindustrie heeft een ludieke manier gevonden om het veiligheidsbewustzijn onder haar medewerkers aan te spreken. Als centrale met het CSC gold "R" certificaat worden de chauffeurs van de truckmixers met posters van Ferry Slim effect op verschillende veiligheidsaspecten gewezen.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mt-6">
            <h3 className="text-xl font-semibold mb-4">Aard bedrijfsongevallen</h3>
            <p className="text-gray-600">
              Een groot deel (41%) van letsel in de bouw heeft te maken met vallen van hoogte of met verstappen, struikelen of uitglijden. Met de Ferry Slim campagne hopen we de veiligheid op het werk verder te verbeteren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;