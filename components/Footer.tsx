import React from 'react';
import { Rocket, Twitter, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="border-t border-white/10 bg-[#030712] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="p-1.5 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Nebula</span>
            </a>
            <p className="text-slate-400 mb-6 max-w-xs">
              Building the infrastructure for the next generation of AI-native applications.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Features</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Community</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">About</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Legal</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 Nebula AI Inc. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};