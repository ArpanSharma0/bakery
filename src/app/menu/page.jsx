"use client";
import { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { MENU_DATA } from "@/constants";

export default function MenuPage() {
  const [activeItem, setActiveItem] = useState(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="bg-background min-h-screen relative overflow-hidden">
      {/* Cinematic Header Strip */}
      <div className="h-[40vh] w-full relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop" 
          alt="Menu Header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <section className="py-24 relative z-10">
        <div className="max-w-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <span className="text-accent text-xs tracking-[0.4em] uppercase block mb-6">Explore Our Artisanal</span>
            <h1 className="text-7xl md:text-8xl lg:text-9xl mb-8">The Menu</h1>
            <p className="text-xl font-light text-text/60 max-w-2xl mx-auto italic">
              "A symphony of flour, butter, and time."
            </p>
          </motion.div>

          <div className="space-y-32">
            {MENU_DATA.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="grid md:grid-cols-3 gap-12 border-t border-accent/20 pt-12">
                  <div className="md:col-span-1">
                    <h2 className="text-4xl mb-4">{category.category}</h2>
                    <p className="text-sm font-light text-text/50 uppercase tracking-widest leading-relaxed">
                      Handcrafted daily with premium ingredients.
                    </p>
                  </div>
                  
                  <div className="md:col-span-2 space-y-12">
                    {category.items.map((item, i) => (
                      <div 
                        key={i} 
                        className="flex justify-between items-start group cursor-none relative"
                        onMouseEnter={() => setActiveItem(item)}
                        onMouseLeave={() => setActiveItem(null)}
                      >
                        <div className="flex-1">
                          <h3 className="text-2xl mb-1 group-hover:text-accent transition-colors duration-300">
                            {item.name}
                          </h3>
                        </div>
                        <div className="w-24 h-[1px] bg-accent/20 mt-4 mx-4 hidden md:block"></div>
                        <span className="text-lg font-light text-accent">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Image */}
      <section className="h-[60vh] overflow-hidden relative z-10">
        <img 
          src="https://images.unsplash.com/photo-1511018556340-d16986a1c194?q=80&w=2070&auto=format&fit=crop" 
          alt="Bakery Interior"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Floating Image Follower (Behind Text) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <AnimatePresence>
          {activeItem && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              style={{
                x: springX,
                y: springY,
                translateX: "-50%",
                translateY: "-50%",
              }}
              className="w-48 h-64 overflow-hidden relative opacity-50"
            >
              <img 
                src={activeItem.image} 
                alt={activeItem.name}
                className="w-full h-full object-cover rounded-sm"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
