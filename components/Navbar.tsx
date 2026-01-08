'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <a href="#services" className="text-slate-700 hover:text-emerald-600 transition-colors">Services</a>
              <a href="#skills" className="text-slate-700 hover:text-emerald-600 transition-colors">Skills</a>
              <a href="#contact" className="text-slate-700 hover:text-emerald-600 transition-colors">Contact</a>
              <a href='/projects' className='text-slate-700 hover:text-emerald-600 transition-colors'>Projects</a>
            </motion.div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
