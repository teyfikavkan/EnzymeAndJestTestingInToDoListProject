import { userActivationsConstants } from '../utils/constants/userActivationsConstants';
import { userService } from '../services/services';
import { requestStatusAction } from './requestStatusAction';

export  function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(requestStatusAction.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userActivationsConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userActivationsConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userActivationsConstants.LOGIN_FAILURE, error } }
}

export function logout() {
    userService.logout();
    return { type: userActivationsConstants.LOGOUT };
}

export function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    dispatch(requestStatusAction.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(requestStatusAction.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userActivationsConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userActivationsConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userActivationsConstants.REGISTER_FAILURE, error } }
}
