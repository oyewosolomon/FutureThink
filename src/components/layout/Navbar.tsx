import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    {
      label: 'Solutions',
      dropdown: [
        { label: 'Quantum Algorithms', href: '#' },
        { label: 'Simulation Platform', href: '#' },
        { label: 'Consulting Services', href: '#' },
        { label: 'Infrastructure', href: '#' }
      ]
    },
    {
      label: 'Research',
      dropdown: [
        { label: 'Publications', href: '#' },
        { label: 'Patents', href: '#' },
        { label: 'Case Studies', href: '#' },
        { label: 'Technology', href: '#' }
      ]
    },
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' }
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            {/* <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500"></div> */}
            <svg 
  width="40px" 
  height="40px" 
  viewBox="0 0 24 24" 
  xmlns="http://www.w3.org/2000/svg" 
  fill="#ffffff" 
  stroke="#ffffff"
>
  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <polygon 
      points="20.39 18.24 20.39 8 11.52 2.89 11.52 7.55 16.37 10.32 16.35 15.91 20.39 18.24" 
      style={{fill: '#fffffffffff'}}
    ></polygon>
    <polygon 
      points="14.79 19.86 14.79 11.23 7.33 6.92 7.33 10.94 11.34 13.23 11.32 17.85 14.79 19.86" 
      style={{fill: '#ffffff'}}
    ></polygon>
    <polygon 
      points="9.76 21.15 9.76 14.14 3.69 10.64 3.69 14 6.86 15.81 6.84 19.47 9.76 21.15" 
      style={{fill: '#ffffff'}}
    ></polygon>
  </g>
</svg>
<span className="text-xl font-bold text-white">FutureThink</span>
          </a>
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-gray-900 border border-gray-800 shadow-xl">
                      <div className="p-2">
                        {item.dropdown.map((dropdownItem, idx) => (
                          <a
                            key={idx}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg hover:from-blue-700 hover:to-violet-700 transition-all duration-300 flex items-center">
              Contact Us
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </div>
          <button
            className="lg:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <div className="rounded-xl bg-gray-800/50 backdrop-blur-xl border border-gray-700">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-gray-700 last:border-none">
                  {item.dropdown ? (
                    <div className="p-4">
                      <div className="text-white font-medium mb-2">{item.label}</div>
                      <div className="space-y-2 pl-4">
                        {item.dropdown.map((dropdownItem, idx) => (
                          <a
                            key={idx}
                            href={dropdownItem.href}
                            className="block text-gray-300 hover:text-white transition-colors"
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block p-4 text-white font-medium hover:bg-gray-700/50 transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <div className="p-4">
                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg hover:from-blue-700 hover:to-violet-700 transition-all duration-300 flex items-center justify-center">
                  Contact Us
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
