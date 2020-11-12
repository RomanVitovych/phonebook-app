import axios from 'axios';
import AuthActions from './AuthActions';

axios.defaults.baseURL = 'https://lpj-tasker.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset(token) {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = credentials => dispatch => {
    dispatch(AuthActions.registerRequest());

    axios 
        .post('users/signup', credentials)
        .then(response => {
            token.set(response.data.token);
            dispatch(AuthActions.registerSuccess(response.data))
        })
        .catch(error => dispatch(AuthActions.registerError(error)));
};

const logIn = credentials => dispatch => {
    dispatch(AuthActions.loginRequests());

    axios 
        .post('users/login', credentials)
        .then(response => {
            token.set(response.data.token);
            dispatch(AuthActions.loginSuccess(response.data))
        })
        .catch(error => dispatch(AuthActions.loginError(error)));
};

const logOut = () => dispatch => {
    dispatch(AuthActions.logoutRequest());

    axios 
        .post('users/logout')
        .then(() => {
            token.unset();
            dispatch(AuthActions.logoutSuccess())
        })
        .catch(error => dispatch(AuthActions.logoutError(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
    const {auth: {token: persistedToken},} = getState();
    if(!persistedToken) {
        return;
    };
    token.set(persistedToken);
    dispatch(AuthActions.getCurrentUserRequest());

    axios 
        .get('users/current')
        .then(({data}) => dispatch(AuthActions.getCurrentUserSuccess(data)))
        .catch(error => dispatch(AuthActions.getCurrentUserError(error)));
};

export default {
    register,
    logIn,
    logOut,
    getCurrentUser
};