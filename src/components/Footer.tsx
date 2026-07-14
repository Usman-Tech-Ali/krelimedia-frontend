import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#0B0F19] text-white relative overflow-hidden pt-24 pb-12 border-t border-white/10">
      
      {/* Background glowing effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/20 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="w-full px-8 md:px-16 lg:px-24 relative z-10">
        
        {/* Top Section: CTA */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-20 border-b border-white/10 pb-16">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Ready to accelerate your <span className="text-primary">growth?</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Join industry leaders who trust us to build their digital future.
            </p>
          </div>
          <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-95 flex-shrink-0">
            <span className="relative z-10 flex items-center gap-2">
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="mb-6">
              <Link href="/" className="inline-block">
                <div className="relative w-40 h-12">
                  <Image
                    src="/new-removebg-preview.png"
                    alt="Krelimedia Logo"
                    fill
                    sizes="(max-width: 768px) 160px, 160px"
                    className="object-contain brightness-200 contrast-100"
                  />
                </div>
              </Link>
            </div>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              We create digital experiences that inspire and connect brands with their audiences on a deeper level.
            </p>
            
            {/* Socials */}
            <div className="flex items-center gap-4">
              {
                [
                  { Icon: FaWhatsapp, href: "https://wa.me/" },
                  { Icon: FaTwitter, href: "#" },
                  { Icon: FaLinkedin, href: "#" },
                  { Icon: FaInstagram, href: "#" },
                  { Icon: FaGithub, href: "#" },
                ].map(({ Icon, href }, i) => (
                  <a key={i} href={href} target={href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group">
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                ))
              }
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Newsroom</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Digital Strategy</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-semibold mb-6">Subscribe to our Newsletter</h4>
            <p className="text-gray-400 mb-6">
              Get the latest insights, news and tips delivered straight to your inbox.
            </p>
            <form className="relative flex items-center">
              <div className="absolute left-4 text-gray-400 pointer-events-none">
                <Mail className="w-5 h-5" />
              </div>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-32 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:bg-white/10 transition-all"
              />
              <button 
                type="button" 
                className="absolute right-2 px-6 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-gray-500 text-sm gap-4">
          <p>© {new Date().getFullYear()} Krelimedia. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
