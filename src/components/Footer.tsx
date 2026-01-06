import { motion } from "framer-motion";
import { Code2, Search, Zap, Heart } from "lucide-react";
import brandingzentraleLogo from "@/assets/brandingzentrale-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12 px-6 md:px-12">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Features bar */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 pb-10 border-b border-primary-foreground/10">
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <Code2 className="w-4 h-4 text-accent" />
              <span className="text-sm">WordPress-Anbindung für volle Kontrolle</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <Search className="w-4 h-4 text-accent" />
              <span className="text-sm">SEO-ready by Sergej</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm">Performance-optimiert</span>
            </div>
          </div>

          {/* Main footer content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo / Brand */}
            <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src={brandingzentraleLogo} 
                alt="Brandingzentrale - Website als Cash-Machine" 
                className="h-14 w-auto drop-shadow-lg"
              />
            </a>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-accent transition-colors"
              >
                Impressum
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-accent transition-colors"
              >
                Datenschutz
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-accent transition-colors"
              >
                AGB
              </a>
            </div>

            {/* Copyright */}
            <div className="flex items-center gap-1 text-sm text-primary-foreground/50">
              <span>© {currentYear} Brandingzentrale</span>
              <span className="mx-1">·</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-3 h-3 text-accent fill-accent" /> in Deutschland
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
