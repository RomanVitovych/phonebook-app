import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contactsActions';

const handleAddContact = (state, action) => {
    return [...state, action.payload]
};
const handleRemoveContact = (state, action) => {
    return state.filter(contact => contact.id !== action.payload)
};

const contactsBook = createReducer([], {
    [contactsActions.fetchContactsSuccess]: (_, action) => (action.payload),
    [contactsActions.addContactSuccess]: handleAddContact,
    [contactsActions.removeContactSuccess]: handleRemoveContact,
});

const alert = createReducer(false, {
    [contactsActions.alertStatusSuccess]: (state, _) => !state,
});

const filter = createReducer('', {
    [contactsActions.changeFilter]: (_, action) => action.payload,
});

const nextName = createReducer('', {
    [contactsActions.changeName]: (_, action) => action.payload,
});

const nextNumber = createReducer('', {
    [contactsActions.changeNumber]: (_, action) => action.payload,
});

const loading = createReducer(false, {
    [contactsActions.addContactRequest]: () => true,
    [contactsActions.addContactSuccess]: () => false,
    [contactsActions.addContactError]: () => false,
    [contactsActions.fetchContactsRequest]: () => true,
    [contactsActions.fetchContactsSuccess]: () => false,
    [contactsActions.fetchContactsError]: () => false,
    [contactsActions.alertStatusRequest]: () => true,
    [contactsActions.alertStatusSuccess]: () => false,
    [contactsActions.alertStatusError]: () => false,
    [contactsActions.removeContactRequest]: () => true,
    [contactsActions.removeContactSuccess]: () => false,
    [contactsActions.removeContactError]: () => false,
});

export default combineReducers({
    contactsBook,
    alert,
    filter,
    nextName,
    nextNumber,
    loading
});