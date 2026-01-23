'use client';

import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';

const TESTIMONIALS_GRID = [
  {
    id: 1,
    name: 'Alex Turner',
    company: 'Marketing Pro',
    content: 'The automation setup saved us 15 hours weekly. Incredible ROI!',
    rating: 5,
    highlight: true,
  },
  {
    id: 2,
    name: 'Maria Garcia',
    company: 'E-Commerce Store',
    content: 'Our customer service response time improved by 300%. Highly recommended!',
    rating: 5,
  },
  {
    id: 3,
    name: 'James Wilson',
    company: 'Consulting Firm',
    content: 'Professional, punctual, and highly skilled. Transformed our workflow.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sophie Chen',
    company: 'Tech Startup',
    content: 'Went from chaotic to organized in just 2 weeks. Amazing work!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Robert Kim',
    company: 'Finance Agency',
    content: 'The data management systems implemented are flawless. Perfect execution.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Emma Davis',
    company: 'Healthcare Solutions',
    content: 'Exceptionally reliable. Our operations have never been smoother.',
    rating: 5,
  },
];

export default function TestimonialsGrid() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client <span className="text-blue-600">Testimonials</span>
          </h2>
          <p className="text-gray-600 text-lg">See what our clients have to say about their experience</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_GRID.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`bg-white rounded-2xl p-6 shadow-lg ${
                testimonial.highlight
                  ? 'border-2 border-blue-500 md:col-span-2 lg:col-span-1'
                  : ''
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-blue-100 mb-4" />
              
              <p className="text-gray-700 mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}