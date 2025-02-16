import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Youtube, Twitter, Linkedin, Mail } from 'lucide-react';
import Home from './pages/Home';
import Templates from './pages/Templates';
import Blog from './pages/Blog';
import AgentPrompt from './pages/AgentPrompt';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/agent-prompt" element={<AgentPrompt />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;