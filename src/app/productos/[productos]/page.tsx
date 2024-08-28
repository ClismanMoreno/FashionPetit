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
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

const ProductoPage = () => {
  const path = usePathname().split('/')[2].toLocaleLowerCase();

  const [data, setData] = useState<Producto>();
  const [reviewsData, setReviewsData] = useState<string[]>([]);

  const { addToCart, reviews, addToReview } = useCartStore();
  const notify = () => toast.success('¡Producto añadido al carrito!');
  const notifyReview = () => toast.success('¡Reseña Añadida!');

  useEffect(() => {
    const info = productos.find((producto: Producto) => producto.url === path);
    setData(info);
  }, [path]);

  useEffect(() => {
    if (data) {
      const productReviews = reviews.find((review) => review.id == data.id);
      setReviewsData(productReviews ? productReviews.content : []);
    }
  }, [data, reviews]);

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      [{ align: [] }],
      [{ color: [] }],
      ['code-block'],
      ['clean'],
    ],
  };

  const quillFormats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'align',
    'color',
    'code-block',
  ];

  const [content, setContent] = useState('');

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };

  if (!data) {
    return (
      <div className="flex justify-center items-center">
        <div className="loader_2" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center my-5">
      <div className="flex flex-col md:flex-row justify-around border-2 rounded-xl w-[90%] md:w-3/4 py-5">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src={data.img} alt={data.nombre} width={300} height={300} />
        </div>
        <div className="flex flex-col space-y-5 w-full md:w-1/2">
          <h1 className="text-purple-200 text-lg md:text-xl xl:text-4xl font-semibold text-center">
            {data?.nombre}
          </h1>
          <p className="text-slate-200 text-center">
            Precio: S/.{data?.precio}
          </p>
          <p className="text-gray-200 text-center">Marca: {data?.marca}</p>
          <div>
            <h2 className="font-semibold text-base md:text-xl text-pink-200 text-center">
              Medidas
            </h2>
            <div className="grid grid-cols-1 space-y-2 md:space-y-0 md:grid-cols-2 mt-4 md:mt-0">
              <p className="text-pink-100 text-xs md:text-base">
                &bull; Contorno de cintura: {data.cintura} cm
              </p>
              <p className="text-pink-100 text-xs md:text-base">
                &bull; Contorno de cadera: {data.cadera} cm
              </p>
              <p className="text-pink-100 text-xs md:text-base">
                &bull; Largo de Tiro: {data.largo_tiro} cm
              </p>
              <p className="text-pink-100 text-xs md:text-base">
                &bull; Contorno de pierna: {data.pierna} cm
              </p>
            </div>
          </div>
          <p className="text-white font-medium text-sm tracking-wide md:text-base text-center">
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
          <div className="mt-5 flex justify-center items-center">
            <button
              onClick={() => {
                addToCart(data);
                notify();
              }}
              className="w-40 border-2 text-pink-100 border-pink-400 rounded-lg font-bold hover:transition-all hover:delay-100 hover:bg-pink-400 hover:text-white p-2 text-sm md:text-base"
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-center font-bold text-pink-100 text-lg md:text-4xl underline">
          RESEÑAS
        </h2>
        <div className="mt-5 flex-col space-y-5">
          {reviewsData.map((review: string, ix: number) => (
            <div
              key={ix}
              className="text-pink-100 w-full border rounded-md text-center p-2 text-sm md:text-base"
              dangerouslySetInnerHTML={{
                __html: review,
              }}
            />
          ))}
        </div>
        <div className="h-[350px] w-full">
          <QuillEditor
            value={content}
            onChange={handleEditorChange}
            modules={quillModules}
            formats={quillFormats}
            className="w-full h-[100%] mt-10 bg-white pb-[70px] md:pb-[42px]"
          />
        </div>
        <div className="w-full flex justify-center items-center mt-5">
          <button
            onClick={() => {
              addToReview(data.id, content);
              notifyReview();
              setContent('');
            }}
            className="border rounded-md p-2 bg-purple-200 text-purple-900 hover:transition-all hover:delay-100 hover:bg-purple-500 text-sm md:text-base"
          >
            Enviar Reseña
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoPage;
