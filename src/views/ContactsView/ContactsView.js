import React, { Component } from 'react';
import Load from '../../Components/Load/Load';
import { connect } from 'react-redux';
import AlertMessage from '../../Components/AlertMessage/AlertMessage';
import ContactsForm from '../../Components/ContactsForm/ContactsForm';
import Filter from '../../Components/Filter/Filter';
import ContactsList from '../../Components/ContactsList/ContactsList';
import { contactsOperations, contactsSelectors } from '../../redux/Contacts';

class ContactsView extends Component {
    componentDidMount() {
        this.props.onFetchContacts()
    };
    
    render() {
        return (
            <div>
                {isLoadingContacts && <Load />}
                <AlertMessage />
                <ContactsForm />    
                <Filter />
                <ContactsList />
            </div>
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