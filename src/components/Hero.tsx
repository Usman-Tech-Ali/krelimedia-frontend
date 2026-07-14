"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: (
      <>
        Data-Driven <span className="text-primary">Marketing Solutions</span>: Scaling Your Brand for Tomorrow
      </>
    ),
    description:
      "We overcome challenges and deliver innovation to serve clients and communities with advanced AI & ML Capabilities.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
    cta: "Let's Talk",
  },
  {
    id: 2,
    title: (
      <>
        ROI-Focused <span className="text-primary">Meta & Google</span> Ads Campaigns
      </>
    ),
    description:
      "Maximize your growth with data-backed Meta and Google Ads strategies tailored for your specific business goals.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    cta: "Discover More",
  },
  {
    id: 3,
    title: (
      <>
        High-Impact <span className="text-primary">Video Production</span> & Branding
      </>
    ),
    description:
      "Engage your audience with stunning visuals and compelling storytelling that elevates your brand identity.",
    image:
      "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=2000&auto=format&fit=crop",
    cta: "View Portfolio",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-background">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            {/* Soft gradient from left (background color) to right (transparent) so image is visible */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
            {/* Optional secondary gradient to darken slightly from the bottom if needed, or left as is */}
          </div>

          {/* Content */}
          <div className="relative h-full w-full px-8 md:px-16 lg:px-24 flex items-center">
            <div className="max-w-2xl mt-16 md:mt-0">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed"
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-10"
              >
                <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-primary rounded-md overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
                  <span className="relative z-10 flex items-center gap-2">
                    {slides[currentSlide].cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Carousel Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-20">
        <div className="w-full px-8 md:px-16 lg:px-24 flex items-center gap-4">
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-12 h-1.5 rounded-full transition-all duration-300 ${currentSlide === index
                    ? "bg-primary w-16"
                    : "bg-foreground/20 hover:bg-foreground/40"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="hidden md:flex gap-2 ml-auto">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 text-foreground hover:bg-primary hover:text-white transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 text-foreground hover:bg-primary hover:text-white transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
