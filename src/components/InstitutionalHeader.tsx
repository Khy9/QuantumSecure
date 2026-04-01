import cbitLogo from "@/assets/cbit-logo.jpg";
import ddcLogo from "@/assets/ddc-logo.png";
import ieeeCbitLogo from "@/assets/ieee-cbit-logo.jpg";
import ieeeEdSocLogo from "@/assets/ieee-edsoc-logo.png";
import { Shield, X } from "lucide-react";

const InstitutionalHeader = () => (
  <div className="w-full py-3 sm:py-4 border-b border-border/40" style={{ background: "hsl(222 47% 5% / 0.9)" }}>
    <div className="container flex items-center justify-between gap-4">
      {/* Logos on the left */}
      <div className="flex items-center gap-2 sm:gap-6 flex-shrink-0">
        {/* CBIT Logo */}
        <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-background flex items-center justify-center p-0.5 transition-transform hover:scale-105">
          <img src={cbitLogo} alt="CBIT Logo" className="w-full h-full object-contain rounded-full mix-blend-screen" />
        </div>
        
        {/* IEEE CBIT Logo */}
        <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-background flex items-center justify-center p-0.5 transition-transform hover:scale-105">
          <img src={ieeeCbitLogo} alt="IEEE CBIT Logo" className="w-full h-full object-contain rounded-full mix-blend-screen" />
        </div>

        {/* IEEE EDSOC Logo */}
        <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-background flex items-center justify-center p-1 transition-transform hover:scale-105">
          <img src={ieeeEdSocLogo} alt="IEEE Education Society Logo" className="w-full h-full object-contain" />
        </div>

        {/* Collab X */}
        <div className="flex items-center justify-center px-1 sm:px-2">
          <span className="text-xl sm:text-3xl font-extrabold text-primary animate-pulse opacity-80 decoration-none select-none">
            ✕
          </span>
        </div>

        {/* DDC Logo */}
        <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-background flex items-center justify-center p-0.5 transition-transform hover:scale-105">
          <img src={ddcLogo} alt="DDC Logo" className="w-full h-full object-contain rounded-full" />
        </div>
      </div>

      {/* Brand title on the right */}
      <a href="/" className="flex items-center gap-2 group ml-auto">
        <Shield className="w-5 h-5 sm:w-8 sm:h-8 text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_12px_hsl(192,95%,55%)]" />
        <span className="font-bold text-lg sm:text-2xl text-foreground whitespace-nowrap">
          Quantum<span className="text-primary">Secure</span>
        </span>
      </a>
    </div>
  </div>
);

export default InstitutionalHeader;
