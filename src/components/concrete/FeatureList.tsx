import React from 'react';
import { Check } from 'lucide-react';

interface FeatureListProps {
  items: string[];
  bgColor?: string;
  iconColor?: string;
}

const FeatureList: React.FC<FeatureListProps> = ({ 
  items, 
  bgColor = "bg-gray-50",
  iconColor = "text-green-600"
}) => {
  return (
    <ul className={`${bgColor} rounded-lg p-6 space-y-3`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <Check className={`w-5 h-5 ${iconColor} mt-1 mr-3 flex-shrink-0`} />
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;