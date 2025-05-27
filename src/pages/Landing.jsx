import React from 'react';
import { Link } from 'react-router-dom';
import { FaMagic, FaLightbulb, FaShareAlt } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-[#000] to-[#1e293b] text-white font-sans font-mono">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">QuoteFlow AI</h1>
        <p className="text-lg md:text-xl mb-6 ">Your daily dose of inspiration, powered by AI</p>
        <Link to="/app">
          <button className="bg-[#64ffda] text-black px-6 py-3 rounded-md font-medium hover:scale-105 transition-transform duration-300">
            Try It Now
          </button>
        </Link>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 text-center ">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <FaMagic className="text-5xl mx-auto mb-4 text-[#64ffda]" />
            <h3 className="text-xl font-semibold mb-2">Pick a Mood</h3>
            <p>Select the type of vibe you want — motivational, poetic, or funny.</p>
          </div>
          <div>
            <FaLightbulb className="text-5xl mx-auto mb-4 text-[#64ffda]" />
            <h3 className="text-xl font-semibold mb-2">Get Inspired</h3>
            <p>Our AI crafts a unique quote tailored to your choice.</p>
          </div>
          <div>
            <FaShareAlt className="text-5xl mx-auto mb-4 text-[#64ffda]" />
            <h3 className="text-xl font-semibold mb-2">Share or Save</h3>
            <p>Easily save or post your favorite quotes online.</p>
          </div>
        </div>
      </section>

      {/* Quote Preview Section */}
      <section className="py-24 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Example Quotes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {["Stay hungry. Stay foolish.", "You are the artist of your own life.", "Dream big, start small, act now."].map((quote, index) => (
            <div key={index} className="bg-[#64ffda] text-black rounded-2xl p-6 text-lg italic shadow-lg">
              “{quote}”
            </div>
          ))}
        </div>
      </section>


      {/* CTA Footer */}
      <footer className="text-center pt-20 pb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Start your inspiration journey today</h2>
        <Link to="/app">
          <button className="bg-[#64ffda] text-black px-6 py-3 rounded-md font-medium hover:scale-105 transition-transform duration-300">
            Try It Now
          </button>
        </Link>
      </footer>
    </div>
  );
};

export default LandingPage;
