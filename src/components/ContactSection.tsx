import React from "react";
import { ArrowRight, Info, ChevronDown } from "lucide-react";

export function ContactSection() {
  return (
    <section className="w-full flex flex-col lg:flex-row min-h-screen bg-background" id="contact">
      
      {/* LEFT SIDE: Visual with Avatars & Orbits */}
      <div className="relative w-full lg:w-5/12 bg-primary min-h-[500px] lg:min-h-screen overflow-hidden flex items-center">
        {/* Concentric Circles (Orbits) */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/20 rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/20 rounded-full pointer-events-none"></div>
        
        {/* Avatars scattered along the orbits */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full pointer-events-none">
          {/* Outer Orbit Avatars */}
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="User" className="absolute top-[10%] left-[60%] w-12 h-12 rounded-full border-2 border-white/40 shadow-lg" />
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="User" className="absolute bottom-[20%] left-[70%] w-10 h-10 rounded-full border-2 border-white/40 shadow-lg" />
          
          {/* Middle Orbit Avatars */}
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="User" className="absolute top-[25%] left-[35%] w-14 h-14 rounded-full border-2 border-white/40 shadow-lg" />
          <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop" alt="User" className="absolute bottom-[30%] left-[45%] w-12 h-12 rounded-full border-2 border-white/40 shadow-lg" />
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop" alt="User" className="absolute top-[65%] left-[75%] w-10 h-10 rounded-full border-2 border-white/40 shadow-lg" />
          
          {/* Inner Orbit Avatars */}
          <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop" alt="User" className="absolute top-[45%] left-[25%] w-16 h-16 rounded-full border-2 border-white/40 shadow-lg" />
          <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="User" className="absolute top-[80%] left-[30%] w-12 h-12 rounded-full border-2 border-white/40 shadow-lg" />
          
          {/* Additional Avatars */}
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" alt="User" className="absolute top-[15%] left-[45%] w-10 h-10 rounded-full border-2 border-white/40 shadow-lg" />
          <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop" alt="User" className="absolute bottom-[10%] left-[55%] w-14 h-14 rounded-full border-2 border-white/40 shadow-lg" />
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop" alt="User" className="absolute top-[55%] left-[65%] w-12 h-12 rounded-full border-2 border-white/40 shadow-lg" />
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" alt="User" className="absolute bottom-[45%] left-[85%] w-10 h-10 rounded-full border-2 border-white/40 shadow-lg" />
        </div>
      </div>

      {/* RIGHT SIDE: Form Container */}
      <div className="w-full lg:w-7/12 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-card/30">
        <div className="w-full max-w-2xl">
          
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              Have Questions? Let's <span className="text-primary">Talk.</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We have got the answers to your questions.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-8">
            
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-1">
                <input 
                  type="text" 
                  placeholder="Your name *" 
                  className="w-full bg-transparent border-b border-border/80 pb-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-1">
                <input 
                  type="email" 
                  placeholder="Your email *" 
                  className="w-full bg-transparent border-b border-border/80 pb-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <p className="text-xs text-muted-foreground pt-1">We recommend using your work email.</p>
              </div>
            </div>

            {/* Service Selection */}
            <div className="relative">
              <select className="w-full bg-transparent border-b border-border/80 pb-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                <option value="" disabled selected className="text-muted-foreground">Select the service you need *</option>
                <option value="design" className="bg-background">UI/UX Design</option>
                <option value="dev" className="bg-background">Web Development</option>
                <option value="marketing" className="bg-background">Digital Marketing</option>
              </select>
              <ChevronDown className="absolute right-2 top-0 w-5 h-5 text-muted-foreground pointer-events-none" />
            </div>

            {/* Phone Number */}
            <div className="flex items-end gap-4 border-b border-border/80 pb-2 focus-within:border-primary transition-colors">
              <div className="relative flex items-center gap-1 cursor-pointer">
                <span className="text-foreground text-sm font-medium">PK +92</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </div>
              <input 
                type="tel" 
                placeholder="(xxx) xxxxxxx*" 
                className="flex-1 bg-transparent border-none text-foreground placeholder:text-muted-foreground focus:outline-none px-2 py-1"
              />
            </div>

            {/* Project Description */}
            <div>
              <textarea 
                rows={4}
                placeholder="Please describe your project. *" 
                className="w-full bg-transparent border border-primary rounded-md p-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none relative"
              ></textarea>
            </div>

            {/* Budget */}
            <div className="relative">
              <select className="w-full bg-transparent border-b border-border/80 pb-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                <option value="" disabled selected className="text-muted-foreground">What is your budget?</option>
                <option value="small" className="bg-background">$5k - $10k</option>
                <option value="medium" className="bg-background">$10k - $25k</option>
                <option value="large" className="bg-background">$25k+</option>
              </select>
              <ChevronDown className="absolute right-2 top-0 w-5 h-5 text-muted-foreground pointer-events-none" />
            </div>

            {/* NDA Checkbox */}
            <div className="flex items-center gap-3">
              <input 
                type="checkbox" 
                id="nda" 
                className="w-5 h-5 border-border rounded text-primary focus:ring-primary bg-transparent cursor-pointer"
              />
              <label htmlFor="nda" className="text-foreground flex items-center gap-2 cursor-pointer select-none">
                Request NDA
                <Info className="w-4 h-4 text-muted-foreground" />
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="button" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors active:scale-95"
            >
              Book a Free Discovery Call
              <ArrowRight className="w-5 h-5" />
            </button>
            
          </form>
        </div>
      </div>
    </section>
  );
}
