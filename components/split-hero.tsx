"use client";

import { Dithering } from "@paper-design/shaders-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface SplitHeroProps {
  gridMode: 'inside-sphere' | 'global';
  onToggle: () => void;
}

export default function SplitHero({ gridMode, onToggle }: SplitHeroProps) {
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
            className="border-4 border-[#00ff41] p-8 bg-black/80 backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,65,0.3)]"
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
                  [MLOps_Engineer] [Product_Lead] [Python_Enthusiast]
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
        className="w-1/2 relative bg-transparent cursor-pointer transition-transform hover:scale-[1.02] group"
        onClick={onToggle}
        title="Click to toggle background mode"
      >
        {/* Only show Dithering sphere when in inside-sphere mode */}
        {gridMode === 'inside-sphere' && (
          <AnimatePresence mode="wait">
            <motion.div
              key={gridMode}
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

        {/* Hover hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="text-[#00ff41] text-sm font-mono text-center">
            {/* [CLICK_TO_TOGGLE_MODE]  */}
            [CLICK_TO_TOGGLE_MODE]
          </div>
        </div>
      </div>
    </div>
  );
}
