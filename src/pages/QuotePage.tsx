import React from 'react';
import { Building2, Mail, Phone, User } from 'lucide-react';

const QuotePage = () => {
  return (
    <div className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Offerte Aanvragen</h1>
          <p className="text-xl text-gray-300">
            Vraag vrijblijvend een offerte aan voor uw project
          </p>
        </div>
      </div>

      {/* Quote Form */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Persoonlijke Gegevens</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">
                    <User className="w-4 h-4 inline-block mr-2" />
                    Naam
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    <Building2 className="w-4 h-4 inline-block mr-2" />
                    Bedrijfsnaam
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline-block mr-2" />
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline-block mr-2" />
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
              
              <div>
                <label className="block text-gray-700 mb-2">Project Type</label>
                <select 
                  className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Selecteer type project</option>
                  <option value="nieuwbouw">Nieuwbouw</option>
                  <option value="renovatie">Renovatie</option>
                  <option value="infrastructuur">Infrastructuur</option>
                  <option value="anders">Anders</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Gewenste Betonsoort</label>
                <select 
                  className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Selecteer betonsoort</option>
                  <option value="gbc-betonmortel">GBC Betonmortel</option>
                  <option value="gestabiliseerd-zand">Gestabiliseerd Zand</option>
                  <option value="csc-betonmortel">CSC Betonmortel</option>
                  <option value="staalvezel-beton">Staalvezel Beton</option>
                  <option value="vloeispecie">Vloeispecie</option>
                  <option value="gietbouw-beton">Gietbouw Beton</option>
                  <option value="schuimbeton">Schuimbeton</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Geschatte Hoeveelheid (m³)</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Gewenste Leverdatum</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Extra Informatie</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Beschrijf uw project en specifieke wensen..."
                ></textarea>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition duration-300"
            >
              Offerte Aanvragen
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;