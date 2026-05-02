"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const GridItem = ({ item, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Each image will move at a slightly different parallax offset for a natural look
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative overflow-hidden group ${item.className} ${
        item.type === "logo" ? "bg-secondary flex items-center justify-center p-8 border border-accent/10" : ""
      }`}
    >
      {item.type === "logo" ? (
        <div className="text-center">
          <div className="w-12 h-[1px] bg-accent/40 mx-auto mb-6"></div>
          <h3 className="text-2xl font-serif text-text leading-tight">
            Pearls <br /> & Roses
          </h3>
          <div className="w-12 h-[1px] bg-accent/40 mx-auto mt-6"></div>
          <span className="text-[8px] tracking-[0.4em] uppercase text-accent mt-4 block">Pâtisserie</span>
        </div>
      ) : (
        <div className="relative w-full h-full">
          <motion.img 
            style={{ y, scale: 1.2 }}
            src={item.image} 
            alt={item.title}
            className="absolute inset-0 w-full h-[120%] object-cover transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
            <span className="text-[10px] tracking-widest uppercase mb-2 text-accent/80 font-medium">{item.category}</span>
            <h3 className="text-xl font-serif">{item.title}</h3>
          </div>
        </div>
      )}
    </motion.div>
  );
};

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
    title: "Artisanal Hands",
    category: "Craft",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "logo",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "The Signature",
    category: "Legacy",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Parisian Ritual",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
];

const BentoGrid = () => {
  return (
    <section className="bg-background section-padding relative z-10">
      <div className="max-w-container">
        <div className="mb-16">
          <span className="text-accent text-[10px] tracking-[0.4em] uppercase block mb-4">The Experience</span>
          <h2 className="text-5xl md:text-6xl">Moments of Indulgence</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {items.map((item, index) => (
            <GridItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
