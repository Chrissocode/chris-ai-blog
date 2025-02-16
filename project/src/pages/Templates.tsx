import React, { useState } from 'react';
import { Download, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import ContactForm from '../components/ContactForm';

function Templates() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const templates = [
    {
      title: 'KI-Chatbot Suite',
      description: 'Implementieren Sie einen intelligenten Kundenservice-Chatbot mit NLP-Fähigkeiten.',
      category: 'Kundenservice',
      image: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=800&h=400&fit=crop',
      price: 'Kostenlos',
      rating: 5,
      downloads: 1200
    },
    {
      title: 'Datenanalyse-Automation',
      description: 'Automatisierte Berichterstellung und Datenvisualisierung mit KI-gestützter Analyse.',
      category: 'Analytics',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      price: '€49',
      rating: 4.8,
      downloads: 850
    },
    {
      title: 'KI-Dokumentenverarbeitung',
      description: 'Extrahieren Sie automatisch Informationen aus Dokumenten mit OCR und NLP.',
      category: 'Dokumentenmanagement',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
      price: '€79',
      rating: 4.9,
      downloads: 650
    },
    {
      title: 'Predictive Maintenance',
      description: 'Vorhersage von Wartungsbedarf durch KI-basierte Anomalieerkennung.',
      category: 'Industrie',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop',
      price: '€99',
      rating: 4.7,
      downloads: 430
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">KI-Automatisierungsvorlagen</h1>
            <p className="text-xl text-gray-600 mb-12">
              Starten Sie Ihre KI-Transformation mit unseren professionellen, produktionsreifen Vorlagen.
            </p>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {templates.map((template, index) => (
              <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full mb-3">
                        {template.category}
                      </span>
                      <h3 className="text-2xl font-bold mb-2">{template.title}</h3>
                    </div>
                    <span className="text-xl font-bold text-green-600">
                      {template.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {template.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(template.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        ({template.downloads} Downloads)
                      </span>
                    </div>
                    <button className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                      <Download className="w-4 h-4" />
                      <span>Herunterladen</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Benötigen Sie eine maßgeschneiderte Lösung?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Lassen Sie uns gemeinsam eine individuelle KI-Automatisierungslösung für Ihr Unternehmen entwickeln.
            </p>
            <button
              onClick={() => setIsContactFormOpen(true)}
              className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Individuelle Beratung
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
    </div>
  );
}

export default Templates;