import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CMO, TechFlow",
    content: "Working with them completely transformed our digital presence. Our lead generation increased by 150% in just three months. Truly an exceptional team.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, GrowthStack",
    content: "The level of strategic insight and technical execution they bring to the table is unmatched. They aren't just an agency, they are growth partners.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "VP Marketing, NovaCorp",
    content: "Their data-driven approach to our ad campaigns dropped our CPA by 40% while doubling our volume. Their work speaks for itself.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "David Kim",
    role: "CEO, Nexa Retail",
    content: "From the initial UI/UX redesign to the final deployment, every step was handled with incredible professionalism and creativity.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Jessica Walsh",
    role: "Director of Brand, EcoLife",
    content: "The video production quality was cinematic. They captured our brand's voice perfectly and delivered a campaign that went viral in our niche.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden border-t border-border/40">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full px-8 md:px-16 lg:px-24 mx-auto relative z-10 mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <h4 className="text-primary dark:text-primary font-semibold tracking-widest uppercase mb-3 text-sm md:text-base">
            Testimonials
          </h4>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight">
            What Our Clients Say
          </h2>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Container */}
      <div className="relative flex overflow-x-hidden w-full group py-8">

        {/* Left/Right Fading Gradients for smooth entrance/exit */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none hidden md:block"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none hidden md:block"></div>

        {/* Marquee Track */}
        <div className="flex animate-[scroll_40s_linear_infinite] group-hover:![animation-play-state:paused] w-max">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="mx-4 md:mx-6 w-[85vw] md:w-[400px] flex-none bg-card border border-border/50 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-primary/50 relative overflow-hidden"
            >
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              <p className="text-foreground/80 leading-relaxed text-lg mb-8 font-medium">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-primary dark:text-accent font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
