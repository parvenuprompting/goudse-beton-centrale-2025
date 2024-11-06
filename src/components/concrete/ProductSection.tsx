import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ProductSectionProps {
  title: string;
  icon: ReactNode;
  imageUrl: string;
  imageAlt: string;
  children: ReactNode;
  path?: string;
  onMoreInfo?: () => void;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  icon,
  imageUrl,
  imageAlt,
  children,
  path,
  onMoreInfo
}) => {
  const Content = () => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center p-6 bg-gray-50">
        {icon}
        <h2 className="text-2xl font-bold ml-4">{title}</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-6 flex flex-col justify-between">
          <div className="space-y-4">
            {children}
            {onMoreInfo && (
              <button 
                onClick={onMoreInfo}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Meer informatie
              </button>
            )}
          </div>
        </div>
        <div className="relative h-[300px]">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );

  return path ? (
    <Link to={path} className="block transition-transform hover:scale-[1.02] duration-300">
      <Content />
    </Link>
  ) : (
    <Content />
  );
};

export default ProductSection;