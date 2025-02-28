
import { useEffect } from 'react';
import ContactForm from '@/components/ContactForm';
import SocialLinks from '@/components/SocialLinks';
import { motion } from 'framer-motion';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24">
      <section className="container mx-auto px-6 md:px-12 min-h-[80vh] flex items-center">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-8">LET'S CONNECT</h1>
              <p className="text-white/70 mb-2">
                Say hello at <a href="mailto:robertgarcia@gmail.com" className="text-[#c6e957] hover:underline">robertgarcia@gmail.com</a>
              </p>
              <p className="text-white/70 mb-8">
                For more info, here's my <a href="#" className="text-[#c6e957] hover:underline">resume</a>
              </p>
              
              <div className="mb-12">
                <SocialLinks />
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
