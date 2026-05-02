"use client";
import { motion } from "framer-motion";

const Story = () => {
  return (
    <section className="bg-secondary section-padding overflow-hidden relative z-10">
      <div className="max-w-container grid md:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="relative"
        >
          <div className="aspect-square overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop" 
              alt="Artisan at work"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
          className="flex flex-col gap-8"
        >
          <span className="text-accent text-xs tracking-[0.3em] uppercase">Our Heritage</span>
          <h2 className="text-5xl md:text-6xl leading-tight">
            A Legacy of <br />
            <span className="italic">Flour & Passion</span>
          </h2>
          <div className="space-y-6 text-lg font-sans font-light leading-relaxed text-text/80">
            <p>
              In the heart of Paris, we continue a century-old tradition of artisanal excellence. 
              Our dough rests for forty-eight hours, absorbing the quiet rhythm of the morning.
            </p>
            <p>
              Every croissant, every tart, every macaron is a love letter to the art of French pâtisserie, 
              crafted with ingredients sourced from the small farms of Normandy.
            </p>
          </div>
          <button className="btn-primary w-fit mt-4">Discover Our Story</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
