'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthPage = () => {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contornoCintura, setContornoCintura] = useState('');
  const [name, setName] = useState('');
  const [contornoCadera, setContornoCadera] = useState('');
  const [contornoPierna, setContornoPierna] = useState('');
  const [largoTiro, setLargoTiro] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Si el usuario ya está autenticado, redirigirlo al dashboard
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      router.push('/productos');
    }
  }, [router]);

  const handleSubmit = () => {
    if (isRegistering) {
      // Registro
      const user = {
        email,
        password,
        contornoCintura,
        contornoCadera,
        contornoPierna,
        largoTiro,
        name,
      };
      localStorage.setItem('user', JSON.stringify(user));
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      setIsRegistering(false);
    } else {
      // Inicio de sesión
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
    }
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-full max-w-sm bg-[#703e3e] p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isRegistering ? 'Regístrate' : 'Inicia Sesión'}
        </h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        {!isRegistering ? (
          <></>
        ) : (
          <>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </>
        )}
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
        {!isRegistering ? (
          <></>
        ) : (
          <>
            <input
              type="text"
              placeholder="Contorno de cintura (cm)"
              className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={contornoCintura}
              onChange={(e) => setContornoCintura(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Contorno de cadera (cm)"
              className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={contornoCadera}
              onChange={(e) => setContornoCadera(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Largo de pierna (cm)"
              className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={contornoPierna}
              onChange={(e) => setContornoPierna(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Largo de tiro (cm)"
              className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={largoTiro}
              onChange={(e) => setLargoTiro(e.target.value)}
              required
            />
          </>
        )}

        <button
          className="w-full bg-[#5d426a] text-white p-2 rounded-md hover:bg-[#322439]"
          onClick={handleSubmit}
        >
          {isRegistering ? 'Registrarse' : 'Iniciar Sesión'}
        </button>
        <div className="mt-4 text-center">
          <p>
            {isRegistering
              ? '¿Ya tienes una cuenta?'
              : '¿No tienes una cuenta?'}
            <button
              className="text-[#231828] ml-2 hover:underline"
              onClick={() => {
                setIsRegistering(!isRegistering);
                setError('');
              }}
            >
              {isRegistering ? 'Inicia sesión' : 'Regístrate'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
