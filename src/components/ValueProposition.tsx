import { motion } from "framer-motion";
import { Target, Phone, BarChart3 } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Performance über Posing",
    description: "Wir fokussieren uns auf Verkaufspsychologie und echte Ergebnisse – nicht auf fancy Features, die niemand braucht. Jedes Element deiner Website ist darauf ausgelegt, Kunden zu gewinnen.",
  },
  {
    icon: Phone,
    title: "Direkter Draht statt Warteschleife",
    description: "Kein Support-Ticket-System, keine Warteschleife. Du hast direkten Zugang zu Alexandra & Sergej – persönlich, schnell und verbindlich.",
  },
  {
    icon: BarChart3,
    title: "Radikale Ergebnis-Transparenz",
    description: "Wir liefern messbare Resultate: Ladegeschwindigkeit, Rankings, Leads. Alles nachvollziehbar, alles dokumentiert. Keine leeren Versprechen.",
  },
];

const ValueProposition = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Unser Versprechen</span>
          <h2 className="font-heading text-3xl md:text-5xl text-primary-foreground mt-3 mb-4">
            Was uns von anderen unterscheidet.
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Keine Marketing-Floskeln, sondern handfeste Vorteile für dein Business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full bg-navy-light/50 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 transition-all duration-300 hover:border-accent/30 hover:bg-navy-light/70">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                
                <h3 className="font-heading text-xl text-primary-foreground mb-4">
                  {value.title}
                </h3>
                
                <p className="text-primary-foreground/60 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
