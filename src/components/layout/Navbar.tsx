import React, { useState, useEffect } from 'react';
import MyAvatar from '../Avatar/MyAvatar';
import Modal from '../Modal/Modal';
import Image from 'next/image';
import { useCartStore } from '@/store/useCartStore';
import Cart from '../assets/Cart';
import ModalCart from '../Cart/ModalCart';

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userContornoCintura, setUserContornoCintura] = useState<string | null>(
    null
  );
  const [userContornoCadera, setUserContornoCadera] = useState<string | null>(
    null
  );
  const [userContornoPierna, setUserContornoPierna] = useState<string | null>(
    null
  );
  const [userLargoTiro, setUserLargoTiro] = useState<string | null>(null);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
      const user = localStorage.getItem('user');
      if (user) {
        const parsedUser = JSON.parse(user);
        setUserName(parsedUser.name); // o usar un nombre completo si está disponible
        setUserEmail(parsedUser.email);
        setUserContornoCintura(parsedUser.contornoCintura);
        setUserContornoCadera(parsedUser.contornoCadera);
        setUserContornoPierna(parsedUser.contornoPierna);
        setUserLargoTiro(parsedUser.largoTiro);
      }
    }
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const { cart } = useCartStore();

  const [isOpen, setIsOpen] = useState(false);

  const toggleModalProducts = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center p-2 md:p-4 bg-[#703e3e] text-white">
      <div className="flex w-1/2">
        <div className="w-1/4">
          <Image src={'/images/logo.png'} alt="logo" height={80} width={80} />
        </div>
        <div className="w-3/4 flex items-center sm:justify-center gap-x-5 md:gap-x-20">
          <a href="/productos" className="hover:underline text-sm md:text-base">
            Productos
          </a>
          <a href="/tutorial" className="hover:underline text-sm md:text-base">
            Tutorial
          </a>
        </div>
      </div>
      <div className="w-1/2 flex justify-end items-center mr-4">
        <div className="relative">
          <button
            onClick={() => {
              toggleModalProducts();
            }}
            className="p-2 border rounded-3xl hover:transition-all hover:bg-pink-400/50 hover:delay-100"
          >
            <Cart />
          </button>
          <div className="w-6 h-6 bg-pink-800 rounded-full border absolute -right-3 -top-4">
            {isClient ? (
              <p className="text-center text-pink-50">{cart.length}</p>
            ) : (
              <div className="flex justify-center items-center">
                <div className="loader" />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="relative flex flex-col md:flex-row justify-center items-center gap-x-4 md:mr-4 w-1/4">
        <p className="font-serif font-semibold text-xs text-center pt-2 md:pt-0 md:text-base order-2 md:order-1">
          ¡Bienvenida {userName}!
        </p>
        <button
          onClick={toggleModal}
          className="focus:outline-none order-1 md:order-2"
        >
          <MyAvatar />
        </button>
        <Modal
          userEmail={userEmail}
          userContornoCintura={userContornoCintura}
          userContornoPierna={userContornoPierna}
          userContornoCadera={userContornoCadera}
          userLargoTiro={userLargoTiro}
          onClose={toggleModal}
          isVisible={isModalOpen}
        />
      </div>
      <ModalCart
        productos={cart}
        toggleModal={toggleModalProducts}
        isOpen={isOpen}
      />
    </nav>
  );
};

export default Navbar;
