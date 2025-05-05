"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const StarBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="stars fixed inset-0 z-0"></div>
      <motion.div 
        className="fixed inset-0 z-0 bg-blue-500/5 rounded-full blur-3xl w-[500px] h-[500px] pointer-events-none"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 50,
          restDelta: 0.001
        }}
      />
    </>
  );
};

export default StarBackground;