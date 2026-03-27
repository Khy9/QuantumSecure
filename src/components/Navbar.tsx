import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Details", href: "#details" },
  { label: "Topics", href: "#topics" },
  { label: "Schedule", href: "#schedule" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((l) => l.href.slice(1));
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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl border-b border-glass-border/60 py-3"
          : "bg-transparent py-5"
      }`}
      style={scrolled ? { background: "hsl(222 47% 5% / 0.8)" } : undefined}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Shield className="w-6 h-6 text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_8px_hsl(192,95%,55%)]" />
          <span className="font-bold text-lg text-foreground">
            Quantum<span className="text-primary">Secure</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-all duration-300 relative ${
                activeSection === link.href.slice(1)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </a>
          ))}
          <a
            href="#register"
            className="btn-glow bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold"
          >
            Register
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass mt-2 mx-4 rounded-xl p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`transition-colors py-2 ${
                activeSection === link.href.slice(1)
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setMobileOpen(false)}
            className="btn-glow bg-primary text-primary-foreground px-5 py-3 rounded-lg text-center font-semibold"
          >
            Register Now
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
