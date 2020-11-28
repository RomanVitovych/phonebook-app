import axios from 'axios';
import token from '../../utils/token';
import authActions from './authActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const register = credentials => dispatch => {
    dispatch(authActions.registerRequest());

    axios 
        .post('users/signup', credentials)
        .then(response => {
            token.set(response.data.token);
            dispatch(authActions.registerSuccess(response.data))
        })
        .catch(error => dispatch(authActions.registerError(error)));
};

const logIn = credentials => dispatch => {
    dispatch(authActions.loginRequests());

    axios 
        .post('users/login', credentials)
        .then(response => {
            token.set(response.data.token);
            dispatch(authActions.loginSuccess(response.data))
        })
        .catch(error => dispatch(authActions.loginError(error)));
};

const logOut = () => dispatch => {
    dispatch(authActions.logoutRequest());

    axios 
        .post('users/logout')
        .then(() => {
            token.unset();
            dispatch(authActions.logoutSuccess())
        })
        .catch(error => dispatch(authActions.logoutError(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
    const {auth: {token: persistedToken},} = getState();
    if(!persistedToken) {
        return;
    };
    token.set(persistedToken);
    dispatch(authActions.getCurrentUserRequest());

    axios 
        .get('users/current')
        .then(({data}) => dispatch(authActions.getCurrentUserSuccess(data)))
        .catch(error => dispatch(authActions.getCurrentUserError(error)));
};

export default {
    register,
    logIn,
    logOut,
    getCurrentUser
};