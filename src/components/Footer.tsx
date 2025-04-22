// components/Footer.jsx
import { Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#06002c] text-white text-center py-6 font-orbitron text-sm">
      <div className="flex justify-center gap-4 mb-2">
        <a
          href="https://www.instagram.com/inkspire.estampados00/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://www.facebook.com/InkspirePersonalizados"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition"
        >
          <Facebook size={24} />
        </a>
      </div>
      <p>© 2025 INKSPIRE. Todos los derechos reservados.</p>
    </footer>
  );
};
