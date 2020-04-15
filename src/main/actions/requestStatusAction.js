import { requestStatusConstant } from '../utils/constants/requestStatusConstant';

export const requestStatusAction = {
    success,
    error,
    clear
};

function success(message) {
    return { type: requestStatusConstant.SUCCESS, message };
}

function error(message) {
    return { type: requestStatusConstant.ERROR, message };
}

function clear() {
    return { type: requestStatusConstant.CLEAR };
}
