import React from 'react';
import PropTypes from 'prop-types';

import styles from './PageTitle.module.css'

const PageTitle = (text) => {
    return (
        <p className={styles.text} >{text}</p>
    );
};

export default PageTitle;

PageTitle.propTypes = {
    text: PropTypes.string.isRequired
};

