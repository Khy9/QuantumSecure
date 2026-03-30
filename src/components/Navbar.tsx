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
    return () => {
      document.body.style.overflow = "";
    };
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
      return `text-sm transition-all duration-300 ${
        active
          ? "text-primary"
          : "text-muted-foreground hover:text-primary"
      }`;
    }

    const active = activeSection === link.href.slice(1) && isHome;

    return `text-sm transition-all duration-300 ${
      active ? "text-primary" : "text-muted-foreground hover:text-primary"
    }`;
  };

  const mobileLinkClass = (link: typeof navLinks[0]) => {
    if (link.isRoute) {
      const active = location.pathname === link.href;
      return `transition-colors py-2 text-lg ${
        active
          ? "text-primary font-medium"
          : "text-muted-foreground hover:text-primary"
      }`;
    }

    const active = activeSection === link.href.slice(1) && isHome;

    return `transition-colors py-2 text-lg ${
      active
        ? "text-primary font-medium"
        : "text-muted-foreground hover:text-primary"
    }`;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl border-b border-border/40 py-2"
          : "bg-transparent py-2"
      }`}
      style={{
        background: "transparent",
      }}
    >
      <div className="relative flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">

        {/* Left Logos */}
      <div className="flex items-center gap-5 sm:gap-6">
        <img 
          src={cbitLogo} 
          alt="CBIT" 
          className="h-9 sm:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
        />

        <img 
          src={ddcLogo} 
          alt="DDC" 
          className="h-9 sm:h-10 w-auto object-contain"
        />

         <img 
          src={ieeeCbitLogo} 
          alt="IEEE CBIT" 
          className="h-9 sm:h-10 w-auto object-contain"
        />

        <img 
          src={ieeeEdSocLogo} 
          alt="IEEE EdSoc" 
          className="h-8 sm:h-9 w-auto object-contain"
        />
      </div>

        {/* Center Title */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          <span className="font-bold text-lg">
            Quantum<span className="text-primary">Secure</span>
          </span>
        </div>
        {/* Tablet Title */}
        <div className="hidden sm:flex lg:hidden items-center gap-2 ml-4">
          <Shield className="w-5 h-5 text-primary" />
          <span className="font-bold text-base lg:text-lg">
            Quantum<span className="text-primary">Secure</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={
                link.isRoute
                  ? undefined
                  : isHome
                  ? link.href
                  : "/" + link.href
              }
              onClick={(e) => {
                if (link.isRoute) e.preventDefault();
                handleClick(link);
              }}
              className={linkClass(link)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2 z-[60]"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              style={{
                background: "hsl(var(--background) / 0.7)",
                backdropFilter: "blur(8px)",
              }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-72 z-50 border-l border-border/40 p-8 pt-20 flex flex-col gap-4"
              style={{
                background: "hsl(var(--background) / 0.95)",
                backdropFilter: "blur(20px)",
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={
                    link.isRoute
                      ? undefined
                      : isHome
                      ? link.href
                      : "/" + link.href
                  }
                  onClick={(e) => {
                    if (link.isRoute) e.preventDefault();
                    handleClick(link);
                  }}
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