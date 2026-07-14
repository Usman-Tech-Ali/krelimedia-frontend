import React from "react";
import {
  Megaphone,
  BrainCircuit,
  Video,
  PenTool,
  Search,
  Code,
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Meta & Google Ads",
    description: "Data-driven advertising campaigns that maximize ROI and scale your customer acquisition.",
    icon: Megaphone,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "AI & ML Solutions",
    description: "Integrate advanced artificial intelligence to automate processes and unlock predictive insights.",
    icon: BrainCircuit,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Video Production",
    description: "High-impact visual storytelling that captivates your audience and elevates your brand identity.",
    icon: Video,
    image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "UI/UX Design",
    description: "Stunning, user-centric interfaces designed to provide seamless and engaging digital experiences.",
    icon: PenTool,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "SEO & Content Strategy",
    description: "Dominate search rankings and build authority with strategic content tailored for your niche.",
    icon: Search,
    image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Custom Web Development",
    description: "Scalable, high-performance web applications built with cutting-edge modern frameworks.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full px-8 md:px-16 lg:px-24 mx-auto relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h4 className="text-primary dark:text-accent font-semibold tracking-widest uppercase mb-3 text-sm md:text-base">
              Our Services
            </h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight">
              Transform Your Business
            </h2>
          </div>
          <div>
            <button className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-accent hover:text-background transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 group">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_0_30px_var(--color-accent)] border-2 border-transparent hover:border-accent transition-all duration-500"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>

                {/* Dark Overlays for readability */}
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                {/* Content Container */}
                <div className="absolute inset-0 p-8 flex flex-col text-white">

                  {/* Title & Icon (Always visible, positioned at top) */}
                  <div className="flex flex-1 justify-between items-start transform transition-transform duration-500 group-hover:translate-x-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 drop-shadow-md max-w-[70%] leading-tight">
                      {service.title}
                    </h3>

                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg flex-shrink-0">
                      <Icon size={24} strokeWidth={2} className="text-white" />
                    </div>
                  </div>

                  {/* Hidden Description (Revealed on hover, slides up from bottom) */}
                  <div className="overflow-hidden mt-4">
                    <p className="text-white/90 leading-relaxed text-sm md:text-base transform translate-y-0 opacity-100 md:translate-y-[120%] md:opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 drop-shadow-md font-medium">
                      {service.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
