
'use client';

import Link from 'next/link';
import { useState } from 'react';
import WebHeader from '../../components/WebHeader';
type Category = 'Food & Drink' | 'Science' | 'Daily Life' | 'Logic';

type Category = 'Food & Drink' | 'Science' | 'Daily Life' | 'Logic';
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

export default function Categories() {
  const categoryKeys = ['Food & Drink', 'Science', 'Daily Life', 'Logic'] as const;
type Category = typeof categoryKeys[number];
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
const [selectedCategory, setSelectedCategory] = useState<Category>('Food & Drink');

  const toggleQuestion = (index: number) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <WebHeader />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-pacifico">
            Question Categories
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Explore hundreds of hilarious questions organized by topic. Click any category to dive in!
          </p>
        </div>

        {/* Category Navigation */}
        <div className="px-6 py-8 bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(questionsByCategory).map(([category, questions]) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`p-4 rounded-2xl text-center transition-all duration-300 !rounded-button ${
                    selectedCategory === category
                      ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md'
                  }`}
                >
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                    <img
                      src={`https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20${category.toLowerCase()}%20themed%20icon%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus&width=64&height=64&seq=${category.replace(/\s+/g, '-').toLowerCase()}-cat-page&orientation=squarish`}
                      alt={category}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="font-bold text-sm mb-1">{category}</h3>
                  <p className="text-xs opacity-75">{questions.length} questions</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Questions List */}
        <div className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {selectedCategory} Questions
              </h2>
              <p className="text-gray-600">
               {questionsByCategory[selectedCategory as keyof typeof questionsByCategory].length} hilarious questions to explore

              </p>
            </div>

            <div className="space-y-4">
              {questionsByCategory[selectedCategory].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start flex-1">
                        <div className="w-12 h-12 bg-yellow-400 rounded-full mr-4 flex items-center justify-center flex-shrink-0">
                          <i className="ri-question-mark text-xl text-yellow-800"></i>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-800 mb-1">
                            {item.question}
                          </h3>
                          <p className="text-sm text-gray-500">
                            Click to reveal the answer
                          </p>
                        </div>
                      </div>
                      <div className="ml-4">
                        <i className={`ri-arrow-${expandedQuestion === index ? 'up' : 'down'}-s-line text-2xl text-gray-400`}></i>
                      </div>
                    </div>
                  </button>

                  {expandedQuestion === index && (
                    <div className="px-6 pb-6">
                      <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-4 border-l-4 border-green-500 ml-16">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                            <i className="ri-lightbulb-line text-white text-sm"></i>
                          </div>
                          <span className="text-green-700 font-semibold">Answer:</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex justify-end mt-4 space-x-3">
                        <button
                          onClick={() => {
                            const text = `${item.question}\n\n${item.answer}\n\nShared from Big Stupid Answers!`;
                            navigator.clipboard.writeText(text);
                          }}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors flex items-center gap-2"
                        >
                          <i className="ri-share-line"></i>
                          Share
                        </button>
                        <button
                          onClick={() => {
                            const favorites = JSON.parse(localStorage.getItem('bsa-favorites') || '[]');
                            const questionKey = `${selectedCategory}-${item.question.slice(0, 50)}`;
                            if (!favorites.includes(questionKey)) {
                              favorites.push(questionKey);
                              localStorage.setItem('bsa-favorites', JSON.stringify(favorites));
                            }
                          }}
                          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm hover:from-purple-600 hover:to-pink-600 transition-all flex items-center gap-2"
                        >
                          <i className="ri-heart-line"></i>
                          Save
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="px-6 py-16 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Want More Questions?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the full app experience with hundreds more questions, offline access, and exclusive content!
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bigstupidanswers.app', '_blank')}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-colors !rounded-button flex items-center gap-2"
              >
                <i className="ri-smartphone-line"></i>
                Download App
              </button>
              <Link href="/" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors !rounded-button">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
