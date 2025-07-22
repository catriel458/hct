// src/components/Innovation.jsx
import React from 'react';
import { Activity, Target, BarChart3, Users, PlayCircle, Timer, MapPin, TrendingUp, Zap, Trophy, Brain, Rocket } from 'lucide-react';

const Innovation = () => {
  const technologies = [
    {
      icon: <Timer className="w-8 h-8" />,
      title: "Sistemas de Timing Inteligente",
      description: "Cronometraje de precisión milimétrica para entrenamientos automatizados y competencias profesionales",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "GPS Deportivos Avanzados",
      description: "Seguimiento en tiempo real de posición, velocidad y movimiento con análisis predictivo",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Inteligencia Cognitiva",
      description: "Sistemas avanzados para mejorar la toma de decisiones y reacciones en tiempo real",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Wearables de Nueva Generación",
      description: "Dispositivos inteligentes para monitoreo continuo y análisis biométrico avanzado",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const metrics = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Distancia & Velocidad",
      description: "Medición precisa con análisis de patrones de movimiento",
      value: "±1cm",
      label: "Precisión"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Explosividad & Potencia",
      description: "Análisis detallado de sprints y aceleraciones",
      value: "0.001s",
      label: "Resolución"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mapas de Rendimiento",
      description: "Visualización avanzada de zonas de actividad",
      value: "360°",
      label: "Cobertura"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Análisis Grupal",
      description: "Estadísticas de equipo con IA predictiva",
      value: "∞",
      label: "Atletas"
    }
  ];

  const sports = [
    { name: "Fútbol", icon: "⚽", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Rugby", icon: "🏉", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Hockey", icon: "🏑", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Básquet", icon: "🏀", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Tenis", icon: "🎾", image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Running", icon: "🏃‍♂️", image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
  ];

  return (
    <section id="innovacion" className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Sports Technology"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-indigo-900/95"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 border border-blue-400/30 text-blue-300 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <Rocket className="w-4 h-4 mr-2" />
            Revolución en Tecnología Deportiva
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Innovación que{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Transforma
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Democratizamos la tecnología deportiva de élite, llevando sistemas avanzados de entrenamiento 
            y análisis a todos los niveles de competencia con precisión profesional.
          </p>
        </div>

        {/* Hero Innovation Card */}
        <div className="mb-24">
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-4xl font-bold text-white">
                    Automatización Inteligente de Entrenamientos
                  </h3>
                  <p className="text-xl text-blue-200 leading-relaxed">
                    Nuestros sistemas utilizan IA avanzada y sensores de precisión para crear 
                    entrenamientos adaptativos que evolucionan con el progreso de cada atleta.
                  </p>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                    <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
                    <div className="text-sm text-blue-200">Precisión en mediciones</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                    <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                    <div className="text-sm text-blue-200">Monitoreo continuo</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                    <div className="text-3xl font-bold text-green-400 mb-2">∞</div>
                    <div className="text-sm text-blue-200">Atletas simultáneos</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">AI</div>
                    <div className="text-sm text-blue-200">Análisis predictivo</div>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Smart Training System"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center space-x-3">
                        <PlayCircle className="w-8 h-8 text-blue-600" />
                        <div>
                          <div className="font-semibold text-gray-900">Sistema Activo</div>
                          <div className="text-sm text-gray-600">Entrenamiento en progreso</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-6">
              Tecnologías de{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Vanguardia
              </span>
            </h3>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Implementamos las tecnologías más avanzadas del mercado para revolucionar el entrenamiento deportivo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <div className="text-white">
                      {tech.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-3">
                      {tech.title}
                    </h4>
                    <p className="text-blue-200 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <img 
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-48 object-cover rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics Section */}
        <div className="mb-24">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-6">
                Métricas de{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Precisión
                </span>
              </h3>
              <p className="text-xl text-blue-200">
                Datos estadísticos avanzados que potencian las decisiones del cuerpo técnico
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {metric.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    {metric.title}
                  </h4>
                  <p className="text-blue-200 text-sm mb-4 leading-relaxed">
                    {metric.description}
                  </p>
                  <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/20">
                    <div className="text-2xl font-bold text-blue-400">{metric.value}</div>
                    <div className="text-xs text-blue-300">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sports Section */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Deportes{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Compatibles
            </span>
          </h3>
          <p className="text-xl text-blue-200 mb-12 max-w-3xl mx-auto">
            Nuestra tecnología se adapta a una amplia gama de disciplinas deportivas
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {sports.map((sport, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105">
                <div className="relative h-32">
                  <img 
                    src={sport.image}
                    alt={sport.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-3 right-3 text-2xl">{sport.icon}</div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-white">{sport.name}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-2xl backdrop-blur-sm">
              <Trophy className="w-6 h-6 text-yellow-400 mr-3" />
              <span className="text-blue-100 text-lg font-medium">
                Y muchos deportes más en constante expansión...
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;