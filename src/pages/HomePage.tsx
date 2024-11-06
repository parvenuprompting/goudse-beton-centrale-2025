import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Sustainability from '../components/Sustainability';
import Contact from '../components/Contact';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we should scroll to contact section
    if (location.state?.scrollToContact) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        // Clean up the state
        window.history.replaceState({}, document.title);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Products />
      <Services />
      <Projects />
      <Sustainability />
      <Contact />
    </>
  );
};

export default HomePage;