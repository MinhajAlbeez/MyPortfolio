
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  year: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  detailLink?: string;
  category: string;
};

const ProjectCard = ({
  image,
  title,
  description,
  year,
  tags,
  demoLink,
  githubLink,
  detailLink,
  category
}: ProjectCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 mb-24">
      <div className="md:col-span-5 bg-[#111] rounded-lg overflow-hidden">
        <div className="relative aspect-[4/3] overflow-hidden group">
          <div className="absolute top-2 left-2 z-10">
            <span className="inline-block bg-black text-xs text-white px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      
      <div className="md:col-span-7 flex flex-col justify-between py-2">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-white/70 mb-6">
            {description}
          </p>
          
          <div className="flex flex-col space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/50">PROJECT INFO</span>
            </div>
            <div className="h-px w-full bg-white/10"></div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/50">Client</span>
              <span className="text-sm">{title.split(' ')[0]}</span>
            </div>
            <div className="h-px w-full bg-white/10"></div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/50">Year</span>
              <span className="text-sm">{year}</span>
            </div>
            <div className="h-px w-full bg-white/10"></div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/50">Role</span>
              <span className="text-sm">Front-end Developer</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-[#c6e957] hover:underline text-sm gap-2"
            >
              LIVE DEMO <ExternalLink size={14} />
            </a>
          )}
          
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-[#c6e957] hover:underline text-sm gap-2 ml-6"
            >
              SEE ON GITHUB <Github size={14} />
            </a>
          )}
          
          {detailLink && (
            <a 
              href={detailLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-[#c6e957] hover:underline text-sm gap-2"
            >
              VIEW PROJECT <ArrowRight size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
