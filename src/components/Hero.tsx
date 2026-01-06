import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-navy-light opacity-90" />

      <div className="container relative z-10 px-6 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-5 py-2 mb-8"
          >
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">Performance-Driven Webdesign & SEO</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-heading text-4xl md:text-5xl lg:text-7xl text-primary-foreground leading-tight mb-6"
          >
            Deine Vision, mein Code.{" "}
            <span className="text-gradient-gold">Gemeinsam bauen wir deine digitale Cash-Machine.</span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-primary-foreground/70 max-w-3xl mx-auto mb-10 leading-relaxed font-body"
          >
            Webseiten für lokale Dienstleister – radikal auf Kundengewinnung getrimmt, 
            von Anfang an 1A suchmaschinenoptimiert durch SEO-Spezialist Sergej.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <a
              href="#kontakt"
              className="btn-gold inline-flex items-center gap-3 text-lg group"
            >
              Kostenloses Erstgespräch sichern
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-primary-foreground/50 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>100% maßgeschneidert</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>SEO von Tag 1</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Conversion-optimiert</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
