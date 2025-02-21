import React, { useState } from 'react';
import { ChevronRight, ExternalLink, ArrowRight, FlaskConical, Building2, Microscope } from 'lucide-react';

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Financial Optimization",
      client: "Global Investment Bank",
      description: "Developed quantum algorithms for portfolio optimization, reducing computation time by 90% and improving accuracy by 35%.",
      results: [
        "Processed 1M+ trading scenarios daily",
        "Reduced risk calculation time from hours to minutes",
        "Achieved 99.9% accuracy in predictions"
      ],
      image: "/images/f.jpg",
      color: "from-blue-600 to-cyan-500"
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Drug Discovery",
      client: "Leading Pharmaceutical Company",
      description: "Accelerated molecular simulation process using quantum computing, leading to breakthrough in drug candidate identification.",
      results: [
        "Simulated 10,000+ molecular interactions",
        "Reduced research timeline by 60%",
        "Identified 3 promising drug candidates"
      ],
      image: "/images/g.jpg",
      color: "from-purple-600 to-pink-500"
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Materials Science",
      client: "Advanced Materials Manufacturer",
      description: "Utilized quantum algorithms to simulate new materials properties, enabling development of superior semiconductors.",
      results: [
        "Discovered 5 novel material compositions",
        "Improved conductivity by 45%",
        "Patent-pending quantum simulation method"
      ],
      image: "/images/h.jpg",
      color: "from-emerald-600 to-teal-500"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Quantum Success Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-world applications of our quantum computing solutions delivering transformative results across industries.
          </p>
        </div>

        {/* Case Studies Navigation */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`p-6 rounded-xl text-left transition-all duration-300 ${
                activeCase === index
                  ? 'bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-blue-500'
                  : 'bg-gray-800/50 hover:bg-gray-800 border-2 border-transparent'
              }`}
            >
              <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-r ${study.color} mb-4`}>
                {study.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{study.client}</p>
              <div className="flex items-center text-blue-400 text-sm">
                View Case Study <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </button>
          ))}
        </div>

        {/* Active Case Study Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-300"></div>
            <img
              src={caseStudies[activeCase].image}
              alt={caseStudies[activeCase].title}
              className="relative rounded-xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center text-sm text-blue-400 mb-4">
              <span className="mr-2">Case Study</span>
              <div className="h-px w-12 bg-blue-400"></div>
            </div>
            
            <h3 className="text-3xl font-bold text-white">
              {caseStudies[activeCase].title}
            </h3>
            
            <p className="text-xl text-gray-300">
              {caseStudies[activeCase].description}
            </p>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Key Results:</h4>
              {caseStudies[activeCase].results.map((result, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <ArrowRight className="w-4 h-4 mr-2 text-blue-400" />
                  {result}
                </div>
              ))}
            </div>

            <button className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg text-white flex items-center group hover:from-blue-700 hover:to-violet-700 transition-all duration-300">
              Read Full Case Study
              <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;