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
          ? "backdrop-blur-2xl border-b border-border/40 py-3.5"
          : "bg-transparent py-4"
      }`}
      style={scrolled ? { background: "hsl(var(--background) / 0.85)" } : { background: "hsl(var(--background) / 0.6)" }}
    >
      <div className="container flex items-center justify-between gap-3">
        <a href="/" className="flex items-center gap-2 group flex-shrink-0">
          <Shield className="w-6 h-6 text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_8px_hsl(192,95%,55%)]" />
          <span className="font-bold text-lg text-foreground whitespace-nowrap">
            Quantum<span className="text-primary">Secure</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
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

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2 z-[60]"
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
