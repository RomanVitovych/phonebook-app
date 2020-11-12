import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div>
            <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames={styles}
            unmountOnExit >
                <h2 className={styles.mainTitle} >
                    Phonebook
                </h2>
            </CSSTransition>
        </div>
    );
};

export default Header;