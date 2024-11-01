// FILE: authContext.jsx
import { createContext, useContext, useReducer } from 'react';
import { useSession } from '../hooks/useSession';
import {
  loginRequest,
  logoutRequest,
  verifyTokenRequest,
} from '../axios/userRequest';

const AuthContext = createContext();

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(useSession, {
    user: null,
    error: null,
    loading: false,
    isAuthenticated: false,
  });

  const login = async (data) => {
    dispatch({ type: 'LOGIN' });

    try {
      const response = await loginRequest(data);
      console.log(response);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response });
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR', payload: error });
    }
  };

  const logout = async () => {
    dispatch({ type: 'LOGOUT' });

    try {
      await logoutRequest();
      dispatch({ type: 'LOGOUT_SUCCESS' });
    } catch (error) {
      dispatch({ type: 'LOGOUT_ERROR', payload: error });
    }
  };

  const verifyToken = async () => {
    dispatch({ type: 'LOGIN' });

    try {
      const response = await verifyTokenRequest();
      console.log(response);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR', payload: error });
    }
  };

  return (
    <AuthContext.Provider value={{ state, login, logout, verifyToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
