import { AUTH_SUCCESS, LOGOUT } from "./actionTypes";
const initState = {
  isAuth: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      if (
        action.payload.email === "richa" &&
        action.payload.password === "richa"
      ) {
        return {
          ...state,
          isAuth: true
        };
      } else {
        return {
          ...state,
          isAuth: false
        };
        // alert("chjxbhjbsh")
      }
    // break;
    case LOGOUT:
      return {
        ...state,
        isAuth: false
      };
    default:
      return state;
  }
};