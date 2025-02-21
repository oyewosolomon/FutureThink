import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const technologyShowcase = [
  {
    title: "Quantum Algorithm Library",
    description: "Access our extensive collection of optimized quantum algorithms.",
    percentage: 90,
  },
  {
    title: "Simulation Accuracy",
    description: "Industry-leading quantum simulation precision.",
    percentage: 95,
  },
  {
    title: "Processing Power",
    description: "Leveraging next-gen quantum processing units.",
    percentage: 85,
  },
];

const partners = [
  { id: 1, imageUrl: "https://logo.clearbit.com/blackboard.com" },
  { id: 2, imageUrl: "https://logo.clearbit.com/classroom.google.com" },
  { id: 3, imageUrl: "https://logo.clearbit.com/teams.microsoft.com" },
  { id: 4, imageUrl: "https://logo.clearbit.com/zoom.us" },
];

const Partners = () => {
  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Technology Showcase */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Cutting-Edge Quantum Technology
            </h2>
            <p className="text-xl text-gray-400">
              Our quantum computing platform combines advanced algorithms with powerful simulation capabilities to solve complex problems across industries.
            </p>
            
            <div className="space-y-6">
              {technologyShowcase.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-white">
                    <span>{item.title}</span>
                    <span>{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partners Grid */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 gap-8">
              {partners.map((partner) => (
                <div 
                  key={partner.id}
                  className="aspect-square rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 flex items-center justify-center group hover:from-blue-900 hover:to-indigo-900 transition-all duration-300"
                >
                  <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                    <img 
                      src={partner.imageUrl}
                      alt={`Partner ${partner.id}`}
                      className="w-24 h-24 object-contain opacity-50 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg flex items-center justify-center gap-2 group hover:from-blue-700 hover:to-violet-700 transition-all duration-300">
              Become a Partner
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
