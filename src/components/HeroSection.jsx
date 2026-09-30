import React from 'react';
import { FileText, Database, BarChart3, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  const stats = [
    {
      icon: FileText,
      value: "2,450+",
      label: "Historical Reports"
    },
    {
      icon: Database,
      value: "12+",
      label: "Nearby Wells"
    },
    {
      icon: BarChart3,
      value: "Real-time",
      label: "Risk Insights"
    },
    {
      icon: ShieldCheck,
      value: "Safer",
      label: "Operations"
    }
  ];

  return (
    <div className="flex flex-col z-10 max-w-xl select-none">
      {/* Title */}
      <h1 className="text-4xl lg:text-[48px] font-extrabold text-white leading-[1.15] tracking-tight">
        Turning <br />
        <span className="text-[#35E6A1] drop-shadow-[0_0_15px_rgba(53,230,161,0.4)]">
          Drilling Data
        </span>{" "}
        into <br />
        Smarter Decisions
      </h1>

      {/* Subtitle */}
      <p className="text-[#9AAFA7] text-sm lg:text-base font-normal mt-4 leading-relaxed max-w-md opacity-90">
        AI-powered insights from nearby wells, <br />
        built on real experiences.
      </p>

      {/* 4 Stat Cards Horizontal Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-7 w-full max-w-xl">
        {stats.map((stat, idx) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={idx}
              className="glass-stat-card rounded-xl p-2.5 sm:p-3 flex items-center gap-2 sm:gap-2.5 hover:border-[#35E6A1] transition-all hover:scale-[1.03] group shadow-lg cursor-pointer min-w-0"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#35E6A1]/15 border border-[#35E6A1]/30 flex items-center justify-center shrink-0 group-hover:bg-[#35E6A1]/30 transition-colors">
                <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#35E6A1] group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col min-w-0 leading-tight">
                <span className="text-white font-bold text-xs sm:text-[13px] tracking-tight whitespace-nowrap">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#9AAFA7] font-medium tracking-tight opacity-90 mt-0.5 leading-snug">
                  {stat.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
