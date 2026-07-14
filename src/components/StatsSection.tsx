"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const logos = [
  { name: "Instagram", url: "/instagram.svg" },
  { name: "LinkedIn", url: "/linkedin.svg" },
  { name: "YouTube", url: "/youtube.svg" },
  { name: "Snapchat", url: "/snapchat.svg" },
  { name: "Twitter", url: "/twitter.svg" },
  { name: "Google Ads", url: "/google-ads.svg" },
  { name: "Indeed", url: "/indeed.svg" },
  { name: "Meta", url: "/meta.svg" },
  { name: "TikTok", url: "/tiktok.svg" },
  { name: "Spotify", url: "/spotify.svg" },
  { name: "WhatsApp", url: "/whatsapp.svg" },
];

export function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Stars Shine Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Star Layer 1 */}
        <div className="absolute inset-0 opacity-50 dark:opacity-80 animate-pulse"
             style={{
               backgroundImage: `
                 radial-gradient(3px 3px at 40px 60px, var(--color-primary), transparent),
                 radial-gradient(3px 3px at 120px 140px, var(--color-primary), transparent),
                 radial-gradient(4px 4px at 200px 50px, var(--color-primary), transparent),
                 radial-gradient(3px 3px at 280px 180px, var(--color-primary), transparent),
                 radial-gradient(2px 2px at 320px 80px, var(--color-primary), transparent),
                 radial-gradient(3px 3px at 380px 120px, var(--color-primary), transparent)
               `,
               backgroundRepeat: 'repeat',
               backgroundSize: '400px 400px',
               animationDuration: '2s'
             }}>
        </div>
        
        {/* Star Layer 2 */}
        <div className="absolute inset-0 opacity-60 dark:opacity-100 animate-pulse"
             style={{
               backgroundImage: `
                 radial-gradient(3px 3px at 20px 20px, var(--color-accent), transparent),
                 radial-gradient(2px 2px at 80px 180px, var(--color-accent), transparent),
                 radial-gradient(3px 3px at 180px 220px, var(--color-accent), transparent),
                 radial-gradient(3px 3px at 250px 60px, var(--color-accent), transparent),
                 radial-gradient(4px 4px at 340px 240px, var(--color-accent), transparent)
               `,
               backgroundRepeat: 'repeat',
               backgroundSize: '350px 350px',
               animationDuration: '1.5s',
               animationDelay: '0.5s'
             }}>
        </div>

        {/* Continuous Sweeping Shine Overlay */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/30 dark:via-accent/20 to-transparent animate-[shimmer_4s_infinite_ease-in-out]"></div>
      </div>

      <div className="w-full px-8 md:px-16 lg:px-24 mx-auto relative z-10">

        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            A Journey of <span className="text-primary">19 years</span> with <span className="text-primary">550+</span> partnerships
            <br className="hidden md:block" /> and <span className="text-primary">100+</span> technologies employed
          </h2>
        </div>

        {/* Stats Container */}
        <div
          ref={ref}
          className="bg-primary rounded-2xl shadow-[0_20px_50px_rgba(0,76,83,0.15)] overflow-hidden text-white border border-border/10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 p-2 md:p-4">

            {/* Stat 1 */}
            <div className="py-5 px-4 group rounded-xl hover:bg-white/10 transition-all duration-300 hover:shadow-inner hover:scale-[1.02] cursor-default flex flex-col items-center justify-center text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 transition-colors duration-300 text-white">
                {inView ? <CountUp end={95} duration={2.5} suffix="%" /> : "0%"}
              </div>
              <div className="text-sm md:text-base text-white/80 font-medium tracking-wide">Client Satisfaction Rate</div>
            </div>

            {/* Stat 2 */}
            <div className="py-5 px-4 group rounded-xl hover:bg-white/10 transition-all duration-300 hover:shadow-inner hover:scale-[1.02] cursor-default flex flex-col items-center justify-center text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 transition-colors duration-300 text-white">
                Zero
              </div>
              <div className="text-sm md:text-base text-white/80 font-medium tracking-wide">Detractors</div>
            </div>

            {/* Stat 3 */}
            <div className="py-5 px-4 group rounded-xl hover:bg-white/10 transition-all duration-300 hover:shadow-inner hover:scale-[1.02] cursor-default flex flex-col items-center justify-center text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 transition-colors duration-300 text-white">
                {inView ? <CountUp end={81.8} decimals={1} duration={2.5} /> : "0.0"}
              </div>
              <div className="text-sm md:text-base text-white/80 font-medium tracking-wide">Net Promoter Score</div>
            </div>

            {/* Stat 4 */}
            <div className="py-5 px-4 group rounded-xl hover:bg-white/10 transition-all duration-300 hover:shadow-inner hover:scale-[1.02] cursor-default flex flex-col items-center justify-center text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 transition-colors duration-300 text-white">
                Avg. {inView ? <CountUp end={5} duration={2.5} /> : "0"} Years
              </div>
              <div className="text-sm md:text-base text-white/80 font-medium tracking-wide">Client Relationship</div>
            </div>

          </div>
        </div>
      </div>

      {/* Infinite Scroll Logos */}
      <div className="mt-24 overflow-hidden relative border-y border-border/40 py-10 bg-background flex flex-col gap-8">
        {/* Gradient fades for smooth edges */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        {/* Row 1: Scrolling Left */}
        <div className="whitespace-nowrap">
          <div className="inline-block animate-[scroll_40s_linear_infinite]">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <span
                key={index}
                className="mx-8 md:mx-14 inline-flex items-center justify-center cursor-default align-middle group"
              >
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110" 
                />
              </span>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="whitespace-nowrap">
          <div className="inline-block animate-[scroll_40s_linear_infinite_reverse]">
            {[...logos, ...logos, ...logos].reverse().map((logo, index) => (
              <span
                key={index}
                className="mx-8 md:mx-14 inline-flex items-center justify-center cursor-default align-middle group"
              >
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110" 
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
