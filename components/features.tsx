"use client";

import { motion } from 'framer-motion';
import { Rocket, BookOpen, MousePointer, Zap } from 'lucide-react';

const features = [
  {
    icon: <MousePointer className="h-10 w-10 text-primary" />,
    title: "Interactive 3D Models",
    description: "Explore detailed 3D models of all planets in our solar system. Rotate, zoom, and interact with each planet to discover its unique features."
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Educational Content",
    description: "Learn fascinating facts about each planet with content designed specifically for elementary school students. Easy to understand explanations make learning fun!"
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Fun Space Quizzes",
    description: "Test your knowledge with interactive quizzes about our solar system. Earn badges and track your progress as you become a space expert!"
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "Space Missions",
    description: "Discover famous space missions that have explored our solar system. Learn about the spacecraft and their amazing discoveries."
  }
];

const Features = () => {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
          Explore and Learn
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto font-nunito">
          Our interactive solar system magazine offers endless ways to discover space!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-card/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 font-orbitron">{feature.title}</h3>
            <p className="text-gray-300 font-nunito">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;