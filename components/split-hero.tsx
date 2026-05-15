"use client";

import { Dithering } from "@paper-design/shaders-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { RevealWaveImage } from "@/components/ui/reveal-wave-image";

interface SplitHeroProps {
  gridMode: 'inside-sphere' | 'global';
  onToggle: () => void;
}

export default function SplitHero({ gridMode, onToggle }: SplitHeroProps) {
  // Determine background opacity based on mode
  const bgOpacity = gridMode === 'inside-sphere' ? 'bg-black/30' : 'bg-black/50';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden flex">
      {/* Left Panel - Terminal View */}
      <div
        className="w-1/2 text-[#00ff41] p-8 font-mono relative z-10 flex items-center justify-center"
        style={{ backgroundColor: 'transparent' }}
      >
        <div className="max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={`border-4 border-[#00ff41] p-8 ${bgOpacity} backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,65,0.3)]`}
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b-2 border-[#00ff41]">
              <Terminal className="w-6 h-6" />
              <span className="text-sm">[SYSTEM_READY] portfolio.exe</span>
              <div className="ml-auto flex gap-2">
                <div className="w-3 h-3 bg-[#00ff41] animate-pulse" />
                <div className="w-3 h-3 bg-[#00ff41]/50" />
                <div className="w-3 h-3 bg-[#00ff41]/30" />
              </div>
            </div>

            <div className="space-y-4 text-lg">
              <div className="flex items-center gap-2">
                <span className="text-[#ff6b35]">&gt;</span>
                <span>whoami</span>
              </div>
              <div className="pl-6">
                <h1 className="text-5xl font-bold mb-2 tracking-wider animate-pulse">
                  VIBHANSH GUPTA
                </h1>
                <div className="text-[#ff6b35] text-xl mb-4">
                  [Team_Lead] [Product_Engineer] [Open_Source_Contributor]
                </div>
              </div>

              <div className="flex items-center gap-2 mt-6">
                <span className="text-[#ff6b35]">&gt;</span>
                <span>cat tagline.txt</span>
              </div>
              <div className="pl-6 text-xl text-[#ffbe0b] font-bold">
                Make Products Scalable Again
                {showCursor && <span className="animate-pulse">_</span>}
              </div>

              <div className="flex items-center gap-2 mt-6">
                <span className="text-[#ff6b35]">&gt;</span>
                <span>cat bio.txt</span>
              </div>
              <div className="pl-6 text-base text-[#00ff41]/80">
                Tech enthusiast, Python lover and Space aficionado.
              </div>
              <div className="pl-6 text-base text-[#00ff41]/80">
                I love bringing AI ideas into production.
              </div>
              <div className="flex items-center gap-2 mt-8">
                <span className="text-[#ff6b35]">&gt;</span>
                <span>ls ./contact/</span>
              </div>
              <div className="pl-6 flex flex-wrap gap-4 mt-4">
                <motion.a
                  href="mailto:vibhanshg@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-[#00ff41] hover:bg-[#00dd36] text-black font-bold border-2 border-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.5)]">
                    <Mail className="w-4 h-4 mr-2" />
                    [EMAIL]
                  </Button>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/vibhansh-gupta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-transparent border-2 border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black">
                    <FaLinkedin className="w-4 h-4 mr-2" />
                    [LINKEDIN]
                  </Button>
                </motion.a>

                <motion.a
                  href="https://github.com/Lord-V15"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-transparent border-2 border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black">
                    <FaGithub className="w-4 h-4 mr-2" />
                    [GITHUB]
                  </Button>
                </motion.a>
              </div>

              <div className="mt-8 text-center text-sm text-[#00ff41]/60 animate-bounce">
                [SCROLL_DOWN_FOR_MORE_INFO] ↓
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Panel - Matrix Green Pixelated Effect */}
      <div
        className={`w-1/2 relative bg-transparent transition-transform group ${gridMode === 'inside-sphere' ? 'cursor-pointer hover:scale-[1.02]' : ''}`}
        onClick={gridMode === 'inside-sphere' ? onToggle : undefined}
        title={gridMode === 'inside-sphere' ? "Click to toggle background mode" : undefined}
      >
        {/* Only show Dithering sphere when in inside-sphere mode */}
        {gridMode === 'inside-sphere' && (
          <AnimatePresence mode="wait">
            <motion.div
              key="sphere"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Dithering
                style={{ height: "100%", width: "100%" }}
                colorBack="hsl(0, 0%, 0%)" // Black background
                colorFront="hsl(120, 100%, 50%)" // Matrix green (#00ff41)
                shape="sphere"
                type="4x4"
                pxSize={3}
                offsetX={0}
                offsetY={0}
                scale={0.8}
                rotation={0}
                speed={0.1}
              />
            </motion.div>
          </AnimatePresence>
        )}

        {/* Show Wormhole when in global mode (clicked state) */}
        {gridMode === 'global' && (
          <AnimatePresence mode="wait">
            <motion.div
              key="wormhole"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Wormhole with translucent image and glow */}
              <div
                className="relative cursor-pointer rounded-full overflow-hidden"
                style={{
                  width: '80%',
                  aspectRatio: '1/1',
                  boxShadow: '0 0 30px rgba(0, 255, 65, 0.5), inset 0 0 30px rgba(0, 255, 65, 0.2)',
                }}
                onClick={onToggle}
                title="Click to teleport back"
              >
                {/* Translucent wormhole image with wave effects */}
                <div className="absolute inset-0 opacity-60">
                  <RevealWaveImage
                    src="/wormhole.jpg"
                    waveSpeed={0.2}
                    waveFrequency={0.7}
                    waveAmplitude={0.5}
                    revealRadius={0.5}
                    revealSoftness={1}
                    pixelSize={2}
                    mouseRadius={0.4}
                  />
                </div>
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-radial from-[#00ff41]/10 via-transparent to-transparent animate-pulse pointer-events-none" />
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Hover hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="text-[#00ff41] text-sm font-mono text-center">
            {gridMode === 'inside-sphere'
              ? '[Click for r_s = 2GM/c²]'
              : '[Click to teleport back]'}
          </div>
        </div>
      </div>
    </div>
  );
}
