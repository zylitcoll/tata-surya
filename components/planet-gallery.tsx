"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { planetsData } from '@/lib/planets-data';
import { InfoIcon } from 'lucide-react';

const PlanetGallery = () => {
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };
  
  return (
    <section id="planet-gallery" className="py-16">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold font-orbitron mb-4"
        >
          Our Solar System
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto font-nunito"
        >
          Click on any planet to explore its interactive 3D model and learn fascinating facts!
        </motion.p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {planetsData.map((planet) => (
          <motion.div
            key={planet.id}
            variants={item}
            className={`planet-card group`}
            onMouseEnter={() => setHoveredPlanet(planet.id)}
            onMouseLeave={() => setHoveredPlanet(null)}
          >
            <div className="relative h-64 overflow-hidden rounded-t-2xl">
              <Image
                src={planet.image}
                alt={planet.name}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
              <div className="absolute bottom-0 left-0 p-4 z-10">
                <h3 className={`planet-name ${planet.gradient}`}>
                  {planet.name}
                </h3>
                <p className="text-gray-300 font-nunito">{planet.shortDescription}</p>
              </div>
            </div>
            
            <div className="p-4 flex justify-between items-center">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <InfoIcon className="h-4 w-4 text-primary" />
                  <span className="text-sm text-gray-300">{planet.facts.diameter}</span>
                </div>
                <div className="flex items-center gap-2">
                  <InfoIcon className="h-4 w-4 text-primary" />
                  <span className="text-sm text-gray-300">{planet.facts.day}</span>
                </div>
              </div>
              
              <Link href={`/planet/${planet.id}`}>
                <Button className="interactive-button">
                  Explore
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PlanetGallery;