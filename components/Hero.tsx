import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Terminal, Activity, Cpu } from 'lucide-react';

const CodeLine = ({ line, delay = 0 }: { line: string; delay?: number }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setText(line.slice(0, i + 1));
        i++;
        if (i >= line.length) clearInterval(interval);
      }, 30); // Typing speed
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [line, delay]);

  return (
    <div className="font-mono text-sm leading-6">
      <span className="text-slate-500 mr-4 inline-block w-6 text-right select-none opacity-50"></span>
      <span className="text-indigo-300">{text}</span>
      {text.length === line.length && <span className="animate-pulse inline-block w-1.5 h-4 bg-indigo-400 align-middle ml-1" />}
    </div>
  );
};

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState('deploy');
  const [logs, setLogs] = useState<string[]>([]);
  const containerRef = useRef<HTMLElement>(null);
  
  // Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  
  // Mouse Position for Interactive Effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animation for mouse values
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position (-0.5 to 0.5) for rotation effects
      const xPct = (e.clientX / window.innerWidth) - 0.5;
      const yPct = (e.clientY / window.innerHeight) - 0.5;
      
      mouseX.set(xPct);
      mouseY.set(yPct);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Terminal 3D Rotation based on mouse
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-5, 5]);

  // Simulation for live metrics
  const [metrics, setMetrics] = useState({ cpu: 45, memory: 32, latency: 12 });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        cpu: Math.floor(Math.random() * 30) + 40,
        memory: Math.floor(Math.random() * 20) + 30,
        latency: Math.floor(Math.random() * 10) + 10,
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Simulation for terminal logs
  useEffect(() => {
    const logMessages = [
      { text: "> Initializing Nebula Core...", delay: 500 },
      { text: "> Loading neural weights [v4.2.0]", delay: 1500 },
      { text: "> Connecting to edge nodes (35/35)", delay: 2800 },
      { text: "> Verifying encryption keys...", delay: 3500 },
      { text: "> System optimized. Ready.", delay: 4500, color: "text-green-400" }
    ];

    logMessages.forEach((msg) => {
      setTimeout(() => {
        setLogs(prev => [...prev, msg.text]);
      }, msg.delay);
    });
  }, []);

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden perspective-1000">
      
      {/* Interactive Background Particles */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Dynamic Particles responding to mouse */}
        {[...Array(20)].map((_, i) => {
          // Random initial positions
          const initialX = Math.random() * 100;
          const initialY = Math.random() * 100;
          const size = Math.random() * 3 + 1;
          const depth = Math.random() * 30 + 10; // Movement intensity
          
          return (
            <motion.div
              key={i}
              className="absolute bg-indigo-400/30 rounded-full blur-[1px]"
              style={{
                left: `${initialX}%`,
                top: `${initialY}%`,
                width: size,
                height: size,
                // Parallax effect based on mouse position
                x: useTransform(mouseXSpring, [-0.5, 0.5], [-depth, depth]),
                y: useTransform(mouseYSpring, [-0.5, 0.5], [-depth, depth]),
              }}
            />
          );
        })}
      </motion.div>

      {/* Subtle Animated Waves */}
      <div className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 opacity-30 pointer-events-none z-0 mix-blend-screen">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <defs>
             <linearGradient id="wave-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                <stop offset="50%" stopColor="#818cf8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
             </linearGradient>
          </defs>
          <motion.path 
            d="M0,160 Q360,320 720,160 T1440,160"
            fill="none"
            stroke="url(#wave-grad)"
            strokeWidth="2"
            animate={{ 
              d: [
                "M0,160 Q360,260 720,160 T1440,160",
                "M0,160 Q360,60 720,160 T1440,160", 
                "M0,160 Q360,260 720,160 T1440,160"
              ] 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-sm font-medium text-indigo-300">Nebula AI 2.0 is live</span>
          <ArrowRight className="w-3 h-3 text-indigo-300" />
        </motion.div>

        {/* Animated Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
          {/* Staggered word reveal */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-2">
            {["Orchestrate", "your"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>
          {/* Shimmering Gradient Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative inline-block"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-white bg-[length:200%_auto] animate-[shimmer_4s_linear_infinite]">
              Digital Future
            </span>
            <motion.span 
              className="absolute -inset-2 bg-indigo-500/20 blur-xl rounded-full -z-10"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Unlock the power of next-generation AI to build, scale, and optimize your business workflows with unprecedented speed and security.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 group relative overflow-hidden">
             <span className="relative z-10 flex items-center gap-2">
              Start Building Free
              <Sparkles className="w-5 h-5 text-indigo-600 group-hover:rotate-12 transition-transform" />
             </span>
             <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center gap-2">
            <Play className="w-5 h-5 fill-current" />
            Watch Demo
          </button>
        </motion.div>

        {/* Interactive 3D Terminal/Dashboard */}
        <motion.div
          style={{ 
            perspective: 1000,
            rotateX: rotateX,
            rotateY: rotateY,
          }}
          className="relative max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="relative rounded-xl border border-white/10 bg-[#0B1120]/90 backdrop-blur-2xl shadow-2xl shadow-indigo-500/20 overflow-hidden ring-1 ring-white/5"
          >
             
             {/* Terminal Header */}
             <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                  </div>
                  {/* Tabs */}
                  <div className="flex bg-black/20 p-1 rounded-lg">
                    <button 
                      onClick={() => setActiveTab('deploy')}
                      className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${activeTab === 'deploy' ? 'bg-indigo-500/20 text-indigo-300' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                      deploy.tsx
                    </button>
                    <button 
                      onClick={() => setActiveTab('worker')}
                      className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${activeTab === 'worker' ? 'bg-indigo-500/20 text-indigo-300' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                      worker.config
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    nebula-v2-cluster
                  </span>
                </div>
             </div>

             {/* Main Content Area */}
             <div className="grid grid-cols-1 md:grid-cols-12 min-h-[400px]">
                
                {/* Left: Code Editor (7 Columns) */}
                <div className="md:col-span-7 p-6 border-r border-white/5 bg-[#0B1120] relative text-left">
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-slate-500">// Initialize the Nebula Orchestrator</div>
                    <div className="text-purple-400">import <span className="text-white">{`{ Nebula, Cluster }`}</span> from <span className="text-green-400">'@nebula/sdk'</span>;</div>
                    <br/>
                    <div className="text-purple-400">const <span className="text-blue-400">config</span> = <span className="text-yellow-300">{`{`}</span></div>
                    <div className="pl-4 text-white">region: <span className="text-green-400">'us-east-1'</span>,</div>
                    <div className="pl-4 text-white">nodes: <span className="text-orange-400">128</span>,</div>
                    <div className="pl-4 text-white">mode: <span className="text-green-400">'turbo-inference'</span></div>
                    <div className="text-yellow-300">{`}`};</div>
                    <br/>
                    {/* Typing Animation Block */}
                    <div className="relative">
                      <CodeLine line="const app = await Nebula.deploy(config);" delay={100} />
                      <CodeLine line="await app.scale({ min: 10, max: 500 });" delay={2000} />
                      <CodeLine line="console.log('Orchestration complete.');" delay={4000} />
                    </div>
                  </div>

                  {/* Editor Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />
                </div>

                {/* Right: Telemetry & Terminal (5 Columns) */}
                <div className="md:col-span-5 bg-[#0F1629] flex flex-col text-left">
                  
                  {/* Status Cards */}
                  <div className="p-4 grid grid-cols-2 gap-3 border-b border-white/5">
                    <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                      <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                        <Cpu className="w-3 h-3" /> CPU Load
                      </div>
                      <div className="text-lg font-mono text-white font-semibold flex items-end gap-1">
                        {metrics.cpu}% <span className="text-xs text-slate-500 mb-1">avg</span>
                      </div>
                      <div className="w-full bg-white/10 h-1 rounded-full mt-2 overflow-hidden">
                        <motion.div 
                           className="h-full bg-indigo-500"
                           animate={{ width: `${metrics.cpu}%` }}
                           transition={{ type: "spring", stiffness: 50 }}
                        />
                      </div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                      <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                        <Activity className="w-3 h-3" /> Latency
                      </div>
                      <div className="text-lg font-mono text-white font-semibold flex items-end gap-1">
                        {metrics.latency}ms <span className="text-xs text-green-500 mb-1">ok</span>
                      </div>
                      <div className="w-full bg-white/10 h-1 rounded-full mt-2 overflow-hidden">
                        <motion.div 
                           className="h-full bg-green-500"
                           animate={{ width: `${metrics.latency * 2}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Terminal Output */}
                  <div className="flex-1 p-4 font-mono text-xs overflow-hidden flex flex-col relative">
                    <div className="flex items-center gap-2 text-slate-500 mb-2 pb-2 border-b border-white/5 text-[10px] uppercase tracking-wider">
                      <Terminal className="w-3 h-3" /> System Logs
                    </div>
                    <div className="space-y-2 relative z-10">
                      {logs.map((log, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className={`${log.includes('text-green-400') ? 'text-green-400' : 'text-slate-300'}`}
                        >
                          {log.replace('text-green-400', '')}
                        </motion.div>
                      ))}
                      <motion.div 
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-2 h-4 bg-slate-500 inline-block align-middle"
                      />
                    </div>
                    
                    {/* Scanline effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent h-[10px] w-full animate-[scan_3s_linear_infinite] pointer-events-none" />
                  </div>
                </div>

             </div>
          </motion.div>
          
          {/* Decorative Glows */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-20 -z-10" />
          <div className="absolute -bottom-10 left-10 right-10 h-10 bg-indigo-500/20 blur-[60px]" />
        </motion.div>

      </div>
    </section>
  );
};