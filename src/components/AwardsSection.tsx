"use client";

import React, { useState } from "react";

const awardsData = [
  { id: 1, name: "Clutch Top Staff Augmentation", src: "/awards.webp" },
  { id: 2, name: "Clutch Top Web Developers", src: "/awards.webp" },
  { id: 3, name: "Clutch Top Retail Developers", src: "/awards.webp" },
  { id: 4, name: "Clutch Top AR/VR", src: "/awards.webp" },
  { id: 5, name: "Clutch Top Software Developers", src: "/awards.webp" },
  { id: 6, name: "Most Reviewed App Dev", src: "/awards.webp" },
  { id: 7, name: "Clutch Top Gaming Devs", src: "/awards.webp" },
  { id: 12, name: "Top Digital Marketing Agency", src: "/awards.webp" },
  { id: 13, name: "Best SEO Campaigns", src: "/awards.webp" },
  { id: 14, name: "Excellence in Web Design", src: "/awards.webp" },
];

const certificationsData = [
  { id: 8, name: "ISO 9001:2015", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/ISO_9001_certified_logo.svg/1200px-ISO_9001_certified_logo.svg.png" },
  { id: 9, name: "ISO 27001", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/ISO_27001_Certified.png/800px-ISO_27001_Certified.png" },
  { id: 10, name: "Google Partner", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Google_Partner_Badge.svg/1024px-Google_Partner_Badge.svg.png" },
  { id: 11, name: "Meta Business Partner", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Google_Partner_Badge.svg/1024px-Google_Partner_Badge.svg.png" },
  { id: 15, name: "AWS Certified Partner", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png" },
];

export function AwardsSection() {
  const [activeTab, setActiveTab] = useState<"awards" | "certifications">("awards");

  const displayedItems = activeTab === "awards" ? awardsData : certificationsData;

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      
      <div className="w-full px-8 md:px-16 lg:px-24 mx-auto relative z-10">
        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-8">
            Awards and Certifications
          </h2>
          
          {/* Tabs */}
          <div className="inline-flex bg-card border border-border/50 rounded-full p-1 shadow-sm mb-12">
            <button
              onClick={() => setActiveTab("awards")}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                activeTab === "awards" 
                  ? "bg-primary text-white shadow-md scale-105" 
                  : "text-foreground hover:bg-white/10"
              }`}
            >
              Awards
            </button>
            <button
              onClick={() => setActiveTab("certifications")}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                activeTab === "certifications" 
                  ? "bg-primary text-white shadow-md scale-105" 
                  : "text-foreground hover:bg-white/10"
              }`}
            >
              Certifications
            </button>
          </div>
        </div>

        {/* Dynamic Grid with dashed borders */}
        <div 
          key={activeTab} // Forces re-render animation when tab changes
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0 border-t border-l border-primary/20 dark:border-accent/20 border-dashed rounded-lg overflow-hidden bg-card/10 backdrop-blur-sm animate-[fadeIn_0.5s_ease-out]"
        >
          {displayedItems.map((item) => (
            <div 
              key={item.id} 
              className="p-8 flex items-center justify-center border-r border-b border-primary/20 dark:border-accent/20 border-dashed hover:bg-primary/5 dark:hover:bg-accent/5 transition-colors duration-300 group cursor-pointer h-48 md:h-56"
            >
              <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110 flex items-center justify-center">
                {/* Fallback styling for images to look like badges */}
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center p-4 shadow-lg border-2 border-border/10">
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-full object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if(parent) {
                        parent.innerHTML = `<span class="text-xs font-bold text-center text-primary whitespace-normal">${item.name}</span>`;
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
          {/* Fill empty grid cells depending on the number of items for perfect aesthetics */}
          {Array.from({ length: Math.max(0, 5 - (displayedItems.length % 5 === 0 ? 5 : displayedItems.length % 5)) }).map((_, i) => (
            <div key={`empty-${i}`} className="hidden lg:block border-r border-b border-primary/20 dark:border-accent/20 border-dashed"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
