// components/Footer.jsx
import { Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#06002c] text-white px-6 py-8 font-orbitron text-sm">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-base font-semibold">© 2025 INKSPIRE</p>
          <p className="text-xs text-gray-400">Todos los derechos reservados.</p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/inkspire.estampados00/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <Instagram size={28} />
          </a>
          <a
            href="https://www.facebook.com/InkspirePersonalizados"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Facebook size={28} />
          </a>
        </div>

        <div className="text-center md:text-right text-xs text-gray-400">
          <p>
            Hecho con 💜 por <span className="text-white font-medium">Jeniffer Paola Mancilla Marriga</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
