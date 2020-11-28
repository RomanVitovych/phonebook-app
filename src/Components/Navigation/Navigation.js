import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav>
            <ul className={styles.navigationList} >
            <NavLink
            exact
            to='/'
            className={styles.link}
            activeClassName={styles.activeLink} >
                Home
            </NavLink>
            <NavLink
            exact
            to='/register'
            className={styles.link}
            activeClassName={styles.activeLink} >
                Register
            </NavLink>
            <NavLink
            exact
            to='/login'
            className={styles.link}
            activeClassName={styles.activeLink} >
                Login
            </NavLink>
            <NavLink
            exact
            to='/contacts'
            className={styles.link}
            activeClassName={styles.activeLink} >
                Contacts
            </NavLink>
            </ul>
        </nav>
    );
};

export default Navigation;