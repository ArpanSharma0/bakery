"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const Hero = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  // Subtle dimming as the next section approaches
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0.4]);

  return (
    <section ref={container} className="relative h-screen w-full">
      {/* The Entire Hero is now Fixed */}
      <div className="fixed inset-0 z-0 h-screen w-full overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop" 
          alt="Pearls and Roses Luxury Bakery"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Fixed Content Layer */}
        <motion.div 
          style={{ opacity }}
          className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="block text-xs md:text-sm tracking-[0.4em] uppercase font-sans mb-4 opacity-90">
              Since 1924
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-8 leading-tight">
              Pearls and <br />
              <span className="italic">Roses</span>
            </h1>
            <p className="text-lg md:text-xl font-sans font-light tracking-wide mb-12 max-w-2xl mx-auto opacity-80">
              Crafted with Parisian Elegance
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link href="/menu" className="btn-secondary min-w-[200px]">
                Explore Menu
              </Link>
              <Link href="/visit" className="btn-primary !text-white !border-white hover:!bg-white hover:!text-text min-w-[200px]">
                Visit Us
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-[1px] h-16 bg-white/40 relative">
            <div className="w-[1px] h-4 bg-white absolute top-0"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
