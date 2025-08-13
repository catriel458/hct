// src/components/Innovation.jsx
import React from 'react';
import { Timer, MapPin, Brain, Activity, Rocket, Trophy } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Innovation = () => {
  const technologies = [
    {
      icon: <Timer className="w-6 h-6" />,
      title: "Timers",
      description: "Cronometraje de precisión"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "GPS Deportivos",
      description: "Seguimiento en tiempo real"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Elementos Cognitivos",
      description: "Mejora de reacciones"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Wearables",
      description: "Análisis de rendimiento"
    }
  ];

  const trainingInfo = [
    {
      title: "Automatización de Entrenamientos",
      description:
        "Timers, GPS y elementos cognitivos para perfeccionar cualidades técnicas y reacciones de los atletas.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Wearables",
      description:
        "Medición de variables como distancia, sprints, aceleraciones, desaceleraciones y mapa de calor.",
      image: "https://plus.unsplash.com/premium_photo-1664537975122-9c598d85816e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Tecnología Accesible",
      description:
        "Llevar herramientas de élite a costos accesibles para clubes y ligas locales.",
      image: "https://images.unsplash.com/photo-1607627000458-210e8d2bdb1d?q=80&w=1149&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const sports = [
    { name: "Fútbol", icon: "⚽", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=400&q=80" },
    { name: "Rugby", icon: "🏉", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80" },
    { name: "Hockey", icon: "🏑", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80" },
    { name: "Básquet", icon: "🏀", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=400&q=80" },
    { name: "Tenis", icon: "🎾", image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=400&q=80" },
    { name: "Running", icon: "🏃‍♂️", image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&w=400&q=80" }
  ];

  return (
    <section id="innovacion" className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-indigo-900/95"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 border border-blue-400/30 text-blue-300 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <Rocket className="w-4 h-4 mr-2" />
            Innovación en tecnología deportiva
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Innovación que{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Transforma
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            La automatización de entrenamientos y la métrica de los resultados se afianzan en el mundo deportivo.
          </p>
        </div>

        {/* Main Content with Carousel */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-12 border border-white/20 shadow-2xl mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Automatización de Entrenamientos</h3>
          
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {trainingInfo.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20 backdrop-blur-xl hover:bg-white/15 transition-all h-full flex flex-col">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                  />
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-blue-200 text-sm flex-grow">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Technologies */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-6">Tecnologías Implementadas</h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-3">
                    <div className="text-white">{tech.icon}</div>
                  </div>
                  <h4 className="text-white font-semibold mb-1">{tech.title}</h4>
                  <p className="text-blue-300 text-sm">{tech.description}</p>
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
            Categorías más bajas, ligas locales, amateurs y profesionales
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
                Y muchos más deportes...
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
