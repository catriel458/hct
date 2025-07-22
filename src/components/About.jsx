// src/components/About.jsx
import React from 'react';
import { Calendar, Users, Trophy, Lightbulb, ArrowRight, CheckCircle, Award, Target, Zap, Building } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: "2009",
      title: "Fundación Estratégica",
      description: "HCT SA nace como representante premium de hardware y software de marcas líderes mundiales en IT, estableciendo bases sólidas en el mercado tecnológico.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Building className="w-6 h-6" />
    },
    {
      year: "2012",
      title: "Expansión de Servicios",
      description: "Incorporamos servicios especializados de asesoramiento técnico, implementación avanzada y soporte 24/7, consolidando nuestra propuesta integral.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Users className="w-6 h-6" />
    },
    {
      year: "2016",
      title: "Innovación en Desarrollos",
      description: "Iniciamos el desarrollo de soluciones personalizadas y proyectos completos, posicionándonos como líderes en transformación digital.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      year: "2020",
      title: "Revolución Deportiva",
      description: "Pioneros en tecnología deportiva avanzada, desarrollamos sistemas de automatización que democratizan el acceso a herramientas de élite.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Trophy className="w-6 h-6" />
    }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovación Constante",
      description: "Investigamos y aplicamos las tecnologías más avanzadas para crear soluciones que marquen la diferencia en el mercado.",
      image: "https://images.unsplash.com/photo-1553484771-cc0d9b8c2e92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Colaboración Estratégica",
      description: "Construimos alianzas sólidas con empresas líderes globales para ofrecer las mejores soluciones tecnológicas del mercado.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Excelencia Garantizada",
      description: "Nos comprometemos a entregar resultados excepcionales que superen las expectativas de nuestros clientes más exigentes.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const achievements = [
    { text: "15+ años de liderazgo en el mercado tecnológico", icon: <Calendar className="w-5 h-5" /> },
    { text: "Más de 100 proyectos exitosos completados", icon: <Target className="w-5 h-5" /> },
    { text: "Especialistas reconocidos en tecnología deportiva", icon: <Zap className="w-5 h-5" /> },
    { text: "Clientes satisfechos en sector público y privado", icon: <Award className="w-5 h-5" /> },
    { text: "Representaciones exclusivas de marcas internacionales", icon: <Building className="w-5 h-5" /> }
  ];

  const stats = [
    { value: "15+", label: "Años de Experiencia", color: "text-blue-600" },
    { value: "100+", label: "Proyectos Completados", color: "text-green-600" },
    { value: "50+", label: "Clientes Satisfechos", color: "text-purple-600" },
    { value: "24/7", label: "Soporte Técnico", color: "text-orange-600" }
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
            Nuestra Historia de Éxito
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Quiénes{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Somos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Con más de 15 años transformando ideas en realidades tecnológicas, HCT Group se ha consolidado 
            como el socio estratégico de elección para empresas que buscan innovación de vanguardia.
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
                Desde nuestros inicios en 2009, hemos evolucionado de ser representantes tecnológicos 
                a convertirnos en pioneros de la innovación, especialmente en el revolucionario campo 
                de la tecnología deportiva.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hoy lideramos la democratización de tecnologías de élite, llevando herramientas 
                profesionales a todos los niveles de competencia y transformando la manera en que 
                los atletas entrenan y compiten.
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
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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

        {/* Timeline Section */}
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