import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { Rocket, ArrowRight, Sparkles } from 'lucide-react';

export const CTA: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse position state for spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card Container with Hover Spotlight */}
        <div 
          className="relative group rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-xl overflow-hidden"
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight Gradient - tracks mouse */}
          <motion.div
            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-30"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  650px circle at ${mouseX}px ${mouseY}px,
                  rgba(99, 102, 241, 0.15),
                  transparent 80%
                )
              `,
            }}
          />

          {/* Animated Background Grid */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-[moveGrid_20s_linear_infinite]" />
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent blur-3xl" />
          </div>

          <div className="relative z-20 px-8 py-24 md:py-32 text-center">
            
            {/* Floating Icon Badge */}
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex mb-8 relative"
            >
              <div className="absolute inset-0 bg-indigo-500 blur-[40px] opacity-40 animate-pulse" />
              <div className="relative w-20 h-20 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-500/30 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                <Rocket className="w-10 h-10 text-white" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-slate-900">
                    <Sparkles className="w-3 h-3 text-slate-900" />
                </div>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="block text-white">Ready to launch?</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Build the future today.
              </span>
            </motion.h2>

            {/* Subtext */}
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Join thousands of developers scaling their applications with Nebula. 
              Start your free trial now and get $100 in credits.
            </motion.p>
            
            {/* Buttons */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
               <button className="group relative w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]">
                 <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                 <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </span>
               </button>
               
               <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 backdrop-blur-sm">
                 Contact Sales
               </button>
            </motion.div>
          </div>
        </div>

      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};