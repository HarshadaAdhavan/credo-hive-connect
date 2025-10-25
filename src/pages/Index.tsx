import React from 'react';
import Navigation from '../components/Navigation';
import Chapter from '../components/Chapter';
import { chapters } from '../data/sampleData';
import { Users, Award, Network, TrendingUp, Star, Handshake } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-amber-600">CredoHive</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-800 mb-4 max-w-3xl mx-auto font-semibold">
              Your Business Wingman
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto">
              We help small and local businesses grow by offering a digital referral platform where members build trusted connections, share leads, and earn rewards—creating visibility, credibility, and steady opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-amber-600 text-white text-lg font-semibold rounded-xl hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Join a Chapter
              </button>
              <button className="px-8 py-4 border-2 border-amber-600 text-amber-700 text-lg font-semibold rounded-xl hover:bg-amber-100 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose CredoHive?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a thriving ecosystem designed to help your business grow through trusted connections
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl text-center hover:shadow-lg transition-shadow border border-amber-200">
              <Network className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Network</h3>
              <p className="text-gray-600">Build meaningful relationships with verified business professionals in your area.</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl text-center hover:shadow-lg transition-shadow border border-yellow-200">
              <Handshake className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Referrals</h3>
              <p className="text-gray-600">Receive and give high-quality leads that convert into real business opportunities.</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl text-center hover:shadow-lg transition-shadow border border-orange-200">
              <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Earn Rewards</h3>
              <p className="text-gray-600">Get recognized and rewarded for contributing to the success of fellow members.</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow border border-amber-200">
              <TrendingUp className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Growth</h3>
              <p className="text-gray-600">Access tools and resources designed to accelerate your business development.</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-amber-100 p-8 rounded-xl text-center hover:shadow-lg transition-shadow border border-yellow-200">
              <Star className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Build Credibility</h3>
              <p className="text-gray-600">Enhance your reputation through member testimonials and success stories.</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-amber-100 p-8 rounded-xl text-center hover:shadow-lg transition-shadow border border-orange-200">
              <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Support</h3>
              <p className="text-gray-600">Join a supportive community of like-minded entrepreneurs and business owners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section id="chapters" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Business Chapters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover thriving business communities in your area. Click on a chapter to meet the leadership team and members, and learn more about their expertise.
            </p>
          </div>
          
          <div className="space-y-8">
            {chapters.map((chapter, index) => (
              <Chapter
                key={index}
                name={chapter.name}
                location={chapter.location}
                memberCount={chapter.memberCount}
                meetingDay={chapter.meetingDay}
                description={chapter.description}
                leadership={chapter.leadership}
                members={chapter.members}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-600 to-amber-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Join CredoHive today and start building the connections that will transform your business
          </p>
          <button className="px-8 py-4 bg-white text-amber-700 text-lg font-semibold rounded-xl hover:bg-amber-50 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/5f863e54-cc70-4a24-9690-55d76ba675a1.png" 
                  alt="CredoHive Logo" 
                  className="h-8 w-8 mr-3"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <div>
                  <h3 className="text-xl font-bold">CredoHive</h3>
                  <p className="text-gray-400">Your Business Wingman</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering small and local businesses through trusted referral networks and meaningful connections.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#chapters" className="hover:text-white transition-colors">Chapters</a></li>
                <li><a href="#network" className="hover:text-white transition-colors">Network</a></li>
                <li><a href="#rewards" className="hover:text-white transition-colors">Rewards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@credohive.com</li>
                <li>(555) 123-HIVE</li>
                <li>Monday - Friday 9AM-5PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CredoHive. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
