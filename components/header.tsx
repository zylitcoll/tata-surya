"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RocketIcon, MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/60 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <RocketIcon className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                SolarKids Explorer
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
              Home
            </Link>
            <Link href="/planets" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
              Planets
            </Link>
            <Link href="/quizzes" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
              Fun Quizzes
            </Link>
            <Link href="/glossary" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
              Space Glossary
            </Link>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Exploring
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/40"
          >
            <div className="px-4 pt-2 pb-4 space-y-3">
              <Link 
                href="/" 
                className="block py-2 px-4 rounded-md hover:bg-primary/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/planets" 
                className="block py-2 px-4 rounded-md hover:bg-primary/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Planets
              </Link>
              <Link 
                href="/quizzes" 
                className="block py-2 px-4 rounded-md hover:bg-primary/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Fun Quizzes
              </Link>
              <Link 
                href="/glossary" 
                className="block py-2 px-4 rounded-md hover:bg-primary/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Space Glossary
              </Link>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Exploring
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;