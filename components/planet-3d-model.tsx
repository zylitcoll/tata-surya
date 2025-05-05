"use client";

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stars, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function FallbackSphere() {
  return (
    <Sphere args={[1, 32, 32]}>
      <meshStandardMaterial color="#4a9eff" />
    </Sphere>
  );
}

function PlanetModel({ modelPath, autoRotate = true, scale = 2.5 }: { modelPath: string, autoRotate?: boolean, scale?: number }) {
  const planetRef = useRef<any>();
  const [modelError, setModelError] = useState(false);
  
  let model;
  try {
    model = useGLTF(modelPath);
  } catch (error) {
    if (!modelError) setModelError(true);
  }
  
  useFrame(() => {
    if (autoRotate && planetRef.current) {
      planetRef.current.rotation.y += 0.002;
    }
  });
  
  if (modelError) {
    return (
      <group ref={planetRef} scale={scale}>
        <FallbackSphere />
      </group>
    );
  }
  
  return (
    <primitive 
      ref={planetRef}
      object={model?.scene} 
      scale={scale} 
    />
  );
}

interface Planet3DViewerProps {
  modelPath: string;
  scale?: number;
  autoRotate?: boolean;
  showControls?: boolean;
}

export function Planet3DViewer({ 
  modelPath, 
  scale = 2.5, 
  autoRotate = true,
  showControls = true
}: Planet3DViewerProps) {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative w-full h-full min-h-[400px]">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full"
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <directionalLight position={[0, 0, 5]} intensity={1} />
          <PlanetModel modelPath={modelPath} autoRotate={autoRotate} scale={scale} />
          {showControls && <OrbitControls enableZoom={true} />}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        </Canvas>
      </motion.div>
    </div>
  );
}