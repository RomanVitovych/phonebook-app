import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/Contacts/contactsActions';
import contactsSelectors from '../../redux/Contacts/contactsSelectors';
import styles from './Filter.module.css';

const Filter = ({value, onChangeFilter}) => {
    return (
        <div className={styles.filterForm} >
            <p className={styles.filterTitle} >
                Find contacts by name
            </p>
            <input
            className={styles.filterInput}
            placeholder="Please, enter the contact's name"
            type='text'
            value={value}
            onChange={e => onChangeFilter(e.target.value)} />
        </div>
    );
};

const mapStateToProps = state => ({
    value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
    onChangeFilter: contactsActions.changeFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);