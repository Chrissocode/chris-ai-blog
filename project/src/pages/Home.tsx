import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Twitter, Linkedin, Mail, ChevronDown, ArrowRight, Star, Zap, Shield, BarChart } from 'lucide-react';
import ContactForm from '../components/ContactForm';

function Home() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const stats = [
    { label: 'Unterstützte Unternehmen', value: '50+' },
    { label: 'KI-Implementierungen', value: '100+' },
    { label: 'Kostenreduzierung', value: '40%' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO bei TechFlow',
      content: 'Die Zusammenarbeit mit Chris hat unsere Geschäftsprozesse komplett transformiert. Seine KI-Implementierungen haben uns geholfen, die Kosten um 45% zu senken.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      name: 'Michael Chen',
      role: 'CTO bei InnovateCorp',
      content: 'Chris hat eine unglaubliche Fähigkeit, Geschäftsanforderungen zu verstehen und in effektive KI-Lösungen umzusetzen. Sehr empfehlenswert!',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    {
      name: 'Emma Williams',
      role: 'Operations Direktorin',
      content: 'Die von Chris entwickelten KI-Implementierungen sind zu einem integralen Bestandteil unseres Tagesgeschäfts geworden. Herausragende Ergebnisse!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automatisierung',
      description: 'Optimieren Sie Ihre Geschäftsprozesse durch KI-gestützte Automatisierung'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Sicherheit',
      description: 'Implementierung unter Berücksichtigung höchster Sicherheitsstandards'
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Analyse',
      description: 'Datengesteuerte Entscheidungen durch KI-gestützte Analysen'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <nav className="fixed w-full top-0 bg-white/80 backdrop-blur-md z-50 py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
              <span className="text-white font-medium">C</span>
            </div>
            <span className="font-medium">Chris AI</span>
          </Link>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Startseite</Link>
            <Link to="/templates" className="text-gray-600 hover:text-gray-900">Vorlagen</Link>
            <Link to="/agent-prompt" className="text-gray-600 hover:text-gray-900">KI-Assistent</Link>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://youtube.com/@your-channel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:your.email@example.com" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-6 pt-32">
          <div className="flex items-center min-h-[calc(100vh-8rem)]">
            <div className="grid grid-cols-2 gap-12 items-center w-full">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-lg">Hallo, ich bin Chris</p>
                  <h1 className="text-6xl font-bold leading-tight">
                    Ich helfe Unternehmen bei der KI-Integration
                  </h1>
                </div>
                <button
                  onClick={() => setIsContactFormOpen(true)}
                  className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
                >
                  Zusammenarbeiten
                </button>
                <div className="flex items-center space-x-4 pt-4">
                  <a href="https://youtube.com/@your-channel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <Youtube className="w-6 h-6" />
                  </a>
                  <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="mailto:your.email@example.com" aria-label="Email">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
                    alt="Chris"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Visual Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative p-8 text-center">
                  <div className="mb-6 inline-block p-4 bg-gray-50 rounded-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Über Mich</h2>
            <p className="text-lg text-gray-600 mb-8">
              Als 21-jähriger KI-Implementierungsspezialist bin ich leidenschaftlich daran interessiert, Unternehmen dabei zu helfen, künstliche Intelligenz zu nutzen, um ihre Abläufe zu optimieren und die Effizienz zu steigern. Mit Erfahrung in verschiedenen Branchen habe ich Unternehmen dabei unterstützt, durch strategische KI-Integration Kosten zu senken.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-2">Strategie</h3>
                <p className="text-gray-600">Maßgeschneiderte KI-Lösungen für Ihre Geschäftsanforderungen</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-2">Implementierung</h3>
                <p className="text-gray-600">Nahtlose Integration in bestehende Systeme</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-2">Support</h3>
                <p className="text-gray-600">Kontinuierliche Wartung und Optimierung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Was Andere Sagen</h2>
          <div className="grid grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Bereit für die Transformation?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Lassen Sie uns besprechen, wie KI Ihrem Unternehmen helfen kann, seine Ziele zu erreichen und Abläufe zu optimieren.
            </p>
            <button
              onClick={() => setIsContactFormOpen(true)}
              className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Jetzt Starten
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
    </div>
  );
}

export default Home;