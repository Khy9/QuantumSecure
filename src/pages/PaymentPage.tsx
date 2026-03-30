import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { QrCode, Upload } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuroraBackground from "@/components/AuroraBackground";

const inputClass =
  "w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all duration-300";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [utr, setUtr] = useState("");
  const [screenshot, setScreenshot] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/success");
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
            className="w-full max-w-md"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="text-center">
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Complete Payment</h1>
                <p className="text-muted-foreground text-sm">Scan the QR code below to pay</p>
              </div>

              {/* Instructions */}
              <div className="glass-subtle rounded-xl p-4 sm:p-5 space-y-3">
                <p className="text-sm text-foreground font-medium">Instructions:</p>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Scan the QR code and complete payment</li>
                  <li>Take a screenshot of the payment confirmation</li>
                  <li>Enter the UTR number and upload screenshot</li>
                </ol>
              </div>

              {/* QR Code */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-xl bg-muted border border-border flex items-center justify-center">
                  <QrCode className="w-20 h-20 sm:w-24 sm:h-24 text-muted-foreground/30" />
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gradient">₹200</p>
                  <p className="text-xs text-muted-foreground mt-1">Registration Fee</p>
                  <p className="text-xs text-muted-foreground">UPI / Bank Transfer</p>
                </div>
                <div className="text-center space-y-0.5">
                  <p className="text-xs text-muted-foreground">
                    Merchant Name: <span className="text-foreground/80">CBIT STUDENT ACTIVITIES</span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Mobile Number: <span className="text-foreground/80">8466997204</span>
                  </p>
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
                className="btn-glow-premium w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg"
              >
                Submit Payment
              </motion.button>
            </form>
          </motion.div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default PaymentPage;
