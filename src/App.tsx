import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ConcreteProductsPage from './pages/ConcreteProductsPage';
import DekvloerenPage from './pages/DekvloerenPage';
import SustainabilityPage from './pages/SustainabilityPage';
import QuotePage from './pages/QuotePage';
import WeberCemfloorPage from './pages/services/WeberCemfloorPage';
import WeberCemfloorZandcementPage from './pages/services/WeberCemfloorZandcementPage';
import DroogstoffenPage from './pages/services/DroogstoffenPage';
import MixerpompPage from './pages/services/MixerpompPage';
import MortelpompPage from './pages/services/MortelpompPage';
import BetonpompPage from './pages/services/BetonpompPage';
import NadenvulmortelPage from './pages/services/NadenvulmortelPage';
import AnhydrietPage from './pages/services/AnhydrietPage';
import RenolinePage from './pages/services/RenolinePage';
import CSCPage from './pages/sustainability/CSCPage';
import BREEAMPage from './pages/sustainability/BREEAMPage';
import ISO14001Page from './pages/sustainability/ISO14001Page';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/over-ons" element={<AboutPage />} />
          <Route path="/betonmortel/*" element={<ConcreteProductsPage />} />
          <Route path="/dekvloeren" element={<DekvloerenPage />} />
          <Route path="/duurzaamheid" element={<SustainabilityPage />} />
          <Route path="/offerte" element={<QuotePage />} />
          <Route path="/diensten/weber-cemfloor" element={<WeberCemfloorPage />} />
          <Route path="/diensten/weber-cemfloor/zandcement" element={<WeberCemfloorZandcementPage />} />
          <Route path="/diensten/droogstoffen" element={<DroogstoffenPage />} />
          <Route path="/diensten/mixerpomp" element={<MixerpompPage />} />
          <Route path="/diensten/mortelpomp" element={<MortelpompPage />} />
          <Route path="/diensten/betonpomp" element={<BetonpompPage />} />
          <Route path="/diensten/nadenvulmortel" element={<NadenvulmortelPage />} />
          <Route path="/diensten/anhydriet" element={<AnhydrietPage />} />
          <Route path="/diensten/renoline" element={<RenolinePage />} />
          <Route path="/duurzaamheid/csc" element={<CSCPage />} />
          <Route path="/duurzaamheid/breeam" element={<BREEAMPage />} />
          <Route path="/duurzaamheid/iso14001" element={<ISO14001Page />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;