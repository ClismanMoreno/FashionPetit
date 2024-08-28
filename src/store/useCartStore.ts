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

interface Review {
  id: number;
  content: string[];
}
const state_initial = [
  {
    id: 1,
    content: [],
  },
  {
    id: 2,
    content: ['Buena prenda'],
  },
  {
    id: 3,
    content: [],
  },
  {
    id: 4,
    content: [],
  },
  {
    id: 5,
    content: [],
  },
  {
    id: 6,
    content: [],
  },
  {
    id: 7,
    content: [],
  },
  {
    id: 8,
    content: [],
  },
  {
    id: 9,
    content: [],
  },
  {
    id: 10,
    content: [],
  },
  {
    id: 11,
    content: [],
  },
];
interface CartState {
  cart: CartItem[];
  reviews: Review[];
  addToReview: (id: number, content: string) => void;
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
      reviews: state_initial,
      addToReview: (id, content) =>
        set((state) => {
          const existingReviewIndex = state.reviews.findIndex(
            (review) => review.id === id
          );

          if (existingReviewIndex !== -1) {
            // Si la reseña ya existe, agrega el nuevo contenido a la reseña existente
            const updatedReviews = [...state.reviews];
            updatedReviews[existingReviewIndex].content.push(content);
            return { reviews: updatedReviews };
          } else {
            // Si la reseña no existe, crea una nueva
            return { reviews: [...state.reviews, { id, content: [content] }] };
          }
        }),
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
