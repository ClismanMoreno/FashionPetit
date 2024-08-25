'use client';
import { useState } from 'react';
import CardProduct from './CardProduct';
import ListProduct from './ListProduct';
import Grid from '../assets/Grid';
import List from '../assets/List';

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
  },
];

const Vista = () => {
  const marcas = productos.map((producto) => producto.marca);
  const precios = productos.map((producto) => producto.precio);
  const uniqueMarcas = Array.from(new Set(marcas));
  const uniquePrecios = Array.from(new Set(precios));

  const [viewCard, setViewCard] = useState(true);
  return (
    <div>
      <h1 className="text-4xl text-center underline my-5 font-bold">
        RECOMENDADOS PARA TI
      </h1>
      <div className="flex gap-x-5 justify-center">
        <i
          className="border-2 p-1 flex justify-center items-center cursor-pointer"
          onClick={() => {
            setViewCard(true);
          }}
        >
          <Grid />
        </i>
        <i
          className="border-2 p-1 flex justify-center items-center cursor-pointer"
          onClick={() => {
            setViewCard(false);
          }}
        >
          <List />
        </i>
      </div>
      {viewCard ? (
        <>
          <CardProduct
            productos={productos}
            uniqueMarcas={uniqueMarcas}
            uniquePrecios={uniquePrecios}
          />
        </>
      ) : (
        <>
          <ListProduct
            productos={productos}
            uniqueMarcas={uniqueMarcas}
            uniquePrecios={uniquePrecios}
          />
        </>
      )}
    </div>
  );
};

export default Vista;
