import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Search from './Search';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen, setIsMenuOpen]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = '/';
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a 
              href="/"
              onClick={handleLogoClick}
              className="h-12 w-[162px] relative"
            >
              <img
                src="https://www.gbcgouda.nl/media/4213/lq-gbc-logo474f.png"
                alt="Goudse Betonmortel Centrale"
                className="h-full w-auto object-contain"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLinks />
            <Search />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <NavLinks mobile />
            <div className="mt-4 px-2">
              <Search />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ mobile }) => {
  const navigate = useNavigate();
  const baseClasses = mobile
    ? "flex flex-col space-y-4"
    : "flex items-center space-x-8";

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const currentPath = window.location.pathname;
    
    if (currentPath === '/') {
      // If we're already on the homepage, just scroll to contact
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home and then scroll to contact
      navigate('/', { state: { scrollToContact: true } });
    }
  };

  return (
    <div className={baseClasses}>
      <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
        Home
      </Link>
      <Link to="/betonmortel" className="text-gray-700 hover:text-blue-600 font-medium">
        Betonmortel
      </Link>
      <Link to="/dekvloeren" className="text-gray-700 hover:text-blue-600 font-medium">
        Dekvloeren
      </Link>
      <Link to="/duurzaamheid" className="text-gray-700 hover:text-blue-600 font-medium">
        Duurzaamheid
      </Link>
      <a 
        href="#contact" 
        onClick={handleContactClick}
        className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
      >
        Contact
      </a>
    </div>
  );
};

export default Navbar;