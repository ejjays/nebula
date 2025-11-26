import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter',
      price: annual ? 0 : 0,
      description: 'Perfect for side projects and learning.',
      features: ['5,000 requests/mo', 'Community Support', '1 Team Member', 'Basic Analytics'],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: annual ? 29 : 39,
      description: 'For growing teams and production apps.',
      features: ['100,000 requests/mo', 'Priority Email Support', '5 Team Members', 'Advanced Analytics', 'Custom Domain'],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large scale organizations.',
      features: ['Unlimited requests', '24/7 Phone Support', 'Unlimited Team Members', 'SSO & Audit Logs', 'SLA Agreement'],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, transparent pricing</h2>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm ${!annual ? 'text-white font-medium' : 'text-slate-400'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-14 h-8 bg-white/10 rounded-full p-1 transition-colors hover:bg-white/20"
            >
              <motion.div
                animate={{ x: annual ? 24 : 0 }}
                className="w-6 h-6 bg-indigo-500 rounded-full shadow-md"
              />
            </button>
            <span className={`text-sm ${annual ? 'text-white font-medium' : 'text-slate-400'}`}>
              Yearly <span className="text-green-400 text-xs font-bold ml-1">-20%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-3xl border flex flex-col ${
                plan.popular 
                  ? 'bg-gradient-to-b from-indigo-900/40 to-[#0f172a] border-indigo-500/50 shadow-xl shadow-indigo-500/10' 
                  : 'bg-[#0f172a]/40 border-white/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full border border-indigo-400">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">
                    {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                  </span>
                  {typeof plan.price === 'number' && (
                    <span className="text-slate-400 ml-2">/mo</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                plan.popular
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};