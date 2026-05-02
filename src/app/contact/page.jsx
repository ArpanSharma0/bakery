"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
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
            <span className="text-accent text-xs tracking-[0.4em] uppercase block mb-6">Connect With Us</span>
            <h1 className="text-7xl md:text-8xl lg:text-9xl mb-8">Contact</h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-sm tracking-widest uppercase mb-6 text-accent">General Inquiries</h3>
                <p className="text-2xl font-light">bonjour@maisonpatisserie.com</p>
              </div>
              
              <div>
                <h3 className="text-sm tracking-widest uppercase mb-6 text-accent">Reservations & Orders</h3>
                <p className="text-2xl font-light">+33 1 23 45 67 89</p>
              </div>

              <div>
                <h3 className="text-sm tracking-widest uppercase mb-6 text-accent">Address</h3>
                <p className="text-2xl font-light">12 Rue de la Paix, Paris, 75002</p>
                <p className="text-sm text-text/50 mt-4 uppercase tracking-[0.2em]">Open Tuesday - Sunday | 08:00 - 20:00</p>
              </div>

              <div className="pt-12 border-t border-accent/20">
                <h3 className="text-sm tracking-widest uppercase mb-6 text-accent">Social</h3>
                <div className="flex gap-8 text-lg font-light">
                  <a href="#" className="hover:text-accent transition-colors">Instagram</a>
                  <a href="#" className="hover:text-accent transition-colors">Facebook</a>
                  <a href="#" className="hover:text-accent transition-colors">Pinterest</a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <form className="space-y-8 bg-secondary p-12">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-accent">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-accent/30 py-4 focus:border-accent outline-none font-sans font-light text-lg transition-colors"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-accent">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-accent/30 py-4 focus:border-accent outline-none font-sans font-light text-lg transition-colors"
                    placeholder="jean@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-accent">Subject</label>
                  <select className="w-full bg-transparent border-b border-accent/30 py-4 focus:border-accent outline-none font-sans font-light text-lg transition-colors appearance-none">
                    <option>General Inquiry</option>
                    <option>Custom Cake Order</option>
                    <option>Events & Catering</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-accent">Message</label>
                  <textarea 
                    rows="4"
                    className="w-full bg-transparent border-b border-accent/30 py-4 focus:border-accent outline-none font-sans font-light text-lg transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button type="submit" className="btn-secondary w-full">Send Message</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
