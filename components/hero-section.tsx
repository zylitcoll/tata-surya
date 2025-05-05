"use client";

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Sphere } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

function Earth() {
  return (
    <Sphere args={[1, 32, 32]} scale={2.5}>
      <meshStandardMaterial 
        color="#4a9eff"
        roughness={0.7}
        metalness={0.3}
      />
    </Sphere>
  );
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  Explore Our
                </span>
                <br />
                <span className="text-white">Solar System</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 font-nunito max-w-xl mx-auto lg:mx-0">
                Embark on an exciting journey through space and discover the wonders 
                of our solar system with interactive 3D models and fun facts!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/planets">
                  <Button className="interactive-button text-lg px-8 py-6 w-full sm:w-auto">
                    Start Exploring
                  </Button>
                </Link>
                <Link href="#planet-gallery">
                  <Button variant="outline" className="text-lg px-8 py-6 bg-white/5 border-white/20 hover:bg-white/10 transition-colors w-full sm:w-auto">
                    View Planets
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="h-[400px] lg:h-[500px] relative"
            >
              <Canvas className="!absolute inset-0">
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <directionalLight position={[0, 0, 5]} intensity={1} />
                <Earth />
                <OrbitControls
                  enableZoom={false}
                  autoRotate
                  autoRotateSpeed={0.5}
                />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
              </Canvas>
            </motion.div>
          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <Link href="#planet-gallery">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full animate-bounce bg-white/10 hover:bg-white/20"
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}