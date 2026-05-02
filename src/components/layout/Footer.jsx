import Link from "next/link";
import { NAVIGATION_LINKS } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-accent/20 pt-24 pb-12 relative z-10">
      <div className="max-w-container px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-24">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-serif mb-8">Pearls and <br />Roses</h2>
            <p className="text-lg font-sans font-light text-text/60 max-w-sm">
              Bringing the authentic taste of Parisian elegance to your doorstep since 1924.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-sans mb-8 text-accent">Navigation</h4>
            <ul className="space-y-4 text-sm font-sans font-light">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-sans mb-8 text-accent">Contact</h4>
            <ul className="space-y-4 text-sm font-sans font-light">
              <li className="text-text/60">12 Rue de la Paix, Paris</li>
              <li className="text-text/60">+33 1 23 45 67 89</li>
              <li><a href="mailto:bonjour@maisonpatisserie.com" className="hover:text-accent transition-colors">bonjour@maisonpatisserie.com</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-accent/10">
          <p className="text-[10px] tracking-widest uppercase text-text/40 mb-4 md:mb-0">
            © 2024 Pearls and Roses. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] tracking-widest uppercase text-text/40">
            <a href="#" className="hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors">Facebook</a>
            <a href="#" className="hover:text-accent transition-colors">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
