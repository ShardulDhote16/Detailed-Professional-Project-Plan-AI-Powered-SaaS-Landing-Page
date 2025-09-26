'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-8"
        >
          🚀 AI-Powered Content Generation
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Write 10x Faster with
          <span className="text-blue-600 block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI-Powered Content
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ContentBot generates high-quality blog posts, social media content, ads, and emails in seconds. 
          Stop staring at a blank page and start creating.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" className="w-full sm:w-auto">
            🚀 Start Creating Free
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            📺 Watch Demo
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">10x</div>
            <div className="text-gray-600">Faster Writing</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">50+</div>
            <div className="text-gray-600">Content Types</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">99%</div>
            <div className="text-gray-600">Satisfaction</div>
          </div>
        </motion.div>

        {/* Floating AI Mockup */}
        <motion.div
          className="mt-16 relative"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-gray-200">
            <div className="flex space-x-4 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-left">
                <div className="text-blue-600 font-semibold mb-2">AI Writing Assistant</div>
                <div className="text-gray-800">
                  "Write a blog post introduction about the benefits of remote work for tech companies..."
                </div>
                <div className="mt-4 p-4 bg-white rounded border-l-4 border-blue-600">
                  Remote work has revolutionized the tech industry, offering unprecedented flexibility and access to global talent. Companies that embrace remote-first policies are seeing...
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}