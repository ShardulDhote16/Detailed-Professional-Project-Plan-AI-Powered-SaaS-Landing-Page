'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Choose Your Content Type',
    description: 'Select from 50+ content templates including blog posts, social media, ads, emails, and more.',
    icon: '📝'
  },
  {
    number: '02',
    title: 'Provide Context',
    description: 'Tell our AI about your topic, target audience, tone, and any specific requirements.',
    icon: '🎯'
  },
  {
    number: '03',
    title: 'Generate & Refine',
    description: 'Get instant content suggestions. Edit, refine, or regenerate until you\'re satisfied.',
    icon: '✨'
  },
  {
    number: '04',
    title: 'Publish & Track',
    description: 'Export your content and track its performance with built-in analytics.',
    icon: '📊'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How ContentBot Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get from idea to published content in just 4 simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex flex-col md:flex-row items-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Step Number and Icon */}
                <div className="flex items-center mb-4 md:mb-0 md:w-32">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-bold text-lg relative z-10">
                    {step.number}
                  </div>
                  <div className="text-4xl ml-4 md:hidden">{step.icon}</div>
                </div>

                {/* Content */}
                <div className="md:flex-1 md:pl-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-4 hidden md:block">{step.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}