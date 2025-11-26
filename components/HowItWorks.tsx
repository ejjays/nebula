import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Connect your Data',
    desc: 'Seamlessly integrate with your existing database or data lake with a single click.'
  },
  {
    num: '02',
    title: 'Configure Model',
    desc: 'Choose from top-tier open source models or bring your own fine-tuned weights.'
  },
  {
    num: '03',
    title: 'Deploy & Scale',
    desc: 'Launch your API endpoints and let our autoscaler handle the traffic spikes.'
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              From idea to production in minutes
            </h2>
            <p className="text-slate-400 text-lg mb-12">
              Skip the infrastructure headaches. Nebula handles the complexity so you can focus on building intelligence.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-indigo-500/30 bg-indigo-500/10 flex items-center justify-center font-bold text-indigo-400">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-slate-400">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Abstract visual representation of code/workflow */}
            <div className="relative rounded-2xl bg-[#0B1120] border border-white/10 p-6 shadow-2xl">
              <div className="absolute top-0 right-0 p-4">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="text-slate-500">// Initialize Nebula Client</div>
                <div className="text-indigo-400">const <span className="text-white">client</span> = <span className="text-purple-400">new</span> NebulaSDK({'{'}</div>
                <div className="pl-4 text-white">apiKey: <span className="text-green-400">'env.API_KEY'</span>,</div>
                <div className="pl-4 text-white">region: <span className="text-green-400">'us-east-1'</span></div>
                <div className="text-indigo-400">{'}'});</div>
                <br/>
                <div className="text-slate-500">// Deploy Model</div>
                <div className="text-indigo-400">await <span className="text-white">client.deploy</span>({'{'}</div>
                <div className="pl-4 text-white">model: <span className="text-green-400">'llama-3-70b'</span>,</div>
                <div className="pl-4 text-white">replicas: <span className="text-orange-400">3</span></div>
                <div className="text-indigo-400">{'}'});</div>
              </div>

              {/* Success Badge Overlay */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white text-slate-900 px-6 py-4 rounded-xl shadow-xl flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold">Deployed</div>
                  <div className="text-xs text-slate-500">Just now</div>
                </div>
              </motion.div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -inset-10 bg-indigo-500/20 blur-3xl rounded-full -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};