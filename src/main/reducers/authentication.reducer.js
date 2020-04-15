import { userActivationsConstants } from '../utils/constants/userActivationsConstants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userActivationsConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userActivationsConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userActivationsConstants.LOGIN_FAILURE:
      return {};
    case userActivationsConstants.LOGOUT:
      return {};
    default:
      return state
  }
}
