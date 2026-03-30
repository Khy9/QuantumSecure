import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuroraBackground from "@/components/AuroraBackground";

const SuccessPage = () => {
  const navigate = useNavigate();

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
            <div className="glass rounded-2xl p-6 sm:p-8 text-center space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              >
                <CheckCircle2 className="w-16 h-16 text-primary mx-auto" />
              </motion.div>

              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">🎉 Registration Successful</h1>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We've received your registration. Join the WhatsApp group for updates and further instructions.
                </p>
              </div>

              <div className="pt-2">
                <motion.a
                  href="https://chat.whatsapp.com/J4H0JFupr3UL3FbiEgVPBf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-glow-premium w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Join WhatsApp Group
                </motion.a>
              </div>
            </div>
          </motion.div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default SuccessPage;
