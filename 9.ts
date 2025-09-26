'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Content Marketing Manager',
    company: 'TechStart Inc.',
    content: 'ContentBot has revolutionized our content workflow. We\'re producing 3x more content with half the effort!',
    avatar: '👩‍💼'
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Founder',
    company: 'GrowthLab',
    content: 'As a solo founder, ContentBot is like having a full-time content writer on my team. Absolutely game-changing.',
    avatar: '👨‍💼'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'SEO Specialist',
    company: 'DigitalBoost',
    content: 'The SEO optimization features are incredible. Our organic traffic increased by 150% in just 3 months.',
    avatar: '👩‍🎓'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Loved by Content Creators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of marketers, writers, and businesses who use ContentBot to create amazing content.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  {/* Stars */}
                  <div className="flex text-yellow-400 text-xl mb-4">
                    {'★'.repeat(5)}
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-gray-600 italic mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}