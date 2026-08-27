// src/components/TnB.jsx
import React from 'react';
import { ShoppingBag, Shirt, Sparkles, ExternalLink } from 'lucide-react';

const TnB = () => {
  return (
    <section id="tnb" className="py-24 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-12 lg:p-16 border border-white/10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Content Side */}
            <div className="lg:w-2/3 space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-purple-500/20 border border-purple-400/30 text-purple-300 rounded-full text-sm font-semibold backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Desarrollo Propio
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Plataforma{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  TnB
                </span>
              </h2>
              
              <p className="text-xl text-purple-100 leading-relaxed">
                Una innovadora plataforma de e-commerce de moda desarrollada por HCT, equipada con un probador virtual inteligente que revoluciona la experiencia de compra online haciéndola interactiva y personalizada.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
                  <ShoppingBag className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-medium">E-Commerce Premium</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
                  <Shirt className="w-5 h-5 text-pink-400" />
                  <span className="text-white font-medium">Probador Virtual Integrado</span>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="pt-6">
                <a 
                  href="https://fashion-puce-gamma.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 group"
                >
                  <span>Ver TnB</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Image Side */}
            <div className="lg:w-1/3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-4 border border-white/10 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop"
                    alt="TnB Fashion E-Commerce"
                    className="w-full h-72 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TnB;
