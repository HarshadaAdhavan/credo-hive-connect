
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, MapPin, Calendar, Crown, Star, FileText } from 'lucide-react';
import MemberCard from './MemberCard';

interface Member {
  id: number;
  name: string;
  business: string;
  category: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  description: string;
  rating: number;
  referrals: number;
  avatar: string;
  specialties: string[];
}

interface Leadership {
  president: {
    name: string;
    business: string;
    phone: string;
    email: string;
  };
  vicePresident: {
    name: string;
    business: string;
    phone: string;
    email: string;
  };
  secretary: {
    name: string;
    business: string;
    phone: string;
    email: string;
  };
}

interface ChapterProps {
  name: string;
  location: string;
  memberCount: number;
  meetingDay: string;
  description: string;
  leadership: Leadership;
  members: Member[];
}

const Chapter: React.FC<ChapterProps> = ({ name, location, memberCount, meetingDay, description, leadership, members }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-amber-200 overflow-hidden">
      <div 
        className="p-6 cursor-pointer hover:bg-amber-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
              <div className="flex items-center text-amber-700">
                <Users className="w-5 h-5 mr-1" />
                <span>{memberCount} Members</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-600 mb-3">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Meets {meetingDay}</span>
              </div>
            </div>

            <p className="text-gray-700">{description}</p>
          </div>
          
          <div className="ml-4">
            {isExpanded ? (
              <ChevronUp className="w-6 h-6 text-amber-600" />
            ) : (
              <ChevronDown className="w-6 h-6 text-amber-600" />
            )}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="border-t border-amber-200 p-6 bg-gradient-to-br from-amber-50 to-yellow-50">
          {/* Leadership Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Crown className="w-5 h-5 mr-2 text-amber-600" />
              Chapter Leadership
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg border border-amber-200 shadow-sm">
                <div className="flex items-center mb-2">
                  <Crown className="w-4 h-4 mr-2 text-amber-600" />
                  <h4 className="font-semibold text-gray-900">President</h4>
                </div>
                <p className="font-medium text-gray-800">{leadership.president.name}</p>
                <p className="text-sm text-gray-600">{leadership.president.business}</p>
                <p className="text-sm text-amber-700">{leadership.president.phone}</p>
                <p className="text-sm text-amber-700">{leadership.president.email}</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-amber-200 shadow-sm">
                <div className="flex items-center mb-2">
                  <Star className="w-4 h-4 mr-2 text-amber-600" />
                  <h4 className="font-semibold text-gray-900">Vice President</h4>
                </div>
                <p className="font-medium text-gray-800">{leadership.vicePresident.name}</p>
                <p className="text-sm text-gray-600">{leadership.vicePresident.business}</p>
                <p className="text-sm text-amber-700">{leadership.vicePresident.phone}</p>
                <p className="text-sm text-amber-700">{leadership.vicePresident.email}</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-amber-200 shadow-sm">
                <div className="flex items-center mb-2">
                  <FileText className="w-4 h-4 mr-2 text-amber-600" />
                  <h4 className="font-semibold text-gray-900">Secretary</h4>
                </div>
                <p className="font-medium text-gray-800">{leadership.secretary.name}</p>
                <p className="text-sm text-gray-600">{leadership.secretary.business}</p>
                <p className="text-sm text-amber-700">{leadership.secretary.phone}</p>
                <p className="text-sm text-amber-700">{leadership.secretary.email}</p>
              </div>
            </div>
          </div>

          {/* Members Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Chapter Members</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {members.map(member => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chapter;
