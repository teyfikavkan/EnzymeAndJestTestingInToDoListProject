import { userActivationsConstants } from '../utils/constants/userActivationsConstants';

export function registration(state = {}, action) {
  switch (action.type) {
    case userActivationsConstants.REGISTER_REQUEST:
      return { registering: true };
    case userActivationsConstants.REGISTER_SUCCESS:
      return {};
    case userActivationsConstants.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}
