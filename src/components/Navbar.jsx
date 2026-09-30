import React from 'react';
import { Download } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-between px-6 lg:px-8 py-4 z-20 relative select-none">
      {/* Top Left Branding: Oil India Limited */}
      <div className="flex items-center gap-3 group cursor-pointer">
        {/* Logo Symbol */}
        <div className="relative flex items-center justify-center">
          <div className="w-10 h-10 bg-[#e31b23] rounded-sm flex items-center justify-center shadow-[0_0_15px_rgba(227,27,35,0.4)] transition-transform group-hover:scale-105">
            <div className="w-5 h-5 rounded-full border-[3px] border-white flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#e31b23] rounded-full"></div>
            </div>
          </div>
          <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#e31b23] rounded-full"></div>
        </div>

        {/* Logo Text */}
        <div className="flex flex-col">
          <span className="text-white font-medium text-xs tracking-wider opacity-90">
            ऑयल इंडिया लिमिटेड
          </span>
          <span className="text-white font-bold text-lg leading-tight tracking-wide">
            Oil India Limited
          </span>
        </div>
      </div>

      {/* Top Right Branding: eRTMAC-NWIS */}
      <div className="text-right flex flex-col items-end">
        <div className="flex items-center text-xl font-bold tracking-tight">
          <span className="text-white font-semibold">eRTMAC-</span>
          <span className="text-[#35E6A1] font-extrabold drop-shadow-[0_0_10px_rgba(53,230,161,0.6)]">
            NWIS
          </span>
        </div>
        <span className="text-xs text-[#9AAFA7] font-medium tracking-wide mt-0.5 opacity-90">
          Nearby Wells Intelligence System
        </span>
      </div>
    </header>
  );
}
