import React, { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  title: string;
  description: string;
  path: string;
}

const searchData: SearchResult[] = [
  {
    title: 'GBC Betonmortel',
    description: 'Expert in de productie van mortelproducten en specialistische oplossingen',
    path: '/betonmortel/gbc-betonmortel'
  },
  {
    title: 'Gestabiliseerd Zand',
    description: 'Ideale basis voor een vlakke, draagkrachtige ondergrond',
    path: '/betonmortel/gestabiliseerd-zand'
  },
  {
    title: 'CSC Betonmortel',
    description: 'Duurzame betonmortel met minimaal 75% secundaire grondstoffen',
    path: '/betonmortel/csc-betonmortel'
  },
  {
    title: 'Staalvezel Beton',
    description: 'Innovatief alternatief voor traditioneel gewapend beton',
    path: '/betonmortel/staalvezel-beton'
  },
  {
    title: 'Weber Cemfloor',
    description: 'Hoogwaardige cementgebonden gietmortel voor perfecte dekvloeren',
    path: '/diensten/weber-cemfloor'
  },
  {
    title: 'GBC Droogstoffen',
    description: 'Specialistische droge mortels voor diverse toepassingen',
    path: '/diensten/droogstoffen'
  },
  {
    title: 'GBC Mixerpomp',
    description: 'Efficiënte levering en verwerking van mortel',
    path: '/diensten/mixerpomp'
  },
  {
    title: 'GBC Mortelpomp',
    description: 'Ideaal voor kleinere projecten en moeilijk bereikbare locaties',
    path: '/diensten/mortelpomp'
  },
  {
    title: 'GBC Betonpomp',
    description: 'Professionele betonpompen voor efficiënte verwerking',
    path: '/diensten/betonpomp'
  },
  {
    title: 'CSC Certificering',
    description: 'Duurzame betonproductie met focus op circulariteit',
    path: '/duurzaamheid/csc'
  },
  {
    title: 'BREEAM Certificering',
    description: 'Het instrument voor duurzame gebouwde omgeving',
    path: '/duurzaamheid/breeam'
  },
  {
    title: 'ISO 14001',
    description: 'Milieumanagementsysteem certificering',
    path: '/duurzaamheid/iso14001'
  }
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    if (value.length > 1) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.description.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  const handleResultClick = (path: string) => {
    setSearchTerm('');
    setIsOpen(false);
    navigate(path);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className="relative">
      <div className="flex items-center bg-white rounded-md">
        <SearchIcon className="w-5 h-5 text-gray-600 ml-3" />
        <input
          type="search"
          placeholder="Zoeken..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="ml-2 px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="p-2 hover:text-gray-700 focus:outline-none"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-50">
          <div className="max-h-96 overflow-y-auto">
            {results.map((result, index) => (
              <button
                key={index}
                onClick={() => handleResultClick(result.path)}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 border-b border-gray-100 last:border-0"
              >
                <div className="text-sm font-medium text-gray-900">{result.title}</div>
                <div className="text-sm text-gray-500">{result.description}</div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;