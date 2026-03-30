import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuroraBackground from "@/components/AuroraBackground";

const inputClass =
  "w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all duration-300";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", college: "" });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Store form data for payment page
    sessionStorage.setItem("registerData", JSON.stringify(formData));
    navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 z-0">
        <AuroraBackground />
        <div className="absolute inset-0 grid-bg" />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-lg"
          >
            <div className="text-center mb-8">
              <span className="inline-block glass-subtle px-4 py-1.5 rounded-full text-xs font-mono text-primary mb-4">
                ⚡ Limited Seats — Register Early
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold">
                <span className="text-gradient">Register</span> Now
              </h1>
              <p className="text-muted-foreground mt-3">Secure your spot at QuantumSecure</p>
            </div>

            <form onSubmit={handleRegister} className="glass rounded-2xl p-6 sm:p-8 space-y-5">
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">College / Organization</label>
                <input
                  type="text"
                  required
                  placeholder="Your College / Organization"
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  className={inputClass}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-glow-premium w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg"
              >
                Register Now
              </motion.button>
            </form>
          </motion.div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default RegisterPage;
