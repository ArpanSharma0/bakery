"use client";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/constants";

const ProductItem = ({ product, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between min-h-[40vh] py-12 gap-8 md:gap-12 overflow-hidden`}>
      {/* Image Column */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        className="flex-1 w-full flex justify-center items-center"
      >
        <div className="w-full max-w-[380px] aspect-[4/5] overflow-hidden shadow-sm">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-110"
          />
        </div>
      </motion.div>

      {/* Text Column */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
        className="flex-1 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:px-12"
      >
        <div className="max-w-[450px]">
          <span className="text-accent text-[10px] tracking-[0.4em] uppercase mb-4 block">Signature Collection</span>
          <h2 className="text-4xl md:text-5xl mb-6 font-serif">{product.name}</h2>
          <p className="text-base font-sans font-light leading-relaxed text-text/70 mb-8 italic">
            "{product.description}"
          </p>
          <button className="btn-primary">View Details</button>
        </div>
      </motion.div>
    </div>
  );
};

const ProductShowcase = () => {
  return (
    <section className="bg-background section-padding overflow-hidden relative z-10 shadow-[0_-50px_100px_-20px_rgba(0,0,0,0.1)]">
      <div className="max-w-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent text-[10px] tracking-[0.4em] uppercase mb-4 block">Artisanal Craft</span>
          <h2 className="text-5xl md:text-6xl mb-6">The Masterpieces</h2>
          <div className="w-16 h-[1px] bg-accent/30 mx-auto"></div>
        </motion.div>
        
        <div className="space-y-12">
          {PRODUCTS.map((product, index) => (
            <ProductItem key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
