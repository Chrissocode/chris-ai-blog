import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Twitter, Linkedin, Mail } from 'lucide-react';

function Navigation() {
  return (
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
  );
}

export default Navigation;