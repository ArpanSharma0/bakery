"use client";
import { motion } from "framer-motion";

const items = [
  {
    title: "The Morning Glow",
    category: "Atmosphere",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Velvet Crème",
    category: "Detail",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Golden Crust",
    category: "Texture",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2070&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Parisian Coffee",
    category: "Ritual",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
];

const BentoGrid = () => {
  return (
    <section className="bg-background section-padding relative z-10">
      <div className="max-w-container">
        <div className="mb-16">
          <span className="text-accent text-xs tracking-[0.3em] uppercase block mb-4">The Experience</span>
          <h2 className="text-5xl md:text-6xl">Moments of Indulgence</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative overflow-hidden group ${item.className}`}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                <span className="text-[10px] tracking-widest uppercase mb-2">{item.category}</span>
                <h3 className="text-xl font-serif">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
