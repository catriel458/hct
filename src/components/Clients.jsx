// src/components/Clients.jsx
import React from 'react';
import { Building, Heart, GraduationCap, Award, Users, CheckCircle, Star, Quote, ArrowRight, Shield } from 'lucide-react';

const Clients = () => {
  const clients = [
    {
      name: "Hospital Garrahan",
      sector: "Salud",
      icon: <Heart className="w-10 h-10" />,
      description: "Integración del sistema de neonatología con el sistema de historia clínica del Hospital Garrahan (incluyendo hardware, software y configuraciones).",
      project: "Sistema de Historia Clínica Integrado",
      image: "https://radioprovincia.gba.gob.ar/images/Hospital_Garrahan.jpg",
      color: "text-red-600",
      bg: "bg-red-50",
      gradient: "from-red-500 to-pink-500",
      impact: "Sistema neonatología integrado"
    },
    {
      name: "Cucaiba",
      sector: "Salud Pública",
      icon: <Heart className="w-10 h-10" />,
      description: "Sistema de gestión de donación de Órganos. CUCAIBA.",
      project: "Sistema de Gestión de Donación",
      image: "https://www.cucaiba.gba.gov.ar/wp-content/uploads/2021/10/web-4.jpg",
      color: "text-blue-600",
      bg: "bg-blue-50",
      gradient: "from-blue-500 to-cyan-500",
      impact: "Gestión completa de donaciones"
    },
    {
      name: "Provincia de Buenos Aires",
      sector: "Gobierno",
      icon: <Building className="w-10 h-10" />,
      description: "Sistema de denuncia por Violencia de Género, desarrollo realizado en PHP. Proyecto UNOPS para la Provincia de Buenos Aires.",
      project: "Sistema de Denuncia por Violencia de Género",
      image: "https://yt3.googleusercontent.com/m6bVPjkK2E-5pSfTMAiby1QqBENydQ2D6QSbV3vq6ZxQIO99FDrE7Z0IBqvhppo9bNml9HNanlo=s900-c-k-c0x00ffffff-no-rj",
      color: "text-green-600",
      bg: "bg-green-50",
      gradient: "from-green-500 to-emerald-500",
      impact: "Proyecto UNOPS implementado"
    },
    {
      name: "Ministerio de Salud",
      sector: "Salud Nacional",
      icon: <Users className="w-10 h-10" />,
      description: "Sistema de acceso para el Ministerio de Salud.",
      project: "Sistema de Acceso",
      image: "https://portal.cofa.org.ar/wp-content/uploads/2020/03/ministerio-de-salud-final.png",
      color: "text-purple-600",
      bg: "bg-purple-50",
      gradient: "from-purple-500 to-indigo-500",
      impact: "Acceso unificado"
    },
    {
      name: "Cotesma",
      sector: "Sector Privado",
      icon: <Building className="w-10 h-10" />,
      description: "COTESMA, Adecuación, desarrollo y soporte de API realizado en PHP.",
      project: "Desarrollo y Soporte de API",
      image: "https://lamontana-s3.cdn.net.ar/s3i233/2023/07/lamontana/images/11/16/111652_6cd9296a1bdfb7285535b2221347afcdfc65c23ae61ce2c6fdbc637a8296d1d7/lg.webp",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      gradient: "from-indigo-500 to-purple-500",
      impact: "API completa en PHP"
    }
  ];

  const sectors = [
    {
      name: "Sector Salud",
      icon: <Heart className="w-8 h-8" />,
      percentage: "40%",
      projects: "Múltiples proyectos",
      color: "text-red-600",
      gradient: "from-red-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Sector Público",
      icon: <Building className="w-8 h-8" />,
      percentage: "35%",
      projects: "Implementaciones exitosas",
      color: "text-blue-600",
      gradient: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Sector Privado",
      icon: <Users className="w-8 h-8" />,
      percentage: "25%",
      projects: "Desarrollos a medida",
      color: "text-green-600",
      gradient: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const testimonials = [
    {
      text: "Se ha provisto de equipamiento y software a diferentes clientes, especialmente del sector público.",
      author: "Representaciones",
      position: "Equipamiento",
      company: "Hardware y Software",
      rating: 5,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      text: "Desarrollo de Software a medida para resolver problemáticas específicas y realizar proyectos completos.",
      author: "Desarrollo",
      position: "Software",
      company: "Soluciones a medida",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      text: "Servicios de IT con asesoramiento, implementación y configuración/soportes durante más de 10 años.",
      author: "Servicios IT",
      position: "Soporte",
      company: "Implementación",
      rating: 5,
      image: "https://hireline.io/blog/wp-content/uploads/2022/07/habilidades-de-un-programador-1200x900.jpg"
    }
  ];

  return (
    <section id="clientes" className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Business Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-indigo-900/95"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 border border-blue-400/30 text-blue-300 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <Shield className="w-4 h-4 mr-2" />
            Confianza y Resultados Comprobados
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Nuestros{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Clientes
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Algunos de nuestros clientes
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {clients.map((client, index) => (
            <div key={index} className="group bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-2xl">
              {/* Image Header */}
              <div className="relative h-48">
                <img 
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className={`absolute top-4 right-4 w-14 h-14 bg-gradient-to-r ${client.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <div className="text-white">
                    {client.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-1">{client.name}</h3>
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                      {client.sector}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <p className="text-blue-100 leading-relaxed">
                  {client.description}
                </p>
                
                <div className="space-y-3">
                  <div className="text-sm text-blue-300 font-semibold">Proyecto Destacado:</div>
                  <div className="text-white font-medium">{client.project}</div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                  <div className="text-sm text-blue-300 mb-1">Resultado:</div>
                  <div className="text-white font-semibold">{client.impact}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sectors Stats */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-6">
              Sectores de{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Especialización
              </span>
            </h3>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Distribución estratégica de nuestros proyectos por sector
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-xl">
                {/* Image Header */}
                <div className="relative h-40">
                  <img 
                    src={sector.image}
                    alt={sector.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${sector.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    <div className="text-white">
                      {sector.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 text-center">
                  <h4 className="text-2xl font-bold text-white mb-4">
                    {sector.name}
                  </h4>
                  
                  <div className={`text-5xl font-bold bg-gradient-to-r ${sector.gradient} bg-clip-text text-transparent mb-3`}>
                    {sector.percentage}
                  </div>
                  
                  <p className="text-blue-200 font-medium">
                    {sector.projects}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-6">
              Desarrollo de{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Software a medida
              </span>
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 shadow-xl">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-blue-100 mb-8 italic text-lg leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/20"
                  />
                  <div>
                    <p className="font-bold text-white text-lg">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-blue-300">
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-blue-400 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

 
        

        
      </div>
    </section>
  );
};

export default Clients;