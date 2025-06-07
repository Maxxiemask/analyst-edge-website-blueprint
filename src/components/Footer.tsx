
import React from "react";
import { Github, Twitter, Linkedin, Youtube, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">The Analyst's Journey</h2>
            <p className="text-slate-300 text-sm mb-6">
              Learn data analysis from someone doing it in real time. Affordable, practical resources that grow with you.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://dlahtalk.gumroad.com/l/yclpyi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Free Resources
                </a>
              </li>
              <li>
                <a 
                  href="https://preview--analyst-edge-website-blueprint.lovable.app/#about" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="mailto:analystsjourney@gmail.com"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Learning Journey */}
          <div className="lg:col-span-1">
            <h3 className="font-medium mb-4">Learning Journey</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-slate-300">My Progress</span>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Study Notes
                </a>
              </li>
              <li>
                <a 
                  href="https://preview--analyst-edge-website-blueprint.lovable.app/#featured" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-1">
            <h3 className="font-medium mb-4">Follow the Journey</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/analystsjourney" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.youtube.com/@analystsjourney" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="mailto:analystsjourney@gmail.com"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>© 2025 The Analyst's Journey. All rights reserved.</p>
            <p className="text-xs mt-1">
              This site is based on personal learning experiences and is not affiliated with or endorsed by any course provider or employer.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
