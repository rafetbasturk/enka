"use client";

import { motion } from "framer-motion";

export default function BackgroundVisuals() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Mesh Gradients */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px]"
      />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
