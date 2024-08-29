'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === email && user.password === password) {
        router.push('/productos');
      } else {
        setError('Correo o contraseña incorrectos.');
      }
    } else {
      setError('No hay ninguna cuenta registrada con ese correo.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-full max-w-sm bg-[#703e3e] p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Inicia Sesión
        </h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex flex-col space-y-3">
          <button
            className="w-full bg-[#5d426a] text-white p-2 rounded-md hover:bg-[#322439]"
            onClick={handleSubmit}
          >
            Iniciar Sesión
          </button>
          <button
            className="w-full bg-[#a94a48] text-white p-2 rounded-md hover:bg-[#823533]"
            onClick={() => {
              router.push('/register');
            }}
          >
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
