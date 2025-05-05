"use client";

import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, useGLTF } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { ArrowLeft, Info, Rocket, Cloud, Ruler } from 'lucide-react';
import Link from 'next/link';
import { planetsData } from '@/lib/planets-data';

function PlanetModel({ modelPath, scale = 2.5 }: { modelPath: string, scale?: number }) {
  const { scene } = useGLTF(modelPath);
  
  return (
    <primitive object={scene} scale={scale} />
  );
}

export default function PlanetPage() {
  const { id } = useParams();
  const [planet, setPlanet] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const found = planetsData.find(p => p.id === id);
    if (found) {
      setPlanet(found);
    }
    setLoading(false);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!planet) {
    return notFound();
  }
  
  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <Link href="/">
            <Button variant="ghost" className="group flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Solar System
            </Button>
          </Link>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-black/20 border border-white/10"
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <directionalLight position={[0, 0, 5]} intensity={1} />
              <PlanetModel modelPath={planet.model} scale={planet.modelScale || 2.5} />
              <OrbitControls enableZoom={true} />
              <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
            </Canvas>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className={`text-4xl font-bold mb-2 planet-name ${planet.gradient}`}>
              {planet.name}
            </h1>
            <p className="text-lg text-gray-300 mb-6 font-nunito">
              {planet.description}
            </p>
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="overview" className="flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="facts" className="flex items-center gap-2">
                  <Ruler className="h-4 w-4" />
                  Key Facts
                </TabsTrigger>
                <TabsTrigger value="exploration" className="flex items-center gap-2">
                  <Rocket className="h-4 w-4" />
                  Exploration
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-4">
                <div className="bg-card/60 backdrop-blur-md border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3 font-orbitron">About {planet.name}</h3>
                  <p className="text-gray-300 font-nunito">{planet.overview}</p>
                </div>
                
                <div className="bg-card/60 backdrop-blur-md border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3 font-orbitron">Atmosphere</h3>
                  <div className="flex items-start gap-3">
                    <Cloud className="h-6 w-6 text-primary mt-1" />
                    <p className="text-gray-300 font-nunito">{planet.atmosphere}</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="facts" className="space-y-4">
                <div className="bg-card/60 backdrop-blur-md border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3 font-orbitron">Quick Facts</h3>
                  <ul className="space-y-3 font-nunito">
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-primary min-w-[120px]">Diameter:</span>
                      <span className="text-gray-300">{planet.facts.diameter}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-primary min-w-[120px]">Day Length:</span>
                      <span className="text-gray-300">{planet.facts.day}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-primary min-w-[120px]">Year Length:</span>
                      <span className="text-gray-300">{planet.facts.year}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-primary min-w-[120px]">Moons:</span>
                      <span className="text-gray-300">{planet.facts.moons}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-primary min-w-[120px]">Distance from Sun:</span>
                      <span className="text-gray-300">{planet.facts.distanceFromSun}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-primary min-w-[120px]">Temperature:</span>
                      <span className="text-gray-300">{planet.facts.temperature}</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card/60 backdrop-blur-md border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3 font-orbitron">Fun Facts</h3>
                  <ul className="space-y-3 font-nunito list-disc list-inside text-gray-300">
                    {planet.funFacts.map((fact: string, index: number) => (
                      <li key={index}>{fact}</li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="exploration" className="space-y-4">
                <div className="bg-card/60 backdrop-blur-md border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3 font-orbitron">Space Missions</h3>
                  <p className="text-gray-300 font-nunito mb-4">{planet.exploration.overview}</p>
                  
                  <div className="space-y-4">
                    {planet.exploration.missions.map((mission: any, index: number) => (
                      <div key={index} className="border-l-2 border-primary pl-4">
                        <h4 className="font-bold text-white">{mission.name} ({mission.year})</h4>
                        <p className="text-gray-300 text-sm">{mission.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  );
}