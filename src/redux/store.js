import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './Contacts/contactsReducer';
import authReducer from './Auth/authReducer';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
};

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        auth: persistReducer(authPersistConfig, authReducer)
    },
});

export const persistor = persistStore(store);