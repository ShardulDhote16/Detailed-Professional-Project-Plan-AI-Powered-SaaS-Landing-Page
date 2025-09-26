'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Generate high-quality content in seconds, not hours. Perfect for tight deadlines and busy schedules.'
  },
  {
    icon: '🎯',
    title: 'SEO Optimized',
    description: 'AI-powered SEO suggestions help your content rank higher on search engines and drive more traffic.'
  },
  {
    icon: '🎨',
    title: 'Multiple Tones',
    description: 'Switch between professional, casual, persuasive, or friendly tones to match your brand voice.'
  },
  {
    icon: '🌐',
    title: '50+ Languages',
    description: 'Create content in multiple languages with native-level fluency and cultural relevance.'
  },
  {
    icon: '📊',
    title: 'Content Analytics',
    description: 'Track performance and get insights to improve your content strategy over time.'
  },
  {
    icon: '🤝',
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team, share templates, and maintain brand consistency.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Create Amazing Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to streamline your content creation process and boost your productivity.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:border-blue-600 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}