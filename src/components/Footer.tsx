import React from 'react';
import { Youtube, Linkedin, Building2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>Nijverheidsstraat 14e</p>
            <p>2802 AL Gouda</p>
            <p>Tel: 0182-541454</p>
            <p>Email: verkoop@gbcgouda.nl</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Bedrijfsinformatie</h3>
            <p>KvK: 29012097</p>
            <p>BTW: NL0019.52.985.B01</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Privacybeleid
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Algemene Voorwaarden
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Volg ons</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/channel/UCwGk1Jo7YBbu4oljgXdJW_w"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition duration-300"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/goudse-betonmortel-centrale/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Building2 className="w-5 h-5 mr-2" />
              Gelieerde bedrijven
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://megamix.nl/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition duration-300"
                >
                  Megamix
                </a>
              </li>
              <li>
                <a 
                  href="https://van-nieuwpoort.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition duration-300"
                >
                  Van Nieuwpoort Groep
                </a>
              </li>
              <li>
                <a 
                  href="https://van-nieuwpoort.com/prefab-beton/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition duration-300"
                >
                  Betonson Prefab
                </a>
              </li>
              <li>
                <a 
                  href="https://van-nieuwpoort.com/eps-products/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition duration-300"
                >
                  Oosterbeek EPS
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>© 2024 Goudse Betonmortel Centrale</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;