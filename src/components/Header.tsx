// components/Header.jsx
export const Header = () => {
    return (
      <header className="bg-[#06002c] text-white p-6 fixed w-full z-10 shadow-lg font-orbitron">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">INKSPIRE</h1>
          <nav className="space-x-6 font-semibold text-sm">
            <a href="#home" className="hover:text-[#f9008f] transition duration-300">Inicio</a>
            <a href="#about" className="hover:text-[#f9008f] transition duration-300">Sobre nosotros</a>
            <a href="#services" className="hover:text-[#f9008f] transition duration-300">Servicios</a>
            <a href="#gallery" className="hover:text-[#f9008f] transition duration-300">Galería</a>
            <a href="#contact" className="hover:text-[#f9008f] transition duration-300">Contacto</a>
          </nav>
        </div>
      </header>
    );
  };
  