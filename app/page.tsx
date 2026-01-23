'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Clock, Target, Mail, Linkedin, Github, CheckCircle2, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AboutMeSection from '@/components/About';
import TestimonialsGrid from '@/components/Testimonials';
import MyStory from '@/components/MyStory';
import SimpleInfiniteToolScroll from '@/components/Tools';
import HeroVideo from '@/components/VideoSection';


export default function Home() {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Workflow Automation',
      description: 'Streamline your business processes with custom automation solutions using Zapier, Make, and n8n.',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Administrative Support',
      description: 'Professional virtual assistance for scheduling, email management, and day-to-day operations.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Process Optimization',
      description: 'Analyze and improve your workflows to save time and increase productivity.',
    },
  ];

  const skills = [
    'Zapier', 'Make (Integromat)', 'n8n', 'Airtable', 'Notion',
    'Google Workspace', 'Microsoft 365', 'Slack', 'Asana', 'Trello',
    'CRM Management', 'Data Entry', 'Project Coordination'
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white w-[88vw] md:w-[92vw] mx-auto">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Automate Your Workflow,
                <span className="text-emerald-600"> Amplify Your Success</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Expert Virtual Assistant specializing in workflow automation and process optimization.
                I help businesses save time, reduce costs, and scale efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                  <a href="#contact">
                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href='/doc/Fajobi Abioudun Resume.pdf' download='Fajobi Abioudun Resume.pdf' className='cursor-pointer'>Download CV</a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="h-3 w-32 bg-white/30 rounded"></div>
                      <div className="h-2 w-24 bg-white/20 rounded mt-2"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-fit w-full bg-white/30 rounded p-1"><span className='text-white font-sm font-semibold inline-block opacity-70'>VA Expert</span></div>
                    <div className="h-fit w-5/6 bg-white/20 rounded p-1">
                    <span className='text-white font-sm font-semibold inline-block opacity-70'>Digital architect</span>
                    </div>
                    <div className="h-2 w-4/6 bg-white/20 rounded py-4 px-2"></div>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-sm">Automated</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className='mx-auto'>
        <HeroVideo />
        <AboutMeSection />
      </section>

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What I Offer</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive virtual assistance and automation services tailored to your business needs
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-slate-200">
                  <CardHeader>
                    <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 text-emerald-600">
                      {service.icon}
                    </div>
                    <CardTitle className="text-slate-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      
      <MyStory />
      <TestimonialsGrid />

      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Skills & Tools</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Proficient in industry-leading platforms and automation tools
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-white border border-slate-200 rounded-lg px-6 py-3 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="text-slate-700 font-medium">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
          <SimpleInfiniteToolScroll />
        </div>
      </section>
    </div>
  );
}
