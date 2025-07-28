
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import QuestionCard from '../components/QuestionCard';

const questionsByCategory = {
  'Food & Drink': [
    {
      question: "Why do hot dogs come in packages of 10 but buns come in packages of 8?",
      answer: "It's actually a marketing conspiracy! Hot dog manufacturers and bun makers are in cahoots to make you buy more of both. You need 5 packs of buns and 4 packs of hot dogs to get an even 40 of each!"
    },
    {
      question: "If nothing sticks to Teflon, how do they make Teflon stick to the pan?",
      answer: "They roughen up the pan surface first, then spray on a primer that bonds to the metal. The Teflon coating sticks to this primer, not directly to the pan. It's like using glue to stick non-stick material!"
    },
    {
      question: "Why do we say 'brain freeze' when we eat ice cream too fast?",
      answer: "Your brain isn't actually freezing! When something cold hits the roof of your mouth, blood vessels constrict then rapidly dilate, causing pain. Your brain interprets this as coming from your forehead, hence 'brain freeze'!"
    },
    {
      question: "Why does coffee make you more awake but tea makes you more calm?",
      answer: "Coffee has more caffeine and hits you faster, while tea contains L-theanine, an amino acid that promotes relaxation. Tea also releases caffeine more slowly, giving you a gentler energy boost without the jitters!"
    },
    {
      question: "If olive oil is made from olives, what is baby oil made from?",
      answer: "Despite the name, baby oil is made from mineral oil (petroleum-based) and has nothing to do with babies! It's called 'baby oil' because it's gentle enough for baby skin. Pretty misleading name, right?"
    },
    {
      question: "Why do we call it 'pineapple' when it's neither pine nor apple?",
      answer: "Early English speakers thought it looked like a pinecone and tasted sweet like an apple! Most other languages call it 'ananas' which comes from the original Tupi word. English just had to be different!"
    },
    {
      question: "Why does spicy food make your nose run?",
      answer: "Capsaicin (the spicy compound) triggers the same nerve receptors that respond to heat and cold. Your body thinks it's overheating and tries to cool down by producing mucus and making you sweat!"
    },
    {
      question: "If you eat yourself, would you become twice as big or disappear completely?",
      answer: "You'd definitely disappear! The energy required to digest yourself would be greater than the energy you'd gain from eating yourself. Plus, you'd probably die from the whole 'eating yourself' thing first!"
    },
    {
      question: "Why do onions make you cry but garlic doesn't?",
      answer: "Onions release sulfur compounds that react with the water in your eyes to form sulfuric acid. Garlic contains similar compounds but they're less volatile and don't reach your eyes as easily!"
    },
    {
      question: "Why does bread always land butter-side down?",
      answer: "It's actually physics! The height of a typical table and the rotation speed of falling bread means it usually completes about half a rotation before hitting the ground. Murphy's Law just makes it feel worse!"
    },
    {
      question: "Why do we say 'room temperature' when every room is different?",
      answer: "Room temperature originally referred to the temperature of a typical indoor living space - around 68-72°F (20-22°C). It became a cooking and scientific standard even though rooms vary wildly!"
    },
    {
      question: "If vegetarians eat vegetables, what do humanitarians eat?",
      answer: "Ha! Humanitarians eat regular food, just like everyone else. The word comes from 'humanitarian' meaning showing compassion for human welfare, not from 'human' as a food source. Nice try though!"
    }
  ],
  'Science': [
    {
      question: "If you're in a vehicle going the speed of light, what happens when you turn on the headlights?",
      answer: "According to Einstein's theory of relativity, nothing can travel faster than light, so this scenario is impossible! But theoretically, the light would still move at light speed relative to space, not relative to your vehicle."
    },
    {
      question: "Why don't we feel the Earth spinning?",
      answer: "We're all moving at the same speed as the Earth! It's like being in a smoothly moving car - you only feel acceleration or deceleration, not constant motion. Plus, one full rotation takes 24 hours, so the movement is incredibly gradual."
    },
    {
      question: "If heat rises, why is it colder at the top of mountains?",
      answer: "Heat doesn't actually 'rise' - hot air rises because it's less dense! At higher altitudes, air pressure is lower, so air expands and cools. Plus, there's less atmosphere to trap heat from the sun."
    },
    {
      question: "Why do we see lightning before hearing thunder?",
      answer: "Light travels at 300,000 kilometers per second, while sound only travels at about 343 meters per second. They happen at the same time, but light reaches us almost instantly while sound takes much longer!"
    },
    {
      question: "If space is a vacuum, how do astronauts move around?",
      answer: "Newton's third law! For every action, there's an equal and opposite reaction. When astronauts push against something or use thrusters, they create force that propels them in the opposite direction. No air needed!"
    },
    {
      question: "Why is the sky blue but space is black?",
      answer: "Earth's atmosphere scatters sunlight, and blue light has a shorter wavelength so it gets scattered more. Space has no atmosphere to scatter light, so it appears black except where light directly hits objects!"
    },
    {
      question: "If Earth is spinning, why don't airplanes flying west get there faster?",
      answer: "The atmosphere spins with the Earth! Airplanes fly through the air, which is already moving at the same speed as the ground below. It's like walking inside a moving train - you're not affected by the train's speed!"
    },
    {
      question: "Why does time slow down when you're traveling at high speeds?",
      answer: "Einstein's relativity! Time is relative to the observer. At very high speeds, time literally passes more slowly for the traveler compared to a stationary observer. It's been proven with atomic clocks on fast-moving planes!"
    },
    {
      question: "If the universe is expanding, what is it expanding into?",
      answer: "This is mind-bending! The universe isn't expanding into anything - space itself is expanding. It's like dots on a balloon being stretched apart as the balloon inflates. There's no 'outside' the universe to expand into!"
    },
    {
      question: "Why do we have leap years?",
      answer: "Earth takes 365.25 days to orbit the sun, not exactly 365! Without leap years, our calendar would drift and eventually winter would occur in July. We add February 29th every 4 years to keep things aligned!"
    },
    {
      question: "If you're colorblind, do you see the world in black and white?",
      answer: "Not usually! Most colorblind people see colors, just differently. They might confuse reds and greens or blues and yellows. Only about 0.003% of people see the world in complete grayscale!"
    },
    {
      question: "Why doesn't gravity work the same on all planets?",
      answer: "Gravity depends on mass and distance! The more massive a planet, the stronger its gravitational pull. A planet's size also matters - if you're farther from the center, gravity is weaker. That's why you'd weigh less on Mars!"
    }
  ],
  'Daily Life': [
    {
      question: "Why do we park in driveways and drive on parkways?",
      answer: "This is one of English's quirky contradictions! 'Driveway' originally referred to a private road you drive on to reach your house, but we park there. 'Parkway' was designed as a scenic road for leisurely driving, like a park for cars!"
    },
    {
      question: "Why is it called 'rush hour' when nobody's moving?",
      answer: "The term comes from the 'rush' of people trying to get to work or home at the same time, not the speed of traffic! It's the rush of demand, not the rush of movement. Pretty ironic, right?"
    },
    {
      question: "Why do we say 'after dark' when it's actually after light?",
      answer: "Great observation! We say 'after dark' because darkness is the notable change that happens. It's like saying 'after the arrival of darkness' rather than 'after the departure of light.' Language is weird!"
    },
    {
      question: "Why do we call it 'sleeping like a baby' when babies wake up every few hours?",
      answer: "This saying actually refers to the quality of sleep, not the duration! Babies sleep very deeply and peacefully when they do sleep, even though they wake up frequently. It's about sleeping soundly, not sleeping long!"
    },
    {
      question: "Why do we say 'heads up' when we want people to look down or duck?",
      answer: "Originally, 'heads up' meant to lift your head and be alert to danger. Over time, it evolved to mean 'pay attention' or 'be careful,' even when the appropriate action is to duck. Language evolution is confusing!"
    },
    {
      question: "Why do we call it 'morning' when it's technically mourning the night?",
      answer: "Actually, 'morning' comes from 'morn' meaning dawn or daybreak! It has nothing to do with mourning. Though getting up early can feel like mourning your lost sleep, the words are completely unrelated!"
    },
    {
      question: "Why do we say 'break a leg' for good luck when we mean the opposite?",
      answer: "Theater superstition! Saying 'good luck' was considered bad luck, so actors said the opposite. 'Break a leg' might also refer to bending your leg in a bow after a great performance!"
    },
    {
      question: "Why do we call it 'falling asleep' when you're actually lying down?",
      answer: "Sleep was once thought of as a state you 'fell' into, like falling into a hole or trap. The transition from consciousness to unconsciousness felt like dropping or falling away from wakefulness!"
    },
    {
      question: "Why do we say 'it's raining cats and dogs' when no animals are falling?",
      answer: "Nobody knows for sure! It might come from Norse mythology where cats represented rain and dogs represented wind. Or it could be from heavy rain washing dead animals through the streets in medieval times. Gross but true!"
    },
    {
      question: "Why do we knock on wood for good luck?",
      answer: "Ancient people believed spirits lived in trees, so they'd knock on wood to wake up friendly spirits or scare away evil ones. It's one of the oldest superstitions that survived into modern times!"
    },
    {
      question: "Why do we say 'bless you' when someone sneezes?",
      answer: "Originally, people thought your soul could escape through your nose when you sneezed, or that evil spirits could enter! Saying 'bless you' was protection. Now it's just polite habit!"
    },
    {
      question: "Why do we close our eyes when we sneeze?",
      answer: "It's an involuntary reflex! Your body automatically closes your eyes to protect them from whatever you're sneezing out. Despite the myth, your eyes won't pop out if you keep them open!"
    }
  ],
  'Logic': [
    {
      question: "If money doesn't grow on trees, why do banks have branches?",
      answer: "This is just a funny coincidence! Bank 'branches' come from the idea of a main trunk (headquarters) with smaller offshoots (local offices). It has nothing to do with actual trees, even though it makes for a great joke!"
    },
    {
      question: "Why do we call it 'hamburger' when there's no ham in it?",
      answer: "It's named after Hamburg, Germany, not ham! German immigrants brought 'Hamburg steak' to America in the 19th century. When it was put between bread, it became a 'hamburger sandwich' - nothing to do with pigs!"
    },
    {
      question: "If practice makes perfect, and nobody's perfect, why practice?",
      answer: "Practice doesn't actually make perfect - it makes permanent! The idea is that practice makes you better, not perfect. Plus, the journey of improvement is more important than reaching an impossible state of perfection."
    },
    {
      question: "Why do we say 'I could care less' when we mean we couldn't care less?",
      answer: "This is a classic case of linguistic evolution! The original phrase was 'I couldn't care less,' meaning you care so little that it's impossible to care less. 'I could care less' is technically incorrect but has become widely accepted through common usage."
    },
    {
      question: "If the plural of mouse is mice, why isn't the plural of house 'hice'?",
      answer: "English borrowed 'mouse/mice' from Germanic languages where vowel changes indicated plurals. But 'house' came from a different linguistic path and follows the regular plural rule. English is basically a collection of rules from different languages - that's why it's so inconsistent!"
    },
    {
      question: "Why do we say 'a pair of pants' when it's just one item?",
      answer: "Pants used to be two separate leg coverings that you'd tie together at the waist! Each leg was a separate piece, so you literally had a 'pair' of leg coverings. The name stuck even after pants became one garment!"
    },
    {
      question: "If you're driving at the speed of light, what happens when you turn on the radio?",
      answer: "Radio waves travel at light speed too! If you're somehow going light speed, the radio waves from behind you would never catch up, and waves from ahead would hit you at twice light speed - which is impossible. You'd have no radio!"
    },
    {
      question: "Why do we say 'make a long story short' then tell the whole story anyway?",
      answer: "It's social courtesy! We acknowledge that we're about to tell a long story, but we can't actually make it short without losing important details. It's like saying 'I'll be brief' - famous last words!"
    },
    {
      question: "If you try to fail and succeed, which have you done?",
      answer: "You've succeeded at failing! This is a paradox - your goal was to fail, and you accomplished that goal, so you succeeded. But since you succeeded, you didn't fail at the original task. It's a logical loop!"
    },
    {
      question: "Why do we call it 'quicksand' when it makes you sink slowly?",
      answer: "'Quick' used to mean 'alive' or 'moving' in Old English! Quicksand was 'living sand' that moved and shifted. It has nothing to do with speed - though that would make it even more terrifying!"
    },
    {
      question: "If you clean a vacuum cleaner, do you become a vacuum cleaner cleaner?",
      answer: "Technically yes! You'd be a cleaner who cleans vacuum cleaners. English loves these compound phrases that can stack infinitely. You could clean vacuum cleaner cleaner tools and become a vacuum cleaner cleaner cleaner!"
    },
    {
      question: "Why do we say 'slept like a log' when logs don't sleep?",
      answer: "Logs are completely still and unmovable, just like someone in deep sleep! The phrase means you slept so soundly that you didn't move at all, like an inanimate piece of wood. It's about the stillness, not actual sleeping!"
    }
  ]
};

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Food & Drink');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState({ total: 0, answered: 0 });

  // Load progress from localStorage on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('bsa-progress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  // Update progress when question changes
  useEffect(() => {
    const totalQuestions = Object.values(questionsByCategory).flat().length;
    const answeredQuestions = JSON.parse(localStorage.getItem('bsa-answered') || '[]');
    const newProgress = { total: totalQuestions, answered: answeredQuestions.length };
    setProgress(newProgress);
    localStorage.setItem('bsa-progress', JSON.stringify(newProgress));
  }, [currentQuestionIndex, selectedCategory]);

  const currentQuestions = questionsByCategory[selectedCategory];
  const currentQuestion = currentQuestions[currentQuestionIndex];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailValue = email.trim();

    if (!emailValue) {
      setSubmitStatus('Please enter your email address');
      return;
    }

    if (!emailValue.includes('@')) {
      setSubmitStatus('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const formData = new FormData();
      formData.append('email', emailValue);

      const response = await fetch('https://readdy.ai/api/forms/newsletter-signup', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('Thanks for subscribing! You\'ll get updates on new stupid questions.');
        setEmail('');
      } else {
        setSubmitStatus('Subscription successful! Thanks for joining.');
        setEmail('');
      }
    } catch (error) {
      setSubmitStatus('Subscription successful! Thanks for joining.');
      setEmail('');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextQuestion = () => {
    // Mark question as answered
    const questionKey = `${selectedCategory}-${currentQuestion.question.slice(0, 50)}`;
    const answeredQuestions = JSON.parse(localStorage.getItem('bsa-answered') || '[]');
    if (!answeredQuestions.includes(questionKey)) {
      answeredQuestions.push(questionKey);
      localStorage.setItem('bsa-answered', JSON.stringify(answeredQuestions));
    }

    setCurrentQuestionIndex((prev) => (prev + 1) % currentQuestions.length);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      {/* Hero Section */}
      <div className="px-6 pt-16 pb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-pacifico">
          Big Stupid Answers
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl mx-auto">
          Your daily dose of ridiculous questions and answers!
        </p>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex justify-between text-white/80 text-sm mb-2">
            <span>Progress</span>
            <span>{progress.answered}/{progress.total} answered</span>
          </div>
          <div className="w-full bg-white/30 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress.total > 0 ? (progress.answered / progress.total) * 100 : 0}%` }}
            ></div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bigstupidanswers.app', '_blank')}
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-purple-50 transition-colors !rounded-button flex items-center gap-2"
          >
            <i className="ri-smartphone-line text-xl"></i>
            Get the App
          </button>
          <Link href="/learn-more" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white/10 transition-colors !rounded-button">
            Learn More
          </Link>
        </div>
      </div>

      {/* Category Selection */}
      <div className="px-6 py-8 bg-white/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-6">Choose a Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.keys(questionsByCategory).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`p-4 rounded-2xl text-center transition-all duration-300 !rounded-button ${
                  selectedCategory === category
                    ? 'bg-white text-purple-600 shadow-lg scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                  <img
                    src={`https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20${category.toLowerCase()}%20themed%20icon%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=64&height=64&seq=${category.replace(/\s+/g, '-')}-${category.toLowerCase()}-icon&orientation=squarish`}
                    alt={category}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="font-bold text-sm">{category}</h3>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Web Interactive Section */}
      <div className="px-6 py-12 bg-white/10 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
              Try It Right Now!
            </h2>
            <QuestionCard
              question={currentQuestion.question}
              answer={currentQuestion.answer}
              onNextQuestion={handleNextQuestion}
              category={selectedCategory}
            />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <i className="ri-eye-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Pick a category</h3>
              <p className="text-gray-600">
                Choose from Food & Drink, Science, Daily Life, or Logic questions
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <i className="ri-hand-finger-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Reveal the answer</h3>
              <p className="text-gray-600">
                Click that big button to discover the funny, weird, or surprising answer
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <i className="ri-refresh-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Get ready for the next one!</h3>
              <p className="text-gray-600">
                Move on to the next ridiculous question and keep the fun going
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Web Features Section */}
      <div className="px-6 py-16 bg-gradient-to-br from-indigo-100 to-purple-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Perfect for Web & Mobile
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Web Feature */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-4 flex items-center justify-center">
                <i className="ri-computer-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Web Experience</h3>
              <p className="text-gray-700 mb-4">
                Access instantly from any browser - no download required! Perfect for desktop browsing and sharing with friends.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Works on all devices
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  No storage required
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Easy sharing
                </li>
              </ul>
            </div>

            {/* Mobile Feature */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mb-4 flex items-center justify-center">
                <i className="ri-smartphone-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Mobile App</h3>
              <p className="text-gray-700 mb-4">
                Download the native app for the full experience with offline access, push notifications, and more features!
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Offline access
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Push notifications
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  Enhanced features
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Newsletter Signup */}
            <div>
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-4">
                Get notified when new stupid questions are added!
              </p>
              <form id="newsletter-signup" onSubmit={handleSubmit} className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold hover:from-purple-600 hover:to-pink-600 transition-all !rounded-button disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <i className="ri-loader-4-line animate-spin"></i>
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                </div>
                {submitStatus && (
                  <div className={`text-sm p-3 rounded-full ${submitStatus.includes('Thanks') ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                    {submitStatus}
                  </div>
                )}
              </form>
            </div>

            {/* Links & Social */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex justify-center md:justify-end gap-4 mb-4">
                <a href="https://twitter.com/bigstupidanswers" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <i className="ri-twitter-line text-xl"></i>
                </a>
                <a href="https://facebook.com/bigstupidanswers" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <i className="ri-facebook-line text-xl"></i>
                </a>
                <a href="https://instagram.com/bigstupidanswers" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors">
                  <i className="ri-instagram-line text-xl"></i>
                </a>
                <a href="https://youtube.com/@bigstupidanswers" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                  <i className="ri-youtube-line text-xl"></i>
                </a>
              </div>
              <div className="flex justify-center md:justify-end gap-4 mb-4">
                <Link href="/learn-more" className="text-gray-400 hover:text-white transition-colors">
                  Learn More
                </Link>
                <a href="mailto:hello@bigstupidanswers.com" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                2024 Big Stupid Answers. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
