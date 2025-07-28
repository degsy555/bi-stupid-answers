'use client';

import Link from 'next/link';
import { useState } from 'react';

const questionsByCategory = {
  'Food & Drink': [
    {
      question: "Why do hot dogs come in packages of 10 but buns come in packages of 8?",
      answer: "It's actually a marketing conspiracy! Hot dog manufacturers and bun makers are in cahoots to make you buy more of both."
    },
    {
      question: "If nothing sticks to Teflon, how do they make Teflon stick to the pan?",
      answer: "They roughen up the pan surface first, then spray on a primer that bonds to the metal. The Teflon coating sticks to this primer!"
    },
    {
      question: "Why do we say 'brain freeze' when we eat ice cream too fast?",
      answer: "Your brain isn't actually freezing! Blood vessels in your mouth constrict then rapidly dilate, causing referred pain to your forehead."
    },
    {
      question: "Why do we call it 'pineapple' when it's neither pine nor apple?",
      answer: "Early English speakers thought it looked like a pinecone and tasted sweet like an apple! Most other languages call it 'ananas'."
    },
    {
      question: "Why does spicy food make your nose run?",
      answer: "Capsaicin triggers the same nerve receptors that respond to heat. Your body thinks it's overheating and tries to cool down!"
    }
  ],
  'Science': [
    {
      question: "If you're in a vehicle going the speed of light, what happens when you turn on the headlights?",
      answer: "According to Einstein's theory of relativity, nothing can travel faster than light, so this scenario is impossible!"
    },
    {
      question: "Why don't we feel the Earth spinning?",
      answer: "We're all moving at the same speed as the Earth! It's like being in a smoothly moving car - you only feel acceleration."
    },
    {
      question: "If heat rises, why is it colder at the top of mountains?",
      answer: "Heat doesn't actually 'rise' - hot air rises because it's less dense! At higher altitudes, air pressure is lower."
    },
    {
      question: "Why is the sky blue but space is black?",
      answer: "Earth's atmosphere scatters sunlight, and blue light gets scattered more. Space has no atmosphere to scatter light!"
    },
    {
      question: "If Earth is spinning, why don't airplanes flying west get there faster?",
      answer: "The atmosphere spins with the Earth! Airplanes fly through air that's already moving at the same speed as the ground."
    }
  ],
  'Daily Life': [
    {
      question: "Why do we park in driveways and drive on parkways?",
      answer: "English's quirky contradictions! 'Driveway' was originally a private road, but we park there. 'Parkway' was designed for scenic driving."
    },
    {
      question: "Why is it called 'rush hour' when nobody's moving?",
      answer: "The term comes from the 'rush' of people trying to get to work, not the speed of traffic! It's the rush of demand."
    },
    {
      question: "Why do we say 'after dark' when it's actually after light?",
      answer: "We say 'after dark' because darkness is the notable change. It's like saying 'after the arrival of darkness'."
    },
    {
      question: "Why do we say 'break a leg' for good luck when we mean the opposite?",
      answer: "Theater superstition! Saying 'good luck' was considered bad luck, so actors said the opposite."
    },
    {
      question: "Why do we say 'it's raining cats and dogs' when no animals are falling?",
      answer: "Nobody knows for sure! It might come from Norse mythology where cats represented rain and dogs represented wind."
    }
  ],
  'Logic': [
    {
      question: "If money doesn't grow on trees, why do banks have branches?",
      answer: "Bank 'branches' come from the idea of a main trunk (headquarters) with smaller offshoots (local offices). Nothing to do with actual trees!"
    },
    {
      question: "Why do we call it 'hamburger' when there's no ham in it?",
      answer: "It's named after Hamburg, Germany, not ham! German immigrants brought 'Hamburg steak' to America in the 19th century."
    },
    {
      question: "If practice makes perfect, and nobody's perfect, why practice?",
      answer: "Practice doesn't make perfect - it makes permanent! The idea is that practice makes you better, not perfect."
    },
    {
      question: "Why do we say 'a pair of pants' when it's just one item?",
      answer: "Pants used to be two separate leg coverings that you'd tie together! Each leg was a separate piece, so you literally had a 'pair'."
    },
    {
      question: "If you try to fail and succeed, which have you done?",
      answer: "You've succeeded at failing! This is a paradox - your goal was to fail, and you accomplished that goal, so you succeeded."
    }
  ]
};

