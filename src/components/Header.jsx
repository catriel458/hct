// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Zap, Code, Users, Target, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Servicios', 
      href: '#servicios',
      dropdown: [
        { name: 'Desarrollo de Software', href: '#servicios', icon: <Code className="w-4 h-4" /> },
        { name: 'Entrenamiento Cognitivo-Motor', href: '#servicios', icon: <Zap className="w-4 h-4" /> },
        { name: 'Representaciones IT', href: '#servicios', icon: <Users className="w-4 h-4" /> }
      ]
    },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Innovación', href: '#innovacion' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-xl' 
        : 'bg-black/20 backdrop-blur-md border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              {/* Logo Image */}
              <img 
                src="/HCT.png" 
                alt="HCT Group Logo" 
                className={`h-12 w-auto transition-all duration-300 ${
                  isScrolled ? 'drop-shadow-sm' : 'drop-shadow-lg filter brightness-110'
                }`}
                onError={(e) => {
                  // Fallback si la imagen no carga
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback Icon (se muestra solo si falla la imagen) */}
              <div 
                className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600' 
                    : 'bg-white/20 backdrop-blur-sm border border-white/30'
                }`}
                style={{ display: 'none' }}
              >
                <Target className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                      : 'text-white hover:text-blue-300 hover:bg-white/10'
                  }`}
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                </a>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 animate-in fade-in-0 zoom-in-95"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown.map((dropdownItem, index) => (
                      <a
                        key={index}
                        href={dropdownItem.href}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        <div className="text-blue-500">
                          {dropdownItem.icon}
                        </div>
                        <span className="font-medium">{dropdownItem.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+541152175666"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                isScrolled
                  ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
             
        
            </a>
        
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  : 'text-white hover:text-blue-300 hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 rounded-b-2xl shadow-2xl mt-2">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem, index) => (
                        <a
                          key={index}
                          href={dropdownItem.href}
                          className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="text-blue-500">
                            {dropdownItem.icon}
                          </div>
                          <span>{dropdownItem.name}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a
                  href="tel:+541152175666"
                  className="flex items-center space-x-2 px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span>+54 11 5217-5666</span>
                </a>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg">
                  Consultar Proyecto
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;