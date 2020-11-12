const isAuthenticated = state => state.auth.token;

const getUserName = state => state.auth.name;

export default {
    isAuthenticated,
    getUserName
};