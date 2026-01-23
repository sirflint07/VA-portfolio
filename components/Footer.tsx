'use client'

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Linkedin, Twitter, Facebook, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';


const Footer = () => {
  return (
<section id="contact" className="pt-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Let&apos;s Work Together</h2>
            <p className="text-xl text-slate-300 mb-8">
              Ready to automate your workflows and boost productivity? Get in touch today.
            </p>
            <div className="flex justify-center gap-6 mb-12">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:fajobiabiodun99@gmail.com"
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://shorturl.at/xJRgL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://x.com/fajobiabiodun"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <Twitter className='size-6'/>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://web.facebook.com/fajobi.abiodunemmanuel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <Facebook className='size-6'/>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/2348107791294?text=Hello%20Emmanuel%2C%20I%20came%20across%20your%20profile%20and%20I%E2%80%99d%20like%20to%20discuss%20a%20potential%20freelance%2C%20virtual%20assistant%2C%20or%20administrative%2Fexecutive%20assistant%20opportunity%20with%20you.%20I%E2%80%99d%20love%20to%20connect"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <MessageCircle className='size-6'/>
              </motion.a>
            </div>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
              <a href="mailto:fajobiabiodun99@gmail.com">
                Send A Mail <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>

        <footer className="bg-slate-950 text-slate-400 py-8 px-4 sm:px-6 lg:px-8 w-full">
        <div className="mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Fajobi Abiodun. All rights reserved.</p>
          <p className='text-xs mt-1'>Developed by <span className='opcity-60 text-sm text-slate-100 font-bold'><a className='hover:text-emerald-400 cursor-pointer' href='https://golden-designs-studio.vercel.app/' target='_blank'>Michael Oluwaseun</a></span></p>
        </div>
      </footer>
      </section>
  )
}

export default Footer;