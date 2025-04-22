import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#06002c] text-white p-4 fixed w-full z-10 shadow-lg font-orbitron">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">INKSPIRE</h1>

        {/* Botón hamburguesa - visible en móviles */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navegación principal (escritorio) */}
        <nav className="hidden md:flex space-x-6 font-semibold text-sm">
          <a href="#home" className="hover:text-[#f9008f] transition duration-300">Inicio</a>
          <a href="#about" className="hover:text-[#f9008f] transition duration-300">Sobre nosotros</a>
          <a href="#services" className="hover:text-[#f9008f] transition duration-300">Servicios</a>
          <a href="#gallery" className="hover:text-[#f9008f] transition duration-300">Galería</a>
          <a href="#contact" className="hover:text-[#f9008f] transition duration-300">Contacto</a>
        </nav>
      </div>

      {/* Menú desplegable (móvil) */}
      {isOpen && (
        <div className="md:hidden bg-[#06002c] text-center py-4 space-y-3 font-semibold text-sm">
          <a href="#home" className="block hover:text-[#f9008f] transition duration-300">Inicio</a>
          <a href="#about" className="block hover:text-[#f9008f] transition duration-300">Sobre nosotros</a>
          <a href="#services" className="block hover:text-[#f9008f] transition duration-300">Servicios</a>
          <a href="#gallery" className="block hover:text-[#f9008f] transition duration-300">Galería</a>
          <a href="#contact" className="block hover:text-[#f9008f] transition duration-300">Contacto</a>
        </div>
      )}
    </header>
  );
};
