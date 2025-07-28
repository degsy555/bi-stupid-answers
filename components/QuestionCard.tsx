
'use client';

import { useState, useEffect } from 'react';

interface QuestionCardProps {
  question: string;
  answer: string;
  onNextQuestion: () => void;
  category?: string;
}

export default function QuestionCard({ question, answer, onNextQuestion, category }: QuestionCardProps) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [questionKey, setQuestionKey] = useState('');

  // Reset answer visibility when question changes and generate unique key
  useEffect(() => {
    setIsAnswerVisible(false);
    setShowShareMenu(false);
    const key = `${category}-${question.slice(0, 50)}`;
    setQuestionKey(key);
    
    // Check if this question is favorited
    const favorites = JSON.parse(localStorage.getItem('bsa-favorites') || '[]');
    setIsFavorited(favorites.includes(key));
  }, [question, category]);

  const toggleAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('bsa-favorites') || '[]');
    if (isFavorited) {
      const newFavorites = favorites.filter(fav => fav !== questionKey);
      localStorage.setItem('bsa-favorites', JSON.stringify(newFavorites));
    } else {
      favorites.push(questionKey);
      localStorage.setItem('bsa-favorites', JSON.stringify(favorites));
    }
    setIsFavorited(!isFavorited);
  };

  const shareQuestion = () => {
    setShowShareMenu(!showShareMenu);
  };

  const copyToClipboard = async () => {
    const text = `${question}\n\n${answer}\n\nShared from Big Stupid Answers app!`;
    await navigator.clipboard.writeText(text);
    setShowShareMenu(false);
    
    // Show feedback
    const button = document.querySelector('.copy-feedback');
    if (button) {
      button.textContent = 'Copied!';
      setTimeout(() => {
        button.textContent = 'Copy';
      }, 2000);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Food & Drink':
        return 'from-red-400 to-red-500';
      case 'Science':
        return 'from-blue-400 to-blue-500';
      case 'Daily Life':
        return 'from-green-400 to-green-500';
      case 'Logic':
        return 'from-purple-400 to-purple-500';
      default:
        return 'from-yellow-400 to-yellow-500';
    }
  };

  return (
    <div className="w-full">
      {/* Category Badge */}
      {category && (
        <div className="text-center mb-4">
          <span className={`inline-block px-3 py-1 rounded-full text-white text-xs font-bold bg-gradient-to-r ${getCategoryColor(category)}`}>
            {category}
          </span>
        </div>
      )}

      {/* Question */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-gray-800 leading-tight mb-4">
          {question}
        </h2>
        
        {/* Question Icon */}
        <div className="w-12 h-12 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
          <i className="ri-question-mark text-xl text-yellow-800"></i>
        </div>
      </div>

      {/* Answer Area */}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
        isAnswerVisible ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0 mb-0'
      }`}>
        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-3 border-l-4 border-green-500">
          <div className="flex items-center mb-2">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2">
              <i className="ri-lightbulb-line text-white text-xs"></i>
            </div>
            <span className="text-green-700 font-semibold text-xs">Answer:</span>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            {answer}
          </p>
        </div>
      </div>

      {/* Action Buttons Row */}
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={toggleFavorite}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isFavorited ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
        >
          <i className={`ri-heart-${isFavorited ? 'fill' : 'line'} text-lg`}></i>
        </button>

        <div className="relative">
          <button
            onClick={shareQuestion}
            className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 flex items-center justify-center transition-all duration-300"
          >
            <i className="ri-share-line text-lg"></i>
          </button>
          
          {/* Share Menu */}
          {showShareMenu && (
            <div className="absolute bottom-12 right-0 bg-white rounded-lg shadow-lg p-2 min-w-32 z-10">
              <button
                onClick={copyToClipboard}
                className="copy-feedback w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded flex items-center"
              >
                <i className="ri-file-copy-line mr-2"></i>
                Copy
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Buttons */}
      <div className="space-y-2">
        <button
          onClick={toggleAnswer}
          className={`w-full py-3 rounded-full font-bold text-sm transition-all duration-300 !rounded-button ${
            isAnswerVisible 
              ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600' 
              : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
          }`}
        >
          {isAnswerVisible ? 'Hide Answer' : 'Show Answer'}
        </button>
        
        <button
          onClick={onNextQuestion}
          className="w-full bg-gray-100 text-gray-700 py-3 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors !rounded-button"
        >
          Next Question
        </button>
      </div>
    </div>
  );
}
