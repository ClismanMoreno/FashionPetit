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

const CardProduct: React.FC<ComponenteProps> = ({
  productos,
  uniqueMarcas,
  uniquePrecios,
}) => {
  const { addToCart } = useCartStore();
  const notify = () => toast.success('¡Producto añadido al carrito!');
  return (
    <div className="grid grid-cols-3 place-items-center gap-y-10">
      {productos.map((producto) => (
        <div className="shadow-lg p-2" key={producto.id}>
          <h2 className="text-xl text-pink-500 text-center">
            {producto.nombre}
          </h2>

          <Image
            className="object-cover"
            width={300}
            height={300}
            src={producto.img}
            alt={producto.nombre}
          />
          <p className="text-sm text-slate-500">Marca: {producto.marca}</p>
          <p className="font-semibold text-pink-400">
            Precio: {producto.precio}
          </p>
          <div className="flex flex-col justify-center items-center mt-5 space-y-5">
            <button
              onClick={() => {
                addToCart(producto);
                notify();
              }}
              className="w-40 border-2 border-pink-400 rounded-lg font-bold hover:transition-all hover:delay-100 hover:bg-pink-400 hover:text-white p-2"
            >
              Añadir al carrito
            </button>
            <button className="w-40 border-2 border-cyan-400 rounded-lg font-bold hover:transition-all hover:delay-100 hover:bg-cyan-400 hover:text-white p-2">
              Ver Detalles
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProduct;
