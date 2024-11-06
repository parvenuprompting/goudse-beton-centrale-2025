import React from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { 
  Leaf, Factory, Recycle, Building2, 
  Wrench, Package, Droplet, Construction,
  Feather, ArrowRight
} from 'lucide-react';
import GBCBetonmortelSection from '../components/concrete/sections/GBCBetonmortelSection';
import GestabiliseerdZandSection from '../components/concrete/sections/GestabiliseerdZandSection';
import CSCBetonmortelSection from '../components/concrete/sections/CSCBetonmortelSection';
import StaalvezelBetonSection from '../components/concrete/sections/StaalvezelBetonSection';
import VloeispecieSection from '../components/concrete/sections/VloeispecieSection';
import GietbouwBetonSection from '../components/concrete/sections/GietbouwBetonSection';
import SchuimbetonSection from '../components/concrete/sections/SchuimbetonSection';

const products = [
  {
    title: 'GBC Betonmortel',
    description: 'Al meer dan 63 jaar expert in de productie van mortelproducten en specialistische oplossingen op het gebied van betonmortel en gietbouw. Onze expertise staat garant voor kwaliteit en duurzaamheid.',
    image: 'https://i.imgur.com/rhoIAJx.jpg',
    icon: Factory,
    path: '/betonmortel/gbc-betonmortel'
  },
  {
    title: 'GBC Gestabiliseerd Zand',
    description: 'Hoofdzakelijk in gebruik voor wegenbouw. De ideale basis voor een vlakke, draagkrachtige ondergrond. Gemaakt van 99.5% circulaire grondstoffen voor optimale stabiliteit.',
    image: 'https://i.imgur.com/I8P04x1.jpg',
    icon: Package,
    path: '/betonmortel/gestabiliseerd-zand'
  },
  {
    title: 'CSC "R" Betonmortel',
    description: 'Duurzame betonmortel met minimaal 75% secundaire grondstoffen en een lage CO2-uitstoot. Gecertificeerd met het CSC "R" keurmerk voor duurzame betonproductie.',
    image: 'https://i.imgur.com/acaW1E3.png',
    icon: Leaf,
    path: '/betonmortel/csc-betonmortel'
  },
  {
    title: 'GBC Staalvezel Beton',
    description: 'Een innovatief alternatief voor traditioneel gewapend beton met hoge treksterkte en taaiheid. Bespaar tijd en materiaal met deze moderne betonoplossing.',
    image: 'https://i.imgur.com/rILz7hZ.jpg',
    icon: Wrench,
    path: '/betonmortel/staalvezel-beton'
  },
  {
    title: 'GBC Vloeispecie',
    description: 'Zeer geschikt voor het maken van werkvloeren, eenvoudig aan te brengen met slangen. Een efficiënte oplossing voor moderne bouwprojecten met optimaal gebruiksgemak.',
    image: 'https://i.imgur.com/VaXHZjt.jpg',
    icon: Droplet,
    path: '/betonmortel/vloeispecie'
  },
  {
    title: 'GBC Gietbouw Beton',
    description: 'Ideaal voor binnenstedelijke projecten waar opslag of toepassing van propaan of aardgas niet mogelijk is. Een veilige en efficiënte oplossing voor moderne bouw.',
    image: 'https://i.imgur.com/jfKhW6Q.jpg',
    icon: Construction,
    path: '/betonmortel/gietbouw-beton'
  },
  {
    title: 'GBC Schuimbeton',
    description: 'Energiebesparend beton dat voornamelijk bestaat uit lucht en water, perfect voor isolatie en lichtgewicht toepassingen. Ideaal voor moderne, duurzame bouwprojecten.',
    image: 'https://i.imgur.com/Y1OUd2g.jpg',
    icon: Feather,
    path: '/betonmortel/schuimbeton'
  }
];

const ConcreteProductsPage = () => {
  const location = useLocation();
  const isOverviewPage = location.pathname === '/betonmortel';

  if (!isOverviewPage) {
    return (
      <Routes>
        <Route path="gbc-betonmortel" element={<GBCBetonmortelSection />} />
        <Route path="gestabiliseerd-zand" element={<GestabiliseerdZandSection />} />
        <Route path="csc-betonmortel" element={<CSCBetonmortelSection />} />
        <Route path="staalvezel-beton" element={<StaalvezelBetonSection />} />
        <Route path="vloeispecie" element={<VloeispecieSection />} />
        <Route path="gietbouw-beton" element={<GietbouwBetonSection />} />
        <Route path="schuimbeton" element={<SchuimbetonSection />} />
      </Routes>
    );
  }

  return (
    <div className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Betonmortel Producten</h1>
          <p className="text-xl text-gray-300">Duurzame betonoplossingen voor elk project</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <product.icon className="w-8 h-8 text-blue-600" />
                      <h2 className="text-2xl font-bold ml-3">{product.title}</h2>
                    </div>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                  </div>
                  <Link
                    to={product.path}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group"
                  >
                    <span>Meer informatie</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="relative h-[300px]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConcreteProductsPage;