"use client";
import { motion } from "framer-motion";

export default function VisitPage() {
  return (
    <div className="pt-40 bg-background min-h-screen">
      <section className="section-padding">
        <div className="max-w-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <span className="text-accent text-xs tracking-[0.4em] uppercase block mb-6">Join Us in Paris</span>
            <h1 className="text-7xl md:text-8xl lg:text-9xl mb-8">Visit Us</h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-12"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=2000&auto=format&fit=crop" 
                  alt="Pearls and Roses Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm tracking-widest uppercase mb-4 text-accent">Our Location</h3>
                  <p className="text-2xl font-light">12 Rue de la Paix, Paris, 75002</p>
                </div>
                <div>
                  <h3 className="text-sm tracking-widest uppercase mb-4 text-accent">Hours of Magic</h3>
                  <div className="space-y-2 text-lg font-sans font-light">
                    <p className="flex justify-between"><span>Monday</span> <span className="text-text/40 italic">Closed</span></p>
                    <p className="flex justify-between"><span>Tuesday - Friday</span> <span>08:00 - 20:00</span></p>
                    <p className="flex justify-between"><span>Saturday - Sunday</span> <span>09:00 - 21:00</span></p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-secondary p-12 h-full flex flex-col justify-center"
            >
              <h2 className="text-4xl mb-8">Plan Your Visit</h2>
              <p className="text-lg font-sans font-light text-text/70 mb-12 leading-relaxed">
                Located just steps away from the Opéra Garnier, our flagship pâtisserie is a sanctuary of sweetness in the heart of the city. 
                Whether you're stopping by for your morning croissant or selecting a box of macarons for a gift, we look forward to welcoming you.
              </p>
              <div className="space-y-6">
                <button className="btn-secondary w-full">Get Directions</button>
                <button className="btn-primary w-full">Reserve a Table</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
