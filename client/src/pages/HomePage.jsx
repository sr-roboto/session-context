import React from 'react';
import { useAuth } from '../context/authContext';

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
          <button
            onClick={logout}
            className="
          bg-teal-600 text-white p-2 rounded-md animate-spin 
          "
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </>
  );
};
