import React from 'react';
import { connect } from 'react-redux';
import { AuthOperations, AuthSelectors } from '../../redux/Auth';

const UserMenu = ({
    avatar = 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpq',
    name,
    onLogout
}) => {
    return (
        <div>
            <img src={avatar} alt='no image' width='32' />
            <span>Welcome {name}</span>
            <button type='button' onClick={onLogout} >LogOut</button>
        </div>
    );
};

const mapStateToProps = state => ({
    name: AuthSelectors.getUserName(state),
    avatar: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpq',
});

const mapDispatchToProps = {
    onLogout: AuthOperations.logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);