import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Cpu, BarChart3, Lock } from 'lucide-react';

const features = [
  {
    title: 'Lightning Fast',
    description: 'Optimized for speed with edge computing capabilities.',
    icon: Zap,
    className: 'md:col-span-2',
    color: 'from-amber-500/20 to-orange-500/20 text-orange-400'
  },
  {
    title: 'Bank-Grade Security',
    description: 'Enterprise-ready encryption and compliance out of the box.',
    icon: Shield,
    className: 'md:col-span-1',
    color: 'from-green-500/20 to-emerald-500/20 text-emerald-400'
  },
  {
    title: 'Global Infrastructure',
    description: 'Deploy instantly to 35+ regions worldwide.',
    icon: Globe,
    className: 'md:col-span-1',
    color: 'from-blue-500/20 to-cyan-500/20 text-cyan-400'
  },
  {
    title: 'AI Native',
    description: 'Built from the ground up for LLM workloads and vector search.',
    icon: Cpu,
    className: 'md:col-span-2',
    color: 'from-purple-500/20 to-pink-500/20 text-pink-400'
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything you need</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A complete toolkit designed to help you ship faster, scale better, and sleep easier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative group overflow-hidden rounded-3xl border border-white/10 bg-[#0f172a]/40 p-8 hover:bg-[#0f172a]/60 transition-colors ${feature.className}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 ${feature.color.split(' ')[2]}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};