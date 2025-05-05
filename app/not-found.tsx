"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 -z-10">
        <Canvas>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        </Canvas>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl px-4 z-10"
      >
        <h1 className="text-6xl font-bold font-orbitron mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-6 font-orbitron">
          Oops! Looks like this planet doesn't exist
        </h2>
        <p className="text-lg text-gray-300 mb-8 font-nunito">
          The planet you're looking for might have drifted into another galaxy. 
          Let's go back to our solar system!
        </p>
        <Link href="/">
          <Button className="interactive-button text-lg px-8 py-6">
            Return Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}