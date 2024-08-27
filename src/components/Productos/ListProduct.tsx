import { useCartStore } from '@/store/useCartStore';
import Image from 'next/image';
import { toast } from 'react-toastify';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  img: string;
  cintura: number;
  cadera: number;
  largo_tiro: number;
  pierna: number;
  marca: string;
}

interface ComponenteProps {
  productos: Producto[];
  uniqueMarcas: string[];
  uniquePrecios: number[];
}

const ListProduct: React.FC<ComponenteProps> = ({
  productos,
  uniqueMarcas,
  uniquePrecios,
}) => {
  const { addToCart } = useCartStore();

  const notify = () => toast.success('¡Producto añadido al carrito!');
  return (
    <div className="flex flex-col justify-center items-center">
      {productos.map((producto) => (
        <div
          className="shadow-xl p-1 w-1/2 flex justify-around border border-pink-100 rounded-lg"
          key={producto.id}
        >
          <div>
            <Image
              className="object-cover"
              width={300}
              height={300}
              src={producto.img}
              alt={producto.nombre}
            />
          </div>
          <div className="mt-5">
            <h2 className="text-2xl text-zinc-200 text-center font-semibold">
              {producto.nombre}
            </h2>
            <p className="text-sm text-gray-200 mt-10 mb-5">
              Marca: {producto.marca}
            </p>
            <p className="font-semibold text-pink-200">
              Precio: {producto.precio}
            </p>
            <div className="flex flex-col justify-center items-center mt-10 space-y-5">
              <button
                onClick={() => {
                  addToCart(producto);
                  notify();
                }}
                className="w-40 border-2 text-pink-100 border-pink-400 rounded-lg font-bold hover:transition-all hover:delay-100 hover:bg-pink-400 hover:text-white p-2"
              >
                Añadir al carrito
              </button>
              <a
                href={`/productos/${producto.nombre.replace(' ', '-')}`}
                className="w-40 text-center border-2 text-cyan-100 border-cyan-400 rounded-lg font-bold hover:transition-all hover:delay-100 hover:bg-cyan-400 hover:text-white p-2"
              >
                Ver Detalles
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProduct;
