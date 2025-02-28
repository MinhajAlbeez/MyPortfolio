
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 pb-6 px-6 md:px-12">
      <div className="text-center text-sm text-white/60">
        © {currentYear} Robert Garcia
      </div>
    </footer>
  );
};

export default Footer;
