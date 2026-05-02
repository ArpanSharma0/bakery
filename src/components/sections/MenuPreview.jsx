"use client";
import { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { MENU_DATA } from "@/constants";

const MenuPreview = () => {
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
    <section className="bg-secondary section-padding relative overflow-hidden">
      <div className="max-w-container relative z-10">
        <div className="text-center mb-24">
          <span className="text-accent text-[10px] tracking-[0.4em] uppercase block mb-4">The Selection</span>
          <h2 className="text-5xl md:text-6xl font-serif">The Art of the Menu</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-16 md:gap-24">
          {MENU_DATA.map((cat, idx) => (
            <div key={idx} className="relative">
              <h3 className="text-xl font-serif border-b border-accent/20 pb-4 mb-10 text-accent/80 uppercase tracking-widest text-[12px]">
                {cat.category}
              </h3>
              <ul className="space-y-8">
                {cat.items.map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="group cursor-none relative"
                    onMouseEnter={() => setActiveItem(item)}
                    onMouseLeave={() => setActiveItem(null)}
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-xl font-sans font-light tracking-wide group-hover:text-accent transition-colors duration-300">
                        {item.name}
                      </span>
                      <span className="text-sm font-sans font-light opacity-40 group-hover:opacity-100 transition-opacity">
                        {item.price}
                      </span>
                    </div>
                    <div className="h-[1px] w-0 bg-accent/40 group-hover:w-full transition-all duration-700 ease-out"></div>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-32">
          <button className="btn-secondary">View Full Menu</button>
        </div>
      </div>

      {/* Floating Image Follower (Behind Text) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
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
    </section>
  );
};

export default MenuPreview;
