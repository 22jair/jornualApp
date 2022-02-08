import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName
      }
    case types.logout:
      return {}
    default:
      return state;
  }
}

// switch (action.type) {
//   case 'LOGIN':
//     return {
//       ...state,
//       isLoggedIn: true,
//       userId: action.userId,
//       error: null
//     };
//   case 'LOGOUT':
//     return {
//       ...state,
//       isLoggedIn: false,
//       userId: null,
//       error: null
//     };
//   case 'SIGNUP':
//     return {
//       ...state,
//       isLoggedIn: true,
//       userId: action.userId,
//       error: null
//     };
//   case 'ERROR':
//     return {
//       ...state,
//       error: action.error
//     };
//   default:
//     return state;
// }