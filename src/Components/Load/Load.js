import React from 'react';
import Loader from 'react-loader-spinner';

const Load = () => {
    return (
        <>
            <Loader 
            type="TailSpin" 
            color="#00BFFF" 
            height={80} 
            width={80} />
        </>
    );
};

export default Load;