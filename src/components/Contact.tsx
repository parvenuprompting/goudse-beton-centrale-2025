import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Neem Contact Op</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Naam</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">E-mail</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Telefoonnummer</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Bericht</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition duration-300">
                Verstuur Bericht
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contactgegevens</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                  <p>Nijverheidsstraat 14e, 2802 AL Gouda</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <p>0182-541454</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <p>verkoop@gbcgouda.nl</p>
                </div>
              </div>
            </div>
            <div className="h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.1234567890123!2d4.7123456!3d52.0123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDAwJzQ0LjQiTiA0wrA0MiczNC40IkU!5e0!3m2!1sen!2snl!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;