// src/components/Contact.jsx
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, User, MessageSquare, Building, Calendar, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Ubicación Estratégica",
      content: "Alicia Moreau de Justo 740",
      subtitle: "Piso 3 oficina 1, C1107AAP Buenos Aires, Argentina",
      description: "Puerto Madero - Distrito Tecnológico",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Líneas Directas",
      content: "+54 11 5217-5666",
      subtitle: "+54 11 6605-5894",
      description: "Atención especializada inmediata",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Comunicación Digital",
      content: "info@hctgroup.com.ar",
      subtitle: "contacto@hctgroup.com.ar",
      description: "Respuesta en menos de 2 horas",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Horarios de Atención",
      content: "Lunes a Viernes: 9:00 - 18:00",
      subtitle: "Sábados: 9:00 - 13:00",
      description: "Soporte de urgencias 24/7",
      color: "from-orange-500 to-red-600"
    }
  ];

  const services = [
    "Desarrollo de Software a Medida",
    "Entrenamiento Cognitivo-Motor",
    "Representaciones e Integración IT",
    "Consultoría Tecnológica Estratégica",
    "Soporte Técnico Especializado",
    "Transformación Digital Integral",
    "Otro (especificar en mensaje)"
  ];

  if (isSubmitted) {
    return (
      <section id="contacto" className="py-32 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-white rounded-3xl p-16 shadow-2xl border border-green-100">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                ¡Mensaje Enviado Exitosamente!
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Gracias por contactarnos. Nuestro equipo de especialistas se pondrá en contacto 
                contigo en las próximas 24 horas para analizar tu proyecto.
              </p>
              <div className="flex items-center justify-center space-x-4 text-green-600">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Tiempo de respuesta: menos de 24 horas</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <MessageSquare className="w-4 h-4 mr-2" />
            Conversemos sobre tu Proyecto
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Conecta con{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nosotros
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            ¿Tenés una idea revolucionaria? Estamos listos para convertirla en realidad. 
            Nuestro equipo de expertos te acompañará desde la conceptualización hasta la implementación.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-gray-900">
                Múltiples Canales de{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Comunicación
                </span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Elegí el canal que más te convenga. Nuestro equipo está disponible para 
                brindarte atención personalizada y respuestas expertas a todas tus consultas.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {info.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {info.title}
                      </h4>
                      <p className="text-lg text-gray-700 font-semibold mb-1">
                        {info.content}
                      </p>
                      {info.subtitle && (
                        <p className="text-gray-600 mb-2">
                          {info.subtitle}
                        </p>
                      )}
                      <p className="text-sm text-gray-500 font-medium">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Map */}
            <div className="relative group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Puerto Madero Location"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="font-bold text-gray-900">Puerto Madero</div>
                        <div className="text-sm text-gray-600">Distrito Tecnológico - Buenos Aires</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Iniciemos tu Proyecto
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Completá el formulario con los detalles de tu proyecto. Nuestro equipo analizará 
                tu propuesta y te contactará con una solución personalizada.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                    Nombre Completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                    Email Corporativo *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                </div>
              </div>

              {/* Phone and Company */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                    Teléfono de Contacto
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg"
                      placeholder="+54 11 1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-3">
                    Empresa u Organización
                  </label>
                  <div className="relative">
                    <Building className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-3">
                  Servicio de Interés
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg"
                >
                  <option value="">Seleccionar servicio principal</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                  Detalles del Proyecto *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none text-lg"
                    placeholder="Describí tu proyecto, objetivos, timeline y cualquier detalle relevante que nos ayude a entender mejor tus necesidades..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Send className="w-6 h-6" />
                <span>Enviar Propuesta de Proyecto</span>
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Campos obligatorios. Tu información está protegida y será utilizada únicamente para contactarte.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-16 text-white shadow-2xl">
            <h3 className="text-4xl font-bold mb-6">
              ¿Preferís una Conversación Directa?
            </h3>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Conectate inmediatamente con nuestros especialistas. Estamos disponibles para 
              resolver todas tus dudas y comenzar a trabajar en tu proyecto hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+541152175666"
                className="bg-white text-blue-600 px-10 py-5 rounded-2xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-3"
              >
                <Phone className="w-6 h-6" />
                <span>Llamar Ahora</span>
              </a>
              <a
                href="https://wa.me/541152175666"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-10 py-5 rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg hover:scale-105 inline-flex items-center justify-center space-x-3"
              >
                <MessageSquare className="w-6 h-6" />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:info@hctgroup.com.ar"
                className="border-2 border-white text-white px-10 py-5 rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg hover:scale-105 inline-flex items-center justify-center space-x-3"
              >
                <Mail className="w-6 h-6" />
                <span>Email Directo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;