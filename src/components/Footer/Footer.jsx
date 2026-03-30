import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#0f172a] text-gray-400 py-16 px-6 md:px-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
        
        <div className="lg:col-span-2">
          <h2 className="text-white text-3xl font-bold mb-4">DigiTools</h2>
          <p className="max-w-xs leading-relaxed">
            Premium digital tools for creators, professionals, and businesses. 
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition">Features</a></li>
            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition">Templates</a></li>
            <li><a href="#" className="hover:text-white transition">Integrations</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Press</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">Community</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Social Links</h3>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition">
              <FaTwitter size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2026 Digitools. All rights reserved. Developed by Eyasin Arafat.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
    );
};

export default Footer;