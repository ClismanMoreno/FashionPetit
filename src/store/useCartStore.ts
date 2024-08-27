import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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

interface CartItem extends Producto {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (product: Producto) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  incrementQuantity: (productId: number) => void;
  decrementQuantity: (productId: number) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const existingProduct = state.cart.find(
            (item) => item.id === product.id
          );
          if (existingProduct) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return {
              cart: [...state.cart, { ...product, quantity: 1 }],
            };
          }
        }),
      incrementQuantity: (productId) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),
      decrementQuantity: (productId) =>
        set((state) => {
          const product = state.cart.find((item) => item.id === productId);
          if (product) {
            if (product.quantity === 1) {
              return {
                cart: state.cart.filter((item) => item.id !== productId),
              };
            } else {
              return {
                cart: state.cart.map((item) =>
                  item.id === productId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                ),
              };
            }
          }
          return state;
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),
      clearCart: () => set({ cart: [] }),

      getTotal: () => {
        const state = get(); // obtener el estado actual
        return state.cart.reduce(
          (total, item) => total + item.precio * item.quantity,
          0
        );
      },
    }),
    {
      name: 'cart-storage', // nombre del key en localStorage
      getStorage: () => localStorage, // puedes cambiar a sessionStorage si lo prefieres
    }
  )
);
