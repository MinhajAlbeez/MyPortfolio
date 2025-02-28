
import { useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion';

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      image: "/lovable-uploads/ecc9369b-fa81-45a1-9cf4-e80a2fa9b0be.png",
      title: "Promotional landing page for our favorite show",
      description: "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
      year: "2023",
      tags: ["React", "CSS", "JavaScript"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      category: "Conceptual Work"
    },
    {
      image: "/lovable-uploads/3e04d88f-c341-404e-813d-85b716250687.png",
      title: "Blog site for World News",
      description: "Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in front-end development.",
      year: "2022",
      tags: ["HTML", "CSS", "JavaScript"],
      detailLink: "https://example.com",
      category: "Challenge"
    },
    {
      image: "/lovable-uploads/c0858131-4077-4dbb-80bf-e3784600af67.png",
      title: "E-commerce product page",
      description: "Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.",
      year: "2022",
      tags: ["React", "TailwindCSS", "JavaScript"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      category: "Challenge"
    }
  ];

  return (
    <main className="pt-24">
      <section className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">MY WORK</h1>
          <p className="text-white/70 mb-16 max-w-2xl">
            Here are some of the selected projects that showcase my passion for front-end development.
          </p>
        </motion.div>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Work;
