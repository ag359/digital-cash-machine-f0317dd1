import { motion } from "framer-motion";
import { MessageSquare, Palette, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Erstgespräch",
    description: "Wir lernen dich und dein Business kennen. Komplett unverbindlich und kostenlos. Du erzählst – wir hören zu und analysieren dein Potenzial.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design-Sprint",
    description: "Wir designen deine maßgeschneiderte Website. Korrekturschleifen bis zur absoluten Perfektion. Erst wenn du zu 100% zufrieden bist, geht's weiter.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Go-Live & Leads sammeln",
    description: "Deine Cash-Machine geht online. SEO-optimiert, blitzschnell, conversion-fokussiert. Ab jetzt: Leads sammeln und Kunden gewinnen.",
  },
];

const Process = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Die Erfolgsleiter</span>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-4">
            In 3 Schritten zur Cash-Machine.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kein komplizierter Prozess. Kein Fachchinesisch. Einfach, klar und effektiv.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-1/2 -translate-x-1/2 w-[70%] h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="text-center">
                  {/* Step Number */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-card shadow-lg flex items-center justify-center border-2 border-accent/20 relative z-10">
                      <step.icon className="w-8 h-8 text-accent" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                      {step.number.slice(-1)}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
