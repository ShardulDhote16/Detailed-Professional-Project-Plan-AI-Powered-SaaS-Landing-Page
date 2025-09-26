'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
  {
    question: 'How does the AI content generation work?',
    answer: 'Our AI uses advanced language models trained on high-quality content to understand your requirements and generate relevant, engaging content. You provide the context, and our AI does the rest.'
  },
  {
    question: 'Can I try ContentBot for free?',
    answer: 'Yes! We offer a 14-day free trial for all plans. No credit card required to start. You\'ll get full access to all features during your trial period.'
  },
  {
    question: 'Is the generated content unique and plagiarism-free?',
    answer: 'Absolutely. Our AI generates original content from scratch. We also include built-in plagiarism checking to ensure all content is 100% unique.'
  },
  {
    question: 'Can I customize the tone and style of the content?',
    answer: 'Yes, you can choose from multiple tones (professional, casual, persuasive, etc.) and even provide specific style guidelines for the AI to follow.'
  },
  {
    question: 'Do you offer team collaboration features?',
    answer: 'Yes, our Professional and Enterprise plans include team collaboration features like shared templates, content approval workflows, and team management tools.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer email support for all plans, priority support for Professional plans, and dedicated account management for Enterprise customers.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about ContentBot AI
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="border border-gray-200 rounded-lg">
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}