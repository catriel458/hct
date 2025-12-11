// src/components/Innovation.jsx
import React from 'react';
import { Zap, Sparkles, ExternalLink } from 'lucide-react';

const Innovation = () => {
  return (
    <section id="innovacion" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-12 lg:p-16 border border-white/20 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Content */}
            <div className="lg:w-2/3 space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 border border-blue-400/30 text-blue-300 rounded-full text-sm font-semibold backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Nueva división
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Ampliamos un nuevo sector:{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Sportek
                </span>
              </h2>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                Desarrollamos soluciones de entrenamientos automatizados enfocados en los aspectos neurocognitivos de los deportistas. Tecnología deportiva para mejorar el rendimiento atlético.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
                  <Zap className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-medium">Entrenamiento Cognitivo-Motor</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-medium">Análisis de Datos Deportivos</span>
                </div>
              </div>
            </div>

            {/* Image/Logo */}
            <div className="lg:w-1/3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/30">
                  <img 
                    src="sp4.png"
                    alt="Sportek"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center lg:text-left">
            <a 
              href="https://sportek-mauve.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl group"
            >
              <span>Descubrir Sportek</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;