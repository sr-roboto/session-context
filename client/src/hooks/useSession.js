export const useSession = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        user: payload,
        loading: false,
        isAuthenticated: true,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'LOGOUT_SUCCESS':
      return {
        user: null,
        loading: false,
        isAuthenticated: false,
      };
    case 'LOGOUT_ERROR':
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
