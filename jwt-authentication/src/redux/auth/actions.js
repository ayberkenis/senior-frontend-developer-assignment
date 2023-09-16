// src/redux/auth/actions.js
export const loginUser = (user) => {
  return {
    type: "LOGIN_USER",
    payload: user,
    token: user.token,
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT_USER",
  };
};

export const registerUser = (user) => {
  return {
    type: "REGISTER_USER",
    payload: user,
  };
};

export const storeToken = (token) => {
  return {
    type: "STORE_TOKEN",
    payload: token,
  };
};
