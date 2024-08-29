'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen">
      {/* Fondo con opacidad */}
      <div className="absolute inset-0 bg-[url('/images/fondo.jpg')] bg-cover bg-center opacity-50 z-0"></div>
      {/* Contenido de la página */}
      <div className="relative z-10 text-white">
        <div className="h-20 bg-black/80 w-full flex justify-between items-center px-2 sm:px-10">
          <div className="w-1/4">
            <Image src={'/images/logo.png'} alt="logo" height={80} width={80} />
          </div>
          <div className="flex gap-x-3 sm:gap-x-10">
            <button
              onClick={() => {
                router.push('/login');
              }}
              className="h-8 w-24 sm:w-36 text-sm sm:text-base border border-pink-900 rounded-lg hover:transition-all hover:delay-100 hover:bg-pink-950 font-medium"
            >
              Iniciar Sesión
            </button>
            <button
              onClick={() => {
                router.push('/register');
              }}
              className="h-8 w-24 sm:w-36 text-sm sm:text-base border border-purple-900 rounded-lg hover:transition-all hover:delay-100 hover:bg-purple-950 font-medium"
            >
              Registrarse
            </button>
          </div>
        </div>
        <h1 className="text-5xl font-bold text-center mt-32">
          Bienvenido a Fashion Petite
        </h1>
        <p className="mt-4 text-xl font-semibold text-center">
          la moda siempre contigo
        </p>
      </div>
    </main>
  );
}
