import { motion } from "framer-motion";
import { Wrench, HeartPulse, Users, Scale, PartyPopper, Briefcase } from "lucide-react";

const industries = [
  { icon: Wrench, name: "Handwerk", description: "Elektriker, Sanitär, Dachdecker & mehr" },
  { icon: Users, name: "Coaching", description: "Life Coaches, Business Mentoren" },
  { icon: HeartPulse, name: "Gesundheit", description: "Ärzte, Therapeuten, Praxen" },
  { icon: Scale, name: "Kanzleien", description: "Anwälte, Steuerberater, Notare" },
  { icon: PartyPopper, name: "Event-Services", description: "DJs, Caterer, Fotografen" },
  { icon: Briefcase, name: "Unternehmensberater", description: "Consultants & Berater" },
];

const TargetGroups = () => {
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
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Branchen-Matrix</span>
          <h2 className="font-heading text-3xl md:text-5xl text-primary-foreground mt-3 mb-4">
            DIE Lösung für jeden lokalen Dienstleister.
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Egal in welcher Branche du tätig bist – wir verstehen deine Zielgruppe und bauen die perfekte Website dafür.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-navy-light/50 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 h-full text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 cursor-pointer">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                  <industry.icon className="w-7 h-7 text-accent transition-colors group-hover:text-accent-foreground" />
                </div>
                
                <h3 className="font-heading text-lg text-primary-foreground mb-2">
                  {industry.name}
                </h3>
                
                <p className="text-sm text-primary-foreground/60">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 text-primary-foreground/70"
        >
          Deine Branche nicht dabei? <span className="text-accent font-medium">Kein Problem – sprich uns einfach an!</span>
        </motion.p>
      </div>
    </section>
  );
};

export default TargetGroups;
