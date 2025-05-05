"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Planet3DViewer } from '@/components/planet-3d-model';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { planetsData } from '@/lib/planets-data';
import Link from 'next/link';
import { ArrowLeft, Info, Zap } from 'lucide-react';

export default function PlanetsPage() {
  const [selectedPlanet, setSelectedPlanet] = useState(planetsData[0]);

  return (
    <div className="min-h-screen w-full py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <Link href="/">
            <Button variant="ghost" className="group flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold font-orbitron mb-6 text-center"
        >
          Explore Our Solar System
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-300 max-w-2xl mx-auto mb-10 font-nunito"
        >
          Select a planet below to explore its 3D model and learn fascinating facts!
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
          <div className="lg:col-span-3 h-[400px] sm:h-[500px] rounded-2xl overflow-hidden bg-black/20 border border-white/10">
            <Planet3DViewer 
              modelPath={selectedPlanet.model} 
              scale={selectedPlanet.modelScale || 2.5}
            />
          </div>
          
          <div className="lg:col-span-2">
            <h2 className={`text-3xl font-bold mb-3 planet-name ${selectedPlanet.gradient}`}>
              {selectedPlanet.name}
            </h2>
            
            <p className="text-gray-300 mb-6 font-nunito">
              {selectedPlanet.description}
            </p>
            
            <Tabs defaultValue="facts" className="w-full">
              <TabsList className="grid grid-cols-2 w-full mb-4">
                <TabsTrigger value="facts" className="flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Quick Facts
                </TabsTrigger>
                <TabsTrigger value="funFacts" className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Fun Facts
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="facts">
                <div className="bg-card/60 backdrop-blur-md border border-white/10 rounded-xl p-5 h-[300px] overflow-y-auto">
                  <ul className="space-y-3 font-nunito">
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-primary min-w-[120px]">Diameter:</span>
                      <span className="text-gray-300">{selectedPlanet.facts.diameter}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-primary min-w-[120px]">Day Length:</span>
                      <span className="text-gray-300">{selectedPlanet.facts.day}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-primary min-w-[120px]">Year Length:</span>
                      <span className="text-gray-300">{selectedPlanet.facts.year}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-primary min-w-[120px]">Moons:</span>
                      <span className="text-gray-300">{selectedPlanet.facts.moons}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-primary min-w-[120px]">Distance from Sun:</span>
                      <span className="text-gray-300">{selectedPlanet.facts.distanceFromSun}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-primary min-w-[120px]">Temperature:</span>
                      <span className="text-gray-300">{selectedPlanet.facts.temperature}</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="funFacts">
                <div className="bg-card/60 backdrop-blur-md border border-white/10 rounded-xl p-5 h-[300px] overflow-y-auto">
                  <ul className="space-y-3 font-nunito list-disc list-inside text-gray-300">
                    {selectedPlanet.funFacts.map((fact, index) => (
                      <li key={index}>{fact}</li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-4">
              <Link href={`/planet/${selectedPlanet.id}`}>
                <Button className="w-full interactive-button">
                  Explore {selectedPlanet.name} in Detail
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-6 font-orbitron text-center">Select a Planet</h3>
          
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-4">
            {planetsData.map((planet) => (
              <motion.button
                key={planet.id}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPlanet(planet)}
                className={`p-3 rounded-xl border transition-all duration-300 ${
                  selectedPlanet.id === planet.id 
                    ? 'border-primary bg-primary/20' 
                    : 'border-white/10 bg-white/5 hover:bg-white/10'
                }`}
              >
                <p className={`text-sm font-medium planet-name ${planet.gradient}`}>
                  {planet.name}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}