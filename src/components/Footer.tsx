import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Shield className="w-4 h-4 text-primary" />
        <span>QuantumSecure · Digital Defence Club</span>
      </div>
      <div className="flex gap-6">
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#schedule" className="hover:text-primary transition-colors">Schedule</a>
        <a href="#register" className="hover:text-primary transition-colors">Register</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
