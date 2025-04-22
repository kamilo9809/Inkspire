export const Home = () => {
    return (
      <div className="pt-20 bg-[#050320] text-white font-sans min-h-screen">
        <section id="home" className="p-10 text-center">
          <h2 className="text-5xl font-bold mb-4 text-pink-500 uppercase tracking-wide">
            Bienvenido a INKSPIRE
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto text-gray-200">
            Somos especialistas en estampados personalizados, serigrafía y
            transfer en seco con los más altos estándares de calidad.
          </p>
          <img
            src="camisaleon.png"
            alt="Camiseta estampada"
            className="mx-auto rounded-lg shadow-lg max-w-md"
          />
        </section>
  
        <section id="about" className="p-10">
          <h3 className="text-3xl font-semibold mb-4 text-center text-pink-500 uppercase">
            Sobre nosotros
          </h3>
          <p className="max-w-3xl mx-auto text-lg text-center text-gray-300">
            🎨 Inkspire Estampados es una marca creativa especializada en la
            personalización de productos textiles y promocionales. Diseñamos y
            estampamos camisas, gorras, tazas, cojines y mucho más, con diseños
            únicos que reflejan tu estilo, tu marca o tu mensaje. Transformamos
            tus ideas en productos originales, ideales para uso personal, regalos
            o emprendimientos. 🖌️ Personalizamos con amor, estampamos con calidad.
          </p>
          <div className="mt-6 text-center">
            <img
              src="personatrabajando.png"
              alt="Diseñador trabajando"
              className="mx-auto rounded-lg shadow-lg max-w-md"
            />
          </div>
        </section>
  
        <section id="services" className="p-10 bg-[#0a0528]">
          <h3 className="text-3xl font-semibold mb-4 text-center text-pink-500 uppercase">
            Nuestros Servicios
          </h3>
          <ul className="list-disc pl-10 max-w-2xl mx-auto text-lg text-gray-200 space-y-2">
            <li>
              Estampados personalizados para eventos, empresas o uso personal.
            </li>
            <li>Serigrafía de alta calidad y durabilidad.</li>
            <li>Transfer en seco con acabados profesionales.</li>
            <li>Sublimación en camisetas, gorras, y más.</li>
          </ul>
        </section>
  
        <section id="gallery" className="p-10">
          <h3 className="text-3xl font-semibold mb-4 text-center text-pink-500 uppercase">
            Galería
          </h3>
          <p className="text-center mb-6 text-gray-300">Una muestra de nuestro arte:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <img
              src="camisanegra.png"
              alt="camisanegra"
              className="rounded-lg shadow-md w-[400px] h-[400px] object-cover"
            />
            <img
              src="gorra.png"
              alt="Estampado 2"
              className="rounded-lg shadow-md w-[400px] h-[400px] object-cover"
            />
            <img
              src="almohada.png"
              alt="Estampado 3"
              className="rounded-lg shadow-md w-[400px] h-[400px] object-cover"
            />
            <img
              src="tazas.png"
              alt="Estampado 4"
              className="rounded-lg shadow-md w-[400px] h-[400px] object-cover"
            />
            <img
              src="almohada2.png"
              alt="Estampado 5"
              className="rounded-lg shadow-md w-[400px] h-[400px] object-cover"
            />
            <img
              src="gorras.png"
              alt="Estampado 6"
              className="rounded-lg shadow-md w-[400px] h-[400px] object-cover"
            />
          </div>
        </section>
  
        <section id="contact" className="p-10 text-center bg-[#0f072f]">
          <h3 className="text-3xl font-semibold mb-4 text-pink-500 uppercase">Contacto</h3>
          <p className="text-lg text-gray-300">¿Listo para personalizar tu prenda?</p>
          <p className="mt-4 text-gray-200">
            📧 <strong>Email:</strong> inkspireestampados@gmail.com
          </p>
          <p className="text-gray-200">
            📞 <strong>Teléfono:</strong> +57 3023060543
          </p>
          <p className="mt-4 text-gray-200">📍 Medellín, Colombia</p>
        </section>
      </div>
    );
  };
  