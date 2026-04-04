import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { useState } from "react";
import { X, Upload, CheckCircle2 } from "lucide-react";

type Step = "form" | "instructions" | "payment" | "success";

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

const RegisterSection = () => {
  const [step, setStep] = useState<Step>("form");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", rollNumber: "", branchSection: "", college: "" });
  const [utr, setUtr] = useState("");
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("instructions");
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!screenshot) {
      alert("Please upload payment screenshot");
      return;
    }

    setIsSubmitting(true);

    const base64File = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve((reader.result as string).split(",")[1]);
      reader.onerror = reject;
      reader.readAsDataURL(screenshot);
    });

    const driveForm = new FormData();
    driveForm.append("name", formData.name);
    driveForm.append("email", formData.email);
    driveForm.append("phone", formData.phone);
    driveForm.append("rollNumber", formData.rollNumber);
    driveForm.append("branchSection", formData.branchSection);
    driveForm.append("college", formData.college);
    driveForm.append("utr", utr);
    driveForm.append("file", base64File);
    driveForm.append("fileName", screenshot.name);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbyUkHUiQxzvFJxqg79Vioe0nOJYzXRAk1uX3K1udirvq_-N0SgtlYOEd51c_i36IoTQ/exec", {
        method: "POST",
        mode: "no-cors",
        body: driveForm,
      });
      setStep("success");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setStep("form");
    setUtr("");
    setScreenshot(null);
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
              ⚡ Limited Seats — Register Early
            </motion.span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="text-gradient">Register</span> Now
            </h2>
            <p className="text-muted-foreground mt-3">
              Secure your spot at QuantumSecure
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <form onSubmit={handleRegister} className="glass space-y-5 rounded-2xl p-6 sm:p-8">
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
              <label className="text-sm text-muted-foreground mb-1.5 block">Phone Number</label>
              <input
                type="tel"
                required
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Roll Number</label>
              <input
                type="text"
                required
                placeholder="Enter roll number"
                value={formData.rollNumber}
                onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Branch & Section</label>
              <input
                type="text"
                required
                placeholder="CSE - 1"
                value={formData.branchSection}
                onChange={(e) => setFormData({ ...formData, branchSection: e.target.value })}
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
              className="btn-glow-premium w-full rounded-xl bg-primary py-4 text-base font-semibold text-primary-foreground sm:text-lg"
            >
              Register Now
            </motion.button>
          </form>
        </ScrollReveal>
      </div>

      <AnimatePresence>
        {step !== "form" && (
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
              key={step}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="glass neon-glow-cyan relative my-4 max-h-[88vh] w-full max-w-md overflow-y-auto rounded-2xl p-5 sm:my-8 sm:p-8"
            >
              {step !== "success" && (
                <button
                  onClick={closeModal}
                  className="absolute right-3 top-3 text-muted-foreground transition-colors hover:text-foreground sm:right-4 sm:top-4"
                >
                  <X className="w-5 h-5" />
                </button>
              )}

              {step === "instructions" && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="mb-2 text-xl font-bold text-foreground sm:text-2xl">Payment Required</h3>
                    <p className="text-muted-foreground text-sm">Complete payment to confirm your registration</p>
                  </div>
                  <div className="glass-subtle rounded-xl p-5 space-y-3">
                    <p className="text-sm text-foreground font-medium">Instructions:</p>
                    <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                      <li>Proceed to payment below</li>
                      <li>Scan the QR code and complete payment</li>
                      <li>Take a screenshot of the payment confirmation</li>
                      <li>Enter the UTR number and upload screenshot</li>
                    </ol>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setStep("payment")}
                    className="btn-glow-premium w-full rounded-xl bg-primary py-4 text-base font-semibold text-primary-foreground sm:text-lg"
                  >
                    Proceed to Payment
                  </motion.button>
                </div>
              )}

              {step === "payment" && (
                <form onSubmit={handlePaymentSubmit} className="space-y-6">
                  <div className="text-center">
                    <h3 className="mb-2 text-xl font-bold text-foreground sm:text-2xl">Complete Payment</h3>
                    <p className="text-muted-foreground text-sm">Scan the QR code below to pay</p>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="h-40 w-40 overflow-hidden rounded-xl border border-border bg-white p-2 sm:h-48 sm:w-48">
                      <img src="/payment-qr.png" alt="Payment QR" className="w-full h-full object-contain" />
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-gradient sm:text-2xl">₹200</p>
                      <p className="text-xs text-muted-foreground">UPI / Bank Transfer</p>
                    </div>
                    <div className="text-center space-y-0.5">
                      <p className="text-xs text-muted-foreground">Merchant Name: <span className="text-foreground/80">CBIT STUDENT ACTIVITIES</span></p>
                      <p className="text-xs text-muted-foreground">Mobile Number: <span className="text-foreground/80">8466997204</span></p>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">UTR / Transaction Number</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter UTR number"
                      value={utr}
                      onChange={(e) => setUtr(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Payment Screenshot</label>
                    <label className="flex items-center gap-3 cursor-pointer w-full bg-muted border border-border border-dashed rounded-lg px-4 py-4 text-muted-foreground hover:border-primary/40 transition-colors duration-300">
                      <Upload className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm truncate">
                        {screenshot ? screenshot.name : "Click to upload screenshot"}
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => setScreenshot(e.target.files?.[0] || null)}
                      />
                    </label>
                  </div>
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
                        Submitting...
                      </span>
                    ) : "Submit Payment"}
                  </motion.button>
                </form>
              )}

              {step === "success" && (
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
                      Your registration and payment details have been submitted. Join the WhatsApp group for updates and further instructions.
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
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RegisterSection;