import React from 'react';
import { useAuth } from '../context/authContext';
import SrWhite from '../assets/wwhite162.jpg';

export const HomePage = () => {
  const { state, logout } = useAuth();
  return (
    <>
      <div
        className="
      flex justify-center items-center h-screen
      "
      >
        <div
          className="
        flex justify-center items-center flex-col gap-4
        "
        >
          <h1
            className="
          text-9xl font-bold text-center
          "
          >
            Bienvenido{' '}
            <span className="font-thin text-pink-600">{state.user.name}</span>
          </h1>
          <img src={SrWhite} alt="Sr White" className="w-96" />
          <button
            onClick={logout}
            className="
          bg-green-950 text-white p-2 rounded-md animate-bounce
          "
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </>
  );
};
