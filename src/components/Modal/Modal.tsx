import { useRouter } from 'next/navigation';

interface ModalProps {
  userEmail: string | null;
  userContornoCintura: string | null;
  userContornoPierna: string | null;
  userContornoCadera: string | null;
  userLargoTiro: string | null;
  onClose: () => void;
  isVisible: boolean;
}

const Modal: React.FC<ModalProps> = ({
  userEmail,
  userContornoCintura,
  userContornoPierna,
  userContornoCadera,
  userLargoTiro,
  onClose,
  isVisible,
}) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear(); // Limpia el localStorage
    router.push('/'); // Redirige a la página de inicio
  };

  return (
    <div
      className={`absolute z-50 right-0 top-8 md:top-11 w-60 bg-white rounded-lg shadow-xl transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="p-4">
        <h2 className="text-base md:text-lg font-semibold mb-2 text-blue-800">
          Información del Usuario
        </h2>
        <div className="flex flex-col gap-y-2 md:gap-y-1">
          <p className="text-black text-xs md:text-sm truncate">
            <strong>Correo:</strong> {userEmail || 'No disponible'}
          </p>
          <p className="text-black text-xs md:text-sm">
            <strong>Cintura:</strong> {userContornoCintura || 'No disponible'}{' '}
            cm
          </p>
          <p className="text-black text-xs md:text-sm">
            <strong>Pierna:</strong> {userContornoPierna || 'No disponible'} cm
          </p>
          <p className="text-black text-xs md:text-sm">
            <strong>Cadera:</strong> {userContornoCadera || 'No disponible'} cm
          </p>
          <p className="text-black text-xs md:text-sm">
            <strong>Largo Tiro:</strong> {userLargoTiro || 'No disponible'} cm
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 w-full px-4 py-2 bg-pink-300 text-white rounded-lg hover:bg-pink-700 hover:transition-all hover:delay-100 focus:outline-none text-sm md:text-base"
        >
          Cerrar
        </button>
        <button
          onClick={handleLogout}
          className="mt-2 w-full px-4 py-2 bg-purple-300 text-white rounded-lg hover:bg-purple-700 hover:transition-all hover:delay-100 focus:outline-none text-sm md:text-base"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Modal;
