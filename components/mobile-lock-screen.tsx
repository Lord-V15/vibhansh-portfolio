"use client";

import { motion } from "framer-motion";
import { LockKeyhole, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import MatrixCowsayAnimation from "@/components/matrix-cowsay-animation";
import { Dithering } from "@paper-design/shaders-react";

export default function MobileLockScreen() {
  return (
    <div className="fixed inset-0 bg-black z-50 block md:hidden overflow-hidden">
      {/* ASCII Animations Background */}
      <MatrixCowsayAnimation />

      {/* Dithering Sphere Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-full h-full">
          <Dithering
            style={{ height: "100%", width: "100%" }}
            colorBack="hsl(0, 0%, 0%)"
            colorFront="hsl(120, 100%, 50%)"
            shape="sphere"
            type="4x4"
            pxSize={3}
            offsetX={0}
            offsetY={0}
            scale={0.6}
            rotation={0}
            speed={0.1}
          />
        </div>
      </div>

      {/* CRT Scanline Effect */}
      <div className="pointer-events-none fixed inset-0 z-10 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15),rgba(0,0,0,0.15)_1px,transparent_1px,transparent_2px)]" />

      {/* CRT Vignette */}
      <div className="pointer-events-none fixed inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 flex items-center justify-center h-full p-6"
      >
        <div className="border-4 border-[#00ff41] bg-black/90 backdrop-blur-sm p-8 max-w-md w-full shadow-[0_0_40px_rgba(0,255,65,0.4)]">
          {/* Lock Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <LockKeyhole className="w-16 h-16 text-[#ff6b35]" strokeWidth={2.5} />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-[#ff6b35]/20 blur-xl"
              />
            </div>
          </motion.div>

          {/* Terminal Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[#ff6b35] text-sm mb-4 font-mono text-center"
          >
            [SYSTEM_ACCESS_DENIED]
          </motion.div>

          {/* Main Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-4xl font-bold text-[#00ff41] mb-4 text-center font-mono tracking-wider"
          >
            WORMHOLE
            <br />
            CLOSED
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="space-y-4"
          >
            <p className="text-[#00ff41]/80 text-center font-mono text-sm leading-relaxed">
              <span className="text-[#ff6b35]">&gt;</span> Information visible only on desktop devices
            </p>

            <div className="border-t-2 border-[#00ff41]/30 pt-4 mt-4">
              <p className="text-[#ffbe0b] text-center font-mono text-xs mb-4">
                [REDIRECT_AVAILABLE]
              </p>
            </div>

            {/* CTA Button */}
            <motion.a
              href="https://linkedin.com/in/vibhansh-gupta/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block"
            >
              <Button
                className="w-full bg-[#00ff41] hover:bg-[#00dd36] text-black font-bold font-mono border-2 border-[#00ff41] shadow-[0_0_20px_rgba(0,255,65,0.5)] hover:shadow-[0_0_30px_rgba(0,255,65,0.8)] transition-all"
                aria-label="Visit LinkedIn profile"
              >
                <span className="flex items-center justify-center gap-2">
                  Click here to redirect
                  <ExternalLink className="w-4 h-4" />
                </span>
              </Button>
            </motion.a>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-[#00ff41]/40 text-center font-mono text-xs mt-4"
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                &gt;_
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
