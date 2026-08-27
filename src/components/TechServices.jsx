// src/components/TechServices.jsx
import React from 'react';
import { Wrench, Network, Server, Sparkles } from 'lucide-react';

const TechServices = () => {
  const techServices = [
    {
      icon: <Wrench className="w-7 h-7 text-white" />,
      title: "Soporte Técnico",
      description: "Asistencia especializada remota y presencial para resolver cualquier eventualidad y garantizar la operatividad de sus equipos.",
      color: "from-blue-500 to-cyan-500",
      hoverShadow: "hover:shadow-blue-100"
    },
    {
      icon: <Network className="w-7 h-7 text-white" />,
      title: "Redes",
      description: "Diseño, estructurado y optimización de redes seguras para mantener a su empresa conectada con el más alto rendimiento.",
      color: "from-purple-500 to-indigo-500",
      hoverShadow: "hover:shadow-purple-100"
    },
    {
      icon: <Server className="w-7 h-7 text-white" />,
      title: "Servidores",
      description: "Administración, virtualización y backup de servidores físicos y cloud para la seguridad de sus datos y aplicaciones.",
      color: "from-orange-500 to-red-500",
      hoverShadow: "hover:shadow-orange-100"
    }
  ];

  return (
    <section id="servicios-tecnicos" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Infraestructura & Soporte
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Servicios{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tecnológicos
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluciones ágiles y mantenimiento continuo para potenciar la infraestructura digital de su organización.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {techServices.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 group ${service.hoverShadow} transition-all duration-300 hover:scale-[1.02]`}
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechServices;
