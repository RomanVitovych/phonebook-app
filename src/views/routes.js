import { lazy } from 'react';

export default [
    {
        path: '/',
        label: 'Home',
        exact: true,
        component: lazy(() => import('./HomeView/HomeView')),
    },
    {
        path: '/register',
        label: 'Register',
        exact: true,
        component: lazy(() => import('./RegisterView/RegisterView')),
    },
    {
        path: '/login',
        label: 'Login',
        exact: true,
        component: lazy(() => import('./LoginView/LoginView')),
    },
    {
        path: '/contacts',
        label: 'Contacts',
        exact: true,
        component: lazy(() => import('./ContactsView/ContactsView')),
    },
];