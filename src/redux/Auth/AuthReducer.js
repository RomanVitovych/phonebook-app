import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import AuthActions from './AuthActions';

const initialUserState = {name: null, email: null};

const user = createReducer(initialUserState, {
    [AuthActions.registerSuccess]: (_, { payload }) => payload.user,
    [AuthActions.loginSuccess]: (_, { payload }) => payload.user,
    [AuthActions.logoutSuccess]: () => initialUserState,
    [AuthActions.getCurrentUserSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
    [AuthActions.registerSuccess]: (_, { payload }) => payload.token,
    [AuthActions.loginSuccess]: (_, { payload }) => payload.token,
    [AuthActions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
    [AuthActions.registerSuccess]: (_, { payload }) => payload,
    [AuthActions.loginSuccess]: (_, { payload }) => payload,
    [AuthActions.logoutSuccess]: (_, { payload }) => payload,
    [AuthActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
    user,
    token,
    error
});