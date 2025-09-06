import React from 'react'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import levenLogo from '../images/logo/Levenn logo.png'

const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 bg-white p-1">
                <img src={levenLogo} alt="Levenn Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold group-hover:text-primary-400 transition-colors duration-300">Levenn</span>
            </div>
            <p className="text-secondary-300 leading-relaxed">
              Empowering communities across Tanzania, East Africa, and Africa with innovative 
              technologies in energy, security, and agriculture.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-400 hover:text-white hover:bg-primary-500 transition-all duration-300 transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-400 hover:text-white hover:bg-primary-500 transition-all duration-300 transform hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-400 hover:text-white hover:bg-primary-500 transition-all duration-300 transform hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-400 hover:text-white hover:bg-primary-500 transition-all duration-300 transform hover:scale-110">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('#hero')} 
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#about')} 
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#products')} 
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  Products & Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#team')} 
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#contact')} 
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Our Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Solutions</h3>
            <ul className="space-y-2">
              <li className="text-secondary-300">Levpawa (Clean Energy)</li>
              <li className="text-secondary-300">LevSTEM (Education)</li>
              <li className="text-secondary-300">Smart Agriculture</li>
              <li className="text-secondary-300">AI Security Systems</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary-400" />
                <span className="text-secondary-300 text-sm">
                  Arusha, Tanzania
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-400" />
                <span className="text-secondary-300 text-sm">
                levenntech@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-400" />
                <span className="text-secondary-300 text-sm">
                  +255 693608730
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-400 text-sm">
              © 2025 Levenn. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer