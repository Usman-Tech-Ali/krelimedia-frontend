"use client";

import React, { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Global FinTech Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    techStack: ["React", "Node.js", "PostgreSQL"],
    description: "A secure, scalable application handling thousands of daily transactions.",
  },
  {
    id: 2,
    title: "Eco-Brand E-Commerce",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    techStack: ["Shopify", "Meta Ads", "Analytics"],
    description: "End-to-end ecommerce scaling resulting in 300% YoY revenue growth.",
  },
  {
    id: 3,
    title: "HealthTech Mobile App",
    category: "App Design",
    image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=1000&auto=format&fit=crop",
    techStack: ["React Native", "Firebase", "HealthKit"],
    description: "A wellness tracking app with real-time data sync and personalized insights.",
  },
  {
    id: 4,
    title: "SaaS Dashboard Analytics",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop",
    techStack: ["Vue.js", "D3.js", "AWS"],
    description: "Complex data visualization interface for enterprise business intelligence.",
  },
  {
    id: 5,
    title: "AI Logistics Software",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    techStack: ["Python", "TensorFlow", "FastAPI"],
    description: "Predictive routing algorithms saving logistics companies 20% in fuel costs.",
  },
  {
    id: 6,
    title: "Real Estate Portal",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    techStack: ["Next.js", "Prisma", "Tailwind"],
    description: "High-performance property listing platform with advanced map integrations.",
  },
];

export function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollCenter = scrollRef.current.scrollLeft + scrollRef.current.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;
    
    Array.from(scrollRef.current.children).forEach((child, index) => {
      const el = child as HTMLElement;
      const childCenter = el.offsetLeft + el.clientWidth / 2;
      const distance = Math.abs(scrollCenter - childCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    
    setActiveIndex(closestIndex);
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden border-t border-border/40">
      <div className="w-full px-8 md:px-16 lg:px-24 mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h4 className="text-primary dark:text-primary font-semibold tracking-widest uppercase mb-3 text-sm md:text-base">
              Our Portfolio
            </h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight">
              Featured Projects
            </h2>
          </div>
          <div>
            <button className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-accent hover:text-background transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 group">
              View All Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3-Column Creative Grid / Mobile Horizontal Scroll */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-8 -mx-8 px-8 md:mx-0 md:px-0 md:pb-0 scrollbar-hide"
        >
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex-none w-[85vw] md:w-auto snap-center group relative rounded-[2rem] overflow-hidden cursor-pointer h-[400px] shadow-sm hover:shadow-[0_0_30px_var(--color-accent)] focus:shadow-[0_0_30px_var(--color-accent)] border-2 border-transparent hover:border-accent focus:border-accent transition-all duration-500`}
              tabIndex={0}
            >
              {/* Image Container with Zoom */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              {/* Default Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

              {/* Hover Solid Brand Overlay */}
              <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 ease-out backdrop-blur-sm" />

              {/* Content Layout */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end overflow-hidden text-white">
                
                {/* Default View (Always visible at bottom, fades out on hover) */}
                <div className="transform transition-all duration-500 group-hover:-translate-y-8 group-hover:opacity-0 group-focus:-translate-y-8 group-focus:opacity-0 absolute bottom-8 left-8 right-8">
                  <p className="text-white/80 font-medium text-sm tracking-widest uppercase mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold leading-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Hover View (Hidden at bottom, slides up to center on hover) */}
                <div className="absolute inset-0 p-8 flex flex-col justify-center transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 transition-all duration-500 ease-out">
                  <p className="text-accent font-semibold text-xs tracking-widest uppercase mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-extrabold leading-tight mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Explore Project Button */}
                  <div className="inline-flex items-center gap-3 text-white font-medium hover:text-accent transition-colors w-max">
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <span>Explore Project</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex md:hidden justify-center gap-2 mt-2">
          {projects.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-accent w-6' : 'bg-accent/30 w-2'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
