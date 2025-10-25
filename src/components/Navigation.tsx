
import React from 'react';
import { Users, Home, Award, Network, MessageSquare } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/5f863e54-cc70-4a24-9690-55d76ba675a1.png" 
              alt="CredoHive Logo" 
              className="h-10 w-10 mr-3 drop-shadow-sm"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">CredoHive</h1>
              <p className="text-sm text-amber-700 font-medium">Your Business Wingman</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="flex items-center text-gray-700 hover:text-amber-600 transition-colors font-medium">
              <Home className="w-4 h-4 mr-1" />
              Home
            </a>
            <a href="#chapters" className="flex items-center text-gray-700 hover:text-amber-600 transition-colors font-medium">
              <Users className="w-4 h-4 mr-1" />
              Chapters
            </a>
            <a href="#network" className="flex items-center text-gray-700 hover:text-amber-600 transition-colors font-medium">
              <Network className="w-4 h-4 mr-1" />
              Network
            </a>
            <a href="#rewards" className="flex items-center text-gray-700 hover:text-amber-600 transition-colors font-medium">
              <Award className="w-4 h-4 mr-1" />
              Rewards
            </a>
            <a href="#contact" className="flex items-center text-gray-700 hover:text-amber-600 transition-colors font-medium">
              <MessageSquare className="w-4 h-4 mr-1" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
