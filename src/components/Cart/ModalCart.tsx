import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCartStore } from '@/store/useCartStore';
import Trash from '../assets/Trash';
import { toast } from 'react-toastify';
import ClearCart from '../assets/ClearCart';

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
  quantity: number;
}

interface ModalProps {
  productos: Producto[];
  isOpen: boolean;
  toggleModal: () => void;
}

const ModalCart: React.FC<ModalProps> = ({
  productos,
  isOpen,
  toggleModal,
}) => {
  const [message, setMessage] = useState<string>('');
  const [priceTotal, setPriceTotal] = useState<number>(0);
  const [montage, SetMontage] = useState(false);

  useEffect(() => {
    let listText = '';
    let total = 0.0;

    productos.forEach((producto) => {
      listText += `Prenda: ${producto.nombre}, Cantidad: ${
        producto.quantity
      }, Precio: ${producto.quantity * producto.precio} %0A`;
      total += producto.quantity * producto.precio;
    });

    setPriceTotal(total);
    setMessage(
      `https://wa.me/51961751471?text=%C2%A1Hola!%0AMis%20productos%20son:%0A${listText}%20%20precio%20total:%20${total.toFixed(
        2
      )}`
    );
    SetMontage(true);
  }, [productos]);

  const { incrementQuantity, decrementQuantity, removeFromCart, clearCart } =
    useCartStore();

  const notify = () => toast.error('¡Producto eliminado del carrito!');
  const notifyClear = () => toast.error('¡Productos eliminados!');
  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-80 transform transition-transform duration-300 overflow-y-scroll ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } bg-white shadow-lg z-50`}
      >
        <div className="p-2 flex flex-col space-y-4">
          <div className="flex items-center justify-between mx-2">
            <h2 className="text-lg font-semibold text-pink-600 text-center mb-2">
              Productos
            </h2>
            <i
              className="cursor-pointer border border-red-700 rounded-3xl w-10 h-10 flex justify-center items-center hover:transition-all hover:delay-100 hover:bg-red-300/40"
              onClick={() => {
                clearCart();
                notifyClear();
                toggleModal();
              }}
            >
              <ClearCart />
            </i>
          </div>
          {montage &&
            productos?.map((producto: Producto) => (
              <div
                className="border-2 border-slate-400 p-1 flex justify-around"
                key={producto.id}
              >
                <div>
                  <Image
                    src={producto.img}
                    alt="Producto"
                    width={60}
                    height={30}
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <h3 className="text-[#b06262] font-semibold">
                      {producto.nombre}
                    </h3>
                    <i
                      className="cursor-pointer"
                      onClick={() => {
                        removeFromCart(producto.id);
                        notify();
                      }}
                    >
                      <Trash />
                    </i>
                  </div>
                  <p className="text-pink-600">{producto.marca}</p>
                  <div className="flex justify-center items-center">
                    <p className="text-indigo-800 mr-2">Cantidad: </p>
                    <div className="flex gap-x-2  ">
                      <button
                        disabled={producto.quantity < 2}
                        onClick={() => {
                          decrementQuantity(producto.id);
                        }}
                        className={`w-5 h-5 border text-black text-lg flex items-center justify-center ${
                          producto.quantity < 2 ? 'opacity-40' : 'opacity-100'
                        }`}
                      >
                        {'-'}
                      </button>
                      <p className="text-indigo-800">{producto.quantity}</p>
                      <button
                        className="w-5 h-5 border text-black text-lg flex items-center justify-center"
                        onClick={() => {
                          incrementQuantity(producto.id);
                        }}
                      >
                        {'+'}
                      </button>
                    </div>
                  </div>
                  <p className="text-[#634a6f]">
                    Precio: S/.{producto.precio * producto.quantity}
                  </p>
                </div>
              </div>
            ))}
          <p className="font-bold text-purple-800 text-center my-2">
            Precio Total: S/.{priceTotal.toFixed(2)}
          </p>
          <div className="flex justify-around items-center mt-4 ">
            <a
              href={message}
              target="_blank"
              className="px-4 py-2 bg-green-500 rounded text-pink-50"
            >
              Cotizar
            </a>
            <button
              onClick={toggleModal}
              className="px-4 py-2 bg-pink-600 rounded text-pink-50"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleModal}
        />
      )}
    </>
  );
};

export default ModalCart;
