
import { useEffect } from 'react';
import Button from '@/components/Button';
import SocialLinks from '@/components/SocialLinks';
import SkillTag from '@/components/SkillTag';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = [
    "HTML", "CSS", "JAVASCRIPT", "JQUERY", "ACCESSIBILITY", "FIGMA", "TAILWIND CSS"
  ];

  const experiences = [
    {
      title: "Freelance Developer",
      company: "",
      period: "Nov 2023 — Present",
      description: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      title: "Front-End Intern",
      company: "Ross Tech",
      period: "Sep 2023 — Nov 2023",
      description: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ];

  return (
    <main className="pt-24">
      <section className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-12">ABOUT ME</h1>
            <h2 className="text-2xl font-semibold mb-4">
              I am a front-end developer based in Sydney. Has Mechanical Engineering background.
            </h2>
            <p className="text-white/70 mb-8">
              I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.
            </p>
            
            <div className="flex items-center space-x-4 mt-6">
              <Button variant="accent" className="px-6 py-2 flex items-center space-x-2">
                <span>DOWNLOAD RESUME</span>
                <Download size={16} />
              </Button>
              <SocialLinks />
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-lg overflow-hidden"
          >
            <img 
              src="/lovable-uploads/1218bedf-d1e3-42c0-864f-4fcd8275c1e3.png" 
              alt="Robert Garcia" 
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </motion.div>
      </section>
      
      <section className="container mx-auto px-6 md:px-12 mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">MY CAPABILITIES</h2>
          <p className="text-white/70 mb-8 max-w-2xl">
            I am always looking to add more skills. Morbi egestas neque eu blandit fermentum. Nulla ac odio nisi ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <SkillTag key={index} name={skill} />
            ))}
          </div>
        </motion.div>
      </section>
      
      <section className="container mx-auto px-6 md:px-12 mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12">MY EXPERIENCE</h2>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  {exp.company && <p className="text-[#c6e957] mb-2">{exp.company}</p>}
                  <p className="text-white/50 text-sm">{exp.period}</p>
                </div>
                
                <div className="md:col-span-2">
                  <p className="text-white/70">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default About;
