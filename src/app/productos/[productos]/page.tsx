'use client';
const productos = [
  {
    id: 1,
    nombre: 'Pantalon 1',
    precio: 60.9,
    img: '/images/pantalon-1.jpg',
    cintura: 50,
    cadera: 50,
    largo_tiro: 50,
    pierna: 50,
    marca: 'new-x',
    url: 'pantalon-1',
  },
  {
    id: 2,
    nombre: 'Pantalon 2',
    precio: 76.5,
    img: '/images/pantalon-2.jpg',
    cintura: 50,
    cadera: 50,
    largo_tiro: 50,
    pierna: 50,
    marca: 'new-y',
    url: 'pantalon-2',
  },
  {
    id: 3,
    nombre: 'Pantalon 3',
    precio: 99.5,
    img: '/images/pantalon-3.jpg',
    cintura: 50,
    cadera: 50,
    largo_tiro: 50,
    pierna: 50,
    marca: 'new-z',
    url: 'pantalon-3',
  },
  {
    id: 4,
    nombre: 'Pantalon 4',
    precio: 88.5,
    img: '/images/pantalon-4.jpg',
    cintura: 50,
    cadera: 50,
    largo_tiro: 50,
    pierna: 50,
    marca: 'new-a',
    url: 'pantalon-4',
  },
  {
    id: 5,
    nombre: 'Pantalon 5',
    precio: 95.8,
    img: '/images/pantalon-5.jpg',
    cintura: 50,
    cadera: 50,
    largo_tiro: 50,
    pierna: 50,
    marca: 'new-b',
    url: 'pantalon-5',
  },
  {
    id: 6,
    nombre: 'Pantalon 6',
    precio: 59.3,
    img: '/images/pantalon-6.jpg',
    cintura: 50,
    cadera: 50,
    largo_tiro: 50,
    pierna: 50,
    marca: 'new-c',
    url: 'pantalon-6',
  },
  {
    id: 7,
    nombre: 'Pantalon 7',
    precio: 68.9,
    img: '/images/pantalon-7.jpg',
    cintura: 50,
    cadera: 50,
    largo_tiro: 50,
    pierna: 50,
    marca: 'new-d',
    url: 'pantalon-7',
  },
  {
    id: 8,
    nombre: 'Pantalon 8',
    precio: 95.2,
    img: '/images/pantalon-8.jpeg',
    cintura: 50,
    cadera: 50,
    largo_tiro: 50,
    pierna: 50,
    marca: 'new-e',
    url: 'pantalon-8',
  },
  {
    id: 9,
    nombre: 'Pantalon 9',
    precio: 79.9,
    img: '/images/pantalon-9.jpeg',
    cintura: 50,
    cadera: 50,
    largo_tiro: 50,
    pierna: 50,
    marca: 'new-f',
    url: 'pantalon-9',
  },
  {
    id: 10,
    nombre: 'Pantalon 10',
    precio: 82.7,
    img: '/images/pantalon-10.jpeg',
    cintura: 50,
    cadera: 50,
    largo_tiro: 50,
    pierna: 50,
    marca: 'new-g',
    url: 'pantalon-10',
  },
  {
    id: 11,
    nombre: 'Pantalon 11',
    precio: 120,
    img: '/images/pantalon-11.jpeg',
    cintura: 50,
    cadera: 50,
    largo_tiro: 50,
    pierna: 50,
    marca: 'new-h',
    url: 'pantalon-11',
  },
];

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
  url: string;
}

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useCartStore } from '@/store/useCartStore';

const ProductoPage = () => {
  const path = usePathname().split('/')[2].toLocaleLowerCase();

  const [data, setData] = useState<Producto>();

  const { addToCart } = useCartStore();
  const notify = () => toast.success('¡Producto añadido al carrito!');

  useEffect(() => {
    const info = productos.find((producto: Producto) => producto.url === path);
    setData(info);
  }, [path]);

  if (!data) {
    return (
      <div className="flex justify-center items-center">
        <div className="loader_2" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center my-5">
      <div className="flex justify-around border-2 rounded-xl w-3/4 py-5">
        <div className="w-1/2 flex justify-center">
          <Image src={data.img} alt={data.nombre} width={300} height={300} />
        </div>
        <div className="flex flex-col space-y-5 w-1/2">
          <h1 className="text-purple-200 text-4xl font-semibold">
            {data?.nombre}
          </h1>
          <p className="text-slate-200">Precio: ${data?.precio}</p>
          <p className="text-gray-200">Marca: {data?.marca}</p>
          <p className="text-white font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            scelerisque vel nisl ac pellentesque. In at vulputate enim, nec
            eleifend erat. Sed consectetur, metus at blandit tincidunt, quam
            erat suscipit leo, quis fringilla metus elit et eros. Etiam congue
            congue eros non ullamcorper. Praesent mollis erat at sapien
            tincidunt, eu dictum dui imperdiet. Etiam pharetra elit nunc, vitae
            auctor tortor varius pretium. Etiam metus magna, ultrices in risus
            sed, venenatis porttitor diam. Quisque ultrices est eu purus
            consectetur convallis.
          </p>
          <div className="mt-5">
            <button
              onClick={() => {
                addToCart(data);
                notify();
              }}
              className="w-40 border-2 text-pink-100 border-pink-400 rounded-lg font-bold hover:transition-all hover:delay-100 hover:bg-pink-400 hover:text-white p-2"
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoPage;
