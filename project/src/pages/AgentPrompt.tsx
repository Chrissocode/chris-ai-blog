import React, { useState } from 'react';
import { Send, Copy, Check, Zap, Shield, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function AgentPrompt() {
  const [prompt, setPrompt] = useState('');
  const [copied, setCopied] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState('');

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'KI-Optimiert',
      description: 'Automatisch generierte Prompts basierend auf Ihren Anforderungen'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Sicher',
      description: 'Alle generierten Prompts werden auf Sicherheit geprüft'
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Effizient',
      description: 'Maximale Effizienz durch optimierte Prompt-Strukturen'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const example = `Basierend auf Ihrer Eingabe, hier ist ein angepasster Automatisierungs-Prompt:

Aufgabe: ${prompt}

1. Analyse des aktuellen Workflows und Identifizierung von Engpässen
2. Mapping des gewünschten automatisierten Prozessablaufs
3. Implementierung der Automatisierung mit [spezifische Tools/Technologien]
4. Test der Automatisierung mit Beispieldaten
5. Überwachung und Optimierung des Prozesses

Wichtige Punkte:
- Dokumentation jedes Schritts
- Implementierung von Fehlerbehandlung
- Einrichtung von Überwachungsalarmen
- Schulung der Teammitglieder im neuen Prozess`;

    setGeneratedPrompt(example);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">KI-Prompt Generator</h1>
            <p className="text-xl text-gray-600 mb-12">
              Erstellen Sie maßgeschneiderte Automatisierungs-Prompts für Ihre spezifischen Geschäftsanforderungen.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg p-8 mb-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="prompt" className="block text-lg font-medium mb-2 text-gray-700">
                    Beschreiben Sie Ihre Automatisierungsanforderungen
                  </label>
                  <div className="relative">
                    <textarea
                      id="prompt"
                      rows={6}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-white shadow-sm"
                      placeholder="z.B.: Ich möchte meinen Kundenaufnahmeprozess automatisieren..."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                    />
                    <div className="absolute right-4 bottom-4 flex items-center space-x-2 text-sm text-gray-500">
                      <span>{prompt.length}</span>
                      <span>/</span>
                      <span>1000</span>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2 group"
                >
                  <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  <span>Prompt Generieren</span>
                </button>
              </form>
            </div>

            {generatedPrompt && (
              <div className="bg-white rounded-3xl shadow-lg p-8 animate-fade-in">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">Generierter Prompt</h3>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {copied ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                    <span>{copied ? 'Kopiert!' : 'Kopieren'}</span>
                  </button>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 whitespace-pre-wrap">
                  {generatedPrompt}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="inline-block p-3 bg-blue-50 rounded-xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AgentPrompt;