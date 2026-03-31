import cbitLogo from "@/assets/cbit-logo.jpg";
import ddcLogo from "@/assets/ddc-logo.png";
import ieeeCbitLogo from "@/assets/ieee-cbit-logo.jpg";
import ieeeEdSocLogo from "@/assets/ieee-edsoc-logo.png";
import { Shield } from "lucide-react";

const InstitutionalHeader = () => (
  <div className="w-full py-3 sm:py-4 border-b border-border/40" style={{ background: "hsl(222 47% 5% / 0.9)" }}>
    <div className="container flex items-center justify-between gap-4">
      {/* Left logos */}
      <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-background flex items-center justify-center p-0.5">
          <img src={cbitLogo} alt="CBIT Logo" className="w-full h-full object-contain rounded-full mix-blend-screen" width={56} height={56} />
        </div>
        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-background flex items-center justify-center p-0.5">
          <img src={ddcLogo} alt="DDC Logo" className="w-full h-full object-contain rounded-full" width={56} height={56} />
        </div>
      </div>

      {/* Center title */}
      <a href="/" className="flex items-center gap-2 group">
        <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_8px_hsl(192,95%,55%)]" />
        <span className="font-bold text-base sm:text-xl text-foreground whitespace-nowrap">
          Quantum<span className="text-primary">Secure</span>
        </span>
      </a>

      {/* Right logos */}
      <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-background flex items-center justify-center p-0.5">
          <img src={ieeeCbitLogo} alt="IEEE CBIT Logo" className="w-full h-full object-contain rounded-full mix-blend-screen" width={56} height={56} />
        </div>
        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg overflow-hidden bg-background flex items-center justify-center p-1">
          <img src={ieeeEdSocLogo} alt="IEEE Education Society Logo" className="w-full h-full object-contain" width={56} height={56} />
        </div>
      </div>
    </div>
  </div>
);

export default InstitutionalHeader;
