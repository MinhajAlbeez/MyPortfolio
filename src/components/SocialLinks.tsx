
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

type SocialLinksProps = {
  className?: string;
  iconSize?: number;
  color?: string;
};

const SocialLinks = ({ className = "", iconSize = 20, color = "text-white" }: SocialLinksProps) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      <a 
        href="https://linkedin.com" 
        target="_blank"
        rel="noopener noreferrer"
        className={`${color} hover:text-[#c6e957] transition-colors duration-300`}
      >
        <Linkedin size={iconSize} />
      </a>
      <a 
        href="https://github.com" 
        target="_blank"
        rel="noopener noreferrer"
        className={`${color} hover:text-[#c6e957] transition-colors duration-300`}
      >
        <Github size={iconSize} />
      </a>
      <a 
        href="https://twitter.com" 
        target="_blank"
        rel="noopener noreferrer"
        className={`${color} hover:text-[#c6e957] transition-colors duration-300`}
      >
        <Twitter size={iconSize} />
      </a>
      <a 
        href="https://instagram.com" 
        target="_blank"
        rel="noopener noreferrer" 
        className={`${color} hover:text-[#c6e957] transition-colors duration-300`}
      >
        <Instagram size={iconSize} />
      </a>
    </div>
  );
};

export default SocialLinks;
