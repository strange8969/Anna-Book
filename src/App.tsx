import React from 'react';
import { BookOpen } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-8 h-8 text-emerald-600" />
              <h1 className="text-2xl font-bold text-gray-800">Anna Book Official</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">

          {/* Main Image */}
          <div className="mb-12 relative">
  <div className="relative inline-block">
    <a 
      href="https://wa.link/annabookofficial"
      target="_blank"
      rel="noopener noreferrer"
      className="block cursor-pointer"
    >
      <img 
        src="/1020X1920 3.png" 
        alt="Anna Book Official" 
        className="max-w-full h-auto rounded-2xl shadow-2xl mx-auto max-h-[600px] md:max-h-[700px] object-cover transition-all duration-300 hover:scale-105 hover:shadow-3xl"
      />
      {/* overlay must not block clicks */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </a>
  </div>
</div>


          {/* Get ID Button */}
          <div className="mb-16">
            <a 
              href="https://wa.link/annabookofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
            >
              Get Your ID Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <BookOpen className="w-8 h-8 text-emerald-400" />
              <h5 className="text-2xl font-bold">Anna Book Official</h5>
            </div>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-500">
                © 2025 Anna Book Official. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
