import React from 'react';
import { ArrowRight, Atom, Brain, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-black overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute animate-pulse top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute animate-pulse delay-1000 top-40 right-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-xl"></div>
        <div className="absolute animate-pulse delay-2000 bottom-20 left-1/3 w-36 h-36 bg-violet-500/20 rounded-full blur-xl"></div>
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-6 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Quantum Solutions for Tomorrow's
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text"> Challenges</span>
            </h1>
            <p className="text-xl text-gray-300">
              Pioneering quantum computing research with 50+ patents. We're shaping the future of technology through innovative algorithms and simulation platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transform transition hover:scale-105">
                Explore Solutions
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded-lg transform transition hover:scale-105">
                Partner With Us
              </button>
            </div>
          </div>

          {/* Right column - Animated visual */}
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-xl bg-gradient-to-br from-blue-900/50 to-transparent backdrop-blur-sm border border-blue-500/20 p-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <Atom className="absolute inset-0 w-full h-full text-blue-400 animate-spin-slow" />
                  <Brain className="absolute inset-0 w-full h-full text-violet-400 animate-pulse" />
                  <Cpu className="absolute inset-0 w-2/3 h-2/3 text-indigo-400 m-auto animate-float" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Patents', value: '50+' },
            { label: 'Research Papers', value: '200+' },
            { label: 'Tech Partners', value: '25+' },
            { label: 'Team Members', value: '100+' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-blue-500/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;