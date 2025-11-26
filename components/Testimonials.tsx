import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Nebula completely transformed how we handle our AI workloads. The speed is unmatched.",
    author: "Sarah Chen",
    role: "CTO at TechFlow",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    quote: "The developer experience is simply incredible. It just works, right out of the box.",
    author: "Marcus Rodriguez",
    role: "Lead Engineer at DataCore",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    quote: "Scaling used to be a nightmare. With Nebula, it's automatic and cost-effective.",
    author: "Emily Watson",
    role: "Founder at AI Studio",
    image: "https://picsum.photos/100/100?random=3"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Loved by builders
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-[#0f172a]/40 border border-white/5 hover:border-indigo-500/30 transition-colors"
            >
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i * 0.1) + 0.3, duration: 0.6 }}
                className="text-lg text-slate-300 mb-6"
              >
                "{t.quote}"
              </motion.p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.author} className="w-10 h-10 rounded-full border border-white/10" />
                <div>
                  <div className="font-semibold text-white">{t.author}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};