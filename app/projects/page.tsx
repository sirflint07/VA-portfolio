'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


const projects: Project[] = [
  {
    id: 1,
    title: 'CRM Setup',
    description: 'End-to-end CRM implementation with data migration and team training.',
    imageUrl: '/img/CRM-setup.jpg'
  },
  {
    id: 2,
    title: 'Excel Data Entry',
    description: 'Precision data entry with advanced Excel functions and validation.',
    imageUrl: '/img/excel-data-entry.jpg',
  },
  {
    id: 3,
    title: 'CRM Dashboard',
    description: 'Interactive dashboards with real-time analytics and KPI tracking.',
    imageUrl: '/img/CRM-Setup Process.jpg',
  },
  {
    id: 4,
    title: 'Travel plan and Itinerary',
    description: 'Travelling schedule plans.',
    imageUrl: '/img/CRM-Setup Process.jpg',
    link: 'https://docs.google.com/presentation/d/1T0WMjBgF-pWSAQYthA_DtWsy6HOrq5D9WzOXMHtQg6o/edit?usp=sharing'
  },
  {
    id: 5,
    title: 'Proposal Writing',
    description: 'Professional writing of propposals for any type of job offers',
    imageUrl: '/img/proposal.png',
    link: 'https://docs.google.com/document/d/1obVL1TUyfdMD-O1osKzhD8xnmUt6BWS7Uia0-ChSCEw/edit?'
  },
  {
    id: 5,
    title: 'Data Management',
    description: 'Managing your data online and offline',
    imageUrl: '/img/Data-Management-33.jpeg',
    link: ''
  }
];

const presentationProjects:Project[] = [
{
    id: 1,
    title: 'Presentation',
    description: 'Impactful presentations with data visualization and brand consistency.',
    imageUrl: '/img/presentation.jpg',
    tag: 'presentation'
  }
]

const inbox:Project[] = [
{
  id: 1,
  title: '',
  description: 'Impactful presentations with data visualization and brand consistency.',
  imageUrl: '/img/inbox-management.jpg',
  tag: 'presentation'
},
{
  id: 2,
  title: '',
  description: 'Impactful presentations with data visualization and brand consistency.',
  imageUrl: '/img/Inbox-Management-1.jpeg',
  tag: 'presentation'
},
{
  id: 3,
  title: '',
  description: 'Impactful presentations with data visualization and brand consistency.',
  imageUrl: '/img/Inbox-Management-2.jpeg',
  tag: 'presentation'
}
]

const automation:Project[] = [
  {
    id: 1,
    title: '',
    description: 'From Google form ~ Data collection ~ to Automatic Response ~ CRM Lead generation',
    imageUrl: '/img/zap-automation.jpg',
  },
  {
    id: 2,
    title: '',
    description: 'From Google form ~ Data collection ~ to Automatic Response ~ CRM Lead generation',
    imageUrl: '/img/Workflow-Automation-1.jpeg',
  },
  {
    id: 3,
    title: '',
    description: 'From Google form ~ Data collection ~ to Automatic Response ~ CRM Lead generation',
    imageUrl: '/img/Workflow-Automation-2.jpeg',
  },
]

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsModalOpen(false);
    
    document.body.style.overflow = 'auto';
  };

 
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isModalOpen]);

  // Animation variants
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.15 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <>
      <br /><br />
      <div className="px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
          Projects Gallery
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A collection of my recent work. Click on any project to view details.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group cursor-pointer"
              onClick={() => openLightbox(project)}
              role="button"
              tabIndex={0}
              aria-label={`View ${project.title} project details`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(project)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 h-full flex flex-col">
                
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YzZjRmNSIvPjwvc3ZnPg=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                </div>
                
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2 flex-1">
                    {project.description}
                  </p>
                  <div>
                    {project.link && (
                      <Link href={project.link} target='_blank'>
                      <Button className='flex justify-center items-center gap-2 px-4 py-2'>
                          <span className='inline-block'>Open link</span>
                          <span className='inline-block'><ArrowUpRight /></span>
                      </Button>
                      </Link>
                      
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-blue-600 font-medium">
                      Click to view details →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Presentations */}
        <br /><br />
        <div>
          <h3 className='text-gray-600 text-xl font-semibold mb-3'>Presentations</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {
              presentationProjects.map((project) => (
                  <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group cursor-pointer"
              onClick={() => openLightbox(project)}
              role="button"
              tabIndex={0}
              aria-label={`View ${project.title} project details`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(project)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 h-full flex flex-col">
                
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YzZjRmNSIvPjwvc3ZnPg=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                </div>
                
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-blue-600 font-medium">
                      Click to view details →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
              ))
            }
          </div>
        </div>

        <br/><br />
        <div>
          <h3 className='text-gray-600 text-xl font-semibold mb-3'>Inbox Management</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {
              inbox.map((project) => (
                <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group cursor-pointer"
              onClick={() => openLightbox(project)}
              role="button"
              tabIndex={0}
              aria-label={`View ${project.title} project details`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(project)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 h-full flex flex-col">
                
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YzZjRmNSIvPjwvc3ZnPg=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                </div>
                
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-blue-600 font-medium">
                      Click to view details →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
              ))
            }
          </div>
        </div>

        {/*Workflow Automation */}
        <br /><br />
        <div>
          <h3 className='text-gray-600 text-xl font-semibold mb-3'>Workflow Automation</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {
              automation.map((project) => (
                  <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group cursor-pointer"
              onClick={() => openLightbox(project)}
              role="button"
              tabIndex={0}
              aria-label={`View ${project.title} project details`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(project)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 h-full flex flex-col">
                
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YzZjRmNSIvPjwvc3ZnPg=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                </div>
                
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-blue-600 font-medium">
                      Click to view details →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
              ))
            }
          </div>
        </div>
      </div>

      
      <AnimatePresence>
  {isModalOpen && selectedProject && (
    <>
     
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        onClick={closeLightbox}
      >
        
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative bg-black rounded-2xl overflow-hidden max-w-[90vw] max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-20 p-2 bg-black/60 backdrop-blur-sm text-white rounded-full hover:bg-black/80 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

         
          <div className="flex items-center justify-center p-4">
            <img
              src={selectedProject.imageUrl}
              alt={selectedProject.title}
              className="max-w-[85vw] max-h-[70vh] w-auto h-auto object-contain rounded-lg"
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '85vw',
                maxHeight: '70vh'
              }}
            />
          </div>

         
          <div className="bg-white p-5 md:p-6">
            <div className="flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 text-white text-sm text-center">
        <p>Press ESC or click outside to close</p>
      </div>
    </>
  )}
</AnimatePresence>
    </>
  );
};

export default ProjectGallery;