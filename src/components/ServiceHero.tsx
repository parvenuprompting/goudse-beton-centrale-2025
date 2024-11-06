import React, { useEffect, useRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  imageUrl: string;
  imagePosition?: 'center' | 'bottom';
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ 
  title, 
  description, 
  Icon, 
  imageUrl,
  imagePosition = 'center'
}) => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrolled = window.scrollY;
        backgroundRef.current.style.transform = `translate3d(0, ${scrolled * 0.5}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[400px] overflow-hidden">
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover will-change-transform"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundPosition: imagePosition === 'bottom' ? 'bottom' : 'center',
          transform: 'translate3d(0, 0, 0)'
        }}
      >
        <div className="absolute inset-0 bg-gray-900 lg:bg-black lg:bg-opacity-50" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <div className="flex items-center mb-4">
            <Icon className="w-12 h-12 mr-4" />
            <h1 className="text-4xl font-bold">{title}</h1>
          </div>
          <p className="text-xl text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;