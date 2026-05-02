"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Cinematic Header Strip */}
      <div className="h-[40vh] w-full relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop" 
          alt="About Header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <section className="py-24">
        <div className="max-w-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <span className="text-accent text-xs tracking-[0.4em] uppercase block mb-6">Since 1924</span>
            <h1 className="text-7xl md:text-8xl lg:text-9xl mb-8">Our History</h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-24 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">The Art of the <br /><span className="italic">French Boulangerie</span></h2>
              <div className="space-y-6 text-lg font-sans font-light text-text/70 leading-relaxed">
                <p>
                  Maison de Pâtisserie began as a small family-owned bakery in the heart of the Latin Quarter. 
                  Founded by Pierre and Marie Laurent, the bakery was built on a simple philosophy: 
                  excellence is found in the details.
                </p>
                <p>
                  For over a century, we have preserved the traditional methods of French baking. 
                  From our natural sourdough starters to our hand-rolled puff pastry, 
                  every step is performed with patience and precision.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop" 
                alt="Vintage Bakery"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center py-24 border-t border-accent/20">
            <div>
              <h3 className="text-4xl text-accent mb-4">100+</h3>
              <p className="text-xs uppercase tracking-widest text-text/50">Years of Heritage</p>
            </div>
            <div>
              <h3 className="text-4xl text-accent mb-4">48h</h3>
              <p className="text-xs uppercase tracking-widest text-text/50">Slow Fermentation</p>
            </div>
            <div>
              <h3 className="text-4xl text-accent mb-4">12</h3>
              <p className="text-xs uppercase tracking-widest text-text/50">Signature Recipes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary section-padding">
        <div className="max-w-container text-center">
          <h2 className="text-5xl mb-12 italic">"Butter is the soul of the kitchen."</h2>
          <p className="text-xl font-sans font-light text-text/60 max-w-3xl mx-auto mb-16">
            We use only the finest AOC butter from Normandy, stone-ground flour from local mills, 
            and seasonal fruits harvested at their peak. No shortcuts, no compromises.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1980&auto=format&fit=crop" 
            alt="Artisan Flour"
            className="w-full h-[60vh] object-cover"
          />
        </div>
      </section>
    </div>
  );
}
