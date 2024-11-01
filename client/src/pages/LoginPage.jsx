import React from 'react';
import { useAuth } from '../context/authContext';
import { useForm } from 'react-hook-form';

export const LoginPage = () => {
  const { login, isAuthenticated, error } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await login(data);
    console.log(data);
  };

  return (
    <>
      <div
        className="
      flex justify-center items-center h-screen 
      "
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="
        flex flex-col gap-4 border p-4 bg-lime-800
        "
        >
          <input
            type="email"
            placeholder="email"
            name="email"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="bg-red-500">Email es requerido</span>
          )}
          <input
            type="password"
            placeholder="password"
            name="password"
            {...register('password', { required: true })}
          />
          {errors.password && (
            <span className="bg-red-500">Password es requerido</span>
          )}
          <button
            className="
          bg-pink-600 text-white p-2 rounded-md
          "
            type="submit"
          >
            Iniciar sesión
          </button>
        </form>
        {error && <p>{error.message}</p>}
      </div>
    </>
  );
};
