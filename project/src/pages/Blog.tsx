import React from 'react';
import { Clock, User, Youtube, ArrowRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Blog() {
  const [selectedPost, setSelectedPost] = React.useState(null);

  const posts = [
    {
      title: 'Die Zukunft der KI-Automatisierung',
      excerpt: 'Entdecken Sie, wie KI und Automatisierung die Geschäftswelt im Jahr 2025 und darüber hinaus transformieren.',
      author: 'Chris',
      date: '15. März 2025',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
      category: 'Technologie',
      videoId: 'abc123xyz',
      readTime: '5 min',
      content: `
        <h2>Die Zukunft der KI-Automatisierung</h2>
        <p>In diesem Video erkunden wir, wie künstliche Intelligenz und Automatisierung die Arbeitsweise von Unternehmen revolutionieren...</p>
        <div class="video-wrapper my-8">
          <iframe 
            width="100%" 
            height="400" 
            src="https://www.youtube.com/embed/abc123xyz" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            class="rounded-2xl">
          </iframe>
        </div>
        <h3 class="text-2xl font-bold mb-4">Kernpunkte des Videos:</h3>
        <ul class="list-disc pl-6 space-y-2 mb-8">
          <li>Der Aufstieg der KI in der Geschäftsautomatisierung</li>
          <li>Kosteneinsparungen durch Automatisierung</li>
          <li>Implementierungsstrategien für Unternehmen</li>
        </ul>
        <p class="mb-6">Die Integration von KI in Geschäftsprozesse ist nicht mehr nur eine Option, sondern eine Notwendigkeit für Unternehmen, die in der digitalen Ära wettbewerbsfähig bleiben wollen.</p>
      `
    },
    {
      title: 'Maximale Effizienz mit KI-Tools',
      excerpt: 'Lernen Sie, wie Sie KI-Tools nutzen können, um Ihren Workflow zu optimieren und die Produktivität zu steigern.',
      author: 'Chris',
      date: '10. März 2025',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
      category: 'Produktivität',
      videoId: 'def456uvw',
      readTime: '4 min',
      content: `
        <h2>Maximale Effizienz mit KI-Tools</h2>
        <p>Entdecken Sie die effektivsten KI-Tools zur Optimierung Ihrer Geschäftsprozesse...</p>
        <div class="video-wrapper my-8">
          <iframe 
            width="100%" 
            height="400" 
            src="https://www.youtube.com/embed/def456uvw" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            class="rounded-2xl">
          </iframe>
        </div>
        <h3 class="text-2xl font-bold mb-4">Behandelte Themen:</h3>
        <ul class="list-disc pl-6 space-y-2 mb-8">
          <li>Die besten KI-Tools für Geschäftsautomatisierung</li>
          <li>Implementierungsstrategien</li>
          <li>ROI-Analyse</li>
        </ul>
      `
    },
    {
      title: 'Digital-First Unternehmen aufbauen',
      excerpt: 'Schritt-für-Schritt-Anleitung zur Transformation Ihres traditionellen Unternehmens in ein digitales Powerhouse.',
      author: 'Chris',
      date: '5. März 2025',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      category: 'Business',
      videoId: 'ghi789jkl',
      readTime: '6 min',
      content: `
        <h2>Digital-First Unternehmen aufbauen</h2>
        <p>Transformieren Sie Ihr traditionelles Unternehmen mit diesen bewährten Strategien...</p>
        <div class="video-wrapper my-8">
          <iframe 
            width="100%" 
            height="400" 
            src="https://www.youtube.com/embed/ghi789jkl" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            class="rounded-2xl">
          </iframe>
        </div>
        <h3 class="text-2xl font-bold mb-4">Was Sie lernen werden:</h3>
        <ul class="list-disc pl-6 space-y-2 mb-8">
          <li>Digitale Transformationsstrategie</li>
          <li>Auswahl der Technologie-Stack</li>
          <li>Change Management Tipps</li>
        </ul>
      `
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navigation />

      {selectedPost ? (
        <div className="container mx-auto px-6 pt-32">
          <button
            onClick={() => setSelectedPost(null)}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-12 group"
          >
            <ChevronLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Alle Artikel
          </button>
          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full mb-4">
                {selectedPost.category}
              </span>
              <h1 className="text-4xl font-bold mb-4">{selectedPost.title}</h1>
              <div className="flex items-center text-gray-600 space-x-6">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{selectedPost.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{selectedPost.readTime} Lesezeit</span>
                </div>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
            </div>
            <div className="mt-12 pt-8 border-t">
              <a
                href={`https://youtube.com/watch?v=${selectedPost.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors"
              >
                <Youtube className="w-5 h-5 mr-2" />
                Auf YouTube ansehen
              </a>
            </div>
          </article>
        </div>
      ) : (
        <>
          {/* Blog Posts Grid */}
          <div className="container mx-auto px-6 pt-32">
            <h1 className="text-4xl font-bold text-center mb-16">Aktuelle Artikel</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article
                  key={index}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full mb-4">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-4 text-gray-600">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-blue-600 group-hover:translate-x-2 transition-transform">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <section className="py-20 mt-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Bleiben Sie informiert</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Abonnieren Sie unseren Newsletter für die neuesten Artikel und Insights zur KI-Automatisierung.
                </p>
                <form className="flex gap-4 max-w-xl mx-auto">
                  <input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
                  >
                    Abonnieren
                  </button>
                </form>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default Blog;