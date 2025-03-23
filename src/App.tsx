import { useState, useEffect } from 'react';
import { Terminal, Github, Mail, Link as LinkIcon, ChevronRight, Globe2Icon, BookUser, Linkedin, Search, Gamepad } from 'lucide-react';
import { FaDev } from "react-icons/fa";
import { GiMailbox } from "react-icons/gi";
import { FaLinkedin } from "react-icons/fa";
import image from './assets/profile.png';
import { GrDocument, GrGoogle } from 'react-icons/gr';
import { TiContacts } from "react-icons/ti";
import { TbSql } from 'react-icons/tb';
import { LuBrainCircuit } from "react-icons/lu";
import { SiCoder, SiSketchup, SiStudyverse } from "react-icons/si";
import { FaBuildingFlag } from "react-icons/fa6";
import skillicon from "./assets/abilities.png"
import { VscFileMedia } from "react-icons/vsc";
import { FaLinux } from "react-icons/fa";

import { CgSketch } from 'react-icons/cg';
import { RxReader } from 'react-icons/rx';
import { MdMovie } from 'react-icons/md';
import CVDownload from './Components/resumedownload';
// LetterShower component for falling letters animation
const LetterShower = () => {
  const [letters, setLetters] = useState<{ id: number, char: string, x: number, y: number, speed: number, opacity: number, size: number, rotate: number }[]>([]);

  useEffect(() => {
    const possibleChars = '0123456789';
    const maxLetters = 50;

    // Initialize letters
    const initialLetters = Array.from({ length: maxLetters }, (_, i) => ({
      id: i,
      char: possibleChars[Math.floor(Math.random() * possibleChars.length)],
      x: Math.random() * 100, // percentage across screen
      y: Math.random() * -100, // start above screen
      speed: 0.1 + Math.random() * 0.2,
      opacity: 0.1 + Math.random() * 0.1, // Very low opacity (0.05-0.15)
      size: 0.8 + Math.random() * 1.2, // Size variation (0.8-2.0rem)
      rotate: Math.random() * 30 - 15 // Rotation between -15 and 15 degrees
    }));

    setLetters(initialLetters);

    const animationFrame = setInterval(() => {
      setLetters(prevLetters =>
        prevLetters.map(letter => {
          // Update position
          let newY = letter.y + letter.speed;

          // Reset if off screen
          if (newY > 100) {
            newY = Math.random() * -30;
            return {
              ...letter,
              y: newY,
              x: Math.random() * 100,
              char: possibleChars[Math.floor(Math.random() * possibleChars.length)],
              opacity: 0.05 + Math.random() * 0.1,
              size: 0.8 + Math.random() * 1.2,
              rotate: Math.random() * 30 - 15
            };
          }

          return { ...letter, y: newY };
        })
      );
    }, 50);

    return () => clearInterval(animationFrame);
  }, []);

  return (
    <div className="fixed inset-0 z-1 overflow-hidden pointer-events-none">
      {letters.map(letter => (
        <div
          key={letter.id}
          style={{
            position: 'absolute',
            left: `${letter.x}%`,
            top: `${letter.y}%`,
            color: 'silver',
            opacity: letter.opacity,
            fontSize: `${letter.size}rem`,
            transform: `rotate(${letter.rotate}deg)`,
            userSelect: 'none',
            fontWeight: 'bold'
          }}
        >
          {letter.char}
        </div>
      ))}
    </div>
  );
};

