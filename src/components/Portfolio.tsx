import { motion } from "framer-motion";

const projects = [
  { title: "Projekt Eins", category: "Webdesign" },
  { title: "Projekt Zwei", category: "SEO" },
  { title: "Projekt Drei", category: "Branding" },
  { title: "Projekt Vier", category: "E-Commerce" },
  { title: "Projekt Fünf", category: "Webdesign" },
  { title: "Projekt Sechs", category: "SEO" },
];

const DeviceMockup = () => (
  <div className="relative w-full h-48 flex items-end justify-center">
    {/* Laptop */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%]">
      <div className="bg-muted-foreground/20 rounded-t-lg p-1">
        <div className="bg-muted rounded-sm h-24 w-full" />
      </div>
      <div className="bg-muted-foreground/30 h-2 rounded-b-lg w-[110%] -ml-[5%]" />
    </div>
    
    {/* Tablet */}
    <div className="absolute bottom-2 right-4 w-[30%]">
      <div className="bg-muted-foreground/25 rounded-lg p-1">
        <div className="bg-muted rounded-sm h-20 w-full" />
      </div>
    </div>
    
    {/* Smartphone */}
    <div className="absolute bottom-2 left-4 w-[15%]">
      <div className="bg-muted-foreground/30 rounded-lg p-0.5">
        <div className="bg-muted rounded-sm h-16 w-full" />
      </div>
    </div>
  </div>
);

const Portfolio = () => {
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
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="font-heading text-3xl md:text-5xl text-primary-foreground mt-3 mb-4">
            Ausgewählte Arbeiten
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Ein Auszug unserer erfolgreichsten Projekte für lokale Dienstleister.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card/10 backdrop-blur-sm border border-border/20 rounded-2xl p-6 transition-all duration-300 hover:border-accent/30 hover:bg-card/20">
                <DeviceMockup />
                
                <div className="mt-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-lg text-primary-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
