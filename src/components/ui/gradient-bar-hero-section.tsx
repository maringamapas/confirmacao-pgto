import React, { useState, useEffect } from 'react';
import { Github, Instagram, Linkedin, Menu, X } from 'lucide-react';
type AvatarProps = {
  imageSrc: string;
  delay: number;
};
const Avatar: React.FC<AvatarProps> = ({
  imageSrc,
  delay
}) => {
  return <div className="relative h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full overflow-hidden border-2 border-gray-700 shadow-lg animate-fadeIn" style={{
    animationDelay: `${delay}ms`
  }}>
      <img src={imageSrc} alt="User avatar" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>;
};
const TrustElements: React.FC = () => {
  const avatars = ["https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=100", "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100", "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100", "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100"];
  return <div className="inline-flex items-center space-x-3 bg-gray-900/60 backdrop-blur-sm rounded-full py-2 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm">
      <div className="flex -space-x-2 sm:-space-x-3">
        {avatars.map((avatar, index) => <Avatar key={index} imageSrc={avatar} delay={index * 200} />)}
      </div>
      <p className="text-white animate-fadeIn whitespace-nowrap font-space" style={{
      animationDelay: '800ms'
    }}>
        <span className="text-white font-semibold">2.4K</span> currently on the waitlist
      </p>
    </div>;
};
const WaitlistForm: React.FC = () => {
  return <div className="relative z-10 w-full flex justify-center">
      <a 
        href="https://wa.me/5544999324635?text=Site%20suspenso." 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base font-space bg-white hover:bg-gray-100 text-black text-center"
      >
        Falar com Administrador
      </a>
    </div>;
};
const GradientBars: React.FC = () => {
  const [numBars] = useState(15);
  const calculateHeight = (index: number, total: number) => {
    const position = index / (total - 1);
    const maxHeight = 100;
    const minHeight = 30;
    const center = 0.5;
    const distanceFromCenter = Math.abs(position - center);
    const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2);
    return minHeight + (maxHeight - minHeight) * heightPercentage;
  };
  return <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="flex h-full" style={{
      width: '100%',
      transform: 'translateZ(0)',
      backfaceVisibility: 'hidden',
      WebkitFontSmoothing: 'antialiased'
    }}>
        {Array.from({
        length: numBars
      }).map((_, index) => {
        const height = calculateHeight(index, numBars);
        return <div key={index} style={{
          flex: '1 0 calc(100% / 15)',
          maxWidth: 'calc(100% / 15)',
          height: '100%',
          background: 'linear-gradient(to top, rgb(255, 60, 0), transparent)',
          transform: `scaleY(${height / 100})`,
          transformOrigin: 'bottom',
          transition: 'transform 0.5s ease-in-out',
          animation: 'pulseBar 2s ease-in-out infinite alternate',
          animationDelay: `${index * 0.1}s`,
          outline: '1px solid rgba(0, 0, 0, 0)',
          boxSizing: 'border-box'
        }} />;
      })}
      </div>
    </div>;
};
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent py-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            
          </div>

          

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && <div className="md:hidden mt-4 bg-gray-900 bg-opacity-95 backdrop-blur-sm rounded-lg p-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-300 py-2 font-space">
                Features
              </a>
              <a href="#vision" className="text-gray-300 hover:text-white transition-colors duration-300 py-2 font-space">
                Vision
              </a>
              <a href="#press" className="text-gray-300 hover:text-white transition-colors duration-300 py-2 font-space">
                Press
              </a>
              <a href="#contact" className="text-gray-304 hover:text-white transition-colors duration-300 py-2 font-space">
                Contact
              </a>
              <button className="bg-white hover:bg-gray-100 text-black px-5 py-2 rounded-full transition-all duration-300 w-full font-space">
                Join The Waitlist
              </button>
            </div>
          </div>}
      </div>
    </nav>;
};
export const Component: React.FC = () => {
  return <section className="relative min-h-screen flex flex-col items-center px-6 sm:px-8 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gray-950"></div>
      <GradientBars />
      <Navbar />
      
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen py-8 sm:py-16">
        <div className="mb-6 sm:mb-8">
          
        </div>
        
        <h1 className="w-full text-white leading-tight tracking-tight mb-6 sm:mb-8 animate-fadeIn px-4 text-center">
          <span className="block font-inter font-medium text-[clamp(1.5rem,5vw,3.5rem)]">Pagamento confirmado com sucesso.</span>
        </h1>
        
        <div className="mb-6 sm:mb-10 px-4">
          <p className="text-white text-base sm:text-lg animate-fadeIn">
            Muito obrigado pela confiança e pela preferência!
          </p>
        </div>
        
        <div className="w-full max-w-2xl mb-6 sm:mb-8 px-4 flex justify-center">
          <WaitlistForm />
        </div>
        
        
      </div>
    </section>;
};
