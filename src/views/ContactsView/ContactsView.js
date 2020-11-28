import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Load from '../../Components/Load/Load';
// import AlertMessage from '../../Components/AlertMessage/AlertMessage';
// import ContactsForm from '../../Components/ContactsForm/ContactsForm';
// import Filter from '../../Components/Filter/Filter';
// import ContactsList from '../../Components/ContactsList/ContactsList';
import BookContainer from '../../Components/Book/BookContainer';

import { contactsOperations, contactsSelectors } from '../../redux/Contacts';

class ContactsView extends Component {
    componentDidMount() {
        this.props.onFetchContacts()
    };
    
    render() {
        return (
            <>
                {/* {this.isLoadingContacts && <Load />}
                <AlertMessage />
                <ContactsForm />    
                <Filter />
                <ContactsList /> */}
                <BookContainer />
            </>
        );
    };
};

const mapStateToProps = state => ({
    isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
    onFetchContacts: contactsOperations.fetchContacts
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);