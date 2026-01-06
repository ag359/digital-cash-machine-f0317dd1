import { motion } from "framer-motion";
import { useState } from "react";
import { TrendingUp, Zap, Clock, Search, Award, Gauge } from "lucide-react";

const SEOSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="section-padding bg-background">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">SEO-Power</span>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-4">
            Sichtbar statt unsichtbar.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Der Unterschied zwischen einer Standard-Website und deiner digitalen Cash-Machine.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Comparison Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border">
            <div className="grid md:grid-cols-2">
              {/* Before Side */}
              <div 
                className="p-8 md:p-12 bg-muted transition-all duration-300"
                style={{ opacity: sliderPosition > 50 ? 0.6 : 1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-destructive" />
                  </div>
                  <h3 className="font-heading text-xl text-foreground">Standard Website</h3>
                </div>
                
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs text-destructive">✕</span>
                    </div>
                    <span>Langsame Ladezeiten (5+ Sekunden)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs text-destructive">✕</span>
                    </div>
                    <span>Unsichtbar auf Google (Seite 10+)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs text-destructive">✕</span>
                    </div>
                    <span>Keine Anfragen, keine Leads</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs text-destructive">✕</span>
                    </div>
                    <span>Generisches Template-Design</span>
                  </li>
                </ul>

                <div className="mt-8 p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                  <div className="flex items-center gap-2 text-destructive">
                    <Gauge className="w-4 h-4" />
                    <span className="text-sm font-medium">PageSpeed: 35/100</span>
                  </div>
                </div>
              </div>

              {/* After Side */}
              <div 
                className="p-8 md:p-12 bg-card transition-all duration-300"
                style={{ opacity: sliderPosition < 50 ? 0.6 : 1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl text-foreground">Brandingzentrale Cash-Machine</h3>
                </div>
                
                <ul className="space-y-4 text-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs text-accent">✓</span>
                    </div>
                    <span>Blitzschnelle Ladezeiten (&lt;1 Sekunde)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs text-accent">✓</span>
                    </div>
                    <span>Top 3 Google Rankings (lokal)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs text-accent">✓</span>
                    </div>
                    <span>Konstante Anfragen & qualifizierte Leads</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs text-accent">✓</span>
                    </div>
                    <span>Premium-Design nach Maß</span>
                  </li>
                </ul>

                <div className="mt-8 p-4 rounded-lg bg-accent/10 border border-accent/20">
                  <div className="flex items-center gap-2 text-accent">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-medium">PageSpeed: 98/100</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider with slider */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-full w-px bg-border hidden md:block" />
            </div>
          </div>

          {/* Slider Control */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
              <span>Standard</span>
              <span>Cash-Machine</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-accent"
              style={{
                background: `linear-gradient(to right, hsl(var(--muted)) ${sliderPosition}%, hsl(var(--accent)) ${sliderPosition}%)`
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOSlider;
