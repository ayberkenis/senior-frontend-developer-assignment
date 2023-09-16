// src/redux/auth/reducers.js
const initialState = {
    user: null, // This will store user information after login
    isAuthenticated: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
        };
      case 'LOGOUT_USER':
        return {
          ...state,
          user: null,
          isAuthenticated: false,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  