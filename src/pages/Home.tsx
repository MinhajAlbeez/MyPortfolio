
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import SocialLinks from '@/components/SocialLinks';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              HI, I AM<br />Syed Minhaj Albeez.
            </h1>
            <p className="text-white/70 text-lg">
              A  front-end developer passionate about building accessible and user-friendly websites.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Button variant="accent">
                CONTACT ME
              </Button>
              <SocialLinks className="mt-2" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-lg overflow-hidden"
          >
            <img 
              src="/lovable-uploads/70892c6b-b657-4d2c-8b44-eb9833b05f48.png" 
              alt="minhaj albeez" 
              className="w-full rounded-lg object-cover"
            />
          </motion.div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="container mx-auto px-6 md:px-12 mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">FEATURED PROJECTS</h2>
          <p className="text-white/70 mb-12 max-w-2xl">
            Here are some of the works I'm proud to share that showcase my passion for front-end development.
          </p>
        </motion.div>

        <div className="space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ProjectCard
              image="/lovable-uploads/ecc9369b-fa81-45a1-9cf4-e80a2fa9b0be.png"
              title="Promotional landing page for our favorite show"
              description="Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures."
              year="2023"
              tags={["React", "CSS", "JavaScript"]}
              demoLink="https://example.com"
              githubLink="https://github.com"
              category="Conceptual Work"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ProjectCard
              image="/lovable-uploads/3e04d88f-c341-404e-813d-85b716250687.png"
              title="Blog site for World News"
              description="Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in front-end development."
              year="2022"
              tags={["HTML", "CSS", "JavaScript"]}
              detailLink="https://example.com"
              category="Challenge"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ProjectCard
              image="/lovable-uploads/c0858131-4077-4dbb-80bf-e3784600af67.png"
              title="E-commerce product page"
              description="Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development."
              year="2022"
              tags={["React", "TailwindCSS", "JavaScript"]}
              demoLink="https://example.com"
              githubLink="https://github.com"
              category="Challenge"
            />
          </motion.div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="container mx-auto px-6 md:px-12 mt-32">
        <div className="section-divider mb-32"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-8">ABOUT ME</h2>
            <p className="text-white/70 mb-6">
              I am a front-end developer based in Sydney. Has Mechanical Engineering background.
            </p>
            <p className="text-white/70 mb-8">
              I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.
            </p>
            <Button variant="default">
              MORE ABOUT ME
            </Button>
          </div>
          
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/1218bedf-d1e3-42c0-864f-4fcd8275c1e3.png" 
              alt="Robert Garcia with crossed arms" 
              className="w-full rounded-lg"
            />
          </div>
        </motion.div>
      </section>
      
      {/* Contact Section */}
      <section className="container mx-auto px-6 md:px-12 mt-32">
        <div className="section-divider mb-32"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">LET'S CONNECT</h2>
          <p className="text-white/70 mb-2">
            Say hello at <a href="mailto:robertgarcia@gmail.com" className="text-[#c6e957] hover:underline">robertgarcia@gmail.com</a>
          </p>
          <p className="text-white/70 mb-8">
            For more info, here's my <a href="#" className="text-[#c6e957] hover:underline">resume</a>
          </p>
          
          <div className="mb-8">
            <SocialLinks />
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div></div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Home;
