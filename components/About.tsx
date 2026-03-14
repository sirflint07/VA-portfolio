'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Zap, Target, TrendingUp } from 'lucide-react';

const VA_IMAGES = [
  '/images/va-1.jpg',
  '/images/va-2.jpg',
  '/images/va-3.jpg',
  '/images/va-4.jpg',
];

const placeholderImages = [
  '/img/studio-1.png',
  '/img/studio-2.png',
  '/img/studio-3.png',
  '/img/studio-4.png',
];

const STATS = [
  { number: '99%', label: 'Client Satisfaction', icon: <Sparkles className="w-5 h-5" /> },
  { number: '50+', label: 'Projects Completed', icon: <Target className="w-5 h-5" /> },
  { number: '40%', label: 'Cost Reduction', icon: <TrendingUp className="w-5 h-5" /> },
  { number: '75%', label: 'Time Saved', icon: <Zap className="w-5 h-5" /> },
];

const SKILLS = [
 'Workflow & Process Management',
'Workflow Automation',
'Process Optimization',
'Project Management',
'Task & Priority Management',
'Digital & Administrative Operations',
'CRM Management & Implementation',
'Calendar & Email Management',
'Documentation & File Organization',
'Data Entry & Data Analysis',
'Expense Reporting & Budget Tracking',
'Travel Planning & Logistics',
'Customer & Client Operations',
'Customer Support & Client Onboarding',
'Social Media & Digital Communications'
];

export default function AboutMeSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

 
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % placeholderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % placeholderImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + placeholderImages.length) % placeholderImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Your Expert <span className="text-emerald-600">Executive Operations Professional</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming workflows and amplifying success through strategic automation and process optimization
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div 
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={placeholderImages[currentImage]}
                  alt={`Virtual Assistant ${currentImage + 1}`}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>

              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>

              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {placeholderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImage
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>

             
              <div className="absolute top-6 left-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring' }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg"
                >
                  Professional VA
                </motion.div>
              </div>
            </div>

            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
            >
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 rounded-xl shadow-lg text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {stat.icon}
                    <span className="text-2xl font-bold text-gray-900">{stat.number}</span>
                  </div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8"
          >
            
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Your Partner in <span className="text-emerald-600">Business Excellence</span>
              </h3>
              <p className="text-gray-600 text-lg md:text-sm mb-4">
                Hi, I'm Fajobi, an Executive Operations Professional and Workflow Automation Specialist dedicated to helping businesses and busy leaders simplify operations, streamline workflows, and work more efficiently
              </p>
              <p className="text-gray-600 text-lg md:text-sm mb-4">
                I specialize in transforming manual processes into smart, automated systems that save time, reduce operational friction, and allow teams to focus on what truly drives growth.
              </p>
              <p className='text-gray-600 text-lg md:text-sm mb-4'>
                This space is more than just a portfolio — it&apos;s a reflection of the work I&apos;m passionate about and the value I bring to the organizations I support. From optimizing workflows and organizing digital systems to implementing automation that improves productivity, my goal is always the same: to create clarity, efficiency, and sustainable operational structure.
              </p>
              <p className='text-gray-600 text-lg md:text-sm mb-4'>
              Feel free to explore. Each project and service here represents my commitment to thoughtful execution, strategic support, and measurable results.
              </p>
              <p className="text-gray-600 text-lg">
               If you&apos;re looking for someone who can help simplify operations and build systems that allow your business to scale more effectively, I&apos;d be glad to connect.
              </p>
            </div>

            

            {/* Philosophy */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                My Philosophy
              </h4>
              <p className="text-gray-700 italic mb-4">
                {`"I don’t just optimize time, I optimize systems, helping businesses achieve more with less effort."`}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">VA</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Professional Virtual Assistant</p>
                  <p className="text-gray-600">Specializing in Automation & Optimization</p>
                </div>
              </div>
            </div>

            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Let&apos;s Transform Your Workflow
            </motion.button>
          </motion.div>
        </div>

        {/* Core Services */}
            <div className='max-w-4xl p-2 mx-auto mt-16'>
              <h4 className="text-4xl font-semibold text-gray-900 mb-4 flex items-center gap-2 underline underline-offset-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Core Expertise
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {SKILLS.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-700">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
      </div>
    </section>
  );
}