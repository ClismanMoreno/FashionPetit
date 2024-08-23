import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Información de la empresa */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-4xl font-semibold mb-2 text-center">
            FASHION PETITE
          </h2>
          <div className="flex flex-col justify-center items-center">
            <p className="text-sm mb-4 w-full md:w-2/3 text-center">
              En Fashion Petite, nos especializamos en ofrecer las últimas
              tendencias en ropa y accesorios para hombres y mujeres. Desde
              2005, hemos proporcionado a nuestros clientes ropa de alta calidad
              y moda actualizada. Nos enorgullecemos de ofrecer un excelente
              servicio al cliente y una experiencia de compra única.
            </p>
            <p className="text-xs">
              © {new Date().getFullYear()} Fashion Petite Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
