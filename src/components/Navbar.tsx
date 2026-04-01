import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Details", href: "#details" },
  { label: "Topics", href: "#topics" },
  { label: "Schedule", href: "#schedule" },
  { label: "Contact", href: "#contact" },
  { label: "Register", href: "#register" },
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
    if (!isHome) {
      navigate("/" + link.href);
    }
  };

  const linkClass = (link: typeof navLinks[0]) => {
    const active = activeSection === link.href.slice(1) && isHome;
    return `text-base sm:text-lg transition-all duration-300 relative ${active ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"}`;
  };

  const mobileLinkClass = (link: typeof navLinks[0]) => {
    const active = activeSection === link.href.slice(1) && isHome;
    return `transition-colors py-3 text-xl ${active ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"}`;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl border-b border-border/40 py-3.5"
          : "bg-transparent py-4"
      }`}
      style={scrolled ? { background: "hsl(var(--background) / 0.85)" } : { background: "hsl(var(--background) / 0.6)" }}
    >
      <div className="container flex min-w-0 items-center justify-between gap-3">
        <a href="/" className="group flex min-w-0 items-center gap-2">
          <Shield className="h-6 w-6 flex-shrink-0 text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_8px_hsl(192,95%,55%)]" />
          <span className="max-w-[9.5rem] truncate font-bold text-base text-foreground sm:max-w-none sm:text-lg">
            Quantum<span className="text-primary max-[359px]:hidden">Secure</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={isHome ? link.href : "/" + link.href}
              onClick={() => handleClick(link)}
              className={linkClass(link)}
            >
              {link.label}
              {activeSection === link.href.slice(1) && isHome && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="z-[60] flex-shrink-0 p-2 text-foreground lg:hidden"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

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
              className="fixed top-0 right-0 z-50 flex h-full w-full max-w-xs flex-col gap-4 border-l border-border/40 p-6 pt-20 sm:max-w-sm sm:p-8"
              style={{ background: "hsl(var(--background) / 0.95)", backdropFilter: "blur(20px)" }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={isHome ? link.href : "/" + link.href}
                  onClick={() => handleClick(link)}
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
