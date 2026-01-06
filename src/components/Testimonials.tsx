import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Brunner",
    role: "Elektromeister, München",
    quote: "Innerhalb von 4 Wochen hatte ich mehr Anfragen als im gesamten letzten Jahr. Die Seite arbeitet rund um die Uhr für mich – eine echte Cash-Machine!",
    rating: 5,
  },
  {
    name: "Sarah Winterberg",
    role: "Business Coach, Hamburg",
    quote: "Alexandra und Sergej haben verstanden, was ich wirklich brauche. Kein Schnickschnack, sondern eine Website, die meine Wunschkunden anzieht. Top!",
    rating: 5,
  },
  {
    name: "Dr. Thomas Hartmann",
    role: "Zahnarzt, Frankfurt",
    quote: "Endlich eine Agentur, die liefert. Platz 2 bei Google für 'Zahnarzt Frankfurt' – und das nach nur 3 Monaten. Absolute Empfehlung!",
    rating: 5,
  },
];

const Testimonials = () => {
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
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Kundenstimmen</span>
          <h2 className="font-heading text-3xl md:text-5xl text-primary-foreground mt-3 mb-4">
            Was unsere Partner sagen.
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Echte Ergebnisse, echte Stimmen. Überzeuge dich selbst.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full bg-navy-light/50 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 transition-all duration-300 hover:border-accent/30">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-accent" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-primary-foreground/80 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-primary-foreground/10">
                  <p className="font-heading text-primary-foreground font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-primary-foreground/50">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
