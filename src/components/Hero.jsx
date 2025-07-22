// src/components/Hero.jsx
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Modern Business Buildings"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/80 to-indigo-900/85"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-1 gap-16 items-center min-h-[85vh]">
          {/* Main Content Centered */}
          <div className="text-center space-y-10 z-10 max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              Líderes en innovación tecnológica desde 2009
            </div>
            
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Transformamos{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ideas
                </span>{' '}
                en{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  soluciones
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
                Desarrollamos tecnología avanzada para revolucionar operaciones empresariales 
                y potenciar el rendimiento deportivo con soluciones que marcan la diferencia.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex justify-center pt-8">
              <a 
                href="#contacto"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-3 font-semibold text-xl shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
              >
                <span>Contactanos</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
          <div className="animate-bounce">
            <div className="w-8 h-8 border-2 border-white/50 rounded-full flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-white/70 rotate-90" />
            </div>
          </div>
          <p className="text-white/70 text-sm mt-2">Descubre más</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;