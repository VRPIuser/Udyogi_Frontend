// actions.js

export const LOGIN = "LOGINID";

export const LOGOUT = "LOGOUT";

export const loginWithUserId = (userId, role) => ({
  type: LOGIN,
  payload: {
    userId,
    role,
  },
});

export const logout = () => ({
  type: LOGOUT,
});