function App() {
  const [glitchText, setGlitchText] = useState('');
  const originalText = 'AYAZMIRZA.LINKS';

  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';
    let interval: any;

    const startGlitchEffect = () => {
      let counter = 0;
      interval = setInterval(() => {
        const randomText = Array(originalText.length)
          .fill(0)
          .map((_, i) =>
            counter > i ? originalText[i] : chars[Math.floor(Math.random() * chars.length)]
          )
          .join('');

        setGlitchText(randomText);
        counter++;

        if (counter > originalText.length) {
          clearInterval(interval);
          setGlitchText(originalText);
        }
      }, 50);
    };

    startGlitchEffect();
    return () => clearInterval(interval);
  }, []);

  const [links] = useState([
    {
      title: 'QuerySmith - AI tool for SQL queries',
      url: 'https://query-smith.streamlit.app/'
    },
    {
      title: 'AI tools marketplace',
      url: 'https://www.aigadgets.show'
    },
    {
      title: 'Email Generator AI agent',
      url: 'http://gen-email-agent-ai.streamlit.app/'
    },
    {
      title: 'Devops scripts gereator',
      url: 'https://devopslab.streamlit.app/'
    },
    {
      title: 'Blogs written by me',
      url: 'https://dev.to/ayazmirza54'
    },
    {
      title: 'Checkout my skill',
      url: 'https://ayazmirza.vercel.app#skills'
    },
    {
      title: 'Checkout my work experience',
      url: 'https://ayazmirza.vercel.app#workexp'
    },
    {
      title: 'AWS EC2 manager terminal based application',
      url: 'https://github.com/ayazmirza54/ec2-manager-tui'
    },
    {
      title: 'WebSearch AI tool',
      url: 'https://websearchai.streamlit.app/'
    },
    {
      title: 'Text to Content AI tool',
      url: 'https://texttocontentai.vercel.app/'
    },
    {
      title: 'Unixbot AI tool',
      url: 'https://unix-bot.streamlit.app/'
    },
    {
      title: 'Intellisketch AI tool',
      url: 'https://intellisketch.vercel.app/'
    },
    {
      title: 'Chat2PDF AI tool',
      url: 'https://chat2pdf-using-gemini.streamlit.app/'
    },
    {
      title: 'Study Sensie - Topic to Quiz generator',
      url: 'https://studysensei.vercel.app/'
    },
    {
      title: 'Movie Finder',
      url: 'https://movie-finder-lake-six.vercel.app/'
    },
    {
      title: 'Rock Paper Scissors Webapp',
      url: 'https://rock-paper-scrissors.netlify.app/'
    },
  ]);

  const [socials] = useState([
    {
      icon: Github,
      url: 'https://github.com/ayazmirza54',
      label: 'Github'
    },
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/ayazmirza54/',
      label: 'Linkedin'
    },
    {
      icon: TiContacts,
      url: 'https://ayazmirza.vercel.app',
      label: 'Portfolio'
    },
    {
      icon: GiMailbox,
      url: 'mailto:ayazmirza54@email.com',
      label: 'Send a mail'
    },

    {
      icon: FaDev,
      url: 'http://dev.to/ayazmirza54',
      label: 'Dev.to'
    },
    {
      icon: GrGoogle,
      url: 'http://g.dev/ayazmirza54',
      label: 'google.dev'
    }
  ]);

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 text-white relative z-10">
      {/* Moving Grid Background - visible on left and right sides */}
      <div className="griddy fixed inset-0 z-0">
        {/* Using the bg-grid classes from your CSS */}
        <div className="bg-grid ">
          <div className="bg-grid-lines"></div>
        </div>

        {/* Center mask to make the middle more opaque */}
        <div className="absolute inset-0 bg-black" style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)'
        }}></div>
      </div>

      {/* Letter shower animation */}
      <LetterShower />

      {/* Main content container with opaque black background */}
      <div className="relative z-10 flex flex-col items-center w-full md:w-[70%] w-[90%] max-w-md bg-black bg-opacity-90 px-6 py-8 rounded-lg">
        {/* Profile Section */}
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-400 mb-4 relative">
          <img
            src={image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-white opacity-20"></div>
        </div>

        {/* Name and Bio */}
        <h1 className="text-[20px] mb-2">{glitchText}</h1>
        <p className="text-center mb-8 max-w-sm opacity-80 text-gray-300">
          {"Find all my projects and social links here"}
        </p>

        {/* Social Links - Bento Box Style */}
        <div className="grid grid-cols-3 gap-3 mb-12 w-full max-w-sm">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-500 rounded-lg p-[0.5px] hover:bg-gray-800 transition-all duration-300 group flex flex-col items-center justify-center gap-2 aspect-square"
              >
                <Icon
                  size={24}
                  className="text-gray-300 group-hover:text-white"
                />
                <span className="text-xs text-gray-400 group-hover:text-white text-center truncate w-full">
                  {social.label}
                </span>
              </a>
            );
          })}
        </div>
{/* Download CV button */}
<CVDownload /><br></br><br></br><br></br>
        {/* Link Buttons */}
        <div className="w-full space-y-4">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() => handleLinkClick(link.url)}
              className="w-full group border border-gray-500 bg-black bg-opacity-50 rounded-lg py-4 px-6 flex items-center justify-between hover:border-gray-300 hover:bg-gray-900 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                {index === 0 && <TbSql size={80} className="text-gray-300" />}
                {index === 1 && <LuBrainCircuit size={40} className="text-gray-300" />}
                {index === 2 && <Mail size={40} className="text-gray-300" />}
                {index === 3 && <SiCoder size={40} className="text-gray-300" />}
                {index === 4 && <FaDev size={40} className="text-gray-300" />}
                {index === 5 && <img src={skillicon} height={40} width={40} />}
                {index === 6 && <FaBuildingFlag size={60} className="text-gray-300" />}
                {index === 7 && <Terminal size={60} className="text-gray-300" />}
                {index === 8 && <Search size={40} className="text-gray-300" />}
                {index === 9 && <VscFileMedia size={40} className="text-gray-300" />}
                {index === 10 && <FaLinux size={40} className="text-gray-300" />}
                {index === 11 && <CgSketch size={40} className="text-gray-300" />}
                {index === 12 && <GrDocument size={40} className="text-gray-300" />}
                {index === 13 && <RxReader size={40} className="text-gray-300" />}
                {index === 14 && <MdMovie size={40} className="text-gray-300" />}
                {index === 15 && <Gamepad size={40} className="text-gray-300" />}
            

                <span className="link-text">{link.title}</span>
              </span>
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-12 text-center">
          <p className="text-sm opacity-50 text-gray-400">{"PORTFOLIO LINKS"}</p>
          <p className="font-bold">AYAZ MIRZA</p>
        </div>
      </div>
    </div>
  );
}

export default App;