// src/components/MisionVision.jsx
import React from 'react';
import { Target, Eye, CheckCircle, Lightbulb, Shield, Users, Sparkles } from 'lucide-react';

const valores = [
  { icon: CheckCircle, label: 'Capacidad de resolución' },
  { icon: Lightbulb,   label: 'Innovación' },
  { icon: Shield,      label: 'Responsabilidad' },
  { icon: CheckCircle, label: 'Ética' },
  { icon: Users,       label: 'Trabajo en equipo' },
];

const MisionVision = () => (
  <section id="nosotros" className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">

    {/* Background blobs — igual que Services y Contact */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

      {/* Header — mismo patrón que Services */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 mr-2" />
          Quiénes somos
        </div>
        <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Nuestra{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            identidad
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Los principios que guían cada solución que desarrollamos para nuestros clientes.
        </p>
      </div>

      {/* Cards Misión y Visión — estilo card blanca con shadow, igual que Process en Services */}
      <div className="grid lg:grid-cols-2 gap-10 mb-12">
        
        {/* Misión */}
        <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 group hover:shadow-blue-100 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Misión</h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            Proveer productos, consultoría, análisis, soporte y especialización en IT. 
            Desarrollar soluciones de software a medida.
          </p>
        </div>

        {/* Visión */}
        <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 group hover:shadow-purple-100 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Eye className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Visión</h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ser un proveedor confiable de tecnología que permita a las distintas organizaciones 
            enfocarse en su core business, apoyándose en nuestros servicios.
          </p>
        </div>
      </div>

      {/* Valores — mismo contenedor blanco que el Process block de Services */}
      <div className="bg-white rounded-3xl p-12 lg:p-16 shadow-2xl border border-gray-100">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Valores
            </span>
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Los pilares que definen nuestra forma de trabajar cada día.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {valores.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-700 font-semibold text-base leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default MisionVision;