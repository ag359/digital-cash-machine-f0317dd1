import { motion } from "framer-motion";
import { Sparkles, Code2, Search } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="section-padding bg-primary overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Das Power-Team</span>
          <h2 className="font-heading text-3xl md:text-5xl text-primary-foreground mt-3 mb-4">
            Alexandra & Sergej
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Marketing-Expertise trifft SEO-Mastery. Zusammen bauen wir digitale Cash-Machines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Alexandra */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-navy-light/50 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8"
          >
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-10 h-10 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-2xl text-primary-foreground mb-2">Alexandra</h3>
                <p className="text-accent font-medium mb-4">Marketing & Design</p>
                <p className="text-primary-foreground/70 leading-relaxed">
                  "Ich verstehe, was deine Kunden wirklich wollen – und wie wir sie emotional abholen. 
                  Design ist für mich kein Selbstzweck, sondern ein Werkzeug, das verkauft. 
                  Lass uns gemeinsam deine Vision zum Leben erwecken!"
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-primary-foreground/60">
                  <Code2 className="w-4 h-4 text-accent" />
                  <span>Conversion-Design & Branding</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sergej */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-navy-light/50 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8"
          >
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Search className="w-10 h-10 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-2xl text-primary-foreground mb-2">Sergej</h3>
                <p className="text-accent font-medium mb-4">SEO & Development</p>
                <p className="text-primary-foreground/70 leading-relaxed">
                  "SEO ist kein Hexenwerk – es ist Handwerk. Ich sorge dafür, dass Google deine Seite liebt 
                  und deine Zielgruppe dich findet. Technisch sauber, strategisch durchdacht, messbar erfolgreich."
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-primary-foreground/60">
                  <Search className="w-4 h-4 text-accent" />
                  <span>SEO-Spezialist & Tech-Lead</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 rounded-full px-6 py-3">
            <span className="text-primary-foreground font-medium">Wir duzen – weil wir Partner sind, keine Dienstleister.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
