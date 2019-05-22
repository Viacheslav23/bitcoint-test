import { LOGIN } from "./actionType";

export const login = name => {
  return {
    type: LOGIN,
    data: name
  };
};
