import React from "react";

const Linkedin = ({ size = 24, fill = "none" }: { size?: number, fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = ({ size = 24, fill = "none" }: { size?: number, fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Github = ({ size = 24, fill = "none" }: { size?: number, fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const team = [
  {
    id: 1,
    name: "Alexander Reed",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    id: 2,
    name: "Sophia Martinez",
    role: "Chief Strategy Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    id: 3,
    name: "Marcus Chen",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    socials: { linkedin: "#", github: "#" }
  },
  {
    id: 4,
    name: "Elena Rostova",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    socials: { linkedin: "#", twitter: "#" }
  }
];

export function TeamSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full px-8 md:px-16 lg:px-24 mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h4 className="text-primary dark:text-accent font-semibold tracking-widest uppercase mb-3 text-sm md:text-base">
              Our Leadership
            </h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight">
              The Minds Behind the Magic
            </h2>
          </div>
          <div className="max-w-md text-muted-foreground text-lg">
            A diverse group of visionaries, engineers, and creatives working relentlessly to propel your brand forward.
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.id} className="group relative flex flex-col">
              
              {/* Image Container with stunning hover effects */}
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden mb-6 bg-card border border-border/50">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out group-hover:scale-110 filter grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
                  style={{ backgroundImage: `url(${member.image})` }}
                ></div>
                
                {/* Gradient Overlay for bottom text readability, slides up on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Social Icons floating container - slides in from bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center gap-4 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent hover:text-background transition-colors duration-300">
                      <Linkedin size={18} fill="currentColor" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent hover:text-background transition-colors duration-300">
                      <Twitter size={18} fill="currentColor" />
                    </a>
                  )}
                  {member.socials.github && (
                    <a href={member.socials.github} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent hover:text-background transition-colors duration-300">
                      <Github size={18} fill="currentColor" />
                    </a>
                  )}
                </div>
              </div>

              {/* Text Information below image */}
              <div className="text-center transform transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                <p className="text-muted-foreground font-medium uppercase tracking-wide text-sm">
                  {member.role}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
