import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import cbitLogo from "@/assets/cbit-logo.jpg";
import ddcLogo from "@/assets/ddc-logo.png";
import ieeeCbitLogo from "@/assets/ieee-cbit-logo.jpg";
import ieeeEdSocLogo from "@/assets/ieee-edsoc-logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Details", href: "#details" },
  { label: "Topics", href: "#topics" },
  { label: "Schedule", href: "#schedule" },
  { label: "Contact", href: "#contact" },
  { label: "Register", href: "/register", isRoute: true },
  { label: "Payment", href: "/payment", isRoute: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["about", "details", "topics", "schedule", "contact"];
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleClick = (link: typeof navLinks[0]) => {
    setMobileOpen(false);
    if (link.isRoute) {
      navigate(link.href);
    } else if (!isHome) {
      navigate("/" + link.href);
    }
  };

  const linkClass = (link: typeof navLinks[0]) => {
    if (link.isRoute) {
      const active = location.pathname === link.href;
      return `text-sm transition-all duration-300 ${active ? "text-primary" : "text-muted-foreground hover:text-primary"}`;
    }
    const active = activeSection === link.href.slice(1) && isHome;
    return `text-sm transition-all duration-300 relative ${active ? "text-primary" : "text-muted-foreground hover:text-primary"}`;
  };

  const mobileLinkClass = (link: typeof navLinks[0]) => {
    if (link.isRoute) {
      const active = location.pathname === link.href;
      return `transition-colors py-2 text-lg ${active ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"}`;
    }
    const active = activeSection === link.href.slice(1) && isHome;
    return `transition-colors py-2 text-lg ${active ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"}`;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl border-b border-border/40 py-1.5"
          : "bg-transparent py-2"
      }`}
      style={scrolled ? { background: "hsl(var(--background) / 0.85)" } : { background: "hsl(var(--background) / 0.6)" }}
    >
      <div className="container flex items-center justify-between gap-3">
        {/* Left: Logos + Title */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden bg-background/80 flex items-center justify-center p-0.5 border border-border/30">
              <img src={cbitLogo} alt="CBIT" className="w-full h-full object-contain rounded-full mix-blend-screen" />
            </div>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden bg-background/80 flex items-center justify-center p-0.5 border border-border/30">
              <img src={ddcLogo} alt="DDC" className="w-full h-full object-contain rounded-full" />
            </div>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden bg-background/80 flex items-center justify-center p-0.5 border border-border/30">
              <img src={ieeeCbitLogo} alt="IEEE CBIT" className="w-full h-full object-contain rounded-full mix-blend-screen" />
            </div>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden bg-background/80 flex items-center justify-center p-1 border border-border/30">
              <img src={ieeeEdSocLogo} alt="IEEE EdSoc" className="w-full h-full object-contain" />
            </div>
          </div>

          <a href="/" className="flex items-center gap-1.5 group ml-1 sm:ml-2">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_8px_hsl(192,95%,55%)]" />
            <span className="font-bold text-sm sm:text-base text-foreground whitespace-nowrap">
              Quantum<span className="text-primary">Secure</span>
            </span>
          </a>
        </div>

        {/* Right: Nav links (desktop) */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.isRoute ? undefined : (isHome ? link.href : "/" + link.href)}
              onClick={(e) => { if (link.isRoute) e.preventDefault(); handleClick(link); }}
              className={linkClass(link)}
            >
              {link.label}
              {!link.isRoute && activeSection === link.href.slice(1) && isHome && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2 z-[60]"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40"
              style={{ background: "hsl(var(--background) / 0.7)", backdropFilter: "blur(8px)" }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-full w-72 z-50 border-l border-border/40 p-8 pt-20 flex flex-col gap-4"
              style={{ background: "hsl(var(--background) / 0.95)", backdropFilter: "blur(20px)" }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.isRoute ? undefined : (isHome ? link.href : "/" + link.href)}
                  onClick={(e) => { if (link.isRoute) e.preventDefault(); handleClick(link); }}
                  className={mobileLinkClass(link)}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
