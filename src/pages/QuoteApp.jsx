// QuoteFlow AI - Exceptional Quote Generator App

import React, { useState, useEffect } from 'react';
import { FaVolumeUp, FaTwitter, FaHeart, FaHistory } from 'react-icons/fa';


const tones = ['Motivational', 'Funny', 'Poetic'];

const QuoteApp = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [tone, setTone] = useState('Motivational');
  const [history, setHistory] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('quoteHistory')) || [];
    const savedFavorites = JSON.parse(localStorage.getItem('quoteFavorites')) || [];
    setHistory(savedHistory);
    setFavorites(savedFavorites);
  }, []);

  const fetchQuote = async () => {
    // Simulate API data
    const mockQuotes = {
      Motivational: [
        { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
        { quote: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey" },
        { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
        { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
        { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
        { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
        { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
        { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
      ],
    
      Funny: [
        { quote: "I refuse to join any club that would have me as a member.", author: "Groucho Marx" },
        { quote: "I'm not arguing, I'm just explaining why I'm right.", author: "Anonymous" },
        { quote: "I used to think I was indecisive, but now I'm not too sure.", author: "Anonymous" },
        { quote: "Behind every great man is a woman rolling her eyes.", author: "Jim Carrey" },
        { quote: "I find television very educational. Every time someone turns it on, I go in the other room and read a book.", author: "Groucho Marx" },
        { quote: "The best way to teach your kids about taxes is by eating 30% of their ice cream.", author: "Bill Murray" },
        { quote: "I’m writing a book. I’ve got the page numbers done.", author: "Steven Wright" },
        { quote: "You can't have everything. Where would you put it?", author: "Steven Wright" },
        { quote: "If you think nobody cares if you're alive, try missing a couple of payments.", author: "Earl Wilson" },
        { quote: "A day without laughter is a day wasted.", author: "Charlie Chaplin" },
      ],
    
      Poetic: [
        { quote: "Two roads diverged in a wood, and I— I took the one less traveled by.", author: "Robert Frost" },
        { quote: "Hope is the thing with feathers that perches in the soul.", author: "Emily Dickinson" },
        { quote: "The only people for me are the mad ones, the ones who are mad to live...", author: "Jack Kerouac" },
        { quote: "Let us go then, you and I, when the evening is spread out against the sky.", author: "T.S. Eliot" },
        { quote: "Do not go gentle into that good night. Rage, rage against the dying of the light.", author: "Dylan Thomas" },
        { quote: "And when you want something, all the universe conspires in helping you to achieve it.", author: "Paulo Coelho" },
        { quote: "Tell me, what is it you plan to do with your one wild and precious life?", author: "Mary Oliver" },
        { quote: "We loved with a love that was more than love.", author: "Edgar Allan Poe" },
        { quote: "If I should meet thee after long years, how should I greet thee?—With silence and tears.", author: "Lord Byron" },
        { quote: "The soul should always stand ajar, ready to welcome the ecstatic experience.", author: "Emily Dickinson" },
      ],
    };

    const quotes = mockQuotes[tone];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);

    const newEntry = {
      quote: randomQuote.quote,
      author: randomQuote.author,
      tone,
      time: new Date().toLocaleString(),
    };

    const updatedHistory = [newEntry, ...history].slice(0, 10);
    setHistory(updatedHistory);
    localStorage.setItem('quoteHistory', JSON.stringify(updatedHistory));
  };


  const speakQuote = () => {
    const utterance = new SpeechSynthesisUtterance(`${quote} by ${author}`);
    window.speechSynthesis.speak(utterance);
  };

  const tweetQuote = () => {
    const tweetText = `"${quote}" - ${author}`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`);
  };

  const favoriteQuote = () => {
    const fav = { quote, author, tone };
    const updatedFavorites = [fav, ...favorites.filter(f => f.quote !== quote)].slice(0, 10);
    setFavorites(updatedFavorites);
    localStorage.setItem('quoteFavorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000] to-[#1e293b] text-white p-4 font-mono flex flex-col items-center">
      <h1 className="text-4xl font-bold my-6 text-center">QuoteFlow AI</h1>
      <p className="mb-6 text-center max-w-lg text-gray-300">Generate AI-powered quotes in various tones to inspire, entertain, or reflect — with sharing, favorites, and history built in.</p>

      <div className="flex gap-3 mb-4">
        {tones.map(t => (
          <button
            key={t}
            onClick={() => {
              setTone(t);
              fetchQuote(); // fetch quote for selected tone
            }}
            className={`px-4 py-2 rounded-full border ${tone === t ? 'bg-[#64ffda] text-black' : 'border-[#64ffda]'}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="bg-white text-black max-w-xl p-6 rounded-xl shadow-xl text-center relative">
        <p className="text-xl italic">“{quote || 'Click Generate to get inspired.'}”</p>
        <p className="mt-4 font-bold">— {author || 'AI'}</p>
        <div className="flex justify-center gap-4 mt-4">
          <button onClick={speakQuote} disabled={!quote}><FaVolumeUp size={20} /></button>
          <button onClick={tweetQuote} disabled={!quote}><FaTwitter size={20} className='text-blue-400' /></button>
          <button onClick={favoriteQuote} disabled={!quote}><FaHeart size={20} className="text-red-500" /></button>

        </div>
      </div>

      <button
        onClick={fetchQuote}
        className="mt-6 px-6 py-2 bg-[#64ffda] text-black font-bold rounded-xl hover:bg-white"
      >
        Generate Quote
      </button>

      <div className="mt-10 w-full max-w-3xl">
        <h2 className="text-2xl mb-2 flex items-center gap-2"><FaHistory /> History</h2>
        <ul className="space-y-2">
          {history.map((item, index) => (
            <li key={index} className="bg-gray-800 p-3 rounded-md">
              “{item.quote}” — {item.author} <span className="text-sm text-gray-400 ml-2">({item.tone})</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 w-full max-w-3xl">
        <h2 className="text-2xl mb-2 flex items-center gap-2"><FaHeart /> Favorites</h2>
        <ul className="space-y-2">
          {favorites.map((item, index) => (
            <li key={index} className="bg-gray-900 p-3 rounded-md border border-[#64ffda]">
              “{item.quote}” — {item.author} <span className="text-sm text-gray-400 ml-2">({item.tone})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuoteApp;
