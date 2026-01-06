import { motion } from "framer-motion";
import { Calendar, ArrowRight, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontakt" className="section-padding bg-background">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Jetzt starten</span>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mt-3 mb-4">
            Bereit für deine Cash-Machine?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Wähle deinen Termin für ein kostenloses Erstgespräch. Unverbindlich, ehrlich, direkt.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-premium border border-border"
        >
          {/* Booking Widget Placeholder */}
          <div className="text-center py-12">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-10 h-10 text-accent" />
            </div>
            
            <h3 className="font-heading text-2xl text-foreground mb-4">
              Termin buchen
            </h3>
            
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Klicke auf den Button, um direkt einen freien Termin in unserem Kalender zu wählen.
            </p>

            <a
              href="#"
              className="btn-gold inline-flex items-center gap-3 text-lg group"
            >
              Kostenloses Erstgespräch sichern
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Oder kontaktiere uns direkt:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:hallo@brandingzentrale.de" 
                  className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>hallo@brandingzentrale.de</span>
                </a>
                <a 
                  href="tel:+4912345678900" 
                  className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+49 123 456 789 00</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
