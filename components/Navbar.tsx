'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Briefcase, Wrench, Mail, FolderOpen } from 'lucide-react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileNav = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  const closeMobileNav = () => {
    setIsMobileMenuOpen(false)
    document.body.style.overflow = 'auto'
  }

  const navLinks = [
    { href: "/", label: "Home", icon: <Home size={20} /> },
    { href: "#services", label: "Services", icon: <Briefcase size={20} /> },
    { href: "#skills", label: "Skills", icon: <Wrench size={20} /> },
    { href: "#contact", label: "Contact", icon: <Mail size={20} /> },
    { href: "/projects", label: "Projects", icon: <FolderOpen size={20} /> },
  ]

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-[1328px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-sm md:text-xl text-slate-900"
            >
              Fajobi Abiodun - VA Assistant
            </motion.div>
            
           
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              <a href="/" className="text-slate-700 hover:text-emerald-600 transition-colors">Home</a>
              <a href="#services" className="text-slate-700 hover:text-emerald-600 transition-colors">Services</a>
              <a href="#skills" className="text-slate-700 hover:text-emerald-600 transition-colors">Skills</a>
              <a href="#contact" className="text-slate-700 hover:text-emerald-600 transition-colors">Contact</a>
              <a href='/projects' className='text-slate-700 hover:text-emerald-600 transition-colors'>Projects</a>
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex md:hidden p-2 rounded-md hover:bg-slate-100 transition-colors"
              onClick={toggleMobileNav}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </nav>

      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
           
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={closeMobileNav}
            />
            
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-64 bg-white z-50 md:hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              
              <div className="flex items-center justify-between p-6 border-b border-slate-200">
                
                <button
                  onClick={closeMobileNav}
                  className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

             
              <nav className="p-6">
                <ul className="space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={closeMobileNav}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 transition-all group"
                      >
                        <span className="text-emerald-600 group-hover:text-emerald-700">
                          {link.icon}
                        </span>
                        <span className="font-medium">{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

             
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-200">
                <div className="text-center">
                  <p className="text-sm text-slate-600 mb-4">
                    Let&apos;s work together!
                  </p>
                  <a
                    href="#contact"
                    onClick={closeMobileNav}
                    className="block w-full py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

     
      <div className="h-16" />
    </>
  )
}

export default Navbar