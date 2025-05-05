"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Search, Moon, Star, Sun, Atom } from 'lucide-react';
import Link from 'next/link';

const glossaryItems = [
  {
    term: 'Asteroid',
    definition: 'A small rocky body orbiting the Sun. Large numbers of these are found between the orbits of Mars and Jupiter.',
    category: 'Objects'
  },
  {
    term: 'Astronomy',
    definition: 'The scientific study of celestial objects (such as stars, planets, comets, and galaxies) and phenomena that originate outside the Earth\'s atmosphere.',
    category: 'Science'
  },
  {
    term: 'Atmosphere',
    definition: 'The layer of gases surrounding a planet or other celestial body.',
    category: 'Planet Features'
  },
  {
    term: 'Black Hole',
    definition: 'A region of space having a gravitational field so intense that no matter or radiation can escape.',
    category: 'Objects'
  },
  {
    term: 'Comet',
    definition: 'A celestial object consisting of a nucleus of ice and dust and, when near the Sun, a "tail" of gas and dust particles pointing away from the Sun.',
    category: 'Objects'
  },
  {
    term: 'Constellation',
    definition: 'A group of stars forming a recognizable pattern that is traditionally named after its apparent form or identified with a mythological figure.',
    category: 'Stars'
  },
  {
    term: 'Crater',
    definition: 'A bowl-shaped depression formed by the impact of a meteorite or other object.',
    category: 'Planet Features'
  },
  {
    term: 'Dwarf Planet',
    definition: 'A celestial body that orbits the Sun and has enough mass to assume a nearly round shape, but has not cleared the neighborhood around its orbit.',
    category: 'Objects'
  },
  {
    term: 'Eclipse',
    definition: 'An event where one celestial body moves into the shadow of another celestial body. Solar eclipses occur when the Moon blocks the Sun, and lunar eclipses occur when the Earth blocks the Sun\'s light from reaching the Moon.',
    category: 'Events'
  },
  {
    term: 'Galaxy',
    definition: 'A huge collection of gas, dust, and billions of stars and their solar systems, held together by gravity.',
    category: 'Objects'
  },
  {
    term: 'Gravity',
    definition: 'The force that attracts objects toward one another. The more mass an object has, the stronger its gravitational pull.',
    category: 'Science'
  },
  {
    term: 'Light Year',
    definition: 'The distance light travels in one year, about 9.5 trillion kilometers (5.9 trillion miles).',
    category: 'Science'
  },
  {
    term: 'Meteor',
    definition: 'A small body of matter from outer space that enters the earth\'s atmosphere, appearing as a streak of light. Also called a "shooting star."',
    category: 'Objects'
  },
  {
    term: 'Moon',
    definition: 'A natural satellite that orbits a planet or other celestial body.',
    category: 'Objects'
  },
  {
    term: 'Nebula',
    definition: 'A cloud of gas and dust in outer space, visible in the night sky either as a hazy bright patch or as a dark silhouette against other luminous matter.',
    category: 'Objects'
  },
  {
    term: 'Orbit',
    definition: 'The curved path of an object around a point in space. Planets orbit the Sun, and moons orbit planets.',
    category: 'Science'
  },
  {
    term: 'Planet',
    definition: 'A celestial body that orbits a star, is rounded by its own gravity, and has cleared the neighborhood around its orbit.',
    category: 'Objects'
  },
  {
    term: 'Satellite',
    definition: 'An object that orbits around a larger object. Moons are natural satellites, but humans have also put artificial satellites into orbit around the Earth.',
    category: 'Objects'
  },
  {
    term: 'Solar System',
    definition: 'Our Sun and everything that orbits around it, including planets, moons, asteroids, comets, and other objects.',
    category: 'Objects'
  },
  {
    term: 'Star',
    definition: 'A celestial body that generates light and heat through nuclear reactions, primarily the fusion of hydrogen into helium.',
    category: 'Stars'
  }
];

const categories = [
  { name: 'All', icon: <Atom className="h-4 w-4" /> },
  { name: 'Objects', icon: <Star className="h-4 w-4" /> },
  { name: 'Science', icon: <Atom className="h-4 w-4" /> },
  { name: 'Planet Features', icon: <Moon className="h-4 w-4" /> },
  { name: 'Stars', icon: <Sun className="h-4 w-4" /> },
  { name: 'Events', icon: <Star className="h-4 w-4" /> }
];

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredItems = glossaryItems.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
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
          Space Glossary
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-300 max-w-2xl mx-auto mb-10 font-nunito"
        >
          Learn the meaning of space terms and become a space vocabulary expert!
        </motion.p>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search for a term..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-card/60 backdrop-blur-md border-white/10 pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            
            <div className="flex overflow-x-auto sm:overflow-visible gap-2 pb-2 sm:pb-0">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  className={
                    selectedCategory === category.name 
                      ? "interactive-button whitespace-nowrap" 
                      : "bg-white/5 border-white/20 hover:bg-white/10 whitespace-nowrap"
                  }
                  onClick={() => setSelectedCategory(category.name)}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </Button>
              ))}
            </div>
          </div>
          
          {filteredItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-10"
            >
              <p className="text-lg text-gray-300">No terms found. Try a different search.</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.term}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-card/60 backdrop-blur-md border border-white/10 hover:border-white/20 rounded-xl p-5 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold font-orbitron">{item.term}</h3>
                    <span className="text-xs text-primary bg-primary/20 px-2 py-1 rounded-full self-start">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-gray-300 font-nunito">{item.definition}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}