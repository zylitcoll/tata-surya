import { RocketIcon, Heart } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <RocketIcon className="h-6 w-6 text-primary mr-2" />
              <span className="text-lg font-bold font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                SolarKids Explorer
              </span>
            </Link>
            <p className="text-gray-400 font-nunito mb-4">
              An interactive 3D solar system magazine designed for elementary school children.
              Explore planets, learn fascinating facts, and have fun with space!
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-orbitron">Explore</h3>
            <ul className="space-y-2 font-nunito">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/planets" className="text-gray-400 hover:text-white transition-colors">
                  Planets
                </Link>
              </li>
              <li>
                <Link href="/quizzes" className="text-gray-400 hover:text-white transition-colors">
                  Fun Quizzes
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="text-gray-400 hover:text-white transition-colors">
                  Space Glossary
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-orbitron">Resources</h3>
            <ul className="space-y-2 font-nunito">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-nunito">
            &copy; {new Date().getFullYear()} SolarKids Explorer. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm font-nunito flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for young space explorers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;