// src/components/Services.jsx
import React from 'react';
import { Zap, Code, Users, ArrowRight, Target, BarChart3, Settings, CheckCircle, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Entrenamiento Cognitivo-Motor",
      description: "Revolucionamos el entrenamiento deportivo con tecnología avanzada que mejora la percepción, enfoque y velocidad de reacción mediante simulaciones inteligentes.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Análisis de datos en tiempo real",
        "Entrenamientos adaptativos personalizados",
        "Métricas de rendimiento avanzadas",
        "Seguimiento de progreso detallado"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      stats: { value: "95%", label: "Mejora en rendimiento" }
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Desarrollo de Software",
      description: "Creamos soluciones digitales robustas y escalables, diseñadas específicamente para satisfacer las necesidades únicas de cada cliente y sector.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Arquitectura escalable y moderna",
        "Integración de sistemas completa",
        "Soporte técnico especializado 24/7",
        "Mantenimiento evolutivo continuo"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      stats: { value: "100+", label: "Proyectos entregados" }
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Representaciones e Integración",
      description: "Conectamos a nuestros clientes con las mejores tecnologías del mercado, ofreciendo integración completa y soporte especializado de marcas líderes.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Representación de marcas premium",
        "Integración end-to-end completa",
        "Asesoramiento técnico especializado",
        "Soporte post-implementación"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      stats: { value: "50+", label: "Marcas representadas" }
    }
  ];

  const processSteps = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Análisis Estratégico",
      description: "Evaluamos profundamente sus necesidades y objetivos para diseñar la solución perfecta"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Desarrollo Ágil",
      description: "Implementamos metodologías ágiles para crear soluciones innovadoras y eficientes"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Implementación Exitosa",
      description: "Desplegamos y optimizamos su solución con soporte continuo y mejoras constantes"
    }
  ];

  return (
    <section id="servicios" className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Soluciones Tecnológicas Avanzadas
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Nuestros{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Servicios
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ofrecemos soluciones tecnológicas integrales de vanguardia que transforman la manera en que 
            las empresas operan, permitiéndoles alcanzar nuevos niveles de eficiencia y competitividad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16 mb-32">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              {/* Image Side */}
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover rounded-2xl"
                    />
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                      <div className="text-center">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                          {service.stats.value}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {service.stats.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 space-y-8">
                <div className="space-y-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-4xl font-bold text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-4 group">
                      <div className={`w-8 h-8 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <button className={`group bg-gradient-to-r ${service.color} text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl`}>
                    <span>Conocer más detalles</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-3xl p-12 lg:p-16 shadow-2xl border border-gray-100">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Nuestro Proceso de{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Excelencia
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodología probada y refinada a lo largo de 15 años para garantizar el éxito rotundo de cada proyecto
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h4>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>

                {/* Connector */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-12 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-x-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;