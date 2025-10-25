
import React from 'react';
import { MapPin, Phone, Mail, ExternalLink, Star } from 'lucide-react';

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

interface MemberCardProps {
  member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-16 h-16 rounded-full object-cover border-3 border-blue-100"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 truncate">{member.name}</h3>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">{member.rating}</span>
            </div>
          </div>
          <p className="text-sm font-medium text-blue-600 mb-1">{member.business}</p>
          <p className="text-sm text-gray-500 mb-2">{member.category}</p>
          <p className="text-sm text-gray-700 mb-3 line-clamp-2">{member.description}</p>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {member.specialties.map((specialty, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>

          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-gray-400" />
              <span>{member.location}</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-gray-400" />
              <span>{member.phone}</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-gray-400" />
              <span className="truncate">{member.email}</span>
            </div>
            <div className="flex items-center">
              <ExternalLink className="w-4 h-4 mr-2 text-gray-400" />
              <a href={member.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline truncate">
                {member.website}
              </a>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{member.referrals} Referrals Given</span>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
