// reducer.js

import { LOGIN, LOGOUT } from "./LoginStateActions";
// src/store/LoginState/LoginStateSlice.js

const initialUserState = {
  isUdyogiUserLoggedIn:
    typeof window !== "undefined" &&
    localStorage.getItem("isUdyogiUserLoggedIn") === "true",
  userId: typeof window !== "undefined" ? localStorage.getItem("userId") : null,
  role: typeof window !== "undefined" ? localStorage.getItem("role") : null,
};

const UserStateReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case LOGIN:
      if (typeof window !== "undefined") {
        localStorage.setItem("isUdyogiUserLoggedIn", "true");
        localStorage.setItem("userId", action.payload.userId);
        localStorage.setItem("role", action.payload.role);
      }
      return {
        ...state,
        isUdyogiUserLoggedIn: true,
        userId: action.payload.userId,
        role: action.payload.role,
      };
    case LOGOUT:
      if (typeof window !== "undefined") {
        localStorage.setItem("isUdyogiUserLoggedIn", "false");
        localStorage.removeItem("userId");
        localStorage.removeItem("role");
      }
      return {
        ...state,
        isUdyogiUserLoggedIn: false,
        userId: null,
        role: null,
      };
    default:
      return state;
  }
};

export { UserStateReducer };
