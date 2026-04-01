import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { useState } from "react";
import { X, QrCode, Upload, CheckCircle2 } from "lucide-react";

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
  const data = {
  name: formData.name,
  email: formData.email,
  phone: formData.phone,
  rollNumber: formData.rollNumber,
  branchSection: formData.branchSection,
  college: formData.college,
  utr: utr,
  screenshot: screenshot ? screenshot.name : ""
};


  try {
    await fetch("https://script.google.com/macros/s/AKfycbxwVaNV0wRQA9DF9d0hsJt9aieMed3gCwrHSfg_VQFJIaQaZviSXM-2j5tr9RD-95SZ/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    setStep("success");

  } catch (error) {
    console.error("Error:", error);
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

      {/* Modal overlay */}
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

              {/* Step 2: Instructions */}
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

              {/* Step 3: Payment */}
              {step === "payment" && (
                <form onSubmit={handlePaymentSubmit} className="space-y-6">
                  <div className="text-center">
                    <h3 className="mb-2 text-xl font-bold text-foreground sm:text-2xl">Complete Payment</h3>
                    <p className="text-muted-foreground text-sm">Scan the QR code below to pay</p>
                  </div>

                  {/* QR Code placeholder */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="h-40 w-40 overflow-hidden rounded-xl border border-border bg-white p-2 sm:h-48 sm:w-48">
                      <img
                        src="/payment-qr.png"
                        alt="Payment QR"
                        className="w-full h-full object-contain"
                      />
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
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-glow-premium w-full rounded-xl bg-primary py-4 text-base font-semibold text-primary-foreground sm:text-lg"
                  >
                    Submit Payment
                  </motion.button>
                </form>
              )}

              {/* Step 4: Success */}
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
                      Your registration and payment details have been submitted. We'll verify and send you a confirmation email shortly.
                    </p>
                  </div>
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
