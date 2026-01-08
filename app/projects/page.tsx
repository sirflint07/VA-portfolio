'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with cart, checkout, and admin dashboard.',
    imageUrl: '/img/CRM-setup.jpg',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task manager with real-time updates and drag-drop interface.',
    imageUrl: '/img/excel-data-entry.jpg',
    tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
  },
  {
    id: 3,
    title: 'Fitness Tracker',
    description: 'Mobile-first fitness app with workout plans and progress tracking.',
    imageUrl: '/img/inbox-management.jpg',
    tags: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Real-time weather application with 5-day forecasts and location detection.',
    imageUrl: '/img/presentation.jpg',
    tags: ['Vue.js', 'Weather API', 'Tailwind', 'PWA'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Modern portfolio website with dark mode and animation effects.',
    imageUrl: '/img/zap-automation.jpg',
    tags: ['Next.js', 'Framer Motion', 'TypeScript', 'SCSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
  },
  {
    id: 6,
    title: 'Blog Platform',
    description: 'Content management system with markdown editor and SEO optimization.',
    imageUrl: '/img/CRM-Setup Process.jpg',
    tags: ['Gatsby', 'GraphQL', 'Contentful', 'Netlify'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
  },
];

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
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                        aria-label="Visit live site"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
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
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              {/* Modal Container */}
              <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-colors"
                  aria-label="Close lightbox"
                >
                  <X size={24} />
                </button>

                {/* Modal Content */}
                <div className="h-full overflow-y-auto">
                  {/* Image */}
                  <div className="relative h-96 md:h-[500px]">
                    <Image
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority
                    />
                  </div>

                  {/* Project Details */}
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                          {selectedProject.title}
                        </h3>
                        <p className="text-gray-600 text-lg">
                          {selectedProject.description}
                        </p>
                      </div>

                      <div className="flex gap-4">
                        {selectedProject.liveUrl && (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            <ExternalLink size={18} />
                            Live Site
                          </a>
                        )}
                        {selectedProject.githubUrl && (
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                          >
                            <Github size={18} />
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-gray-100 text-gray-800 font-medium rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Instructions */}
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