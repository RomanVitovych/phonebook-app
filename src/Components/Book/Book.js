import React from 'react';
import Load from '../Load/Load';
import AlertMessage from '../AlertMessage/AlertMessage';
import ContactsForm from '../ContactsForm/ContactsForm';
import Filter from '../Filter/Filter';
import ContactsList from '../ContactsList/ContactsList';

const Book = ({isLoadingContacts}) => {
    return (
        <>
            {isLoadingContacts && <Load />}
            <AlertMessage />
            <ContactsForm />
            <Filter />
            <ContactsList />
        </>
    );
};

export default Book;