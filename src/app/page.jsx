import Hero from "@/components/sections/Hero";
import ProductShowcase from "@/components/sections/ProductShowcase";
import Story from "@/components/sections/Story";
import BentoGrid from "@/components/sections/BentoGrid";
import MenuPreview from "@/components/sections/MenuPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <Story />
      <BentoGrid />
      <MenuPreview />
      
      <section className="bg-background section-padding text-center relative z-10">
        <div className="max-w-container">
          <div className="py-24 border-y border-accent/20">
            <span className="text-accent text-xs tracking-[0.3em] uppercase block mb-6">Experience Paris Today</span>
            <h2 className="text-6xl md:text-7xl mb-8">Visit Us Today</h2>
            <p className="text-xl font-sans font-light text-text/60 mb-12 max-w-2xl mx-auto">
              Experience the essence of French tradition in every bite. Our doors are open to welcome you into a world of sweetness.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-12 text-left max-w-3xl mx-auto mb-16">
              <div>
                <h4 className="text-sm tracking-widest uppercase mb-4 text-accent">Address</h4>
                <p className="text-lg font-light">12 Rue de la Paix, Paris</p>
              </div>
              <div>
                <h4 className="text-sm tracking-widest uppercase mb-4 text-accent">Opening Hours</h4>
                <p className="text-lg font-light">Tue - Sun: 08:00 - 20:00</p>
              </div>
            </div>
            <button className="btn-secondary">Get Directions</button>
          </div>
        </div>
      </section>
    </>
  );
}
