import { requestStatusConstant } from '../utils/constants/requestStatusConstant';

export function alert(state = {}, action) {
  switch (action.type) {
    case requestStatusConstant.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case requestStatusConstant.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case requestStatusConstant.CLEAR:
      return {};
    default:
      return state
  }
}