export default function LearnMore() {
  const [selectedCategory, setSelectedCategory] = useState('Food & Drink');

  const handleDownload = () => {
    const content = `Big Stupid Answers App - Learn More
    
Thank you for your interest in Big Stupid Answers!
    
This is a demo file to show the download functionality.
In a real app, this would be the actual APK file.
    
Features:
Endless Entertainment - Hundreds of hilarious questions
Perfect for Groups - Great conversation starter  
Simple & Intuitive - Just tap to reveal answers
Always Fresh - New questions added regularly
    
Question Categories and Samples:
${Object.entries(questionsByCategory).map(([category, questions]) => 
  `\n${category}:\n${questions.map(q => `- ${q.question}`).join('\n')}`
).join('\n')}
    
Visit our website: https://bigstupidanswers.com
Follow us on social media for updates!
    
Enjoy the app!`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'BigStupidAnswers-LearnMore.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    // Show download feedback
    const button = document.querySelector('.download-btn');
    if (button) {
      const originalText = button.textContent;
      button.textContent = 'Downloading...';
      button.classList.add('opacity-50');
      
      setTimeout(() => {
        button.textContent = 'Download Complete!';
        setTimeout(() => {
          button.textContent = originalText;
          button.classList.remove('opacity-50');
        }, 2000);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      {/* Header */}
      <div className="px-6 pt-16 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-pacifico">
          Learn More
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Everything you need to know about the most entertaining Q&A app!
        </p>
      </div>

      {/* What Is It Section */}
      <div className="px-6 py-12 bg-white/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-2xl mb-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <i className="ri-lightbulb-line text-3xl text-white"></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">What is Big Stupid Answers?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Big Stupid Answers is the ultimate entertainment app that combines humor, curiosity, and fun into bite-sized question-and-answer cards. Perfect for killing time, breaking the ice, or just having a good laugh!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why You'll Love It
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-4 flex items-center justify-center">
                <i className="ri-question-answer-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Endless Entertainment</h3>
              <p className="text-gray-700">
                Hundreds of hilarious, thought-provoking, and downright ridiculous questions that will keep you entertained for hours.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-4 flex items-center justify-center">
                <i className="ri-group-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Perfect for Groups</h3>
              <p className="text-gray-700">
                Great conversation starter for parties, dates, family gatherings, or just hanging out with friends.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mb-4 flex items-center justify-center">
                <i className="ri-smartphone-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Simple & Intuitive</h3>
              <p className="text-gray-700">
                No complicated menus or confusing interfaces. Just tap to reveal answers and move to the next question.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-4 flex items-center justify-center">
                <i className="ri-refresh-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Always Fresh</h3>
              <p className="text-gray-700">
                New questions added regularly to keep the content fresh and surprising. You'll never run out of fun!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Categories Section */}
      <div className="px-6 py-16 bg-gradient-to-br from-indigo-100 to-purple-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Explore Question Categories
          </h2>
          
          {/* Category Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {Object.keys(questionsByCategory).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`p-4 rounded-2xl text-center transition-all duration-300 !rounded-button ${
                  selectedCategory === category
                    ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                  <img 
                    src={`https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20${category.toLowerCase()}%20themed%20icon%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=64&height=64&seq=${category.replace(/\s+/g, '-').toLowerCase()}-cat-icon&orientation=squarish`}
                    alt={category}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="font-bold text-sm">{category}</h3>
              </button>
            ))}
          </div>

          {/* Sample Questions for Selected Category */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Sample {selectedCategory} Questions
            </h3>
            <div className="grid md:grid-cols-1 gap-6">
              {questionsByCategory[selectedCategory].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full mr-4 flex items-center justify-center flex-shrink-0">
                      <i className="ri-question-mark text-xl text-yellow-800"></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-800 mb-2">
                        {item.question}
                      </h4>
                      <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-3 border-l-4 border-green-500">
                        <div className="flex items-center mb-2">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2">
                            <i className="ri-lightbulb-line text-white text-xs"></i>
                          </div>
                          <span className="text-green-700 font-semibold text-xs">Answer:</span>
                        </div>
                        <p className="text-gray-700 text-sm">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="px-6 py-16 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Have Some Fun?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of people who are already enjoying the most entertaining Q&A experience!
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={handleDownload}
              className="download-btn bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-colors !rounded-button"
            >
              Download Now
            </button>
            <Link href="/" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors !rounded-button">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
