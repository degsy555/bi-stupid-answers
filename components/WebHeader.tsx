
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function WebHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <i className="ri-question-answer-line text-white text-xl"></i>
            </div>
            <span className="text-xl font-bold text-gray-800 font-pacifico">
              Big Stupid Answers
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/learn-more" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Learn More
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Categories
            </Link>
            <a href="mailto:hello@bigstupidanswers.com" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bigstupidanswers.app', '_blank')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold hover:from-purple-600 hover:to-pink-600 transition-all !rounded-button flex items-center gap-2"
            >
              <i className="ri-smartphone-line"></i>
              Get App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-purple-600 transition-colors"
          >
            <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/learn-more" 
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Learn More
              </Link>
              <Link 
                href="/categories" 
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <a 
                href="mailto:hello@bigstupidanswers.com" 
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <button
                onClick={() => {
                  window.open('https://play.google.com/store/apps/details?id=com.bigstupidanswers.app', '_blank');
                  setIsMobileMenuOpen(false);
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold hover:from-purple-600 hover:to-pink-600 transition-all !rounded-button flex items-center gap-2 w-fit"
              >
                <i className="ri-smartphone-line"></i>
                Get App
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
