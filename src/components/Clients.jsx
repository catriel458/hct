// src/components/Clients.jsx
import React from 'react';
import { Building, Heart, GraduationCap, Award, Users, CheckCircle, Star, Quote, ArrowRight, Shield } from 'lucide-react';

const Clients = () => {
  const clients = [
    {
      name: "Hospital Garrahan",
      sector: "Salud Especializada",
      icon: <Heart className="w-10 h-10" />,
      description: "Implementación integral del sistema de neonatología con historia clínica unificada, revolucionando la atención pediátrica.",
      project: "Sistema de Historia Clínica Integrado",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "text-red-600",
      bg: "bg-red-50",
      gradient: "from-red-500 to-pink-500",
      impact: "40% reducción en tiempos de consulta"
    },
    {
      name: "Cucaiba",
      sector: "Salud Pública",
      icon: <Heart className="w-10 h-10" />,
      description: "Desarrollo de soluciones tecnológicas avanzadas para optimizar la gestión hospitalaria y mejorar la atención al paciente.",
      project: "Sistema de Gestión Hospitalaria Inteligente",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "text-blue-600",
      bg: "bg-blue-50",
      gradient: "from-blue-500 to-cyan-500",
      impact: "60% mejora en eficiencia operativa"
    },
    {
      name: "Provincia de Buenos Aires",
      sector: "Gobierno Digital",
      icon: <Building className="w-10 h-10" />,
      description: "Modernización completa de sistemas gubernamentales con implementación de tecnologías de vanguardia para ciudadanos.",
      project: "Plataforma de Transformación Digital",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "text-green-600",
      bg: "bg-green-50",
      gradient: "from-green-500 to-emerald-500",
      impact: "80% digitalización de trámites"
    },
    {
      name: "Programa Sumar",
      sector: "Salud Nacional",
      icon: <Users className="w-10 h-10" />,
      description: "Implementación de tecnología de punta para programas nacionales de salud con alcance federal y gestión centralizada.",
      project: "Sistema Nacional de Gestión de Beneficiarios",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "text-purple-600",
      bg: "bg-purple-50",
      gradient: "from-purple-500 to-indigo-500",
      impact: "2M+ beneficiarios atendidos"
    },
    {
      name: "Cotesma",
      sector: "Sector Empresarial",
      icon: <Building className="w-10 h-10" />,
      description: "Desarrollo de soluciones tecnológicas empresariales integrales con enfoque en automatización y eficiencia operacional.",
      project: "Suite de Gestión Empresarial Integral",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      gradient: "from-indigo-500 to-purple-500",
      impact: "50% reducción en costos operativos"
    },
    {
      name: "Iniciativa Spotlight",
      sector: "Organizaciones Internacionales",
      icon: <Award className="w-10 h-10" />,
      description: "Plataforma tecnológica avanzada para organizaciones internacionales con estándares de seguridad y escalabilidad globales.",
      project: "Plataforma Global de Gestión",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "text-orange-600",
      bg: "bg-orange-50",
      gradient: "from-orange-500 to-red-500",
      impact: "Global reach en 15+ países"
    }
  ];

  const sectors = [
    {
      name: "Sector Salud",
      icon: <Heart className="w-8 h-8" />,
      percentage: "40%",
      projects: "25+ proyectos exitosos",
      color: "text-red-600",
      gradient: "from-red-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Sector Público",
      icon: <Building className="w-8 h-8" />,
      percentage: "35%",
      projects: "20+ implementaciones",
      color: "text-blue-600",
      gradient: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Sector Privado",
      icon: <Users className="w-8 h-8" />,
      percentage: "25%",
      projects: "15+ transformaciones",
      color: "text-green-600",
      gradient: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const testimonials = [
    {
      text: "HCT Group transformó completamente nuestra infraestructura tecnológica. Su solución integral mejoró significativamente nuestra eficiencia operativa y la calidad de atención a nuestros pacientes más vulnerables.",
      author: "Dr. María González",
      position: "Director de Tecnología",
      company: "Hospital Garrahan",
      rating: 5,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      text: "La implementación fue impecable y el soporte técnico es excepcional. HCT Group no solo cumplió con nuestras expectativas, sino que las superó ampliamente. Los recomendamos sin dudas.",
      author: "Ing. Carlos Rodríguez",
      position: "Responsable de Sistemas",
      company: "Provincia de Buenos Aires",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      text: "Profesionales altamente capacitados que realmente entienden las complejidades del sector salud. Su tecnología nos permitió modernizar procesos críticos con total confiabilidad.",
      author: "Dra. Ana Martínez",
      position: "Gerente de Sistemas",
      company: "Cucaiba",
      rating: 5,
      image: "https://images.unsplash.com/photo-1594824388084-ce6e072d2145?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
            Colaboramos con organizaciones líderes en diversos sectores, entregando soluciones 
            tecnológicas que generan impacto real y transforman sus operaciones.
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
                  <div className="text-sm text-blue-300 mb-1">Impacto Logrado:</div>
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
              Distribución estratégica de nuestros proyectos por sector de impacto
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
              Testimonios de{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Confianza
              </span>
            </h3>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Palabras de quienes han experimentado la excelencia de nuestras soluciones
            </p>
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

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-16 border border-white/20 shadow-2xl mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-6">
              Resultados que{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Hablan
              </span>
            </h3>
            <p className="text-xl text-blue-200">
              Métricas de éxito que demuestran nuestro compromiso con la excelencia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                98%
              </div>
              <div className="text-blue-200 font-medium">Satisfacción del Cliente</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-3">
                100%
              </div>
              <div className="text-blue-200 font-medium">Proyectos Entregados</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
                50+
              </div>
              <div className="text-blue-200 font-medium">Organizaciones Confiando</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-3">
                24/7
              </div>
              <div className="text-blue-200 font-medium">Soporte Especializado</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h3 className="text-4xl font-bold text-white mb-6">
              ¿Listo para ser nuestro próximo{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Caso de Éxito?
              </span>
            </h3>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Únete a las organizaciones líderes que ya han transformado sus operaciones 
              con nuestras soluciones tecnológicas de vanguardia.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-3 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105">
                <span>Comenzar Mi Proyecto</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white/30 text-white px-10 py-5 rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 font-semibold text-lg hover:scale-105">
                Ver Más Casos de Éxito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;