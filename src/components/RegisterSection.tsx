import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

type Step = "form" | "success";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    filter: "blur(4px)",
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const inputClass =
  "w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all duration-300";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxVN7WoUCahya_4lfobnsxZvemKVyY2ahIm_byyunUJ-DFUP9EtKQZYPH3Q1tJbUOu7/exec"; // 🔁 Replace this

const RegisterSection = () => {
  const [step, setStep] = useState<Step>("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rollNumber: "",
    branchSection: "",
    college: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const body = new FormData();
    body.append("name", formData.name);
    body.append("email", formData.email);
    body.append("phone", formData.phone);
    body.append("rollNumber", formData.rollNumber);
    body.append("branchSection", formData.branchSection);
    body.append("college", formData.college);

    try {
      await fetch(APPS_SCRIPT_URL, { method: "POST", mode: "no-cors", body });
      setStep("success");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setStep("form");
    setFormData({ name: "", email: "", phone: "", rollNumber: "", branchSection: "", college: "" });
  };

  return (
    <section id="register" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] sm:h-[600px] sm:w-[600px]"
        style={{
          background: "radial-gradient(circle, hsl(192 95% 55%), transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div className="container max-w-lg relative z-10">
        <ScrollReveal>
          <div className="mb-8 text-center sm:mb-10">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              className="inline-block glass-subtle px-4 py-1.5 rounded-full text-xs font-mono text-primary mb-4"
            >
              ⚡ Free Entry — Limited Seats
            </motion.span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="text-gradient">Register</span> Now
            </h2>
            <p className="text-muted-foreground mt-3">Secure your spot at QuantumSecure</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <form onSubmit={handleRegister} className="glass space-y-5 rounded-2xl p-6 sm:p-8">
            {[
              { label: "Full Name", key: "name", type: "text", placeholder: "John Doe" },
              { label: "Email", key: "email", type: "email", placeholder: "you@example.com" },
              { label: "Phone Number", key: "phone", type: "tel", placeholder: "Enter phone number" },
              { label: "Roll Number", key: "rollNumber", type: "text", placeholder: "Enter roll number" },
              { label: "Branch & Section", key: "branchSection", type: "text", placeholder: "CSE - 1" },
              { label: "College / Organization", key: "college", type: "text", placeholder: "Your College / Organization" },
            ].map(({ label, key, type, placeholder }) => (
              <div key={key}>
                <label className="text-sm text-muted-foreground mb-1.5 block">{label}</label>
                <input
                  type={type}
                  required
                  placeholder={placeholder}
                  value={formData[key as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                  className={inputClass}
                />
              </div>
            ))}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.03 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              className="btn-glow-premium w-full rounded-xl bg-primary py-4 text-base font-semibold text-primary-foreground sm:text-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Registering...
                </span>
              ) : "Register Now →"}
            </motion.button>
          </form>
        </ScrollReveal>
      </div>

      <AnimatePresence>
        {step === "success" && (
          <motion.div
            key="overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            style={{ background: "hsl(222 47% 5% / 0.85)", backdropFilter: "blur(12px)" }}
          >
            <motion.div
              key="success-modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="glass neon-glow-cyan relative my-4 max-h-[88vh] w-full max-w-md overflow-y-auto rounded-2xl p-5 sm:my-8 sm:p-8"
            >
              <button
                onClick={closeModal}
                className="absolute right-3 top-3 text-muted-foreground transition-colors hover:text-foreground sm:right-4 sm:top-4"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="text-center space-y-5 py-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                >
                  <CheckCircle2 className="w-16 h-16 text-primary mx-auto" />
                </motion.div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-foreground sm:text-2xl">🎉 You're In!</h3>
                  <p className="text-muted-foreground text-sm">
                    Your registration is confirmed. Join the WhatsApp group for updates and further instructions.
                  </p>
                </div>
                <motion.a
                  href="https://chat.whatsapp.com/F5odnEphs2t4PZoSqP7TKM"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-glow-premium w-full rounded-xl bg-primary py-4 text-base font-semibold text-primary-foreground sm:text-lg inline-block"
                >
                  Join WhatsApp Group
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={closeModal}
                  className="btn-glow w-full bg-muted text-foreground py-3 rounded-xl font-semibold"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RegisterSection;