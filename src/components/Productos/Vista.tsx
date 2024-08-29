'use client';
import { useState } from 'react';
import CardProduct from './CardProduct';
import ListProduct from './ListProduct';
import Grid from '../assets/Grid';
import List from '../assets/List';
import { Range } from 'react-range';

const productos = [
  {
    id: 1,
    nombre: 'Pantalon 1',
    precio: 60.9,
    img: '/images/pantalon-1.jpg',
    cintura: 80,
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

const Vista = () => {
  const [viewCard, setViewCard] = useState(true);
  const [selectedMarca, setSelectedMarca] = useState('');
  const minPrice = Math.min(...productos.map((p) => p.precio));
  const maxPrice = Math.max(...productos.map((p) => p.precio));
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  const marcas = productos.map((producto) => producto.marca);
  const uniqueMarcas = Array.from(new Set(marcas));

  const handleMarcaChange = (event: any) => {
    setSelectedMarca(event.target.value);
  };

  const handlePriceChange = (values: any) => {
    setPriceRange(values);
  };

  const filteredProductos = productos.filter((producto) => {
    const isMarcaMatch = selectedMarca
      ? producto.marca === selectedMarca
      : true;
    const isPriceMatch =
      producto.precio >= priceRange[0] && producto.precio <= priceRange[1];
    return isMarcaMatch && isPriceMatch;
  });

  return (
    <div>
      <h1 className="text-lg md:text-xl lg:text-4xl text-pink-100 text-center underline my-5 font-bold">
        RECOMENDADOS PARA TI
      </h1>

      <div className="w-full flex flex-col md:flex-row justify-between">
        <div className="flex justify-center gap-10 mb-5 w-full">
          {/* Filtro por Marca */}
          <div>
            <label className="block text-sm font-medium text-red-300">
              Marca:
            </label>
            <select
              id="marca"
              value={selectedMarca}
              onChange={handleMarcaChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Todas las marcas</option>
              {uniqueMarcas.map((marca) => (
                <option key={marca} value={marca}>
                  {marca}
                </option>
              ))}
            </select>
          </div>

          {/* Filtro por Precio con Slider */}
          <div className="sm:w-1/4 md:w-1/2 lg:w-1/4">
            <label className="block text-sm font-medium text-red-300">
              Rango de Precios:
            </label>
            <Range
              step={0.1}
              min={minPrice}
              max={maxPrice}
              values={priceRange}
              onChange={handlePriceChange}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    height: '6px',
                    background: 'linear-gradient(to right, #ccc, #f6abce)',
                    borderRadius: '4px',
                    alignSelf: 'center',
                    margin: '1rem 0',
                    position: 'relative',
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props, isDragged }) => (
                <div
                  {...props}
                  key={props.key}
                  style={{
                    ...props.style,
                    height: '15px',
                    width: '15px',
                    backgroundColor: '#dd8bb2',
                    borderRadius: '50%',
                    outline: 'none',
                    position: 'absolute',
                    top: '-10px', // Ajuste para mover las bolitas hacia arriba
                  }}
                />
              )}
            />
            <div className="flex justify-between text-xs">
              <span className="text-purple-200">
                S/.{priceRange[0].toFixed(2)}
              </span>
              <span className="text-purple-200">
                S/.{priceRange[1].toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-x-5 justify-center mb-5 w-full">
          <i
            className="border-2 rounded-md p-1 flex justify-center items-center cursor-pointer w-10 h-10"
            onClick={() => setViewCard(true)}
          >
            <Grid />
          </i>
          <i
            className="border-2 rounded-md p-1 flex justify-center items-center cursor-pointer w-10 h-10"
            onClick={() => setViewCard(false)}
          >
            <List />
          </i>
        </div>
      </div>

      {viewCard ? (
        <CardProduct productos={filteredProductos} />
      ) : (
        <ListProduct productos={filteredProductos} />
      )}
    </div>
  );
};

export default Vista;
