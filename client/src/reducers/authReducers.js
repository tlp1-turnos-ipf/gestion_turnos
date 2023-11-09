import { typeAuth } from "../types/type";

export const authReducer = (auth, action) => {
  switch (action.typeAuth) {
    case typeAuth.LOGIN:
      return {
        ...action.payload,
        isLogged: true,
      };
    case typeAuth.LOGOUT:
      return {
        isLogged: false,
      };
    default:
      return auth;
  }
};
