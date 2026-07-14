"use client";

import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-[100] group flex items-center justify-center">
      {/* Pinging ring to catch attention */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-60"></div>
      
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-[#25D366]/30 transition-all duration-300 overflow-hidden"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8 relative z-10" />
        
        {/* Continuous Shine Effect */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_3s_infinite] z-0"></div>
      </a>

      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white dark:bg-[#1E293B] text-gray-800 dark:text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none font-medium">
        Chat with us!
      </span>
    </div>
  );
}
