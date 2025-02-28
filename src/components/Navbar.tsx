
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wider text-white">Minhaj Albeez</Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link to="/work" className="text-white/70 hover:text-white transition-colors">Work</Link>
          <Link to="/about" className="text-white/70 hover:text-white transition-colors">About</Link>
          <Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col pt-20 px-6 animate-fade-in">
          <button 
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <nav className="flex flex-col space-y-8 items-start">
            <Link to="/" className="text-3xl font-bold text-white" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/work" className="text-3xl font-bold text-white" onClick={() => setIsMenuOpen(false)}>Work</Link>
            <Link to="/about" className="text-3xl font-bold text-white" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="text-3xl font-bold text-white" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
