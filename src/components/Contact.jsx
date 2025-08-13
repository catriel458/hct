// src/components/Contact.jsx
import React, { useState } from 'react';
import { Send, CheckCircle, User, MessageSquare, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
        message: ''
      });
    }, 3000);
  };

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
                ¡Mensaje Enviado!
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Gracias por contactarnos. Nos pondremos en contacto a la brevedad.
              </p>
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <MessageSquare className="w-4 h-4 mr-2" />
            Contacto
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            ¿Querés{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              saber más?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Envianos un mensaje sobre el tema que te interese y nos pondremos en contacto
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                  Nombre *
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
                    placeholder="Tu nombre"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                  Email *
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
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                  Mensaje *
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
                    placeholder="Contanos sobre tu proyecto o consulta..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Send className="w-6 h-6" />
                <span>Enviar Mensaje</span>
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Campos obligatorios
              </p>
            </form>
          </div>
        </div>

        {/* Contact Info Simple */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">HCT S.A.</h3>
            <p className="text-gray-600 mb-2">
              Alicia Moreau de Justo 740 – Piso 3 oficina 1
            </p>
            <p className="text-gray-600 mb-4">
              C1107AAP Buenos Aires, Argentina
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-gray-700">
              <span>+54 11 5217-5666</span>
              <span className="hidden sm:inline">•</span>
              <span>+54 11 6605-5894</span>
              <span className="hidden sm:inline">•</span>
              <span>info@hctgroup.com.ar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;