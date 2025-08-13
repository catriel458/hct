// src/components/About.jsx
import React from 'react';
import { Calendar, Users, Trophy, Lightbulb, ArrowRight, CheckCircle, Award, Target, Zap, Building } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: "2009",
      title: "Fundación Estratégica",
      description: "HCT SA comenzó como representante o reseller de Hardware y Software de diversas marcas de empresas de primer nivel de IT.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <Building className="w-6 h-6" />
    },
    {
      year: "2012",
      title: "Expansión de Servicios",
      description: "Se fueron agregando servicios de IT asociados a estas representaciones, fundamentalmente de asesoramiento, implementación y configuración/soportes.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Users className="w-6 h-6" />
    },
    {
      year: "2016",
      title: "Innovación en Desarrollos",
      description: "Se empezó a incursionar en servicios puntuales requeridos por los clientes, así como en desarrollos específicos para resolver problemáticas o realizar proyectos completos.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      year: "2020",
      title: "Revolución Deportiva",
      description: "Se agregó innovación dedicada a representaciones de productos de tecnología deportiva, como lanzapelotas, trackers deportivos, usos de elementos cognitivos.",
      image: "https://images.unsplash.com/photo-1566932769119-7a1fb6d7ce23?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <Trophy className="w-6 h-6" />
    }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovación Constante",
      description: "Desarrollamos soluciones específicas para el mercado, como sistemas para automatizar los entrenamientos.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Colaboración Estratégica",
      description: "Trabajamos en alianza con diferentes empresas para brindar soluciones integrales.",
      image: "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Excelencia Garantizada",
      description: "Más de 15 años brindando servicios de IT con implementación y mantenimiento de calidad.",
      image: "https://plus.unsplash.com/premium_photo-1695185954894-e9382c6f4da8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const achievements = [
    { text: "Desde 2009 en el mercado tecnológico", icon: <Calendar className="w-5 h-5" /> },
    { text: "Representantes de marcas de primer nivel", icon: <Target className="w-5 h-5" /> },
    { text: "Especialistas en tecnología deportiva", icon: <Zap className="w-5 h-5" /> },
    { text: "Clientes en sector público y privado", icon: <Award className="w-5 h-5" /> },
    { text: "Desarrollos específicos a medida", icon: <Building className="w-5 h-5" /> }
  ];

  const stats = [
    { value: "2009", label: "Año de fundación", color: "text-blue-600" },
    { value: "100+", label: "Proyectos realizados", color: "text-green-600" },
    { value: "15+", label: "Años de servicios IT", color: "text-purple-600" },
    { value: "24/7", label: "Soporte técnico", color: "text-orange-600" }
  ];

  return (
    <section id="nosotros" className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <Users className="w-4 h-4 mr-2" />
            Nuestra Historia
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Quiénes{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Somos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            HCT SA comenzó en 2009 como representante o reseller de Hardware y Software 
            de diversas marcas de empresas de primer nivel de IT.
          </p>
        </div>

        {/* Hero About Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-gray-900 leading-tight">
                Transformando el Futuro a Través de la{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Innovación
                </span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Con el paso de los años se fueron agregando servicios de IT asociados a estas representaciones, 
                fundamentalmente de asesoramiento, implementación y configuración/soportes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Más adelante se empezó a incursionar ya en servicios puntuales requeridos por los clientes, 
                así como en desarrollos específicos para resolver problemáticas o realizar proyectos completos.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-900">
                Nuestros Logros Destacados
              </h4>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {achievement.icon}
                      </div>
                    </div>
                    <span className="text-gray-700 text-lg font-medium">{achievement.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-3 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105">
                <span>Conocer Nuestra Historia</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="HCT Group Team"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-3xl"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 right-8">
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section - Continúa igual estructura pero con el texto actualizado */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Nuestra Evolución{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Histórica
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un recorrido por los hitos que nos han convertido en líderes de la innovación tecnológica
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}>
                  {/* Content Side */}
                  <div className="lg:w-5/12">
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <div className="text-white">
                            {item.icon}
                          </div>
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="lg:w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg relative z-10">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="lg:w-5/12">
                    <div className="relative group">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl group-hover:from-blue-900/30 transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-3xl p-16 shadow-2xl border border-gray-100">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Nuestros{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Valores
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios fundamentales que guían cada decisión y acción en HCT Group
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-8">
                  <img 
                    src={value.image}
                    alt={value.title}
                    className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                  <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;